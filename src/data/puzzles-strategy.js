export const STRATEGY_PUZZLES = [
  {
    "id": "str-outpost-d5-sveshnikov",
    "category": "Strategy",
    "theme": "d5 Hole & Knight Outpost",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq b6 0 9",
    "sideToMove": "White",
    "prompt": "White to move. Black pushed ...b5 leaving d5 permanently weak. How does White begin exploiting the light-square hole?",
    "moves": [
      "Nd5"
    ],
    "acceptAlso": [
      "Bxf6"
    ],
    "explanation": "Nd5 — White leaps toward or prepares control over the unassailable d5 outpost."
  },
  {
    "id": "str-outpost-nd5-b6",
    "category": "Strategy",
    "theme": "Control the d5 Outpost",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1bqkb1r/5p1p/p1np1p2/1p2p3/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq - 0 10",
    "sideToMove": "White",
    "prompt": "White to move. Black accepted doubled f-pawns. Plant your piece on the eternal d5 outpost!",
    "moves": [
      "Nd5"
    ],
    "acceptAlso": [
      "Nab1"
    ],
    "explanation": "Nd5 — On d5, no Black pawn can ever chase the knight away while c7 and f6 suffer."
  },
  {
    "id": "str-sicilian-najdorf-be2",
    "category": "Strategy",
    "theme": "Classical Najdorf Outpost Setup",
    "difficulty": "Easy",
    "rating": 1140,
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    "sideToMove": "White",
    "prompt": "White to move. Black played the Najdorf 5...a6. Choose a harmonious developing move preparing kingside safety and central control.",
    "moves": [
      "Be2"
    ],
    "acceptAlso": [
      "Be3",
      "f3",
      "a4"
    ],
    "explanation": "Be2 — Smooth development strengthens control over d5 before Black expands."
  },
  {
    "id": "str-spanish-knight-maneuver",
    "category": "Strategy",
    "theme": "Ruy Lopez Knight Maneuver",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "r1b2rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12",
    "sideToMove": "White",
    "prompt": "White to move. The center is closed in the Chigorin Ruy Lopez. Begin the classic knight journey toward f5/e3!",
    "moves": [
      "Nbd2"
    ],
    "acceptAlso": [
      "Qe2",
      "d5"
    ],
    "explanation": "Nbd2 — Nbd2-f1-g3/e3 transfers a passive queenside knight into a decisive kingside piece."
  },
  {
    "id": "str-spanish-breyer-redeploy",
    "category": "Strategy",
    "theme": "Breyer Knight Redeployment",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "r2qrbk1/1bpn1p1p/p2p1np1/1p2p3/3PP3/2P2NNP/PPB2PP1/R1BQR1K1 w - - 0 15",
    "sideToMove": "White",
    "prompt": "White to move. Black reinforced f5 with ...g6 and ...Bf8. Find White’s crisp strategic move increasing pressure!",
    "moves": [
      "a4"
    ],
    "acceptAlso": [
      "Bg5",
      "Bd2"
    ],
    "explanation": "a4 — Opening queenside lines or improving piece coordination maintains an enduring positional edge."
  },
  {
    "id": "str-iqp-blockade-d4",
    "category": "Strategy",
    "theme": "IQP Blockade Strategy",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "rnbq1rk1/ppp1bppp/8/3n4/3P4/2N2N2/PP3PPP/R1BQKB1R w KQ - 0 8",
    "sideToMove": "White",
    "prompt": "White holds an isolated d4 pawn against Black’s d5 blockade. Develop dynamically to generate active piece play!",
    "moves": [
      "Bd3"
    ],
    "acceptAlso": [
      "Bc4",
      "Be2"
    ],
    "explanation": "Bd3 — Active minor-piece placement compensates for an isolated central pawn."
  },
  {
    "id": "str-iqp-black-blockade",
    "category": "Strategy",
    "theme": "Blockading the Isolated Queen’s Pawn",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1bq1rk1/pp2bppp/2n1pn2/6B1/2BP4/2N2N2/PP3PPP/2RQK2R b K - 0 10",
    "sideToMove": "Black",
    "prompt": "Black to move. White accepted an isolated queen’s pawn on d4. Find Black’s strongest strategic continuation!",
    "moves": [
      "a6"
    ],
    "acceptAlso": [
      "b6",
      "h6"
    ],
    "explanation": "a6 — Tight control over d5 neutralizes White’s IQP initiative before trading down into a better endgame."
  },
  {
    "id": "str-maroczy-clamp",
    "category": "Strategy",
    "theme": "Maróczy Bind Space Advantage",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r1bq1rk1/pp1pppbp/2n2np1/8/2PNP3/2N1B3/PP3PPP/R2QKB1R w KQ - 5 8",
    "sideToMove": "White",
    "prompt": "White to move. Maintain your Maróczy Bind clamp over d5 while developing solidly!",
    "moves": [
      "Be2"
    ],
    "acceptAlso": [
      "Nc2",
      "f3"
    ],
    "explanation": "Be2 — Keeping pawns on c4 and e4 freezes Black’s ...d5 and ...b5 breaks."
  },
  {
    "id": "str-maroczy-hedgehog-c5",
    "category": "Strategy",
    "theme": "Undercutting the Bind",
    "difficulty": "Advanced",
    "rating": 1560,
    "fen": "r1bq1rk1/pp2ppbp/2np1np1/8/2PNP3/2N1B3/PP2BPPP/R2Q1RK1 b - - 3 9",
    "sideToMove": "Black",
    "prompt": "Black plays the Accelerated Dragon vs Maróczy Bind. Choose Black’s sharpest counter-plan!",
    "moves": [
      "Nxd4"
    ],
    "acceptAlso": [
      "Re8",
      "a6"
    ],
    "explanation": "Black captures on d4 with Nxd4, executing the strongest Stockfish 19 continuation for undercutting the bind."
  },
  {
    "id": "str-minority-attack-carlsbad",
    "category": "Strategy",
    "theme": "Carlsbad Minority Attack",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r1bqrnk1/pp2bppp/2p2n2/3p2B1/3P4/2NBPN2/PPQ2PPP/R4RK1 w - - 8 11",
    "sideToMove": "White",
    "prompt": "White to move. Initiate the famous Carlsbad queenside minority attack!",
    "moves": [
      "h3"
    ],
    "acceptAlso": [
      "a3",
      "a4"
    ],
    "explanation": "h3 repositions the pawn to h3, executing the strongest Stockfish 19 continuation for carlsbad minority attack."
  },
  {
    "id": "str-carlsbad-b4-push",
    "category": "Strategy",
    "theme": "Carlsbad b4 Expansion",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "r1b1rnk1/1p2qppp/2p5/p2p4/1P1Pn3/P1NBP3/2Q1NPPP/1R3RK1 b - b3 0 14",
    "sideToMove": "Black",
    "prompt": "Black to move. White launched b4 against the Carlsbad structure. Find Black’s sharpest strategic response!",
    "moves": [
      "axb4"
    ],
    "acceptAlso": [
      "Nxc3"
    ],
    "explanation": "axb4 — Counterplay along the a-file or kingside challenges the minority advance cleanly."
  },
  {
    "id": "str-good-knight-bad-bishop",
    "category": "Strategy",
    "theme": "Exploiting a Bad Light-Squared Bishop",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "rn1qkb1r/pp3pp1/2p1pnp1/3p4/2PP4/2N1P3/PP3PPP/R1BQKB1R w KQkq - 0 8",
    "sideToMove": "White",
    "prompt": "White to move. Black’s bishop vanished for doubled g-pawns. Improve White’s queenside bishop or kingside development!",
    "moves": [
      "Qb3"
    ],
    "acceptAlso": [
      "g3",
      "Bd2",
      "h3"
    ],
    "explanation": "Qb3 repositions the queen to b3, executing the strongest Stockfish 19 continuation for exploiting a bad light-squared bishop."
  },
  {
    "id": "str-french-bad-bishop-trade",
    "category": "Strategy",
    "theme": "Trading the French Bad Bishop",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "r1b1kbnr/pp3ppp/1qn1p3/3pP3/2pP4/P1P2N2/1P3PPP/RNBQKB1R w KQkq - 0 7",
    "sideToMove": "White",
    "prompt": "White to move. Black locked the queenside with ...c4. Find White’s cleanest positional response!",
    "moves": [
      "Nbd2"
    ],
    "acceptAlso": [
      "Be2"
    ],
    "explanation": "Nbd2 — Preparing g3-Bg2 or rerouting pieces around Black’s queenside pawn chain keeps kingside flexibility."
  },
  {
    "id": "str-french-ba6-trade",
    "category": "Strategy",
    "theme": "Trading Bad Bishop via a6",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r1bq1rk1/pp2nppp/2n1p3/2ppP3/3P2Q1/P1PB4/2P2PPP/R1B1K1NR w KQ - 5 9",
    "sideToMove": "White",
    "prompt": "White holds dark-square pressure in the Winawer French. Find the strongest continuation!",
    "moves": [
      "Qh5"
    ],
    "acceptAlso": [
      "Nf3",
      "Bg5"
    ],
    "explanation": "Qh5 — Pressuring h7 forces structural concessions around Black’s king."
  },
  {
    "id": "str-stonewall-knight-e5",
    "category": "Strategy",
    "theme": "Reinforcing the e5 Stonewall Outpost",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r1bqkb1r/pp2pppp/2n2n2/2pp4/3P1P2/2PBP3/PP4PP/RNBQK1NR b KQkq f3 0 5",
    "sideToMove": "Black",
    "prompt": "Black to move. White built the Stonewall f4-e3-d4-c3. Fight immediately for the weakened e4 square and dark diagonals!",
    "moves": [
      "Bg4"
    ],
    "explanation": "Bg4 — Challenging e4 and developing Black’s light-squared bishop outside the pawn chain solves Black’s main problem."
  },
  {
    "id": "str-kid-base-f5",
    "category": "Strategy",
    "theme": "Attacking the Base vs Tip of a Chain",
    "difficulty": "Advanced",
    "rating": 1560,
    "fen": "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 1 9",
    "sideToMove": "White",
    "prompt": "White to move. In the Mar del Plata King’s Indian, launch White’s queenside thematic counter-play!",
    "moves": [
      "b4"
    ],
    "acceptAlso": [
      "a3",
      "Re1"
    ],
    "explanation": "b4 — Nimzowitsch’s rule: Black pushes ...f5 on the kingside while White storms c5 on the queenside."
  },
  {
    "id": "str-kid-c5-break",
    "category": "Strategy",
    "theme": "King’s Indian c4-c5 Strike",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "r1bq1rk1/pppn2bp/3p2n1/3Pp1p1/2P1Pp2/2N2P2/PP2BBPP/2RQNRK1 w - - 2 14",
    "sideToMove": "White",
    "prompt": "White to move. Both wings are locked down. Rip open the c-file on the queenside right now!",
    "moves": [
      "c5"
    ],
    "acceptAlso": [
      "a4",
      "Nb5",
      "Nd3"
    ],
    "explanation": "c5 — c5! breaks through on the queenside to strike the d6 base before Black’s ...g4 arrives."
  },
  {
    "id": "str-kid-g4-break",
    "category": "Strategy",
    "theme": "King’s Indian ...g4 Pawn Storm",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "r1bq1rk1/ppp1n1bp/3p1n2/2PPp1p1/4Pp2/2NN1P2/PP1BB1PP/R2Q1RK1 w - - 0 14",
    "sideToMove": "White",
    "prompt": "White to move. Black plays ...f4 and ...g5 for a kingside storm. Open lines on the queenside with precision!",
    "moves": [
      "a4"
    ],
    "acceptAlso": [
      "b4",
      "Rc1"
    ],
    "explanation": "a4 repositions the pawn to a4, executing the strongest Stockfish 19 continuation for king’s indian ...g4 pawn storm."
  },
  {
    "id": "str-catalan-long-diag",
    "category": "Strategy",
    "theme": "Catalan Pressure Along h1-a8",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "rnbq1rk1/2p1bppp/p3pn2/1p6/2QP4/5NP1/PP2PPBP/RNB2RK1 w - b6 0 9",
    "sideToMove": "White",
    "prompt": "White to move. Black chased the queen with ...b5. Where does White maintain maximum Catalan diagonal pressure?",
    "moves": [
      "Qc2"
    ],
    "acceptAlso": [
      "Qd3",
      "Qc3"
    ],
    "explanation": "Qc2 — Stepping back to c2 keeps the h1-a8 diagonal open and controls e4."
  },
  {
    "id": "str-nimzo-c4-blockade",
    "category": "Strategy",
    "theme": "Fixing Doubled c-Pawns in the Nimzo",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "rnbq1rk1/pp3ppp/4pn2/2Pp4/1b1P4/2NB4/PP2NPPP/R1BQK2R b KQ - 0 8",
    "sideToMove": "Black",
    "prompt": "Black to move. White pushed c5 to gain queenside space. Challenge the central base immediately!",
    "moves": [
      "b6"
    ],
    "acceptAlso": [
      "e5",
      "Nc6"
    ],
    "explanation": "b6 — Attacking c5 with ...b6 undermines White’s queenside pawn chain."
  },
  {
    "id": "str-nimzo-saemisch-target",
    "category": "Strategy",
    "theme": "Attacking Doubled c-Pawns (Sämisch)",
    "difficulty": "Medium",
    "rating": 1430,
    "fen": "r1bq1rk1/p2p1ppp/1pn1pn2/2p5/2PPP3/P1PB4/4NPPP/R1BQK2R b KQ - 0 9",
    "sideToMove": "Black",
    "prompt": "Black to move. White built a massive center but has doubled c3/c4 pawns. Strike c4’s flank!",
    "moves": [
      "Ne8"
    ],
    "acceptAlso": [
      "d6",
      "Qc7"
    ],
    "explanation": "Ne8 repositions the knight to e8, executing the strongest Stockfish 19 continuation for attacking doubled c-pawns (sämisch)."
  },
  {
    "id": "str-benoni-e5-control",
    "category": "Strategy",
    "theme": "Benoni E4-E5 Restrain vs Break",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 2 8",
    "sideToMove": "White",
    "prompt": "White to move. Choose White’s most solid strategic setup against the Modern Benoni’s dark-square pressure.",
    "moves": [
      "h3"
    ],
    "acceptAlso": [
      "Nd2"
    ],
    "explanation": "h3 repositions the pawn to h3, executing the strongest Stockfish 19 continuation for benoni e4-e5 restrain vs break."
  },
  {
    "id": "str-grunfeld-center",
    "category": "Strategy",
    "theme": "Grünfeld Broad Pawn Center",
    "difficulty": "Easy",
    "rating": 1190,
    "fen": "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 5",
    "sideToMove": "White",
    "prompt": "White to move. Black exchanged on d5 in the Grünfeld. Erect a commanding classical center!",
    "moves": [
      "e4"
    ],
    "acceptAlso": [
      "Nf3",
      "Qb3"
    ],
    "explanation": "e4 — e4 gains a tempo on the knight and builds a formidable d4+e4 pawn duo."
  },
  {
    "id": "str-prophylaxis-h3-ruy",
    "category": "Strategy",
    "theme": "Ruy Lopez Prophylaxis",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 1 9",
    "sideToMove": "White",
    "prompt": "White to move. Before pushing d4, prevent Black’s annoying ...Bg4 pin with a classic prophylactic move.",
    "moves": [
      "h3"
    ],
    "acceptAlso": [
      "a4",
      "d3"
    ],
    "explanation": "h3 — h3 quietly eliminates ...Bg4 so White can push d4 smoothly next."
  },
  {
    "id": "str-prophylaxis-a4-b5",
    "category": "Strategy",
    "theme": "Fixing Queenside Pawns with a4",
    "difficulty": "Medium",
    "rating": 1330,
    "fen": "rnbqkb1r/pp2pppp/2p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R b KQkq a3 0 5",
    "sideToMove": "Black",
    "prompt": "Black to move. White stopped ...b5 with 5.a4. Develop Black’s c8 bishop outside the pawn chain!",
    "moves": [
      "Bf5"
    ],
    "acceptAlso": [
      "e6",
      "a6"
    ],
    "explanation": "Bf5 — Developing the light bishop before ...e6 gives Black harmonious queenside development."
  },
  {
    "id": "str-slav-clamp-c4",
    "category": "Strategy",
    "theme": "Botvinnik/Slav Central Control",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1bqkb1r/3n1ppp/p1p1pn2/1p6/3PP3/2NB1N2/PP3PPP/R1BQK2R b KQkq - 0 9",
    "sideToMove": "Black",
    "prompt": "Black to move. White seized e4 after the Meran Slav. Fight back immediately in the center!",
    "moves": [
      "c5"
    ],
    "explanation": "c5 — ...c5 breaks open the center before White can play e5 comfortably."
  },
  {
    "id": "str-open-file-c",
    "category": "Strategy",
    "theme": "Fighting for the Open c-File",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "rnb2rk1/p1p1qpp1/1p5p/3p4/3P4/4PN2/PP3PPP/R2QKB1R w KQ - 0 11",
    "sideToMove": "White",
    "prompt": "White to move. After exchanges on d5, the c-file is wide open toward c7. Seize it immediately!",
    "moves": [
      "Rc1"
    ],
    "acceptAlso": [
      "b3",
      "Bd3"
    ],
    "explanation": "Rc1 — In Tartakower’s QGD, occupying the c-file targets c7 while Black tries to push ...c5."
  },
  {
    "id": "str-hanging-pawns-attack",
    "category": "Strategy",
    "theme": "Pressuring Hanging Pawns",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "rn1q1rk1/pb2bppp/1p2pn2/2p3B1/2BP4/2N1PN2/PP3PPP/R2Q1RK1 w - c6 0 10",
    "sideToMove": "White",
    "prompt": "White to move. Black played ...c5 creating tension in the center. Choose White’s strongest central continuation!",
    "moves": [
      "Qe2"
    ],
    "acceptAlso": [
      "dxc5",
      "Rc1"
    ],
    "explanation": "Qe2 — Developing the queen clears d1 for the rook while supporting the center."
  },
  {
    "id": "str-english-symmetry-b5",
    "category": "Strategy",
    "theme": "Queenside Space Gain in the English",
    "difficulty": "Easy",
    "rating": 1180,
    "fen": "r1bqkb1r/pp2pppp/2n5/2pn4/8/2N2NP1/PP1PPPBP/R1BQK2R b KQkq - 1 6",
    "sideToMove": "Black",
    "prompt": "Black’s knight stands in the center in the Symmetrical English. Keep it solid and prepare development!",
    "moves": [
      "Nc7"
    ],
    "acceptAlso": [
      "Nxc3",
      "g6"
    ],
    "explanation": "Nc7 — Dropping back to c7 avoids e3/d4 tempos and prepares ...e5."
  },
  {
    "id": "str-caro-advance-bf5",
    "category": "Strategy",
    "theme": "Caro-Kann Light-Square Strategy",
    "difficulty": "Easy",
    "rating": 1140,
    "fen": "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    "sideToMove": "Black",
    "prompt": "Black to move. White gained space with 3.e5. Solve the light-squared bishop problem immediately!",
    "moves": [
      "Bf5"
    ],
    "acceptAlso": [
      "c5"
    ],
    "explanation": "Bf5 — Developing the bishop to f5 before playing ...e6 gives Black an exemplary pawn structure."
  },
  {
    "id": "str-rook-7th-rank",
    "category": "Strategy",
    "theme": "Rook Invading the 7th Rank",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "2r3k1/1p3ppp/p3p3/8/8/4P3/PP3PPP/2R2RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. An open c-file leads straight into Black’s camp. Trade or contest the file actively?",
    "moves": [
      "Rxc8#"
    ],
    "explanation": "Rxc8# — When contesting an open file that unlocks active play, decisive file control defines the endgame."
  },
  {
    "id": "str-double-rooks-c-file",
    "category": "Strategy",
    "theme": "Doubling Heavy Pieces on the Open File",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "2r2rk1/pp2bppp/2n1p3/3p4/3P4/2NBP3/PP3PPP/2R2RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White stands slightly better on the c-file. Place your pieces on their ideal active squares!",
    "moves": [
      "g3"
    ],
    "acceptAlso": [
      "Ne2",
      "f4"
    ],
    "explanation": "g3 repositions the pawn to g3, executing the strongest Stockfish 19 continuation for doubling heavy pieces on the open file."
  },
  {
    "id": "str-rook-central-e1",
    "category": "Strategy",
    "theme": "Centralizing Rooks on Half-Open Files",
    "difficulty": "Easy",
    "rating": 1180,
    "fen": "r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 5",
    "sideToMove": "White",
    "prompt": "White to move. In the Berlin Ruy Lopez, Black took on e4 leaving the e-file semi-open. Seize the center!",
    "moves": [
      "d4"
    ],
    "acceptAlso": [
      "Re1",
      "Qe2"
    ],
    "explanation": "d4 — 4.d4 immediately opens central lines while Black’s king stays in the middle."
  },
  {
    "id": "str-bishop-pair-open",
    "category": "Strategy",
    "theme": "Opening the Position for the Bishop Pair",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "r1bqkbnr/p2p1ppp/2p1p3/2p5/4P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 5",
    "sideToMove": "Black",
    "prompt": "Black owns the two bishops against a c-pawn cluster. Strike the center to free the bishops!",
    "moves": [
      "d5"
    ],
    "acceptAlso": [
      "Qc7",
      "Ne7"
    ],
    "explanation": "d5 — Doubled c-pawns reinforce the d5 break so the bishop pair will dominate open diagonals."
  },
  {
    "id": "str-blockade-passed-pawn",
    "category": "Strategy",
    "theme": "Blockading an Isolated d-Pawn",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "r1bq1rk1/pp3ppp/2n1p3/3p4/3P4/2NB1N2/PP3PPP/R2Q1RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Both sides hold symmetrical structures. Which piece belongs actively on c5 or e5?",
    "moves": [
      "h3"
    ],
    "explanation": "h3 repositions the pawn to h3, executing the strongest Stockfish 19 continuation for blockading an isolated d-pawn."
  },
  {
    "id": "str-color-complex-dark",
    "category": "Strategy",
    "theme": "Weakened Dark Squares After ...g6",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "rn1q1rk1/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/2KR1B1R b - - 4 10",
    "sideToMove": "Black",
    "prompt": "Black to move. Both kings sit on opposite wings in the Najdorf. Strike Black’s active queenside plan!",
    "moves": [
      "Nbd7"
    ],
    "acceptAlso": [
      "b5",
      "Qc7"
    ],
    "explanation": "Nbd7 — Reinforcing b6/c5/e5 prepares ...Nb6 and ...a5 queenside counterplay."
  },
  {
    "id": "str-space-queenside-gambit",
    "category": "Strategy",
    "theme": "Recapturing Toward the Center",
    "difficulty": "Easy",
    "rating": 1080,
    "fen": "r1bqk2r/ppp2pp1/2np1B1p/2b1p3/2B1P3/2NP1N2/PPP2PPP/R2QK2R b KQkq - 0 7",
    "sideToMove": "Black",
    "prompt": "Black to move. White traded on f6. Recapture to maintain active dark-square play.",
    "moves": [
      "Qxf6"
    ],
    "explanation": "Qxf6 — Recapturing with the queen keeps the kingside pawn structure intact for castling."
  },
  {
    "id": "str-berlin-endgame-structure",
    "category": "Strategy",
    "theme": "Berlin Endgame Pawn Majority",
    "difficulty": "Advanced",
    "rating": 1640,
    "fen": "r1bk1b1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNB2RK1 w - - 0 9",
    "sideToMove": "White",
    "prompt": "White holds a healthy 4-vs-3 kingside majority while Black has doubled c-pawns. Choose White’s model move!",
    "moves": [
      "Nc3"
    ],
    "acceptAlso": [
      "h3",
      "Rd1+"
    ],
    "explanation": "Nc3 — Developing with tempo targets Black’s kingside pawn breaks while keeping the e5 bind."
  },
  {
    "id": "str-fianchetto-control-d5",
    "category": "Strategy",
    "theme": "English Fianchetto Pressure on d5",
    "difficulty": "Easy",
    "rating": 1160,
    "fen": "rnbqr1k1/pppp1ppp/5n2/4p3/1bP5/2N2NP1/PP1PPPBP/R1BQ1RK1 b - - 6 6",
    "sideToMove": "Black",
    "prompt": "Black threatens to consolidate in the Reversed Sicilian. Find Black’s sharpest plan!",
    "moves": [
      "e4"
    ],
    "acceptAlso": [
      "d6",
      "Bxc3"
    ],
    "explanation": "e4 — Pushing ...e4 seizes space and drives White’s f3 knight onto awkward squares."
  },
  {
    "id": "str-dutch-stonewall-outpost",
    "category": "Strategy",
    "theme": "Exploiting the e5 Hole in the Stonewall Dutch",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "rnb1k2r/pp2q1pp/2pbpn2/3p1p2/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 w kq - 1 8",
    "sideToMove": "White",
    "prompt": "White to move. Black created an eternal hole on e5. Place White’s dark-squared bishop on its dream diagonal!",
    "moves": [
      "a4"
    ],
    "acceptAlso": [
      "Ne5",
      "Qc2"
    ],
    "explanation": "a4 — Preparing Ba3! trades off Black’s good dark-squared bishop and locks down light/dark outposts."
  },
  {
    "id": "str-tarrasch-iqp-pressure",
    "category": "Strategy",
    "theme": "Pressuring Black’s d5 IQP",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r1bq1rk1/pp2bppp/2n2n2/2pp2B1/3P4/2N2NP1/PP2PPBP/R2Q1RK1 b - - 6 9",
    "sideToMove": "Black",
    "prompt": "Black to move. White targets d5 in the Tarrasch Rubinstein System. Play Black’s key equalizing thrust!",
    "moves": [
      "cxd4"
    ],
    "acceptAlso": [
      "c4",
      "Be6"
    ],
    "explanation": "cxd4 — Clarifying the center opens lines for Black’s bishops and creates dynamic targets."
  },
  {
    "id": "str-london-c5-challenge",
    "category": "Strategy",
    "theme": "Challenging the London Pyramid",
    "difficulty": "Easy",
    "rating": 1140,
    "fen": "r1bqkb1r/pp2pppp/2n2n2/2pp4/3P1B2/2P1P3/PP1N1PPP/R2QKBNR b KQkq - 2 5",
    "sideToMove": "Black",
    "prompt": "Black to move. Counter the London System’s pawn pyramid aggressively!",
    "moves": [
      "Qb6"
    ],
    "acceptAlso": [
      "Bf5",
      "e6"
    ],
    "explanation": "Qb6 — Attacking b2 immediately pressures White’s queenside dark squares left vacant by the f4 bishop."
  },
  {
    "id": "str-qgd-freeing-e5",
    "category": "Strategy",
    "theme": "The Thematic ...c5 Freeing Break",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1b2rk1/pp1nqppp/2p1p3/8/2BP4/2R1PN2/PP3PPP/3Q1RK1 b - - 0 12",
    "sideToMove": "Black",
    "prompt": "Black to move. White’s queen and rook control c3. Play Black’s thematic freeing break!",
    "moves": [
      "e5"
    ],
    "acceptAlso": [
      "Rd8",
      "c5",
      "b6"
    ],
    "explanation": "e5 — Opening lines with ...e5 frees Black’s c8 bishop and dissolves the cramped QGD position."
  },
  {
    "id": "str-italian-giuoco-pianissimo",
    "category": "Strategy",
    "theme": "Patient Manoeuvring in the Giuoco Piano",
    "difficulty": "Easy",
    "rating": 1150,
    "fen": "r1bq1rk1/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N2/PP1N1PPP/R1BQR1K1 b - - 3 9",
    "sideToMove": "Black",
    "prompt": "Black to move. Both sides are maneuvering cleanly. Find Black’s flexible prophylactic setup!",
    "moves": [
      "h6"
    ],
    "acceptAlso": [
      "Ng4",
      "Re8",
      "Be6"
    ],
    "explanation": "h6 — ...h6 stops Bg5 pins permanently and prepares ...Be6/Re8."
  },
  {
    "id": "str-sveshnikov-f4-break",
    "category": "Strategy",
    "theme": "White’s Kingside f4 Break",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "r1bq1rk1/5ppp/2np4/p2Np1b1/R1B1P3/2P5/1PN2PPP/3QK2R b K - 1 15",
    "sideToMove": "Black",
    "prompt": "Black to move. White consolidated d5 and dominates the light squares. Generate Black’s essential counter-play!",
    "moves": [
      "Rb8"
    ],
    "acceptAlso": [
      "Kh8",
      "Be6"
    ],
    "explanation": "Rb8 — Counterattacking along the b-file distracts White from slow positional strangulation."
  },
  {
    "id": "str-queenside-majority-advance",
    "category": "Strategy",
    "theme": "Advancing a Queenside Majority",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "2r2rk1/1p3ppp/p2p1n2/3p4/1P6/P3P3/3N1PPP/2RR2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White has a 2-vs-1 pawn edge against Black’s queenside. Improve king/rook activity cleanly!",
    "moves": [
      "Nb3"
    ],
    "acceptAlso": [
      "f3",
      "b5"
    ],
    "explanation": "Nb3 — Fixing c5 and controlling outpost squares turns a structural edge into a passed pawn."
  },
  {
    "id": "str-rooks-connected-open-d",
    "category": "Strategy",
    "theme": "Doubling on the d-File",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "3r2k1/1p3ppp/p3p3/8/8/4P3/PP3PPP/3RR1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White holds two rooks on an open board. Find the cleanest technical continuation!",
    "moves": [
      "Rxd8#"
    ],
    "explanation": "Rxd8# — Exchanging into a winning active rook ending or taking the open file maximizes the edge."
  },
  {
    "id": "str-two-weaknesses-h4",
    "category": "Strategy",
    "theme": "Creating a Second Weakness",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "4r1k1/1p3pp1/p6p/8/1P6/P3P3/5PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black defends the queenside. How does White seize the open d-file and tie Black down?",
    "moves": [
      "g3"
    ],
    "explanation": "g3 repositions the pawn to g3, executing the strongest Stockfish 19 continuation for creating a second weakness."
  },
  {
    "id": "str-bad-bishop-freeze",
    "category": "Strategy",
    "theme": "Fixing Pawns on the Bishop’s Color",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "6k1/pp3p2/2p1b1p1/4P3/2P5/4B3/PP4PP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White’s bishop aims at Black’s queenside dark squares. Maximize your pawn-and-bishop pressure!",
    "moves": [
      "Kf2"
    ],
    "acceptAlso": [
      "Bxa7",
      "b3"
    ],
    "explanation": "Kf2 — Centralizing the king toward e3/d4 prepares to penetrate via the weakened dark squares."
  },
  {
    "id": "str-knight-outpost-endgame",
    "category": "Strategy",
    "theme": "Superior Knight vs Bad Bishop",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "6k1/5p2/2p1b1p1/1p1pP3/1P1P1P2/2N3P1/6KP/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. The pawn chains are fixed on light squares, locking Black’s light bishop inside. Where should White expand?",
    "moves": [
      "h3"
    ],
    "acceptAlso": [
      "Kf3",
      "Nd1"
    ],
    "explanation": "h3 — Preparing g4 or maneuvering the knight toward c5/e3 tightens the positional vise."
  },
  {
    "id": "str-prophylaxis-passed-pawn",
    "category": "Strategy",
    "theme": "Overprotecting Central Control",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "r1bq1rk1/pp2bppp/2np1n2/4p3/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 b - - 1 10",
    "sideToMove": "Black",
    "prompt": "Black to move. White’s knight jumped away from d4. Fight for central dark-square parity immediately!",
    "moves": [
      "exf4"
    ],
    "acceptAlso": [
      "Bd7",
      "a5"
    ],
    "explanation": "exf4 — Surrendering e5 strategically weakens White’s e4 pawn and gives Black the e5 outpost."
  },
  {
    "id": "str-knight-reroute-e4",
    "category": "Strategy",
    "theme": "Transferring Knight to an Active Post",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r2qkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PQ1P/PP3PP1/R1B1KB1R w KQkq - 2 8",
    "sideToMove": "White",
    "prompt": "White holds the bishop pair against a solid Slav structure. Improve piece harmony patiently!",
    "moves": [
      "Bd3"
    ],
    "acceptAlso": [
      "a3",
      "Bd2"
    ],
    "explanation": "Bd3 — Clearing the back rank for castling while aiming the bishops at the kingside builds quiet pressure."
  },
  {
    "id": "str-qga-isolated-control",
    "category": "Strategy",
    "theme": "Playing With or Against ...c5",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 w kq - 0 7",
    "sideToMove": "White",
    "prompt": "White to move. Black threatens ...b5 to gain queenside tempo. Choose White’s sharpest prophylactic move!",
    "moves": [
      "Qe2"
    ],
    "acceptAlso": [
      "e4",
      "b3"
    ],
    "explanation": "Qe2 repositions the queen to e2, executing the strongest Stockfish 19 continuation for playing with or against ...c5."
  },
  {
    "id": "str-sicilian-dragon-exchange-sac",
    "category": "Strategy",
    "theme": "Endgame Minority & Outpost Transition",
    "difficulty": "Advanced",
    "rating": 1660,
    "fen": "2rq1rk1/pp1bppbp/3p1np1/4n3/3NP3/1BN1BP2/PPPQ2PP/2KR3R w - - 9 12",
    "sideToMove": "White",
    "prompt": "White to move. Black jumped to e5 targeting c4. Find White’s thematic strategic/attacking move!",
    "moves": [
      "h4"
    ],
    "acceptAlso": [
      "Kb1"
    ],
    "explanation": "h4 — Launching h4-h5 prizes open the h-file before Black’s queenside counterplay lands."
  },
  {
    "id": "str-petroff-symmetry-break",
    "category": "Strategy",
    "theme": "Breaking Symmetry with c4",
    "difficulty": "Easy",
    "rating": 1160,
    "fen": "r1bqk2r/ppp1bppp/2n5/3p4/3Pn3/3B1N2/PPP2PPP/RNBQ1RK1 w kq - 4 8",
    "sideToMove": "White",
    "prompt": "White finished kingside development in the Classical Petroff. Strike at Black’s e4 outpost!",
    "moves": [
      "c4"
    ],
    "acceptAlso": [
      "Re1",
      "Nbd2",
      "Nc3"
    ],
    "explanation": "c4 — Undercutting d5 loosens the support under Black’s advanced e4 knight."
  }
];
