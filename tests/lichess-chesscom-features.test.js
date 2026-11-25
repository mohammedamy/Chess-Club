import { Chess } from 'chess.js';
import { describe, expect, it, vi } from 'vitest';
import {
  TIME_CONTROLS,
  createClockState,
  formatClockMs,
  getTimeControl,
  hasMatingMaterial,
  pressClockAfterMove,
  tickClock,
} from '../src/domain/chess-clock.js';
import { computeMaterialBalance } from '../src/domain/material.js';
import {
  buildChessComAnalysisUrl,
  buildLichessAnalysisUrl,
  countBoardPieces,
  fetchChessComUserProfile,
  fetchLichessTablebase,
  fetchLichessUserProfile,
  parseChessComDailyPuzzlePayload,
  parseLichessDailyPuzzlePayload,
  parseOnlineGameUrl,
} from '../src/domain/online-platforms.js';
import {
  detectOpeningFromMoves,
  getBookContinuations,
  isPositionInBook,
  lookupOpeningByFen,
} from '../src/domain/opening-explorer.js';
import { STANDARD_START_FEN, computeGameAccuracySummary } from '../src/domain/pgn-import.js';
import {
  RUSH_MODES,
  createRushSession,
  getRushCurrentPuzzle,
  recordRushSolve,
  recordRushStrike,
  tickRushTimer,
} from '../src/domain/puzzle-rush.js';
import { playChessSound, soundForMove } from '../src/domain/sound.js';
import { detectMaterialSacrifice, gradePlayedMove } from '../src/domain/stockfish-service.js';

describe('material balance calculation', () => {
  it('returns zero advantage and empty capture lists at starting position', () => {
    const res = computeMaterialBalance(STANDARD_START_FEN);
    expect(res.whiteCaptured).toEqual([]);
    expect(res.blackCaptured).toEqual([]);
    expect(res.whitePoints).toBe(39);
    expect(res.blackPoints).toBe(39);
    expect(res.netWhite).toBe(0);
  });

  it('tracks captured pieces in descending piece value order and computes net balance', () => {
    // Black missing queen and one pawn; White missing a knight -> net White = +7 (9 - 3 + 1 = +7)
    const fen = 'rnb1kbnr/pppp1ppp/8/8/8/8/PPPPPPPP/RNBQKB1R w KQkq - 0 1';
    const res = computeMaterialBalance(fen, STANDARD_START_FEN);
    expect(res.whiteCaptured).toEqual(['q', 'p']);
    expect(res.blackCaptured).toEqual(['N']);
    expect(res.netWhite).toBe(7);
  });

  it('handles promoted extra pieces relative to custom baseline without negative captures', () => {
    const baseline = '4k3/8/8/8/8/8/4P3/4K3 w - - 0 1';
    const promoted = '4k3/8/8/8/8/8/8/3QK3 w - - 0 1';
    const res = computeMaterialBalance(promoted, baseline);
    expect(res.netWhite).toBe(9);
    expect(res.blackCaptured).toEqual(['P']);
    expect(res.whiteCaptured).toEqual([]);
  });
});

describe('chess clocks, Berserk, formatting, and timeout mating material', () => {
  it('exposes Lichess/Chess.com time control presets including Unlimited and Berserk halving', () => {
    expect(TIME_CONTROLS.length).toBeGreaterThanOrEqual(8);
    expect(getTimeControl('blitz-3-2').initialMs).toBe(180_000);
    expect(getTimeControl('unknown-id').id).toBe('unlimited');

    const unlim = createClockState('unlimited');
    expect(unlim.enabled).toBe(false);

    const normal = createClockState('blitz-3-2');
    expect(normal.enabled).toBe(true);
    expect(normal.whiteMs).toBe(180_000);
    expect(normal.incWhiteMs).toBe(2_000);

    const berserk = createClockState('blitz-3-2', { berserkSide: 'w' });
    expect(berserk.whiteMs).toBe(90_000);
    expect(berserk.incWhiteMs).toBe(0);
    expect(berserk.blackMs).toBe(180_000);
    expect(berserk.incBlackMs).toBe(2_000);
    expect(berserk.berserkSide).toBe('w');
  });

  it('ticks clock, flags at zero, and adds increment after each move', () => {
    let clk = createClockState('blitz-3-2');
    clk = pressClockAfterMove(clk, 'w'); // White moved -> +2s, Black clock now running
    expect(clk.whiteMs).toBe(182_000);
    expect(clk.activeSide).toBe('b');
    expect(clk.running).toBe(true);

    clk = tickClock(clk, 5_000);
    expect(clk.blackMs).toBe(175_000);
    expect(clk.flaggedSide).toBeNull();

    clk = tickClock(clk, 200_000);
    expect(clk.blackMs).toBe(0);
    expect(clk.flaggedSide).toBe('b');
    expect(clk.running).toBe(false);
  });

  it('formats standard minutes/seconds and sub-20s tenths cleanly', () => {
    expect(formatClockMs(180_000)).toBe('3:00');
    expect(formatClockMs(65_000)).toBe('1:05');
    expect(formatClockMs(19_450)).toBe('0:19.4');
    expect(formatClockMs(800)).toBe('0:00.8');
    expect(formatClockMs(Infinity)).toBe('∞');
  });

  it('detects insufficient mating material on timeout accurately', () => {
    expect(hasMatingMaterial('4k3/8/8/8/8/8/8/4K3 w - - 0 1', 'w', Chess)).toBe(false);
    expect(hasMatingMaterial('4k3/8/8/8/8/8/8/4KN2 w - - 0 1', 'w', Chess)).toBe(false);
    expect(hasMatingMaterial('4k3/8/8/8/8/8/8/4KB2 w - - 0 1', 'w', Chess)).toBe(false);
    expect(hasMatingMaterial('4k3/8/8/8/8/8/4P3/4K3 w - - 0 1', 'w', Chess)).toBe(true);
    expect(hasMatingMaterial('4k3/8/8/8/8/8/8/3RK3 w - - 0 1', 'w', Chess)).toBe(true);
    expect(hasMatingMaterial('4k3/8/8/8/8/8/8/2NBK3 w - - 0 1', 'w', Chess)).toBe(true);
  });
});

describe('synthesized audio helper', () => {
  it('selects appropriate sound kind by move event priority and is SSR/Node-safe', () => {
    const gCheck = new Chess();
    gCheck.move('e4');
    gCheck.move('f6');
    gCheck.move('d4');
    gCheck.move('g5');
    const mateMove = gCheck.move('Qh5#');
    expect(soundForMove(mateMove, gCheck)).toBe('gameEnd');

    const gCastle = new Chess('r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1');
    const castleMove = gCastle.move('O-O');
    expect(soundForMove(castleMove, gCastle)).toBe('castle');

    const gPromo = new Chess('4k3/P7/8/8/8/8/8/4K3 w - - 0 1');
    const promoMove = gPromo.move({ from: 'a7', to: 'a8', promotion: 'q' });
    // Note: a8=Q checks e8 horizontally -> 'check' takes precedence over 'promote'
    expect(soundForMove(promoMove, gPromo)).toBe('check');

    const gPromoQuiet = new Chess('8/P5k1/8/8/8/8/8/4K3 w - - 0 1');
    const promoQuietMove = gPromoQuiet.move({ from: 'a7', to: 'a8', promotion: 'q' });
    expect(soundForMove(promoQuietMove, gPromoQuiet)).toBe('promote');

    const gCap = new Chess('4k3/8/8/3p4/4P3/8/8/4K3 w - - 0 1');
    const capMove = gCap.move('exd5');
    expect(soundForMove(capMove, gCap)).toBe('capture');

    const gQuiet = new Chess();
    const quietMove = gQuiet.move('e4');
    expect(soundForMove(quietMove, gQuiet)).toBe('move');

    expect(playChessSound('move', false)).toBe(false);
    expect(playChessSound('move', true)).toBe(false);
  });
});

describe('offline ECO opening detector and transposition-aware explorer', () => {
  it('detects deepest opening line in both English and Arabic', () => {
    const sicEn = detectOpeningFromMoves(STANDARD_START_FEN, ['e4', 'c5'], 'en');
    expect(sicEn?.eco).toBe('B20');
    expect(sicEn?.name).toContain('Sicilian');

    const sicAr = detectOpeningFromMoves(STANDARD_START_FEN, ['e4', 'c5'], 'ar');
    expect(sicAr?.eco).toBe('B20');
    expect(/[\u0600-\u06FF]/.test(sicAr?.name || '')).toBe(true);

    const ruy = detectOpeningFromMoves(STANDARD_START_FEN, ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'], 'en');
    expect(ruy?.eco).toBe('C60');
    expect(ruy?.name).toContain('Ruy');
  });

  it('recognizes transpositions via position FEN and suggests mainstream book continuations', () => {
    // 1. d4 Nf6 2. c4 c6 and 1. c4 Nf6 2. d4 c6 reach the exact same FEN
    const g1 = new Chess();
    ['d4', 'Nf6', 'c4', 'e6'].forEach((m) => g1.move(m));
    const g2 = new Chess();
    ['c4', 'e6', 'd4', 'Nf6'].forEach((m) => g2.move(m));

    expect(isPositionInBook(g1.fen())).toBe(true);
    expect(lookupOpeningByFen(g1.fen(), 'en')?.name).toEqual(lookupOpeningByFen(g2.fen(), 'en')?.name);

    const rootMoves = getBookContinuations(STANDARD_START_FEN, 'en', 6).map((c) => c.san);
    expect(rootMoves).toContain('e4');
    expect(rootMoves).toContain('d4');
  });
});

describe('Puzzle Rush & Survival mode', () => {
  const samplePool = [
    { id: 'p1', rating: 950, fen: STANDARD_START_FEN, moves: ['e4'] },
    { id: 'p2', rating: 1050, fen: STANDARD_START_FEN, moves: ['d4'] },
    { id: 'p3', rating: 1300, fen: STANDARD_START_FEN, moves: ['c4'] },
    { id: 'p4', rating: 1600, fen: STANDARD_START_FEN, moves: ['Nf3'] },
    { id: 'p5', rating: 1900, fen: STANDARD_START_FEN, moves: ['g3'] },
  ];

  it('orders difficulty bands progressively, awards 5-combo time bonus, and ends at 3 strikes', () => {
    expect(RUSH_MODES.blitz3.durationMs).toBe(180_000);
    let session = createRushSession(samplePool, { mode: 'blitz3', rng: () => 0.5 });
    expect(session.timed).toBe(true);
    expect(getRushCurrentPuzzle(session).rating).toBeLessThanOrEqual(1150);

    // 5 consecutive solves grant comboBonusMs (+3000ms) on 5th solve
    const bigPool = Array.from({ length: 8 }, (_, i) => ({
      id: `q${i}`,
      rating: 1000 + i * 100,
      fen: STANDARD_START_FEN,
      moves: ['e4'],
    }));
    session = createRushSession(bigPool, { mode: 'blitz3', rng: () => 0.1 });
    for (let i = 0; i < 5; i += 1) {
      session = recordRushSolve(session);
    }
    expect(session.score).toBe(5);
    expect(session.combo).toBe(5);
    expect(session.bonusMsEarned).toBe(3_000);
    expect(session.remainingMs).toBe(183_000);

    // 3 strikes end the run with missed puzzles tracked
    session = recordRushStrike(session);
    expect(session.combo).toBe(0);
    session = recordRushStrike(session);
    expect(session.gameOver).toBe(false);
    session = recordRushStrike(session);
    expect(session.strikes).toBe(3);
    expect(session.missedPuzzles).toHaveLength(3);
    expect(session.gameOver).toBe(true);
    expect(session.endReason).toBe('strikes');
  });

  it('handles timed expiration vs untimed Survival mode', () => {
    let timed = createRushSession(samplePool, { mode: 'blitz5' });
    timed = tickRushTimer(timed, 100_000);
    expect(timed.remainingMs).toBe(200_000);
    timed = tickRushTimer(timed, 250_000);
    expect(timed.gameOver).toBe(true);
    expect(timed.endReason).toBe('timeout');

    let survival = createRushSession(samplePool, { mode: 'survival' });
    survival = tickRushTimer(survival, 999_999);
    expect(survival.timed).toBe(false);
    expect(survival.gameOver).toBe(false);
  });
});

describe('online platform integrations (Lichess.org, Chess.com, 7-piece Syzygy)', () => {
  it('builds external analysis deep links and parses Lichess / Chess.com game URLs', () => {
    expect(buildLichessAnalysisUrl(STANDARD_START_FEN)).toContain('https://lichess.org/analysis/standard/');
    expect(buildChessComAnalysisUrl(STANDARD_START_FEN)).toContain('https://www.chess.com/analysis?fen=');

    expect(parseOnlineGameUrl('https://lichess.org/AbCdEfGh/black')).toEqual({
      platform: 'lichess',
      gameId: 'AbCdEfGh',
    });
    expect(parseOnlineGameUrl('https://lichess.org/AbCdEfGhIjKl')).toEqual({
      platform: 'lichess',
      gameId: 'AbCdEfGh',
    });
    expect(parseOnlineGameUrl('https://www.chess.com/game/live/1234567890')).toEqual({
      platform: 'chesscom',
      gameType: 'live',
      gameId: '1234567890',
    });
    expect(parseOnlineGameUrl('https://lichess.org/analysis')).toBeNull();
    expect(parseOnlineGameUrl('not a url')).toBeNull();
  });

  it('reconstructs Lichess Daily Puzzle at exact initialPly + 1 and parses Chess.com Daily Puzzle', () => {
    // Game: 1. e4 e5 2. Qh5 Nc6 3. Bc4 Nf6?? 4. Qxf7#
    // initialPly: 4 means 5 half-moves played (White to move after ...Nf6, solution e.g. h5f7)
    const lichessPayload = {
      game: { pgn: '1. e4 e5 2. Qh5 Nc6 3. Bc4 Nf6' },
      puzzle: {
        id: 'test123',
        initialPly: 5,
        rating: 1620,
        themes: ['mateIn1', 'opening'],
        solution: ['h5f7'],
      },
    };
    const lp = parseLichessDailyPuzzlePayload(lichessPayload, Chess, { lang: 'en' });
    expect(lp.id).toBe('lichess-daily-test123');
    expect(lp.sideToMove).toBe('White');
    expect(lp.moves).toEqual(['Qxf7#']);
    expect(lp.externalSource).toBe('lichess');

    const chessComPayload = {
      title: 'Back Rank',
      url: 'https://www.chess.com/daily-puzzle',
      publish_time: 1700000000,
      fen: '6k1/5ppp/8/8/8/8/8/4R1K1 w - - 0 1',
      pgn: '[FEN "6k1/5ppp/8/8/8/8/8/4R1K1 w - - 0 1"]\n\n1. Re8# 1-0',
    };
    const cp = parseChessComDailyPuzzlePayload(chessComPayload, Chess, { lang: 'en' });
    expect(cp.moves).toEqual(['Re8#']);
    expect(cp.externalSource).toBe('chesscom');
  });

  it('parses user profiles and guards Syzygy Cloud Tablebase to <= 7 pieces', async () => {
    expect(countBoardPieces(STANDARD_START_FEN)).toBe(32);

    const mockFetch = vi.fn(async (url) => {
      if (url.includes('lichess.org/api/user/')) {
        return {
          ok: true,
          json: async () => ({
            username: 'MagnusTest',
            perfs: { blitz: { rating: 3100 }, rapid: { rating: 2950 }, puzzle: { rating: 2700 } },
          }),
        };
      }
      if (url.includes('api.chess.com/pub/player/')) {
        return {
          ok: true,
          json: async () => ({
            chess_blitz: { last: { rating: 3200 } },
            chess_rapid: { last: { rating: 2850 } },
            tactics: { highest: { rating: 3500 } },
          }),
        };
      }
      if (url.includes('tablebase.lichess.ovh/standard')) {
        return {
          ok: true,
          json: async () => ({
            category: 'win',
            dtz: 15,
            dtm: 17,
            moves: [
              { uci: 'a1a8', san: 'Ra8+', category: 'loss', dtz: -14, dtm: -16 },
              { uci: 'e1d2', san: 'Kd2', category: 'draw', dtz: 0, dtm: null },
            ],
          }),
        };
      }
      return { ok: false, status: 404 };
    });

    const lp = await fetchLichessUserProfile('MagnusTest', { fetchImpl: mockFetch });
    expect(lp.ratings.blitz).toBe(3100);
    expect(lp.ratings.puzzle).toBe(2700);

    const cp = await fetchChessComUserProfile('HikaruTest', { fetchImpl: mockFetch });
    expect(cp.ratings.blitz).toBe(3200);
    expect(cp.ratings.puzzle).toBe(3500);

    // Should return null without invoking fetch when > 7 pieces
    const tooMany = await fetchLichessTablebase(STANDARD_START_FEN, { fetchImpl: mockFetch });
    expect(tooMany).toBeNull();
    expect(mockFetch).not.toHaveBeenCalledWith(expect.stringContaining('tablebase.lichess.ovh'), expect.anything());

    // <= 7 pieces invokes tablebase and flips opponent category to mover verdict
    const krK = '4k3/8/8/8/8/8/8/R3K3 w - - 0 1';
    const tb = await fetchLichessTablebase(krK, { fetchImpl: mockFetch });
    expect(tb.category).toBe('win');
    expect(tb.moves[0]).toMatchObject({ san: 'Ra8+', verdictForMover: 'win' });
    expect(tb.moves[1]).toMatchObject({ san: 'Kd2', verdictForMover: 'draw' });
  });
});

describe('Book & Brilliant move grading and evalSeries accuracy aggregation', () => {
  it('detects material sacrifices and classifies Book and Brilliant moves', () => {
    // Bishop takes f7+ sacrifice against Black king: Qxf7/Kxf7 leaves net -2 (or Bxf7+ Kxf7 net 3-1 = 2)
    const gSac = new Chess('r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1');
    const fenBefore = gSac.fen();
    const mv = gSac.move('Bxf7+');
    const fenAfter = gSac.fen();
    expect(detectMaterialSacrifice(fenBefore, mv.from + mv.to, fenAfter, Chess)).toBe(true);

    const bookGrade = gradePlayedMove({
      prevWhiteCp: 30,
      nextWhiteCp: 20,
      moverColor: 'w',
      playedUci: 'e2e4',
      bestUci: 'd2d4',
      bestSan: 'd4',
      isBookMove: true,
    });
    expect(bookGrade.grade).toBe('book');
    expect(bookGrade.symbol).toBe('📖');

    const brilliantGrade = gradePlayedMove({
      prevWhiteCp: 120,
      nextWhiteCp: 135,
      moverColor: 'w',
      playedUci: 'c4f7',
      bestUci: 'c4f7',
      bestSan: 'Bxf7+',
      isBrilliantSacrifice: true,
    });
    expect(brilliantGrade.grade).toBe('brilliant');
    expect(brilliantGrade.symbol).toBe('!!');

    const summary = computeGameAccuracySummary([
      { san: 'e4', color: 'w', evalWhiteCp: 25, grade: bookGrade },
      { san: 'Bxf7+', color: 'w', evalWhiteCp: 135, grade: brilliantGrade },
    ]);
    expect(summary.counts.w.book).toBe(1);
    expect(summary.counts.w.brilliant).toBe(1);
    expect(summary.brilliantPlies).toEqual([2]);
    expect(summary.evalSeries).toHaveLength(2);
    expect(summary.whiteAccuracy).toBe(100);
  });
});
