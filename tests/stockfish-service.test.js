import { Chess } from 'chess.js';
import { describe, expect, it } from 'vitest';
import {
  describeSuggestedMove,
  evalToWinPercent,
  formatEvalScore,
  gradePlayedMove,
  isStockfishSafeFen,
  parseUciInfo,
} from '../src/domain/stockfish-service.js';

describe('stockfish-service pure helpers', () => {
  it('parses White-to-move UCI MultiPV info into SAN and White-normalized centipawns', () => {
    const startFen = new Chess().fen();
    const line = 'info depth 14 seldepth 20 multipv 1 score cp 38 nodes 120000 nps 950000 pv e2e4 e7e5 g1f3 b8c6 f1b5';
    const parsed = parseUciInfo(line, startFen, Chess);
    expect(parsed).toMatchObject({
      depth: 14,
      multipv: 1,
      nps: 950000,
      whiteCp: 38,
      whiteMate: null,
      uci: 'e2e4',
      from: 'e2',
      to: 'e4',
      bestMoveSan: 'e4',
      pvSan: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'],
    });
    expect(parsed.reason).toBe('Strikes the center');
  });

  it('inverts centipawn and mate scores when Black is to move', () => {
    const blackFen = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1';
    const cpLine = 'info depth 12 multipv 2 score cp -25 pv c7c5 g1f3 d7d6';
    const cpParsed = parseUciInfo(cpLine, blackFen, Chess);
    expect(cpParsed.whiteCp).toBe(25);
    expect(cpParsed.bestMoveSan).toBe('c5');

    const mateFen = '6k1/5ppp/8/1b6/8/8/5PPP/3r1RK1 b - - 0 1';
    const mateLine = 'info depth 8 multipv 1 score mate 1 pv d1f1';
    const mateParsed = parseUciInfo(mateLine, mateFen, Chess);
    expect(mateParsed.whiteMate).toBe(-1);
    expect(mateParsed.bestMoveSan).toBe('Rxf1#');
    expect(mateParsed.reason).toBe('Checkmate sequence');
  });

  it('ignores upperbound/lowerbound or malformed UCI lines', () => {
    const startFen = new Chess().fen();
    expect(parseUciInfo('info depth 10 score cp 40 upperbound pv e2e4', startFen, Chess)).toBeNull();
    expect(parseUciInfo('info string NNUE evaluation active', startFen, Chess)).toBeNull();
  });

  it('formats centipawn and mate scores accurately', () => {
    expect(formatEvalScore(0, null)).toBe('0.00');
    expect(formatEvalScore(135, null)).toBe('+1.35');
    expect(formatEvalScore(-80, null)).toBe('-0.80');
    expect(formatEvalScore(null, 3)).toBe('+M3');
    expect(formatEvalScore(null, -2)).toBe('-M2');
  });

  it('computes bounded sigmoid win percentage for the eval bar', () => {
    expect(evalToWinPercent(0, null)).toBe(50);
    expect(evalToWinPercent(600, null)).toBeGreaterThan(88);
    expect(evalToWinPercent(-600, null)).toBeLessThan(12);
    expect(evalToWinPercent(null, 2)).toBe(100);
    expect(evalToWinPercent(null, -1)).toBe(0);
  });

  it('recognizes tactical forks, castles, and captures in coaching tags', () => {
    const forkFen = '3r1k2/8/8/8/5N2/8/8/4K3 w - - 0 1';
    expect(describeSuggestedMove(forkFen, 'f4e6', 'Ne6+', ['Ne6+'], Chess)).toBe('Forks king and piece');

    const castleFen = 'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4';
    expect(describeSuggestedMove(castleFen, 'e1g1', 'O-O', ['O-O'], Chess)).toBe('Castles to safety');
  });

  it('grades played moves for both White and Black based on centipawn loss', () => {
    const best = gradePlayedMove({
      prevWhiteCp: 35,
      nextWhiteCp: 35,
      moverColor: 'w',
      playedUci: 'e2e4',
      bestUci: 'e2e4',
      bestSan: 'e4',
    });
    expect(best.grade).toBe('best');
    expect(best.cpLoss).toBe(0);

    const inaccuracy = gradePlayedMove({
      prevWhiteCp: 50,
      nextWhiteCp: -55,
      moverColor: 'w',
      playedUci: 'a2a3',
      bestUci: 'd2d4',
      bestSan: 'd4',
    });
    expect(inaccuracy.grade).toBe('inaccuracy');
    expect(inaccuracy.cpLoss).toBe(105);

    const blackBlunder = gradePlayedMove({
      prevWhiteCp: -20,
      nextWhiteCp: 380,
      moverColor: 'b',
      playedUci: 'g7g5',
      bestUci: 'g8f6',
      bestSan: 'Nf6',
    });
    expect(blackBlunder.grade).toBe('blunder');
    expect(blackBlunder.cpLoss).toBe(400);
  });

  it('validates Stockfish-safe FENs and rejects missing kings, back-rank pawns, or illegal checks', () => {
    expect(isStockfishSafeFen(new Chess().fen(), Chess)).toBe(true);
    expect(isStockfishSafeFen('6k1/8/8/8/1p6/8/8/6K1 w - - 0 1', Chess)).toBe(true);
    // Missing Black king
    expect(isStockfishSafeFen('8/8/8/8/1p6/8/8/6K1 w - - 0 1', Chess)).toBe(false);
    // White pawn on 1st rank
    expect(isStockfishSafeFen('3r2k1/5pp1/7p/3q4/8/8/5PP1/3QR1KP w - - 0 1', Chess)).toBe(false);
    // Non-moving Black king already in check by White rook
    expect(isStockfishSafeFen('6k1/8/8/8/8/8/6R1/6K1 w - - 0 1', Chess)).toBe(false);
  });
});
