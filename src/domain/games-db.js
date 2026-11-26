import { Chess } from 'chess.js';
import { STANDARD_START_FEN } from './pgn-import.js';

export const COLLECTION_TYPES = [
  'world-championship',
  'fide-pca-championship',
  'candidates',
  'interzonal',
  'classic-tournament',
  'modern-elite',
  'romantic-masters',
];

export const ECO_FAMILIES = ['A', 'B', 'C', 'D', 'E'];

export const ENDGAME_TYPES = [
  'pawn',
  'rook',
  'double-rook',
  'rook-minor',
  'rook-vs-minor',
  'queen',
  'queen-piece',
  'queen-vs-pieces',
  'bishop-same',
  'bishop-opposite',
  'knight',
  'bishop-vs-knight',
  'minor',
  'none',
];

export const CLASSIC_PLAYER_HINTS = [
  'Carlsen, Magnus',
  'Kasparov, Garry',
  'Karpov, Anatoly',
  'Fischer, Robert James',
  'Spassky, Boris V',
  'Tal, Mikhail',
  'Botvinnik, Mikhail',
  'Petrosian, Tigran V',
  'Smyslov, Vasily',
  'Alekhine, Alexander',
  'Capablanca, Jose Raul',
  'Euwe, Max',
  'Lasker, Emanuel',
  'Steinitz, Wilhelm',
  'Anand, Viswanathan',
  'Kramnik, Vladimir',
  'Topalov, Veselin',
  'Ding, Liren',
  'Gukesh, D',
  'Nepomniachtchi, Ian',
  'Caruana, Fabiano',
  'Nakamura, Hikaru',
  'Aronian, Levon',
  'Ivanchuk, Vassily',
  'Firouzja, Alireza',
  'Praggnanandhaa, R',
  'Polgar, Judit',
  'Korchnoi, Viktor',
  'Bronstein, David',
  'Keres, Paul',
  'Larsen, Bent',
  'Rubinstein, Akiba',
  'Nimzowitsch, Aron',
  'Chigorin, Mikhail',
  'Morphy, Paul',
  'Anderssen, Adolf',
];

function summarizeBoardMaterial(boardOrGame) {
  const board = Array.isArray(boardOrGame) ? boardOrGame : boardOrGame?.board?.();
  if (!Array.isArray(board)) return null;

  const w = { q: 0, r: 0, b: 0, n: 0, p: 0, lightB: 0, darkB: 0 };
  const b = { q: 0, r: 0, b: 0, n: 0, p: 0, lightB: 0, darkB: 0 };
  let totalAllPieces = 0;

  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const sq = board[row]?.[col];
      if (!sq) continue;
      totalAllPieces += 1;
      if (sq.type === 'k') continue;
      const side = sq.color === 'w' ? w : b;
      if (sq.type in side) side[sq.type] += 1;
      if (sq.type === 'b') {
        if ((row + col) % 2 === 0) side.lightB += 1;
        else side.darkB += 1;
      }
    }
  }

  return { w, b, totalAllPieces };
}

/**
 * Classifies an 8x8 chess board state into a canonical endgame type (or 'none').
 */
export function classifyBoardEndgame(boardOrGame) {
  const summary = summarizeBoardMaterial(boardOrGame);
  if (!summary) return 'none';
  const { w, b } = summary;

  const totalQ = w.q + b.q;
  const totalR = w.r + b.r;
  const totalB = w.b + b.b;
  const totalN = w.n + b.n;
  const piecesW = w.q + w.r + w.b + w.n;
  const piecesB = b.q + b.r + b.b + b.n;
  const totalMinorMajor = piecesW + piecesB;

  const matW = w.q * 9 + w.r * 5 + (w.b + w.n) * 3;
  const matB = b.q * 9 + b.r * 5 + (b.b + b.n) * 3;

  const isQueenlessEndgame = totalQ === 0 && matW <= 13 && matB <= 13 && totalMinorMajor <= 6;
  const isQueenEndgame =
    totalQ > 0 &&
    ((w.q === 1 && b.q === 1 && totalMinorMajor - 2 <= 2) ||
      ((w.q === 0 || b.q === 0) && totalMinorMajor <= 4));

  if (!isQueenlessEndgame && !isQueenEndgame) return 'none';

  if (totalMinorMajor === 0) return 'pawn';

  if (totalQ > 0) {
    const minorMajorNonQueen = totalMinorMajor - totalQ;
    if ((w.q > 0 && b.q === 0) || (b.q > 0 && w.q === 0)) {
      return minorMajorNonQueen === 0 ? 'queen' : 'queen-vs-pieces';
    }
    return minorMajorNonQueen === 0 ? 'queen' : 'queen-piece';
  }

  if (totalR > 0) {
    const totalMinors = totalB + totalN;
    if (totalMinors === 0) {
      return w.r >= 2 || b.r >= 2 ? 'double-rook' : 'rook';
    }
    const onlyOneSideHasRooks = (w.r > 0) !== (b.r > 0);
    const otherSideMinors = w.r === 0 ? w.b + w.n : b.b + b.n;
    if (onlyOneSideHasRooks && otherSideMinors > 0) {
      return 'rook-vs-minor';
    }
    return 'rook-minor';
  }

  // Minor-piece endgames (no queens, no rooks)
  if (totalN === 0 && totalB > 0) {
    if (w.b >= 1 && b.b >= 1) {
      const onlyLightW = w.lightB > 0 && w.darkB === 0;
      const onlyDarkW = w.darkB > 0 && w.lightB === 0;
      const onlyLightB = b.lightB > 0 && b.darkB === 0;
      const onlyDarkB = b.darkB > 0 && b.lightB === 0;
      if ((onlyLightW && onlyDarkB) || (onlyDarkW && onlyLightB)) {
        return 'bishop-opposite';
      }
      if ((onlyLightW && onlyLightB) || (onlyDarkW && onlyDarkB)) {
        return 'bishop-same';
      }
    }
    return 'minor';
  }

  if (totalB === 0 && totalN > 0) {
    return 'knight';
  }

  if ((w.b > 0 && w.n === 0 && b.n > 0 && b.b === 0) || (b.b > 0 && b.n === 0 && w.n > 0 && w.b === 0)) {
    return 'bishop-vs-knight';
  }

  return 'minor';
}

/**
 * Replays SAN moves to identify endgame entry ply, characteristic endgame type,
 * and whether the game reached <=7 pieces (Syzygy tablebase territory).
 */
export function analyzeGameEndgame(sanMoves = [], startFen = STANDARD_START_FEN, ChessCtor = Chess) {
  const game = new ChessCtor(startFen || STANDARD_START_FEN);
  let endgamePly = null;
  let finalNonBareEndgame = 'none';
  let tablebase = false;
  let tablebasePly = null;
  let validPlies = 0;

  const startSummary = summarizeBoardMaterial(game);
  if (startSummary && startSummary.totalAllPieces <= 7) {
    tablebase = true;
    tablebasePly = 0;
  }

  for (let i = 0; i < sanMoves.length; i += 1) {
    const san = typeof sanMoves[i] === 'string' ? sanMoves[i] : sanMoves[i]?.san;
    if (!san) break;
    const played = game.move(san, { sloppy: true });
    if (!played) break;

    validPlies = i + 1;
    const sum = summarizeBoardMaterial(game);
    if (sum && sum.totalAllPieces <= 7 && !tablebase) {
      tablebase = true;
      tablebasePly = validPlies;
    }

    const eg = classifyBoardEndgame(game);
    if (eg !== 'none') {
      if (endgamePly === null) endgamePly = validPlies;
      const hasAnyNonKing = sum && sum.totalAllPieces > 2;
      if (hasAnyNonKing) {
        finalNonBareEndgame = eg;
      }
    } else {
      // If queens/pieces returned via promotion back into middlegame, keep tracking cleanly
      finalNonBareEndgame = 'none';
    }
  }

  return {
    endgame: endgamePly !== null && finalNonBareEndgame !== 'none' ? finalNonBareEndgame : 'none',
    endgamePly: endgamePly !== null && finalNonBareEndgame !== 'none' ? endgamePly : null,
    tablebase,
    tablebasePly,
    validPlies,
  };
}

function resolveDict(val, arr, fallback) {
  if (typeof val === 'number' && Array.isArray(arr)) {
    return arr[val] ?? fallback;
  }
  return val || fallback;
}

/**
 * Expands compact DB JSON entries (v1 inline strings or v2 dictionary indices)
 * or passes through already-normalized records with cached lowercase search keys.
 */
export function normalizeGameRecord(raw, dict = null) {
  if (!raw || typeof raw !== 'object') return null;
  if (raw.white !== undefined && raw.moves !== undefined) {
    const moves = Array.isArray(raw.moves) ? raw.moves : String(raw.moves || '').split(' ').filter(Boolean);
    const white = raw.white || 'White';
    const black = raw.black || 'Black';
    const eco = raw.eco || '';
    const opening = raw.opening || 'Unknown Opening';
    const event = raw.event || '';
    const site = raw.site || '';
    return {
      ...raw,
      moves,
      plies: raw.plies ?? moves.length,
      year: raw.year ?? null,
      tablebase: Boolean(raw.tablebase),
      _w: raw._w ?? String(white).toLowerCase(),
      _b: raw._b ?? String(black).toLowerCase(),
      _op: raw._op ?? `${eco} ${opening}`.toLowerCase(),
      _ev: raw._ev ?? `${event} ${site}`.toLowerCase(),
    };
  }

  const moves = Array.isArray(raw.m) ? raw.m : String(raw.m || '').split(' ').filter(Boolean);
  const collection = resolveDict(raw.c, dict?.c, 'classic-tournament');
  const event = resolveDict(raw.e, dict?.e, '');
  const site = resolveDict(raw.s, dict?.s, '');
  const white = resolveDict(raw.w, dict?.p, 'White');
  const black = resolveDict(raw.b, dict?.p, 'Black');
  const eco = resolveDict(raw.eco, dict?.eco, '');
  const opening = resolveDict(raw.op, dict?.op, 'Unknown Opening');
  const endgame = resolveDict(raw.eg, dict?.eg, 'none');
  const id = typeof raw.id === 'number' ? `g_${String(raw.id).padStart(5, '0')}` : String(raw.id);

  return {
    id,
    collection,
    event,
    site,
    date: raw.d || '',
    year: raw.y ?? null,
    round: raw.r || '',
    white,
    black,
    whiteElo: raw.we ?? null,
    blackElo: raw.be ?? null,
    result: raw.res || '*',
    eco,
    opening,
    endgame,
    endgamePly: raw.egp ?? null,
    tablebase: Boolean(raw.tb),
    tablebasePly: raw.tbp ?? null,
    plies: raw.p ?? moves.length,
    moves,
    _w: white.toLowerCase(),
    _b: black.toLowerCase(),
    _op: `${eco} ${opening}`.toLowerCase(),
    _ev: `${event} ${site}`.toLowerCase(),
  };
}

/**
 * Decodes either v1 or v2 (dictionary-compressed) classic-games-db JSON payloads.
 */
export function decodeGamesDbPayload(payload) {
  const dict = payload?.dict || null;
  const list = Array.isArray(payload?.games) ? payload.games : [];
  return list.map((g) => normalizeGameRecord(g, dict)).filter(Boolean);
}

/**
 * Filters and sorts classic games across player, opening, ECO family, endgame, result, year, and collection.
 */
export function filterClassicGames(games = [], filters = {}) {
  const list = Array.isArray(games) ? games : [];
  const pQuery = String(filters.playerQuery || '').trim().toLowerCase();
  const pSide = filters.playerSide || 'any';
  const oQuery = String(filters.openingQuery || '').trim().toLowerCase();
  const eQuery = String(filters.eventQuery || '').trim().toLowerCase();
  const ecoFamily = String(filters.ecoFamily || '').trim().toUpperCase();
  const endgame = String(filters.endgame || '').trim();
  const result = String(filters.result || '').trim();
  const collection = String(filters.collection || '').trim();

  const rawFrom = filters.yearFrom !== '' && filters.yearFrom != null ? Number(filters.yearFrom) : null;
  const rawTo = filters.yearTo !== '' && filters.yearTo != null ? Number(filters.yearTo) : null;
  const yearFrom = Number.isFinite(rawFrom) ? rawFrom : null;
  const yearTo = Number.isFinite(rawTo) ? rawTo : null;

  const filtered = list.filter((g) => {
    if (!g) return false;

    if (collection && g.collection !== collection) return false;
    if (result && g.result !== result) return false;

    if (ecoFamily) {
      const code = String(g.eco || '').toUpperCase();
      if (!code.startsWith(ecoFamily)) return false;
    }

    if (yearFrom !== null && (g.year == null || g.year < yearFrom)) return false;
    if (yearTo !== null && (g.year == null || g.year > yearTo)) return false;

    if (endgame) {
      if (endgame === 'any-endgame') {
        if (!g.endgame || g.endgame === 'none') return false;
      } else if (endgame === 'tablebase') {
        if (!g.tablebase) return false;
      } else if (g.endgame !== endgame) {
        return false;
      }
    }

    if (pQuery) {
      const w = g._w ?? String(g.white || '').toLowerCase();
      const b = g._b ?? String(g.black || '').toLowerCase();
      if (pSide === 'white' && !w.includes(pQuery)) return false;
      if (pSide === 'black' && !b.includes(pQuery)) return false;
      if (pSide !== 'white' && pSide !== 'black' && !w.includes(pQuery) && !b.includes(pQuery)) {
        return false;
      }
    }

    if (oQuery) {
      const opText = g._op ?? `${g.eco || ''} ${g.opening || ''}`.toLowerCase();
      if (!opText.includes(oQuery)) return false;
    }

    if (eQuery) {
      const evText = g._ev ?? `${g.event || ''} ${g.site || ''}`.toLowerCase();
      if (!evText.includes(eQuery)) return false;
    }

    return true;
  });

  const sortBy = filters.sortBy || 'year-desc';
  const sorted = filtered.slice();
  sorted.sort((a, b) => {
    if (sortBy === 'year-asc') {
      return (a.year || 0) - (b.year || 0) || String(a.id).localeCompare(String(b.id));
    }
    if (sortBy === 'plies-desc') {
      return (b.plies || 0) - (a.plies || 0) || (b.year || 0) - (a.year || 0);
    }
    if (sortBy === 'plies-asc') {
      return (a.plies || 0) - (b.plies || 0) || (b.year || 0) - (a.year || 0);
    }
    if (sortBy === 'eco-asc') {
      return String(a.eco || 'ZZZ').localeCompare(String(b.eco || 'ZZZ')) || (b.year || 0) - (a.year || 0);
    }
    // Default: 'year-desc'
    return (b.year || 0) - (a.year || 0) || String(a.event || '').localeCompare(String(b.event || ''));
  });

  return sorted;
}

/**
 * Computes W/D/B breakdown and top openings, endgames, and players for filtered results.
 */
export function summarizeGamesResults(games = []) {
  const total = games.length;
  let whiteWins = 0;
  let blackWins = 0;
  let draws = 0;

  const openingCounts = new Map();
  const endgameCounts = new Map();
  const playerCounts = new Map();

  for (const g of games) {
    if (g.result === '1-0') whiteWins += 1;
    else if (g.result === '0-1') blackWins += 1;
    else if (g.result === '1/2-1/2') draws += 1;

    if (g.eco || g.opening) {
      const opKey = g.eco ? `${g.eco}|${g.opening}` : g.opening;
      openingCounts.set(opKey, (openingCounts.get(opKey) || 0) + 1);
    }
    if (g.endgame && g.endgame !== 'none') {
      endgameCounts.set(g.endgame, (endgameCounts.get(g.endgame) || 0) + 1);
    }
    if (g.white) playerCounts.set(g.white, (playerCounts.get(g.white) || 0) + 1);
    if (g.black) playerCounts.set(g.black, (playerCounts.get(g.black) || 0) + 1);
  }

  const pct = (n) => (total > 0 ? Math.round((n / total) * 100) : 0);

  const topOpenings = [...openingCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([key, count]) => {
      const [eco, opening] = key.includes('|') ? key.split('|') : ['', key];
      return { eco, opening, count };
    });

  const topEndgames = [...endgameCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([endgame, count]) => ({ endgame, count }));

  const topPlayers = [...playerCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([name, count]) => ({ name, count }));

  return {
    total,
    whiteWins,
    blackWins,
    draws,
    whitePct: pct(whiteWins),
    drawPct: pct(draws),
    blackPct: pct(blackWins),
    topOpenings,
    topEndgames,
    topPlayers,
  };
}

/**
 * Formats a normalized game record into standard PGN text.
 */
export function gameRecordToPgn(game) {
  if (!game) return '';
  const headers = [
    ['Event', game.event || 'Classic Game'],
    ['Site', game.site || '?'],
    ['Date', game.date || (game.year ? `${game.year}.??.??` : '????.??.??')],
    ['Round', game.round || '?'],
    ['White', game.white || 'White'],
    ['Black', game.black || 'Black'],
    ['Result', game.result || '*'],
  ];
  if (game.whiteElo) headers.push(['WhiteElo', String(game.whiteElo)]);
  if (game.blackElo) headers.push(['BlackElo', String(game.blackElo)]);
  if (game.eco) headers.push(['ECO', game.eco]);
  if (game.opening) headers.push(['Opening', game.opening]);
  if (game.endgame && game.endgame !== 'none') headers.push(['Endgame', game.endgame]);

  const headBlock = headers
    .map(([k, v]) => `[${k} "${String(v).replace(/"/g, "'")}"]`)
    .join('\n');

  const moves = Array.isArray(game.moves) ? game.moves : [];
  const moveTokens = [];
  for (let i = 0; i < moves.length; i += 2) {
    const num = Math.floor(i / 2) + 1;
    const w = moves[i] || '';
    const blk = moves[i + 1] || '';
    moveTokens.push(blk ? `${num}. ${w} ${blk}` : `${num}. ${w}`);
  }
  moveTokens.push(game.result || '*');

  return `${headBlock}\n\n${moveTokens.join(' ')}`;
}

export function exportFilteredGamesPgn(games = [], maxGames = 500) {
  return (Array.isArray(games) ? games : [])
    .slice(0, maxGames)
    .map(gameRecordToPgn)
    .filter(Boolean)
    .join('\n\n');
}
