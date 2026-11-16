import { Chess } from 'chess.js';
import { describe, expect, it } from 'vitest';
import {
  FAMOUS_SAMPLE_GAMES,
  STANDARD_START_FEN,
  buildPositionAtPly,
  computeGameAccuracySummary,
  detectBinaryFileSignature,
  exportGameToPgn,
  parseGameText,
  parseImportedGames,
  splitMultiGamePgn,
  stepPly,
} from '../src/domain/pgn-import.js';

describe('pgn-import parser, transport controls, and analysis summary', () => {
  it('parses annotated PGN with headers, Lichess clocks, prose comments, NAGs, and nested variations', () => {
    const rawPgn = `[Event "Test Tournament"]
[White "Player One"]
[Black "Player Two"]
[Result "1-0"]

1. e4 { [%clk 0:05:00] Center thrust } 1... c5 (1... e5 2. Nf3 (2. Bc4 Bc5) 2... Nc6) 2. Nf3 $1 d6 3. d4 cxd4 4. Nxd4! 1-0`;

    const res = parseGameText(rawPgn, Chess);
    expect(res.ok).toBe(true);
    expect(res.game.title).toBe('Player One vs Player Two (1-0)');
    expect(res.game.moves.map((m) => m.san)).toEqual(['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4']);
    expect(res.game.moves[0].comment).toBe('Center thrust');
    expect(res.game.result).toBe('1-0');
    expect(res.game.warning).toBeNull();
  });

  it('parses raw SAN, zero castling, Unicode figurines, UCI, long algebraic, and bare FEN text', () => {
    const rawSan = 'e4 e5 Nf3 Nc6 Bc4 Bc5 0-0 Nf6 d3 0-0';
    expect(parseGameText(rawSan, Chess).game.moves.map((m) => m.san)).toEqual([
      'e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'O-O', 'Nf6', 'd3', 'O-O',
    ]);

    const unicodeFig = '1. e4 e5 2. ♘f3 ♞c6 3. ♗b5 a6';
    expect(parseGameText(unicodeFig, Chess).game.moves.map((m) => m.san)).toEqual([
      'e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6',
    ]);

    const uciList = 'e2e4 e7e5 g1f3 b8c6 f1b5';
    expect(parseGameText(uciList, Chess).game.moves.map((m) => m.san)).toEqual([
      'e4', 'e5', 'Nf3', 'Nc6', 'Bb5',
    ]);

    const longAlg = 'e2-e4 e7-e5 Ng1-f3 Nb8-c6';
    expect(parseGameText(longAlg, Chess).game.moves.map((m) => m.san)).toEqual([
      'e4', 'e5', 'Nf3', 'Nc6',
    ]);

    const fen = '3K4/3P1k2/8/8/8/8/4R3/3r4 w - - 0 1';
    const fenRes = parseGameText(fen, Chess);
    expect(fenRes.ok).toBe(true);
    expect(fenRes.game.startFen).toBe(fen);
    expect(fenRes.game.moves).toHaveLength(0);
  });

  it('splits multi-game PGN archives cleanly and validates built-in famous sample games', () => {
    const combined = `${FAMOUS_SAMPLE_GAMES[0].pgn}\n\n${FAMOUS_SAMPLE_GAMES[1].pgn}`;
    const chunks = splitMultiGamePgn(combined);
    expect(chunks).toHaveLength(2);

    const imported = parseImportedGames(combined, Chess);
    expect(imported.ok).toBe(true);
    expect(imported.games).toHaveLength(2);
    expect(imported.games[0].moves).toHaveLength(33);
    expect(imported.games[1].moves).toHaveLength(47);

    const kasparov = parseImportedGames(FAMOUS_SAMPLE_GAMES[2].pgn, Chess);
    expect(kasparov.ok).toBe(true);
    expect(kasparov.games[0].moves).toHaveLength(87);
  });

  it('detects accidental binary PNG/JPEG/PDF files cleanly before decoding text', () => {
    const pngBytes = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    expect(detectBinaryFileSignature(pngBytes)).toBe('PNG image');

    const jpgBytes = new Uint8Array([0xff, 0xd8, 0xff, 0xe0]);
    expect(detectBinaryFileSignature(jpgBytes)).toBe('JPEG image');

    const txtBytes = new TextEncoder().encode('1. e4 e5 2. Nf3');
    expect(detectBinaryFileSignature(txtBytes)).toBeNull();
  });

  it('steps through plies with First/Back/Forward/Last, exports PGN, and computes accuracy summary', () => {
    const parsed = parseGameText('1. e4 e5 2. Nf3 Nc6 3. Bb5', Chess).game;
    expect(stepPly(0, 'back', 5)).toBe(0);
    expect(stepPly(2, 'first', 5)).toBe(0);
    expect(stepPly(2, 'forward', 5)).toBe(3);
    expect(stepPly(2, 'last', 5)).toBe(5);
    expect(stepPly(5, 'forward', 5)).toBe(5);

    const startPos = buildPositionAtPly(STANDARD_START_FEN, parsed.moves, 0, Chess);
    expect(startPos.isAtStart).toBe(true);
    expect(startPos.lastMove).toBeNull();

    const midPos = buildPositionAtPly(STANDARD_START_FEN, parsed.moves, 3, Chess);
    expect(midPos.ply).toBe(3);
    expect(midPos.currentMove.san).toBe('Nf3');
    expect(midPos.lastMove).toEqual({ from: 'g1', to: 'f3' });

    const pgnOut = exportGameToPgn({
      headers: { White: 'Alice', Black: 'Bob' },
      startFen: STANDARD_START_FEN,
      moves: parsed.moves,
      result: '*',
    });
    expect(pgnOut).toContain('[White "Alice"]');
    expect(pgnOut).toContain('1. e4 e5 2. Nf3 Nc6 3. Bb5 *');

    parsed.moves[0].grade = { grade: 'best', cpLoss: 0, symbol: '★' };
    parsed.moves[1].grade = { grade: 'blunder', cpLoss: 340, symbol: '??' };
    parsed.moves[2].grade = { grade: 'inaccuracy', cpLoss: 90, symbol: '?!' };
    const summary = computeGameAccuracySummary(parsed.moves);
    expect(summary.whiteAccuracy).toBeGreaterThan(summary.blackAccuracy);
    expect(summary.counts.b.blunder).toBe(1);
    expect(summary.keyPlies).toEqual([2, 3]);
  });
});
