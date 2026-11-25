export const RUSH_MODES = {
  blitz3: { id: 'blitz3', durationMs: 180_000, maxStrikes: 3, comboBonusMs: 3_000, comboEvery: 5 },
  blitz5: { id: 'blitz5', durationMs: 300_000, maxStrikes: 3, comboBonusMs: 3_000, comboEvery: 5 },
  survival: { id: 'survival', durationMs: 0, maxStrikes: 3, comboBonusMs: 0, comboEvery: 0 },
};

function shuffleInPlace(arr, rng = Math.random) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Creates a progressive-difficulty Puzzle Rush / Storm session from the curated puzzle pool.
 */
export function createRushSession(puzzles = [], { mode = 'blitz3', rng = Math.random } = {}) {
  const cfg = RUSH_MODES[mode] || RUSH_MODES.blitz3;
  const list = Array.isArray(puzzles) ? puzzles.slice() : [];

  const band1 = shuffleInPlace(list.filter((p) => (p.rating || 1200) <= 1150), rng);
  const band2 = shuffleInPlace(list.filter((p) => (p.rating || 1200) > 1150 && (p.rating || 1200) <= 1450), rng);
  const band3 = shuffleInPlace(list.filter((p) => (p.rating || 1200) > 1450 && (p.rating || 1200) <= 1750), rng);
  const band4 = shuffleInPlace(list.filter((p) => (p.rating || 1200) > 1750), rng);

  const queue = [
    ...band1.slice(0, 6),
    ...band2.slice(0, 10),
    ...band3.slice(0, 14),
    ...band4,
    ...band1.slice(6),
    ...band2.slice(10),
    ...band3.slice(14),
  ];

  return {
    mode: cfg.id,
    timed: cfg.durationMs > 0,
    remainingMs: cfg.durationMs,
    maxStrikes: cfg.maxStrikes,
    comboBonusMs: cfg.comboBonusMs,
    comboEvery: cfg.comboEvery,
    strikes: 0,
    score: 0,
    combo: 0,
    bestCombo: 0,
    bonusMsEarned: 0,
    queue,
    currentIndex: 0,
    solvedIds: [],
    missedPuzzles: [],
    gameOver: queue.length === 0,
    endReason: queue.length === 0 ? 'cleared' : null,
  };
}

export function getRushCurrentPuzzle(session) {
  if (!session || session.gameOver) return null;
  return session.queue[session.currentIndex] || null;
}

export function recordRushSolve(session) {
  if (!session || session.gameOver) return session;
  const current = session.queue[session.currentIndex];
  const nextCombo = session.combo + 1;
  const nextBestCombo = Math.max(session.bestCombo, nextCombo);
  const gotBonus =
    session.timed && session.comboEvery > 0 && nextCombo % session.comboEvery === 0
      ? session.comboBonusMs
      : 0;
  const nextIndex = session.currentIndex + 1;
  const cleared = nextIndex >= session.queue.length;

  return {
    ...session,
    score: session.score + 1,
    combo: nextCombo,
    bestCombo: nextBestCombo,
    remainingMs: session.timed ? session.remainingMs + gotBonus : session.remainingMs,
    bonusMsEarned: session.bonusMsEarned + gotBonus,
    solvedIds: current ? [...session.solvedIds, current.id] : session.solvedIds,
    currentIndex: nextIndex,
    gameOver: cleared,
    endReason: cleared ? 'cleared' : null,
  };
}

export function recordRushStrike(session) {
  if (!session || session.gameOver) return session;
  const current = session.queue[session.currentIndex];
  const nextStrikes = session.strikes + 1;
  const nextIndex = session.currentIndex + 1;
  const lostByStrikes = nextStrikes >= session.maxStrikes;
  const cleared = !lostByStrikes && nextIndex >= session.queue.length;

  return {
    ...session,
    strikes: nextStrikes,
    combo: 0,
    missedPuzzles: current ? [...session.missedPuzzles, current] : session.missedPuzzles,
    currentIndex: nextIndex,
    gameOver: lostByStrikes || cleared,
    endReason: lostByStrikes ? 'strikes' : cleared ? 'cleared' : null,
  };
}

export function tickRushTimer(session, elapsedMs) {
  if (!session || !session.timed || session.gameOver) return session;
  const delta = Math.max(0, Number(elapsedMs) || 0);
  if (delta === 0) return session;
  const nextMs = Math.max(0, session.remainingMs - delta);
  const timedOut = nextMs <= 0;

  return {
    ...session,
    remainingMs: nextMs,
    gameOver: timedOut,
    endReason: timedOut ? 'timeout' : null,
  };
}
