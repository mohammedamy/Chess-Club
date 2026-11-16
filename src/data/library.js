import { OPENINGS, TRAPS } from './curriculum-openings.js';
import { MIDDLEGAME_LESSONS } from './curriculum-middlegame.js';
import { ENDGAMES } from './curriculum-endgames.js';
import { OPENING_PUZZLES } from './puzzles-openings.js';
import { TACTICS_PUZZLES } from './puzzles-tactics.js';
import { STRATEGY_PUZZLES } from './puzzles-strategy.js';
import { MIDDLEGAME_PUZZLES } from './puzzles-middlegame.js';
import { ENDGAME_PUZZLES } from './puzzles-endgame.js';
import { QUIZZES } from './quizzes.js';

export const PUZZLE_CATEGORIES = ['All', 'Openings', 'Tactics', 'Strategy', 'Middlegame', 'Endgame'];

function normalizePuzzle(item, fallbackCategory) {
  return {
    id: item.id,
    category: item.category || fallbackCategory,
    theme: item.theme,
    difficulty: item.difficulty || 'Medium',
    rating: Number(item.rating) || 1200,
    fen: item.fen,
    sideToMove: item.sideToMove || (String(item.fen || '').split(' ')[1] === 'b' ? 'Black' : 'White'),
    prompt: item.prompt,
    moves: Array.isArray(item.moves) ? item.moves : [item.move].filter(Boolean),
    ...(Array.isArray(item.acceptAlso) && item.acceptAlso.length ? { acceptAlso: item.acceptAlso } : {}),
    explanation: item.explanation,
  };
}

export const TACTICS = TACTICS_PUZZLES.map((p) => normalizePuzzle(p, 'Tactics'));

export const PUZZLES = [
  ...OPENING_PUZZLES.map((p) => normalizePuzzle(p, 'Openings')),
  ...TACTICS,
  ...STRATEGY_PUZZLES.map((p) => normalizePuzzle(p, 'Strategy')),
  ...MIDDLEGAME_PUZZLES.map((p) => normalizePuzzle(p, 'Middlegame')),
  ...ENDGAME_PUZZLES.map((p) => normalizePuzzle(p, 'Endgame')),
];

export function getPuzzlesByCategory(category = 'All') {
  if (!category || category === 'All') return PUZZLES;
  return PUZZLES.filter((p) => p.category === category);
}

export {
  OPENINGS,
  TRAPS,
  MIDDLEGAME_LESSONS,
  ENDGAMES,
  OPENING_PUZZLES,
  TACTICS_PUZZLES,
  STRATEGY_PUZZLES,
  MIDDLEGAME_PUZZLES,
  ENDGAME_PUZZLES,
  QUIZZES,
};
