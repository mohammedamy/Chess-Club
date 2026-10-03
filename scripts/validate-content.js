import { readFile } from 'node:fs/promises';
import { Chess } from 'chess.js';

const source = await readFile(new URL('../src/legacy-app.js', import.meta.url), 'utf8');

function extractArray(name) {
  const declaration = `const ${name} = `;
  const declarationIndex = source.indexOf(declaration);
  if (declarationIndex === -1) throw new Error(`Missing ${name} collection.`);

  const start = source.indexOf('[', declarationIndex + declaration.length);
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === quote) quote = null;
      continue;
    }
    if (character === "'" || character === '"' || character === '`') {
      quote = character;
      continue;
    }
    if (character === '[') depth += 1;
    if (character === ']') depth -= 1;
    if (depth === 0) return Function(`return (${source.slice(start, index + 1)});`)();
  }

  throw new Error(`Unterminated ${name} collection.`);
}

function applyLine(name, line) {
  const game = new Chess();
  for (const step of line) {
    const move = game.move(step.move);
    if (!move) throw new Error(`${name}: illegal move ${step.move}.`);
  }
}

const openings = extractArray('OPENINGS');
const traps = extractArray('TRAPS');
const tactics = extractArray('TACTICS');
const endgames = extractArray('ENDGAMES');

openings.forEach((opening) => applyLine(opening.name, opening.line));
traps.forEach((trap) => applyLine(trap.name, trap.line));

for (const puzzle of tactics) {
  const game = new Chess(puzzle.fen);
  const legalMoves = game.moves();
  for (const expectedMove of puzzle.solution ?? []) {
    const normalized = expectedMove.replace(/[+#]/g, '');
    const isLegal = legalMoves.some(
      (legalMove) => legalMove.replace(/[+#]/g, '') === normalized,
    );
    if (!isLegal) {
      throw new Error(`${puzzle.theme}: illegal solution move ${expectedMove}.`);
    }
  }
}

for (const endgame of endgames) new Chess(endgame.fen);

console.log(
  `Validated ${openings.length} openings, ${traps.length} traps, ${tactics.length} tactics, and ${endgames.length} endgames.`,
);
