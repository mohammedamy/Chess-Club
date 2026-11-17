import { Chess } from 'chess.js';
import { describeSuggestedMove, isStockfishSafeFen } from './stockfish-service.js';

// Piece encodings on 0x88 mailbox: +1..+6 White (P,N,B,R,Q,K), -1..-6 Black.
const EMPTY = 0;
const WP = 1;
const WN = 2;
const WB = 3;
const WR = 4;
const WQ = 5;
const WK = 6;

const MATE_SCORE = 50000;
const TT_SIZE = 1 << 16; // 65536 slots, power of two for bitmask indexing
const TT_MASK = TT_SIZE - 1;
const TT_EXACT = 0;
const TT_LOWER = 1;
const TT_UPPER = 2;

export const PERSONALITY_WEIGHTS = {
  balanced: {
    material: 1.0,
    pst: 1.0,
    mobility: 1.0,
    structure: 1.0,
    kingSafety: 1.0,
    center: 1.0,
    simplification: 1.0,
  },
  aggressive: {
    material: 0.9,
    pst: 1.05,
    mobility: 1.45,
    structure: 0.85,
    kingSafety: 1.8,
    center: 1.25,
    simplification: 0.75,
  },
  positional: {
    material: 1.05,
    pst: 1.1,
    mobility: 0.95,
    structure: 1.65,
    kingSafety: 1.45,
    center: 1.15,
    simplification: 1.35,
  },
  prophylactic: {
    material: 1.06,
    pst: 1.05,
    mobility: 0.88,
    structure: 1.8,
    kingSafety: 1.75,
    center: 1.05,
    simplification: 1.5,
  },
  dynamic: {
    material: 1.08,
    pst: 1.2,
    mobility: 1.38,
    structure: 1.28,
    kingSafety: 1.35,
    center: 1.32,
    simplification: 1.15,
  },
  hypermodern: {
    material: 1.02,
    pst: 1.18,
    mobility: 1.26,
    structure: 1.55,
    kingSafety: 1.25,
    center: 0.82,
    simplification: 1.1,
  },
  romantic: {
    material: 0.82,
    pst: 1.12,
    mobility: 1.68,
    structure: 0.78,
    kingSafety: 1.95,
    center: 1.42,
    simplification: 0.6,
  },
};

// PeSTO middlegame / endgame material values (centipawns)
const MG_VALUE = [0, 82, 337, 365, 477, 1025, 0];
const EG_VALUE = [0, 94, 281, 297, 512, 936, 0];
const PHASE_WEIGHT = [0, 0, 1, 1, 2, 4, 0];

// PeSTO tables indexed rank 0 (rank 8) -> rank 7 (rank 1) for White (flipped vertically for Black)
// prettier-ignore
const MG_PST = {
  1: [
      0,   0,   0,   0,   0,   0,  0,   0,
     98, 134,  61,  95,  68, 126, 34, -11,
     -6,   7,  26,  31,  65,  56, 25, -20,
    -14,  13,   6,  21,  23,  12, 17, -23,
    -27,  -2,  -5,  12,  17,   6, 10, -25,
    -26,  -4,  -4, -10,   3,   3, 33, -12,
    -35,  -1, -20, -23, -15,  24, 38, -22,
      0,   0,   0,   0,   0,   0,  0,   0,
  ],
  2: [
    -167, -89, -34, -49,  61, -97, -15, -107,
     -73, -41,  72,  36,  23,  62,   7,  -17,
     -47,  60,  37,  65,  84, 129,  73,   44,
      -9,  17,  19,  53,  37,  69,  18,   22,
     -13,   4,  16,  13,  28,  19,  21,   -8,
     -23,  -9,  12,  10,  19,  17,  25,  -16,
     -29, -53, -12,  -3,  -1,  18, -14,  -19,
    -105, -21, -58, -33, -17, -28, -19,  -23,
  ],
  3: [
    -29,   4, -82, -37, -25, -42,   7,  -8,
    -26,  16, -18, -13,  30,  59,  18, -47,
    -16,  37,  43,  40,  35,  50,  37,  -2,
     -4,   5,  19,  50,  37,  37,   7,  -2,
     -6,  13,  13,  26,  34,  12,  10,   4,
      0,  15,  15,  15,  14,  27,  18,  10,
      4,  15,  16,   0,   7,  21,  33,   1,
    -33,  -3, -14, -21, -13, -12, -39, -21,
  ],
  4: [
     32,  42,  32,  51, 63,  9,  31,  43,
     27,  32,  58,  62, 80, 67,  26,  44,
     -5,  19,  26,  36, 17, 45,  61,  16,
    -24, -11,   7,  26, 24, 35,  -8, -20,
    -36, -26, -12,  -1,  9, -7,   6, -23,
    -45, -25, -16, -17,  3,  0,  -5, -33,
    -44, -16, -20,  -9, -1, 11,  -6, -71,
    -19, -13,   1,  17, 16,  7, -37, -26,
  ],
  5: [
    -28,   0,  29,  12,  59,  44,  43,  45,
    -24, -39,  -5,   1, -16,  57,  28,  54,
    -13, -17,   7,   8,  29,  56,  47,  57,
    -27, -27, -16, -16,  -1,  17,  -2,   1,
     -9, -26,  -9, -10,  -2,  -4,   3,  -3,
    -14,   2, -11,  -2,  -5,   2,  14,   5,
    -35,  -8,  11,   2,   8,  15,  -3,   1,
     -1, -18,  -9,  10, -15, -25, -31, -50,
  ],
  6: [
    -65,  23,  16, -15, -56, -34,   2,  13,
     29,  -1, -20,  -7,  -8,  -4, -38, -29,
     -9,  24,   2, -16, -20,   6,  22, -22,
    -17, -20, -12, -27, -30, -25, -14, -36,
    -49,  -1, -27, -39, -46, -44, -33, -51,
    -14, -14, -22, -46, -44, -30, -15, -27,
      1,   7,  -8, -64, -43, -16,   9,   8,
    -15,  36,  12, -54,   8, -28,  24,  14,
  ],
};

// prettier-ignore
const EG_PST = {
  1: [
      0,   0,   0,   0,   0,   0,   0,   0,
    178, 173, 158, 134, 147, 132, 165, 187,
     94, 100,  85,  67,  56,  53,  82,  84,
     32,  24,  13,   5,  -2,   4,  17,  17,
     13,   9,  -3,  -7,  -7,  -8,   3,  -1,
      4,   7,  -6,   1,   0,  -5,  -1,  -8,
     13,   8,   8,  10,  13,   0,   2,  -7,
      0,   0,   0,   0,   0,   0,   0,   0,
  ],
  2: [
    -58, -38, -13, -28, -31, -27, -63, -99,
    -25,  -8, -25,  -2,  -9, -25, -24, -52,
    -24, -20,  10,   9,  -1,  -9, -19, -41,
    -17,   3,  22,  22,  22,  11,   8, -18,
    -18,  -6,  16,  25,  16,  17,   4, -18,
    -23,  -3,  -1,  15,  10,  -3, -20, -22,
    -42, -20, -10,  -5,  -2, -20, -23, -44,
    -29, -51, -23, -15, -22, -18, -50, -64,
  ],
  3: [
    -14, -21, -11,  -8,  -7,  -9, -17, -24,
     -8,  -4,   7, -12,  -3, -13,  -4, -14,
      2,  -8,   0,  -1,  -2,   6,   0,   4,
     -3,   9,  12,   9,  14,  10,   3,   2,
     -6,   3,  13,  19,   7,  10,  -3,  -9,
    -12,  -3,   8,  10,  13,   3,  -7, -15,
    -14, -18,  -7,  -1,   4,  -9, -15, -27,
    -23,  -9, -23,  -5,  -9, -16,  -5, -17,
  ],
  4: [
    13, 10, 18, 15, 12,  12,   8,   5,
    11, 13, 13, 11, -3,   3,   8,   3,
     7,  7,  7,  5,  4,  -3,  -5,  -3,
     4,  3, 13,  1,  2,   1,  -1,   2,
     3,  5,  8,  4, -5,  -6,  -8, -11,
    -4,  0, -5, -1, -7, -12,  -8, -16,
    -6, -6,  0,  2, -9,  -9, -11,  -3,
    -9,  2,  3, -1, -5, -13,   4, -20,
  ],
  5: [
     -9,  22,  22,  27,  27,  19,  10,  20,
    -17,  20,  32,  41,  58,  25,  30,   0,
    -20,   6,   9,  49,  47,  35,  19,   9,
      3,  22,  24,  45,  57,  40,  57,  36,
    -18,  28,  19,  47,  31,  34,  39,  23,
    -16, -27,  15,   6,   9,  17,  10,   5,
    -22, -23, -30, -16, -16, -23, -36, -32,
    -33, -28, -22, -43,  -5, -32, -20, -41,
  ],
  6: [
    -74, -35, -18, -18, -11,  15,   4, -17,
    -12,  17,  14,  17,  17,  38,  23,  11,
     10,  17,  23,  15,  20,  45,  44,  13,
     -8,  22,  24,  27,  26,  33,  26,   3,
    -18,  -4,  21,  24,  27,  23,   9, -11,
    -19,  -3,  11,  21,  23,  16,   7,  -9,
    -27, -11,   4,  13,  14,   4,  -5, -17,
    -53, -34, -21, -11, -28, -14, -24, -43,
  ],
};

// 0x88 delta vectors
const KNIGHT_DIRS = [-33, -31, -18, -14, 14, 18, 31, 33];
const BISHOP_DIRS = [-17, -15, 15, 17];
const ROOK_DIRS = [-16, -1, 1, 16];
const KING_DIRS = [-17, -16, -15, -1, 1, 15, 16, 17];
const PIECE_CHARS = { P: 1, N: 2, B: 3, R: 4, Q: 5, K: 6, p: -1, n: -2, b: -3, r: -4, q: -5, k: -6 };
const PROMO_CHARS = ['', '', 'n', 'b', 'r', 'q'];

// Deterministic Zobrist keys (two 32-bit halves per key)
const Z_P1 = Array.from({ length: 13 }, () => new Uint32Array(128));
const Z_P2 = Array.from({ length: 13 }, () => new Uint32Array(128));
const Z_CAS1 = new Uint32Array(16);
const Z_CAS2 = new Uint32Array(16);
const Z_EP1 = new Uint32Array(9);
const Z_EP2 = new Uint32Array(9);
let Z_SIDE1 = 0;
let Z_SIDE2 = 0;

(function initZobrist() {
  let seed = 0x9e3779b9;
  const nextRand = () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return (t ^ (t >>> 14)) >>> 0;
  };
  for (let p = 0; p < 13; p += 1) {
    for (let sq = 0; sq < 128; sq += 1) {
      Z_P1[p][sq] = nextRand();
      Z_P2[p][sq] = nextRand();
    }
  }
  for (let c = 0; c < 16; c += 1) {
    Z_CAS1[c] = nextRand();
    Z_CAS2[c] = nextRand();
  }
  for (let e = 0; e < 9; e += 1) {
    Z_EP1[e] = nextRand();
    Z_EP2[e] = nextRand();
  }
  Z_SIDE1 = nextRand();
  Z_SIDE2 = nextRand();
})();

function algTo0x88(sq) {
  const f = sq.charCodeAt(0) - 97;
  const r = 8 - Number(sq[1]);
  return (r << 4) | f;
}

function sq0x88ToAlg(sq) {
  return String.fromCharCode(97 + (sq & 7)) + String(8 - (sq >> 4));
}

function encodeMove(from, to, promo = 0, flags = 0) {
  return from | (to << 7) | (promo << 14) | (flags << 17);
}

function moveToUci(m) {
  const from = m & 0x7f;
  const to = (m >> 7) & 0x7f;
  const promo = (m >> 14) & 7;
  return sq0x88ToAlg(from) + sq0x88ToAlg(to) + (promo ? PROMO_CHARS[promo] : '');
}

function parseFenState(fen) {
  const parts = fen.trim().split(/\s+/);
  const board = new Int8Array(128);
  const ranks = parts[0].split('/');
  let wkSq = -1;
  let bkSq = -1;
  let h1 = 0;
  let h2 = 0;

  for (let r = 0; r < 8; r += 1) {
    let f = 0;
    for (const ch of ranks[r]) {
      if (ch >= '1' && ch <= '8') {
        f += Number(ch);
      } else {
        const piece = PIECE_CHARS[ch] || 0;
        const sq = (r << 4) | f;
        board[sq] = piece;
        if (piece === WK) wkSq = sq;
        else if (piece === -WK) bkSq = sq;
        const idx = piece + 6;
        h1 = (h1 ^ Z_P1[idx][sq]) >>> 0;
        h2 = (h2 ^ Z_P2[idx][sq]) >>> 0;
        f += 1;
      }
    }
  }

  const turn = parts[1] === 'b' ? -1 : 1;
  if (turn === -1) {
    h1 = (h1 ^ Z_SIDE1) >>> 0;
    h2 = (h2 ^ Z_SIDE2) >>> 0;
  }

  let castling = 0;
  const cStr = parts[2] || '-';
  if (cStr.includes('K')) castling |= 1;
  if (cStr.includes('Q')) castling |= 2;
  if (cStr.includes('k')) castling |= 4;
  if (cStr.includes('q')) castling |= 8;
  h1 = (h1 ^ Z_CAS1[castling]) >>> 0;
  h2 = (h2 ^ Z_CAS2[castling]) >>> 0;

  let epSq = -1;
  if (parts[3] && parts[3] !== '-' && parts[3].length >= 2) {
    epSq = algTo0x88(parts[3]);
    h1 = (h1 ^ Z_EP1[(epSq & 7) + 1]) >>> 0;
    h2 = (h2 ^ Z_EP2[(epSq & 7) + 1]) >>> 0;
  } else {
    h1 = (h1 ^ Z_EP1[0]) >>> 0;
    h2 = (h2 ^ Z_EP2[0]) >>> 0;
  }

  return { board, turn, castling, epSq, wkSq, bkSq, h1, h2 };
}

function isSquareAttacked(board, sq, bySide) {
  // Pawn attacks: if White attacks `sq`, pawn sits one rank below (+15/+17)
  const pawnStep = bySide === 1 ? 16 : -16;
  const wp = bySide * WP;
  const pLeft = sq + pawnStep - 1;
  const pRight = sq + pawnStep + 1;
  if ((pLeft & 0x88) === 0 && board[pLeft] === wp) return true;
  if ((pRight & 0x88) === 0 && board[pRight] === wp) return true;

  const wn = bySide * WN;
  for (let i = 0; i < 8; i += 1) {
    const t = sq + KNIGHT_DIRS[i];
    if ((t & 0x88) === 0 && board[t] === wn) return true;
  }

  const wk = bySide * WK;
  for (let i = 0; i < 8; i += 1) {
    const t = sq + KING_DIRS[i];
    if ((t & 0x88) === 0 && board[t] === wk) return true;
  }

  const wb = bySide * WB;
  const wr = bySide * WR;
  const wq = bySide * WQ;
  for (let i = 0; i < 4; i += 1) {
    const d = BISHOP_DIRS[i];
    let t = sq + d;
    while ((t & 0x88) === 0) {
      const p = board[t];
      if (p !== 0) {
        if (p === wb || p === wq) return true;
        break;
      }
      t += d;
    }
  }
  for (let i = 0; i < 4; i += 1) {
    const d = ROOK_DIRS[i];
    let t = sq + d;
    while ((t & 0x88) === 0) {
      const p = board[t];
      if (p !== 0) {
        if (p === wr || p === wq) return true;
        break;
      }
      t += d;
    }
  }
  return false;
}

const CASTLING_MASK = new Int8Array(128).fill(15);
CASTLING_MASK[0x74] = 12; // e1
CASTLING_MASK[0x77] = 14; // h1
CASTLING_MASK[0x70] = 13; // a1
CASTLING_MASK[0x04] = 3;  // e8
CASTLING_MASK[0x07] = 11; // h8
CASTLING_MASK[0x00] = 7;  // a8

function makeMove0x88(state, m, undo) {
  const b = state.board;
  const from = m & 0x7f;
  const to = (m >> 7) & 0x7f;
  const promo = (m >> 14) & 7;
  const flags = (m >> 17) & 15;
  const piece = b[from];
  const side = state.turn;

  undo.piece = piece;
  undo.captured = b[to];
  undo.castling = state.castling;
  undo.epSq = state.epSq;
  undo.wkSq = state.wkSq;
  undo.bkSq = state.bkSq;
  undo.h1 = state.h1;
  undo.h2 = state.h2;

  let h1 = (state.h1 ^ Z_SIDE1 ^ Z_CAS1[state.castling]) >>> 0;
  let h2 = (state.h2 ^ Z_SIDE2 ^ Z_CAS2[state.castling]) >>> 0;
  const oldEpIdx = state.epSq >= 0 ? (state.epSq & 7) + 1 : 0;
  h1 = (h1 ^ Z_EP1[oldEpIdx]) >>> 0;
  h2 = (h2 ^ Z_EP2[oldEpIdx]) >>> 0;

  h1 = (h1 ^ Z_P1[piece + 6][from]) >>> 0;
  h2 = (h2 ^ Z_P2[piece + 6][from]) >>> 0;
  if (undo.captured !== 0) {
    h1 = (h1 ^ Z_P1[undo.captured + 6][to]) >>> 0;
    h2 = (h2 ^ Z_P2[undo.captured + 6][to]) >>> 0;
  }

  b[from] = EMPTY;
  const placed = promo ? side * promo : piece;
  b[to] = placed;
  h1 = (h1 ^ Z_P1[placed + 6][to]) >>> 0;
  h2 = (h2 ^ Z_P2[placed + 6][to]) >>> 0;

  if (flags & 2) {
    // En passant
    const capSq = (from & 0x70) | (to & 7);
    const capP = b[capSq];
    b[capSq] = EMPTY;
    h1 = (h1 ^ Z_P1[capP + 6][capSq]) >>> 0;
    h2 = (h2 ^ Z_P2[capP + 6][capSq]) >>> 0;
  }

  if (flags & 4) {
    // Castling rook shift
    let rFrom = 0;
    let rTo = 0;
    if (to === 0x76) { rFrom = 0x77; rTo = 0x75; }
    else if (to === 0x72) { rFrom = 0x70; rTo = 0x73; }
    else if (to === 0x06) { rFrom = 0x07; rTo = 0x05; }
    else if (to === 0x02) { rFrom = 0x00; rTo = 0x03; }
    if (rFrom !== rTo) {
      const rook = b[rFrom];
      b[rFrom] = EMPTY;
      b[rTo] = rook;
      h1 = (h1 ^ Z_P1[rook + 6][rFrom] ^ Z_P1[rook + 6][rTo]) >>> 0;
      h2 = (h2 ^ Z_P2[rook + 6][rFrom] ^ Z_P2[rook + 6][rTo]) >>> 0;
    }
  }

  if (piece === WK) state.wkSq = to;
  else if (piece === -WK) state.bkSq = to;

  state.castling = state.castling & CASTLING_MASK[from] & CASTLING_MASK[to];
  h1 = (h1 ^ Z_CAS1[state.castling]) >>> 0;
  h2 = (h2 ^ Z_CAS2[state.castling]) >>> 0;

  if (flags & 8) {
    state.epSq = (from + to) >> 1;
    h1 = (h1 ^ Z_EP1[(state.epSq & 7) + 1]) >>> 0;
    h2 = (h2 ^ Z_EP2[(state.epSq & 7) + 1]) >>> 0;
  } else {
    state.epSq = -1;
    h1 = (h1 ^ Z_EP1[0]) >>> 0;
    h2 = (h2 ^ Z_EP2[0]) >>> 0;
  }

  state.turn = -side;
  state.h1 = h1;
  state.h2 = h2;
}

function unmakeMove0x88(state, m, undo) {
  const b = state.board;
  const from = m & 0x7f;
  const to = (m >> 7) & 0x7f;
  const flags = (m >> 17) & 15;
  const prevSide = -state.turn;

  b[from] = undo.piece;
  b[to] = undo.captured;

  if (flags & 2) {
    const capSq = (from & 0x70) | (to & 7);
    b[capSq] = -prevSide * WP;
  }

  if (flags & 4) {
    if (to === 0x76) { b[0x77] = WR; b[0x75] = EMPTY; }
    else if (to === 0x72) { b[0x70] = WR; b[0x73] = EMPTY; }
    else if (to === 0x06) { b[0x07] = -WR; b[0x05] = EMPTY; }
    else if (to === 0x02) { b[0x00] = -WR; b[0x03] = EMPTY; }
  }

  state.turn = prevSide;
  state.castling = undo.castling;
  state.epSq = undo.epSq;
  state.wkSq = undo.wkSq;
  state.bkSq = undo.bkSq;
  state.h1 = undo.h1;
  state.h2 = undo.h2;
}

function generateMoves0x88(state, out, capturesOnly = false) {
  const b = state.board;
  const side = state.turn;
  const fwd = side === 1 ? -16 : 16;
  const startRow = side === 1 ? 6 : 1;
  const promoRow = side === 1 ? 0 : 7;
  let count = 0;

  for (let r = 0; r < 8; r += 1) {
    const base = r << 4;
    for (let f = 0; f < 8; f += 1) {
      const sq = base | f;
      const p = b[sq];
      if (p === 0 || (p > 0 ? 1 : -1) !== side) continue;
      const type = p > 0 ? p : -p;

      if (type === WP) {
        const one = sq + fwd;
        if ((one & 0x88) === 0 && b[one] === 0) {
          const toRow = one >> 4;
          if (toRow === promoRow) {
            out[count++] = encodeMove(sq, one, WQ, 0);
            if (!capturesOnly) {
              out[count++] = encodeMove(sq, one, WR, 0);
              out[count++] = encodeMove(sq, one, WB, 0);
              out[count++] = encodeMove(sq, one, WN, 0);
            }
          } else if (!capturesOnly) {
            out[count++] = encodeMove(sq, one, 0, 0);
            if (r === startRow) {
              const two = one + fwd;
              if (b[two] === 0) out[count++] = encodeMove(sq, two, 0, 8);
            }
          }
        }
        // Pawn captures & EP
        for (const dc of [-1, 1]) {
          const cap = one + dc;
          if (cap & 0x88) continue;
          const target = b[cap];
          if (target !== 0 && (target > 0 ? 1 : -1) !== side) {
            if ((cap >> 4) === promoRow) {
              out[count++] = encodeMove(sq, cap, WQ, 1);
              if (!capturesOnly) {
                out[count++] = encodeMove(sq, cap, WR, 1);
                out[count++] = encodeMove(sq, cap, WB, 1);
                out[count++] = encodeMove(sq, cap, WN, 1);
              }
            } else {
              out[count++] = encodeMove(sq, cap, 0, 1);
            }
          } else if (cap === state.epSq && state.epSq >= 0) {
            out[count++] = encodeMove(sq, cap, 0, 3);
          }
        }
      } else if (type === WN) {
        for (let i = 0; i < 8; i += 1) {
          const t = sq + KNIGHT_DIRS[i];
          if (t & 0x88) continue;
          const occ = b[t];
          if (occ === 0) {
            if (!capturesOnly) out[count++] = encodeMove(sq, t, 0, 0);
          } else if ((occ > 0 ? 1 : -1) !== side) {
            out[count++] = encodeMove(sq, t, 0, 1);
          }
        }
      } else if (type === WK) {
        for (let i = 0; i < 8; i += 1) {
          const t = sq + KING_DIRS[i];
          if (t & 0x88) continue;
          const occ = b[t];
          if (occ === 0) {
            if (!capturesOnly) out[count++] = encodeMove(sq, t, 0, 0);
          } else if ((occ > 0 ? 1 : -1) !== side) {
            out[count++] = encodeMove(sq, t, 0, 1);
          }
        }
        if (!capturesOnly) {
          if (side === 1 && sq === 0x74) {
            if ((state.castling & 1) && b[0x75] === 0 && b[0x76] === 0 && b[0x77] === WR &&
                !isSquareAttacked(b, 0x74, -1) && !isSquareAttacked(b, 0x75, -1)) {
              out[count++] = encodeMove(0x74, 0x76, 0, 4);
            }
            if ((state.castling & 2) && b[0x73] === 0 && b[0x72] === 0 && b[0x71] === 0 && b[0x70] === WR &&
                !isSquareAttacked(b, 0x74, -1) && !isSquareAttacked(b, 0x73, -1)) {
              out[count++] = encodeMove(0x74, 0x72, 0, 4);
            }
          } else if (side === -1 && sq === 0x04) {
            if ((state.castling & 4) && b[0x05] === 0 && b[0x06] === 0 && b[0x07] === -WR &&
                !isSquareAttacked(b, 0x04, 1) && !isSquareAttacked(b, 0x05, 1)) {
              out[count++] = encodeMove(0x04, 0x06, 0, 4);
            }
            if ((state.castling & 8) && b[0x03] === 0 && b[0x02] === 0 && b[0x01] === 0 && b[0x00] === -WR &&
                !isSquareAttacked(b, 0x04, 1) && !isSquareAttacked(b, 0x03, 1)) {
              out[count++] = encodeMove(0x04, 0x02, 0, 4);
            }
          }
        }
      } else {
        const dirs = type === WB ? BISHOP_DIRS : type === WR ? ROOK_DIRS : KING_DIRS;
        const dLen = dirs.length;
        for (let i = 0; i < dLen; i += 1) {
          const d = dirs[i];
          let t = sq + d;
          while ((t & 0x88) === 0) {
            const occ = b[t];
            if (occ === 0) {
              if (!capturesOnly) out[count++] = encodeMove(sq, t, 0, 0);
            } else {
              if ((occ > 0 ? 1 : -1) !== side) out[count++] = encodeMove(sq, t, 0, 1);
              break;
            }
            t += d;
          }
        }
      }
    }
  }
  return count;
}

function evaluateStateBreakdown(state, personality = 'balanced') {
  const weights = PERSONALITY_WEIGHTS[personality] || PERSONALITY_WEIGHTS.balanced;
  const b = state.board;

  let mgMat = 0;
  let egMat = 0;
  let mgPst = 0;
  let egPst = 0;
  let phase = 0;
  let mobilityRaw = 0;
  let centerRaw = 0;
  let kingSafetyRaw = 0;
  let hyperStructRaw = 0;

  const whitePawnFiles = new Int8Array(8);
  const blackPawnFiles = new Int8Array(8);
  const whitePawnsByFile = Array.from({ length: 8 }, () => []);
  const blackPawnsByFile = Array.from({ length: 8 }, () => []);
  let wBishops = 0;
  let bBishops = 0;

  const bkRow = state.bkSq >> 4;
  const bkFile = state.bkSq & 7;
  const wkRow = state.wkSq >> 4;
  const wkFile = state.wkSq & 7;

  for (let r = 0; r < 8; r += 1) {
    const base = r << 4;
    for (let f = 0; f < 8; f += 1) {
      const sq = base | f;
      const p = b[sq];
      if (p === 0) continue;
      const side = p > 0 ? 1 : -1;
      const type = p > 0 ? p : -p;
      const pstIdx = side === 1 ? (r * 8 + f) : ((7 - r) * 8 + f);

      mgMat += side * MG_VALUE[type];
      egMat += side * EG_VALUE[type];
      mgPst += side * MG_PST[type][pstIdx];
      egPst += side * EG_PST[type][pstIdx];
      phase += PHASE_WEIGHT[type];

      if (type === WP) {
        if (side === 1) {
          whitePawnFiles[f] += 1;
          whitePawnsByFile[f].push(r);
          if ((r === 3 || r === 4) && (f === 3 || f === 4)) centerRaw += 22;
          else if ((r === 4 || r === 5) && (f >= 2 && f <= 5)) centerRaw += 9;
        } else {
          blackPawnFiles[f] += 1;
          blackPawnsByFile[f].push(r);
          if ((r === 3 || r === 4) && (f === 3 || f === 4)) centerRaw -= 22;
          else if ((r === 2 || r === 3) && (f >= 2 && f <= 5)) centerRaw -= 9;
        }
      } else if (type === WN) {
        let mob = 0;
        for (let i = 0; i < 8; i += 1) {
          const t = sq + KNIGHT_DIRS[i];
          if ((t & 0x88) === 0 && (b[t] === 0 || (b[t] > 0 ? 1 : -1) !== side)) mob += 1;
        }
        mobilityRaw += side * (mob * 4);
        if (f >= 2 && f <= 5 && r >= 2 && r <= 5) centerRaw += side * 14;
        if (personality === 'hypermodern' && f >= 2 && f <= 5) {
          if (side === 1 && r >= 2 && r <= 4) {
            const hasPawnSupport =
              (f > 0 && b[((r + 1) << 4) | (f - 1)] === WP) ||
              (f < 7 && b[((r + 1) << 4) | (f + 1)] === WP);
            if (hasPawnSupport) {
              hyperStructRaw += 22;
              if (b[((r - 1) << 4) | f] === -WP) hyperStructRaw += 16;
            }
          } else if (side === -1 && r >= 3 && r <= 5) {
            const hasPawnSupport =
              (f > 0 && b[((r - 1) << 4) | (f - 1)] === -WP) ||
              (f < 7 && b[((r - 1) << 4) | (f + 1)] === -WP);
            if (hasPawnSupport) {
              hyperStructRaw -= 22;
              if (b[((r + 1) << 4) | f] === WP) hyperStructRaw -= 16;
            }
          }
        }
        const oppKDist = Math.abs(r - (side === 1 ? bkRow : wkRow)) + Math.abs(f - (side === 1 ? bkFile : wkFile));
        if (oppKDist <= 3) kingSafetyRaw += side * 14;
      } else if (type === WB) {
        if (side === 1) wBishops += 1;
        else bBishops += 1;
        if (personality === 'hypermodern') {
          if (side === 1 && r === 6 && (f === 1 || f === 6)) hyperStructRaw += 22;
          else if (side === -1 && r === 1 && (f === 1 || f === 6)) hyperStructRaw -= 22;
        }
        let mob = 0;
        for (let i = 0; i < 4; i += 1) {
          const d = BISHOP_DIRS[i];
          let t = sq + d;
          while ((t & 0x88) === 0) {
            mob += 1;
            const tr = t >> 4;
            const tf = t & 7;
            if (Math.abs(tr - (side === 1 ? bkRow : wkRow)) <= 1 && Math.abs(tf - (side === 1 ? bkFile : wkFile)) <= 1) {
              kingSafetyRaw += side * 12;
            }
            if (b[t] !== 0) break;
            t += d;
          }
        }
        mobilityRaw += side * (mob * 3);
      } else if (type === WR) {
        let mob = 0;
        for (let i = 0; i < 4; i += 1) {
          const d = ROOK_DIRS[i];
          let t = sq + d;
          while ((t & 0x88) === 0) {
            mob += 1;
            if (b[t] !== 0) break;
            t += d;
          }
        }
        mobilityRaw += side * (mob * 2);
        if ((side === 1 && r === 1) || (side === -1 && r === 6)) {
          kingSafetyRaw += side * (personality === 'dynamic' ? 28 : 16);
        }
      } else if (type === WQ) {
        let mob = 0;
        for (let i = 0; i < 8; i += 1) {
          const d = KING_DIRS[i];
          let t = sq + d;
          while ((t & 0x88) === 0) {
            mob += 1;
            const tr = t >> 4;
            const tf = t & 7;
            if (Math.abs(tr - (side === 1 ? bkRow : wkRow)) <= 1 && Math.abs(tf - (side === 1 ? bkFile : wkFile)) <= 1) {
              kingSafetyRaw += side * 18;
            }
            if (b[t] !== 0) break;
            t += d;
          }
        }
        mobilityRaw += side * Math.round(mob * 1.5);
      }
    }
  }

  const mgWeight = Math.min(24, phase);
  const egWeight = 24 - mgWeight;
  const rawMaterial = Math.round((mgMat * mgWeight + egMat * egWeight) / 24);
  const rawPst = Math.round((mgPst * mgWeight + egPst * egWeight) / 24);

  // Pawn structure & passed pawns + rook file bonuses + personality-specific positional terms
  const bishopPairBonus = personality === 'dynamic' ? 52 : 28;
  let structureRaw = hyperStructRaw + (wBishops >= 2 ? bishopPairBonus : 0) - (bBishops >= 2 ? bishopPairBonus : 0);
  const isoPenalty = personality === 'prophylactic' ? 26 : 18;
  for (let f = 0; f < 8; f += 1) {
    const wc = whitePawnFiles[f];
    const bc = blackPawnFiles[f];
    if (wc > 1) structureRaw -= 16 * (wc - 1);
    if (bc > 1) structureRaw += 16 * (bc - 1);
    if (wc > 0 && (f === 0 || whitePawnFiles[f - 1] === 0) && (f === 7 || whitePawnFiles[f + 1] === 0)) {
      structureRaw -= isoPenalty * wc;
    }
    if (bc > 0 && (f === 0 || blackPawnFiles[f - 1] === 0) && (f === 7 || blackPawnFiles[f + 1] === 0)) {
      structureRaw += isoPenalty * bc;
    }

    // Passed pawns
    for (const r of whitePawnsByFile[f]) {
      let passed = true;
      for (let df = Math.max(0, f - 1); df <= Math.min(7, f + 1); df += 1) {
        if (blackPawnsByFile[df].some((br) => br < r)) {
          passed = false;
          break;
        }
      }
      if (passed) structureRaw += (7 - r) * (egWeight > 12 ? 14 : 9);
    }
    for (const r of blackPawnsByFile[f]) {
      let passed = true;
      for (let df = Math.max(0, f - 1); df <= Math.min(7, f + 1); df += 1) {
        if (whitePawnsByFile[df].some((wr) => wr > r)) {
          passed = false;
          break;
        }
      }
      if (passed) structureRaw -= r * (egWeight > 12 ? 14 : 9);
    }
  }

  // Open file rooks (scaled modestly into structure, amplified for Fischer dynamic)
  for (let r = 0; r < 8; r += 1) {
    for (let f = 0; f < 8; f += 1) {
      const p = b[(r << 4) | f];
      if (p === WR) {
        if (whitePawnFiles[f] === 0) {
          structureRaw += blackPawnFiles[f] === 0 ? 22 : 11;
          if (personality === 'dynamic') mobilityRaw += blackPawnFiles[f] === 0 ? 14 : 8;
        }
      } else if (p === -WR) {
        if (blackPawnFiles[f] === 0) {
          structureRaw -= whitePawnFiles[f] === 0 ? 22 : 11;
          if (personality === 'dynamic') mobilityRaw -= whitePawnFiles[f] === 0 ? 14 : 8;
        }
      }
    }
  }

  // Morphy romantic rapid-development and uncastled-king initiative penalties in opening/middlegame
  if (personality === 'romantic' && mgWeight > 10) {
    for (const hf of [1, 2, 5, 6]) {
      if (b[(7 << 4) | hf] === WN || b[(7 << 4) | hf] === WB) mobilityRaw -= 16;
      if (b[(0 << 4) | hf] === -WN || b[(0 << 4) | hf] === -WB) mobilityRaw += 16;
    }
    if (wkRow === 7 && wkFile === 4) kingSafetyRaw -= 24;
    if (bkRow === 0 && bkFile === 4) kingSafetyRaw += 24;
  }

  // King pawn-shield in middlegame
  if (mgWeight > 6) {
    const shieldStep = personality === 'prophylactic' ? 22 : 14;
    let wShield = 0;
    if (wkRow >= 6) {
      for (let df = -1; df <= 1; df += 1) {
        const ff = wkFile + df;
        if (ff >= 0 && ff < 8 && (b[((wkRow - 1) << 4) | ff] === WP || (wkRow >= 2 && b[((wkRow - 2) << 4) | ff] === WP))) {
          wShield += shieldStep;
        }
      }
    } else {
      wShield -= 28;
    }
    let bShield = 0;
    if (bkRow <= 1) {
      for (let df = -1; df <= 1; df += 1) {
        const ff = bkFile + df;
        if (ff >= 0 && ff < 8 && (b[((bkRow + 1) << 4) | ff] === -WP || (bkRow <= 5 && b[((bkRow + 2) << 4) | ff] === -WP))) {
          bShield += shieldStep;
        }
      }
    } else {
      bShield -= 28;
    }
    kingSafetyRaw += Math.round(((wShield - bShield) * mgWeight) / 24);
  }

  const material = Math.round(rawMaterial * weights.material);
  const pst = Math.round(rawPst * weights.pst);
  const mobility = Math.round(mobilityRaw * weights.mobility);
  const structure = Math.round(structureRaw * weights.structure);
  const kingSafety = Math.round(kingSafetyRaw * weights.kingSafety);
  const center = Math.round(centerRaw * weights.center);

  // Reward piece trading when up a pawn or more according to personality simplification weight
  let simpBonus = 0;
  if (Math.abs(rawMaterial) >= 100) {
    simpBonus = Math.round(Math.sign(rawMaterial) * egWeight * 1.6 * (weights.simplification - 1));
  }

  const whiteCp = material + pst + mobility + structure + kingSafety + center + simpBonus;
  return { whiteCp, material, pst, mobility, structure, kingSafety, center };
}

/**
 * Computes a White-normalized classical evaluation and positional breakdown for any FEN.
 */
export function evaluateClassicalBreakdown(fen, personality = 'balanced') {
  if (!isStockfishSafeFen(fen, Chess)) {
    return { whiteCp: 0, material: 0, pst: 0, mobility: 0, structure: 0, kingSafety: 0, center: 0 };
  }
  const state = parseFenState(fen);
  return evaluateStateBreakdown(state, personality);
}

/**
 * Executes a deterministic multi-ply alpha-beta search with PVS, TT, MVV-LVA, and MultiPV=3 reporting.
 */
export function searchClassicalPosition(
  fen,
  {
    personality = 'balanced',
    depth = 4,
    multiPv = 3,
    maxTimeMs = 850,
    noiseCp = 0,
    historyFens = [],
    engineFlavor = 'Classical HCE',
    onProgress = null,
    shouldAbort = null,
  } = {},
) {
  const startTime = Date.now();
  if (!isStockfishSafeFen(fen, Chess)) {
    const snap = {
      fen,
      engineFlavor,
      depth: 0,
      nps: 0,
      nodes: 0,
      lines: [],
      whiteCp: 0,
      whiteMate: null,
      breakdown: null,
      evaluating: false,
      unsafeFen: true,
    };
    if (onProgress) onProgress(snap);
    return { chosenUci: null, chosenSan: null, snapshot: snap, elapsedMs: 0 };
  }

  const rootGame = new Chess(fen);
  const rootTurn = rootGame.turn();
  const sideMul = rootTurn === 'b' ? -1 : 1;
  const rootBreakdown = evaluateClassicalBreakdown(fen, personality);

  if (rootGame.game_over()) {
    const whiteMate = rootGame.in_checkmate() ? (rootTurn === 'w' ? -1 : 1) : null;
    const snap = {
      fen,
      engineFlavor,
      depth: 0,
      nps: 0,
      nodes: 0,
      lines: [],
      whiteCp: 0,
      whiteMate,
      breakdown: rootBreakdown,
      evaluating: false,
      gameOver: true,
    };
    if (onProgress) onProgress(snap);
    return { chosenUci: null, chosenSan: null, snapshot: snap, elapsedMs: 0 };
  }

  const verboseRootMoves = rootGame.moves({ verbose: true });
  const historySet = new Set(historyFens);

  // Pre-build root children via chess.js so Chess960, promotions, draws, and repetitions are 100% legal
  const rootEntries = verboseRootMoves.map((m) => {
    const childGame = new Chess(fen);
    const played = childGame.move({ from: m.from, to: m.to, promotion: m.promotion });
    const uci = m.from + m.to + (m.promotion || '');
    const fenPrefix = childGame.fen().split(' ').slice(0, 4).join(' ');
    const isRepeat = historySet.has(fenPrefix) || childGame.in_threefold_repetition();
    const childFen = childGame.fen();
    return {
      uci,
      from: m.from,
      to: m.to,
      san: played ? played.san : m.san,
      childFen,
      isCheckmate: childGame.in_checkmate(),
      isDraw: childGame.in_draw() || childGame.in_stalemate() || childGame.insufficient_material(),
      isRepeat,
      childState: childGame.game_over() ? null : parseFenState(childFen),
      score: -Infinity,
      pvUci: [uci],
    };
  });

  // Order initial root moves by captures/promotions/checks (plus romantic forcing/castling bias)
  const basePriority = (entry) =>
    (entry.isCheckmate ? 10000 : 0) +
    (entry.san.includes('x') ? 200 : 0) +
    (entry.san.includes('+') ? (personality === 'romantic' ? 160 : 100) : 0) +
    (personality === 'romantic' && entry.san.startsWith('O-O') ? 140 : 0) +
    (entry.uci.length > 4 ? 150 : 0);
  rootEntries.sort((a, b) => basePriority(b) - basePriority(a));

  // Pre-allocated search structures
  const ttH1 = new Uint32Array(TT_SIZE);
  const ttH2 = new Uint32Array(TT_SIZE);
  const ttDepth = new Int8Array(TT_SIZE).fill(-1);
  const ttFlag = new Int8Array(TT_SIZE);
  const ttScore = new Int32Array(TT_SIZE);
  const ttMove = new Int32Array(TT_SIZE);

  const moveStacks = Array.from({ length: 32 }, () => new Int32Array(256));
  const scoreStacks = Array.from({ length: 32 }, () => new Int32Array(256));
  const undoStacks = Array.from({ length: 32 }, () => ({
    piece: 0, captured: 0, castling: 0, epSq: -1, wkSq: -1, bkSq: -1, h1: 0, h2: 0,
  }));
  const killer1 = new Int32Array(32);
  const killer2 = new Int32Array(32);

  let nodes = 0;
  let aborted = false;

  const checkTime = () => {
    if (shouldAbort && shouldAbort()) {
      aborted = true;
      return true;
    }
    if ((nodes & 2047) === 0 && Date.now() - startTime >= maxTimeMs) {
      aborted = true;
      return true;
    }
    return false;
  };

  const orderMoves = (b, moves, scores, count, ttBest, ply) => {
    for (let i = 0; i < count; i += 1) {
      const m = moves[i];
      if (m === ttBest) {
        scores[i] = 1000000;
        continue;
      }
      const flags = (m >> 17) & 15;
      const promo = (m >> 14) & 7;
      if (flags & 1) {
        const from = m & 0x7f;
        const to = (m >> 7) & 0x7f;
        const victim = flags & 2 ? 1 : Math.abs(b[to]);
        const attacker = Math.abs(b[from]);
        scores[i] = 500000 + victim * 100 - attacker + promo * 40;
      } else if (promo) {
        scores[i] = 400000 + promo * 40;
      } else if (m === killer1[ply]) {
        scores[i] = 300000;
      } else if (m === killer2[ply]) {
        scores[i] = 200000;
      } else {
        scores[i] = 0;
      }
    }
  };

  const pickBestAt = (moves, scores, count, startIdx) => {
    let bestIdx = startIdx;
    let bestVal = scores[startIdx];
    for (let i = startIdx + 1; i < count; i += 1) {
      if (scores[i] > bestVal) {
        bestVal = scores[i];
        bestIdx = i;
      }
    }
    if (bestIdx !== startIdx) {
      const tm = moves[startIdx];
      moves[startIdx] = moves[bestIdx];
      moves[bestIdx] = tm;
      const ts = scores[startIdx];
      scores[startIdx] = scores[bestIdx];
      scores[bestIdx] = ts;
    }
  };

  const qsearch = (state, alpha, beta, ply, qDepth) => {
    nodes += 1;
    if (checkTime()) return 0;

    const standPat = state.turn * evaluateStateBreakdown(state, personality).whiteCp;
    if (standPat >= beta) return beta;
    if (alpha < standPat) alpha = standPat;
    if (qDepth >= 5 || ply >= 28) return alpha;

    const moves = moveStacks[ply];
    const scores = scoreStacks[ply];
    const count = generateMoves0x88(state, moves, true);
    orderMoves(state.board, moves, scores, count, 0, ply);
    const undo = undoStacks[ply];
    const mover = state.turn;

    for (let i = 0; i < count; i += 1) {
      pickBestAt(moves, scores, count, i);
      const m = moves[i];
      makeMove0x88(state, m, undo);
      const kSq = mover === 1 ? state.wkSq : state.bkSq;
      if (isSquareAttacked(state.board, kSq, -mover)) {
        unmakeMove0x88(state, m, undo);
        continue;
      }
      const val = -qsearch(state, -beta, -alpha, ply + 1, qDepth + 1);
      unmakeMove0x88(state, m, undo);
      if (aborted) return 0;
      if (val >= beta) return beta;
      if (val > alpha) alpha = val;
    }
    return alpha;
  };

  const alphaBeta = (state, remDepth, alpha, beta, ply) => {
    if (ply >= 28) return state.turn * evaluateStateBreakdown(state, personality).whiteCp;
    if (remDepth <= 0) return qsearch(state, alpha, beta, ply, 0);

    nodes += 1;
    if (checkTime()) return 0;

    const origAlpha = alpha;
    const slot = (state.h1 ^ state.h2) & TT_MASK;
    let ttBest = 0;
    if (ttDepth[slot] >= 0 && ttH1[slot] === state.h1 && ttH2[slot] === state.h2) {
      ttBest = ttMove[slot];
      if (ttDepth[slot] >= remDepth) {
        const s = ttScore[slot];
        if (ttFlag[slot] === TT_EXACT) return s;
        if (ttFlag[slot] === TT_LOWER && s > alpha) alpha = s;
        else if (ttFlag[slot] === TT_UPPER && s < beta) beta = s;
        if (alpha >= beta) return s;
      }
    }

    const moves = moveStacks[ply];
    const scores = scoreStacks[ply];
    const count = generateMoves0x88(state, moves, false);
    orderMoves(state.board, moves, scores, count, ttBest, ply);
    const undo = undoStacks[ply];
    const mover = state.turn;

    let legalCount = 0;
    let bestVal = -Infinity;
    let bestMove = 0;

    for (let i = 0; i < count; i += 1) {
      pickBestAt(moves, scores, count, i);
      const m = moves[i];
      makeMove0x88(state, m, undo);
      const kSq = mover === 1 ? state.wkSq : state.bkSq;
      if (isSquareAttacked(state.board, kSq, -mover)) {
        unmakeMove0x88(state, m, undo);
        continue;
      }
      legalCount += 1;

      let val;
      if (legalCount === 1) {
        val = -alphaBeta(state, remDepth - 1, -beta, -alpha, ply + 1);
      } else {
        val = -alphaBeta(state, remDepth - 1, -alpha - 1, -alpha, ply + 1);
        if (!aborted && val > alpha && val < beta) {
          val = -alphaBeta(state, remDepth - 1, -beta, -alpha, ply + 1);
        }
      }
      unmakeMove0x88(state, m, undo);
      if (aborted) return 0;

      if (val > bestVal) {
        bestVal = val;
        bestMove = m;
        if (val > alpha) {
          alpha = val;
          if (alpha >= beta) {
            if (((m >> 17) & 1) === 0 && ((m >> 14) & 7) === 0) {
              killer2[ply] = killer1[ply];
              killer1[ply] = m;
            }
            break;
          }
        }
      }
    }

    if (legalCount === 0) {
      const kSq = mover === 1 ? state.wkSq : state.bkSq;
      return isSquareAttacked(state.board, kSq, -mover) ? -MATE_SCORE + ply : 0;
    }

    ttH1[slot] = state.h1;
    ttH2[slot] = state.h2;
    ttDepth[slot] = remDepth;
    ttScore[slot] = bestVal;
    ttMove[slot] = bestMove;
    ttFlag[slot] = bestVal <= origAlpha ? TT_UPPER : bestVal >= beta ? TT_LOWER : TT_EXACT;

    return bestVal;
  };

  const extractTtPv = (startState, firstUci, maxPlies = 5) => {
    const pv = [firstUci];
    if (!startState) return pv;
    const probe = {
      board: new Int8Array(startState.board),
      turn: startState.turn,
      castling: startState.castling,
      epSq: startState.epSq,
      wkSq: startState.wkSq,
      bkSq: startState.bkSq,
      h1: startState.h1,
      h2: startState.h2,
    };
    const seen = new Set();
    const u = { piece: 0, captured: 0, castling: 0, epSq: -1, wkSq: -1, bkSq: -1, h1: 0, h2: 0 };
    for (let step = 1; step < maxPlies; step += 1) {
      const key = `${probe.h1}_${probe.h2}`;
      if (seen.has(key)) break;
      seen.add(key);
      const slot = (probe.h1 ^ probe.h2) & TT_MASK;
      if (ttDepth[slot] < 0 || ttH1[slot] !== probe.h1 || ttH2[slot] !== probe.h2) break;
      const m = ttMove[slot];
      if (!m) break;
      const from = m & 0x7f;
      const to = (m >> 7) & 0x7f;
      if (probe.board[from] === 0 || (probe.board[from] > 0 ? 1 : -1) !== probe.turn) break;
      pv.push(moveToUci(m));
      makeMove0x88(probe, m, u);
    }
    return pv;
  };

  const buildSnapshot = (completedDepth, evaluating) => {
    const sorted = [...rootEntries].sort((a, b) => b.score - a.score);
    const topSlice = sorted.slice(0, Math.min(multiPv, sorted.length));
    const elapsedSec = Math.max(0.01, (Date.now() - startTime) / 1000);
    const nps = Math.round(nodes / elapsedSec);

    const lines = topSlice.map((entry, idx) => {
      const score = Number.isFinite(entry.score) ? entry.score : 0;
      const isMate = Math.abs(score) > 45000;
      let whiteCp = null;
      let whiteMate = null;
      if (isMate) {
        const plies = Math.max(1, MATE_SCORE - Math.abs(score));
        const movesToMate = Math.max(1, Math.ceil(plies / 2));
        whiteMate = (score > 0 ? 1 : -1) * sideMul * movesToMate;
      } else {
        whiteCp = Math.round(score * sideMul);
      }

      const pvSan = [];
      const pvWalk = new Chess(fen);
      for (const uci of entry.pvUci) {
        const played = pvWalk.move({
          from: uci.slice(0, 2),
          to: uci.slice(2, 4),
          promotion: uci.length > 4 ? uci.slice(4, 5) : undefined,
        });
        if (!played) break;
        pvSan.push(played.san);
      }
      if (pvSan.length === 0) pvSan.push(entry.san);

      return {
        depth: completedDepth,
        multipv: idx + 1,
        nps,
        whiteCp,
        whiteMate,
        uci: entry.uci,
        from: entry.from,
        to: entry.to,
        bestMoveSan: pvSan[0],
        pvSan,
        pvUci: entry.pvUci,
        reason: describeSuggestedMove(fen, entry.uci, pvSan[0], pvSan, Chess, whiteMate),
        rawRootScore: score,
      };
    });

    const lead = lines[0] || null;
    return {
      fen,
      engineFlavor,
      depth: completedDepth,
      nps,
      nodes,
      lines,
      whiteCp: lead ? lead.whiteCp : rootBreakdown.whiteCp,
      whiteMate: lead ? lead.whiteMate : null,
      breakdown: rootBreakdown,
      evaluating,
    };
  };

  let completedDepth = 0;
  const maxTargetDepth = Math.max(1, Math.min(8, depth));

  for (let d = 1; d <= maxTargetDepth; d += 1) {
    aborted = false;
    const prevScores = new Map(rootEntries.map((e) => [e.uci, e.score]));

    for (let idx = 0; idx < rootEntries.length; idx += 1) {
      const entry = rootEntries[idx];
      let val;
      if (entry.isCheckmate) {
        val = MATE_SCORE - 1;
      } else if (entry.isDraw) {
        val = 0;
      } else {
        const stateCopy = {
          board: new Int8Array(entry.childState.board),
          turn: entry.childState.turn,
          castling: entry.childState.castling,
          epSq: entry.childState.epSq,
          wkSq: entry.childState.wkSq,
          bkSq: entry.childState.bkSq,
          h1: entry.childState.h1,
          h2: entry.childState.h2,
        };
        val = d <= 1
          ? -qsearch(stateCopy, -MATE_SCORE, MATE_SCORE, 1, 0)
          : -alphaBeta(stateCopy, d - 1, -MATE_SCORE, MATE_SCORE, 1);
        if (aborted) break;
        // Repetition avoidance: pull immediate repeated positions back toward 0 when ahead
        if (entry.isRepeat && val > 25) {
          val = 0;
        }
      }
      entry.score = val;
      entry.pvUci = extractTtPv(entry.childState, entry.uci, 5);

      // Guarantee depth 1-2 finishes even on slow hosts before allowing time cutoff
      if (d > 2 && Date.now() - startTime >= maxTimeMs) {
        aborted = true;
        break;
      }
    }

    if (aborted && d > 1) {
      // Restore previous complete depth scores so partial depth never scrambles move order
      for (const entry of rootEntries) {
        const prev = prevScores.get(entry.uci);
        if (prev !== undefined) entry.score = prev;
      }
      break;
    }

    completedDepth = d;
    rootEntries.sort((a, b) => b.score - a.score);
    if (onProgress && d < maxTargetDepth) {
      onProgress(buildSnapshot(completedDepth, true));
    }
    if (rootEntries[0]?.score > 45000) break; // Forced mate found cleanly
    if (d >= 2 && Date.now() - startTime >= maxTimeMs * 0.72) break;
  }

  if (completedDepth === 0) completedDepth = 1;
  const finalSnap = buildSnapshot(completedDepth, false);
  if (onProgress) onProgress(finalSnap);

  // Choose final move (apply bounded soft noise for club/amateur tiers without hiding exact analysis)
  const bestRoot = rootEntries[0];
  let chosen = bestRoot;
  if (noiseCp > 0 && bestRoot && bestRoot.score < 45000 && rootEntries.length > 1) {
    const eligible = rootEntries.filter((e) => e.score >= bestRoot.score - noiseCp);
    if (eligible.length > 1) {
      chosen = eligible[Math.floor(Math.random() * eligible.length)];
    }
  }

  return {
    chosenUci: chosen?.uci || null,
    chosenSan: chosen?.san || null,
    snapshot: finalSnap,
    elapsedMs: Date.now() - startTime,
  };
}
