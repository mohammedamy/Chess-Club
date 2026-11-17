import { Chess } from 'chess.js';
import { describe, expect, it } from 'vitest';
import {
  ENDGAMES,
  MIDDLEGAME_LESSONS,
  OPENINGS,
  PUZZLES,
  PUZZLE_CATEGORIES,
  QUIZZES,
  TACTICS,
  TRAPS,
  getPuzzlesByCategory,
} from '../src/data/library.js';
import { isStockfishSafeFen } from '../src/domain/stockfish-service.js';

describe('training library integrity', () => {
  it('exposes the expanded curriculum (112), puzzle catalog (470), and quiz bank (80)', () => {
    expect(OPENINGS).toHaveLength(48);
    expect(TRAPS).toHaveLength(22);
    expect(MIDDLEGAME_LESSONS).toHaveLength(12);
    expect(ENDGAMES).toHaveLength(30);
    expect(PUZZLES).toHaveLength(470);
    expect(TACTICS).toHaveLength(150);
    expect(QUIZZES).toHaveLength(80);
    expect(PUZZLE_CATEGORIES).toEqual(['All', 'Openings', 'Tactics', 'Strategy', 'Middlegame', 'Endgame']);

    expect(getPuzzlesByCategory('Openings')).toHaveLength(85);
    expect(getPuzzlesByCategory('Tactics')).toHaveLength(150);
    expect(getPuzzlesByCategory('Strategy')).toHaveLength(75);
    expect(getPuzzlesByCategory('Middlegame')).toHaveLength(75);
    expect(getPuzzlesByCategory('Endgame')).toHaveLength(85);
  });

  it('preserves all 17 legacy club tactic IDs', () => {
    const legacyIds = [
      'back-rank', 'skewer', 'knight-fork', 'mate-1', 'royal-fork', 'discovered-check',
      'pin-attack', 'deflection', 'queen-check', 'arabian-mate', 'anastasia-mate',
      'long-range-mate', 'bishop-queen-battery', 'absolute-pin-win', 'corner-net',
      'diagonal-entry', 'rook-seventh',
    ];
    const idSet = new Set(TACTICS.map((p) => p.id));
    for (const id of legacyIds) {
      expect(idSet.has(id)).toBe(true);
    }
  });

  it('has 100% unique IDs, Stockfish-safe FENs, and legal solution moves', () => {
    expect(new Set(PUZZLES.map((p) => p.id)).size).toBe(470);
    expect(new Set(QUIZZES.map((q) => q.id)).size).toBe(80);

    for (const puzzle of PUZZLES) {
      expect(isStockfishSafeFen(puzzle.fen, Chess)).toBe(true);
      const g = new Chess(puzzle.fen);
      for (const mv of puzzle.moves) {
        expect(Boolean(g.move(mv))).toBe(true);
      }
      if (puzzle.moves.at(-1)?.endsWith('#')) {
        expect(g.in_checkmate()).toBe(true);
      }
    }

    for (const quiz of QUIZZES) {
      expect(isStockfishSafeFen(quiz.fen, Chess)).toBe(true);
      expect(quiz.options).toHaveLength(4);
      expect(quiz.correctIndex).toBeGreaterThanOrEqual(0);
      expect(quiz.correctIndex).toBeLessThanOrEqual(3);
      expect(Boolean(new Chess(quiz.fen).move(quiz.recommendedSan))).toBe(true);
    }
  });
});
