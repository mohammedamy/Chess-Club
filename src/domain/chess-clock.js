import { Chess } from 'chess.js';

export const TIME_CONTROLS = [
  { id: 'unlimited', category: 'unlimited', label: 'Unlimited', initialMs: 0, incrementMs: 0 },
  { id: 'bullet-1-0', category: 'bullet', label: '1+0 Bullet', initialMs: 60_000, incrementMs: 0 },
  { id: 'bullet-2-1', category: 'bullet', label: '2+1 Bullet', initialMs: 120_000, incrementMs: 1_000 },
  { id: 'blitz-3-0', category: 'blitz', label: '3+0 Blitz', initialMs: 180_000, incrementMs: 0 },
  { id: 'blitz-3-2', category: 'blitz', label: '3+2 Blitz', initialMs: 180_000, incrementMs: 2_000 },
  { id: 'blitz-5-0', category: 'blitz', label: '5+0 Blitz', initialMs: 300_000, incrementMs: 0 },
  { id: 'blitz-5-3', category: 'blitz', label: '5+3 Blitz', initialMs: 300_000, incrementMs: 3_000 },
  { id: 'rapid-10-0', category: 'rapid', label: '10+0 Rapid', initialMs: 600_000, incrementMs: 0 },
  { id: 'rapid-10-5', category: 'rapid', label: '10+5 Rapid', initialMs: 600_000, incrementMs: 5_000 },
  { id: 'rapid-15-10', category: 'rapid', label: '15+10 Rapid', initialMs: 900_000, incrementMs: 10_000 },
];

export function getTimeControl(controlId) {
  return TIME_CONTROLS.find((tc) => tc.id === controlId) || TIME_CONTROLS[0];
}

export function createClockState(controlId = 'unlimited', { berserkSide = null } = {}) {
  const tc = getTimeControl(controlId);
  const enabled = tc.initialMs > 0;
  let whiteMs = tc.initialMs;
  let blackMs = tc.initialMs;
  let incWhiteMs = tc.incrementMs;
  let incBlackMs = tc.incrementMs;

  if (enabled && berserkSide === 'w') {
    whiteMs = Math.max(10_000, Math.floor(tc.initialMs / 2));
    incWhiteMs = 0;
  } else if (enabled && berserkSide === 'b') {
    blackMs = Math.max(10_000, Math.floor(tc.initialMs / 2));
    incBlackMs = 0;
  }

  return {
    controlId: tc.id,
    enabled,
    whiteMs,
    blackMs,
    incWhiteMs,
    incBlackMs,
    berserkSide: enabled && (berserkSide === 'w' || berserkSide === 'b') ? berserkSide : null,
    activeSide: 'w',
    running: false,
    flaggedSide: null,
    lowTimeWarned: { w: false, b: false },
  };
}

export function tickClock(clock, elapsedMs) {
  if (!clock || !clock.enabled || !clock.running || clock.flaggedSide) return clock;
  const delta = Math.max(0, Number(elapsedMs) || 0);
  if (delta === 0) return clock;

  const isWhite = clock.activeSide === 'w';
  const prev = isWhite ? clock.whiteMs : clock.blackMs;
  const next = Math.max(0, prev - delta);
  const flaggedSide = next <= 0 ? clock.activeSide : null;

  return {
    ...clock,
    whiteMs: isWhite ? next : clock.whiteMs,
    blackMs: isWhite ? clock.blackMs : next,
    flaggedSide,
    running: flaggedSide ? false : clock.running,
  };
}

export function pressClockAfterMove(clock, moverSide) {
  if (!clock || !clock.enabled || clock.flaggedSide) return clock;
  const isWhite = moverSide === 'w';
  const inc = isWhite ? clock.incWhiteMs : clock.incBlackMs;

  return {
    ...clock,
    whiteMs: isWhite ? clock.whiteMs + inc : clock.whiteMs,
    blackMs: isWhite ? clock.blackMs : clock.blackMs + inc,
    activeSide: isWhite ? 'b' : 'w',
    running: true,
  };
}

export function formatClockMs(ms) {
  if (!Number.isFinite(ms)) return '∞';
  const clamped = Math.max(0, ms);
  if (clamped < 20_000) {
    const secs = Math.floor(clamped / 1000);
    const tenths = Math.floor((clamped % 1000) / 100);
    return `0:${String(secs).padStart(2, '0')}.${tenths}`;
  }
  const totalSec = Math.ceil(clamped / 1000);
  const mins = Math.floor(totalSec / 60);
  const secs = totalSec % 60;
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

/**
 * Checks whether `sideColor` has sufficient material to deliver checkmate (used on timeout).
 */
export function hasMatingMaterial(fen, sideColor, ChessCtor = Chess) {
  const game = new ChessCtor(fen);
  const board = game.board();
  let majorOrPawn = 0;
  let minors = 0;

  for (let r = 0; r < 8; r += 1) {
    for (let c = 0; c < 8; c += 1) {
      const sq = board[r][c];
      if (!sq || sq.color !== sideColor || sq.type === 'k') continue;
      if (sq.type === 'p' || sq.type === 'q' || sq.type === 'r') majorOrPawn += 1;
      else minors += 1;
    }
  }

  if (majorOrPawn > 0) return true;
  if (minors === 0) return false;
  if (minors === 1 && game.insufficient_material()) return false;
  return true;
}
