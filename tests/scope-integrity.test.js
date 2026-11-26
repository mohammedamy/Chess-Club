import fs from 'node:fs';
import path from 'node:path';
import { parseSync } from 'rolldown/experimental';
import { describe, expect, it } from 'vitest';

const GLOBALS = new Set([
  'window', 'document', 'localStorage', 'sessionStorage', 'navigator', 'location', 'URL', 'URLSearchParams',
  'Blob', 'File', 'FileReader', 'FormData', 'Headers', 'Request', 'Response', 'fetch', 'AbortController',
  'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'requestAnimationFrame', 'cancelAnimationFrame',
  'console', 'Math', 'Date', 'JSON', 'Object', 'Array', 'Map', 'Set', 'WeakMap', 'WeakSet', 'Promise', 'Number',
  'String', 'Boolean', 'RegExp', 'Error', 'TypeError', 'RangeError', 'Symbol', 'BigInt', 'Int8Array', 'Uint8Array',
  'Uint32Array', 'Int32Array', 'Float32Array', 'Float64Array', 'parseInt', 'parseFloat', 'isNaN', 'isFinite',
  'encodeURIComponent', 'decodeURIComponent', 'encodeURI', 'decodeURI', 'atob', 'btoa', 'structuredClone',
  'HTMLElement', 'HTMLInputElement', 'HTMLSelectElement', 'HTMLTextAreaElement',
  'Element', 'Node', 'Event', 'CustomEvent', 'KeyboardEvent', 'MouseEvent', 'PointerEvent',
  'TextDecoder', 'TextEncoder',
  'AudioContext', 'webkitAudioContext', 'Intl', 'Worker', 'alert', 'confirm', 'prompt', 'performance', 'crypto',
  'Infinity', 'NaN', 'undefined', 'globalThis', 'arguments', 'self', 'postMessage', 'addEventListener',
  'removeEventListener', 'MutationObserver', 'ResizeObserver', 'IntersectionObserver', 'DOMParser', 'XMLSerializer',
]);

function collectPattern(pat, scope) {
  if (!pat) return;
  if (pat.type === 'Identifier') scope.add(pat.name);
  else if (pat.type === 'RestElement') collectPattern(pat.argument, scope);
  else if (pat.type === 'AssignmentPattern') collectPattern(pat.left, scope);
  else if (pat.type === 'ArrayPattern') pat.elements.forEach((e) => collectPattern(e, scope));
  else if (pat.type === 'ObjectPattern') {
    pat.properties.forEach((p) => collectPattern(p.type === 'RestElement' ? p.argument : p.value, scope));
  }
}

function walkPatternDefaults(pat, walk, scopes) {
  if (!pat) return;
  if (pat.type === 'AssignmentPattern') {
    walk(pat.right, scopes);
    walkPatternDefaults(pat.left, walk, scopes);
  } else if (pat.type === 'RestElement') {
    walkPatternDefaults(pat.argument, walk, scopes);
  } else if (pat.type === 'ArrayPattern') {
    pat.elements.forEach((e) => walkPatternDefaults(e, walk, scopes));
  } else if (pat.type === 'ObjectPattern') {
    pat.properties.forEach((p) => {
      if (p.computed) walk(p.key, scopes);
      walkPatternDefaults(p.type === 'RestElement' ? p.argument : p.value, walk, scopes);
    });
  }
}

function hoistDecls(nodes, scope) {
  for (const n of nodes) {
    if (!n) continue;
    if (n.type === 'ExportNamedDeclaration' || n.type === 'ExportDefaultDeclaration') {
      if (n.declaration) hoistDecls([n.declaration], scope);
    } else if ((n.type === 'FunctionDeclaration' || n.type === 'ClassDeclaration') && n.id) {
      scope.add(n.id.name);
    } else if (n.type === 'ImportDeclaration') {
      for (const s of n.specifiers) scope.add(s.local.name);
    } else if (n.type === 'VariableDeclaration') {
      for (const d of n.declarations) collectPattern(d.id, scope);
    }
  }
}

function findUndeclaredIdentifiers(file) {
  const src = fs.readFileSync(file, 'utf8');
  const { program: ast } = parseSync(file, src);
  const lineOf = (pos) => src.slice(0, pos).split('\n').length;
  const undefs = [];

  function walk(node, scopes) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
      node.forEach((c) => walk(c, scopes));
      return;
    }
    const isDefined = (name) => GLOBALS.has(name) || scopes.some((s) => s.has(name));

    if (node.type === 'Program') {
      const s = new Set();
      hoistDecls(node.body, s);
      node.body.forEach((c) => walk(c, [...scopes, s]));
      return;
    }
    if (node.type === 'BlockStatement') {
      const s = new Set();
      hoistDecls(node.body, s);
      node.body.forEach((c) => walk(c, [...scopes, s]));
      return;
    }
    if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') {
      const s = new Set();
      if (node.id && node.type === 'FunctionExpression') s.add(node.id.name);
      node.params.forEach((p) => {
        walkPatternDefaults(p, walk, [...scopes, s]);
        collectPattern(p, s);
      });
      if (node.body.type === 'BlockStatement') {
        hoistDecls(node.body.body, s);
        node.body.body.forEach((c) => walk(c, [...scopes, s]));
      } else {
        walk(node.body, [...scopes, s]);
      }
      return;
    }
    if (node.type === 'ForStatement') {
      const s = new Set();
      if (node.init?.type === 'VariableDeclaration') node.init.declarations.forEach((d) => collectPattern(d.id, s));
      walk(node.init, [...scopes, s]);
      walk(node.test, [...scopes, s]);
      walk(node.update, [...scopes, s]);
      walk(node.body, [...scopes, s]);
      return;
    }
    if (node.type === 'ForOfStatement' || node.type === 'ForInStatement') {
      const s = new Set();
      if (node.left?.type === 'VariableDeclaration') node.left.declarations.forEach((d) => collectPattern(d.id, s));
      walk(node.right, scopes);
      walk(node.body, [...scopes, s]);
      return;
    }
    if (node.type === 'CatchClause') {
      const s = new Set();
      collectPattern(node.param, s);
      walk(node.body, [...scopes, s]);
      return;
    }
    if (node.type === 'VariableDeclarator') {
      walkPatternDefaults(node.id, walk, scopes);
      walk(node.init, scopes);
      return;
    }
    if (node.type === 'MemberExpression') {
      walk(node.object, scopes);
      if (node.computed) walk(node.property, scopes);
      return;
    }
    if (node.type === 'Property' || node.type === 'MethodDefinition') {
      if (node.computed) walk(node.key, scopes);
      walk(node.value, scopes);
      return;
    }
    if (node.type === 'MetaProperty' || node.type === 'ImportDeclaration' || node.type === 'ExportAllDeclaration') return;
    if (node.type === 'ExportNamedDeclaration') {
      walk(node.declaration, scopes);
      return;
    }
    if (node.type === 'LabeledStatement' || node.type === 'BreakStatement' || node.type === 'ContinueStatement') {
      if (node.body) walk(node.body, scopes);
      return;
    }
    if (node.type === 'ClassDeclaration' || node.type === 'ClassExpression') {
      const s = new Set();
      if (node.id) s.add(node.id.name);
      walk(node.superClass, scopes);
      walk(node.body, [...scopes, s]);
      return;
    }
    if (node.type === 'Identifier') {
      if (!isDefined(node.name)) undefs.push(`${lineOf(node.start)}:${node.name}`);
      return;
    }
    for (const [k, v] of Object.entries(node)) {
      if (k === 'start' || k === 'end' || k === 'type') continue;
      if (v && typeof v === 'object') walk(v, scopes);
    }
  }

  walk(ast, []);
  return undefs;
}

function collectJsFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectJsFiles(full));
    else if (entry.name.endsWith('.js') && !entry.name.startsWith('ar-')) out.push(full);
  }
  return out.sort();
}

describe('static lexical scope integrity across src/', () => {
  it('has zero undeclared identifiers across all source modules', () => {
    const files = collectJsFiles(path.resolve('src'));
    const allErrors = {};
    for (const file of files) {
      const undefs = findUndeclaredIdentifiers(file);
      if (undefs.length > 0) {
        allErrors[path.relative(process.cwd(), file)] = undefs;
      }
    }
    expect(allErrors).toEqual({});
  });
});
