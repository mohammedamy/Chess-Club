import { Chess } from 'chess.js';
import { isolateChessTokens, normalizeSearchText } from '../i18n/ui-strings.js';

function normalizeText(value) {
  return normalizeSearchText(value);
}

function stripCheckSuffix(san) {
  return String(san || '').replace(/[+#?!]+$/g, '');
}

/**
 * Filter training puzzles by category, difficulty, search query, and solved state.
 */
export function filterPuzzles(
  puzzles,
  {
    category = 'All',
    difficulty = 'All',
    query = '',
    unsolvedOnly = false,
    solvedSet = new Set(),
    getSearchText = null,
  } = {},
) {
  const q = normalizeText(query);
  const solved = solvedSet instanceof Set ? solvedSet : new Set(solvedSet || []);

  return (Array.isArray(puzzles) ? puzzles : []).filter((p) => {
    if (category && category !== 'All' && p.category !== category) return false;
    if (difficulty && difficulty !== 'All' && p.difficulty !== difficulty) return false;
    if (unsolvedOnly && solved.has(p.id)) return false;
    if (q) {
      const extra = getSearchText ? getSearchText(p) : '';
      const hay = normalizeText(`${p.theme || ''} ${p.category || ''} ${p.difficulty || ''} ${p.prompt || ''} ${p.id || ''} ${extra}`);
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

/**
 * Paginate an array safely into clamped 1-indexed pages for zero-scroll grids.
 */
export function paginateItems(items, page = 1, pageSize = 12) {
  const list = Array.isArray(items) ? items : [];
  const safeSize = Math.max(1, Number(pageSize) || 12);
  const totalItems = list.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / safeSize));
  const clampedPage = Math.min(totalPages, Math.max(1, Number(page) || 1));
  const startIndex = (clampedPage - 1) * safeSize;
  const slice = list.slice(startIndex, startIndex + safeSize);

  return {
    items: slice,
    page: clampedPage,
    pageSize: safeSize,
    totalItems,
    totalPages,
    startIndex,
    endIndex: Math.min(totalItems, startIndex + slice.length),
  };
}

/**
 * Evaluate a user's candidate move against a single- or multi-ply puzzle line.
 * Supports `acceptAlso` alternatives on ply 0 and alternate mate-in-1 equivalence.
 */
export function evaluatePuzzleMove({
  fen,
  solutionMoves = [],
  plyIndex = 0,
  playedMoveObj,
  acceptAlso = [],
  ChessCtor = Chess,
  lang = 'en',
} = {}) {
  const isAr = lang === 'ar';
  const expectedSan = solutionMoves[plyIndex];
  if (!expectedSan || !playedMoveObj) {
    return {
      correct: false,
      finished: false,
      nextPly: plyIndex,
      oppAutoMove: null,
      nextFen: fen,
      playedSan: '',
      expectedSan: expectedSan || '',
      statusMessage: isAr ? 'نقلة غير صالحة أو حالة لغز غير مكتملة.' : 'Invalid move or puzzle state.',
    };
  }

  const probe = new ChessCtor(fen);
  const applied = probe.move(
    typeof playedMoveObj === 'string'
      ? playedMoveObj
      : {
          from: playedMoveObj.from,
          to: playedMoveObj.to,
          promotion: playedMoveObj.promotion || 'q',
        },
  );

  if (!applied) {
    return {
      correct: false,
      finished: false,
      nextPly: plyIndex,
      oppAutoMove: null,
      nextFen: fen,
      playedSan: '',
      expectedSan,
      statusMessage: isAr ? 'نقلة غير قانونية في هذه الوضعية.' : 'Illegal move in this position.',
    };
  }

  const playedSan = applied.san;
  const acceptedList = [expectedSan];
  if (plyIndex === 0 && Array.isArray(acceptAlso)) {
    acceptedList.push(...acceptAlso);
  }

  const matchesListed = acceptedList.some(
    (san) => san === playedSan || stripCheckSuffix(san) === stripCheckSuffix(playedSan),
  );
  const mateEquivalent = expectedSan.endsWith('#') && probe.in_checkmate();
  const isAlternateFirstMove =
    plyIndex === 0 &&
    Array.isArray(acceptAlso) &&
    acceptAlso.some((san) => san === playedSan || stripCheckSuffix(san) === stripCheckSuffix(playedSan)) &&
    stripCheckSuffix(expectedSan) !== stripCheckSuffix(playedSan);

  if (!matchesListed && !mateEquivalent) {
    return {
      correct: false,
      finished: false,
      nextPly: plyIndex,
      oppAutoMove: null,
      nextFen: fen,
      playedSan,
      expectedSan,
      statusMessage: isAr
        ? isolateChessTokens(
            `${playedSan} ليست النقلة الأدق هنا. تفحّص الكشّات والأهداف والخطّة الرئيسية في الوضعية.`,
            'ar',
          )
        : `${playedSan} is not the sharpest move here. Look closely at checks, targets, and the position’s key plan.`,
    };
  }

  // If the user found a verified alternate first move (e.g., from acceptAlso or another mate-in-1),
  // complete immediately cleanly because continuation plies follow the primary line only.
  if (mateEquivalent || isAlternateFirstMove || plyIndex + 1 >= solutionMoves.length) {
    return {
      correct: true,
      finished: true,
      nextPly: solutionMoves.length,
      oppAutoMove: null,
      nextFen: probe.fen(),
      playedSan,
      expectedSan,
      statusMessage: isAr
        ? isolateChessTokens(`تم الحلّ بـ ${playedSan}!`, 'ar')
        : `Solved with ${playedSan}!`,
    };
  }

  // Apply opponent forced reply cleanly to prepare next player ply.
  const oppExpected = solutionMoves[plyIndex + 1];
  const oppMove = probe.move(oppExpected);
  if (!oppMove) {
    return {
      correct: true,
      finished: true,
      nextPly: plyIndex + 1,
      oppAutoMove: null,
      nextFen: probe.fen(),
      playedSan,
      expectedSan,
      statusMessage: isAr
        ? isolateChessTokens(`تم الحلّ بـ ${playedSan}!`, 'ar')
        : `Solved with ${playedSan}!`,
    };
  }

  const nextPly = plyIndex + 2;
  const finished = nextPly >= solutionMoves.length;
  return {
    correct: true,
    finished,
    nextPly,
    oppAutoMove: oppMove.san,
    nextFen: probe.fen(),
    playedSan,
    expectedSan,
    statusMessage: finished
      ? isAr
        ? isolateChessTokens(`تم الحلّ بـ ${playedSan}!`, 'ar')
        : `Solved with ${playedSan}!`
      : isAr
        ? isolateChessTokens(`نقلة رائعة (${playedSan})! ردّ الخصم بـ ${oppMove.san} — أوجد المتابعة.`, 'ar')
        : `Good find (${playedSan})! Opponent replies ${oppMove.san} — find the follow-up.`,
  };
}

/**
 * Create an interactive Position Quiz Sprint session across one category or all 5 categories.
 */
export function createQuizSession(quizzes, { category = 'All', count = 10, offset = 0 } = {}) {
  const pool = (Array.isArray(quizzes) ? quizzes : []).filter(
    (q) => !category || category === 'All' || q.category === category,
  );
  const safeCount = Math.min(pool.length, Math.max(1, Number(count) || 10));
  const selected = [];
  if (pool.length > 0) {
    const start = Math.max(0, Number(offset) || 0) % pool.length;
    if (category === 'All') {
      const buckets = new Map();
      for (const item of pool) {
        if (!buckets.has(item.category)) buckets.set(item.category, []);
        buckets.get(item.category).push(item);
      }
      const keys = [...buckets.keys()];
      let round = Math.floor(start / Math.max(1, keys.length));
      while (selected.length < safeCount) {
        let added = false;
        for (const key of keys) {
          const arr = buckets.get(key);
          if (arr && arr.length) {
            selected.push(arr[(round + (start % keys.length)) % arr.length]);
            added = true;
            if (selected.length >= safeCount) break;
          }
        }
        if (!added) break;
        round += 1;
      }
    } else {
      for (let i = 0; i < safeCount; i++) {
        selected.push(pool[(start + i) % pool.length]);
      }
    }
  }

  return {
    category,
    items: selected,
    currentIndex: 0,
    answers: [],
    lastResult: null,
    completed: selected.length === 0,
  };
}

/**
 * Extracts the leading SAN move token from a multiple-choice quiz option string.
 */
export function extractQuizOptionSan(optionText) {
  if (typeof optionText !== 'string') return '';
  return optionText.split(/\s+[—–-]\s+/)[0].trim();
}

function tryApplyQuizMove(fen, moveInput, ChessCtor = Chess) {
  if (!fen || !moveInput) return null;
  try {
    const probe = new ChessCtor(fen);
    const applied =
      typeof moveInput === 'string'
        ? probe.move(moveInput, { sloppy: true })
        : probe.move({
            from: moveInput.from,
            to: moveInput.to,
            promotion: moveInput.promotion || 'q',
          });
    if (!applied) return null;
    return { applied, probe };
  } catch {
    return null;
  }
}

/**
 * Record the user's answer for the active quiz question via multiple choice without immediately skipping explanation.
 */
export function submitQuizAnswer(session, optionIndex, { ChessCtor = Chess } = {}) {
  if (!session || session.completed) return session;
  const item = session.items[session.currentIndex];
  if (!item) return { ...session, completed: true };

  // Prevent double-answering the same question index.
  if (session.answers.length > session.currentIndex) {
    return session;
  }

  const chosenIndex = Number(optionIndex);
  const isCorrect = chosenIndex === item.correctIndex;
  const optionSan = extractQuizOptionSan(item.options?.[chosenIndex]);
  const res =
    tryApplyQuizMove(item.fen, optionSan, ChessCtor) ||
    (isCorrect ? tryApplyQuizMove(item.fen, item.recommendedSan, ChessCtor) : null);

  const record = {
    quizId: item.id,
    category: item.category,
    chosenIndex,
    correctIndex: item.correctIndex,
    isCorrect,
    recommendedSan: item.recommendedSan,
    explanation: item.explanation,
    answeredVia: 'option',
    playedSan: res ? res.applied.san : null,
    playedMove: res ? { from: res.applied.from, to: res.applied.to } : null,
    fenAfter: res ? res.probe.fen() : null,
  };

  return {
    ...session,
    answers: [...session.answers, record],
    lastResult: record,
  };
}

/**
 * Record the user's answer for the active quiz question by moving a piece directly on the board.
 */
export function submitQuizMove(session, playedMoveObj, { ChessCtor = Chess } = {}) {
  if (!session || session.completed || !playedMoveObj) return session;
  const item = session.items[session.currentIndex];
  if (!item) return { ...session, completed: true };

  // Prevent double-answering the same question index.
  if (session.answers.length > session.currentIndex) {
    return session;
  }

  const res = tryApplyQuizMove(item.fen, playedMoveObj, ChessCtor);
  if (!res) return session;

  const { applied, probe } = res;
  const recSan = String(item.recommendedSan || '');
  const isCorrect =
    applied.san === recSan ||
    stripCheckSuffix(applied.san) === stripCheckSuffix(recSan) ||
    (recSan.endsWith('#') && probe.in_checkmate());

  let chosenIndex = isCorrect ? item.correctIndex : -1;
  if (!isCorrect && Array.isArray(item.options)) {
    for (let i = 0; i < item.options.length; i += 1) {
      const optAttempt = tryApplyQuizMove(item.fen, extractQuizOptionSan(item.options[i]), ChessCtor);
      if (!optAttempt) continue;
      const optMove = optAttempt.applied;
      if (
        (optMove.from === applied.from &&
          optMove.to === applied.to &&
          (optMove.promotion || '') === (applied.promotion || '')) ||
        stripCheckSuffix(optMove.san) === stripCheckSuffix(applied.san)
      ) {
        chosenIndex = i;
        break;
      }
    }
  }

  const record = {
    quizId: item.id,
    category: item.category,
    chosenIndex,
    correctIndex: item.correctIndex,
    isCorrect,
    recommendedSan: item.recommendedSan,
    explanation: item.explanation,
    answeredVia: 'board',
    playedSan: applied.san,
    playedMove: { from: applied.from, to: applied.to },
    fenAfter: probe.fen(),
  };

  return {
    ...session,
    answers: [...session.answers, record],
    lastResult: record,
  };
}

/**
 * Advance to the next quiz question or mark the sprint completed.
 */
export function advanceQuizSession(session) {
  if (!session) return session;
  const nextIndex = session.currentIndex + 1;
  const completed = nextIndex >= session.items.length;
  return {
    ...session,
    currentIndex: completed ? session.items.length - 1 : nextIndex,
    lastResult: null,
    completed,
  };
}

/**
 * Summarize quiz sprint accuracy, points, and per-category breakdown.
 */
export function summarizeQuizSession(session) {
  const answers = session?.answers || [];
  const total = session?.items?.length || answers.length;
  const correct = answers.filter((a) => a.isCorrect).length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  const byCategory = {};
  for (const ans of answers) {
    if (!byCategory[ans.category]) byCategory[ans.category] = { correct: 0, total: 0 };
    byCategory[ans.category].total += 1;
    if (ans.isCorrect) byCategory[ans.category].correct += 1;
  }

  return {
    total,
    answered: answers.length,
    correct,
    accuracy,
    byCategory,
  };
}
