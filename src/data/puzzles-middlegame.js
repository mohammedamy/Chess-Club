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
  }
];
