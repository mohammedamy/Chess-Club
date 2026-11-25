import { Chess } from 'chess.js';
import { OPENINGS, TRAPS } from '../data/library.js';
import { isolateChessTokens, localizeOpening, localizeTrap } from '../i18n/ui.js';

const ECO_SUPPLEMENT = [
  { eco: 'B00', name: "King's Pawn Opening", arName: 'افتتاح بيدق الملك', moves: ['e4'] },
  { eco: 'C20', name: "King's Pawn Game", arName: 'دور بيدق الملك', moves: ['e4', 'e5'] },
  { eco: 'C40', name: "King's Knight Opening", arName: 'افتتاح حصان الملك', moves: ['e4', 'e5', 'Nf3'] },
  { eco: 'C44', name: "King's Pawn: Knight's Variation", arName: 'افتتاح بيدق الملك الكلاسيكي', moves: ['e4', 'e5', 'Nf3', 'Nc6'] },
  { eco: 'C50', name: 'Italian Game', arName: 'الافتتاح الإيطالي', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4'] },
  { eco: 'C51', name: 'Italian Game: Evans Gambit', arName: 'الافتتاح الإيطالي: غامبيت إيفانز', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'b4'] },
  { eco: 'C55', name: 'Italian Game: Two Knights Defence', arName: 'الإيطالي: دفاع الحصانين', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6'] },
  { eco: 'C60', name: 'Ruy López (Spanish Opening)', arName: 'روي لوبيز (الافتتاح الإسباني)', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'] },
  { eco: 'C65', name: 'Ruy López: Berlin Defence', arName: 'روي لوبيز: دفاع برلين', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Nf6'] },
  { eco: 'C89', name: 'Ruy López: Marshall Attack', arName: 'روي لوبيز: هجوم مارشال', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'O-O', 'c3', 'd5'] },
  { eco: 'C42', name: "Petrov's Defence", arName: 'دفاع بتروف', moves: ['e4', 'e5', 'Nf3', 'Nf6'] },
  { eco: 'C45', name: 'Scotch Game', arName: 'الدور الإسكتلندي', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'd4', 'exd4', 'Nxd4'] },
  { eco: 'C47', name: 'Four Knights Game', arName: 'دور الأحصنة الأربعة', moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6'] },
  { eco: 'C25', name: 'Vienna Game', arName: 'افتتاح فيينا', moves: ['e4', 'e5', 'Nc3'] },
  { eco: 'C30', name: "King's Gambit", arName: 'غامبيت الملك', moves: ['e4', 'e5', 'f4'] },
  { eco: 'B20', name: 'Sicilian Defence', arName: 'الدفاع الصقلي', moves: ['e4', 'c5'] },
  { eco: 'B22', name: 'Sicilian: Alapin Variation', arName: 'الصقلي: تفريع ألابين', moves: ['e4', 'c5', 'c3'] },
  { eco: 'B23', name: 'Sicilian: Closed', arName: 'الصقلي المغلق', moves: ['e4', 'c5', 'Nc3'] },
  { eco: 'B30', name: 'Sicilian: Rossolimo Variation', arName: 'الصقلي: تفريع روسوليمو', moves: ['e4', 'c5', 'Nf3', 'Nc6', 'Bb5'] },
  { eco: 'B33', name: 'Sicilian: Sveshnikov Variation', arName: 'الصقلي: تفريع سفيشنيكوف', moves: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e5'] },
  { eco: 'B42', name: 'Sicilian: Kan Variation', arName: 'الصقلي: تفريع كان', moves: ['e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'a6'] },
  { eco: 'B44', name: 'Sicilian: Taimanov Variation', arName: 'الصقلي: تفريع تايمانوف', moves: ['e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'Nc6'] },
  { eco: 'B70', name: 'Sicilian: Dragon Variation', arName: 'الصقلي: تفريع التنين', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'g6'] },
  { eco: 'B80', name: 'Sicilian: Scheveningen', arName: 'الصقلي: تفريع شيفيننغن', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e6'] },
  { eco: 'B90', name: 'Sicilian: Najdorf Variation', arName: 'الصقلي: تفريع نايدورف', moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6'] },
  { eco: 'C00', name: 'French Defence', arName: 'الدفاع الفرنسي', moves: ['e4', 'e6'] },
  { eco: 'C02', name: 'French: Advance Variation', arName: 'الفرنسي: تفريع التقدّم', moves: ['e4', 'e6', 'd4', 'd5', 'e5'] },
  { eco: 'C03', name: 'French: Tarrasch Variation', arName: 'الفرنسي: تفريع تاراش', moves: ['e4', 'e6', 'd4', 'd5', 'Nd2'] },
  { eco: 'C15', name: 'French: Winawer Variation', arName: 'الفرنسي: تفريع فيناوير', moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Bb4'] },
  { eco: 'B10', name: 'Caro-Kann Defence', arName: 'دفاع كارو-كان', moves: ['e4', 'c6'] },
  { eco: 'B12', name: 'Caro-Kann: Advance Variation', arName: 'كارو-كان: تفريع التقدّم', moves: ['e4', 'c6', 'd4', 'd5', 'e5'] },
  { eco: 'B13', name: 'Caro-Kann: Exchange / Panov', arName: 'كارو-كان: التبديل / بانوف', moves: ['e4', 'c6', 'd4', 'd5', 'exd5', 'cxd5'] },
  { eco: 'B15', name: 'Caro-Kann: Tartakower', arName: 'كارو-كان: ترتاكوفر', moves: ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Nf6', 'Nxf6+', 'exf6'] },
  { eco: 'B01', name: 'Scandinavian Defence', arName: 'الدفاع الإسكندنافي', moves: ['e4', 'd5'] },
  { eco: 'B02', name: "Alekhine's Defence", arName: 'دفاع أليخين', moves: ['e4', 'Nf6'] },
  { eco: 'B06', name: 'Modern Defence', arName: 'الدفاع الحديث', moves: ['e4', 'g6'] },
  { eco: 'B07', name: 'Pirc Defence', arName: 'دفاع بيرتس', moves: ['e4', 'd6', 'd4', 'Nf6', 'Nc3'] },
  { eco: 'A40', name: "Queen's Pawn Opening", arName: 'افتتاح بيدق الوزير', moves: ['d4'] },
  { eco: 'D00', name: "Queen's Pawn Game", arName: 'دور بيدق الوزير', moves: ['d4', 'd5'] },
  { eco: 'D02', name: 'London System', arName: 'نظام لندن', moves: ['d4', 'd5', 'Nf3', 'Nf6', 'Bf4'] },
  { eco: 'D06', name: "Queen's Gambit", arName: 'غامبيت الوزير', moves: ['d4', 'd5', 'c4'] },
  { eco: 'D10', name: 'Slav Defence', arName: 'الدفاع السلافي', moves: ['d4', 'd5', 'c4', 'c6'] },
  { eco: 'D20', name: "Queen's Gambit Accepted", arName: 'غامبيت الوزير المقبول', moves: ['d4', 'd5', 'c4', 'dxc4'] },
  { eco: 'D30', name: "Queen's Gambit Declined", arName: 'غامبيت الوزير المرفوض', moves: ['d4', 'd5', 'c4', 'e6'] },
  { eco: 'D43', name: 'Semi-Slav Defence', arName: 'الدفاع شبه السلافي', moves: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6'] },
  { eco: 'A45', name: 'Trompowsky Attack', arName: 'هجوم ترومبوفسكي', moves: ['d4', 'Nf6', 'Bg5'] },
  { eco: 'A57', name: 'Benko Gambit', arName: 'غامبيت بينكو', moves: ['d4', 'Nf6', 'c4', 'c5', 'd5', 'b5'] },
  { eco: 'A60', name: 'Benoni Defence', arName: 'دفاع بينوني', moves: ['d4', 'Nf6', 'c4', 'c5', 'd5', 'e6'] },
  { eco: 'D80', name: 'Grünfeld Defence', arName: 'دفاع غرونفيلد', moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5'] },
  { eco: 'E00', name: 'Catalan Opening', arName: 'الافتتاح الكاتالاني', moves: ['d4', 'Nf6', 'c4', 'e6', 'g3'] },
  { eco: 'E11', name: 'Bogo-Indian Defence', arName: 'دفاع بوغو-الهندي', moves: ['d4', 'Nf6', 'c4', 'e6', 'Nf3', 'Bb4+'] },
  { eco: 'E12', name: "Queen's Indian Defence", arName: 'دفاع الوزير الهندي', moves: ['d4', 'Nf6', 'c4', 'e6', 'Nf3', 'b6'] },
  { eco: 'E20', name: 'Nimzo-Indian Defence', arName: 'دفاع نيمزو-الهندي', moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4'] },
  { eco: 'E60', name: "King's Indian Defence", arName: 'دفاع الملك الهندي', moves: ['d4', 'Nf6', 'c4', 'g6'] },
  { eco: 'A80', name: 'Dutch Defence', arName: 'الدفاع الهولندي', moves: ['d4', 'f5'] },
  { eco: 'A10', name: 'English Opening', arName: 'الافتتاح الإنجليزي', moves: ['c4'] },
  { eco: 'A20', name: 'English: Reversed Sicilian', arName: 'الإنجليزي: الصقلي المعكوس', moves: ['c4', 'e5'] },
  { eco: 'A13', name: 'English: Agincourt Defence', arName: 'الإنجليزي: دفاع أجينكور', moves: ['c4', 'e6'] },
  { eco: 'A04', name: 'Zukertort / Réti Opening', arName: 'افتتاح زوكرتورت / ريتي', moves: ['Nf3'] },
  { eco: 'A09', name: 'Réti Opening', arName: 'افتتاح ريتي', moves: ['Nf3', 'd5', 'c4'] },
  { eco: 'A01', name: 'Nimzo-Larsen Attack', arName: 'هجوم نيمزو-لارسن', moves: ['b3'] },
  { eco: 'A02', name: "Bird's Opening", arName: 'افتتاح بيرد', moves: ['f4'] },
];

let cachedGraph = null;

/**
 * Strips halfmove/fullmove counters so transpositions share a single book key.
 */
export function normalizePositionKey(fen) {
  if (!fen) return '';
  return String(fen).trim().split(/\s+/).slice(0, 3).join(' ');
}

function ensureNode(graph, key) {
  let node = graph.get(key);
  if (!node) {
    node = {
      eco: '',
      name: '',
      arName: '',
      studyId: null,
      studyKind: null,
      continuations: new Map(),
    };
    graph.set(key, node);
  }
  return node;
}

function addLineToGraph(graph, { eco, name, arName, moves, studyId = null, studyKind = null, stampEndOnly = false, weightBoost = 1 }) {
  const game = new Chess();
  for (let i = 0; i < moves.length; i += 1) {
    const rawMove = moves[i];
    const sanInput = typeof rawMove === 'string' ? rawMove : rawMove.move;
    const prevKey = normalizePositionKey(game.fen());
    const played = game.move(sanInput);
    if (!played) break;

    const nextKey = normalizePositionKey(game.fen());
    const prevNode = ensureNode(graph, prevKey);
    const nextNode = ensureNode(graph, nextKey);

    const existingCont = prevNode.continuations.get(played.san);
    if (existingCont) {
      existingCont.weight += weightBoost;
      if (!existingCont.eco && eco) existingCont.eco = eco;
      if (!existingCont.studyId && studyId) {
        existingCont.studyId = studyId;
        existingCont.studyKind = studyKind;
      }
    } else {
      prevNode.continuations.set(played.san, {
        san: played.san,
        uci: played.from + played.to + (played.promotion || ''),
        eco: eco || '',
        name,
        arName,
        studyId,
        studyKind,
        weight: weightBoost,
      });
    }

    const isEnd = i === moves.length - 1;
    if (!stampEndOnly || isEnd) {
      if (!nextNode.name || (!stampEndOnly && isEnd)) {
        nextNode.eco = eco || nextNode.eco;
        nextNode.name = name || nextNode.name;
        nextNode.arName = arName || nextNode.arName;
      }
      if (isEnd && studyId && !nextNode.studyId) {
        nextNode.studyId = studyId;
        nextNode.studyKind = studyKind;
      }
    }
  }
}

function getBookGraph() {
  if (cachedGraph) return cachedGraph;
  const graph = new Map();
  const root = ensureNode(graph, normalizePositionKey(new Chess().fen()));
  root.eco = 'A00';
  root.name = 'Starting Position';
  root.arName = 'الوضعية الابتدائية';

  // 1. Seed classic ECO skeleton lines first so intermediate plies carry accurate prefix names
  for (const entry of ECO_SUPPLEMENT) {
    addLineToGraph(graph, {
      eco: entry.eco,
      name: entry.name,
      arName: entry.arName,
      moves: entry.moves,
      stampEndOnly: true,
      weightBoost: 3,
    });
  }

  // 2. Layer all 48 curated club openings (attaching studyId on terminal line position + continuations along path)
  for (const op of OPENINGS) {
    const ar = localizeOpening(op, 'ar');
    addLineToGraph(graph, {
      eco: op.eco || 'A00',
      name: op.name,
      arName: ar?.name || op.name,
      moves: op.line || [],
      studyId: op.id,
      studyKind: 'openings',
      stampEndOnly: true,
      weightBoost: 2,
    });
  }

  // 3. Layer opening traps as named tactical sidelines
  for (const tr of TRAPS) {
    const ar = localizeTrap(tr, 'ar');
    addLineToGraph(graph, {
      eco: 'Trap',
      name: tr.name,
      arName: ar?.name || tr.name,
      moves: (tr.line || []).slice(0, 10),
      studyId: tr.id,
      studyKind: 'traps',
      stampEndOnly: true,
      weightBoost: 1,
    });
  }

  cachedGraph = graph;
  return graph;
}

export function isPositionInBook(fen) {
  const graph = getBookGraph();
  const node = graph.get(normalizePositionKey(fen));
  return Boolean(node && (node.name || node.continuations.size > 0));
}

export function lookupOpeningByFen(fen, lang = 'en') {
  const graph = getBookGraph();
  const node = graph.get(normalizePositionKey(fen));
  if (!node || !node.name || node.eco === 'A00') return null;
  const displayName = lang === 'ar' ? isolateChessTokens(node.arName || node.name, 'ar') : node.name;
  return {
    eco: node.eco,
    name: displayName,
    studyId: node.studyId,
    studyKind: node.studyKind,
  };
}

/**
 * Walks moves from `startFen` and returns the deepest matched ECO opening along the path.
 */
export function detectOpeningFromMoves(startFen, moves = [], lang = 'en') {
  const game = new Chess(startFen || undefined);
  let best = lookupOpeningByFen(game.fen(), lang);
  if (best) best = { ...best, ply: 0 };

  for (let i = 0; i < moves.length; i += 1) {
    const raw = moves[i];
    const san = typeof raw === 'string' ? raw : raw?.san || raw?.uci;
    if (!san) break;
    const played = game.move(san, { sloppy: true });
    if (!played) break;
    const hit = lookupOpeningByFen(game.fen(), lang);
    if (hit) {
      best = { ...hit, ply: i + 1 };
    }
  }
  return best;
}

/**
 * Returns book continuations from `fen`, sorted by repertoire frequency.
 */
export function getBookContinuations(fen, lang = 'en', limit = 6) {
  const graph = getBookGraph();
  const node = graph.get(normalizePositionKey(fen));
  if (!node || node.continuations.size === 0) return [];

  return [...node.continuations.values()]
    .sort((a, b) => b.weight - a.weight || a.san.localeCompare(b.san))
    .slice(0, limit)
    .map((c) => ({
      san: c.san,
      uci: c.uci,
      eco: c.eco,
      name: lang === 'ar' ? isolateChessTokens(c.arName || c.name, 'ar') : c.name,
      studyId: c.studyId,
      studyKind: c.studyKind,
      weight: c.weight,
    }));
}
