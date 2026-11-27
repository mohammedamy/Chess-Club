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
  'Sindarov, Javokhir',
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

export const WORLD_CHAMPIONSHIPS = [
  { id: 'wch-2026', year: 2026, matchTag: 'World Championship 2026 (Gukesh–Sindarov)', enLabel: '2026 · Gukesh vs Sindarov', arLabel: '2026 · غوكيش ضد سينداروف' },
  { id: 'wch-2024', year: 2024, matchTag: 'World Championship 2024 (Gukesh–Ding Liren)', enLabel: '2024 · Gukesh vs Ding Liren', arLabel: '2024 · غوكيش ضد دينغ ليرين' },
  { id: 'wch-2023', year: 2023, matchTag: 'World Championship 2023 (Ding Liren–Nepomniachtchi)', enLabel: '2023 · Ding Liren vs Nepomniachtchi', arLabel: '2023 · دينغ ليرين ضد نيبومنياتشي' },
  { id: 'wch-2023-tb', year: 2023, matchTag: 'World Championship 2023 — Rapid Tiebreak (Ding Liren–Nepomniachtchi)', enLabel: '2023 (TB) · Ding Liren vs Nepomniachtchi', arLabel: '2023 (كسر التعادل) · دينغ ليرين ضد نيبومنياتشي' },
  { id: 'wch-2021', year: 2021, matchTag: 'World Championship 2021 (Carlsen–Nepomniachtchi)', enLabel: '2021 · Carlsen vs Nepomniachtchi', arLabel: '2021 · كارلسن ضد نيبومنياتشي' },
  { id: 'wch-2018', year: 2018, matchTag: 'World Championship 2018 (Carlsen–Caruana)', enLabel: '2018 · Carlsen vs Caruana', arLabel: '2018 · كارلسن ضد كاروانا' },
  { id: 'wch-2016', year: 2016, matchTag: 'World Championship 2016 (Carlsen–Karjakin)', enLabel: '2016 · Carlsen vs Karjakin', arLabel: '2016 · كارلسن ضد كارياكين' },
  { id: 'wch-2014', year: 2014, matchTag: 'World Championship 2014 (Carlsen–Anand II)', enLabel: '2014 · Carlsen vs Anand II', arLabel: '2014 · كارلسن ضد أناند ٢' },
  { id: 'wch-2013', year: 2013, matchTag: 'World Championship 2013 (Carlsen–Anand I)', enLabel: '2013 · Carlsen vs Anand I', arLabel: '2013 · كارلسن ضد أناند ١' },
  { id: 'wch-2012', year: 2012, matchTag: 'World Championship 2012 (Anand–Gelfand)', enLabel: '2012 · Anand vs Gelfand', arLabel: '2012 · أناند ضد غيلفاند' },
  { id: 'wch-2010', year: 2010, matchTag: 'World Championship 2010 (Anand–Topalov)', enLabel: '2010 · Anand vs Topalov', arLabel: '2010 · أناند ضد توبالوف' },
  { id: 'wch-2008', year: 2008, matchTag: 'World Championship 2008 (Anand–Kramnik)', enLabel: '2008 · Anand vs Kramnik', arLabel: '2008 · أناند ضد كرامنيك' },
  { id: 'wch-2007', year: 2007, matchTag: 'World Championship 2007 (Anand / Mexico City)', enLabel: '2007 · Mexico City Tournament (Anand)', arLabel: '2007 · بطولة المكسيك (أناند)' },
  { id: 'wch-2006', year: 2006, matchTag: 'World Championship 2006 (Kramnik–Topalov)', enLabel: '2006 · Kramnik vs Topalov', arLabel: '2006 · كرامنيك ضد توبالوف' },
  { id: 'wch-2005-fide', year: 2005, matchTag: 'FIDE World Championship 2005 (Topalov / San Luis)', enLabel: '2005 (FIDE) · San Luis (Topalov)', arLabel: '2005 (فيدي) · سان لويس (توبالوف)' },
  { id: 'wch-2004', year: 2004, matchTag: 'World Championship 2004 (Kramnik–Leko)', enLabel: '2004 · Kramnik vs Leko', arLabel: '2004 · كرامنيك ضد ليكو' },
  { id: 'wch-2004-fide', year: 2004, matchTag: 'FIDE World Championship 2004 (Kasimdzhanov / Tripoli)', enLabel: '2004 (FIDE) · Tripoli KO (Kasimdzhanov)', arLabel: '2004 (فيدي) · طرابلس (قاسمجانوف)' },
  { id: 'wch-2002-fide', year: 2002, matchTag: 'FIDE World Championship 2002 (Ponomariov / Moscow)', enLabel: '2002 (FIDE) · Moscow KO (Ponomariov)', arLabel: '2002 (فيدي) · موسكو (بونوماريوف)' },
  { id: 'wch-2000', year: 2000, matchTag: 'World Championship 2000 (Kramnik–Kasparov)', enLabel: '2000 · Kramnik vs Kasparov', arLabel: '2000 · كرامنيك ضد كاسباروف' },
  { id: 'wch-2000-fide', year: 2000, matchTag: 'FIDE World Championship 2000 (Anand / New Delhi–Tehran)', enLabel: '2000 (FIDE) · Anand (New Delhi–Tehran)', arLabel: '2000 (فيدي) · أناند (نيودلهي–طهران)' },
  { id: 'wch-1999-fide', year: 1999, matchTag: 'FIDE World Championship 1999 (Khalifman / Las Vegas)', enLabel: '1999 (FIDE) · Las Vegas (Khalifman)', arLabel: '1999 (فيدي) · لاس فيغاس (خليفمان)' },
  { id: 'wch-1998-fide', year: 1998, matchTag: 'FIDE World Championship 1998 (Karpov–Anand)', enLabel: '1998 (FIDE) · Karpov vs Anand', arLabel: '1998 (فيدي) · كاربوف ضد أناند' },
  { id: 'wch-1996-fide', year: 1996, matchTag: 'FIDE World Championship 1996 (Karpov–Kamsky)', enLabel: '1996 (FIDE) · Karpov vs Kamsky', arLabel: '1996 (فيدي) · كاربوف ضد كامسكي' },
  { id: 'wch-1995-pca', year: 1995, matchTag: 'PCA World Championship 1995 (Kasparov–Anand)', enLabel: '1995 (PCA) · Kasparov vs Anand', arLabel: '1995 (PCA) · كاسباروف ضد أناند' },
  { id: 'wch-1993-pca', year: 1993, matchTag: 'PCA World Championship 1993 (Kasparov–Short)', enLabel: '1993 (PCA) · Kasparov vs Short', arLabel: '1993 (PCA) · كاسباروف ضد شورت' },
  { id: 'wch-1993-fide', year: 1993, matchTag: 'FIDE World Championship 1993 (Karpov–Timman)', enLabel: '1993 (FIDE) · Karpov vs Timman', arLabel: '1993 (فيدي) · كاربوف ضد تيمان' },
  { id: 'wch-1990', year: 1990, matchTag: 'World Championship 1990 (Kasparov–Karpov V)', enLabel: '1990 · Kasparov vs Karpov V', arLabel: '1990 · كاسباروف ضد كاربوف ٥' },
  { id: 'wch-1987', year: 1987, matchTag: 'World Championship 1987 (Kasparov–Karpov IV)', enLabel: '1987 · Kasparov vs Karpov IV (Seville)', arLabel: '1987 · كاسباروف ضد كاربوف ٤ (إشبيلية)' },
  { id: 'wch-1986', year: 1986, matchTag: 'World Championship 1986 (Kasparov–Karpov III)', enLabel: '1986 · Kasparov vs Karpov III', arLabel: '1986 · كاسباروف ضد كاربوف ٣' },
  { id: 'wch-1985', year: 1985, matchTag: 'World Championship 1985 (Kasparov–Karpov II)', enLabel: '1985 · Kasparov vs Karpov II', arLabel: '1985 · كاسباروف ضد كاربوف ٢' },
  { id: 'wch-1984', year: 1984, matchTag: 'World Championship 1984–85 (Karpov–Kasparov I)', enLabel: '1984–85 · Karpov vs Kasparov I', arLabel: '1984–85 · كاربوف ضد كاسباروف ١' },
  { id: 'wch-1981', year: 1981, matchTag: 'World Championship 1981 (Karpov–Korchnoi II)', enLabel: '1981 · Karpov vs Korchnoi II (Merano)', arLabel: '1981 · كاربوف ضد كورتشنوي ٢ (ميرانو)' },
  { id: 'wch-1978', year: 1978, matchTag: 'World Championship 1978 (Karpov–Korchnoi I)', enLabel: '1978 · Karpov vs Korchnoi I (Baguio)', arLabel: '1978 · كاربوف ضد كورتشنوي ١ (باغيو)' },
  { id: 'wch-1972', year: 1972, matchTag: 'World Championship 1972 (Fischer–Spassky)', enLabel: '1972 · Fischer vs Spassky (Reykjavik)', arLabel: '1972 · فيشر ضد سباسكي (ريكيافيك)' },
  { id: 'wch-1969', year: 1969, matchTag: 'World Championship 1969 (Spassky–Petrosian II)', enLabel: '1969 · Spassky vs Petrosian II', arLabel: '1969 · سباسكي ضد بتروسيان ٢' },
  { id: 'wch-1966', year: 1966, matchTag: 'World Championship 1966 (Petrosian–Spassky I)', enLabel: '1966 · Petrosian vs Spassky I', arLabel: '1966 · بتروسيان ضد سباسكي ١' },
  { id: 'wch-1963', year: 1963, matchTag: 'World Championship 1963 (Petrosian–Botvinnik)', enLabel: '1963 · Petrosian vs Botvinnik', arLabel: '1963 · بتروسيان ضد بوتفينيك' },
  { id: 'wch-1961', year: 1961, matchTag: 'World Championship 1961 (Botvinnik–Tal II)', enLabel: '1961 · Botvinnik vs Tal II', arLabel: '1961 · بوتفينيك ضد تال ٢' },
  { id: 'wch-1960', year: 1960, matchTag: 'World Championship 1960 (Tal–Botvinnik I)', enLabel: '1960 · Tal vs Botvinnik I', arLabel: '1960 · تال ضد بوتفينيك ١' },
  { id: 'wch-1958', year: 1958, matchTag: 'World Championship 1958 (Botvinnik–Smyslov III)', enLabel: '1958 · Botvinnik vs Smyslov III', arLabel: '1958 · بوتفينيك ضد سميسلوف ٣' },
  { id: 'wch-1957', year: 1957, matchTag: 'World Championship 1957 (Smyslov–Botvinnik II)', enLabel: '1957 · Smyslov vs Botvinnik II', arLabel: '1957 · سميسلوف ضد بوتفينيك ٢' },
  { id: 'wch-1954', year: 1954, matchTag: 'World Championship 1954 (Botvinnik–Smyslov I)', enLabel: '1954 · Botvinnik vs Smyslov I', arLabel: '1954 · بوتفينيك ضد سميسلوف ١' },
  { id: 'wch-1951', year: 1951, matchTag: 'World Championship 1951 (Botvinnik–Bronstein)', enLabel: '1951 · Botvinnik vs Bronstein', arLabel: '1951 · بوتفينيك ضد برونشتاين' },
  { id: 'wch-1948', year: 1948, matchTag: 'World Championship 1948 (Hague–Moscow Tournament)', enLabel: '1948 · Hague–Moscow Tournament', arLabel: '1948 · بطولة لاهاي–موسكو الخماسية' },
  { id: 'wch-1937', year: 1937, matchTag: 'World Championship 1937 (Alekhine–Euwe Rematch)', enLabel: '1937 · Alekhine vs Euwe II', arLabel: '1937 · أليخين ضد أويفه ٢' },
  { id: 'wch-1935', year: 1935, matchTag: 'World Championship 1935 (Euwe–Alekhine)', enLabel: '1935 · Euwe vs Alekhine I', arLabel: '1935 · أويفه ضد أليخين ١' },
  { id: 'wch-1934', year: 1934, matchTag: 'World Championship 1934 (Alekhine–Bogoljubow II)', enLabel: '1934 · Alekhine vs Bogoljubow II', arLabel: '1934 · أليخين ضد بوغوليوبوف ٢' },
  { id: 'wch-1929', year: 1929, matchTag: 'World Championship 1929 (Alekhine–Bogoljubow I)', enLabel: '1929 · Alekhine vs Bogoljubow I', arLabel: '1929 · أليخين ضد بوغوليوبوف ١' },
  { id: 'wch-1927', year: 1927, matchTag: 'World Championship 1927 (Alekhine–Capablanca)', enLabel: '1927 · Alekhine vs Capablanca', arLabel: '1927 · أليخين ضد كابابلانكا' },
  { id: 'wch-1921', year: 1921, matchTag: 'World Championship 1921 (Capablanca–Lasker)', enLabel: '1921 · Capablanca vs Lasker', arLabel: '1921 · كابابلانكا ضد لاسكر' },
  { id: 'wch-1910b', year: 1910, matchTag: 'World Championship 1910 (Lasker–Janowski Berlin)', enLabel: '1910 (II) · Lasker vs Janowski (Berlin)', arLabel: '1910 (٢) · لاسكر ضد يانوفسكي (برلين)' },
  { id: 'wch-1910a', year: 1910, matchTag: 'World Championship 1910 (Lasker–Schlechter)', enLabel: '1910 (I) · Lasker vs Schlechter', arLabel: '1910 (١) · لاسكر ضد شليختر' },
  { id: 'wch-1909', year: 1909, matchTag: 'World Championship 1909 (Lasker–Janowski Paris)', enLabel: '1909 · Lasker vs Janowski (Paris)', arLabel: '1909 · لاسكر ضد يانوفسكي (باريس)' },
  { id: 'wch-1908', year: 1908, matchTag: 'World Championship 1908 (Lasker–Tarrasch)', enLabel: '1908 · Lasker vs Tarrasch', arLabel: '1908 · لاسكر ضد تاراش' },
  { id: 'wch-1907', year: 1907, matchTag: 'World Championship 1907 (Lasker–Marshall)', enLabel: '1907 · Lasker vs Marshall', arLabel: '1907 · لاسكر ضد مارشال' },
  { id: 'wch-1896', year: 1896, matchTag: 'World Championship 1896–97 (Lasker–Steinitz II)', enLabel: '1896–97 · Lasker vs Steinitz II', arLabel: '1896–97 · لاسكر ضد شتاينتس ٢' },
  { id: 'wch-1894', year: 1894, matchTag: 'World Championship 1894 (Lasker–Steinitz I)', enLabel: '1894 · Lasker vs Steinitz I', arLabel: '1894 · لاسكر ضد شتاينتس ١' },
  { id: 'wch-1892', year: 1892, matchTag: 'World Championship 1892 (Steinitz–Chigorin II)', enLabel: '1892 · Steinitz vs Chigorin II', arLabel: '1892 · شتاينتس ضد تشيغورين ٢' },
  { id: 'wch-1890', year: 1890, matchTag: 'World Championship 1890–91 (Steinitz–Gunsberg)', enLabel: '1890–91 · Steinitz vs Gunsberg', arLabel: '1890–91 · شتاينتس ضد غونزبرغ' },
  { id: 'wch-1889', year: 1889, matchTag: 'World Championship 1889 (Steinitz–Chigorin I)', enLabel: '1889 · Steinitz vs Chigorin I', arLabel: '1889 · شتاينتس ضد تشيغورين ١' },
  { id: 'wch-1886', year: 1886, matchTag: 'World Championship 1886 (Steinitz–Zukertort)', enLabel: '1886 · Steinitz vs Zukertort', arLabel: '1886 · شتاينتس ضد زوكرتورت' },
];

const WCH_BY_ID = new Map(WORLD_CHAMPIONSHIPS.map((w) => [w.id, w]));

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
  const wchEdition = String(filters.wchEdition || '').trim();
  const wchMeta = wchEdition ? WCH_BY_ID.get(wchEdition) : null;

  const rawFrom = filters.yearFrom !== '' && filters.yearFrom != null ? Number(filters.yearFrom) : null;
  const rawTo = filters.yearTo !== '' && filters.yearTo != null ? Number(filters.yearTo) : null;
  const yearFrom = Number.isFinite(rawFrom) ? rawFrom : null;
  const yearTo = Number.isFinite(rawTo) ? rawTo : null;

  const filtered = list.filter((g) => {
    if (!g) return false;

    if (collection) {
      if (collection === 'all-world-championships') {
        if (g.collection !== 'world-championship' && g.collection !== 'fide-pca-championship') return false;
      } else if (g.collection !== collection) {
        return false;
      }
    }
    if (wchEdition) {
      if (wchMeta) {
        const ev = String(g.event || '');
        if (!ev.includes(wchMeta.matchTag)) return false;
      } else {
        const needle = wchEdition.toLowerCase();
        const evText = g._ev ?? `${g.event || ''} ${g.site || ''}`.toLowerCase();
        if (!evText.includes(needle)) return false;
      }
    }
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
