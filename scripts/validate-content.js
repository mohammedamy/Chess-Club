import { Chess } from 'chess.js';
import { isStockfishSafeFen } from '../src/domain/stockfish-service.js';
import {
  OPENINGS,
  TRAPS,
  MIDDLEGAME_LESSONS,
  ENDGAMES,
  PUZZLES,
  QUIZZES,
} from '../src/data/library.js';

function assertUniqueIds(items, label) {
  const seen = new Set();
  for (const item of items) {
    if (!item.id) throw new Error(`${label}: missing item id.`);
    if (seen.has(item.id)) throw new Error(`${label}: duplicate id "${item.id}".`);
    seen.add(item.id);
  }
}

function validateLine(name, line, startFen = null) {
  const game = startFen ? new Chess(startFen) : new Chess();
  if (startFen && !isStockfishSafeFen(startFen, Chess)) {
    throw new Error(`${name}: unsafe startFen "${startFen}".`);
  }
  for (const step of line || []) {
    const move = game.move(step.move);
    if (!move) throw new Error(`${name}: illegal move "${step.move}".`);
  }
}

assertUniqueIds(OPENINGS, 'OPENINGS');
assertUniqueIds(TRAPS, 'TRAPS');
assertUniqueIds(MIDDLEGAME_LESSONS, 'MIDDLEGAME_LESSONS');
assertUniqueIds(ENDGAMES, 'ENDGAMES');
assertUniqueIds(PUZZLES, 'PUZZLES');
assertUniqueIds(QUIZZES, 'QUIZZES');

OPENINGS.forEach((o) => validateLine(`Opening ${o.name}`, o.line));
TRAPS.forEach((t) => validateLine(`Trap ${t.name}`, t.line));
MIDDLEGAME_LESSONS.forEach((m) => validateLine(`Middlegame ${m.name}`, m.line, m.startFen || null));
ENDGAMES.forEach((e) => {
  if (!isStockfishSafeFen(e.fen, Chess)) {
    throw new Error(`Endgame ${e.id}: unsafe Stockfish FEN "${e.fen}".`);
  }
});

const categoryCounts = {};
for (const puzzle of PUZZLES) {
  categoryCounts[puzzle.category] = (categoryCounts[puzzle.category] || 0) + 1;
  if (!isStockfishSafeFen(puzzle.fen, Chess)) {
    throw new Error(`Puzzle ${puzzle.id}: unsafe Stockfish FEN "${puzzle.fen}".`);
  }
  const game = new Chess(puzzle.fen);
  if (!Array.isArray(puzzle.moves) || puzzle.moves.length === 0) {
    throw new Error(`Puzzle ${puzzle.id}: missing solution moves.`);
  }
  for (let i = 0; i < puzzle.moves.length; i += 1) {
    const san = puzzle.moves[i];
    const m = game.move(san);
    if (!m) throw new Error(`Puzzle ${puzzle.id}: illegal move "${san}" at ply ${i}.`);
  }
  if (puzzle.moves[puzzle.moves.length - 1].endsWith('#') && !game.in_checkmate()) {
    throw new Error(`Puzzle ${puzzle.id}: final move "${puzzle.moves.at(-1)}" claims # but is not checkmate.`);
  }
  if (Array.isArray(puzzle.acceptAlso)) {
    for (const alt of puzzle.acceptAlso) {
      const gAlt = new Chess(puzzle.fen);
      if (!gAlt.move(alt)) throw new Error(`Puzzle ${puzzle.id}: illegal acceptAlso "${alt}".`);
    }
  }
}

const quizCounts = {};
for (const quiz of QUIZZES) {
  quizCounts[quiz.category] = (quizCounts[quiz.category] || 0) + 1;
  if (!isStockfishSafeFen(quiz.fen, Chess)) {
    throw new Error(`Quiz ${quiz.id}: unsafe Stockfish FEN "${quiz.fen}".`);
  }
  if (!Array.isArray(quiz.options) || quiz.options.length !== 4) {
    throw new Error(`Quiz ${quiz.id}: must have exactly 4 options.`);
  }
  if (quiz.correctIndex < 0 || quiz.correctIndex > 3) {
    throw new Error(`Quiz ${quiz.id}: invalid correctIndex ${quiz.correctIndex}.`);
  }
  const gQuiz = new Chess(quiz.fen);
  if (!gQuiz.move(quiz.recommendedSan)) {
    throw new Error(`Quiz ${quiz.id}: illegal recommendedSan "${quiz.recommendedSan}".`);
  }
}

console.log(
  `Validated ${OPENINGS.length} openings, ${TRAPS.length} traps, ${MIDDLEGAME_LESSONS.length} middlegame lessons, ${ENDGAMES.length} endgames, ${PUZZLES.length} puzzles (${JSON.stringify(categoryCounts)}), and ${QUIZZES.length} quizzes (${JSON.stringify(quizCounts)}).`,
);
