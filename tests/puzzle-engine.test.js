import { Chess } from 'chess.js';
import { describe, expect, it } from 'vitest';
import {
  advanceQuizSession,
  createQuizSession,
  evaluatePuzzleMove,
  extractQuizOptionSan,
  filterPuzzles,
  paginateItems,
  submitQuizAnswer,
  submitQuizMove,
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

  it('supports answering quiz questions directly via board moves alongside multiple choice', () => {
    expect(extractQuizOptionSan('c3 — Prepare the d4 pawn center')).toBe('c3');
    expect(extractQuizOptionSan('O-O-O – Castle queenside')).toBe('O-O-O');

    const quizzes = [
      {
        id: 'qz-board-1',
        category: 'Openings',
        fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        options: ['c3 — Prepare d4', 'Bb5 — Flank move', 'g4 — Expose king', 'h3 — Slow prophylactic'],
        correctIndex: 0,
        recommendedSan: 'c3',
        explanation: 'Prepares d4.',
      },
      {
        id: 'qz-board-2',
        category: 'Openings',
        fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        options: ['c3 — Prepare d4', 'Bb5 — Flank move', 'g4 — Expose king', 'h3 — Slow prophylactic'],
        correctIndex: 0,
        recommendedSan: 'c3',
        explanation: 'Prepares d4.',
      },
      {
        id: 'qz-board-3',
        category: 'Openings',
        fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        options: ['c3 — Prepare d4', 'Bb5 — Flank move', 'g4 — Expose king', 'h3 — Slow prophylactic'],
        correctIndex: 0,
        recommendedSan: 'c3',
        explanation: 'Prepares d4.',
      },
      {
        id: 'qz-opt-4',
        category: 'Openings',
        fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        options: ['c3 — Prepare d4', 'Bb5 — Flank move', 'g4 — Expose king', 'h3 — Slow prophylactic'],
        correctIndex: 0,
        recommendedSan: 'c3',
        explanation: 'Prepares d4.',
      },
    ];

    let sess = createQuizSession(quizzes, { category: 'Openings', count: 4 });

    // Illegal move does not answer or mutate session
    const afterIllegal = submitQuizMove(sess, { from: 'e1', to: 'e8' }, { ChessCtor: Chess });
    expect(afterIllegal).toBe(sess);

    // 1. Correct answer played directly on board (c2->c3)
    sess = submitQuizMove(sess, { from: 'c2', to: 'c3' }, { ChessCtor: Chess });
    expect(sess.lastResult).toMatchObject({
      isCorrect: true,
      chosenIndex: 0,
      answeredVia: 'board',
      playedSan: 'c3',
      playedMove: { from: 'c2', to: 'c3' },
    });
    expect(sess.lastResult.fenAfter).toContain('2P2N2');

    // Double-move on same answered question is ignored
    expect(submitQuizMove(sess, { from: 'd2', to: 'd3' }, { ChessCtor: Chess })).toBe(sess);

    // 2. Wrong board move matching distractor option Bb5 (c4->b5 -> index 1)
    sess = advanceQuizSession(sess);
    sess = submitQuizMove(sess, { from: 'c4', to: 'b5' }, { ChessCtor: Chess });
    expect(sess.lastResult).toMatchObject({
      isCorrect: false,
      chosenIndex: 1,
      answeredVia: 'board',
      playedSan: 'Bb5',
      playedMove: { from: 'c4', to: 'b5' },
    });

    // 3. Wrong legal board move not in options (a2->a3 -> chosenIndex -1)
    sess = advanceQuizSession(sess);
    sess = submitQuizMove(sess, { from: 'a2', to: 'a3' }, { ChessCtor: Chess });
    expect(sess.lastResult).toMatchObject({
      isCorrect: false,
      chosenIndex: -1,
      answeredVia: 'board',
      playedSan: 'a3',
      playedMove: { from: 'a2', to: 'a3' },
    });

    // 4. Multiple-choice option answer still works and populates board preview metadata
    sess = advanceQuizSession(sess);
    sess = submitQuizAnswer(sess, 0, { ChessCtor: Chess });
    expect(sess.lastResult).toMatchObject({
      isCorrect: true,
      chosenIndex: 0,
      answeredVia: 'option',
      playedSan: 'c3',
      playedMove: { from: 'c2', to: 'c3' },
    });
  });
});
