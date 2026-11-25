const LANG_STORAGE_KEY = 'eis_language';

function detectInitialLang() {
  if (typeof window !== 'undefined') {
    try {
      const param = new URLSearchParams(window.location.search).get('lang');
      if (param === 'ar' || param === 'en') return param;
    } catch {}
    try {
      const saved = window.localStorage?.getItem(LANG_STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') return saved;
    } catch {}
    try {
      const navLang = (window.navigator?.language || '').toLowerCase();
      if (navLang.startsWith('ar')) return 'ar';
    } catch {}
  }
  return 'en';
}

let activeLang = detectInitialLang();

export function getLang() {
  return activeLang;
}

export function isRtl(lang = activeLang) {
  return lang === 'ar';
}

export function applyLanguageDom(lang = activeLang) {
  if (typeof document === 'undefined') return;
  const normalized = lang === 'ar' ? 'ar' : 'en';
  const root = document.documentElement;
  root.lang = normalized;
  root.dir = normalized === 'ar' ? 'rtl' : 'ltr';
  if (document.body) {
    document.body.dataset.lang = normalized;
  }
  document.title =
    normalized === 'ar'
      ? 'مدرسة بوابة المعرفة العالمية — نادي الشطرنج'
      : 'Edugates International School — Chess Club';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute(
      'content',
      normalized === 'ar'
        ? 'نادي الشطرنج بمدرسة بوابة المعرفة العالمية: تعلّم، والعب، وتطوّر معاً.'
        : 'Edugates International School Chess Club: study, play, and grow together.',
    );
  }
}

export function setLang(lang) {
  const next = lang === 'ar' ? 'ar' : 'en';
  activeLang = next;
  if (typeof window !== 'undefined') {
    try {
      window.localStorage?.setItem(LANG_STORAGE_KEY, next);
    } catch {}
  }
  applyLanguageDom(next);
  return next;
}

export function toggleLang() {
  return setLang(activeLang === 'ar' ? 'en' : 'ar');
}

/**
 * Wraps an explicit Latin/numeric token in Unicode LRI..PDI when rendering Arabic RTL.
 */
export function isolateLtr(value, lang = activeLang) {
  const str = String(value ?? '');
  if (!str || lang !== 'ar') return str;
  if (str.startsWith('\u2066') && str.endsWith('\u2069')) return str;
  return `\u2066${str}\u2069`;
}

/**
 * Automatically isolates embedded algebraic chess moves, move numbers, square coordinates,
 * and evaluation scores inside Arabic prose so signs (+, #, ??, !) stay on the right of SAN.
 */
export function isolateChessTokens(text, lang = activeLang) {
  if (text == null) return '';
  const str = String(text);
  if (lang !== 'ar' || !str) return str;
  if (/^[\x00-\x7F\u2013\u2014−\s]+$/.test(str)) {
    return str;
  }

  // Split by existing LRI..PDI segments so we stay idempotent
  const segments = str.split(/(\u2066[^\u2069]*\u2069)/g);
  const tokenPattern =
    /(?:(?:\d{1,3}\.(?:\.\.)?)?(?:O-O-O|O-O|[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](?:=[QRBN])?)[+#!?]*|\b[a-h][1-8](?:-[a-h][1-8])+\b|[+\-−]M\d+|[+\-−]\d+\.\d+|\b[A-E]\d{2}\b|\b\d+-\d+(?:-\d+)?\b|½-½|1\/2-1\/2)/g;

  return segments
    .map((seg) => {
      if (!seg || (seg.startsWith('\u2066') && seg.endsWith('\u2069'))) return seg;
      return seg.replace(tokenPattern, (match) => `\u2066${match}\u2069`);
    })
    .join('');
}

/**
 * Normalizes Latin & Arabic search text (case, diacritics, Alef/Teh-Marbuta/Yeh/Kaf variants)
 * while preserving Zero-Width Non-Joiner (U+200C).
 */
export function normalizeSearchText(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/[ىی]/g, 'ي')
    .replace(/ک/g, 'ك');
}

export function formatDateLocalized(ts, lang = activeLang) {
  if (!ts) return '';
  const locale = lang === 'ar' ? 'ar-SA-u-nu-latn' : 'en-US';
  return new Date(ts).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

const ENUM_MAPS = {
  category: {
    All: 'الكل',
    Openings: 'الافتتاحيات',
    Tactics: 'التكتيكات',
    Strategy: 'الاستراتيجية',
    Middlegame: 'وسط الدور',
    Endgame: 'نهايات الدور',
  },
  difficulty: {
    All: 'الكل',
    Easy: 'سهل',
    Medium: 'متوسط',
    Advanced: 'متقدم',
    Expert: 'خبير',
    Foundation: 'تأسيسي',
    Club: 'نادي',
    Master: 'أستاذ',
    Fundamental: 'أساسي',
    Critical: 'حرج',
  },
  side: {
    White: 'الأبيض',
    Black: 'الأسود',
    white: 'الأبيض',
    black: 'الأسود',
    random: 'عشوائي',
  },
  targetResult: {
    Win: 'فوز',
    Draw: 'تعادل',
    Study: 'دراسة',
  },
  pieceName: {
    p: 'البيدق',
    n: 'الحصان',
    b: 'الفيل',
    r: 'الرخ',
    q: 'الوزير',
    k: 'الملك',
  },
  matchType: {
    rated: 'مُصنّفة',
    friendly: 'ودية',
  },
  gameReason: {
    checkmate: 'كش مات',
    stalemate: 'ردب (ستيلميت)',
    draw: 'تعادل',
    agreement: 'بالاتفاق',
    resignation: 'بالانسحاب',
    time: 'انتهاء الوقت',
    'insufficient-time': 'انتهاء الوقت مع عدم كفاية المواد',
  },
  binaryKind: {
    'PNG image': 'صورة PNG',
    'JPEG image': 'صورة JPEG',
    'GIF image': 'صورة GIF',
    'PDF document': 'مستند PDF',
    'ZIP/compressed archive': 'ملف مضغوط ZIP',
  },
  moveReason: {
    'Checkmate sequence': 'تسلسل كش مات',
    'Castles to safety': 'تبييت لتأمين الملك',
    'Forks king and piece': 'شوكة على الملك وقطعة',
    'Promotes passed pawn': 'ترقية بيدق سالك',
    'Captures material': 'أخذ مادة وتفوّق',
    'Forks two pieces': 'شوكة مزدوجة على قطعتين',
    'Checks the king': 'كش للملك',
    'Strikes the center': 'ضربة للسيطرة على الوسط',
    'Advances passed pawn': 'تقدّم بيدق سالك',
    'Develops minor piece': 'انتشار قطعة خفيفة',
    'Activates rook': 'تنشيط الرخ',
    'Positional improvement': 'تحسين تموضعي',
    'Engine candidate': 'نقلة مرشحة من المحرك',
    'Candidate line': 'تفريع مرشح',
  },
  gradeLabel: {
    'Book Move': 'نقلة كتابية',
    Brilliant: 'نقلة بارعة',
    'Best Move': 'أفضل نقلة',
    Excellent: 'ممتازة',
    Good: 'جيدة',
    Inaccuracy: 'عدم دقة',
    Mistake: 'خطأ',
    Blunder: 'خطأ فادح',
  },
  hceDriver: {
    'king safety': 'أمان الملك',
    'pawn structure': 'بنية البيادق',
    mobility: 'حرية الحركة',
    'center control': 'السيطرة على الوسط',
  },
  boardTheme: {
    walnut: 'خشب الجوز الكلاسيكي',
    lichessBrown: 'خشب ليتشيس الدافئ',
    chessGreen: 'أخضر البطولات',
    midnight: 'أزرق منتصف الليل',
    forest: 'أخضر الغابة',
  },
  pieceStyle: {
    classic: { name: 'ستاوتن الكلاسيكي', note: 'عاجي تقليدي مع فحم داكن' },
    warm: { name: 'خشب دافئ', note: 'لمسة خشبية منحوتة ناعمة' },
    contrast: { name: 'تباين عالٍ', note: 'تحديد واضح لسهولة القراءة' },
  },
  sandboxPreset: {
    'Starting Position': 'الوضعية الابتدائية',
    'Greek Gift Setup': 'إعداد تضحية الفيل اليونانية (Bxh7+)',
    'Sicilian Najdorf': 'الدفاع الصقلي — تفريع نايدورف',
    'Carlsbad Minority Structure': 'بنية كارلسباد وهجوم الأقلية',
    'Lucena Rook Endgame': 'نهاية الرخ — وضعية لوسينا',
    'King Opposition Study': 'دراسة مقابلة الملوك',
  },
  arenaPreset: {
    standard: 'الوضعية الابتدائية القياسية',
    chess960: 'شطرنج 960 العشوائي',
    najdorf: 'الصقلي — نايدورف',
    'ruy-lopez': 'روي لوبيز الكلاسيكي',
    'queens-gambit': 'غامبيت الوزير',
    'kings-indian': 'هجوم الملك الهندي',
    'greek-gift': 'تضحية الفيل اليونانية',
    lucena: 'نهاية لوسينا بالرخ',
    catalan: 'الافتتاح الكاتالاني بالفيانكيتو',
    dragon: 'الصقلي — تفريع التنين',
    'kings-gambit': 'غامبيت الملك',
    'french-winawer': 'الفرنسي — تفريع فيناوير',
  },
  engineProfile: {
    'sf19-nnue': {
      name: 'ستوكفيش 19 NNUE',
      shortName: 'SF19 NNUE',
      architecture: 'NNUE + بحث PVS (WASM)',
      styleTag: 'بحث عصبي شامل',
      description: 'محرك أساتذة كبار بشبكة عصبية لتقييم أدق التوازنات الاستراتيجية والتكتيكات الحادة.',
      tiers: {
        1: 'مبتدئ (~800)',
        2: 'متدرّب (~1200)',
        3: 'متوسط (~1600)',
        4: 'خبير (~2000)',
        5: 'أستاذ كبير (~2500)',
      },
    },
    'athena-hce': {
      name: 'أثينا الكلاسيكي',
      shortName: 'Athena HCE',
      architecture: 'تقييم PeSTO متدرّج',
      styleTag: 'تناغم كلاسيكي',
      description: 'تقييم يدوي متوازن بنظام PeSTO يجمع بين نشاط القطع والوسط وأمان الملك.',
      tiers: {
        1: 'نادي (~1350 · ع2)',
        2: 'مرشح (~1650 · ع3)',
        3: 'أستاذ (~1900 · ع4)',
        4: 'أستاذ أول (~2080 · ع5)',
      },
    },
    'tal-hce': {
      name: 'تال غامبيت',
      shortName: 'Tal HCE',
      architecture: 'تقييم HCE مرجّح بالهجوم',
      styleTag: 'تضحوي وهجومي',
      description: 'يُعلي من حرية حركة القطع، وفتح الخطوط نحو ملك الخصم، والمبادرة واللعب الديناميكي.',
      tiers: {
        1: 'نادي (~1350 · ع2)',
        2: 'مرشح (~1650 · ع3)',
        3: 'أستاذ (~1900 · ع4)',
        4: 'أستاذ أول (~2080 · ع5)',
      },
    },
    'capablanca-hce': {
      name: 'كابابلانكا الصلب',
      shortName: 'Capa HCE',
      architecture: 'تقييم البنية ونهايات الدور',
      styleTag: 'تموضعي ونهايات',
      description: 'يصون بنية البيادق ومربعات الارتكاز والبيادق السالكة، ويبسّط الدور بنظافة عند التفوّق.',
      tiers: {
        1: 'نادي (~1350 · ع2)',
        2: 'مرشح (~1650 · ع3)',
        3: 'أستاذ (~1900 · ع4)',
        4: 'أستاذ أول (~2080 · ع5)',
      },
    },
    'petrosian-hce': {
      name: 'بتروسيان الحصين',
      shortName: 'Petrosian HCE',
      architecture: 'تقييم الحصن الوقائي HCE',
      styleTag: 'دفاع حديدي ووقاية',
      description: 'يُحيّد تهديدات الخصم مبكراً، ويُحصّن درع الملك، ويوجه الدور إلى نهايات منيعة غير قابلة للاختراق.',
      tiers: {
        1: 'نادي (~1350 · ع2)',
        2: 'مرشح (~1650 · ع3)',
        3: 'أستاذ (~1900 · ع4)',
        4: 'أستاذ أول (~2080 · ع5)',
      },
    },
    'fischer-hce': {
      name: 'فيشر الدقيق',
      shortName: 'Fischer HCE',
      architecture: 'ثنائي الفيل والأعمدة المفتوحة HCE',
      styleTag: 'مبادرة كلاسيكية دقيقة',
      description: 'يستثمر ثنائي الفيل والأرخاخ على الأعمدة المفتوحة بدقة كلاسيكية حاسمة حتى نهاية الدور.',
      tiers: {
        1: 'نادي (~1350 · ع2)',
        2: 'مرشح (~1650 · ع3)',
        3: 'أستاذ (~1900 · ع4)',
        4: 'أستاذ أول (~2080 · ع5)',
      },
    },
    'nimzo-hce': {
      name: 'نيمزوفيتش الحديث',
      shortName: 'Nimzo HCE',
      architecture: 'الارتكاز والفيانكيتو HCE',
      styleTag: 'حديث وحصار تموضعي',
      description: 'يسيطر على الوسط من الأجنحة بأفيال الفيانكيتو، ومربعات ارتكاز الأحصنة، وحصار البيادق السالكة.',
      tiers: {
        1: 'نادي (~1350 · ع2)',
        2: 'مرشح (~1650 · ع3)',
        3: 'أستاذ (~1900 · ع4)',
        4: 'أستاذ أول (~2080 · ع5)',
      },
    },
    'morphy-hce': {
      name: 'مورفي الرومانسي',
      shortName: 'Morphy HCE',
      architecture: 'الانتشار السريع والمغامرة HCE',
      styleTag: 'انتشار خاطف ومطاردة الملك',
      description: 'ينشر جميع قطعه بسرعة قصوى، ويضحّي بالبيادق لفتح الأعمدة ومطاردة الملك غير المبيّت.',
      tiers: {
        1: 'نادي (~1350 · ع2)',
        2: 'مرشح (~1650 · ع3)',
        3: 'أستاذ (~1900 · ع4)',
        4: 'أستاذ أول (~2080 · ع5)',
      },
    },
  },
  famousGames: {
    'opera-1858': {
      label: 'مباراة الأوبرا — مورفي ضد الحلفاء (1858)',
      comments: {
        'Premature pin before developing kingside pieces.': 'ربط متسرّع قبل إكمال انتشار قطع جناح الملك.',
      },
    },
    'evergreen-1852': {
      label: 'المباراة الخالدة — أندرسن ضد دوفرين (1852)',
      comments: {
        'A famous double-check trap awaits!': 'فخ الكش المزدوج الشهير في الانتظار!',
      },
    },
    'kasparov-1999': {
      label: 'خالدة كاسباروف — ضد توبالوف (فايك آن زي 1999)',
      comments: {},
    },
  },
};

export const UI_STRINGS = {
  en: {
    schoolName: 'Edugates International School',
    clubSub: 'Chess Club',
    logoAlt: 'Edugates International School logo',
    navHall: 'Hall',
    navCoach: 'Coach',
    navPuzzles: 'Puzzles',
    navOpenings: 'Openings',
    navStrategy: 'Strategy',
    navEndgames: 'Endgames',
    navPlay: 'Play',
    navClub: 'Club',
    boardBtn: 'Board',
    boardStudioTitle: 'Board & Piece Studio',
    boardStudioIntro: 'Choose your board palette and piece finish. Preferences save automatically on this device.',
    boardThemeLabel: 'Board Theme',
    pieceStyleLabel: 'Piece Style',
    languageLabel: 'Interface Language',
    showCoordinates: 'Show board coordinates',
    close: 'Close',
    signOut: 'Sign out',
    switchUser: 'Switch',
    switchOrSignOutTitle: 'Switch or sign out',
    langSwitchText: 'العربية',
    langSwitchTitle: 'التبديل إلى العربية',
    loginSubtitle: 'Study {studies} masterclasses, solve {puzzles} verified puzzles & {quizzes} quizzes, and train live with Stockfish 19.',
    takeSeat: 'Take a Seat',
    namePlaceholder: 'Student name (e.g. Layla Al-Mansoor)',
    enterClub: 'Enter Club',
    nameTooLong: 'Name must be 30 characters or fewer.',
    returningMembers: 'Returning Club Members',
    sharedCompleteHint: 'Enter the school email address that received the sign-in link.',
    sharedSendHint: 'Enter your school email and we will send a secure sign-in link.',
    schoolEmailLabel: 'School email',
    schoolEmailPlaceholder: 'you@school.edu',
    completeSignIn: 'Complete sign-in',
    sendLink: 'Send link',
    checkYourEmail: 'Check your email',
    clubMemberFallback: 'Club member',
    welcomeUser: 'Welcome, {name}',
    hallIntro: 'Edugates Study Hall — every opening line, tactic, strategic plan, and Stockfish 19 insight fits at a glance.',
    clubElo: 'Club Elo',
    puzzleStreak: 'Puzzle Streak',
    solvedLabel: 'Solved',
    openCoach: 'Open Coach',
    engineDuel: 'Engine Duel',
    playGame: 'Play Game',
    sfCoachTitle: 'Stockfish 19 Coach',
    multiPvTag: 'MultiPV 3',
    coachCardDesc: 'Live evaluation bar, suggested candidate arrows on the board, SAN coaching tags, and blunder protection.',
    guidedSparring: 'Guided Sparring',
    fenLab: 'FEN Lab',
    importPgnText: 'Import PGN / Text',
    blunderCheck: 'Blunder Check',
    dailyTraining: 'Daily Training',
    eloTag: '{rating} Elo',
    quizSprintsStats: 'Quiz Sprints completed: {count} · Best accuracy: {acc}%',
    solveDaily: 'Solve Daily',
    quizSprint10: '10-Quiz Sprint',
    studyLibraryTitle: 'Study & Training Library',
    libraryCounts: '{studies} Studies · {puzzles} Puzzles · {quizzes} Quizzes',
    openingsAndTraps: 'Openings & Traps',
    openingsTrackDesc: '{openings} opening repertoires & {traps} tactical traps with interactive drill mode.',
    puzzleVaultQuizzes: 'Puzzle Vault & Quizzes',
    puzzleTrackDesc: 'Openings ({openings}), Tactics ({tactics}), Strategy ({strategy}), Middlegame ({middlegame}), Endgame ({endgame}) + {quizzes} Quizzes.',
    strategyAndEndgames: 'Strategy & Endgames',
    masteryTrackDesc: '{middlegame} middlegame masterclasses & {endgames} playable endgames.',
    first: 'First',
    back: 'Back',
    forward: 'Forward',
    last: 'Last',
    firstMoveTip: 'First move (Home)',
    prevMoveTip: 'Previous move (Left Arrow)',
    nextMoveTip: 'Next move (Right Arrow)',
    lastMoveTip: 'Last move (End)',
    maxLabel: 'Max',
    fitLabel: 'Fit',
    maxBoardTip: 'Maximize board size',
    fitBoardTip: 'Restore balanced panel',
    movesTitle: 'Moves',
    playedMovesTitle: 'Played Moves',
    mainlineMovesTitle: 'Mainline Moves',
    startBtn: 'Start',
    noMovesYet: 'No moves yet.',
    evalBarAria: 'Stockfish 19 evaluation bar',
    sfLiveAnalysis: 'Stockfish 19 Live Analysis',
    sfMultiPv3: 'Stockfish 19 MultiPV 3',
    sfVerification: 'Stockfish 19 Verification',
    sfTablebaseEval: 'Stockfish 19 Tablebase & Eval',
    sfFriendlyCoach: 'Friendly Coach Analysis',
    ready: 'Ready',
    idle: 'Idle',
    thinking: 'Thinking',
    checkmate: 'Checkmate',
    gameOver: 'Game Over',
    checkFen: 'Check FEN',
    arrows: 'Arrows',
    retryMove: 'Retry Move',
    sfEvalPending: 'Evaluating top variations...',
    sfEnablePrompt: 'Enable Stockfish 19 to see top lines.',
    sfTerminalPrompt: 'Position is terminal. Reset or load a new line.',
    sfComputingPrompt: 'Computing Stockfish 19 MultiPV lines...',
    playCandidateTip: 'Play {san}',
    npsUnit: '{k}k n/s',
    modeGuided: 'Guided',
    modeGameAnalysis: 'Game Analysis',
    modeFenLab: 'FEN Lab',
    modeBlunderCheck: 'Blunder Check',
    coachStrengthAria: 'Coach sparring strength',
    levelOption: 'Lvl {n}: {label}',
    white: 'White',
    black: 'Black',
    newBtn: 'New',
    flip: 'Flip',
    playAnyway: 'Play On Anyway',
    checkmateWinner: 'Checkmate! {winner} wins.',
    drawReached: 'Draw reached (stalemate / insufficient material / repetition).',
    sfReplying: 'Stockfish 19 is replying...',
    movePrefix: 'Move {label} ({ply}/{total})',
    moveStart: 'Start',
    sideToMove: '{side} to move',
    yourTurn: 'Your turn',
    engineTurn: 'Engine turn',
    pgnNote: '{status} — step moves or play variations',
    sandboxNote: '{status} — click any Stockfish chip to step forward',
    openPgnTitle: 'Open PGN / Text File or Paste Moves',
    classicSamples: 'Classic Samples...',
    dropPgnHere: 'Drop a .pgn or .txt game file here',
    openFile: 'Open File',
    pgnPastePlaceholder: 'Paste full PGN with tags, move text (e.g. 1. e4 e5 2. Nf3 Nc6 3. Bb5), UCI moves (e2e4 e7e5), or a FEN...',
    supportedFormatsNote: 'Supports .pgn, .txt, multi-game files, comments, & variations',
    clear: 'Clear',
    analyzePastedText: 'Analyze Pasted Text',
    liveCoachSession: 'Live Coach Session ({moves} moves)',
    analysisFallbackHeader: 'Analysis',
    scanAllMoves: 'Scan All Moves',
    stopScan: 'Stop ({done}/{total})',
    copyPgn: 'Copy PGN',
    copied: 'Copied!',
    pgnExtLabel: '.pgn',
    whiteAccuracy: 'White Accuracy',
    blackAccuracy: 'Black Accuracy',
    nextKeyMove: 'Next Key Move',
    cleanGame: 'Clean Game',
    sandboxPanelTitle: 'Position Sandbox / FEN Lab',
    loadStudyPreset: 'Load Study Preset...',
    loadFen: 'Load FEN',
    invalidFenError: 'FEN is invalid or unsupported (must have both kings, legal pawn ranks, and opponent not already in check).',
    binaryFileError: '"{name}" is a {kind}, not a .pgn or .txt notation file. Open a PGN / text file or paste moves below.',
    unreadableFileError: 'Unable to read that file.',
    puzzlesAndQuizzes: 'Puzzles & Quizzes',
    catalogTab: 'Catalog ({n})',
    activeSolverTab: 'Active Solver',
    quizSprintTab: 'Quiz Sprint ({n})',
    solvedProgress: '{solved}/{total} Solved',
    streakCount: 'Streak {n}',
    searchThemePlaceholder: 'Search theme...',
    filterDifficultyAria: 'Filter difficulty',
    unsolved: 'Unsolved',
    random: 'Random',
    noPuzzlesMatch: 'No puzzles match those filters.',
    puzzleSolveCta: 'Solve →',
    showingPuzzles: 'Showing {start}–{end} of {total} puzzles',
    pageOf: 'Page {page}/{total}',
    prev: 'Prev',
    next: 'Next',
    catalog: 'Catalog',
    hint: 'Hint',
    solution: 'Solution',
    retry: 'Retry',
    sfStatusChip: 'Stockfish 19: {state}',
    on: 'On',
    off: 'Off',
    reviewingPly: 'Reviewing Ply {cur}/{max}',
    stepCount: 'Step {cur}/{total}',
    puzzleHintMsg: 'Look at the {piece} on {sq} — calculate forcing checks and targets.',
    puzzleSolutionMsg: 'Solution ({moves}) — {explanation}',
    puzzleFeedbackWait: 'Strong find ({san})! Opponent replies {opp}...',
    puzzleFeedbackNext: 'Opponent played {opp}. Find the next winning move!',
    verifyWithStockfish: 'Verify w/ Stockfish',
    new10QuizSprint: 'New 10-Quiz Sprint',
    quizSprintComplete: 'Quiz Sprint Complete!',
    scoreLabel: 'Score',
    accuracyLabel: 'Accuracy',
    startFreshSprint: 'Start Fresh 10-Quiz Sprint',
    questionProgress: 'Q {cur}/{total}',
    quizCorrect: 'Correct!',
    quizWrong: 'Not quite — best is {san}.',
    quizWrongPlayed: 'You played {played} — best is {san}.',
    quizBoardInputHint: 'Choose an option below or move a piece directly on the board.',
    finishSprint: 'Finish Sprint',
    nextQuestion: 'Next Question',
    repertoiresTab: 'Repertoires ({n})',
    openingTrapsTab: 'Opening Traps ({n})',
    learnTab: 'Learn',
    practiceDrillTab: 'Practice Drill',
    lessonsBtn: 'Lessons',
    middlegameStrategyTitle: 'Middlegame & Strategy ({n})',
    strategyPuzzlesBtn: 'Strategy Puzzles ({n})',
    filterLinesPlaceholder: 'Filter lines or ECO...',
    listBtn: 'List',
    restartDrill: 'Restart Drill',
    revealMove: 'Reveal Move',
    lineMastered: 'Line Mastered!',
    playMoveNum: 'Play Move {num} ({side})',
    practiceTryAgain: 'Try again — look for {hint} instead of {played}.',
    castlingWord: 'castling',
    mainLineWord: 'the main line move',
    revealedStep: 'Played {move}: {text}',
    startingPosition: 'Starting Position',
    moveProgress: 'Move {step}/{total}',
    howToAvoid: 'How to Avoid:',
    endgamesTitle: 'Endgames ({n})',
    sparVsSf: 'Spar vs Stockfish 19: {state}',
    freePlay: 'Free Play',
    analysisToggle: 'Analysis: {state}',
    endgamePuzzlesBtn: 'Endgame Puzzles ({n})',
    targetMeta: 'Target: {target}',
    studiedBadge: 'Studied',
    goalMeta: 'Goal: {goal}',
    convertCleanly: 'Convert cleanly',
    reset: 'Reset',
    matchHallTitle: 'Match Hall — Play or Launch Engine Clash',
    standardChess: 'Standard Chess',
    chess960: 'Chess960',
    playVsEngineTitle: 'Play vs Chess Engine',
    opponentEngineLabel: 'Opponent Engine',
    customEloPrefix: 'Custom:',
    sideLabel: 'Side:',
    startMatchVs: 'Start Match vs {name}',
    engineArenaTitle: 'Engine vs Engine Arena',
    liveThoughtsTag: 'Live Thoughts',
    arenaSetupDesc: 'Pit two distinct chess engines against each other and inspect both MultiPV thoughts, plans, and eval clashes live.',
    whiteEngineLabel: 'White Engine',
    blackEngineLabel: 'Black Engine',
    swap: 'Swap',
    startingPositionLabel: 'Starting Position',
    paceLabel: 'Pace',
    paceFast: 'Fast (0.4s)',
    paceNormal: 'Normal (1.2s)',
    paceStudy: 'Study (2.4s)',
    launchEngineClash: 'Launch Engine Clash',
    otbTitle: 'Over-the-Board: Member vs Member',
    otbEmptyHint: 'Add a second local club member on the Login screen to play two-player rated or coached friendly matches on this device.',
    opponentLabel: 'Opponent',
    yourColorLabel: 'Your Color',
    matchTypeLabel: 'Match Type',
    ratedElo: 'Rated Elo',
    friendlyCoach: 'Friendly (+Coach)',
    beginOtbMatch: 'Begin Over-the-Board Match',
    switchAddMember: 'Switch / Add Member',
    analyzeBtn: 'Analyze',
    leaveGame: 'Leave Game',
    takeBack: 'Take Back',
    resign: 'Resign',
    newMatch: 'New Match',
    reviewingPlyResume: 'Reviewing Ply {cur}/{total} — click Last to resume live board',
    reviewingPlyPlayResume: 'Reviewing Ply {cur}/{total} — click Last to resume live play',
    engineThinkingStatus: '{name} is thinking...',
    playerToMove: '{name} to move',
    resignedMsg: 'You resigned. {name} wins.',
    checkmateWonEngine: 'Checkmate! You defeated {name}!',
    checkmateLostEngine: 'Checkmate. {name} wins.',
    gameDrawn: 'Game drawn.',
    arenaViewTitle: 'Engine Clash Arena',
    resume: 'Resume',
    pause: 'Pause',
    step: 'Step',
    analyzePgn: 'Analyze PGN',
    rematch: 'Rematch',
    setup: 'Setup',
    arrowsToggle: 'Arrows: {state}',
    inspectingPly: 'Inspecting Ply {ply}/{total}: {san} ({engine})',
    inspectingStart: 'Inspecting Starting Position (0/{total})',
    liveBoard: 'Live Board',
    matchDrawn: 'Match Drawn.',
    arenaCheckmate: 'Checkmate! {winner} ({side}) wins in {moves} moves.',
    arenaPausedBanner: 'Paused — both engines analyzing position',
    arenaThinkingBanner: '{name} ({side}) thinking...',
    bothThoughtsTab: 'Both Thoughts',
    logTab: 'Log ({n})',
    plyCounter: 'Ply {cur}/{total}',
    noArenaMovesYet: 'No moves played yet. Waiting for opening move...',
    coachToggle: 'Coach: {state}',
    ratedTag: 'Rated',
    friendlyTag: 'Friendly',
    undo: 'Undo',
    drawOffer: 'Draw',
    playerResigns: '{name} Resigns',
    inCheckTag: ' (Check)',
    drawnByReason: 'Drawn by {reason}.',
    winsByReason: '{name} wins by {reason}!',
    clubStandingsTitle: 'Club Standings & Match Annals',
    sharedFirebaseTag: 'Shared Firebase Mode',
    membersCountTag: '{n} Members',
    clubStandingsHeading: 'Club Standings',
    newClubBtn: 'New Club',
    colRank: '#',
    colMember: 'Member',
    colElo: 'Elo',
    colWld: 'W-L-D',
    sharedEmptyClubs: 'Signed in via school email. Create or open a shared club.',
    noLocalMembers: 'No local members yet.',
    youBadge: 'you',
    enterClubNamePrompt: 'Enter club name:',
    recordedGamesHeading: 'Recorded Games',
    loadingGames: 'Loading games...',
    noRecordedGames: 'No games recorded yet. Play an Over-the-Board game to record your PGN.',
    pliesMeta: '{plies} plies · {reason} · {date}',
    downloadPgn: 'Download .pgn',
    analyzeInCoach: 'Analyze in Coach',
    noMovesItalic: '(no moves)',
    standbyEval: 'Standby — awaiting position evaluation.',
    noSearchVariations: 'No search variations yet.',
    computingVariations: 'Computing candidate variations...',
    standbyNextTurn: 'Standby for next turn.',
    analyzedAt: 'Analyzed · d{depth}',
    playedAt: 'Played {san}{depth}{ms}',
    factorMat: 'Mat',
    factorPos: 'Pos',
    factorMob: 'Mob',
    factorStruct: 'Struct',
    factorKing: 'King',
    awaitingBothEvals: 'Awaiting both evals',
    alignedDelta: 'Aligned',
    sideW: 'W',
    sideB: 'B',
    engineFallbackName: 'Engine',
    errSharedNotConfigured: 'The shared club service has not been configured yet.',
    errEnterSignInEmail: 'Enter the email address used to request this sign-in link.',
    errSignInProfile: 'Sign in before creating a profile.',
    errSignInProgress: 'Sign in before saving progress.',
    errSignInAttempt: 'Sign in before recording an attempt.',
    matchupTitle: '{a} vs {b}',
    langOptionEn: 'English',
    langOptionAr: 'العربية (Arabic)',
    selectLessonAria: 'Select lesson',
    selectEndgameAria: 'Select endgame study',
    selectArchiveGameAria: 'Select game from archive',
    loadClassicSampleAria: 'Load classic sample game',
    arenaPaceAria: 'Arena pace',
    fenInputAria: 'FEN string',
    toggleSidebarTip: 'Toggle lesson sidebar',
    toggleEndgameListTip: 'Toggle endgame list',
    swapArenaEnginesTip: 'Swap White and Black engines',
    openingsHeading: 'Openings & Traps',
    flipTip: 'Flip',
    takeBackTip: 'Take Back',
    soundLabel: 'Sound effects',
    soundOnTip: 'Sound On (M)',
    soundOffTip: 'Sound Muted (M)',
    autoQueenLabel: 'Auto-promote to Queen',
    showLegalMovesLabel: 'Show legal move indicators',
    zenModeBtn: 'Zen',
    zenModeTip: 'Toggle Zen Mode (Z)',
    exitZenBtn: 'Exit Zen (Z)',
    boardInteractHint: 'Drag or click pieces · Right-click for arrows & rings',
    premoveLabel: 'Premove queued: {from}→{to} (click to cancel)',
    evalGraphTitle: 'Advantage Graph',
    outOfBookLabel: 'Out of opening book',
    openingExplorerTitle: 'Opening Explorer',
    openStudyBtn: 'Open Study',
    tablebaseLoading: 'Querying Lichess 7-piece Syzygy...',
    tbWin: 'Tablebase Win',
    tbLoss: 'Tablebase Loss',
    tbDraw: 'Tablebase Draw',
    syzygyTitle: '7-Piece Syzygy',
    syzygyUnavailable: 'Syzygy tablebase offline or unavailable',
    boardEditorTitle: 'Visual Board Editor & FEN Lab',
    editorMoveTool: 'Play',
    editorEraseTool: 'Erase',
    startPosBtn: 'Start Pos',
    clearBoardBtn: 'Kings Only',
    playFromHere: 'Play vs Engine',
    copyFen: 'Copy FEN',
    lichessAnalysisLink: 'Lichess ↗',
    chessComAnalysisLink: 'Chess.com ↗',
    importTabFileText: 'File / Text',
    importTabOnline: 'Lichess & Chess.com',
    onlinePlatformLabel: 'Platform',
    onlineUsernamePlaceholder: 'Username (e.g. DrNykterstein or Hikaru)',
    fetchUserGamesBtn: 'Fetch Games',
    onlineGameUrlPlaceholder: 'Or paste Lichess game URL (https://lichess.org/...)',
    fetchGameUrlBtn: 'Load URL',
    fetchingOnline: 'Fetching from platform...',
    onlineFetchError: 'Unable to fetch from {platform}: {msg}',
    chessComUrlHint: 'For Chess.com games, enter the player username above to import recent games.',
    editorIllegalHint: 'Ensure both Kings are placed and the opponent is not already in check.',
    puzzleRushTab: 'Puzzle Rush',
    puzzleRushCta: 'Puzzle Rush',
    lichessDailyBtn: 'Lichess Daily',
    chessComDailyBtn: 'Chess.com Daily',
    loadingDailyPuzzle: 'Loading daily puzzle...',
    rushMode3m: '3 Min',
    rushMode5m: '5 Min',
    rushModeSurvival: 'Survival',
    rushBestLabel: 'Best: {score}',
    rushScoreLabel: 'Score',
    rushComboLabel: 'Combo ×{n}',
    rushTimeLabel: 'Time',
    rushStrikesLabel: 'Strikes',
    rushStartBtn: 'Start Rush',
    rushNewBest: 'New Personal Best!',
    rushReasonTimeout: "Time's Up!",
    rushReasonStrikes: '3 Strikes Reached',
    rushReasonCleared: 'Vault Cleared!',
    rushReviewMissed: 'Review Missed Puzzles',
    rushPlayAgain: 'Play Again',
    rushSolvedPopup: 'Solved! +{pts}',
    rushStrikePopup: 'Strike! Best was {san}',
    openOnSourceBtn: 'View on Source ↗',
    timeControlLabel: 'Time Control',
    tc_unlimited: 'Unlimited',
    'tc_bullet-1-0': '1+0 Bullet',
    'tc_bullet-2-1': '2+1 Bullet',
    'tc_blitz-3-0': '3+0 Blitz',
    'tc_blitz-3-2': '3+2 Blitz',
    'tc_blitz-5-0': '5+0 Blitz',
    'tc_blitz-5-3': '5+3 Blitz',
    'tc_rapid-10-0': '10+0 Rapid',
    'tc_rapid-10-5': '10+5 Rapid',
    'tc_rapid-15-10': '15+10 Rapid',
    berserkOption: 'Berserk (½ Time, 0 Inc)',
    berserkTag: 'Berserk',
    flagWinEngine: 'Time out! You defeated {name} on time.',
    flagLossEngine: 'Flagged! {name} wins on time.',
    flagDrawInsufficient: 'Timeout vs insufficient mating material — Draw.',
    onlineProfilesTitle: 'Lichess & Chess.com Profile Sync',
    lichessUserLabel: 'Lichess Username',
    chessComUserLabel: 'Chess.com Username',
    syncOnlineBtn: 'Sync Ratings',
    syncingOnline: 'Syncing...',
    importRecentToCoach: 'Import Games',
    onlineRatingsSummary: 'Blitz {blitz} · Rapid {rapid} · Puzzle {puzzle}',
  },
  ar: {
    schoolName: 'مدرسة بوابة المعرفة العالمية',
    clubSub: 'نادي الشطرنج',
    logoAlt: 'شعار مدرسة بوابة المعرفة العالمية',
    navHall: 'القاعة',
    navCoach: 'المدرّب',
    navPuzzles: 'الألغاز',
    navOpenings: 'الافتتاحيات',
    navStrategy: 'الاستراتيجية',
    navEndgames: 'النهايات',
    navPlay: 'اللعب',
    navClub: 'النادي',
    boardBtn: 'الرقعة',
    boardStudioTitle: 'استوديو الرقعة والقطع',
    boardStudioIntro: 'اختر ألوان الرقعة وتصميم القطع ولغة الواجهة. تُحفظ التفضيلات تلقائياً على هذا الجهاز.',
    boardThemeLabel: 'سمة الرقعة',
    pieceStyleLabel: 'نمط القطع',
    languageLabel: 'لغة الواجهة',
    showCoordinates: 'إظهار إحداثيات الرقعة (a–h / 1–8)',
    close: 'إغلاق',
    signOut: 'خروج',
    switchUser: 'تبديل',
    switchOrSignOutTitle: 'تبديل الحساب أو تسجيل الخروج',
    langSwitchText: 'EN',
    langSwitchTitle: 'Switch to English',
    loginSubtitle: 'ادرس {studies} درساً متقدماً، وحلّ {puzzles} لغزاً معتمداً و{quizzes} اختباراً، وتدرّب مباشرة مع محرك ستوكفيش ١٩.',
    takeSeat: 'اختر مقعدك',
    namePlaceholder: 'اسم الطالب (مثال: ليلى المنصور)',
    enterClub: 'دخول النادي',
    nameTooLong: 'يجب ألا يتجاوز الاسم ٣٠ حرفاً.',
    returningMembers: 'الأعضاء المسجّلون في النادي',
    sharedCompleteHint: 'أدخل البريد الإلكتروني المدرسي الذي استلم رابط تسجيل الدخول.',
    sharedSendHint: 'أدخل بريدك الإلكتروني المدرسي وسنرسل لك رابط دخول آمن.',
    schoolEmailLabel: 'البريد المدرسي',
    schoolEmailPlaceholder: 'you@school.edu',
    completeSignIn: 'إتمام تسجيل الدخول',
    sendLink: 'إرسال الرابط',
    checkYourEmail: 'تحقّق من بريدك',
    clubMemberFallback: 'عضو النادي',
    welcomeUser: 'مرحباً يا {name}',
    hallIntro: 'قاعة الدراسة — جميع تفريعات الافتتاحيات والتكتيكات والخطط الاستراتيجية وتحليل ستوكفيش ١٩ في شاشة واحدة.',
    clubElo: 'تصنيف النادي',
    puzzleStreak: 'سلسلة الألغاز',
    solvedLabel: 'المحلول',
    openCoach: 'فتح المدرّب',
    engineDuel: 'مواجهة المحركات',
    playGame: 'ابدأ مباراة',
    sfCoachTitle: 'مدرّب ستوكفيش 19',
    multiPvTag: '٣ تفريعات',
    coachCardDesc: 'شريط تقييم مباشر، وأسهم النقلات المرشحة على الرقعة، وشروحات تكتيكية، وحماية من الأخطاء الفادحة.',
    guidedSparring: 'تدريب موجّه',
    fenLab: 'مختبر FEN',
    importPgnText: 'استيراد PGN / نص',
    blunderCheck: 'فحص الأخطاء',
    dailyTraining: 'التدريب اليومي',
    eloTag: '{rating} إيلو',
    quizSprintsStats: 'الاختبارات المكتملة: {count} · أعلى دقة: {acc}%',
    solveDaily: 'حلّ لغز اليوم',
    quizSprint10: 'اختبار من ١٠ أسئلة',
    studyLibraryTitle: 'مكتبة الدراسة والتدريب',
    libraryCounts: '{studies} درساً · {puzzles} لغزاً · {quizzes} اختباراً',
    openingsAndTraps: 'الافتتاحيات والفخاخ',
    openingsTrackDesc: '{openings} افتتاحية معتمدة و{traps} فخاً تكتيكياً مع وضع التدريب التفاعلي.',
    puzzleVaultQuizzes: 'موسوعة الألغاز والاختبارات',
    puzzleTrackDesc: 'الافتتاحيات ({openings})، التكتيكات ({tactics})، الاستراتيجية ({strategy})، وسط الدور ({middlegame})، النهايات ({endgame}) + {quizzes} اختباراً.',
    strategyAndEndgames: 'الاستراتيجية والنهايات',
    masteryTrackDesc: '{middlegame} درساً في وسط الدور و{endgames} وضعية نهاية قابلة للعب.',
    first: 'الأول',
    back: 'السابق',
    forward: 'التالي',
    last: 'الأخير',
    firstMoveTip: 'النقلة الأولى (Home)',
    prevMoveTip: 'النقلة السابقة (سهم)',
    nextMoveTip: 'النقلة التالية (سهم)',
    lastMoveTip: 'النقلة الأخيرة (End)',
    maxLabel: 'تكبير',
    fitLabel: 'احتواء',
    maxBoardTip: 'تكبير حجم الرقعة',
    fitBoardTip: 'استعادة توازن اللوحة',
    movesTitle: 'النقلات',
    playedMovesTitle: 'النقلات الملعوبة',
    mainlineMovesTitle: 'الخط الرئيسي',
    startBtn: 'البداية',
    noMovesYet: 'لا توجد نقلات بعد.',
    evalBarAria: 'شريط تقييم ستوكفيش 19',
    sfLiveAnalysis: 'تحليل ستوكفيش 19 المباشر',
    sfMultiPv3: 'ستوكفيش 19 · ٣ تفريعات',
    sfVerification: 'التحقق عبر ستوكفيش 19',
    sfTablebaseEval: 'تقييم النهايات · ستوكفيش 19',
    sfFriendlyCoach: 'تحليل المدرّب الودّي',
    ready: 'جاهز',
    idle: 'متوقف',
    thinking: 'يفكّر',
    checkmate: 'كش مات',
    gameOver: 'انتهى الدور',
    checkFen: 'تحقق من FEN',
    arrows: 'الأسهم',
    retryMove: 'أعد النقلة',
    sfEvalPending: 'جارٍ تقييم أفضل التفريعات...',
    sfEnablePrompt: 'فعّل ستوكفيش 19 لعرض أفضل التفريعات.',
    sfTerminalPrompt: 'الوضعية منتهية. أعد الضبط أو حمّل تفريعاً جديداً.',
    sfComputingPrompt: 'جارٍ حساب أفضل ٣ تفريعات عبر ستوكفيش 19...',
    playCandidateTip: 'العب {san}',
    npsUnit: '{k}ألف نقلة/ث',
    modeGuided: 'موجّه',
    modeGameAnalysis: 'تحليل الدور',
    modeFenLab: 'مختبر FEN',
    modeBlunderCheck: 'فحص الأخطاء',
    coachStrengthAria: 'مستوى قوة المدرّب',
    levelOption: 'م{n}: {label}',
    white: 'الأبيض',
    black: 'الأسود',
    newBtn: 'جديد',
    flip: 'اقلب الرقعة',
    playAnyway: 'أكمل على أي حال',
    checkmateWinner: 'كش مات! فاز {winner}.',
    drawReached: 'انتهى الدور بالتعادل (ردب / نقص قطع / تكرار ثلاثي).',
    sfReplying: 'ستوكفيش 19 يرد الآن...',
    movePrefix: 'النقلة {label} ({ply}/{total})',
    moveStart: 'البداية',
    sideToMove: 'الدور على {side}',
    yourTurn: 'دورك للعب',
    engineTurn: 'دور المحرك',
    pgnNote: '{status} — تنقّل بين النقلات أو جرّب تفريعات جديدة',
    sandboxNote: '{status} — انقر على أي نقلة مقترحة من ستوكفيش للتقدّم',
    openPgnTitle: 'افتح ملف PGN / نصي أو الصق النقلات',
    classicSamples: 'مباريات خالدة نموذجية...',
    dropPgnHere: 'أسقط ملف مباراة بصيغة ‎.pgn‏ أو ‎.txt‏ هنا',
    openFile: 'فتح ملف',
    pgnPastePlaceholder: 'الصق نص PGN كاملاً، أو سلسلة نقلات (مثل ‎1. e4 e5 2. Nf3 Nc6‏)، أو نقلات UCI، أو وضعية FEN...',
    supportedFormatsNote: 'يدعم ملفات ‎.pgn‏ و‎.txt‏ والأرشيفات متعددة المباريات والتعليقات والتفريعات',
    clear: 'مسح',
    analyzePastedText: 'تحليل النص الملصوق',
    liveCoachSession: 'جلسة تحليل مباشرة ({moves} نقلة)',
    analysisFallbackHeader: 'تحليل',
    scanAllMoves: 'فحص كل النقلات',
    stopScan: 'إيقاف ({done}/{total})',
    copyPgn: 'نسخ PGN',
    copied: 'تم النسخ!',
    pgnExtLabel: '‎.pgn‏',
    whiteAccuracy: 'دقة الأبيض',
    blackAccuracy: 'دقة الأسود',
    nextKeyMove: 'النقلة الحاسمة التالية',
    cleanGame: 'دور متقن',
    sandboxPanelTitle: 'مختبر الوضعيات / FEN',
    loadStudyPreset: 'تحميل وضعية دراسية...',
    loadFen: 'تحميل FEN',
    invalidFenError: 'صيغة FEN غير صالحة أو غير مدعومة (يجب وجود الملكين وصفوف بيادق قانونية وعدم كون الخصم في كش).',
    binaryFileError: 'الملف «{name}» هو {kind} وليس ملف تدوين ‎.pgn‏ أو ‎.txt‏. اختر ملف شطرنج نصي أو الصق النقلات أدناه.',
    unreadableFileError: 'تعذّر قراءة هذا الملف.',
    puzzlesAndQuizzes: 'الألغاز والاختبارات',
    catalogTab: 'الموسوعة ({n})',
    activeSolverTab: 'لوح الحلّ',
    quizSprintTab: 'ماراثون الاختبارات ({n})',
    solvedProgress: 'تم حلّ {solved}/{total}',
    streakCount: 'سلسلة {n}',
    searchThemePlaceholder: 'ابحث في المواضيع...',
    filterDifficultyAria: 'تصفية حسب الصعوبة',
    unsolved: 'غير المحلولة فقط',
    random: 'عشوائي',
    noPuzzlesMatch: 'لا توجد ألغاز تطابق عوامل التصفية المختارة.',
    puzzleSolveCta: 'حلّ اللغز ←',
    showingPuzzles: 'عرض {start}–{end} من أصل {total} لغزاً',
    pageOf: 'صفحة {page}/{total}',
    prev: 'السابق',
    next: 'التالي',
    catalog: 'الموسوعة',
    hint: 'تلميح',
    solution: 'الحلّ',
    retry: 'إعادة',
    sfStatusChip: 'ستوكفيش 19: {state}',
    on: 'مُفعّل',
    off: 'متوقف',
    reviewingPly: 'مراجعة النقلة {cur}/{max}',
    stepCount: 'خطوة {cur}/{total}',
    puzzleHintMsg: 'انظر إلى {piece} في {sq} — احسب الكشّات والأهداف التكتيكية.',
    puzzleSolutionMsg: 'الحلّ ({moves}) — {explanation}',
    puzzleFeedbackWait: 'نقلة موفّقة ({san})! يردّ الخصم بـ {opp}...',
    puzzleFeedbackNext: 'لعب الخصم {opp}. أوجد النقلة الحاسمة التالية!',
    verifyWithStockfish: 'التحقق بستوكفيش',
    new10QuizSprint: 'اختبار جديد (١٠ أسئلة)',
    quizSprintComplete: 'اكتمل الاختبار بنجاح!',
    scoreLabel: 'النتيجة',
    accuracyLabel: 'نسبة الدقة',
    startFreshSprint: 'بدء اختبار جديد من ١٠ أسئلة',
    questionProgress: 'سؤال {cur}/{total}',
    quizCorrect: 'إجابة صحيحة!',
    quizWrong: 'ليست الأدق — الأفضل هو {san}.',
    quizWrongPlayed: 'لعبت {played} — الأفضل هو {san}.',
    quizBoardInputHint: 'اختر إجابة من القائمة أو حرّك القطعة مباشرة على الرقعة.',
    finishSprint: 'إنهاء الاختبار',
    nextQuestion: 'السؤال التالي',
    repertoiresTab: 'الذخيرة الافتتاحية ({n})',
    openingTrapsTab: 'فخاخ الافتتاحيات ({n})',
    learnTab: 'تعلّم',
    practiceDrillTab: 'تدريب عملي',
    lessonsBtn: 'الدروس',
    middlegameStrategyTitle: 'وسط الدور والاستراتيجية ({n})',
    strategyPuzzlesBtn: 'ألغاز الاستراتيجية ({n})',
    filterLinesPlaceholder: 'ابحث بالاسم أو رمز ECO...',
    listBtn: 'القائمة',
    restartDrill: 'إعادة التدريب',
    revealMove: 'كشف النقلة',
    lineMastered: 'أُتقِن التفريع من الذاكرة!',
    playMoveNum: 'العب النقلة {num} ({side})',
    practiceTryAgain: 'حاول مجدداً — ابحث عن {hint} بدلاً من {played}.',
    castlingWord: 'التبييت',
    mainLineWord: 'نقلة الخط الرئيسي',
    revealedStep: 'تم لعب {move}: {text}',
    startingPosition: 'الوضعية الابتدائية',
    moveProgress: 'نقلة {step}/{total}',
    howToAvoid: 'كيف تتجنب الفخ:',
    endgamesTitle: 'نهايات الدور ({n})',
    sparVsSf: 'تحدّي ستوكفيش 19: {state}',
    freePlay: 'لعب حر',
    analysisToggle: 'التحليل: {state}',
    endgamePuzzlesBtn: 'ألغاز النهايات ({n})',
    targetMeta: 'الهدف: {target}',
    studiedBadge: 'تمت دراسته',
    goalMeta: 'المطلوب: {goal}',
    convertCleanly: 'حسم الدور بنظافة',
    reset: 'إعادة ضبط',
    matchHallTitle: 'صالة المباريات — العب أو أطلق مواجهة المحركات',
    standardChess: 'الشطرنج القياسي',
    chess960: 'شطرنج 960',
    playVsEngineTitle: 'اللعب ضد محرك شطرنج',
    opponentEngineLabel: 'المحرك المنافس',
    customEloPrefix: 'مخصّص:',
    sideLabel: 'اللون:',
    startMatchVs: 'بدء المباراة ضد {name}',
    engineArenaTitle: 'حلبة صراع المحركات (محرك ضد محرك)',
    liveThoughtsTag: 'تفكير مباشر',
    arenaSetupDesc: 'ضع محركين مختلفين وجهاً لوجه وتابع تفكيرهما وتفريعاتهما وخلافات التقييم لحظة بلحظة.',
    whiteEngineLabel: 'محرك الأبيض',
    blackEngineLabel: 'محرك الأسود',
    swap: 'تبديل',
    startingPositionLabel: 'وضعية البداية',
    paceLabel: 'السرعة',
    paceFast: 'سريع (0.4ث)',
    paceNormal: 'متوسط (1.2ث)',
    paceStudy: 'دراسي (2.4ث)',
    launchEngineClash: 'إطلاق مواجهة المحركات',
    otbTitle: 'على الرقعة: عضو ضد عضو',
    otbEmptyHint: 'أضف عضواً محلياً ثانياً من شاشة الدخول للعب مباريات مُصنّفة أو تدريبية على هذا الجهاز.',
    opponentLabel: 'المنافس',
    yourColorLabel: 'لونك',
    matchTypeLabel: 'نوع المباراة',
    ratedElo: 'مُصنّفة (إيلو)',
    friendlyCoach: 'ودّية (+مدرّب)',
    beginOtbMatch: 'بدء مباراة على الرقعة',
    switchAddMember: 'تبديل / إضافة عضو',
    analyzeBtn: 'تحليل',
    leaveGame: 'مغادرة',
    takeBack: 'تراجع',
    resign: 'انسحاب',
    newMatch: 'مباراة جديدة',
    reviewingPlyResume: 'مراجعة النقلة {cur}/{total} — اضغط «الأخير» للعودة للعب المباشر',
    reviewingPlyPlayResume: 'مراجعة النقلة {cur}/{total} — اضغط «الأخير» لاستئناف اللعب المباشر',
    engineThinkingStatus: '{name} يفكّر الآن...',
    playerToMove: 'الدور على {name}',
    resignedMsg: 'لقد انسحبت. فاز {name}.',
    checkmateWonEngine: 'كش مات! تغلّبت على {name}!',
    checkmateLostEngine: 'كش مات. فاز {name}.',
    gameDrawn: 'انتهى الدور بالتعادل.',
    arenaViewTitle: 'حلبة صراع المحركات',
    resume: 'استئناف',
    pause: 'إيقاف مؤقت',
    step: 'خطوة',
    analyzePgn: 'تحليل PGN',
    rematch: 'إعادة المواجهة',
    setup: 'الإعداد',
    arrowsToggle: 'الأسهم: {state}',
    inspectingPly: 'فحص النقلة {ply}/{total}: {san} ({engine})',
    inspectingStart: 'فحص الوضعية الابتدائية (0/{total})',
    liveBoard: 'اللوح المباشر',
    matchDrawn: 'انتهت المواجهة بالتعادل.',
    arenaCheckmate: 'كش مات! فاز {winner} ({side}) في {moves} نقلة.',
    arenaPausedBanner: 'متوقفة مؤقتاً — كلا المحركين يحلّلان الوضعية',
    arenaThinkingBanner: '{name} ({side}) يفكّر الآن...',
    bothThoughtsTab: 'كلا المحركين',
    logTab: 'السجل ({n})',
    plyCounter: 'نقلة {cur}/{total}',
    noArenaMovesYet: 'لم تُلعب نقلات بعد. بانتظار النقلة الافتتاحية...',
    coachToggle: 'المدرّب: {state}',
    ratedTag: 'مُصنّفة',
    friendlyTag: 'ودّية',
    undo: 'تراجع',
    drawOffer: 'تعادل',
    playerResigns: 'انسحاب {name}',
    inCheckTag: ' (كش)',
    drawnByReason: 'انتهى بالتعادل ({reason}).',
    winsByReason: 'فاز {name} ({reason})!',
    clubStandingsTitle: 'ترتيب النادي وسجل المباريات',
    sharedFirebaseTag: 'وضع Firebase المشترك',
    membersCountTag: '{n} أعضاء',
    clubStandingsHeading: 'ترتيب النادي',
    newClubBtn: 'نادٍ جديد',
    colRank: '#',
    colMember: 'العضو',
    colElo: 'إيلو',
    colWld: 'ف-خ-ت',
    sharedEmptyClubs: 'تم تسجيل الدخول بالبريد المدرسي. أنشئ نادياً مشتركاً أو افتحه.',
    noLocalMembers: 'لا يوجد أعضاء محليون بعد.',
    youBadge: 'أنت',
    enterClubNamePrompt: 'أدخل اسم النادي:',
    recordedGamesHeading: 'المباريات المسجّلة',
    loadingGames: 'جارٍ تحميل المباريات...',
    noRecordedGames: 'لا توجد مباريات مسجّلة بعد. العب مباراة على الرقعة لحفظ التدوين PGN.',
    pliesMeta: '{plies} نقلة · {reason} · {date}',
    downloadPgn: 'تنزيل ‎.pgn‏',
    analyzeInCoach: 'تحليل في المدرّب',
    noMovesItalic: '(لا توجد نقلات)',
    standbyEval: 'في وضع الاستعداد — بانتظار تقييم الوضعية.',
    noSearchVariations: 'لا توجد تفريعات بحث بعد.',
    computingVariations: 'جارٍ حساب التفريعات المرشحة...',
    standbyNextTurn: 'بانتظار الدور التالي.',
    analyzedAt: 'تم التحليل · ع{depth}',
    playedAt: 'لعب {san}{depth}{ms}',
    factorMat: 'مواد',
    factorPos: 'تموضع',
    factorMob: 'حركة',
    factorStruct: 'بيادق',
    factorKing: 'ملك',
    awaitingBothEvals: 'بانتظار التقييمين',
    alignedDelta: 'متوافقان',
    sideW: 'أ',
    sideB: 'س',
    engineFallbackName: 'محرك',
    errSharedNotConfigured: 'خدمة النادي المشترك غير مهيأة بعد.',
    errEnterSignInEmail: 'أدخل البريد الإلكتروني الذي استُخدم لطلب رابط تسجيل الدخول.',
    errSignInProfile: 'سجّل الدخول قبل إنشاء ملفك الشخصي.',
    errSignInProgress: 'سجّل الدخول قبل حفظ التقدّم.',
    errSignInAttempt: 'سجّل الدخول قبل تسجيل المحاولة.',
    matchupTitle: '{a} ضد {b}',
    langOptionEn: 'English (الإنجليزية)',
    langOptionAr: 'العربية',
    selectLessonAria: 'اختر الدرس',
    selectEndgameAria: 'اختر نهاية الدور',
    selectArchiveGameAria: 'اختر مباراة من الملف',
    loadClassicSampleAria: 'تحميل مباراة نموذجية خالدة',
    arenaPaceAria: 'سرعة الحلبة',
    fenInputAria: 'صيغة FEN',
    toggleSidebarTip: 'إظهار/إخفاء قائمة الدروس',
    toggleEndgameListTip: 'إظهار/إخفاء قائمة النهايات',
    swapArenaEnginesTip: 'تبديل محرّك الأبيض والأسود',
    openingsHeading: 'الافتتاحيات والفخاخ',
    flipTip: 'اقلب الرقعة',
    takeBackTip: 'تراجع عن النقلة',
    soundLabel: 'المؤثرات الصوتية',
    soundOnTip: 'الصوت مُفعّل (M)',
    soundOffTip: 'الصوت مكتوم (M)',
    autoQueenLabel: 'ترقية تلقائية إلى وزير',
    showLegalMovesLabel: 'إبراز مربعات النقلات القانونية',
    zenModeBtn: 'تركيز',
    zenModeTip: 'تفعيل وضع التركيز الكامل (Z)',
    exitZenBtn: 'إنهاء التركيز (Z)',
    boardInteractHint: 'اسحب أو انقر القطع · الزر الأيمن للأسهم والدوائر',
    premoveLabel: 'نقلة مسبقة محجوزة: {from}←{to} (انقر للإلغاء)',
    evalGraphTitle: 'منحنى الأفضلية',
    outOfBookLabel: 'خارج كتاب الافتتاحيات',
    openingExplorerTitle: 'مستكشف الافتتاحيات',
    openStudyBtn: 'افتح الدرس',
    tablebaseLoading: 'جارٍ استعلام قاعدة ليتشيس (٧ قطع)...',
    tbWin: 'فوز مضمون',
    tbLoss: 'خسارة حتمية',
    tbDraw: 'تعادل نظري',
    syzygyTitle: 'قاعدة سيزيغي 7 قطع',
    syzygyUnavailable: 'قاعدة سيزيغي غير متاحة حالياً',
    boardEditorTitle: 'محرر الرقعة ومختبر FEN',
    editorMoveTool: 'لعب',
    editorEraseTool: 'مسح',
    startPosBtn: 'الابتدائية',
    clearBoardBtn: 'الملكان فقط',
    playFromHere: 'العب ضد المحرك',
    copyFen: 'نسخ FEN',
    lichessAnalysisLink: 'ليتشيس ↗',
    chessComAnalysisLink: 'تشيس.كوم ↗',
    importTabFileText: 'ملف / نص',
    importTabOnline: 'ليتشيس وتشيس.كوم',
    onlinePlatformLabel: 'المنصة',
    onlineUsernamePlaceholder: 'اسم المستخدم (مثال: DrNykterstein أو Hikaru)',
    fetchUserGamesBtn: 'جلب المباريات',
    onlineGameUrlPlaceholder: 'أو الصق رابط مباراة ليتشيس (https://lichess.org/...)',
    fetchGameUrlBtn: 'فتح الرابط',
    fetchingOnline: 'جارٍ الجلب من المنصة...',
    onlineFetchError: 'تعذّر الجلب من {platform}: {msg}',
    chessComUrlHint: 'لمباريات تشيس.كوم، أدخل اسم المستخدم أعلاه لاستيراد أحدث المباريات.',
    editorIllegalHint: 'تأكد من وجود الملكين وعدم وجود كش غير قانوني.',
    puzzleRushTab: 'اندفاع الألغاز',
    puzzleRushCta: 'اندفاع الألغاز',
    lichessDailyBtn: 'لغز ليتشيس اليومي',
    chessComDailyBtn: 'لغز تشيس.كوم اليومي',
    loadingDailyPuzzle: 'جارٍ تحميل اللغز اليومي...',
    rushMode3m: '٣ دقائق',
    rushMode5m: '٥ دقائق',
    rushModeSurvival: 'البقاء',
    rushBestLabel: 'الأفضل: {score}',
    rushScoreLabel: 'النقاط',
    rushComboLabel: 'تتابع ×{n}',
    rushTimeLabel: 'الوقت',
    rushStrikesLabel: 'الأخطاء',
    rushStartBtn: 'ابدأ الاندفاع',
    rushNewBest: 'رقم قياسي جديد!',
    rushReasonTimeout: 'انتهى الوقت!',
    rushReasonStrikes: 'وصلت إلى ٣ أخطاء',
    rushReasonCleared: 'تم إتمام جميع الألغاز!',
    rushReviewMissed: 'مراجعة الألغاز الفائتة',
    rushPlayAgain: 'العب مجدداً',
    rushSolvedPopup: 'حلّ صحيح! +{pts}',
    rushStrikePopup: 'خطأ! الحلّ كان {san}',
    openOnSourceBtn: 'عرض في المصدر ↗',
    timeControlLabel: 'زمن المباراة',
    tc_unlimited: 'وقت مفتوح',
    'tc_bullet-1-0': 'رصاصة 1+0',
    'tc_bullet-2-1': 'رصاصة 2+1',
    'tc_blitz-3-0': 'خاطف 3+0',
    'tc_blitz-3-2': 'خاطف 3+2',
    'tc_blitz-5-0': 'خاطف 5+0',
    'tc_blitz-5-3': 'خاطف 5+3',
    'tc_rapid-10-0': 'سريع 10+0',
    'tc_rapid-10-5': 'سريع 10+5',
    'tc_rapid-15-10': 'سريع 15+10',
    berserkOption: 'بيرسيرك (نصف الوقت، دون زيادة)',
    berserkTag: 'بيرسيرك',
    flagWinEngine: 'انتهى الوقت! تغلّبت على {name} بالوقت.',
    flagLossEngine: 'انتهى وقتك! فاز {name} بالوقت.',
    flagDrawInsufficient: 'انتهى الوقت مع عدم كفاية القطع للإماتة — تعادل.',
    onlineProfilesTitle: 'مزامنة حساب ليتشيس وتشيس.كوم',
    lichessUserLabel: 'اسم مستخدم ليتشيس',
    chessComUserLabel: 'اسم مستخدم تشيس.كوم',
    syncOnlineBtn: 'مزامنة التصنيف',
    syncingOnline: 'جارٍ المزامنة...',
    importRecentToCoach: 'استيراد المباريات',
    onlineRatingsSummary: 'خاطف {blitz} · سريع {rapid} · ألغاز {puzzle}',
  },
};

export function t(key, params = {}, lang = activeLang) {
  const dict = UI_STRINGS[lang] || UI_STRINGS.en;
  let template = dict[key] ?? UI_STRINGS.en[key] ?? key;
  for (const [k, v] of Object.entries(params)) {
    template = template.replaceAll(`{${k}}`, v ?? '');
  }
  return isolateChessTokens(template, lang);
}

export function tCategory(cat, lang = activeLang) {
  if (lang !== 'ar') return cat;
  return ENUM_MAPS.category[cat] || cat;
}

export function tDifficulty(diff, lang = activeLang) {
  if (lang !== 'ar') return diff;
  return ENUM_MAPS.difficulty[diff] || diff;
}

export function tSide(side, lang = activeLang) {
  if (lang !== 'ar') return side;
  return ENUM_MAPS.side[side] || side;
}

export function tTargetResult(res, lang = activeLang) {
  if (lang !== 'ar') return res;
  return ENUM_MAPS.targetResult[res] || res;
}

export function tPieceName(code, lang = activeLang) {
  const c = String(code || '').toLowerCase();
  if (lang === 'ar') return ENUM_MAPS.pieceName[c] || c.toUpperCase();
  return c.toUpperCase();
}

export function tGameReason(reason, lang = activeLang) {
  if (lang !== 'ar') return reason;
  return ENUM_MAPS.gameReason[reason] || reason;
}

export function tMatchType(type, lang = activeLang) {
  if (lang !== 'ar') return type;
  return ENUM_MAPS.matchType[type] || type;
}

export function tBinaryKind(kind, lang = activeLang) {
  if (lang !== 'ar') return kind;
  return ENUM_MAPS.binaryKind[kind] || kind;
}

export function translateMoveReason(reason, lang = activeLang) {
  if (!reason) return reason;
  if (lang !== 'ar') return reason;
  return ENUM_MAPS.moveReason[reason] || reason;
}

export function translateDriverName(driver, lang = activeLang) {
  if (lang !== 'ar') return driver;
  return ENUM_MAPS.hceDriver[driver] || driver;
}

export function localizeBoardThemeName(id, fallbackName, lang = activeLang) {
  if (lang !== 'ar') return fallbackName;
  return ENUM_MAPS.boardTheme[id] || fallbackName;
}

export function localizePieceStyle(id, fallback, lang = activeLang) {
  if (lang !== 'ar') return fallback;
  return ENUM_MAPS.pieceStyle[id] || fallback;
}

export function localizeSandboxPreset(preset, lang = activeLang) {
  if (!preset || lang !== 'ar') return preset;
  return { ...preset, label: ENUM_MAPS.sandboxPreset[preset.label] || preset.label };
}

export function localizeArenaPreset(preset, lang = activeLang) {
  if (!preset || lang !== 'ar') return preset;
  return { ...preset, label: ENUM_MAPS.arenaPreset[preset.id] || preset.label };
}

export function localizeEngineProfile(profile, lang = activeLang) {
  if (!profile || lang !== 'ar') return profile;
  const ar = ENUM_MAPS.engineProfile[profile.id];
  if (!ar) return profile;
  return {
    ...profile,
    name: ar.name,
    shortName: ar.shortName,
    architecture: ar.architecture,
    styleTag: ar.styleTag,
    description: ar.description,
    tiers: (profile.tiers || []).map((tier) => ({
      ...tier,
      label: ar.tiers[tier.value] || tier.label,
    })),
  };
}

export function localizeEngineTier(profileId, tierMeta, lang = activeLang) {
  if (!tierMeta || lang !== 'ar') return tierMeta;
  const ar = ENUM_MAPS.engineProfile[profileId];
  if (tierMeta.value > 100) {
    return { ...tierMeta, label: `إيلو مخصّص ${tierMeta.value}` };
  }
  if (!ar) return tierMeta;
  return { ...tierMeta, label: ar.tiers[tierMeta.value] || tierMeta.label };
}

export function localizeFamousGame(sample, lang = activeLang) {
  if (!sample || lang !== 'ar') return sample;
  const ar = ENUM_MAPS.famousGames[sample.id];
  if (!ar) return sample;
  return { ...sample, label: ar.label };
}

export function localizeComment(text, lang = activeLang) {
  if (!text || lang !== 'ar') return text;
  for (const g of Object.values(ENUM_MAPS.famousGames)) {
    if (g.comments && g.comments[text]) return g.comments[text];
  }
  return isolateChessTokens(text, lang);
}

export function localizeMoveGrade(gradeObj, lang = activeLang) {
  if (!gradeObj || lang !== 'ar') return gradeObj;
  const best = gradeObj.bestSan || '';
  const lossStr = (Math.max(0, Number(gradeObj.cpLoss) || 0) / 100).toFixed(2);
  let label = ENUM_MAPS.gradeLabel[gradeObj.label] || gradeObj.label;
  let summary = gradeObj.summary;

  if (gradeObj.grade === 'book') {
    label = 'نقلة كتابية';
    summary = 'نقلة افتتاحية نظرية معتمدة.';
  } else if (gradeObj.grade === 'brilliant') {
    label = 'نقلة بارعة';
    summary = 'تضحية تكتيكية بارعة تمنحك زمام المبادرة!';
  } else if (gradeObj.grade === 'best') {
    label = 'أفضل نقلة';
    summary = 'اختيار ستوكفيش الأول — يعظّم أفضلية وضعيتك.';
  } else if (gradeObj.grade === 'excellent') {
    label = 'ممتازة';
    summary = `نقلة قوية (−${lossStr}). الأفضل كان ${best || 'خط المحرك'}.`;
  } else if (gradeObj.grade === 'good') {
    label = 'جيدة';
    summary = `نقلة مقبولة (−${lossStr}).${best ? ` الأقوى كان ${best}.` : ''}`;
  } else if (gradeObj.grade === 'inaccuracy') {
    label = 'عدم دقة';
    summary = `انحراف طفيف (−${lossStr}). يُفضّل ${best || 'مرشّح المحرك'}.`;
  } else if (gradeObj.grade === 'mistake') {
    label = 'خطأ';
    summary = `يُفرّط بـ −${lossStr}. الأفضل كان ${best || 'خط المحرك'}.`;
  } else if (gradeObj.grade === 'blunder') {
    label = 'خطأ فادح';
    summary = `فقدان تكتيكي كبير (−${lossStr}).${best ? ` تحافظ ${best} على السيطرة.` : ''}`;
  }

  return {
    ...gradeObj,
    label,
    summary: isolateChessTokens(summary, 'ar'),
  };
}
