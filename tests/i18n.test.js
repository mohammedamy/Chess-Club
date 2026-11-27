import { Chess } from 'chess.js';
import { afterEach, describe, expect, it } from 'vitest';
import {
  ENDGAMES,
  MIDDLEGAME_LESSONS,
  OPENINGS,
  PUZZLES,
  QUIZZES,
  TRAPS,
} from '../src/data/library.js';
import {
  ARENA_PRESETS,
  ENGINE_PROFILE_LIST,
  computeEvalDisagreement,
  formatEngineThought,
  getEngineProfile,
} from '../src/domain/engine-arena.js';
import { parseGameText } from '../src/domain/pgn-import.js';
import { evaluatePuzzleMove, filterPuzzles } from '../src/domain/puzzle-engine.js';
import { describeSuggestedMove, gradePlayedMove } from '../src/domain/stockfish-service.js';
import {
  UI_STRINGS,
  applyLanguageDom,
  getLang,
  isolateChessTokens,
  localizeEndgame,
  localizeEngineProfile,
  localizeArenaPreset,
  localizeMiddlegame,
  localizeOpening,
  localizePuzzle,
  localizeQuiz,
  localizeTrap,
  normalizeSearchText,
  setLang,
  tCategory,
  tDifficulty,
  toggleLang,
} from '../src/i18n/ui.js';

const HAS_AR = /[\u0600-\u06FF]/;

describe('i18n dictionary parity, localization projections, and RTL bidi safety', () => {
  afterEach(() => {
    setLang('en');
  });

  it('maintains 100% key parity and non-empty Arabic strings between UI_STRINGS.en and UI_STRINGS.ar', () => {
    const enKeys = Object.keys(UI_STRINGS.en).sort();
    const arKeys = Object.keys(UI_STRINGS.ar).sort();
    expect(arKeys).toEqual(enKeys);

    const NON_AR_KEYS = new Set([
      'langSwitchText',
      'langSwitchTitle',
      'schoolEmailPlaceholder',
      'pgnExtLabel',
      'colRank',
    ]);
    for (const key of enKeys) {
      expect(typeof UI_STRINGS.ar[key]).toBe('string');
      expect(UI_STRINGS.ar[key].trim().length).toBeGreaterThan(0);
      if (!NON_AR_KEYS.has(key)) {
        expect(HAS_AR.test(UI_STRINGS.ar[key])).toBe(true);
      }
    }
  });

  it('switches language state and updates HTML dir, lang, and title cleanly', () => {
    const mockRoot = { lang: 'en', dir: 'ltr' };
    const mockBody = { dataset: {} };
    const mockMeta = { content: '', setAttribute(k, v) { if (k === 'content') this.content = v; } };
    const prevDoc = globalThis.document;
    globalThis.document = {
      documentElement: mockRoot,
      body: mockBody,
      title: '',
      querySelector: () => mockMeta,
    };

    try {
      setLang('ar');
      applyLanguageDom();
      expect(getLang()).toBe('ar');
      expect(mockRoot.lang).toBe('ar');
      expect(mockRoot.dir).toBe('rtl');
      expect(mockBody.dataset.lang).toBe('ar');
      expect(globalThis.document.title).toContain('مدرسة بوابة المعرفة العالمية');

      toggleLang();
      expect(getLang()).toBe('en');
      expect(mockRoot.lang).toBe('en');
      expect(mockRoot.dir).toBe('ltr');
    } finally {
      globalThis.document = prevDoc;
    }
  });

  it('projects 100% of curriculum studies, puzzles, quizzes, engines (18), and presets (12) into Arabic without altering SAN/FEN logic', () => {
    for (const o of OPENINGS) {
      const ar = localizeOpening(o, 'ar');
      expect(HAS_AR.test(ar.name)).toBe(true);
      expect(ar.line.map((s) => s.move)).toEqual(o.line.map((s) => s.move));
      ar.line.forEach((s) => expect(HAS_AR.test(s.text)).toBe(true));
    }

    for (const tr of TRAPS) {
      const ar = localizeTrap(tr, 'ar');
      expect(HAS_AR.test(ar.name)).toBe(true);
      expect(HAS_AR.test(ar.avoid)).toBe(true);
      expect(ar.line.map((s) => s.move)).toEqual(tr.line.map((s) => s.move));
    }

    for (const m of MIDDLEGAME_LESSONS) {
      const ar = localizeMiddlegame(m, 'ar');
      expect(HAS_AR.test(ar.name)).toBe(true);
      expect(ar.line.map((s) => s.move)).toEqual(m.line.map((s) => s.move));
    }

    for (const eg of ENDGAMES) {
      const ar = localizeEndgame(eg, 'ar');
      expect(HAS_AR.test(ar.name)).toBe(true);
      expect(HAS_AR.test(ar.goal)).toBe(true);
      expect(ar.fen).toBe(eg.fen);
      expect(ar.technique).toHaveLength(eg.technique.length);
    }

    for (const p of PUZZLES) {
      const ar = localizePuzzle(p, 'ar');
      expect(HAS_AR.test(ar.theme)).toBe(true);
      expect(HAS_AR.test(ar.prompt)).toBe(true);
      expect(HAS_AR.test(ar.explanation)).toBe(true);
      expect(ar.fen).toBe(p.fen);
      expect(ar.moves).toEqual(p.moves);
    }

    for (const q of QUIZZES) {
      const ar = localizeQuiz(q, 'ar');
      expect(HAS_AR.test(ar.theme)).toBe(true);
      expect(HAS_AR.test(ar.question)).toBe(true);
      expect(HAS_AR.test(ar.explanation)).toBe(true);
      expect(ar.options).toHaveLength(4);
      expect(ar.correctIndex).toBe(q.correctIndex);
    }

    expect(ENGINE_PROFILE_LIST).toHaveLength(18);
    for (const prof of ENGINE_PROFILE_LIST) {
      const arProf = localizeEngineProfile(prof, 'ar');
      expect(HAS_AR.test(arProf.name)).toBe(true);
      expect(HAS_AR.test(arProf.architecture)).toBe(true);
      expect(HAS_AR.test(arProf.styleTag)).toBe(true);
      expect(HAS_AR.test(arProf.description)).toBe(true);
      for (const tier of arProf.tiers) {
        expect(HAS_AR.test(tier.label)).toBe(true);
      }
    }

    expect(ARENA_PRESETS).toHaveLength(12);
    for (const preset of ARENA_PRESETS) {
      const arPreset = localizeArenaPreset(preset, 'ar');
      expect(HAS_AR.test(arPreset.label)).toBe(true);
    }
  });

  it('isolates embedded chess notation and signed scores in LRI..PDI markers safely', () => {
    const raw = 'النقلة 3...fxe5?? تسمح بكش Qh5+ أو التبييت O-O-O بتقييم −0.80.';
    const iso = isolateChessTokens(raw, 'ar');
    expect(iso).toContain('\u20663...fxe5??\u2069');
    expect(iso).toContain('\u2066Qh5+\u2069');
    expect(iso).toContain('\u2066O-O-O\u2069');
    expect(iso).toContain('\u2066−0.80\u2069');
    // Calling isolateChessTokens twice is idempotent
    expect(isolateChessTokens(iso, 'ar')).toBe(iso);
    // English mode leaves text untouched
    expect(isolateChessTokens('1. e4 e5', 'en')).toBe('1. e4 e5');
  });

  it('filters puzzles with Arabic search normalization across Alef, Teh-Marbuta, and Yeh variants', () => {
    expect(normalizeSearchText('الشوكَةُ الذهبيّة')).toBe('الشوكه الذهبيه');
    const matches = filterPuzzles(PUZZLES, {
      query: 'شوكه',
      getSearchText: (p) => {
        const ar = localizePuzzle(p, 'ar');
        return `${ar.theme} ${ar.prompt} ${tCategory(p.category, 'ar')} ${tDifficulty(p.difficulty, 'ar')}`;
      },
    });
    expect(matches.length).toBeGreaterThan(5);
  });

  it('generates Arabic analysis, move grading, arena thoughts, puzzle hints, and import errors when lang="ar"', () => {
    const startFen = new Chess().fen();
    const reasonAr = describeSuggestedMove(startFen, 'e2e4', 'e4', ['e4', 'e5'], Chess, null, 'ar');
    expect(HAS_AR.test(reasonAr)).toBe(true);

    const gradeAr = gradePlayedMove({
      prevWhiteCp: 40,
      nextWhiteCp: -280,
      moverColor: 'w',
      playedUci: 'f2f3',
      bestUci: 'e2e4',
      bestSan: 'e4',
      lang: 'ar',
    });
    expect(gradeAr.grade).toBe('blunder');
    expect(HAS_AR.test(gradeAr.label)).toBe(true);
    expect(HAS_AR.test(gradeAr.summary)).toBe(true);

    const sampleSnap = {
      depth: 12,
      lines: [{ whiteCp: 45, whiteMate: null, bestMoveSan: 'e4', pvSan: ['e4', 'e5', 'Nf3'], reason: 'Strikes the center' }],
      breakdown: { material: 0, pst: 15, mobility: 28, structure: 0, kingSafety: 0, center: 22 },
    };
    const thoughtAr = formatEngineThought(sampleSnap, {
      profile: getEngineProfile('athena-hce'),
      chosenSan: 'e4',
      lang: 'ar',
    });
    expect(HAS_AR.test(thoughtAr)).toBe(true);
    expect(thoughtAr).toContain('e4');

    const cmpAr = computeEvalDisagreement(sampleSnap, { whiteCp: -60, lines: [{ whiteCp: -60 }] }, 'ar');
    expect(HAS_AR.test(cmpAr.agreementLabel)).toBe(true);

    const fen = '3r2k1/5pp1/7p/3q4/8/7P/5PP1/3QR1K1 w - - 0 1';
    const step = evaluatePuzzleMove({
      fen,
      solutionMoves: ['Re8+', 'Rxe8', 'Qxd5'],
      plyIndex: 0,
      playedMoveObj: { from: 'e1', to: 'e8' },
      ChessCtor: Chess,
      lang: 'ar',
    });
    expect(step.correct).toBe(true);
    expect(HAS_AR.test(step.statusMessage)).toBe(true);

    const badImport = parseGameText('not-a-move-at-all', Chess, { lang: 'ar' });
    expect(badImport.ok).toBe(false);
    expect(HAS_AR.test(badImport.error)).toBe(true);
  });
});
