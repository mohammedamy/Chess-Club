import { computeEvalDisagreement, formatEngineThought } from '../domain/engine-arena.js';
import { evalToWinPercent, formatEvalScore } from '../domain/stockfish-service.js';
import {
  getLang,
  isolateChessTokens,
  localizeEngineProfile,
  localizeMoveGrade,
  t,
  tSide,
  translateMoveReason,
} from '../i18n/ui-strings.js';
import { iconSvg } from './icons.js';

const ARROW_COLORS = [
  'rgba(184, 137, 63, 0.86)', // Rank 1: Gold
  'rgba(31, 58, 38, 0.68)',  // Rank 2: Forest
  'rgba(74, 44, 14, 0.56)',  // Rank 3: Walnut
];
const COMPARE_ARROW_COLOR = 'rgba(38, 84, 124, 0.82)'; // Secondary engine top move

function escapeText(str) {
  if (str == null) return '';
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[c]);
}

function squareToPercentCenter(square, flipped) {
  const fileIdx = 'abcdefgh'.indexOf(square[0]);
  const rankIdx = Number(square[1]) - 1;
  const x = flipped ? 7 - fileIdx : fileIdx;
  const y = flipped ? rankIdx : 7 - rankIdx;
  return { x: x * 12.5 + 6.25, y: y * 12.5 + 6.25 };
}

/**
 * Create a slim vertical Stockfish evaluation bar DOM element.
 */
export function createEvalBar() {
  const bar = document.createElement('div');
  bar.className = 'eval-bar';
  bar.setAttribute('aria-label', t('evalBarAria'));
  bar.style.setProperty('--eval-white-pct', '50%');
  bar.innerHTML = `
    <div class="eval-bar-track">
      <div class="eval-bar-white" style="height:50%"></div>
    </div>
    <div class="eval-bar-score tabular-nums">0.00</div>
  `;
  return bar;
}

/**
 * Update evaluation bar fill height and numeric readout without layout flicker.
 */
export function updateEvalBar(barEl, { whiteCp = 0, whiteMate = null, flipped = false } = {}) {
  if (!barEl) return;
  const fillEl = barEl.querySelector('.eval-bar-white');
  const trackEl = barEl.querySelector('.eval-bar-track');
  const scoreEl = barEl.querySelector('.eval-bar-score');
  const whitePct = evalToWinPercent(whiteCp, whiteMate);
  barEl.style.setProperty('--eval-white-pct', `${whitePct}%`);
  if (trackEl) trackEl.classList.toggle('flipped', Boolean(flipped));
  if (fillEl) fillEl.style.height = `${whitePct}%`;
  if (scoreEl) {
    scoreEl.textContent = formatEvalScore(whiteCp, whiteMate);
    scoreEl.classList.toggle('adv-white', whiteMate != null ? whiteMate > 0 : whiteCp >= 35);
    scoreEl.classList.toggle('adv-black', whiteMate != null ? whiteMate < 0 : whiteCp <= -35);
  }
}

/**
 * Create an SVG overlay positioned across the 8x8 chess board for Stockfish suggestion arrows.
 */
export function createBoardArrowsSvg() {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('class', 'board-arrows');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('aria-hidden', 'true');
  return svg;
}

/**
 * Redraw up to 3 candidate move arrows on the board overlay SVG.
 */
export function updateBoardArrows(svgEl, lines = [], { flipped = false, show = true, compareLine = null } = {}) {
  if (!svgEl) return;
  const ns = 'http://www.w3.org/2000/svg';
  svgEl.innerHTML = '';
  const hasCompare =
    compareLine?.from &&
    compareLine?.to &&
    (!lines[0] || lines[0].from !== compareLine.from || lines[0].to !== compareLine.to);
  if (!show || ((!Array.isArray(lines) || lines.length === 0) && !hasCompare)) return;

  const defs = document.createElementNS(ns, 'defs');
  const makeMarker = (id, fill) => {
    const marker = document.createElementNS(ns, 'marker');
    marker.setAttribute('id', id);
    marker.setAttribute('markerWidth', '4');
    marker.setAttribute('markerHeight', '4');
    marker.setAttribute('refX', '2.5');
    marker.setAttribute('refY', '2');
    marker.setAttribute('orient', 'auto');
    const poly = document.createElementNS(ns, 'polygon');
    poly.setAttribute('points', '0 0.4, 3.2 2, 0 3.6');
    poly.setAttribute('fill', fill);
    marker.appendChild(poly);
    defs.appendChild(marker);
  };
  lines.slice(0, 3).forEach((_, idx) => makeMarker(`sf-arrow-head-${idx}`, ARROW_COLORS[idx] || ARROW_COLORS[2]));
  if (hasCompare) makeMarker('sf-arrow-head-compare', COMPARE_ARROW_COLOR);
  svgEl.appendChild(defs);

  const drawSegment = (line, stroke, width, markerId, dashed = false) => {
    if (!line?.from || !line?.to) return;
    const start = squareToPercentCenter(line.from, flipped);
    const end = squareToPercentCenter(line.to, flipped);
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const len = Math.hypot(dx, dy) || 1;
    const shortenEnd = 2.6;
    const x2 = end.x - (dx / len) * shortenEnd;
    const y2 = end.y - (dy / len) * shortenEnd;

    const elLine = document.createElementNS(ns, 'line');
    elLine.setAttribute('x1', start.x.toFixed(2));
    elLine.setAttribute('y1', start.y.toFixed(2));
    elLine.setAttribute('x2', x2.toFixed(2));
    elLine.setAttribute('y2', y2.toFixed(2));
    elLine.setAttribute('stroke', stroke);
    elLine.setAttribute('stroke-width', width);
    elLine.setAttribute('stroke-linecap', 'round');
    if (dashed) elLine.setAttribute('stroke-dasharray', '3 2');
    elLine.setAttribute('marker-end', `url(#${markerId})`);
    svgEl.appendChild(elLine);
  };

  if (hasCompare) {
    drawSegment(compareLine, COMPARE_ARROW_COLOR, '1.75', 'sf-arrow-head-compare', true);
  }

  lines
    .slice(0, 3)
    .reverse()
    .forEach((line, revIdx, arr) => {
      const idx = arr.length - 1 - revIdx;
      drawSegment(
        line,
        ARROW_COLORS[idx] || ARROW_COLORS[2],
        idx === 0 ? '2.15' : idx === 1 ? '1.6' : '1.25',
        `sf-arrow-head-${idx}`,
      );
    });
}

/**
 * Create the live Stockfish 19 analysis & move-grade inspector panel.
 */
export function createStockfishPanel({
  title = t('sfLiveAnalysis'),
  showArrows = false,
  onToggleArrows = null,
  onApplyMove = null,
  onRetryMove = null,
} = {}) {
  const panel = document.createElement('section');
  panel.className = 'stockfish-panel';

  panel.innerHTML = `
    <div class="sf-head">
      <div class="sf-title-wrap">
        <span class="sf-badge">${iconSvg('coach', 14)} ${escapeText(title)}</span>
        <span class="sf-meta tabular-nums" data-sf-meta>${escapeText(t('ready'))}</span>
      </div>
      <div class="sf-head-actions">
        <button type="button" class="btn-chip ${showArrows ? 'active' : ''}" data-sf-arrows-toggle>
          ${escapeText(t('arrows'))}
        </button>
      </div>
    </div>
    <div class="sf-grade hidden" data-sf-grade>
      <div class="sf-grade-top">
        <span class="grade-pill tabular-nums" data-sf-grade-badge></span>
        <span class="sf-grade-text" data-sf-grade-text></span>
      </div>
      <button type="button" class="btn-ghost-xs hidden" data-sf-retry>
        ${iconSvg('refresh', 13)} ${escapeText(t('retryMove'))}
      </button>
    </div>
    <div class="sf-lines" data-sf-lines>
      <div class="sf-empty">${escapeText(t('sfEvalPending'))}</div>
    </div>
  `;

  panel._onApplyMove = onApplyMove;
  panel._onRetryMove = onRetryMove;

  const toggleBtn = panel.querySelector('[data-sf-arrows-toggle]');
  if (toggleBtn && onToggleArrows) {
    toggleBtn.addEventListener('click', () => {
      onToggleArrows();
    });
  } else if (toggleBtn && !onToggleArrows) {
    toggleBtn.classList.add('hidden');
  }

  const retryBtn = panel.querySelector('[data-sf-retry]');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      if (panel._onRetryMove) panel._onRetryMove();
    });
  }

  const linesBox = panel.querySelector('[data-sf-lines]');
  if (linesBox) {
    linesBox.addEventListener('click', (event) => {
      const chip = event.target.closest('[data-uci]');
      if (!chip) return;
      const uci = chip.getAttribute('data-uci');
      if (uci && panel._onApplyMove) panel._onApplyMove(uci);
    });
  }

  return panel;
}

/**
 * Update the Stockfish panel in place so candidate chips can be clicked cleanly even while searching.
 */
export function updateStockfishPanel(panel, snapshot, lastMoveGrade = null, { showArrows = false } = {}) {
  if (!panel) return;
  const lang = getLang();
  const toggleBtn = panel.querySelector('[data-sf-arrows-toggle]');
  if (toggleBtn) toggleBtn.classList.toggle('active', Boolean(showArrows));

  const metaEl = panel.querySelector('[data-sf-meta]');
  if (metaEl) {
    if (!snapshot) {
      metaEl.textContent = t('idle', {}, lang);
    } else if (snapshot.gameOver) {
      metaEl.textContent = snapshot.whiteMate != null ? t('checkmate', {}, lang) : t('gameOver', {}, lang);
    } else if (snapshot.unsafeFen) {
      metaEl.textContent = t('checkFen', {}, lang);
    } else {
      const status = snapshot.evaluating ? t('thinking', {}, lang) : t('ready', {}, lang);
      const depthTok = lang === 'ar' ? `ع${snapshot.depth || 0}` : `d${snapshot.depth || 0}`;
      const npsTxt = snapshot.nps > 0 ? ` · ${t('npsUnit', { k: Math.round(snapshot.nps / 1000) }, lang)}` : '';
      metaEl.textContent = `${status} · ${depthTok}${npsTxt}`;
    }
  }

  const gradeBox = panel.querySelector('[data-sf-grade]');
  const gradeBadge = panel.querySelector('[data-sf-grade-badge]');
  const gradeText = panel.querySelector('[data-sf-grade-text]');
  const retryBtn = panel.querySelector('[data-sf-retry]');
  const locGrade = localizeMoveGrade(lastMoveGrade, lang);
  if (gradeBox && gradeBadge && gradeText) {
    if (locGrade) {
      gradeBox.classList.remove('hidden');
      gradeBadge.className = `grade-pill tabular-nums grade-${locGrade.grade}`;
      gradeBadge.textContent = `${locGrade.symbol} ${locGrade.label}`;
      gradeText.textContent = locGrade.summary;
      if (retryBtn) {
        const allowRetry = ['inaccuracy', 'mistake', 'blunder'].includes(locGrade.grade) && Boolean(panel._onRetryMove);
        retryBtn.classList.toggle('hidden', !allowRetry);
      }
    } else {
      gradeBox.classList.add('hidden');
      if (retryBtn) retryBtn.classList.add('hidden');
    }
  }

  const linesBox = panel.querySelector('[data-sf-lines]');
  if (!linesBox) return;

  if (!snapshot) {
    linesBox.innerHTML = `<div class="sf-empty">${escapeText(t('sfEnablePrompt', {}, lang))}</div>`;
    return;
  }
  if (snapshot.gameOver) {
    linesBox.innerHTML = `<div class="sf-empty">${escapeText(t('sfTerminalPrompt', {}, lang))}</div>`;
    return;
  }
  const lines = snapshot.lines || [];
  if (!lines.length) {
    linesBox.innerHTML = `<div class="sf-empty">${escapeText(t('sfComputingPrompt', {}, lang))}</div>`;
    return;
  }

  linesBox.innerHTML = lines
    .slice(0, 3)
    .map((line, idx) => {
      const score = formatEvalScore(line.whiteCp, line.whiteMate);
      const pvTail = (line.pvSan || []).slice(1, 5).join(' ');
      const reasonTxt = translateMoveReason(line.reason || 'Engine candidate', lang);
      return `
        <div class="pv-row pv-rank-${idx + 1}">
          <button type="button" class="pv-move-btn tabular-nums" data-uci="${line.uci}" title="${escapeText(t('playCandidateTip', { san: line.bestMoveSan }, lang))}">
            ${line.bestMoveSan}
          </button>
          <span class="pv-score tabular-nums">${score}</span>
          <div class="pv-detail">
            <span class="pv-reason">${escapeText(reasonTxt)}</span>
            ${pvTail ? `<span class="pv-tail tabular-nums">${escapeText(pvTail)}</span>` : ''}
          </div>
        </div>
      `;
    })
    .join('');
}

/**
 * Create a compact dual-engine evaluation disagreement comparison strip.
 */
export function createDualEvalStrip() {
  const el = document.createElement('div');
  el.className = 'dual-eval-strip';
  const lang = getLang();
  el.innerHTML = `
    <span class="eval-side white-side tabular-nums" data-w-eval>${escapeText(t('sideW', {}, lang))}: 0.00</span>
    <span class="eval-delta tabular-nums tone-aligned" data-delta>${escapeText(t('alignedDelta', {}, lang))}</span>
    <span class="eval-side black-side tabular-nums" data-b-eval>${escapeText(t('sideB', {}, lang))}: 0.00</span>
  `;
  return el;
}

/**
 * Update the dual-engine evaluation comparison strip in place.
 */
export function updateDualEvalStrip(stripEl, { whiteName = tSide('White'), blackName = tSide('Black'), whiteSnap = null, blackSnap = null } = {}) {
  if (!stripEl) return;
  const lang = getLang();
  const cmp = computeEvalDisagreement(whiteSnap, blackSnap, lang);
  const wEl = stripEl.querySelector('[data-w-eval]');
  const dEl = stripEl.querySelector('[data-delta]');
  const bEl = stripEl.querySelector('[data-b-eval]');
  if (wEl) wEl.textContent = isolateChessTokens(`${whiteName}: ${cmp.whiteText}`, lang);
  if (bEl) bEl.textContent = isolateChessTokens(`${blackName}: ${cmp.blackText}`, lang);
  if (dEl) {
    dEl.textContent = cmp.agreementLabel;
    dEl.className = `eval-delta tabular-nums tone-${cmp.tone}`;
  }
}

/**
 * Create a live telemetry card displaying an Arena engine's thinking monologue, HCE factors, and top variations.
 */
export function createEngineThoughtCard({ side = 'w', profile, tierLabel = '' } = {}) {
  const lang = getLang();
  const locProf = localizeEngineProfile(profile, lang);
  const card = document.createElement('section');
  card.className = `engine-thought-card side-${side}`;
  const sideLabel = side === 'w' ? t('sideW', {}, lang) : t('sideB', {}, lang);
  card.innerHTML = `
    <div class="etc-head">
      <div class="etc-identity">
        <span class="etc-side ${side === 'w' ? 'white' : 'black'}">${escapeText(sideLabel)}</span>
        <div>
          <div class="etc-name">${escapeText(locProf?.name || t('engineFallbackName', {}, lang))}</div>
          <div class="etc-arch">${escapeText(tierLabel || locProf?.styleTag || '')} · ${escapeText(locProf?.architecture || '')}</div>
        </div>
      </div>
      <span class="etc-status tabular-nums" data-etc-status>${escapeText(t('ready', {}, lang))}</span>
    </div>
    <p class="thought-monologue" data-thought-text>${escapeText(t('standbyEval', {}, lang))}</p>
    <div class="factor-strip hidden" data-factor-strip></div>
    <div class="sf-lines" data-etc-lines>
      <div class="sf-empty">${escapeText(t('noSearchVariations', {}, lang))}</div>
    </div>
  `;
  return card;
}

/**
 * Update an Arena engine's telemetry card in place while thinking or reviewing a historical move.
 */
export function updateEngineThoughtCard(
  cardEl,
  {
    snapshot = null,
    profile = null,
    tierLabel = '',
    isThinking = false,
    isActiveTurn = false,
    chosenSan = null,
    elapsedMs = null,
  } = {},
) {
  if (!cardEl) return;
  const lang = getLang();
  const locProf = localizeEngineProfile(profile, lang);
  cardEl.classList.toggle('active-turn', Boolean(isActiveTurn));

  const statusEl = cardEl.querySelector('[data-etc-status]');
  if (statusEl) {
    const depthPrefix = lang === 'ar' ? 'ع' : 'd';
    if (isThinking) {
      const npsTxt = snapshot?.nps > 0 ? ` · ${t('npsUnit', { k: Math.round(snapshot.nps / 1000) }, lang)}` : '';
      statusEl.textContent = `${t('thinking', {}, lang)} · ${depthPrefix}${snapshot?.depth || 0}${npsTxt}`;
    } else if (chosenSan) {
      const msTxt = elapsedMs != null ? ` · ${elapsedMs}${lang === 'ar' ? 'م.ث' : 'ms'}` : '';
      const dTxt = snapshot?.depth ? ` · ${depthPrefix}${snapshot.depth}` : '';
      statusEl.textContent = isolateChessTokens(
        t('playedAt', { san: chosenSan, depth: dTxt, ms: msTxt }, lang),
        lang,
      );
    } else if (snapshot?.depth) {
      statusEl.textContent = t('analyzedAt', { depth: snapshot.depth }, lang);
    } else {
      statusEl.textContent = t('ready', {}, lang);
    }
  }

  const thoughtEl = cardEl.querySelector('[data-thought-text]');
  if (thoughtEl) {
    thoughtEl.textContent = formatEngineThought(snapshot, {
      profile: locProf,
      tierLabel,
      chosenSan,
      isThinking,
      lang,
    });
  }

  const factorEl = cardEl.querySelector('[data-factor-strip]');
  if (factorEl) {
    const bd = snapshot?.breakdown;
    if (bd) {
      const fmtCp = (cp) => `${cp > 0 ? '+' : ''}${(cp / 100).toFixed(2)}`;
      const items = [
        [t('factorMat', {}, lang), bd.material],
        [t('factorPos', {}, lang), bd.pst],
        [t('factorMob', {}, lang), bd.mobility],
        [t('factorStruct', {}, lang), bd.structure],
        [t('factorKing', {}, lang), bd.kingSafety],
      ];
      factorEl.innerHTML = items
        .map(([lbl, val]) => `<span class="factor-chip tabular-nums">${escapeText(lbl)}: <strong dir="ltr">${fmtCp(val)}</strong></span>`)
        .join('');
      factorEl.classList.remove('hidden');
    } else {
      factorEl.innerHTML = '';
      factorEl.classList.add('hidden');
    }
  }

  const linesEl = cardEl.querySelector('[data-etc-lines]');
  if (!linesEl) return;
  const lines = snapshot?.lines || [];
  if (!lines.length) {
    linesEl.innerHTML = `<div class="sf-empty">${escapeText(isThinking ? t('computingVariations', {}, lang) : t('standbyNextTurn', {}, lang))}</div>`;
    return;
  }

  linesEl.innerHTML = lines
    .slice(0, 3)
    .map((line, idx) => {
      const score = formatEvalScore(line.whiteCp, line.whiteMate);
      const pvTail = (line.pvSan || []).slice(1, 5).join(' ');
      const isChosen = Boolean(chosenSan && line.bestMoveSan === chosenSan);
      const reasonTxt = translateMoveReason(line.reason || 'Candidate line', lang);
      return `
        <div class="pv-row pv-rank-${idx + 1}${isChosen ? ' pv-chosen' : ''}">
          <span class="pv-move-pill tabular-nums">${escapeText(line.bestMoveSan)}</span>
          <span class="pv-score tabular-nums">${score}</span>
          <div class="pv-detail">
            <span class="pv-reason">${escapeText(reasonTxt)}</span>
            ${pvTail ? `<span class="pv-tail tabular-nums">${escapeText(pvTail)}</span>` : ''}
          </div>
        </div>
      `;
    })
    .join('');
}
