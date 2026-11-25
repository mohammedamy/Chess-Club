import { Chess } from 'chess.js';
import { computeElo } from './domain/rating.js';
import {
  completeEmailSignInLink,
  createClub,
  currentUser as currentFirebaseUser,
  isEmailSignInLink,
  listMyClubs,
  recordPuzzleAttempt,
  saveLessonProgress,
  sendEmailSignInLink,
  signOut as signOutFirebase,
  upsertMyProfile,
} from './data/club-api.js';
import {
  ENDGAMES,
  MIDDLEGAME_LESSONS,
  OPENINGS,
  PUZZLES,
  PUZZLE_CATEGORIES,
  QUIZZES,
  TRAPS,
  getPuzzlesByCategory,
} from './data/library.js';
import {
  ARENA_PRESETS,
  ENGINE_PROFILE_LIST,
  computeEvalDisagreement,
  createArenaEngine,
  formatEngineThought,
  getEngineProfile,
  getEngineTierMeta,
} from './domain/engine-arena.js';
import {
  FAMOUS_SAMPLE_GAMES,
  STANDARD_START_FEN,
  buildPositionAtPly,
  computeGameAccuracySummary,
  detectBinaryFileSignature,
  exportGameToPgn,
  parseImportedGames,
  stepPly,
} from './domain/pgn-import.js';
import {
  detectMaterialSacrifice,
  gradePlayedMove,
  isStockfishSafeFen,
  resolveEngineLevelConfig,
  stockfishClient,
} from './domain/stockfish-service.js';
import { computeMaterialBalance } from './domain/material.js';
import {
  TIME_CONTROLS,
  createClockState,
  formatClockMs,
  hasMatingMaterial,
  pressClockAfterMove,
  tickClock,
} from './domain/chess-clock.js';
import { playChessSound, soundForMove } from './domain/sound.js';
import {
  detectOpeningFromMoves,
  getBookContinuations,
  isPositionInBook,
} from './domain/opening-explorer.js';
import {
  RUSH_MODES,
  createRushSession,
  getRushCurrentPuzzle,
  recordRushStrike,
  recordRushSolve,
  tickRushTimer,
} from './domain/puzzle-rush.js';
import {
  buildChessComAnalysisUrl,
  buildLichessAnalysisUrl,
  countBoardPieces,
  fetchChessComDailyPuzzle,
  fetchChessComUserGames,
  fetchChessComUserProfile,
  fetchLichessDailyPuzzle,
  fetchLichessGameById,
  fetchLichessTablebase,
  fetchLichessUserGames,
  fetchLichessUserProfile,
  parseOnlineGameUrl,
} from './domain/online-platforms.js';
import {
  advanceQuizSession,
  createQuizSession,
  evaluatePuzzleMove,
  filterPuzzles,
  paginateItems,
  submitQuizAnswer,
  submitQuizMove,
  summarizeQuizSession,
} from './domain/puzzle-engine.js';
import { iconSvg } from './ui/icons.js';
import {
  applyLanguageDom,
  formatDateLocalized,
  getLang,
  isolateChessTokens,
  localizeArenaPreset,
  localizeBoardThemeName,
  localizeComment,
  localizeEndgame,
  localizeEngineProfile,
  localizeEngineTier,
  localizeFamousGame,
  localizeMiddlegame,
  localizeMoveGrade,
  localizeOpening,
  localizePieceStyle,
  localizePuzzle,
  localizeQuiz,
  localizeSandboxPreset,
  localizeTrap,
  normalizeSearchText,
  setLang,
  t,
  tBinaryKind,
  tCategory,
  tDifficulty,
  tGameReason,
  tMatchType,
  tPieceName,
  tSide,
  toggleLang,
} from './i18n/ui.js';
import {
  createBoardArrowsSvg,
  createDualEvalStrip,
  createEngineThoughtCard,
  createEvalBar,
  createStockfishPanel,
  updateBoardArrows,
  updateDualEvalStrip,
  updateEngineThoughtCard,
  updateEvalBar,
  updateStockfishPanel,
} from './ui/stockfish-widgets.js';
import {
  createBoardEditorPanel,
  createEvalGraph,
  createExplorerAndTablebasePanel,
  createMaterialBar,
  createUserAnnotationsSvg,
  updateUserAnnotationsSvg,
} from './ui/lichess-widgets.js';

/* =========================================================
   EDUGATES INTERNATIONAL SCHOOL — CHESS CLUB
   ========================================================= */

const PIECE_SVG = {
  K: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M22.5 11.63V6" stroke-linejoin="miter"/><path d="M20 8h5" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/><path d="M11.5 30c5.5-3 15.5-3 21 0M11.5 33.5c5.5-3 15.5-3 21 0M11.5 37c5.5-3 15.5-3 21 0" fill="none"/></g></svg>`,
  Q: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11 38.5a35 35 1 0 0 23 0" fill="none" stroke-linecap="butt"/><path d="M11 29a35 35 1 0 1 23 0M12.5 31.5h20M11.5 34.5a35 35 1 0 0 22 0M10.5 37.5a35 35 1 0 0 24 0" fill="none" stroke="#000"/><circle cx="6" cy="12" r="2"/><circle cx="14" cy="9" r="2"/><circle cx="22.5" cy="8" r="2"/><circle cx="31" cy="9" r="2"/><circle cx="39" cy="12" r="2"/></g></svg>`,
  R: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="butt"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"/><path d="M34 14l-3 3H14l-3-3"/><path d="M31 17v12.5H14V17" stroke-linecap="round" stroke-linejoin="miter"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path d="M11 14h23" fill="none" stroke-linejoin="miter"/></g></svg>`,
  B: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><g stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linejoin="miter"/></g></svg>`,
  N: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" stroke-linecap="butt"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3" stroke-linecap="butt"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM15 15.5a.5 1.5 30 1 1-1 0 .5 1.5 30 1 1 1 0z" fill="#000" stroke="#000" stroke-width="1.5"/></g></svg>`,
  P: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  k: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M22.5 11.63V6" stroke-linejoin="miter" fill="none"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#000" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#000"/><path d="M20 8h5" stroke-linejoin="miter"/><path d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5l.01 2.1-.01-2.1C20 18 9.906 14 6.997 19.85 4.5 25.5 13 29.5 13 29.5M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0" stroke="#fff" fill="none"/></g></svg>`,
  q: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="butt"/><path d="M11 38.5a35 35 1 0 0 23 0" fill="none" stroke-linecap="butt"/><path d="M11 29a35 35 1 0 1 23 0M12.5 31.5h20M11.5 34.5a35 35 1 0 0 22 0M10.5 37.5a35 35 1 0 0 24 0" fill="none" stroke="#fff"/><circle cx="6" cy="12" r="2" stroke="#fff"/><circle cx="14" cy="9" r="2" stroke="#fff"/><circle cx="22.5" cy="8" r="2" stroke="#fff"/><circle cx="31" cy="9" r="2" stroke="#fff"/><circle cx="39" cy="12" r="2" stroke="#fff"/></g></svg>`,
  r: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="butt"><path d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z"/><path d="M14 29.5v-13h17v13H14z" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-linecap="butt"/><path d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23" fill="none" stroke="#fff" stroke-width="1" stroke-linejoin="miter"/></g></svg>`,
  b: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><g fill="#000" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" fill="none" stroke="#fff" stroke-linejoin="miter"/></g></svg>`,
  n: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" stroke-linecap="butt"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3" stroke-linecap="butt"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM15 15.5a.5 1.5 30 1 1-1 0 .5 1.5 30 1 1 1 0z" fill="#fff" stroke="#fff"/><path d="M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34-2.37-4.49-5.79-6.64-9.19-7.16l-.51-.1z" fill="#fff" stroke="none"/></g></svg>`,
  p: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`,
};

const SANDBOX_PRESETS = [
  { label: 'Starting Position', fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' },
  { label: 'Greek Gift Setup', fen: 'r1bq1rk1/pppn1ppp/4p3/3pP3/1b1P4/2NB1N2/PPP2PPP/R1BQ1RK1 w - - 0 1' },
  { label: 'Sicilian Najdorf', fen: 'r1bqkb1r/1p2pppp/p1np1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R w KQkq - 0 6' },
  { label: 'Carlsbad Minority Structure', fen: 'r2q1rk1/pp1n1ppp/2p1pb2/3p4/3P4/2NBPN2/PPQ2PPP/R4RK1 w - - 0 11' },
  { label: 'Lucena Rook Endgame', fen: '3K4/3P1k2/8/8/8/8/4R3/3r4 w - - 0 1' },
  { label: 'King Opposition Study', fen: '4k3/8/4K3/4P3/8/8/8/8 w - - 0 1' },
];

const storage = {
  async get(key, shared = true) {
    try {
      if (window.storage) {
        const r = await window.storage.get(key, shared);
        return r ? r.value : null;
      }
    } catch {}
    return localStorage.getItem(key);
  },
  async set(key, value, shared = true) {
    try {
      if (window.storage) return await window.storage.set(key, value, shared);
    } catch {}
    return localStorage.setItem(key, value);
  },
  async list(prefix = '', shared = true) {
    try {
      if (window.storage) {
        const r = await window.storage.list(prefix, shared);
        return r ? r.keys : [];
      }
    } catch {}
    const out = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) out.push(k);
    }
    return out;
  },
};

const sharedClub = window.CHESS_CLUB_SHARED === true;

const BOARD_THEMES = {
  walnut: { name: 'Classic Walnut', light: '#ead7ad', dark: '#8b5a2b', frame: '#4a2c0e', accent: '#d4a943' },
  lichessBrown: { name: 'Lichess Maple', light: '#f0d9b5', dark: '#b58863', frame: '#5c3c20', accent: '#d4a943' },
  chessGreen: { name: 'Tournament Green', light: '#eeeed2', dark: '#769656', frame: '#2e4421', accent: '#bacb44' },
  midnight: { name: 'Midnight Blue', light: '#f0eadb', dark: '#263b5f', frame: '#13213a', accent: '#65a7d8' },
  forest: { name: 'Forest Green', light: '#f3ead1', dark: '#356246', frame: '#193c2a', accent: '#d7b75b' },
};

const PIECE_STYLES = {
  classic: { name: 'Classic Staunton', note: 'Traditional ivory and charcoal' },
  warm: { name: 'Warm Wood', note: 'Soft carved-wood finish' },
  contrast: { name: 'High Contrast', note: 'Crisp high-legibility silhouettes' },
};

function loadPreferences() {
  try {
    return {
      board: 'walnut',
      pieces: 'classic',
      coordinates: true,
      sound: true,
      autoQueen: false,
      showLegalMoves: true,
      ...JSON.parse(localStorage.getItem('eis_board_preferences') || '{}'),
    };
  } catch {
    return {
      board: 'walnut',
      pieces: 'classic',
      coordinates: true,
      sound: true,
      autoQueen: false,
      showLegalMoves: true,
    };
  }
}

function applyPreferences() {
  applyLanguageDom(getLang());
  const theme = BOARD_THEMES[State.preferences.board] || BOARD_THEMES.walnut;
  const root = document.documentElement;
  root.style.setProperty('--board-light', theme.light);
  root.style.setProperty('--board-dark', theme.dark);
  root.style.setProperty('--board-frame', theme.frame);
  root.style.setProperty('--board-accent', theme.accent);
  document.body.dataset.pieceStyle = State.preferences.pieces;
  document.body.classList.toggle('hide-coordinates', !State.preferences.coordinates);
  document.body.classList.toggle('hide-legal-dots', !State.preferences.showLegalMoves);
  document.body.classList.toggle('zen-mode', Boolean(State.zenMode));
}

function savePreferences() {
  localStorage.setItem('eis_board_preferences', JSON.stringify(State.preferences));
  applyPreferences();
}

function loadTrainingProgress() {
  try {
    return {
      openings: {},
      traps: {},
      middlegame: {},
      endgames: {},
      tactics: {},
      quizzes: { completedSprints: 0, bestAccuracy: 0, totalCorrect: 0, totalAnswered: 0 },
      rush: { bestBlitz3: 0, bestBlitz5: 0, bestSurvival: 0 },
      streak: 0,
      bestStreak: 0,
      ...JSON.parse(localStorage.getItem('eis_training_progress') || '{}'),
    };
  } catch {
    return {
      openings: {},
      traps: {},
      middlegame: {},
      endgames: {},
      tactics: {},
      quizzes: { completedSprints: 0, bestAccuracy: 0, totalCorrect: 0, totalAnswered: 0 },
      rush: { bestBlitz3: 0, bestBlitz5: 0, bestSurvival: 0 },
      streak: 0,
      bestStreak: 0,
    };
  }
}

function saveTrainingProgress() {
  localStorage.setItem('eis_training_progress', JSON.stringify(State.training));
}

const State = {
  user: null,
  members: {},
  page: 'home',
  flipBoard: false,
  game: null,
  selectedSquare: null,
  legalDests: [],
  lastMove: null,
  promotionPending: null,

  // Master-detail curriculum state
  openingsTab: 'openings',
  openingsSearch: '',
  selectedOpeningId: OPENINGS[0]?.id || null,
  selectedTrapId: TRAPS[0]?.id || null,
  selectedStrategyId: MIDDLEGAME_LESSONS[0]?.id || null,
  selectedEndgameId: ENDGAMES[0]?.id || null,
  studyContext: null,
  studyStep: 0,
  studyMode: 'learn',
  practiceFeedback: null,
  endgameSparring: false,
  endgameSparThinking: false,
  endgameMoves: [],
  endgameViewPly: null,
  showStudyStockfish: true,

  // Puzzles & Quiz Sprint / Puzzle Rush state
  puzzleView: 'catalog', // 'catalog' | 'solver' | 'quiz' | 'rush'
  puzzleCategory: 'All',
  puzzleDifficulty: 'All',
  puzzleQuery: '',
  puzzleUnsolvedOnly: false,
  puzzlePage: 1,
  activePuzzle: PUZZLES[0] || null,
  puzzlePly: 0,
  puzzleViewPly: null,
  puzzleFeedback: null,
  puzzleSolvedThisRun: false,
  puzzleAutoReplying: false,
  showPuzzleStockfish: true,
  puzzleLoadingDaily: false,
  puzzleDailyError: null,
  quizCategory: 'All',
  quizSession: createQuizSession(QUIZZES, { category: 'All', count: 10 }),
  showQuizStockfish: false,
  rushMode: 'blitz3',
  rushSession: null,
  rushGame: null,
  rushPly: 0,
  rushLastMove: null,
  rushFeedback: null,
  rushTimerId: null,
  rushLastTick: 0,
  rushAutoReplying: false,

  // Stockfish 19 Live Coach, PGN Game Analyzer & Move Cursor state
  coachMode: 'guided', // 'guided' | 'sandbox' | 'blunder-check' | 'pgn-analysis'
  coachEngineLevel: 3,
  coachPlayerColor: 'w',
  coachGame: null,
  coachInitialFen: STANDARD_START_FEN,
  coachMoves: [],
  coachPly: 0,
  coachThinking: false,
  coachLastGrade: null,
  coachPendingBlunder: null,
  coachFenInput: '',
  coachFenError: null,
  coachPausedOnMateOrDraw: null,
  showCoachArrows: true,
  coachImportedGames: [],
  coachSelectedGameIdx: 0,
  coachGameMeta: null,
  coachImportDrawerOpen: false,
  coachImportTab: 'file', // 'file' | 'online'
  coachOnlinePlatform: 'lichess',
  coachOnlineUsername: '',
  coachOnlineUrl: '',
  coachOnlineLoading: false,
  coachEditorTool: 'move',
  coachPasteBuffer: '',
  coachImportError: null,
  coachFullScanRunning: false,
  coachFullScanDone: 0,
  coachScanToken: 0,

  // Live Stockfish snapshot, Syzygy Tablebase & Board UX state
  sfSnapshot: null,
  sfTargetFen: null,
  tablebaseCacheFen: null,
  tablebaseSnap: null,
  tablebaseLoading: false,
  zenMode: false,
  userAnnotations: { circles: [], arrows: [] },
  premove: null,
  boardMaximized: false,
  studySidebarCollapsed: false,
  mobileStudyListOpen: false,
  dom: {
    evalBar: null,
    arrowsSvg: null,
    userAnnotSvg: null,
    sfPanel: null,
    arenaDualStrip: null,
    arenaWhiteCard: null,
    arenaBlackCard: null,
    whiteClock: null,
    blackClock: null,
    rushTimerEl: null,
  },

  // Dual Engine Arena state
  arenaWhiteProfileId: 'sf19-nnue',
  arenaWhiteTier: 4,
  arenaBlackProfileId: 'tal-hce',
  arenaBlackTier: 3,
  arenaPresetIdx: 0,
  arenaPaceMs: 1200,
  arenaTab: 'both', // 'both' | 'white' | 'black' | 'log'
  arenaGame: null,
  arenaInitialFen: null,
  arenaIsChess960: false,
  arenaUciHistory: [],
  arenaHistoryFens: [],
  arenaMoveLog: [],
  arenaPaused: false,
  arenaThinkingSide: null,
  arenaViewPly: null,
  arenaWhiteSnap: null,
  arenaBlackSnap: null,
  arenaWhiteLastMeta: null,
  arenaBlackLastMeta: null,
  arenaEngines: { w: null, b: null },
  arenaLoopToken: 0,
  arenaTimerId: null,

  // Play & Club state
  variant: 'standard',
  playTimeControl: 'unlimited',
  playBerserk: false,
  matchClock: null,
  matchClockTimerId: null,
  matchClockLastTick: 0,
  playEngineProfileId: 'sf19-nnue',
  _humanVsEngineInstance: null,
  playEngineLevel: 3,
  playEngineCustomElo: 1500,
  playEngineUseCustom: false,
  playEngineColor: 'white',
  vsMode: null,
  playerColor: 'w',
  gameRated: false,
  gameWhite: null,
  gameBlack: null,
  gameInitialFen: STANDARD_START_FEN,
  gameMoveHistory: [],
  gameViewPly: null,
  gameOver: false,
  lastResult: null,
  engineThinking: false,
  showPlayCoach: true,
  playCoachLastGrade: null,
  _engineConfig: null,
  _engineLevelDisplay: '',
  authError: null,
  completingEmailLink: false,
  sharedClubs: [],
  clubSyncStatus: null,
  clubSyncing: false,
  preferences: loadPreferences(),
  training: loadTrainingProgress(),
};

// =========================================================
// PROGRESS & CLUB HELPERS
// =========================================================
function solvedPuzzleSet() {
  const solved = new Set();
  for (const [id, entry] of Object.entries(State.training.tactics || {})) {
    if (entry?.solved) solved.add(id);
  }
  return solved;
}

function trainingSummary() {
  const completedOpenings = Object.values(State.training.openings || {}).filter((p) => p?.complete).length;
  const completedTraps = Object.values(State.training.traps || {}).filter((p) => p?.complete).length;
  const completedStrategy = Object.values(State.training.middlegame || {}).filter((p) => p?.complete).length;
  const completedEndgames = Object.values(State.training.endgames || {}).filter((p) => p?.complete).length;
  const solvedPuzzles = solvedPuzzleSet().size;
  const tacticVals = Object.values(State.training.tactics || {});
  const attempts = tacticVals.reduce((s, p) => s + (p?.attempts || 0), 0);
  const correct = tacticVals.reduce((s, p) => s + (p?.correct || 0), 0);
  return {
    completedOpenings,
    completedTraps,
    completedStrategy,
    completedEndgames,
    solvedPuzzles,
    attempts,
    accuracy: attempts ? Math.round((correct / attempts) * 100) : 0,
  };
}

function recordStudyProgress(kind, item, step, total) {
  if (!item?.id) return;
  if (!State.training[kind]) State.training[kind] = {};
  const prev = State.training[kind][item.id] || { step: 0, complete: false };
  const completedNow = prev.complete || step >= total;
  State.training[kind][item.id] = {
    ...prev,
    step: Math.max(prev.step || 0, step),
    complete: completedNow,
    updatedAt: Date.now(),
  };
  saveTrainingProgress();
  if (sharedClub && State.sharedClubs[0]?.id) {
    saveLessonProgress({
      clubId: State.sharedClubs[0].id,
      lessonId: `${kind}:${item.id}`,
      completedSteps: step,
      completedAt: completedNow ? new Date().toISOString() : null,
    }).catch(() => {});
  }
}

function recordPracticeMastery(kind, item) {
  if (!item?.id) return;
  if (!State.training[kind]) State.training[kind] = {};
  State.training[kind][item.id] = {
    ...(State.training[kind][item.id] || {}),
    step: (item.line || []).length,
    complete: true,
    practiced: true,
    practicedAt: Date.now(),
  };
  saveTrainingProgress();
}

function recordPuzzleResult(puzzle, correct, usedHint = false) {
  if (!puzzle?.id) return;
  const prev = State.training.tactics[puzzle.id] || { attempts: 0, correct: 0, solved: false };
  prev.attempts += 1;
  if (correct) {
    prev.correct += 1;
    prev.solved = true;
    prev.solvedAt = Date.now();
    if (!State.puzzleSolvedThisRun) {
      State.training.streak = (State.training.streak || 0) + 1;
      State.training.bestStreak = Math.max(State.training.bestStreak || 0, State.training.streak);
    }
    State.puzzleSolvedThisRun = true;
  } else {
    State.training.streak = 0;
  }
  State.training.tactics[puzzle.id] = prev;
  saveTrainingProgress();

  if (sharedClub && State.sharedClubs[0]?.id) {
    recordPuzzleAttempt({
      clubId: State.sharedClubs[0].id,
      puzzleId: puzzle.id,
      correct,
      usedHint,
      elapsedSeconds: 0,
    }).catch(() => {});
  }
}

async function loadMembers() {
  if (sharedClub) {
    State.members = {};
    return;
  }
  const raw = await storage.get('eis_members', true);
  if (raw) {
    try {
      State.members = JSON.parse(raw);
    } catch {
      State.members = {};
    }
  } else {
    State.members = {};
  }
}
async function saveMembers() {
  await storage.set('eis_members', JSON.stringify(State.members), true);
}
async function registerMember(name) {
  const id = 'm_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
  State.members[id] = { id, name, rating: 1200, wins: 0, losses: 0, draws: 0, joined: Date.now() };
  await saveMembers();
  return id;
}
async function setUser(id) {
  State.user = State.members[id];
  await storage.set('eis_currentUser', id, true);
}
async function loadCurrentUser() {
  if (sharedClub) {
    try {
      State.completingEmailLink = await isEmailSignInLink();
      const savedEmail = localStorage.getItem('chess-club:email-for-sign-in');
      if (State.completingEmailLink && savedEmail) await completeEmailSignInLink(savedEmail);
      const user = await currentFirebaseUser();
      if (user) {
        const name = user.displayName || (user.email ? user.email.split('@')[0] : t('clubMemberFallback'));
        State.user = { id: user.uid, name, rating: 1200, wins: 0, losses: 0, draws: 0 };
        await upsertMyProfile(name);
        State.sharedClubs = await listMyClubs();
      }
    } catch (error) {
      State.authError = error.message;
    }
    return;
  }
  const id = await storage.get('eis_currentUser', true);
  if (id && State.members[id]) State.user = State.members[id];
}
async function logoutUser() {
  State.user = null;
  await storage.set('eis_currentUser', '', true);
}
async function saveGameRecord(record) {
  const key = 'eis_game_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
  await storage.set(key, JSON.stringify(record), true);
}
async function loadGameRecords() {
  const keys = await storage.list('eis_game_', true);
  const items = [];
  for (const k of keys) {
    const raw = await storage.get(k, true);
    if (raw) {
      try {
        items.push(JSON.parse(raw));
      } catch {}
    }
  }
  return items.sort((a, b) => b.ts - a.ts);
}

// =========================================================
// STOCKFISH 19 LIVE ENGINE WIRING (Non-flickering)
// =========================================================
function applyStockfishDom(snap, grade = null) {
  if (State.dom.evalBar) {
    updateEvalBar(State.dom.evalBar, {
      whiteCp: snap?.whiteCp ?? 0,
      whiteMate: snap?.whiteMate ?? null,
      flipped: State.flipBoard,
    });
  }
  if (State.dom.arrowsSvg) {
    updateBoardArrows(State.dom.arrowsSvg, snap?.lines || [], {
      flipped: State.flipBoard,
      show: State.showCoachArrows,
    });
  }
  if (State.dom.sfPanel) {
    updateStockfishPanel(State.dom.sfPanel, snap, grade, {
      showArrows: State.showCoachArrows,
    });
  }
}

function triggerLiveAnalysis(fen, { depth = 13, multiPv = 3, grade = null } = {}) {
  State.sfTargetFen = fen;
  if (State.sfSnapshot && State.sfSnapshot.fen === fen && !State.sfSnapshot.evaluating) {
    applyStockfishDom(State.sfSnapshot, grade);
    return Promise.resolve(State.sfSnapshot);
  }
  const initial = {
    fen,
    engineFlavor: stockfishClient.engineFlavor,
    depth: 0,
    nps: 0,
    lines: [],
    whiteCp: 0,
    whiteMate: null,
    evaluating: true,
  };
  applyStockfishDom(initial, grade);

  return stockfishClient
    .analyze(fen, {
      depth,
      multiPv,
      chess960: false,
      onUpdate: (snap) => {
        if (!snap || State.sfTargetFen !== fen) return;
        State.sfSnapshot = snap;
        applyStockfishDom(snap, grade);
      },
    })
    .then((snap) => {
      if (snap && State.sfTargetFen === fen) {
        State.sfSnapshot = snap;
        applyStockfishDom(snap, grade);
      }
      return snap;
    })
    .catch(() => null);
}

function stopArenaLoop() {
  State.arenaLoopToken += 1;
  if (State.arenaTimerId) {
    clearTimeout(State.arenaTimerId);
    State.arenaTimerId = null;
  }
  if (State.arenaEngines.w) State.arenaEngines.w.stop();
  if (State.arenaEngines.b) State.arenaEngines.b.stop();
  State.arenaThinkingSide = null;
}

function disposeArenaEngines() {
  stopArenaLoop();
  if (State.arenaEngines.w) {
    State.arenaEngines.w.dispose();
    State.arenaEngines.w = null;
  }
  if (State.arenaEngines.b) {
    State.arenaEngines.b.dispose();
    State.arenaEngines.b = null;
  }
}

function stopCoachFullGameScan() {
  State.coachScanToken += 1;
  State.coachFullScanRunning = false;
}

function stopMatchClock() {
  if (State.matchClockTimerId) {
    clearInterval(State.matchClockTimerId);
    State.matchClockTimerId = null;
  }
}

function stopRushTimer() {
  if (State.rushTimerId) {
    clearInterval(State.rushTimerId);
    State.rushTimerId = null;
  }
}

function clearUserAnnotations() {
  State.userAnnotations = { circles: [], arrows: [] };
  if (State.dom.userAnnotSvg) {
    updateUserAnnotationsSvg(State.dom.userAnnotSvg, State.userAnnotations, { flipped: State.flipBoard });
  }
}

function loadTablebaseForFen(fen) {
  if (!fen || countBoardPieces(fen) > 7 || !isStockfishSafeFen(fen, Chess)) {
    State.tablebaseCacheFen = fen;
    State.tablebaseSnap = null;
    State.tablebaseLoading = false;
    return;
  }
  if (State.tablebaseCacheFen === fen) return;
  State.tablebaseCacheFen = fen;
  State.tablebaseSnap = null;
  State.tablebaseLoading = true;
  fetchLichessTablebase(fen)
    .then((tb) => {
      if (State.tablebaseCacheFen === fen) {
        State.tablebaseSnap = tb;
        State.tablebaseLoading = false;
        render();
      }
    })
    .catch(() => {
      if (State.tablebaseCacheFen === fen) {
        State.tablebaseSnap = null;
        State.tablebaseLoading = false;
        render();
      }
    });
}

async function copyTextWithFeedback(text, btnEl, defaultLabel) {
  try {
    await navigator.clipboard?.writeText(text);
    if (btnEl) {
      btnEl.textContent = t('copied');
      setTimeout(() => {
        if (btnEl.isConnected) btnEl.textContent = defaultLabel;
      }, 1400);
    }
  } catch {}
}

function makeMaxBoardButton() {
  const title = State.boardMaximized ? t('fitBoardTip') : t('maxBoardTip');
  const label = State.boardMaximized ? t('fitLabel') : t('maxLabel');
  const btn = el(`<button type="button" class="btn ghost sm ${State.boardMaximized ? 'active' : ''}" title="${escapeHtml(title)}">${iconSvg(State.boardMaximized ? 'compress' : 'expand', 13)} <span>${escapeHtml(label)}</span></button>`);
  btn.onclick = () => {
    State.boardMaximized = !State.boardMaximized;
    render();
  };
  return btn;
}

function buildMoveTransportBar({ ply = 0, total = 0, onNavigate }) {
  const wrap = document.createElement('div');
  wrap.className = 'move-transport';
  const cur = Math.max(0, Math.min(total, Number(ply) || 0));

  const btns = [
    { action: 'first', html: `${iconSvg('first', 13)}<span>${escapeHtml(t('first'))}</span>`, disabled: cur <= 0, title: t('firstMoveTip') },
    { action: 'back', html: `${iconSvg('prev', 13)}<span>${escapeHtml(t('back'))}</span>`, disabled: cur <= 0, title: t('prevMoveTip') },
    { action: 'forward', html: `<span>${escapeHtml(t('forward'))}</span>${iconSvg('next', 13)}`, disabled: cur >= total, title: t('nextMoveTip') },
    { action: 'last', html: `<span>${escapeHtml(t('last'))}</span>${iconSvg('last', 13)}`, disabled: cur >= total, title: t('lastMoveTip') },
  ];

  btns.forEach(({ action, html, disabled, title }) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.title = title;
    b.setAttribute('aria-label', title);
    b.disabled = disabled;
    b.innerHTML = html;
    b.onclick = () => {
      if (onNavigate) onNavigate(stepPly(cur, action, total));
    };
    wrap.appendChild(b);
  });
  return wrap;
}

// =========================================================
// ROUTING & SHELL
// =========================================================
const ROUTE_ALIASES = {
  traps: 'openings',
  tactics: 'puzzles',
  leaderboard: 'club',
  history: 'club',
  'vs-human-setup': 'play-menu',
  'vs-engine-setup': 'play-menu',
};

function navigate(page, ctx = null) {
  stockfishClient.stop();
  stopArenaLoop();
  stopCoachFullGameScan();
  stopMatchClock();
  stopRushTimer();
  State.selectedSquare = null;
  State.legalDests = [];
  State.promotionPending = null;
  State.premove = null;
  State.userAnnotations = { circles: [], arrows: [] };
  State.mobileStudyListOpen = false;

  if (page === 'traps') State.openingsTab = 'traps';
  if (page === 'tactics') State.puzzleCategory = 'Tactics';
  const mapped = ROUTE_ALIASES[page] || page;

  if (mapped !== 'engine-arena') disposeArenaEngines();
  if (mapped !== 'vs-engine' && State._humanVsEngineInstance) {
    State._humanVsEngineInstance.dispose();
    State._humanVsEngineInstance = null;
  }

  if (mapped === 'study-opening' && ctx) {
    State.openingsTab = 'openings';
    State.selectedOpeningId = ctx.id;
    State.studyStep = 0;
    State.page = 'openings';
    render();
    return;
  }
  if (mapped === 'study-trap' && ctx) {
    State.openingsTab = 'traps';
    State.selectedTrapId = ctx.id;
    State.studyStep = 0;
    State.page = 'openings';
    render();
    return;
  }
  if (mapped === 'tactics-puzzle' && ctx) {
    openPuzzleInSolver(ctx);
    return;
  }
  if (mapped === 'endgame-study' && ctx) {
    State.selectedEndgameId = ctx.id;
    State.endgameSparring = false;
    State.page = 'endgames';
    render();
    return;
  }

  State.page = mapped;
  render();
}

function render() {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '';
  State.dom = {
    evalBar: null,
    arrowsSvg: null,
    userAnnotSvg: null,
    sfPanel: null,
    arenaDualStrip: null,
    arenaWhiteCard: null,
    arenaBlackCard: null,
    whiteClock: null,
    blackClock: null,
    rushTimerEl: null,
  };
  State.sfTargetFen = null;
  applyPreferences();

  if (!State.user) {
    app.appendChild(renderLogin());
    return;
  }

  app.appendChild(renderHeader());
  const main = document.createElement('main');
  main.className = 'app-main';
  const shell = document.createElement('div');
  shell.className = 'view-shell';

  const pages = {
    home: renderHome,
    coach: renderCoach,
    puzzles: renderPuzzles,
    openings: renderOpenings,
    strategy: renderStrategy,
    endgames: renderEndgames,
    'play-menu': renderPlayMenu,
    'vs-human': renderVsHuman,
    'vs-engine': renderVsEngine,
    'engine-arena': renderEngineArena,
    club: renderClub,
  };
  const viewFn = pages[State.page] || renderHome;
  shell.appendChild(viewFn());
  main.appendChild(shell);
  app.appendChild(main);

  if (State.zenMode) {
    const exitZen = el(`<button type="button" class="zen-exit-btn" title="${escapeHtml(t('zenModeTip'))}">${iconSvg('zen', 14)} <span>${escapeHtml(t('exitZenBtn'))}</span></button>`);
    exitZen.onclick = () => {
      State.zenMode = false;
      render();
    };
    app.appendChild(exitZen);
  }
}

function renderHeader() {
  const h = document.createElement('header');
  h.className = 'site';
  const c = document.createElement('div');
  c.className = 'container';

  const brand = el(`<div class="brand">
    <div class="seal" role="img" aria-label="${escapeHtml(t('logoAlt'))}"></div>
    <div class="brand-text">
      <span class="title">${escapeHtml(t('schoolName'))}</span>
      <span class="sub">${escapeHtml(t('clubSub'))}</span>
    </div>
  </div>`);
  brand.onclick = () => navigate('home');

  const navItems = [
    ['home', t('navHall'), 'hall'],
    ['coach', t('navCoach'), 'coach'],
    ['puzzles', t('navPuzzles'), 'puzzles'],
    ['openings', t('navOpenings'), 'openings'],
    ['strategy', t('navStrategy'), 'strategy'],
    ['endgames', t('navEndgames'), 'endgames'],
    ['play-menu', t('navPlay'), 'play'],
    ['club', t('navClub'), 'club'],
  ];

  const nav = document.createElement('nav');
  nav.className = 'primary';
  navItems.forEach(([p, label, icon]) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.innerHTML = `${iconSvg(icon, 15)} <span>${escapeHtml(label)}</span>`;
    const isActive =
      State.page === p ||
      (p === 'play-menu' && ['vs-human', 'vs-engine', 'engine-arena'].includes(State.page));
    if (isActive) b.classList.add('active');
    b.onclick = () => navigate(p);
    nav.appendChild(b);
  });

  const actions = document.createElement('div');
  actions.className = 'header-actions';
  const soundBtn = el(`<button class="customize-button header-icon-btn ${State.preferences.sound ? '' : 'muted'}" type="button" id="soundToggleBtn" title="${escapeHtml(State.preferences.sound ? t('soundOnTip') : t('soundOffTip'))}" aria-label="${escapeHtml(t('soundLabel'))}">${iconSvg(State.preferences.sound ? 'volume' : 'mute', 14)}</button>`);
  soundBtn.onclick = () => {
    State.preferences.sound = !State.preferences.sound;
    savePreferences();
    if (State.preferences.sound) playChessSound('move', true);
    render();
  };

  const zenBtn = el(`<button class="customize-button header-icon-btn ${State.zenMode ? 'active' : ''}" type="button" id="zenToggleBtn" title="${escapeHtml(t('zenModeTip'))}">${iconSvg('zen', 14)} <span>${escapeHtml(t('zenModeBtn'))}</span></button>`);
  zenBtn.onclick = () => {
    State.zenMode = !State.zenMode;
    render();
  };

  const langBtn = el(`<button class="lang-switch-btn" type="button" id="langSwitchBtn" title="${escapeHtml(t('langSwitchTitle'))}">${iconSvg('globe', 14)} <span>${escapeHtml(t('langSwitchText'))}</span></button>`);
  langBtn.onclick = () => {
    toggleLang();
    render();
  };

  const customizeBtn = el(`<button class="customize-button" type="button" title="${escapeHtml(t('boardStudioTitle'))}">${iconSvg('spark', 14)} <span>${escapeHtml(t('boardBtn'))}</span></button>`);
  customizeBtn.onclick = showCustomization;

  const pill = el(`<div class="user-pill">
    <div class="avatar">${(State.user.name[0] || '?').toUpperCase()}</div>
    <div class="name">${escapeHtml(State.user.name)}</div>
    <div class="rating tabular-nums">${State.user.rating}</div>
    <button type="button" id="logoutBtn" title="${escapeHtml(t('switchOrSignOutTitle'))}">${escapeHtml(sharedClub ? t('signOut') : t('switchUser'))}</button>
  </div>`);
  pill.querySelector('#logoutBtn').onclick = async () => {
    stockfishClient.stop();
    disposeArenaEngines();
    stopMatchClock();
    stopRushTimer();
    if (State._humanVsEngineInstance) {
      State._humanVsEngineInstance.dispose();
      State._humanVsEngineInstance = null;
    }
    if (sharedClub) {
      await signOutFirebase();
      State.user = null;
    } else {
      await logoutUser();
    }
    render();
  };

  actions.appendChild(soundBtn);
  actions.appendChild(zenBtn);
  actions.appendChild(langBtn);
  actions.appendChild(customizeBtn);
  actions.appendChild(pill);
  c.appendChild(brand);
  c.appendChild(nav);
  c.appendChild(actions);
  h.appendChild(c);
  return h;
}

// =========================================================
// CUSTOMIZATION MODAL
// =========================================================
function showCustomization() {
  const lang = getLang();
  const back = document.createElement('div');
  back.className = 'modal-backdrop';
  const modal = document.createElement('div');
  modal.className = 'modal customization-modal';
  modal.innerHTML = `<button class="modal-close" type="button" aria-label="${escapeHtml(t('close'))}">×</button>
    <h2>${escapeHtml(t('boardStudioTitle'))}</h2>
    <p class="custom-intro">${escapeHtml(t('boardStudioIntro'))}</p>
    <div class="custom-section">
      <h3>${escapeHtml(t('languageLabel'))}</h3>
      <div class="pill-switch" id="studioLangSwitch">
        <button type="button" data-lang="en" class="${lang === 'en' ? 'active' : ''}">${escapeHtml(t('langOptionEn'))}</button>
        <button type="button" data-lang="ar" class="${lang === 'ar' ? 'active' : ''}">${escapeHtml(t('langOptionAr'))}</button>
      </div>
    </div>
    <div class="custom-section"><h3>${escapeHtml(t('boardThemeLabel'))}</h3><div class="choice-grid board-choices"></div></div>
    <div class="custom-section"><h3>${escapeHtml(t('pieceStyleLabel'))}</h3><div class="choice-grid piece-choices"></div></div>
    <div class="studio-toggles">
      <label class="coordinate-toggle"><input type="checkbox" id="coordToggle" ${State.preferences.coordinates ? 'checked' : ''}/> ${escapeHtml(t('showCoordinates'))}</label>
      <label class="coordinate-toggle"><input type="checkbox" id="soundPrefToggle" ${State.preferences.sound ? 'checked' : ''}/> ${escapeHtml(t('soundLabel'))}</label>
      <label class="coordinate-toggle"><input type="checkbox" id="autoQueenToggle" ${State.preferences.autoQueen ? 'checked' : ''}/> ${escapeHtml(t('autoQueenLabel'))}</label>
      <label class="coordinate-toggle"><input type="checkbox" id="legalDotsToggle" ${State.preferences.showLegalMoves ? 'checked' : ''}/> ${escapeHtml(t('showLegalMovesLabel'))}</label>
    </div>`;

  modal.querySelectorAll('#studioLangSwitch button').forEach((btn) => {
    btn.onclick = () => {
      setLang(btn.dataset.lang);
      back.remove();
      render();
      showCustomization();
    };
  });

  const boardChoices = modal.querySelector('.board-choices');
  Object.entries(BOARD_THEMES).forEach(([id, themeObj]) => {
    const label = localizeBoardThemeName(id, themeObj.name, lang);
    const btn = el(`<button class="visual-choice ${State.preferences.board === id ? 'selected' : ''}" type="button"><span class="board-swatch" style="--swatch-light:${themeObj.light};--swatch-dark:${themeObj.dark}"></span><strong>${escapeHtml(label)}</strong></button>`);
    btn.onclick = () => {
      State.preferences.board = id;
      savePreferences();
      back.remove();
      showCustomization();
    };
    boardChoices.appendChild(btn);
  });

  const pieceChoices = modal.querySelector('.piece-choices');
  Object.entries(PIECE_STYLES).forEach(([id, styleObj]) => {
    const loc = localizePieceStyle(id, styleObj, lang);
    const btn = el(`<button class="visual-choice piece-choice ${State.preferences.pieces === id ? 'selected' : ''}" type="button"><span class="piece-preview ${id}">${PIECE_SVG.N}${PIECE_SVG.q}</span><strong>${escapeHtml(loc.name)}</strong><small>${escapeHtml(loc.note)}</small></button>`);
    btn.onclick = () => {
      State.preferences.pieces = id;
      savePreferences();
      back.remove();
      showCustomization();
    };
    pieceChoices.appendChild(btn);
  });

  modal.querySelector('#coordToggle').onchange = (e) => {
    State.preferences.coordinates = e.target.checked;
    savePreferences();
  };
  modal.querySelector('#soundPrefToggle').onchange = (e) => {
    State.preferences.sound = e.target.checked;
    savePreferences();
    if (State.preferences.sound) playChessSound('move', true);
  };
  modal.querySelector('#autoQueenToggle').onchange = (e) => {
    State.preferences.autoQueen = e.target.checked;
    savePreferences();
  };
  modal.querySelector('#legalDotsToggle').onchange = (e) => {
    State.preferences.showLegalMoves = e.target.checked;
    savePreferences();
  };
  modal.querySelector('.modal-close').onclick = () => back.remove();
  back.onclick = (e) => {
    if (e.target === back) back.remove();
  };
  back.appendChild(modal);
  document.getElementById('app').appendChild(back);
}

// =========================================================
// LOGIN
// =========================================================
function renderLogin() {
  if (sharedClub) return renderSharedLogin();
  const stage = document.createElement('div');
  stage.className = 'login-stage';
  const card = document.createElement('div');
  card.className = 'card ornate login-card';
  const memberCount = Object.keys(State.members).length;
  card.innerHTML = `
    <div class="login-lang-bar">
      <button type="button" class="login-lang-btn" id="loginLangBtn" title="${escapeHtml(t('langSwitchTitle'))}">${iconSvg('globe', 14)} <span>${escapeHtml(t('langSwitchText'))}</span></button>
    </div>
    <div class="crest" role="img" aria-label="${escapeHtml(t('logoAlt'))}"></div>
    <h1>${escapeHtml(t('schoolName'))}</h1>
    <div style="font-family:'JetBrains Mono',monospace;color:var(--gold);letter-spacing:.22em;text-transform:uppercase;font-size:.76rem;margin-top:.15rem">${escapeHtml(t('clubSub'))}</div>
    <div class="ornament"></div>
    <p class="italic" style="color:var(--ink-soft)">${escapeHtml(t('loginSubtitle', { studies: OPENINGS.length + TRAPS.length + MIDDLEGAME_LESSONS.length + ENDGAMES.length, puzzles: PUZZLES.length, quizzes: QUIZZES.length }))}</p>
    <div style="text-align:start;margin-top:.9rem">
      <label for="newName">${escapeHtml(t('takeSeat'))}</label>
      <div style="display:flex;gap:.5rem">
        <input id="newName" name="newName" autocomplete="name" placeholder="${escapeHtml(t('namePlaceholder'))}" />
        <button class="btn gold" id="joinBtn" type="button">${escapeHtml(t('enterClub'))}</button>
      </div>
    </div>
    ${memberCount > 0 ? `<hr class="fancy" />
    <div style="text-align:start">
      <label>${escapeHtml(t('returningMembers'))}</label>
      <div class="members-grid" id="memberGrid"></div>
    </div>` : ''}
  `;
  card.querySelector('#loginLangBtn').onclick = () => {
    toggleLang();
    render();
  };
  card.querySelector('#joinBtn').onclick = async () => {
    const name = card.querySelector('#newName').value.trim();
    if (!name) {
      card.querySelector('#newName').focus();
      return;
    }
    if (name.length > 30) {
      alert(t('nameTooLong'));
      return;
    }
    const id = await registerMember(name);
    await setUser(id);
    State.page = 'home';
    render();
  };
  card.querySelector('#newName').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') card.querySelector('#joinBtn').click();
  });
  if (memberCount > 0) {
    const grid = card.querySelector('#memberGrid');
    Object.values(State.members)
      .sort((a, b) => b.rating - a.rating)
      .forEach((m) => {
        const tEl = el(`<div class="member-tile">
          <div class="avatar">${(m.name[0] || '?').toUpperCase()}</div>
          <div class="nm">${escapeHtml(m.name)}</div>
          <div class="rt tabular-nums">${m.rating}</div>
        </div>`);
        tEl.onclick = async () => {
          await setUser(m.id);
          State.page = 'home';
          render();
        };
        grid.appendChild(tEl);
      });
  }
  stage.appendChild(card);
  return stage;
}

function renderSharedLogin() {
  const stage = document.createElement('div');
  stage.className = 'login-stage';
  const card = document.createElement('div');
  card.className = 'card ornate login-card';
  const action = State.completingEmailLink ? t('completeSignIn') : t('sendLink');
  card.innerHTML = `
    <div class="login-lang-bar">
      <button type="button" class="login-lang-btn" id="loginLangBtn" title="${escapeHtml(t('langSwitchTitle'))}">${iconSvg('globe', 14)} <span>${escapeHtml(t('langSwitchText'))}</span></button>
    </div>
    <div class="crest" role="img" aria-label="${escapeHtml(t('logoAlt'))}"></div>
    <h1>${escapeHtml(t('schoolName'))}</h1>
    <div style="font-family:'JetBrains Mono',monospace;color:var(--gold);letter-spacing:.22em;text-transform:uppercase;font-size:.76rem;margin-top:.15rem">${escapeHtml(t('clubSub'))}</div>
    <div class="ornament"></div>
    <p class="italic" style="color:var(--ink-soft)">${escapeHtml(State.completingEmailLink ? t('sharedCompleteHint') : t('sharedSendHint'))}</p>
    ${State.authError ? `<p role="alert" style="color:var(--burgundy)">${escapeHtml(State.authError)}</p>` : ''}
    <div style="text-align:start;margin-top:1rem"><label for="email">${escapeHtml(t('schoolEmailLabel'))}</label><div style="display:flex;gap:.5rem"><input id="email" type="email" autocomplete="email" required placeholder="${escapeHtml(t('schoolEmailPlaceholder'))}" /><button class="btn gold" id="emailBtn" type="button">${escapeHtml(action)}</button></div></div>`;
  card.querySelector('#loginLangBtn').onclick = () => {
    toggleLang();
    render();
  };
  const submit = async () => {
    const email = card.querySelector('#email').value.trim();
    if (!email) {
      card.querySelector('#email').focus();
      return;
    }
    const button = card.querySelector('#emailBtn');
    button.disabled = true;
    try {
      if (State.completingEmailLink) {
        const user = await completeEmailSignInLink(email);
        const name = user.email ? user.email.split('@')[0] : t('clubMemberFallback');
        State.user = { id: user.uid, name, rating: 1200, wins: 0, losses: 0, draws: 0 };
        await upsertMyProfile(name);
        State.sharedClubs = await listMyClubs();
        State.completingEmailLink = false;
        State.authError = null;
        render();
      } else {
        await sendEmailSignInLink(email);
        button.textContent = t('checkYourEmail');
      }
    } catch (error) {
      State.authError = error.message;
      render();
    }
  };
  card.querySelector('#emailBtn').onclick = submit;
  card.querySelector('#email').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submit();
  });
  stage.appendChild(card);
  return stage;
}

// =========================================================
// HALL (Zero-Scroll Bento Dashboard)
// =========================================================
function dailyPuzzle() {
  const dayIndex = Math.floor(Date.now() / 86400000);
  return PUZZLES[dayIndex % PUZZLES.length] || PUZZLES[0];
}

function renderHome() {
  const grid = document.createElement('div');
  grid.className = 'hall-grid';
  const sum = trainingSummary();
  const daily = dailyPuzzle();
  const locDaily = localizePuzzle(daily);
  const quizMeta = State.training.quizzes || {};

  // Card 1: Student Welcome + Stats
  const welcome = el(`<section class="bento-card bento-welcome">
    <div>
      <h1>${t('welcomeUser', { name: `<em>${escapeHtml(State.user.name)}</em>` })}</h1>
      <p style="margin-top:.3rem">${escapeHtml(t('hallIntro'))}</p>
    </div>
    <div class="welcome-stats">
      <div class="stat-box"><strong class="tabular-nums">${State.user.rating}</strong><span>${escapeHtml(t('clubElo'))}</span></div>
      <div class="stat-box"><strong class="tabular-nums">${State.training.streak || 0}</strong><span>${escapeHtml(t('puzzleStreak'))}</span></div>
      <div class="stat-box"><strong class="tabular-nums">${sum.solvedPuzzles}/${PUZZLES.length}</strong><span>${escapeHtml(t('solvedLabel'))}</span></div>
    </div>
    <div style="display:flex;gap:.45rem;flex-wrap:wrap">
      <button type="button" class="btn gold sm" id="hallCoach">${iconSvg('coach', 14)} ${escapeHtml(t('openCoach'))}</button>
      <button type="button" class="btn ghost sm" style="color:var(--cream);border-color:var(--gold)" id="hallArena">${iconSvg('duel', 14)} ${escapeHtml(t('engineDuel'))}</button>
      <button type="button" class="btn ghost sm" style="color:var(--cream);border-color:var(--gold)" id="hallPlay">${iconSvg('play', 14)} ${escapeHtml(t('playGame'))}</button>
    </div>
  </section>`);
  welcome.querySelector('#hallCoach').onclick = () => navigate('coach');
  welcome.querySelector('#hallArena').onclick = () => startEngineArenaMatch();
  welcome.querySelector('#hallPlay').onclick = () => navigate('play-menu');
  grid.appendChild(welcome);

  // Card 2: Stockfish 19 Coach Launcher
  const coachCard = el(`<section class="bento-card coach-launch">
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:.4rem">
        <h3>${iconSvg('coach', 16)} ${escapeHtml(t('sfCoachTitle'))}</h3>
        <span class="tag green">${escapeHtml(t('multiPvTag'))}</span>
      </div>
      <p class="small" style="margin-top:.25rem">${escapeHtml(t('coachCardDesc'))}</p>
    </div>
    <div style="display:flex;gap:.35rem;flex-wrap:wrap">
      <button type="button" class="btn sm" id="goGuided">${escapeHtml(t('guidedSparring'))}</button>
      <button type="button" class="btn ghost sm" id="goSandbox">${escapeHtml(t('fenLab'))}</button>
      <button type="button" class="btn ghost sm" id="goImportPgn">${iconSvg('upload', 13)} ${escapeHtml(t('importPgnText'))}</button>
      <button type="button" class="btn ghost sm" id="goBlunder">${escapeHtml(t('blunderCheck'))}</button>
    </div>
  </section>`);
  coachCard.querySelector('#goGuided').onclick = () => {
    State.coachMode = 'guided';
    navigate('coach');
  };
  coachCard.querySelector('#goSandbox').onclick = () => {
    State.coachMode = 'sandbox';
    navigate('coach');
  };
  coachCard.querySelector('#goImportPgn').onclick = () => {
    State.coachMode = 'pgn-analysis';
    State.coachImportDrawerOpen = true;
    navigate('coach');
  };
  coachCard.querySelector('#goBlunder').onclick = () => {
    State.coachMode = 'blunder-check';
    navigate('coach');
  };
  grid.appendChild(coachCard);

  // Card 3: Daily Puzzle + Puzzle Rush + Quiz Sprint Launcher
  const dailyCard = el(`<section class="bento-card quiz-launch">
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:.4rem">
        <h3>${iconSvg('spark', 16)} ${escapeHtml(t('dailyTraining'))}</h3>
        <span class="tag gold tabular-nums">${escapeHtml(t('eloTag', { rating: daily.rating }))}</span>
      </div>
      <p class="small" style="margin-top:.2rem"><strong>${escapeHtml(locDaily.theme)}</strong> (${escapeHtml(tCategory(daily.category))} · ${escapeHtml(tSide(daily.sideToMove))})</p>
      <p class="small">${escapeHtml(t('quizSprintsStats', { count: quizMeta.completedSprints || 0, acc: quizMeta.bestAccuracy || 0 }))}</p>
    </div>
    <div style="display:flex;gap:.35rem;flex-wrap:wrap">
      <button type="button" class="btn gold sm" id="solveDaily">${iconSvg('puzzles', 14)} ${escapeHtml(t('solveDaily'))}</button>
      <button type="button" class="btn sm" id="startRush">${iconSvg('flame', 14)} ${escapeHtml(t('puzzleRushCta'))}</button>
      <button type="button" class="btn ghost sm" id="startSprint">${iconSvg('trophy', 14)} ${escapeHtml(t('quizSprint10'))}</button>
      <button type="button" class="btn ghost sm" id="hallLichessDaily">${iconSvg('cloud', 13)} ${escapeHtml(t('lichessDailyBtn'))}</button>
      <button type="button" class="btn ghost sm" id="hallChessComDaily">${iconSvg('cloud', 13)} ${escapeHtml(t('chessComDailyBtn'))}</button>
    </div>
  </section>`);
  dailyCard.querySelector('#solveDaily').onclick = () => openPuzzleInSolver(daily);
  dailyCard.querySelector('#startRush').onclick = () => {
    State.puzzleView = 'rush';
    State.rushSession = null;
    navigate('puzzles');
  };
  dailyCard.querySelector('#startSprint').onclick = () => {
    State.puzzleView = 'quiz';
    State.quizCategory = 'All';
    State.quizSession = createQuizSession(QUIZZES, { category: 'All', count: 10, offset: quizMeta.completedSprints || 0 });
    navigate('puzzles');
  };
  dailyCard.querySelector('#hallLichessDaily').onclick = () => launchOnlineDailyPuzzle('lichess');
  dailyCard.querySelector('#hallChessComDaily').onclick = () => launchOnlineDailyPuzzle('chesscom');
  grid.appendChild(dailyCard);

  // Card 4: Complete Library Tracks
  const tracks = el(`<section class="bento-card library-tracks">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <h3>${escapeHtml(t('studyLibraryTitle'))}</h3>
      <span class="small tabular-nums">${escapeHtml(t('libraryCounts', { studies: OPENINGS.length + TRAPS.length + MIDDLEGAME_LESSONS.length + ENDGAMES.length, puzzles: PUZZLES.length, quizzes: QUIZZES.length }))}</span>
    </div>
    <div class="track-strip">
      <button type="button" class="track-tile" id="trkOpenings">
        <div class="track-top"><span>${iconSvg('openings', 15)} ${escapeHtml(t('openingsAndTraps'))}</span><span class="track-count tabular-nums">${sum.completedOpenings + sum.completedTraps}/${OPENINGS.length + TRAPS.length}</span></div>
        <small>${escapeHtml(t('openingsTrackDesc', { openings: OPENINGS.length, traps: TRAPS.length }))}</small>
      </button>
      <button type="button" class="track-tile" id="trkPuzzles">
        <div class="track-top"><span>${iconSvg('puzzles', 15)} ${escapeHtml(t('puzzleVaultQuizzes'))}</span><span class="track-count tabular-nums">${sum.solvedPuzzles}/${PUZZLES.length}</span></div>
        <small>${escapeHtml(t('puzzleTrackDesc', {
          openings: getPuzzlesByCategory('Openings').length,
          tactics: getPuzzlesByCategory('Tactics').length,
          strategy: getPuzzlesByCategory('Strategy').length,
          middlegame: getPuzzlesByCategory('Middlegame').length,
          endgame: getPuzzlesByCategory('Endgame').length,
          quizzes: QUIZZES.length,
        }))}</small>
      </button>
      <button type="button" class="track-tile" id="trkMastery">
        <div class="track-top"><span>${iconSvg('strategy', 15)} ${escapeHtml(t('strategyAndEndgames'))}</span><span class="track-count tabular-nums">${sum.completedStrategy + sum.completedEndgames}/${MIDDLEGAME_LESSONS.length + ENDGAMES.length}</span></div>
        <small>${escapeHtml(t('masteryTrackDesc', { middlegame: MIDDLEGAME_LESSONS.length, endgames: ENDGAMES.length }))}</small>
      </button>
    </div>
  </section>`);
  tracks.querySelector('#trkOpenings').onclick = () => navigate('openings');
  tracks.querySelector('#trkPuzzles').onclick = () => {
    State.puzzleView = 'catalog';
    navigate('puzzles');
  };
  tracks.querySelector('#trkMastery').onclick = () => navigate('strategy');
  grid.appendChild(tracks);

  return grid;
}

// =========================================================
// BOARD STAGE & CHESS INTERACTION (Drag/Drop, Premoves & Right-Click Arrows)
// =========================================================
let suppressNextBoardClick = false;

function buildBoardStage(game, {
  flip = false,
  lastMove = null,
  interactive = false,
  onMove = null,
  showEvalBar = false,
  showArrows = false,
  premove = null,
  allowPremove = false,
  onPremove = null,
  editorMode = false,
  onEditorSquareClick = null,
  silentMoves = false,
} = {}) {
  const frame = document.createElement('div');
  frame.className = 'board-frame';

  const wrap = document.createElement('div');
  wrap.className = 'board-wrap';
  const board = buildBoard(game, {
    flip,
    lastMove,
    interactive,
    onMove,
    premove,
    allowPremove,
    onPremove,
    editorMode,
    onEditorSquareClick,
    silentMoves,
  });
  wrap.appendChild(board);

  const userAnnotSvg = createUserAnnotationsSvg();
  wrap.appendChild(userAnnotSvg);
  State.dom.userAnnotSvg = userAnnotSvg;
  updateUserAnnotationsSvg(userAnnotSvg, State.userAnnotations, { flipped: flip });

  let arrowsSvg = null;
  if (showArrows) {
    arrowsSvg = createBoardArrowsSvg();
    wrap.appendChild(arrowsSvg);
  }

  let evalBar = null;
  if (showEvalBar) {
    evalBar = createEvalBar();
    frame.appendChild(evalBar);
  }
  frame.appendChild(wrap);
  return { frame, evalBar, arrowsSvg, userAnnotSvg };
}

function applyInPlaceSelection(board, game, sq) {
  const dests = game.moves({ square: sq, verbose: true }).map((m) => m.to);
  State.selectedSquare = sq;
  State.legalDests = dests;
  board.querySelectorAll('.square').forEach((elSq) => {
    const target = elSq.dataset.square;
    elSq.classList.toggle('selected', target === sq);
    elSq.classList.remove('legal', 'legal-capture');
    if (dests.includes(target)) {
      elSq.classList.add(game.get(target) ? 'legal-capture' : 'legal');
    }
  });
  return dests;
}

function toggleRightClickAnnotation({ fromSq, toSq, color, flip }) {
  if (!fromSq || !toSq) return;
  if (fromSq === toSq) {
    const idx = State.userAnnotations.circles.findIndex((c) => c.square === fromSq);
    if (idx >= 0 && State.userAnnotations.circles[idx].color === color) {
      State.userAnnotations.circles.splice(idx, 1);
    } else if (idx >= 0) {
      State.userAnnotations.circles[idx].color = color;
    } else {
      State.userAnnotations.circles.push({ square: fromSq, color });
    }
  } else {
    const idx = State.userAnnotations.arrows.findIndex((a) => a.from === fromSq && a.to === toSq);
    if (idx >= 0 && State.userAnnotations.arrows[idx].color === color) {
      State.userAnnotations.arrows.splice(idx, 1);
    } else if (idx >= 0) {
      State.userAnnotations.arrows[idx].color = color;
    } else {
      State.userAnnotations.arrows.push({ from: fromSq, to: toSq, color });
    }
  }
  if (State.dom.userAnnotSvg) {
    updateUserAnnotationsSvg(State.dom.userAnnotSvg, State.userAnnotations, { flipped: flip });
  }
}

function executeBoardMove(fromSq, toSq, game, onMove, { silentMoves = false } = {}) {
  const movingPiece = game.get(fromSq);
  if (movingPiece && movingPiece.type === 'p' && (toSq[1] === '8' || toSq[1] === '1')) {
    if (State.preferences.autoQueen) {
      const autoRes = game.move({ from: fromSq, to: toSq, promotion: 'q' });
      State.selectedSquare = null;
      State.legalDests = [];
      if (autoRes) {
        State.lastMove = { from: autoRes.from, to: autoRes.to };
        if (!silentMoves) playChessSound(soundForMove(autoRes, game), State.preferences.sound);
        onMove(autoRes);
      } else {
        render();
      }
      return;
    }
    State.promotionPending = {
      from: fromSq,
      to: toSq,
      color: movingPiece.color,
      game,
      silentMoves,
      onComplete: onMove,
    };
    State.selectedSquare = null;
    State.legalDests = [];
    showPromotionPicker();
    return;
  }

  const result = game.move({ from: fromSq, to: toSq });
  State.selectedSquare = null;
  State.legalDests = [];
  if (result) {
    State.lastMove = { from: result.from, to: result.to };
    if (!silentMoves) playChessSound(soundForMove(result, game), State.preferences.sound);
    onMove(result);
  } else {
    render();
  }
}

function buildBoard(game, options) {
  const {
    flip,
    lastMove,
    interactive,
    onMove,
    premove = null,
    allowPremove = false,
    onPremove = null,
    editorMode = false,
    onEditorSquareClick = null,
    silentMoves = false,
  } = options;
  const board = document.createElement('div');
  board.className = 'board';
  const ranks = flip ? [1, 2, 3, 4, 5, 6, 7, 8] : [8, 7, 6, 5, 4, 3, 2, 1];
  const files = flip ? ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'] : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const checkSq = game.in_check() ? findKingSquare(game, game.turn()) : null;

  board.addEventListener('contextmenu', (e) => e.preventDefault());

  board.addEventListener('pointerdown', (e) => {
    const sqEl = e.target.closest('.square');
    if (!sqEl) return;
    const sq = sqEl.dataset.square;

    // Right-click circle & arrow annotations
    if (e.button === 2) {
      const color = e.shiftKey ? 'red' : e.altKey ? 'blue' : e.ctrlKey || e.metaKey ? 'gold' : 'green';
      const onRightUp = (upEvt) => {
        window.removeEventListener('pointerup', onRightUp);
        window.removeEventListener('pointercancel', onRightUp);
        const endSqEl = document.elementFromPoint(upEvt.clientX, upEvt.clientY)?.closest('.square');
        const endSq = endSqEl?.dataset.square || sq;
        toggleRightClickAnnotation({ fromSq: sq, toSq: endSq, color, flip });
      };
      window.addEventListener('pointerup', onRightUp);
      window.addEventListener('pointercancel', onRightUp);
      return;
    }

    if (e.button !== 0 || editorMode || State.promotionPending) return;

    if (State.userAnnotations.circles.length || State.userAnnotations.arrows.length) {
      clearUserAnnotations();
    }

    const piece = game.get(sq);
    const canDragInteractive = interactive && piece && piece.color === game.turn();
    const canDragPremove = !interactive && allowPremove && piece && piece.color === State.playerColor;
    if (!canDragInteractive && !canDragPremove) return;

    const startX = e.clientX;
    const startY = e.clientY;
    const rect = sqEl.getBoundingClientRect();
    const pieceEl = sqEl.querySelector('.piece');
    let isDragging = false;
    let ghost = null;
    let hoveredCell = null;
    const dests = canDragInteractive ? applyInPlaceSelection(board, game, sq) : [];

    const cleanupDrag = () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerCancel);
      if (ghost) {
        ghost.remove();
        ghost = null;
      }
      if (pieceEl) pieceEl.style.opacity = '';
      if (hoveredCell) {
        hoveredCell.classList.remove('drag-over');
        hoveredCell = null;
      }
    };

    const onPointerMove = (moveEvt) => {
      if (!isDragging && Math.hypot(moveEvt.clientX - startX, moveEvt.clientY - startY) > 6) {
        isDragging = true;
        if (pieceEl) {
          ghost = document.createElement('div');
          ghost.className = 'drag-ghost';
          ghost.style.width = `${rect.width}px`;
          ghost.style.height = `${rect.height}px`;
          ghost.innerHTML = pieceEl.innerHTML;
          document.body.appendChild(ghost);
          pieceEl.style.opacity = '0.22';
        }
      }
      if (isDragging && ghost) {
        ghost.style.left = `${moveEvt.clientX}px`;
        ghost.style.top = `${moveEvt.clientY}px`;
        const overCell = document.elementFromPoint(moveEvt.clientX, moveEvt.clientY)?.closest('.square');
        if (hoveredCell && hoveredCell !== overCell) hoveredCell.classList.remove('drag-over');
        if (overCell && board.contains(overCell)) {
          overCell.classList.add('drag-over');
          hoveredCell = overCell;
        } else {
          hoveredCell = null;
        }
      }
    };

    const onPointerCancel = () => {
      cleanupDrag();
    };

    const onPointerUp = (upEvt) => {
      const wasDragging = isDragging;
      cleanupDrag();
      if (!wasDragging) return;

      suppressNextBoardClick = true;
      setTimeout(() => {
        suppressNextBoardClick = false;
      }, 60);

      const dropEl = document.elementFromPoint(upEvt.clientX, upEvt.clientY)?.closest('.square');
      const dropSq = dropEl && board.contains(dropEl) ? dropEl.dataset.square : null;

      if (dropSq && dropSq !== sq) {
        if (canDragPremove && onPremove) {
          State.selectedSquare = null;
          State.legalDests = [];
          onPremove({ from: sq, to: dropSq });
          return;
        }
        if (canDragInteractive && dests.includes(dropSq)) {
          executeBoardMove(sq, dropSq, game, onMove, { silentMoves });
          return;
        }
      }

      State.selectedSquare = null;
      State.legalDests = [];
      render();
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerCancel);
  });

  for (const r of ranks) {
    for (const f of files) {
      const sq = f + r;
      const fIdx = 'abcdefgh'.indexOf(f);
      const rIdx = r - 1;
      const isLightSq = (fIdx + rIdx) % 2 === 1;
      const cell = document.createElement('div');
      cell.className = 'square ' + (isLightSq ? 'light' : 'dark');
      cell.dataset.square = sq;

      if ((flip && r === 8) || (!flip && r === 1)) {
        const c = document.createElement('span');
        c.className = 'coord file';
        c.textContent = f;
        cell.appendChild(c);
      }
      if ((flip && f === 'h') || (!flip && f === 'a')) {
        const c = document.createElement('span');
        c.className = 'coord rank';
        c.textContent = r;
        cell.appendChild(c);
      }

      if (lastMove && (lastMove.from === sq || lastMove.to === sq)) cell.classList.add('last-move');
      if (premove && (premove.from === sq || premove.to === sq)) cell.classList.add('premove');
      if (State.selectedSquare === sq) cell.classList.add('selected');
      if (State.legalDests.includes(sq)) {
        if (game.get(sq)) cell.classList.add('legal-capture');
        else cell.classList.add('legal');
      }
      if (checkSq === sq) cell.classList.add('check');

      const piece = game.get(sq);
      if (piece) {
        const code = piece.color === 'w' ? piece.type.toUpperCase() : piece.type.toLowerCase();
        const pieceEl = document.createElement('span');
        pieceEl.className = `piece ${piece.color === 'w' ? 'white' : 'black'}`;
        pieceEl.innerHTML = PIECE_SVG[code] || '';
        cell.appendChild(pieceEl);
      }

      if (editorMode && onEditorSquareClick) {
        cell.onclick = () => onEditorSquareClick(sq);
      } else if (interactive) {
        cell.onclick = () => {
          if (suppressNextBoardClick) return;
          handleSquareClick(sq, game, onMove, { silentMoves });
        };
      } else if (allowPremove && onPremove) {
        cell.onclick = () => {
          if (suppressNextBoardClick) return;
          if (State.selectedSquare && State.selectedSquare !== sq) {
            const fromSq = State.selectedSquare;
            State.selectedSquare = null;
            State.legalDests = [];
            onPremove({ from: fromSq, to: sq });
            return;
          }
          if (piece && piece.color === State.playerColor) {
            State.selectedSquare = sq;
            State.legalDests = [];
            render();
          } else {
            State.selectedSquare = null;
            State.legalDests = [];
            onPremove(null);
          }
        };
      }
      board.appendChild(cell);
    }
  }
  return board;
}

function handleSquareClick(sq, game, onMove, { silentMoves = false } = {}) {
  if (State.promotionPending) return;
  const piece = game.get(sq);
  if (State.selectedSquare && State.legalDests.includes(sq)) {
    executeBoardMove(State.selectedSquare, sq, game, onMove, { silentMoves });
    return;
  }
  if (piece && piece.color === game.turn()) {
    State.selectedSquare = sq;
    State.legalDests = game.moves({ square: sq, verbose: true }).map((m) => m.to);
    render();
  } else {
    State.selectedSquare = null;
    State.legalDests = [];
    render();
  }
}

function showPromotionPicker() {
  const p = State.promotionPending;
  if (!p) return;
  const overlay = document.createElement('div');
  overlay.className = 'promo-picker';
  const card = document.createElement('div');
  card.className = 'promo-card';
  ['q', 'r', 'b', 'n'].forEach((t) => {
    const code = p.color === 'w' ? t.toUpperCase() : t.toLowerCase();
    const piece = el(`<div class="promo-piece" data-t="${t}">${PIECE_SVG[code]}</div>`);
    piece.onclick = () => {
      const targetGame = p.game || State.game;
      const result = targetGame.move({ from: p.from, to: p.to, promotion: t });
      State.promotionPending = null;
      overlay.remove();
      if (result) {
        State.lastMove = { from: result.from, to: result.to };
        if (!p.silentMoves) playChessSound(soundForMove(result, targetGame), State.preferences.sound);
        if (p.onComplete) p.onComplete(result);
        else render();
      } else {
        render();
      }
    };
    card.appendChild(piece);
  });
  overlay.appendChild(card);
  document.getElementById('app').appendChild(overlay);
}

function lastMoveSquares(game) {
  const h = game.history({ verbose: true });
  if (h.length === 0) return null;
  const m = h[h.length - 1];
  return { from: m.from, to: m.to };
}

function findKingSquare(game, color) {
  const board = game.board();
  for (let r = 0; r < 8; r += 1) {
    for (let c = 0; c < 8; c += 1) {
      const p = board[r][c];
      if (p && p.type === 'k' && p.color === color) return 'abcdefgh'[c] + (8 - r);
    }
  }
  return null;
}

function buildMovesPanel(
  moves,
  {
    currentPly = null,
    onSelectPly = null,
    title = t('movesTitle'),
    extraHeaderEl = null,
  } = {},
) {
  const total = Array.isArray(moves) ? moves.length : 0;
  const activePly = currentPly != null ? Math.max(0, Math.min(total, currentPly)) : total;
  const panel = document.createElement('div');
  panel.className = 'moves-panel';

  const head = document.createElement('div');
  head.className = 'moves-head';
  head.innerHTML = `<div style="display:flex;align-items:center;gap:.4rem">
    <h4>${escapeHtml(title)}</h4>
    <span class="small mono tabular-nums">${activePly}/${total}</span>
  </div>`;

  const headActions = document.createElement('div');
  headActions.style.cssText = 'display:flex;align-items:center;gap:.3rem';
  if (onSelectPly && total > 0) {
    const startBtn = el(`<button type="button" class="moves-start-btn ${activePly === 0 ? 'current' : ''}">${escapeHtml(t('startBtn'))}</button>`);
    startBtn.onclick = () => onSelectPly(0);
    headActions.appendChild(startBtn);
  }
  if (extraHeaderEl) headActions.appendChild(extraHeaderEl);
  head.appendChild(headActions);
  panel.appendChild(head);

  const ml = document.createElement('div');
  ml.className = 'moves-list tabular-nums';
  if (total === 0) {
    ml.appendChild(el(`<div class="small italic" style="grid-column:span 3;color:var(--ink-soft)">${escapeHtml(t('noMovesYet'))}</div>`));
  } else {
    const renderMoveCell = (plyIdx) => {
      const item = moves[plyIdx];
      if (!item) return el('<div></div>');
      const san = typeof item === 'string' ? item : item.san || '';
      const grade = typeof item === 'object' ? item.grade : null;
      const plyNo = plyIdx + 1;
      const isCur = plyNo === activePly;
      const gradeHtml = grade?.symbol
        ? `<span class="mv-grade mv-grade-${grade.grade}">${escapeHtml(grade.symbol)}</span>`
        : '';
      const cell = el(`<div class="move${isCur ? ' current' : ''}" role="${onSelectPly ? 'button' : 'text'}" tabindex="${onSelectPly ? '0' : '-1'}">
        <span>${escapeHtml(san)}</span>${gradeHtml}
      </div>`);
      if (onSelectPly) {
        cell.onclick = () => onSelectPly(plyNo);
        cell.onkeydown = (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelectPly(plyNo);
          }
        };
      }
      return cell;
    };

    for (let i = 0; i < total; i += 2) {
      ml.appendChild(el(`<div class="num">${i / 2 + 1}.</div>`));
      ml.appendChild(renderMoveCell(i));
      ml.appendChild(i + 1 < total ? renderMoveCell(i + 1) : el('<div></div>'));
    }
  }
  panel.appendChild(ml);
  setTimeout(() => {
    const curEl = ml.querySelector('.move.current');
    if (curEl && typeof curEl.scrollIntoView === 'function') {
      curEl.scrollIntoView({ block: 'nearest' });
    } else if (activePly >= total) {
      panel.scrollTop = panel.scrollHeight;
    }
  }, 0);
  return panel;
}

// =========================================================
// STOCKFISH 19 LIVE COACH, PGN IMPORTER & ANALYZER
// =========================================================
function buildRichMovesFromSans(startFen, sans = []) {
  const g = new Chess(startFen || STANDARD_START_FEN);
  const out = [];
  sans.forEach((entry, idx) => {
    const rawSan = typeof entry === 'string' ? entry : entry.san || entry.uci;
    const fenBefore = g.fen();
    const m = g.move(rawSan, { sloppy: true });
    if (!m) return;
    out.push({
      ply: idx + 1,
      moveNumber: Math.ceil((idx + 1) / 2),
      color: m.color,
      san: m.san,
      uci: m.from + m.to + (m.promotion || ''),
      from: m.from,
      to: m.to,
      promotion: m.promotion || null,
      fenBefore,
      fenAfter: g.fen(),
      comment: typeof entry === 'object' ? entry.comment || '' : '',
      grade: typeof entry === 'object' ? entry.grade || null : null,
    });
  });
  return out;
}

function makeCoachMoveEntry(played, fenBefore, fenAfter, plyNum) {
  return {
    ply: plyNum,
    moveNumber: Math.ceil(plyNum / 2),
    color: played.color,
    san: played.san,
    uci: played.from + played.to + (played.promotion || ''),
    from: played.from,
    to: played.to,
    promotion: played.promotion || null,
    fenBefore,
    fenAfter,
    comment: '',
    grade: null,
  };
}

function navigateCoachPly(nextPly) {
  const total = State.coachMoves.length;
  const clamped = Math.max(0, Math.min(total, nextPly));
  const pos = buildPositionAtPly(State.coachInitialFen, State.coachMoves, clamped, Chess);
  State.coachPly = pos.ply;
  State.coachGame = pos.game;
  State.coachLastGrade = pos.currentMove?.grade || null;
  State.coachPendingBlunder = null;
  State.coachThinking = false;
  State.coachFenInput = pos.fen;
  State.lastMove = pos.lastMove;
  State.selectedSquare = null;
  State.legalDests = [];
  render();
}

function selectImportedCoachGame(idx) {
  const list = State.coachImportedGames || [];
  const chosen = list[idx];
  if (!chosen) return;
  stopCoachFullGameScan();
  State.coachSelectedGameIdx = idx;
  State.coachInitialFen = chosen.startFen || STANDARD_START_FEN;
  State.coachMoves = chosen.moves.map((m) => ({ ...m }));
  State.coachGameMeta = {
    title: chosen.title,
    headers: chosen.headers || {},
    result: chosen.result || '*',
    warning: chosen.warning || null,
    sourceName: chosen.sourceName || State.coachGameMeta?.sourceName || '',
  };
  State.coachImportDrawerOpen = false;
  State.coachImportError = null;
  State.coachFullScanDone = 0;
  State.coachMode = 'pgn-analysis';
  const startPly = State.coachMoves.length > 0 ? 1 : 0;
  const pos = buildPositionAtPly(State.coachInitialFen, State.coachMoves, startPly, Chess);
  State.coachPly = pos.ply;
  State.coachGame = pos.game;
  State.coachLastGrade = pos.currentMove?.grade || null;
  State.coachPendingBlunder = null;
  State.coachFenInput = pos.fen;
  State.lastMove = pos.lastMove;
  render();
}

function loadParsedGamesIntoCoach(games, sourceName = '') {
  State.coachImportedGames = games.map((g) => ({ ...g, sourceName }));
  selectImportedCoachGame(0);
}

function openGameInCoachAnalyzer({
  title = '',
  headers = {},
  startFen = STANDARD_START_FEN,
  moves = [],
  result = '*',
  sourceName = '',
  jumpToEnd = false,
} = {}) {
  stopCoachFullGameScan();
  const baseFen = startFen || STANDARD_START_FEN;
  const richMoves =
    moves.length > 0 && typeof moves[0] === 'object' && moves[0].fenAfter
      ? moves.map((m) => ({ ...m }))
      : buildRichMovesFromSans(baseFen, moves);

  State.coachMode = 'pgn-analysis';
  State.coachImportedGames = [
    { title, headers, startFen: baseFen, moves: richMoves, result, warning: null, sourceName },
  ];
  State.coachSelectedGameIdx = 0;
  State.coachInitialFen = baseFen;
  State.coachMoves = richMoves;
  State.coachGameMeta = { title, headers, result, warning: null, sourceName };
  State.coachImportDrawerOpen = false;
  State.coachImportError = null;
  State.coachFullScanDone = 0;
  State.coachPly = jumpToEnd ? richMoves.length : richMoves.length > 0 ? 1 : 0;

  const pos = buildPositionAtPly(baseFen, richMoves, State.coachPly, Chess);
  State.coachGame = pos.game;
  State.coachLastGrade = pos.currentMove?.grade || null;
  State.coachFenInput = pos.fen;
  State.lastMove = pos.lastMove;
  navigate('coach');
}

async function handleGameFileImport(file) {
  if (!file) return;
  try {
    const buffer = await file.arrayBuffer();
    const binKind = detectBinaryFileSignature(new Uint8Array(buffer));
    if (binKind) {
      State.coachImportError = t('binaryFileError', {
        name: file.name,
        kind: tBinaryKind(binKind),
      });
      render();
      return;
    }
    const text = new TextDecoder('utf-8').decode(buffer);
    State.coachPasteBuffer = text;
    const parsed = parseImportedGames(text, Chess, { lang: getLang() });
    if (!parsed.ok) {
      State.coachImportError = parsed.error;
      render();
      return;
    }
    loadParsedGamesIntoCoach(parsed.games, file.name);
  } catch (err) {
    State.coachImportError = err instanceof Error ? err.message : t('unreadableFileError');
    render();
  }
}

async function runCoachFullGameScan() {
  if (State.coachMoves.length === 0) return;
  if (State.coachFullScanRunning) {
    stopCoachFullGameScan();
    render();
    return;
  }

  const token = ++State.coachScanToken;
  State.coachFullScanRunning = true;
  State.coachFullScanDone = 0;
  render();

  let prevSnap = await stockfishClient.analyze(State.coachInitialFen, { depth: 9, multiPv: 1 });
  for (let i = 0; i < State.coachMoves.length; i += 1) {
    if (token !== State.coachScanToken || State.page !== 'coach') return;
    const move = State.coachMoves[i];
    const nextSnap = await stockfishClient.analyze(move.fenAfter, { depth: 9, multiPv: 1 });
    if (token !== State.coachScanToken || State.page !== 'coach') return;

    if (prevSnap && nextSnap) {
      const topLine = prevSnap.lines?.[0];
      move.evalWhiteCp = nextSnap.whiteCp;
      move.evalWhiteMate = nextSnap.whiteMate;
      const inBook = i < 24 && isPositionInBook(move.fenAfter);
      const isSac = detectMaterialSacrifice(move.fenBefore, move.uci, move.fenAfter, Chess);
      move.grade = gradePlayedMove({
        prevWhiteCp: prevSnap.whiteCp,
        prevWhiteMate: prevSnap.whiteMate,
        nextWhiteCp: nextSnap.whiteCp,
        nextWhiteMate: nextSnap.whiteMate,
        moverColor: move.color,
        playedUci: move.uci,
        bestUci: topLine?.uci || '',
        bestSan: topLine?.bestMoveSan || '',
        isBookMove: inBook,
        isBrilliantSacrifice: isSac,
      });
    }
    prevSnap = nextSnap;
    State.coachFullScanDone = i + 1;
    if (State.coachPly === i + 1) State.coachLastGrade = move.grade;
    if ((i + 1) % 3 === 0 || i + 1 === State.coachMoves.length) {
      render();
    }
  }

  if (token === State.coachScanToken) {
    State.coachFullScanRunning = false;
    render();
  }
}

function parseFenMeta(fen) {
  const parts = String(fen || STANDARD_START_FEN).trim().split(/\s+/);
  const turn = parts[1] === 'b' ? 'b' : 'w';
  const cast = parts[2] || '-';
  return {
    turn,
    castling: {
      K: cast.includes('K'),
      Q: cast.includes('Q'),
      k: cast.includes('k'),
      q: cast.includes('q'),
    },
  };
}

function buildEditedFen(baseFen, { square = null, tool = null, turn = null, castling = null } = {}) {
  const probe = new Chess();
  if (!probe.load(baseFen || STANDARD_START_FEN)) {
    probe.load('4k3/8/8/8/8/8/8/4K3 w - - 0 1');
  }
  if (square && tool && tool !== 'move') {
    if (tool === 'erase') {
      probe.remove(square);
    } else {
      probe.put(
        {
          type: tool.toLowerCase(),
          color: tool === tool.toUpperCase() ? 'w' : 'b',
        },
        square,
      );
    }
  }
  const meta = parseFenMeta(baseFen);
  const nextTurn = turn || meta.turn;
  const nextCast = castling || meta.castling;
  const castStr = ['K', 'Q', 'k', 'q'].filter((k) => nextCast[k]).join('') || '-';
  const placement = probe.fen().split(/\s+/)[0];
  return `${placement} ${nextTurn} ${castStr} - 0 1`;
}

function updateSandboxFen(nextFen) {
  stopCoachFullGameScan();
  State.coachInitialFen = nextFen;
  State.coachMoves = [];
  State.coachPly = 0;
  State.coachLastGrade = null;
  State.coachPendingBlunder = null;
  State.coachGame = new Chess();
  State.coachGame.load(nextFen);
  State.coachFenInput = nextFen;
  State.lastMove = null;
  State.selectedSquare = null;
  State.legalDests = [];
  State.coachFenError = isStockfishSafeFen(nextFen, Chess) ? null : t('editorIllegalHint');
  render();
}

function launchEngineMatchFromFen(fen) {
  if (!isStockfishSafeFen(fen, Chess)) {
    State.coachFenError = t('invalidFenError');
    render();
    return;
  }
  stopMatchClock();
  const prof = getEngineProfile(State.playEngineProfileId || 'sf19-nnue');
  if (State._humanVsEngineInstance) State._humanVsEngineInstance.dispose();
  State._humanVsEngineInstance = createArenaEngine(prof.id);
  State._engineConfig = State.coachEngineLevel || prof.defaultTier;
  State._engineLevelDisplay = `${prof.shortName} · ${getEngineTierMeta(prof.id, State._engineConfig).label}`;
  State.game = new Chess(fen);
  State.gameInitialFen = fen;
  State.playerColor = State.game.turn();
  State.flipBoard = State.playerColor === 'b';
  State.vsMode = 'engine';
  State.gameMoveHistory = [];
  State.gameViewPly = null;
  State.gameOver = false;
  State.engineThinking = false;
  State.lastResult = null;
  State.lastMove = null;
  State.premove = null;
  State.matchClock = createClockState('unlimited');
  navigate('vs-engine');
}

function downloadPgnFile(filename, pgnText) {
  const blob = new Blob([pgnText], { type: 'application/x-chess-pgn;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function ensureCoachGame() {
  if (!State.coachGame) {
    State.coachInitialFen = STANDARD_START_FEN;
    State.coachGame = new Chess(State.coachInitialFen);
    State.coachMoves = [];
    State.coachPly = 0;
    State.coachLastGrade = null;
    State.coachPendingBlunder = null;
    State.coachFenInput = State.coachGame.fen();
  }
}

function startNewCoachSession(startFen = null) {
  stockfishClient.stop();
  stopCoachFullGameScan();
  const baseFen = startFen || STANDARD_START_FEN;
  State.coachInitialFen = baseFen;
  State.coachGame = new Chess(baseFen);
  State.coachMoves = [];
  State.coachPly = 0;
  State.coachGameMeta = null;
  State.coachImportedGames = [];
  State.coachSelectedGameIdx = 0;
  State.coachImportError = null;
  State.coachFullScanDone = 0;
  State.coachLastGrade = null;
  State.coachPendingBlunder = null;
  State.coachThinking = false;
  State.selectedSquare = null;
  State.legalDests = [];
  State.lastMove = null;
  State.coachFenError = null;
  State.coachFenInput = State.coachGame.fen();
  if (
    !['sandbox', 'pgn-analysis'].includes(State.coachMode) &&
    State.coachPlayerColor === 'b' &&
    State.coachGame.turn() === 'w'
  ) {
    setTimeout(() => coachEngineReply(), 200);
  }
  render();
}

async function coachEngineReply() {
  const g = State.coachGame;
  if (!g || g.game_over() || State.coachPendingBlunder) return;
  if (['sandbox', 'pgn-analysis'].includes(State.coachMode)) return;
  if (g.turn() === State.coachPlayerColor) return;

  State.coachThinking = true;
  render();
  const fenBefore = g.fen();
  const uci = await stockfishClient.playMove(fenBefore, State.coachEngineLevel);
  State.coachThinking = false;
  if (!uci || uci === '(none)' || State.page !== 'coach' || State.coachGame !== g) {
    render();
    return;
  }
  const m = g.move({
    from: uci.slice(0, 2),
    to: uci.slice(2, 4),
    promotion: uci.length > 4 ? uci.slice(4, 5) : undefined,
  });
  if (m) {
    if (State.coachPly < State.coachMoves.length) {
      State.coachMoves = State.coachMoves.slice(0, State.coachPly);
    }
    State.coachMoves.push(makeCoachMoveEntry(m, fenBefore, g.fen(), State.coachMoves.length + 1));
    State.coachPly = State.coachMoves.length;
    State.lastMove = { from: m.from, to: m.to };
    playChessSound(soundForMove(m, g), State.preferences.sound);
  }
  render();
}

async function handleCoachHumanMove(moveObj) {
  const g = State.coachGame;
  if (!g) return;
  const playedUci = moveObj.from + moveObj.to + (moveObj.promotion || '');
  const prevSnap = State.sfSnapshot?.fen && State.sfSnapshot.fen !== g.fen() ? State.sfSnapshot : null;
  const topLine = prevSnap?.lines?.[0] || null;
  const fenBefore = moveObj.before || g.fen();
  const afterFen = g.fen();

  if (State.coachPly < State.coachMoves.length) {
    State.coachMoves = State.coachMoves.slice(0, State.coachPly);
  }
  const entry = makeCoachMoveEntry(moveObj, fenBefore, afterFen, State.coachMoves.length + 1);
  State.coachMoves.push(entry);
  State.coachPly = State.coachMoves.length;
  State.coachFenInput = afterFen;
  State.coachPendingBlunder = null;

  render();

  // Grade played move via Stockfish 19 post-move analysis
  const nextSnap = await triggerLiveAnalysis(afterFen, { depth: 12, multiPv: 3 });
  if (nextSnap && State.page === 'coach') {
    entry.evalWhiteCp = nextSnap.whiteCp;
    entry.evalWhiteMate = nextSnap.whiteMate;
  }
  if (prevSnap && topLine && nextSnap && State.page === 'coach') {
    const inBook = State.coachPly <= 24 && isPositionInBook(afterFen);
    const isSac = detectMaterialSacrifice(fenBefore, playedUci, afterFen, Chess);
    const grade = gradePlayedMove({
      prevWhiteCp: prevSnap.whiteCp,
      prevWhiteMate: prevSnap.whiteMate,
      nextWhiteCp: nextSnap.whiteCp,
      nextWhiteMate: nextSnap.whiteMate,
      moverColor: moveObj.color,
      playedUci,
      bestUci: topLine.uci,
      bestSan: topLine.bestMoveSan,
      isBookMove: inBook,
      isBrilliantSacrifice: isSac,
    });
    entry.grade = grade;
    State.coachLastGrade = grade;

    if (
      State.coachMode === 'blunder-check' &&
      !g.game_over() &&
      ['mistake', 'blunder'].includes(grade.grade)
    ) {
      State.coachPendingBlunder = grade;
      render();
      return;
    }
    applyStockfishDom(nextSnap, grade);
  }

  if (
    !g.game_over() &&
    !['sandbox', 'pgn-analysis'].includes(State.coachMode) &&
    g.turn() !== State.coachPlayerColor
  ) {
    coachEngineReply();
  }
}

function renderCoach() {
  ensureCoachGame();
  const lang = getLang();
  const pos = buildPositionAtPly(State.coachInitialFen, State.coachMoves, State.coachPly, Chess);
  State.coachGame = pos.game;
  const g = pos.game;
  const currentFen = g.fen();
  const fenSafeForSf = isStockfishSafeFen(currentFen, Chess);
  const totalPlies = State.coachMoves.length;
  const reviewMove = pos.currentMove;
  const activeGrade = reviewMove?.grade || (State.coachPly === totalPlies ? State.coachLastGrade : null);
  const isEditingBoard = State.coachMode === 'sandbox' && State.coachEditorTool !== 'move';

  loadTablebaseForFen(currentFen);

  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  // Top Header Bar
  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.55rem;flex-wrap:wrap">
      <h1>${iconSvg('coach', 18)} ${escapeHtml(t('sfCoachTitle'))}</h1>
      <div class="pill-switch" id="coachModes">
        <button type="button" data-mode="guided" class="${State.coachMode === 'guided' ? 'active' : ''}">${escapeHtml(t('modeGuided'))}</button>
        <button type="button" data-mode="pgn-analysis" class="${State.coachMode === 'pgn-analysis' ? 'active' : ''}">${escapeHtml(t('modeGameAnalysis'))}</button>
        <button type="button" data-mode="sandbox" class="${State.coachMode === 'sandbox' ? 'active' : ''}">${escapeHtml(t('modeFenLab'))}</button>
        <button type="button" data-mode="blunder-check" class="${State.coachMode === 'blunder-check' ? 'active' : ''}">${escapeHtml(t('modeBlunderCheck'))}</button>
      </div>
    </div>
    <div class="view-bar-meta">
      <button type="button" class="toggle-btn ${State.coachImportDrawerOpen ? 'active' : ''}" id="coachImportBtn">${iconSvg('upload', 13)} ${escapeHtml(t('importPgnText'))}</button>
      ${State.coachMode === 'guided' || State.coachMode === 'blunder-check' ? `
        <select id="coachLvl" aria-label="${escapeHtml(t('coachStrengthAria'))}" style="width:auto;padding:.24rem .5rem;font-size:.84rem">
          ${[1, 2, 3, 4, 5]
            .map((n) => {
              const cfg = resolveEngineLevelConfig(n);
              const tierLabel = localizeEngineTier('sf19-nnue', { value: n, label: cfg.label }, lang).label;
              return `<option value="${n}" ${State.coachEngineLevel === n ? 'selected' : ''}>${escapeHtml(t('levelOption', { n, label: tierLabel }))}</option>`;
            })
            .join('')}
        </select>
        <div class="pill-switch" id="coachSide">
          <button type="button" data-c="w" class="${State.coachPlayerColor === 'w' ? 'active' : ''}">${escapeHtml(t('white'))}</button>
          <button type="button" data-c="b" class="${State.coachPlayerColor === 'b' ? 'active' : ''}">${escapeHtml(t('black'))}</button>
        </div>
      ` : ''}
      <button type="button" class="btn gold sm" id="coachNew">${iconSvg('refresh', 14)} ${escapeHtml(t('newBtn'))}</button>
    </div>
  </div>`);

  bar.querySelectorAll('#coachModes button').forEach((b) => {
    b.onclick = () => {
      State.coachMode = b.dataset.mode;
      if (State.coachMode !== 'sandbox') State.coachEditorTool = 'move';
      if (State.coachMode === 'pgn-analysis' && State.coachMoves.length === 0) {
        State.coachImportDrawerOpen = true;
      }
      if (!['sandbox', 'pgn-analysis'].includes(State.coachMode) && State.coachGame.game_over()) {
        startNewCoachSession();
      } else {
        State.coachPendingBlunder = null;
        render();
      }
    };
  });
  bar.querySelector('#coachImportBtn').onclick = () => {
    if (State.coachMode !== 'pgn-analysis') {
      State.coachMode = 'pgn-analysis';
      State.coachImportDrawerOpen = true;
    } else {
      State.coachImportDrawerOpen = !State.coachImportDrawerOpen;
    }
    render();
  };
  const lvlSel = bar.querySelector('#coachLvl');
  if (lvlSel) {
    lvlSel.onchange = (e) => {
      State.coachEngineLevel = Number(e.target.value);
    };
  }
  bar.querySelectorAll('#coachSide button').forEach((b) => {
    b.onclick = () => {
      State.coachPlayerColor = b.dataset.c;
      State.flipBoard = State.coachPlayerColor === 'b';
      startNewCoachSession();
    };
  });
  bar.querySelector('#coachNew').onclick = () => startNewCoachSession();
  wrap.appendChild(bar);

  const layout = document.createElement('div');
  layout.className = `play-layout${State.boardMaximized ? ' board-maximized' : ''}`;

  const canMoveNow =
    !isEditingBoard &&
    fenSafeForSf &&
    !g.game_over() &&
    !State.promotionPending &&
    !State.coachThinking &&
    !State.coachPendingBlunder &&
    (['sandbox', 'pgn-analysis'].includes(State.coachMode) || g.turn() === State.coachPlayerColor);

  const boardCol = document.createElement('div');
  boardCol.className = 'board-column';
  const stage = buildBoardStage(g, {
    flip: State.flipBoard,
    lastMove: pos.lastMove,
    interactive: canMoveNow,
    onMove: (m) => handleCoachHumanMove(m),
    editorMode: isEditingBoard,
    onEditorSquareClick: (sq) => {
      const nextFen = buildEditedFen(currentFen, { square: sq, tool: State.coachEditorTool });
      updateSandboxFen(nextFen);
    },
    showEvalBar: true,
    showArrows: true,
  });
  State.dom.evalBar = stage.evalBar;
  State.dom.arrowsSvg = stage.arrowsSvg;
  boardCol.appendChild(stage.frame);

  const ctrl = document.createElement('div');
  ctrl.className = 'board-controls';
  ctrl.appendChild(
    buildMoveTransportBar({
      ply: State.coachPly,
      total: totalPlies,
      onNavigate: (nextPly) => navigateCoachPly(nextPly),
    }),
  );
  const flipBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 14)} ${escapeHtml(t('flip'))}</button>`);
  flipBtn.onclick = () => {
    State.flipBoard = !State.flipBoard;
    render();
  };
  ctrl.appendChild(flipBtn);
  ctrl.appendChild(makeMaxBoardButton());
  boardCol.appendChild(ctrl);
  layout.appendChild(boardCol);

  // Sidebar
  const side = document.createElement('div');
  side.className = 'play-sidebar';

  if (State.coachPendingBlunder) {
    const locBlunder = localizeMoveGrade(State.coachPendingBlunder, lang);
    const alertBox = el(`<div class="puzzle-feedback wrong">
      <div><strong>${escapeHtml(locBlunder.label)} (${escapeHtml(locBlunder.symbol)})</strong> — ${escapeHtml(locBlunder.summary)}</div>
      <div style="display:flex;gap:.4rem;margin-top:.4rem">
        <button type="button" class="btn sm" id="retryBlunder">${iconSvg('refresh', 13)} ${escapeHtml(t('retryMove'))}</button>
        <button type="button" class="btn ghost sm" id="playAnyway">${escapeHtml(t('playAnyway'))}</button>
      </div>
    </div>`);
    alertBox.querySelector('#retryBlunder').onclick = () => {
      if (State.coachMoves.length > 0 && State.coachPly === State.coachMoves.length) {
        State.coachMoves.pop();
        State.coachPly = State.coachMoves.length;
      } else {
        State.coachPly = Math.max(0, State.coachPly - 1);
      }
      navigateCoachPly(State.coachPly);
    };
    alertBox.querySelector('#playAnyway').onclick = () => {
      State.coachPendingBlunder = null;
      coachEngineReply();
    };
    side.appendChild(alertBox);
  } else if (!fenSafeForSf) {
    side.appendChild(el(`<div class="status-banner draw">${escapeHtml(t('editorIllegalHint'))}</div>`));
  } else if (g.game_over()) {
    const outcome = g.in_checkmate()
      ? t('checkmateWinner', { winner: g.turn() === 'w' ? tSide('Black') : tSide('White') })
      : t('drawReached');
    side.appendChild(el(`<div class="status-banner">${escapeHtml(outcome)}</div>`));
  } else if (State.coachThinking) {
    side.appendChild(el(`<div class="status-banner">${escapeHtml(t('sfReplying'))} <span class="spinner"></span></div>`));
  } else {
    const moveLabel =
      State.coachPly === 0
        ? t('moveStart')
        : `${reviewMove?.moveNumber}${reviewMove?.color === 'w' ? '.' : '...'} ${reviewMove?.san}`;
    const plyStatus =
      totalPlies > 0
        ? t('movePrefix', { label: moveLabel, ply: State.coachPly, total: totalPlies })
        : t('sideToMove', { side: tSide(g.turn() === 'w' ? 'White' : 'Black') });
    const modeNote =
      State.coachMode === 'pgn-analysis'
        ? t('pgnNote', { status: plyStatus })
        : State.coachMode === 'sandbox'
          ? t('sandboxNote', { status: plyStatus })
          : `${g.turn() === State.coachPlayerColor ? t('yourTurn') : t('engineTurn')} · ${plyStatus}`;
    side.appendChild(el(`<div class="status-banner">${escapeHtml(modeNote)}</div>`));
  }

  // Material Balance + Captured Pieces + Quick Deep Links Strip
  const mat = computeMaterialBalance(currentFen, STANDARD_START_FEN);
  const matAndLinks = document.createElement('div');
  matAndLinks.className = 'coach-utility-bar';
  const matRow = document.createElement('div');
  matRow.className = 'coach-mat-pair';
  matRow.appendChild(
    createMaterialBar({
      capturedPieces: mat.whiteCaptured,
      netAdv: mat.netWhite > 0 ? mat.netWhite : 0,
      pieceSvgMap: PIECE_SVG,
    }),
  );
  matRow.appendChild(
    createMaterialBar({
      capturedPieces: mat.blackCaptured,
      netAdv: mat.netWhite < 0 ? -mat.netWhite : 0,
      pieceSvgMap: PIECE_SVG,
    }),
  );
  const linksWrap = el(`<div class="coach-ext-links">
    <button type="button" class="btn-ghost-xs" id="coachCopyFen">${iconSvg('paste', 11)} ${escapeHtml(t('copyFen'))}</button>
    <a class="btn-ghost-xs" href="${escapeHtml(buildLichessAnalysisUrl(currentFen))}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('lichessAnalysisLink'))}</a>
    <a class="btn-ghost-xs" href="${escapeHtml(buildChessComAnalysisUrl(currentFen))}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('chessComAnalysisLink'))}</a>
  </div>`);
  linksWrap.querySelector('#coachCopyFen').onclick = () =>
    copyTextWithFeedback(currentFen, linksWrap.querySelector('#coachCopyFen'), t('copyFen'));
  matAndLinks.appendChild(matRow);
  matAndLinks.appendChild(linksWrap);
  side.appendChild(matAndLinks);

  const showImportDrawer =
    State.coachImportDrawerOpen || (State.coachMode === 'pgn-analysis' && totalPlies === 0 && !State.coachGameMeta);

  if (showImportDrawer) {
    const impBox = document.createElement('section');
    impBox.className = 'import-panel';
    impBox.innerHTML = `
      <div class="import-panel-head">
        <div class="pill-switch" id="impTabSwitch">
          <button type="button" data-it="file" class="${State.coachImportTab === 'file' ? 'active' : ''}">${escapeHtml(t('importTabFileText'))}</button>
          <button type="button" data-it="online" class="${State.coachImportTab === 'online' ? 'active' : ''}">${escapeHtml(t('importTabOnline'))}</button>
        </div>
        <div style="display:flex;gap:.3rem;align-items:center">
          <select id="famousGameSel" style="width:auto;padding:.18rem .4rem;font-size:.78rem" aria-label="${escapeHtml(t('loadClassicSampleAria'))}">
            <option value="">${escapeHtml(t('classicSamples'))}</option>
            ${FAMOUS_SAMPLE_GAMES.map((fg, i) => `<option value="${i}">${escapeHtml(localizeFamousGame(fg, lang).label)}</option>`).join('')}
          </select>
          ${totalPlies > 0 ? `<button type="button" class="btn-ghost-xs" id="closeImpDrawer">${escapeHtml(t('close'))}</button>` : ''}
        </div>
      </div>
      ${State.coachImportTab === 'online' ? `
        <div class="online-import-box">
          <div style="display:flex;gap:.35rem;flex-wrap:wrap;align-items:center">
            <div class="pill-switch" id="onlinePlatSwitch">
              <button type="button" data-pl="lichess" class="${State.coachOnlinePlatform === 'lichess' ? 'active' : ''}">Lichess.org</button>
              <button type="button" data-pl="chesscom" class="${State.coachOnlinePlatform === 'chesscom' ? 'active' : ''}">Chess.com</button>
            </div>
            <input id="onlineUserIn" value="${escapeHtml(State.coachOnlineUsername)}" placeholder="${escapeHtml(t('onlineUsernamePlaceholder'))}" style="flex:1;min-width:140px;padding:.26rem .5rem;font-size:.82rem" />
            <button type="button" class="btn gold sm" id="fetchUserGamesBtn" ${State.coachOnlineLoading ? 'disabled' : ''}>${iconSvg('cloud', 13)} ${escapeHtml(State.coachOnlineLoading ? t('fetchingOnline') : t('fetchUserGamesBtn'))}</button>
          </div>
          <div style="display:flex;gap:.35rem;flex-wrap:wrap;align-items:center">
            <input id="onlineUrlIn" value="${escapeHtml(State.coachOnlineUrl)}" placeholder="${escapeHtml(t('onlineGameUrlPlaceholder'))}" style="flex:1;min-width:160px;padding:.26rem .5rem;font-size:.82rem" />
            <button type="button" class="btn ghost sm" id="fetchUrlBtn" ${State.coachOnlineLoading ? 'disabled' : ''}>${escapeHtml(t('fetchGameUrlBtn'))}</button>
          </div>
        </div>
      ` : `
        <div class="import-dropzone" id="pgnDropZone">
          <span class="small">${escapeHtml(t('dropPgnHere'))}</span>
          <label class="btn ghost sm" style="margin:0;text-transform:none;cursor:pointer;padding:.24rem .6rem;font-size:.8rem">
            ${iconSvg('upload', 13)} ${escapeHtml(t('openFile'))}
            <input type="file" id="pgnFileInput" accept=".pgn,.txt,.fen,text/plain" style="display:none" />
          </label>
        </div>
        <textarea id="pgnPasteArea" class="import-textarea" placeholder="${escapeHtml(t('pgnPastePlaceholder'))}">${escapeHtml(State.coachPasteBuffer)}</textarea>
        <div style="display:flex;gap:.35rem;flex-wrap:wrap;justify-content:space-between;align-items:center">
          <span class="small">${escapeHtml(t('supportedFormatsNote'))}</span>
          <div style="display:flex;gap:.35rem">
            <button type="button" class="btn ghost sm" id="clearPasteBtn" style="padding:.24rem .55rem;font-size:.8rem">${escapeHtml(t('clear'))}</button>
            <button type="button" class="btn gold sm" id="loadPasteBtn" style="padding:.24rem .7rem;font-size:.82rem">${iconSvg('paste', 13)} ${escapeHtml(t('analyzePastedText'))}</button>
          </div>
        </div>
      `}
      ${State.coachImportError ? `<div class="puzzle-feedback wrong" style="margin-top:0">${escapeHtml(State.coachImportError)}</div>` : ''}
    `;

    impBox.querySelectorAll('#impTabSwitch button').forEach((btn) => {
      btn.onclick = () => {
        State.coachImportTab = btn.dataset.it;
        State.coachImportError = null;
        render();
      };
    });
    const closeBtn = impBox.querySelector('#closeImpDrawer');
    if (closeBtn) {
      closeBtn.onclick = () => {
        State.coachImportDrawerOpen = false;
        render();
      };
    }
    impBox.querySelector('#famousGameSel').onchange = (e) => {
      if (e.target.value === '') return;
      const sample = FAMOUS_SAMPLE_GAMES[Number(e.target.value)];
      if (sample) {
        State.coachPasteBuffer = sample.pgn;
        const parsed = parseImportedGames(sample.pgn, Chess, { lang });
        if (parsed.ok) loadParsedGamesIntoCoach(parsed.games, localizeFamousGame(sample, lang).label);
      }
    };

    if (State.coachImportTab === 'online') {
      impBox.querySelectorAll('#onlinePlatSwitch button').forEach((btn) => {
        btn.onclick = () => {
          State.coachOnlinePlatform = btn.dataset.pl;
          State.coachImportError = null;
          render();
        };
      });
      const userIn = impBox.querySelector('#onlineUserIn');
      userIn.oninput = (e) => {
        State.coachOnlineUsername = e.target.value;
      };
      const urlIn = impBox.querySelector('#onlineUrlIn');
      urlIn.oninput = (e) => {
        State.coachOnlineUrl = e.target.value;
      };
      impBox.querySelector('#fetchUserGamesBtn').onclick = async () => {
        const plat = State.coachOnlinePlatform;
        const uname = State.coachOnlineUsername.trim();
        if (!uname) return;
        State.coachOnlineLoading = true;
        State.coachImportError = null;
        render();
        try {
          const games =
            plat === 'chesscom'
              ? await fetchChessComUserGames(uname, { max: 10, ChessCtor: Chess, lang })
              : await fetchLichessUserGames(uname, { max: 10, ChessCtor: Chess, lang });
          State.coachOnlineLoading = false;
          loadParsedGamesIntoCoach(games, `${plat === 'chesscom' ? 'Chess.com' : 'Lichess'}: ${uname}`);
        } catch (err) {
          State.coachOnlineLoading = false;
          State.coachImportError = t('onlineFetchError', {
            platform: plat === 'chesscom' ? 'Chess.com' : 'Lichess',
            msg: err instanceof Error ? err.message : 'Error',
          });
          render();
        }
      };
      impBox.querySelector('#fetchUrlBtn').onclick = async () => {
        const parsedUrl = parseOnlineGameUrl(State.coachOnlineUrl);
        if (!parsedUrl) {
          State.coachImportError = t('chessComUrlHint');
          render();
          return;
        }
        if (parsedUrl.platform === 'chesscom') {
          State.coachImportError = t('chessComUrlHint');
          render();
          return;
        }
        State.coachOnlineLoading = true;
        State.coachImportError = null;
        render();
        try {
          const games = await fetchLichessGameById(parsedUrl.gameId, { ChessCtor: Chess, lang });
          State.coachOnlineLoading = false;
          loadParsedGamesIntoCoach(games, `Lichess #${parsedUrl.gameId}`);
        } catch (err) {
          State.coachOnlineLoading = false;
          State.coachImportError = t('onlineFetchError', {
            platform: 'Lichess',
            msg: err instanceof Error ? err.message : 'Error',
          });
          render();
        }
      };
    } else {
      const fileInput = impBox.querySelector('#pgnFileInput');
      fileInput.onchange = (e) => {
        const f = e.target.files?.[0];
        if (f) handleGameFileImport(f);
      };
      const dropZone = impBox.querySelector('#pgnDropZone');
      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
      });
      dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const f = e.dataTransfer?.files?.[0];
        if (f) handleGameFileImport(f);
      });
      const textArea = impBox.querySelector('#pgnPasteArea');
      textArea.oninput = (e) => {
        State.coachPasteBuffer = e.target.value;
      };
      impBox.querySelector('#clearPasteBtn').onclick = () => {
        State.coachPasteBuffer = '';
        State.coachImportError = null;
        render();
      };
      impBox.querySelector('#loadPasteBtn').onclick = async () => {
        const urlCheck = parseOnlineGameUrl(State.coachPasteBuffer);
        if (urlCheck && urlCheck.platform === 'lichess') {
          State.coachOnlineLoading = true;
          State.coachImportError = null;
          render();
          try {
            const games = await fetchLichessGameById(urlCheck.gameId, { ChessCtor: Chess, lang });
            State.coachOnlineLoading = false;
            loadParsedGamesIntoCoach(games, `Lichess #${urlCheck.gameId}`);
            return;
          } catch (err) {
            State.coachOnlineLoading = false;
            State.coachImportError = err instanceof Error ? err.message : 'Error';
            render();
            return;
          }
        }
        const parsed = parseImportedGames(State.coachPasteBuffer, Chess, { lang });
        if (!parsed.ok) {
          State.coachImportError = parsed.error;
          render();
          return;
        }
        loadParsedGamesIntoCoach(parsed.games, 'Pasted Text');
      };
    }
    side.appendChild(impBox);
  }

  if (totalPlies > 0 || State.coachGameMeta) {
    const titleTxt = State.coachGameMeta?.title || t('liveCoachSession', { moves: Math.ceil(totalPlies / 2) });
    const pgnText = exportGameToPgn({
      headers: State.coachGameMeta?.headers || { White: State.user?.name || t('white'), Black: t('analysisFallbackHeader') },
      startFen: State.coachInitialFen,
      moves: State.coachMoves,
      result: State.coachGameMeta?.result || '*',
    });

    const metaBar = document.createElement('div');
    metaBar.className = 'game-meta-bar';
    metaBar.innerHTML = `
      <div class="game-meta-top">
        <span class="game-meta-title">${escapeHtml(isolateChessTokens(titleTxt, lang))}</span>
        <div class="game-meta-actions">
          ${State.coachImportedGames.length > 1 ? `<select id="multiGameSel" style="width:auto;padding:.15rem .35rem;font-size:.76rem" aria-label="${escapeHtml(t('selectArchiveGameAria'))}">
            ${State.coachImportedGames.map((gm, idx) => `<option value="${idx}" ${idx === State.coachSelectedGameIdx ? 'selected' : ''}>#${idx + 1}: ${escapeHtml(gm.title)}</option>`).join('')}
          </select>` : ''}
          ${totalPlies > 0 ? `<button type="button" class="btn-ghost-xs" id="scanGameBtn">${iconSvg('scan', 12)} ${escapeHtml(State.coachFullScanRunning ? t('stopScan', { done: State.coachFullScanDone, total: totalPlies }) : t('scanAllMoves'))}</button>` : ''}
          <button type="button" class="btn-ghost-xs" id="copyPgnBtn">${iconSvg('paste', 12)} ${escapeHtml(t('copyPgn'))}</button>
          <button type="button" class="btn-ghost-xs" id="savePgnBtn">${iconSvg('download', 12)} ${escapeHtml(t('pgnExtLabel'))}</button>
        </div>
      </div>
      ${State.coachGameMeta?.warning ? `<div class="small" style="color:var(--burgundy)">${escapeHtml(State.coachGameMeta.warning)}</div>` : ''}
      ${reviewMove?.comment ? `<div class="pgn-comment-box">${escapeHtml(localizeComment(reviewMove.comment, lang))}</div>` : ''}
    `;

    const multiSel = metaBar.querySelector('#multiGameSel');
    if (multiSel) {
      multiSel.onchange = (e) => selectImportedCoachGame(Number(e.target.value));
    }
    const scanBtn = metaBar.querySelector('#scanGameBtn');
    if (scanBtn) scanBtn.onclick = () => runCoachFullGameScan();
    metaBar.querySelector('#copyPgnBtn').onclick = async () => {
      try {
        await navigator.clipboard?.writeText(pgnText);
        metaBar.querySelector('#copyPgnBtn').textContent = t('copied');
      } catch {
        downloadPgnFile('chess-club-analysis.pgn', pgnText);
      }
    };
    metaBar.querySelector('#savePgnBtn').onclick = () => downloadPgnFile('chess-club-analysis.pgn', pgnText);
    side.appendChild(metaBar);

    const accSummary = computeGameAccuracySummary(State.coachMoves);
    if (accSummary.counts.w.total > 0 || accSummary.counts.b.total > 0) {
      const nextKey =
        accSummary.keyPlies.find((p) => p > State.coachPly) ?? accSummary.keyPlies[0] ?? null;
      const accBar = el(`<div class="accuracy-strip">
        <div class="acc-side">
          <span class="small">${escapeHtml(t('whiteAccuracy'))}</span>
          <strong class="tabular-nums">${accSummary.whiteAccuracy != null ? `${accSummary.whiteAccuracy}%` : '--'}</strong>
          <span class="acc-counts tabular-nums">${accSummary.counts.w.brilliant ? `${accSummary.counts.w.brilliant}!! · ` : ''}${accSummary.counts.w.inaccuracy}?! · ${accSummary.counts.w.mistake}? · ${accSummary.counts.w.blunder}??</span>
        </div>
        <div class="acc-side">
          <span class="small">${escapeHtml(t('blackAccuracy'))}</span>
          <strong class="tabular-nums">${accSummary.blackAccuracy != null ? `${accSummary.blackAccuracy}%` : '--'}</strong>
          <span class="acc-counts tabular-nums">${accSummary.counts.b.brilliant ? `${accSummary.counts.b.brilliant}!! · ` : ''}${accSummary.counts.b.inaccuracy}?! · ${accSummary.counts.b.mistake}? · ${accSummary.counts.b.blunder}??</span>
        </div>
        ${nextKey != null ? `<button type="button" class="btn gold sm" id="nextKeyBtn" style="padding:.24rem .55rem;font-size:.78rem">${escapeHtml(t('nextKeyMove'))}</button>` : `<span class="solved-badge">${escapeHtml(t('cleanGame'))}</span>`}
      </div>`);
      const nextKeyBtn = accBar.querySelector('#nextKeyBtn');
      if (nextKeyBtn) nextKeyBtn.onclick = () => navigateCoachPly(nextKey);
      side.appendChild(accBar);
    }

    if (accSummary.evalSeries.length >= 2) {
      side.appendChild(
        createEvalGraph(accSummary.evalSeries, {
          currentPly: State.coachPly,
          totalPlies,
          onSelectPly: (plyNo) => navigateCoachPly(plyNo),
          lang,
        }),
      );
    }
  }

  if (State.coachMode === 'sandbox') {
    const fenMeta = parseFenMeta(currentFen);
    const editorPanel = createBoardEditorPanel({
      fen: currentFen,
      fenError: State.coachFenError,
      activeTool: State.coachEditorTool,
      turn: fenMeta.turn,
      castling: fenMeta.castling,
      presets: SANDBOX_PRESETS,
      pieceSvgMap: PIECE_SVG,
      lang,
      onSelectTool: (tool) => {
        State.coachEditorTool = tool;
        render();
      },
      onChangeTurn: (nextTurn) => {
        updateSandboxFen(buildEditedFen(currentFen, { turn: nextTurn }));
      },
      onToggleCastling: (flag, checked) => {
        const nextCast = { ...fenMeta.castling, [flag]: checked };
        updateSandboxFen(buildEditedFen(currentFen, { castling: nextCast }));
      },
      onResetStart: () => startNewCoachSession(STANDARD_START_FEN),
      onClearKings: () => updateSandboxFen('4k3/8/8/8/8/8/8/4K3 w - - 0 1'),
      onLoadPreset: (idx) => {
        const preset = SANDBOX_PRESETS[idx];
        if (preset) {
          State.coachEditorTool = 'move';
          startNewCoachSession(preset.fen);
        }
      },
      onApplyFen: (candidate) => {
        if (!isStockfishSafeFen(candidate, Chess)) {
          State.coachFenError = t('invalidFenError');
          render();
          return;
        }
        State.coachEditorTool = 'move';
        startNewCoachSession(candidate);
      },
      onPlayFromHere: (candidate) => launchEngineMatchFromFen(candidate),
    });
    side.appendChild(editorPanel);
  }

  // Opening Explorer & Lichess 7-Piece Syzygy Cloud Tablebase
  const detectedOpening = detectOpeningFromMoves(
    State.coachInitialFen,
    State.coachMoves.slice(0, State.coachPly),
    lang,
  );
  const bookMoves = getBookContinuations(currentFen, lang, 6);
  const pieceCount = countBoardPieces(currentFen);
  if (detectedOpening || bookMoves.length > 0 || pieceCount <= 7) {
    side.appendChild(
      createExplorerAndTablebasePanel({
        opening: detectedOpening,
        continuations: bookMoves,
        tablebase: State.tablebaseCacheFen === currentFen ? State.tablebaseSnap : null,
        tablebaseLoading: State.tablebaseCacheFen === currentFen && State.tablebaseLoading,
        pieceCount,
        lang,
        onPlaySan: (san) => {
          if (!canMoveNow || !san) return;
          const m = g.move(san);
          if (m) {
            State.lastMove = { from: m.from, to: m.to };
            playChessSound(soundForMove(m, g), State.preferences.sound);
            handleCoachHumanMove(m);
          }
        },
        onOpenStudy: (op) => {
          if (!op?.studyId) return;
          navigate(op.studyKind === 'traps' ? 'study-trap' : 'study-opening', { id: op.studyId });
        },
      }),
    );
  }

  const sfPanel = createStockfishPanel({
    title: t('sfMultiPv3'),
    showArrows: State.showCoachArrows,
    onToggleArrows: () => {
      State.showCoachArrows = !State.showCoachArrows;
      applyStockfishDom(State.sfSnapshot, activeGrade);
    },
    onApplyMove: (uci) => {
      if (!canMoveNow || !uci || uci.length < 4) return;
      const m = g.move({
        from: uci.slice(0, 2),
        to: uci.slice(2, 4),
        promotion: uci.length > 4 ? uci.slice(4, 5) : 'q',
      });
      if (m) {
        State.lastMove = { from: m.from, to: m.to };
        playChessSound(soundForMove(m, g), State.preferences.sound);
        handleCoachHumanMove(m);
      }
    },
    onRetryMove: () => {
      if (State.coachMoves.length === 0 || State.coachPly === 0) return;
      if (State.coachPly === State.coachMoves.length) {
        State.coachMoves.pop();
        if (
          !['sandbox', 'pgn-analysis'].includes(State.coachMode) &&
          State.coachMoves.length > 0 &&
          State.coachMoves[State.coachMoves.length - 1].color !== State.coachPlayerColor
        ) {
          State.coachMoves.pop();
        }
        navigateCoachPly(State.coachMoves.length);
      } else {
        navigateCoachPly(State.coachPly - 1);
      }
    },
  });
  State.dom.sfPanel = sfPanel;
  side.appendChild(sfPanel);
  side.appendChild(
    buildMovesPanel(State.coachMoves, {
      currentPly: State.coachPly,
      onSelectPly: (plyNo) => navigateCoachPly(plyNo),
    }),
  );

  layout.appendChild(side);
  wrap.appendChild(layout);

  if (fenSafeForSf && !State.coachFullScanRunning) {
    triggerLiveAnalysis(currentFen, { depth: 14, multiPv: 3, grade: activeGrade });
  } else if (fenSafeForSf) {
    applyStockfishDom(State.sfSnapshot, activeGrade);
  }
  return wrap;
}

// =========================================================
// PUZZLES CATALOG (310), SOLVER & QUIZ SPRINT (80)
// =========================================================
function openPuzzleInSolver(puzzle) {
  stopRushTimer();
  State.activePuzzle = puzzle;
  State.puzzleView = 'solver';
  State.page = 'puzzles';
  State.puzzlePly = 0;
  State.puzzleViewPly = null;
  State.puzzleFeedback = null;
  State.puzzleSolvedThisRun = false;
  State.puzzleAutoReplying = false;
  State.game = new Chess(puzzle.fen);
  State.selectedSquare = null;
  State.legalDests = [];
  State.lastMove = null;
  State.flipBoard = puzzle.sideToMove === 'Black';
  render();
}

async function launchOnlineDailyPuzzle(platform = 'lichess') {
  const lang = getLang();
  State.puzzleLoadingDaily = true;
  State.puzzleDailyError = null;
  State.puzzleView = 'catalog';
  State.page = 'puzzles';
  render();

  try {
    const puzzle =
      platform === 'chesscom'
        ? await fetchChessComDailyPuzzle({ ChessCtor: Chess, lang })
        : await fetchLichessDailyPuzzle({ ChessCtor: Chess, lang });
    State.puzzleLoadingDaily = false;
    openPuzzleInSolver(puzzle);
  } catch (err) {
    State.puzzleLoadingDaily = false;
    State.puzzleDailyError = t('onlineFetchError', {
      platform: platform === 'chesscom' ? 'Chess.com' : 'Lichess',
      msg: err instanceof Error ? err.message : 'Network error',
    });
    render();
  }
}

function loadActiveRushBoard() {
  const cur = getRushCurrentPuzzle(State.rushSession);
  if (!cur) return;
  State.rushGame = new Chess(cur.fen);
  State.rushPly = 0;
  State.rushLastMove = null;
  State.rushAutoReplying = false;
  State.selectedSquare = null;
  State.legalDests = [];
  State.flipBoard = cur.sideToMove === 'Black';
}

function saveRushBestScore(session) {
  if (!session) return false;
  const rushMeta = State.training.rush || { bestBlitz3: 0, bestBlitz5: 0, bestSurvival: 0 };
  const key =
    session.mode === 'blitz5'
      ? 'bestBlitz5'
      : session.mode === 'survival'
        ? 'bestSurvival'
        : 'bestBlitz3';
  const prev = rushMeta[key] || 0;
  if (session.score > prev) {
    rushMeta[key] = session.score;
    State.training.rush = rushMeta;
    saveTrainingProgress();
    return true;
  }
  return false;
}

function startRushRun(mode = State.rushMode) {
  stopRushTimer();
  State.rushMode = mode;
  State.rushSession = createRushSession(PUZZLES, { mode });
  State.rushFeedback = null;
  loadActiveRushBoard();
  if (State.rushSession.timed) {
    State.rushLastTick = Date.now();
    State.rushTimerId = setInterval(() => {
      if (!State.rushSession || State.rushSession.gameOver || State.page !== 'puzzles' || State.puzzleView !== 'rush') {
        stopRushTimer();
        return;
      }
      const now = Date.now();
      const dt = now - (State.rushLastTick || now);
      State.rushLastTick = now;
      const next = tickRushTimer(State.rushSession, dt);
      State.rushSession = next;
      if (State.dom.rushTimerEl) {
        State.dom.rushTimerEl.textContent = formatClockMs(next.remainingMs);
        State.dom.rushTimerEl.classList.toggle('low-time', next.remainingMs > 0 && next.remainingMs < 20_000);
      }
      if (next.gameOver) {
        stopRushTimer();
        saveRushBestScore(next);
        playChessSound('gameEnd', State.preferences.sound);
        render();
      }
    }, 100);
  }
  render();
}

function getFilteredPuzzles() {
  return filterPuzzles(PUZZLES, {
    category: State.puzzleCategory,
    difficulty: State.puzzleDifficulty,
    query: State.puzzleQuery,
    unsolvedOnly: State.puzzleUnsolvedOnly,
    solvedSet: solvedPuzzleSet(),
    getSearchText: (p) => {
      const ar = localizePuzzle(p, 'ar');
      return `${ar.theme || ''} ${ar.prompt || ''} ${tCategory(p.category, 'ar')} ${tDifficulty(p.difficulty, 'ar')}`;
    },
  });
}

function renderPuzzles() {
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  const solvedCount = solvedPuzzleSet().size;
  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.55rem;flex-wrap:wrap">
      <h1>${iconSvg('puzzles', 18)} ${escapeHtml(t('puzzlesAndQuizzes'))}</h1>
      <div class="pill-switch" id="pzModeSwitch">
        <button type="button" data-v="catalog" class="${State.puzzleView === 'catalog' ? 'active' : ''}">${escapeHtml(t('catalogTab', { n: PUZZLES.length }))}</button>
        <button type="button" data-v="solver" class="${State.puzzleView === 'solver' ? 'active' : ''}">${escapeHtml(t('activeSolverTab'))}</button>
        <button type="button" data-v="rush" class="${State.puzzleView === 'rush' ? 'active' : ''}">${iconSvg('flame', 13)} ${escapeHtml(t('puzzleRushTab'))}</button>
        <button type="button" data-v="quiz" class="${State.puzzleView === 'quiz' ? 'active' : ''}">${escapeHtml(t('quizSprintTab', { n: QUIZZES.length }))}</button>
      </div>
    </div>
    <div class="view-bar-meta">
      <span class="badge elo tabular-nums">${escapeHtml(t('solvedProgress', { solved: solvedCount, total: PUZZLES.length }))}</span>
      <span class="badge tabular-nums">${escapeHtml(t('streakCount', { n: State.training.streak || 0 }))}</span>
    </div>
  </div>`);

  bar.querySelectorAll('#pzModeSwitch button').forEach((b) => {
    b.onclick = () => {
      stockfishClient.stop();
      if (b.dataset.v !== 'rush') stopRushTimer();
      if (b.dataset.v === 'solver' && (!State.activePuzzle || !State.game)) {
        openPuzzleInSolver(State.activePuzzle || PUZZLES[0]);
        return;
      }
      State.puzzleView = b.dataset.v;
      render();
    };
  });
  wrap.appendChild(bar);

  if (State.puzzleView === 'quiz') {
    wrap.appendChild(renderQuizSprint());
    return wrap;
  }
  if (State.puzzleView === 'rush') {
    wrap.appendChild(renderPuzzleRush());
    return wrap;
  }
  if (State.puzzleView === 'solver') {
    wrap.appendChild(renderPuzzleSolver());
    return wrap;
  }
  wrap.appendChild(renderPuzzleCatalog());
  return wrap;
}

function renderPuzzleCatalog() {
  const lang = getLang();
  const box = document.createElement('div');
  box.style.cssText = 'flex:1;min-height:0;display:flex;flex-direction:column;gap:.5rem;overflow:hidden';

  const solved = solvedPuzzleSet();
  const filtered = getFilteredPuzzles();
  const paged = paginateItems(filtered, State.puzzlePage, 9);
  State.puzzlePage = paged.page;

  const filterBar = el(`<div class="filter-bar">
    <div class="toggle-row" id="catTabs">
      ${PUZZLE_CATEGORIES.map((cat) => {
        const count = cat === 'All' ? PUZZLES.length : getPuzzlesByCategory(cat).length;
        return `<button type="button" class="toggle-btn ${State.puzzleCategory === cat ? 'active' : ''}" data-cat="${cat}">${escapeHtml(tCategory(cat, lang))} <span class="tabular-nums">(${count})</span></button>`;
      }).join('')}
    </div>
    <div style="display:flex;gap:.35rem;margin-inline-start:auto;flex-wrap:wrap;align-items:center">
      <input id="pzSearch" placeholder="${escapeHtml(t('searchThemePlaceholder'))}" value="${escapeHtml(State.puzzleQuery)}" />
      <select id="pzDiff" aria-label="${escapeHtml(t('filterDifficultyAria'))}">
        ${['All', 'Easy', 'Medium', 'Advanced', 'Expert']
          .map((d) => `<option value="${d}" ${State.puzzleDifficulty === d ? 'selected' : ''}>${escapeHtml(tDifficulty(d, lang))}</option>`)
          .join('')}
      </select>
      <label style="display:inline-flex;align-items:center;gap:.25rem;margin:0;text-transform:none;font-size:.84rem;cursor:pointer">
        <input type="checkbox" id="pzUnsolved" style="width:auto" ${State.puzzleUnsolvedOnly ? 'checked' : ''} /> ${escapeHtml(t('unsolved'))}
      </label>
      <button type="button" class="btn gold sm" id="pzRandom">${iconSvg('spark', 13)} ${escapeHtml(t('random'))}</button>
      <button type="button" class="btn ghost sm" id="pzLichessDaily" ${State.puzzleLoadingDaily ? 'disabled' : ''}>${iconSvg('cloud', 13)} ${escapeHtml(t('lichessDailyBtn'))}</button>
      <button type="button" class="btn ghost sm" id="pzChessComDaily" ${State.puzzleLoadingDaily ? 'disabled' : ''}>${iconSvg('cloud', 13)} ${escapeHtml(t('chessComDailyBtn'))}</button>
    </div>
  </div>`);

  if (State.puzzleLoadingDaily) {
    box.appendChild(el(`<div class="status-banner">${escapeHtml(t('loadingDailyPuzzle'))} <span class="spinner"></span></div>`));
  } else if (State.puzzleDailyError) {
    box.appendChild(el(`<div class="puzzle-feedback wrong">${escapeHtml(State.puzzleDailyError)}</div>`));
  }

  filterBar.querySelectorAll('#catTabs button').forEach((btn) => {
    btn.onclick = () => {
      State.puzzleCategory = btn.dataset.cat;
      State.puzzlePage = 1;
      render();
    };
  });
  const searchEl = filterBar.querySelector('#pzSearch');
  searchEl.oninput = (e) => {
    State.puzzleQuery = e.target.value;
    State.puzzlePage = 1;
    render();
    const fresh = document.getElementById('pzSearch');
    if (fresh) {
      fresh.focus();
      fresh.setSelectionRange(fresh.value.length, fresh.value.length);
    }
  };
  filterBar.querySelector('#pzDiff').onchange = (e) => {
    State.puzzleDifficulty = e.target.value;
    State.puzzlePage = 1;
    render();
  };
  filterBar.querySelector('#pzUnsolved').onchange = (e) => {
    State.puzzleUnsolvedOnly = e.target.checked;
    State.puzzlePage = 1;
    render();
  };
  filterBar.querySelector('#pzRandom').onclick = () => {
    const pool = filtered.length ? filtered : PUZZLES;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    if (chosen) openPuzzleInSolver(chosen);
  };
  filterBar.querySelector('#pzLichessDaily').onclick = () => launchOnlineDailyPuzzle('lichess');
  filterBar.querySelector('#pzChessComDaily').onclick = () => launchOnlineDailyPuzzle('chesscom');
  box.appendChild(filterBar);

  const grid = document.createElement('div');
  grid.className = 'puzzle-grid';
  if (paged.items.length === 0) {
    grid.innerHTML = `<div class="card" style="grid-column:1/-1"><p class="italic">${escapeHtml(t('noPuzzlesMatch'))}</p></div>`;
  } else {
    paged.items.forEach((p) => {
      const locP = localizePuzzle(p, lang);
      const isSolved = solved.has(p.id);
      const plies = Math.ceil((p.moves?.length || 1) / 2);
      const pliesTxt = lang === 'ar' ? `${plies}ن` : `${plies}m`;
      const tile = el(`<button type="button" class="puzzle-tile ${isSolved ? 'solved' : ''}">
        <div class="puzzle-tile-top">
          <span class="tag ${p.category === 'Tactics' ? 'burg' : p.category === 'Endgame' ? 'green' : 'gold'}">${escapeHtml(tCategory(p.category, lang))}</span>
          <span class="mono tabular-nums" style="font-size:.74rem;color:var(--ink-soft)">${p.rating} · ${pliesTxt}</span>
        </div>
        <h4>${escapeHtml(locP.theme)}</h4>
        <p>${escapeHtml(locP.prompt)}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto">
          <span class="small">${escapeHtml(tDifficulty(p.difficulty, lang))} · ${escapeHtml(tSide(p.sideToMove, lang))}</span>
          ${isSolved ? `<span class="solved-badge">${escapeHtml(t('solvedLabel'))}</span>` : `<span class="small" style="color:var(--gold)">${escapeHtml(t('puzzleSolveCta'))}</span>`}
        </div>
      </button>`);
      tile.onclick = () => openPuzzleInSolver(p);
      grid.appendChild(tile);
    });
  }
  box.appendChild(grid);

  const pager = el(`<div class="pager-bar">
    <span class="small tabular-nums">${escapeHtml(t('showingPuzzles', { start: paged.totalItems === 0 ? 0 : paged.startIndex + 1, end: paged.endIndex, total: paged.totalItems }))}</span>
    <div style="display:flex;gap:.35rem;align-items:center">
      <button type="button" class="btn ghost sm" id="pgPrev" ${paged.page <= 1 ? 'disabled' : ''}>${iconSvg('prev', 13)} ${escapeHtml(t('prev'))}</button>
      <span class="mono tabular-nums" style="font-size:.8rem">${escapeHtml(t('pageOf', { page: paged.page, total: paged.totalPages }))}</span>
      <button type="button" class="btn ghost sm" id="pgNext" ${paged.page >= paged.totalPages ? 'disabled' : ''}>${escapeHtml(t('next'))} ${iconSvg('next', 13)}</button>
    </div>
  </div>`);
  pager.querySelector('#pgPrev').onclick = () => {
    State.puzzlePage = Math.max(1, paged.page - 1);
    render();
  };
  pager.querySelector('#pgNext').onclick = () => {
    State.puzzlePage = Math.min(paged.totalPages, paged.page + 1);
    render();
  };
  box.appendChild(pager);

  return box;
}

function resolvePuzzleFeedbackText(fb, ctx, locPuzzle, lang) {
  if (!fb) return '';
  if (!fb.meta) return fb.text || '';
  const m = fb.meta;
  if (m.type === 'wrong') {
    return lang === 'ar'
      ? isolateChessTokens(`${m.playedSan} ليست النقلة الأدق هنا. تفحّص الكشّات والأهداف والخطّة الرئيسية في الوضعية.`, 'ar')
      : `${m.playedSan} is not the sharpest move here. Look closely at checks, targets, and the position’s key plan.`;
  }
  if (m.type === 'solved') {
    const solvedHead = lang === 'ar'
      ? isolateChessTokens(`تم الحلّ بـ ${m.playedSan}!`, 'ar')
      : `Solved with ${m.playedSan}!`;
    return `${solvedHead} ${locPuzzle.explanation}`;
  }
  if (m.type === 'wait') {
    return t('puzzleFeedbackWait', { san: m.playedSan, opp: m.oppSan }, lang);
  }
  if (m.type === 'next') {
    return t('puzzleFeedbackNext', { opp: m.oppSan }, lang);
  }
  if (m.type === 'hint') {
    return t('puzzleHintMsg', { piece: tPieceName(m.piece, lang), sq: m.sq }, lang);
  }
  if (m.type === 'solution') {
    return t('puzzleSolutionMsg', { moves: ctx.moves.join(' '), explanation: locPuzzle.explanation }, lang);
  }
  return fb.text || '';
}

function renderPuzzleSolver() {
  const lang = getLang();
  const ctx = State.activePuzzle || PUZZLES[0];
  const locCtx = localizePuzzle(ctx, lang);
  if (!State.game || State.activePuzzle?.id !== ctx.id) {
    State.game = new Chess(ctx.fen);
    State.puzzlePly = 0;
    State.puzzleViewPly = null;
    State.puzzleFeedback = null;
    State.flipBoard = ctx.sideToMove === 'Black';
  }
  const g = State.game;
  const totalPlies = ctx.moves.length;
  const maxPlayed = State.puzzlePly;
  const effectivePly =
    State.puzzleViewPly != null ? Math.max(0, Math.min(maxPlayed, State.puzzleViewPly)) : maxPlayed;
  const isReviewing = effectivePly < maxPlayed;
  const solvedNow = maxPlayed >= totalPlies;
  const viewPos = isReviewing
    ? buildPositionAtPly(ctx.fen, ctx.moves, effectivePly, Chess)
    : { game: g, lastMove: State.lastMove };

  const layout = document.createElement('div');
  layout.className = `play-layout${State.boardMaximized ? ' board-maximized' : ''}`;

  const boardCol = document.createElement('div');
  boardCol.className = 'board-column';
  const onPuzzleMove = (playedMove) => {
    g.undo();
    const preFen = g.fen();
    const res = evaluatePuzzleMove({
      fen: preFen,
      solutionMoves: ctx.moves,
      plyIndex: State.puzzlePly,
      playedMoveObj: {
        from: playedMove.from,
        to: playedMove.to,
        promotion: playedMove.promotion,
      },
      acceptAlso: ctx.acceptAlso || [],
      ChessCtor: Chess,
      lang: getLang(),
    });

    if (!res.correct) {
      playChessSound('puzzleWrong', State.preferences.sound);
      State.puzzleFeedback = {
        kind: 'wrong',
        text: res.statusMessage,
        meta: res.playedSan ? { type: 'wrong', playedSan: res.playedSan } : null,
      };
      State.lastMove = null;
      recordPuzzleResult(ctx, false, false);
      render();
      return;
    }

    // First advance to user's played move cleanly so user sees their move right away
    g.move(res.playedSan);
    State.lastMove = { from: playedMove.from, to: playedMove.to };
    State.puzzleViewPly = null;

    if (res.finished) {
      playChessSound('puzzleCorrect', State.preferences.sound);
      State.puzzlePly = ctx.moves.length;
      State.puzzleFeedback = {
        kind: 'correct',
        meta: { type: 'solved', playedSan: res.playedSan },
      };
      recordPuzzleResult(ctx, true, false);
      render();
      return;
    }

    playChessSound(soundForMove(playedMove, g), State.preferences.sound);

    // Multi-ply sequence: auto-play opponent forced reply after 240ms
    State.puzzlePly = res.nextPly;
    State.puzzleAutoReplying = true;
    State.puzzleFeedback = {
      kind: 'hint',
      meta: { type: 'wait', playedSan: res.playedSan, oppSan: res.oppAutoMove },
    };
    render();
    setTimeout(() => {
      if (State.page !== 'puzzles' || State.activePuzzle?.id !== ctx.id) return;
      const oppObj = g.move(res.oppAutoMove);
      if (oppObj) {
        State.lastMove = { from: oppObj.from, to: oppObj.to };
        playChessSound(soundForMove(oppObj, g), State.preferences.sound);
      }
      State.puzzleAutoReplying = false;
      State.puzzleFeedback = {
        kind: 'hint',
        meta: { type: 'next', oppSan: res.oppAutoMove },
      };
      render();
    }, 240);
  };
  const stage = buildBoardStage(viewPos.game, {
    flip: State.flipBoard,
    lastMove: viewPos.lastMove,
    interactive: !isReviewing && !solvedNow && !State.puzzleAutoReplying && !State.promotionPending,
    onMove: onPuzzleMove,
    silentMoves: true,
    showEvalBar: State.showPuzzleStockfish,
    showArrows: State.showPuzzleStockfish,
  });

  State.dom.evalBar = stage.evalBar;
  State.dom.arrowsSvg = stage.arrowsSvg;
  boardCol.appendChild(stage.frame);

  const ctrl = document.createElement('div');
  ctrl.className = 'board-controls';
  ctrl.appendChild(
    buildMoveTransportBar({
      ply: effectivePly,
      total: maxPlayed,
      onNavigate: (nextPly) => {
        State.puzzleViewPly = nextPly >= maxPlayed ? null : nextPly;
        render();
      },
    }),
  );
  const backCat = el(`<button type="button" class="btn ghost sm">${iconSvg('prev', 14)} ${escapeHtml(t('catalog'))}</button>`);
  backCat.onclick = () => {
    stockfishClient.stop();
    State.puzzleView = 'catalog';
    render();
  };
  const hintBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('hint', 14)} ${escapeHtml(t('hint'))}</button>`);
  hintBtn.disabled = isReviewing || solvedNow || State.puzzleAutoReplying;
  hintBtn.onclick = () => {
    const nextSan = ctx.moves[State.puzzlePly];
    const tmp = new Chess(g.fen());
    const m = tmp.move(nextSan);
    if (m) {
      State.selectedSquare = m.from;
      State.legalDests = [m.to];
      State.puzzleFeedback = {
        kind: 'hint',
        meta: { type: 'hint', piece: m.piece, sq: m.from },
      };
    }
    render();
  };
  const solBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('check', 14)} ${escapeHtml(t('solution'))}</button>`);
  solBtn.disabled = State.puzzleAutoReplying;
  solBtn.onclick = () => {
    const remaining = ctx.moves.slice(State.puzzlePly);
    remaining.forEach((san) => g.move(san));
    State.puzzlePly = ctx.moves.length;
    State.puzzleViewPly = null;
    State.lastMove = lastMoveSquares(g);
    State.puzzleFeedback = {
      kind: 'correct',
      meta: { type: 'solution' },
    };
    render();
  };
  const resetBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('refresh', 14)} ${escapeHtml(t('retry'))}</button>`);
  resetBtn.onclick = () => openPuzzleInSolver(ctx);
  const nextBtn = el(`<button type="button" class="btn gold sm">${escapeHtml(t('next'))} ${iconSvg('next', 14)}</button>`);
  nextBtn.onclick = () => {
    const pool = getFilteredPuzzles();
    const list = pool.length ? pool : PUZZLES;
    const idx = Math.max(0, list.findIndex((p) => p.id === ctx.id));
    openPuzzleInSolver(list[(idx + 1) % list.length]);
  };
  ctrl.appendChild(backCat);
  ctrl.appendChild(hintBtn);
  ctrl.appendChild(solBtn);
  ctrl.appendChild(resetBtn);
  ctrl.appendChild(nextBtn);
  ctrl.appendChild(makeMaxBoardButton());
  boardCol.appendChild(ctrl);
  layout.appendChild(boardCol);

  const side = document.createElement('div');
  side.className = 'play-sidebar';

  const sfToggle = el(`<div style="display:flex;justify-content:space-between;align-items:center;gap:.4rem;flex-wrap:wrap">
    <span class="tag gold">${escapeHtml(tCategory(ctx.category, lang))} · ${escapeHtml(tDifficulty(ctx.difficulty, lang))} · <span class="tabular-nums">${ctx.rating}</span></span>
    <div style="display:flex;gap:.3rem;align-items:center;flex-wrap:wrap">
      ${ctx.sourceUrl ? `<a class="btn-ghost-xs" href="${escapeHtml(ctx.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('openOnSourceBtn'))}</a>` : ''}
      <a class="btn-ghost-xs" href="${escapeHtml(buildLichessAnalysisUrl(viewPos.game.fen()))}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('lichessAnalysisLink'))}</a>
      <button type="button" class="toggle-btn ${State.showPuzzleStockfish ? 'active' : ''}" id="pzSfBtn">${iconSvg('coach', 14)} ${escapeHtml(t('sfStatusChip', { state: State.showPuzzleStockfish ? t('on') : t('off') }))}</button>
    </div>
  </div>`);
  sfToggle.querySelector('#pzSfBtn').onclick = () => {
    State.showPuzzleStockfish = !State.showPuzzleStockfish;
    if (!State.showPuzzleStockfish) stockfishClient.stop();
    render();
  };
  side.appendChild(sfToggle);

  const turnColorName = viewPos.game.turn() === 'w' ? 'White' : 'Black';
  const promptCard = el(`<div class="puzzle-prompt">
    <div class="puzzle-prompt-head">
      <span class="turn-flag ${viewPos.game.turn() === 'w' ? 'white' : ''}">${escapeHtml(t('sideToMove', { side: tSide(turnColorName, lang) }))}</span>
      <span class="mono tabular-nums" style="font-size:.76rem;color:var(--ink-soft)">${escapeHtml(isReviewing ? t('reviewingPly', { cur: effectivePly, max: maxPlayed }) : t('stepCount', { cur: Math.min(Math.floor(maxPlayed / 2) + 1, Math.ceil(totalPlies / 2)), total: Math.ceil(totalPlies / 2) }))}</span>
    </div>
    <h4>${escapeHtml(locCtx.theme)}</h4>
    <p style="margin:0;color:var(--ink-soft)">${escapeHtml(locCtx.prompt)}</p>
  </div>`);
  side.appendChild(promptCard);

  if (State.puzzleFeedback) {
    const fbText = resolvePuzzleFeedbackText(State.puzzleFeedback, ctx, locCtx, lang);
    side.appendChild(el(`<div class="puzzle-feedback ${State.puzzleFeedback.kind}">${escapeHtml(fbText)}</div>`));
  }

  if (maxPlayed > 0) {
    side.appendChild(
      buildMovesPanel(ctx.moves.slice(0, maxPlayed), {
        currentPly: effectivePly,
        onSelectPly: (plyNo) => {
          State.puzzleViewPly = plyNo >= maxPlayed ? null : plyNo;
          render();
        },
        title: t('playedMovesTitle'),
      }),
    );
  }

  if (State.showPuzzleStockfish) {
    const sfPanel = createStockfishPanel({
      title: t('sfVerification'),
      showArrows: State.showCoachArrows,
      onToggleArrows: () => {
        State.showCoachArrows = !State.showCoachArrows;
        applyStockfishDom(State.sfSnapshot);
      },
    });
    State.dom.sfPanel = sfPanel;
    side.appendChild(sfPanel);
    triggerLiveAnalysis(viewPos.game.fen(), { depth: 12, multiPv: 3 });
  }

  layout.appendChild(side);
  return layout;
}

function renderPuzzleRush() {
  const lang = getLang();
  const rushMeta = State.training.rush || { bestBlitz3: 0, bestBlitz5: 0, bestSurvival: 0 };
  const session = State.rushSession;

  if (!session) {
    const bestForMode =
      State.rushMode === 'blitz5'
        ? rushMeta.bestBlitz5 || 0
        : State.rushMode === 'survival'
          ? rushMeta.bestSurvival || 0
          : rushMeta.bestBlitz3 || 0;
    const launcher = el(`<div class="card ornate rush-launcher">
      <h2>${iconSvg('flame', 22)} ${escapeHtml(t('puzzleRushTab'))}</h2>
      <p class="small">${escapeHtml(t('rushBestLabel', { score: bestForMode }))}</p>
      <div class="pill-switch" id="rushModePick" style="margin:.6rem auto">
        <button type="button" data-rm="blitz3" class="${State.rushMode === 'blitz3' ? 'active' : ''}">${escapeHtml(t('rushMode3m'))}</button>
        <button type="button" data-rm="blitz5" class="${State.rushMode === 'blitz5' ? 'active' : ''}">${escapeHtml(t('rushMode5m'))}</button>
        <button type="button" data-rm="survival" class="${State.rushMode === 'survival' ? 'active' : ''}">${escapeHtml(t('rushModeSurvival'))}</button>
      </div>
      <div style="display:flex;gap:1.5rem;justify-content:center;margin:.5rem 0;flex-wrap:wrap">
        <span class="tag gold tabular-nums">${escapeHtml(t('rushMode3m'))}: ${rushMeta.bestBlitz3 || 0}</span>
        <span class="tag gold tabular-nums">${escapeHtml(t('rushMode5m'))}: ${rushMeta.bestBlitz5 || 0}</span>
        <span class="tag green tabular-nums">${escapeHtml(t('rushModeSurvival'))}: ${rushMeta.bestSurvival || 0}</span>
      </div>
      <button type="button" class="btn gold" id="rushBeginBtn" style="margin-top:.5rem">${iconSvg('bolt', 16)} ${escapeHtml(t('rushStartBtn'))}</button>
    </div>`);
    launcher.querySelectorAll('#rushModePick button').forEach((b) => {
      b.onclick = () => {
        State.rushMode = b.dataset.rm;
        render();
      };
    });
    launcher.querySelector('#rushBeginBtn').onclick = () => startRushRun(State.rushMode);
    return launcher;
  }

  if (session.gameOver) {
    const isBest =
      session.score > 0 &&
      session.score >=
        (session.mode === 'blitz5'
          ? rushMeta.bestBlitz5 || 0
          : session.mode === 'survival'
            ? rushMeta.bestSurvival || 0
            : rushMeta.bestBlitz3 || 0);
    const reasonKey =
      session.endReason === 'timeout'
        ? 'rushReasonTimeout'
        : session.endReason === 'cleared'
          ? 'rushReasonCleared'
          : 'rushReasonStrikes';
    const summary = el(`<div class="card ornate rush-summary">
      <h2>${iconSvg('trophy', 22)} ${escapeHtml(t(reasonKey))}</h2>
      ${isBest ? `<span class="badge elo">${escapeHtml(t('rushNewBest'))}</span>` : ''}
      <div style="display:flex;justify-content:center;gap:2rem;margin:.8rem 0">
        <div><strong class="mono tabular-nums" style="font-size:2rem;color:var(--forest)">${session.score}</strong><div class="small">${escapeHtml(t('rushScoreLabel'))}</div></div>
        <div><strong class="mono tabular-nums" style="font-size:2rem;color:var(--gold)">×${session.bestCombo}</strong><div class="small">${escapeHtml(t('rushComboLabel', { n: session.bestCombo }))}</div></div>
      </div>
      ${session.missedPuzzles.length > 0 ? `
        <div class="rush-missed-box">
          <h4>${escapeHtml(t('rushReviewMissed'))}</h4>
          <div class="explorer-chips" style="justify-content:center">
            ${session.missedPuzzles
              .map(
                (mp, idx) => `<button type="button" class="explorer-move-chip tb-loss" data-miss-idx="${idx}">${escapeHtml(localizePuzzle(mp, lang).theme)} <small class="mono">(${mp.rating})</small></button>`,
              )
              .join('')}
          </div>
        </div>
      ` : ''}
      <div style="display:flex;gap:.5rem;justify-content:center;margin-top:.8rem">
        <button type="button" class="btn gold" id="rushPlayAgain">${iconSvg('refresh', 14)} ${escapeHtml(t('rushPlayAgain'))}</button>
        <button type="button" class="btn ghost" id="rushChangeMode">${escapeHtml(t('setup'))}</button>
      </div>
    </div>`);
    summary.querySelectorAll('[data-miss-idx]').forEach((btn) => {
      btn.onclick = () => {
        const mp = session.missedPuzzles[Number(btn.getAttribute('data-miss-idx'))];
        if (mp) openPuzzleInSolver(mp);
      };
    });
    summary.querySelector('#rushPlayAgain').onclick = () => startRushRun(session.mode);
    summary.querySelector('#rushChangeMode').onclick = () => {
      State.rushSession = null;
      render();
    };
    return summary;
  }

  const cur = getRushCurrentPuzzle(session);
  const locCur = localizePuzzle(cur, lang);
  if (!State.rushGame) loadActiveRushBoard();
  const g = State.rushGame;

  const layout = document.createElement('div');
  layout.className = `play-layout${State.boardMaximized ? ' board-maximized' : ''}`;

  const onRushMove = (playedMove) => {
    g.undo();
    const preFen = g.fen();
    const res = evaluatePuzzleMove({
      fen: preFen,
      solutionMoves: cur.moves,
      plyIndex: State.rushPly,
      playedMoveObj: {
        from: playedMove.from,
        to: playedMove.to,
        promotion: playedMove.promotion,
      },
      acceptAlso: cur.acceptAlso || [],
      ChessCtor: Chess,
      lang,
    });

    if (!res.correct) {
      playChessSound('puzzleWrong', State.preferences.sound);
      State.rushAutoReplying = true;
      State.rushFeedback = {
        kind: 'wrong',
        text: t('rushStrikePopup', { san: res.expectedSan }),
      };
      const nextSess = recordRushStrike(State.rushSession);
      State.rushSession = nextSess;
      if (nextSess.gameOver) saveRushBestScore(nextSess);
      render();
      setTimeout(() => {
        if (State.page !== 'puzzles' || State.puzzleView !== 'rush') return;
        State.rushAutoReplying = false;
        if (!nextSess.gameOver) loadActiveRushBoard();
        else stopRushTimer();
        render();
      }, 450);
      return;
    }

    g.move(res.playedSan);
    State.rushLastMove = { from: playedMove.from, to: playedMove.to };

    if (res.finished) {
      playChessSound('puzzleCorrect', State.preferences.sound);
      State.rushAutoReplying = true;
      const nextSess = recordRushSolve(State.rushSession);
      State.rushSession = nextSess;
      State.rushFeedback = { kind: 'correct', text: t('rushSolvedPopup', { pts: 1 }) };
      if (nextSess.gameOver) saveRushBestScore(nextSess);
      render();
      setTimeout(() => {
        if (State.page !== 'puzzles' || State.puzzleView !== 'rush') return;
        State.rushAutoReplying = false;
        if (!nextSess.gameOver) loadActiveRushBoard();
        else stopRushTimer();
        render();
      }, 220);
      return;
    }

    playChessSound(soundForMove(playedMove, g), State.preferences.sound);
    State.rushPly = res.nextPly;
    State.rushAutoReplying = true;
    render();
    setTimeout(() => {
      if (State.page !== 'puzzles' || State.puzzleView !== 'rush') return;
      const opp = g.move(res.oppAutoMove);
      if (opp) {
        State.rushLastMove = { from: opp.from, to: opp.to };
        playChessSound(soundForMove(opp, g), State.preferences.sound);
      }
      State.rushAutoReplying = false;
      render();
    }, 180);
  };

  const boardCol = document.createElement('div');
  boardCol.className = 'board-column no-controls';
  const stage = buildBoardStage(g, {
    flip: State.flipBoard,
    lastMove: State.rushLastMove,
    interactive: !State.rushAutoReplying && !State.promotionPending,
    onMove: onRushMove,
    silentMoves: true,
  });
  boardCol.appendChild(stage.frame);
  layout.appendChild(boardCol);

  const side = document.createElement('div');
  side.className = 'play-sidebar';

  const strikesHtml = Array.from({ length: session.maxStrikes }, (_, i) =>
    `<span class="rush-strike ${i < session.strikes ? 'used' : ''}">✕</span>`,
  ).join('');

  const hud = el(`<div class="rush-hud">
    ${session.timed ? `<div class="rush-stat"><span class="small">${escapeHtml(t('rushTimeLabel'))}</span><strong class="chess-clock tabular-nums ${session.remainingMs < 20_000 ? 'low-time' : ''}" id="rushTimerVal" dir="ltr">${escapeHtml(formatClockMs(session.remainingMs))}</strong></div>` : ''}
    <div class="rush-stat"><span class="small">${escapeHtml(t('rushScoreLabel'))}</span><strong class="mono tabular-nums">${session.score}</strong></div>
    <div class="rush-stat"><span class="small">${escapeHtml(t('rushStrikesLabel'))}</span><div class="rush-strikes" dir="ltr">${strikesHtml}</div></div>
  </div>`);
  State.dom.rushTimerEl = hud.querySelector('#rushTimerVal');
  side.appendChild(hud);

  if (session.combo >= 2) {
    side.appendChild(el(`<div class="tag green tabular-nums" style="align-self:flex-start">${iconSvg('bolt', 12)} ${escapeHtml(t('rushComboLabel', { n: session.combo }))}</div>`));
  }

  side.appendChild(el(`<div class="puzzle-prompt">
    <div class="puzzle-prompt-head">
      <span class="turn-flag ${g.turn() === 'w' ? 'white' : ''}">${escapeHtml(t('sideToMove', { side: tSide(g.turn() === 'w' ? 'White' : 'Black', lang) }))}</span>
      <span class="mono tabular-nums" style="font-size:.76rem;color:var(--ink-soft)">${cur.rating} Elo</span>
    </div>
    <h4>${escapeHtml(locCur.theme)}</h4>
    <p style="margin:0;color:var(--ink-soft)">${escapeHtml(locCur.prompt)}</p>
  </div>`));

  if (State.rushFeedback) {
    side.appendChild(el(`<div class="puzzle-feedback ${State.rushFeedback.kind}">${escapeHtml(State.rushFeedback.text)}</div>`));
  }

  const endRushBtn = el(`<button type="button" class="btn ghost sm" style="align-self:flex-start">${escapeHtml(t('setup'))}</button>`);
  endRushBtn.onclick = () => {
    stopRushTimer();
    State.rushSession = null;
    render();
  };
  side.appendChild(endRushBtn);

  layout.appendChild(side);
  return layout;
}

function renderQuizSprint() {
  const lang = getLang();
  const box = document.createElement('div');
  box.style.cssText = 'flex:1;min-height:0;display:flex;flex-direction:column;gap:.5rem;overflow:hidden';

  const topControls = el(`<div class="filter-bar">
    <div class="toggle-row" id="qzCatTabs">
      ${PUZZLE_CATEGORIES.map((cat) => `<button type="button" class="toggle-btn ${State.quizCategory === cat ? 'active' : ''}" data-cat="${cat}">${escapeHtml(tCategory(cat, lang))}</button>`).join('')}
    </div>
    <div style="display:flex;gap:.4rem;margin-inline-start:auto;align-items:center">
      <button type="button" class="toggle-btn ${State.showQuizStockfish ? 'active' : ''}" id="qzSfBtn">${iconSvg('coach', 14)} ${escapeHtml(t('verifyWithStockfish'))}</button>
      <button type="button" class="btn gold sm" id="qzNew">${iconSvg('refresh', 13)} ${escapeHtml(t('new10QuizSprint'))}</button>
    </div>
  </div>`);

  topControls.querySelectorAll('#qzCatTabs button').forEach((b) => {
    b.onclick = () => {
      State.selectedSquare = null;
      State.legalDests = [];
      State.promotionPending = null;
      State.quizCategory = b.dataset.cat;
      State.quizSession = createQuizSession(QUIZZES, {
        category: State.quizCategory,
        count: 10,
        offset: State.training.quizzes?.completedSprints || 0,
      });
      render();
    };
  });
  topControls.querySelector('#qzSfBtn').onclick = () => {
    State.showQuizStockfish = !State.showQuizStockfish;
    render();
  };
  topControls.querySelector('#qzNew').onclick = () => {
    State.selectedSquare = null;
    State.legalDests = [];
    State.promotionPending = null;
    State.quizSession = createQuizSession(QUIZZES, {
      category: State.quizCategory,
      count: 10,
      offset: Math.floor(Math.random() * 16),
    });
    render();
  };
  box.appendChild(topControls);

  const session = State.quizSession;
  if (session.completed) {
    const summary = summarizeQuizSession(session);
    const card = el(`<div class="card" style="max-width:720px;margin:auto;text-align:center">
      <h2>${iconSvg('trophy', 22)} ${escapeHtml(t('quizSprintComplete'))}</h2>
      <div style="display:flex;justify-content:center;gap:2rem;margin:.8rem 0">
        <div><strong class="mono tabular-nums" style="font-size:2rem;color:var(--forest)">${summary.correct}/${summary.total}</strong><div class="small">${escapeHtml(t('scoreLabel'))}</div></div>
        <div><strong class="mono tabular-nums" style="font-size:2rem;color:var(--gold)">${summary.accuracy}%</strong><div class="small">${escapeHtml(t('accuracyLabel'))}</div></div>
      </div>
      <div style="display:flex;gap:.45rem;justify-content:center;flex-wrap:wrap;margin:.6rem 0">
        ${Object.entries(summary.byCategory)
          .map(([k, v]) => `<span class="tag">${escapeHtml(tCategory(k, lang))}: <span class="tabular-nums">${v.correct}/${v.total}</span></span>`)
          .join('')}
      </div>
      <button type="button" class="btn gold" id="restartQz" style="margin-top:.6rem">${escapeHtml(t('startFreshSprint'))}</button>
    </div>`);
    card.querySelector('#restartQz').onclick = () => {
      State.selectedSquare = null;
      State.legalDests = [];
      State.promotionPending = null;
      State.quizSession = createQuizSession(QUIZZES, {
        category: State.quizCategory,
        count: 10,
        offset: (State.training.quizzes?.completedSprints || 0) * 3,
      });
      render();
    };
    box.appendChild(card);
    return box;
  }

  const rawQ = session.items[session.currentIndex];
  const q = localizeQuiz(rawQ, lang);
  const answered = session.lastResult !== null;
  const g = new Chess(answered && session.lastResult?.fenAfter ? session.lastResult.fenAfter : rawQ.fen);
  const layout = document.createElement('div');
  layout.className = `play-layout${State.boardMaximized ? ' board-maximized' : ''}`;

  const boardCol = document.createElement('div');
  boardCol.className = 'board-column no-controls';
  const stage = buildBoardStage(g, {
    flip: rawQ.sideToMove === 'Black',
    lastMove: answered ? session.lastResult?.playedMove || null : null,
    interactive: !answered && !State.promotionPending,
    silentMoves: true,
    onMove: (playedMove) => {
      const nextSess = submitQuizMove(
        State.quizSession,
        {
          from: playedMove.from,
          to: playedMove.to,
          promotion: playedMove.promotion,
        },
        { ChessCtor: Chess },
      );
      State.quizSession = nextSess;
      if (nextSess.lastResult) {
        playChessSound(nextSess.lastResult.isCorrect ? 'puzzleCorrect' : 'puzzleWrong', State.preferences.sound);
      }
      render();
    },
    showEvalBar: State.showQuizStockfish,
    showArrows: State.showQuizStockfish,
  });
  State.dom.evalBar = stage.evalBar;
  State.dom.arrowsSvg = stage.arrowsSvg;
  boardCol.appendChild(stage.frame);
  layout.appendChild(boardCol);

  const side = document.createElement('div');
  side.className = 'play-sidebar';

  const qHeader = el(`<div class="puzzle-prompt">
    <div class="puzzle-prompt-head">
      <span class="turn-flag ${rawQ.sideToMove === 'White' ? 'white' : ''}">${escapeHtml(t('sideToMove', { side: tSide(rawQ.sideToMove, lang) }))}</span>
      <span class="tag">${escapeHtml(tCategory(rawQ.category, lang))} · ${escapeHtml(tDifficulty(rawQ.difficulty, lang))}</span>
      <span class="mono tabular-nums" style="font-size:.78rem">${escapeHtml(t('questionProgress', { cur: session.currentIndex + 1, total: session.items.length }))}</span>
    </div>
    <h4>${escapeHtml(q.theme)}</h4>
    <p style="margin:0;color:var(--ink)">${escapeHtml(q.question)}</p>
    ${!answered ? `<p class="small" style="margin:.25rem 0 0;color:var(--ink-soft)">${escapeHtml(t('quizBoardInputHint', {}, lang))}</p>` : ''}
  </div>`);
  side.appendChild(qHeader);

  const optsWrap = document.createElement('div');
  optsWrap.className = 'quiz-options';
  const letters = lang === 'ar' ? ['أ', 'ب', 'ج', 'د'] : ['A', 'B', 'C', 'D'];
  q.options.forEach((optText, idx) => {
    let cls = 'quiz-opt';
    if (answered) {
      if (idx === rawQ.correctIndex) cls += ' correct';
      else if (idx === session.lastResult.chosenIndex) cls += ' wrong';
    }
    const btn = el(`<button type="button" class="${cls}" ${answered ? 'disabled' : ''}>
      <span class="quiz-letter">${letters[idx]}</span>
      <span>${escapeHtml(optText)}</span>
    </button>`);
    btn.onclick = () => {
      State.selectedSquare = null;
      State.legalDests = [];
      State.promotionPending = null;
      const nextSess = submitQuizAnswer(State.quizSession, idx);
      State.quizSession = nextSess;
      if (nextSess.lastResult) {
        playChessSound(nextSess.lastResult.isCorrect ? 'puzzleCorrect' : 'puzzleWrong', State.preferences.sound);
      }
      render();
    };
    optsWrap.appendChild(btn);
  });
  side.appendChild(optsWrap);

  if (answered) {
    const res = session.lastResult;
    const leadFeedback = res.isCorrect
      ? t('quizCorrect')
      : res.answeredVia === 'board' && res.playedSan
        ? isolateChessTokens(t('quizWrongPlayed', { played: res.playedSan, san: res.recommendedSan }, lang), lang)
        : isolateChessTokens(t('quizWrong', { san: res.recommendedSan }, lang), lang);
    const fb = el(`<div class="puzzle-feedback ${res.isCorrect ? 'correct' : 'wrong'}">
      <div><strong>${escapeHtml(leadFeedback)}</strong> ${escapeHtml(q.explanation)}</div>
      <div style="margin-top:.4rem;display:flex;justify-content:flex-end">
        <button type="button" class="btn gold sm" id="qzNext">${escapeHtml(session.currentIndex + 1 >= session.items.length ? t('finishSprint') : t('nextQuestion'))} ${iconSvg('next', 13)}</button>
      </div>
    </div>`);
    fb.querySelector('#qzNext').onclick = () => {
      State.selectedSquare = null;
      State.legalDests = [];
      State.promotionPending = null;
      const nextSess = advanceQuizSession(State.quizSession);
      State.quizSession = nextSess;
      if (nextSess.completed) {
        const s = summarizeQuizSession(nextSess);
        const prevQ = State.training.quizzes || { completedSprints: 0, bestAccuracy: 0, totalCorrect: 0, totalAnswered: 0 };
        State.training.quizzes = {
          completedSprints: (prevQ.completedSprints || 0) + 1,
          bestAccuracy: Math.max(prevQ.bestAccuracy || 0, s.accuracy),
          totalCorrect: (prevQ.totalCorrect || 0) + s.correct,
          totalAnswered: (prevQ.totalAnswered || 0) + s.answered,
        };
        saveTrainingProgress();
      }
      render();
    };
    side.appendChild(fb);
  }

  if (State.showQuizStockfish) {
    const sfPanel = createStockfishPanel({
      title: t('sfVerification'),
      showArrows: State.showCoachArrows,
      onToggleArrows: () => {
        State.showCoachArrows = !State.showCoachArrows;
        applyStockfishDom(State.sfSnapshot);
      },
    });
    State.dom.sfPanel = sfPanel;
    side.appendChild(sfPanel);
    triggerLiveAnalysis(g.fen(), { depth: 11, multiPv: 3 });
  }

  layout.appendChild(side);
  box.appendChild(layout);
  return box;
}

// =========================================================
// MASTER-DETAIL STUDY RENDERER (Openings, Traps, Strategy)
// =========================================================
function renderOpenings() {
  const lang = getLang();
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  const isTraps = State.openingsTab === 'traps';
  const listAll = isTraps ? TRAPS : OPENINGS;
  const query = normalizeSearchText(State.openingsSearch);
  const filtered = query
    ? listAll.filter((x) => {
        const ar = isTraps ? localizeTrap(x, 'ar') : localizeOpening(x, 'ar');
        const hay = normalizeSearchText(
          `${x.name} ${x.eco || ''} ${x.level || ''} ${x.summary} ${ar?.name || ''} ${ar?.summary || ''}`,
        );
        return hay.includes(query);
      })
    : listAll;

  const activeId = isTraps ? State.selectedTrapId : State.selectedOpeningId;
  const active = filtered.find((x) => x.id === activeId) || listAll.find((x) => x.id === activeId) || listAll[0];
  if (isTraps) State.selectedTrapId = active.id;
  else State.selectedOpeningId = active.id;

  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.55rem;flex-wrap:wrap">
      <h1>${iconSvg('openings', 18)} ${escapeHtml(t('openingsHeading'))}</h1>
      <div class="pill-switch" id="opTabSwitch">
        <button type="button" data-t="openings" class="${!isTraps ? 'active' : ''}">${escapeHtml(t('repertoiresTab', { n: OPENINGS.length }))}</button>
        <button type="button" data-t="traps" class="${isTraps ? 'active' : ''}">${escapeHtml(t('openingTrapsTab', { n: TRAPS.length }))}</button>
      </div>
    </div>
    <div class="view-bar-meta">
      <div class="pill-switch" id="opModeSwitch">
        <button type="button" data-m="learn" class="${State.studyMode === 'learn' ? 'active' : ''}">${escapeHtml(t('learnTab'))}</button>
        <button type="button" data-m="practice" class="${State.studyMode === 'practice' ? 'active' : ''}">${escapeHtml(t('practiceDrillTab'))}</button>
      </div>
      <button type="button" class="toggle-btn ${State.showStudyStockfish ? 'active' : ''}" id="opSfToggle">${iconSvg('coach', 14)} ${escapeHtml(t('sfStatusChip', { state: State.showStudyStockfish ? t('on', {}, lang) : t('off', {}, lang) }, lang))}</button>
      <button type="button" class="btn ghost sm" id="opSidebarToggle" title="${escapeHtml(t('toggleSidebarTip'))}">${iconSvg('sidebar', 14)} <span>${escapeHtml(t('lessonsBtn'))}</span></button>
    </div>
  </div>`);

  bar.querySelectorAll('#opTabSwitch button').forEach((b) => {
    b.onclick = () => {
      State.openingsTab = b.dataset.t;
      State.studyStep = 0;
      State.practiceFeedback = null;
      render();
    };
  });
  bar.querySelectorAll('#opModeSwitch button').forEach((b) => {
    b.onclick = () => {
      State.studyMode = b.dataset.m;
      State.studyStep = 0;
      State.practiceFeedback = null;
      State.lastMove = null;
      render();
    };
  });
  bar.querySelector('#opSfToggle').onclick = () => {
    State.showStudyStockfish = !State.showStudyStockfish;
    if (!State.showStudyStockfish) stockfishClient.stop();
    render();
  };
  bar.querySelector('#opSidebarToggle').onclick = () => {
    State.studySidebarCollapsed = !State.studySidebarCollapsed;
    render();
  };
  wrap.appendChild(bar);

  wrap.appendChild(
    buildLineStudyWorkspace({
      kind: isTraps ? 'traps' : 'openings',
      items: filtered,
      active,
      searchValue: State.openingsSearch,
      onSearch: (val) => {
        State.openingsSearch = val;
        render();
        const inp = document.getElementById('studySearchInput');
        if (inp) {
          inp.focus();
          inp.setSelectionRange(inp.value.length, inp.value.length);
        }
      },
      onSelect: (item) => {
        if (isTraps) State.selectedTrapId = item.id;
        else State.selectedOpeningId = item.id;
        State.studyStep = 0;
        State.practiceFeedback = null;
        State.lastMove = null;
        render();
      },
    }),
  );
  return wrap;
}

function renderStrategy() {
  const lang = getLang();
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  const active =
    MIDDLEGAME_LESSONS.find((m) => m.id === State.selectedStrategyId) || MIDDLEGAME_LESSONS[0];
  State.selectedStrategyId = active.id;

  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.55rem;flex-wrap:wrap">
      <h1>${iconSvg('strategy', 18)} ${escapeHtml(t('middlegameStrategyTitle', { n: MIDDLEGAME_LESSONS.length }))}</h1>
      <div class="pill-switch" id="stModeSwitch">
        <button type="button" data-m="learn" class="${State.studyMode === 'learn' ? 'active' : ''}">${escapeHtml(t('learnTab'))}</button>
        <button type="button" data-m="practice" class="${State.studyMode === 'practice' ? 'active' : ''}">${escapeHtml(t('practiceDrillTab'))}</button>
      </div>
    </div>
    <div class="view-bar-meta">
      <button type="button" class="toggle-btn ${State.showStudyStockfish ? 'active' : ''}" id="stSfToggle">${iconSvg('coach', 14)} ${escapeHtml(t('sfStatusChip', { state: State.showStudyStockfish ? t('on', {}, lang) : t('off', {}, lang) }, lang))}</button>
      <button type="button" class="btn gold sm" id="stPuzzles">${iconSvg('puzzles', 13)} ${escapeHtml(t('strategyPuzzlesBtn', { n: getPuzzlesByCategory('Strategy').length }))}</button>
      <button type="button" class="btn ghost sm" id="stSidebarToggle" title="${escapeHtml(t('toggleSidebarTip'))}">${iconSvg('sidebar', 14)} <span>${escapeHtml(t('lessonsBtn'))}</span></button>
    </div>
  </div>`);

  bar.querySelectorAll('#stModeSwitch button').forEach((b) => {
    b.onclick = () => {
      State.studyMode = b.dataset.m;
      State.studyStep = 0;
      State.practiceFeedback = null;
      State.lastMove = null;
      render();
    };
  });
  bar.querySelector('#stSfToggle').onclick = () => {
    State.showStudyStockfish = !State.showStudyStockfish;
    if (!State.showStudyStockfish) stockfishClient.stop();
    render();
  };
  bar.querySelector('#stSidebarToggle').onclick = () => {
    State.studySidebarCollapsed = !State.studySidebarCollapsed;
    render();
  };
  bar.querySelector('#stPuzzles').onclick = () => {
    State.puzzleView = 'catalog';
    State.puzzleCategory = 'Strategy';
    State.puzzlePage = 1;
    navigate('puzzles');
  };
  wrap.appendChild(bar);

  wrap.appendChild(
    buildLineStudyWorkspace({
      kind: 'middlegame',
      items: MIDDLEGAME_LESSONS,
      active,
      onSelect: (item) => {
        State.selectedStrategyId = item.id;
        State.studyStep = 0;
        State.practiceFeedback = null;
        State.lastMove = null;
        render();
      },
    }),
  );
  return wrap;
}

function resolvePracticeFeedbackText(fb, locActive, lang) {
  if (!fb) return '';
  if (!fb.meta) return fb.text || '';
  const m = fb.meta;
  if (m.type === 'complete') return t('lineMastered', {}, lang);
  if (m.type === 'correct') {
    const stepText = locActive.line?.[m.stepIdx]?.text || '';
    return isolateChessTokens(`${m.playedSan} — ${stepText}`, lang);
  }
  if (m.type === 'wrong') {
    const hintWord = m.isCastling ? t('castlingWord', {}, lang) : t('mainLineWord', {}, lang);
    return t('practiceTryAgain', { hint: hintWord, played: m.playedSan }, lang);
  }
  if (m.type === 'revealed') {
    const stepText = locActive.line?.[m.stepIdx]?.text || '';
    return t('revealedStep', { move: m.move, text: stepText }, lang);
  }
  return fb.text || '';
}

function buildLineStudyWorkspace({ kind, items, active, searchValue = null, onSearch = null, onSelect }) {
  const lang = getLang();
  const localizeStudyItem = (it) =>
    kind === 'traps'
      ? localizeTrap(it, lang)
      : kind === 'middlegame'
        ? localizeMiddlegame(it, lang)
        : localizeOpening(it, lang);
  const locActive = localizeStudyItem(active);

  const split = document.createElement('div');
  split.className = `master-detail${State.studySidebarCollapsed ? ' sidebar-collapsed' : ''}${State.mobileStudyListOpen ? ' mobile-list-open' : ''}`;

  const progressMap = State.training[kind] || {};
  const sidebar = document.createElement('aside');
  sidebar.className = 'master-sidebar';
  if (onSearch) {
    const fRow = el(`<div class="master-filter"><input id="studySearchInput" placeholder="${escapeHtml(t('filterLinesPlaceholder'))}" value="${escapeHtml(searchValue || '')}" /></div>`);
    fRow.querySelector('input').oninput = (e) => onSearch(e.target.value);
    sidebar.appendChild(fRow);
  }

  const list = document.createElement('div');
  list.className = 'master-list';
  items.forEach((item) => {
    const locItem = localizeStudyItem(item);
    const pr = progressMap[item.id] || {};
    const total = Math.max(1, (item.line || []).length);
    const pct = Math.min(100, Math.round(((pr.step || 0) / total) * 100));
    const subMeta = [locItem.eco || locItem.category || '', locItem.level || ''].filter(Boolean).join(' · ');
    const elItem = el(`<div class="list-item ${item.id === active.id ? 'active' : ''}">
      <div style="display:flex;align-items:center;gap:.5rem;min-width:0;flex:1">
        <div class="lesson-progress ${pr.complete ? 'complete' : ''}" style="--progress:${pct}%"><b>${pct}%</b></div>
        <div class="meta">
          <h4>${escapeHtml(locItem.name)}</h4>
          <span class="small">${escapeHtml(subMeta)}</span>
        </div>
      </div>
    </div>`);
    elItem.onclick = () => onSelect(item);
    list.appendChild(elItem);
  });
  sidebar.appendChild(list);
  split.appendChild(sidebar);

  // Detail area
  const detail = document.createElement('div');
  detail.className = 'detail-workspace';
  const mobBar = el(`<div class="mobile-lesson-bar">
    <select aria-label="${escapeHtml(t('selectLessonAria'))}">
      ${items.map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === active.id ? 'selected' : ''}>${escapeHtml(localizeStudyItem(item).name)}</option>`).join('')}
    </select>
    <button type="button" class="toggle-btn ${State.mobileStudyListOpen ? 'active' : ''}" id="mobListBtn">${iconSvg('sidebar', 13)} ${escapeHtml(t('listBtn'))}</button>
  </div>`);
  mobBar.querySelector('select').onchange = (e) => {
    const picked = items.find((it) => it.id === e.target.value);
    if (picked) onSelect(picked);
  };
  mobBar.querySelector('#mobListBtn').onclick = () => {
    State.mobileStudyListOpen = !State.mobileStudyListOpen;
    render();
  };
  detail.appendChild(mobBar);
  const line = locActive.line || [];
  const total = line.length;
  State.studyStep = Math.max(0, Math.min(State.studyStep, total));
  const step = State.studyStep;
  const g = active.startFen ? new Chess(active.startFen) : new Chess();
  const playedMoves = [];
  for (let i = 0; i < step; i += 1) {
    const m = g.move(line[i].move);
    if (m) playedMoves.push(m.san);
  }
  const lastMv = step > 0 ? lastMoveSquares(g) : null;

  const layout = document.createElement('div');
  layout.className = `play-layout${State.boardMaximized ? ' board-maximized' : ''}`;
  const boardCol = document.createElement('div');
  boardCol.className = 'board-column';

  const isPractice = State.studyMode === 'practice';
  const practiceComplete = isPractice && step >= total;
  const expectedStep = isPractice && !practiceComplete ? line[step] : null;
  const isInteractivePractice = isPractice && !practiceComplete;

  const stage = buildBoardStage(g, {
    flip: State.flipBoard,
    lastMove: lastMv,
    interactive: isInteractivePractice && !State.promotionPending,
    silentMoves: isInteractivePractice,
    onMove: (playedMove) => {
      if (!expectedStep) return;
      const cleanExp = expectedStep.move.replace(/[+#?!]+$/g, '');
      const cleanGot = playedMove.san.replace(/[+#?!]+$/g, '');
      if (cleanExp === cleanGot) {
        const solvedStepIdx = State.studyStep;
        State.studyStep += 1;
        recordStudyProgress(kind, active, State.studyStep, total);
        if (State.studyStep >= total) {
          playChessSound('puzzleCorrect', State.preferences.sound);
          recordPracticeMastery(kind, active);
          State.practiceFeedback = { kind: 'correct', meta: { type: 'complete' } };
        } else {
          playChessSound(soundForMove(playedMove, g), State.preferences.sound);
          State.practiceFeedback = {
            kind: 'correct',
            meta: { type: 'correct', playedSan: playedMove.san, stepIdx: solvedStepIdx },
          };
        }
      } else {
        playChessSound('puzzleWrong', State.preferences.sound);
        g.undo();
        State.lastMove = lastMoveSquares(g);
        State.practiceFeedback = {
          kind: 'wrong',
          meta: { type: 'wrong', isCastling: expectedStep.move[0] === 'O', playedSan: playedMove.san },
        };
      }
      render();
    },
    showEvalBar: State.showStudyStockfish,
    showArrows: State.showStudyStockfish,
  });
  State.dom.evalBar = stage.evalBar;
  State.dom.arrowsSvg = stage.arrowsSvg;
  boardCol.appendChild(stage.frame);

  const ctrl = document.createElement('div');
  ctrl.className = 'board-controls';
  if (isPractice) {
    const rst = el(`<button type="button" class="btn ghost sm">${iconSvg('refresh', 13)} ${escapeHtml(t('restartDrill'))}</button>`);
    rst.onclick = () => {
      State.studyStep = 0;
      State.practiceFeedback = null;
      render();
    };
    const peek = el(`<button type="button" class="btn gold sm">${iconSvg('hint', 13)} ${escapeHtml(t('revealMove'))}</button>`);
    peek.disabled = practiceComplete;
    peek.onclick = () => {
      if (!expectedStep) return;
      const stepIdx = State.studyStep;
      State.studyStep += 1;
      recordStudyProgress(kind, active, State.studyStep, total);
      State.practiceFeedback = {
        kind: 'hint',
        meta: { type: 'revealed', move: expectedStep.move, stepIdx },
      };
      render();
    };
    const flp = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 13)} ${escapeHtml(t('flip'))}</button>`);
    flp.onclick = () => {
      State.flipBoard = !State.flipBoard;
      render();
    };
    ctrl.appendChild(rst);
    ctrl.appendChild(peek);
    ctrl.appendChild(flp);
    ctrl.appendChild(makeMaxBoardButton());
  } else {
    ctrl.appendChild(
      buildMoveTransportBar({
        ply: step,
        total,
        onNavigate: (nextStep) => {
          State.studyStep = nextStep;
          if (nextStep > step) recordStudyProgress(kind, active, State.studyStep, total);
          render();
        },
      }),
    );
    const bFlip = el(`<button type="button" class="btn ghost sm" title="${escapeHtml(t('flipTip'))}">${iconSvg('flip', 13)} ${escapeHtml(t('flip'))}</button>`);
    bFlip.onclick = () => {
      State.flipBoard = !State.flipBoard;
      render();
    };
    ctrl.appendChild(bFlip);
    ctrl.appendChild(makeMaxBoardButton());
  }
  boardCol.appendChild(ctrl);
  layout.appendChild(boardCol);

  const side = document.createElement('div');
  side.className = 'play-sidebar';

  if (isPractice) {
    const pct = total ? Math.round((step / total) * 100) : 0;
    const turnSideLabel = tSide(g.turn() === 'w' ? 'White' : 'Black', lang);
    side.appendChild(el(`<div class="practice-prompt ${practiceComplete ? 'complete' : ''}">
      <div class="practice-progress"><span style="width:${pct}%"></span></div>
      <h4>${escapeHtml(practiceComplete ? t('lineMastered', {}, lang) : t('playMoveNum', { num: Math.floor(step / 2) + 1, side: turnSideLabel }, lang))}</h4>
      <p class="small" style="margin:0">${escapeHtml(locActive.summary)}</p>
    </div>`));
    if (State.practiceFeedback) {
      const pfText = resolvePracticeFeedbackText(State.practiceFeedback, locActive, lang);
      side.appendChild(el(`<div class="puzzle-feedback ${State.practiceFeedback.kind}">${escapeHtml(pfText)}</div>`));
    }
  } else {
    const curMoveTxt = step === 0 ? t('startingPosition', {}, lang) : `${Math.ceil(step / 2)}${step % 2 === 1 ? '.' : '...'} ${line[step - 1].move}`;
    const bodyTxt = step === 0 ? locActive.summary : line[step - 1].text;
    side.appendChild(el(`<div class="tutorial-text">
      <div class="step-counter tabular-nums">${escapeHtml(locActive.name)} · ${escapeHtml(t('moveProgress', { step, total }, lang))}</div>
      <div class="move-played" dir="ltr" style="text-align:start">${escapeHtml(curMoveTxt)}</div>
      <p>${escapeHtml(bodyTxt)}</p>
      ${locActive.keyIdeas ? `<div class="key-ideas">${locActive.keyIdeas.map((k) => `<span class="idea-chip">${escapeHtml(k)}</span>`).join('')}</div>` : ''}
      ${locActive.avoid ? `<div class="avoid-tip-box"><strong>${escapeHtml(t('howToAvoid', {}, lang))}</strong> ${escapeHtml(locActive.avoid)}</div>` : ''}
    </div>`));
  }

  const egFen = viewPos.game.fen();
  const egPieceCount = countBoardPieces(egFen);
  if (egPieceCount <= 7) {
    side.appendChild(
      createExplorerAndTablebasePanel({
        opening: null,
        continuations: [],
        tablebase: State.tablebaseCacheFen === egFen ? State.tablebaseSnap : null,
        tablebaseLoading: State.tablebaseCacheFen === egFen && State.tablebaseLoading,
        pieceCount: egPieceCount,
        lang,
        onPlaySan: async (san) => {
          if (isReviewing || g.game_over() || State.endgameSparThinking || !san) return;
          const m = g.move(san);
          if (!m) return;
          State.endgameMoves.push(m.san);
          State.endgameViewPly = null;
          State.lastMove = lastMoveSquares(g);
          playChessSound(soundForMove(m, g), State.preferences.sound);
          recordStudyProgress('endgames', active, 1, 1);
          if (State.endgameSparring && !g.game_over()) {
            State.endgameSparThinking = true;
            render();
            const uci = await stockfishClient.playMove(g.fen(), 4);
            State.endgameSparThinking = false;
            if (uci && uci !== '(none)' && State.page === 'endgames' && State.selectedEndgameId === active.id) {
              const opp = g.move({
                from: uci.slice(0, 2),
                to: uci.slice(2, 4),
                promotion: uci.length > 4 ? uci.slice(4, 5) : undefined,
              });
              if (opp) {
                State.endgameMoves.push(opp.san);
                playChessSound(soundForMove(opp, g), State.preferences.sound);
              }
              State.lastMove = lastMoveSquares(g);
            }
          }
          render();
        },
      }),
    );
  }

  if (State.showStudyStockfish) {
    const sfPanel = createStockfishPanel({
      title: t('sfLiveAnalysis', {}, lang),
      showArrows: State.showCoachArrows,
      onToggleArrows: () => {
        State.showCoachArrows = !State.showCoachArrows;
        applyStockfishDom(State.sfSnapshot);
      },
    });
    State.dom.sfPanel = sfPanel;
    side.appendChild(sfPanel);
    triggerLiveAnalysis(g.fen(), { depth: 12, multiPv: 3 });
  }

  side.appendChild(
    isPractice
      ? buildMovesPanel(playedMoves, { title: t('playedMovesTitle', {}, lang) })
      : buildMovesPanel(
          line.map((s) => s.move),
          {
            currentPly: step,
            onSelectPly: (nextStep) => {
              State.studyStep = nextStep;
              if (nextStep > step) recordStudyProgress(kind, active, State.studyStep, total);
              render();
            },
            title: t('mainlineMovesTitle', {}, lang),
          },
        ),
  );
  layout.appendChild(side);
  detail.appendChild(layout);
  split.appendChild(detail);
  return split;
}

// =========================================================
// ENDGAMES MASTER-DETAIL + PLAYABLE SPARRING
// =========================================================
function renderEndgames() {
  const lang = getLang();
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  const active = ENDGAMES.find((e) => e.id === State.selectedEndgameId) || ENDGAMES[0];
  State.selectedEndgameId = active.id;
  const locActive = localizeEndgame(active, lang);

  if (!State.game || State.studyContext?.id !== active.id) {
    State.studyContext = active;
    State.game = new Chess(active.fen);
    State.endgameMoves = [];
    State.endgameViewPly = null;
    State.lastMove = null;
  }
  const g = State.game;
  const totalPlies = State.endgameMoves.length;
  const viewPly =
    State.endgameViewPly != null ? Math.max(0, Math.min(totalPlies, State.endgameViewPly)) : totalPlies;
  const isReviewing = viewPly < totalPlies;
  const viewPos = isReviewing
    ? buildPositionAtPly(active.fen, State.endgameMoves, viewPly, Chess)
    : { game: g, lastMove: State.lastMove };
  loadTablebaseForFen(viewPos.game.fen());

  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.55rem;flex-wrap:wrap">
      <h1>${iconSvg('endgames', 18)} ${escapeHtml(t('endgamesTitle', { n: ENDGAMES.length }))}</h1>
      <button type="button" class="toggle-btn ${State.endgameSparring ? 'active' : ''}" id="egSparBtn">${iconSvg('play', 14)} ${escapeHtml(t('sparVsSf', { state: State.endgameSparring ? t('on') : t('freePlay') }))}</button>
    </div>
    <div class="view-bar-meta">
      <button type="button" class="toggle-btn ${State.showStudyStockfish ? 'active' : ''}" id="egSfToggle">${iconSvg('coach', 14)} ${escapeHtml(t('analysisToggle', { state: State.showStudyStockfish ? t('on') : t('off') }))}</button>
      <button type="button" class="btn gold sm" id="egPuzzles">${iconSvg('puzzles', 13)} ${escapeHtml(t('endgamePuzzlesBtn', { n: getPuzzlesByCategory('Endgame').length }))}</button>
      <button type="button" class="btn ghost sm" id="egSidebarToggle" title="${escapeHtml(t('toggleEndgameListTip'))}">${iconSvg('sidebar', 14)} <span>${escapeHtml(t('lessonsBtn'))}</span></button>
    </div>
  </div>`);

  bar.querySelector('#egSparBtn').onclick = () => {
    State.endgameSparring = !State.endgameSparring;
    State.playerColor = new Chess(active.fen).turn();
    render();
  };
  bar.querySelector('#egSfToggle').onclick = () => {
    State.showStudyStockfish = !State.showStudyStockfish;
    if (!State.showStudyStockfish) stockfishClient.stop();
    render();
  };
  bar.querySelector('#egPuzzles').onclick = () => {
    State.puzzleView = 'catalog';
    State.puzzleCategory = 'Endgame';
    State.puzzlePage = 1;
    navigate('puzzles');
  };
  bar.querySelector('#egSidebarToggle').onclick = () => {
    State.studySidebarCollapsed = !State.studySidebarCollapsed;
    render();
  };
  wrap.appendChild(bar);

  const split = document.createElement('div');
  split.className = `master-detail${State.studySidebarCollapsed ? ' sidebar-collapsed' : ''}${State.mobileStudyListOpen ? ' mobile-list-open' : ''}`;

  const sidebar = document.createElement('aside');
  sidebar.className = 'master-sidebar';
  const list = document.createElement('div');
  list.className = 'master-list';
  ENDGAMES.forEach((eg) => {
    const locEg = localizeEndgame(eg, lang);
    const done = Boolean(State.training.endgames?.[eg.id]?.complete);
    const item = el(`<div class="list-item ${eg.id === active.id ? 'active' : ''}">
      <div class="meta">
        <h4>${escapeHtml(locEg.name)}</h4>
        <span class="small">${escapeHtml(locEg.difficulty)} · ${escapeHtml(t('targetMeta', { target: locEg.targetResult }))}</span>
      </div>
      ${done ? `<span class="solved-badge">${escapeHtml(t('studiedBadge'))}</span>` : ''}
    </div>`);
    item.onclick = () => {
      State.selectedEndgameId = eg.id;
      State.studyContext = eg;
      State.game = new Chess(eg.fen);
      State.endgameMoves = [];
      State.endgameViewPly = null;
      State.lastMove = null;
      State.endgameSparring = false;
      State.flipBoard = new Chess(eg.fen).turn() === 'b';
      recordStudyProgress('endgames', eg, 1, 1);
      render();
    };
    list.appendChild(item);
  });
  sidebar.appendChild(list);
  split.appendChild(sidebar);

  const detail = document.createElement('div');
  detail.className = 'detail-workspace';
  const egMobBar = el(`<div class="mobile-lesson-bar">
    <select aria-label="${escapeHtml(t('selectEndgameAria'))}">
      ${ENDGAMES.map((eg) => `<option value="${escapeHtml(eg.id)}" ${eg.id === active.id ? 'selected' : ''}>${escapeHtml(localizeEndgame(eg, lang).name)}</option>`).join('')}
    </select>
    <button type="button" class="toggle-btn ${State.mobileStudyListOpen ? 'active' : ''}" id="egMobListBtn">${iconSvg('sidebar', 13)} ${escapeHtml(t('listBtn'))}</button>
  </div>`);
  egMobBar.querySelector('select').onchange = (e) => {
    const picked = ENDGAMES.find((x) => x.id === e.target.value);
    if (picked) {
      State.selectedEndgameId = picked.id;
      State.studyContext = picked;
      State.game = new Chess(picked.fen);
      State.endgameMoves = [];
      State.endgameViewPly = null;
      State.lastMove = null;
      State.endgameSparring = false;
      State.flipBoard = new Chess(picked.fen).turn() === 'b';
      recordStudyProgress('endgames', picked, 1, 1);
      render();
    }
  };
  egMobBar.querySelector('#egMobListBtn').onclick = () => {
    State.mobileStudyListOpen = !State.mobileStudyListOpen;
    render();
  };
  detail.appendChild(egMobBar);
  const layout = document.createElement('div');
  layout.className = `play-layout${State.boardMaximized ? ' board-maximized' : ''}`;

  const boardCol = document.createElement('div');
  boardCol.className = 'board-column';
  const stage = buildBoardStage(viewPos.game, {
    flip: State.flipBoard,
    lastMove: viewPos.lastMove,
    interactive: !isReviewing && !g.game_over() && !State.endgameSparThinking && !State.promotionPending,
    onMove: async (playedMove) => {
      State.endgameMoves.push(playedMove.san);
      State.endgameViewPly = null;
      State.lastMove = lastMoveSquares(g);
      recordStudyProgress('endgames', active, 1, 1);
      if (State.endgameSparring && !g.game_over()) {
        State.endgameSparThinking = true;
        render();
        const uci = await stockfishClient.playMove(g.fen(), 4);
        State.endgameSparThinking = false;
        if (uci && uci !== '(none)' && State.page === 'endgames' && State.selectedEndgameId === active.id) {
          const opp = g.move({
            from: uci.slice(0, 2),
            to: uci.slice(2, 4),
            promotion: uci.length > 4 ? uci.slice(4, 5) : undefined,
          });
          if (opp) {
            State.endgameMoves.push(opp.san);
            playChessSound(soundForMove(opp, g), State.preferences.sound);
          }
          State.lastMove = lastMoveSquares(g);
        }
      }
      render();
    },
    showEvalBar: State.showStudyStockfish,
    showArrows: State.showStudyStockfish,
  });
  State.dom.evalBar = stage.evalBar;
  State.dom.arrowsSvg = stage.arrowsSvg;
  boardCol.appendChild(stage.frame);

  const ctrl = document.createElement('div');
  ctrl.className = 'board-controls';
  ctrl.appendChild(
    buildMoveTransportBar({
      ply: viewPly,
      total: totalPlies,
      onNavigate: (nextPly) => {
        State.endgameViewPly = nextPly >= totalPlies ? null : nextPly;
        render();
      },
    }),
  );
  const rst = el(`<button type="button" class="btn ghost sm">${iconSvg('refresh', 13)} ${escapeHtml(t('reset'))}</button>`);
  rst.onclick = () => {
    State.game = new Chess(active.fen);
    State.endgameMoves = [];
    State.endgameViewPly = null;
    State.lastMove = null;
    State.endgameSparThinking = false;
    render();
  };
  const flp = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 13)} ${escapeHtml(t('flip'))}</button>`);
  flp.onclick = () => {
    State.flipBoard = !State.flipBoard;
    render();
  };
  ctrl.appendChild(rst);
  ctrl.appendChild(flp);
  ctrl.appendChild(makeMaxBoardButton());
  boardCol.appendChild(ctrl);
  layout.appendChild(boardCol);

  const side = document.createElement('div');
  side.className = 'play-sidebar';
  side.appendChild(el(`<div class="tutorial-text">
    <div class="step-counter">${escapeHtml(locActive.difficulty)} · ${escapeHtml(t('goalMeta', { goal: locActive.goal || locActive.targetResult || t('convertCleanly') }))}</div>
    <h4 style="margin-bottom:.3rem">${escapeHtml(locActive.name)}</h4>
    <p>${escapeHtml(locActive.summary)}</p>
    <ul style="margin:.4rem 0 0;padding-inline-start:1.15rem;font-size:.88rem;color:var(--ink-soft)">
      ${locActive.technique.map((item) => `<li style="margin-bottom:.2rem">${escapeHtml(item)}</li>`).join('')}
    </ul>
  </div>`));

  const egFen = viewPos.game.fen();
  const egPieceCount = countBoardPieces(egFen);
  if (egPieceCount <= 7) {
    side.appendChild(
      createExplorerAndTablebasePanel({
        opening: null,
        continuations: [],
        tablebase: State.tablebaseCacheFen === egFen ? State.tablebaseSnap : null,
        tablebaseLoading: State.tablebaseCacheFen === egFen && State.tablebaseLoading,
        pieceCount: egPieceCount,
        lang,
        onPlaySan: async (san) => {
          if (isReviewing || g.game_over() || State.endgameSparThinking || !san) return;
          const m = g.move(san);
          if (!m) return;
          State.endgameMoves.push(m.san);
          State.endgameViewPly = null;
          State.lastMove = lastMoveSquares(g);
          playChessSound(soundForMove(m, g), State.preferences.sound);
          recordStudyProgress('endgames', active, 1, 1);
          if (State.endgameSparring && !g.game_over()) {
            State.endgameSparThinking = true;
            render();
            const uci = await stockfishClient.playMove(g.fen(), 4);
            State.endgameSparThinking = false;
            if (uci && uci !== '(none)' && State.page === 'endgames' && State.selectedEndgameId === active.id) {
              const opp = g.move({
                from: uci.slice(0, 2),
                to: uci.slice(2, 4),
                promotion: uci.length > 4 ? uci.slice(4, 5) : undefined,
              });
              if (opp) {
                State.endgameMoves.push(opp.san);
                playChessSound(soundForMove(opp, g), State.preferences.sound);
              }
              State.lastMove = lastMoveSquares(g);
            }
          }
          render();
        },
      }),
    );
  }

  if (State.showStudyStockfish) {
    const sfPanel = createStockfishPanel({
      title: t('sfTablebaseEval'),
      showArrows: State.showCoachArrows,
      onToggleArrows: () => {
        State.showCoachArrows = !State.showCoachArrows;
        applyStockfishDom(State.sfSnapshot);
      },
    });
    State.dom.sfPanel = sfPanel;
    side.appendChild(sfPanel);
    triggerLiveAnalysis(viewPos.game.fen(), { depth: 13, multiPv: 3 });
  }

  side.appendChild(
    buildMovesPanel(State.endgameMoves, {
      currentPly: viewPly,
      onSelectPly: (plyNo) => {
        State.endgameViewPly = plyNo >= totalPlies ? null : plyNo;
        render();
      },
    }),
  );

  layout.appendChild(side);
  detail.appendChild(layout);
  split.appendChild(detail);
  wrap.appendChild(split);
  return wrap;
}

// =========================================================
// PLAY MENU (2-Col Zero-Scroll Setup) + ACTIVE GAMES
// =========================================================
function chess960Fen() {
  const squares = Array(8).fill(null);
  const pick = (options) => options[Math.floor(Math.random() * options.length)];
  squares[pick([0, 2, 4, 6])] = 'B';
  squares[pick([1, 3, 5, 7])] = 'B';
  const free = () => squares.map((v, i) => (v ? null : i)).filter((i) => i !== null);
  squares[pick(free())] = 'Q';
  for (let i = 0; i < 2; i += 1) squares[pick(free())] = 'N';
  const rest = free();
  squares[rest[0]] = 'R';
  squares[rest[1]] = 'K';
  squares[rest[2]] = 'R';
  const rank = squares.join('');
  return `${rank.toLowerCase()}/pppppppp/8/8/8/8/PPPPPPPP/${rank} w - - 0 1`;
}

function renderPlayMenu() {
  const lang = getLang();
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';
  wrap.appendChild(el(`<div class="view-bar">
    <h1>${iconSvg('play', 18)} ${escapeHtml(t('matchHallTitle'))}</h1>
    <div class="toggle-row" id="varTog">
      <button type="button" class="toggle-btn ${State.variant === 'standard' ? 'active' : ''}" data-v="standard">${escapeHtml(t('standardChess'))}</button>
      <button type="button" class="toggle-btn ${State.variant === 'chess960' ? 'active' : ''}" data-v="chess960">${escapeHtml(t('chess960'))}</button>
    </div>
  </div>`));

  wrap.querySelectorAll('#varTog button').forEach((b) => {
    b.onclick = () => {
      State.variant = b.dataset.v;
      render();
    };
  });

  const grid = document.createElement('div');
  grid.className = 'setup-grid-3';

  // Col 1: Human vs Selected Engine
  const rawHumProf = getEngineProfile(State.playEngineProfileId);
  const humEngProf = localizeEngineProfile(rawHumProf, lang);
  const validTier = humEngProf.tiers.some((tItem) => tItem.value === State.playEngineLevel)
    ? State.playEngineLevel
    : humEngProf.defaultTier;
  State.playEngineLevel = validTier;

  const engCard = el(`<section class="card setup-card">
    <div>
      <h3>${iconSvg('coach', 17)} ${escapeHtml(t('playVsEngineTitle'))}</h3>
      <p class="small">${escapeHtml(humEngProf.description)}</p>
      <div style="margin:.4rem 0">
        <label for="humEngProf">${escapeHtml(t('opponentEngineLabel'))}</label>
        <select id="humEngProf">
          ${ENGINE_PROFILE_LIST.map((p) => {
            const locP = localizeEngineProfile(p, lang);
            return `<option value="${p.id}" ${p.id === humEngProf.id ? 'selected' : ''}>${escapeHtml(locP.name)} — ${escapeHtml(locP.styleTag)}</option>`;
          }).join('')}
        </select>
      </div>
      <div class="level-grid" id="engLvls" style="margin:.4rem 0">
        ${humEngProf.tiers
          .map((tierItem) => `<div class="level-card ${!(humEngProf.family === 'nnue' && State.playEngineUseCustom) && State.playEngineLevel === tierItem.value ? 'selected' : ''}" data-lvl="${tierItem.value}">
            <div class="lvl-num tabular-nums">${tierItem.value}</div>
            <div class="lvl-name">${escapeHtml(tierItem.label.split(' ')[0])}</div>
            <div class="lvl-elo tabular-nums">${escapeHtml(tierItem.elo)}</div>
          </div>`)
          .join('')}
      </div>
      ${humEngProf.family === 'nnue' ? `<div style="display:flex;align-items:center;gap:.55rem;margin:.3rem 0">
        <span class="small mono tabular-nums" style="white-space:nowrap">${escapeHtml(t('customEloPrefix'))} <strong id="cEloVal">${State.playEngineCustomElo}</strong></span>
        <input type="range" id="cEloSlider" min="1320" max="2850" step="20" value="${State.playEngineCustomElo}" style="flex:1" />
      </div>` : ''}
      <div class="toggle-row" id="engSideTog" style="margin-top:.35rem">
        <span class="small" style="margin-inline-end:.3rem">${escapeHtml(t('sideLabel'))}</span>
        ${['white', 'black', 'random'].map((c) => `<button type="button" class="toggle-btn ${State.playEngineColor === c ? 'active' : ''}" data-c="${c}">${escapeHtml(tSide(c, lang))}</button>`).join('')}
      </div>
      <div class="arena-field-row" style="margin:.4rem 0;flex-wrap:wrap">
        <div style="flex:1;min-width:130px">
          <label for="tcEngSel">${escapeHtml(t('timeControlLabel'))}</label>
          <select id="tcEngSel">
            ${TIME_CONTROLS.map((tc) => `<option value="${tc.id}" ${State.playTimeControl === tc.id ? 'selected' : ''}>${escapeHtml(t(`tc_${tc.id}`, {}, lang))}</option>`).join('')}
          </select>
        </div>
        ${State.playTimeControl !== 'unlimited' ? `<label style="display:inline-flex;align-items:center;gap:.3rem;margin-top:1.1rem;text-transform:none;font-size:.82rem;cursor:pointer">
          <input type="checkbox" id="engBerserkChk" style="width:auto" ${State.playBerserk ? 'checked' : ''} /> ${escapeHtml(t('berserkOption'))}
        </label>` : ''}
      </div>
    </div>
    <button type="button" class="btn gold full" id="startEngineBtn">${iconSvg('play', 15)} ${escapeHtml(t('startMatchVs', { name: humEngProf.shortName }))}</button>
  </section>`);

  engCard.querySelector('#humEngProf').onchange = (e) => {
    State.playEngineProfileId = e.target.value;
    State.playEngineUseCustom = false;
    State.playEngineLevel = getEngineProfile(e.target.value).defaultTier;
    render();
  };
  engCard.querySelectorAll('#engLvls .level-card').forEach((elCard) => {
    elCard.onclick = () => {
      State.playEngineUseCustom = false;
      State.playEngineLevel = Number(elCard.dataset.lvl);
      render();
    };
  });
  const sliderEl = engCard.querySelector('#cEloSlider');
  if (sliderEl) {
    sliderEl.oninput = (e) => {
      State.playEngineUseCustom = true;
      State.playEngineCustomElo = Number(e.target.value);
      engCard.querySelector('#cEloVal').textContent = State.playEngineCustomElo;
    };
  }
  engCard.querySelectorAll('#engSideTog button').forEach((b) => {
    b.onclick = () => {
      State.playEngineColor = b.dataset.c;
      render();
    };
  });
  engCard.querySelector('#tcEngSel').onchange = (e) => {
    State.playTimeControl = e.target.value;
    if (State.playTimeControl === 'unlimited') State.playBerserk = false;
    render();
  };
  const bChk = engCard.querySelector('#engBerserkChk');
  if (bChk) {
    bChk.onchange = (e) => {
      State.playBerserk = e.target.checked;
    };
  }
  engCard.querySelector('#startEngineBtn').onclick = () => {
    const prof = getEngineProfile(State.playEngineProfileId);
    const useCustom = prof.family === 'nnue' && State.playEngineUseCustom;
    const lvl = useCustom ? { custom: State.playEngineCustomElo } : State.playEngineLevel;
    if (State._humanVsEngineInstance) {
      State._humanVsEngineInstance.dispose();
    }
    State._humanVsEngineInstance = createArenaEngine(prof.id);
    State._engineConfig = lvl;
    State._engineLevelDisplay = `${prof.shortName} · ${getEngineTierMeta(prof.id, lvl).label}`;
    let c = State.playEngineColor;
    if (c === 'random') c = Math.random() < 0.5 ? 'white' : 'black';
    State.playerColor = c === 'white' ? 'w' : 'b';
    State.flipBoard = State.playerColor === 'b';
    State.vsMode = 'engine';
    State.game = new Chess(State.variant === 'chess960' ? chess960Fen() : undefined);
    State.gameInitialFen = State.game.fen();
    State.gameMoveHistory = [];
    State.gameViewPly = null;
    State.gameOver = false;
    State.engineThinking = false;
    State.premove = null;
    State.lastResult = null;
    State.lastMove = null;
    State.matchClock = createClockState(State.playTimeControl, {
      berserkSide: State.playTimeControl !== 'unlimited' && State.playBerserk ? State.playerColor : null,
    });
    navigate('vs-engine');
    startMatchClockInterval();
    if (State.playerColor === 'b') setTimeout(() => engineMakeMove(), 240);
  };
  grid.appendChild(engCard);

  // Col 2: Engine vs Engine Arena Setup Card
  const wProf = localizeEngineProfile(getEngineProfile(State.arenaWhiteProfileId), lang);
  const bProf = localizeEngineProfile(getEngineProfile(State.arenaBlackProfileId), lang);
  if (!wProf.tiers.some((tierItem) => tierItem.value === State.arenaWhiteTier)) State.arenaWhiteTier = wProf.defaultTier;
  if (!bProf.tiers.some((tierItem) => tierItem.value === State.arenaBlackTier)) State.arenaBlackTier = bProf.defaultTier;

  const arenaCard = el(`<section class="card ornate setup-card">
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:.4rem">
        <h3>${iconSvg('duel', 17)} ${escapeHtml(t('engineArenaTitle'))}</h3>
        <span class="tag green">${escapeHtml(t('liveThoughtsTag'))}</span>
      </div>
      <p class="small">${escapeHtml(t('arenaSetupDesc'))}</p>

      <div style="margin:.4rem 0">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <label for="arWProf">${escapeHtml(t('whiteEngineLabel'))}</label>
          <button type="button" class="btn-ghost-xs" id="arSwapBtn" title="${escapeHtml(t('swapArenaEnginesTip'))}">${iconSvg('swap', 12)} ${escapeHtml(t('swap'))}</button>
        </div>
        <div class="arena-field-row">
          <select id="arWProf">
            ${ENGINE_PROFILE_LIST.map((p) => `<option value="${p.id}" ${p.id === wProf.id ? 'selected' : ''}>${escapeHtml(localizeEngineProfile(p, lang).name)}</option>`).join('')}
          </select>
          <select id="arWTier" style="max-width:155px">
            ${wProf.tiers.map((tierItem) => `<option value="${tierItem.value}" ${tierItem.value === State.arenaWhiteTier ? 'selected' : ''}>${escapeHtml(tierItem.label)}</option>`).join('')}
          </select>
        </div>
      </div>

      <div style="margin:.4rem 0">
        <label for="arBProf">${escapeHtml(t('blackEngineLabel'))}</label>
        <div class="arena-field-row">
          <select id="arBProf">
            ${ENGINE_PROFILE_LIST.map((p) => `<option value="${p.id}" ${p.id === bProf.id ? 'selected' : ''}>${escapeHtml(localizeEngineProfile(p, lang).name)}</option>`).join('')}
          </select>
          <select id="arBTier" style="max-width:155px">
            ${bProf.tiers.map((tierItem) => `<option value="${tierItem.value}" ${tierItem.value === State.arenaBlackTier ? 'selected' : ''}>${escapeHtml(tierItem.label)}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="arena-field-row" style="margin:.45rem 0">
        <div style="flex:1">
          <label for="arPreset">${escapeHtml(t('startingPositionLabel'))}</label>
          <select id="arPreset">
            ${ARENA_PRESETS.map((p, idx) => `<option value="${idx}" ${idx === State.arenaPresetIdx ? 'selected' : ''}>${escapeHtml(localizeArenaPreset(p, lang).label)}</option>`).join('')}
          </select>
        </div>
        <div style="width:120px">
          <label for="arPace">${escapeHtml(t('paceLabel'))}</label>
          <select id="arPace">
            <option value="400" ${State.arenaPaceMs === 400 ? 'selected' : ''}>${escapeHtml(t('paceFast'))}</option>
            <option value="1200" ${State.arenaPaceMs === 1200 ? 'selected' : ''}>${escapeHtml(t('paceNormal'))}</option>
            <option value="2400" ${State.arenaPaceMs === 2400 ? 'selected' : ''}>${escapeHtml(t('paceStudy'))}</option>
          </select>
        </div>
      </div>
    </div>
    <button type="button" class="btn gold full" id="launchArenaBtn">${iconSvg('duel', 15)} ${escapeHtml(t('launchEngineClash'))}</button>
  </section>`);

  arenaCard.querySelector('#arWProf').onchange = (e) => {
    State.arenaWhiteProfileId = e.target.value;
    State.arenaWhiteTier = getEngineProfile(e.target.value).defaultTier;
    render();
  };
  arenaCard.querySelector('#arWTier').onchange = (e) => {
    State.arenaWhiteTier = Number(e.target.value);
  };
  arenaCard.querySelector('#arBProf').onchange = (e) => {
    State.arenaBlackProfileId = e.target.value;
    State.arenaBlackTier = getEngineProfile(e.target.value).defaultTier;
    render();
  };
  arenaCard.querySelector('#arBTier').onchange = (e) => {
    State.arenaBlackTier = Number(e.target.value);
  };
  arenaCard.querySelector('#arPreset').onchange = (e) => {
    State.arenaPresetIdx = Number(e.target.value);
  };
  arenaCard.querySelector('#arPace').onchange = (e) => {
    State.arenaPaceMs = Number(e.target.value);
  };
  arenaCard.querySelector('#arSwapBtn').onclick = () => {
    [State.arenaWhiteProfileId, State.arenaBlackProfileId] = [State.arenaBlackProfileId, State.arenaWhiteProfileId];
    [State.arenaWhiteTier, State.arenaBlackTier] = [State.arenaBlackTier, State.arenaWhiteTier];
    render();
  };
  arenaCard.querySelector('#launchArenaBtn').onclick = () => startEngineArenaMatch();
  grid.appendChild(arenaCard);

  // Col 3: Member vs Member Card
  const others = Object.values(State.members).filter((m) => m.id !== State.user.id);
  const humCard = el(`<section class="card setup-card">
    <div>
      <h3>${iconSvg('club', 17)} ${escapeHtml(t('otbTitle'))}</h3>
      ${others.length === 0
        ? `<p class="small" style="margin-top:.4rem">${escapeHtml(t('otbEmptyHint'))}</p>`
        : `
          <div style="margin:.45rem 0">
            <label for="oppSel">${escapeHtml(t('opponentLabel'))}</label>
            <select id="oppSel">
              ${others.map((m) => `<option value="${m.id}">${escapeHtml(m.name)} (${m.rating})</option>`).join('')}
            </select>
          </div>
          <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:.45rem 0">
            <div>
              <label>${escapeHtml(t('yourColorLabel'))}</label>
              <div class="toggle-row" id="humColor">
                <button type="button" class="toggle-btn active" data-c="white">${escapeHtml(t('white'))}</button>
                <button type="button" class="toggle-btn" data-c="black">${escapeHtml(t('black'))}</button>
                <button type="button" class="toggle-btn" data-c="random">${escapeHtml(tSide('random', lang))}</button>
              </div>
            </div>
            <div>
              <label>${escapeHtml(t('matchTypeLabel'))}</label>
              <div class="toggle-row" id="humType">
                <button type="button" class="toggle-btn active" data-t="rated">${escapeHtml(t('ratedElo'))}</button>
                <button type="button" class="toggle-btn" data-t="friendly">${escapeHtml(t('friendlyCoach'))}</button>
              </div>
            </div>
          </div>
          <div style="margin:.4rem 0">
            <label for="tcHumSel">${escapeHtml(t('timeControlLabel'))}</label>
            <select id="tcHumSel">
              ${TIME_CONTROLS.map((tc) => `<option value="${tc.id}" ${State.playTimeControl === tc.id ? 'selected' : ''}>${escapeHtml(t(`tc_${tc.id}`, {}, lang))}</option>`).join('')}
            </select>
          </div>
        `}
    </div>
    ${others.length > 0 ? `<button type="button" class="btn full" id="startHumanBtn">${escapeHtml(t('beginOtbMatch'))}</button>` : `<button type="button" class="btn ghost full" id="switchAdd">${escapeHtml(t('switchAddMember'))}</button>`}
  </section>`);

  if (others.length > 0) {
    let humCol = 'white';
    let humType = 'rated';
    humCard.querySelector('#tcHumSel').onchange = (e) => {
      State.playTimeControl = e.target.value;
    };
    humCard.querySelectorAll('#humColor button').forEach((b) => {
      b.onclick = () => {
        humCard.querySelectorAll('#humColor button').forEach((x) => x.classList.remove('active'));
        b.classList.add('active');
        humCol = b.dataset.c;
      };
    });
    humCard.querySelectorAll('#humType button').forEach((b) => {
      b.onclick = () => {
        humCard.querySelectorAll('#humType button').forEach((x) => x.classList.remove('active'));
        b.classList.add('active');
        humType = b.dataset.t;
      };
    });
    humCard.querySelector('#startHumanBtn').onclick = () => {
      let c = humCol;
      if (c === 'random') c = Math.random() < 0.5 ? 'white' : 'black';
      const oppId = humCard.querySelector('#oppSel').value;
      if (c === 'white') {
        State.gameWhite = State.user.id;
        State.gameBlack = oppId;
      } else {
        State.gameWhite = oppId;
        State.gameBlack = State.user.id;
      }
      State.gameRated = humType === 'rated';
      State.vsMode = State.gameRated ? 'human-rated' : 'human-unrated';
      State.game = new Chess(State.variant === 'chess960' ? chess960Fen() : undefined);
      State.gameInitialFen = State.game.fen();
      State.gameMoveHistory = [];
      State.gameViewPly = null;
      State.gameOver = false;
      State.lastResult = null;
      State.lastMove = null;
      State.playCoachLastGrade = null;
      State.flipBoard = false;
      State.matchClock = createClockState(State.playTimeControl);
      navigate('vs-human');
      startMatchClockInterval();
    };
  } else {
    humCard.querySelector('#switchAdd').onclick = async () => {
      await logoutUser();
      render();
    };
  }
  grid.appendChild(humCard);
  wrap.appendChild(grid);
  return wrap;
}

function startMatchClockInterval() {
  stopMatchClock();
  if (!State.matchClock?.enabled || State.gameOver) return;
  State.matchClockLastTick = Date.now();
  State.matchClockTimerId = setInterval(() => {
    if (
      !State.matchClock?.enabled ||
      State.gameOver ||
      !['vs-engine', 'vs-human'].includes(State.page) ||
      !State.game
    ) {
      stopMatchClock();
      return;
    }
    const now = Date.now();
    const dt = now - (State.matchClockLastTick || now);
    State.matchClockLastTick = now;
    const prev = State.matchClock;
    const next = tickClock(prev, dt);
    State.matchClock = next;

    const activeMs = next.activeSide === 'w' ? next.whiteMs : next.blackMs;
    if (next.running && activeMs > 0 && activeMs < 10_000 && !next.lowTimeWarned?.[next.activeSide]) {
      next.lowTimeWarned[next.activeSide] = true;
      playChessSound('lowTime', State.preferences.sound);
    }

    if (State.dom.whiteClock) {
      State.dom.whiteClock.textContent = formatClockMs(next.whiteMs);
      State.dom.whiteClock.classList.toggle('active-clock', next.running && next.activeSide === 'w');
      State.dom.whiteClock.classList.toggle('low-time', next.whiteMs < 20_000);
    }
    if (State.dom.blackClock) {
      State.dom.blackClock.textContent = formatClockMs(next.blackMs);
      State.dom.blackClock.classList.toggle('active-clock', next.running && next.activeSide === 'b');
      State.dom.blackClock.classList.toggle('low-time', next.blackMs < 20_000);
    }

    if (next.flaggedSide) {
      stopMatchClock();
      const winnerColor = next.flaggedSide === 'w' ? 'b' : 'w';
      const hasMate = hasMatingMaterial(State.game.fen(), winnerColor, Chess);

      if (State.page === 'vs-engine') {
        if (State._humanVsEngineInstance) State._humanVsEngineInstance.stop();
        State.engineThinking = false;
        State.premove = null;
        State.gameOver = true;
        const oppProfile = getEngineProfile(State.playEngineProfileId);
        if (!hasMate) {
          State.lastResult = { kind: 'draw', meta: { type: 'flag-draw' } };
        } else if (winnerColor === State.playerColor) {
          State.lastResult = { kind: 'win', meta: { type: 'flag-win-engine', profId: oppProfile.id } };
        } else {
          State.lastResult = { kind: 'loss', meta: { type: 'flag-loss-engine', profId: oppProfile.id } };
        }
        playChessSound('gameEnd', State.preferences.sound);
        render();
      } else if (State.page === 'vs-human') {
        playChessSound('gameEnd', State.preferences.sound);
        if (!hasMate) {
          finishHumanGame('1/2-1/2', 'insufficient-time');
        } else {
          finishHumanGame(winnerColor === 'w' ? '1-0' : '0-1', 'time');
        }
      }
    }
  }, 100);
}

function resolveLastResultText(res, lang = getLang()) {
  if (!res) return t('gameOver', {}, lang);
  const m = res.meta;
  if (!m) return res.text || t('gameOver', {}, lang);
  if (m.type === 'resign-engine') {
    const locP = localizeEngineProfile(getEngineProfile(m.profId), lang);
    return t('resignedMsg', { name: locP.name }, lang);
  }
  if (m.type === 'mate-engine-win') {
    const locP = localizeEngineProfile(getEngineProfile(m.profId), lang);
    return t('checkmateWonEngine', { name: locP.name }, lang);
  }
  if (m.type === 'mate-engine-loss') {
    const locP = localizeEngineProfile(getEngineProfile(m.profId), lang);
    return t('checkmateLostEngine', { name: locP.name }, lang);
  }
  if (m.type === 'flag-win-engine') {
    const locP = localizeEngineProfile(getEngineProfile(m.profId), lang);
    return t('flagWinEngine', { name: locP.name }, lang);
  }
  if (m.type === 'flag-loss-engine') {
    const locP = localizeEngineProfile(getEngineProfile(m.profId), lang);
    return t('flagLossEngine', { name: locP.name }, lang);
  }
  if (m.type === 'flag-draw') return t('flagDrawInsufficient', {}, lang);
  if (m.type === 'draw-engine') return t('gameDrawn', {}, lang);
  if (m.type === 'human-draw') {
    return t('drawnByReason', { reason: tGameReason(m.reason, lang) }, lang);
  }
  if (m.type === 'human-win') {
    return t('winsByReason', { name: m.winnerName, reason: tGameReason(m.reason, lang) }, lang);
  }
  return res.text || t('gameOver', {}, lang);
}

function renderVsEngine() {
  const lang = getLang();
  if (!State.game) {
    State.game = new Chess();
    State.gameInitialFen = State.game.fen();
  }
  const g = State.game;
  const turn = g.turn();
  const oppColor = State.playerColor === 'w' ? 'b' : 'w';
  const oppProfile = localizeEngineProfile(getEngineProfile(State.playEngineProfileId), lang);
  const tierDisplay = State._engineConfig != null
    ? `${oppProfile.shortName} · ${localizeEngineTier(oppProfile.id, getEngineTierMeta(oppProfile.id, State._engineConfig), lang).label}`
    : oppProfile.name;
  const totalPlies = State.gameMoveHistory.length;
  const viewPly =
    State.gameViewPly != null ? Math.max(0, Math.min(totalPlies, State.gameViewPly)) : totalPlies;
  const isReviewing = viewPly < totalPlies;
  const viewPos = isReviewing
    ? buildPositionAtPly(State.gameInitialFen, State.gameMoveHistory, viewPly, Chess)
    : { game: g, lastMove: State.lastMove };
  const ecoMatch = detectOpeningFromMoves(State.gameInitialFen, State.gameMoveHistory.slice(0, viewPly), lang);
  const mat = computeMaterialBalance(viewPos.game.fen(), State.gameInitialFen);

  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  wrap.appendChild(el(`<div class="view-bar">
    <h1>${escapeHtml(t('matchupTitle', { a: State.user.name, b: oppProfile.name }))}</h1>
    <div class="view-bar-meta">
      ${ecoMatch ? `<span class="tag">${escapeHtml(isolateChessTokens(`${ecoMatch.eco} · ${ecoMatch.name}`, lang))}</span>` : ''}
      ${State.matchClock?.berserkSide ? `<span class="tag burg">${iconSvg('bolt', 11)} ${escapeHtml(t('berserkTag'))}</span>` : ''}
      <span class="tag gold">${escapeHtml(tierDisplay)}</span>
      ${totalPlies > 0 ? `<button type="button" class="btn ghost sm" id="anEngBtn">${iconSvg('coach', 13)} ${escapeHtml(t('analyzeBtn'))}</button>` : ''}
      <button type="button" class="btn ghost sm" id="leaveEng">${escapeHtml(t('leaveGame'))}</button>
    </div>
  </div>`));
  const anEngBtn = wrap.querySelector('#anEngBtn');
  if (anEngBtn) {
    anEngBtn.onclick = () => {
      stopMatchClock();
      const whiteName = State.playerColor === 'w' ? State.user.name : oppProfile.name;
      const blackName = State.playerColor === 'b' ? State.user.name : oppProfile.name;
      openGameInCoachAnalyzer({
        title: t('matchupTitle', { a: whiteName, b: blackName }),
        headers: { Event: 'Edugates Match vs Engine', White: whiteName, Black: blackName },
        startFen: State.gameInitialFen,
        moves: State.gameMoveHistory,
        jumpToEnd: true,
      });
    };
  }
  wrap.querySelector('#leaveEng').onclick = () => {
    stopMatchClock();
    if (State._humanVsEngineInstance) State._humanVsEngineInstance.stop();
    stockfishClient.stop();
    navigate('play-menu');
  };

  const layout = document.createElement('div');
  layout.className = `play-layout${State.boardMaximized ? ' board-maximized' : ''}`;

  const boardCol = document.createElement('div');
  boardCol.className = 'board-column';
  const stage = buildBoardStage(viewPos.game, {
    flip: State.flipBoard,
    lastMove: viewPos.lastMove,
    premove: State.premove,
    allowPremove: !isReviewing && !State.gameOver && State.engineThinking && turn !== State.playerColor,
    onPremove: (pm) => {
      State.premove = pm;
      render();
    },
    interactive:
      !isReviewing &&
      !State.gameOver &&
      !State.promotionPending &&
      !State.engineThinking &&
      turn === State.playerColor,
    onMove: (m) => {
      State.premove = null;
      State.gameMoveHistory.push(m.san);
      State.gameViewPly = null;
      State.lastMove = lastMoveSquares(g);
      if (State.matchClock?.enabled) {
        State.matchClock = pressClockAfterMove(State.matchClock, m.color);
      }
      checkEngineGameEnd();
      render();
      if (!State.gameOver) setTimeout(() => engineMakeMove(), 180);
    },
    showEvalBar: false,
    showArrows: false,
  });
  boardCol.appendChild(stage.frame);

  const ctrl = document.createElement('div');
  ctrl.className = 'board-controls';
  ctrl.appendChild(
    buildMoveTransportBar({
      ply: viewPly,
      total: totalPlies,
      onNavigate: (nextPly) => {
        State.gameViewPly = nextPly >= totalPlies ? null : nextPly;
        render();
      },
    }),
  );
  const undoBtn = el(`<button type="button" class="btn ghost sm" title="${escapeHtml(t('takeBackTip'))}">${iconSvg('refresh', 13)} ${escapeHtml(t('takeBack'))}</button>`);
  undoBtn.disabled = isReviewing || State.gameMoveHistory.length < 2 || State.gameOver || State.engineThinking;
  undoBtn.onclick = () => {
    g.undo();
    State.gameMoveHistory.pop();
    g.undo();
    State.gameMoveHistory.pop();
    State.gameViewPly = null;
    State.premove = null;
    State.lastMove = lastMoveSquares(g);
    render();
  };
  const flipBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 13)} ${escapeHtml(t('flip'))}</button>`);
  flipBtn.onclick = () => {
    State.flipBoard = !State.flipBoard;
    render();
  };
  const resignBtn = el(`<button type="button" class="btn danger sm">${escapeHtml(t('resign'))}</button>`);
  resignBtn.disabled = State.gameOver;
  resignBtn.onclick = () => {
    stopMatchClock();
    State.premove = null;
    State.gameOver = true;
    State.lastResult = {
      kind: 'loss',
      meta: { type: 'resign-engine', profId: oppProfile.id },
    };
    playChessSound('gameEnd', State.preferences.sound);
    render();
  };
  const newBtn = el(`<button type="button" class="btn gold sm">${escapeHtml(t('newMatch'))}</button>`);
  newBtn.onclick = () => {
    stopMatchClock();
    navigate('play-menu');
  };
  ctrl.appendChild(undoBtn);
  ctrl.appendChild(flipBtn);
  ctrl.appendChild(resignBtn);
  ctrl.appendChild(newBtn);
  ctrl.appendChild(makeMaxBoardButton());
  boardCol.appendChild(ctrl);
  layout.appendChild(boardCol);

  const side = document.createElement('div');
  side.className = 'play-sidebar';
  if (isReviewing) {
    side.appendChild(el(`<div class="status-banner tabular-nums">${escapeHtml(t('reviewingPlyResume', { cur: viewPly, total: totalPlies }))}</div>`));
  } else if (State.gameOver) {
    side.appendChild(el(`<div class="status-banner ${State.lastResult?.kind || 'draw'}">${escapeHtml(resolveLastResultText(State.lastResult, lang))}</div>`));
  } else if (State.engineThinking) {
    side.appendChild(el(`<div class="status-banner">${escapeHtml(t('engineThinkingStatus', { name: oppProfile.name }))} <span class="spinner"></span></div>`));
  } else {
    side.appendChild(el(`<div class="status-banner">${escapeHtml(t('playerToMove', { name: turn === State.playerColor ? State.user.name : oppProfile.name }))}</div>`));
  }

  if (State.premove) {
    const pmChip = el(`<button type="button" class="puzzle-feedback hint" style="text-align:start;cursor:pointer">${escapeHtml(t('premoveLabel', { from: State.premove.from, to: State.premove.to }))}</button>`);
    pmChip.onclick = () => {
      State.premove = null;
      render();
    };
    side.appendChild(pmChip);
  }

  const buildPlayerRowEl = (color, name, badgeHtml, isActive) => {
    const row = document.createElement('div');
    row.className = `player-row ${isActive ? 'active' : ''}`;
    const leftSide = el(`<div style="display:flex;align-items:center;gap:.35rem;min-width:0;flex-wrap:wrap">
      <span class="turn-marker"></span><span class="pname">${escapeHtml(name)}</span>
    </div>`);
    leftSide.appendChild(
      createMaterialBar({
        capturedPieces: color === 'w' ? mat.whiteCaptured : mat.blackCaptured,
        netAdv: color === 'w' ? (mat.netWhite > 0 ? mat.netWhite : 0) : mat.netWhite < 0 ? -mat.netWhite : 0,
        pieceSvgMap: PIECE_SVG,
      }),
    );
    const rightSide = el(`<div style="display:flex;align-items:center;gap:.35rem;flex-shrink:0">${badgeHtml}</div>`);
    if (State.matchClock?.enabled) {
      const ms = color === 'w' ? State.matchClock.whiteMs : State.matchClock.blackMs;
      const clk = el(`<span class="chess-clock tabular-nums ${State.matchClock.running && State.matchClock.activeSide === color ? 'active-clock' : ''} ${ms < 20_000 ? 'low-time' : ''}" dir="ltr">${escapeHtml(formatClockMs(ms))}</span>`);
      if (color === 'w') State.dom.whiteClock = clk;
      else State.dom.blackClock = clk;
      rightSide.appendChild(clk);
    }
    row.appendChild(leftSide);
    row.appendChild(rightSide);
    return row;
  };

  const gameInfo = document.createElement('div');
  gameInfo.className = 'game-info';
  gameInfo.appendChild(
    buildPlayerRowEl(
      oppColor,
      oppProfile.name,
      `<span class="badge">${escapeHtml(tierDisplay)}</span>`,
      turn !== State.playerColor,
    ),
  );
  gameInfo.appendChild(
    buildPlayerRowEl(
      State.playerColor,
      State.user.name,
      `<span class="badge elo tabular-nums">${State.user.rating}</span>`,
      turn === State.playerColor,
    ),
  );
  side.appendChild(gameInfo);

  side.appendChild(
    buildMovesPanel(State.gameMoveHistory, {
      currentPly: viewPly,
      onSelectPly: (plyNo) => {
        State.gameViewPly = plyNo >= totalPlies ? null : plyNo;
        render();
      },
    }),
  );
  layout.appendChild(side);
  wrap.appendChild(layout);
  return wrap;
}

function checkEngineGameEnd() {
  const g = State.game;
  const oppProfile = getEngineProfile(State.playEngineProfileId);
  if (g.in_checkmate()) {
    stopMatchClock();
    const winner = g.turn() === 'w' ? 'b' : 'w';
    const youWon = winner === State.playerColor;
    State.gameOver = true;
    State.premove = null;
    State.lastResult = {
      kind: youWon ? 'win' : 'loss',
      meta: { type: youWon ? 'mate-engine-win' : 'mate-engine-loss', profId: oppProfile.id },
    };
  } else if (g.in_draw() || g.in_stalemate() || g.in_threefold_repetition() || g.insufficient_material()) {
    stopMatchClock();
    State.gameOver = true;
    State.premove = null;
    State.lastResult = { kind: 'draw', meta: { type: 'draw-engine' } };
  }
}

async function engineMakeMove() {
  const g = State.game;
  if (!g || State.gameOver || g.turn() === State.playerColor) return;
  State.engineThinking = true;
  render();
  const runner = State._humanVsEngineInstance || stockfishClient;
  const uci = await runner.playMove(g.fen(), State._engineConfig || 3, {
    chess960: State.variant === 'chess960',
  });
  State.engineThinking = false;
  if (!uci || uci === '(none)' || State.page !== 'vs-engine' || State.game !== g || State.gameOver) {
    render();
    return;
  }
  const m = g.move({
    from: uci.slice(0, 2),
    to: uci.slice(2, 4),
    promotion: uci.length > 4 ? uci.slice(4, 5) : undefined,
  });
  if (m) {
    State.gameMoveHistory.push(m.san);
    State.lastMove = { from: m.from, to: m.to };
    playChessSound(soundForMove(m, g), State.preferences.sound);
    if (State.matchClock?.enabled) {
      State.matchClock = pressClockAfterMove(State.matchClock, m.color);
    }
    checkEngineGameEnd();
  }

  // Execute queued premove if valid
  if (!State.gameOver && State.premove) {
    const pm = State.premove;
    State.premove = null;
    const pmRes = g.move({ from: pm.from, to: pm.to, promotion: 'q' });
    if (pmRes) {
      State.gameMoveHistory.push(pmRes.san);
      State.lastMove = { from: pmRes.from, to: pmRes.to };
      playChessSound(soundForMove(pmRes, g), State.preferences.sound);
      if (State.matchClock?.enabled) {
        State.matchClock = pressClockAfterMove(State.matchClock, pmRes.color);
      }
      checkEngineGameEnd();
      render();
      if (!State.gameOver) setTimeout(() => engineMakeMove(), 160);
      return;
    }
  }
  render();
}

// =========================================================
// DUAL-ENGINE CLASH ARENA (Live Thinking & Telemetry)
// =========================================================
function startEngineArenaMatch() {
  disposeArenaEngines();
  const preset = ARENA_PRESETS[State.arenaPresetIdx] || ARENA_PRESETS[0];
  const is960 = preset.fen === 'chess960';
  const startFen = is960 ? chess960Fen() : preset.fen;

  State.arenaEngines = {
    w: createArenaEngine(State.arenaWhiteProfileId),
    b: createArenaEngine(State.arenaBlackProfileId),
  };
  State.arenaGame = new Chess(startFen);
  State.arenaInitialFen = startFen;
  State.arenaIsChess960 = is960;
  State.arenaUciHistory = [];
  State.arenaHistoryFens = [startFen.split(' ').slice(0, 4).join(' ')];
  State.arenaMoveLog = [];
  State.arenaPaused = false;
  State.arenaThinkingSide = null;
  State.arenaViewPly = null;
  State.arenaWhiteSnap = null;
  State.arenaBlackSnap = null;
  State.arenaWhiteLastMeta = null;
  State.arenaBlackLastMeta = null;
  State.flipBoard = false;
  State.lastMove = null;
  navigate('engine-arena');
  scheduleNextArenaTurn(150);
}

function getArenaViewedEntry() {
  if (State.arenaViewPly == null) return null;
  const clamped = Math.max(0, Math.min(State.arenaMoveLog.length, State.arenaViewPly));
  return clamped < State.arenaMoveLog.length ? { ply: clamped, entry: clamped > 0 ? State.arenaMoveLog[clamped - 1] : null } : null;
}

function syncArenaLiveDom() {
  const g = State.arenaGame;
  if (!g) return;
  const lang = getLang();
  const viewed = getArenaViewedEntry();

  const activeSide = viewed ? (viewed.entry?.side || 'w') : State.arenaThinkingSide || g.turn();
  const wSnap = State.arenaWhiteSnap;
  const bSnap = State.arenaBlackSnap;
  const primarySnap = activeSide === 'w' ? (wSnap || bSnap) : (bSnap || wSnap);
  const secondarySnap = activeSide === 'w' ? bSnap : wSnap;

  const wProfile = localizeEngineProfile(getEngineProfile(State.arenaWhiteProfileId), lang);
  const bProfile = localizeEngineProfile(getEngineProfile(State.arenaBlackProfileId), lang);
  const wTier = localizeEngineTier(wProfile.id, getEngineTierMeta(wProfile.id, State.arenaWhiteTier), lang);
  const bTier = localizeEngineTier(bProfile.id, getEngineTierMeta(bProfile.id, State.arenaBlackTier), lang);

  if (State.dom.evalBar) {
    updateEvalBar(State.dom.evalBar, {
      whiteCp: primarySnap?.whiteCp ?? 0,
      whiteMate: primarySnap?.whiteMate ?? null,
      flipped: State.flipBoard,
    });
  }
  if (State.dom.arrowsSvg) {
    updateBoardArrows(State.dom.arrowsSvg, primarySnap?.lines || [], {
      flipped: State.flipBoard,
      show: State.showCoachArrows,
      compareLine: secondarySnap?.lines?.[0] || null,
    });
  }
  if (State.dom.arenaDualStrip) {
    updateDualEvalStrip(State.dom.arenaDualStrip, {
      whiteName: wProfile.shortName,
      blackName: bProfile.shortName,
      whiteSnap: wSnap,
      blackSnap: bSnap,
    });
  }
  if (State.dom.arenaWhiteCard) {
    updateEngineThoughtCard(State.dom.arenaWhiteCard, {
      snapshot: wSnap,
      profile: wProfile,
      tierLabel: wTier.label,
      isThinking: !viewed && State.arenaThinkingSide === 'w',
      isActiveTurn: !viewed && !g.game_over() && g.turn() === 'w',
      chosenSan: State.arenaWhiteLastMeta?.san || null,
      elapsedMs: State.arenaWhiteLastMeta?.elapsedMs ?? null,
    });
  }
  if (State.dom.arenaBlackCard) {
    updateEngineThoughtCard(State.dom.arenaBlackCard, {
      snapshot: bSnap,
      profile: bProfile,
      tierLabel: bTier.label,
      isThinking: !viewed && State.arenaThinkingSide === 'b',
      isActiveTurn: !viewed && !g.game_over() && g.turn() === 'b',
      chosenSan: State.arenaBlackLastMeta?.san || null,
      elapsedMs: State.arenaBlackLastMeta?.elapsedMs ?? null,
    });
  }
}

async function analyzeBothOnPause() {
  const g = State.arenaGame;
  if (!g || !State.arenaEngines.w || !State.arenaEngines.b) return;
  const viewed = getArenaViewedEntry();
  const targetFen = viewed
    ? viewed.entry
      ? viewed.entry.fenAfter
      : State.arenaInitialFen
    : g.fen();
  const token = ++State.arenaLoopToken;

  const wProfile = getEngineProfile(State.arenaWhiteProfileId);
  const bProfile = getEngineProfile(State.arenaBlackProfileId);

  const wDepth = wProfile.family === 'nnue' ? 12 : 4;
  const bDepth = bProfile.family === 'nnue' ? 12 : 4;

  await Promise.all([
    State.arenaEngines.w
      .analyze(targetFen, {
        depth: wDepth,
        multiPv: 3,
        chess960: State.arenaIsChess960,
        historyFens: State.arenaHistoryFens,
        onUpdate: (snap) => {
          if (token !== State.arenaLoopToken || State.page !== 'engine-arena') return;
          State.arenaWhiteSnap = snap;
          syncArenaLiveDom();
        },
      })
      .then((snap) => {
        if (snap && token === State.arenaLoopToken && State.page === 'engine-arena') {
          State.arenaWhiteSnap = snap;
          syncArenaLiveDom();
        }
      })
      .catch(() => null),
    State.arenaEngines.b
      .analyze(targetFen, {
        depth: bDepth,
        multiPv: 3,
        chess960: State.arenaIsChess960,
        historyFens: State.arenaHistoryFens,
        onUpdate: (snap) => {
          if (token !== State.arenaLoopToken || State.page !== 'engine-arena') return;
          State.arenaBlackSnap = snap;
          syncArenaLiveDom();
        },
      })
      .then((snap) => {
        if (snap && token === State.arenaLoopToken && State.page === 'engine-arena') {
          State.arenaBlackSnap = snap;
          syncArenaLiveDom();
        }
      })
      .catch(() => null),
  ]);
}

function scheduleNextArenaTurn(delayMs = State.arenaPaceMs) {
  if (State.arenaPaused || State.page !== 'engine-arena') return;
  const g = State.arenaGame;
  if (!g || g.game_over()) return;
  const token = State.arenaLoopToken;
  if (State.arenaTimerId) clearTimeout(State.arenaTimerId);
  State.arenaTimerId = setTimeout(() => {
    State.arenaTimerId = null;
    executeArenaPly(token, false);
  }, delayMs);
}

async function executeArenaPly(token, stepOnly = false) {
  const g = State.arenaGame;
  if (!g || g.game_over() || State.page !== 'engine-arena') return;
  if (token !== State.arenaLoopToken) return;

  const side = g.turn();
  const runner = State.arenaEngines[side];
  if (!runner) return;

  const profileId = side === 'w' ? State.arenaWhiteProfileId : State.arenaBlackProfileId;
  const tier = side === 'w' ? State.arenaWhiteTier : State.arenaBlackTier;
  const profile = getEngineProfile(profileId);
  const tierMeta = getEngineTierMeta(profileId, tier);

  State.arenaThinkingSide = side;
  State.arenaViewPly = null;
  if (side === 'w') State.arenaWhiteLastMeta = null;
  else State.arenaBlackLastMeta = null;
  syncArenaLiveDom();

  const fenBefore = g.fen();
  const res = await runner
    .thinkAndMove(fenBefore, {
      level: tier,
      multiPv: 3,
      chess960: State.arenaIsChess960,
      initialFen: State.arenaInitialFen,
      uciHistory: State.arenaUciHistory,
      historyFens: State.arenaHistoryFens,
      onUpdate: (snap) => {
        if (token !== State.arenaLoopToken || State.page !== 'engine-arena') return;
        if (side === 'w') State.arenaWhiteSnap = snap;
        else State.arenaBlackSnap = snap;
        syncArenaLiveDom();
      },
    })
    .catch(() => null);

  if (token !== State.arenaLoopToken || State.page !== 'engine-arena' || State.arenaGame !== g) {
    return;
  }

  State.arenaThinkingSide = null;
  if (!res || !res.chosenUci || res.chosenUci === '(none)') {
    render();
    return;
  }

  const m = g.move({
    from: res.chosenUci.slice(0, 2),
    to: res.chosenUci.slice(2, 4),
    promotion: res.chosenUci.length > 4 ? res.chosenUci.slice(4, 5) : undefined,
  });

  if (!m) {
    render();
    return;
  }

  const fenAfter = g.fen();
  const meta = {
    san: m.san,
    elapsedMs: res.elapsedMs,
    snapshot: res.snapshot,
  };
  if (side === 'w') {
    State.arenaWhiteSnap = res.snapshot;
    State.arenaWhiteLastMeta = meta;
  } else {
    State.arenaBlackSnap = res.snapshot;
    State.arenaBlackLastMeta = meta;
  }

  State.arenaUciHistory.push(res.chosenUci);
  State.arenaHistoryFens.push(fenAfter.split(' ').slice(0, 4).join(' '));
  playChessSound(soundForMove(m, g), State.preferences.sound);
  State.arenaMoveLog.push({
    ply: State.arenaMoveLog.length + 1,
    side,
    profileId,
    tierValue: tier,
    san: m.san,
    uci: res.chosenUci,
    from: m.from,
    to: m.to,
    fenAfter,
    engineName: profile.shortName,
    tierLabel: tierMeta.label,
    snapshot: res.snapshot,
    thoughtText: formatEngineThought(res.snapshot, {
      profile,
      tierLabel: tierMeta.label,
      chosenSan: m.san,
      isThinking: false,
      lang: getLang(),
    }),
    elapsedMs: res.elapsedMs,
  });
  State.lastMove = { from: m.from, to: m.to };

  if (stepOnly) State.arenaPaused = true;
  render();

  if (!stepOnly && !State.arenaPaused && !g.game_over()) {
    scheduleNextArenaTurn(State.arenaPaceMs);
  }
}

function navigateArenaPly(nextPly) {
  const total = State.arenaMoveLog.length;
  const clamped = Math.max(0, Math.min(total, nextPly));
  State.arenaPaused = true;
  stopArenaLoop();
  State.arenaViewPly = clamped >= total ? null : clamped;
  State.arenaWhiteSnap = null;
  State.arenaBlackSnap = null;
  render();
  analyzeBothOnPause();
}

function renderEngineArena() {
  if (!State.arenaGame) {
    startEngineArenaMatch();
    return document.createElement('div');
  }
  const lang = getLang();
  const g = State.arenaGame;
  const wProfile = localizeEngineProfile(getEngineProfile(State.arenaWhiteProfileId), lang);
  const bProfile = localizeEngineProfile(getEngineProfile(State.arenaBlackProfileId), lang);
  const wTier = localizeEngineTier(wProfile.id, getEngineTierMeta(wProfile.id, State.arenaWhiteTier), lang);
  const bTier = localizeEngineTier(bProfile.id, getEngineTierMeta(bProfile.id, State.arenaBlackTier), lang);

  const totalPlies = State.arenaMoveLog.length;
  const viewPly =
    State.arenaViewPly != null ? Math.max(0, Math.min(totalPlies, State.arenaViewPly)) : totalPlies;
  const viewed = getArenaViewedEntry();
  const displayGame = viewed
    ? new Chess(viewed.entry ? viewed.entry.fenAfter : State.arenaInitialFen)
    : g;
  const displayLastMove = viewed
    ? viewed.entry
      ? { from: viewed.entry.from, to: viewed.entry.to }
      : null
    : State.lastMove;
  const finished = g.game_over();

  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.45rem;min-width:0">
      <h1>${iconSvg('duel', 18)} ${escapeHtml(t('arenaViewTitle'))}</h1>
      <span class="badge elo">${escapeHtml(t('matchupTitle', { a: wProfile.shortName, b: bProfile.shortName }))}</span>
    </div>
    <div class="view-bar-meta">
      <button type="button" class="btn gold sm" id="arPlayPause" ${finished ? 'disabled' : ''}>
        ${iconSvg(State.arenaPaused ? 'play' : 'pause', 13)} <span>${escapeHtml(State.arenaPaused ? t('resume') : t('pause'))}</span>
      </button>
      <button type="button" class="btn ghost sm" id="arStep" ${finished || (!State.arenaPaused && State.arenaThinkingSide) ? 'disabled' : ''}>
        ${iconSvg('step', 13)} <span>${escapeHtml(t('step'))}</span>
      </button>
      <select id="arLivePace" aria-label="${escapeHtml(t('arenaPaceAria'))}" style="width:auto;padding:.22rem .42rem;font-size:.8rem">
        <option value="400" ${State.arenaPaceMs === 400 ? 'selected' : ''}>${lang === 'ar' ? '0.4ث' : '0.4s'}</option>
        <option value="1200" ${State.arenaPaceMs === 1200 ? 'selected' : ''}>${lang === 'ar' ? '1.2ث' : '1.2s'}</option>
        <option value="2400" ${State.arenaPaceMs === 2400 ? 'selected' : ''}>${lang === 'ar' ? '2.4ث' : '2.4s'}</option>
      </select>
      ${totalPlies > 0 ? `<button type="button" class="btn ghost sm" id="arAnalyzeBtn">${iconSvg('coach', 13)} <span>${escapeHtml(t('analyzePgn'))}</span></button>` : ''}
      <button type="button" class="btn ghost sm" id="arResetBtn">${iconSvg('refresh', 13)} <span>${escapeHtml(t('rematch'))}</span></button>
      <button type="button" class="btn ghost sm" id="arSetupBtn">${escapeHtml(t('setup'))}</button>
    </div>
  </div>`);

  bar.querySelector('#arPlayPause').onclick = () => {
    if (State.arenaPaused) {
      State.arenaPaused = false;
      State.arenaViewPly = null;
      State.arenaLoopToken += 1;
      render();
      scheduleNextArenaTurn(120);
    } else {
      State.arenaPaused = true;
      stopArenaLoop();
      render();
      analyzeBothOnPause();
    }
  };
  bar.querySelector('#arStep').onclick = () => {
    if (finished) return;
    stopArenaLoop();
    State.arenaViewPly = null;
    State.arenaPaused = true;
    executeArenaPly(State.arenaLoopToken, true);
  };
  bar.querySelector('#arLivePace').onchange = (e) => {
    State.arenaPaceMs = Number(e.target.value);
  };
  const arAnBtn = bar.querySelector('#arAnalyzeBtn');
  if (arAnBtn) {
    arAnBtn.onclick = () => {
      openGameInCoachAnalyzer({
        title: t('matchupTitle', { a: wProfile.shortName, b: bProfile.shortName }),
        headers: { Event: 'Engine Clash Arena', White: wProfile.name, Black: bProfile.name },
        startFen: State.arenaInitialFen,
        moves: State.arenaMoveLog.map((x) => x.san),
        jumpToEnd: true,
      });
    };
  }
  bar.querySelector('#arResetBtn').onclick = () => startEngineArenaMatch();
  bar.querySelector('#arSetupBtn').onclick = () => navigate('play-menu');
  wrap.appendChild(bar);

  const layout = document.createElement('div');
  layout.className = `play-layout dual-arena${State.boardMaximized ? ' board-maximized' : ''}`;

  const boardCol = document.createElement('div');
  boardCol.className = 'board-column';
  const stage = buildBoardStage(displayGame, {
    flip: State.flipBoard,
    lastMove: displayLastMove,
    interactive: false,
    showEvalBar: true,
    showArrows: true,
  });
  State.dom.evalBar = stage.evalBar;
  State.dom.arrowsSvg = stage.arrowsSvg;
  boardCol.appendChild(stage.frame);

  const ctrl = document.createElement('div');
  ctrl.className = 'board-controls';
  ctrl.appendChild(
    buildMoveTransportBar({
      ply: viewPly,
      total: totalPlies,
      onNavigate: (nextPly) => navigateArenaPly(nextPly),
    }),
  );
  const flipBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 13)} ${escapeHtml(t('flip'))}</button>`);
  flipBtn.onclick = () => {
    State.flipBoard = !State.flipBoard;
    render();
  };
  const arrBtn = el(`<button type="button" class="btn ghost sm ${State.showCoachArrows ? 'active' : ''}">${escapeHtml(t('arrowsToggle', { state: State.showCoachArrows ? t('on') : t('off') }))}</button>`);
  arrBtn.onclick = () => {
    State.showCoachArrows = !State.showCoachArrows;
    render();
  };
  const swapSidesBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('swap', 13)} ${escapeHtml(t('swap'))}</button>`);
  swapSidesBtn.onclick = () => {
    [State.arenaWhiteProfileId, State.arenaBlackProfileId] = [State.arenaBlackProfileId, State.arenaWhiteProfileId];
    [State.arenaWhiteTier, State.arenaBlackTier] = [State.arenaBlackTier, State.arenaWhiteTier];
    startEngineArenaMatch();
  };
  ctrl.appendChild(flipBtn);
  ctrl.appendChild(arrBtn);
  ctrl.appendChild(swapSidesBtn);
  ctrl.appendChild(makeMaxBoardButton());
  boardCol.appendChild(ctrl);
  layout.appendChild(boardCol);

  const side = document.createElement('div');
  side.className = 'play-sidebar';

  // Status banner
  if (viewed) {
    const viewedProfile = viewed.entry
      ? localizeEngineProfile(getEngineProfile(viewed.entry.profileId || (viewed.entry.side === 'w' ? State.arenaWhiteProfileId : State.arenaBlackProfileId)), lang)
      : null;
    const label = viewed.entry
      ? t('inspectingPly', { ply: viewed.ply, total: totalPlies, san: viewed.entry.san, engine: viewedProfile?.shortName || viewed.entry.engineName })
      : t('inspectingStart', { total: totalPlies });
    const revBanner = el(`<div class="status-banner" style="display:flex;justify-content:space-between;align-items:center;gap:.4rem">
      <span>${escapeHtml(label)}</span>
      <button type="button" class="btn gold sm" id="arLiveReturn" style="padding:.15rem .5rem;font-size:.78rem">${escapeHtml(t('liveBoard'))}</button>
    </div>`);
    revBanner.querySelector('#arLiveReturn').onclick = () => {
      State.arenaViewPly = null;
      render();
      if (State.arenaPaused) analyzeBothOnPause();
    };
    side.appendChild(revBanner);
  } else if (finished) {
    let outcome = t('matchDrawn');
    let cls = 'draw';
    if (g.in_checkmate()) {
      const winnerIsWhite = g.turn() === 'b';
      const winnerName = winnerIsWhite ? wProfile.name : bProfile.name;
      outcome = t('arenaCheckmate', {
        winner: winnerName,
        side: tSide(winnerIsWhite ? 'White' : 'Black', lang),
        moves: Math.ceil(State.arenaMoveLog.length / 2),
      });
      cls = winnerIsWhite ? 'win' : 'loss';
    }
    side.appendChild(el(`<div class="status-banner ${cls}">${escapeHtml(outcome)}</div>`));
  } else if (State.arenaThinkingSide) {
    const tProf = State.arenaThinkingSide === 'w' ? wProfile : bProfile;
    side.appendChild(el(`<div class="status-banner">${escapeHtml(t('arenaThinkingBanner', { name: tProf.name, side: tSide(State.arenaThinkingSide === 'w' ? 'White' : 'Black', lang) }))} <span class="spinner"></span></div>`));
  } else {
    side.appendChild(el(`<div class="status-banner">${escapeHtml(State.arenaPaused ? t('arenaPausedBanner') : t('playerToMove', { name: g.turn() === 'w' ? wProfile.name : bProfile.name }))}</div>`));
  }

  // Dual Evaluation Comparison Strip
  const dualStrip = createDualEvalStrip();
  State.dom.arenaDualStrip = dualStrip;
  side.appendChild(dualStrip);

  // Telemetry View Switch
  const tabBar = el(`<div class="arena-tabs">
    <div class="pill-switch" id="arTabSwitch">
      <button type="button" data-t="both" class="${State.arenaTab === 'both' ? 'active' : ''}">${escapeHtml(t('bothThoughtsTab'))}</button>
      <button type="button" data-t="white" class="${State.arenaTab === 'white' ? 'active' : ''}">${escapeHtml(t('white'))}</button>
      <button type="button" data-t="black" class="${State.arenaTab === 'black' ? 'active' : ''}">${escapeHtml(t('black'))}</button>
      <button type="button" data-t="log" class="${State.arenaTab === 'log' ? 'active' : ''}">${escapeHtml(t('logTab', { n: State.arenaMoveLog.length }))}</button>
    </div>
    <span class="mono small tabular-nums">${escapeHtml(t('plyCounter', { cur: viewPly, total: totalPlies }))}</span>
  </div>`);
  tabBar.querySelectorAll('#arTabSwitch button').forEach((b) => {
    b.onclick = () => {
      State.arenaTab = b.dataset.t;
      render();
    };
  });
  side.appendChild(tabBar);

  if (State.arenaTab === 'log') {
    const logList = document.createElement('div');
    logList.className = 'move-eval-list';
    if (State.arenaMoveLog.length === 0) {
      logList.innerHTML = `<div class="sf-empty">${escapeHtml(t('noArenaMovesYet'))}</div>`;
    } else {
      [...State.arenaMoveLog].reverse().forEach((entry, revIdx) => {
        const realIdx = State.arenaMoveLog.length - 1 - revIdx;
        const moveNo = `${Math.ceil(entry.ply / 2)}${entry.side === 'w' ? '.' : '...'}`;
        const lead = entry.snapshot?.lines?.[0];
        const scoreTxt = lead ? formatEvalScore(lead.whiteCp, lead.whiteMate) : '0.00';
        const entryProf = localizeEngineProfile(
          getEngineProfile(entry.profileId || (entry.side === 'w' ? State.arenaWhiteProfileId : State.arenaBlackProfileId)),
          lang,
        );
        const entryThought = entry.snapshot
          ? formatEngineThought(entry.snapshot, {
              profile: entryProf,
              tierLabel: '',
              chosenSan: entry.san,
              isThinking: false,
              lang,
            })
          : entry.thoughtText;
        const row = el(`<button type="button" class="move-eval-row ${viewPly === realIdx + 1 ? 'selected' : ''}">
          <span class="mono tabular-nums" dir="ltr" style="font-weight:700;color:var(--walnut-dark)">${moveNo} ${escapeHtml(entry.san)}</span>
          <span class="small" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escapeHtml(entryProf.shortName)}: ${escapeHtml(entryThought)}</span>
          <span class="mono tabular-nums" dir="ltr" style="font-weight:600">${scoreTxt}</span>
        </button>`);
        row.onclick = () => navigateArenaPly(realIdx + 1);
        logList.appendChild(row);
      });
    }
    side.appendChild(logList);
  } else {
    const cardsBox = document.createElement('div');
    cardsBox.className = 'arena-cards-split';
    if (State.arenaTab === 'both' || State.arenaTab === 'white') {
      const wCard = createEngineThoughtCard({ side: 'w', profile: wProfile, tierLabel: wTier.label });
      State.dom.arenaWhiteCard = wCard;
      cardsBox.appendChild(wCard);
    }
    if (State.arenaTab === 'both' || State.arenaTab === 'black') {
      const bCard = createEngineThoughtCard({ side: 'b', profile: bProfile, tierLabel: bTier.label });
      State.dom.arenaBlackCard = bCard;
      cardsBox.appendChild(bCard);
    }
    side.appendChild(cardsBox);
  }

  side.appendChild(
    buildMovesPanel(
      State.arenaMoveLog.map((x) => x.san),
      {
        currentPly: viewPly,
        onSelectPly: (plyNo) => navigateArenaPly(plyNo),
      },
    ),
  );
  layout.appendChild(side);
  wrap.appendChild(layout);

  syncArenaLiveDom();
  return wrap;
}

function renderVsHuman() {
  const lang = getLang();
  if (!State.game) {
    State.game = new Chess();
    State.gameInitialFen = State.game.fen();
  }
  const g = State.game;
  const turn = g.turn();
  const w = State.members[State.gameWhite] || { name: t('white'), rating: 1200 };
  const b = State.members[State.gameBlack] || { name: t('black'), rating: 1200 };
  const coachAllowed = !State.gameRated && State.showPlayCoach;
  const totalPlies = State.gameMoveHistory.length;
  const viewPly =
    State.gameViewPly != null ? Math.max(0, Math.min(totalPlies, State.gameViewPly)) : totalPlies;
  const isReviewing = viewPly < totalPlies;
  const viewPos = isReviewing
    ? buildPositionAtPly(State.gameInitialFen, State.gameMoveHistory, viewPly, Chess)
    : { game: g, lastMove: State.lastMove };
  const ecoMatch = detectOpeningFromMoves(State.gameInitialFen, State.gameMoveHistory.slice(0, viewPly), lang);
  const mat = computeMaterialBalance(viewPos.game.fen(), State.gameInitialFen);

  const wrap = document.createElement('div');
  wrap.className = 'view-shell';
  wrap.appendChild(el(`<div class="view-bar">
    <h1>${escapeHtml(t('matchupTitle', { a: w.name, b: b.name }))}</h1>
    <div class="view-bar-meta">
      ${ecoMatch ? `<span class="tag">${escapeHtml(isolateChessTokens(`${ecoMatch.eco} · ${ecoMatch.name}`, lang))}</span>` : ''}
      <span class="tag ${State.gameRated ? 'gold' : 'green'}">${escapeHtml(State.gameRated ? t('ratedTag') : t('friendlyTag'))}</span>
      ${!State.gameRated ? `<button type="button" class="toggle-btn ${State.showPlayCoach ? 'active' : ''}" id="humCoachBtn">${iconSvg('coach', 14)} ${escapeHtml(t('coachToggle', { state: State.showPlayCoach ? t('on') : t('off') }))}</button>` : ''}
      ${totalPlies > 0 && (State.gameOver || !State.gameRated) ? `<button type="button" class="btn ghost sm" id="anHumBtn">${iconSvg('coach', 13)} ${escapeHtml(t('analyzeBtn'))}</button>` : ''}
      <button type="button" class="btn ghost sm" id="leaveHum">${escapeHtml(t('leaveGame'))}</button>
    </div>
  </div>`));
  const anHumBtn = wrap.querySelector('#anHumBtn');
  if (anHumBtn) {
    anHumBtn.onclick = () => {
      stopMatchClock();
      openGameInCoachAnalyzer({
        title: t('matchupTitle', { a: w.name, b: b.name }),
        headers: { Event: State.gameRated ? 'Edugates Rated Match' : 'Edugates Friendly', White: w.name, Black: b.name },
        startFen: State.gameInitialFen,
        moves: State.gameMoveHistory,
        jumpToEnd: true,
      });
    };
  }
  wrap.querySelector('#leaveHum').onclick = () => {
    stopMatchClock();
    stockfishClient.stop();
    navigate('play-menu');
  };
  const hcBtn = wrap.querySelector('#humCoachBtn');
  if (hcBtn) {
    hcBtn.onclick = () => {
      State.showPlayCoach = !State.showPlayCoach;
      if (!State.showPlayCoach) stockfishClient.stop();
      render();
    };
  }

  const layout = document.createElement('div');
  layout.className = `play-layout${State.boardMaximized ? ' board-maximized' : ''}`;

  const boardCol = document.createElement('div');
  boardCol.className = 'board-column';
  const stage = buildBoardStage(viewPos.game, {
    flip: State.flipBoard ? turn === 'b' : false,
    lastMove: viewPos.lastMove,
    interactive: !isReviewing && !State.gameOver && !State.promotionPending,
    onMove: async (m) => {
      const prevSnap = State.sfSnapshot;
      State.gameMoveHistory.push(m.san);
      State.gameViewPly = null;
      State.lastMove = lastMoveSquares(g);
      if (State.matchClock?.enabled) {
        State.matchClock = pressClockAfterMove(State.matchClock, m.color);
      }
      checkHumanGameEnd();
      if (coachAllowed && prevSnap?.lines?.[0] && !State.gameOver) {
        const snap = await triggerLiveAnalysis(g.fen(), { depth: 11, multiPv: 3 });
        if (snap) {
          State.playCoachLastGrade = gradePlayedMove({
            prevWhiteCp: prevSnap.whiteCp,
            prevWhiteMate: prevSnap.whiteMate,
            nextWhiteCp: snap.whiteCp,
            nextWhiteMate: snap.whiteMate,
            moverColor: m.color,
            playedUci: m.from + m.to + (m.promotion || ''),
            bestUci: prevSnap.lines[0].uci,
            bestSan: prevSnap.lines[0].bestMoveSan,
          });
        }
      }
      render();
    },
    showEvalBar: coachAllowed,
    showArrows: coachAllowed,
  });
  State.dom.evalBar = stage.evalBar;
  State.dom.arrowsSvg = stage.arrowsSvg;
  boardCol.appendChild(stage.frame);

  const ctrl = document.createElement('div');
  ctrl.className = 'board-controls';
  ctrl.appendChild(
    buildMoveTransportBar({
      ply: viewPly,
      total: totalPlies,
      onNavigate: (nextPly) => {
        State.gameViewPly = nextPly >= totalPlies ? null : nextPly;
        render();
      },
    }),
  );
  const undoBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('refresh', 13)} ${escapeHtml(t('undo'))}</button>`);
  undoBtn.disabled = isReviewing || State.gameMoveHistory.length === 0 || State.gameOver;
  undoBtn.onclick = () => {
    g.undo();
    State.gameMoveHistory.pop();
    State.gameViewPly = null;
    State.lastMove = lastMoveSquares(g);
    render();
  };
  const flipBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 13)} ${escapeHtml(t('flip'))}</button>`);
  flipBtn.onclick = () => {
    State.flipBoard = !State.flipBoard;
    render();
  };
  const drawBtn = el(`<button type="button" class="btn ghost sm">${escapeHtml(t('drawOffer'))}</button>`);
  drawBtn.disabled = State.gameOver;
  drawBtn.onclick = () => finishHumanGame('1/2-1/2', 'agreement');
  const resignBtn = el(`<button type="button" class="btn danger sm">${escapeHtml(t('playerResigns', { name: turn === 'w' ? w.name : b.name }))}</button>`);
  resignBtn.disabled = State.gameOver;
  resignBtn.onclick = () => finishHumanGame(turn === 'w' ? '0-1' : '1-0', 'resignation');
  ctrl.appendChild(undoBtn);
  ctrl.appendChild(flipBtn);
  ctrl.appendChild(drawBtn);
  ctrl.appendChild(resignBtn);
  ctrl.appendChild(makeMaxBoardButton());
  boardCol.appendChild(ctrl);
  layout.appendChild(boardCol);

  const side = document.createElement('div');
  side.className = 'play-sidebar';
  if (isReviewing) {
    side.appendChild(el(`<div class="status-banner tabular-nums">${escapeHtml(t('reviewingPlyPlayResume', { cur: viewPly, total: totalPlies }))}</div>`));
  } else if (State.gameOver) {
    side.appendChild(el(`<div class="status-banner ${State.lastResult?.kind || 'draw'}">${escapeHtml(resolveLastResultText(State.lastResult, lang))}</div>`));
  } else {
    side.appendChild(el(`<div class="status-banner">${escapeHtml(t('playerToMove', { name: turn === 'w' ? w.name : b.name }))}${g.in_check() ? escapeHtml(t('inCheckTag')) : ''}</div>`));
  }
  const buildHumPlayerRow = (color, playerObj, isActive) => {
    const row = document.createElement('div');
    row.className = `player-row ${isActive ? 'active' : ''}`;
    const leftSide = el(`<div style="display:flex;align-items:center;gap:.35rem;min-width:0;flex-wrap:wrap">
      <span class="turn-marker"></span><span class="pname">${escapeHtml(playerObj.name)}</span>
    </div>`);
    leftSide.appendChild(
      createMaterialBar({
        capturedPieces: color === 'w' ? mat.whiteCaptured : mat.blackCaptured,
        netAdv: color === 'w' ? (mat.netWhite > 0 ? mat.netWhite : 0) : mat.netWhite < 0 ? -mat.netWhite : 0,
        pieceSvgMap: PIECE_SVG,
      }),
    );
    const rightSide = el(`<div style="display:flex;align-items:center;gap:.35rem;flex-shrink:0"><span class="badge elo tabular-nums">${playerObj.rating}</span></div>`);
    if (State.matchClock?.enabled) {
      const ms = color === 'w' ? State.matchClock.whiteMs : State.matchClock.blackMs;
      const clk = el(`<span class="chess-clock tabular-nums ${State.matchClock.running && State.matchClock.activeSide === color ? 'active-clock' : ''} ${ms < 20_000 ? 'low-time' : ''}" dir="ltr">${escapeHtml(formatClockMs(ms))}</span>`);
      if (color === 'w') State.dom.whiteClock = clk;
      else State.dom.blackClock = clk;
      rightSide.appendChild(clk);
    }
    row.appendChild(leftSide);
    row.appendChild(rightSide);
    return row;
  };
  const humInfo = document.createElement('div');
  humInfo.className = 'game-info';
  humInfo.appendChild(buildHumPlayerRow('b', b, turn === 'b'));
  humInfo.appendChild(buildHumPlayerRow('w', w, turn === 'w'));
  side.appendChild(humInfo);
  if (coachAllowed) {
    const sfPanel = createStockfishPanel({
      title: t('sfFriendlyCoach'),
      showArrows: State.showCoachArrows,
      onToggleArrows: () => {
        State.showCoachArrows = !State.showCoachArrows;
        applyStockfishDom(State.sfSnapshot, State.playCoachLastGrade);
      },
    });
    State.dom.sfPanel = sfPanel;
    side.appendChild(sfPanel);
    triggerLiveAnalysis(viewPos.game.fen(), { depth: 11, multiPv: 3, grade: isReviewing ? null : State.playCoachLastGrade });
  }
  side.appendChild(
    buildMovesPanel(State.gameMoveHistory, {
      currentPly: viewPly,
      onSelectPly: (plyNo) => {
        State.gameViewPly = plyNo >= totalPlies ? null : plyNo;
        render();
      },
    }),
  );
  layout.appendChild(side);
  wrap.appendChild(layout);
  return wrap;
}

function checkHumanGameEnd() {
  if (State.gameOver) return;
  const g = State.game;
  if (g.in_checkmate()) finishHumanGame(g.turn() === 'w' ? '0-1' : '1-0', 'checkmate');
  else if (g.in_draw() || g.in_stalemate() || g.in_threefold_repetition() || g.insufficient_material()) {
    finishHumanGame('1/2-1/2', g.in_stalemate() ? 'stalemate' : 'draw');
  }
}

async function finishHumanGame(result, reason) {
  stopMatchClock();
  State.gameOver = true;
  const w = State.members[State.gameWhite];
  const b = State.members[State.gameBlack];
  let scoreW = 0.5;
  let kind = 'draw';
  let resultObj = { kind: 'draw', meta: { type: 'human-draw', reason } };
  if (result === '1-0') {
    scoreW = 1;
    kind = 'win';
    resultObj = { kind: 'win', meta: { type: 'human-win', winnerName: w.name, reason } };
  } else if (result === '0-1') {
    scoreW = 0;
    kind = 'loss';
    resultObj = { kind: 'loss', meta: { type: 'human-win', winnerName: b.name, reason } };
  }
  let newW = w.rating;
  let newB = b.rating;
  if (State.gameRated && w && b) {
    newW = computeElo(w.rating, b.rating, scoreW);
    newB = computeElo(b.rating, w.rating, 1 - scoreW);
    w.rating = newW;
    b.rating = newB;
    if (scoreW === 1) {
      w.wins += 1;
      b.losses += 1;
    } else if (scoreW === 0) {
      w.losses += 1;
      b.wins += 1;
    } else {
      w.draws += 1;
      b.draws += 1;
    }
    await saveMembers();
    if (State.user.id === w.id) State.user.rating = newW;
    if (State.user.id === b.id) State.user.rating = newB;
  }
  State.lastResult = { kind, meta: resultObj.meta };
  if (w && b) {
    await saveGameRecord({
      ts: Date.now(),
      type: State.gameRated ? 'rated' : 'friendly',
      white: { id: w.id, name: w.name, ratingBefore: w.rating, ratingAfter: newW },
      black: { id: b.id, name: b.name, ratingBefore: b.rating, ratingAfter: newB },
      result,
      reason,
      moves: State.gameMoveHistory.slice(),
      pgn: State.game.pgn(),
    });
  }
  render();
}

// =========================================================
// CLUB HUB (Leaderboard + Annals + Shared Clubs)
// =========================================================
function loadLocalOnlineProfile(userId) {
  if (!userId) return null;
  try {
    const map = JSON.parse(localStorage.getItem('edugates_online_profiles_v1') || '{}');
    return map[userId] || null;
  } catch {
    return null;
  }
}

function saveLocalOnlineProfile(userId, payload) {
  if (!userId) return;
  try {
    const map = JSON.parse(localStorage.getItem('edugates_online_profiles_v1') || '{}');
    map[userId] = payload;
    localStorage.setItem('edugates_online_profiles_v1', JSON.stringify(map));
  } catch {}
}

function renderClubMemberRatingsHtml(member, lang) {
  const localFallback = loadLocalOnlineProfile(member?.id);
  const online = member?.onlineRatings || localFallback?.onlineRatings;
  if (!online) return '';
  const badges = [];
  if (online.lichess?.ratings) {
    const lr = online.lichess.ratings;
    const main = lr.blitz ?? lr.rapid ?? lr.classical ?? lr.bullet ?? lr.puzzle;
    const tip = t(
      'onlineRatingsSummary',
      { blitz: lr.blitz ?? '—', rapid: lr.rapid ?? '—', puzzle: lr.puzzle ?? '—' },
      lang,
    );
    badges.push(
      `<span class="online-rating-pill" title="${escapeHtml(tip)}">Lichess ${escapeHtml(main != null ? String(main) : '✓')}</span>`,
    );
  }
  if (online.chesscom?.ratings) {
    const cr = online.chesscom.ratings;
    const main = cr.blitz ?? cr.rapid ?? cr.daily ?? cr.bullet ?? cr.puzzle;
    const tip = t(
      'onlineRatingsSummary',
      { blitz: cr.blitz ?? '—', rapid: cr.rapid ?? '—', puzzle: cr.puzzle ?? '—' },
      lang,
    );
    badges.push(
      `<span class="online-rating-pill" title="${escapeHtml(tip)}">Chess.com ${escapeHtml(main != null ? String(main) : '✓')}</span>`,
    );
  }
  return badges.length > 0 ? `<div class="online-rating-badges" dir="ltr">${badges.join('')}</div>` : '';
}

function renderClub() {
  const lang = getLang();
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';
  wrap.appendChild(el(`<div class="view-bar">
    <h1>${iconSvg('club', 18)} ${escapeHtml(t('clubStandingsTitle'))}</h1>
    ${sharedClub ? `<span class="tag green">${escapeHtml(t('sharedFirebaseTag'))}</span>` : `<span class="tag">${escapeHtml(t('membersCountTag', { n: Object.keys(State.members).length }))}</span>`}
  </div>`));

  const activeMember = !sharedClub && State.user && State.members[State.user.id]
    ? State.members[State.user.id]
    : State.user;
  const savedLocal = loadLocalOnlineProfile(State.user?.id);
  const savedLichess = activeMember?.lichess ?? savedLocal?.lichess ?? '';
  const savedChessCom = activeMember?.chesscom ?? savedLocal?.chesscom ?? '';
  const activeOnline = activeMember?.onlineRatings ?? savedLocal?.onlineRatings ?? null;

  const grid = document.createElement('div');
  grid.className = 'club-grid';

  // Left: Standings Leaderboard + Online Profile Sync + optional Shared Club creation
  const left = document.createElement('section');
  left.className = 'card club-card';
  left.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.45rem">
    <h3>${escapeHtml(t('clubStandingsHeading'))}</h3>
    ${sharedClub ? `<button type="button" class="btn gold sm" id="createClubBtn">${iconSvg('plus', 13)} ${escapeHtml(t('newClubBtn'))}</button>` : ''}
  </div>
  <div class="online-sync-box">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:.4rem;flex-wrap:wrap">
      <strong style="font-size:.86rem">${iconSvg('cloud', 14)} ${escapeHtml(t('onlineProfilesTitle'))}</strong>
      ${activeOnline ? renderClubMemberRatingsHtml({ id: State.user?.id, onlineRatings: activeOnline }, lang) : ''}
    </div>
    <div style="display:flex;gap:.35rem;flex-wrap:wrap;align-items:center">
      <input id="clubLichessIn" dir="ltr" value="${escapeHtml(savedLichess)}" placeholder="Lichess" aria-label="${escapeHtml(t('lichessUserLabel'))}" style="flex:1;min-width:110px;padding:.24rem .45rem;font-size:.82rem" />
      <input id="clubChessComIn" dir="ltr" value="${escapeHtml(savedChessCom)}" placeholder="Chess.com" aria-label="${escapeHtml(t('chessComUserLabel'))}" style="flex:1;min-width:110px;padding:.24rem .45rem;font-size:.82rem" />
      <button type="button" class="btn gold sm" id="syncOnlineRatingsBtn" ${State.clubSyncing ? 'disabled' : ''}>${iconSvg('refresh', 13)} ${escapeHtml(State.clubSyncing ? t('syncingOnline') : t('syncOnlineBtn'))}</button>
      <button type="button" class="btn ghost sm" id="clubImportGamesBtn" ${State.clubSyncing ? 'disabled' : ''}>${iconSvg('upload', 13)} ${escapeHtml(t('importRecentToCoach'))}</button>
    </div>
    ${State.clubSyncStatus ? `<div class="puzzle-feedback ${State.clubSyncStatus.kind}" style="margin-top:0;padding:.28rem .5rem;font-size:.8rem">${escapeHtml(State.clubSyncStatus.text)}</div>` : ''}
  </div>
  <div class="scroll-pane" style="flex:1">
    <table class="leaderboard">
      <thead><tr><th>${escapeHtml(t('colRank'))}</th><th>${escapeHtml(t('colMember'))}</th><th>${escapeHtml(t('colElo'))}</th><th>${escapeHtml(t('colWld'))}</th></tr></thead>
      <tbody>
        ${Object.values(State.members).length === 0
          ? `<tr><td colspan="4" class="small italic">${escapeHtml(sharedClub ? t('sharedEmptyClubs') : t('noLocalMembers'))}</td></tr>`
          : Object.values(State.members)
              .sort((a, b) => b.rating - a.rating)
              .map((m, i) => `<tr class="${m.id === State.user.id ? 'you' : ''}">
                <td class="rank tabular-nums">${i + 1}</td>
                <td>
                  <div>${escapeHtml(m.name)}${m.id === State.user.id ? ` <span class="badge">${escapeHtml(t('youBadge'))}</span>` : ''}</div>
                  ${renderClubMemberRatingsHtml(m, lang)}
                </td>
                <td class="rating tabular-nums">${m.rating}</td>
                <td class="mono tabular-nums" dir="ltr">${m.wins || 0}-${m.losses || 0}-${m.draws || 0}</td>
              </tr>`)
              .join('')}
      </tbody>
    </table>
  </div>`;

  const persistLinkedAccounts = async (lName, cName, ratingsObj) => {
    const payload = {
      lichess: lName,
      chesscom: cName,
      onlineRatings: ratingsObj,
    };
    saveLocalOnlineProfile(State.user?.id, payload);
    if (!sharedClub && State.user && State.members[State.user.id]) {
      Object.assign(State.members[State.user.id], payload);
      State.user = State.members[State.user.id];
      await saveMembers();
    } else if (State.user) {
      Object.assign(State.user, payload);
    }
  };

  left.querySelector('#syncOnlineRatingsBtn').onclick = async () => {
    const lName = left.querySelector('#clubLichessIn').value.trim();
    const cName = left.querySelector('#clubChessComIn').value.trim();
    if (!lName && !cName) {
      left.querySelector('#clubLichessIn').focus();
      return;
    }
    await persistLinkedAccounts(lName, cName, activeOnline || null);
    State.clubSyncing = true;
    State.clubSyncStatus = null;
    render();

    const tasks = [];
    if (lName) tasks.push(fetchLichessUserProfile(lName));
    if (cName) tasks.push(fetchChessComUserProfile(cName));

    const results = await Promise.allSettled(tasks);
    const nextRatings = { ...(activeOnline || {}) };
    const errs = [];
    let idx = 0;
    if (lName) {
      const r = results[idx++];
      if (r.status === 'fulfilled') nextRatings.lichess = r.value;
      else errs.push(`Lichess: ${r.reason?.message || 'Error'}`);
    } else {
      delete nextRatings.lichess;
    }
    if (cName) {
      const r = results[idx++];
      if (r.status === 'fulfilled') nextRatings.chesscom = r.value;
      else errs.push(`Chess.com: ${r.reason?.message || 'Error'}`);
    } else {
      delete nextRatings.chesscom;
    }

    await persistLinkedAccounts(lName, cName, Object.keys(nextRatings).length ? nextRatings : null);
    State.clubSyncing = false;
    if (errs.length === tasks.length) {
      State.clubSyncStatus = { kind: 'wrong', text: errs.join(' · ') };
    } else if (errs.length > 0) {
      State.clubSyncStatus = { kind: 'hint', text: errs.join(' · ') };
    } else {
      const summaryParts = [];
      if (nextRatings.lichess?.ratings) {
        const lr = nextRatings.lichess.ratings;
        summaryParts.push(
          `Lichess (${t('onlineRatingsSummary', { blitz: lr.blitz ?? '—', rapid: lr.rapid ?? '—', puzzle: lr.puzzle ?? '—' })})`,
        );
      }
      if (nextRatings.chesscom?.ratings) {
        const cr = nextRatings.chesscom.ratings;
        summaryParts.push(
          `Chess.com (${t('onlineRatingsSummary', { blitz: cr.blitz ?? '—', rapid: cr.rapid ?? '—', puzzle: cr.puzzle ?? '—' })})`,
        );
      }
      State.clubSyncStatus = { kind: 'correct', text: summaryParts.join(' · ') };
    }
    render();
  };

  left.querySelector('#clubImportGamesBtn').onclick = async () => {
    const lName = left.querySelector('#clubLichessIn').value.trim();
    const cName = left.querySelector('#clubChessComIn').value.trim();
    if (!lName && !cName) {
      left.querySelector('#clubLichessIn').focus();
      return;
    }
    await persistLinkedAccounts(lName, cName, activeOnline || null);
    State.clubSyncing = true;
    State.clubSyncStatus = null;
    render();

    const tasks = [];
    if (lName) tasks.push(fetchLichessUserGames(lName, { max: 8, ChessCtor: Chess, lang }));
    if (cName) tasks.push(fetchChessComUserGames(cName, { max: 8, ChessCtor: Chess, lang }));

    const settled = await Promise.allSettled(tasks);
    const games = [];
    const errs = [];
    for (const res of settled) {
      if (res.status === 'fulfilled' && Array.isArray(res.value)) games.push(...res.value);
      else if (res.status === 'rejected') errs.push(res.reason?.message || 'Error');
    }
    State.clubSyncing = false;
    if (games.length > 0) {
      const srcLabel = [lName && `Lichess:${lName}`, cName && `Chess.com:${cName}`].filter(Boolean).join(' · ');
      loadParsedGamesIntoCoach(games.slice(0, 12), srcLabel);
      navigate('coach');
      return;
    }
    State.clubSyncStatus = {
      kind: 'wrong',
      text: errs.join(' · ') || t('onlineFetchError', { platform: 'Lichess/Chess.com', msg: 'No games found' }),
    };
    render();
  };

  const clubBtn = left.querySelector('#createClubBtn');
  if (clubBtn) {
    clubBtn.onclick = async () => {
      const nm = prompt(
        t('enterClubNamePrompt'),
        lang === 'ar' ? 'نادي بوابة المعرفة' : 'Edugates Varsity',
      );
      if (!nm) return;
      const slug = nm.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      await createClub({ name: nm, slug });
      State.sharedClubs = await listMyClubs();
      render();
    };
  }
  grid.appendChild(left);

  // Right: Recorded Games Annals
  const right = document.createElement('section');
  right.className = 'card club-card';
  right.innerHTML = `<h3 style="margin-bottom:.45rem">${escapeHtml(t('recordedGamesHeading'))}</h3><div class="scroll-pane item-list" id="annalsList"><span class="small italic">${escapeHtml(t('loadingGames'))}</span></div>`;
  const listEl = right.querySelector('#annalsList');
  loadGameRecords().then((records) => {
    listEl.innerHTML = '';
    if (records.length === 0) {
      listEl.innerHTML = `<p class="small italic" style="color:var(--ink-soft)">${escapeHtml(t('noRecordedGames'))}</p>`;
      return;
    }
    records.forEach((r) => {
      const item = el(`<div class="list-item">
        <div class="meta">
          <h4>${escapeHtml(t('matchupTitle', { a: r.white.name, b: r.black.name }))}</h4>
          <span class="small tabular-nums">${escapeHtml(t('pliesMeta', { plies: r.moves.length, reason: tGameReason(r.reason, lang), date: formatDate(r.ts) }))}</span>
        </div>
        <div style="display:flex;gap:.35rem;align-items:center">
          <span class="tag ${r.type === 'rated' ? 'gold' : ''}">${escapeHtml(tMatchType(r.type, lang))}</span>
          <span class="mono tabular-nums" dir="ltr" style="font-weight:700">${escapeHtml(r.result)}</span>
        </div>
      </div>`);
      item.onclick = () => showGameModal(r);
      listEl.appendChild(item);
    });
  });
  grid.appendChild(right);

  wrap.appendChild(grid);
  return wrap;
}

function showGameModal(r) {
  const lang = getLang();
  const pgnText = r.pgn || exportGameToPgn({
    headers: { Event: 'Edugates Club Match', White: r.white.name, Black: r.black.name, Result: r.result },
    moves: r.moves || [],
    result: r.result || '*',
  });
  const back = el(`<div class="modal-backdrop"></div>`);
  const m = el(`<div class="modal">
    <button type="button" class="modal-close" aria-label="${escapeHtml(t('close'))}">×</button>
    <h2>${escapeHtml(t('matchupTitle', { a: r.white.name, b: r.black.name }))}</h2>
    <p class="small tabular-nums">${escapeHtml(formatDate(r.ts))} · ${escapeHtml(tGameReason(r.reason, lang))} · <strong dir="ltr">${escapeHtml(r.result)}</strong></p>
    <hr class="fancy"/>
    <div class="mono tabular-nums pgn-viewer-box">${formatPGN(r.moves)}</div>
    <div style="display:flex;gap:.45rem;justify-content:flex-end;margin-top:.75rem;flex-wrap:wrap">
      <button type="button" class="btn ghost sm" id="modDownloadPgn">${iconSvg('download', 13)} ${escapeHtml(t('downloadPgn'))}</button>
      <button type="button" class="btn gold sm" id="modAnalyzeGame">${iconSvg('coach', 13)} ${escapeHtml(t('analyzeInCoach'))}</button>
    </div>
  </div>`);
  m.querySelector('#modDownloadPgn').onclick = () => {
    downloadPgnFile(`${r.white.name}-vs-${r.black.name}.pgn`.replace(/\s+/g, '-'), pgnText);
  };
  m.querySelector('#modAnalyzeGame').onclick = () => {
    back.remove();
    const parsed = parseImportedGames(pgnText, Chess, { lang });
    if (parsed.ok) {
      loadParsedGamesIntoCoach(parsed.games, 'Club Match Annals');
      navigate('coach');
    } else {
      openGameInCoachAnalyzer({
        title: t('matchupTitle', { a: r.white.name, b: r.black.name }) + ` (${r.result})`,
        headers: { Event: 'Edugates Club Match', White: r.white.name, Black: r.black.name },
        moves: r.moves || [],
        result: r.result || '*',
      });
    }
  };
  m.querySelector('.modal-close').onclick = () => back.remove();
  back.onclick = (e) => {
    if (e.target === back) back.remove();
  };
  back.appendChild(m);
  document.getElementById('app').appendChild(back);
}

function formatPGN(moves) {
  let s = '';
  for (let i = 0; i < moves.length; i += 2) {
    s += `${i / 2 + 1}. ${moves[i] || ''} ${moves[i + 1] || ''} `;
  }
  return s.trim() || `<em>${escapeHtml(t('noMovesItalic'))}</em>`;
}

// =========================================================
// UTIL & KEYBOARD NAVIGATION
// =========================================================
function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
}
function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[c]);
}
function formatDate(ts) {
  return formatDateLocalized(ts, getLang());
}

document.addEventListener('keydown', (event) => {
  if (
    event.target instanceof HTMLInputElement ||
    event.target instanceof HTMLSelectElement ||
    event.target instanceof HTMLTextAreaElement ||
    event.target?.isContentEditable
  ) {
    return;
  }

  if (State.user && !event.ctrlKey && !event.metaKey && !event.altKey) {
    const lower = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (lower === 'f') {
      event.preventDefault();
      State.flipBoard = !State.flipBoard;
      render();
      return;
    }
    if (lower === 'z') {
      event.preventDefault();
      State.zenMode = !State.zenMode;
      render();
      return;
    }
    if (lower === 'm') {
      event.preventDefault();
      State.preferences.sound = !State.preferences.sound;
      savePreferences();
      if (State.preferences.sound) playChessSound('move', true);
      render();
      return;
    }
    if (event.key === 'Escape' && State.zenMode && !document.querySelector('.modal-backdrop')) {
      event.preventDefault();
      State.zenMode = false;
      render();
      return;
    }
  }

  const keyAction = {
    ArrowLeft: 'back',
    ArrowRight: 'forward',
    Home: 'first',
    End: 'last',
  }[event.key];
  if (!keyAction) return;

  if (State.page === 'coach') {
    event.preventDefault();
    navigateCoachPly(stepPly(State.coachPly, keyAction, State.coachMoves.length));
  } else if (State.page === 'engine-arena') {
    event.preventDefault();
    const total = State.arenaMoveLog.length;
    const cur = State.arenaViewPly != null ? State.arenaViewPly : total;
    navigateArenaPly(stepPly(cur, keyAction, total));
  } else if (State.page === 'vs-engine' || State.page === 'vs-human') {
    event.preventDefault();
    const total = State.gameMoveHistory.length;
    const cur = State.gameViewPly != null ? State.gameViewPly : total;
    const nextPly = stepPly(cur, keyAction, total);
    State.gameViewPly = nextPly >= total ? null : nextPly;
    render();
  } else if (State.page === 'endgames') {
    event.preventDefault();
    const total = State.endgameMoves.length;
    const cur = State.endgameViewPly != null ? State.endgameViewPly : total;
    const nextPly = stepPly(cur, keyAction, total);
    State.endgameViewPly = nextPly >= total ? null : nextPly;
    render();
  } else if (State.page === 'puzzles' && State.puzzleView === 'solver' && State.puzzlePly > 0) {
    event.preventDefault();
    const total = State.puzzlePly;
    const cur = State.puzzleViewPly != null ? State.puzzleViewPly : total;
    const nextPly = stepPly(cur, keyAction, total);
    State.puzzleViewPly = nextPly >= total ? null : nextPly;
    render();
  } else if (State.studyMode === 'learn' && State.page === 'openings') {
    const active =
      State.openingsTab === 'traps'
        ? TRAPS.find((t) => t.id === State.selectedTrapId)
        : OPENINGS.find((o) => o.id === State.selectedOpeningId);
    if (!active) return;
    const total = (active.line || []).length;
    const nextStep = stepPly(State.studyStep, keyAction, total);
    if (nextStep !== State.studyStep) {
      event.preventDefault();
      if (nextStep > State.studyStep) {
        recordStudyProgress(State.openingsTab === 'traps' ? 'traps' : 'openings', active, nextStep, total);
      }
      State.studyStep = nextStep;
      render();
    }
  } else if (State.studyMode === 'learn' && State.page === 'strategy') {
    const active = MIDDLEGAME_LESSONS.find((m) => m.id === State.selectedStrategyId);
    if (!active) return;
    const total = (active.line || []).length;
    const nextStep = stepPly(State.studyStep, keyAction, total);
    if (nextStep !== State.studyStep) {
      event.preventDefault();
      if (nextStep > State.studyStep) {
        recordStudyProgress('middlegame', active, nextStep, total);
      }
      State.studyStep = nextStep;
      render();
    }
  }
});

(async () => {
  applyLanguageDom(getLang());
  await loadMembers();
  await loadCurrentUser();
  render();
})();
