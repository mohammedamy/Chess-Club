#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';
import { Chess } from 'chess.js';
import { gameRecordToPgn } from '../src/domain/games-db.js';
import { cleanPlayerName, splitPgnGames, stripMovetextComments } from './classic-games-worker.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PGN_ROOT = path.join(ROOT, 'data', 'classic-pgn');
const OUTPUT_JSON = path.join(ROOT, 'public', 'data', 'classic-games-db.json');

const PGN_MENTOR_BASE = 'https://www.pgnmentor.com';
const LICHESS_OPENINGS_BASE = 'https://raw.githubusercontent.com/lichess-org/chess-openings/master';
const STANDARD_RESULTS = new Set(['1-0', '0-1', '1/2-1/2']);

const WORLD_CHAMPIONSHIP_FILES = [
  'WorldChamp1886.pgn', 'WorldChamp1889.pgn', 'WorldChamp1890.pgn', 'WorldChamp1892.pgn',
  'WorldChamp1894.pgn', 'WorldChamp1896.pgn', 'WorldChamp1907.pgn', 'WorldChamp1908.pgn',
  'WorldChamp1909.pgn', 'WorldChamp1910a.pgn', 'WorldChamp1910b.pgn', 'WorldChamp1921.pgn',
  'WorldChamp1927.pgn', 'WorldChamp1929.pgn', 'WorldChamp1934.pgn', 'WorldChamp1935.pgn',
  'WorldChamp1937.pgn', 'WorldChamp1948.pgn', 'WorldChamp1951.pgn', 'WorldChamp1954.pgn',
  'WorldChamp1957.pgn', 'WorldChamp1958.pgn', 'WorldChamp1960.pgn', 'WorldChamp1961.pgn',
  'WorldChamp1963.pgn', 'WorldChamp1966.pgn', 'WorldChamp1969.pgn', 'WorldChamp1972.pgn',
  'WorldChamp1978.pgn', 'WorldChamp1981.pgn', 'WorldChamp1984.pgn', 'WorldChamp1985.pgn',
  'WorldChamp1986.pgn', 'WorldChamp1987.pgn', 'WorldChamp1990.pgn', 'WorldChamp2000.pgn',
  'WorldChamp2004.pgn', 'WorldChamp2006.pgn', 'WorldChamp2007.pgn', 'WorldChamp2008.pgn',
  'WorldChamp2010.pgn', 'WorldChamp2012.pgn', 'WorldChamp2013.pgn', 'WorldChamp2014.pgn',
  'WorldChamp2016.pgn', 'WorldChamp2018.pgn', 'WorldChamp2021.pgn', 'WorldChamp2023.pgn',
  'WorldChamp2024.pgn',
];

const FIDE_PCA_FILES = [
  { file: 'PCAChamp1993.pgn', filterKnockoutFinalists: null },
  { file: 'PCAChamp1995.pgn', filterKnockoutFinalists: null },
  { file: 'FideChamp1993.pgn', filterKnockoutFinalists: null },
  { file: 'FideChamp1996.pgn', filterKnockoutFinalists: null },
  { file: 'FideChamp1998.pgn', filterKnockoutFinalists: ['Karpov', 'Anand'] },
  { file: 'FideChamp1999.pgn', filterKnockoutFinalists: ['Khalifman', 'Akopian'] },
  { file: 'FideChamp2000.pgn', filterKnockoutFinalists: ['Anand', 'Shirov'] },
  { file: 'FideChamp2002.pgn', filterKnockoutFinalists: ['Ponomariov', 'Ivanchuk'] },
  { file: 'FideChamp2004.pgn', filterKnockoutFinalists: ['Kasimdzhanov', 'Adams'] },
  { file: 'FideChamp2005.pgn', filterKnockoutFinalists: null },
];

const CANDIDATES_FILES = [
  'Candidates1950.pgn', 'Candidates1953.pgn', 'Candidates1956.pgn', 'Candidates1959.pgn',
  'Candidates1962.pgn', 'Candidates1965.pgn', 'Candidates1968.pgn', 'Candidates1971.pgn',
  'Candidates1974.pgn', 'Candidates1977.pgn', 'Candidates1980.pgn', 'Candidates1983.pgn',
  'Candidates1985.pgn', 'Candidates1985r.pgn', 'Candidates1988.pgn', 'Candidates1990.pgn',
  'Candidates1994.pgn', 'Candidates2011.pgn', 'Candidates2013.pgn', 'Candidates2014.pgn',
  'Candidates2016.pgn', 'Candidates2018.pgn', 'Candidates2020.pgn', 'Candidates2022.pgn',
  'Candidates2024.pgn',
];

const INTERZONAL_FILES = [
  'Interzonal1948.pgn', 'Interzonal1952.pgn', 'Interzonal1955.pgn', 'Interzonal1958.pgn',
  'Interzonal1962.pgn', 'Interzonal1964.pgn', 'Interzonal1967.pgn', 'Interzonal1970.pgn',
  'Interzonal1973a.pgn', 'Interzonal1973b.pgn', 'Interzonal1976a.pgn', 'Interzonal1976b.pgn',
  'Interzonal1979a.pgn', 'Interzonal1979b.pgn',
];

const CLASSIC_TOURNAMENT_FILES = [
  'London1851.pgn', 'London1862.pgn', 'Baden1870.pgn', 'Vienna1873.pgn',
  'Vienna1882.pgn', 'London1883.pgn', 'NewYork1889.pgn', 'Hastings1895.pgn',
  'StPetersburg1895.pgn', 'Vienna1898.pgn', 'Carlsbad1907.pgn', 'StPetersburg1909.pgn',
  'StPetersburg1914.pgn', 'NewYork1924.pgn', 'Moscow1925.pgn', 'NewYork1927.pgn',
  'SanRemo1930.pgn', 'Bled1931.pgn', 'Zurich1934.pgn', 'Moscow1935.pgn',
  'Moscow1936.pgn', 'Nottingham1936.pgn', 'AVRO1938.pgn', 'Groningen1946.pgn',
  'Bled1961.pgn', 'SantaMonica1966.pgn', 'Montreal1979.pgn', 'Tilburg1979.pgn',
  'Tilburg1980.pgn', 'Tilburg1985.pgn', 'Linares1991.pgn', 'Linares1992.pgn',
  'Linares1993.pgn', 'Linares1994.pgn', 'Linares1995.pgn', 'Linares1997.pgn',
  'Linares1998.pgn', 'Linares1999.pgn',
];

const MODERN_ELITE_FILES = [
  // Wijk aan Zee / Tata Steel (2000–2024)
  'WijkaanZee2000.pgn', 'WijkaanZee2001.pgn', 'WijkaanZee2002.pgn', 'WijkaanZee2003.pgn',
  'WijkaanZee2004.pgn', 'WijkaanZee2005.pgn', 'WijkaanZee2006.pgn', 'WijkaanZee2007.pgn',
  'WijkaanZee2008.pgn', 'WijkaanZee2009.pgn', 'WijkaanZee2010.pgn', 'WijkaanZee2011.pgn',
  'WijkaanZee2012.pgn', 'WijkaanZee2013.pgn', 'WijkaanZee2014.pgn', 'WijkaanZee2015.pgn',
  'WijkaanZee2016.pgn', 'WijkaanZee2017.pgn', 'WijkaanZee2018.pgn', 'WijkaanZee2019.pgn',
  'WijkaanZee2020.pgn', 'WijkaanZee2021.pgn', 'WijkaanZee2022.pgn', 'WijkaanZee2023.pgn',
  'WijkaanZee2024.pgn',
  // Linares (2000–2010)
  'Linares2000.pgn', 'Linares2001.pgn', 'Linares2002.pgn', 'Linares2003.pgn',
  'Linares2004.pgn', 'Linares2005.pgn', 'Linares2006.pgn', 'Linares2007.pgn',
  'Linares2008.pgn', 'Linares2009.pgn', 'Linares2010.pgn',
  // Norway Chess / Stavanger (2013–2024)
  'Stavanger2013.pgn', 'Stavanger2014.pgn', 'Stavanger2015.pgn', 'Stavanger2016.pgn',
  'Stavanger2017.pgn', 'Stavanger2018.pgn', 'Stavanger2019.pgn', 'Stavanger2020.pgn',
  'Stavanger2021.pgn', 'Stavanger2022.pgn', 'Stavanger2023.pgn', 'Stavanger2024.pgn',
  // Sinquefield Cup / Saint Louis (2014–2023)
  'SaintLouis2014.pgn', 'SaintLouis2015.pgn', 'SaintLouis2016.pgn', 'SaintLouis2017.pgn',
  'SaintLouis2018.pgn', 'SaintLouis2019.pgn', 'SaintLouis2021.pgn', 'SaintLouis2022-Sinq.pgn',
  'SaintLouis2023.pgn',
  // London Chess Classic (2009–2018)
  'London2009.pgn', 'London2012.pgn', 'London2015.pgn', 'London2016.pgn', 'London2018.pgn',
  // Bilbao Masters (2008–2016)
  'Bilbao2008.pgn', 'Bilbao2009.pgn', 'Bilbao2010.pgn', 'Bilbao2011.pgn',
  'Bilbao2012.pgn', 'Bilbao2016.pgn',
];

const ROMANTIC_MASTER_ZIPS = [
  { zip: 'Morphy.zip', pgn: 'MorphyClassics.pgn', player: 'Morphy', hint: 'Morphy1858', max: 80 },
  { zip: 'Anderssen.zip', pgn: 'AnderssenClassics.pgn', player: 'Anderssen', hint: 'Anderssen1851', max: 80 },
  { zip: 'Chigorin.zip', pgn: 'ChigorinClassics.pgn', player: 'Chigorin', hint: 'Chigorin1892', max: 80 },
  { zip: 'Rubinstein.zip', pgn: 'RubinsteinClassics.pgn', player: 'Rubinstein', hint: 'Rubinstein1912', max: 80 },
  { zip: 'Nimzowitsch.zip', pgn: 'NimzowitschClassics.pgn', player: 'Nimzowitsch', hint: 'Nimzowitsch1926', max: 80 },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function fetchBuffer(url, retries = 3) {
  let lastErr = null;
  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'EdugatesChessClub-DatabaseBuilder/2.0 (+https://github.com/mohammedamy/Chess-Club)',
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, 400 * attempt));
    }
  }
  throw lastErr;
}

async function fetchText(url) {
  const buf = await fetchBuffer(url);
  return buf.toString('utf8');
}

function posKey(fen) {
  return String(fen || '').trim().split(/\s+/).slice(0, 3).join(' ');
}

async function buildEcoMaps() {
  const fenToEco = new Map();
  const codeToName = new Map();
  const volumes = ['a', 'b', 'c', 'd', 'e'];

  const texts = await Promise.all(
    volumes.map((vol) => fetchText(`${LICHESS_OPENINGS_BASE}/${vol}.tsv`)),
  );

  for (const tsv of texts) {
    const lines = tsv.split(/\r?\n/);
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].trim();
      if (!line) continue;
      const [eco, name, pgnMoves] = line.split('\t');
      if (!eco || !name || !pgnMoves) continue;
      if (!codeToName.has(eco)) codeToName.set(eco, name);

      const game = new Chess();
      const tokens = stripMovetextComments(pgnMoves);
      for (const tok of tokens) {
        if (['1-0', '0-1', '1/2-1/2', '*'].includes(tok)) continue;
        if (!game.move(tok, { sloppy: true })) break;
      }
      const key = posKey(game.fen());
      if (!fenToEco.has(key)) {
        fenToEco.set(key, { eco, name });
      }
    }
  }

  return { fenToEco, codeToName };
}

async function downloadTextOrLoadCached(url, localPath) {
  ensureDir(path.dirname(localPath));
  if (fs.existsSync(localPath) && fs.statSync(localPath).size > 200) {
    return fs.readFileSync(localPath, 'utf8');
  }
  const text = await fetchText(url);
  fs.writeFileSync(localPath, text, 'utf8');
  return text;
}

async function loadRomanticMasterPgn(zipName, targetPgnPath, lastNameFilter, maxGames = 80) {
  ensureDir(path.dirname(targetPgnPath));
  if (fs.existsSync(targetPgnPath) && fs.statSync(targetPgnPath).size > 500) {
    return fs.readFileSync(targetPgnPath, 'utf8');
  }

  const zipBuf = await fetchBuffer(`${PGN_MENTOR_BASE}/players/${zipName}`);
  const tmpZip = path.join(os.tmpdir(), `chessclub-${zipName}`);
  fs.writeFileSync(tmpZip, zipBuf);
  let rawPgn = '';
  try {
    rawPgn = execFileSync('unzip', ['-p', tmpZip], { maxBuffer: 64 * 1024 * 1024 }).toString('utf8');
  } finally {
    if (fs.existsSync(tmpZip)) fs.unlinkSync(tmpZip);
  }

  const chunks = splitPgnGames(rawPgn);
  const selectedTextBlocks = [];
  for (const ch of chunks) {
    const h = ch.headers;
    if (!STANDARD_RESULTS.has(h.Result)) continue;
    if (h.FEN) continue;
    const tokens = stripMovetextComments(ch.moveText).filter((t) => !STANDARD_RESULTS.has(t) && t !== '*');
    if (tokens.length < 24 || tokens.length > 140) continue;
    const w = cleanPlayerName(h.White);
    const b = cleanPlayerName(h.Black);
    if (!w.includes(lastNameFilter) && !b.includes(lastNameFilter)) continue;
    if (/NN|Amateur/i.test(w) || /NN|Amateur/i.test(b)) continue;

    const headBlock = Object.entries(h)
      .map(([k, v]) => `[${k} "${String(v).replace(/"/g, "'")}"]`)
      .join('\n');
    selectedTextBlocks.push(`${headBlock}\n\n${ch.moveText}`);
    if (selectedTextBlocks.length >= maxGames) break;
  }

  const combined = selectedTextBlocks.join('\n\n');
  fs.writeFileSync(targetPgnPath, combined, 'utf8');
  return combined;
}

async function mapWithConcurrency(items, concurrency, fn) {
  const results = new Array(items.length);
  let cursor = 0;

  async function runWorker() {
    while (true) {
      const idx = cursor;
      cursor += 1;
      if (idx >= items.length) break;
      results[idx] = await fn(items[idx], idx);
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => runWorker());
  await Promise.all(workers);
  return results;
}

function runWorkerBatch({ fenToEcoEntries, codeToNameEntries, jobs }) {
  return new Promise((resolve, reject) => {
    const workerPath = path.join(__dirname, 'classic-games-worker.mjs');
    const worker = new Worker(workerPath, {
      workerData: { fenToEcoEntries, codeToNameEntries, jobs },
    });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker exited with code ${code}`));
    });
  });
}

function encodeGamesV2(games) {
  const dict = { c: [], e: [], s: [], p: [], eco: [], op: [], eg: [] };
  const maps = {
    c: new Map(),
    e: new Map(),
    s: new Map(),
    p: new Map(),
    eco: new Map(),
    op: new Map(),
    eg: new Map(),
  };

  const intern = (bucket, val) => {
    const str = String(val ?? '');
    const m = maps[bucket];
    let idx = m.get(str);
    if (idx === undefined) {
      idx = dict[bucket].length;
      dict[bucket].push(str);
      m.set(str, idx);
    }
    return idx;
  };

  const compactGames = games.map((g, idx) => {
    const row = {
      id: idx + 1,
      c: intern('c', g.c),
      e: intern('e', g.e),
      d: g.d,
      y: g.y,
      w: intern('p', g.w),
      b: intern('p', g.b),
      res: g.res,
      eco: intern('eco', g.eco),
      op: intern('op', g.op),
      eg: intern('eg', g.eg),
      p: g.p,
      m: g.m,
    };
    if (g.s) row.s = intern('s', g.s);
    if (g.r) row.r = g.r;
    if (g.we) row.we = g.we;
    if (g.be) row.be = g.be;
    if (g.egp != null) row.egp = g.egp;
    if (g.tb) row.tb = 1;
    if (g.tbp != null) row.tbp = g.tbp;
    return row;
  });

  return { dict, compactGames };
}

async function main() {
  const t0 = Date.now();
  console.log('Building Lichess CC0 ECO Opening Lookup Tables...');
  const ecoMaps = await buildEcoMaps();
  console.log(`Loaded ${ecoMaps.fenToEco.size} unique ECO opening positions.`);

  const eventSpecs = [
    ...WORLD_CHAMPIONSHIP_FILES.map((file) => ({
      collection: 'world-championship',
      dir: 'world-championships',
      file,
      filterKnockoutFinalists: null,
    })),
    ...FIDE_PCA_FILES.map((item) => ({
      collection: 'fide-pca-championship',
      dir: 'fide-pca-championships',
      file: item.file,
      filterKnockoutFinalists: item.filterKnockoutFinalists,
    })),
    ...CANDIDATES_FILES.map((file) => ({
      collection: 'candidates',
      dir: 'candidates',
      file,
      filterKnockoutFinalists: null,
    })),
    ...INTERZONAL_FILES.map((file) => ({
      collection: 'interzonal',
      dir: 'interzonals',
      file,
      filterKnockoutFinalists: null,
    })),
    ...CLASSIC_TOURNAMENT_FILES.map((file) => ({
      collection: 'classic-tournament',
      dir: 'classic-tournaments',
      file,
      filterKnockoutFinalists: null,
    })),
    ...MODERN_ELITE_FILES.map((file) => ({
      collection: 'modern-elite',
      dir: 'modern-elite',
      file,
      filterKnockoutFinalists: null,
    })),
  ];

  console.log(`Fetching / loading ${eventSpecs.length} PGN Mentor event files (concurrency 6)...`);
  const eventJobs = await mapWithConcurrency(eventSpecs, 6, async (spec) => {
    const localPath = path.join(PGN_ROOT, spec.dir, spec.file);
    const pgnText = await downloadTextOrLoadCached(`${PGN_MENTOR_BASE}/events/${spec.file}`, localPath);
    return {
      pgnText,
      collection: spec.collection,
      filenameHint: spec.file,
      filterKnockoutFinalists: spec.filterKnockoutFinalists,
    };
  });

  console.log(`Extracting ${ROMANTIC_MASTER_ZIPS.length} Romantic & Classical Master archives...`);
  const masterJobs = await mapWithConcurrency(ROMANTIC_MASTER_ZIPS, 3, async (item) => {
    const pgnText = await loadRomanticMasterPgn(
      item.zip,
      path.join(PGN_ROOT, 'romantic-masters', item.pgn),
      item.player,
      item.max,
    );
    return {
      pgnText,
      collection: 'romantic-masters',
      filenameHint: item.hint,
      filterKnockoutFinalists: null,
    };
  });

  const allJobs = [...eventJobs, ...masterJobs];
  const workerCount = Math.min(6, Math.max(2, os.cpus().length - 1));
  const buckets = Array.from({ length: workerCount }, () => []);
  allJobs.forEach((job, idx) => {
    buckets[idx % workerCount].push(job);
  });

  console.log(`Parsing, validating, and classifying ${allJobs.length} archives across ${workerCount} workers...`);
  const fenToEcoEntries = [...ecoMaps.fenToEco.entries()];
  const codeToNameEntries = [...ecoMaps.codeToName.entries()];

  const workerResults = await Promise.all(
    buckets.filter((b) => b.length > 0).map((jobs) =>
      runWorkerBatch({ fenToEcoEntries, codeToNameEntries, jobs }),
    ),
  );

  const rawGames = [];
  let skippedInvalid = 0;
  for (const res of workerResults) {
    skippedInvalid += res.skippedInvalid;
    for (const g of res.games) rawGames.push(g);
  }

  // Deduplicate cleanly by year + white + black + result + first 18 plies
  const seenSignatures = new Set();
  const dedupedGames = [];
  for (const rec of rawGames) {
    const sig = `${rec.y || '?'}|${rec.w.toLowerCase()}|${rec.b.toLowerCase()}|${rec.res}|${rec.m.split(' ').slice(0, 18).join(' ')}`;
    if (seenSignatures.has(sig)) continue;
    seenSignatures.add(sig);
    dedupedGames.push(rec);
  }

  dedupedGames.sort((a, b) => (b.y || 0) - (a.y || 0) || a.e.localeCompare(b.e));

  const collectionsSummary = {};
  const endgamesSummary = {};
  let minYear = 9999;
  let maxYear = 0;
  let whiteWins = 0;
  let blackWins = 0;
  let draws = 0;

  for (const g of dedupedGames) {
    collectionsSummary[g.c] = (collectionsSummary[g.c] || 0) + 1;
    endgamesSummary[g.eg] = (endgamesSummary[g.eg] || 0) + 1;
    if (g.y) {
      if (g.y < minYear) minYear = g.y;
      if (g.y > maxYear) maxYear = g.y;
    }
    if (g.res === '1-0') whiteWins += 1;
    else if (g.res === '0-1') blackWins += 1;
    else if (g.res === '1/2-1/2') draws += 1;
  }

  // Write consolidated WorldChampionshipsComplete.pgn for single-file archive download
  const wcGames = dedupedGames
    .filter((g) => g.c === 'world-championship' || g.c === 'fide-pca-championship')
    .map((g) =>
      gameRecordToPgn({
        event: g.e,
        site: g.s,
        date: g.d,
        year: g.y,
        round: g.r,
        white: g.w,
        black: g.b,
        whiteElo: g.we,
        blackElo: g.be,
        result: g.res,
        eco: g.eco,
        opening: g.op,
        endgame: g.eg,
        moves: g.m.split(' '),
      }),
    )
    .join('\n\n');
  fs.writeFileSync(path.join(PGN_ROOT, 'WorldChampionshipsComplete.pgn'), wcGames, 'utf8');

  const { dict, compactGames } = encodeGamesV2(dedupedGames);

  const payload = {
    version: 2,
    generatedAt: new Date().toISOString(),
    sources: [
      'PGN Mentor World Chess Championships (1886–2024)',
      'PGN Mentor Candidates (1950–2024) & Interzonals (1948–1979)',
      'PGN Mentor Classic & Modern Super-Tournaments (1851–2024)',
      'Lichess CC0 ECO Opening Tables',
    ],
    stats: {
      totalGames: compactGames.length,
      minYear,
      maxYear,
      whiteWins,
      blackWins,
      draws,
      collections: collectionsSummary,
      endgames: endgamesSummary,
    },
    dict,
    games: compactGames,
  };

  ensureDir(path.dirname(OUTPUT_JSON));
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(payload), 'utf8');
  const sizeKb = Math.round(fs.statSync(OUTPUT_JSON).size / 1024);
  const elapsedSec = ((Date.now() - t0) / 1000).toFixed(1);

  console.log('\n=== Classic Games Database v2 Build Complete ===');
  console.log(`Elapsed: ${elapsedSec}s`);
  console.log(`Total games: ${compactGames.length} (skipped invalid: ${skippedInvalid}, deduped from: ${rawGames.length})`);
  console.log(`Years: ${minYear}–${maxYear}`);
  console.log(`Results: White 1-0 (${whiteWins}), Black 0-1 (${blackWins}), Draw 1/2-1/2 (${draws})`);
  console.log('Collections:', collectionsSummary);
  console.log('Endgames:', endgamesSummary);
  console.log(`Dictionaries: events=${dict.e.length}, players=${dict.p.length}, openings=${dict.op.length}`);
  console.log(`Output JSON: ${OUTPUT_JSON} (${sizeKb} KB)`);
}

main().catch((err) => {
  console.error('Database build failed:', err);
  process.exit(1);
});
