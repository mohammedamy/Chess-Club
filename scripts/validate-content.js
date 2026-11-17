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
import {
  AR_ENDGAMES,
  AR_MIDDLEGAME,
  AR_OPENINGS,
  AR_PUZZLES,
  AR_QUIZZES,
  AR_TRAPS,
} from '../src/i18n/ui.js';

const HAS_ARABIC = /[\u0600-\u06FF]/;

function assertArabicString(val, ctx) {
  if (typeof val !== 'string' || !HAS_ARABIC.test(val)) {
    throw new Error(`${ctx}: missing or non-Arabic translation "${val}".`);
  }
}

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

// Validate 100% Arabic curriculum, puzzle, and quiz coverage
for (const o of OPENINGS) {
  const ar = AR_OPENINGS[o.id];
  if (!ar) throw new Error(`AR_OPENINGS: missing translation for "${o.id}".`);
  assertArabicString(ar.name, `AR_OPENINGS.${o.id}.name`);
  assertArabicString(ar.summary, `AR_OPENINGS.${o.id}.summary`);
  if (!Array.isArray(ar.keyIdeas) || ar.keyIdeas.length !== o.keyIdeas.length) {
    throw new Error(`AR_OPENINGS.${o.id}: keyIdeas length mismatch.`);
  }
  ar.keyIdeas.forEach((k, idx) => assertArabicString(k, `AR_OPENINGS.${o.id}.keyIdeas[${idx}]`));
  if (!Array.isArray(ar.line) || ar.line.length !== o.line.length) {
    throw new Error(`AR_OPENINGS.${o.id}: line length mismatch.`);
  }
  ar.line.forEach((stepTxt, idx) => assertArabicString(stepTxt, `AR_OPENINGS.${o.id}.line[${idx}]`));
}

for (const tr of TRAPS) {
  const ar = AR_TRAPS[tr.id];
  if (!ar) throw new Error(`AR_TRAPS: missing translation for "${tr.id}".`);
  assertArabicString(ar.name, `AR_TRAPS.${tr.id}.name`);
  assertArabicString(ar.summary, `AR_TRAPS.${tr.id}.summary`);
  if (tr.avoid) assertArabicString(ar.avoid, `AR_TRAPS.${tr.id}.avoid`);
  if (!Array.isArray(ar.line) || ar.line.length !== tr.line.length) {
    throw new Error(`AR_TRAPS.${tr.id}: line length mismatch.`);
  }
  ar.line.forEach((stepTxt, idx) => assertArabicString(stepTxt, `AR_TRAPS.${tr.id}.line[${idx}]`));
}

for (const m of MIDDLEGAME_LESSONS) {
  const ar = AR_MIDDLEGAME[m.id];
  if (!ar) throw new Error(`AR_MIDDLEGAME: missing translation for "${m.id}".`);
  assertArabicString(ar.name, `AR_MIDDLEGAME.${m.id}.name`);
  assertArabicString(ar.category, `AR_MIDDLEGAME.${m.id}.category`);
  assertArabicString(ar.summary, `AR_MIDDLEGAME.${m.id}.summary`);
  if (!Array.isArray(ar.keyIdeas) || ar.keyIdeas.length !== m.keyIdeas.length) {
    throw new Error(`AR_MIDDLEGAME.${m.id}: keyIdeas length mismatch.`);
  }
  ar.keyIdeas.forEach((k, idx) => assertArabicString(k, `AR_MIDDLEGAME.${m.id}.keyIdeas[${idx}]`));
  if (!Array.isArray(ar.line) || ar.line.length !== m.line.length) {
    throw new Error(`AR_MIDDLEGAME.${m.id}: line length mismatch.`);
  }
  ar.line.forEach((stepTxt, idx) => assertArabicString(stepTxt, `AR_MIDDLEGAME.${m.id}.line[${idx}]`));
}

for (const eg of ENDGAMES) {
  const ar = AR_ENDGAMES[eg.id];
  if (!ar) throw new Error(`AR_ENDGAMES: missing translation for "${eg.id}".`);
  assertArabicString(ar.name, `AR_ENDGAMES.${eg.id}.name`);
  assertArabicString(ar.summary, `AR_ENDGAMES.${eg.id}.summary`);
  assertArabicString(ar.goal, `AR_ENDGAMES.${eg.id}.goal`);
  if (!Array.isArray(ar.technique) || ar.technique.length !== eg.technique.length) {
    throw new Error(`AR_ENDGAMES.${eg.id}: technique length mismatch.`);
  }
  ar.technique.forEach((stepTxt, idx) => assertArabicString(stepTxt, `AR_ENDGAMES.${eg.id}.technique[${idx}]`));
}

for (const p of PUZZLES) {
  const ar = AR_PUZZLES[p.id];
  if (!ar) throw new Error(`AR_PUZZLES: missing translation for "${p.id}".`);
  assertArabicString(ar.theme, `AR_PUZZLES.${p.id}.theme`);
  assertArabicString(ar.prompt, `AR_PUZZLES.${p.id}.prompt`);
  assertArabicString(ar.explanation, `AR_PUZZLES.${p.id}.explanation`);
}

for (const q of QUIZZES) {
  const ar = AR_QUIZZES[q.id];
  if (!ar) throw new Error(`AR_QUIZZES: missing translation for "${q.id}".`);
  assertArabicString(ar.theme, `AR_QUIZZES.${q.id}.theme`);
  assertArabicString(ar.question, `AR_QUIZZES.${q.id}.question`);
  assertArabicString(ar.explanation, `AR_QUIZZES.${q.id}.explanation`);
  if (!Array.isArray(ar.options) || ar.options.length !== 4) {
    throw new Error(`AR_QUIZZES.${q.id}: must have 4 options.`);
  }
  q.options.forEach((enOpt, idx) => {
    const arOpt = ar.options[idx];
    assertArabicString(arOpt, `AR_QUIZZES.${q.id}.options[${idx}]`);
    const enSan = enOpt.split('—')[0].trim();
    const arSan = arOpt.split('—')[0].trim();
    if (enSan !== arSan) {
      throw new Error(`AR_QUIZZES.${q.id}.options[${idx}]: SAN mismatch "${arSan}" !== "${enSan}".`);
    }
  });
}

console.log(
  `Validated ${OPENINGS.length} openings, ${TRAPS.length} traps, ${MIDDLEGAME_LESSONS.length} middlegame lessons, ${ENDGAMES.length} endgames, ${PUZZLES.length} puzzles (${JSON.stringify(categoryCounts)}), ${QUIZZES.length} quizzes (${JSON.stringify(quizCounts)}), and 100% Arabic localization coverage.`,
);
