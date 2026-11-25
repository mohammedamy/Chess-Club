import { Chess } from 'chess.js';
import { STANDARD_START_FEN, parseGameText, parseImportedGames } from './pgn-import.js';
import { isStockfishSafeFen } from './stockfish-service.js';

const TABLEBASE_CACHE = new Map();

export function buildLichessAnalysisUrl(fen = STANDARD_START_FEN) {
  const clean = String(fen || STANDARD_START_FEN).trim().replace(/\s+/g, '_');
  return `https://lichess.org/analysis/standard/${encodeURI(clean)}`;
}

export function buildChessComAnalysisUrl(fen = STANDARD_START_FEN) {
  const clean = String(fen || STANDARD_START_FEN).trim();
  return `https://www.chess.com/analysis?fen=${encodeURIComponent(clean)}`;
}

/**
 * Detects Lichess or Chess.com game URLs so users can paste a game link directly.
 */
export function parseOnlineGameUrl(rawInput) {
  const text = String(rawInput || '').trim();
  if (!text) return null;

  const lichessMatch = text.match(
    /^https?:\/\/(?:www\.)?lichess\.(?:org|com)\/(?:game\/export\/)?([A-Za-z0-9]{8,12})(?:\/(white|black))?(?:[?#].*)?$/i,
  );
  if (lichessMatch) {
    const slug = lichessMatch[1];
    if (!['analysis', 'training', 'broadcast', 'tournament', 'swiss', 'study'].includes(slug.toLowerCase())) {
      return { platform: 'lichess', gameId: slug.slice(0, 8) };
    }
  }

  const chessComMatch = text.match(
    /^https?:\/\/(?:www\.)?chess\.com\/(?:[a-z]{2}\/)?(?:analysis\/)?game\/(live|daily)\/(\d+)(?:[?#].*)?$/i,
  );
  if (chessComMatch) {
    return { platform: 'chesscom', gameType: chessComMatch[1].toLowerCase(), gameId: chessComMatch[2] };
  }

  return null;
}

function ratingToDifficulty(rating) {
  const r = Number(rating) || 1500;
  if (r < 1200) return 'Easy';
  if (r < 1550) return 'Medium';
  if (r < 1850) return 'Advanced';
  return 'Expert';
}

function uciToMoveObj(uci) {
  if (!uci || uci.length < 4) return null;
  const obj = { from: uci.slice(0, 2), to: uci.slice(2, 4) };
  if (uci.length > 4) obj.promotion = uci.slice(4, 5).toLowerCase();
  return obj;
}

/**
 * Converts a Lichess `/api/puzzle/daily` JSON payload into our interactive solver puzzle shape.
 */
export function parseLichessDailyPuzzlePayload(json, ChessCtor = Chess, { lang = 'en' } = {}) {
  const puz = json?.puzzle;
  const gm = json?.game;
  if (!puz?.id || !gm?.pgn || !Array.isArray(puz.solution) || puz.solution.length === 0) {
    throw new Error('Invalid Lichess daily puzzle payload.');
  }

  const parsed = parseGameText(gm.pgn, ChessCtor, { lang });
  if (!parsed.ok) {
    throw new Error('Unable to reconstruct Lichess daily puzzle game.');
  }

  const moves = parsed.game.moves;
  const rawPly = Number(puz.initialPly);
  const candidateTargets = [
    Number.isFinite(rawPly) ? Math.min(moves.length, rawPly + 1) : moves.length,
    Number.isFinite(rawPly) ? Math.min(moves.length, rawPly) : moves.length,
    moves.length,
  ];

  let startFen = null;
  const firstUci = uciToMoveObj(puz.solution[0]);
  for (const plyIdx of candidateTargets) {
    const probe = new ChessCtor(parsed.game.startFen);
    for (let i = 0; i < plyIdx; i += 1) {
      probe.move(moves[i].san);
    }
    const checkClone = new ChessCtor(probe.fen());
    if (firstUci && checkClone.move(firstUci)) {
      startFen = probe.fen();
      break;
    }
  }

  if (!startFen) {
    throw new Error('Lichess puzzle position mismatch.');
  }

  const sanWalk = new ChessCtor(startFen);
  const sanMoves = [];
  for (const uci of puz.solution) {
    const obj = uciToMoveObj(uci);
    const played = obj ? sanWalk.move(obj) : null;
    if (!played) break;
    sanMoves.push(played.san);
  }
  if (sanMoves.length === 0) {
    throw new Error('Lichess puzzle solution contained no legal moves.');
  }

  const turnColor = new ChessCtor(startFen).turn() === 'w' ? 'White' : 'Black';
  const themes = Array.isArray(puz.themes) && puz.themes.length ? puz.themes.slice(0, 3).join(', ') : 'Tactics';
  const isAr = lang === 'ar';

  return {
    id: `lichess-daily-${puz.id}`,
    category: 'Tactics',
    difficulty: ratingToDifficulty(puz.rating),
    rating: Number(puz.rating) || 1600,
    sideToMove: turnColor,
    theme: isAr ? `لغز ليتشيس اليومي #${puz.id}` : `Lichess Daily #${puz.id}`,
    prompt: isAr
      ? `ابحث عن النقلة الأفضل (${themes}) — مأخوذ من مباراة على ليتشيس.`
      : `Find the winning tactic (${themes}) from a live Lichess game.`,
    explanation: isAr
      ? `سلسلة الحلّ المعتمدة من ليتشيس: ${sanMoves.join(' ')}`
      : `Official Lichess solution line: ${sanMoves.join(' ')}`,
    fen: startFen,
    moves: sanMoves,
    externalSource: 'lichess',
    sourceUrl: `https://lichess.org/training/${puz.id}`,
  };
}

/**
 * Converts a Chess.com `/pub/puzzle` JSON payload into our interactive solver puzzle shape.
 */
export function parseChessComDailyPuzzlePayload(json, ChessCtor = Chess, { lang = 'en' } = {}) {
  if (!json?.fen || !json?.pgn) {
    throw new Error('Invalid Chess.com daily puzzle payload.');
  }

  const parsed = parseGameText(json.pgn, ChessCtor, { lang });
  if (!parsed.ok || parsed.game.moves.length === 0) {
    throw new Error('Unable to parse Chess.com daily puzzle solution.');
  }

  const startFen = parsed.game.startFen || json.fen;
  const sanMoves = parsed.game.moves.map((m) => m.san);
  const turnColor = new ChessCtor(startFen).turn() === 'w' ? 'White' : 'Black';
  const isAr = lang === 'ar';

  return {
    id: `chesscom-daily-${json.publish_time || 'today'}`,
    category: 'Tactics',
    difficulty: 'Advanced',
    rating: 1650,
    sideToMove: turnColor,
    theme: json.title || (isAr ? 'لغز تشيس.كوم اليومي' : 'Chess.com Daily Puzzle'),
    prompt: isAr
      ? `تحدّي تشيس.كوم اليومي: أوجد النقلة الحاسمة لـ${turnColor === 'White' ? 'لأبيض' : 'لأسود'}.`
      : `Chess.com Daily Challenge — find the sharpest tactical sequence.`,
    explanation: isAr
      ? `سلسلة الحلّ المعتمدة من تشيس.كوم: ${sanMoves.join(' ')}`
      : `Official Chess.com solution: ${sanMoves.join(' ')}`,
    fen: startFen,
    moves: sanMoves,
    externalSource: 'chesscom',
    sourceUrl: json.url || 'https://www.chess.com/puzzles',
  };
}

export function countBoardPieces(fen) {
  const boardPart = String(fen || '').trim().split(/\s+/)[0] || '';
  return (boardPart.match(/[KQRBNPkqrbnp]/g) || []).length;
}

async function fetchWithTimeout(url, options = {}, fetchImpl = fetch, timeoutMs = 10000) {
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;
  try {
    const response = await fetchImpl(url, {
      ...options,
      signal: options.signal || controller?.signal,
    });
    return response;
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export async function fetchLichessGameById(gameId, { fetchImpl = fetch, ChessCtor = Chess, lang = 'en' } = {}) {
  const cleanId = String(gameId || '').trim().slice(0, 8);
  if (!cleanId) throw new Error('Missing Lichess game ID.');
  const res = await fetchWithTimeout(
    `https://lichess.org/game/export/${encodeURIComponent(cleanId)}?clocks=1&evals=1&opening=1`,
    { headers: { Accept: 'application/x-chess-pgn' } },
    fetchImpl,
  );
  if (!res.ok) throw new Error(`Lichess returned HTTP ${res.status}`);
  const pgn = await res.text();
  const parsed = parseImportedGames(pgn, ChessCtor, { lang });
  if (!parsed.ok) throw new Error(parsed.error);
  return parsed.games;
}

export async function fetchLichessUserGames(
  username,
  { max = 10, fetchImpl = fetch, ChessCtor = Chess, lang = 'en' } = {},
) {
  const clean = String(username || '').trim();
  if (!clean) throw new Error('Enter a Lichess username.');
  const res = await fetchWithTimeout(
    `https://lichess.org/api/games/user/${encodeURIComponent(clean)}?max=${max}&clocks=true&opening=true`,
    { headers: { Accept: 'application/x-chess-pgn' } },
    fetchImpl,
  );
  if (!res.ok) throw new Error(`Lichess returned HTTP ${res.status}`);
  const pgn = await res.text();
  const parsed = parseImportedGames(pgn, ChessCtor, { lang });
  if (!parsed.ok) throw new Error(parsed.error);
  return parsed.games;
}

export async function fetchLichessUserProfile(username, { fetchImpl = fetch } = {}) {
  const clean = String(username || '').trim();
  if (!clean) throw new Error('Enter a Lichess username.');
  const res = await fetchWithTimeout(
    `https://lichess.org/api/user/${encodeURIComponent(clean)}`,
    { headers: { Accept: 'application/json' } },
    fetchImpl,
  );
  if (!res.ok) throw new Error(`Lichess user lookup failed (HTTP ${res.status})`);
  const data = await res.json();
  return {
    platform: 'lichess',
    username: data.username || clean,
    url: data.url || `https://lichess.org/@/${encodeURIComponent(data.username || clean)}`,
    ratings: {
      bullet: data.perfs?.bullet?.rating ?? null,
      blitz: data.perfs?.blitz?.rating ?? null,
      rapid: data.perfs?.rapid?.rating ?? null,
      classical: data.perfs?.classical?.rating ?? null,
      puzzle: data.perfs?.puzzle?.rating ?? null,
    },
  };
}

export async function fetchLichessDailyPuzzle({ fetchImpl = fetch, ChessCtor = Chess, lang = 'en' } = {}) {
  const res = await fetchWithTimeout(
    'https://lichess.org/api/puzzle/daily',
    { headers: { Accept: 'application/json' } },
    fetchImpl,
  );
  if (!res.ok) throw new Error(`Lichess daily puzzle failed (HTTP ${res.status})`);
  const json = await res.json();
  return parseLichessDailyPuzzlePayload(json, ChessCtor, { lang });
}

export async function fetchChessComUserProfile(username, { fetchImpl = fetch } = {}) {
  const clean = String(username || '').trim().toLowerCase();
  if (!clean) throw new Error('Enter a Chess.com username.');
  // Never pass custom User-Agent headers in browser fetch (triggers CORS preflight failures).
  const res = await fetchWithTimeout(
    `https://api.chess.com/pub/player/${encodeURIComponent(clean)}/stats`,
    { headers: { Accept: 'application/json' } },
    fetchImpl,
  );
  if (!res.ok) throw new Error(`Chess.com stats lookup failed (HTTP ${res.status})`);
  const data = await res.json();
  return {
    platform: 'chesscom',
    username: clean,
    url: `https://www.chess.com/member/${encodeURIComponent(clean)}`,
    ratings: {
      bullet: data.chess_bullet?.last?.rating ?? null,
      blitz: data.chess_blitz?.last?.rating ?? null,
      rapid: data.chess_rapid?.last?.rating ?? null,
      daily: data.chess_daily?.last?.rating ?? null,
      puzzle: data.tactics?.highest?.rating ?? null,
    },
  };
}

export async function fetchChessComUserGames(
  username,
  { max = 10, fetchImpl = fetch, ChessCtor = Chess, lang = 'en' } = {},
) {
  const clean = String(username || '').trim().toLowerCase();
  if (!clean) throw new Error('Enter a Chess.com username.');
  const archRes = await fetchWithTimeout(
    `https://api.chess.com/pub/player/${encodeURIComponent(clean)}/games/archives`,
    { headers: { Accept: 'application/json' } },
    fetchImpl,
  );
  if (!archRes.ok) throw new Error(`Chess.com archives failed (HTTP ${archRes.status})`);
  const archJson = await archRes.json();
  const archives = Array.isArray(archJson?.archives) ? archJson.archives : [];
  if (archives.length === 0) {
    throw new Error('No public Chess.com archives found for that player.');
  }

  const latestUrl = archives[archives.length - 1];
  const gamesRes = await fetchWithTimeout(latestUrl, { headers: { Accept: 'application/json' } }, fetchImpl);
  if (!gamesRes.ok) throw new Error(`Chess.com monthly games failed (HTTP ${gamesRes.status})`);
  const gamesJson = await gamesRes.json();
  const pgns = (gamesJson?.games || [])
    .filter((g) => typeof g?.pgn === 'string' && g.pgn.trim())
    .slice(-max)
    .reverse()
    .map((g) => g.pgn.trim());

  if (pgns.length === 0) {
    throw new Error('No standard PGN games found in the latest Chess.com archive.');
  }
  const parsed = parseImportedGames(pgns.join('\n\n'), ChessCtor, { lang });
  if (!parsed.ok) throw new Error(parsed.error);
  return parsed.games;
}

export async function fetchChessComDailyPuzzle({ fetchImpl = fetch, ChessCtor = Chess, lang = 'en' } = {}) {
  const res = await fetchWithTimeout(
    'https://api.chess.com/pub/puzzle',
    { headers: { Accept: 'application/json' } },
    fetchImpl,
  );
  if (!res.ok) throw new Error(`Chess.com daily puzzle failed (HTTP ${res.status})`);
  const json = await res.json();
  return parseChessComDailyPuzzlePayload(json, ChessCtor, { lang });
}

function normalizeTablebaseMoveVerdict(oppCategory) {
  if (oppCategory === 'loss' || oppCategory === 'maybe-loss') return 'win';
  if (oppCategory === 'win' || oppCategory === 'maybe-win') return 'loss';
  return 'draw';
}

/**
 * Queries Lichess's 7-piece Syzygy Cloud Tablebase for positions with <= 7 pieces.
 */
export async function fetchLichessTablebase(fen, { fetchImpl = fetch, ChessCtor = Chess } = {}) {
  const cleanFen = String(fen || '').trim();
  if (!cleanFen || countBoardPieces(cleanFen) > 7 || !isStockfishSafeFen(cleanFen, ChessCtor)) {
    return null;
  }
  if (TABLEBASE_CACHE.has(cleanFen)) {
    return TABLEBASE_CACHE.get(cleanFen);
  }

  const res = await fetchWithTimeout(
    `https://tablebase.lichess.ovh/standard?fen=${encodeURIComponent(cleanFen)}`,
    { headers: { Accept: 'application/json' } },
    fetchImpl,
  );
  if (!res.ok) return null;
  const data = await res.json();
  const normalized = {
    fen: cleanFen,
    category: data.category || 'unknown',
    dtz: data.dtz ?? null,
    dtm: data.dtm ?? null,
    moves: (Array.isArray(data.moves) ? data.moves : []).slice(0, 5).map((m) => ({
      uci: m.uci,
      san: m.san,
      category: m.category,
      verdictForMover: normalizeTablebaseMoveVerdict(m.category),
      dtz: m.dtz ?? null,
      dtm: m.dtm ?? null,
    })),
  };

  if (TABLEBASE_CACHE.size >= 64) {
    const oldestKey = TABLEBASE_CACHE.keys().next().value;
    if (oldestKey) TABLEBASE_CACHE.delete(oldestKey);
  }
  TABLEBASE_CACHE.set(cleanFen, normalized);
  return normalized;
}
