import { evalToWinPercent, formatEvalScore } from '../domain/stockfish-service.js';
import { isolateChessTokens, localizeSandboxPreset, t } from '../i18n/ui-strings.js';
import { iconSvg } from './icons.js';

const USER_ANNOT_COLORS = {
  green: 'rgba(21, 128, 61, 0.8)',
  red: 'rgba(185, 28, 28, 0.82)',
  blue: 'rgba(29, 78, 216, 0.8)',
  gold: 'rgba(212, 169, 67, 0.88)',
};

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
 * SVG overlay for user right-click circle highlights and directional arrows.
 */
export function createUserAnnotationsSvg() {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('class', 'board-user-annotations');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('aria-hidden', 'true');
  return svg;
}

export function updateUserAnnotationsSvg(svgEl, { circles = [], arrows = [] } = {}, { flipped = false } = {}) {
  if (!svgEl) return;
  const ns = 'http://www.w3.org/2000/svg';
  svgEl.innerHTML = '';
  if (!circles.length && !arrows.length) return;

  const defs = document.createElementNS(ns, 'defs');
  for (const [key, fill] of Object.entries(USER_ANNOT_COLORS)) {
    const marker = document.createElementNS(ns, 'marker');
    marker.setAttribute('id', `user-arrow-head-${key}`);
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
  }
  svgEl.appendChild(defs);

  for (const c of circles) {
    if (!c?.square) continue;
    const center = squareToPercentCenter(c.square, flipped);
    const stroke = USER_ANNOT_COLORS[c.color] || USER_ANNOT_COLORS.green;
    const ring = document.createElementNS(ns, 'circle');
    ring.setAttribute('cx', center.x.toFixed(2));
    ring.setAttribute('cy', center.y.toFixed(2));
    ring.setAttribute('r', '5.35');
    ring.setAttribute('fill', 'none');
    ring.setAttribute('stroke', stroke);
    ring.setAttribute('stroke-width', '1.15');
    svgEl.appendChild(ring);
  }

  for (const a of arrows) {
    if (!a?.from || !a?.to || a.from === a.to) continue;
    const colorKey = a.color && USER_ANNOT_COLORS[a.color] ? a.color : 'green';
    const stroke = USER_ANNOT_COLORS[colorKey];
    const start = squareToPercentCenter(a.from, flipped);
    const end = squareToPercentCenter(a.to, flipped);

    const df = Math.abs('abcdefgh'.indexOf(a.to[0]) - 'abcdefgh'.indexOf(a.from[0]));
    const dr = Math.abs(Number(a.to[1]) - Number(a.from[1]));
    const isKnight = (df === 1 && dr === 2) || (df === 2 && dr === 1);

    if (isKnight) {
      const mid =
        dr === 2
          ? { x: start.x, y: end.y }
          : { x: end.x, y: start.y };
      const dx = end.x - mid.x;
      const dy = end.y - mid.y;
      const len = Math.hypot(dx, dy) || 1;
      const x2 = end.x - (dx / len) * 2.5;
      const y2 = end.y - (dy / len) * 2.5;

      const path = document.createElementNS(ns, 'path');
      path.setAttribute(
        'd',
        `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} L ${mid.x.toFixed(2)} ${mid.y.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)}`,
      );
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', stroke);
      path.setAttribute('stroke-width', '2.05');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('marker-end', `url(#user-arrow-head-${colorKey})`);
      svgEl.appendChild(path);
    } else {
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const len = Math.hypot(dx, dy) || 1;
      const x2 = end.x - (dx / len) * 2.6;
      const y2 = end.y - (dy / len) * 2.6;

      const line = document.createElementNS(ns, 'line');
      line.setAttribute('x1', start.x.toFixed(2));
      line.setAttribute('y1', start.y.toFixed(2));
      line.setAttribute('x2', x2.toFixed(2));
      line.setAttribute('y2', y2.toFixed(2));
      line.setAttribute('stroke', stroke);
      line.setAttribute('stroke-width', '2.05');
      line.setAttribute('stroke-linecap', 'round');
      line.setAttribute('marker-end', `url(#user-arrow-head-${colorKey})`);
      svgEl.appendChild(line);
    }
  }
}

/**
 * Renders the Lichess/Chess.com style interactive evaluation advantage graph.
 */
export function createEvalGraph(
  evalSeries = [],
  { currentPly = 0, totalPlies = 0, onSelectPly = null, lang = 'en' } = {},
) {
  const wrap = document.createElement('section');
  wrap.className = 'eval-graph-card';
  const maxPly = Math.max(totalPlies, evalSeries.length, 1);

  const head = document.createElement('div');
  head.className = 'eval-graph-head';
  head.innerHTML = `<span class="small" style="font-weight:700;color:var(--walnut-dark)">${escapeText(t('evalGraphTitle', {}, lang))}</span>
    <span class="mono small tabular-nums" dir="ltr">${evalSeries.find((p) => p.ply === currentPly)
      ? formatEvalScore(
          evalSeries.find((p) => p.ply === currentPly).whiteCp,
          evalSeries.find((p) => p.ply === currentPly).whiteMate,
        )
      : '0.00'}</span>`;
  wrap.appendChild(head);

  const W = 320;
  const H = 64;
  const padY = 4;
  const plotH = H - padY * 2;
  const xFor = (ply) => (ply / maxPly) * W;
  const yFor = (pt) => {
    const pct = evalToWinPercent(pt.whiteCp, pt.whiteMate);
    return padY + (1 - pct / 100) * plotH;
  };

  const ordered = [{ ply: 0, whiteCp: 20, whiteMate: null, grade: null }, ...evalSeries];
  const polyPoints = [
    `0,${H}`,
    ...ordered.map((pt) => `${xFor(pt.ply).toFixed(1)},${yFor(pt).toFixed(1)}`),
    `${xFor(ordered[ordered.length - 1].ply).toFixed(1)},${H}`,
  ].join(' ');

  const linePoints = ordered.map((pt) => `${xFor(pt.ply).toFixed(1)},${yFor(pt).toFixed(1)}`).join(' ');

  const dotsSvg = evalSeries
    .filter((pt) => ['blunder', 'mistake', 'brilliant'].includes(pt.grade))
    .map((pt) => {
      const cx = xFor(pt.ply).toFixed(1);
      const cy = yFor(pt).toFixed(1);
      const fill =
        pt.grade === 'brilliant' ? '#0f766e' : pt.grade === 'mistake' ? '#d97706' : '#991b1b';
      return `<circle cx="${cx}" cy="${cy}" r="2.7" fill="${fill}" stroke="#faf6e9" stroke-width="0.8" />`;
    })
    .join('');

  const cursorX = xFor(Math.min(maxPly, Math.max(0, currentPly))).toFixed(1);
  const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgEl.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svgEl.setAttribute('class', 'eval-graph-svg');
  svgEl.setAttribute('role', 'img');
  svgEl.setAttribute('aria-label', t('evalGraphTitle', {}, lang));
  svgEl.innerHTML = `
    <rect x="0" y="0" width="${W}" height="${H}" fill="#2a1808" rx="3" />
    <polygon points="${polyPoints}" fill="#f4ecd8" opacity="0.92" />
    <line x1="0" y1="${H / 2}" x2="${W}" y2="${H / 2}" stroke="rgba(184,137,63,0.45)" stroke-dasharray="3 3" stroke-width="0.9" />
    <polyline points="${linePoints}" fill="none" stroke="#b8893f" stroke-width="1.35" />
    ${dotsSvg}
    <line x1="${cursorX}" y1="0" x2="${cursorX}" y2="${H}" stroke="#d4a943" stroke-width="1.6" />
  `;

  if (onSelectPly) {
    svgEl.addEventListener('click', (e) => {
      const rect = svgEl.getBoundingClientRect();
      if (!rect.width) return;
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const targetPly = Math.max(0, Math.min(totalPlies, Math.round(ratio * maxPly)));
      onSelectPly(targetPly);
    });
  }

  wrap.appendChild(svgEl);
  return wrap;
}

/**
 * Compact captured-pieces strip + material advantage pill (+3).
 */
export function createMaterialBar({ capturedPieces = [], netAdv = 0, pieceSvgMap = {} } = {}) {
  const bar = document.createElement('div');
  bar.className = 'material-bar';
  bar.setAttribute('dir', 'ltr');

  if (!capturedPieces.length && netAdv <= 0) {
    return bar;
  }

  const icons = capturedPieces
    .map((code) => `<span class="cap-piece" title="${escapeText(code)}">${pieceSvgMap[code] || ''}</span>`)
    .join('');
  const advHtml = netAdv > 0 ? `<span class="mat-adv tabular-nums">+${netAdv}</span>` : '';
  bar.innerHTML = `${icons}${advHtml}`;
  return bar;
}

/**
 * Displays live ECO opening detection, clickable book moves, and 7-piece Syzygy Cloud Tablebase verdicts.
 */
export function createExplorerAndTablebasePanel({
  opening = null,
  continuations = [],
  tablebase = null,
  pieceCount = 32,
  tablebaseLoading = false,
  onPlaySan = null,
  onOpenStudy = null,
  lang = 'en',
} = {}) {
  const box = document.createElement('section');
  box.className = 'explorer-panel';

  const header = document.createElement('div');
  header.className = 'explorer-head';
  const ecoTitle = opening
    ? isolateChessTokens(`${opening.eco ? `${opening.eco} · ` : ''}${opening.name}`, lang)
    : t('outOfBookLabel', {}, lang);
  header.innerHTML = `
    <div style="display:flex;align-items:center;gap:.35rem;min-width:0">
      <span class="sf-badge">${iconSvg('book', 13)} ${escapeText(t('openingExplorerTitle', {}, lang))}</span>
    </div>
    ${opening?.studyId && onOpenStudy ? `<button type="button" class="btn-ghost-xs" data-open-study>${escapeText(t('openStudyBtn', {}, lang))}</button>` : ''}
  `;
  const studyBtn = header.querySelector('[data-open-study]');
  if (studyBtn && onOpenStudy && opening?.studyId) {
    studyBtn.onclick = () => onOpenStudy(opening);
  }
  box.appendChild(header);

  const badgeRow = document.createElement('div');
  badgeRow.className = 'explorer-eco-line';
  badgeRow.textContent = ecoTitle;
  box.appendChild(badgeRow);

  if (continuations.length > 0) {
    const movesWrap = document.createElement('div');
    movesWrap.className = 'explorer-chips';
    for (const cont of continuations) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'explorer-move-chip';
      btn.title = cont.name || cont.san;
      btn.innerHTML = `<strong class="mono tabular-nums" dir="ltr">${escapeText(cont.san)}</strong>${cont.eco ? ` <small class="mono" dir="ltr">${escapeText(cont.eco)}</small>` : ''}`;
      if (onPlaySan) btn.onclick = () => onPlaySan(cont.san);
      movesWrap.appendChild(btn);
    }
    box.appendChild(movesWrap);
  }

  if (pieceCount <= 7) {
    const tbWrap = document.createElement('div');
    tbWrap.className = 'tablebase-box';
    if (tablebaseLoading && !tablebase) {
      tbWrap.innerHTML = `<div class="small">${iconSvg('cloud', 13)} ${escapeText(t('tablebaseLoading', {}, lang))}</div>`;
    } else if (tablebase) {
      const verdictTxt =
        tablebase.category === 'win'
          ? t('tbWin', {}, lang)
          : tablebase.category === 'loss'
            ? t('tbLoss', {}, lang)
            : t('tbDraw', {}, lang);
      const dtzTxt = tablebase.dtz != null ? ` · DTZ ${Math.abs(tablebase.dtz)}` : '';
      const dtmTxt = tablebase.dtm != null ? ` · M${Math.ceil(Math.abs(tablebase.dtm) / 2)}` : '';
      tbWrap.innerHTML = `
        <div class="tb-head">
          <span class="sf-badge">${iconSvg('cloud', 13)} ${escapeText(t('syzygyTitle', {}, lang))}</span>
          <span class="tag ${tablebase.category === 'win' ? 'green' : tablebase.category === 'loss' ? 'burg' : 'gold'} tabular-nums">${escapeText(verdictTxt)}${escapeText(dtmTxt || dtzTxt)}</span>
        </div>
        <div class="explorer-chips">
          ${(tablebase.moves || [])
            .map((m) => {
              const cls = m.verdictForMover === 'win' ? 'tb-win' : m.verdictForMover === 'loss' ? 'tb-loss' : 'tb-draw';
              const tag = m.dtm != null ? `M${Math.ceil(Math.abs(m.dtm) / 2)}` : m.dtz != null ? `DTZ ${Math.abs(m.dtz)}` : m.verdictForMover;
              return `<button type="button" class="explorer-move-chip ${cls}" data-tb-san="${escapeText(m.san)}"><strong class="mono" dir="ltr">${escapeText(m.san)}</strong> <small class="mono" dir="ltr">${escapeText(tag)}</small></button>`;
            })
            .join('')}
        </div>
      `;
      tbWrap.querySelectorAll('[data-tb-san]').forEach((btn) => {
        btn.onclick = () => {
          if (onPlaySan) onPlaySan(btn.getAttribute('data-tb-san'));
        };
      });
    } else {
      tbWrap.innerHTML = `<div class="small">${iconSvg('cloud', 13)} ${escapeText(t('syzygyUnavailable', {}, lang))}</div>`;
    }
    box.appendChild(tbWrap);
  }

  return box;
}

/**
 * Interactive Visual Board Editor + FEN Lab panel (Lichess/Chess.com style).
 */
export function createBoardEditorPanel({
  fen,
  fenError = null,
  activeTool = 'move',
  turn = 'w',
  castling = { K: true, Q: true, k: true, q: true },
  presets = [],
  pieceSvgMap = {},
  onSelectTool,
  onChangeTurn,
  onToggleCastling,
  onResetStart,
  onClearKings,
  onLoadPreset,
  onApplyFen,
  onPlayFromHere,
  lang = 'en',
} = {}) {
  const box = document.createElement('section');
  box.className = 'card board-editor-card';

  const whitePieces = ['K', 'Q', 'R', 'B', 'N', 'P'];
  const blackPieces = ['k', 'q', 'r', 'b', 'n', 'p'];

  const renderPaletteRow = (pieces) =>
    pieces
      .map(
        (code) => `<button type="button" class="editor-tool-btn ${activeTool === code ? 'active' : ''}" data-ed-tool="${code}" title="${escapeText(code)}">
          <span class="ed-piece">${pieceSvgMap[code] || ''}</span>
        </button>`,
      )
      .join('');

  box.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:.4rem;flex-wrap:wrap">
      <strong style="font-size:.9rem">${iconSvg('edit', 14)} ${escapeText(t('boardEditorTitle', {}, lang))}</strong>
      <select id="presetSel" style="width:auto;padding:.18rem .4rem;font-size:.8rem" aria-label="${escapeText(t('loadStudyPreset', {}, lang))}">
        <option value="">${escapeText(t('loadStudyPreset', {}, lang))}</option>
        ${presets.map((p, idx) => `<option value="${idx}">${escapeText(localizeSandboxPreset(p, lang).label)}</option>`).join('')}
      </select>
    </div>

    <div class="board-editor-palette" dir="ltr">
      <button type="button" class="editor-tool-btn text-tool ${activeTool === 'move' ? 'active' : ''}" data-ed-tool="move" title="${escapeText(t('editorMoveTool', {}, lang))}">
        ${iconSvg('play', 13)} <span>${escapeText(t('editorMoveTool', {}, lang))}</span>
      </button>
      <button type="button" class="editor-tool-btn text-tool ${activeTool === 'erase' ? 'active' : ''}" data-ed-tool="erase" title="${escapeText(t('editorEraseTool', {}, lang))}">
        ${iconSvg('trash', 13)} <span>${escapeText(t('editorEraseTool', {}, lang))}</span>
      </button>
      <div class="editor-piece-strip">${renderPaletteRow(whitePieces)}</div>
      <div class="editor-piece-strip">${renderPaletteRow(blackPieces)}</div>
    </div>

    <div class="editor-meta-row">
      <div class="pill-switch" id="edTurnSwitch">
        <button type="button" data-ed-turn="w" class="${turn === 'w' ? 'active' : ''}">${escapeText(t('white', {}, lang))}</button>
        <button type="button" data-ed-turn="b" class="${turn === 'b' ? 'active' : ''}">${escapeText(t('black', {}, lang))}</button>
      </div>
      <div class="editor-castling" dir="ltr">
        ${['K', 'Q', 'k', 'q']
          .map(
            (flag) => `<label class="ed-castle-chk"><input type="checkbox" data-ed-castle="${flag}" ${castling[flag] ? 'checked' : ''} /> ${flag}</label>`,
          )
          .join('')}
      </div>
      <div style="display:flex;gap:.25rem;margin-inline-start:auto">
        <button type="button" class="btn-ghost-xs" id="edStartPos">${escapeText(t('startPosBtn', {}, lang))}</button>
        <button type="button" class="btn-ghost-xs" id="edClearKings">${escapeText(t('clearBoardBtn', {}, lang))}</button>
      </div>
    </div>

    <div class="fen-bar">
      <input id="fenIn" value="${escapeText(fen)}" aria-label="${escapeText(t('fenInputAria', {}, lang))}" />
      <button type="button" class="btn sm" id="loadFen">${escapeText(t('loadFen', {}, lang))}</button>
      <button type="button" class="btn gold sm" id="playFromFen">${iconSvg('play', 12)} ${escapeText(t('playFromHere', {}, lang))}</button>
    </div>
    ${fenError ? `<div class="small" style="color:var(--burgundy)">${escapeText(fenError)}</div>` : ''}
  `;

  box.querySelectorAll('[data-ed-tool]').forEach((btn) => {
    btn.onclick = () => onSelectTool && onSelectTool(btn.getAttribute('data-ed-tool'));
  });
  box.querySelectorAll('[data-ed-turn]').forEach((btn) => {
    btn.onclick = () => onChangeTurn && onChangeTurn(btn.getAttribute('data-ed-turn'));
  });
  box.querySelectorAll('[data-ed-castle]').forEach((chk) => {
    chk.onchange = () => onToggleCastling && onToggleCastling(chk.getAttribute('data-ed-castle'), chk.checked);
  });
  box.querySelector('#edStartPos').onclick = () => onResetStart && onResetStart();
  box.querySelector('#edClearKings').onclick = () => onClearKings && onClearKings();
  box.querySelector('#presetSel').onchange = (e) => {
    if (e.target.value !== '' && onLoadPreset) onLoadPreset(Number(e.target.value));
  };
  box.querySelector('#loadFen').onclick = () => {
    const val = box.querySelector('#fenIn').value.trim();
    if (onApplyFen) onApplyFen(val);
  };
  box.querySelector('#playFromFen').onclick = () => {
    const val = box.querySelector('#fenIn').value.trim();
    if (onPlayFromHere) onPlayFromHere(val);
  };

  return box;
}
