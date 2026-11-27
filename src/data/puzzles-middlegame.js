export const MIDDLEGAME_PUZZLES = [
  {
    "id": "mid-yugoslav-bh6",
    "category": "Middlegame",
    "theme": "Yugoslav Dragon Bishop Trade",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r1bq1rk1/pp2ppbp/2n2np1/3p4/3NP3/2N1BP2/PPPQ2PP/2KR1B1R w - - 0 10",
    "sideToMove": "White",
    "prompt": "White to move. Black broke in the center with ...d5 against the Yugoslav Attack. Keep the central advantage!",
    "moves": [
      "exd5"
    ],
    "explanation": "exd5 — Trading on d5 clarifies the center before invading on the h-file or d-file."
  },
  {
    "id": "mid-najdorf-english-g4",
    "category": "Middlegame",
    "theme": "English Attack Pawn Storm",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "r2q1rk1/1p1nbppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/2KR1B1R w - - 5 11",
    "sideToMove": "White",
    "prompt": "White to move. Opposite-side castling in the Najdorf! Start White’s kingside pawn avalanche!",
    "moves": [
      "g4"
    ],
    "acceptAlso": [
      "a3",
      "Rg1"
    ],
    "explanation": "g4 — Launching g4-g5 drives away Black’s f6 defender and opens lines against g8."
  },
  {
    "id": "mid-keres-attack-g4",
    "category": "Middlegame",
    "theme": "Keres Attack Strike",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    "sideToMove": "White",
    "prompt": "White to move. Against the Scheveningen move order, unleash Keres’ famous aggressive thrust!",
    "moves": [
      "g4"
    ],
    "acceptAlso": [
      "Be3",
      "Qe2"
    ],
    "explanation": "g4 — 6.g4 seizes kingside space immediately while Black has not castled or secured e5."
  },
  {
    "id": "mid-scheveningen-a6",
    "category": "Middlegame",
    "theme": "Scheveningen Counterplay in the Center",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "rnb2rk1/1pq1bppp/p2ppn2/8/3NPP2/2N5/PPP1B1PP/R1BQ1R1K w - - 3 10",
    "sideToMove": "White",
    "prompt": "White prepared f4 and Kh1. Launch White’s classical middlegame expansion!",
    "moves": [
      "a4"
    ],
    "acceptAlso": [
      "Bf3",
      "Qd3"
    ],
    "explanation": "a4 — Restraining ...b5 secures White’s queenside before advancing f5 or g4."
  },
  {
    "id": "mid-italian-nf5-jump",
    "category": "Middlegame",
    "theme": "Italian Knight Infiltration to f5",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1bq1rk1/bpp2ppp/p2p1nn1/4p3/4P3/1BPP1NN1/PP3PPP/R1BQR1K1 b - - 7 11",
    "sideToMove": "Black",
    "prompt": "Black to move. White maneuvered Nbd2-f1-g3 aiming for Nf5. Prevent or challenge White’s kingside plan!",
    "moves": [
      "c5"
    ],
    "acceptAlso": [
      "h6",
      "Bd7"
    ],
    "explanation": "c5 repositions the pawn to c5, executing the strongest Stockfish 19 continuation for italian knight infiltration to f5."
  },
  {
    "id": "mid-italian-d4-break",
    "category": "Middlegame",
    "theme": "Italian Center Breakthrough",
    "difficulty": "Medium",
    "rating": 1310,
    "fen": "r1bqk2r/ppp2ppp/2n2n2/3p4/2BPP3/5N2/PP1N1PPP/R2QK2R w KQkq d6 0 9",
    "sideToMove": "White",
    "prompt": "White to move. Black counter-struck with ...d5. Maintain the initiative with accurate central play!",
    "moves": [
      "exd5"
    ],
    "acceptAlso": [
      "Bd3"
    ],
    "explanation": "exd5 — Opening the e-file creates pressure against Black’s uncastled king."
  },
  {
    "id": "mid-evans-c3-ba3",
    "category": "Middlegame",
    "theme": "Evans Gambit Anti-Castling Diagonal",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQ1RK1 b kq - 1 7",
    "sideToMove": "Black",
    "prompt": "Black to move. White sacrificed a pawn for rapid development. Stay alert and avoid greedy captures!",
    "moves": [
      "Nf6"
    ],
    "explanation": "Nf6 repositions the knight to f6, executing the strongest Stockfish 19 continuation for evans gambit anti-castling diagonal."
  },
  {
    "id": "mid-scotch-initiative",
    "category": "Middlegame",
    "theme": "Scotch Open-Lines Attack",
    "difficulty": "Easy",
    "rating": 1180,
    "fen": "r1b1k2r/ppppnppp/2n2q2/2b5/3NP3/2P1B3/PP3PPP/RN1QKB1R w KQkq - 1 7",
    "sideToMove": "White",
    "prompt": "White to move. In the Classical Scotch, develop dynamically while shielding d4!",
    "moves": [
      "Bc4"
    ],
    "acceptAlso": [
      "Bb5",
      "Qd2"
    ],
    "explanation": "Bc4 — Aiming at f7 and preparing O-O maintains dynamic pressure across the center."
  },
  {
    "id": "mid-kings-gambit-bc4",
    "category": "Middlegame",
    "theme": "Open f-File Initiative",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "rnbqk1nr/ppp2pb1/3p3p/6p1/2BPPp2/2P2N2/PP4PP/RNBQ1RK1 b kq - 0 7",
    "sideToMove": "Black",
    "prompt": "Black to move. White built an impressive center after the King’s Gambit. Consolidate against White’s f-file attack!",
    "moves": [
      "Nc6"
    ],
    "acceptAlso": [
      "Nf6"
    ],
    "explanation": "Nc6 — Developing and keeping an eye on d4 stabilizes Black’s extra pawn."
  },
  {
    "id": "mid-panov-d5-break",
    "category": "Middlegame",
    "theme": "Panov-Botvinnik Central Break",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1bq1rk1/pp3ppp/2n1p3/3n4/1b1P4/2NB1N2/PP3PPP/R1BQ1RK1 w - - 4 10",
    "sideToMove": "White",
    "prompt": "White holds an IQP in the Panov Attack with active pieces. Build kingside threats!",
    "moves": [
      "Re1"
    ],
    "acceptAlso": [
      "Bc2",
      "a3"
    ],
    "explanation": "Re1 — Supporting the center and eyeing sacrifices on h7 builds classic Panov pressure."
  },
  {
    "id": "mid-caro-advance-h4",
    "category": "Middlegame",
    "theme": "Shirov-Tal Kingside Storm",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "r2qkb1r/pp1nnppp/2p1p3/3pPb2/3P4/5N2/PPP1BPPP/RNBQ1RK1 w kq - 4 7",
    "sideToMove": "White",
    "prompt": "White to move. Black plays a tight Caro-Kann formation. Seize kingside space and challenge f5!",
    "moves": [
      "Nbd2"
    ],
    "acceptAlso": [
      "a4",
      "c3"
    ],
    "explanation": "Nbd2 — Coordinating c3/Nb3 or Nh4 attacks Black’s solid setup patiently."
  },
  {
    "id": "mid-marshall-counter",
    "category": "Middlegame",
    "theme": "Marshall Counterattack Development",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r1b2rk1/5ppp/p1pb4/1p1n4/3P3q/1BP5/PP3PPP/RNBQR1K1 w - - 3 14",
    "sideToMove": "White",
    "prompt": "White to move. Black launched the Marshall queen foray ...Qh4! Defend g2 cleanly without weakening dark squares!",
    "moves": [
      "g3"
    ],
    "explanation": "g3 — Chasing the queen from h4 stabilizes White’s extra pawn with careful defense."
  },
  {
    "id": "mid-french-winawer-qg4",
    "category": "Middlegame",
    "theme": "Winawer Poisoned Pawn Assault",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P2PPP/R1B1KBNR w KQq - 0 10",
    "sideToMove": "White",
    "prompt": "White to move. Both wings are on fire in the Winawer Poisoned Pawn! Keep White’s king and center safe!",
    "moves": [
      "Ne2"
    ],
    "acceptAlso": [
      "Rb1"
    ],
    "explanation": "Ne2 — Developing the knight to e2 defends c3 and blocks e1-a5 checks cleanly."
  },
  {
    "id": "mid-classical-french-burn",
    "category": "Middlegame",
    "theme": "Classical French Central Tension",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "rnbq1rk1/ppp2ppp/4pb2/8/3PN3/5N2/PPP2PPP/R2QKB1R w KQ - 2 8",
    "sideToMove": "White",
    "prompt": "White to move. Maintain active piece placement against the Burn Variation French!",
    "moves": [
      "c3"
    ],
    "acceptAlso": [
      "Qd3",
      "Bc4",
      "h4"
    ],
    "explanation": "c3 — Reinforcing d4 locks down Black’s f6 bishop diagonal and keeps White’s space edge."
  },
  {
    "id": "mid-tarrasch-french-e5",
    "category": "Middlegame",
    "theme": "Tarrasch French Central Drive",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "r1bqk2r/pp2nppp/2n5/1Bbp4/8/5N2/PPPN1PPP/R1BQ1RK1 w kq - 2 9",
    "sideToMove": "White",
    "prompt": "White to move. Black has an isolated d5 pawn. Develop and blockade the d4 square effectively!",
    "moves": [
      "Nb3"
    ],
    "acceptAlso": [
      "c3",
      "h3"
    ],
    "explanation": "Nb3 — Targeting c5 and controlling d4 secures lasting control over the light squares."
  },
  {
    "id": "mid-benko-queenside",
    "category": "Middlegame",
    "theme": "Benko Gambit Pawn Pressure",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N5/PP3PPP/R1BQ1KNR w kq - 0 9",
    "sideToMove": "White",
    "prompt": "White castled by hand on f1 in the Benko Accepted. Consolidate White’s extra pawn!",
    "moves": [
      "Nf3"
    ],
    "acceptAlso": [
      "a4",
      "g3"
    ],
    "explanation": "Nf3 — Completing development smoothly with Nf3-g3-Kg2 locks down the extra queenside pawn."
  },
  {
    "id": "mid-grunfeld-exchange-bc4",
    "category": "Middlegame",
    "theme": "Pressuring d5 in the Exchange Grünfeld",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "r1bq1rk1/pp2ppbp/2n3p1/2p5/2BPP3/2P1B3/P3NPPP/R2Q1RK1 b - - 5 10",
    "sideToMove": "Black",
    "prompt": "Black to move. Target White’s center in the Exchange Grünfeld!",
    "moves": [
      "Bg4"
    ],
    "acceptAlso": [
      "b6",
      "cxd4",
      "Bd7"
    ],
    "explanation": "Bg4 — Pinning e2 attacks d4 immediately and increases tension against White’s pawn center."
  },
  {
    "id": "mid-queens-indian-d5",
    "category": "Middlegame",
    "theme": "Breaking in the Queen’s Indian",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "rn1q1rk1/pbppbppp/1p2p3/8/2PP4/2Q2NP1/PP2PPBP/R1B2RK1 b - - 0 9",
    "sideToMove": "Black",
    "prompt": "Black to move. Challenge White’s center while keeping the e4/f5 squares under control!",
    "moves": [
      "c5"
    ],
    "explanation": "c5 repositions the pawn to c5, executing the strongest Stockfish 19 continuation for breaking in the queen’s indian."
  },
  {
    "id": "mid-catalan-open-e4",
    "category": "Middlegame",
    "theme": "Catalan Central Expansion",
    "difficulty": "Medium",
    "rating": 1370,
    "fen": "rnbq1rk1/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 0 7",
    "sideToMove": "White",
    "prompt": "White to move. Black captured on c4 in the Open Catalan. Choose White’s classic dynamic move!",
    "moves": [
      "Qc2"
    ],
    "acceptAlso": [
      "Ne5",
      "Qa4"
    ],
    "explanation": "Qc2 — Aiming at c4 while preparing Rd1 and Nbd2 keeps full compensation."
  },
  {
    "id": "mid-dragon-sacrifice-c3",
    "category": "Middlegame",
    "theme": "Sicilian Counterplay on c3",
    "difficulty": "Advanced",
    "rating": 1640,
    "fen": "3q1rk1/pp1bppbp/3p1np1/8/2rNP3/2N1BP2/PPPQ2PP/1K1R3R w - - 0 14",
    "sideToMove": "White",
    "prompt": "White to move. Black’s rook landed on c4. Keep the kingside initiative rolling cleanly!",
    "moves": [
      "g4"
    ],
    "acceptAlso": [
      "Qd3",
      "h4"
    ],
    "explanation": "g4 — Advancing g4-h4 launches an uncompromising attack before Black sacrifices on c3."
  },
  {
    "id": "mid-open-sicilian-b4",
    "category": "Middlegame",
    "theme": "Wing Thrust After Castling",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1b1kb1r/1pqp1ppp/p1n1pn2/8/3NP3/2N1B3/PPP1BPPP/R2Q1RK1 b kq - 3 8",
    "sideToMove": "Black",
    "prompt": "Black plays the Taimanov Sicilian. Continue sound development against f4/Kh1 plans!",
    "moves": [
      "Be7"
    ],
    "acceptAlso": [
      "d6"
    ],
    "explanation": "Be7 repositions the bishop to e7, executing the strongest Stockfish 19 continuation for wing thrust after castling."
  },
  {
    "id": "mid-kalashnikov-d6",
    "category": "Middlegame",
    "theme": "Kalashnikov Dynamic Control",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "r1bqkbnr/5ppp/p1np4/1p2p3/4P3/N1N5/PPP2PPP/R1BQKB1R w KQkq b6 0 8",
    "sideToMove": "White",
    "prompt": "White to move. Black delayed ...Nf6 and expanded on the queenside. Aim your knight at the d5 hole!",
    "moves": [
      "Nd5"
    ],
    "explanation": "Nd5 — Occupying d5 immediately dominates the center while eyeing Bg5."
  },
  {
    "id": "mid-petroff-uncastled-target",
    "category": "Middlegame",
    "theme": "Attacking Uncastled Pieces",
    "difficulty": "Medium",
    "rating": 1310,
    "fen": "rnbq1rk1/ppp2ppp/3b4/3pN3/2PPn3/3B4/PP3PPP/RNBQ1RK1 b - c3 0 7",
    "sideToMove": "Black",
    "prompt": "Black to move. White attacked d5 with c4. Reinforce the center solidly!",
    "moves": [
      "Bxe5"
    ],
    "acceptAlso": [
      "Nd7",
      "Nf6"
    ],
    "explanation": "Bxe5 — Clarifying the e5 knight avoids tactics against c6 and f7."
  },
  {
    "id": "mid-pirc-austrian-storm",
    "category": "Middlegame",
    "theme": "Austrian Attack Tension",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "r1bq1rk1/ppp1ppbp/n2p1np1/8/3PPP2/2NB1N2/PPP3PP/R1BQK2R w KQ - 5 7",
    "sideToMove": "White",
    "prompt": "White to move. Against the ...Na6 Austrian Pirc, complete kingside safety calmly!",
    "moves": [
      "O-O"
    ],
    "acceptAlso": [
      "a3"
    ],
    "explanation": "O-O — Consolidating the king before pushing e5 prevents tactical ...c5/Nb4 tricks."
  },
  {
    "id": "mid-alekhine-four-pawns",
    "category": "Middlegame",
    "theme": "Four Pawns Attack Break",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r2qkb1r/ppp2ppp/1nn1p3/4Pb2/2PP4/2N1BN2/PP4PP/R2QKB1R b KQkq - 1 9",
    "sideToMove": "Black",
    "prompt": "Black to move. White erected a huge pawn front. Attack the base of White’s center!",
    "moves": [
      "Be7"
    ],
    "acceptAlso": [
      "Bb4",
      "Bg4"
    ],
    "explanation": "Be7 — Preparing ...O-O and ...f6 rips apart the overextended e5/d4 pawn chain."
  },
  {
    "id": "mid-semi-slav-meran",
    "category": "Middlegame",
    "theme": "Meran Wild Pawns Break",
    "difficulty": "Advanced",
    "rating": 1610,
    "fen": "r2qkb1r/pb1n1ppp/2p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 2 9",
    "sideToMove": "White",
    "prompt": "White to move. Black plays the Bb7 Meran Slav. Fight for the central e4 break!",
    "moves": [
      "e4"
    ],
    "acceptAlso": [
      "O-O",
      "a3"
    ],
    "explanation": "e4 — Launching e4 threatens e5 while seizing massive central influence."
  },
  {
    "id": "mid-qgd-exchange-minority",
    "category": "Middlegame",
    "theme": "Central Break vs Minority Attack",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "rn2kb1r/pp3p1p/2p2pb1/3p4/3P4/2N1P3/PP3PPP/R3KBNR w KQkq - 0 10",
    "sideToMove": "White",
    "prompt": "White to move. Black accepted fractured kingside pawns to get the bishop pair. Keep active queenside play!",
    "moves": [
      "h4"
    ],
    "acceptAlso": [
      "Nge2",
      "Nh3"
    ],
    "explanation": "h4 repositions the pawn to h4, executing the strongest Stockfish 19 continuation for central break vs minority attack."
  },
  {
    "id": "mid-trompowsky-attack",
    "category": "Middlegame",
    "theme": "Trompowsky Dark-Square Bind",
    "difficulty": "Easy",
    "rating": 1180,
    "fen": "rnbqkb1r/pppppppp/8/8/3PnB2/8/PPP1PPPP/RN1QKBNR b KQkq - 4 3",
    "sideToMove": "Black",
    "prompt": "Black to move. White retreated the bishop to f4. Challenge White’s center right away!",
    "moves": [
      "d5"
    ],
    "acceptAlso": [
      "c6",
      "e6"
    ],
    "explanation": "d5 repositions the pawn to d5, executing the strongest Stockfish 19 continuation for trompowsky dark-square bind."
  },
  {
    "id": "mid-budapest-active",
    "category": "Middlegame",
    "theme": "Budapest Central Control",
    "difficulty": "Medium",
    "rating": 1280,
    "fen": "r1b1k2r/ppppqppp/2n5/4P3/1bP2Bn1/5N2/PP1NPPPP/R2QKB1R w KQkq - 7 7",
    "sideToMove": "White",
    "prompt": "White to move. Black double-attacks the e5 pawn. Gain space while calmly keeping harmony!",
    "moves": [
      "a3"
    ],
    "acceptAlso": [
      "e3",
      "Qc2"
    ],
    "explanation": "a3 — Driving away the b4 bishop secures queenside control cleanly."
  },
  {
    "id": "mid-benoni-e5-break",
    "category": "Middlegame",
    "theme": "Breaking Open the Modern Benoni",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "rnbqk2r/pp1n1pbp/3p2p1/1BpP4/P3PP2/2N5/1P4PP/R1BQK1NR b KQkq a3 0 9",
    "sideToMove": "Black",
    "prompt": "Black to move. White launched the sharp f4 Taimanov Attack. Safeguard your king and complete development!",
    "moves": [
      "O-O"
    ],
    "acceptAlso": [
      "Na6",
      "Qh4+"
    ],
    "explanation": "O-O — Removing the king from the center avoids e5 discoveries."
  },
  {
    "id": "mid-attack-castled-king-queen",
    "category": "Middlegame",
    "theme": "Queen Sacrifice Danger & Direct Pressure",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "r1b1r1k1/pp1n1ppp/2p2q2/3p4/3P4/2NB1N2/PPQ2PPP/R3R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Both sides are castled cleanly. Calculate the sharpest central break/initiative!",
    "moves": [
      "Rxe8+"
    ],
    "explanation": "White captures on e8 with Rxe8+ with check, seizing the initiative, executing the strongest Stockfish 19 continuation for queen sacrifice danger & direct pressure."
  },
  {
    "id": "mid-rook-lift-g3",
    "category": "Middlegame",
    "theme": "Attacking Rook Lift Against Castled King",
    "difficulty": "Medium",
    "rating": 1460,
    "fen": "r2q1rk1/ppp2ppp/2n1b3/3pP3/3P4/3B1N2/PPP2PPP/R2QR1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White enjoys an e5 space wedge. Organize the strongest middlegame build-up!",
    "moves": [
      "c3"
    ],
    "acceptAlso": [
      "Qd2",
      "h3"
    ],
    "explanation": "c3 — Consolidating d4 frees White’s minor and heavy pieces for kingside action."
  },
  {
    "id": "mid-open-file-punish-king",
    "category": "Middlegame",
    "theme": "Strike While Enemy King Lingers on e8",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "r1bqkbnr/2p2ppp/p2p4/1p6/3pP3/1B6/PPP2PPP/RNBQK2R w KQkq - 0 8",
    "sideToMove": "White",
    "prompt": "White to move. Black spent tempos taking on d4 while uncastled. Punish the open diagonals immediately!",
    "moves": [
      "Bd5"
    ],
    "acceptAlso": [
      "a4",
      "c3"
    ],
    "explanation": "Bd5 — Attacking a8 and freezing c6 disrupts Black’s kingside castle."
  },
  {
    "id": "mid-scotchgambit-pressure",
    "category": "Middlegame",
    "theme": "Scotch Gambit Attacking Target f7",
    "difficulty": "Easy",
    "rating": 1140,
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 6",
    "sideToMove": "White",
    "prompt": "White to move. Black declined the c3 pawn trap. Seize the center with tempo!",
    "moves": [
      "cxd4"
    ],
    "acceptAlso": [
      "e5"
    ],
    "explanation": "cxd4 — Recapturing with tempo on c5 forces Black’s bishop back and builds a strong d4-e4 duo."
  },
  {
    "id": "mid-vienna-f4-break",
    "category": "Middlegame",
    "theme": "Vienna Gambit Open f-File",
    "difficulty": "Medium",
    "rating": 1280,
    "fen": "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2N2N2/PPPP2PP/R1BQKB1R b KQkq - 1 5",
    "sideToMove": "Black",
    "prompt": "Black to move. White challenges e4 in the Vienna. Maintain central tension actively!",
    "moves": [
      "Bc5"
    ],
    "acceptAlso": [
      "Be7",
      "Be6"
    ],
    "explanation": "Bc5 — Targeting f2 and developing fast generates strong dark-square counterplay."
  },
  {
    "id": "mid-two-knights-ng5",
    "category": "Middlegame",
    "theme": "Fried Liver Defense (Polerio)",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "r1bqkb1r/p4pp1/2p2n1p/n3p1N1/8/8/PPPPBPPP/RNBQK2R w KQkq - 0 9",
    "sideToMove": "White",
    "prompt": "White to move. Black kicked the g5 knight. Choose the standard theoretical retreat maintaining activity!",
    "moves": [
      "Nf3"
    ],
    "acceptAlso": [
      "Nh3"
    ],
    "explanation": "Nf3 — Retreating to f3 retains pressure on e5 while preserving castling."
  },
  {
    "id": "mid-ruy-marshall-rook-lift",
    "category": "Middlegame",
    "theme": "Central File Dominance in the Ruy Lopez",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r2qr1k1/1bp1bppp/p1np1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 w - - 1 11",
    "sideToMove": "White",
    "prompt": "White to move. In the Zaitsev Ruy Lopez, keep Black under maximum central pressure!",
    "moves": [
      "Nbd2"
    ],
    "acceptAlso": [
      "Ng5",
      "a3"
    ],
    "explanation": "Nbd2 — Increasing pressure on e4 and f1-g3 prepares a balanced central or kingside storm."
  },
  {
    "id": "mid-caro-classical-exchange",
    "category": "Middlegame",
    "theme": "Classical Caro-Kann Attack",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r2qkbnr/pp1nppp1/2p4p/7P/3P4/3Q1NN1/PPP2PP1/R1B1K2R b KQkq - 0 10",
    "sideToMove": "Black",
    "prompt": "Black to move. White drove back the bishop and took space on the kingside. Continue sound development!",
    "moves": [
      "e6"
    ],
    "acceptAlso": [
      "Ngf6",
      "Qc7"
    ],
    "explanation": "e6 — Shutting down White’s f4/c4 diagonals keeps Black’s fortress completely solid."
  },
  {
    "id": "mid-scandinavian-dev",
    "category": "Middlegame",
    "theme": "Scandinavian Tempo Exploitation",
    "difficulty": "Easy",
    "rating": 1090,
    "fen": "rn2kb1r/ppp1pppp/5n2/q4b2/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    "sideToMove": "White",
    "prompt": "White to move. Black brought out the queen early. Find White’s crisp attacking development!",
    "moves": [
      "Ne5"
    ],
    "acceptAlso": [
      "Bd2",
      "Bc4"
    ],
    "explanation": "Ne5 — Planting the knight on e5 opens lines against f7 and eyes Nc4 against the queen."
  },
  {
    "id": "mid-nimzo-rubinstein-e4",
    "category": "Middlegame",
    "theme": "Rubinstein Nimzo Central Break",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "rnbq1rk1/pp3ppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 b - - 0 8",
    "sideToMove": "Black",
    "prompt": "Black to move. Both sides reached the main Rubinstein tabiya. Clarify the center with ...cxd4!",
    "moves": [
      "cxd4"
    ],
    "acceptAlso": [
      "Nc6",
      "b6"
    ],
    "explanation": "cxd4 — Leaving White with an isolated d4 pawn gives Black clear targets."
  },
  {
    "id": "mid-dutch-leningrad-e4",
    "category": "Middlegame",
    "theme": "Leningrad Dutch e4 Strike",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "rnb1qrk1/ppp1p1bp/3p1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 2 8",
    "sideToMove": "White",
    "prompt": "White to move. Black prepares ...e5. Keep queenside pressure strong before ...e5 lands!",
    "moves": [
      "d5"
    ],
    "acceptAlso": [
      "b3",
      "Re1",
      "Qc2"
    ],
    "explanation": "d5 — Advancing d5 clamps down on c6 and disrupts Black’s ...e5 setup."
  },
  {
    "id": "mid-semi-slav-moscow",
    "category": "Middlegame",
    "theme": "Anti-Moscow Sharp Center",
    "difficulty": "Medium",
    "rating": 1460,
    "fen": "rnbqkb1r/p4p2/2p1pn1p/1p4p1/2pPP3/2N2NB1/PP3PPP/R2QKB1R w KQkq b6 0 9",
    "sideToMove": "White",
    "prompt": "White to move. Black grabbed the c4 pawn with ...g5 and ...b5. Strike the weakened dark squares!",
    "moves": [
      "Be2"
    ],
    "acceptAlso": [
      "Ne5",
      "h4"
    ],
    "explanation": "Be2 — Developing rapidly and aiming for kingside castling prepares fierce central strikes."
  },
  {
    "id": "mid-alapin-iqp-break",
    "category": "Middlegame",
    "theme": "Alapin Counterplay Against c3",
    "difficulty": "Easy",
    "rating": 1190,
    "fen": "rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 6",
    "sideToMove": "White",
    "prompt": "White to move. Develop cleanly in the Alapin Sicilian while maintaining d4-pawn flexibility.",
    "moves": [
      "Be2"
    ],
    "acceptAlso": [
      "Bd3",
      "Na3"
    ],
    "explanation": "Be2 — Preparing O-O and challenging Black’s active queen gives effortless equality or initiative."
  },
  {
    "id": "mid-rossolimo-center",
    "category": "Middlegame",
    "theme": "Rossolimo Structural Edge",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1bq1rk1/pp1pppbp/2n2np1/1Bp5/4P3/2P2N2/PP1P1PPP/RNBQR1K1 w - - 3 7",
    "sideToMove": "White",
    "prompt": "White to move. Erect the full center in the Rossolimo Sicilian!",
    "moves": [
      "d4"
    ],
    "acceptAlso": [
      "h3"
    ],
    "explanation": "d4 — Pushing d4 challenges Black’s central pawns immediately."
  },
  {
    "id": "mid-grand-prix-storm",
    "category": "Middlegame",
    "theme": "Grand Prix Kingside Build-Up",
    "difficulty": "Easy",
    "rating": 1150,
    "fen": "r1bqk1nr/pp1pppbp/2n3p1/1Bp5/4PP2/2N2N2/PPPP2PP/R1BQK2R b KQkq - 3 5",
    "sideToMove": "Black",
    "prompt": "Black to move. Counter the Grand Prix Attack calmly!",
    "moves": [
      "Nd4"
    ],
    "explanation": "Nd4 — Trading or challenging b5 prevents White from effortlessly swarming the kingside."
  },
  {
    "id": "mid-smith-morra-dev",
    "category": "Middlegame",
    "theme": "Smith-Morra Open-File Pressure",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1bqkbnr/1p1p1ppp/p1n1p3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 7",
    "sideToMove": "White",
    "prompt": "White gave a pawn for blazing development. Castle safely while eyeing the open c- and d-files!",
    "moves": [
      "O-O"
    ],
    "acceptAlso": [
      "Bf4",
      "Be2"
    ],
    "explanation": "O-O — Placing the rooks onto c1 and d1 immediately after castling maximizes the open lines."
  },
  {
    "id": "mid-closed-ruy-f5",
    "category": "Middlegame",
    "theme": "Ruy Lopez Slow Kingside Squeeze",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "r1bq1rk1/4bppp/p1np1n2/1pp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12",
    "sideToMove": "White",
    "prompt": "White to move. Black returned the knight to c6 pressuring d4. Resolve central tension favorably!",
    "moves": [
      "d5"
    ],
    "explanation": "d5 — Locking the center with d5 drives Black’s knight back and claims lasting space."
  },
  {
    "id": "mid-sicilian-sozin-f4",
    "category": "Middlegame",
    "theme": "Sozin Diagonal Pressure vs Castled King",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r1bq1rk1/pp2bppp/2nppn2/8/2BNP3/2N1B3/PPP1QPPP/2KR3R b - - 5 9",
    "sideToMove": "Black",
    "prompt": "Black to move. White castled queenside in the Velimirović Attack. Counter-strike in the center!",
    "moves": [
      "Qc7"
    ],
    "acceptAlso": [
      "a6",
      "Bd7"
    ],
    "explanation": "Qc7 — Controlling c-file squares while preparing ...Na5/Nxd4 keeps Black dynamic."
  },
  {
    "id": "mid-fianchetto-kid-e5",
    "category": "Middlegame",
    "theme": "Fianchetto King’s Indian Tension",
    "difficulty": "Medium",
    "rating": 1370,
    "fen": "r1bq1rk1/1pp1ppbp/p1np1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 8",
    "sideToMove": "White",
    "prompt": "White to move. Black prepares ...Rb8 and ...b5. Reinforce queenside prophylaxis cleanly!",
    "moves": [
      "d5"
    ],
    "acceptAlso": [
      "h3",
      "Bf4"
    ],
    "explanation": "d5 — Claiming space and chasing the c6 knight forces it onto less active squares."
  },
  {
    "id": "mid-catalan-central-trade",
    "category": "Middlegame",
    "theme": "Precision Timing in Open Structures",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "r2q1rk1/pp2bppp/2n1pn2/3p4/3P4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. How does White immediately seize open-file initiative?",
    "moves": [
      "Bf4"
    ],
    "acceptAlso": [
      "h4",
      "e3",
      "Re1"
    ],
    "explanation": "Bf4 — Active bishop placement targets c7 and accelerates rook coordination."
  },
  {
    "id": "mid-open-game-battery",
    "category": "Middlegame",
    "theme": "Targeting Weakened f7 in Open Games",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Mirror structures with full development. Find the sharpest pin/improvement!",
    "moves": [
      "Bg5"
    ],
    "acceptAlso": [
      "Na4",
      "a4"
    ],
    "explanation": "Bg5 — Pinning the f6 knight initiates real tactical pressure on d5 and f6."
  },
  {
    "id": "mid-kingside-weakness-h6",
    "category": "Middlegame",
    "theme": "Exploiting g6/h6 King Shelter Holes",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "r2q1rk1/pp1nbpp1/2p1pn1p/3p4/3P1B2/2NBPN2/PPQ2PPP/R4RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. In a Queen’s Gambit middlegame, prepare the cleanest queenside/central expansion!",
    "moves": [
      "h3"
    ],
    "acceptAlso": [
      "Qe2",
      "h4"
    ],
    "explanation": "h3 — Maintaining the f4 bishop on the h2-b8 diagonal avoids ...Nh5 trades."
  },
  {
    "id": "mid-attack-weak-e5",
    "category": "Middlegame",
    "theme": "Central Initiative with Heavy Pieces",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "2rq1rk1/pp1nbppp/2p1pn2/3p4/3P1B2/2NBPN2/PPQ2PPP/2RR2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. All minor pieces are developed. Open lines or improve rook/knight activity cleanly!",
    "moves": [
      "Bg3"
    ],
    "acceptAlso": [
      "Qe2",
      "h3",
      "Be5"
    ],
    "explanation": "Bg3 repositions the bishop to g3, executing the strongest Stockfish 19 continuation for central initiative with heavy pieces."
  },
  {
    "id": "mid-double-file-break",
    "category": "Middlegame",
    "theme": "Opening Central Lines Ahead in Development",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r2qkb1r/pb1n1ppp/1pp1pn2/3p4/3P4/2NBPN2/PPQ2PPP/R1B2RK1 w kq - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s king has not yet castled. Strike immediately to open the position!",
    "moves": [
      "e4"
    ],
    "acceptAlso": [
      "Qe2",
      "Rd1"
    ],
    "explanation": "e4 — Advancing e4 prizes open the center before Black’s king reaches safety."
  },
  {
    "id": "mid-counter-center-strike",
    "category": "Middlegame",
    "theme": "Countering a Flank Attack in the Center",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r1bq1rk1/pp1nbpp1/2p1p2p/3p4/3P3P/2NBPN2/PPQ2PP1/R1B2RK1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White launched 1.h4 on the kingside! Respond immediately with central counterplay!",
    "moves": [
      "c5"
    ],
    "acceptAlso": [
      "Bd6",
      "Bxh4"
    ],
    "explanation": "c5 — A flank attack must be met by striking the center with ...c5."
  },
  {
    "id": "mid-dragon-opp-storm-g4",
    "category": "Middlegame",
    "theme": "Opposite-Side Castling Pawn Storm (g4)",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1r3k1/pp1bppbp/2np1np1/q7/3NP3/1BN1BP2/PPPQ2PP/2KR3R w - - 9 12",
    "sideToMove": "White",
    "prompt": "White to move in the Sicilian Dragon Yugoslav Attack. Both sides have castled on opposite flanks. Launch your kingside pawn storm before Black doubles on the c-file!",
    "moves": [
      "g4"
    ],
    "explanation": "g4! — Thrusting g4-g5 aims to open the h-file and kick away Black’s f6 defender as fast as possible in the opposite-wing race."
  },
  {
    "id": "mid-english-opp-storm-g5",
    "category": "Middlegame",
    "theme": "English Attack Kingside Pawn Storm (g5)",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r2q1rk1/3nbppp/p2pbn2/1p2p3/4P1P1/1NN1BP2/PPPQ3P/2KR1B1R w - b6 0 12",
    "sideToMove": "White",
    "prompt": "White to move in the Najdorf English Attack. Black pushed ...b5 on the queenside; strike immediately on the kingside to seize time and dislodge the f6 knight!",
    "moves": [
      "g5"
    ],
    "explanation": "g5! — Driving the f6 knight back toward h5 or e8 allows White to advance h4-h5 and press the kingside attack."
  },
  {
    "id": "mid-yugoslav-opp-storm-h4",
    "category": "Middlegame",
    "theme": "Opening the h-File with h4-h5",
    "difficulty": "Medium",
    "rating": 1400,
    "fen": "r2qr1k1/p4pbp/2p1b1p1/2Bnp3/4N3/5P2/PPPQ2PP/2KR1B1R w - - 4 15",
    "sideToMove": "White",
    "prompt": "White to move against Black’s fianchettoed kingside. Your e4 knight and c5 bishop restrict Black’s pieces — launch the flank pawn to crack open the h-file!",
    "moves": [
      "h4"
    ],
    "explanation": "h4! — Advancing h4-h5 directly targets Black’s g6 hook to open the h-file for the rook on h1."
  },
  {
    "id": "mid-dragon-counter-h5",
    "category": "Middlegame",
    "theme": "Stopping the Flank Pawn Storm in the Dragon",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "2rq1rk1/pp1bppbp/3p1np1/4n3/3NP2P/1BN1BP2/PPPQ2P1/2KR3R b - h3 0 12",
    "sideToMove": "Black",
    "prompt": "Black to move. White just pushed h4 threatening h5 to rip open the h-file. Halt White’s kingside storm on the spot!",
    "moves": [
      "h5"
    ],
    "explanation": "h5! — Boldly halting White’s h-pawn keeps the kingside closed for now, freeing Black to unleash ...Nc4 and ...Rxc3 counterplay."
  },
  {
    "id": "mid-dragon-exchange-sac-rxc3",
    "category": "Middlegame",
    "theme": "Classic Sicilian Exchange Sacrifice on c3",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "r1r3k1/pp2ppbp/3pbnp1/q7/3BP1PP/2N2P2/PPPQ4/1K1R1B1R b - h3 0 13",
    "sideToMove": "Black",
    "prompt": "Black to move in the Sicilian Dragon. Both queenside attackers eye c3 and a2 while White pushes on the kingside. Unleash the signature Sicilian exchange sacrifice!",
    "moves": [
      "Rxc3"
    ],
    "explanation": "Rxc3! — Shattering White’s queenside pawn cover creates devastating dark-square pressure around b1/a2 after ...Qxa2+ or ...Bxd4."
  },
  {
    "id": "mid-dragon-exchange-sac-c3",
    "category": "Middlegame",
    "theme": "Counter-Attacking Exchange Sacrifice on c3",
    "difficulty": "Advanced",
    "rating": 1600,
    "fen": "2rq1rk1/pp1bpp1p/3p1npQ/4n3/3NP1PP/2N2P2/PPP5/2KR1B1R b - - 0 13",
    "sideToMove": "Black",
    "prompt": "Black to move under kingside pressure after White’s queen reached h6. Create immediate queenside counterplay before White finishes mating threats!",
    "moves": [
      "Rxc3"
    ],
    "explanation": "Rxc3! — Smashing the c3 knight wrecks White’s king shelter and forces ...Qa5 pressure against a2, seizing vital initiative."
  },
  {
    "id": "mid-sicilian-rxc3-b2",
    "category": "Middlegame",
    "theme": "Thematic ...Rxc3 Wrecking Queenside Shelter",
    "difficulty": "Advanced",
    "rating": 1590,
    "fen": "2r3k1/pp1bppbp/3p1np1/q6P/2rNP1P1/2N1BP2/PPPQ4/1K1R3R b - - 0 16",
    "sideToMove": "Black",
    "prompt": "Black to move. Your second rook on c8 backs up the rook already stationed on c4. Sacrifice the exchange to tear open White’s castled king!",
    "moves": [
      "Rxc3"
    ],
    "explanation": "Rxc3! — With two rooks stacked on the c-file and ...Qa5 waiting, eliminating the c3 defender leaves White’s king exposed along the dark squares."
  },
  {
    "id": "mid-winawer-greek-gift-3ply",
    "category": "Middlegame",
    "theme": "Greek Gift Attack in the French Winawer",
    "difficulty": "Advanced",
    "rating": 1640,
    "fen": "r1bq1rk1/pp2nppp/2n1p3/2ppP3/3P4/P1PB1N2/2P2PPP/R1BQK2R w KQ - 5 9",
    "sideToMove": "White",
    "prompt": "White to move after Black just castled ...O-O into a waiting Bd3 + Nf3 + e5 clamp. Execute the classic Greek Gift sacrifice and its crushing follow-up check!",
    "moves": [
      "Bxh7+",
      "Kxh7",
      "Ng5+"
    ],
    "explanation": "Bxh7+! — After 1...Kxh7 2.Ng5+, Black’s king is dragged forward before Qh5/Qd3+ delivers a decisive kingside storm."
  },
  {
    "id": "mid-french-greek-gift",
    "category": "Middlegame",
    "theme": "Classical Greek Gift Sacrifice on h7",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "r1bq1rk1/pp1n1ppp/2n1p3/2bpP3/5B2/2NB1N2/PPP2PPP/R2QK2R w KQ - 2 9",
    "sideToMove": "White",
    "prompt": "White to move. No defender guards h7 and Black’s light squares look weak. Unleash the classic bishop sacrifice to tear open the Black king!",
    "moves": [
      "Bxh7+"
    ],
    "explanation": "Bxh7+! — With Ng5+ and Qh5 poised behind the sacrifice, Black cannot accept safely without walking into a crushing attack."
  },
  {
    "id": "mid-greek-gift-rh3",
    "category": "Middlegame",
    "theme": "Greek Gift Combined with Rook Lift",
    "difficulty": "Advanced",
    "rating": 1660,
    "fen": "r1bq1rk1/pp1nbppp/2p1p3/3pP3/3P4/3B1R2/PPP2PPP/RNBQ2K1 w - - 0 10",
    "sideToMove": "White",
    "prompt": "White to move. Your rook has already lifted to f3 beside the d3 bishop. Combine the classic bishop sacrifice with a devastating rook check!",
    "moves": [
      "Bxh7+",
      "Kxh7",
      "Rh3+"
    ],
    "explanation": "Bxh7+! — After 1...Kxh7 2.Rh3+, the lifted rook joins Qh5 with decisive force along the h-file."
  },
  {
    "id": "mid-uncastled-central-e5",
    "category": "Middlegame",
    "theme": "Central Break Against an Uncastled King",
    "difficulty": "Easy",
    "rating": 1180,
    "fen": "r1bqk2r/pp1nbppp/2p1pn2/8/2BPP3/2N2N2/PP3PPP/R1BQR1K1 w kq - 2 9",
    "sideToMove": "White",
    "prompt": "White to move. Your rook sits on the e-file facing Black’s uncastled king on e8. Strike immediately to drive Black’s knight back and seize central space!",
    "moves": [
      "e5"
    ],
    "explanation": "e5! — Pushing e5 exploits Black’s lag in development, kicks the f6 knight away from defending the kingside, and blasts open lines toward e8."
  },
  {
    "id": "mid-max-lange-central-e5",
    "category": "Middlegame",
    "theme": "Max Lange Central Thrust Against e8",
    "difficulty": "Medium",
    "rating": 1290,
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/5N2/PPP2PPP/RNBQ1RK1 w kq - 2 6",
    "sideToMove": "White",
    "prompt": "White to move after castling early while Black’s king remains on e8. Drive a central wedge before Black stabilizes!",
    "moves": [
      "e5"
    ],
    "explanation": "e5! — Striking at the f6 knight immediately forces sharp complications (5...d5 6.exf6) while Black’s king stays uncastled."
  },
  {
    "id": "mid-evans-bishop-sac-bxf7",
    "category": "Middlegame",
    "theme": "Evans Gambit Bishop Sacrifice on f7",
    "difficulty": "Medium",
    "rating": 1450,
    "fen": "r2qk1nr/pppb1ppp/1b1p4/n7/2BPP3/1QN2N2/P4PPP/R1B2RK1 w kq - 7 12",
    "sideToMove": "White",
    "prompt": "White to move. Black threatens ...Nxc4 to eliminate your attacking bishop while its king sits on e8. Find the sharp sacrifice that exposes the enemy king!",
    "moves": [
      "Bxf7+"
    ],
    "explanation": "Bxf7+! — Sacrificing on f7 before losing the bishop strips Black’s castling rights and activates White’s queen and knights against the exposed king."
  },
  {
    "id": "mid-italian-bishop-sac-bxf7",
    "category": "Middlegame",
    "theme": "Italian Game Double-Bishop Assault on f7",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "r1bq1rk1/ppp2ppp/2n5/3B4/3P4/1Qb2N2/P4PPP/R1B2RK1 w - - 1 12",
    "sideToMove": "White",
    "prompt": "White to move. Both your queen on b3 and bishop on d5 aim at f7 while Black’s bishop just captured on c3. Strike before recapturing!",
    "moves": [
      "Bxf7+"
    ],
    "explanation": "Bxf7+! — Firing the intermediate sacrifice first tears open Black’s king cover before White builds a fierce attack after ...Rxf7 Ng5 or Qxc3."
  },
  {
    "id": "mid-dragon-bishop-sac-bxh6",
    "category": "Middlegame",
    "theme": "Destructive Bishop Sacrifice on h6",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "2rq1rk1/pp1bppb1/3p1npp/4n3/3NP2P/1BN1BP2/PPPQ2P1/2KR3R w - - 0 13",
    "sideToMove": "White",
    "prompt": "White to move. Black just played ...h6 trying to keep White out of the h6 outpost, but your Qd2 + Be3 battery sits right on the c1-h6 diagonal. Crash through!",
    "moves": [
      "Bxh6"
    ],
    "explanation": "Bxh6! — Eliminating the h6 defender rips open the kingside and leaves Black’s dark squares around g7 and h8 completely defenseless."
  },
  {
    "id": "mid-zukertort-rook-lift-rf3",
    "category": "Middlegame",
    "theme": "Zukertort Rook Lift to f3",
    "difficulty": "Medium",
    "rating": 1430,
    "fen": "2r2rk1/pb2qppp/1pnbpn2/2ppN3/3P1P2/PP1BP3/1BPN2PP/R2Q1RK1 w - - 1 12",
    "sideToMove": "White",
    "prompt": "White to move with a commanding e5 outpost and strong bishops aimed at h7. Lift the f1 rook into the kingside attack!",
    "moves": [
      "Rf3"
    ],
    "explanation": "Rf3! — Lifting the rook prepares Rh3 and Bxh7+ attacks while keeping Black tied down against f4-f5 breakthroughs."
  },
  {
    "id": "mid-stonewall-rook-lift-rh3",
    "category": "Middlegame",
    "theme": "Completing the Rook Lift on h3",
    "difficulty": "Medium",
    "rating": 1460,
    "fen": "r2q1rk1/pb2nppp/1p1bpn2/2ppN3/3P1P2/2PBPR2/PP1N2PP/R1BQ2K1 w - - 2 11",
    "sideToMove": "White",
    "prompt": "White to move in the Stonewall Attack. Your rook already stands on f3 and your d3 bishop targets h7. Swing the rook onto the h-file!",
    "moves": [
      "Rh3"
    ],
    "explanation": "Rh3! — Shifting the rook to h3 turns up the pressure on h7 and pairs with Bxh7+ or Qe1-h4 mating patterns."
  },
  {
    "id": "mid-qgd-qb-battery-qc2",
    "category": "Middlegame",
    "theme": "Building a Queen-Bishop Battery on the b1-h7 Diagonal",
    "difficulty": "Easy",
    "rating": 1160,
    "fen": "r1bqr1k1/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PP2NPPP/R2Q1RK1 w - - 6 10",
    "sideToMove": "White",
    "prompt": "White to move in the Carlsbad structure. Align your queen behind the d3 bishop to aim directly at Black’s castled h7 square!",
    "moves": [
      "Qc2"
    ],
    "explanation": "Qc2! — Forming the classic Qc2 + Bd3 battery targets h7, clears d1/e1 for rooks, and supports central or kingside advances."
  },
  {
    "id": "mid-sicilian-center-counter-e5",
    "category": "Middlegame",
    "theme": "Counterattacking the Keres Wing Thrust in the Center",
    "difficulty": "Easy",
    "rating": 1190,
    "fen": "rnbqkb1r/1p3ppp/p2ppn2/8/3NP1P1/2N1B3/PPP2P1P/R2QKB1R b KQkq g3 0 7",
    "sideToMove": "Black",
    "prompt": "Black to move. White launched an early 6.g4 Keres Attack on the kingside! Strike back in the center immediately before g5 kicks your knight!",
    "moves": [
      "e5"
    ],
    "explanation": "e5! — Meeting a premature flank push with a direct central counterstrike drives the d4 knight back and grabs vital central territory."
  },
  {
    "id": "mid-wing-attack-center-d5",
    "category": "Middlegame",
    "theme": "Central Counterbreak Against Kingside Pawn Expansion",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1b1kb1r/2qp1ppp/p1p1pn2/8/4PP2/2NB4/PPP3PP/R1BQ1RK1 b kq f3 0 9",
    "sideToMove": "Black",
    "prompt": "Black to move. White pushed e4-f4 preparing e5 against your f6 knight. Open and challenge the center right away!",
    "moves": [
      "d5"
    ],
    "explanation": "d5! — Striking at the center immediately prevents White from rolling over the kingside unchallenged with e5."
  },
  {
    "id": "mid-greekgift-bxh7-1",
    "category": "Middlegame",
    "theme": "Classic Greek Gift Sacrifice on h7 (Wang Hao vs Adams, 2012)",
    "difficulty": "Advanced",
    "rating": 1622,
    "fen": "r2q1rk1/pp3ppp/8/2P1n3/8/P2BnP2/1B3P1P/R2Q1RK1 w - - 0 16",
    "sideToMove": "White",
    "prompt": "White to move. Black’s castled shelter is vulnerable on h7. Execute the classic bishop sacrifice and its 3-ply forcing follow-up!",
    "moves": [
      "Bxh7+",
      "Kxh7",
      "fxe3"
    ],
    "explanation": "Bxh7+ Kxh7 fxe3 — Sacrificing on h7 drags Black’s king into the open, allowing fxe3 to seize decisive attacking momentum."
  },
  {
    "id": "mid-greekgift-bxh2-2",
    "category": "Middlegame",
    "theme": "Crushing Kingside Bishop Sacrifice on h2 (Leko vs Anand, 2005)",
    "difficulty": "Advanced",
    "rating": 1612,
    "fen": "r6k/ppp3pp/5q2/3pbp1B/1P2n3/1QP5/PB3PPP/R3R1K1 b - - 0 21",
    "sideToMove": "Black",
    "prompt": "Black to move. White’s castled shelter is vulnerable on h2. Execute the classic bishop sacrifice and its 3-ply forcing follow-up!",
    "moves": [
      "Bxh2+",
      "Kxh2",
      "Qh4+"
    ],
    "explanation": "Bxh2+ Kxh2 Qh4+ — Sacrificing on h2 drags White’s king into the open, allowing Qh4+ to seize decisive attacking momentum."
  },
  {
    "id": "mid-greekgift-bxh2-3",
    "category": "Middlegame",
    "theme": "Tearing Open the Castled King via h2 (Gelfand vs Anand, 2012)",
    "difficulty": "Advanced",
    "rating": 1590,
    "fen": "2r1r1k1/pp1b1pp1/1q5p/3P4/P2BB3/R5b1/3Q1P1P/1R4K1 b - - 0 23",
    "sideToMove": "Black",
    "prompt": "Black to move. White’s castled shelter is vulnerable on h2. Execute the classic bishop sacrifice and its 3-ply forcing follow-up!",
    "moves": [
      "Bxh2+",
      "Kxh2",
      "Qd6+"
    ],
    "explanation": "Bxh2+ Kxh2 Qd6+ — Sacrificing on h2 drags White’s king into the open, allowing Qd6+ to seize decisive attacking momentum."
  },
  {
    "id": "mid-greekgift-bxh2-4",
    "category": "Middlegame",
    "theme": "Classic Greek Gift Sacrifice on h2 (Anand vs Vachier-Lagrave, 2015)",
    "difficulty": "Medium",
    "rating": 1477,
    "fen": "5r1k/6pp/3qN3/8/2B1pb2/8/1p3PPP/3R1RK1 b - - 3 32",
    "sideToMove": "Black",
    "prompt": "Black to move. White’s king lacks defenders around h2. Launch the decisive kingside bishop sacrifice!",
    "moves": [
      "Bxh2+"
    ],
    "explanation": "Bxh2+ — Eliminating the h2 shield exposes White’s king to an irresistible kingside assault."
  },
  {
    "id": "mid-greekgift-bxh7-5",
    "category": "Middlegame",
    "theme": "Crushing Kingside Bishop Sacrifice on h7 (Timman vs Salov, 1988)",
    "difficulty": "Medium",
    "rating": 1462,
    "fen": "r2q1rk1/pp3ppp/n1p5/2npP3/6b1/P2B4/1PQ2PPP/RNB2RK1 w - - 0 14",
    "sideToMove": "White",
    "prompt": "White to move. Black’s king lacks defenders around h7. Launch the decisive kingside bishop sacrifice!",
    "moves": [
      "Bxh7+"
    ],
    "explanation": "Bxh7+ — Eliminating the h7 shield exposes Black’s king to an irresistible kingside assault."
  },
  {
    "id": "mid-greekgift-bxh7-6",
    "category": "Middlegame",
    "theme": "Tearing Open the Castled King via h7 (Carlsen vs Radjabov, 2009)",
    "difficulty": "Advanced",
    "rating": 1716,
    "fen": "3q1rkn/6pp/p3p3/1p1bN2P/8/r2BQ1P1/5P2/2RR2K1 w - - 0 27",
    "sideToMove": "White",
    "prompt": "White to move. Black’s castled shelter is vulnerable on h7. Execute the classic bishop sacrifice and its 3-ply forcing follow-up!",
    "moves": [
      "Bxh7+",
      "Kxh7",
      "Qxa3"
    ],
    "explanation": "Bxh7+ Kxh7 Qxa3 — Sacrificing on h7 drags Black’s king into the open, allowing Qxa3 to seize decisive attacking momentum."
  },
  {
    "id": "mid-greekgift-bxh7-7",
    "category": "Middlegame",
    "theme": "Classic Greek Gift Sacrifice on h7 (Giri vs Grischuk, 2015)",
    "difficulty": "Medium",
    "rating": 1432,
    "fen": "1r4k1/p3bppp/q3p3/4N3/2NPB3/2B3PP/P1Q2P1K/5r2 w - - 1 32",
    "sideToMove": "White",
    "prompt": "White to move. Black’s king lacks defenders around h7. Launch the decisive kingside bishop sacrifice!",
    "moves": [
      "Bxh7+"
    ],
    "explanation": "Bxh7+ — Eliminating the h7 shield exposes Black’s king to an irresistible kingside assault."
  },
  {
    "id": "mid-centralbreak-e5-8",
    "category": "Middlegame",
    "theme": "Central Break with e5 (Gukesh vs Ding, 2024)",
    "difficulty": "Advanced",
    "rating": 1631,
    "fen": "6k1/1p1b2pp/4p3/3p4/1PqB2PP/p2nQ3/P7/5BK1 b - - 0 34",
    "sideToMove": "Black",
    "prompt": "Black to move. Seize the central tension by finding the sharp pawn break and its 3-ply tactical continuation!",
    "moves": [
      "e5",
      "Bxe5",
      "Qxg4+"
    ],
    "explanation": "e5 Bxe5 Qxg4+ — Breaking in the center by advancing to e5 disrupts White’s coordination before Qxg4+ consolidates the advantage."
  },
  {
    "id": "mid-centralbreak-dxc5-9",
    "category": "Middlegame",
    "theme": "Central Break with dxc5 (Gukesh vs Ding, 2024)",
    "difficulty": "Advanced",
    "rating": 1547,
    "fen": "1r4k1/q3bppp/1N2pn2/2p5/3P4/5BP1/r3PP1P/1QRR2K1 w - - 3 23",
    "sideToMove": "White",
    "prompt": "White to move. Seize the central tension by finding the sharp pawn break and its 3-ply tactical continuation!",
    "moves": [
      "dxc5",
      "Ra5",
      "c6"
    ],
    "explanation": "dxc5 Ra5 c6 — Breaking in the center by capturing on c5 disrupts Black’s coordination before c6 consolidates the advantage."
  },
  {
    "id": "mid-centralbreak-dxe4-10",
    "category": "Middlegame",
    "theme": "Central Break with dxe4 (Ding vs Gukesh, 2024)",
    "difficulty": "Advanced",
    "rating": 1665,
    "fen": "r1b2rk1/p4ppp/2pq4/2ppp3/3PN3/Q1P1P3/PP3PPP/RN2K2R b KQ - 0 12",
    "sideToMove": "Black",
    "prompt": "Black to move. Seize the central tension by finding the sharp pawn break and its 3-ply tactical continuation!",
    "moves": [
      "dxe4",
      "Qxc5",
      "Qg6"
    ],
    "explanation": "dxe4 Qxc5 Qg6 — Breaking in the center by capturing on e4 disrupts White’s coordination before Qg6 consolidates the advantage."
  },
  {
    "id": "mid-centralbreak-bxc5-11",
    "category": "Middlegame",
    "theme": "Central Break with bxc5 (Ding vs Gukesh, 2024)",
    "difficulty": "Medium",
    "rating": 1354,
    "fen": "3r2k1/5pp1/1p5p/2P5/4q3/1Q2P2P/5PP1/R5K1 b - - 0 27",
    "sideToMove": "Black",
    "prompt": "Black to move. Time the central pawn break cleanly to open lines and seize the initiative!",
    "moves": [
      "bxc5"
    ],
    "explanation": "bxc5 — This timely central thrust opens key files and diagonals while keeping White’s pieces under pressure."
  },
  {
    "id": "mid-centralbreak-cxd5-12",
    "category": "Middlegame",
    "theme": "Central Break with cxd5 (Ding vs Gukesh, 2024)",
    "difficulty": "Advanced",
    "rating": 1526,
    "fen": "3r1rk1/1p1q1pp1/2nP2bp/2pn4/p1P2B2/P1Q3PP/1P3PBK/3RR3 w - - 0 32",
    "sideToMove": "White",
    "prompt": "White to move. Seize the central tension by finding the sharp pawn break and its 3-ply tactical continuation!",
    "moves": [
      "cxd5",
      "Na7",
      "Qxc5"
    ],
    "explanation": "cxd5 Na7 Qxc5 — Breaking in the center by capturing on d5 disrupts Black’s coordination before Qxc5 consolidates the advantage."
  },
  {
    "id": "mid-centralbreak-exd5-13",
    "category": "Middlegame",
    "theme": "Central Break with exd5 (Gukesh vs Ding, 2024)",
    "difficulty": "Medium",
    "rating": 1417,
    "fen": "rn1q1rk1/pp3pbp/5np1/2pp4/2p1P3/5BPP/PP1N1P2/R1BQR1K1 w - - 0 13",
    "sideToMove": "White",
    "prompt": "White to move. Time the central pawn break cleanly to open lines and seize the initiative!",
    "moves": [
      "exd5"
    ],
    "explanation": "exd5 — This timely central thrust opens key files and diagonals while keeping Black’s pieces under pressure."
  },
  {
    "id": "mid-centralbreak-fxe4-14",
    "category": "Middlegame",
    "theme": "Central Break with fxe4 (Gukesh vs Ding, 2024)",
    "difficulty": "Advanced",
    "rating": 1597,
    "fen": "r3kb2/pp1n1pn1/2p3p1/6Pr/3Pp3/1PN2PB1/1PbN4/R3KBR1 w Qq - 0 20",
    "sideToMove": "White",
    "prompt": "White to move. Seize the central tension by finding the sharp pawn break and its 3-ply tactical continuation!",
    "moves": [
      "fxe4",
      "Ne6",
      "Bf2"
    ],
    "explanation": "fxe4 Ne6 Bf2 — Breaking in the center by capturing on e4 disrupts Black’s coordination before Bf2 consolidates the advantage."
  },
  {
    "id": "mid-centralbreak-d5-15",
    "category": "Middlegame",
    "theme": "Central Break with d5 (Ding vs Nepomniachtchi, 2023)",
    "difficulty": "Medium",
    "rating": 1397,
    "fen": "r3r1k1/ppp2ppp/7q/n1p1P3/3P1pb1/2PB4/P1QN1PPP/R3R1K1 w - - 1 17",
    "sideToMove": "White",
    "prompt": "White to move. Time the central pawn break cleanly to open lines and seize the initiative!",
    "moves": [
      "d5"
    ],
    "explanation": "d5 — This timely central thrust opens key files and diagonals while keeping Black’s pieces under pressure."
  },
  {
    "id": "mid-centralbreak-e5-16",
    "category": "Middlegame",
    "theme": "Central Break with e5 (Tartakower vs Najdorf, 1948)",
    "difficulty": "Advanced",
    "rating": 1584,
    "fen": "r1b1r1k1/1p2qpp1/pQnRp2p/8/P1B5/2P2N2/5PPP/3R2K1 b - - 1 19",
    "sideToMove": "Black",
    "prompt": "Black to move. Seize the central tension by finding the sharp pawn break and its 3-ply tactical continuation!",
    "moves": [
      "e5",
      "h3",
      "e4"
    ],
    "explanation": "e5 h3 e4 — Breaking in the center by advancing to e5 disrupts White’s coordination before e4 consolidates the advantage."
  },
  {
    "id": "mid-exchangesac-rxg7-17",
    "category": "Middlegame",
    "theme": "Thematic Exchange Sacrifice on g7 (Stoltz vs Steiner, 1952)",
    "difficulty": "Advanced",
    "rating": 1708,
    "fen": "r5k1/ppp1n1nR/3p2P1/3P4/2P2Pq1/1P3p2/PB3P2/2KR4 w - - 1 29",
    "sideToMove": "White",
    "prompt": "White to move. Spot the thematic exchange sacrifice on g7 and follow through with the 3-ply plan!",
    "moves": [
      "Rxg7+",
      "Kf8",
      "Rf7+"
    ],
    "explanation": "Rxg7+ Kf8 Rf7+ — Giving up the rook for the knight on g7 shatters Black’s structure and hands White lasting initiative via Rf7+."
  },
  {
    "id": "mid-exchangesac-rxd6-18",
    "category": "Middlegame",
    "theme": "Thematic Exchange Sacrifice on d6 (Ding vs Nepomniachtchi, 2023)",
    "difficulty": "Medium",
    "rating": 1372,
    "fen": "r1b2k1r/pp3p2/3b4/6p1/2P4p/2P5/P3BPPP/3R1RK1 w - - 0 19",
    "sideToMove": "White",
    "prompt": "White to move. Material counts less than dynamic activity — unleash the positional exchange sacrifice!",
    "moves": [
      "Rxd6"
    ],
    "explanation": "Rxd6 — Sacrificing the exchange for Black’s key bishop on d6 yields dominant dark/light-square control and attacking lines."
  },
  {
    "id": "mid-exchangesac-rxc6-19",
    "category": "Middlegame",
    "theme": "Thematic Exchange Sacrifice on c6 (Anand vs Topalov, 2010)",
    "difficulty": "Medium",
    "rating": 1361,
    "fen": "1b1rr1k1/5ppp/1pb1pn2/p2n4/P2p1P2/3N2P1/P1RBP1BP/2R3K1 w - - 0 24",
    "sideToMove": "White",
    "prompt": "White to move. Material counts less than dynamic activity — unleash the positional exchange sacrifice!",
    "moves": [
      "Rxc6"
    ],
    "explanation": "Rxc6 — Sacrificing the exchange for Black’s key bishop on c6 yields dominant dark/light-square control and attacking lines."
  },
  {
    "id": "mid-exchangesac-rxh7-20",
    "category": "Middlegame",
    "theme": "Thematic Exchange Sacrifice on h7 (Stoltz vs Steiner, 1952)",
    "difficulty": "Advanced",
    "rating": 1625,
    "fen": "r6k/ppp1n1nb/3p2P1/3P4/2P2Pq1/1P3p2/PB3P2/2KR3R w - - 0 28",
    "sideToMove": "White",
    "prompt": "White to move. Spot the thematic exchange sacrifice on h7 and follow through with the 3-ply plan!",
    "moves": [
      "Rxh7+",
      "Kg8",
      "Rxg7+"
    ],
    "explanation": "Rxh7+ Kg8 Rxg7+ — Giving up the rook for the bishop on h7 shatters Black’s structure and hands White lasting initiative via Rxg7+."
  },
  {
    "id": "mid-exchangesac-rxd4-21",
    "category": "Middlegame",
    "theme": "Thematic Exchange Sacrifice on d4 (Carlsen vs Anand, 2013)",
    "difficulty": "Medium",
    "rating": 1329,
    "fen": "2rr2k1/1p1n1pp1/p2pp2p/7q/P1PbP3/1PR4P/1Q2NPP1/3R2K1 w - - 0 25",
    "sideToMove": "White",
    "prompt": "White to move. Material counts less than dynamic activity — unleash the positional exchange sacrifice!",
    "moves": [
      "Rxd4"
    ],
    "explanation": "Rxd4 — Sacrificing the exchange for Black’s key bishop on d4 yields dominant dark/light-square control and attacking lines."
  },
  {
    "id": "mid-exchangesac-rxf6-22",
    "category": "Middlegame",
    "theme": "Thematic Exchange Sacrifice on f6 (Bronstein vs Fuster, 1958)",
    "difficulty": "Advanced",
    "rating": 1601,
    "fen": "6rk/pp2q2p/2p1pb1Q/8/1P6/P1P3rP/2B2R2/5R1K w - - 0 38",
    "sideToMove": "White",
    "prompt": "White to move. Spot the thematic exchange sacrifice on f6 and follow through with the 3-ply plan!",
    "moves": [
      "Rxf6",
      "Rg2",
      "Be4"
    ],
    "explanation": "Rxf6 Rg2 Be4 — Giving up the rook for the bishop on f6 shatters Black’s structure and hands White lasting initiative via Be4."
  },
  {
    "id": "mid-exchangesac-rxe7-23",
    "category": "Middlegame",
    "theme": "Thematic Exchange Sacrifice on e7 (Fischer vs Barczay, 1967)",
    "difficulty": "Medium",
    "rating": 1449,
    "fen": "2r2rk1/3nb1pp/p3R3/qppp4/3P4/1P3N1P/P1Q2PP1/R5K1 w - - 0 23",
    "sideToMove": "White",
    "prompt": "White to move. Material counts less than dynamic activity — unleash the positional exchange sacrifice!",
    "moves": [
      "Rxe7"
    ],
    "explanation": "Rxe7 — Sacrificing the exchange for Black’s key bishop on e7 yields dominant dark/light-square control and attacking lines."
  },
  {
    "id": "mid-exchangesac-rxc2-24",
    "category": "Middlegame",
    "theme": "Thematic Exchange Sacrifice on c2 (Gukesh vs Ding, 2024)",
    "difficulty": "Medium",
    "rating": 1446,
    "fen": "r3k3/pp1n1pb1/2p3p1/6Pr/4P3/1n6/1PbNNB2/2R1KBR1 w q - 0 24",
    "sideToMove": "White",
    "prompt": "White to move. Material counts less than dynamic activity — unleash the positional exchange sacrifice!",
    "moves": [
      "Rxc2"
    ],
    "explanation": "Rxc2 — Sacrificing the exchange for Black’s key bishop on c2 yields dominant dark/light-square control and attacking lines."
  },
  {
    "id": "mid-exchangesac-rxd7-25",
    "category": "Middlegame",
    "theme": "Thematic Exchange Sacrifice on d7 (Kortschnoj vs Kavalek, 1967)",
    "difficulty": "Advanced",
    "rating": 1671,
    "fen": "1rb3k1/R2n1p1p/3Q2p1/1p1Pr3/8/1q2P1PP/5PB1/5RK1 w - - 0 27",
    "sideToMove": "White",
    "prompt": "White to move. Spot the thematic exchange sacrifice on d7 and follow through with the 3-ply plan!",
    "moves": [
      "Rxd7",
      "Bxd7",
      "Qxb8+"
    ],
    "explanation": "Rxd7 Bxd7 Qxb8+ — Giving up the rook for the knight on d7 shatters Black’s structure and hands White lasting initiative via Qxb8+."
  },
  {
    "id": "mid-oppcastle-cxb3-26",
    "category": "Middlegame",
    "theme": "Opposite-Side Castling Pawn Storm (cxb3) (Anand vs Carlsen, 2013)",
    "difficulty": "Advanced",
    "rating": 1633,
    "fen": "r1k4r/p1p2pp1/1p4np/4P3/2p5/1P5P/b1PRNPP1/2NR2K1 b - - 1 20",
    "sideToMove": "Black",
    "prompt": "Black to move in an opposite-side castling race. Crack open lines against White’s king in a sharp 3-ply sequence!",
    "moves": [
      "cxb3",
      "cxb3",
      "Bb1"
    ],
    "explanation": "cxb3 cxb3 Bb1 — Opening the flank on b3 accelerates the wing storm and sets up Bb1 against the enemy king."
  },
  {
    "id": "mid-oppcastle-h4-27",
    "category": "Middlegame",
    "theme": "Opposite-Side Castling Pawn Storm (h4) (Stoltz vs Steiner, 1952)",
    "difficulty": "Medium",
    "rating": 1373,
    "fen": "r1bq1r1k/ppp3n1/2np2Q1/3N2b1/2PP1N2/1P3pP1/PB3P1P/2KR3R w - - 1 19",
    "sideToMove": "White",
    "prompt": "White to move with kings castled on opposite wings. Push the flank pawn advance that opens lines first!",
    "moves": [
      "h4"
    ],
    "explanation": "h4 — In opposite-side castling, opening files on the enemy king’s wing outweighs slow central maneuvering."
  },
  {
    "id": "mid-oppcastle-bxa4-28",
    "category": "Middlegame",
    "theme": "Opposite-Side Castling Pawn Storm (bxa4) (Carlsen vs Anand, 2014)",
    "difficulty": "Medium",
    "rating": 1422,
    "fen": "r2r1b2/1kp2p2/4bNnp/p1pNP1p1/p1P3P1/1PB3KP/5P2/3RR3 w - - 0 25",
    "sideToMove": "White",
    "prompt": "White to move with kings castled on opposite wings. Push the flank pawn advance that opens lines first!",
    "moves": [
      "bxa4"
    ],
    "explanation": "bxa4 — In opposite-side castling, opening files on the enemy king’s wing outweighs slow central maneuvering."
  },
  {
    "id": "mid-oppcastle-b6-29",
    "category": "Middlegame",
    "theme": "Opposite-Side Castling Pawn Storm (b6) (Anand vs Carlsen, 2013)",
    "difficulty": "Advanced",
    "rating": 1600,
    "fen": "r1k4r/ppp2pp1/4b1np/2p1P3/8/2NN3P/PPPR1PP1/3R2K1 b - - 5 17",
    "sideToMove": "Black",
    "prompt": "Black to move in an opposite-side castling race. Crack open lines against White’s king in a sharp 3-ply sequence!",
    "moves": [
      "b6",
      "b3",
      "c4"
    ],
    "explanation": "b6 b3 c4 — Opening the flank on b6 accelerates the wing storm and sets up c4 against the enemy king."
  },
  {
    "id": "mid-oppcastle-b4-30",
    "category": "Middlegame",
    "theme": "Opposite-Side Castling Pawn Storm (b4) (Pachman vs Barcza, 1952)",
    "difficulty": "Advanced",
    "rating": 1596,
    "fen": "5rk1/6p1/4p2p/P6q/4P3/3Q4/1PP5/2KR4 w - - 4 35",
    "sideToMove": "White",
    "prompt": "White to move in an opposite-side castling race. Crack open lines against Black’s king in a sharp 3-ply sequence!",
    "moves": [
      "b4",
      "Qe5",
      "Qd4"
    ],
    "explanation": "b4 Qe5 Qd4 — Opening the flank on b4 accelerates the wing storm and sets up Qd4 against the enemy king."
  },
  {
    "id": "mid-oppcastle-b3-31",
    "category": "Middlegame",
    "theme": "Opposite-Side Castling Pawn Storm (b3) (Anand vs Gelfand, 2012)",
    "difficulty": "Advanced",
    "rating": 1572,
    "fen": "2r5/1p1b2kp/3P2p1/p7/n6R/5P2/PPr1N1P1/K2R1B2 w - - 2 26",
    "sideToMove": "White",
    "prompt": "White to move in an opposite-side castling race. Crack open lines against Black’s king in a sharp 3-ply sequence!",
    "moves": [
      "b3",
      "Nb2",
      "Rb1"
    ],
    "explanation": "b3 Nb2 Rb1 — Opening the flank on b3 accelerates the wing storm and sets up Rb1 against the enemy king."
  },
  {
    "id": "mid-oppcastle-h3-32",
    "category": "Middlegame",
    "theme": "Opposite-Side Castling Pawn Storm (h3) (Anand vs Kramnik, 2008)",
    "difficulty": "Advanced",
    "rating": 1559,
    "fen": "2kr3r/p5p1/b1p1pn2/7p/1BP1P1n1/P4NK1/6PP/RB5R w - h6 0 23",
    "sideToMove": "White",
    "prompt": "White to move in an opposite-side castling race. Crack open lines against Black’s king in a sharp 3-ply sequence!",
    "moves": [
      "h3",
      "h4+",
      "Nxh4"
    ],
    "explanation": "h3 h4+ Nxh4 — Opening the flank on h3 accelerates the wing storm and sets up Nxh4 against the enemy king."
  },
  {
    "id": "mid-oppcastle-b5-33",
    "category": "Middlegame",
    "theme": "Opposite-Side Castling Pawn Storm (b5) (Anand vs Gelfand, 2012)",
    "difficulty": "Advanced",
    "rating": 1548,
    "fen": "r6r/pp1bbkpp/3p1p2/2pP4/8/1P3N2/PBP2PPP/2KR3R b - - 2 18",
    "sideToMove": "Black",
    "prompt": "Black to move with kings castled on opposite wings. Push the flank pawn advance that opens lines first!",
    "moves": [
      "b5"
    ],
    "explanation": "b5 — In opposite-side castling, opening files on the enemy king’s wing outweighs slow central maneuvering."
  },
  {
    "id": "mid-rooklift-rf6-34",
    "category": "Middlegame",
    "theme": "Attacking Rook Lift to f6 (Portisch vs Pomar Salamanca, 1962)",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "1r3r2/pp5k/3p4/4p3/2PbPpR1/1P3R2/P2B3P/7K b - - 1 28",
    "sideToMove": "Black",
    "prompt": "Black to move. Swing your rook onto the third/sixth rank and follow up accurately over three plies!",
    "moves": [
      "Rf6",
      "Rh3+",
      "Rh6"
    ],
    "explanation": "Rf6 Rh3+ Rh6 — Lifting the rook to f6 activates heavy artillery toward the king before Rh6 piles on decisive pressure."
  },
  {
    "id": "mid-rooklift-rf3-35",
    "category": "Middlegame",
    "theme": "Attacking Rook Lift to f3 (Morozevich vs Aronian, 2007)",
    "difficulty": "Advanced",
    "rating": 1542,
    "fen": "2r3k1/5p1p/1p3Qb1/p2p4/3N1P2/4q2P/6PK/5R2 w - - 0 33",
    "sideToMove": "White",
    "prompt": "White to move. Swing your rook onto the third/sixth rank and follow up accurately over three plies!",
    "moves": [
      "Rf3",
      "Qe8",
      "f5"
    ],
    "explanation": "Rf3 Qe8 f5 — Lifting the rook to f3 activates heavy artillery toward the king before f5 piles on decisive pressure."
  },
  {
    "id": "mid-rooklift-rg3-36",
    "category": "Middlegame",
    "theme": "Attacking Rook Lift to g3 (Anand vs Morozevich, 2007)",
    "difficulty": "Medium",
    "rating": 1431,
    "fen": "5r1k/1p2b1pp/p2p4/4p3/4Pr2/P2R1P1q/NPP1Q2P/1K4R1 w - - 3 26",
    "sideToMove": "White",
    "prompt": "White to move. Bring a heavy piece directly into the attack with a classic rook lift!",
    "moves": [
      "Rg3"
    ],
    "explanation": "Rg3 — The rook lift to g3 rapidly transfers firepower to the attacking wing without needing to open the starting rank."
  },
  {
    "id": "mid-rooklift-rg3-37",
    "category": "Middlegame",
    "theme": "Attacking Rook Lift to g3 (Aronian vs Radjabov, 2008)",
    "difficulty": "Advanced",
    "rating": 1577,
    "fen": "6k1/1p4n1/2pp1bBp/8/1qP2PP1/rP2r2P/2Q1N2K/1R4R1 w - - 3 36",
    "sideToMove": "White",
    "prompt": "White to move. Swing your rook onto the third/sixth rank and follow up accurately over three plies!",
    "moves": [
      "Rg3",
      "Qc5",
      "Qd2"
    ],
    "explanation": "Rg3 Qc5 Qd2 — Lifting the rook to g3 activates heavy artillery toward the king before Qd2 piles on decisive pressure."
  },
  {
    "id": "mid-rooklift-rh3-38",
    "category": "Middlegame",
    "theme": "Attacking Rook Lift to h3 (Anand vs Shirov, 2002)",
    "difficulty": "Advanced",
    "rating": 1563,
    "fen": "8/5pkp/p6p/2Q3b1/2P1p3/PK3Pq1/1P1r2P1/R4B1R w - - 0 30",
    "sideToMove": "White",
    "prompt": "White to move. Swing your rook onto the third/sixth rank and follow up accurately over three plies!",
    "moves": [
      "Rh3",
      "Qb8+",
      "Qb4"
    ],
    "explanation": "Rh3 Qb8+ Qb4 — Lifting the rook to h3 activates heavy artillery toward the king before Qb4 piles on decisive pressure."
  },
  {
    "id": "mid-rooklift-r1h3-39",
    "category": "Middlegame",
    "theme": "Attacking Rook Lift to h3 (Tan Lian Ann vs Smyslov, 1973)",
    "difficulty": "Advanced",
    "rating": 1553,
    "fen": "3r2k1/1b2p1bR/1p3qp1/p3N3/3p1PP1/2P5/2PQ4/1K5R w - - 1 31",
    "sideToMove": "White",
    "prompt": "White to move. Bring a heavy piece directly into the attack with a classic rook lift!",
    "moves": [
      "R1h3"
    ],
    "explanation": "R1h3 — The rook lift to h3 rapidly transfers firepower to the attacking wing without needing to open the starting rank."
  },
  {
    "id": "mid-rooklift-rg6-40",
    "category": "Middlegame",
    "theme": "Attacking Rook Lift to g6 (Ding vs Nepomniachtchi, 2023)",
    "difficulty": "Advanced",
    "rating": 1546,
    "fen": "r5rk/ppq2p1p/3bp3/3p1p1N/3P2Pn/2P1Q2P/PPB2P2/R3R2K b - - 6 20",
    "sideToMove": "Black",
    "prompt": "Black to move. Bring a heavy piece directly into the attack with a classic rook lift!",
    "moves": [
      "Rg6"
    ],
    "explanation": "Rg6 — The rook lift to g6 rapidly transfers firepower to the attacking wing without needing to open the starting rank."
  },
  {
    "id": "mid-queenhunt-rd2-41",
    "category": "Middlegame",
    "theme": "Hunting the Exposed Queen (Rd2) (Ding vs Gukesh, 2024)",
    "difficulty": "Advanced",
    "rating": 1581,
    "fen": "1r3rk1/p4ppp/2p1b3/2Q1P3/2N1p3/2P1P3/PP3q1P/2KR3R w - - 3 18",
    "sideToMove": "White",
    "prompt": "White to move. Black’s queen is dangerously exposed — hunt her down with a forcing 3-ply sequence!",
    "moves": [
      "Rd2",
      "Qf3",
      "Re1"
    ],
    "explanation": "Rd2 Qf3 Re1 — Playing Rd2 immediately threatens the enemy queen and gains tempo for Re1 to seize control."
  },
  {
    "id": "mid-queenhunt-ra3-42",
    "category": "Middlegame",
    "theme": "Hunting the Exposed Queen (Ra3) (Gukesh vs Ding, 2024)",
    "difficulty": "Advanced",
    "rating": 1574,
    "fen": "3r1nk1/p4pbp/5np1/1p1P4/1PpB4/1q3BPP/2NQ1P2/R5K1 w - - 2 24",
    "sideToMove": "White",
    "prompt": "White to move. Black’s queen is dangerously exposed — hunt her down with a forcing 3-ply sequence!",
    "moves": [
      "Ra3",
      "Qb1+",
      "Kg2"
    ],
    "explanation": "Ra3 Qb1+ Kg2 — Playing Ra3 immediately threatens the enemy queen and gains tempo for Kg2 to seize control."
  },
  {
    "id": "mid-queenhunt-ra1-43",
    "category": "Middlegame",
    "theme": "Hunting the Exposed Queen (Ra1) (Gukesh vs Ding, 2024)",
    "difficulty": "Advanced",
    "rating": 1551,
    "fen": "3r1nk1/p4pbp/5np1/1p1P4/1PpB4/5BPP/q1NQ1P2/4R1K1 w - - 0 23",
    "sideToMove": "White",
    "prompt": "White to move. Target Black’s misplaced queen to gain crucial tempi or trap her outright!",
    "moves": [
      "Ra1"
    ],
    "explanation": "Ra1 — Attacking the exposed queen forces an awkward retreat and hands White valuable initiative."
  },
  {
    "id": "mid-queenhunt-be5-44",
    "category": "Middlegame",
    "theme": "Hunting the Exposed Queen (Be5) (Radjabov vs Kamsky, 2009)",
    "difficulty": "Advanced",
    "rating": 1663,
    "fen": "r5k1/2q2pb1/4pnp1/7p/2PB1r1N/n6P/BQ3PP1/3RR1K1 w - - 3 36",
    "sideToMove": "White",
    "prompt": "White to move. Black’s queen is dangerously exposed — hunt her down with a forcing 3-ply sequence!",
    "moves": [
      "Be5",
      "Nxc4",
      "Qc1"
    ],
    "explanation": "Be5 Nxc4 Qc1 — Playing Be5 immediately threatens the enemy queen and gains tempo for Qc1 to seize control."
  },
  {
    "id": "mid-queenhunt-rd8-45",
    "category": "Middlegame",
    "theme": "Hunting the Exposed Queen (Rd8) (Shirov vs Ivanchuk, 2009)",
    "difficulty": "Advanced",
    "rating": 1581,
    "fen": "2k4r/1q2bppp/p1p1p3/4P3/1PP5/P2Q1P2/1B3P1P/n4RK1 b - - 2 18",
    "sideToMove": "Black",
    "prompt": "Black to move. White’s queen is dangerously exposed — hunt her down with a forcing 3-ply sequence!",
    "moves": [
      "Rd8",
      "Qc3",
      "Qd7"
    ],
    "explanation": "Rd8 Qc3 Qd7 — Playing Rd8 immediately threatens the enemy queen and gains tempo for Qd7 to seize control."
  },
  {
    "id": "mid-queenhunt-rb1-46",
    "category": "Middlegame",
    "theme": "Hunting the Exposed Queen (Rb1) (Ivanchuk vs Radjabov, 2009)",
    "difficulty": "Medium",
    "rating": 1405,
    "fen": "r1b1kb1r/p2p1ppp/2p1p3/4Pn2/2P1NP2/3Q4/Pq1B2PP/R3KB1R w KQkq - 0 13",
    "sideToMove": "White",
    "prompt": "White to move. Target Black’s misplaced queen to gain crucial tempi or trap her outright!",
    "moves": [
      "Rb1"
    ],
    "explanation": "Rb1 — Attacking the exposed queen forces an awkward retreat and hands White valuable initiative."
  },
  {
    "id": "mid-queenhunt-re1-47",
    "category": "Middlegame",
    "theme": "Hunting the Exposed Queen (Re1) (Ivanchuk vs Nisipeanu, 2009)",
    "difficulty": "Advanced",
    "rating": 1561,
    "fen": "5rk1/pp1nqppp/8/2rQ1P2/1b3B2/1BP5/PP4PP/R4K1R w - - 3 18",
    "sideToMove": "White",
    "prompt": "White to move. Black’s queen is dangerously exposed — hunt her down with a forcing 3-ply sequence!",
    "moves": [
      "Re1",
      "Qh4",
      "Qe4"
    ],
    "explanation": "Re1 Qh4 Qe4 — Playing Re1 immediately threatens the enemy queen and gains tempo for Qe4 to seize control."
  },
  {
    "id": "mid-backrank-rxd1-48",
    "category": "Middlegame",
    "theme": "Weak Back-Rank Exploitation (Rxd1+) (Prins vs Stahlberg, 1952)",
    "difficulty": "Medium",
    "rating": 1357,
    "fen": "1r1r2k1/5ppp/2p1bn2/2P1p3/Nq2P3/2p2P2/P1Q3PP/RN1R2K1 b - - 2 25",
    "sideToMove": "Black",
    "prompt": "Black to move. Exploit White’s vulnerable back rank immediately!",
    "moves": [
      "Rxd1+"
    ],
    "explanation": "Rxd1+ — Invading on d1 exploits the overloaded back-rank defenders to win material or force mate."
  },
  {
    "id": "mid-backrank-rxa1-49",
    "category": "Middlegame",
    "theme": "Weak Back-Rank Exploitation (Rxa1+) (Karjakin vs Carlsen, 2016)",
    "difficulty": "Medium",
    "rating": 1365,
    "fen": "r5k1/2bq1p1p/6p1/3n4/2BP3R/3Q1P2/3B1P1P/R6K b - - 0 37",
    "sideToMove": "Black",
    "prompt": "Black to move. Exploit White’s vulnerable back rank immediately!",
    "moves": [
      "Rxa1+"
    ],
    "explanation": "Rxa1+ — Invading on a1 exploits the overloaded back-rank defenders to win material or force mate."
  },
  {
    "id": "mid-backrank-rxd1-50",
    "category": "Middlegame",
    "theme": "Weak Back-Rank Exploitation (Rxd1+) (Kramnik vs Anand, 2008)",
    "difficulty": "Medium",
    "rating": 1351,
    "fen": "8/1p3pkp/p1n1ppr1/8/3qPP2/P1Nr2P1/1P2QR1P/3R3K b - - 2 23",
    "sideToMove": "Black",
    "prompt": "Black to move. Exploit White’s vulnerable back rank immediately!",
    "moves": [
      "Rxd1+"
    ],
    "explanation": "Rxd1+ — Invading on d1 exploits the overloaded back-rank defenders to win material or force mate."
  },
  {
    "id": "mid-backrank-qxe8-51",
    "category": "Middlegame",
    "theme": "Weak Back-Rank Exploitation (Qxe8+) (Carlsen vs Anand, 2013)",
    "difficulty": "Medium",
    "rating": 1325,
    "fen": "3qr1k1/pp3pnp/2p3p1/3pQ3/3P2N1/2P5/PP3PPP/4R1K1 w - - 6 25",
    "sideToMove": "White",
    "prompt": "White to move. Exploit Black’s vulnerable back rank immediately!",
    "moves": [
      "Qxe8+"
    ],
    "explanation": "Qxe8+ — Invading on e8 exploits the overloaded back-rank defenders to win material or force mate."
  },
  {
    "id": "mid-backrank-qxh8-52",
    "category": "Middlegame",
    "theme": "Weak Back-Rank Exploitation (Qxh8+) (Medina Garcia vs Guimard, 1955)",
    "difficulty": "Medium",
    "rating": 1315,
    "fen": "2rk3r/6Q1/pqp1p3/3pPp2/1P3Pn1/2P5/P5PP/4RR1K w - - 1 26",
    "sideToMove": "White",
    "prompt": "White to move. Exploit Black’s vulnerable back rank immediately!",
    "moves": [
      "Qxh8+"
    ],
    "explanation": "Qxh8+ — Invading on h8 exploits the overloaded back-rank defenders to win material or force mate."
  },
  {
    "id": "mid-backrank-rxe8-53",
    "category": "Middlegame",
    "theme": "Weak Back-Rank Exploitation (Rxe8+) (Anand vs Topalov, 2010)",
    "difficulty": "Medium",
    "rating": 1298,
    "fen": "4r1k1/pb1n1p1p/1p1q2p1/7n/3p4/2PB1P1N/P4BPP/2R1R1K1 w - - 0 22",
    "sideToMove": "White",
    "prompt": "White to move. Exploit Black’s vulnerable back rank immediately!",
    "moves": [
      "Rxe8+"
    ],
    "explanation": "Rxe8+ — Invading on e8 exploits the overloaded back-rank defenders to win material or force mate."
  },
  {
    "id": "mid-backrank-qe8-54",
    "category": "Middlegame",
    "theme": "Weak Back-Rank Exploitation (Qe8+) (Trifunovic vs Bondarevsky, 1948)",
    "difficulty": "Medium",
    "rating": 1351,
    "fen": "rn1n2k1/2p5/1p2pq1p/p1b3N1/Q1P5/P7/5PPP/3R1RK1 w - - 0 22",
    "sideToMove": "White",
    "prompt": "White to move. Exploit Black’s vulnerable back rank immediately!",
    "moves": [
      "Qe8+"
    ],
    "explanation": "Qe8+ — Invading on e8 exploits the overloaded back-rank defenders to win material or force mate."
  },
  {
    "id": "mid-backrank-qxd1-55",
    "category": "Middlegame",
    "theme": "Weak Back-Rank Exploitation (Qxd1+) (Ragozin vs Yanofsky, 1948)",
    "difficulty": "Medium",
    "rating": 1310,
    "fen": "rnb2k1r/1p2b1pp/p3pp2/1B1pn1BQ/3q1N1P/8/PPP2PP1/2KR3R b - - 1 14",
    "sideToMove": "Black",
    "prompt": "Black to move. Exploit White’s vulnerable back rank immediately!",
    "moves": [
      "Qxd1+"
    ],
    "explanation": "Qxd1+ — Invading on d1 exploits the overloaded back-rank defenders to win material or force mate."
  },
  {
    "id": "mid-battery-qb6-56",
    "category": "Middlegame",
    "theme": "Queen-Bishop Battery Alignment (Qb6+) (Ding vs Gukesh, 2024)",
    "difficulty": "Medium",
    "rating": 1448,
    "fen": "4r1k1/2qn1bpp/n1p2p2/pP6/8/B2P1NP1/P3P1BP/1R1Q2K1 b - - 0 23",
    "sideToMove": "Black",
    "prompt": "Black to move. Align your queen on b6 to create a menacing battery along key diagonals and files!",
    "moves": [
      "Qb6+"
    ],
    "explanation": "Qb6+ — Positioning the queen on b6 harmonizes with your minor pieces and locks down key squares."
  },
  {
    "id": "mid-battery-qc7-57",
    "category": "Middlegame",
    "theme": "Queen-Bishop Battery Alignment (Qc7) (Gligoric vs Lundin, 1948)",
    "difficulty": "Medium",
    "rating": 1361,
    "fen": "r1Q2bk1/5pp1/1B1Np2p/p2qP3/1p6/1P1n3P/P4PP1/3R2K1 w - - 13 37",
    "sideToMove": "White",
    "prompt": "White to move. Align your queen on c7 to create a menacing battery along key diagonals and files!",
    "moves": [
      "Qc7"
    ],
    "explanation": "Qc7 — Positioning the queen on c7 harmonizes with your minor pieces and locks down key squares."
  },
  {
    "id": "mid-battery-qd3-58",
    "category": "Middlegame",
    "theme": "Queen-Bishop Battery Alignment (Qd3) (Kotov vs Tartakower, 1948)",
    "difficulty": "Advanced",
    "rating": 1572,
    "fen": "6k1/5ppp/2qpp3/3n4/r2Q4/5P2/PP1B1PPP/R5K1 w - - 5 20",
    "sideToMove": "White",
    "prompt": "White to move. Align your queen on d3 to create a menacing battery along key diagonals and files!",
    "moves": [
      "Qd3"
    ],
    "explanation": "Qd3 — Positioning the queen on d3 harmonizes with your minor pieces and locks down key squares."
  },
  {
    "id": "mid-battery-qd3-59",
    "category": "Middlegame",
    "theme": "Queen-Bishop Battery Alignment (Qd3) (Gukesh vs Ding, 2024)",
    "difficulty": "Advanced",
    "rating": 1557,
    "fen": "2r1k2r/1p1bbppp/4p3/3pPP2/1PqN2P1/p1P1Q3/Pn3BBP/2R2RK1 b k - 0 21",
    "sideToMove": "Black",
    "prompt": "Black to move. Align your queen on d3 to create a menacing battery along key diagonals and files!",
    "moves": [
      "Qd3"
    ],
    "explanation": "Qd3 — Positioning the queen on d3 harmonizes with your minor pieces and locks down key squares."
  },
  {
    "id": "mid-battery-qc7-60",
    "category": "Middlegame",
    "theme": "Queen-Bishop Battery Alignment (Qc7) (Ding vs Nepomniachtchi, 2023)",
    "difficulty": "Advanced",
    "rating": 1545,
    "fen": "r1bq1rk1/pp1nbpp1/4pn1p/6N1/2B4P/P1N1P3/1PQB1PP1/3RK2R b K h3 0 13",
    "sideToMove": "Black",
    "prompt": "Black to move. Align your queen on c7 to create a menacing battery along key diagonals and files!",
    "moves": [
      "Qc7"
    ],
    "explanation": "Qc7 — Positioning the queen on c7 harmonizes with your minor pieces and locks down key squares."
  },
  {
    "id": "mid-battery-qb4-61",
    "category": "Middlegame",
    "theme": "Queen-Bishop Battery Alignment (Qb4) (Bondarevsky vs Ragozin, 1948)",
    "difficulty": "Advanced",
    "rating": 1573,
    "fen": "r1q1r1k1/pp3pb1/1n1Np1p1/3p4/b3PP2/1Q2B3/PP2BP2/3RK1R1 w - - 2 22",
    "sideToMove": "White",
    "prompt": "White to move. Align your queen on b4 to create a menacing battery along key diagonals and files!",
    "moves": [
      "Qb4"
    ],
    "explanation": "Qb4 — Positioning the queen on b4 harmonizes with your minor pieces and locks down key squares."
  },
  {
    "id": "mid-knightjump-ne5-62",
    "category": "Middlegame",
    "theme": "Commanding Knight Outpost Jump (Ne5+) (Szabo vs Stoltz, 1952)",
    "difficulty": "Medium",
    "rating": 1477,
    "fen": "2r5/5k1p/p1N1rnp1/8/2Q2pq1/8/P5PP/1R4K1 w - - 0 31",
    "sideToMove": "White",
    "prompt": "White to move. Spot the powerful central/kingside knight jump to e5 that paralyzes Black’s camp!",
    "moves": [
      "Ne5+"
    ],
    "explanation": "Ne5+ — Landing on e5 dominates central squares and targets weaknesses in Black’s position."
  },
  {
    "id": "mid-knightjump-nf5-63",
    "category": "Middlegame",
    "theme": "Commanding Knight Outpost Jump (Nf5) (Karjakin vs Carlsen, 2016)",
    "difficulty": "Medium",
    "rating": 1417,
    "fen": "r2q1rk1/2pnb1pp/p2p4/1p1Pp3/1P1n1p2/P1PP4/B2N1PPP/R1BQ1RK1 b - - 0 17",
    "sideToMove": "Black",
    "prompt": "Black to move. Spot the powerful central/kingside knight jump to f5 that paralyzes White’s camp!",
    "moves": [
      "Nf5"
    ],
    "explanation": "Nf5 — Landing on f5 dominates central squares and targets weaknesses in White’s position."
  },
  {
    "id": "mid-knightjump-ne4-64",
    "category": "Middlegame",
    "theme": "Commanding Knight Outpost Jump (Ne4) (Pirc vs Stoltz, 1948)",
    "difficulty": "Medium",
    "rating": 1372,
    "fen": "3rr1k1/pp1bpp1p/1n1q2p1/3P4/7Q/2N2B1P/PP3PP1/R3R1K1 w - - 10 20",
    "sideToMove": "White",
    "prompt": "White to move. Spot the powerful central/kingside knight jump to e4 that paralyzes Black’s camp!",
    "moves": [
      "Ne4"
    ],
    "explanation": "Ne4 — Landing on e4 dominates central squares and targets weaknesses in Black’s position."
  },
  {
    "id": "mid-knightjump-nf5-65",
    "category": "Middlegame",
    "theme": "Commanding Knight Outpost Jump (Nf5) (Ding vs Nepomniachtchi, 2023)",
    "difficulty": "Medium",
    "rating": 1335,
    "fen": "r2q1r2/p4pk1/1p1Pp1p1/2p1p1P1/2P1Q2n/P1P4R/R4P2/4KB2 b - - 0 23",
    "sideToMove": "Black",
    "prompt": "Black to move. Spot the powerful central/kingside knight jump to f5 that paralyzes White’s camp!",
    "moves": [
      "Nf5"
    ],
    "explanation": "Nf5 — Landing on f5 dominates central squares and targets weaknesses in White’s position."
  },
  {
    "id": "mid-knightjump-ne5-66",
    "category": "Middlegame",
    "theme": "Commanding Knight Outpost Jump (Ne5) (Caruana vs Carlsen, 2018)",
    "difficulty": "Medium",
    "rating": 1330,
    "fen": "r1r3k1/2N2pp1/3p2n1/5q1p/p1Q1p2P/4B1P1/PP3P2/2R1K2R b K - 0 27",
    "sideToMove": "Black",
    "prompt": "Black to move. Spot the powerful central/kingside knight jump to e5 that paralyzes White’s camp!",
    "moves": [
      "Ne5"
    ],
    "explanation": "Ne5 — Landing on e5 dominates central squares and targets weaknesses in White’s position."
  },
  {
    "id": "mid-knightjump-ne4-67",
    "category": "Middlegame",
    "theme": "Commanding Knight Outpost Jump (Ne4) (Ding vs Nepomniachtchi, 2023)",
    "difficulty": "Medium",
    "rating": 1327,
    "fen": "r4rk1/p4p2/bp1Ppqp1/2p1pn2/2P5/P1P3N1/R4PP1/3QKB1R w K - 1 18",
    "sideToMove": "White",
    "prompt": "White to move. Spot the powerful central/kingside knight jump to e4 that paralyzes Black’s camp!",
    "moves": [
      "Ne4"
    ],
    "explanation": "Ne4 — Landing on e4 dominates central squares and targets weaknesses in Black’s position."
  },
  {
    "id": "mid-knightjump-nf4-68",
    "category": "Middlegame",
    "theme": "Commanding Knight Outpost Jump (Nf4) (Ding vs Gukesh, 2024)",
    "difficulty": "Medium",
    "rating": 1466,
    "fen": "1r1qr1k1/1pp2pp1/1nn3bp/1N4b1/p1PPp3/P3B1PP/1PQ1NPBK/3RR3 w - - 2 23",
    "sideToMove": "White",
    "prompt": "White to move. Spot the powerful central/kingside knight jump to f4 that paralyzes Black’s camp!",
    "moves": [
      "Nf4"
    ],
    "explanation": "Nf4 — Landing on f4 dominates central squares and targets weaknesses in Black’s position."
  },
  {
    "id": "mid-defensivecounter-ne2-69",
    "category": "Middlegame",
    "theme": "Defensive Counter-Strike (Ne2+) (Gelfand vs Nisipeanu, 2009)",
    "difficulty": "Medium",
    "rating": 1394,
    "fen": "6k1/1p3R2/8/P1NPp2p/4P1bq/6n1/6PP/R4QK1 b - - 0 34",
    "sideToMove": "Black",
    "prompt": "Black to move in a tense tactical battle. Find the precise defensive counter-strike to neutralize the attack and hold equality!",
    "moves": [
      "Ne2+"
    ],
    "explanation": "Ne2+ — Active counterplay saves the day, meeting White’s threats with direct tactical pressure."
  },
  {
    "id": "mid-defensivecounter-rd1-70",
    "category": "Middlegame",
    "theme": "Defensive Counter-Strike (Rd1+) (Shirov vs Ivanchuk, 2009)",
    "difficulty": "Advanced",
    "rating": 1567,
    "fen": "2k5/4bppp/p1p1p3/4P3/1PP5/P4P2/3r1P1P/R1B3K1 b - - 1 22",
    "sideToMove": "Black",
    "prompt": "Black to move in a tense tactical battle. Find the precise defensive counter-strike to turn the tables with a sharp counter-strike!",
    "moves": [
      "Rd1+"
    ],
    "explanation": "Rd1+ — Active counterplay saves the day, meeting White’s threats with direct tactical pressure."
  },
  {
    "id": "mid-defensivecounter-a7-71",
    "category": "Middlegame",
    "theme": "Defensive Counter-Strike (a7+) (Shirov vs Ivanchuk, 2009)",
    "difficulty": "Medium",
    "rating": 1398,
    "fen": "1k6/5Rpp/Pr2p3/4P3/8/8/2p2PKP/8 w - - 0 34",
    "sideToMove": "White",
    "prompt": "White to move in a tense tactical battle. Find the precise defensive counter-strike to turn the tables with a sharp counter-strike!",
    "moves": [
      "a7+"
    ],
    "explanation": "a7+ — Active counterplay saves the day, meeting Black’s threats with direct tactical pressure."
  },
  {
    "id": "mid-defensivecounter-nd6-72",
    "category": "Middlegame",
    "theme": "Defensive Counter-Strike (Nd6+) (Ivanchuk vs Radjabov, 2009)",
    "difficulty": "Advanced",
    "rating": 1552,
    "fen": "r1b1k2r/3pbppp/2p1p3/p1P1P3/3nNP2/8/P2B1KPP/1R3B1R w kq - 2 17",
    "sideToMove": "White",
    "prompt": "White to move in a tense tactical battle. Find the precise defensive counter-strike to turn the tables with a sharp counter-strike!",
    "moves": [
      "Nd6+"
    ],
    "explanation": "Nd6+ — Active counterplay saves the day, meeting Black’s threats with direct tactical pressure."
  },
  {
    "id": "mid-defensivecounter-rh4-73",
    "category": "Middlegame",
    "theme": "Defensive Counter-Strike (Rh4+) (Ivanchuk vs Radjabov, 2009)",
    "difficulty": "Medium",
    "rating": 1416,
    "fen": "r1b2R2/3p4/1RpP2k1/2P2pP1/1p1K4/1B6/P6r/8 b - - 1 32",
    "sideToMove": "Black",
    "prompt": "Black to move in a tense tactical battle. Find the precise defensive counter-strike to neutralize the attack and hold equality!",
    "moves": [
      "Rh4+"
    ],
    "explanation": "Rh4+ — Active counterplay saves the day, meeting White’s threats with direct tactical pressure."
  },
  {
    "id": "mid-defensivecounter-qe1-74",
    "category": "Middlegame",
    "theme": "Defensive Counter-Strike (Qe1+) (Kamsky vs Ivanchuk, 2009)",
    "difficulty": "Medium",
    "rating": 1432,
    "fen": "3r3k/1p4bp/p4p2/4rP2/P2p3R/1Q3R2/1P2qBPP/7K b - - 0 32",
    "sideToMove": "Black",
    "prompt": "Black to move in a tense tactical battle. Find the precise defensive counter-strike to turn the tables with a sharp counter-strike!",
    "moves": [
      "Qe1+"
    ],
    "explanation": "Qe1+ — Active counterplay saves the day, meeting White’s threats with direct tactical pressure."
  },
  {
    "id": "mid-rooklift-rf4-75",
    "category": "Middlegame",
    "theme": "Attacking Rook Lift to f4 (Bilek vs Larsen, 1967)",
    "difficulty": "Medium",
    "rating": 1445,
    "fen": "r5k1/pp1r1ppp/4p3/n1p1P1Q1/3Pq3/2P5/P1P2RPP/2B2RK1 w - c6 0 19",
    "sideToMove": "White",
    "prompt": "White to move. Bring a heavy piece directly into the attack with a classic rook lift!",
    "moves": [
      "Rf4"
    ],
    "explanation": "Rf4 — The rook lift to f4 rapidly transfers firepower to the attacking wing without needing to open the starting rank."
  }
];
