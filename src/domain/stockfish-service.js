import { Chess } from 'chess.js';
import { localizeMoveGrade, translateMoveReason } from '../i18n/ui-strings.js';

const PIECE_VALUE = { p: 1, n: 3, b: 3.2, r: 5, q: 9, k: 100 };

function createChess(fen, ChessCtor = Chess) {
  const game = new ChessCtor();
  if (fen) game.load(fen);
  return game;
}

function uciToMoveObj(uci) {
  if (!uci || uci.length < 4) return null;
  const move = { from: uci.slice(0, 2), to: uci.slice(2, 4) };
  if (uci.length > 4) move.promotion = uci.slice(4, 5).toLowerCase();
  return move;
}

function scoreToComparableCp(whiteCp, whiteMate) {
  if (whiteMate != null) {
    return whiteMate > 0
      ? 10000 - Math.min(99, whiteMate) * 50
      : -10000 + Math.min(99, Math.abs(whiteMate)) * 50;
  }
  return whiteCp ?? 0;
}

/**
 * Validates that a FEN can be safely evaluated by Stockfish 19 WASM without
 * aborting on missing kings, back-rank pawns, or an opponent king left in check.
 */
export function isStockfishSafeFen(fen, ChessCtor = Chess) {
  if (typeof fen !== 'string' || !fen.trim()) return false;
  const parts = fen.trim().split(/\s+/);
  if (parts.length < 4) return false;

  const boardPart = parts[0];
  const wk = (boardPart.match(/K/g) || []).length;
  const bk = (boardPart.match(/k/g) || []).length;
  if (wk !== 1 || bk !== 1) return false;

  const ranks = boardPart.split('/');
  if (ranks.length !== 8 || /[Pp]/.test(ranks[0] + ranks[7])) return false;

  const probe = new ChessCtor();
  if (typeof probe.validate_fen === 'function' && !probe.validate_fen(fen).valid) {
    return false;
  }
  if (!probe.load(fen)) return false;

  const oppParts = [...parts];
  oppParts[1] = oppParts[1] === 'b' ? 'w' : 'b';
  if (oppParts[3] && oppParts[3] !== '-') oppParts[3] = '-';
  const oppProbe = new ChessCtor();
  if (oppProbe.load(oppParts.join(' ')) && oppProbe.in_check()) {
    return false;
  }
  return true;
}

/**
 * Parses a UCI `info` line into a structured candidate line normalized to White's perspective.
 */
export function parseUciInfo(line, fen, ChessCtor = Chess) {
  if (typeof line !== 'string' || !line.startsWith('info ')) return null;
  if (!line.includes(' pv ') || !line.includes(' score ')) return null;
  if (line.includes(' upperbound ') || line.includes(' lowerbound ')) return null;

  const depthMatch = line.match(/\bdepth\s+(\d+)/);
  const multipvMatch = line.match(/\bmultipv\s+(\d+)/);
  const npsMatch = line.match(/\bnps\s+(\d+)/);
  const scoreMatch = line.match(/\bscore\s+(cp|mate)\s+(-?\d+)/);
  const pvMatch = line.match(/\bpv\s+(.+)$/);

  if (!depthMatch || !scoreMatch || !pvMatch) return null;

  const game = createChess(fen, ChessCtor);
  const sideMultiplier = game.turn() === 'b' ? -1 : 1;
  const rawScore = Number(scoreMatch[2]);
  const whiteCp = scoreMatch[1] === 'cp' ? (rawScore * sideMultiplier || 0) : null;
  const whiteMate = scoreMatch[1] === 'mate' ? (rawScore * sideMultiplier || 0) : null;

  const uciMoves = pvMatch[1].trim().split(/\s+/).filter(Boolean);
  const pvSan = [];
  const pvWalk = createChess(fen, ChessCtor);

  for (const uci of uciMoves.slice(0, 6)) {
    const moveObj = uciToMoveObj(uci);
    if (!moveObj) break;
    const played = pvWalk.move(moveObj);
    if (!played) break;
    pvSan.push(played.san);
  }

  if (pvSan.length === 0) return null;

  const firstUci = uciMoves[0];
  const firstObj = uciToMoveObj(firstUci);
  const reason = describeSuggestedMove(fen, firstUci, pvSan[0], pvSan, ChessCtor, whiteMate);

  return {
    depth: Number(depthMatch[1]),
    multipv: multipvMatch ? Number(multipvMatch[1]) : 1,
    nps: npsMatch ? Number(npsMatch[1]) : 0,
    whiteCp,
    whiteMate,
    uci: firstUci,
    from: firstObj.from,
    to: firstObj.to,
    bestMoveSan: pvSan[0],
    pvSan,
    pvUci: uciMoves.slice(0, 6),
    reason,
  };
}

/**
 * Converts a White-normalized centipawn or mate score into White's visual win percentage (0..100).
 */
export function evalToWinPercent(whiteCp, whiteMate = null) {
  if (whiteMate != null) {
    if (whiteMate > 0) return 100;
    if (whiteMate < 0) return 0;
    return 50;
  }
  const cp = Number.isFinite(whiteCp) ? whiteCp : 0;
  const winChance = 50 + 50 * (2 / (1 + Math.exp(-0.004 * cp)) - 1);
  return Math.max(4, Math.min(96, Math.round(winChance * 10) / 10));
}

/**
 * Formats a White-normalized centipawn or mate score for human display.
 */
export function formatEvalScore(whiteCp, whiteMate = null) {
  if (whiteMate != null) {
    if (whiteMate === 0) return '0.00';
    return whiteMate > 0 ? `+M${whiteMate}` : `-M${Math.abs(whiteMate)}`;
  }
  const pawns = (Number.isFinite(whiteCp) ? whiteCp : 0) / 100;
  if (Math.abs(pawns) < 0.005) return '0.00';
  return `${pawns > 0 ? '+' : ''}${pawns.toFixed(2)}`;
}

function countAttackedTargets(game, fromSq, moverColor) {
  const piece = game.get(fromSq);
  if (!piece) return 0;
  // Temporarily look at pseudo/legal moves from `fromSq` to see enemy pieces attacked.
  const files = 'abcdefgh';
  const r0 = 8 - Number(fromSq[1]);
  const f0 = files.indexOf(fromSq[0]);
  const board = game.board();
  let targets = 0;

  const checkSq = (r, c) => {
    if (r < 0 || r > 7 || c < 0 || c > 7) return false;
    const occ = board[r][c];
    if (!occ) return true;
    if (occ.color !== moverColor && PIECE_VALUE[occ.type] >= 3) targets += 1;
    return false;
  };

  if (piece.type === 'n') {
    for (const [dr, dc] of [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]) {
      checkSq(r0 + dr, f0 + dc);
    }
  } else if (piece.type === 'b' || piece.type === 'q') {
    for (const [dr, dc] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
      for (let k = 1; k < 8; k += 1) if (!checkSq(r0 + dr * k, f0 + dc * k)) break;
    }
  }
  if (piece.type === 'r' || piece.type === 'q') {
    for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      for (let k = 1; k < 8; k += 1) if (!checkSq(r0 + dr * k, f0 + dc * k)) break;
    }
  }
  return targets;
}

/**
 * Generates a concise strategic or tactical coaching tag for a suggested move.
 */
export function describeSuggestedMove(fen, uciMove, sanMove, pvSan = [], ChessCtor = Chess, whiteMate = null, lang = 'en') {
  const wrapReason = (r) => translateMoveReason(r, lang);
  if (whiteMate != null || sanMove?.endsWith('#') || pvSan.some((m) => m.endsWith('#'))) {
    return wrapReason('Checkmate sequence');
  }
  const game = createChess(fen, ChessCtor);
  const moveObj = uciToMoveObj(uciMove);
  const played = moveObj ? game.move(moveObj) : null;
  if (!played) return wrapReason('Positional improvement');

  if (played.flags.includes('k') || played.flags.includes('q')) {
    return wrapReason('Castles to safety');
  }
  const attackedCount = countAttackedTargets(game, played.to, played.color);
  if (game.in_check() && attackedCount >= 2) {
    return wrapReason('Forks king and piece');
  }
  if (played.promotion) {
    return wrapReason('Promotes passed pawn');
  }
  if (played.captured) {
    return wrapReason('Captures material');
  }
  if (attackedCount >= 2) {
    return wrapReason('Forks two pieces');
  }
  if (game.in_check()) {
    return wrapReason('Checks the king');
  }
  if (played.piece === 'p' && ['d4', 'd5', 'e4', 'e5', 'c4', 'c5'].includes(played.to)) {
    return wrapReason('Strikes the center');
  }
  if (played.piece === 'p' && ((played.color === 'w' && Number(played.to[1]) >= 6) || (played.color === 'b' && Number(played.to[1]) <= 3))) {
    return wrapReason('Advances passed pawn');
  }
  if ((played.piece === 'n' || played.piece === 'b') && ['1', '8'].includes(played.from[1])) {
    return wrapReason('Develops minor piece');
  }
  if (played.piece === 'r' && (['d', 'e', 'c'].includes(played.to[0]) || ['2', '7'].includes(played.to[1]))) {
    return wrapReason('Activates rook');
  }
  return wrapReason('Positional improvement');
}

/**
 * Grades a played move against Stockfish's evaluation before and after the move.
 */
export function gradePlayedMove({
  prevWhiteCp = 0,
  prevWhiteMate = null,
  nextWhiteCp = 0,
  nextWhiteMate = null,
  moverColor = 'w',
  playedUci = '',
  bestUci = '',
  bestSan = '',
  lang = 'en',
}) {
  const dir = moverColor === 'b' ? -1 : 1;
  const prevScore = scoreToComparableCp(prevWhiteCp, prevWhiteMate) * dir;
  const nextScore = scoreToComparableCp(nextWhiteCp, nextWhiteMate) * dir;
  const rawLoss = Math.max(0, Math.round(prevScore - nextScore));
  const isEngineChoice = Boolean(playedUci && bestUci && playedUci === bestUci);
  const cpLoss = isEngineChoice ? 0 : rawLoss;

  let res;
  if (isEngineChoice || cpLoss <= 8) {
    res = {
      grade: 'best',
      label: 'Best Move',
      symbol: '★',
      cpLoss,
      bestSan,
      summary: 'Top Stockfish choice — maximizes your position.',
    };
  } else if (cpLoss <= 28) {
    res = {
      grade: 'excellent',
      label: 'Excellent',
      symbol: '!',
      cpLoss,
      bestSan,
      summary: `Strong move (−${(cpLoss / 100).toFixed(2)}). Best was ${bestSan || 'the engine line'}.`,
    };
  } else if (cpLoss <= 70) {
    res = {
      grade: 'good',
      label: 'Good',
      symbol: '✓',
      cpLoss,
      bestSan,
      summary: `Playable move (−${(cpLoss / 100).toFixed(2)}). ${bestSan ? `Stronger was ${bestSan}.` : ''}`.trim(),
    };
  } else if (cpLoss <= 145) {
    res = {
      grade: 'inaccuracy',
      label: 'Inaccuracy',
      symbol: '?!',
      cpLoss,
      bestSan,
      summary: `Slight slip (−${(cpLoss / 100).toFixed(2)}). Prefer ${bestSan || 'the engine candidate'}.`,
    };
  } else if (cpLoss <= 300) {
    res = {
      grade: 'mistake',
      label: 'Mistake',
      symbol: '?',
      cpLoss,
      bestSan,
      summary: `Gives away −${(cpLoss / 100).toFixed(2)}. Better was ${bestSan || 'the engine line'}.`,
    };
  } else {
    res = {
      grade: 'blunder',
      label: 'Blunder',
      symbol: '??',
      cpLoss,
      bestSan,
      summary: `Major tactical miss (−${(cpLoss / 100).toFixed(2)}). ${bestSan ? `${bestSan} keeps control.` : ''}`.trim(),
    };
  }
  return localizeMoveGrade(res, lang);
}

const PRESET_ENGINE_CONFIG = {
  1: { skill: 0, depth: 3, movetime: 200, label: 'Novice (~800)' },
  2: { skill: 5, depth: 6, movetime: 300, label: 'Apprentice (~1200)' },
  3: { skill: 10, depth: 10, movetime: 450, label: 'Journeyman (~1600)' },
  4: { skill: 15, depth: 13, movetime: 700, label: 'Expert (~2000)' },
  5: { skill: 20, depth: 17, movetime: 1100, label: 'Grandmaster (~2500)' },
};

export function resolveEngineLevelConfig(level) {
  if (level && typeof level === 'object' && level.custom) {
    return {
      customElo: Math.max(1320, Math.min(2850, Number(level.custom) || 1500)),
      depth: 13,
      movetime: 700,
    };
  }
  return PRESET_ENGINE_CONFIG[level] || PRESET_ENGINE_CONFIG[3];
}

/**
 * Browser Web Worker wrapper for Stockfish 19 WASM (with ASM.js fallback).
 * Serializes UCI commands and delivers throttled MultiPV analysis snapshots.
 */
export class StockfishClient {
  constructor() {
    this.worker = null;
    this.readyPromise = null;
    this.engineFlavor = 'Stockfish 19 WASM';
    this.listeners = new Set();
    this.queue = Promise.resolve();
    this.activeGeneration = 0;
    this.isSearching = false;
    this.lastFen = null;
    this.lastInitialFen = null;
  }

  async ensureReady() {
    if (this.readyPromise) return this.readyPromise;
    this.readyPromise = this.#bootWorker();
    return this.readyPromise;
  }

  async #bootWorker() {
    const base = typeof window !== 'undefined' ? window.location.href : 'http://localhost/';
    const primaryUrl = new URL('./engine/stockfish-19-lite-single.js', base).href;
    const fallbackUrl = new URL('./engine/stockfish-19-asm.js', base).href;

    try {
      await this.#spawnAndHandshake(primaryUrl, 'Stockfish 19 WASM');
    } catch {
      await this.#spawnAndHandshake(fallbackUrl, 'Stockfish 19 JS');
    }
    return this;
  }

  #spawnAndHandshake(workerUrl, flavorLabel) {
    return new Promise((resolve, reject) => {
      if (this.worker) {
        try { this.worker.terminate(); } catch {}
      }
      let settled = false;
      const worker = new Worker(workerUrl);
      this.worker = worker;
      this.engineFlavor = flavorLabel;

      const timer = setTimeout(() => {
        if (!settled) {
          settled = true;
          try { worker.terminate(); } catch {}
          reject(new Error(`Timed out initializing ${flavorLabel}`));
        }
      }, 15000);

      let uciAck = false;
      const onMessage = (event) => {
        const line = typeof event.data === 'string' ? event.data : String(event.data || '');
        if (!settled) {
          if (line === 'uciok') {
            uciAck = true;
            worker.postMessage('isready');
          } else if (line === 'readyok' && uciAck) {
            settled = true;
            clearTimeout(timer);
            resolve();
            return;
          }
        }
        this.listeners.forEach((fn) => fn(line));
      };

      worker.addEventListener('message', onMessage);
      worker.addEventListener('error', (err) => {
        if (!settled) {
          settled = true;
          clearTimeout(timer);
          reject(err instanceof Error ? err : new Error(err?.message || 'Worker error'));
        }
      });

      worker.postMessage('uci');
    });
  }

  stop() {
    this.activeGeneration += 1;
    if (this.worker && this.isSearching) {
      this.worker.postMessage('stop');
    }
  }

  #enqueue(taskFn) {
    this.activeGeneration += 1;
    const myGen = this.activeGeneration;
    if (this.worker && this.isSearching) {
      this.worker.postMessage('stop');
    }
    const next = this.queue.catch(() => {}).then(() => taskFn(myGen));
    this.queue = next.catch(() => {});
    return next;
  }

  #searchWorker(
    fen,
    {
      depth = 15,
      multiPv = 1,
      chess960 = false,
      skill = 20,
      customElo = null,
      movetime = 0,
      initialFen = null,
      uciHistory = null,
      gen,
      onProgress,
    },
  ) {
    return new Promise((resolve) => {
      if (gen !== this.activeGeneration) {
        resolve(null);
        return;
      }

      const linesByPv = new Map();
      let highestDepth = 0;
      let lastNps = 0;
      let rafPending = false;
      let finished = false;

      const sortedLines = () =>
        [...linesByPv.values()].sort((a, b) => a.multipv - b.multipv).slice(0, multiPv);

      const flushUpdate = () => {
        rafPending = false;
        if (finished || gen !== this.activeGeneration || !onProgress) return;
        onProgress({ lines: sortedLines(), highestDepth, lastNps, final: false });
      };

      const handler = (line) => {
        if (line.startsWith('info ')) {
          if (gen !== this.activeGeneration) return;
          const parsed = parseUciInfo(line, fen, Chess);
          if (!parsed) return;
          highestDepth = Math.max(highestDepth, parsed.depth);
          if (parsed.nps) lastNps = parsed.nps;
          const prev = linesByPv.get(parsed.multipv);
          if (!prev || parsed.depth >= prev.depth) {
            linesByPv.set(parsed.multipv, parsed);
          }
          if (onProgress && !rafPending) {
            rafPending = true;
            if (typeof requestAnimationFrame === 'function') {
              requestAnimationFrame(flushUpdate);
            } else {
              setTimeout(flushUpdate, 32);
            }
          }
          return;
        }
        if (line.startsWith('bestmove')) {
          finished = true;
          this.isSearching = false;
          this.listeners.delete(handler);
          const bestUci = line.trim().split(/\s+/)[1] || null;
          resolve({
            bestUci,
            lines: sortedLines(),
            highestDepth,
            lastNps,
          });
        }
      };

      this.listeners.add(handler);
      this.isSearching = true;
      const useHistoryPosition = Boolean(initialFen && Array.isArray(uciHistory));
      if (useHistoryPosition) {
        if (initialFen !== this.lastInitialFen) {
          this.worker.postMessage('setoption name Clear Hash');
          this.worker.postMessage('ucinewgame');
          this.lastInitialFen = initialFen;
          this.lastFen = null;
        }
      } else if (fen !== this.lastFen) {
        this.worker.postMessage('setoption name Clear Hash');
        this.worker.postMessage('ucinewgame');
        this.lastFen = fen;
        this.lastInitialFen = null;
      }
      this.worker.postMessage(`setoption name UCI_Chess960 value ${chess960 ? 'true' : 'false'}`);
      this.worker.postMessage(`setoption name MultiPV value ${multiPv}`);
      if (customElo) {
        this.worker.postMessage('setoption name UCI_LimitStrength value true');
        this.worker.postMessage(`setoption name UCI_Elo value ${customElo}`);
      } else {
        this.worker.postMessage('setoption name UCI_LimitStrength value false');
        this.worker.postMessage(`setoption name Skill Level value ${skill}`);
      }
      if (useHistoryPosition) {
        const suffix = uciHistory.length ? ` moves ${uciHistory.join(' ')}` : '';
        this.worker.postMessage(`position fen ${initialFen}${suffix}`);
      } else {
        this.worker.postMessage(`position fen ${fen}`);
      }
      const goCmd = movetime ? `go depth ${depth} movetime ${movetime}` : `go depth ${depth}`;
      this.worker.postMessage(goCmd);
    });
  }

  analyze(fen, { depth = 15, multiPv = 3, chess960 = false, onUpdate } = {}) {
    if (!isStockfishSafeFen(fen, Chess)) {
      const snap = {
        fen,
        engineFlavor: this.engineFlavor,
        depth: 0,
        nps: 0,
        lines: [],
        whiteCp: 0,
        whiteMate: null,
        evaluating: false,
        unsafeFen: true,
      };
      if (onUpdate) onUpdate(snap);
      return Promise.resolve(snap);
    }

    const staticGame = createChess(fen, Chess);
    if (staticGame.game_over()) {
      const whiteMate = staticGame.in_checkmate()
        ? staticGame.turn() === 'w'
          ? -1
          : 1
        : null;
      const snap = {
        fen,
        engineFlavor: this.engineFlavor,
        depth: 0,
        nps: 0,
        lines: [],
        whiteCp: 0,
        whiteMate,
        evaluating: false,
        gameOver: true,
      };
      if (onUpdate) onUpdate(snap);
      return Promise.resolve(snap);
    }

    const moverDir = staticGame.turn() === 'b' ? -1 : 1;

    return this.#enqueue(async (gen) => {
      if (gen !== this.activeGeneration) return null;
      await this.ensureReady();
      if (gen !== this.activeGeneration) return null;

      // Run a fast MultiPV=1 pre-pass so LMR pruning in MultiPV=3 never misses forcing sacrifices.
      let tacticalTop = null;
      if (multiPv > 1) {
        const probe = await this.#searchWorker(fen, {
          depth: Math.min(11, depth),
          multiPv: 1,
          chess960,
          gen,
        });
        if (!probe || gen !== this.activeGeneration) return null;
        tacticalTop = probe.lines[0] || null;
      }

      const mergeLines = (rawLines) => {
        const merged = [...rawLines];
        if (tacticalTop) {
          const bestRaw = merged[0];
          const tacScore = scoreToComparableCp(tacticalTop.whiteCp, tacticalTop.whiteMate) * moverDir;
          const rawScore = bestRaw
            ? scoreToComparableCp(bestRaw.whiteCp, bestRaw.whiteMate) * moverDir
            : -Infinity;
          if (!bestRaw || (tacticalTop.uci !== bestRaw.uci && tacScore > rawScore + 15)) {
            const rest = merged.filter((l) => l.uci !== tacticalTop.uci).slice(0, multiPv - 1);
            return [{ ...tacticalTop, multipv: 1 }, ...rest.map((l, idx) => ({ ...l, multipv: idx + 2 }))];
          }
        }
        return merged.slice(0, multiPv);
      };

      const buildSnap = ({ lines, highestDepth, lastNps, evaluating }) => {
        const ranked = mergeLines(lines);
        const top = ranked[0] || null;
        return {
          fen,
          engineFlavor: this.engineFlavor,
          depth: highestDepth,
          nps: lastNps,
          lines: ranked,
          whiteCp: top ? top.whiteCp : 0,
          whiteMate: top ? top.whiteMate : null,
          evaluating,
        };
      };

      if (tacticalTop && onUpdate && gen === this.activeGeneration) {
        onUpdate(buildSnap({ lines: [tacticalTop], highestDepth: tacticalTop.depth, lastNps: tacticalTop.nps, evaluating: true }));
      }

      const res = await this.#searchWorker(fen, {
        depth,
        multiPv,
        chess960,
        gen,
        onProgress: onUpdate
          ? (prog) => onUpdate(buildSnap({ ...prog, evaluating: true }))
          : null,
      });

      if (!res || gen !== this.activeGeneration) return null;
      const finalSnap = buildSnap({
        lines: res.lines,
        highestDepth: res.highestDepth,
        lastNps: res.lastNps,
        evaluating: false,
      });
      if (onUpdate) onUpdate(finalSnap);
      return finalSnap;
    });
  }

  playMove(fen, level = 3, { chess960 = false, initialFen = null, uciHistory = null } = {}) {
    if (!isStockfishSafeFen(fen, Chess)) return Promise.resolve(null);
    const staticGame = createChess(fen, Chess);
    if (staticGame.game_over()) return Promise.resolve(null);

    const opts = resolveEngineLevelConfig(level);
    return this.#enqueue(async (gen) => {
      if (gen !== this.activeGeneration) return null;
      await this.ensureReady();
      if (gen !== this.activeGeneration) return null;

      const res = await this.#searchWorker(fen, {
        depth: opts.depth || 10,
        multiPv: 1,
        chess960,
        skill: opts.skill ?? 10,
        customElo: opts.customElo || null,
        movetime: opts.movetime || 0,
        initialFen,
        uciHistory,
        gen,
      });
      return res ? res.bestUci : null;
    });
  }

  /**
   * Streams live MultiPV=3 thoughts while choosing a skill-appropriate move for arena/sparring play.
   */
  thinkAndMove(
    fen,
    {
      level = 4,
      multiPv = 3,
      chess960 = false,
      initialFen = null,
      uciHistory = null,
      onUpdate = null,
    } = {},
  ) {
    const startTime = Date.now();
    if (!isStockfishSafeFen(fen, Chess)) {
      const snap = {
        fen,
        engineFlavor: this.engineFlavor,
        depth: 0,
        nps: 0,
        lines: [],
        whiteCp: 0,
        whiteMate: null,
        evaluating: false,
        unsafeFen: true,
      };
      if (onUpdate) onUpdate(snap);
      return Promise.resolve({ chosenUci: null, chosenSan: null, snapshot: snap, elapsedMs: 0 });
    }

    const staticGame = createChess(fen, Chess);
    if (staticGame.game_over()) {
      const whiteMate = staticGame.in_checkmate()
        ? staticGame.turn() === 'w'
          ? -1
          : 1
        : null;
      const snap = {
        fen,
        engineFlavor: this.engineFlavor,
        depth: 0,
        nps: 0,
        lines: [],
        whiteCp: 0,
        whiteMate,
        evaluating: false,
        gameOver: true,
      };
      if (onUpdate) onUpdate(snap);
      return Promise.resolve({ chosenUci: null, chosenSan: null, snapshot: snap, elapsedMs: 0 });
    }

    const opts = resolveEngineLevelConfig(level);
    const analysisDepth = Math.min(opts.depth || 12, 14);
    const analysisMovetime = opts.movetime ? Math.min(opts.movetime, 950) : 900;

    return this.#enqueue(async (gen) => {
      if (gen !== this.activeGeneration) return null;
      await this.ensureReady();
      if (gen !== this.activeGeneration) return null;

      const buildSnap = ({ lines, highestDepth, lastNps, evaluating }) => {
        const sliced = (lines || []).slice(0, multiPv);
        const top = sliced[0] || null;
        return {
          fen,
          engineFlavor: this.engineFlavor,
          depth: highestDepth,
          nps: lastNps,
          lines: sliced,
          whiteCp: top ? top.whiteCp : 0,
          whiteMate: top ? top.whiteMate : null,
          evaluating,
        };
      };

      const res = await this.#searchWorker(fen, {
        depth: analysisDepth,
        multiPv,
        chess960,
        movetime: analysisMovetime,
        initialFen,
        uciHistory,
        gen,
        onProgress: onUpdate
          ? (prog) => onUpdate(buildSnap({ ...prog, evaluating: true }))
          : null,
      });

      if (!res || gen !== this.activeGeneration) return null;
      const finalSnap = buildSnap({
        lines: res.lines,
        highestDepth: res.highestDepth,
        lastNps: res.lastNps,
        evaluating: false,
      });
      if (onUpdate) onUpdate(finalSnap);

      let chosenUci = finalSnap.lines[0]?.uci || res.bestUci || null;
      const isStrengthLimited = (opts.skill != null && opts.skill < 20) || Boolean(opts.customElo);
      if (isStrengthLimited) {
        const moveRes = await this.#searchWorker(fen, {
          depth: opts.depth || 10,
          multiPv: 1,
          chess960,
          skill: opts.skill ?? 10,
          customElo: opts.customElo || null,
          movetime: opts.movetime ? Math.min(opts.movetime, 650) : 500,
          initialFen,
          uciHistory,
          gen,
        });
        if (!moveRes || gen !== this.activeGeneration) return null;
        if (moveRes.bestUci && moveRes.bestUci !== '(none)') {
          chosenUci = moveRes.bestUci;
        }
      }

      let chosenSan = null;
      if (chosenUci && chosenUci !== '(none)') {
        const probe = createChess(fen, Chess);
        const played = probe.move(uciToMoveObj(chosenUci));
        if (played) chosenSan = played.san;
      }

      return {
        chosenUci,
        chosenSan,
        snapshot: finalSnap,
        elapsedMs: Date.now() - startTime,
      };
    });
  }

  dispose() {
    this.stop();
    if (this.worker) {
      try { this.worker.terminate(); } catch {}
      this.worker = null;
    }
    this.readyPromise = null;
    this.lastFen = null;
    this.lastInitialFen = null;
    this.listeners.clear();
  }
}

export const stockfishClient = new StockfishClient();
