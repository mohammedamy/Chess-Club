import { AR_OPENINGS, AR_TRAPS } from './ar-openings.js';
import { AR_MIDDLEGAME, AR_ENDGAMES } from './ar-mastery.js';
import { AR_PUZZLES_OPENINGS } from './ar-puzzles-openings.js';
import { AR_PUZZLES_TACTICS } from './ar-puzzles-tactics.js';
import { AR_PUZZLES_STRATEGY } from './ar-puzzles-strategy.js';
import { AR_PUZZLES_MIDDLEGAME, AR_PUZZLES_ENDGAME } from './ar-puzzles-mid-end.js';
import { AR_QUIZZES } from './ar-quizzes.js';
import {
  getLang,
  isolateChessTokens,
  tCategory,
  tDifficulty,
  tSide,
  tTargetResult,
} from './ui-strings.js';

export * from './ui-strings.js';

export const AR_PUZZLES = {
  ...AR_PUZZLES_OPENINGS,
  ...AR_PUZZLES_TACTICS,
  ...AR_PUZZLES_STRATEGY,
  ...AR_PUZZLES_MIDDLEGAME,
  ...AR_PUZZLES_ENDGAME,
};

export {
  AR_OPENINGS,
  AR_TRAPS,
  AR_MIDDLEGAME,
  AR_ENDGAMES,
  AR_PUZZLES_OPENINGS,
  AR_PUZZLES_TACTICS,
  AR_PUZZLES_STRATEGY,
  AR_PUZZLES_MIDDLEGAME,
  AR_PUZZLES_ENDGAME,
  AR_QUIZZES,
};

function iso(text, lang) {
  return isolateChessTokens(text, lang);
}

export function localizeOpening(opening, lang = getLang()) {
  if (!opening || lang !== 'ar') return opening;
  const ar = AR_OPENINGS[opening.id];
  if (!ar) return opening;
  return {
    ...opening,
    name: iso(ar.name, lang),
    color: tSide(opening.color, lang),
    level: tDifficulty(opening.level, lang),
    summary: iso(ar.summary, lang),
    keyIdeas: Array.isArray(ar.keyIdeas)
      ? ar.keyIdeas.map((k) => iso(k, lang))
      : opening.keyIdeas,
    line: (opening.line || []).map((step, idx) => ({
      ...step,
      text: iso(ar.line?.[idx] || step.text, lang),
    })),
  };
}

export function localizeTrap(trap, lang = getLang()) {
  if (!trap || lang !== 'ar') return trap;
  const ar = AR_TRAPS[trap.id];
  if (!ar) return trap;
  return {
    ...trap,
    name: iso(ar.name, lang),
    level: trap.level ? tDifficulty(trap.level, lang) : trap.level,
    summary: iso(ar.summary, lang),
    avoid: ar.avoid ? iso(ar.avoid, lang) : trap.avoid,
    line: (trap.line || []).map((step, idx) => ({
      ...step,
      text: iso(ar.line?.[idx] || step.text, lang),
    })),
  };
}

export function localizeMiddlegame(lesson, lang = getLang()) {
  if (!lesson || lang !== 'ar') return lesson;
  const ar = AR_MIDDLEGAME[lesson.id];
  if (!ar) return lesson;
  return {
    ...lesson,
    name: iso(ar.name, lang),
    category: ar.category || lesson.category,
    level: tDifficulty(lesson.level, lang),
    color: tSide(lesson.color, lang),
    summary: iso(ar.summary, lang),
    keyIdeas: Array.isArray(ar.keyIdeas)
      ? ar.keyIdeas.map((k) => iso(k, lang))
      : lesson.keyIdeas,
    line: (lesson.line || []).map((step, idx) => ({
      ...step,
      text: iso(ar.line?.[idx] || step.text, lang),
    })),
  };
}

export function localizeEndgame(endgame, lang = getLang()) {
  if (!endgame || lang !== 'ar') return endgame;
  const ar = AR_ENDGAMES[endgame.id];
  if (!ar) return endgame;
  return {
    ...endgame,
    name: iso(ar.name, lang),
    difficulty: tDifficulty(endgame.difficulty, lang),
    targetResult: tTargetResult(endgame.targetResult || 'Win', lang),
    summary: iso(ar.summary, lang),
    goal: iso(ar.goal, lang),
    technique: Array.isArray(ar.technique)
      ? ar.technique.map((item) => iso(item, lang))
      : endgame.technique,
  };
}

export function localizePuzzle(puzzle, lang = getLang()) {
  if (!puzzle || lang !== 'ar') return puzzle;
  const ar = AR_PUZZLES[puzzle.id];
  return {
    ...puzzle,
    rawCategory: puzzle.category,
    rawDifficulty: puzzle.difficulty,
    rawSideToMove: puzzle.sideToMove,
    categoryLabel: tCategory(puzzle.category, lang),
    difficultyLabel: tDifficulty(puzzle.difficulty, lang),
    sideToMoveLabel: tSide(puzzle.sideToMove, lang),
    theme: iso(ar?.theme || puzzle.theme, lang),
    prompt: iso(ar?.prompt || puzzle.prompt, lang),
    explanation: iso(ar?.explanation || puzzle.explanation, lang),
  };
}

export function localizeQuiz(quiz, lang = getLang()) {
  if (!quiz || lang !== 'ar') return quiz;
  const ar = AR_QUIZZES[quiz.id];
  if (!ar) return quiz;
  return {
    ...quiz,
    categoryLabel: tCategory(quiz.category, lang),
    difficultyLabel: tDifficulty(quiz.difficulty, lang),
    sideToMoveLabel: tSide(quiz.sideToMove, lang),
    theme: iso(ar.theme || quiz.theme, lang),
    question: iso(ar.question || quiz.question, lang),
    options: Array.isArray(ar.options)
      ? ar.options.map((opt) => iso(opt, lang))
      : quiz.options,
    explanation: iso(ar.explanation || quiz.explanation, lang),
  };
}
