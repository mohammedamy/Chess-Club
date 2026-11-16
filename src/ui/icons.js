const ICON_PATHS = {
  hall: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9.5 20v-6h5v6"/>',
  coach: '<rect x="5" y="6" width="14" height="12" rx="2"/><path d="M9 10h6M9 14h4M12 2v4M12 18v4M2 12h3M19 12h3"/>',
  puzzles: '<path d="M14 4a2 2 0 1 1 2 2h2a2 2 0 0 1 2 2v3h-1.5a2 2 0 1 0 0 4H20v3a2 2 0 0 1-2 2h-3v-1.5a2 2 0 1 0-4 0V20H6a2 2 0 0 1-2-2v-3.5h1.5a2 2 0 1 0 0-4H4V8a2 2 0 0 1 2-2h3.5V4.5A2 2 0 0 1 14 4Z"/>',
  openings: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v17h5.5A2.5 2.5 0 0 1 20 22V5.5Z"/>',
  strategy: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 18 9 5 9-5"/>',
  endgames: '<path d="M5 17h14l1.5-8.5-4.5 3.5-4-6-4 6-4.5-3.5L5 17Z"/><path d="M5 20h14"/>',
  play: '<path d="M14.5 3.5 20.5 9.5 9.5 20.5H3.5v-6l11-11Z"/><path d="m12 6 6 6"/><path d="m6 14 4 4"/>',
  club: '<path d="M12 3 4 6.5v5.5c0 4.6 3.4 8.7 8 10 4.6-1.3 8-5.4 8-10V6.5L12 3Z"/><path d="M9 12l2 2 4-4"/>',
  spark: '<path d="m12 2 1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/>',
  hint: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.7.5 1.1 1.2 1.2 2.1h4.6c.1-.9.5-1.6 1.2-2.1A6 6 0 0 0 12 3Z"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15.3-6.4L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.3 6.4L3 16"/><path d="M3 21v-5h5"/>',
  flip: '<path d="m7 4-3 3 3 3"/><path d="M4 7h11a4 4 0 0 1 4 4v1"/><path d="m17 20 3-3-3-3"/><path d="M20 17H9a4 4 0 0 1-4-4v-1"/>',
  prev: '<path d="m15 18-6-6 6-6"/>',
  next: '<path d="m9 18 6-6-6-6"/>',
  first: '<path d="M7 6v12"/><path d="m17 18-6-6 6-6"/>',
  last: '<path d="M17 6v12"/><path d="m7 18 6-6-6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  alert: '<path d="M12 3 2.5 19.5h19L12 3Z"/><path d="M12 10v4"/><circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none"/>',
  trophy: '<path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a3 3 0 0 0 3 3"/><path d="M17 6h3v2a3 3 0 0 1-3 3"/><path d="M12 14v5"/><path d="M8 20h8"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chess: '<path d="M9 20h6"/><path d="M8 17h8l-1-4H9l-1 4Z"/><path d="M10 13V9l-2-1 1.5-3h5L16 8l-2 1v4"/>',
  duel: '<path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6-6"/><path d="m16 16 4 4"/><path d="m19 21 2-2"/><path d="M9.5 17.5 21 6V3h-3L6.5 14.5"/><path d="m11 19-6-6"/><path d="m8 16-4 4"/><path d="m5 21-2-2"/>',
  pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
  step: '<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>',
  expand: '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>',
  compress: '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/>',
  swap: '<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>',
  sidebar: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  paste: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M8 12h8M8 16h5"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h8M8 17h6"/>',
  scan: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/><path d="M8 11h2l1-2 1.5 4 1-2h1.5"/>',
};

export function iconSvg(name, size = 16, className = '') {
  const paths = ICON_PATHS[name] || ICON_PATHS.spark;
  const cls = className ? ` ${className}` : '';
  return `<svg class="ui-icon${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}
