export const STANDARD_START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export const PIECE_POINTS = {
  p: 1,
  n: 3,
  b: 3,
  r: 5,
  q: 9,
};

const BLACK_ORDER = ['q', 'r', 'b', 'n', 'p'];
const WHITE_ORDER = ['Q', 'R', 'B', 'N', 'P'];

function countPlacementPieces(fen) {
  const counts = {
    w: { p: 0, n: 0, b: 0, r: 0, q: 0, k: 0 },
    b: { p: 0, n: 0, b: 0, r: 0, q: 0, k: 0 },
  };
  const boardPart = String(fen || STANDARD_START_FEN).trim().split(/\s+/)[0] || '';
  for (const ch of boardPart) {
    const lower = ch.toLowerCase();
    if (lower in counts.w) {
      const color = ch === lower ? 'b' : 'w';
      counts[color][lower] += 1;
    }
  }
  return counts;
}

function sumPiecePoints(sideCounts) {
  let total = 0;
  for (const [piece, value] of Object.entries(PIECE_POINTS)) {
    total += (sideCounts[piece] || 0) * value;
  }
  return total;
}

/**
 * Computes captured pieces for both sides (relative to baselineFen) and net point advantage.
 */
export function computeMaterialBalance(fen, baselineFen = STANDARD_START_FEN) {
  const current = countPlacementPieces(fen);
  const baseline = countPlacementPieces(baselineFen || STANDARD_START_FEN);

  const whiteCaptured = [];
  for (const code of BLACK_ORDER) {
    const missing = Math.max(0, (baseline.b[code] || 0) - (current.b[code] || 0));
    for (let i = 0; i < missing; i += 1) {
      whiteCaptured.push(code);
    }
  }

  const blackCaptured = [];
  for (const code of WHITE_ORDER) {
    const lower = code.toLowerCase();
    const missing = Math.max(0, (baseline.w[lower] || 0) - (current.w[lower] || 0));
    for (let i = 0; i < missing; i += 1) {
      blackCaptured.push(code);
    }
  }

  const whitePoints = sumPiecePoints(current.w);
  const blackPoints = sumPiecePoints(current.b);

  return {
    whiteCaptured,
    blackCaptured,
    whitePoints,
    blackPoints,
    netWhite: whitePoints - blackPoints,
  };
}
