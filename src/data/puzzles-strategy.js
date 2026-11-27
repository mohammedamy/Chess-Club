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
  },
  {
    "id": "str-najdorf-outpost-nd5",
    "category": "Strategy",
    "theme": "Seizing the d5 Outpost in the Najdorf",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r2qkb1r/3n1ppp/p2pbn2/4p3/Pp2P3/1NN1BP2/1PPQ2PP/R3KB1R w KQkq - 0 11",
    "sideToMove": "White",
    "prompt": "White to move. Black pushed ...b4 to kick your knight after advancing ...e5, leaving the d5 square chronically weak. Occupy the hole immediately!",
    "moves": [
      "Nd5"
    ],
    "explanation": "Nd5! — Jumping into the weakened d5 outpost seizes lasting central control; trading on d5 only opens lines and fixes Black’s backward d6 pawn."
  },
  {
    "id": "str-english-outpost-nd4",
    "category": "Strategy",
    "theme": "Centralizing into the d4 Outpost",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1bqk2r/pppp1ppp/2n5/3Pp3/1b6/5NP1/PP1PPP1P/R1BQKB1R b KQkq - 0 6",
    "sideToMove": "Black",
    "prompt": "Black to move. White pushed d4-d5 attacking your c6 knight, vacating control over d4. Strike back by planting your knight in the heart of the board!",
    "moves": [
      "Nd4"
    ],
    "explanation": "Nd4! — Planting the knight actively on d4 creates immediate pressure against f3 and e2 while neutralizing White’s central clamp."
  },
  {
    "id": "str-qgd-outpost-ne5",
    "category": "Strategy",
    "theme": "Planting a Knight on the e5 Outpost",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r2q1rk1/pb1nbppp/1p3n2/2pp4/3P1B2/2NBPN2/PP3PPP/2RQ1RK1 w - - 2 11",
    "sideToMove": "White",
    "prompt": "White to move in the Queen’s Gambit Declined. Your pieces coordinate smoothly toward the kingside and e5 is unguarded by pawns. Seize the key outpost!",
    "moves": [
      "Ne5"
    ],
    "explanation": "Ne5! — Cementing the knight on e5 dominates central squares, frees f3/Qf3 ideas, and forces Black into uncomfortable exchanges."
  },
  {
    "id": "str-stonewall-outpost-ne5",
    "category": "Strategy",
    "theme": "Stonewall Control of the e5 Outpost",
    "difficulty": "Easy",
    "rating": 1180,
    "fen": "r1bq1rk1/pp3ppp/2nbpn2/2pp4/3P1P2/2PBPN2/PP1N2PP/R1BQK2R w KQ - 3 8",
    "sideToMove": "White",
    "prompt": "White to move. You have built the d4-e3-f4 Stonewall pawn triangle. Plant the right piece on its signature central outpost!",
    "moves": [
      "Ne5"
    ],
    "explanation": "Ne5! — Occupies the natural Stonewall anchor on e5, locking down Black’s minor pieces while preparing a future kingside attack."
  },
  {
    "id": "str-carlsbad-minority-b5",
    "category": "Strategy",
    "theme": "Carlsbad Minority Attack Breakthrough",
    "difficulty": "Medium",
    "rating": 1400,
    "fen": "r1bqr1k1/1p3ppp/p1pb1nn1/3p2B1/PP1P4/2NBPN2/2Q2PPP/1R3RK1 w - - 1 14",
    "sideToMove": "White",
    "prompt": "White to move in the Carlsbad structure. Your b4 and a4 pawns are primed on the queenside. Trigger the thematic pawn clash to create permanent Black weaknesses!",
    "moves": [
      "b5"
    ],
    "explanation": "b5! — Executing the minority attack fractures Black’s c6/d5 pawn shield, leaving behind a weak backward c6 pawn or an isolated d5 pawn."
  },
  {
    "id": "str-carlsbad-minority-b4",
    "category": "Strategy",
    "theme": "Preparing the Minority Attack on the b-File",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "r1b1r1k1/1p2qp1p/2p1n1p1/p2p3n/3P4/P1NBPN2/1PQ2PPP/1RR3K1 w - - 0 16",
    "sideToMove": "White",
    "prompt": "White to move. Your rooks sit behind the b- and c-files while Black played ...a5 to slow you down. Press forward with the queenside minority plan anyway!",
    "moves": [
      "b4"
    ],
    "explanation": "b4! — Challenging Black’s ...a5 stopper immediately opens queenside lines for your b1/c1 rooks and leaves Black’s pawns vulnerable."
  },
  {
    "id": "str-winawer-bad-bishop-ba3",
    "category": "Strategy",
    "theme": "Activating and Trading a Bad Bishop",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r3k2r/pp1bnppp/2n1p3/q1ppP3/P2P4/2P2N2/2PQ1PPP/R1B1KB1R w KQkq - 1 10",
    "sideToMove": "White",
    "prompt": "White to move in the French Winawer. Your dark-squared bishop on c1 is hemmed in by c3-d4-e5, while Black eyes dark squares. Transform this piece immediately!",
    "moves": [
      "Ba3"
    ],
    "explanation": "Ba3! — Putting the c1 bishop on the open a3-f8 diagonal pressures c5 and seeks an advantageous trade of bad bishops or dark-square dominance."
  },
  {
    "id": "str-caro-bad-bishop-bxd3",
    "category": "Strategy",
    "theme": "Exchanging the Caro-Kann Light-Squared Bishop",
    "difficulty": "Easy",
    "rating": 1160,
    "fen": "r2qkbnr/pp1npppb/2p4p/7P/3P4/3B1NN1/PPP2PP1/R1BQK2R b KQkq - 2 9",
    "sideToMove": "Black",
    "prompt": "Black to move in the Classical Caro-Kann. White offered the bishop trade on d3 before you seal your pawn chain with ...e6. Resolve the tension accurately!",
    "moves": [
      "Bxd3"
    ],
    "explanation": "Bxd3! — Trading off your light-squared bishop cleanly before playing ...e6 avoids locking a passive bishop inside your pawn structure."
  },
  {
    "id": "str-kid-space-d5",
    "category": "Strategy",
    "theme": "Space Gain in the King’s Indian Center",
    "difficulty": "Easy",
    "rating": 1140,
    "fen": "r1bq1rk1/ppp2pbp/2np1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 2 8",
    "sideToMove": "White",
    "prompt": "White to move. Black challenged the center with ...e5. Gain decisive queenside space and drive back the c6 knight!",
    "moves": [
      "d5"
    ],
    "explanation": "d5! — Closing the center gains a strong space advantage on the queenside, forcing ...Ne7 and freeing White’s b4-c5 expansion."
  },
  {
    "id": "str-qgd-space-c5",
    "category": "Strategy",
    "theme": "Queenside Space Clamp with c4-c5",
    "difficulty": "Medium",
    "rating": 1310,
    "fen": "r2qkb1r/3n1ppp/p1p1pn2/1p1p4/2PP2b1/1PN1PN2/P3BPPP/R1BQ1RK1 w kq - 2 9",
    "sideToMove": "White",
    "prompt": "White to move against Black’s Semi-Slav queenside setup. Fix Black’s pawns and seize permanent queenside territory!",
    "moves": [
      "c5"
    ],
    "explanation": "c5! — Advancing the c-pawn past d5 locks in a lasting queenside space clamp and restricts Black’s counterplay."
  },
  {
    "id": "str-rauzer-space-e5",
    "category": "Strategy",
    "theme": "Central Space Wedge with e4-e5",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "r1bqk2r/4bpp1/p2ppn1p/1p6/3BPP2/2N5/PPPQ2PP/2KR1B1R w kq b6 0 12",
    "sideToMove": "White",
    "prompt": "White to move in the Sicilian Richter-Rauzer. Black’s king stays uncastled in the center while you stand ready to expand. Push forward to seize space and lines!",
    "moves": [
      "e5"
    ],
    "explanation": "e5! — Pushing e5 wins vital central space, opens files against Black’s king after ...dxe5 fxe5, and dislodges the f6 defender."
  },
  {
    "id": "str-ruy-prophylaxis-h3",
    "category": "Strategy",
    "theme": "Prophylaxis: Preventing ...Bg4 in the Ruy Lopez",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/3PP3/1BP2N2/PP3PPP/RNBQR1K1 w - - 0 10",
    "sideToMove": "White",
    "prompt": "White to move in the Closed Ruy Lopez. Black would love to pin your f3 knight with ...Bg4 and attack d4. Play the classic prophylactic move!",
    "moves": [
      "h3"
    ],
    "explanation": "h3! — Preventing ...Bg4 preserves solid control over the d4 center before completing Nbd2-f1-g3 maneuvers."
  },
  {
    "id": "str-italian-prophylaxis-re1",
    "category": "Strategy",
    "theme": "Prophylaxis and Piece Flexibility with Re1",
    "difficulty": "Easy",
    "rating": 1190,
    "fen": "r1bq1rk1/bpp2pp1/p1np1n1p/4p3/4P3/1BPP1N1P/PP1N1PP1/R1BQ1RK1 w - - 1 10",
    "sideToMove": "White",
    "prompt": "White to move in the Giuoco Pianissimo. Overprotect e4, vacate f1 for a knight maneuver, and strengthen your central setup quietly!",
    "moves": [
      "Re1"
    ],
    "explanation": "Re1! — Overprotecting e4 anticipates future ...d5 breaks while clearing f1 for the thematic Nbd2-f1-g3 transfer."
  },
  {
    "id": "str-petroff-open-file-re1",
    "category": "Strategy",
    "theme": "Seizing the Open e-File",
    "difficulty": "Medium",
    "rating": 1290,
    "fen": "r4rk1/ppp1bppp/2n5/3q1b2/3P4/P1P2N2/4BPPP/R1BQ1RK1 w - - 0 14",
    "sideToMove": "White",
    "prompt": "White to move after the symmetrical central exchanges. Claim the open e-file right away to gain tempo against Black’s e7 bishop!",
    "moves": [
      "Re1"
    ],
    "explanation": "Re1! — Immediately seizing the only open central file creates latent pressure on e7 and restricts Black’s rook coordination."
  },
  {
    "id": "str-iqp-advance-d5",
    "category": "Strategy",
    "theme": "Timed d4-d5 Isolani Liquidation Break",
    "difficulty": "Advanced",
    "rating": 1600,
    "fen": "2rq1rk1/pb3ppp/1pn1pb2/8/3P4/2NB1N2/PP2QPPP/3RR1K1 w - - 0 15",
    "sideToMove": "White",
    "prompt": "White to move with an isolated d4 pawn. Your rooks stand behind the d- and e-files while Black’s f6 bishop just stepped out. Strike at the right moment!",
    "moves": [
      "d5"
    ],
    "explanation": "d5! — Dissolving the isolated pawn at the ideal moment opens the d- and e-files for White’s centralized rooks and bishops."
  },
  {
    "id": "str-iqp-blockade-nb4",
    "category": "Strategy",
    "theme": "Fighting the IQP: Removing the Attacking Bishop",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "r2q1rk1/pb2bppp/1pn1pn2/6B1/3P4/2NB1N2/PP2QPPP/3RR1K1 b - - 3 13",
    "sideToMove": "Black",
    "prompt": "Black to move against White’s isolated d4 pawn. White’s d3 bishop anchors the kingside attack and guards d5. Find the strong strategic jump that fights for the d5 blockade!",
    "moves": [
      "Nb4"
    ],
    "explanation": "Nb4! — Challenging White’s active d3 bishop weakens White’s dark-square grip and secures the d5 blockading square for Black’s knights and bishop."
  },
  {
    "id": "str-kid-dark-complex-bg5",
    "category": "Strategy",
    "theme": "Dark-Square Complex Control",
    "difficulty": "Medium",
    "rating": 1430,
    "fen": "r1bq1rk1/pp3pb1/3ppnp1/2pPn3/2P1P2p/2N1BP2/PP2B1PP/R2QKN1R w KQ - 0 12",
    "sideToMove": "White",
    "prompt": "White to move in the Saemisch King’s Indian. Black rushed ...h5-h4 on the kingside, leaving dark squares around f6 vulnerable. Seize dark-square dominance!",
    "moves": [
      "Bg5"
    ],
    "explanation": "Bg5! — Pinning the f6 knight and eyeing h4 dominates the dark squares and puts Black’s overextended kingside pawns under immediate pressure."
  },
  {
    "id": "str-dragon-dark-squares-nc4",
    "category": "Strategy",
    "theme": "Seizing the c4 Dark-Square Outpost",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "2rq1rk1/pp1bppbp/3p1np1/4n3/3NP3/1BN1BP2/PPPQ2PP/1K1R3R b - - 10 12",
    "sideToMove": "Black",
    "prompt": "Black to move in the Sicilian Dragon. Both sides have castled opposite wings and your knights patrol the center. Anchor a piece on the key queenside dark square!",
    "moves": [
      "Nc4"
    ],
    "explanation": "Nc4! — Landing on c4 attacks e3 and forces Bxc4 Rxc4, trading off White’s key dark-squared attacker and opening the c-file."
  },
  {
    "id": "str-good-knight-tall-bishop",
    "category": "Strategy",
    "theme": "Good Knight vs Tall-Pawn Bad Bishop",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "6k1/2b2pp1/2p1p2p/1pPpP3/1P1P4/4K1P1/3N3P/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Every black queenside pawn stands on a dark square, locking in Black’s c7 bishop. Route your knight to exploit the light-square holes!",
    "moves": [
      "Nb3"
    ],
    "explanation": "Nb3! — Heading toward a5-c6 exploits the permanent light-square holes while Black’s bishop remains reduced to a tall pawn."
  },
  {
    "id": "str-spanish-reroute-nf1",
    "category": "Strategy",
    "theme": "Classic Ruy Lopez Knight Rerouting",
    "difficulty": "Medium",
    "rating": 1460,
    "fen": "r1bn1rk1/2q1bppp/p2p1n2/1ppPp3/4P3/2P2N1P/PPBN1PP1/R1BQR1K1 w - - 1 14",
    "sideToMove": "White",
    "prompt": "White to move in the Closed Ruy Lopez after closing the center with d4-d5. Re-route your queenside knight toward the kingside via the classic Spanish path!",
    "moves": [
      "Nf1"
    ],
    "explanation": "Nf1! — Begins the classic Nb1-d2-f1-g3(e3) transfer, sliding toward f5 and strengthening White’s kingside initiative."
  },
  {
    "id": "str-iqp-blockade-ne5",
    "category": "Strategy",
    "theme": "IQP Dynamic Outpost (Ne5)",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "r1bq1rk1/pp2nppp/4pb2/3n4/3PB3/P1N2N2/1P3PPP/R1BQ1RK1 w - - 3 12",
    "sideToMove": "White",
    "prompt": "White to move with an isolated d4 pawn against Black’s d5 blockade. Plant a knight aggressively in the center before Black consolidates!",
    "moves": [
      "Ne5"
    ],
    "acceptAlso": [
      "Re1",
      "h3",
      "Qb3"
    ],
    "explanation": "Ne5! seizes the prime e5 outpost, eyes c6/f7, and maximizes dynamic piece activity around the isolated d4 pawn."
  },
  {
    "id": "str-backward-d6-najdorf-a4",
    "category": "Strategy",
    "theme": "Restraining Counterplay Against Backward d6",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "2rq1rk1/1p1nbppp/p2pbn2/4p3/4P3/1NN1B3/PPPQBPPP/R2R2K1 w - - 10 12",
    "sideToMove": "White",
    "prompt": "White to move. Black’s d6 pawn is backward on the half-open d-file, and Black threatens ...b5. Clamp down on queenside counterplay!",
    "moves": [
      "a4"
    ],
    "acceptAlso": [
      "h3",
      "Qd3",
      "Qe1"
    ],
    "explanation": "a4! halts ...b5 expansion and preserves White’s long-term bind on d5 and the backward d6 pawn."
  },
  {
    "id": "str-hanging-pawns-qb3",
    "category": "Strategy",
    "theme": "Pressuring Hanging Pawns (c5-d5)",
    "difficulty": "Advanced",
    "rating": 1610,
    "fen": "rn1q1rk1/pb2bppp/8/2pp4/8/2Q2NP1/PP2PPBP/R1BR2K1 w - - 0 13",
    "sideToMove": "White",
    "prompt": "White to move against Black’s hanging pawns on c5 and d5. Centralize your queen or knight to target the weakened dark squares!",
    "moves": [
      "Qb3"
    ],
    "acceptAlso": [
      "Ne5"
    ],
    "explanation": "Qb3! (or Ne5!) immediately attacks d5/b7 and forces Black’s hanging pawns onto the defensive."
  },
  {
    "id": "str-hanging-pawns-qa3",
    "category": "Strategy",
    "theme": "Pinning Hanging Pawns (Qa3)",
    "difficulty": "Medium",
    "rating": 1450,
    "fen": "rn3rk1/p3qpp1/1p2b2p/2pp4/Q2P4/4PN2/PP3PPP/2R1KB1R w K c6 0 13",
    "sideToMove": "White",
    "prompt": "White to move. Black pushed ...c5 creating hanging pawns on c5 and d5. Find the crisp positional move that ties down Black’s c5 pawn!",
    "moves": [
      "Qa3"
    ],
    "acceptAlso": [
      "b3",
      "dxc5"
    ],
    "explanation": "Qa3! (or b3 / dxc5) puts immediate pressure along the a3-f8 diagonal and restricts Black’s queenside coordination."
  },
  {
    "id": "str-bishop-pair-nf4",
    "category": "Strategy",
    "theme": "Bishop Pair & Tempo Control",
    "difficulty": "Medium",
    "rating": 1460,
    "fen": "r1b2rk1/pp3ppp/2n2n2/3q4/3p4/P2B4/1PP1NPPP/R1BQ1RK1 w - - 2 13",
    "sideToMove": "White",
    "prompt": "White to move with the bishop pair against Black’s isolated d4 pawn. Drive away Black’s centralized queen with tempo!",
    "moves": [
      "Nf4"
    ],
    "explanation": "Nf4! hits the d5 queen immediately while preserving both bishops and eyeing d5/h5."
  },
  {
    "id": "str-bishop-pair-bc2",
    "category": "Strategy",
    "theme": "Preserving the Spanish Bishop Pair",
    "difficulty": "Easy",
    "rating": 1180,
    "fen": "r1bq1rk1/2p1bppp/p2p1n2/np2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
    "sideToMove": "White",
    "prompt": "White to move in the Closed Ruy López. Black attacked your light-squared bishop with ...Na5. Keep your bishop on the key attacking diagonal!",
    "moves": [
      "Bc2"
    ],
    "explanation": "Bc2! preserves the prized Spanish bishop behind the c3-d4 chain, ready to target h7 and support the center."
  },
  {
    "id": "str-french-queenside-nbd2",
    "category": "Strategy",
    "theme": "Coordinating Minor Pieces in Closed Centers",
    "difficulty": "Easy",
    "rating": 1190,
    "fen": "2r1kbnr/pp1b1ppp/1q2p3/n2pP3/1P1P4/P4N2/1B3PPP/RN1QKB1R w KQk - 3 10",
    "sideToMove": "White",
    "prompt": "White to move in the Advance French after Black jumped ...Na5. Develop harmoniously while keeping the c4 square covered!",
    "moves": [
      "Nbd2"
    ],
    "explanation": "Nbd2! develops cleanly, avoids blocking the c- or d-pieces, and prepares to contest c4/b3."
  },
  {
    "id": "str-gm-b33-open-rfd1-7",
    "category": "Strategy",
    "theme": "Sicilian Structure: Seizing the d-File (Rfd1)",
    "difficulty": "Medium",
    "rating": 1469,
    "fen": "1rb2rk1/4qpbp/p7/1p1Pp3/4B3/N4Q2/PP3PPP/R4RK1 w - - 1 18",
    "sideToMove": "White",
    "prompt": "White to move (Topalov–Radjabov, B33). Claim or contest the critical d-file with your heavy pieces!",
    "moves": [
      "Rfd1"
    ],
    "acceptAlso": [
      "Rad1"
    ],
    "explanation": "Rfd1! places the rook on the pivotal d-file, seizing penetration squares and restricting the opponent. (Rad1 is also strong.)"
  },
  {
    "id": "str-gm-e37-prophylaxis-kg1-8",
    "category": "Strategy",
    "theme": "Nimzo-Indian Structure: Prophylactic Restraint (Kg1)",
    "difficulty": "Medium",
    "rating": 1366,
    "fen": "2krr3/ppp2p1p/2bn3q/8/P5P1/R3P1P1/1PQ1BK1P/2B2R2 w - - 1 23",
    "sideToMove": "White",
    "prompt": "White to move (Topalov–Adams, E37). Before pursuing your own plan, play the quiet prophylactic move that shuts down the opponent’s main idea.",
    "moves": [
      "Kg1"
    ],
    "explanation": "Kg1! is crisp prophylaxis, preventing enemy counterplay while keeping your positional structure intact."
  },
  {
    "id": "str-gm-e52-bishop-bc4-9",
    "category": "Strategy",
    "theme": "Nimzo-Indian Structure: Optimal Bishop Diagonal (Bc4)",
    "difficulty": "Easy",
    "rating": 1229,
    "fen": "r2r2k1/1bp1qpp1/1p1b4/1P5p/3PpP2/3BP3/1BQ3PP/2R1R1K1 w - - 0 23",
    "sideToMove": "White",
    "prompt": "White to move (Kasimdzhanov–Vallejo Pons, E52). Place your bishop on the diagonal that maximizes both defense and long-term pressure.",
    "moves": [
      "Bc4"
    ],
    "explanation": "Bc4! puts the bishop on its ideal diagonal, harmonizing with the pawn structure."
  },
  {
    "id": "str-gm-c89-open-re1-10",
    "category": "Strategy",
    "theme": "Ruy López: Seizing the e-File (Re1)",
    "difficulty": "Advanced",
    "rating": 1690,
    "fen": "r1bq1rk1/5ppp/p1pb4/1p1nR3/8/1BPP4/PP3PPP/RNBQ2K1 w - - 1 13",
    "sideToMove": "White",
    "prompt": "White to move (Kasimdzhanov–Adams, C89). Claim or contest the critical e-file with your heavy pieces!",
    "moves": [
      "Re1"
    ],
    "explanation": "Re1! places the rook on the pivotal e-file, seizing penetration squares and restricting the opponent."
  },
  {
    "id": "str-gm-c67-open-r3d2-11",
    "category": "Strategy",
    "theme": "Ruy López: Seizing the d-File (R3d2)",
    "difficulty": "Expert",
    "rating": 1893,
    "fen": "r3kb2/ppp2p2/4bPp1/7r/2p1NB1p/3R3P/PPP3P1/3R2K1 w - - 0 23",
    "sideToMove": "White",
    "prompt": "White to move (Svidler–Topalov, C67). Claim or contest the critical d-file with your heavy pieces!",
    "moves": [
      "R3d2"
    ],
    "explanation": "R3d2! places the rook on the pivotal d-file, seizing penetration squares and restricting the opponent."
  },
  {
    "id": "str-gm-c88-simplification-rxa8-12",
    "category": "Strategy",
    "theme": "Ruy López: Favorable Simplification (Rxa8)",
    "difficulty": "Medium",
    "rating": 1374,
    "fen": "r3rbk1/1b1p1pp1/2q4p/4P3/2n5/2N2N1P/1PQ2PP1/R1B1R1K1 w - - 5 23",
    "sideToMove": "White",
    "prompt": "White to move (Anand–Svidler, C88). Simplify the position with a timely exchange to transition into a cleaner, better structure!",
    "moves": [
      "Rxa8"
    ],
    "explanation": "Rxa8! trades off a key defending/attacking piece at the exact right moment, securing a positional edge."
  },
  {
    "id": "str-gm-e06-prophylaxis-a4-13",
    "category": "Strategy",
    "theme": "Catalan / Queen’s Indian: Prophylactic Restraint (a4)",
    "difficulty": "Easy",
    "rating": 1213,
    "fen": "r2r2k1/p1R1bppp/bp2pn2/1N1pN3/1q1P1P2/4P1P1/PP4BP/3Q1RK1 w - - 5 18",
    "sideToMove": "White",
    "prompt": "White to move (Leko–Aronian, E06). Before pursuing your own plan, play the quiet prophylactic move that shuts down the opponent’s main idea.",
    "moves": [
      "a4"
    ],
    "explanation": "a4! is crisp prophylaxis, preventing enemy counterplay while keeping your positional structure intact."
  },
  {
    "id": "str-gm-a16-prophylaxis-a3-14",
    "category": "Strategy",
    "theme": "English Opening: Prophylactic Restraint (a3)",
    "difficulty": "Medium",
    "rating": 1448,
    "fen": "rn3rk1/5pbp/p1b1p1p1/qpP5/5P2/1QN1B3/PP2B1PP/3R1RK1 w - - 1 18",
    "sideToMove": "White",
    "prompt": "White to move (Topalov–Svidler, A16). Before pursuing your own plan, play the quiet prophylactic move that shuts down the opponent’s main idea.",
    "moves": [
      "a3"
    ],
    "acceptAlso": [
      "Rd6"
    ],
    "explanation": "a3! is crisp prophylaxis, preventing enemy counterplay while keeping your positional structure intact. (Rd6 is also strong.)"
  },
  {
    "id": "str-gm-d43-simplification-nxd7-15",
    "category": "Strategy",
    "theme": "Queen’s Gambit Declined: Favorable Simplification (Nxd7)",
    "difficulty": "Medium",
    "rating": 1485,
    "fen": "r2qkb1r/pb1n1p2/2p1pn2/1p2N1p1/2pPP2p/2N2P2/PP2BBPP/R2QK2R w KQkq - 4 13",
    "sideToMove": "White",
    "prompt": "White to move (Carlsen–Anand, D43). Simplify the position with a timely exchange to transition into a cleaner, better structure!",
    "moves": [
      "Nxd7"
    ],
    "acceptAlso": [
      "a4"
    ],
    "explanation": "Nxd7! trades off a key defending/attacking piece at the exact right moment, securing a positional edge. (a4 is also strong.)"
  },
  {
    "id": "str-gm-b90-open-rhb1-16",
    "category": "Strategy",
    "theme": "Sicilian Structure: Seizing the b-File (Rhb1)",
    "difficulty": "Medium",
    "rating": 1382,
    "fen": "1q2k2r/2rnbppp/3p4/3Pp1P1/Q6P/2P1BP2/3NK3/R6R w k - 3 23",
    "sideToMove": "White",
    "prompt": "White to move (Topalov–Ivanchuk, B90). Claim or contest the critical b-file with your heavy pieces!",
    "moves": [
      "Rhb1"
    ],
    "explanation": "Rhb1! places the rook on the pivotal b-file, seizing penetration squares and restricting the opponent."
  },
  {
    "id": "str-gm-b33-bishop-bxb5-17",
    "category": "Strategy",
    "theme": "Sicilian Structure: Good vs Bad Bishop Trade (Bxb5)",
    "difficulty": "Easy",
    "rating": 1197,
    "fen": "1rr3k1/5ppp/1q1p4/1b2p1b1/1NB1P3/R1P5/4QPPP/5RK1 w - - 5 23",
    "sideToMove": "White",
    "prompt": "White to move (Shirov–Topalov, B33). Evaluate the color complexes and execute the favorable bishop exchange!",
    "moves": [
      "Bxb5"
    ],
    "explanation": "Bxb5! eliminates the opponent’s dangerous active bishop, leaving a cleaner structural advantage."
  },
  {
    "id": "str-gm-c19-prophylaxis-h4-18",
    "category": "Strategy",
    "theme": "French Defence: Prophylactic Restraint (h4)",
    "difficulty": "Medium",
    "rating": 1456,
    "fen": "1k1r2r1/ppqb1p2/4p3/3nP3/3Q1PP1/P1p5/2P4P/1RB1KBR1 w - - 1 18",
    "sideToMove": "White",
    "prompt": "White to move (Dominguez Perez–Grischuk, C19). Before pursuing your own plan, play the quiet prophylactic move that shuts down the opponent’s main idea.",
    "moves": [
      "h4"
    ],
    "explanation": "h4! is crisp prophylaxis, preventing enemy counterplay while keeping your positional structure intact."
  },
  {
    "id": "str-gm-c67-pawn-c4-19",
    "category": "Strategy",
    "theme": "Ruy López: Timed Pawn Break & Space (c4)",
    "difficulty": "Medium",
    "rating": 1353,
    "fen": "4kb1r/pbp2pp1/1pp4p/3nP2N/6P1/4BN2/PPP2P1P/3R2K1 w - - 0 18",
    "sideToMove": "White",
    "prompt": "White to move (Vallejo Pons–Aronian, C67). Strike with the thematic pawn advance to gain space or challenge the opponent’s pawn chain!",
    "moves": [
      "c4"
    ],
    "acceptAlso": [
      "h3"
    ],
    "explanation": "c4! hits at the right moment, gaining crucial space and opening favorable lines. (h3 is also strong.)"
  },
  {
    "id": "str-gm-a64-space-a5-20",
    "category": "Strategy",
    "theme": "Benoni Structure: Queenside Clamp (a5) & c4 Outpost",
    "difficulty": "Advanced",
    "rating": 1660,
    "fen": "1rbqr1k1/1p1n1pbp/p2p1np1/2pP4/P7/2N3PP/1P1NPPB1/R1BQ1RK1 w - - 1 13",
    "sideToMove": "White",
    "prompt": "White to move (Aronian–Topalov, A64). Clamp down on Black’s queenside pawn break with a4-a5, or leap onto the c4 outpost!",
    "moves": [
      "a5"
    ],
    "explanation": "a5! fixes Black’s queenside dark squares and prevents ...b5 forever, while Nc4! is also strong.",
    "acceptAlso": [
      "Nc4",
      "Qb3"
    ]
  },
  {
    "id": "str-gm-d48-simplification-nxc5-21",
    "category": "Strategy",
    "theme": "Queen’s Gambit Declined: Favorable Simplification (Nxc5)",
    "difficulty": "Easy",
    "rating": 1181,
    "fen": "r2qkb1r/1b3ppp/p3pn2/2n5/N7/1P1BPN2/5PPP/R1BQK2R w KQkq - 0 13",
    "sideToMove": "White",
    "prompt": "White to move (Aronian–Gelfand, D48). Simplify the position with a timely exchange to transition into a cleaner, better structure!",
    "moves": [
      "Nxc5"
    ],
    "explanation": "Nxc5! trades off a key defending/attacking piece at the exact right moment, securing a positional edge."
  },
  {
    "id": "str-gm-d39-bishop-bxd7-22",
    "category": "Strategy",
    "theme": "Queen’s Gambit Declined: Good vs Bad Bishop Trade (Bxd7)",
    "difficulty": "Expert",
    "rating": 1866,
    "fen": "rq3rk1/p2bbpp1/4p2p/1B2n3/1P1p4/P4NN1/4QPPP/R2R2K1 w - - 0 18",
    "sideToMove": "White",
    "prompt": "White to move (Grischuk–Aronian, D39). Evaluate the color complexes and execute the favorable bishop exchange!",
    "moves": [
      "Bxd7"
    ],
    "explanation": "Bxd7! eliminates the opponent’s dangerous active bishop, leaving a cleaner structural advantage."
  },
  {
    "id": "str-gm-a29-pawn-d4-23",
    "category": "Strategy",
    "theme": "English Opening: Timed Pawn Break & Space (d4)",
    "difficulty": "Medium",
    "rating": 1361,
    "fen": "r1bqk3/pp3p2/1np4r/2b1p3/6p1/P1NPP1P1/1B4BP/R2Q1RK1 w q - 0 18",
    "sideToMove": "White",
    "prompt": "White to move (Topalov–Vallejo Pons, A29). Strike with the thematic pawn advance to gain space or challenge the opponent’s pawn chain!",
    "moves": [
      "d4"
    ],
    "explanation": "d4! hits at the right moment, gaining crucial space and opening favorable lines."
  },
  {
    "id": "str-gm-a29-outpost-nde4-24",
    "category": "Strategy",
    "theme": "English Opening: Knight Outpost on e4",
    "difficulty": "Medium",
    "rating": 1398,
    "fen": "r1qr2k1/1pp1b1pp/1n1nbp2/1P2p3/p7/P1NPP1P1/1BQN1PBP/1RR3K1 w - - 2 18",
    "sideToMove": "White",
    "prompt": "White to move (Carlsen–Kramnik, A29). Anchor a knight on the strategic e4 square to dominate the center and restrict counterplay.",
    "moves": [
      "Nde4"
    ],
    "acceptAlso": [
      "h4",
      "Bf1"
    ],
    "explanation": "Nde4! plants the knight on the key e4 outpost, radiating pressure across enemy squares. (h4 or Bf1 is also strong.)"
  },
  {
    "id": "str-gm-d11-open-rfe1-25",
    "category": "Strategy",
    "theme": "Slav / QGA Structure: Seizing the e-File (Rfe1)",
    "difficulty": "Advanced",
    "rating": 1645,
    "fen": "r3qrk1/1p3pp1/p6p/1b1pP3/1B6/Q7/1P3PPP/2R2RK1 w - - 1 23",
    "sideToMove": "White",
    "prompt": "White to move (Nakamura–Ni Hua, D11). Claim or contest the critical e-file with your heavy pieces!",
    "moves": [
      "Rfe1"
    ],
    "explanation": "Rfe1! places the rook on the pivotal e-file, seizing penetration squares and restricting the opponent."
  },
  {
    "id": "str-gm-b22-prophylaxis-h3-26",
    "category": "Strategy",
    "theme": "Sicilian Structure: Prophylactic Restraint (h3)",
    "difficulty": "Medium",
    "rating": 1472,
    "fen": "r4rk1/p4ppp/2p5/N1b1pb2/2B3n1/2P1P3/PPN1K1PP/R6R w - - 2 18",
    "sideToMove": "White",
    "prompt": "White to move (Howell–Carlsen, B22). Before pursuing your own plan, play the quiet prophylactic move that shuts down the opponent’s main idea.",
    "moves": [
      "h3"
    ],
    "explanation": "h3! is crisp prophylaxis, preventing enemy counterplay while keeping your positional structure intact."
  },
  {
    "id": "str-gm-b22-pawn-b5-27",
    "category": "Strategy",
    "theme": "Sicilian Structure: Timed Pawn Break & Space (b5)",
    "difficulty": "Medium",
    "rating": 1369,
    "fen": "2r1r1k1/p4ppp/1bN2n2/N3p3/1PB1b3/2P1P2P/P3K1P1/R5R1 w - - 1 23",
    "sideToMove": "White",
    "prompt": "White to move (Howell–Carlsen, B22). Strike with the thematic pawn advance to gain space or challenge the opponent’s pawn chain!",
    "moves": [
      "b5"
    ],
    "acceptAlso": [
      "Bb5"
    ],
    "explanation": "b5! hits at the right moment, gaining crucial space and opening favorable lines. (Bb5 is also strong.)"
  },
  {
    "id": "str-gm-b51-pawn-f5-28",
    "category": "Strategy",
    "theme": "Sicilian Structure: Timed Pawn Break & Space (f5)",
    "difficulty": "Medium",
    "rating": 1406,
    "fen": "r3r3/1p3kp1/p1b2p1p/q3p3/1bp1PP2/2N1B1Q1/PPPR2PP/5RK1 w - - 1 23",
    "sideToMove": "White",
    "prompt": "White to move (Ni Hua–Carlsen, B51). Strike with the thematic pawn advance to gain space or challenge the opponent’s pawn chain!",
    "moves": [
      "f5"
    ],
    "explanation": "f5! hits at the right moment, gaining crucial space and opening favorable lines."
  },
  {
    "id": "str-gm-e94-prophylaxis-a3-29",
    "category": "Strategy",
    "theme": "King’s Indian Structure: Prophylactic Restraint (a3)",
    "difficulty": "Easy",
    "rating": 1149,
    "fen": "1r4k1/ppp2pbp/n2q1np1/2pP4/3p4/1Q3N1P/PP2BPP1/R3R1K1 w - - 1 18",
    "sideToMove": "White",
    "prompt": "White to move (Nakamura–McShane, E94). Before pursuing your own plan, play the quiet prophylactic move that shuts down the opponent’s main idea.",
    "moves": [
      "a3"
    ],
    "explanation": "a3! is crisp prophylaxis, preventing enemy counterplay while keeping your positional structure intact."
  },
  {
    "id": "str-gm-e94-open-rcd1-30",
    "category": "Strategy",
    "theme": "King’s Indian Structure: Seizing the d-File (Rcd1)",
    "difficulty": "Medium",
    "rating": 1480,
    "fen": "1r4k1/ppp2p1p/3q1npb/2pPN3/3p2P1/5Q1P/PP3P2/2R1R1K1 w - - 1 23",
    "sideToMove": "White",
    "prompt": "White to move (Nakamura–McShane, E94). Claim or contest the critical d-file with your heavy pieces!",
    "moves": [
      "Rcd1"
    ],
    "acceptAlso": [
      "Rc2"
    ],
    "explanation": "Rcd1! places the rook on the pivotal d-file, seizing penetration squares and restricting the opponent. (Rc2 is also strong.)"
  },
  {
    "id": "str-gm-d97-outpost-nc4-31",
    "category": "Strategy",
    "theme": "Grünfeld Structure: Knight Outpost on c4",
    "difficulty": "Medium",
    "rating": 1377,
    "fen": "rn1q1rk1/1p1nppbp/2b3p1/p1P5/4P3/Q1N2P2/PP1N2PP/R1B1KB1R w KQ - 1 13",
    "sideToMove": "White",
    "prompt": "White to move (Wang Hao–Grischuk, D97). Anchor a knight on the strategic c4 square to dominate the center and restrict counterplay.",
    "moves": [
      "Nc4"
    ],
    "explanation": "Nc4! plants the knight on the key c4 outpost, radiating pressure across enemy squares."
  },
  {
    "id": "str-gm-e60-open-rd1-32",
    "category": "Strategy",
    "theme": "King’s Indian Structure: Seizing the d-File (Rd1)",
    "difficulty": "Medium",
    "rating": 1414,
    "fen": "r2qr1k1/pp3pbp/bn4p1/3p4/3N4/1PNnP1PP/P2Q1PB1/R1B1R1K1 w - - 7 18",
    "sideToMove": "White",
    "prompt": "White to move (Topalov–Giri, E60). Claim or contest the critical d-file with your heavy pieces!",
    "moves": [
      "Rd1"
    ],
    "explanation": "Rd1! places the rook on the pivotal d-file, seizing penetration squares and restricting the opponent."
  },
  {
    "id": "str-gm-b33-bishop-bd3-33",
    "category": "Strategy",
    "theme": "Sicilian Structure: Optimal Bishop Diagonal (Bd3)",
    "difficulty": "Expert",
    "rating": 1839,
    "fen": "1rq2rk1/1b3p1p/p2p1p2/4p3/RP2P3/8/1P3PPP/3QKB1R w K - 0 18",
    "sideToMove": "White",
    "prompt": "White to move (Vachier-Lagrave–Carlsen, B33). Place your bishop on the diagonal that maximizes both defense and long-term pressure.",
    "moves": [
      "Bd3"
    ],
    "acceptAlso": [
      "b5"
    ],
    "explanation": "Bd3! puts the bishop on its ideal diagonal, harmonizing with the pawn structure. (b5 is also strong.)"
  },
  {
    "id": "str-gm-c65-knight-nf3-34",
    "category": "Strategy",
    "theme": "Ruy López: Knight Maneuver (Nf3)",
    "difficulty": "Medium",
    "rating": 1488,
    "fen": "4r1k1/1Rpb1pp1/2pp1n1p/8/3rP3/P5NP/3N1PP1/R5K1 w - - 0 23",
    "sideToMove": "White",
    "prompt": "White to move (Topalov–Grischuk, C65). Reroute your knight to improve piece harmony and target the key central squares.",
    "moves": [
      "Nf3"
    ],
    "explanation": "Nf3! repositions the knight onto a much more effective square, boosting coordination."
  },
  {
    "id": "str-gm-b90-outpost-nd5-35",
    "category": "Strategy",
    "theme": "Sicilian Structure: Knight Outpost on d5",
    "difficulty": "Advanced",
    "rating": 1615,
    "fen": "2rq1rk1/1b2bpp1/p2p1n2/4p2p/Pp2P3/2N1B1PP/1PPQ1PBK/R4R2 w - - 0 18",
    "sideToMove": "White",
    "prompt": "White to move (Vachier-Lagrave–Topalov, B90). Anchor a knight on the strategic d5 square to dominate the center and restrict counterplay.",
    "moves": [
      "Nd5"
    ],
    "explanation": "Nd5! plants the knight on the key d5 outpost, radiating pressure across enemy squares."
  },
  {
    "id": "str-gm-b96-simplification-nxc6-36",
    "category": "Strategy",
    "theme": "Sicilian Structure: Favorable Simplification (Nxc6)",
    "difficulty": "Medium",
    "rating": 1422,
    "fen": "r1b1k2r/2q1bpp1/p1nppn1p/1p6/3NPPP1/P1N2Q2/1PP2B1P/R3KB1R w KQkq - 1 13",
    "sideToMove": "White",
    "prompt": "White to move (Grischuk–Vachier-Lagrave, B96). Simplify the position with a timely exchange to transition into a cleaner, better structure!",
    "moves": [
      "Nxc6"
    ],
    "acceptAlso": [
      "Rg1"
    ],
    "explanation": "Nxc6! trades off a key defending/attacking piece at the exact right moment, securing a positional edge. (Rg1 is also strong.)"
  },
  {
    "id": "str-gm-d85-bishop-bd3-37",
    "category": "Strategy",
    "theme": "Grünfeld Structure: Optimal Bishop Diagonal (Bd3)",
    "difficulty": "Easy",
    "rating": 1117,
    "fen": "r1bq1rk1/pp4bp/5np1/2pPppB1/2P1P3/8/P2Q1PPP/2R1KBNR w K - 2 13",
    "sideToMove": "White",
    "prompt": "White to move (Nakamura–So, D85). Place your bishop on the diagonal that maximizes both defense and long-term pressure.",
    "moves": [
      "Bd3"
    ],
    "explanation": "Bd3! puts the bishop on its ideal diagonal, harmonizing with the pawn structure."
  },
  {
    "id": "str-gm-a34-outpost-ne4-38",
    "category": "Strategy",
    "theme": "English Opening: Knight Outpost on e4",
    "difficulty": "Medium",
    "rating": 1356,
    "fen": "1k1r1r2/3qbp1p/p1b1p1p1/2p1P3/Pp3R1P/2N1QN2/1P1P1PP1/2R3K1 w - - 0 23",
    "sideToMove": "White",
    "prompt": "White to move (Aronian–So, A34). Anchor a knight on the strategic e4 square to dominate the center and restrict counterplay.",
    "moves": [
      "Ne4"
    ],
    "explanation": "Ne4! plants the knight on the key e4 outpost, radiating pressure across enemy squares."
  },
  {
    "id": "str-gm-c53-knight-nf3-39",
    "category": "Strategy",
    "theme": "Open Game: Knight Maneuver (Nf3)",
    "difficulty": "Medium",
    "rating": 1393,
    "fen": "3rr1k1/pp3p2/1bp1bn1p/4N1p1/4P3/2P4P/PPB2PP1/R1B1R1K1 w - g6 0 18",
    "sideToMove": "White",
    "prompt": "White to move (Anand–Adams, C53). Reroute your knight to improve piece harmony and target the key central squares.",
    "moves": [
      "Nf3"
    ],
    "acceptAlso": [
      "h4"
    ],
    "explanation": "Nf3! repositions the knight onto a much more effective square, boosting coordination. (h4 is also strong.)"
  },
  {
    "id": "str-gm-a34-pawn-d5-40",
    "category": "Strategy",
    "theme": "English Opening: Timed Pawn Break & Space (d5)",
    "difficulty": "Advanced",
    "rating": 1600,
    "fen": "r4rk1/ppq1ppbp/2n3p1/2p5/3PP1b1/2P2N2/P3BPPP/1RBQ1RK1 w - - 1 13",
    "sideToMove": "White",
    "prompt": "White to move (Aronian–Vachier Lagrave, A34). Strike with the thematic pawn advance to gain space or challenge the opponent’s pawn chain!",
    "moves": [
      "d5"
    ],
    "explanation": "d5! hits at the right moment, gaining crucial space and opening favorable lines."
  },
  {
    "id": "str-gm-a34-bishop-bb2-41",
    "category": "Strategy",
    "theme": "English Opening: Optimal Bishop Diagonal (Bb2)",
    "difficulty": "Easy",
    "rating": 1101,
    "fen": "3rr1k1/p2q1p1p/1p1P2p1/2p1P3/2Qb1P2/8/P5PP/1RB2R1K w - - 1 23",
    "sideToMove": "White",
    "prompt": "White to move (Aronian–Vachier Lagrave, A34). Place your bishop on the diagonal that maximizes both defense and long-term pressure.",
    "moves": [
      "Bb2"
    ],
    "explanation": "Bb2! puts the bishop on its ideal diagonal, harmonizing with the pawn structure."
  },
  {
    "id": "str-gm-b51-simplification-rxa4-42",
    "category": "Strategy",
    "theme": "Sicilian Structure: Favorable Simplification (Rxa4)",
    "difficulty": "Medium",
    "rating": 1364,
    "fen": "r5k1/4bppp/p2p1n2/Nb1Pp3/r3P3/4BB1P/5PP1/R1R3K1 w - - 2 23",
    "sideToMove": "White",
    "prompt": "White to move (Aronian–Vachier Lagrave, B51). Simplify the position with a timely exchange to transition into a cleaner, better structure!",
    "moves": [
      "Rxa4"
    ],
    "acceptAlso": [
      "g4"
    ],
    "explanation": "Rxa4! trades off a key defending/attacking piece at the exact right moment, securing a positional edge. (g4 is also strong.)"
  },
  {
    "id": "str-gm-e11-outpost-nd4-43",
    "category": "Strategy",
    "theme": "Catalan / Queen’s Indian: Knight Outpost on d4",
    "difficulty": "Medium",
    "rating": 1401,
    "fen": "r4rk1/1b1qbppp/1p2p3/pNnpP3/8/B3Q1P1/PP2PPBP/2R2RK1 w - - 2 18",
    "sideToMove": "White",
    "prompt": "White to move (Shirov–Topalov, E11). Anchor a knight on the strategic d4 square to dominate the center and restrict counterplay.",
    "moves": [
      "Nd4"
    ],
    "acceptAlso": [
      "Nd6"
    ],
    "explanation": "Nd4! plants the knight on the key d4 outpost, radiating pressure across enemy squares. (Nd6 is also strong.)"
  },
  {
    "id": "str-gm-b51-bishop-be7-44",
    "category": "Strategy",
    "theme": "Sicilian Structure: Optimal Bishop Diagonal (Be7)",
    "difficulty": "Expert",
    "rating": 1812,
    "fen": "r1bq1rk1/1p3ppp/p4n2/2bPn3/1PPNp3/8/P2QBPPP/RNB2RK1 b - b3 0 13",
    "sideToMove": "Black",
    "prompt": "Black to move (Hou Yifan–Giri, B51). Place your bishop on the diagonal that maximizes both defense and long-term pressure.",
    "moves": [
      "Be7"
    ],
    "explanation": "Be7! puts the bishop on its ideal diagonal, harmonizing with the pawn structure."
  },
  {
    "id": "str-gm-e60-bishop-bxc5-45",
    "category": "Strategy",
    "theme": "King’s Indian Structure: Good vs Bad Bishop Trade (Bxc5)",
    "difficulty": "Advanced",
    "rating": 1585,
    "fen": "r3r1k1/p4p1p/6p1/R1B5/3b4/6P1/P3PPKP/5R2 b - - 2 23",
    "sideToMove": "Black",
    "prompt": "Black to move (Wojtaszek–Vachier Lagrave, E60). Evaluate the color complexes and execute the favorable bishop exchange!",
    "moves": [
      "Bxc5"
    ],
    "explanation": "Bxc5! eliminates the opponent’s dangerous active bishop, leaving a cleaner structural advantage."
  },
  {
    "id": "str-gm-b48-simplification-bxc3-46",
    "category": "Strategy",
    "theme": "Sicilian Structure: Favorable Simplification (Bxc3)",
    "difficulty": "Medium",
    "rating": 1372,
    "fen": "r4k1r/1R3ppp/p3pb2/1p5n/P3P3/2N2P2/1PP4P/1K3B1R b - a3 0 19",
    "sideToMove": "Black",
    "prompt": "Black to move (Motylev–Hou Yifan, B48). Simplify the position with a timely exchange to transition into a cleaner, better structure!",
    "moves": [
      "Bxc3"
    ],
    "explanation": "Bxc3! trades off a key defending/attacking piece at the exact right moment, securing a positional edge."
  },
  {
    "id": "str-gm-c80-bishop-be7-47",
    "category": "Strategy",
    "theme": "Ruy López: Optimal Bishop Diagonal (Be7)",
    "difficulty": "Medium",
    "rating": 1409,
    "fen": "3rkb1r/2p2p1p/6p1/1p1qP1B1/3n4/6N1/1P3PPP/R2Q1RK1 b k - 3 19",
    "sideToMove": "Black",
    "prompt": "Black to move (Navara–Mamedyarov, C80). Place your bishop on the diagonal that maximizes both defense and long-term pressure.",
    "moves": [
      "Be7"
    ],
    "explanation": "Be7! puts the bishop on its ideal diagonal, harmonizing with the pawn structure."
  },
  {
    "id": "str-gm-e60-simplification-nxc3-48",
    "category": "Strategy",
    "theme": "King’s Indian Structure: Favorable Simplification (Nxc3)",
    "difficulty": "Medium",
    "rating": 1446,
    "fen": "r4rk1/pp2ppbp/1qp1bnp1/3n4/Q2P4/2N3PP/PP2PPB1/R1BRN1K1 b - - 2 13",
    "sideToMove": "Black",
    "prompt": "Black to move (Mamedyarov–Svidler, E60). Simplify the position with a timely exchange to transition into a cleaner, better structure!",
    "moves": [
      "Nxc3"
    ],
    "explanation": "Nxc3! trades off a key defending/attacking piece at the exact right moment, securing a positional edge."
  },
  {
    "id": "str-gm-c77-open-rec8-49",
    "category": "Strategy",
    "theme": "Ruy López: Seizing the c-File (Rec8)",
    "difficulty": "Easy",
    "rating": 1209,
    "fen": "1r2rnk1/2R2pp1/2ppqn1p/1p2p3/3PP2B/2P2N1P/1PQ2PP1/3R2K1 b - - 5 23",
    "sideToMove": "Black",
    "prompt": "Black to move (Carlsen–Mamedyarov, C77). Claim or contest the critical c-file with your heavy pieces!",
    "moves": [
      "Rec8"
    ],
    "explanation": "Rec8! places the rook on the pivotal c-file, seizing penetration squares and restricting the opponent."
  },
  {
    "id": "str-gm-d41-pawn-b5-50",
    "category": "Strategy",
    "theme": "Queen’s Gambit Declined: Timed Pawn Break & Space (b5)",
    "difficulty": "Advanced",
    "rating": 1570,
    "fen": "5rk1/1q3ppp/1p2p3/p7/1nQPP3/P4N2/5PPP/2R3K1 b - - 0 19",
    "sideToMove": "Black",
    "prompt": "Black to move (Navara–Carlsen, D41). Strike with the thematic pawn advance to gain space or challenge the opponent’s pawn chain!",
    "moves": [
      "b5"
    ],
    "explanation": "b5! hits at the right moment, gaining crucial space and opening favorable lines."
  },
  {
    "id": "str-gm-e46-bishop-bxd3-51",
    "category": "Strategy",
    "theme": "Nimzo-Indian Structure: Good vs Bad Bishop Trade (Bxd3)",
    "difficulty": "Medium",
    "rating": 1417,
    "fen": "r3r1k1/pp1qBp1n/2pn2p1/3pRb1p/3P1P2/P1NB1P2/1P1Q2PP/4R1K1 b - - 5 23",
    "sideToMove": "Black",
    "prompt": "Black to move (So–Karjakin, E46). Evaluate the color complexes and execute the favorable bishop exchange!",
    "moves": [
      "Bxd3"
    ],
    "acceptAlso": [
      "f6"
    ],
    "explanation": "Bxd3! eliminates the opponent’s dangerous active bishop, leaving a cleaner structural advantage. (f6 is also strong.)"
  },
  {
    "id": "str-gm-d27-bishop-bxa6-52",
    "category": "Strategy",
    "theme": "Slav / QGA Structure: Good vs Bad Bishop Trade (Bxa6)",
    "difficulty": "Medium",
    "rating": 1454,
    "fen": "2q2rk1/1b1nbpp1/B3pn1p/R7/1P1N4/4P3/1B1N1PPP/Q5K1 b - - 0 19",
    "sideToMove": "Black",
    "prompt": "Black to move (Ding Liren–Vachier Lagrave, D27). Evaluate the color complexes and execute the favorable bishop exchange!",
    "moves": [
      "Bxa6"
    ],
    "explanation": "Bxa6! eliminates the opponent’s dangerous active bishop, leaving a cleaner structural advantage."
  },
  {
    "id": "str-gm-d10-prophylaxis-h6-53",
    "category": "Strategy",
    "theme": "Slav / QGA Structure: Prophylactic Restraint (h6)",
    "difficulty": "Easy",
    "rating": 1193,
    "fen": "2rq1rk1/pp1b1ppp/4pn2/n2p2B1/1b1P4/2NBPN2/PPQ2PPP/R4RK1 b - - 7 13",
    "sideToMove": "Black",
    "prompt": "Black to move (Giri–Firouzja, D10). Before pursuing your own plan, play the quiet prophylactic move that shuts down the opponent’s main idea.",
    "moves": [
      "h6"
    ],
    "explanation": "h6! is crisp prophylaxis, preventing enemy counterplay while keeping your positional structure intact."
  },
  {
    "id": "str-gm-d43-knight-nb3-54",
    "category": "Strategy",
    "theme": "Queen’s Gambit Declined: Knight Maneuver (Nb3)",
    "difficulty": "Medium",
    "rating": 1388,
    "fen": "q3k3/5p2/2b3r1/1pn1p1p1/2p1P2p/2N1QP2/1P2B1PP/3R2K1 b - - 1 23",
    "sideToMove": "Black",
    "prompt": "Black to move (Carlsen–Anand, D43). Reroute your knight to improve piece harmony and target the key central squares.",
    "moves": [
      "Nb3"
    ],
    "explanation": "Nb3! repositions the knight onto a much more effective square, boosting coordination."
  },
  {
    "id": "str-gm-b90-knight-nc6-55",
    "category": "Strategy",
    "theme": "Sicilian Structure: Knight Maneuver (Nc6)",
    "difficulty": "Advanced",
    "rating": 1715,
    "fen": "2r1k2r/4npp1/p2R4/1p2p2p/8/5P2/PPP3PP/1K3B1R b k - 0 19",
    "sideToMove": "Black",
    "prompt": "Black to move (Dominguez Perez–Anand, B90). Reroute your knight to improve piece harmony and target the key central squares.",
    "moves": [
      "Nc6"
    ],
    "explanation": "Nc6! repositions the knight onto a much more effective square, boosting coordination."
  },
  {
    "id": "str-gm-e21-bishop-ba6-56",
    "category": "Strategy",
    "theme": "Nimzo-Indian Structure: Optimal Bishop Diagonal (Ba6)",
    "difficulty": "Medium",
    "rating": 1462,
    "fen": "r1b2rk1/p4ppp/2p1p3/q2n4/8/1QP3P1/P2BPPBP/R4RK1 b - - 0 13",
    "sideToMove": "Black",
    "prompt": "Black to move (Ivanchuk–Grischuk, E21). Place your bishop on the diagonal that maximizes both defense and long-term pressure.",
    "moves": [
      "Ba6"
    ],
    "explanation": "Ba6! puts the bishop on its ideal diagonal, harmonizing with the pawn structure."
  },
  {
    "id": "str-gm-c95-pawn-d5-57",
    "category": "Strategy",
    "theme": "Ruy López: Timed Pawn Break & Space (d5)",
    "difficulty": "Easy",
    "rating": 1177,
    "fen": "r3rbk1/1b1n1p1p/pqpp2p1/1p5n/P2PP3/1P3N1P/1BQN1PP1/R3RBK1 b - - 0 19",
    "sideToMove": "Black",
    "prompt": "Black to move (Vallejo Pons–Topalov, C95). Strike with the thematic pawn advance to gain space or challenge the opponent’s pawn chain!",
    "moves": [
      "d5"
    ],
    "explanation": "d5! hits at the right moment, gaining crucial space and opening favorable lines."
  },
  {
    "id": "str-gm-a64-outpost-ne5-58",
    "category": "Strategy",
    "theme": "Benoni Structure: Knight Outpost on e5",
    "difficulty": "Medium",
    "rating": 1396,
    "fen": "1rbqr1k1/1p1n1pbp/p2p1np1/2pP4/P1N5/2N3PP/1P2PPB1/R1BQ1RK1 b - - 2 13",
    "sideToMove": "Black",
    "prompt": "Black to move (Aronian–Topalov, A64). Anchor a knight on the strategic e5 square to dominate the center and restrict counterplay.",
    "moves": [
      "Ne5"
    ],
    "explanation": "Ne5! plants the knight on the key e5 outpost, radiating pressure across enemy squares."
  },
  {
    "id": "str-gm-e60-outpost-n7c5-59",
    "category": "Strategy",
    "theme": "King’s Indian Structure: Knight Outpost on c5",
    "difficulty": "Medium",
    "rating": 1433,
    "fen": "r3r1k1/pp1n1p1p/b5p1/P2Nq3/R7/1P1n2PP/3Q1PB1/2BR2K1 b - - 0 23",
    "sideToMove": "Black",
    "prompt": "Black to move (Topalov–Giri, E60). Anchor a knight on the strategic c5 square to dominate the center and restrict counterplay.",
    "moves": [
      "N7c5"
    ],
    "explanation": "N7c5! plants the knight on the key c5 outpost, radiating pressure across enemy squares."
  },
  {
    "id": "str-gm-c67-outpost-nf5-60",
    "category": "Strategy",
    "theme": "Ruy López: Knight Outpost on f5",
    "difficulty": "Advanced",
    "rating": 1700,
    "fen": "3r3r/p4p2/1ppNk1p1/2p1P1Pp/3n1P2/2P4P/PP3K2/3RR3 b - - 0 23",
    "sideToMove": "Black",
    "prompt": "Black to move (Grischuk–Giri, C67). Anchor a knight on the strategic f5 square to dominate the center and restrict counterplay.",
    "moves": [
      "Nf5"
    ],
    "explanation": "Nf5! plants the knight on the key f5 outpost, radiating pressure across enemy squares."
  },
  {
    "id": "str-gm-b90-bishop-bf5-61",
    "category": "Strategy",
    "theme": "Sicilian Structure: Optimal Bishop Diagonal (Bf5)",
    "difficulty": "Easy",
    "rating": 1161,
    "fen": "r2qk2r/3nbpp1/p2pb3/1p1Pp2p/8/4B1PP/PPP1NPB1/R2Q1RK1 b kq - 0 13",
    "sideToMove": "Black",
    "prompt": "Black to move (Vachier-Lagrave–Giri, B90). Place your bishop on the diagonal that maximizes both defense and long-term pressure.",
    "moves": [
      "Bf5"
    ],
    "explanation": "Bf5! puts the bishop on its ideal diagonal, harmonizing with the pawn structure."
  },
  {
    "id": "str-gm-b90-simplification-bxc3-62",
    "category": "Strategy",
    "theme": "Sicilian Structure: Favorable Simplification (Bxc3)",
    "difficulty": "Medium",
    "rating": 1404,
    "fen": "2rr2k1/1p3ppp/1q3n2/p1nP1P2/1b2p1P1/1PN4P/1PPB1QB1/1K1RR3 b - - 1 19",
    "sideToMove": "Black",
    "prompt": "Black to move (Anand–Vachier-Lagrave, B90). Simplify the position with a timely exchange to transition into a cleaner, better structure!",
    "moves": [
      "Bxc3"
    ],
    "acceptAlso": [
      "Nxd5"
    ],
    "explanation": "Bxc3! trades off a key defending/attacking piece at the exact right moment, securing a positional edge. (Nxd5 is also strong.)"
  },
  {
    "id": "str-gm-c42-bishop-bxd4-63",
    "category": "Strategy",
    "theme": "Open Game: Good vs Bad Bishop Trade (Bxd4)",
    "difficulty": "Medium",
    "rating": 1441,
    "fen": "r1bqr1k1/pp1n1ppp/2p5/2bp4/3B3P/2PB1N2/PPPQ1PP1/1K1R3R b - - 5 13",
    "sideToMove": "Black",
    "prompt": "Black to move (Nakamura–Caruana, C42). Evaluate the color complexes and execute the favorable bishop exchange!",
    "moves": [
      "Bxd4"
    ],
    "explanation": "Bxd4! eliminates the opponent’s dangerous active bishop, leaving a cleaner structural advantage."
  },
  {
    "id": "str-gm-b06-open-rfd8-64",
    "category": "Strategy",
    "theme": "Modern Structure: Contesting the d-File (Rfd8)",
    "difficulty": "Medium",
    "rating": 1478,
    "fen": "5rn1/pbqr1pkp/1p2p1p1/2p1P1N1/2P2Q1P/1P4N1/1P3PP1/3RR1K1 b - h3 0 23",
    "sideToMove": "Black",
    "prompt": "Black to move (Vachier-Lagrave–Aronian, B06). Contest the open d-file or secure the kingside with ...h6!",
    "moves": [
      "Rfd8"
    ],
    "acceptAlso": [
      "h6"
    ],
    "explanation": "Rfd8! (or h6!) contests White’s rook on the open d-file and activates Black’s passive rooks."
  },
  {
    "id": "str-gm-d37-pawn-e5-65",
    "category": "Strategy",
    "theme": "Queen’s Gambit Declined: Timed Pawn Break & Space (e5)",
    "difficulty": "Advanced",
    "rating": 1685,
    "fen": "4qrk1/1b1nbppp/p3p3/1p6/4NB2/4P3/PP2BPPP/1QR3K1 b - - 0 19",
    "sideToMove": "Black",
    "prompt": "Black to move (Caruana–Nakamura, D37). Strike with the thematic pawn advance to gain space or challenge the opponent’s pawn chain!",
    "moves": [
      "e5"
    ],
    "explanation": "e5! hits at the right moment, gaining crucial space and opening favorable lines."
  },
  {
    "id": "str-gm-a35-open-rc7-66",
    "category": "Strategy",
    "theme": "English Opening: Seizing the c-File (Rc7)",
    "difficulty": "Expert",
    "rating": 1898,
    "fen": "8/p4ppp/4p3/1br1k3/8/RP3BP1/3KPP1P/8 b - - 0 23",
    "sideToMove": "Black",
    "prompt": "Black to move (Aronian–Gelfand, A35). Claim or contest the critical c-file with your heavy pieces!",
    "moves": [
      "Rc7"
    ],
    "explanation": "Rc7! places the rook on the pivotal c-file, seizing penetration squares and restricting the opponent."
  },
  {
    "id": "str-gm-d43-open-re8-67",
    "category": "Strategy",
    "theme": "Queen’s Gambit Declined: Seizing the e-File (Re8)",
    "difficulty": "Medium",
    "rating": 1449,
    "fen": "r1br2k1/pp2bpp1/1np4p/4P3/1q1NQ3/4N1P1/PP3PBP/3R1RK1 b - - 8 19",
    "sideToMove": "Black",
    "prompt": "Black to move (Mamedyarov–Gelfand, D43). Claim or contest the critical e-file with your heavy pieces!",
    "moves": [
      "Re8"
    ],
    "acceptAlso": [
      "Nd5",
      "Bf8"
    ],
    "explanation": "Re8! places the rook on the pivotal e-file, seizing penetration squares and restricting the opponent. (Nd5 or Bf8 is also strong.)"
  },
  {
    "id": "str-gm-a35-outpost-nd4-68",
    "category": "Strategy",
    "theme": "English Opening: Knight Outpost on d4",
    "difficulty": "Medium",
    "rating": 1486,
    "fen": "1r1q1rk1/p4bpp/4np2/1ppBbN2/6P1/P2P4/1P1QP2P/2R1BRK1 b - - 4 23",
    "sideToMove": "Black",
    "prompt": "Black to move (Topalov–Caruana, A35). Anchor a knight on the strategic d4 square to dominate the center and restrict counterplay.",
    "moves": [
      "Nd4"
    ],
    "explanation": "Nd4! plants the knight on the key d4 outpost, radiating pressure across enemy squares."
  },
  {
    "id": "str-gm-c67-bishop-bc2-69",
    "category": "Strategy",
    "theme": "Ruy López: Optimal Bishop Diagonal (Bc2)",
    "difficulty": "Easy",
    "rating": 1129,
    "fen": "r6r/1kp1bppp/1pp5/p3Pb2/P1P3P1/1P5P/1B2NP2/R2R2K1 b - - 0 19",
    "sideToMove": "Black",
    "prompt": "Black to move (Motylev–Harikrishna, C67). Place your bishop on the diagonal that maximizes both defense and long-term pressure.",
    "moves": [
      "Bc2"
    ],
    "acceptAlso": [
      "Bg6"
    ],
    "explanation": "Bc2! puts the bishop on its ideal diagonal, harmonizing with the pawn structure. (Bg6 is also strong.)"
  },
  {
    "id": "str-gm-d12-pawn-b4-70",
    "category": "Strategy",
    "theme": "Slav / QGA Structure: Timed Pawn Break & Space (b4)",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "3rr1k1/p2nbpp1/1q3n2/1ppp2p1/P2P2P1/4PP2/1P1BN1BP/R2Q1R1K b - a3 0 19",
    "sideToMove": "Black",
    "prompt": "Black to move (Giri–Motylev, D12). Strike with the thematic pawn advance to gain space or challenge the opponent’s pawn chain!",
    "moves": [
      "b4"
    ],
    "acceptAlso": [
      "bxa4",
      "Bd6"
    ],
    "explanation": "b4! hits at the right moment, gaining crucial space and opening favorable lines. (bxa4 or Bd6 is also strong.)"
  },
  {
    "id": "str-gm-a15-bishop-bd6-71",
    "category": "Strategy",
    "theme": "English Opening: Optimal Bishop Diagonal (Bd6)",
    "difficulty": "Medium",
    "rating": 1457,
    "fen": "r2qkb1r/5ppp/p1n2n2/1ppp3b/8/1PN1PN1P/PB1PBPP1/2RQ1RK1 b kq - 3 13",
    "sideToMove": "Black",
    "prompt": "Black to move (Mamedyarov–Georgiadis, A15). Place your bishop on the diagonal that maximizes both defense and long-term pressure.",
    "moves": [
      "Bd6"
    ],
    "explanation": "Bd6! puts the bishop on its ideal diagonal, harmonizing with the pawn structure."
  },
  {
    "id": "str-gm-a04-pawn-d5-72",
    "category": "Strategy",
    "theme": "Closed Game: Timed Pawn Break & Space (d5)",
    "difficulty": "Medium",
    "rating": 1354,
    "fen": "r1b1k2r/pp1p1pb1/5npp/4q3/2P1p1P1/1PN4P/PB3PB1/R2QK2R b KQkq - 1 13",
    "sideToMove": "Black",
    "prompt": "Black to move (Mamedyarov–Vachier Lagrave, A04). Strike with the thematic pawn advance to gain space or challenge the opponent’s pawn chain!",
    "moves": [
      "d5"
    ],
    "acceptAlso": [
      "O-O"
    ],
    "explanation": "d5! hits at the right moment, gaining crucial space and opening favorable lines. (O-O is also strong.)"
  },
  {
    "id": "str-gm-d43-outpost-nc5-73",
    "category": "Strategy",
    "theme": "Queen’s Gambit Declined: Knight Outpost on c5",
    "difficulty": "Easy",
    "rating": 1113,
    "fen": "2k4r/pb3p2/n1p1pq2/1p5p/2p5/P4BP1/1PQ2PP1/3RR1K1 b - - 3 23",
    "sideToMove": "Black",
    "prompt": "Black to move (Deac–Giri, D43). Anchor a knight on the strategic c5 square to dominate the center and restrict counterplay.",
    "moves": [
      "Nc5"
    ],
    "explanation": "Nc5! plants the knight on the key c5 outpost, radiating pressure across enemy squares."
  },
  {
    "id": "str-gm-d26-open-ra7-74",
    "category": "Strategy",
    "theme": "Slav / QGA Structure: Seizing the a-File (Ra7)",
    "difficulty": "Medium",
    "rating": 1428,
    "fen": "r1b1kb1r/5ppp/p4q2/1ppB4/8/4P3/PP3PPP/R1BQ1RK1 b kq - 1 13",
    "sideToMove": "Black",
    "prompt": "Black to move (Aronian–Caruana, D26). Claim or contest the critical a-file with your heavy pieces!",
    "moves": [
      "Ra7"
    ],
    "acceptAlso": [
      "Rb8"
    ],
    "explanation": "Ra7! places the rook on the pivotal a-file, seizing penetration squares and restricting the opponent. (Rb8 is also strong.)"
  }
];
