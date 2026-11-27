import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { PIECE_STYLES, getPieceSvg, getPieceSvgMap } from '../src/ui/piece-sets.js';

const ALL_PIECE_CODES = ['K', 'Q', 'R', 'B', 'N', 'P', 'k', 'q', 'r', 'b', 'n', 'p'];

describe('multi-set vector piece geometry & studio customization', () => {
  it('provides 13 distinct piece styles with valid SVG markup for all 12 chess pieces', () => {
    const styleIds = Object.keys(PIECE_STYLES);
    expect(styleIds).toEqual([
      'classic',
      'warm',
      'contrast',
      'neo',
      'merida',
      'imperial',
      'staunton3d',
      'cyber',
      'letter',
      'alpha',
      'bauhaus',
      'crystal',
      'royalWood',
    ]);

    for (const id of styleIds) {
      const map = getPieceSvgMap(id);
      for (const code of ALL_PIECE_CODES) {
        const svg = getPieceSvg(code, id);
        expect(typeof svg).toBe('string');
        expect(svg).toContain('<svg');
        expect(svg).toContain('</svg>');
        expect(map[code]).toBe(svg);
      }
    }

    // Distinct visual sets produce distinct SVG geometries
    expect(getPieceSvg('N', 'neo')).not.toBe(getPieceSvg('N', 'classic'));
    expect(getPieceSvg('q', 'staunton3d')).not.toBe(getPieceSvg('q', 'merida'));
    expect(getPieceSvg('K', 'cyber')).not.toBe(getPieceSvg('K', 'letter'));
    expect(getPieceSvg('Q', 'bauhaus')).not.toBe(getPieceSvg('Q', 'alpha'));
    expect(getPieceSvg('R', 'crystal')).not.toBe(getPieceSvg('R', 'royalWood'));
  });

  it('keeps Stockfish arrows off by default, mounts toggles across views, and exposes 20 boards + 3D studio controls', () => {
    const legacySrc = fs.readFileSync(path.resolve('src/legacy-app.js'), 'utf8');
    expect(legacySrc).toMatch(/showCoachArrows:\s*false/);
    expect((legacySrc.match(/makeArrowsToggleButton\(/g) || []).length).toBeGreaterThanOrEqual(11);
    expect((legacySrc.match(/make3dToggleButton\(/g) || []).length).toBeGreaterThanOrEqual(11);
    expect(legacySrc).toContain('arcticIce');
    expect(legacySrc).toContain('terracotta');
    expect(legacySrc).toContain('stZoomRange');
    expect(legacySrc).toContain('stResetCamBtn');
    expect(legacySrc).toContain('stCustAccent');
    const widgetsSrc = fs.readFileSync(path.resolve('src/ui/stockfish-widgets.js'), 'utf8');
    expect(widgetsSrc).toMatch(/showArrows\s*=\s*false/);
  });
});
