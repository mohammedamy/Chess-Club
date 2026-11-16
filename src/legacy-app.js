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
  gradePlayedMove,
  isStockfishSafeFen,
  resolveEngineLevelConfig,
  stockfishClient,
} from './domain/stockfish-service.js';
import {
  advanceQuizSession,
  createQuizSession,
  evaluatePuzzleMove,
  filterPuzzles,
  paginateItems,
  submitQuizAnswer,
  summarizeQuizSession,
} from './domain/puzzle-engine.js';
import { iconSvg } from './ui/icons.js';
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
      ...JSON.parse(localStorage.getItem('eis_board_preferences') || '{}'),
    };
  } catch {
    return { board: 'walnut', pieces: 'classic', coordinates: true };
  }
}

function applyPreferences() {
  const theme = BOARD_THEMES[State.preferences.board] || BOARD_THEMES.walnut;
  const root = document.documentElement;
  root.style.setProperty('--board-light', theme.light);
  root.style.setProperty('--board-dark', theme.dark);
  root.style.setProperty('--board-frame', theme.frame);
  root.style.setProperty('--board-accent', theme.accent);
  document.body.dataset.pieceStyle = State.preferences.pieces;
  document.body.classList.toggle('hide-coordinates', !State.preferences.coordinates);
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
  showStudyStockfish: true,

  // Puzzles & Quiz Sprint state
  puzzleView: 'catalog', // 'catalog' | 'solver' | 'quiz'
  puzzleCategory: 'All',
  puzzleDifficulty: 'All',
  puzzleQuery: '',
  puzzleUnsolvedOnly: false,
  puzzlePage: 1,
  activePuzzle: PUZZLES[0] || null,
  puzzlePly: 0,
  puzzleFeedback: null,
  puzzleSolvedThisRun: false,
  puzzleAutoReplying: false,
  showPuzzleStockfish: true,
  quizCategory: 'All',
  quizSession: createQuizSession(QUIZZES, { category: 'All', count: 10 }),
  showQuizStockfish: false,

  // Stockfish 19 Live Coach & Engine state
  coachMode: 'guided', // 'guided' | 'sandbox' | 'blunder-check'
  coachEngineLevel: 3,
  coachPlayerColor: 'w',
  coachGame: null,
  coachHistory: [],
  coachThinking: false,
  coachLastGrade: null,
  coachPendingBlunder: null,
  coachFenInput: '',
  coachFenError: null,
  coachPausedOnMateOrDraw: null,
  showCoachArrows: true,

  // Live Stockfish snapshot & widget refs
  sfSnapshot: null,
  sfTargetFen: null,
  boardMaximized: false,
  studySidebarCollapsed: false,
  mobileStudyListOpen: false,
  dom: {
    evalBar: null,
    arrowsSvg: null,
    sfPanel: null,
    arenaDualStrip: null,
    arenaWhiteCard: null,
    arenaBlackCard: null,
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
  arenaInspectIndex: null,
  arenaWhiteSnap: null,
  arenaBlackSnap: null,
  arenaWhiteLastMeta: null,
  arenaBlackLastMeta: null,
  arenaEngines: { w: null, b: null },
  arenaLoopToken: 0,
  arenaTimerId: null,

  // Play & Club state
  variant: 'standard',
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
  gameMoveHistory: [],
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
        const name = user.displayName || (user.email ? user.email.split('@')[0] : 'Club member');
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

function makeMaxBoardButton() {
  const btn = el(`<button type="button" class="btn ghost sm ${State.boardMaximized ? 'active' : ''}" title="${State.boardMaximized ? 'Restore balanced panel' : 'Maximize board size'}">${iconSvg(State.boardMaximized ? 'compress' : 'expand', 13)} <span>${State.boardMaximized ? 'Fit' : 'Max'}</span></button>`);
  btn.onclick = () => {
    State.boardMaximized = !State.boardMaximized;
    render();
  };
  return btn;
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
  State.selectedSquare = null;
  State.legalDests = [];
  State.promotionPending = null;
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
    sfPanel: null,
    arenaDualStrip: null,
    arenaWhiteCard: null,
    arenaBlackCard: null,
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
}

function renderHeader() {
  const h = document.createElement('header');
  h.className = 'site';
  const c = document.createElement('div');
  c.className = 'container';

  const brand = el(`<div class="brand">
    <div class="seal" role="img" aria-label="Edugates International School logo"></div>
    <div class="brand-text">
      <span class="title">Edugates International School</span>
      <span class="sub">Chess Club</span>
    </div>
  </div>`);
  brand.onclick = () => navigate('home');

  const navItems = [
    ['home', 'Hall', 'hall'],
    ['coach', 'Coach', 'coach'],
    ['puzzles', 'Puzzles', 'puzzles'],
    ['openings', 'Openings', 'openings'],
    ['strategy', 'Strategy', 'strategy'],
    ['endgames', 'Endgames', 'endgames'],
    ['play-menu', 'Play', 'play'],
    ['club', 'Club', 'club'],
  ];

  const nav = document.createElement('nav');
  nav.className = 'primary';
  navItems.forEach(([p, label, icon]) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.innerHTML = `${iconSvg(icon, 15)} <span>${label}</span>`;
    const isActive =
      State.page === p ||
      (p === 'play-menu' && ['vs-human', 'vs-engine', 'engine-arena'].includes(State.page));
    if (isActive) b.classList.add('active');
    b.onclick = () => navigate(p);
    nav.appendChild(b);
  });

  const actions = document.createElement('div');
  actions.className = 'header-actions';
  const customizeBtn = el(`<button class="customize-button" type="button" title="Board & Piece Studio">${iconSvg('spark', 14)} <span>Board</span></button>`);
  customizeBtn.onclick = showCustomization;

  const pill = el(`<div class="user-pill">
    <div class="avatar">${(State.user.name[0] || '?').toUpperCase()}</div>
    <div class="name">${escapeHtml(State.user.name)}</div>
    <div class="rating tabular-nums">${State.user.rating}</div>
    <button type="button" id="logoutBtn" title="Switch or sign out">${sharedClub ? 'Sign out' : 'Switch'}</button>
  </div>`);
  pill.querySelector('#logoutBtn').onclick = async () => {
    stockfishClient.stop();
    disposeArenaEngines();
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
  const back = document.createElement('div');
  back.className = 'modal-backdrop';
  const modal = document.createElement('div');
  modal.className = 'modal customization-modal';
  modal.innerHTML = `<button class="modal-close" type="button" aria-label="Close">×</button>
    <h2>Board &amp; Piece Studio</h2>
    <p class="custom-intro">Choose your board palette and piece finish. Preferences save automatically on this device.</p>
    <div class="custom-section"><h3>Board Theme</h3><div class="choice-grid board-choices"></div></div>
    <div class="custom-section"><h3>Piece Style</h3><div class="choice-grid piece-choices"></div></div>
    <label class="coordinate-toggle"><input type="checkbox" ${State.preferences.coordinates ? 'checked' : ''}/> Show board coordinates</label>`;

  const boardChoices = modal.querySelector('.board-choices');
  Object.entries(BOARD_THEMES).forEach(([id, t]) => {
    const btn = el(`<button class="visual-choice ${State.preferences.board === id ? 'selected' : ''}" type="button"><span class="board-swatch" style="--swatch-light:${t.light};--swatch-dark:${t.dark}"></span><strong>${t.name}</strong></button>`);
    btn.onclick = () => {
      State.preferences.board = id;
      savePreferences();
      back.remove();
      showCustomization();
    };
    boardChoices.appendChild(btn);
  });

  const pieceChoices = modal.querySelector('.piece-choices');
  Object.entries(PIECE_STYLES).forEach(([id, t]) => {
    const btn = el(`<button class="visual-choice piece-choice ${State.preferences.pieces === id ? 'selected' : ''}" type="button"><span class="piece-preview ${id}">${PIECE_SVG.N}${PIECE_SVG.q}</span><strong>${t.name}</strong><small>${t.note}</small></button>`);
    btn.onclick = () => {
      State.preferences.pieces = id;
      savePreferences();
      back.remove();
      showCustomization();
    };
    pieceChoices.appendChild(btn);
  });

  modal.querySelector('input').onchange = (e) => {
    State.preferences.coordinates = e.target.checked;
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
    <div class="crest" role="img" aria-label="Edugates International School logo"></div>
    <h1>Edugates International School</h1>
    <div style="font-family:'JetBrains Mono',monospace;color:var(--gold);letter-spacing:.22em;text-transform:uppercase;font-size:.76rem;margin-top:.15rem">Chess Club</div>
    <div class="ornament"></div>
    <p class="italic" style="color:var(--ink-soft)">Study 70 masterclasses, solve 310 verified puzzles &amp; 80 quizzes, and train live with Stockfish 19.</p>
    <div style="text-align:left;margin-top:.9rem">
      <label for="newName">Take a Seat</label>
      <div style="display:flex;gap:.5rem">
        <input id="newName" name="newName" autocomplete="name" placeholder="Student name (e.g. Layla Al-Mansoor)" />
        <button class="btn gold" id="joinBtn" type="button">Enter Club</button>
      </div>
    </div>
    ${memberCount > 0 ? `<hr class="fancy" />
    <div style="text-align:left">
      <label>Returning Club Members</label>
      <div class="members-grid" id="memberGrid"></div>
    </div>` : ''}
  `;
  card.querySelector('#joinBtn').onclick = async () => {
    const name = card.querySelector('#newName').value.trim();
    if (!name) {
      card.querySelector('#newName').focus();
      return;
    }
    if (name.length > 30) {
      alert('Name must be 30 characters or fewer.');
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
        const t = el(`<div class="member-tile">
          <div class="avatar">${(m.name[0] || '?').toUpperCase()}</div>
          <div class="nm">${escapeHtml(m.name)}</div>
          <div class="rt tabular-nums">${m.rating}</div>
        </div>`);
        t.onclick = async () => {
          await setUser(m.id);
          State.page = 'home';
          render();
        };
        grid.appendChild(t);
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
  const action = State.completingEmailLink ? 'Complete sign-in' : 'Send link';
  card.innerHTML = `
    <div class="crest" role="img" aria-label="Edugates International School logo"></div>
    <h1>Edugates International School</h1>
    <div class="ornament"></div>
    <p class="italic" style="color:var(--ink-soft)">${State.completingEmailLink ? 'Enter the school email address that received the sign-in link.' : 'Enter your school email and we will send a secure sign-in link.'}</p>
    ${State.authError ? `<p role="alert" style="color:var(--burgundy)">${escapeHtml(State.authError)}</p>` : ''}
    <div style="text-align:left;margin-top:1rem"><label for="email">School email</label><div style="display:flex;gap:.5rem"><input id="email" type="email" autocomplete="email" required placeholder="you@school.edu" /><button class="btn gold" id="emailBtn" type="button">${action}</button></div></div>`;
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
        const name = user.email ? user.email.split('@')[0] : 'Club member';
        State.user = { id: user.uid, name, rating: 1200, wins: 0, losses: 0, draws: 0 };
        await upsertMyProfile(name);
        State.sharedClubs = await listMyClubs();
        State.completingEmailLink = false;
        State.authError = null;
        render();
      } else {
        await sendEmailSignInLink(email);
        button.textContent = 'Check your email';
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
  const quizMeta = State.training.quizzes || {};

  // Card 1: Student Welcome + Stats
  const welcome = el(`<section class="bento-card bento-welcome">
    <div>
      <h1>Welcome, <em>${escapeHtml(State.user.name)}</em></h1>
      <p style="margin-top:.3rem">Edugates Study Hall — every opening line, tactic, strategic plan, and Stockfish 19 insight fits at a glance.</p>
    </div>
    <div class="welcome-stats">
      <div class="stat-box"><strong class="tabular-nums">${State.user.rating}</strong><span>Club Elo</span></div>
      <div class="stat-box"><strong class="tabular-nums">${State.training.streak || 0}</strong><span>Puzzle Streak</span></div>
      <div class="stat-box"><strong class="tabular-nums">${sum.solvedPuzzles}/${PUZZLES.length}</strong><span>Solved</span></div>
    </div>
    <div style="display:flex;gap:.45rem;flex-wrap:wrap">
      <button type="button" class="btn gold sm" id="hallCoach">${iconSvg('coach', 14)} Open Coach</button>
      <button type="button" class="btn ghost sm" style="color:var(--cream);border-color:var(--gold)" id="hallArena">${iconSvg('duel', 14)} Engine Duel</button>
      <button type="button" class="btn ghost sm" style="color:var(--cream);border-color:var(--gold)" id="hallPlay">${iconSvg('play', 14)} Play Game</button>
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
        <h3>${iconSvg('coach', 16)} Stockfish 19 Coach</h3>
        <span class="tag green">MultiPV 3</span>
      </div>
      <p class="small" style="margin-top:.25rem">Live evaluation bar, suggested candidate arrows on the board, SAN coaching tags, and blunder protection.</p>
    </div>
    <div style="display:flex;gap:.35rem;flex-wrap:wrap">
      <button type="button" class="btn sm" id="goGuided">Guided Sparring</button>
      <button type="button" class="btn ghost sm" id="goSandbox">FEN Lab</button>
      <button type="button" class="btn ghost sm" id="goBlunder">Blunder Check</button>
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
  coachCard.querySelector('#goBlunder').onclick = () => {
    State.coachMode = 'blunder-check';
    navigate('coach');
  };
  grid.appendChild(coachCard);

  // Card 3: Daily Puzzle + Quiz Sprint Launcher
  const dailyCard = el(`<section class="bento-card quiz-launch">
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:.4rem">
        <h3>${iconSvg('spark', 16)} Daily Training</h3>
        <span class="tag gold tabular-nums">${daily.rating} Elo</span>
      </div>
      <p class="small" style="margin-top:.2rem"><strong>${escapeHtml(daily.theme)}</strong> (${escapeHtml(daily.category)} · ${escapeHtml(daily.sideToMove)})</p>
      <p class="small">Quiz Sprints completed: <strong class="tabular-nums">${quizMeta.completedSprints || 0}</strong> · Best accuracy: <strong class="tabular-nums">${quizMeta.bestAccuracy || 0}%</strong></p>
    </div>
    <div style="display:flex;gap:.4rem;flex-wrap:wrap">
      <button type="button" class="btn gold sm" id="solveDaily">${iconSvg('puzzles', 14)} Solve Daily</button>
      <button type="button" class="btn ghost sm" id="startSprint">${iconSvg('trophy', 14)} 10-Quiz Sprint</button>
    </div>
  </section>`);
  dailyCard.querySelector('#solveDaily').onclick = () => openPuzzleInSolver(daily);
  dailyCard.querySelector('#startSprint').onclick = () => {
    State.puzzleView = 'quiz';
    State.quizCategory = 'All';
    State.quizSession = createQuizSession(QUIZZES, { category: 'All', count: 10, offset: quizMeta.completedSprints || 0 });
    navigate('puzzles');
  };
  grid.appendChild(dailyCard);

  // Card 4: Complete Library Tracks
  const tracks = el(`<section class="bento-card library-tracks">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <h3>Study &amp; Training Library</h3>
      <span class="small tabular-nums">70 Studies · 310 Puzzles · 80 Quizzes</span>
    </div>
    <div class="track-strip">
      <button type="button" class="track-tile" id="trkOpenings">
        <div class="track-top"><span>${iconSvg('openings', 15)} Openings &amp; Traps</span><span class="track-count tabular-nums">${sum.completedOpenings + sum.completedTraps}/${OPENINGS.length + TRAPS.length}</span></div>
        <small>${OPENINGS.length} opening repertoires &amp; ${TRAPS.length} tactical traps with interactive drill mode.</small>
      </button>
      <button type="button" class="track-tile" id="trkPuzzles">
        <div class="track-top"><span>${iconSvg('puzzles', 15)} Puzzle Vault &amp; Quizzes</span><span class="track-count tabular-nums">${sum.solvedPuzzles}/${PUZZLES.length}</span></div>
        <small>Openings (55), Tactics (90), Strategy (55), Middlegame (55), Endgame (55) + 80 Quizzes.</small>
      </button>
      <button type="button" class="track-tile" id="trkMastery">
        <div class="track-top"><span>${iconSvg('strategy', 15)} Strategy &amp; Endgames</span><span class="track-count tabular-nums">${sum.completedStrategy + sum.completedEndgames}/${MIDDLEGAME_LESSONS.length + ENDGAMES.length}</span></div>
        <small>${MIDDLEGAME_LESSONS.length} middlegame masterclasses &amp; ${ENDGAMES.length} playable endgames.</small>
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
// BOARD STAGE & CHESS INTERACTION
// =========================================================
function buildBoardStage(game, {
  flip = false,
  lastMove = null,
  interactive = false,
  onMove = null,
  showEvalBar = false,
  showArrows = false,
} = {}) {
  const frame = document.createElement('div');
  frame.className = 'board-frame';

  const wrap = document.createElement('div');
  wrap.className = 'board-wrap';
  const board = buildBoard(game, { flip, lastMove, interactive, onMove });
  wrap.appendChild(board);

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
  return { frame, evalBar, arrowsSvg };
}

function buildBoard(game, options) {
  const { flip, lastMove, interactive, onMove } = options;
  const board = document.createElement('div');
  board.className = 'board';
  const ranks = flip ? [1, 2, 3, 4, 5, 6, 7, 8] : [8, 7, 6, 5, 4, 3, 2, 1];
  const files = flip ? ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'] : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const checkSq = game.in_check() ? findKingSquare(game, game.turn()) : null;

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

      if (interactive) {
        cell.onclick = () => handleSquareClick(sq, game, onMove);
      }
      board.appendChild(cell);
    }
  }
  return board;
}

function handleSquareClick(sq, game, onMove) {
  if (State.promotionPending) return;
  const piece = game.get(sq);
  if (State.selectedSquare && State.legalDests.includes(sq)) {
    const movingPiece = game.get(State.selectedSquare);
    if (movingPiece && movingPiece.type === 'p' && (sq[1] === '8' || sq[1] === '1')) {
      State.promotionPending = {
        from: State.selectedSquare,
        to: sq,
        color: movingPiece.color,
        game,
        onComplete: onMove,
      };
      State.selectedSquare = null;
      State.legalDests = [];
      showPromotionPicker();
      return;
    }
    const result = game.move({ from: State.selectedSquare, to: sq });
    State.selectedSquare = null;
    State.legalDests = [];
    if (result) {
      State.lastMove = { from: result.from, to: result.to };
      onMove(result);
    } else {
      render();
    }
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

function buildMovesPanel(moves) {
  const panel = document.createElement('div');
  panel.className = 'moves-panel';
  panel.innerHTML = '<h4>Moves</h4>';
  const ml = document.createElement('div');
  ml.className = 'moves-list tabular-nums';
  if (moves.length === 0) {
    ml.appendChild(el(`<div class="small italic" style="grid-column:span 3;color:var(--ink-soft)">No moves yet.</div>`));
  } else {
    for (let i = 0; i < moves.length; i += 2) {
      ml.appendChild(el(`<div class="num">${i / 2 + 1}.</div>`));
      ml.appendChild(el(`<div class="move">${moves[i] || ''}</div>`));
      ml.appendChild(el(`<div class="move">${moves[i + 1] || ''}</div>`));
    }
  }
  panel.appendChild(ml);
  setTimeout(() => {
    panel.scrollTop = panel.scrollHeight;
  }, 0);
  return panel;
}

// =========================================================
// STOCKFISH 19 LIVE COACH WORKSPACE
// =========================================================
function ensureCoachGame() {
  if (!State.coachGame) {
    State.coachGame = new Chess();
    State.coachHistory = [];
    State.coachLastGrade = null;
    State.coachPendingBlunder = null;
    State.coachFenInput = State.coachGame.fen();
  }
}

function startNewCoachSession(startFen = null) {
  stockfishClient.stop();
  State.coachGame = startFen ? new Chess(startFen) : new Chess();
  State.coachHistory = [];
  State.coachLastGrade = null;
  State.coachPendingBlunder = null;
  State.coachThinking = false;
  State.selectedSquare = null;
  State.legalDests = [];
  State.lastMove = null;
  State.coachFenError = null;
  State.coachFenInput = State.coachGame.fen();
  if (State.coachMode !== 'sandbox' && State.coachPlayerColor === 'b' && State.coachGame.turn() === 'w') {
    setTimeout(() => coachEngineReply(), 200);
  }
  render();
}

async function coachEngineReply() {
  const g = State.coachGame;
  if (!g || g.game_over() || State.coachPendingBlunder) return;
  if (State.coachMode === 'sandbox') return;
  if (g.turn() === State.coachPlayerColor) return;

  State.coachThinking = true;
  render();
  const uci = await stockfishClient.playMove(g.fen(), State.coachEngineLevel);
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
    State.coachHistory.push(m.san);
    State.lastMove = { from: m.from, to: m.to };
  }
  render();
}

async function handleCoachHumanMove(moveObj) {
  const g = State.coachGame;
  if (!g) return;
  const playedUci = moveObj.from + moveObj.to + (moveObj.promotion || '');
  const prevSnap = State.sfSnapshot?.fen && State.sfSnapshot.fen !== g.fen() ? State.sfSnapshot : null;
  const topLine = prevSnap?.lines?.[0] || null;
  const afterFen = g.fen();

  State.coachHistory.push(moveObj.san);
  State.coachFenInput = afterFen;
  State.coachPendingBlunder = null;

  render();

  // Grade played move via Stockfish 19 post-move analysis
  const nextSnap = await triggerLiveAnalysis(afterFen, { depth: 12, multiPv: 3 });
  if (prevSnap && topLine && nextSnap && State.page === 'coach') {
    const grade = gradePlayedMove({
      prevWhiteCp: prevSnap.whiteCp,
      prevWhiteMate: prevSnap.whiteMate,
      nextWhiteCp: nextSnap.whiteCp,
      nextWhiteMate: nextSnap.whiteMate,
      moverColor: moveObj.color,
      playedUci,
      bestUci: topLine.uci,
      bestSan: topLine.bestMoveSan,
    });
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

  if (!g.game_over() && State.coachMode !== 'sandbox' && g.turn() !== State.coachPlayerColor) {
    coachEngineReply();
  }
}

function renderCoach() {
  ensureCoachGame();
  const g = State.coachGame;
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  // Top Header Bar
  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.55rem;flex-wrap:wrap">
      <h1>${iconSvg('coach', 18)} Stockfish 19 Coach</h1>
      <div class="pill-switch" id="coachModes">
        <button type="button" data-mode="guided" class="${State.coachMode === 'guided' ? 'active' : ''}">Guided Sparring</button>
        <button type="button" data-mode="sandbox" class="${State.coachMode === 'sandbox' ? 'active' : ''}">FEN Sandbox</button>
        <button type="button" data-mode="blunder-check" class="${State.coachMode === 'blunder-check' ? 'active' : ''}">Blunder Check</button>
      </div>
    </div>
    <div class="view-bar-meta">
      <select id="coachLvl" aria-label="Coach sparring strength" style="width:auto;padding:.24rem .5rem;font-size:.84rem">
        ${[1, 2, 3, 4, 5]
          .map((n) => {
            const cfg = resolveEngineLevelConfig(n);
            return `<option value="${n}" ${State.coachEngineLevel === n ? 'selected' : ''}>Lvl ${n}: ${cfg.label}</option>`;
          })
          .join('')}
      </select>
      <div class="pill-switch" id="coachSide">
        <button type="button" data-c="w" class="${State.coachPlayerColor === 'w' ? 'active' : ''}">White</button>
        <button type="button" data-c="b" class="${State.coachPlayerColor === 'b' ? 'active' : ''}">Black</button>
      </div>
      <button type="button" class="btn gold sm" id="coachNew">${iconSvg('refresh', 14)} New</button>
    </div>
  </div>`);

  bar.querySelectorAll('#coachModes button').forEach((b) => {
    b.onclick = () => {
      State.coachMode = b.dataset.mode;
      if (State.coachMode !== 'sandbox' && State.coachGame.game_over()) {
        startNewCoachSession();
      } else {
        State.coachPendingBlunder = null;
        render();
      }
    };
  });
  bar.querySelector('#coachLvl').onchange = (e) => {
    State.coachEngineLevel = Number(e.target.value);
  };
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
    !g.game_over() &&
    !State.promotionPending &&
    !State.coachThinking &&
    !State.coachPendingBlunder &&
    (State.coachMode === 'sandbox' || g.turn() === State.coachPlayerColor);

  const boardCol = document.createElement('div');
  boardCol.className = 'board-column';
  const stage = buildBoardStage(g, {
    flip: State.flipBoard,
    lastMove: State.lastMove,
    interactive: canMoveNow,
    onMove: (m) => handleCoachHumanMove(m),
    showEvalBar: true,
    showArrows: true,
  });
  State.dom.evalBar = stage.evalBar;
  State.dom.arrowsSvg = stage.arrowsSvg;
  boardCol.appendChild(stage.frame);

  const ctrl = document.createElement('div');
  ctrl.className = 'board-controls';
  const undoBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('prev', 14)} Undo</button>`);
  undoBtn.disabled = State.coachHistory.length === 0 || State.coachThinking;
  undoBtn.onclick = () => {
    g.undo();
    State.coachHistory.pop();
    if (State.coachMode !== 'sandbox' && !State.coachPendingBlunder && g.turn() !== State.coachPlayerColor && State.coachHistory.length > 0) {
      g.undo();
      State.coachHistory.pop();
    }
    State.coachPendingBlunder = null;
    State.coachLastGrade = null;
    State.coachFenInput = g.fen();
    State.lastMove = lastMoveSquares(g);
    render();
  };
  const flipBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 14)} Flip</button>`);
  flipBtn.onclick = () => {
    State.flipBoard = !State.flipBoard;
    render();
  };
  ctrl.appendChild(undoBtn);
  ctrl.appendChild(flipBtn);
  ctrl.appendChild(makeMaxBoardButton());
  boardCol.appendChild(ctrl);
  layout.appendChild(boardCol);

  // Sidebar: Status + FEN Sandbox (in sandbox mode) + Live Stockfish Panel + Moves
  const side = document.createElement('div');
  side.className = 'play-sidebar';

  if (State.coachPendingBlunder) {
    const alert = el(`<div class="puzzle-feedback wrong">
      <div><strong>${State.coachPendingBlunder.label} (${State.coachPendingBlunder.symbol})</strong> — ${escapeHtml(State.coachPendingBlunder.summary)}</div>
      <div style="display:flex;gap:.4rem;margin-top:.4rem">
        <button type="button" class="btn sm" id="retryBlunder">${iconSvg('refresh', 13)} Retry Move</button>
        <button type="button" class="btn ghost sm" id="playAnyway">Play On Anyway</button>
      </div>
    </div>`);
    alert.querySelector('#retryBlunder').onclick = () => {
      g.undo();
      State.coachHistory.pop();
      State.coachPendingBlunder = null;
      State.coachLastGrade = null;
      State.lastMove = lastMoveSquares(g);
      render();
    };
    alert.querySelector('#playAnyway').onclick = () => {
      State.coachPendingBlunder = null;
      coachEngineReply();
    };
    side.appendChild(alert);
  } else if (g.game_over()) {
    const outcome = g.in_checkmate()
      ? `Checkmate! ${g.turn() === 'w' ? 'Black' : 'White'} wins.`
      : 'Draw reached (stalemate / insufficient material / repetition).';
    side.appendChild(el(`<div class="status-banner">${outcome}</div>`));
  } else if (State.coachThinking) {
    side.appendChild(el(`<div class="status-banner">Stockfish 19 is replying... <span class="spinner"></span></div>`));
  } else {
    const modeNote =
      State.coachMode === 'sandbox'
        ? `${g.turn() === 'w' ? 'White' : 'Black'} to move — click any Stockfish chip to step forward`
        : `${g.turn() === State.coachPlayerColor ? 'Your turn' : 'Engine turn'} — live MultiPV 3 & move grading active`;
    side.appendChild(el(`<div class="status-banner">${modeNote}</div>`));
  }

  if (State.coachMode === 'sandbox') {
    const fenBox = document.createElement('div');
    fenBox.className = 'card';
    fenBox.style.padding = '.55rem .7rem';
    fenBox.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:.4rem;margin-bottom:.35rem">
        <strong style="font-size:.9rem">Position Sandbox / FEN Lab</strong>
        <select id="presetSel" style="width:auto;padding:.2rem .4rem;font-size:.82rem">
          <option value="">Load Study Preset...</option>
          ${SANDBOX_PRESETS.map((p, idx) => `<option value="${idx}">${escapeHtml(p.label)}</option>`).join('')}
        </select>
      </div>
      <div class="fen-bar">
        <input id="fenIn" value="${escapeHtml(g.fen())}" aria-label="FEN string" />
        <button type="button" class="btn sm" id="loadFen">Load FEN</button>
      </div>
      ${State.coachFenError ? `<div class="small" style="color:var(--burgundy);margin-top:.25rem">${escapeHtml(State.coachFenError)}</div>` : ''}
    `;
    fenBox.querySelector('#presetSel').onchange = (e) => {
      if (e.target.value === '') return;
      const preset = SANDBOX_PRESETS[Number(e.target.value)];
      if (preset) startNewCoachSession(preset.fen);
    };
    fenBox.querySelector('#loadFen').onclick = () => {
      const candidate = fenBox.querySelector('#fenIn').value.trim();
      if (!isStockfishSafeFen(candidate, Chess)) {
        State.coachFenError = 'FEN is invalid or unsupported (must have both kings, legal pawn ranks, and opponent not already in check).';
        render();
        return;
      }
      startNewCoachSession(candidate);
    };
    side.appendChild(fenBox);
  }

  const sfPanel = createStockfishPanel({
    title: 'Stockfish 19 MultiPV 3',
    showArrows: State.showCoachArrows,
    onToggleArrows: () => {
      State.showCoachArrows = !State.showCoachArrows;
      applyStockfishDom(State.sfSnapshot, State.coachLastGrade);
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
        handleCoachHumanMove(m);
      }
    },
    onRetryMove: () => {
      if (State.coachHistory.length === 0) return;
      g.undo();
      State.coachHistory.pop();
      if (State.coachMode !== 'sandbox' && g.turn() !== State.coachPlayerColor && State.coachHistory.length > 0) {
        g.undo();
        State.coachHistory.pop();
      }
      State.coachPendingBlunder = null;
      State.coachLastGrade = null;
      State.lastMove = lastMoveSquares(g);
      render();
    },
  });
  State.dom.sfPanel = sfPanel;
  side.appendChild(sfPanel);
  side.appendChild(buildMovesPanel(State.coachHistory));

  layout.appendChild(side);
  wrap.appendChild(layout);

  triggerLiveAnalysis(g.fen(), { depth: 14, multiPv: 3, grade: State.coachLastGrade });
  return wrap;
}

// =========================================================
// PUZZLES CATALOG (310), SOLVER & QUIZ SPRINT (80)
// =========================================================
function openPuzzleInSolver(puzzle) {
  State.activePuzzle = puzzle;
  State.puzzleView = 'solver';
  State.page = 'puzzles';
  State.puzzlePly = 0;
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

function getFilteredPuzzles() {
  return filterPuzzles(PUZZLES, {
    category: State.puzzleCategory,
    difficulty: State.puzzleDifficulty,
    query: State.puzzleQuery,
    unsolvedOnly: State.puzzleUnsolvedOnly,
    solvedSet: solvedPuzzleSet(),
  });
}

function renderPuzzles() {
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  const solvedCount = solvedPuzzleSet().size;
  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.55rem;flex-wrap:wrap">
      <h1>${iconSvg('puzzles', 18)} Puzzles &amp; Quizzes</h1>
      <div class="pill-switch" id="pzModeSwitch">
        <button type="button" data-v="catalog" class="${State.puzzleView === 'catalog' ? 'active' : ''}">Catalog (${PUZZLES.length})</button>
        <button type="button" data-v="solver" class="${State.puzzleView === 'solver' ? 'active' : ''}">Active Solver</button>
        <button type="button" data-v="quiz" class="${State.puzzleView === 'quiz' ? 'active' : ''}">Quiz Sprint (${QUIZZES.length})</button>
      </div>
    </div>
    <div class="view-bar-meta">
      <span class="badge elo tabular-nums">${solvedCount}/${PUZZLES.length} Solved</span>
      <span class="badge tabular-nums">Streak ${State.training.streak || 0}</span>
    </div>
  </div>`);

  bar.querySelectorAll('#pzModeSwitch button').forEach((b) => {
    b.onclick = () => {
      stockfishClient.stop();
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
  if (State.puzzleView === 'solver') {
    wrap.appendChild(renderPuzzleSolver());
    return wrap;
  }
  wrap.appendChild(renderPuzzleCatalog());
  return wrap;
}

function renderPuzzleCatalog() {
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
        return `<button type="button" class="toggle-btn ${State.puzzleCategory === cat ? 'active' : ''}" data-cat="${cat}">${cat} <span class="tabular-nums">(${count})</span></button>`;
      }).join('')}
    </div>
    <div style="display:flex;gap:.35rem;margin-left:auto;flex-wrap:wrap;align-items:center">
      <input id="pzSearch" placeholder="Search theme..." value="${escapeHtml(State.puzzleQuery)}" />
      <select id="pzDiff" aria-label="Filter difficulty">
        ${['All', 'Easy', 'Medium', 'Advanced', 'Expert']
          .map((d) => `<option value="${d}" ${State.puzzleDifficulty === d ? 'selected' : ''}>${d}</option>`)
          .join('')}
      </select>
      <label style="display:inline-flex;align-items:center;gap:.25rem;margin:0;text-transform:none;font-size:.84rem;cursor:pointer">
        <input type="checkbox" id="pzUnsolved" style="width:auto" ${State.puzzleUnsolvedOnly ? 'checked' : ''} /> Unsolved
      </label>
      <button type="button" class="btn gold sm" id="pzRandom">${iconSvg('spark', 13)} Random</button>
    </div>
  </div>`);

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
  box.appendChild(filterBar);

  const grid = document.createElement('div');
  grid.className = 'puzzle-grid';
  if (paged.items.length === 0) {
    grid.innerHTML = `<div class="card" style="grid-column:1/-1"><p class="italic">No puzzles match those filters.</p></div>`;
  } else {
    paged.items.forEach((p) => {
      const isSolved = solved.has(p.id);
      const plies = Math.ceil((p.moves?.length || 1) / 2);
      const tile = el(`<button type="button" class="puzzle-tile ${isSolved ? 'solved' : ''}">
        <div class="puzzle-tile-top">
          <span class="tag ${p.category === 'Tactics' ? 'burg' : p.category === 'Endgame' ? 'green' : 'gold'}">${escapeHtml(p.category)}</span>
          <span class="mono tabular-nums" style="font-size:.74rem;color:var(--ink-soft)">${p.rating} · ${plies}m</span>
        </div>
        <h4>${escapeHtml(p.theme)}</h4>
        <p>${escapeHtml(p.prompt)}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto">
          <span class="small">${escapeHtml(p.difficulty)} · ${escapeHtml(p.sideToMove)}</span>
          ${isSolved ? '<span class="solved-badge">Solved</span>' : '<span class="small" style="color:var(--gold)">Solve →</span>'}
        </div>
      </button>`);
      tile.onclick = () => openPuzzleInSolver(p);
      grid.appendChild(tile);
    });
  }
  box.appendChild(grid);

  const pager = el(`<div class="pager-bar">
    <span class="small tabular-nums">Showing ${paged.totalItems === 0 ? 0 : paged.startIndex + 1}–${paged.endIndex} of ${paged.totalItems} puzzles</span>
    <div style="display:flex;gap:.35rem;align-items:center">
      <button type="button" class="btn ghost sm" id="pgPrev" ${paged.page <= 1 ? 'disabled' : ''}>${iconSvg('prev', 13)} Prev</button>
      <span class="mono tabular-nums" style="font-size:.8rem">Page ${paged.page}/${paged.totalPages}</span>
      <button type="button" class="btn ghost sm" id="pgNext" ${paged.page >= paged.totalPages ? 'disabled' : ''}>Next ${iconSvg('next', 13)}</button>
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

function renderPuzzleSolver() {
  const ctx = State.activePuzzle || PUZZLES[0];
  if (!State.game || State.activePuzzle?.id !== ctx.id) {
    State.game = new Chess(ctx.fen);
    State.puzzlePly = 0;
    State.puzzleFeedback = null;
    State.flipBoard = ctx.sideToMove === 'Black';
  }
  const g = State.game;
  const totalPlies = ctx.moves.length;
  const solvedNow = State.puzzlePly >= totalPlies;

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
    });

    if (!res.correct) {
      State.puzzleFeedback = { kind: 'wrong', text: res.statusMessage };
      State.lastMove = null;
      recordPuzzleResult(ctx, false, false);
      render();
      return;
    }

    // First advance to user's played move cleanly so user sees their move right away
    g.move(res.playedSan);
    State.lastMove = { from: playedMove.from, to: playedMove.to };

    if (res.finished) {
      State.puzzlePly = ctx.moves.length;
      State.puzzleFeedback = { kind: 'correct', text: `${res.statusMessage} ${ctx.explanation}` };
      recordPuzzleResult(ctx, true, false);
      render();
      return;
    }

    // Multi-ply sequence: auto-play opponent forced reply after 240ms
    State.puzzlePly = res.nextPly;
    State.puzzleAutoReplying = true;
    State.puzzleFeedback = { kind: 'hint', text: `Strong find (${res.playedSan})! Opponent replies ${res.oppAutoMove}...` };
    render();
    setTimeout(() => {
      if (State.page !== 'puzzles' || State.activePuzzle?.id !== ctx.id) return;
      const oppObj = g.move(res.oppAutoMove);
      if (oppObj) State.lastMove = { from: oppObj.from, to: oppObj.to };
      State.puzzleAutoReplying = false;
      State.puzzleFeedback = { kind: 'hint', text: `Opponent played ${res.oppAutoMove}. Find the next winning move!` };
      render();
    }, 240);
  };
  const stage = buildBoardStage(g, {
    flip: State.flipBoard,
    lastMove: State.lastMove,
    interactive: !solvedNow && !State.puzzleAutoReplying && !State.promotionPending,
    onMove: onPuzzleMove,
    showEvalBar: State.showPuzzleStockfish,
    showArrows: State.showPuzzleStockfish,
  });

  State.dom.evalBar = stage.evalBar;
  State.dom.arrowsSvg = stage.arrowsSvg;
  boardCol.appendChild(stage.frame);

  const ctrl = document.createElement('div');
  ctrl.className = 'board-controls';
  const backCat = el(`<button type="button" class="btn ghost sm">${iconSvg('prev', 14)} Catalog</button>`);
  backCat.onclick = () => {
    stockfishClient.stop();
    State.puzzleView = 'catalog';
    render();
  };
  const hintBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('hint', 14)} Hint</button>`);
  hintBtn.disabled = solvedNow || State.puzzleAutoReplying;
  hintBtn.onclick = () => {
    const nextSan = ctx.moves[State.puzzlePly];
    const tmp = new Chess(g.fen());
    const m = tmp.move(nextSan);
    if (m) {
      State.selectedSquare = m.from;
      State.legalDests = [m.to];
      State.puzzleFeedback = { kind: 'hint', text: `Look at the ${m.piece.toUpperCase()} on ${m.from} — calculate forcing checks and targets.` };
    }
    render();
  };
  const solBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('check', 14)} Solution</button>`);
  solBtn.disabled = State.puzzleAutoReplying;
  solBtn.onclick = () => {
    const remaining = ctx.moves.slice(State.puzzlePly);
    remaining.forEach((san) => g.move(san));
    State.puzzlePly = ctx.moves.length;
    State.lastMove = lastMoveSquares(g);
    State.puzzleFeedback = { kind: 'correct', text: `Solution (${ctx.moves.join(' ')}) — ${ctx.explanation}` };
    render();
  };
  const resetBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('refresh', 14)} Retry</button>`);
  resetBtn.onclick = () => openPuzzleInSolver(ctx);
  const nextBtn = el(`<button type="button" class="btn gold sm">Next ${iconSvg('next', 14)}</button>`);
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

  const sfToggle = el(`<div style="display:flex;justify-content:space-between;align-items:center;gap:.4rem">
    <span class="tag gold">${escapeHtml(ctx.category)} · ${escapeHtml(ctx.difficulty)} · <span class="tabular-nums">${ctx.rating}</span></span>
    <button type="button" class="toggle-btn ${State.showPuzzleStockfish ? 'active' : ''}" id="pzSfBtn">${iconSvg('coach', 14)} Stockfish 19: ${State.showPuzzleStockfish ? 'On' : 'Off'}</button>
  </div>`);
  sfToggle.querySelector('#pzSfBtn').onclick = () => {
    State.showPuzzleStockfish = !State.showPuzzleStockfish;
    if (!State.showPuzzleStockfish) stockfishClient.stop();
    render();
  };
  side.appendChild(sfToggle);

  const promptCard = el(`<div class="puzzle-prompt">
    <div class="puzzle-prompt-head">
      <span class="turn-flag ${g.turn() === 'w' ? 'white' : ''}">${g.turn() === 'w' ? 'White to move' : 'Black to move'}</span>
      <span class="mono tabular-nums" style="font-size:.76rem;color:var(--ink-soft)">Step ${Math.min(Math.floor(State.puzzlePly / 2) + 1, Math.ceil(totalPlies / 2))}/${Math.ceil(totalPlies / 2)}</span>
    </div>
    <h4>${escapeHtml(ctx.theme)}</h4>
    <p style="margin:0;color:var(--ink-soft)">${escapeHtml(ctx.prompt)}</p>
  </div>`);
  side.appendChild(promptCard);

  if (State.puzzleFeedback) {
    side.appendChild(el(`<div class="puzzle-feedback ${State.puzzleFeedback.kind}">${escapeHtml(State.puzzleFeedback.text)}</div>`));
  }

  if (State.showPuzzleStockfish) {
    const sfPanel = createStockfishPanel({
      title: 'Stockfish 19 Verification',
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

  layout.appendChild(side);
  return layout;
}

function renderQuizSprint() {
  const box = document.createElement('div');
  box.style.cssText = 'flex:1;min-height:0;display:flex;flex-direction:column;gap:.5rem;overflow:hidden';

  const topControls = el(`<div class="filter-bar">
    <div class="toggle-row" id="qzCatTabs">
      ${PUZZLE_CATEGORIES.map((cat) => `<button type="button" class="toggle-btn ${State.quizCategory === cat ? 'active' : ''}" data-cat="${cat}">${cat}</button>`).join('')}
    </div>
    <div style="display:flex;gap:.4rem;margin-left:auto;align-items:center">
      <button type="button" class="toggle-btn ${State.showQuizStockfish ? 'active' : ''}" id="qzSfBtn">${iconSvg('coach', 14)} Verify w/ Stockfish</button>
      <button type="button" class="btn gold sm" id="qzNew">${iconSvg('refresh', 13)} New 10-Quiz Sprint</button>
    </div>
  </div>`);

  topControls.querySelectorAll('#qzCatTabs button').forEach((b) => {
    b.onclick = () => {
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
      <h2>${iconSvg('trophy', 22)} Quiz Sprint Complete!</h2>
      <div style="display:flex;justify-content:center;gap:2rem;margin:.8rem 0">
        <div><strong class="mono tabular-nums" style="font-size:2rem;color:var(--forest)">${summary.correct}/${summary.total}</strong><div class="small">Score</div></div>
        <div><strong class="mono tabular-nums" style="font-size:2rem;color:var(--gold)">${summary.accuracy}%</strong><div class="small">Accuracy</div></div>
      </div>
      <div style="display:flex;gap:.45rem;justify-content:center;flex-wrap:wrap;margin:.6rem 0">
        ${Object.entries(summary.byCategory)
          .map(([k, v]) => `<span class="tag">${escapeHtml(k)}: <span class="tabular-nums">${v.correct}/${v.total}</span></span>`)
          .join('')}
      </div>
      <button type="button" class="btn gold" id="restartQz" style="margin-top:.6rem">Start Fresh 10-Quiz Sprint</button>
    </div>`);
    card.querySelector('#restartQz').onclick = () => {
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

  const q = session.items[session.currentIndex];
  const g = new Chess(q.fen);
  const layout = document.createElement('div');
  layout.className = `play-layout${State.boardMaximized ? ' board-maximized' : ''}`;

  const boardCol = document.createElement('div');
  boardCol.className = 'board-column no-controls';
  const stage = buildBoardStage(g, {
    flip: q.sideToMove === 'Black',
    interactive: false,
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
      <span class="turn-flag ${q.sideToMove === 'White' ? 'white' : ''}">${q.sideToMove} to move</span>
      <span class="tag">${escapeHtml(q.category)} · ${escapeHtml(q.difficulty)}</span>
      <span class="mono tabular-nums" style="font-size:.78rem">Q ${session.currentIndex + 1}/${session.items.length}</span>
    </div>
    <h4>${escapeHtml(q.theme)}</h4>
    <p style="margin:0;color:var(--ink)">${escapeHtml(q.question)}</p>
  </div>`);
  side.appendChild(qHeader);

  const optsWrap = document.createElement('div');
  optsWrap.className = 'quiz-options';
  const answered = session.lastResult !== null;
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((optText, idx) => {
    let cls = 'quiz-opt';
    if (answered) {
      if (idx === q.correctIndex) cls += ' correct';
      else if (idx === session.lastResult.chosenIndex) cls += ' wrong';
    }
    const btn = el(`<button type="button" class="${cls}" ${answered ? 'disabled' : ''}>
      <span class="quiz-letter">${letters[idx]}</span>
      <span>${escapeHtml(optText)}</span>
    </button>`);
    btn.onclick = () => {
      State.quizSession = submitQuizAnswer(State.quizSession, idx);
      render();
    };
    optsWrap.appendChild(btn);
  });
  side.appendChild(optsWrap);

  if (answered) {
    const res = session.lastResult;
    const fb = el(`<div class="puzzle-feedback ${res.isCorrect ? 'correct' : 'wrong'}">
      <div><strong>${res.isCorrect ? 'Correct!' : `Not quite — best is ${res.recommendedSan}.`}</strong> ${escapeHtml(q.explanation)}</div>
      <div style="margin-top:.4rem;display:flex;justify-content:flex-end">
        <button type="button" class="btn gold sm" id="qzNext">${session.currentIndex + 1 >= session.items.length ? 'Finish Sprint' : 'Next Question'} ${iconSvg('next', 13)}</button>
      </div>
    </div>`);
    fb.querySelector('#qzNext').onclick = () => {
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
      title: 'Stockfish 19 Verification',
      showArrows: State.showCoachArrows,
      onToggleArrows: () => {
        State.showCoachArrows = !State.showCoachArrows;
        applyStockfishDom(State.sfSnapshot);
      },
    });
    State.dom.sfPanel = sfPanel;
    side.appendChild(sfPanel);
    triggerLiveAnalysis(q.fen, { depth: 11, multiPv: 3 });
  }

  layout.appendChild(side);
  box.appendChild(layout);
  return box;
}

// =========================================================
// MASTER-DETAIL STUDY RENDERER (Openings, Traps, Strategy)
// =========================================================
function renderOpenings() {
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  const isTraps = State.openingsTab === 'traps';
  const listAll = isTraps ? TRAPS : OPENINGS;
  const query = State.openingsSearch.trim().toLowerCase();
  const filtered = query
    ? listAll.filter((x) => `${x.name} ${x.eco || ''} ${x.level} ${x.summary}`.toLowerCase().includes(query))
    : listAll;

  const activeId = isTraps ? State.selectedTrapId : State.selectedOpeningId;
  const active = filtered.find((x) => x.id === activeId) || listAll.find((x) => x.id === activeId) || listAll[0];
  if (isTraps) State.selectedTrapId = active.id;
  else State.selectedOpeningId = active.id;

  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.55rem;flex-wrap:wrap">
      <h1>${iconSvg('openings', 18)} Openings &amp; Traps</h1>
      <div class="pill-switch" id="opTabSwitch">
        <button type="button" data-t="openings" class="${!isTraps ? 'active' : ''}">Repertoires (${OPENINGS.length})</button>
        <button type="button" data-t="traps" class="${isTraps ? 'active' : ''}">Opening Traps (${TRAPS.length})</button>
      </div>
    </div>
    <div class="view-bar-meta">
      <div class="pill-switch" id="opModeSwitch">
        <button type="button" data-m="learn" class="${State.studyMode === 'learn' ? 'active' : ''}">Learn</button>
        <button type="button" data-m="practice" class="${State.studyMode === 'practice' ? 'active' : ''}">Practice Drill</button>
      </div>
      <button type="button" class="toggle-btn ${State.showStudyStockfish ? 'active' : ''}" id="opSfToggle">${iconSvg('coach', 14)} Stockfish 19: ${State.showStudyStockfish ? 'On' : 'Off'}</button>
      <button type="button" class="btn ghost sm" id="opSidebarToggle" title="Toggle lesson sidebar">${iconSvg('sidebar', 14)} <span>Lessons</span></button>
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
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  const active =
    MIDDLEGAME_LESSONS.find((m) => m.id === State.selectedStrategyId) || MIDDLEGAME_LESSONS[0];
  State.selectedStrategyId = active.id;

  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.55rem;flex-wrap:wrap">
      <h1>${iconSvg('strategy', 18)} Middlegame &amp; Strategy (${MIDDLEGAME_LESSONS.length})</h1>
      <div class="pill-switch" id="stModeSwitch">
        <button type="button" data-m="learn" class="${State.studyMode === 'learn' ? 'active' : ''}">Learn</button>
        <button type="button" data-m="practice" class="${State.studyMode === 'practice' ? 'active' : ''}">Practice Drill</button>
      </div>
    </div>
    <div class="view-bar-meta">
      <button type="button" class="toggle-btn ${State.showStudyStockfish ? 'active' : ''}" id="stSfToggle">${iconSvg('coach', 14)} Stockfish 19: ${State.showStudyStockfish ? 'On' : 'Off'}</button>
      <button type="button" class="btn gold sm" id="stPuzzles">${iconSvg('puzzles', 13)} Strategy Puzzles (55)</button>
      <button type="button" class="btn ghost sm" id="stSidebarToggle" title="Toggle lesson sidebar">${iconSvg('sidebar', 14)} <span>Lessons</span></button>
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

function buildLineStudyWorkspace({ kind, items, active, searchValue = null, onSearch = null, onSelect }) {
  const split = document.createElement('div');
  split.className = `master-detail${State.studySidebarCollapsed ? ' sidebar-collapsed' : ''}${State.mobileStudyListOpen ? ' mobile-list-open' : ''}`;

  const progressMap = State.training[kind] || {};
  const sidebar = document.createElement('aside');
  sidebar.className = 'master-sidebar';
  if (onSearch) {
    const fRow = el(`<div class="master-filter"><input id="studySearchInput" placeholder="Filter lines or ECO..." value="${escapeHtml(searchValue || '')}" /></div>`);
    fRow.querySelector('input').oninput = (e) => onSearch(e.target.value);
    sidebar.appendChild(fRow);
  }

  const list = document.createElement('div');
  list.className = 'master-list';
  items.forEach((item) => {
    const pr = progressMap[item.id] || {};
    const total = Math.max(1, (item.line || []).length);
    const pct = Math.min(100, Math.round(((pr.step || 0) / total) * 100));
    const elItem = el(`<div class="list-item ${item.id === active.id ? 'active' : ''}">
      <div style="display:flex;align-items:center;gap:.5rem;min-width:0;flex:1">
        <div class="lesson-progress ${pr.complete ? 'complete' : ''}" style="--progress:${pct}%"><b>${pct}%</b></div>
        <div class="meta">
          <h4>${escapeHtml(item.name)}</h4>
          <span class="small">${escapeHtml(item.eco || item.category || '')} ${item.level ? `· ${escapeHtml(item.level)}` : ''}</span>
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
    <select aria-label="Select lesson">
      ${items.map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === active.id ? 'selected' : ''}>${escapeHtml(item.name)}</option>`).join('')}
    </select>
    <button type="button" class="toggle-btn ${State.mobileStudyListOpen ? 'active' : ''}" id="mobListBtn">${iconSvg('sidebar', 13)} List</button>
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
  const line = active.line || [];
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
    onMove: (playedMove) => {
      if (!expectedStep) return;
      const cleanExp = expectedStep.move.replace(/[+#?!]+$/g, '');
      const cleanGot = playedMove.san.replace(/[+#?!]+$/g, '');
      if (cleanExp === cleanGot) {
        State.studyStep += 1;
        recordStudyProgress(kind, active, State.studyStep, total);
        if (State.studyStep >= total) {
          recordPracticeMastery(kind, active);
          State.practiceFeedback = { kind: 'correct', text: 'Line mastered from memory!' };
        } else {
          State.practiceFeedback = { kind: 'correct', text: `${playedMove.san} — ${expectedStep.text}` };
        }
      } else {
        g.undo();
        State.lastMove = lastMoveSquares(g);
        State.practiceFeedback = { kind: 'wrong', text: `Try again — look for ${expectedStep.move[0] === 'O' ? 'castling' : 'the main line move'} instead of ${playedMove.san}.` };
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
    const rst = el(`<button type="button" class="btn ghost sm">${iconSvg('refresh', 13)} Restart Drill</button>`);
    rst.onclick = () => {
      State.studyStep = 0;
      State.practiceFeedback = null;
      render();
    };
    const peek = el(`<button type="button" class="btn gold sm">${iconSvg('hint', 13)} Reveal Move</button>`);
    peek.disabled = practiceComplete;
    peek.onclick = () => {
      if (!expectedStep) return;
      State.studyStep += 1;
      recordStudyProgress(kind, active, State.studyStep, total);
      State.practiceFeedback = { kind: 'hint', text: `Played ${expectedStep.move}: ${expectedStep.text}` };
      render();
    };
    const flp = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 13)} Flip</button>`);
    flp.onclick = () => {
      State.flipBoard = !State.flipBoard;
      render();
    };
    ctrl.appendChild(rst);
    ctrl.appendChild(peek);
    ctrl.appendChild(flp);
    ctrl.appendChild(makeMaxBoardButton());
  } else {
    const bFirst = el(`<button type="button" class="btn ghost sm" title="Start">${iconSvg('first', 13)}</button>`);
    const bPrev = el(`<button type="button" class="btn ghost sm" title="Previous">${iconSvg('prev', 13)} Back</button>`);
    const bNext = el(`<button type="button" class="btn gold sm" title="Next">Next ${iconSvg('next', 13)}</button>`);
    const bLast = el(`<button type="button" class="btn ghost sm" title="End">${iconSvg('last', 13)}</button>`);
    const bFlip = el(`<button type="button" class="btn ghost sm" title="Flip">${iconSvg('flip', 13)}</button>`);
    bFirst.disabled = step === 0;
    bPrev.disabled = step === 0;
    bNext.disabled = step >= total;
    bLast.disabled = step >= total;
    bFirst.onclick = () => {
      State.studyStep = 0;
      render();
    };
    bPrev.onclick = () => {
      State.studyStep = Math.max(0, step - 1);
      render();
    };
    bNext.onclick = () => {
      State.studyStep = Math.min(total, step + 1);
      recordStudyProgress(kind, active, State.studyStep, total);
      render();
    };
    bLast.onclick = () => {
      State.studyStep = total;
      recordStudyProgress(kind, active, total, total);
      render();
    };
    bFlip.onclick = () => {
      State.flipBoard = !State.flipBoard;
      render();
    };
    ctrl.appendChild(bFirst);
    ctrl.appendChild(bPrev);
    ctrl.appendChild(bNext);
    ctrl.appendChild(bLast);
    ctrl.appendChild(bFlip);
    ctrl.appendChild(makeMaxBoardButton());
  }
  boardCol.appendChild(ctrl);
  layout.appendChild(boardCol);

  const side = document.createElement('div');
  side.className = 'play-sidebar';

  if (isPractice) {
    const pct = total ? Math.round((step / total) * 100) : 0;
    side.appendChild(el(`<div class="practice-prompt ${practiceComplete ? 'complete' : ''}">
      <div class="practice-progress"><span style="width:${pct}%"></span></div>
      <h4>${practiceComplete ? 'Line Mastered!' : `Play Move ${Math.floor(step / 2) + 1} (${g.turn() === 'w' ? 'White' : 'Black'})`}</h4>
      <p class="small" style="margin:0">${escapeHtml(active.summary)}</p>
    </div>`));
    if (State.practiceFeedback) {
      side.appendChild(el(`<div class="puzzle-feedback ${State.practiceFeedback.kind}">${escapeHtml(State.practiceFeedback.text)}</div>`));
    }
  } else {
    const curMoveTxt = step === 0 ? 'Starting Position' : `${Math.ceil(step / 2)}${step % 2 === 1 ? '.' : '...'} ${line[step - 1].move}`;
    const bodyTxt = step === 0 ? active.summary : line[step - 1].text;
    side.appendChild(el(`<div class="tutorial-text">
      <div class="step-counter tabular-nums">${escapeHtml(active.name)} · Move ${step}/${total}</div>
      <div class="move-played">${escapeHtml(curMoveTxt)}</div>
      <p>${escapeHtml(bodyTxt)}</p>
      ${active.keyIdeas ? `<div class="key-ideas">${active.keyIdeas.map((k) => `<span class="idea-chip">${escapeHtml(k)}</span>`).join('')}</div>` : ''}
    </div>`));
  }

  if (State.showStudyStockfish) {
    const sfPanel = createStockfishPanel({
      title: 'Stockfish 19 Live Analysis',
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

  side.appendChild(buildMovesPanel(playedMoves));
  layout.appendChild(side);
  detail.appendChild(layout);
  split.appendChild(detail);
  return split;
}

// =========================================================
// ENDGAMES MASTER-DETAIL + PLAYABLE SPARRING
// =========================================================
function renderEndgames() {
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  const active = ENDGAMES.find((e) => e.id === State.selectedEndgameId) || ENDGAMES[0];
  State.selectedEndgameId = active.id;

  if (!State.game || State.studyContext?.id !== active.id) {
    State.studyContext = active;
    State.game = new Chess(active.fen);
    State.lastMove = null;
  }
  const g = State.game;

  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.55rem;flex-wrap:wrap">
      <h1>${iconSvg('endgames', 18)} Endgames (${ENDGAMES.length})</h1>
      <button type="button" class="toggle-btn ${State.endgameSparring ? 'active' : ''}" id="egSparBtn">${iconSvg('play', 14)} Spar vs Stockfish 19: ${State.endgameSparring ? 'On' : 'Free Play'}</button>
    </div>
    <div class="view-bar-meta">
      <button type="button" class="toggle-btn ${State.showStudyStockfish ? 'active' : ''}" id="egSfToggle">${iconSvg('coach', 14)} Analysis: ${State.showStudyStockfish ? 'On' : 'Off'}</button>
      <button type="button" class="btn gold sm" id="egPuzzles">${iconSvg('puzzles', 13)} Endgame Puzzles (55)</button>
      <button type="button" class="btn ghost sm" id="egSidebarToggle" title="Toggle endgame list">${iconSvg('sidebar', 14)} <span>Lessons</span></button>
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
    const done = Boolean(State.training.endgames?.[eg.id]?.complete);
    const item = el(`<div class="list-item ${eg.id === active.id ? 'active' : ''}">
      <div class="meta">
        <h4>${escapeHtml(eg.name)}</h4>
        <span class="small">${escapeHtml(eg.difficulty)} · Target: ${escapeHtml(eg.targetResult || 'Win')}</span>
      </div>
      ${done ? '<span class="solved-badge">Studied</span>' : ''}
    </div>`);
    item.onclick = () => {
      State.selectedEndgameId = eg.id;
      State.studyContext = eg;
      State.game = new Chess(eg.fen);
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
    <select aria-label="Select endgame study">
      ${ENDGAMES.map((eg) => `<option value="${escapeHtml(eg.id)}" ${eg.id === active.id ? 'selected' : ''}>${escapeHtml(eg.name)}</option>`).join('')}
    </select>
    <button type="button" class="toggle-btn ${State.mobileStudyListOpen ? 'active' : ''}" id="egMobListBtn">${iconSvg('sidebar', 13)} List</button>
  </div>`);
  egMobBar.querySelector('select').onchange = (e) => {
    const picked = ENDGAMES.find((x) => x.id === e.target.value);
    if (picked) {
      State.selectedEndgameId = picked.id;
      State.studyContext = picked;
      State.game = new Chess(picked.fen);
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
  const stage = buildBoardStage(g, {
    flip: State.flipBoard,
    lastMove: State.lastMove,
    interactive: !g.game_over() && !State.endgameSparThinking && !State.promotionPending,
    onMove: async () => {
      State.lastMove = lastMoveSquares(g);
      recordStudyProgress('endgames', active, 1, 1);
      if (State.endgameSparring && !g.game_over()) {
        State.endgameSparThinking = true;
        render();
        const uci = await stockfishClient.playMove(g.fen(), 4);
        State.endgameSparThinking = false;
        if (uci && uci !== '(none)' && State.page === 'endgames' && State.selectedEndgameId === active.id) {
          g.move({
            from: uci.slice(0, 2),
            to: uci.slice(2, 4),
            promotion: uci.length > 4 ? uci.slice(4, 5) : undefined,
          });
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
  const rst = el(`<button type="button" class="btn ghost sm">${iconSvg('refresh', 13)} Reset</button>`);
  rst.onclick = () => {
    State.game = new Chess(active.fen);
    State.lastMove = null;
    State.endgameSparThinking = false;
    render();
  };
  const flp = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 13)} Flip</button>`);
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
    <div class="step-counter">${escapeHtml(active.difficulty)} · Goal: ${escapeHtml(active.goal || active.targetResult || 'Convert cleanly')}</div>
    <h4 style="margin-bottom:.3rem">${escapeHtml(active.name)}</h4>
    <p>${escapeHtml(active.summary)}</p>
    <ul style="margin:.4rem 0 0 1.1rem;font-size:.88rem;color:var(--ink-soft)">
      ${active.technique.map((t) => `<li style="margin-bottom:.2rem">${escapeHtml(t)}</li>`).join('')}
    </ul>
  </div>`));

  if (State.showStudyStockfish) {
    const sfPanel = createStockfishPanel({
      title: 'Stockfish 19 Tablebase & Eval',
      showArrows: State.showCoachArrows,
      onToggleArrows: () => {
        State.showCoachArrows = !State.showCoachArrows;
        applyStockfishDom(State.sfSnapshot);
      },
    });
    State.dom.sfPanel = sfPanel;
    side.appendChild(sfPanel);
    triggerLiveAnalysis(g.fen(), { depth: 13, multiPv: 3 });
  }

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
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';
  wrap.appendChild(el(`<div class="view-bar">
    <h1>${iconSvg('play', 18)} Match Hall — Play or Launch Engine Clash</h1>
    <div class="toggle-row" id="varTog">
      <button type="button" class="toggle-btn ${State.variant === 'standard' ? 'active' : ''}" data-v="standard">Standard Chess</button>
      <button type="button" class="toggle-btn ${State.variant === 'chess960' ? 'active' : ''}" data-v="chess960">Chess960</button>
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
  const humEngProf = getEngineProfile(State.playEngineProfileId);
  const validTier = humEngProf.tiers.some((t) => t.value === State.playEngineLevel)
    ? State.playEngineLevel
    : humEngProf.defaultTier;
  State.playEngineLevel = validTier;

  const engCard = el(`<section class="card setup-card">
    <div>
      <h3>${iconSvg('coach', 17)} Play vs Chess Engine</h3>
      <p class="small">${escapeHtml(humEngProf.description)}</p>
      <div style="margin:.4rem 0">
        <label for="humEngProf">Opponent Engine</label>
        <select id="humEngProf">
          ${ENGINE_PROFILE_LIST.map((p) => `<option value="${p.id}" ${p.id === humEngProf.id ? 'selected' : ''}>${escapeHtml(p.name)} — ${escapeHtml(p.styleTag)}</option>`).join('')}
        </select>
      </div>
      <div class="level-grid" id="engLvls" style="margin:.4rem 0">
        ${humEngProf.tiers
          .map((t) => `<div class="level-card ${!(humEngProf.family === 'nnue' && State.playEngineUseCustom) && State.playEngineLevel === t.value ? 'selected' : ''}" data-lvl="${t.value}">
            <div class="lvl-num tabular-nums">${t.value}</div>
            <div class="lvl-name">${escapeHtml(t.label.split(' ')[0])}</div>
            <div class="lvl-elo tabular-nums">${escapeHtml(t.elo)}</div>
          </div>`)
          .join('')}
      </div>
      ${humEngProf.family === 'nnue' ? `<div style="display:flex;align-items:center;gap:.55rem;margin:.3rem 0">
        <span class="small mono tabular-nums" style="white-space:nowrap">Custom: <strong id="cEloVal">${State.playEngineCustomElo}</strong></span>
        <input type="range" id="cEloSlider" min="1320" max="2850" step="20" value="${State.playEngineCustomElo}" style="flex:1" />
      </div>` : ''}
      <div class="toggle-row" id="engSideTog" style="margin-top:.35rem">
        <span class="small" style="margin-right:.3rem">Side:</span>
        ${['white', 'black', 'random'].map((c) => `<button type="button" class="toggle-btn ${State.playEngineColor === c ? 'active' : ''}" data-c="${c}">${c}</button>`).join('')}
      </div>
    </div>
    <button type="button" class="btn gold full" id="startEngineBtn">${iconSvg('play', 15)} Start Match vs ${escapeHtml(humEngProf.shortName)}</button>
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
    State.gameMoveHistory = [];
    State.gameOver = false;
    State.engineThinking = false;
    State.lastResult = null;
    State.lastMove = null;
    navigate('vs-engine');
    if (State.playerColor === 'b') setTimeout(() => engineMakeMove(), 240);
  };
  grid.appendChild(engCard);

  // Col 2: Engine vs Engine Arena Setup Card
  const wProf = getEngineProfile(State.arenaWhiteProfileId);
  const bProf = getEngineProfile(State.arenaBlackProfileId);
  if (!wProf.tiers.some((t) => t.value === State.arenaWhiteTier)) State.arenaWhiteTier = wProf.defaultTier;
  if (!bProf.tiers.some((t) => t.value === State.arenaBlackTier)) State.arenaBlackTier = bProf.defaultTier;

  const arenaCard = el(`<section class="card ornate setup-card">
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:.4rem">
        <h3>${iconSvg('duel', 17)} Engine vs Engine Arena</h3>
        <span class="tag green">Live Thoughts</span>
      </div>
      <p class="small">Pit two distinct chess engines against each other and inspect both MultiPV thoughts, plans, and eval clashes live.</p>

      <div style="margin:.4rem 0">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <label for="arWProf">White Engine</label>
          <button type="button" class="btn-ghost-xs" id="arSwapBtn" title="Swap White and Black engines">${iconSvg('swap', 12)} Swap</button>
        </div>
        <div class="arena-field-row">
          <select id="arWProf">
            ${ENGINE_PROFILE_LIST.map((p) => `<option value="${p.id}" ${p.id === wProf.id ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('')}
          </select>
          <select id="arWTier" style="max-width:155px">
            ${wProf.tiers.map((t) => `<option value="${t.value}" ${t.value === State.arenaWhiteTier ? 'selected' : ''}>${escapeHtml(t.label)}</option>`).join('')}
          </select>
        </div>
      </div>

      <div style="margin:.4rem 0">
        <label for="arBProf">Black Engine</label>
        <div class="arena-field-row">
          <select id="arBProf">
            ${ENGINE_PROFILE_LIST.map((p) => `<option value="${p.id}" ${p.id === bProf.id ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('')}
          </select>
          <select id="arBTier" style="max-width:155px">
            ${bProf.tiers.map((t) => `<option value="${t.value}" ${t.value === State.arenaBlackTier ? 'selected' : ''}>${escapeHtml(t.label)}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="arena-field-row" style="margin:.45rem 0">
        <div style="flex:1">
          <label for="arPreset">Starting Position</label>
          <select id="arPreset">
            ${ARENA_PRESETS.map((p, idx) => `<option value="${idx}" ${idx === State.arenaPresetIdx ? 'selected' : ''}>${escapeHtml(p.label)}</option>`).join('')}
          </select>
        </div>
        <div style="width:120px">
          <label for="arPace">Pace</label>
          <select id="arPace">
            <option value="400" ${State.arenaPaceMs === 400 ? 'selected' : ''}>Fast (0.4s)</option>
            <option value="1200" ${State.arenaPaceMs === 1200 ? 'selected' : ''}>Normal (1.2s)</option>
            <option value="2400" ${State.arenaPaceMs === 2400 ? 'selected' : ''}>Study (2.4s)</option>
          </select>
        </div>
      </div>
    </div>
    <button type="button" class="btn gold full" id="launchArenaBtn">${iconSvg('duel', 15)} Launch Engine Clash</button>
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
      <h3>${iconSvg('club', 17)} Over-the-Board: Member vs Member</h3>
      ${others.length === 0
        ? `<p class="small" style="margin-top:.4rem">Add a second local club member on the Login screen to play two-player rated or coached friendly matches on this device.</p>`
        : `
          <div style="margin:.45rem 0">
            <label for="oppSel">Opponent</label>
            <select id="oppSel">
              ${others.map((m) => `<option value="${m.id}">${escapeHtml(m.name)} (${m.rating})</option>`).join('')}
            </select>
          </div>
          <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:.45rem 0">
            <div>
              <label>Your Color</label>
              <div class="toggle-row" id="humColor">
                <button type="button" class="toggle-btn active" data-c="white">White</button>
                <button type="button" class="toggle-btn" data-c="black">Black</button>
                <button type="button" class="toggle-btn" data-c="random">Random</button>
              </div>
            </div>
            <div>
              <label>Match Type</label>
              <div class="toggle-row" id="humType">
                <button type="button" class="toggle-btn active" data-t="rated">Rated Elo</button>
                <button type="button" class="toggle-btn" data-t="friendly">Friendly (+Coach)</button>
              </div>
            </div>
          </div>
        `}
    </div>
    ${others.length > 0 ? `<button type="button" class="btn full" id="startHumanBtn">Begin Over-the-Board Match</button>` : `<button type="button" class="btn ghost full" id="switchAdd">Switch / Add Member</button>`}
  </section>`);

  if (others.length > 0) {
    let humCol = 'white';
    let humType = 'rated';
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
      State.gameMoveHistory = [];
      State.gameOver = false;
      State.lastResult = null;
      State.lastMove = null;
      State.playCoachLastGrade = null;
      State.flipBoard = false;
      navigate('vs-human');
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

function renderVsEngine() {
  if (!State.game) State.game = new Chess();
  const g = State.game;
  const turn = g.turn();
  const oppProfile = getEngineProfile(State.playEngineProfileId);
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  wrap.appendChild(el(`<div class="view-bar">
    <h1>${escapeHtml(State.user.name)} vs ${escapeHtml(oppProfile.name)}</h1>
    <div class="view-bar-meta">
      <span class="tag gold">${escapeHtml(State._engineLevelDisplay || oppProfile.name)}</span>
      <button type="button" class="btn ghost sm" id="leaveEng">Leave Game</button>
    </div>
  </div>`));
  wrap.querySelector('#leaveEng').onclick = () => {
    if (State._humanVsEngineInstance) State._humanVsEngineInstance.stop();
    stockfishClient.stop();
    navigate('play-menu');
  };

  const layout = document.createElement('div');
  layout.className = `play-layout${State.boardMaximized ? ' board-maximized' : ''}`;

  const boardCol = document.createElement('div');
  boardCol.className = 'board-column';
  const stage = buildBoardStage(g, {
    flip: State.flipBoard,
    lastMove: State.lastMove,
    interactive: !State.gameOver && !State.promotionPending && !State.engineThinking && turn === State.playerColor,
    onMove: (m) => {
      State.gameMoveHistory.push(m.san);
      State.lastMove = lastMoveSquares(g);
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
  const undoBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('prev', 13)} Take Back</button>`);
  undoBtn.disabled = State.gameMoveHistory.length < 2 || State.gameOver || State.engineThinking;
  undoBtn.onclick = () => {
    g.undo();
    State.gameMoveHistory.pop();
    g.undo();
    State.gameMoveHistory.pop();
    State.lastMove = lastMoveSquares(g);
    render();
  };
  const flipBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 13)} Flip</button>`);
  flipBtn.onclick = () => {
    State.flipBoard = !State.flipBoard;
    render();
  };
  const resignBtn = el(`<button type="button" class="btn danger sm">Resign</button>`);
  resignBtn.disabled = State.gameOver;
  resignBtn.onclick = () => {
    State.gameOver = true;
    State.lastResult = { kind: 'loss', text: `You resigned. ${oppProfile.name} wins.` };
    render();
  };
  const newBtn = el(`<button type="button" class="btn gold sm">New Match</button>`);
  newBtn.onclick = () => navigate('play-menu');
  ctrl.appendChild(undoBtn);
  ctrl.appendChild(flipBtn);
  ctrl.appendChild(resignBtn);
  ctrl.appendChild(newBtn);
  ctrl.appendChild(makeMaxBoardButton());
  boardCol.appendChild(ctrl);
  layout.appendChild(boardCol);

  const side = document.createElement('div');
  side.className = 'play-sidebar';
  if (State.gameOver) {
    side.appendChild(el(`<div class="status-banner ${State.lastResult?.kind || 'draw'}">${escapeHtml(State.lastResult?.text || 'Game Over')}</div>`));
  } else if (State.engineThinking) {
    side.appendChild(el(`<div class="status-banner">${escapeHtml(oppProfile.name)} is thinking... <span class="spinner"></span></div>`));
  } else {
    side.appendChild(el(`<div class="status-banner">${turn === State.playerColor ? escapeHtml(State.user.name) : escapeHtml(oppProfile.name)} to move</div>`));
  }
  side.appendChild(el(`<div class="game-info">
    <div class="player-row ${turn !== State.playerColor ? 'active' : ''}"><div><span class="turn-marker"></span><span class="pname">${escapeHtml(oppProfile.name)}</span></div><span class="badge">${escapeHtml(State._engineLevelDisplay || '')}</span></div>
    <div class="player-row ${turn === State.playerColor ? 'active' : ''}"><div><span class="turn-marker"></span><span class="pname">${escapeHtml(State.user.name)}</span></div><span class="badge elo tabular-nums">${State.user.rating}</span></div>
  </div>`));
  side.appendChild(buildMovesPanel(State.gameMoveHistory));
  layout.appendChild(side);
  wrap.appendChild(layout);
  return wrap;
}

function checkEngineGameEnd() {
  const g = State.game;
  const oppProfile = getEngineProfile(State.playEngineProfileId);
  if (g.in_checkmate()) {
    const winner = g.turn() === 'w' ? 'b' : 'w';
    const youWon = winner === State.playerColor;
    State.gameOver = true;
    State.lastResult = {
      kind: youWon ? 'win' : 'loss',
      text: youWon ? `Checkmate! You defeated ${oppProfile.name}!` : `Checkmate. ${oppProfile.name} wins.`,
    };
  } else if (g.in_draw() || g.in_stalemate() || g.in_threefold_repetition() || g.insufficient_material()) {
    State.gameOver = true;
    State.lastResult = { kind: 'draw', text: 'Game drawn.' };
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
  if (!uci || uci === '(none)' || State.page !== 'vs-engine' || State.game !== g) {
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
    checkEngineGameEnd();
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
  State.arenaInspectIndex = null;
  State.arenaWhiteSnap = null;
  State.arenaBlackSnap = null;
  State.arenaWhiteLastMeta = null;
  State.arenaBlackLastMeta = null;
  State.flipBoard = false;
  State.lastMove = null;
  navigate('engine-arena');
  scheduleNextArenaTurn(150);
}

function syncArenaLiveDom() {
  const g = State.arenaGame;
  if (!g) return;
  const inspecting =
    State.arenaInspectIndex !== null && State.arenaMoveLog[State.arenaInspectIndex]
      ? State.arenaMoveLog[State.arenaInspectIndex]
      : null;

  const activeSide = inspecting ? inspecting.side : State.arenaThinkingSide || g.turn();
  const wSnap = State.arenaWhiteSnap;
  const bSnap = State.arenaBlackSnap;
  const primarySnap = activeSide === 'w' ? (wSnap || bSnap) : (bSnap || wSnap);
  const secondarySnap = activeSide === 'w' ? bSnap : wSnap;

  const wProfile = getEngineProfile(State.arenaWhiteProfileId);
  const bProfile = getEngineProfile(State.arenaBlackProfileId);
  const wTier = getEngineTierMeta(wProfile.id, State.arenaWhiteTier);
  const bTier = getEngineTierMeta(bProfile.id, State.arenaBlackTier);

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
      isThinking: !inspecting && State.arenaThinkingSide === 'w',
      isActiveTurn: !inspecting && !g.game_over() && g.turn() === 'w',
      chosenSan: State.arenaWhiteLastMeta?.san || null,
      elapsedMs: State.arenaWhiteLastMeta?.elapsedMs ?? null,
    });
  }
  if (State.dom.arenaBlackCard) {
    updateEngineThoughtCard(State.dom.arenaBlackCard, {
      snapshot: bSnap,
      profile: bProfile,
      tierLabel: bTier.label,
      isThinking: !inspecting && State.arenaThinkingSide === 'b',
      isActiveTurn: !inspecting && !g.game_over() && g.turn() === 'b',
      chosenSan: State.arenaBlackLastMeta?.san || null,
      elapsedMs: State.arenaBlackLastMeta?.elapsedMs ?? null,
    });
  }
}

async function analyzeBothOnPause() {
  const g = State.arenaGame;
  if (!g || !State.arenaEngines.w || !State.arenaEngines.b) return;
  const inspected =
    State.arenaInspectIndex !== null && State.arenaMoveLog[State.arenaInspectIndex]
      ? State.arenaMoveLog[State.arenaInspectIndex]
      : null;
  const targetFen = inspected ? inspected.fenAfter : g.fen();
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
  State.arenaInspectIndex = null;
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
  State.arenaMoveLog.push({
    ply: State.arenaMoveLog.length + 1,
    side,
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

function renderEngineArena() {
  if (!State.arenaGame) {
    startEngineArenaMatch();
    return document.createElement('div');
  }
  const g = State.arenaGame;
  const wProfile = getEngineProfile(State.arenaWhiteProfileId);
  const bProfile = getEngineProfile(State.arenaBlackProfileId);
  const wTier = getEngineTierMeta(wProfile.id, State.arenaWhiteTier);
  const bTier = getEngineTierMeta(bProfile.id, State.arenaBlackTier);

  const inspecting =
    State.arenaInspectIndex !== null && State.arenaMoveLog[State.arenaInspectIndex]
      ? State.arenaMoveLog[State.arenaInspectIndex]
      : null;
  const displayGame = inspecting ? new Chess(inspecting.fenAfter) : g;
  const displayLastMove = inspecting ? { from: inspecting.from, to: inspecting.to } : State.lastMove;
  const finished = g.game_over();

  const wrap = document.createElement('div');
  wrap.className = 'view-shell';

  const bar = el(`<div class="view-bar">
    <div style="display:flex;align-items:center;gap:.45rem;min-width:0">
      <h1>${iconSvg('duel', 18)} Engine Clash Arena</h1>
      <span class="badge elo">${escapeHtml(wProfile.shortName)} vs ${escapeHtml(bProfile.shortName)}</span>
    </div>
    <div class="view-bar-meta">
      <button type="button" class="btn gold sm" id="arPlayPause" ${finished ? 'disabled' : ''}>
        ${iconSvg(State.arenaPaused ? 'play' : 'pause', 13)} <span>${State.arenaPaused ? 'Resume' : 'Pause'}</span>
      </button>
      <button type="button" class="btn ghost sm" id="arStep" ${finished || (!State.arenaPaused && State.arenaThinkingSide) ? 'disabled' : ''}>
        ${iconSvg('step', 13)} <span>Step</span>
      </button>
      <select id="arLivePace" aria-label="Arena pace" style="width:auto;padding:.22rem .42rem;font-size:.8rem">
        <option value="400" ${State.arenaPaceMs === 400 ? 'selected' : ''}>0.4s</option>
        <option value="1200" ${State.arenaPaceMs === 1200 ? 'selected' : ''}>1.2s</option>
        <option value="2400" ${State.arenaPaceMs === 2400 ? 'selected' : ''}>2.4s</option>
      </select>
      <button type="button" class="btn ghost sm" id="arResetBtn">${iconSvg('refresh', 13)} <span>Rematch</span></button>
      <button type="button" class="btn ghost sm" id="arSetupBtn">Setup</button>
    </div>
  </div>`);

  bar.querySelector('#arPlayPause').onclick = () => {
    if (State.arenaPaused) {
      State.arenaPaused = false;
      State.arenaInspectIndex = null;
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
    State.arenaInspectIndex = null;
    State.arenaPaused = true;
    executeArenaPly(State.arenaLoopToken, true);
  };
  bar.querySelector('#arLivePace').onchange = (e) => {
    State.arenaPaceMs = Number(e.target.value);
  };
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
  const flipBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 13)} Flip</button>`);
  flipBtn.onclick = () => {
    State.flipBoard = !State.flipBoard;
    render();
  };
  const arrBtn = el(`<button type="button" class="btn ghost sm ${State.showCoachArrows ? 'active' : ''}">Arrows: ${State.showCoachArrows ? 'On' : 'Off'}</button>`);
  arrBtn.onclick = () => {
    State.showCoachArrows = !State.showCoachArrows;
    render();
  };
  const swapSidesBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('swap', 13)} Swap Matchup</button>`);
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
  if (inspecting) {
    const revBanner = el(`<div class="status-banner" style="display:flex;justify-content:space-between;align-items:center;gap:.4rem">
      <span>Inspecting Ply ${inspecting.ply}: ${escapeHtml(inspecting.san)} (${escapeHtml(inspecting.engineName)})</span>
      <button type="button" class="btn gold sm" id="arLiveReturn" style="padding:.15rem .5rem;font-size:.78rem">Live Board</button>
    </div>`);
    revBanner.querySelector('#arLiveReturn').onclick = () => {
      State.arenaInspectIndex = null;
      render();
      if (State.arenaPaused) analyzeBothOnPause();
    };
    side.appendChild(revBanner);
  } else if (finished) {
    let outcome = 'Match Drawn.';
    let cls = 'draw';
    if (g.in_checkmate()) {
      const winnerIsWhite = g.turn() === 'b';
      const winnerName = winnerIsWhite ? wProfile.name : bProfile.name;
      outcome = `Checkmate! ${winnerName} (${winnerIsWhite ? 'White' : 'Black'}) wins in ${Math.ceil(State.arenaMoveLog.length / 2)} moves.`;
      cls = winnerIsWhite ? 'win' : 'loss';
    }
    side.appendChild(el(`<div class="status-banner ${cls}">${escapeHtml(outcome)}</div>`));
  } else if (State.arenaThinkingSide) {
    const tProf = State.arenaThinkingSide === 'w' ? wProfile : bProfile;
    side.appendChild(el(`<div class="status-banner">${escapeHtml(tProf.name)} (${State.arenaThinkingSide === 'w' ? 'White' : 'Black'}) thinking... <span class="spinner"></span></div>`));
  } else {
    side.appendChild(el(`<div class="status-banner">${State.arenaPaused ? 'Paused — both engines analyzing position' : `${g.turn() === 'w' ? wProfile.name : bProfile.name} to move`}</div>`));
  }

  // Dual Evaluation Comparison Strip
  const dualStrip = createDualEvalStrip();
  State.dom.arenaDualStrip = dualStrip;
  side.appendChild(dualStrip);

  // Telemetry View Switch
  const tabBar = el(`<div class="arena-tabs">
    <div class="pill-switch" id="arTabSwitch">
      <button type="button" data-t="both" class="${State.arenaTab === 'both' ? 'active' : ''}">Both Thoughts</button>
      <button type="button" data-t="white" class="${State.arenaTab === 'white' ? 'active' : ''}">White</button>
      <button type="button" data-t="black" class="${State.arenaTab === 'black' ? 'active' : ''}">Black</button>
      <button type="button" data-t="log" class="${State.arenaTab === 'log' ? 'active' : ''}">Log (${State.arenaMoveLog.length})</button>
    </div>
    <span class="mono small tabular-nums">Move ${Math.floor(State.arenaMoveLog.length / 2) + 1}</span>
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
      logList.innerHTML = '<div class="sf-empty">No moves played yet. Waiting for opening move...</div>';
    } else {
      [...State.arenaMoveLog].reverse().forEach((entry, revIdx) => {
        const realIdx = State.arenaMoveLog.length - 1 - revIdx;
        const moveNo = `${Math.ceil(entry.ply / 2)}${entry.side === 'w' ? '.' : '...'}`;
        const lead = entry.snapshot?.lines?.[0];
        const scoreTxt = lead ? formatEvalScore(lead.whiteCp, lead.whiteMate) : '0.00';
        const row = el(`<button type="button" class="move-eval-row ${State.arenaInspectIndex === realIdx ? 'selected' : ''}">
          <span class="mono tabular-nums" style="font-weight:700;color:var(--walnut-dark)">${moveNo} ${escapeHtml(entry.san)}</span>
          <span class="small" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escapeHtml(entry.engineName)}: ${escapeHtml(entry.thoughtText)}</span>
          <span class="mono tabular-nums" style="font-weight:600">${scoreTxt}</span>
        </button>`);
        row.onclick = () => {
          State.arenaPaused = true;
          stopArenaLoop();
          State.arenaInspectIndex = realIdx;
          State.arenaWhiteSnap = null;
          State.arenaBlackSnap = null;
          render();
          analyzeBothOnPause();
        };
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

  side.appendChild(buildMovesPanel(State.arenaMoveLog.map((x) => x.san)));
  layout.appendChild(side);
  wrap.appendChild(layout);

  syncArenaLiveDom();
  return wrap;
}

function renderVsHuman() {
  if (!State.game) State.game = new Chess();
  const g = State.game;
  const turn = g.turn();
  const w = State.members[State.gameWhite] || { name: 'White', rating: 1200 };
  const b = State.members[State.gameBlack] || { name: 'Black', rating: 1200 };
  const coachAllowed = !State.gameRated && State.showPlayCoach;

  const wrap = document.createElement('div');
  wrap.className = 'view-shell';
  wrap.appendChild(el(`<div class="view-bar">
    <h1>${escapeHtml(w.name)} vs ${escapeHtml(b.name)}</h1>
    <div class="view-bar-meta">
      <span class="tag ${State.gameRated ? 'gold' : 'green'}">${State.gameRated ? 'Rated' : 'Friendly'}</span>
      ${!State.gameRated ? `<button type="button" class="toggle-btn ${State.showPlayCoach ? 'active' : ''}" id="humCoachBtn">${iconSvg('coach', 14)} Coach: ${State.showPlayCoach ? 'On' : 'Off'}</button>` : ''}
      <button type="button" class="btn ghost sm" id="leaveHum">Leave Game</button>
    </div>
  </div>`));
  wrap.querySelector('#leaveHum').onclick = () => {
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
  const stage = buildBoardStage(g, {
    flip: State.flipBoard ? turn === 'b' : false,
    lastMove: State.lastMove,
    interactive: !State.gameOver && !State.promotionPending,
    onMove: async (m) => {
      const prevSnap = State.sfSnapshot;
      State.gameMoveHistory.push(m.san);
      State.lastMove = lastMoveSquares(g);
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
  const undoBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('prev', 13)} Undo</button>`);
  undoBtn.disabled = State.gameMoveHistory.length === 0 || State.gameOver;
  undoBtn.onclick = () => {
    g.undo();
    State.gameMoveHistory.pop();
    State.lastMove = lastMoveSquares(g);
    render();
  };
  const flipBtn = el(`<button type="button" class="btn ghost sm">${iconSvg('flip', 13)} Flip</button>`);
  flipBtn.onclick = () => {
    State.flipBoard = !State.flipBoard;
    render();
  };
  const drawBtn = el(`<button type="button" class="btn ghost sm">Draw</button>`);
  drawBtn.disabled = State.gameOver;
  drawBtn.onclick = () => finishHumanGame('1/2-1/2', 'agreement');
  const resignBtn = el(`<button type="button" class="btn danger sm">${escapeHtml(turn === 'w' ? w.name : b.name)} Resigns</button>`);
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
  if (State.gameOver) {
    side.appendChild(el(`<div class="status-banner ${State.lastResult?.kind || 'draw'}">${escapeHtml(State.lastResult?.text || 'Game over')}</div>`));
  } else {
    side.appendChild(el(`<div class="status-banner">${escapeHtml(turn === 'w' ? w.name : b.name)} to move${g.in_check() ? ' (Check)' : ''}</div>`));
  }
  side.appendChild(el(`<div class="game-info">
    <div class="player-row ${turn === 'b' ? 'active' : ''}"><div><span class="turn-marker"></span><span class="pname">${escapeHtml(b.name)}</span></div><span class="badge elo tabular-nums">${b.rating}</span></div>
    <div class="player-row ${turn === 'w' ? 'active' : ''}"><div><span class="turn-marker"></span><span class="pname">${escapeHtml(w.name)}</span></div><span class="badge elo tabular-nums">${w.rating}</span></div>
  </div>`));
  if (coachAllowed) {
    const sfPanel = createStockfishPanel({
      title: 'Friendly Coach Analysis',
      showArrows: State.showCoachArrows,
      onToggleArrows: () => {
        State.showCoachArrows = !State.showCoachArrows;
        applyStockfishDom(State.sfSnapshot, State.playCoachLastGrade);
      },
    });
    State.dom.sfPanel = sfPanel;
    side.appendChild(sfPanel);
    triggerLiveAnalysis(g.fen(), { depth: 11, multiPv: 3, grade: State.playCoachLastGrade });
  }
  side.appendChild(buildMovesPanel(State.gameMoveHistory));
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
  State.gameOver = true;
  const w = State.members[State.gameWhite];
  const b = State.members[State.gameBlack];
  let scoreW = 0.5;
  let kind = 'draw';
  let text = `Drawn by ${reason}.`;
  if (result === '1-0') {
    scoreW = 1;
    kind = 'win';
    text = `${w.name} wins by ${reason}!`;
  } else if (result === '0-1') {
    scoreW = 0;
    kind = 'loss';
    text = `${b.name} wins by ${reason}!`;
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
  State.lastResult = { kind, text };
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
function renderClub() {
  const wrap = document.createElement('div');
  wrap.className = 'view-shell';
  wrap.appendChild(el(`<div class="view-bar">
    <h1>${iconSvg('club', 18)} Club Standings &amp; Match Annals</h1>
    ${sharedClub ? `<span class="tag green">Shared Firebase Mode</span>` : `<span class="tag">${Object.keys(State.members).length} Members</span>`}
  </div>`));

  const grid = document.createElement('div');
  grid.className = 'club-grid';

  // Left: Standings Leaderboard + optional Shared Club creation
  const left = document.createElement('section');
  left.className = 'card club-card';
  left.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.45rem">
    <h3>Club Standings</h3>
    ${sharedClub ? `<button type="button" class="btn gold sm" id="createClubBtn">${iconSvg('plus', 13)} New Club</button>` : ''}
  </div>
  <div class="scroll-pane" style="flex:1">
    <table class="leaderboard">
      <thead><tr><th>#</th><th>Member</th><th>Elo</th><th>W-L-D</th></tr></thead>
      <tbody>
        ${Object.values(State.members).length === 0
          ? `<tr><td colspan="4" class="small italic">${sharedClub ? 'Signed in via school email. Create or open a shared club.' : 'No local members yet.'}</td></tr>`
          : Object.values(State.members)
              .sort((a, b) => b.rating - a.rating)
              .map((m, i) => `<tr class="${m.id === State.user.id ? 'you' : ''}">
                <td class="rank tabular-nums">${i + 1}</td>
                <td>${escapeHtml(m.name)}${m.id === State.user.id ? ' <span class="badge">you</span>' : ''}</td>
                <td class="rating tabular-nums">${m.rating}</td>
                <td class="mono tabular-nums">${m.wins || 0}-${m.losses || 0}-${m.draws || 0}</td>
              </tr>`)
              .join('')}
      </tbody>
    </table>
  </div>`;
  const clubBtn = left.querySelector('#createClubBtn');
  if (clubBtn) {
    clubBtn.onclick = async () => {
      const nm = prompt('Enter club name:', 'Edugates Varsity');
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
  right.innerHTML = `<h3 style="margin-bottom:.45rem">Recorded Games</h3><div class="scroll-pane item-list" id="annalsList"><span class="small italic">Loading games...</span></div>`;
  const listEl = right.querySelector('#annalsList');
  loadGameRecords().then((records) => {
    listEl.innerHTML = '';
    if (records.length === 0) {
      listEl.innerHTML = `<p class="small italic" style="color:var(--ink-soft)">No games recorded yet. Play an Over-the-Board game to record your PGN.</p>`;
      return;
    }
    records.forEach((r) => {
      const item = el(`<div class="list-item">
        <div class="meta">
          <h4>${escapeHtml(r.white.name)} vs ${escapeHtml(r.black.name)}</h4>
          <span class="small tabular-nums">${r.moves.length} plies · ${escapeHtml(r.reason)} · ${formatDate(r.ts)}</span>
        </div>
        <div style="display:flex;gap:.35rem;align-items:center">
          <span class="tag ${r.type === 'rated' ? 'gold' : ''}">${r.type}</span>
          <span class="mono tabular-nums" style="font-weight:700">${escapeHtml(r.result)}</span>
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
  const back = el(`<div class="modal-backdrop"></div>`);
  const m = el(`<div class="modal">
    <button type="button" class="modal-close">×</button>
    <h2>${escapeHtml(r.white.name)} vs ${escapeHtml(r.black.name)}</h2>
    <p class="small tabular-nums">${formatDate(r.ts)} · ${escapeHtml(r.reason)} · <strong>${escapeHtml(r.result)}</strong></p>
    <hr class="fancy"/>
    <div class="mono tabular-nums" style="background:var(--paper-dim);padding:.75rem;font-size:.86rem;line-height:1.6;max-height:260px;overflow-y:auto">${formatPGN(r.moves)}</div>
  </div>`);
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
  return s.trim() || '<em>(no moves)</em>';
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
  if (!ts) return '';
  return new Date(ts).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

document.addEventListener('keydown', (event) => {
  if (
    event.target instanceof HTMLInputElement ||
    event.target instanceof HTMLSelectElement ||
    event.target instanceof HTMLTextAreaElement
  ) {
    return;
  }
  if (State.studyMode !== 'learn') return;
  if (State.page === 'openings') {
    const active =
      State.openingsTab === 'traps'
        ? TRAPS.find((t) => t.id === State.selectedTrapId)
        : OPENINGS.find((o) => o.id === State.selectedOpeningId);
    if (!active) return;
    const total = (active.line || []).length;
    if (event.key === 'ArrowRight' && State.studyStep < total) {
      State.studyStep += 1;
      recordStudyProgress(State.openingsTab === 'traps' ? 'traps' : 'openings', active, State.studyStep, total);
      render();
    } else if (event.key === 'ArrowLeft' && State.studyStep > 0) {
      State.studyStep -= 1;
      render();
    }
  } else if (State.page === 'strategy') {
    const active = MIDDLEGAME_LESSONS.find((m) => m.id === State.selectedStrategyId);
    if (!active) return;
    const total = (active.line || []).length;
    if (event.key === 'ArrowRight' && State.studyStep < total) {
      State.studyStep += 1;
      recordStudyProgress('middlegame', active, State.studyStep, total);
      render();
    } else if (event.key === 'ArrowLeft' && State.studyStep > 0) {
      State.studyStep -= 1;
      render();
    }
  }
});

(async () => {
  await loadMembers();
  await loadCurrentUser();
  render();
})();
