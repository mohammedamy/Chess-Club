import { Chess } from 'chess.js';
import { isolateChessTokens } from '../i18n/ui-strings.js';
import { isStockfishSafeFen } from './stockfish-service.js';

export const STANDARD_START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export const FAMOUS_SAMPLE_GAMES = [
  {
    id: 'opera-1858',
    label: 'The Opera Game — Morphy vs Allies (1858)',
    pgn: `[Event "Paris Opera"]
[White "Paul Morphy"]
[Black "Duke Karl & Count Isouard"]
[Result "1-0"]

1. e4 e5 2. Nf3 d6 3. d4 Bg4 {Premature pin before developing kingside pieces.} 4. dxe5 Bxf3 5. Qxf3 dxe5 6. Bc4 Nf6 7. Qb3 Qe7 8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8 13. Rxd7 Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7 16. Qb8+ Nxb8 17. Rd8# 1-0`,
  },
  {
    id: 'evergreen-1852',
    label: 'The Evergreen Game — Anderssen vs Dufresne (1852)',
    pgn: `[Event "Berlin Casual"]
[White "Adolf Anderssen"]
[Black "Jean Dufresne"]
[Result "1-0"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O d3 8. Qb3 Qf6 9. e5 Qg6 10. Re1 Nge7 11. Ba3 b5 12. Qxb5 Rb8 13. Qa4 Bb6 14. Nbd2 Bb7 15. Ne4 Qf5 16. Bxd3 Qh5 17. Nf6+ gxf6 18. exf6 Rg8 19. Rad1 Qxf3 {A famous double-check trap awaits!} 20. Rxe7+ Nxe7 21. Qxd7+ Kxd7 22. Bf5+ Ke8 23. Bd7+ Kf8 24. Bxe7# 1-0`,
  },
  {
    id: 'kasparov-1999',
    label: "Kasparov's Immortal — vs Topalov (Wijk aan Zee 1999)",
    pgn: `[Event "Hoogovens Group A"]
[White "Garry Kasparov"]
[Black "Veselin Topalov"]
[Result "1-0"]

1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6 Bxh6 9. Qxh6 Bb7 10. a3 e5 11. O-O-O Qe7 12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 exd4 15. Rxd4 c5 16. Rd1 Nb6 17. g3 Kb8 18. Na5 Ba8 19. Bh3 d5 20. Qf4+ Ka7 21. Rhe1 d4 22. Nd5 Nbxd5 23. exd5 Qd6 24. Rxd4 cxd4 25. Re7+ Kb6 26. Qxd4+ Kxa5 27. b4+ Ka4 28. Qc3 Qxd5 29. Ra7 Bb7 30. Rxb7 Qc4 31. Qxf6 Kxa3 32. Qxa6+ Kxb4 33. c3+ Kxc3 34. Qa1+ Kd2 35. Qb2+ Kd1 36. Bf1 Rd2 37. Rd7 Rxd7 38. Bxc4 bxc4 39. Qxh8 Rd3 40. Qa8 c3 41. Qa4+ Ke1 42. f4 f5 43. Kc1 Rd2 44. Qa7 1-0`,
  },
];

const UNICODE_FIGURINES = {
  '♔': 'K',
  '♕': 'Q',
  '♖': 'R',
  '♗': 'B',
  '♘': 'N',
  '♙': '',
  '♚': 'K',
  '♛': 'Q',
  '♜': 'R',
  '♝': 'B',
  '♞': 'N',
  '♟': '',
};

/**
 * Inspects file magic bytes to give clear errors if a user accidentally selects an image/binary file.
 */
export function detectBinaryFileSignature(bytes) {
  if (!bytes || bytes.length < 4) return null;
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
    return 'PNG image';
  }
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return 'JPEG image';
  }
  if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38) {
    return 'GIF image';
  }
  if (bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) {
    return 'PDF document';
  }
  if (bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 0x03 && bytes[3] === 0x04) {
    return 'ZIP/compressed archive';
  }
  return null;
}

/**
 * Splits a text buffer that may contain multiple PGN games into individual raw game chunks.
 */
export function splitMultiGamePgn(rawText) {
  if (typeof rawText !== 'string') return [];
  const normalized = rawText.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').trim();
  if (!normalized) return [];

  const chunks = [];
  let current = [];
  let seenMoves = false;
  let braceDepth = 0;

  for (const line of normalized.split('\n')) {
    const trimmed = line.trim();
    const startsTag = braceDepth === 0 && /^\[[A-Za-z0-9_]+\s+"[^"]*"\]\s*$/.test(trimmed);
    if (startsTag && seenMoves) {
      chunks.push(current.join('\n').trim());
      current = [];
      seenMoves = false;
    }

    current.push(line);

    // Track brace comment nesting across lines without falsely counting inside comments
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if (ch === '{') braceDepth += 1;
      else if (ch === '}' && braceDepth > 0) braceDepth -= 1;
    }

    if (!startsTag && trimmed && braceDepth === 0 && !trimmed.startsWith(';') && !trimmed.startsWith('%')) {
      seenMoves = true;
    }
  }

  const tail = current.join('\n').trim();
  if (tail) chunks.push(tail);
  return chunks;
}

function cleanCommentText(raw) {
  const withoutDirectives = raw
    .replace(/\[%[a-zA-Z]+\s+[^\]]*\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return withoutDirectives;
}

function extractHeadersAndMovetext(chunk) {
  const headers = {};
  const lines = chunk.split('\n');
  const bodyLines = [];
  let inHeaderBlock = true;

  for (const line of lines) {
    const trimmed = line.trim();
    const tagMatch = inHeaderBlock && trimmed.match(/^\[([A-Za-z0-9_]+)\s+"(.*)"\]\s*$/);
    if (tagMatch) {
      headers[tagMatch[1]] = tagMatch[2];
    } else {
      if (trimmed !== '') inHeaderBlock = false;
      bodyLines.push(line);
    }
  }

  return { headers, movetext: bodyLines.join('\n').trim() };
}

function tokenizeMovetext(movetext) {
  const tokens = [];
  let i = 0;
  let parenDepth = 0;
  const n = movetext.length;

  while (i < n) {
    const ch = movetext[i];

    // Brace comment {...}
    if (ch === '{') {
      let j = i + 1;
      while (j < n && movetext[j] !== '}') j += 1;
      if (parenDepth === 0) {
        const cleaned = cleanCommentText(movetext.slice(i + 1, j));
        if (cleaned) tokens.push({ type: 'comment', value: cleaned });
      }
      i = j + 1;
      continue;
    }

    // Semicolon single-line comment
    if (ch === ';') {
      let j = i + 1;
      while (j < n && movetext[j] !== '\n') j += 1;
      i = j + 1;
      continue;
    }

    // Nested variation parentheses (...)
    if (ch === '(') {
      parenDepth += 1;
      i += 1;
      continue;
    }
    if (ch === ')') {
      if (parenDepth > 0) parenDepth -= 1;
      i += 1;
      continue;
    }

    if (parenDepth > 0) {
      i += 1;
      continue;
    }

    // Skip whitespace & common separators pasted from web tables/prose
    if (/\s|,/.test(ch)) {
      i += 1;
      continue;
    }

    let j = i;
    while (j < n && !/[\s{}();,]/.test(movetext[j])) j += 1;
    const word = movetext.slice(i, j);
    if (word) tokens.push({ type: 'word', value: word });
    i = j;
  }

  return tokens;
}

function normalizeMoveWord(word) {
  let w = word.trim();
  // Strip leading move number prefixes like "1." or "12..." or "12." attached to move ("1.e4")
  w = w.replace(/^\d+\.+/, '').replace(/^\.\.\./, '');
  if (!w) return '';

  // Skip pure move numbers, ellipsis, NAGs ($1..$255), or result tokens
  if (/^\$\d+$/.test(w)) return '';
  if (/^(1-0|0-1|1\/2-1\/2|½-½|\*)$/.test(w)) return { resultToken: w === '½-½' ? '1/2-1/2' : w };

  // Convert Unicode chess figurines to ASCII letters
  w = [...w].map((ch) => (ch in UNICODE_FIGURINES ? UNICODE_FIGURINES[ch] : ch)).join('');

  // Convert zero castling (0-0 / 0-0-0) to uppercase O
  if (/^0-0-0[+#!?]*$/.test(w)) w = w.replace(/^0-0-0/, 'O-O-O');
  else if (/^0-0[+#!?]*$/.test(w)) w = w.replace(/^0-0/, 'O-O');

  // Strip annotation glyphs like !, !!, ?, ??, !?, ?!
  w = w.replace(/[!?]+$/g, '');
  return w;
}

function tryPlayToken(game, token) {
  // 1. Standard or sloppy SAN
  let played = game.move(token, { sloppy: true });
  if (played) return played;

  // 2. Plain UCI ("e2e4", "e7e8q")
  const uciMatch = token.match(/^([a-h][1-8])([a-h][1-8])([qrbn])?$/i);
  if (uciMatch) {
    played = game.move({
      from: uciMatch[1].toLowerCase(),
      to: uciMatch[2].toLowerCase(),
      promotion: uciMatch[3] ? uciMatch[3].toLowerCase() : undefined,
    });
    if (played) return played;
  }

  // 3. Long algebraic ("e2-e4", "Ng1-f3", "e7-e8=Q", "Qd1xd5")
  const longMatch = token.match(/^[KQRBN]?([a-h][1-8])[-x]([a-h][1-8])(?:=?([qrbnQRBN]))?[+#]?$/);
  if (longMatch) {
    played = game.move({
      from: longMatch[1].toLowerCase(),
      to: longMatch[2].toLowerCase(),
      promotion: longMatch[3] ? longMatch[3].toLowerCase() : undefined,
    });
    if (played) return played;
  }

  return null;
}

function looksLikeFen(text) {
  const trimmed = text.trim();
  if (!trimmed || trimmed.includes('\n')) return false;
  const parts = trimmed.split(/\s+/);
  return parts.length >= 4 && parts[0].split('/').length === 8;
}

function buildGameTitle(headers, moves, result, lang = 'en') {
  const isAr = lang === 'ar';
  if (headers.White || headers.Black) {
    const w = headers.White || (isAr ? 'الأبيض' : 'White');
    const b = headers.Black || (isAr ? 'الأسود' : 'Black');
    const res = result && result !== '*' ? ` (${result})` : '';
    return isAr ? isolateChessTokens(`${w} ضد ${b}${res}`, 'ar') : `${w} vs ${b}${res}`;
  }
  if (headers.Event) return headers.Event;
  if (moves.length === 0) return isAr ? 'وضعية مخصّصة (FEN)' : 'Custom Position (FEN)';
  return isAr
    ? `مباراة مستوردة (${Math.ceil(moves.length / 2)} نقلة)`
    : `Imported Game (${Math.ceil(moves.length / 2)} moves)`;
}

/**
 * Parses a single PGN chunk, pasted move sequence, UCI move list, or FEN position.
 */
export function parseGameText(rawChunk, ChessCtor = Chess, { lang = 'en' } = {}) {
  const isAr = lang === 'ar';
  const chunk = (rawChunk || '').replace(/^\uFEFF/, '').trim();
  if (!chunk) {
    return {
      ok: false,
      error: isAr
        ? 'الصق النقلات أو افتح ملف ‎.pgn‏ / ‎.txt‏ أولاً.'
        : 'Paste moves or open a .pgn / .txt file first.',
    };
  }

  // Direct FEN input support
  if (looksLikeFen(chunk)) {
    const probe = new ChessCtor();
    if (!isStockfishSafeFen(chunk, ChessCtor) && !probe.load(chunk)) {
      return {
        ok: false,
        error: isAr ? 'صيغة وضعية FEN غير صالحة.' : 'Invalid FEN position string.',
      };
    }
    const headers = { FEN: chunk, SetUp: '1' };
    return {
      ok: true,
      game: {
        title: isAr ? 'وضعية مخصّصة (FEN)' : 'Custom Position (FEN)',
        headers,
        startFen: chunk,
        moves: [],
        result: '*',
        warning: null,
      },
    };
  }

  const { headers, movetext } = extractHeadersAndMovetext(chunk);
  let startFen = STANDARD_START_FEN;
  if (headers.FEN) {
    const fenProbe = new ChessCtor();
    if (!isStockfishSafeFen(headers.FEN, ChessCtor) && !fenProbe.load(headers.FEN)) {
      return {
        ok: false,
        error: isAr ? `وسم FEN غير صالح: ${headers.FEN}` : `Invalid FEN header: ${headers.FEN}`,
      };
    }
    startFen = headers.FEN;
  }

  const game = new ChessCtor(startFen);
  const tokens = tokenizeMovetext(movetext);
  const moves = [];
  let result = headers.Result || '*';
  let invalidToken = null;
  let candidateMoveCount = 0;

  for (const tok of tokens) {
    if (tok.type === 'comment') {
      if (moves.length > 0) {
        const last = moves[moves.length - 1];
        last.comment = last.comment ? `${last.comment} ${tok.value}` : tok.value;
      }
      continue;
    }

    const norm = normalizeMoveWord(tok.value);
    if (!norm) continue;
    if (typeof norm === 'object' && norm.resultToken) {
      result = norm.resultToken;
      break;
    }

    candidateMoveCount += 1;
    const fenBefore = game.fen();
    const played = tryPlayToken(game, norm);
    if (!played) {
      invalidToken = tok.value;
      break;
    }

    moves.push({
      ply: moves.length + 1,
      moveNumber: Math.ceil((moves.length + 1) / 2),
      color: played.color,
      san: played.san,
      uci: played.from + played.to + (played.promotion || ''),
      from: played.from,
      to: played.to,
      promotion: played.promotion || null,
      fenBefore,
      fenAfter: game.fen(),
      comment: '',
      grade: null,
    });
  }

  if (invalidToken && moves.length === 0) {
    return {
      ok: false,
      error: isAr
        ? isolateChessTokens(
            `تعذّر التعرّف على النقلة «${invalidToken}». الصق نص PGN صحيحاً أو SAN (مثل 1. e4 e5) أو UCI (e2e4) أو FEN.`,
            'ar',
          )
        : `Could not recognize move "${invalidToken}". Paste valid PGN, SAN (e.g. 1. e4 e5), UCI (e2e4), or a FEN.`,
    };
  }

  if (candidateMoveCount === 0 && !headers.FEN) {
    return {
      ok: false,
      error: isAr ? 'لم يتم العثور على نقلات أو وضعية FEN في النص.' : 'No moves or FEN found in the text.',
    };
  }

  const warning = invalidToken
    ? isAr
      ? isolateChessTokens(
          `تم تحميل أول ${moves.length} نصف نقلة بنجاح؛ توقف التحليل عند الرمز غير المعروف «${invalidToken}».`,
          'ar',
        )
      : `Loaded first ${moves.length} plies cleanly; stopped at unrecognized token "${invalidToken}".`
    : null;

  return {
    ok: true,
    game: {
      title: buildGameTitle(headers, moves, result, lang),
      headers,
      startFen,
      moves,
      result,
      warning,
    },
  };
}

/**
 * Parses one or more games from a PGN/text document or pasted clipboard string.
 */
export function parseImportedGames(rawText, ChessCtor = Chess, { lang = 'en' } = {}) {
  const isAr = lang === 'ar';
  const chunks = splitMultiGamePgn(rawText);
  if (chunks.length === 0) {
    return {
      ok: false,
      error: isAr ? 'الملف أو النص المدخل فارغ.' : 'The file or text input is empty.',
    };
  }

  const games = [];
  let firstError = null;
  for (const chunk of chunks) {
    const parsed = parseGameText(chunk, ChessCtor, { lang });
    if (parsed.ok) games.push(parsed.game);
    else if (!firstError) firstError = parsed.error;
  }

  if (games.length === 0) {
    return {
      ok: false,
      error: firstError || (isAr ? 'تعذّر تحليل أي مباراة شطرنج صالحة.' : 'Unable to parse any valid chess game.'),
    };
  }

  return { ok: true, games };
}

/**
 * Exports a game and its moves/comments back into clean standard PGN text.
 */
export function exportGameToPgn({
  headers = {},
  startFen = STANDARD_START_FEN,
  moves = [],
  result = '*',
} = {}) {
  const tagLines = [
    `[Event "${headers.Event || 'Edugates Chess Club Analysis'}"]`,
    `[White "${headers.White || 'White'}"]`,
    `[Black "${headers.Black || 'Black'}"]`,
    `[Result "${result || '*'}"]`,
  ];
  if (startFen && startFen !== STANDARD_START_FEN) {
    tagLines.push('[SetUp "1"]');
    tagLines.push(`[FEN "${startFen}"]`);
  }

  const parts = [];
  let startingTurn = 'w';
  let startMoveNum = 1;
  if (startFen && startFen !== STANDARD_START_FEN) {
    const fenParts = startFen.split(/\s+/);
    if (fenParts[1] === 'b') startingTurn = 'b';
    const fullNum = Number(fenParts[5]);
    if (Number.isFinite(fullNum) && fullNum >= 1) startMoveNum = fullNum;
  }

  let plyOffset = startingTurn === 'b' ? 1 : 0;
  for (let i = 0; i < moves.length; i += 1) {
    const item = moves[i];
    const san = typeof item === 'string' ? item : item.san;
    const comment = typeof item === 'object' && item.comment ? ` { ${item.comment} }` : '';
    const idx = i + plyOffset;
    const moveNo = startMoveNum + Math.floor(idx / 2);
    if (i === 0 && startingTurn === 'b') {
      parts.push(`${moveNo}... ${san}${comment}`);
    } else if (idx % 2 === 0) {
      parts.push(`${moveNo}. ${san}${comment}`);
    } else {
      parts.push(`${san}${comment}`);
    }
  }
  parts.push(result || '*');

  return `${tagLines.join('\n')}\n\n${parts.join(' ')}\n`;
}

/**
 * Computes the next bounded ply index for First / Back / Forward / Last transport controls.
 */
export function stepPly(currentPly, action, total) {
  const max = Math.max(0, Number(total) || 0);
  const cur = Math.max(0, Math.min(max, Number(currentPly) || 0));
  if (action === 'first') return 0;
  if (action === 'back') return Math.max(0, cur - 1);
  if (action === 'forward') return Math.min(max, cur + 1);
  if (action === 'last') return max;
  return cur;
}

/**
 * Reconstructs a Chess instance, last-move squares, and cursor metadata at any historical ply.
 */
export function buildPositionAtPly(startFen = STANDARD_START_FEN, moves = [], targetPly = 0, ChessCtor = Chess) {
  const total = Array.isArray(moves) ? moves.length : 0;
  const ply = Math.max(0, Math.min(total, Number(targetPly) || 0));
  const baseFen = startFen || STANDARD_START_FEN;

  const game = new ChessCtor(baseFen);
  let lastMove = null;
  let currentMove = null;

  if (ply > 0) {
    const targetItem = moves[ply - 1];
    if (targetItem && typeof targetItem === 'object' && targetItem.fenAfter) {
      game.load(targetItem.fenAfter);
      lastMove = { from: targetItem.from, to: targetItem.to };
      currentMove = targetItem;
    } else {
      for (let i = 0; i < ply; i += 1) {
        const entry = moves[i];
        const sanOrObj = typeof entry === 'string' ? entry : entry.san || entry.uci;
        const played = tryPlayToken(game, sanOrObj);
        if (!played) break;
        if (i === ply - 1) {
          lastMove = { from: played.from, to: played.to };
          currentMove = typeof entry === 'object' ? entry : { san: played.san, from: played.from, to: played.to };
        }
      }
    }
  }

  return {
    game,
    fen: game.fen(),
    ply,
    total,
    lastMove,
    currentMove,
    isAtStart: ply <= 0,
    isAtEnd: ply >= total,
  };
}

/**
 * Computes White/Black accuracy percentages and error counts from graded mainline moves.
 */
export function computeGameAccuracySummary(moves = []) {
  const emptyBucket = () => ({
    book: 0,
    brilliant: 0,
    best: 0,
    excellent: 0,
    good: 0,
    inaccuracy: 0,
    mistake: 0,
    blunder: 0,
    total: 0,
    cpLossSum: 0,
    avgCpLoss: 0,
  });

  const counts = { w: emptyBucket(), b: emptyBucket() };
  const keyPlies = [];
  const brilliantPlies = [];
  const evalSeries = [];

  for (let i = 0; i < moves.length; i += 1) {
    const m = moves[i];
    const g = m?.grade;
    const color = m?.color || (i % 2 === 0 ? 'w' : 'b');

    if (m && (m.evalWhiteCp != null || m.evalWhiteMate != null)) {
      evalSeries.push({
        ply: i + 1,
        san: m.san || '',
        color,
        whiteCp: m.evalWhiteCp ?? 0,
        whiteMate: m.evalWhiteMate ?? null,
        grade: g?.grade || null,
      });
    }

    if (!g || !counts[color]) continue;

    const bucket = counts[color];
    bucket.total += 1;
    bucket.cpLossSum += Math.max(0, Number(g.cpLoss) || 0);
    if (g.grade && bucket[g.grade] != null) bucket[g.grade] += 1;

    if (['inaccuracy', 'mistake', 'blunder'].includes(g.grade)) {
      keyPlies.push(i + 1);
    } else if (g.grade === 'brilliant') {
      brilliantPlies.push(i + 1);
    }
  }

  const calcAcc = (bucket) => {
    if (!bucket.total) return null;
    bucket.avgCpLoss = Math.round(bucket.cpLossSum / bucket.total);
    return Math.max(0, Math.min(100, Math.round(100 * Math.exp(-0.0085 * bucket.avgCpLoss))));
  };

  return {
    whiteAccuracy: calcAcc(counts.w),
    blackAccuracy: calcAcc(counts.b),
    counts,
    keyPlies,
    brilliantPlies,
    evalSeries,
  };
}
