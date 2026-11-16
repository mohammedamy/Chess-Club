import { Chess } from 'chess.js';
import { describe, expect, it } from 'vitest';
import {
  advanceQuizSession,
  createQuizSession,
  evaluatePuzzleMove,
  filterPuzzles,
  paginateItems,
  submitQuizAnswer,
  summarizeQuizSession,
} from '../src/domain/puzzle-engine.js';

describe('puzzle-engine domain helpers', () => {
  it('filters puzzles by category, difficulty, search query, and unsolved flag', () => {
    const sample = [
      { id: 'p1', category: 'Tactics', difficulty: 'Easy', theme: 'Back-Rank Mate', prompt: 'Mate in 1' },
      { id: 'p2', category: 'Endgame', difficulty: 'Advanced', theme: 'Lucena Bridge', prompt: 'Build bridge' },
      { id: 'p3', category: 'Tactics', difficulty: 'Medium', theme: 'Knight Fork', prompt: 'Win rook' },
    ];
    expect(filterPuzzles(sample, { category: 'Tactics' }).map((p) => p.id)).toEqual(['p1', 'p3']);
    expect(filterPuzzles(sample, { difficulty: 'Advanced' }).map((p) => p.id)).toEqual(['p2']);
    expect(filterPuzzles(sample, { query: 'bridge' }).map((p) => p.id)).toEqual(['p2']);
    expect(
      filterPuzzles(sample, { category: 'Tactics', unsolvedOnly: true, solvedSet: new Set(['p1']) }).map((p) => p.id),
    ).toEqual(['p3']);
  });

  it('paginates safely with clamped bounds', () => {
    const list = Array.from({ length: 25 }, (_, i) => i + 1);
    const page1 = paginateItems(list, 1, 12);
    expect(page1.items).toHaveLength(12);
    expect(page1.totalPages).toBe(3);

    const page99 = paginateItems(list, 99, 12);
    expect(page99.page).toBe(3);
    expect(page99.items).toEqual([25]);
  });

  it('evaluates multi-ply puzzle moves, opponent auto-reply, and alternate mate-in-1', () => {
    const fen = '3r2k1/5pp1/7p/3q4/8/7P/5PP1/3QR1K1 w - - 0 1';
    const step1 = evaluatePuzzleMove({
      fen,
      solutionMoves: ['Re8+', 'Rxe8', 'Qxd5'],
      plyIndex: 0,
      playedMoveObj: { from: 'e1', to: 'e8' },
      ChessCtor: Chess,
    });
    expect(step1.correct).toBe(true);
    expect(step1.finished).toBe(false);
    expect(step1.oppAutoMove).toBe('Rxe8');
    expect(step1.nextPly).toBe(2);

    const step2 = evaluatePuzzleMove({
      fen: step1.nextFen,
      solutionMoves: ['Re8+', 'Rxe8', 'Qxd5'],
      plyIndex: 2,
      playedMoveObj: { from: 'd1', to: 'd5' },
      ChessCtor: Chess,
    });
    expect(step2.correct).toBe(true);
    expect(step2.finished).toBe(true);

    const wrong = evaluatePuzzleMove({
      fen,
      solutionMoves: ['Re8+', 'Rxe8', 'Qxd5'],
      plyIndex: 0,
      playedMoveObj: { from: 'h3', to: 'h4' },
      ChessCtor: Chess,
    });
    expect(wrong.correct).toBe(false);
    expect(wrong.nextPly).toBe(0);

    // Mate-in-1 equivalence: Rd8# and Qe8# both deliver checkmate in 1
    const mateFen = '6k1/8/6K1/8/8/8/4Q3/3R4 w - - 0 1';
    const altMate = evaluatePuzzleMove({
      fen: mateFen,
      solutionMoves: ['Rd8#'],
      plyIndex: 0,
      playedMoveObj: { from: 'e2', to: 'e8' },
      ChessCtor: Chess,
    });
    expect(altMate.correct).toBe(true);
    expect(altMate.finished).toBe(true);
  });

  it('runs quiz sprint sessions cleanly with proportional mix and summary', () => {
    const sampleQuizzes = [
      { id: 'q1', category: 'Openings', correctIndex: 1, recommendedSan: 'e4', explanation: 'Center' },
      { id: 'q2', category: 'Tactics', correctIndex: 0, recommendedSan: 'Rd8#', explanation: 'Mate' },
      { id: 'q3', category: 'Strategy', correctIndex: 2, recommendedSan: 'Nd5', explanation: 'Outpost' },
    ];
    let session = createQuizSession(sampleQuizzes, { category: 'All', count: 3 });
    expect(session.items).toHaveLength(3);

    session = submitQuizAnswer(session, 1);
    expect(session.lastResult.isCorrect).toBe(true);
    session = advanceQuizSession(session);

    session = submitQuizAnswer(session, 3);
    expect(session.lastResult.isCorrect).toBe(false);
    session = advanceQuizSession(session);

    session = submitQuizAnswer(session, 2);
    session = advanceQuizSession(session);
    expect(session.completed).toBe(true);

    const summary = summarizeQuizSession(session);
    expect(summary).toMatchObject({ total: 3, answered: 3, correct: 2, accuracy: 67 });
  });
});
