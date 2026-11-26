import { parentPort, workerData } from 'node:worker_threads';
import { Chess } from 'chess.js';
import { classifyBoardEndgame } from '../src/domain/games-db.js';

const STANDARD_RESULTS = new Set(['1-0', '0-1', '1/2-1/2']);

const PLAYER_CANONICAL_MAP = new Map([
  ['Ding Liren', 'Ding, Liren'],
  ['Ding,Liren', 'Ding, Liren'],
  ['Gukesh,D', 'Gukesh, D'],
  ['Gukesh D', 'Gukesh, D'],
  ['Gukesh Dommaraju', 'Gukesh, D'],
  ['Alekhine,Alexander', 'Alekhine, Alexander'],
  ['Alekhine,A', 'Alekhine, Alexander'],
  ['Capablanca,Jose', 'Capablanca, Jose Raul'],
  ['Capablanca,J', 'Capablanca, Jose Raul'],
  ['Capablanca,Jose Raul', 'Capablanca, Jose Raul'],
  ['Lasker,Emanuel', 'Lasker, Emanuel'],
  ['Lasker,Em', 'Lasker, Emanuel'],
  ['Steinitz,Wilhelm', 'Steinitz, Wilhelm'],
  ['Steinitz,W', 'Steinitz, Wilhelm'],
  ['Euwe,M', 'Euwe, Max'],
  ['Euwe,Max', 'Euwe, Max'],
  ['Fischer,Robert J', 'Fischer, Robert James'],
  ['Fischer,Robert James', 'Fischer, Robert James'],
  ['Fischer,R', 'Fischer, Robert James'],
  ['Kasparov,Garry', 'Kasparov, Garry'],
  ['Kasparov,G', 'Kasparov, Garry'],
  ['Karpov,Anatoly', 'Karpov, Anatoly'],
  ['Karpov,A', 'Karpov, Anatoly'],
  ['Carlsen,Magnus', 'Carlsen, Magnus'],
  ['Carlsen,M', 'Carlsen, Magnus'],
  ['Anand,Viswanathan', 'Anand, Viswanathan'],
  ['Anand,V', 'Anand, Viswanathan'],
  ['Kramnik,Vladimir', 'Kramnik, Vladimir'],
  ['Kramnik,V', 'Kramnik, Vladimir'],
  ['Tal,Mikhail', 'Tal, Mikhail'],
  ['Tal,M', 'Tal, Mikhail'],
  ['Botvinnik,Mikhail', 'Botvinnik, Mikhail'],
  ['Botvinnik,M', 'Botvinnik, Mikhail'],
  ['Smyslov,Vasily', 'Smyslov, Vasily'],
  ['Smyslov,V', 'Smyslov, Vasily'],
  ['Petrosian,Tigran', 'Petrosian, Tigran V'],
  ['Petrosian,Tigran V', 'Petrosian, Tigran V'],
  ['Petrosian,T', 'Petrosian, Tigran V'],
  ['Spassky,Boris', 'Spassky, Boris V'],
  ['Spassky,Boris V', 'Spassky, Boris V'],
  ['Spassky,B', 'Spassky, Boris V'],
  ['Morphy,Paul', 'Morphy, Paul'],
  ['Morphy,P', 'Morphy, Paul'],
  ['Anderssen,Adolf', 'Anderssen, Adolf'],
  ['Anderssen,A', 'Anderssen, Adolf'],
  ['Chigorin,Mikhail', 'Chigorin, Mikhail'],
  ['Chigorin,M', 'Chigorin, Mikhail'],
  ['Rubinstein,Akiba', 'Rubinstein, Akiba'],
  ['Rubinstein,A', 'Rubinstein, Akiba'],
  ['Nimzowitsch,Aron', 'Nimzowitsch, Aron'],
  ['Nimzowitsch,A', 'Nimzowitsch, Aron'],
  ['Keres,Paul', 'Keres, Paul'],
  ['Keres,P', 'Keres, Paul'],
  ['Bronstein,David', 'Bronstein, David'],
  ['Bronstein,D', 'Bronstein, David'],
  ['Korchnoi,Viktor', 'Korchnoi, Viktor'],
  ['Korchnoi,V', 'Korchnoi, Viktor'],
  ['Larsen,Bent', 'Larsen, Bent'],
  ['Larsen,B', 'Larsen, Bent'],
  ['Topalov,Veselin', 'Topalov, Veselin'],
  ['Topalov,V', 'Topalov, Veselin'],
  ['Ivanchuk,Vassily', 'Ivanchuk, Vassily'],
  ['Ivanchuk,V', 'Ivanchuk, Vassily'],
  ['Aronian,Levon', 'Aronian, Levon'],
  ['Aronian,L', 'Aronian, Levon'],
  ['Caruana,Fabiano', 'Caruana, Fabiano'],
  ['Caruana,F', 'Caruana, Fabiano'],
  ['Nakamura,Hikaru', 'Nakamura, Hikaru'],
  ['Nakamura,H', 'Nakamura, Hikaru'],
  ['Nepomniachtchi,Ian', 'Nepomniachtchi, Ian'],
  ['Nepomniachtchi,I', 'Nepomniachtchi, Ian'],
  ['Gelfand,Boris', 'Gelfand, Boris'],
  ['Gelfand,B', 'Gelfand, Boris'],
  ['Shirov,Alexei', 'Shirov, Alexei'],
  ['Shirov,A', 'Shirov, Alexei'],
  ['Svidler,Peter', 'Svidler, Peter'],
  ['Svidler,P', 'Svidler, Peter'],
  ['Giri,Anish', 'Giri, Anish'],
  ['Giri,A', 'Giri, Anish'],
  ['So,Wesley', 'So, Wesley'],
  ['So,W', 'So, Wesley'],
  ['Firouzja,Alireza', 'Firouzja, Alireza'],
  ['Firouzja,A', 'Firouzja, Alireza'],
  ['Praggnanandhaa,R', 'Praggnanandhaa, R'],
  ['Praggnanandhaa,Rameshbabu', 'Praggnanandhaa, R'],
  ['Abdusattorov,Nodirbek', 'Abdusattorov, Nodirbek'],
  ['Polgar,Judit', 'Polgar, Judit'],
  ['Polgar,J', 'Polgar, Judit'],
]);

export function cleanPlayerName(rawName) {
  const s = String(rawName || '').replace(/\s+/g, ' ').trim();
  if (!s) return 'Unknown';
  const mapped = PLAYER_CANONICAL_MAP.get(s);
  if (mapped) return mapped;
  return s.replace(/,([^\s])/g, ', $1');
}

export function stripMovetextComments(rawText) {
  let out = '';
  let inBrace = false;
  let inLineComment = false;
  let parenDepth = 0;

  for (let i = 0; i < rawText.length; i += 1) {
    const ch = rawText[i];
    if (inLineComment) {
      if (ch === '\n' || ch === '\r') inLineComment = false;
      continue;
    }
    if (inBrace) {
      if (ch === '}') inBrace = false;
      continue;
    }
    if (ch === '{') {
      inBrace = true;
      continue;
    }
    if (ch === ';') {
      inLineComment = true;
      continue;
    }
    if (ch === '(') {
      parenDepth += 1;
      continue;
    }
    if (ch === ')') {
      parenDepth = Math.max(0, parenDepth - 1);
      continue;
    }
    if (parenDepth === 0) out += ch;
  }

  return out
    .replace(/\$\d+/g, ' ')
    .replace(/\b\d+\.+(?=\s|[a-zA-Z])/g, ' ')
    .replace(/\d+\.+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

export function splitPgnGames(rawPgn) {
  const text = String(rawPgn || '').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const lines = text.split('\n');
  const games = [];
  let headers = {};
  let moveLines = [];
  let seenMoves = false;

  const flush = () => {
    const moveText = moveLines.join(' ').trim();
    if (Object.keys(headers).length > 0 && moveText) {
      games.push({ headers, moveText });
    }
    headers = {};
    moveLines = [];
    seenMoves = false;
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (seenMoves) flush();
      continue;
    }
    const tagMatch = trimmed.match(/^\[([A-Za-z0-9_]+)\s+"(.*)"\]$/);
    if (tagMatch) {
      if (seenMoves) flush();
      headers[tagMatch[1]] = tagMatch[2].replace(/\\"/g, '"').trim();
    } else {
      seenMoves = true;
      moveLines.push(trimmed);
    }
  }
  flush();
  return games;
}

function posKey(fen) {
  return String(fen || '').trim().split(/\s+/).slice(0, 3).join(' ');
}

function parseYear(dateStr, filenameHint) {
  const m = String(dateStr || '').match(/^(\d{4})/);
  if (m) return Number(m[1]);
  const f = String(filenameHint || '').match(/(\d{4})/);
  return f ? Number(f[1]) : null;
}

function parseElo(raw) {
  const n = Number(raw);
  return Number.isFinite(n) && n >= 1000 && n <= 3500 ? Math.round(n) : null;
}

function processChunk(rawGame, { collection, filenameHint, fenToEco, codeToName }) {
  const { headers, moveText } = rawGame;
  if (headers.FEN && headers.FEN !== 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') {
    return null;
  }

  let result = headers.Result || '';
  const tokens = stripMovetextComments(moveText);
  const tail = tokens[tokens.length - 1];
  if (STANDARD_RESULTS.has(tail)) {
    if (!STANDARD_RESULTS.has(result)) result = tail;
    tokens.pop();
  }
  if (!STANDARD_RESULTS.has(result)) return null;

  const game = new Chess();
  const sanMoves = [];
  let matchedEco = null;
  let endgamePly = null;
  let finalNonBareEndgame = 'none';
  let tablebase = false;
  let tablebasePly = null;

  for (let i = 0; i < tokens.length; i += 1) {
    const tok = tokens[i];
    if (STANDARD_RESULTS.has(tok) || tok === '*') break;
    const played = game.move(tok) || game.move(tok, { sloppy: true });
    if (!played) return null;
    sanMoves.push(played.san);

    if (i < 32) {
      const hit = fenToEco.get(posKey(game.fen()));
      if (hit) matchedEco = hit;
    }

    // Track endgame & <=7-piece Syzygy tablebase territory in the same single pass
    if (i >= 15 || played.captured || played.promotion) {
      const board = game.board();
      let pieceCount = 0;
      for (let r = 0; r < 8; r += 1) {
        const row = board[r];
        for (let c = 0; c < 8; c += 1) {
          if (row[c]) pieceCount += 1;
        }
      }
      if (pieceCount <= 7 && !tablebase) {
        tablebase = true;
        tablebasePly = i + 1;
      }
      const eg = classifyBoardEndgame(board);
      if (eg !== 'none') {
        if (endgamePly === null) endgamePly = i + 1;
        if (pieceCount > 2) finalNonBareEndgame = eg;
      } else {
        finalNonBareEndgame = 'none';
      }
    }
  }

  if (sanMoves.length < 8) return null;

  const tagEco = String(headers.ECO || '').trim().toUpperCase();
  const finalEco = matchedEco?.eco || (/^[A-E]\d{2}$/.test(tagEco) ? tagEco : 'A00');
  const finalOpening =
    matchedEco?.name ||
    headers.Opening ||
    codeToName.get(finalEco) ||
    codeToName.get(`${finalEco[0]}00`) ||
    'Unclassified Opening';

  const egInfo = {
    endgame: endgamePly !== null && finalNonBareEndgame !== 'none' ? finalNonBareEndgame : 'none',
    endgamePly: endgamePly !== null && finalNonBareEndgame !== 'none' ? endgamePly : null,
    tablebase,
    tablebasePly,
  };
  const year = parseYear(headers.Date, filenameHint);
  const white = cleanPlayerName(headers.White);
  const black = cleanPlayerName(headers.Black);

  return {
    c: collection,
    e: headers.Event || filenameHint.replace(/\.pgn$/i, ''),
    s: headers.Site && headers.Site !== '?' ? headers.Site : '',
    d: headers.Date || '',
    y: year,
    r: headers.Round && headers.Round !== '?' ? headers.Round : '',
    w: white,
    b: black,
    we: parseElo(headers.WhiteElo),
    be: parseElo(headers.BlackElo),
    res: result,
    eco: finalEco,
    op: finalOpening,
    eg: egInfo.endgame,
    egp: egInfo.endgamePly,
    tb: egInfo.tablebase ? 1 : 0,
    tbp: egInfo.tablebasePly,
    p: sanMoves.length,
    m: sanMoves.join(' '),
  };
}

if (parentPort && workerData) {
  const { fenToEcoEntries, codeToNameEntries, jobs } = workerData;
  const fenToEco = new Map(fenToEcoEntries);
  const codeToName = new Map(codeToNameEntries);

  const games = [];
  let skippedInvalid = 0;
  const perFileCounts = [];

  for (const job of jobs) {
    const { pgnText, collection, filenameHint, filterKnockoutFinalists = null } = job;
    const rawChunks = splitPgnGames(pgnText);
    let parsed = 0;

    for (const chunk of rawChunks) {
      if (Array.isArray(filterKnockoutFinalists) && filterKnockoutFinalists.length === 2) {
        const w = String(chunk.headers.White || '');
        const b = String(chunk.headers.Black || '');
        const [p1, p2] = filterKnockoutFinalists;
        const matchPair = (w.includes(p1) && b.includes(p2)) || (w.includes(p2) && b.includes(p1));
        if (!matchPair) continue;
      }

      const rec = processChunk(chunk, {
        collection,
        filenameHint,
        fenToEco,
        codeToName,
      });
      if (!rec) {
        skippedInvalid += 1;
        continue;
      }
      parsed += 1;
      games.push(rec);
    }

    perFileCounts.push({ filenameHint, collection, parsed });
  }

  parentPort.postMessage({ games, skippedInvalid, perFileCounts });
}
