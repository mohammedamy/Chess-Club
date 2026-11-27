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
  'WorldChamp2023TB.pgn', 'WorldChamp2024.pgn', 'WorldChamp2026.pgn',
];

const WCH_EVENT_OVERRIDES = {
  'WorldChamp1886.pgn': 'World Championship 1886 (Steinitz–Zukertort)',
  'WorldChamp1889.pgn': 'World Championship 1889 (Steinitz–Chigorin I)',
  'WorldChamp1890.pgn': 'World Championship 1890–91 (Steinitz–Gunsberg)',
  'WorldChamp1892.pgn': 'World Championship 1892 (Steinitz–Chigorin II)',
  'WorldChamp1894.pgn': 'World Championship 1894 (Lasker–Steinitz I)',
  'WorldChamp1896.pgn': 'World Championship 1896–97 (Lasker–Steinitz II)',
  'WorldChamp1907.pgn': 'World Championship 1907 (Lasker–Marshall)',
  'WorldChamp1908.pgn': 'World Championship 1908 (Lasker–Tarrasch)',
  'WorldChamp1909.pgn': 'World Championship 1909 (Lasker–Janowski Paris)',
  'WorldChamp1910a.pgn': 'World Championship 1910 (Lasker–Schlechter)',
  'WorldChamp1910b.pgn': 'World Championship 1910 (Lasker–Janowski Berlin)',
  'WorldChamp1921.pgn': 'World Championship 1921 (Capablanca–Lasker)',
  'WorldChamp1927.pgn': 'World Championship 1927 (Alekhine–Capablanca)',
  'WorldChamp1929.pgn': 'World Championship 1929 (Alekhine–Bogoljubow I)',
  'WorldChamp1934.pgn': 'World Championship 1934 (Alekhine–Bogoljubow II)',
  'WorldChamp1935.pgn': 'World Championship 1935 (Euwe–Alekhine)',
  'WorldChamp1937.pgn': 'World Championship 1937 (Alekhine–Euwe Rematch)',
  'WorldChamp1948.pgn': 'World Championship 1948 (Hague–Moscow Tournament)',
  'WorldChamp1951.pgn': 'World Championship 1951 (Botvinnik–Bronstein)',
  'WorldChamp1954.pgn': 'World Championship 1954 (Botvinnik–Smyslov I)',
  'WorldChamp1957.pgn': 'World Championship 1957 (Smyslov–Botvinnik II)',
  'WorldChamp1958.pgn': 'World Championship 1958 (Botvinnik–Smyslov III)',
  'WorldChamp1960.pgn': 'World Championship 1960 (Tal–Botvinnik I)',
  'WorldChamp1961.pgn': 'World Championship 1961 (Botvinnik–Tal II)',
  'WorldChamp1963.pgn': 'World Championship 1963 (Petrosian–Botvinnik)',
  'WorldChamp1966.pgn': 'World Championship 1966 (Petrosian–Spassky I)',
  'WorldChamp1969.pgn': 'World Championship 1969 (Spassky–Petrosian II)',
  'WorldChamp1972.pgn': 'World Championship 1972 (Fischer–Spassky)',
  'WorldChamp1978.pgn': 'World Championship 1978 (Karpov–Korchnoi I)',
  'WorldChamp1981.pgn': 'World Championship 1981 (Karpov–Korchnoi II)',
  'WorldChamp1984.pgn': 'World Championship 1984–85 (Karpov–Kasparov I)',
  'WorldChamp1985.pgn': 'World Championship 1985 (Kasparov–Karpov II)',
  'WorldChamp1986.pgn': 'World Championship 1986 (Kasparov–Karpov III)',
  'WorldChamp1987.pgn': 'World Championship 1987 (Kasparov–Karpov IV)',
  'WorldChamp1990.pgn': 'World Championship 1990 (Kasparov–Karpov V)',
  'WorldChamp2000.pgn': 'World Championship 2000 (Kramnik–Kasparov)',
  'WorldChamp2004.pgn': 'World Championship 2004 (Kramnik–Leko)',
  'WorldChamp2006.pgn': 'World Championship 2006 (Kramnik–Topalov)',
  'WorldChamp2007.pgn': 'World Championship 2007 (Anand / Mexico City)',
  'WorldChamp2008.pgn': 'World Championship 2008 (Anand–Kramnik)',
  'WorldChamp2010.pgn': 'World Championship 2010 (Anand–Topalov)',
  'WorldChamp2012.pgn': 'World Championship 2012 (Anand–Gelfand)',
  'WorldChamp2013.pgn': 'World Championship 2013 (Carlsen–Anand I)',
  'WorldChamp2014.pgn': 'World Championship 2014 (Carlsen–Anand II)',
  'WorldChamp2016.pgn': 'World Championship 2016 (Carlsen–Karjakin)',
  'WorldChamp2018.pgn': 'World Championship 2018 (Carlsen–Caruana)',
  'WorldChamp2021.pgn': 'World Championship 2021 (Carlsen–Nepomniachtchi)',
  'WorldChamp2023.pgn': 'World Championship 2023 (Ding Liren–Nepomniachtchi)',
  'WorldChamp2023TB.pgn': 'World Championship 2023 — Rapid Tiebreak (Ding Liren–Nepomniachtchi)',
  'WorldChamp2024.pgn': 'World Championship 2024 (Gukesh–Ding Liren)',
  'WorldChamp2026.pgn': 'World Championship 2026 (Gukesh–Sindarov)',
  'PCAChamp1993.pgn': 'PCA World Championship 1993 (Kasparov–Short)',
  'PCAChamp1995.pgn': 'PCA World Championship 1995 (Kasparov–Anand)',
  'FideChamp1993.pgn': 'FIDE World Championship 1993 (Karpov–Timman)',
  'FideChamp1996.pgn': 'FIDE World Championship 1996 (Karpov–Kamsky)',
  'FideChamp1998.pgn': 'FIDE World Championship 1998 (Karpov–Anand)',
  'FideChamp1999.pgn': 'FIDE World Championship 1999 (Khalifman / Las Vegas)',
  'FideChamp2000.pgn': 'FIDE World Championship 2000 (Anand / New Delhi–Tehran)',
  'FideChamp2002.pgn': 'FIDE World Championship 2002 (Ponomariov / Moscow)',
  'FideChamp2004.pgn': 'FIDE World Championship 2004 (Kasimdzhanov / Tripoli)',
  'FideChamp2005.pgn': 'FIDE World Championship 2005 (Topalov / San Luis)',
};

const FIDE_PCA_FILES = [
  { file: 'PCAChamp1993.pgn', filterKnockoutFinalists: null },
  { file: 'PCAChamp1995.pgn', filterKnockoutFinalists: null },
  { file: 'FideChamp1993.pgn', filterKnockoutFinalists: null },
  { file: 'FideChamp1996.pgn', filterKnockoutFinalists: null },
  { file: 'FideChamp1998.pgn', filterKnockoutFinalists: null },
  { file: 'FideChamp1999.pgn', filterKnockoutFinalists: null },
  { file: 'FideChamp2000.pgn', filterKnockoutFinalists: null },
  { file: 'FideChamp2002.pgn', filterKnockoutFinalists: null },
  { file: 'FideChamp2004.pgn', filterKnockoutFinalists: null },
  { file: 'FideChamp2005.pgn', filterKnockoutFinalists: null },
];

const CANDIDATES_FILES = [
  'Candidates1950.pgn', 'Candidates1953.pgn', 'Candidates1956.pgn', 'Candidates1959.pgn',
  'Candidates1962.pgn', 'Candidates1965.pgn', 'Candidates1968.pgn', 'Candidates1971.pgn',
  'Candidates1974.pgn', 'Candidates1977.pgn', 'Candidates1980.pgn', 'Candidates1983.pgn',
  'Candidates1985.pgn', 'Candidates1985r.pgn', 'Candidates1988.pgn', 'Candidates1990.pgn',
  'PCAQual1993.pgn', 'PCACand1994.pgn', 'Candidates1994.pgn',
  'WorldCup2005.pgn', 'WorldCup2007.pgn', 'WorldCup2009.pgn',
  'Candidates2011.pgn', 'Candidates2013.pgn', 'Candidates2014.pgn', 'Candidates2016.pgn',
  'Candidates2018.pgn', 'Candidates2020.pgn', 'Candidates2022.pgn', 'WorldCup2023.pgn', 'Candidates2024.pgn',
];

const INTERZONAL_FILES = [
  'Interzonal1948.pgn', 'Interzonal1952.pgn', 'Interzonal1955.pgn', 'Interzonal1958.pgn',
  'Interzonal1962.pgn', 'Interzonal1964.pgn', 'Interzonal1967.pgn', 'Interzonal1970.pgn',
  'Interzonal1973a.pgn', 'Interzonal1973b.pgn', 'Interzonal1976a.pgn', 'Interzonal1976b.pgn',
  'Interzonal1979a.pgn', 'Interzonal1979b.pgn',
  'Interzonal1982a.pgn', 'Interzonal1982b.pgn', 'Interzonal1982c.pgn',
  'Interzonal1985a.pgn', 'Interzonal1985b.pgn', 'Interzonal1985c.pgn',
  'Interzonal1987a.pgn', 'Interzonal1987b.pgn', 'Interzonal1987c.pgn',
  'Interzonal1990.pgn', 'Interzonal1993.pgn',
];

const CLASSIC_TOURNAMENT_FILES = [
  'London1851.pgn', 'London1862.pgn', 'Baden1870.pgn', 'Vienna1873.pgn',
  'Vienna1882.pgn', 'London1883.pgn', 'NewYork1889.pgn', 'Hastings1895.pgn',
  'StPetersburg1895.pgn', 'Vienna1898.pgn', 'Carlsbad1907.pgn', 'StPetersburg1909.pgn',
  'StPetersburg1914.pgn', 'NewYork1924.pgn', 'Moscow1925.pgn', 'NewYork1927.pgn',
  'SanRemo1930.pgn', 'Bled1931.pgn', 'Zurich1934.pgn', 'Moscow1935.pgn',
  'Moscow1936.pgn', 'Nottingham1936.pgn', 'AVRO1938.pgn', 'Groningen1946.pgn',
  'Moscow1956.pgn', 'Moscow1959.pgn', 'BuenosAires1960.pgn', 'Bled1961.pgn',
  'Havana1962.pgn', 'Havana1963.pgn', 'Havana1965.pgn',
  'SantaMonica1966.pgn', 'Moscow1966.pgn', 'Palma1966.pgn', 'Moscow1967.pgn', 'Palma1967.pgn',
  'Palma1968.pgn', 'WijkaanZee1968.pgn', 'Palma1969.pgn', 'WijkaanZee1969.pgn',
  'BuenosAires1970.pgn', 'Palma1970.pgn', 'WijkaanZee1970.pgn',
  'Moscow1971.pgn', 'Palma1971.pgn', 'WijkaanZee1971.pgn',
  'Palma1972.pgn', 'WijkaanZee1972.pgn', 'SovietChamp1973.pgn', 'WijkaanZee1973.pgn',
  'SovietChamp1974.pgn', 'WijkaanZee1974.pgn', 'Moscow1975.pgn', 'SovietChamp1975.pgn', 'WijkaanZee1975.pgn',
  'SovietChamp1976.pgn', 'WijkaanZee1976.pgn', 'Tilburg1977.pgn', 'WijkaanZee1977.pgn',
  'Bugojno1978.pgn', 'SovietChamp1978.pgn', 'Tilburg1978.pgn', 'WijkaanZee1978.pgn',
  'Bled1979.pgn', 'Montreal1979.pgn', 'Tilburg1979.pgn', 'WijkaanZee1979.pgn',
  'Baden1980.pgn', 'BuenosAires1980.pgn', 'Bugojno1980.pgn', 'London1980.pgn', 'Tilburg1980.pgn', 'WijkaanZee1980.pgn',
  'Linares1981.pgn', 'Moscow1981.pgn', 'Tilburg1981.pgn', 'WijkaanZee1981.pgn',
  'Bugojno1982.pgn', 'Tilburg1982.pgn', 'WijkaanZee1982.pgn',
  'Linares1983.pgn', 'SovietChamp1983.pgn', 'Tilburg1983.pgn', 'WijkaanZee1983.pgn',
  'Bugojno1984.pgn', 'Tilburg1984.pgn', 'WijkaanZee1984.pgn',
  'Linares1985.pgn', 'Moscow1985.pgn', 'ReggioEmilia1985.pgn', 'Tilburg1985.pgn', 'WijkaanZee1985.pgn',
  'Bugojno1986.pgn', 'ReggioEmilia1986.pgn', 'Tilburg1986.pgn', 'WijkaanZee1986.pgn',
  'ReggioEmilia1987.pgn', 'Reykjavik1987.pgn', 'Tilburg1987.pgn', 'WijkaanZee1987.pgn',
  'Linares1988.pgn', 'Reykjavik1988.pgn', 'SovietChamp1988.pgn', 'WijkaanZee1988.pgn',
  'Linares1989.pgn', 'ReggioEmilia1989.pgn', 'Tilburg1989.pgn', 'WijkaanZee1989.pgn',
  'Linares1990.pgn', 'SovietChamp1990.pgn', 'Tilburg1990.pgn', 'WijkaanZee1990.pgn',
  'Linares1991.pgn', 'ReggioEmilia1991.pgn', 'Reykjavik1991.pgn', 'SovietChamp1991.pgn', 'Tilburg1991.pgn', 'WijkaanZee1991.pgn',
  'Linares1992.pgn', 'Moscow1992.pgn', 'ReggioEmilia1992.pgn', 'Tilburg1992.pgn', 'WijkaanZee1992.pgn',
  'Linares1993.pgn', 'Tilburg1993.pgn', 'WijkaanZee1993.pgn',
  'BuenosAires1994.pgn', 'Linares1994.pgn', 'Tilburg1994.pgn', 'WijkaanZee1994.pgn',
  'Linares1995.pgn', 'WijkaanZee1995.pgn', 'Tilburg1996.pgn', 'WijkaanZee1996.pgn',
  'Linares1997.pgn', 'Tilburg1997.pgn', 'WijkaanZee1997.pgn',
  'Linares1998.pgn', 'Tilburg1998.pgn', 'WijkaanZee1998.pgn',
  'Linares1999.pgn', 'WijkaanZee1999.pgn',
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
  // Dortmund Sparkassen (2000–2019)
  'Dortmund2000.pgn', 'Dortmund2001.pgn', 'Dortmund2002.pgn', 'Dortmund2003.pgn',
  'Dortmund2004.pgn', 'Dortmund2005.pgn', 'Dortmund2006.pgn', 'Dortmund2007.pgn',
  'Dortmund2008.pgn', 'Dortmund2009.pgn', 'Dortmund2010.pgn', 'Dortmund2011.pgn',
  'Dortmund2012.pgn', 'Dortmund2014.pgn', 'Dortmund2015.pgn', 'Dortmund2019.pgn',
  // Tal Memorial / Moscow (2006–2020)
  'Moscow2006.pgn', 'Moscow2007.pgn', 'Moscow2008.pgn', 'Moscow2009.pgn',
  'Moscow2010.pgn', 'Moscow2011.pgn', 'Moscow2012.pgn', 'Moscow2013.pgn',
  'Moscow2016.pgn', 'Moscow2017.pgn', 'Moscow2019.pgn', 'Moscow2020.pgn',
  // Biel, Nanjing, Poikovsky, Zurich, Shamkir, Bucharest, Chennai
  'Biel2006.pgn', 'Biel2007.pgn', 'Biel2008.pgn', 'Biel2009.pgn', 'Biel2011.pgn', 'Biel2012.pgn', 'Biel2014.pgn', 'Biel2018.pgn',
  'Nanjing2008.pgn', 'Nanjing2009.pgn', 'Nanjing2010.pgn',
  'Bazna2009.pgn', 'Bazna2010.pgn', 'ReggioEmilia2012.pgn',
  'Zurich2014.pgn', 'Zurich2015.pgn',
  'Shamkir2014.pgn', 'Shamkir2015.pgn', 'Shamkir2016.pgn', 'Shamkir2017.pgn', 'Shamkir2018.pgn', 'Shamkir2019.pgn',
  'Bucharest2021.pgn', 'Bucharest2022.pgn', 'Bucharest2023.pgn', 'Chennai2024.pgn',
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
  { zip: 'Morphy.zip', pgn: 'MorphyClassics.pgn', player: 'Morphy', hint: 'Morphy1858', max: 140 },
  { zip: 'Anderssen.zip', pgn: 'AnderssenClassics.pgn', player: 'Anderssen', hint: 'Anderssen1851', max: 140 },
  { zip: 'Chigorin.zip', pgn: 'ChigorinClassics.pgn', player: 'Chigorin', hint: 'Chigorin1892', max: 140 },
  { zip: 'Rubinstein.zip', pgn: 'RubinsteinClassics.pgn', player: 'Rubinstein', hint: 'Rubinstein1912', max: 140 },
  { zip: 'Nimzowitsch.zip', pgn: 'NimzowitschClassics.pgn', player: 'Nimzowitsch', hint: 'Nimzowitsch1926', max: 140 },
  { zip: 'Tarrasch.zip', pgn: 'TarraschClassics.pgn', player: 'Tarrasch', hint: 'Tarrasch1898', max: 140 },
  { zip: 'Marshall.zip', pgn: 'MarshallClassics.pgn', player: 'Marshall', hint: 'Marshall1904', max: 120 },
  { zip: 'Capablanca.zip', pgn: 'CapablancaClassics.pgn', player: 'Capablanca', hint: 'Capablanca1921', max: 140 },
  { zip: 'Alekhine.zip', pgn: 'AlekhineClassics.pgn', player: 'Alekhine', hint: 'Alekhine1930', max: 140 },
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
      eventOverride: WCH_EVENT_OVERRIDES[file] || null,
      filterKnockoutFinalists: null,
    })),
    ...FIDE_PCA_FILES.map((item) => ({
      collection: 'fide-pca-championship',
      dir: 'fide-pca-championships',
      file: item.file,
      eventOverride: WCH_EVENT_OVERRIDES[item.file] || null,
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
      eventOverride: spec.eventOverride || null,
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

  // Deduplicate strictly on full game move sequence (and preserve all World Championship match rounds)
  const seenSignatures = new Set();
  const dedupedGames = [];
  for (const rec of rawGames) {
    const isWch = rec.c === 'world-championship' || rec.c === 'fide-pca-championship';
    const sig = isWch
      ? `${rec._fn || ''}|${rec.y || '?'}|${rec.r || ''}|${rec.w.toLowerCase()}|${rec.b.toLowerCase()}|${rec.res}|${rec.m}`
      : `${rec.y || '?'}|${rec.w.toLowerCase()}|${rec.b.toLowerCase()}|${rec.res}|${rec.m}`;
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
      'PGN Mentor & Official Broadcast World Chess Championships (1886–2026)',
      'PGN Mentor Candidates, FIDE World Cups (1950–2024) & Interzonals (1948–1993)',
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
