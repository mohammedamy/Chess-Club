import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Chess } from 'chess.js';
import { describe, expect, it } from 'vitest';
import {
  analyzeGameEndgame,
  classifyBoardEndgame,
  COLLECTION_TYPES,
  decodeGamesDbPayload,
  exportFilteredGamesPgn,
  filterClassicGames,
  gameRecordToPgn,
  normalizeGameRecord,
  summarizeGamesResults,
} from '../src/domain/games-db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_JSON_PATH = path.resolve(__dirname, '../public/data/classic-games-db.json');

describe('classic games database endgame classification', () => {
  it('distinguishes middlegames from all canonical endgame families', () => {
    // Full opening / middlegame -> 'none'
    expect(classifyBoardEndgame(new Chess())).toBe('none');
    expect(classifyBoardEndgame(new Chess('r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PPP2PPP/R2Q1RK1 w - - 0 1'))).toBe(
      'none',
    );

    // Pawn endgame
    expect(classifyBoardEndgame(new Chess('4k3/8/4P3/4K3/8/8/8/8 w - - 0 1'))).toBe('pawn');
    // Rook endgame
    expect(classifyBoardEndgame(new Chess('4k3/8/8/8/8/8/4R3/4K2r w - - 0 1'))).toBe('rook');
    // Double rook endgame
    expect(classifyBoardEndgame(new Chess('4k3/8/8/8/8/8/RR6/4K2r w - - 0 1'))).toBe('double-rook');
    // Rook + Minor endgame
    expect(classifyBoardEndgame(new Chess('4k3/8/8/8/8/3n4/4R3/3BK2r w - - 0 1'))).toBe('rook-minor');
    // Rook vs Minor (exchange imbalance)
    expect(classifyBoardEndgame(new Chess('4k3/8/8/8/8/3b4/4R3/4K3 w - - 0 1'))).toBe('rook-vs-minor');
    // Opposite-colored bishops (c4 light square, e5 dark square)
    expect(classifyBoardEndgame(new Chess('4k3/8/8/4b3/2B5/8/8/4K3 w - - 0 1'))).toBe('bishop-opposite');
    // Same-colored bishops (c4 light square, f5 light square)
    expect(classifyBoardEndgame(new Chess('4k3/8/8/5b2/2B5/8/8/4K3 w - - 0 1'))).toBe('bishop-same');
    // Knight endgame
    expect(classifyBoardEndgame(new Chess('4k3/8/8/3n4/8/4N3/8/4K3 w - - 0 1'))).toBe('knight');
    // Bishop vs Knight
    expect(classifyBoardEndgame(new Chess('4k3/8/8/3n4/8/4B3/8/4K3 w - - 0 1'))).toBe('bishop-vs-knight');
    // Queen endgame
    expect(classifyBoardEndgame(new Chess('4k3/8/3q4/8/8/4Q3/8/4K3 w - - 0 1'))).toBe('queen');
    // Queen vs Pieces
    expect(classifyBoardEndgame(new Chess('4k3/8/2rr4/8/8/4Q3/8/4K3 w - - 0 1'))).toBe('queen-vs-pieces');
  });

  it('tracks endgame entry ply and <=7 piece Syzygy tablebase flag during game replay', () => {
    const start = '3qk3/4p3/8/8/8/8/4P3/3QK3 w - - 0 1';
    const info = analyzeGameEndgame(['Qxd8+', 'Kxd8'], start, Chess);
    // KQP vs Kqp simplifies after Qxd8+ Kxd8 to KP vs Kp -> 'pawn'!
    expect(info.endgame).toBe('pawn');
    expect(info.endgamePly).toBe(1);
    expect(info.tablebase).toBe(true);
    expect(info.tablebasePly).toBe(0);
  });
});

describe('classic games filtering, W/D/B summary, and PGN export', () => {
  const sample = [
    normalizeGameRecord({
      id: 'g_1',
      c: 'world-championship',
      e: 'WCh 1972',
      y: 1972,
      w: 'Fischer, Robert James',
      b: 'Spassky, Boris V',
      res: '1-0',
      eco: 'D59',
      op: "Queen's Gambit Declined",
      eg: 'bishop-same',
      egp: 60,
      tb: 1,
      tbp: 78,
      m: 'c4 e6 Nf3 d5 d4 Nf6 Nc3 Be7',
    }),
    normalizeGameRecord({
      id: 'g_2',
      c: 'world-championship',
      e: 'WCh 1985',
      y: 1985,
      w: 'Karpov, Anatoly',
      b: 'Kasparov, Garry',
      res: '0-1',
      eco: 'B44',
      op: 'Sicilian Defense: Taimanov',
      eg: 'rook-minor',
      egp: 62,
      tb: 0,
      m: 'e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6',
    }),
    normalizeGameRecord({
      id: 'g_3',
      c: 'candidates',
      e: 'Candidates 1953',
      y: 1953,
      w: 'Bronstein, David',
      b: 'Reshevsky, Samuel',
      res: '1/2-1/2',
      eco: 'E60',
      op: "King's Indian Defense",
      eg: 'none',
      tb: 0,
      m: 'd4 Nf6 c4 g6 Nc3 Bg7',
    }),
  ];

  it('filters by player (side-aware), opening, ECO family, endgame, tablebase, year, and result', () => {
    expect(filterClassicGames(sample, { playerQuery: 'kasparov', playerSide: 'black' })).toHaveLength(1);
    expect(filterClassicGames(sample, { playerQuery: 'kasparov', playerSide: 'white' })).toHaveLength(0);
    expect(filterClassicGames(sample, { openingQuery: 'sicilian' }).map((g) => g.id)).toEqual(['g_2']);
    expect(filterClassicGames(sample, { ecoFamily: 'D' }).map((g) => g.id)).toEqual(['g_1']);
    expect(filterClassicGames(sample, { endgame: 'bishop-same' }).map((g) => g.id)).toEqual(['g_1']);
    expect(filterClassicGames(sample, { endgame: 'any-endgame' }).map((g) => g.id)).toEqual(['g_2', 'g_1']);
    expect(filterClassicGames(sample, { endgame: 'tablebase' }).map((g) => g.id)).toEqual(['g_1']);
    expect(filterClassicGames(sample, { result: '1-0' }).map((g) => g.id)).toEqual(['g_1']);
    expect(filterClassicGames(sample, { result: '0-1' }).map((g) => g.id)).toEqual(['g_2']);
    expect(filterClassicGames(sample, { result: '1/2-1/2' }).map((g) => g.id)).toEqual(['g_3']);
    expect(filterClassicGames(sample, { yearFrom: 1970, yearTo: 1980 }).map((g) => g.id)).toEqual(['g_1']);
    expect(filterClassicGames(sample, { collection: 'candidates' }).map((g) => g.id)).toEqual(['g_3']);
  });

  it('summarizes W/D/B percentages and exports clean multi-game PGN', () => {
    const stats = summarizeGamesResults(sample);
    expect(stats.total).toBe(3);
    expect(stats.whiteWins).toBe(1);
    expect(stats.blackWins).toBe(1);
    expect(stats.draws).toBe(1);
    expect(stats.topOpenings.length).toBe(3);
    expect(stats.topEndgames.length).toBe(2);

    const pgnOne = gameRecordToPgn(sample[0]);
    expect(pgnOne).toContain('[White "Fischer, Robert James"]');
    expect(pgnOne).toContain('[ECO "D59"]');
    expect(pgnOne).toContain('1. c4 e6');

    const bundle = exportFilteredGamesPgn(sample);
    expect(bundle).toContain('Karpov, Anatoly');
    expect(bundle).toContain('Bronstein, David');
  });
  it('decodes version 2 dictionary-compressed payloads seamlessly', () => {
    const v2Payload = {
      version: 2,
      dict: {
        c: ['modern-elite'],
        e: ['Tata Steel Masters'],
        s: ['Wijk aan Zee NED'],
        p: ['Carlsen, Magnus', 'Firouzja, Alireza'],
        eco: ['C65'],
        op: ['Ruy Lopez: Berlin Defense'],
        eg: ['rook'],
      },
      games: [
        {
          id: 42,
          c: 0,
          e: 0,
          s: 0,
          d: '2024.01.20',
          y: 2024,
          r: '7',
          w: 0,
          b: 1,
          res: '1-0',
          eco: 0,
          op: 0,
          eg: 0,
          egp: 72,
          tb: 1,
          tbp: 84,
          p: 4,
          m: 'e4 e5 Nf3 Nc6',
        },
      ],
    };

    const decoded = decodeGamesDbPayload(v2Payload);
    expect(decoded).toHaveLength(1);
    expect(decoded[0]).toMatchObject({
      id: 'g_00042',
      collection: 'modern-elite',
      event: 'Tata Steel Masters',
      site: 'Wijk aan Zee NED',
      white: 'Carlsen, Magnus',
      black: 'Firouzja, Alireza',
      eco: 'C65',
      opening: 'Ruy Lopez: Berlin Defense',
      endgame: 'rook',
      endgamePly: 72,
      tablebase: true,
      tablebasePly: 84,
      plies: 4,
    });
    expect(filterClassicGames(decoded, { playerQuery: 'carlsen', collection: 'modern-elite' })).toHaveLength(1);
  });
});

describe('compiled public classic-games-db.json dataset integrity', () => {
  it('exists, contains 10,000+ historical & elite games (1844–2024), and replays sample moves cleanly', () => {
    expect(fs.existsSync(DB_JSON_PATH)).toBe(true);
    const raw = JSON.parse(fs.readFileSync(DB_JSON_PATH, 'utf8'));
    expect(raw.version).toBe(2);
    expect(raw.dict).toBeTruthy();
    expect(Array.isArray(raw.games)).toBe(true);
    expect(raw.games.length).toBeGreaterThanOrEqual(10000);
    expect(raw.stats.minYear).toBeLessThanOrEqual(1860);
    expect(raw.stats.maxYear).toBeGreaterThanOrEqual(2024);

    const normalized = decodeGamesDbPayload(raw);
    expect(normalized).toHaveLength(raw.games.length);
    for (const col of COLLECTION_TYPES) {
      expect(normalized.some((g) => g.collection === col)).toBe(true);
    }
    expect(normalized.some((g) => g.result === '1-0')).toBe(true);
    expect(normalized.some((g) => g.result === '0-1')).toBe(true);
    expect(normalized.some((g) => g.result === '1/2-1/2')).toBe(true);
    expect(normalized.some((g) => g.endgame === 'rook')).toBe(true);
    expect(normalized.some((g) => g.endgame === 'pawn')).toBe(true);
    expect(normalized.some((g) => g.tablebase)).toBe(true);

    // Deterministically replay 60 evenly-spaced games across the full archive
    const stride = Math.max(1, Math.floor(normalized.length / 60));
    let checked = 0;
    for (let i = 0; i < normalized.length && checked < 60; i += stride) {
      const g = normalized[i];
      expect(['1-0', '0-1', '1/2-1/2']).toContain(g.result);
      expect(g.eco).toMatch(/^[A-E]\d{2}$/);
      expect(g.opening.length).toBeGreaterThan(2);
      const board = new Chess();
      for (const san of g.moves) {
        const res = board.move(san);
        expect(res).toBeTruthy();
      }
      checked += 1;
    }
    expect(checked).toBe(60);
  });
});
