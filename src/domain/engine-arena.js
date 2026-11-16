import { searchClassicalPosition } from './classical-engine.js';
import {
  StockfishClient,
  formatEvalScore,
  resolveEngineLevelConfig,
} from './stockfish-service.js';

export const ENGINE_PROFILES = {
  'sf19-nnue': {
    id: 'sf19-nnue',
    name: 'Stockfish 19 NNUE',
    shortName: 'SF19 NNUE',
    family: 'nnue',
    architecture: 'NNUE + PVS (WASM)',
    styleTag: 'Universal Neural Search',
    description: 'Neural-network grandmaster search engine evaluating subtle long-term imbalances and razor-sharp tactics.',
    defaultTier: 4,
    tiers: [
      { value: 1, label: 'Novice (~800)', elo: '~800' },
      { value: 2, label: 'Apprentice (~1200)', elo: '~1200' },
      { value: 3, label: 'Journeyman (~1600)', elo: '~1600' },
      { value: 4, label: 'Expert (~2000)', elo: '~2000' },
      { value: 5, label: 'Grandmaster (~2500)', elo: '~2500' },
    ],
  },
  'athena-hce': {
    id: 'athena-hce',
    name: 'Athena Classical',
    shortName: 'Athena HCE',
    family: 'classical',
    personality: 'balanced',
    architecture: 'Tapered PeSTO HCE',
    styleTag: 'Classical Harmony',
    description: 'Handcrafted PeSTO evaluation balancing piece activity, center control, and clean king safety.',
    defaultTier: 3,
    tiers: [
      { value: 1, label: 'Club (~1350 · d2)', depth: 2, noiseCp: 22, maxTimeMs: 300, elo: '~1350' },
      { value: 2, label: 'Candidate (~1650 · d3)', depth: 3, noiseCp: 10, maxTimeMs: 500, elo: '~1650' },
      { value: 3, label: 'Master (~1900 · d4)', depth: 4, noiseCp: 0, maxTimeMs: 850, elo: '~1900' },
      { value: 4, label: 'Senior (~2080 · d5)', depth: 5, noiseCp: 0, maxTimeMs: 1150, elo: '~2080' },
    ],
  },
  'tal-hce': {
    id: 'tal-hce',
    name: 'Tal Gambit',
    shortName: 'Tal HCE',
    family: 'classical',
    personality: 'aggressive',
    architecture: 'Attack-Weighted HCE',
    styleTag: 'Sacrificial & Tactical',
    description: 'Prioritizes piece mobility, open lines toward the enemy king, initiative, and dynamic counterplay.',
    defaultTier: 3,
    tiers: [
      { value: 1, label: 'Club (~1350 · d2)', depth: 2, noiseCp: 22, maxTimeMs: 300, elo: '~1350' },
      { value: 2, label: 'Candidate (~1650 · d3)', depth: 3, noiseCp: 10, maxTimeMs: 500, elo: '~1650' },
      { value: 3, label: 'Master (~1900 · d4)', depth: 4, noiseCp: 0, maxTimeMs: 850, elo: '~1900' },
      { value: 4, label: 'Senior (~2080 · d5)', depth: 5, noiseCp: 0, maxTimeMs: 1150, elo: '~2080' },
    ],
  },
  'capablanca-hce': {
    id: 'capablanca-hce',
    name: 'Capablanca Solid',
    shortName: 'Capa HCE',
    family: 'classical',
    personality: 'positional',
    architecture: 'Structure & Endgame HCE',
    styleTag: 'Positional & Endgame',
    description: 'Safeguards pawn structure, outposts, passed pawns, and trades down cleanly when ahead in material.',
    defaultTier: 3,
    tiers: [
      { value: 1, label: 'Club (~1350 · d2)', depth: 2, noiseCp: 22, maxTimeMs: 300, elo: '~1350' },
      { value: 2, label: 'Candidate (~1650 · d3)', depth: 3, noiseCp: 10, maxTimeMs: 500, elo: '~1650' },
      { value: 3, label: 'Master (~1900 · d4)', depth: 4, noiseCp: 0, maxTimeMs: 850, elo: '~1900' },
      { value: 4, label: 'Senior (~2080 · d5)', depth: 5, noiseCp: 0, maxTimeMs: 1150, elo: '~2080' },
    ],
  },
};

export const ENGINE_PROFILE_LIST = Object.values(ENGINE_PROFILES);

export const ARENA_PRESETS = [
  { id: 'standard', label: 'Standard Start', fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' },
  { id: 'chess960', label: 'Chess960 Random', fen: 'chess960' },
  { id: 'najdorf', label: 'Sicilian Najdorf', fen: 'r1bqkb1r/1p2pppp/p1np1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R w KQkq - 0 6' },
  { id: 'ruy-lopez', label: 'Ruy Lopez Classical', fen: 'r1bqk2r/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq - 2 7' },
  { id: 'queens-gambit', label: "Queen's Gambit", fen: 'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3' },
  { id: 'kings-indian', label: "King's Indian Attack", fen: 'rnbq1rk1/pp2ppbp/3p1np1/2p5/4P3/2NP2N1/PPP2PPP/R1BQKB1R w KQkq - 0 6' },
  { id: 'greek-gift', label: 'Greek Gift Setup', fen: 'r1bq1rk1/pppn1ppp/4p3/3pP3/1b1P4/2NB1N2/PPP2PPP/R1BQ1RK1 w - - 0 1' },
  { id: 'lucena', label: 'Lucena Rook Endgame', fen: '3K4/3P1k2/8/8/8/8/4R3/3r4 w - - 0 1' },
];

export function getEngineProfile(profileId) {
  return ENGINE_PROFILES[profileId] || ENGINE_PROFILES['sf19-nnue'];
}

export function getEngineTierMeta(profileId, tier) {
  const profile = getEngineProfile(profileId);
  if (tier && typeof tier === 'object' && tier.custom) {
    return { value: tier.custom, label: `Custom Elo ${tier.custom}`, elo: String(tier.custom) };
  }
  const match = profile.tiers.find((t) => t.value === Number(tier));
  if (match) return match;
  if (profile.family === 'nnue') {
    const cfg = resolveEngineLevelConfig(tier);
    return { value: Number(tier) || 3, label: cfg.label, elo: cfg.label };
  }
  return profile.tiers[Math.min(profile.tiers.length - 1, 2)];
}

/**
 * Worker-backed client for the glass-box Classical HCE engines, with in-process fallback for tests/non-worker hosts.
 */
export class ClassicalEngineClient {
  constructor(profileId = 'athena-hce') {
    this.profile = getEngineProfile(profileId);
    this.engineFlavor = this.profile.name;
    this.worker = null;
    this.workerFailed = false;
    this.nextId = 1;
    this.pending = null;
  }

  #ensureWorker() {
    if (this.workerFailed || typeof Worker === 'undefined') return null;
    if (this.worker) return this.worker;
    try {
      const worker = new Worker(new URL('./classical-engine.worker.js', import.meta.url), {
        type: 'module',
      });
      worker.addEventListener('message', (event) => {
        const { id, type, snapshot, result, message } = event.data || {};
        if (!this.pending || this.pending.id !== id) return;
        if (type === 'progress') {
          if (this.pending.onUpdate) this.pending.onUpdate(snapshot);
        } else if (type === 'done') {
          const done = this.pending;
          this.pending = null;
          done.resolve(result);
        } else if (type === 'error') {
          const errPending = this.pending;
          this.pending = null;
          errPending.reject(new Error(message || 'Classical worker failed'));
        }
      });
      worker.addEventListener('error', () => {
        this.workerFailed = true;
        if (this.pending) {
          const cur = this.pending;
          this.pending = null;
          this.worker = null;
          // Seamlessly re-run in-process if browser blocked module worker
          this.#runInProcess(cur.fen, cur.options, cur.onUpdate).then(cur.resolve, cur.reject);
        }
      });
      this.worker = worker;
      return worker;
    } catch {
      this.workerFailed = true;
      return null;
    }
  }

  #runInProcess(fen, options, onUpdate) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = searchClassicalPosition(fen, {
          ...options,
          onProgress: onUpdate || undefined,
        });
        resolve(res);
      }, 15);
    });
  }

  stop() {
    if (this.pending) {
      const cur = this.pending;
      this.pending = null;
      if (this.worker) {
        try {
          this.worker.postMessage({ type: 'stop' });
        } catch {}
      }
      cur.resolve(null);
    }
  }

  #dispatch(fen, options, onUpdate) {
    this.stop();
    const fullOptions = {
      personality: this.profile.personality || 'balanced',
      engineFlavor: this.profile.name,
      ...options,
    };

    const worker = this.#ensureWorker();
    if (!worker) {
      return this.#runInProcess(fen, fullOptions, onUpdate);
    }

    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending = { id, fen, options: fullOptions, onUpdate, resolve, reject };
      worker.postMessage({ id, type: 'search', fen, options: fullOptions });
    });
  }

  async analyze(fen, { depth = 4, multiPv = 3, historyFens = [], onUpdate = null } = {}) {
    const res = await this.#dispatch(
      fen,
      { depth, multiPv, noiseCp: 0, maxTimeMs: 700, historyFens },
      onUpdate,
    );
    return res ? res.snapshot : null;
  }

  async thinkAndMove(
    fen,
    { level = 3, multiPv = 3, historyFens = [], onUpdate = null } = {},
  ) {
    const tierMeta = getEngineTierMeta(this.profile.id, level);
    return this.#dispatch(
      fen,
      {
        depth: tierMeta.depth || 4,
        multiPv,
        noiseCp: tierMeta.noiseCp || 0,
        maxTimeMs: tierMeta.maxTimeMs || 850,
        historyFens,
      },
      onUpdate,
    );
  }

  async playMove(fen, level = 3, { historyFens = [] } = {}) {
    const res = await this.thinkAndMove(fen, { level, multiPv: 1, historyFens });
    return res ? res.chosenUci : null;
  }

  dispose() {
    this.stop();
    if (this.worker) {
      try {
        this.worker.terminate();
      } catch {}
      this.worker = null;
    }
  }
}

/**
 * Instantiates an isolated worker/engine client so two sides in the Arena never share state.
 */
export function createArenaEngine(profileId = 'sf19-nnue') {
  const profile = getEngineProfile(profileId);
  if (profile.family === 'nnue') {
    return new StockfishClient();
  }
  return new ClassicalEngineClient(profile.id);
}

/**
 * Generates concise natural-language narration explaining an engine's live search thoughts.
 */
export function formatEngineThought(
  snapshot,
  { profile, tierLabel = '', chosenSan = null, isThinking = false } = {},
) {
  const name = profile?.name || snapshot?.engineFlavor || 'Engine';
  if (!snapshot) {
    return `${name}${tierLabel ? ` (${tierLabel})` : ''} is standing by on this position.`;
  }
  if (snapshot.gameOver) {
    return snapshot.whiteMate != null
      ? `${name} sees a finished game (checkmate).`
      : `${name} sees a drawn or terminal game state.`;
  }
  if (!snapshot.lines || snapshot.lines.length === 0) {
    return isThinking
      ? `${name} is scanning forcing captures, checks, and candidate plans...`
      : `Awaiting candidate lines from ${name}...`;
  }

  const lead = snapshot.lines[0];
  const scoreTxt = formatEvalScore(lead.whiteCp, lead.whiteMate);
  const pvTxt = (lead.pvSan || []).slice(0, 4).join(' ');
  const motif = lead.reason ? lead.reason.toLowerCase() : 'positional improvement';

  let driverClause = '';
  if (snapshot.breakdown) {
    const drivers = [
      ['king safety', snapshot.breakdown.kingSafety],
      ['pawn structure', snapshot.breakdown.structure],
      ['mobility', snapshot.breakdown.mobility],
      ['center control', snapshot.breakdown.center],
    ].sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
    const strongest = drivers[0];
    if (strongest && Math.abs(strongest[1]) >= 18) {
      const sign = strongest[1] > 0 ? '+' : '';
      driverClause = ` Key HCE driver: ${strongest[0]} (${sign}${(strongest[1] / 100).toFixed(2)}).`;
    }
  }

  if (chosenSan && chosenSan !== lead.bestMoveSan) {
    return `Chose ${chosenSan} (strength-calibrated), while best calculation preferred ${lead.bestMoveSan} (${scoreTxt} at d${snapshot.depth}, ${motif}). Expected: ${pvTxt}.${driverClause}`;
  }

  const verb = chosenSan ? `Committed ${chosenSan}` : `Favors ${lead.bestMoveSan}`;
  return `${verb} at ${scoreTxt} (depth ${snapshot.depth}) — ${motif}. Expected line: ${pvTxt}.${driverClause}`;
}

function snapToComparableCp(snap) {
  if (!snap || (!snap.lines?.length && !snap.gameOver)) return null;
  if (snap.whiteMate != null) {
    if (snap.whiteMate === 0) return 0;
    return snap.whiteMate > 0
      ? 10000 - Math.min(99, snap.whiteMate) * 50
      : -10000 + Math.min(99, Math.abs(snap.whiteMate)) * 50;
  }
  return snap.whiteCp ?? 0;
}

/**
 * Compares both engines' current evaluations to highlight alignment or tactical disagreement.
 */
export function computeEvalDisagreement(whiteSnap, blackSnap) {
  const wText = whiteSnap && (whiteSnap.lines?.length || whiteSnap.gameOver)
    ? formatEvalScore(whiteSnap.whiteCp, whiteSnap.whiteMate)
    : '--';
  const bText = blackSnap && (blackSnap.lines?.length || blackSnap.gameOver)
    ? formatEvalScore(blackSnap.whiteCp, blackSnap.whiteMate)
    : '--';

  const wCp = snapToComparableCp(whiteSnap);
  const bCp = snapToComparableCp(blackSnap);
  if (wCp == null || bCp == null) {
    return {
      whiteText: wText,
      blackText: bText,
      deltaPawns: null,
      agreementLabel: 'Awaiting both evals',
      tone: 'aligned',
    };
  }

  const delta = Math.abs(wCp - bCp) / 100;
  if (delta < 0.35) {
    return {
      whiteText: wText,
      blackText: bText,
      deltaPawns: delta,
      agreementLabel: `Aligned (Δ ${delta.toFixed(2)})`,
      tone: 'aligned',
    };
  }
  if (delta < 0.9) {
    return {
      whiteText: wText,
      blackText: bText,
      deltaPawns: delta,
      agreementLabel: `Mild Split (Δ ${delta.toFixed(2)})`,
      tone: 'divergent',
    };
  }
  return {
    whiteText: wText,
    blackText: bText,
    deltaPawns: delta,
    agreementLabel: `Eval Clash (Δ ${delta.toFixed(2)})`,
    tone: 'clash',
  };
}
