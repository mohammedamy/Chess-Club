import { Chess } from 'chess.js';
import { describe, expect, it } from 'vitest';
import {
  PERSONALITY_WEIGHTS,
  evaluateClassicalBreakdown,
  searchClassicalPosition,
} from '../src/domain/classical-engine.js';
import {
  ARENA_PRESETS,
  ENGINE_PROFILES,
  computeEvalDisagreement,
  createArenaEngine,
  formatEngineThought,
  getEngineProfile,
  getEngineTierMeta,
} from '../src/domain/engine-arena.js';
import { isStockfishSafeFen } from '../src/domain/stockfish-service.js';

describe('classical-engine search and evaluation', () => {
  it('defines distinct weights across balanced, aggressive, and positional personalities', () => {
    expect(PERSONALITY_WEIGHTS.balanced.kingSafety).toBe(1.0);
    expect(PERSONALITY_WEIGHTS.aggressive.kingSafety).toBeGreaterThan(PERSONALITY_WEIGHTS.balanced.kingSafety);
    expect(PERSONALITY_WEIGHTS.aggressive.mobility).toBeGreaterThan(PERSONALITY_WEIGHTS.positional.mobility);
    expect(PERSONALITY_WEIGHTS.positional.structure).toBeGreaterThan(PERSONALITY_WEIGHTS.aggressive.structure);

    const sampleFen = 'r1bq1rk1/pppn1ppp/4p3/3pP3/1b1P4/2NB1N2/PPP2PPP/R1BQ1RK1 w - - 0 1';
    const bBal = evaluateClassicalBreakdown(sampleFen, 'balanced');
    const bAgg = evaluateClassicalBreakdown(sampleFen, 'aggressive');
    const bPos = evaluateClassicalBreakdown(sampleFen, 'positional');

    expect(bBal).toHaveProperty('whiteCp');
    expect(Math.abs(bAgg.kingSafety)).toBeGreaterThanOrEqual(Math.abs(bBal.kingSafety));
    expect(Math.abs(bPos.structure)).toBeGreaterThanOrEqual(Math.abs(bAgg.structure));
  });

  it('finds forced mate-in-1 and winning material captures with MultiPV=3 valid SAN', () => {
    const mateFen = '6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1';
    const mateRes = searchClassicalPosition(mateFen, {
      personality: 'balanced',
      depth: 3,
      multiPv: 3,
      maxTimeMs: 600,
    });
    expect(mateRes.chosenSan).toBe('Rd8#');
    expect(mateRes.chosenUci).toBe('d1d8');
    expect(mateRes.snapshot.whiteMate).toBe(1);
    expect(mateRes.snapshot.lines.length).toBeGreaterThanOrEqual(1);

    const captureFen = '3q2k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1';
    const capRes = searchClassicalPosition(captureFen, {
      personality: 'aggressive',
      depth: 3,
      multiPv: 3,
      maxTimeMs: 600,
    });
    expect(capRes.chosenUci).toBe('d1d8');
    expect(capRes.snapshot.lines).toHaveLength(3);
    for (const line of capRes.snapshot.lines) {
      expect(line.pvSan.length).toBeGreaterThanOrEqual(1);
      expect(line.reason.length).toBeGreaterThan(0);
    }
  });

  it('avoids immediate repetition draws when ahead in material via historyFens', () => {
    // White has a Rook + Queen against bare King/Rook and could repeat Kh2/Kg1
    const fen = '6k1/8/6K1/8/8/8/5Q2/7r b - - 0 1';
    // Side with extra Queen: flip to White winning comfortably
    const winningFen = '6k1/8/8/8/8/5Q2/6PP/7K w - - 0 1';
    const probe = new Chess(winningFen);
    probe.move('Kh1g1'.slice(0, 2) === 'Kh' ? 'Kg1' : 'Kg1');
    const repeatedPrefix = probe.fen().split(' ').slice(0, 4).join(' ');

    const res = searchClassicalPosition(winningFen, {
      personality: 'positional',
      depth: 3,
      multiPv: 3,
      historyFens: [repeatedPrefix],
      maxTimeMs: 600,
    });
    expect(res.chosenUci).not.toBe('h1g1');
  });
});

describe('engine-arena registry, multi-ply clash, and commentary', () => {
  it('validates all static ARENA_PRESETS as Stockfish-safe FENs', () => {
    expect(Object.keys(ENGINE_PROFILES)).toEqual([
      'sf19-nnue',
      'athena-hce',
      'tal-hce',
      'capablanca-hce',
    ]);
    for (const preset of ARENA_PRESETS) {
      if (preset.fen === 'chess960') continue;
      expect(isStockfishSafeFen(preset.fen, Chess)).toBe(true);
    }
  });

  it('plays a multi-ply clash between two distinct classical engines with readable thoughts and eval deltas', async () => {
    const white = createArenaEngine('athena-hce');
    const black = createArenaEngine('tal-hce');
    const wProfile = getEngineProfile('athena-hce');
    const bProfile = getEngineProfile('tal-hce');
    const wTier = getEngineTierMeta('athena-hce', 1);
    const bTier = getEngineTierMeta('tal-hce', 1);

    const game = new Chess();
    const historyFens = [game.fen().split(' ').slice(0, 4).join(' ')];
    let wSnap = null;
    let bSnap = null;

    for (let ply = 0; ply < 4; ply += 1) {
      const isWhite = game.turn() === 'w';
      const engine = isWhite ? white : black;
      const profile = isWhite ? wProfile : bProfile;
      const tierMeta = isWhite ? wTier : bTier;

      const res = await engine.thinkAndMove(game.fen(), {
        level: tierMeta.value,
        multiPv: 3,
        historyFens,
      });

      expect(res).toBeTruthy();
      expect(res.chosenUci).toMatch(/^[a-h][1-8][a-h][1-8][qrbn]?$/);
      expect(res.snapshot.lines.length).toBeGreaterThanOrEqual(1);
      expect(res.snapshot.breakdown).toBeTruthy();

      const moveObj = game.move({
        from: res.chosenUci.slice(0, 2),
        to: res.chosenUci.slice(2, 4),
        promotion: res.chosenUci.length > 4 ? res.chosenUci.slice(4, 5) : undefined,
      });
      expect(moveObj).toBeTruthy();
      historyFens.push(game.fen().split(' ').slice(0, 4).join(' '));

      const thought = formatEngineThought(res.snapshot, {
        profile,
        tierLabel: tierMeta.label,
        chosenSan: moveObj.san,
        isThinking: false,
      });
      expect(thought).toContain(moveObj.san);
      expect(thought.length).toBeGreaterThan(20);

      if (isWhite) wSnap = res.snapshot;
      else bSnap = res.snapshot;
    }

    const cmp = computeEvalDisagreement(wSnap, bSnap);
    expect(['aligned', 'divergent', 'clash']).toContain(cmp.tone);
    expect(cmp.deltaPawns).not.toBeNull();
    expect(cmp.agreementLabel).toMatch(/Δ/);

    white.dispose();
    black.dispose();
  });
});
