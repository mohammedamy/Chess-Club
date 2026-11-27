export const OPENING_PUZZLES = [
  {
    "id": "op-damiano-punish",
    "category": "Openings",
    "theme": "Punishing f6?",
    "difficulty": "Easy",
    "rating": 920,
    "fen": "rnbqkbnr/pppp2pp/5p2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    "sideToMove": "White",
    "prompt": "Black defended e5 with 2...f6??. Punish the weakened e8-h5 diagonal immediately.",
    "moves": [
      "Nxe5"
    ],
    "explanation": "3.Nxe5! works because 3...fxe5?? walks into 4.Qh5+ g6 5.Qxe5+ winning the h8 rook."
  },
  {
    "id": "op-damiano-mate-net",
    "category": "Openings",
    "theme": "Damiano Gambit Refutation",
    "difficulty": "Medium",
    "rating": 1180,
    "fen": "rnbqkbnr/pppp2pp/8/4p3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 4",
    "sideToMove": "White",
    "prompt": "Black fell for 3...fxe5?. Deliver the decisive check on the kingside.",
    "moves": [
      "Qh5+",
      "g6",
      "Qxe5+"
    ],
    "explanation": "Qh5+ forces ...g6, after which Qxe5+ forks the king and the h8 rook."
  },
  {
    "id": "op-petroff-queen-pin",
    "category": "Openings",
    "theme": "Petroff Blunder",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "rnbqkb1r/pppp1ppp/5n2/4N3/8/8/PPPPQPPP/RNB1KB1R w KQkq - 2 5",
    "sideToMove": "White",
    "prompt": "Black carelessly copied White and retreated ...Nf6. Win the Black queen with a discovered check!",
    "moves": [
      "Nc6+"
    ],
    "explanation": "6.Nc6+! gives discovered check from the e2 queen while attacking Black's queen on d8."
  },
  {
    "id": "op-petroff-queen-loss",
    "category": "Openings",
    "theme": "Petroff Symmetry Trap",
    "difficulty": "Medium",
    "rating": 1150,
    "fen": "rnb1kb1r/ppp1qppp/3p4/4N3/4Q3/8/PPPP1PPP/RNB1KB1R w KQkq - 0 6",
    "sideToMove": "White",
    "prompt": "Black tries to win back the knight on e5. Keep your extra piece with a counter-pin.",
    "moves": [
      "d4"
    ],
    "explanation": "6.d4! defends e5 solidly because ...dxe5 7.dxe5 leaves White a clear pawn up with smooth development."
  },
  {
    "id": "op-scholars-defense",
    "category": "Openings",
    "theme": "Refuting Scholar’s Mate",
    "difficulty": "Easy",
    "rating": 850,
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
    "sideToMove": "Black",
    "prompt": "White threatens Qxf7# and Qxe5+. Defend f7 AND kick the queen with tempo!",
    "moves": [
      "g6"
    ],
    "explanation": "3...g6! blocks the f7 threat and drives White's queen back after protecting e5."
  },
  {
    "id": "op-wayward-queen-trap",
    "category": "Openings",
    "theme": "Wayward Queen Refutation",
    "difficulty": "Easy",
    "rating": 890,
    "fen": "r1bqkbnr/pppp1p1p/2n3p1/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR b KQkq - 1 4",
    "sideToMove": "Black",
    "prompt": "White attacks f7 again with Qf3. Develop naturally while blocking the f7 threat.",
    "moves": [
      "Nf6"
    ],
    "explanation": "4...Nf6! develops a piece toward the center and shuts the queen out of f7."
  },
  {
    "id": "op-italian-center-fork",
    "category": "Openings",
    "theme": "Center Fork Trick",
    "difficulty": "Medium",
    "rating": 1220,
    "fen": "r1bq1rk1/ppp2p2/2np1n1p/2b1p1p1/2B1P3/2NP1NB1/PPP2PPP/R2Q1RK1 b - - 1 9",
    "sideToMove": "Black",
    "prompt": "Black broke the pin aggressively. Develop with a central threat or finish development cleanly.",
    "moves": [
      "Bg4"
    ],
    "explanation": "...Bg4 creates a dangerous counter-pin on f3 while maintaining pressure."
  },
  {
    "id": "op-two-knights-fork",
    "category": "Openings",
    "theme": "Center Fork Trick",
    "difficulty": "Medium",
    "rating": 1250,
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4",
    "sideToMove": "Black",
    "prompt": "White omitted 4.d3 or 4.Ng5. Execute the thematic Center Fork Trick (or develop sharply with ...Bc5).",
    "moves": [
      "Nxe4",
      "Nxe4",
      "d5"
    ],
    "acceptAlso": [
      "Bc5"
    ],
    "explanation": "4...Nxe4! 5.Nxe4 d5! forks White's bishop and knight to break open the center."
  },
  {
    "id": "op-fried-liver-start",
    "category": "Openings",
    "theme": "Fried Liver Sacrifice",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "r1bqkb1r/ppp2ppp/2n5/3np1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 0 6",
    "sideToMove": "White",
    "prompt": "Black recaptured 5...Nxd5?. Unleash the classic Fried Liver knight sacrifice!",
    "moves": [
      "Nxf7",
      "Kxf7",
      "Qf3+"
    ],
    "explanation": "6.Nxf7! drags the Black king into the open, followed by 7.Qf3+ targeting d5."
  },
  {
    "id": "op-polerio-defense",
    "category": "Openings",
    "theme": "Polerio Defence",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r1bqkb1r/ppp2ppp/2n2n2/3Pp1N1/2B5/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
    "sideToMove": "Black",
    "prompt": "White played the aggressive Ng5 and exd5. Play the principled Polerio move instead of ...Nxd5.",
    "moves": [
      "Na5"
    ],
    "explanation": "5...Na5! attacks the c4 bishop immediately and fights for the initiative instead of walking into Nxf7."
  },
  {
    "id": "op-legal-mate-shot",
    "category": "Openings",
    "theme": "Légal’s Mate",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "rn1qkbnr/ppp2p1p/3p2p1/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5",
    "sideToMove": "White",
    "prompt": "Black carelessly ignored the f7 weakness with ...g6?. Spring Légal's Mate!",
    "moves": [
      "Nxe5",
      "Bxd1",
      "Bxf7+",
      "Ke7",
      "Nd5#"
    ],
    "explanation": "5.Nxe5! sacrifices the queen to force 6.Bxf7+ Ke7 7.Nd5#!"
  },
  {
    "id": "op-italian-gambit-evans",
    "category": "Openings",
    "theme": "Evans Gambit Principle",
    "difficulty": "Medium",
    "rating": 1280,
    "fen": "r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq - 1 6",
    "sideToMove": "White",
    "prompt": "You sacrificed a wing pawn to deflect Black's bishop. Strike immediately in the center!",
    "moves": [
      "d4"
    ],
    "explanation": "6.d4! opens lines against Black's uncastled king with huge central dominance."
  },
  {
    "id": "op-sicilian-smith-morra",
    "category": "Openings",
    "theme": "Siberian Trap Finish",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "r1b1kb1r/ppqp1ppp/2n1p3/8/2B1P1n1/2N2N1P/PP2QPP1/R1B2RK1 b kq - 0 9",
    "sideToMove": "Black",
    "prompt": "White played 9.h3?? trying to kick your knight. Spring the devastating Siberian Trap!",
    "moves": [
      "Nd4",
      "Nxd4",
      "Qh2#"
    ],
    "explanation": "9...Nd4!! forks White's queen and knight while threatening 10...Qh2#!"
  },
  {
    "id": "op-sicilian-pin-trick",
    "category": "Openings",
    "theme": "Sveshnikov Outpost",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1bqkb1r/5p1p/p1np1p2/1p2p3/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq - 0 10",
    "sideToMove": "White",
    "prompt": "Black accepted doubled f-pawns in the Sveshnikov. Plant a knight on the permanent d5 hole!",
    "moves": [
      "Nd5"
    ],
    "explanation": "Nd5! dominates the board from an unassailable outpost, eye-ing c7 and f6."
  },
  {
    "id": "op-french-winawer-qa4",
    "category": "Openings",
    "theme": "French Counter-Strike",
    "difficulty": "Medium",
    "rating": 1310,
    "fen": "rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    "sideToMove": "Black",
    "prompt": "White locked the center with 4.e5. Immediately undermine White's d4 base.",
    "moves": [
      "c5"
    ],
    "explanation": "4...c5! is the lifeblood of the French Defence, attacking d4 and opening the c-file."
  },
  {
    "id": "op-caro-smothered",
    "category": "Openings",
    "theme": "Caro-Kann Smothered Trap",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "r1bqkb1r/pp1npppp/2p2n2/8/3PN3/8/PPP1QPPP/R1B1KBNR w KQkq - 3 6",
    "sideToMove": "White",
    "prompt": "Black neglected the e6/d6 squares with ...Ngf6??. Deliver a famous 6-move smothered mate!",
    "moves": [
      "Nd6#"
    ],
    "explanation": "6.Nd6# is a stunning smothered checkmate! Black's e-pawn is pinned by the e2 queen."
  },
  {
    "id": "op-italian-smothered-trap",
    "category": "Openings",
    "theme": "Blackburne Shilling Trap",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "r1b1kbnr/pppp1Npp/8/8/3nq3/8/PPPPBP1P/RNBQKR2 b Qkq - 1 7",
    "sideToMove": "Black",
    "prompt": "White blocked the check on e2. Deliver checkmate in one move!",
    "moves": [
      "Nf3#"
    ],
    "explanation": "7...Nf3# is checkmate! The e2 bishop is pinned to White's king by Black's queen."
  },
  {
    "id": "op-englund-fork",
    "category": "Openings",
    "theme": "Englund Gambit Tactics",
    "difficulty": "Easy",
    "rating": 1050,
    "fen": "r1b1kbnr/ppppqppp/2n5/4P3/5B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 4 4",
    "sideToMove": "Black",
    "prompt": "White guarded e5 with 4.Bf4?. Fork the king and b2 pawn!",
    "moves": [
      "Qb4+"
    ],
    "explanation": "4...Qb4+! double-attacks the king and the bishop on f4/b2 pawn."
  },
  {
    "id": "op-albin-underpromo",
    "category": "Openings",
    "theme": "Lasker Trap Underpromotion",
    "difficulty": "Advanced",
    "rating": 1720,
    "fen": "rnbqk1nr/ppp2ppp/8/4P3/1BP5/8/PP2KpPP/RN1Q1BNR b kq - 1 7",
    "sideToMove": "Black",
    "prompt": "Avoid Bxd8 after promoting to a queen! Underpromote with check to win!",
    "moves": [
      "fxg1=N+"
    ],
    "explanation": "7...fxg1=N+! wins material cleanly while preventing White from capturing on d8."
  },
  {
    "id": "op-budapest-trap",
    "category": "Openings",
    "theme": "Budapest Trap Pin",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r1b1k2r/ppppqppp/2n5/4P3/1bP2Bn1/P4N2/1P1NPPPP/R2QKB1R b KQkq - 0 7",
    "sideToMove": "Black",
    "prompt": "White challenged your b4 bishop. Remove the d2 defender cleanly before targeting e5.",
    "moves": [
      "Bxd2+",
      "Qxd2",
      "Ngxe5"
    ],
    "explanation": "7...Bxd2+ trades off a defender so Black recovers the e5 pawn cleanly."
  },
  {
    "id": "op-budapest-mate",
    "category": "Openings",
    "theme": "Budapest Smothered Mate",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "r1b1k2r/ppppqppp/2n5/4n3/1PP2B2/5N2/1P1NPPPP/R2QKB1R b KQkq - 0 8",
    "sideToMove": "Black",
    "prompt": "White greedily captured the b4 bishop! Deliver a one-move smothered mate!",
    "moves": [
      "Nd3#"
    ],
    "explanation": "8...Nd3# is mate because the e2 pawn is pinned to the e1 king by the e7 queen."
  },
  {
    "id": "op-qgd-elephant-fork",
    "category": "Openings",
    "theme": "Elephant Trap",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1bBkb1r/pppn1ppp/8/3n4/3P4/8/PP2PPPP/R2QKBNR b KQkq - 0 7",
    "sideToMove": "Black",
    "prompt": "White took your queen on d8! Punish the greed with a deadly check.",
    "moves": [
      "Bb4+",
      "Qd2",
      "Bxd2+",
      "Kxd2",
      "Kxd8"
    ],
    "explanation": "7...Bb4+! forces Qd2 Bxd2+ Kxd2 Kxd8, leaving Black up a full minor piece."
  },
  {
    "id": "op-qgd-cambridge-springs",
    "category": "Openings",
    "theme": "Cambridge Springs Trap",
    "difficulty": "Advanced",
    "rating": 1590,
    "fen": "r1b1k2r/pp1n1ppp/2p1pn2/q5B1/1bNP4/2N1P3/PPQ2PPP/R3KB1R b KQkq - 0 9",
    "sideToMove": "Black",
    "prompt": "White recaptured on c4 ignoring the discovered attack down the 5th rank. Win a piece!",
    "moves": [
      "Qxg5"
    ],
    "explanation": "9...Qxg5 wins the unprotected g5 bishop cleanly."
  },
  {
    "id": "op-slav-trap-qa4",
    "category": "Openings",
    "theme": "Slav Exchange Punishment",
    "difficulty": "Medium",
    "rating": 1260,
    "fen": "r2qkb1r/pp2pppp/2n2n2/3p1b2/3P4/1QN1P3/PP3PPP/R1B1KBNR w KQkq - 2 7",
    "sideToMove": "White",
    "prompt": "Black neglected the b7 pawn with 6...Nc6?. Punish the queenside weakness immediately!",
    "moves": [
      "Qxb7"
    ],
    "explanation": "7.Qxb7! attacks both c6 and a8, winning a pawn and seizing the initiative."
  },
  {
    "id": "op-fools-mate-variant",
    "category": "Openings",
    "theme": "Early Diagonal Check",
    "difficulty": "Easy",
    "rating": 800,
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq g3 0 2",
    "sideToMove": "Black",
    "prompt": "White fatally weakened the e1-h4 diagonal. Deliver Fool's Mate!",
    "moves": [
      "Qh4#"
    ],
    "explanation": "2...Qh4# is the fastest checkmate in chess: never push f3 and g4 early without reason."
  },
  {
    "id": "op-dutch-mate-2",
    "category": "Openings",
    "theme": "Dutch Diagonal Shot",
    "difficulty": "Easy",
    "rating": 880,
    "fen": "rnbqkbnr/ppppp3/7p/6p1/3P1p2/6B1/PPP1PPPP/RN1QKBNR w KQkq - 0 5",
    "sideToMove": "White",
    "prompt": "Black trapped your bishop? Counterattack on the fatally weakened kingside diagonal!",
    "moves": [
      "e3"
    ],
    "explanation": "5.e3! threatens Qh5#; if 5...fxg3?? then 6.Qh5# checkmate!"
  },
  {
    "id": "op-bird-mate",
    "category": "Openings",
    "theme": "From’s Gambit Trap",
    "difficulty": "Medium",
    "rating": 1220,
    "fen": "rnbqk1nr/ppp2p1p/3b4/6p1/8/5N1P/PPPPP1P1/RNBQKB1R b KQkq - 0 5",
    "sideToMove": "Black",
    "prompt": "White tried to stop ...g4 with 5.h3??, weakening g3 fatally. Deliver a quick mate!",
    "moves": [
      "Bg3#"
    ],
    "explanation": "5...Bg3# uses the dark-square highway created by f4 and h3!"
  },
  {
    "id": "op-scandi-pin-win",
    "category": "Openings",
    "theme": "Scandinavian Tactics",
    "difficulty": "Medium",
    "rating": 1240,
    "fen": "r2q1rk1/ppp2ppp/1nn1pb2/8/2PP2b1/1PN1BN2/P3BPPP/R2Q1RK1 w - - 1 11",
    "sideToMove": "White",
    "prompt": "Black pressured d4. Hop the knight forward with tempo against f6 and c6!",
    "moves": [
      "Ne4"
    ],
    "explanation": "11.Ne4! relieves pressure on d4 and targets the active f6 bishop."
  },
  {
    "id": "op-ruy-tarrasch-trap",
    "category": "Openings",
    "theme": "Tarrasch Trap (Ruy López)",
    "difficulty": "Advanced",
    "rating": 1660,
    "fen": "r4rk1/2pqbppp/p1n1b3/1p1pP3/3Nn3/1BP5/PP3PPP/RNBQR1K1 w - - 5 12",
    "sideToMove": "White",
    "prompt": "Spot the tactical target in the Open Spanish.",
    "moves": [
      "Nxe6"
    ],
    "explanation": "Removing the e6 defender weakens d5 and wins the bishop pair."
  },
  {
    "id": "op-noahs-ark-close",
    "category": "Openings",
    "theme": "Noah’s Ark Trap",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "r2qkbnr/3b1ppp/p2p4/1ppQ4/4P3/1B6/PPP2PPP/RNB1K2R b KQkq - 5 11",
    "sideToMove": "Black",
    "prompt": "White's queen retreated from check. Close the trap on the b3 bishop!",
    "moves": [
      "c4"
    ],
    "explanation": "11...c4! slams the door shut: White's b3 bishop is completely trapped."
  },
  {
    "id": "op-scotch-fork",
    "category": "Openings",
    "theme": "Scotch Pin Punishment",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1b1k2r/ppppnppp/8/2b1n3/3Nq3/2P1B3/PP2BPPP/RN1Q1RK1 w kq - 0 10",
    "sideToMove": "White",
    "prompt": "Black greedily snatched the e4 pawn on move 9! Exploit the exposed Black queen.",
    "moves": [
      "Nd2"
    ],
    "acceptAlso": [
      "Nb5"
    ],
    "explanation": "10.Nd2! (or Nb5) develops with tempo against the queen while threatening Re1/Bf3."
  },
  {
    "id": "op-vienna-f4",
    "category": "Openings",
    "theme": "Vienna Gambit Strike",
    "difficulty": "Medium",
    "rating": 1280,
    "fen": "r2qk2r/ppp2ppp/2np1n2/2b1p3/2B1PPb1/2NP1N2/PPP3PP/R1BQK2R w KQkq - 2 7",
    "sideToMove": "White",
    "prompt": "Break the annoying pin on f3 while targeting Black's c5 bishop.",
    "moves": [
      "Na4"
    ],
    "explanation": "Na4 eliminates Black's active dark-squared bishop and removes the pin threat."
  },
  {
    "id": "op-kings-gambit-bc4",
    "category": "Openings",
    "theme": "King’s Gambit Counter",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "rnbqkbnr/pppp1p1p/8/8/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1 b kq - 1 5",
    "sideToMove": "Black",
    "prompt": "White offered the Muzio Gambit! Accept the piece cleanly.",
    "moves": [
      "gxf3"
    ],
    "explanation": "5...gxf3! wins the knight; Black must now defend carefully with ...Qf6 and ...d6."
  },
  {
    "id": "op-english-botvinnik",
    "category": "Openings",
    "theme": "English Central Control",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "r1bqk2r/pppp1pbp/2n2np1/4p3/2P5/2N1P1P1/PP1P1PBP/R1BQK1NR w KQkq - 1 6",
    "sideToMove": "White",
    "prompt": "In the English Botvinnik setup, develop the kingside knight without blocking the g2 bishop.",
    "moves": [
      "Nge2"
    ],
    "explanation": "Nge2 keeps the long diagonal open for the Bg2 and prepares d4 or Rb1-b4."
  },
  {
    "id": "op-caro-fantasy",
    "category": "Openings",
    "theme": "Caro-Kann Classic",
    "difficulty": "Easy",
    "rating": 1050,
    "fen": "rn1qkbnr/pp2pppp/2p3b1/8/3P3P/6N1/PPP2PP1/R1BQKBNR b KQkq h3 0 6",
    "sideToMove": "Black",
    "prompt": "White pushes h4 aiming to trap your light-squared bishop with h5. Create an escape square immediately!",
    "moves": [
      "h6"
    ],
    "explanation": "6...h6! gives the g6 bishop the vital h7 sanctuary."
  },
  {
    "id": "op-caro-exchange-plan",
    "category": "Openings",
    "theme": "Caro-Kann Panov",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "rnbqkb1r/pp2pppp/5n2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR b KQkq - 2 5",
    "sideToMove": "Black",
    "prompt": "White aims for the Panov Attack. Reinforce d5 and open the f8 bishop.",
    "moves": [
      "e6"
    ],
    "explanation": "5...e6! solidifies d5 and prepares ...Bb4 or ...Be7."
  },
  {
    "id": "op-qgd-minority-start",
    "category": "Openings",
    "theme": "QGD Exchange",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "rnbqk2r/pp2bppp/2p2n2/3p2B1/3P4/2NBP3/PP3PPP/R2QK1NR b KQkq - 1 7",
    "sideToMove": "Black",
    "prompt": "How does Black free the cramped kingside in the Carlsbad structure?",
    "moves": [
      "Nbd7"
    ],
    "explanation": "7...Nbd7 prepares ...Nf8-e6 or ...Nh5 to trade off White's dark-squared bishop."
  },
  {
    "id": "op-slav-bishop-out",
    "category": "Openings",
    "theme": "Slav Principle",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "rnbqkb1r/pp2pppp/2p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R b KQkq a3 0 5",
    "sideToMove": "Black",
    "prompt": "White stopped ...b5 with 5.a4. Complete the main strategic point of the Slav Defence!",
    "moves": [
      "Bf5"
    ],
    "explanation": "5...Bf5! gets the light-squared bishop outside before playing ...e6."
  },
  {
    "id": "op-benko-accept",
    "category": "Openings",
    "theme": "Benko Gambit Principle",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "rnbqkb1r/3ppppp/P4n2/2pP4/8/8/PP2PPPP/RNBQKBNR b KQkq - 0 5",
    "sideToMove": "Black",
    "prompt": "Recapture on a6 to gain rapid queenside piece activity and target f1.",
    "moves": [
      "Bxa6"
    ],
    "explanation": "6...Bxa6! prevents White from easily playing e4 without losing castling rights."
  },
  {
    "id": "op-grunfeld-exchange",
    "category": "Openings",
    "theme": "Grünfeld Mainline",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "rnbqk2r/ppp1ppbp/6p1/8/2BPP3/2P5/P4PPP/R1BQK1NR b KQkq - 2 7",
    "sideToMove": "Black",
    "prompt": "Attack White's broad center immediately in classic Grünfeld fashion.",
    "moves": [
      "c5"
    ],
    "explanation": "7...c5! pressures d4 immediately alongside the g7 bishop."
  },
  {
    "id": "op-nimzo-pin-break",
    "category": "Openings",
    "theme": "Nimzo-Indian Core",
    "difficulty": "Advanced",
    "rating": 1560,
    "fen": "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2NBP3/PP3PPP/R1BQK1NR b KQ - 2 5",
    "sideToMove": "Black",
    "prompt": "Strike in the center before White finishes consolidating with Nge2 and e4.",
    "moves": [
      "d5"
    ],
    "explanation": "6...d5! stakes a central claim while preparing ...c5."
  },
  {
    "id": "op-catalan-central",
    "category": "Openings",
    "theme": "Catalan Pressure",
    "difficulty": "Advanced",
    "rating": 1600,
    "fen": "rnbq1rk1/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 0 7",
    "sideToMove": "White",
    "prompt": "Black took the c4 pawn. Maintain long-diagonal pressure and regain c4 cleanly.",
    "moves": [
      "Qc2"
    ],
    "explanation": "7.Qc2! eyes c4 directly and avoids wasting time before developing the queenside."
  },
  {
    "id": "op-london-pyramid",
    "category": "Openings",
    "theme": "London System Setup",
    "difficulty": "Easy",
    "rating": 960,
    "fen": "rnbqk2r/ppp2ppp/3bpn2/3p4/3P1B2/4PN2/PPP2PPP/RN1QKB1R w KQkq - 1 5",
    "sideToMove": "White",
    "prompt": "Black challenges your strong London bishop. Retreat to g3 or leap into e5!",
    "moves": [
      "Bg3"
    ],
    "acceptAlso": [
      "Ne5"
    ],
    "explanation": "5.Bg3! lets Black capture only by opening White's h-file; 5.Ne5 is also principled."
  },
  {
    "id": "op-sicilian-dragon-attack",
    "category": "Openings",
    "theme": "Sicilian Yugoslav Attack",
    "difficulty": "Advanced",
    "rating": 1640,
    "fen": "r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R b - - 6 10",
    "sideToMove": "Black",
    "prompt": "Prepare queenside counterplay along the half-open c-file.",
    "moves": [
      "Rc8"
    ],
    "explanation": "10...Rc8! eyes c4 and c2 immediately in the Yugoslav Attack."
  },
  {
    "id": "op-ruy-marshall-prep",
    "category": "Openings",
    "theme": "Ruy López Center Strike",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 b - - 0 8",
    "sideToMove": "Black",
    "prompt": "White played c3 preparing d4. Choose either the sharp Marshall Attack (8...d5) or Closed Spanish (8...d6).",
    "moves": [
      "d5"
    ],
    "acceptAlso": [
      "d6"
    ],
    "explanation": "8...d5! launches the fierce Marshall Counterattack; 8...d6 steers into the Closed Ruy López."
  },
  {
    "id": "op-pirc-austrian",
    "category": "Openings",
    "theme": "Pirc Counterstrike",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2N2N2/PPP3PP/R1BQKB1R w KQ - 3 6",
    "sideToMove": "White",
    "prompt": "White has built the Austrian Attack. Complete kingside development and connect rooks.",
    "moves": [
      "Bd3"
    ],
    "explanation": "6.Bd3! reinforces e4 and eyes h7, preparing O-O."
  },
  {
    "id": "op-alekhine-undermine",
    "category": "Openings",
    "theme": "Alekhine Undermining",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP1P2/8/PP4PP/RNBQKBNR b KQkq f3 0 5",
    "sideToMove": "Black",
    "prompt": "White set up the Four Pawns Attack! Begin dismantling the overextended center.",
    "moves": [
      "dxe5"
    ],
    "explanation": "5...dxe5! opens the d-file before hitting White's center with ...Nc6 and ...Bf5."
  },
  {
    "id": "op-french-advance-c5",
    "category": "Openings",
    "theme": "Advance French Target",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 2 5",
    "sideToMove": "Black",
    "prompt": "Add pressure against White's d4 pawn chain base (or develop the kingside knight toward f5).",
    "moves": [
      "Qb6"
    ],
    "acceptAlso": [
      "Nge7",
      "Bd7"
    ],
    "explanation": "5...Qb6! (along with 5...Nge7 and 5...Bd7) attacks White's d4 base in the Advance French."
  },
  {
    "id": "op-italian-fried-liver-avoid",
    "category": "Openings",
    "theme": "Traxler Counterattack",
    "difficulty": "Expert",
    "rating": 1820,
    "fen": "r1bqk2r/pppp1Npp/2n2n2/2b1p3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
    "sideToMove": "Black",
    "prompt": "White took the f7 bait against the Traxler! Unleash the crushing bishop sacrifice!",
    "moves": [
      "Bxf2+",
      "Kxf2",
      "Nxe4+"
    ],
    "explanation": "5...Bxf2+! 6.Kxf2 Nxe4+ draws the White king into a raging storm."
  },
  {
    "id": "op-stafford-queen-sac",
    "category": "Openings",
    "theme": "Stafford Gambit Mate",
    "difficulty": "Advanced",
    "rating": 1680,
    "fen": "r1bqk2r/ppp2ppp/2p2n2/2b3B1/4P3/3P4/PPP2PPP/RN1QKB1R b KQkq - 2 6",
    "sideToMove": "Black",
    "prompt": "White pinned the f6 knight. Sacrifice the queen for a deadly f2 checkmate net!",
    "moves": [
      "Nxe4",
      "Bxd8",
      "Bxf2+",
      "Ke2",
      "Bg4#"
    ],
    "explanation": "6...Nxe4! lures Bxd8, after which 7...Bxf2+ 8.Ke2 Bg4# is checkmate!"
  },
  {
    "id": "op-halosar-finish",
    "category": "Openings",
    "theme": "Halosar Trap Finish",
    "difficulty": "Advanced",
    "rating": 1640,
    "fen": "rn2kb1r/ppp1pppp/5n2/8/1q4b1/2N1BQ2/PPP3PP/2KR1BNR w kq - 4 8",
    "sideToMove": "White",
    "prompt": "Black tried to skewer your queen and rook with ...Bg4. Deliver a famous knockout!",
    "moves": [
      "Nb5",
      "Bxf3",
      "Nxc7#"
    ],
    "explanation": "8.Nb5! ignores the queen threat to play 9.Nxc7# after ...Bxf3!"
  },
  {
    "id": "op-sicilian-najdorf-e5",
    "category": "Openings",
    "theme": "Najdorf Central Thrust",
    "difficulty": "Advanced",
    "rating": 1690,
    "fen": "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq - 1 6",
    "sideToMove": "Black",
    "prompt": "Play the signature aggressive Najdorf thrust claiming central dark squares!",
    "moves": [
      "e5"
    ],
    "explanation": "6...e5! immediately challenges d4 and claims central space while opening Be7/Be6."
  },
  {
    "id": "op-scandi-tempo",
    "category": "Openings",
    "theme": "Punishing Early Queen",
    "difficulty": "Easy",
    "rating": 940,
    "fen": "rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3",
    "sideToMove": "White",
    "prompt": "Black brought the queen out on move 2. Develop a minor piece with gain of tempo!",
    "moves": [
      "Nc3"
    ],
    "explanation": "3.Nc3! develops naturally toward the center while forcing Black's queen to move again."
  },
  {
    "id": "op-qga-trap",
    "category": "Openings",
    "theme": "Queen’s Gambit Accepted Trap",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "rnbqkbnr/p3pppp/8/1p6/2pP4/4P3/1P3PPP/RNBQKBNR w KQkq - 0 6",
    "sideToMove": "White",
    "prompt": "Black greedily clung to the c4 pawn with ...b5 and ...cxb5. Win a rook on the long diagonal!",
    "moves": [
      "Qf3"
    ],
    "explanation": "6.Qf3! threatens Qxa8 immediately; Black can only save the rook by surrendering a knight with ...Nc6."
  },
  {
    "id": "op-benoni-fianchetto",
    "category": "Openings",
    "theme": "Modern Benoni Break",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N5/PP1NBPPP/R1BQ1RK1 b - - 7 10",
    "sideToMove": "Black",
    "prompt": "White played Nd2 defending e4. Prepare queenside expansion against c4/d5.",
    "moves": [
      "Na6"
    ],
    "explanation": "...Na6 reroutes via c7 to support ...b5 queenside counterplay."
  },
  {
    "id": "op-ruy-mortimer-trap",
    "category": "Openings",
    "theme": "Mortimer Trap",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "r1bqkb1r/ppppnppp/5n2/1B2N3/4P3/3P4/PPP2PPP/RNBQK2R b KQkq - 0 5",
    "sideToMove": "Black",
    "prompt": "White greedily snatched the e5 pawn in the Mortimer Defence. Spring the trap to win material!",
    "moves": [
      "c6"
    ],
    "explanation": "5...c6! attacks the b5 bishop while threatening 6...Qa5+ to fork the king and the e5 knight."
  },
  {
    "id": "op-ruy-fishing-pole",
    "category": "Openings",
    "theme": "Fishing Pole Trap",
    "difficulty": "Medium",
    "rating": 1260,
    "fen": "r1bqkb1r/pppp1pp1/2n5/1B2p3/4P1p1/8/PPPP1PP1/RNBQNRK1 b kq - 1 7",
    "sideToMove": "Black",
    "prompt": "White took your knight and retreated to e1, opening the h-file. Deliver the decisive queen invasion!",
    "moves": [
      "Qh4"
    ],
    "explanation": "7...Qh4! threatens unstoppable checkmate on h2 and h1 along the wide-open h-file."
  },
  {
    "id": "op-ruy-riga-finish",
    "category": "Openings",
    "theme": "Open Spanish Sacrifice Refutation",
    "difficulty": "Expert",
    "rating": 1920,
    "fen": "r1b1k2r/1pp2ppp/p1N5/8/B3p2q/8/PPP2PPb/RNBQ3K w kq - 0 12",
    "sideToMove": "White",
    "prompt": "Black launched a Bxh2+ and ...Qh4 assault and just recaptured your rook on e4. Find the brilliant deflection!",
    "moves": [
      "Qd8+",
      "Qxd8",
      "Nxd8+"
    ],
    "explanation": "12.Qd8+! forces 12...Qxd8 13.Nxd8+!, clearing Black’s queen away from the kingside attack and emerging up a piece."
  },
  {
    "id": "op-blackburne-qg5",
    "category": "Openings",
    "theme": "Blackburne Shilling Gambit",
    "difficulty": "Medium",
    "rating": 1240,
    "fen": "r1bqkbnr/pppp1ppp/8/4N3/2BnP3/8/PPPP1PPP/RNBQK2R b KQkq - 0 4",
    "sideToMove": "Black",
    "prompt": "White took the poisoned e5 pawn. Launch the signature double attack against g2 and e5!",
    "moves": [
      "Qg5"
    ],
    "explanation": "4...Qg5! attacks both e5 and g2; if White grabs 5.Nxf7??, 5...Qxg2 6.Rf1 Qxe4+ 7.Be2 Nf3# wins by checkmate."
  },
  {
    "id": "op-traxler-qh4",
    "category": "Openings",
    "theme": "Traxler Queen Strike",
    "difficulty": "Expert",
    "rating": 1860,
    "fen": "r1bqk2r/pppp1Npp/2n5/4p3/2B1n3/8/PPPP2PP/RNBQ2KR b kq - 1 7",
    "sideToMove": "Black",
    "prompt": "White retreated the king to g1 in the Traxler Counterattack. Keep the mating attack alive with the only winning move!",
    "moves": [
      "Qh4"
    ],
    "explanation": "7...Qh4! threatens 8...Qf2# immediately and keeps Black’s sacrificial assault at full force."
  },
  {
    "id": "op-evans-re1",
    "category": "Openings",
    "theme": "Evans Gambit Central Storm",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "r1bqk2r/ppp2ppp/1bn2P2/8/2pP4/5N2/P4PPP/RNBQ1RK1 w kq - 0 11",
    "sideToMove": "White",
    "prompt": "Black’s king is still stuck in the center on the half-open e-file. Seize the initiative immediately!",
    "moves": [
      "Re1+"
    ],
    "acceptAlso": [
      "fxg7"
    ],
    "explanation": "11.Re1+! (or 11.fxg7) pins Black down the e-file while White’s kingside pawns and pieces overwhelm the uncastled king."
  },
  {
    "id": "op-evans-qa4-fork",
    "category": "Openings",
    "theme": "Evans Gambit Queen Fork",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1bqk1nr/ppp3pp/1b1p1p2/8/2nPPB2/2N2N2/P4PPP/R2Q1RK1 w kq - 0 12",
    "sideToMove": "White",
    "prompt": "Black captured your c4 bishop with the knight on the rim. Recover the piece immediately with tempo!",
    "moves": [
      "Qa4+",
      "c6",
      "Qxc4"
    ],
    "explanation": "12.Qa4+! forks Black’s king and the undefended c4 knight, forcing 12...c6 13.Qxc4."
  },
  {
    "id": "op-stafford-ng4-attack",
    "category": "Openings",
    "theme": "Stafford Gambit Attack",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1bqk2r/ppp2pp1/2p2n2/2b4p/4P3/3P4/PPP1BPPP/RNBQ1RK1 b kq - 1 7",
    "sideToMove": "Black",
    "prompt": "White castled early into your kingside setup in the Stafford Gambit. Leap forward to threaten h2 and f2!",
    "moves": [
      "Ng4"
    ],
    "explanation": "7...Ng4! sets up ...Qd6 or ...Qh4 targeting h2 and f2 with a dangerous attack."
  },
  {
    "id": "op-petroff-knight-fork",
    "category": "Openings",
    "theme": "Petroff Greed Punished",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "r1b1kb1r/ppp3pp/8/3Nn3/8/8/PPP3PP/R1B1KB1R w KQkq - 0 13",
    "sideToMove": "White",
    "prompt": "Black greedily recaptured on e5 after the queen trade. Spot the immediate royal fork!",
    "moves": [
      "Nxc7+"
    ],
    "explanation": "13.Nxc7+! forks Black’s king on e8 and rook on a8, winning a full exchange cleanly."
  },
  {
    "id": "op-scotch-gambit-qh5",
    "category": "Openings",
    "theme": "Scotch Gambit Recovery",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "r1bq3r/pppp1kpp/2n5/2b5/3pP3/8/PPP2PPP/RNBQK2R w KQ - 0 8",
    "sideToMove": "White",
    "prompt": "You sacrificed two minor pieces on f7 to expose Black’s king. Recover a piece with a forcing fork!",
    "moves": [
      "Qh5+",
      "g6",
      "Qxc5"
    ],
    "explanation": "8.Qh5+! forks the f7 king and the c5 bishop; after 8...g6, 9.Qxc5 restores material with Black’s king stranded."
  },
  {
    "id": "op-kings-gambit-qh4",
    "category": "Openings",
    "theme": "King’s Gambit Declined Trap",
    "difficulty": "Easy",
    "rating": 1040,
    "fen": "rnbqk1nr/pppp1ppp/8/2b1P3/4P3/8/PPPP2PP/RNBQKBNR b KQkq - 0 3",
    "sideToMove": "Black",
    "prompt": "White greedily took e5 before developing the kingside knight. Punish the open e1-h4 diagonal!",
    "moves": [
      "Qh4+",
      "g3",
      "Qxe4+"
    ],
    "explanation": "3...Qh4+! forces 4.g3 (since 4.Ke2 Qxe4# is mate), after which 4...Qxe4+ forks White’s king and h1 rook."
  },
  {
    "id": "op-vienna-d4-fork",
    "category": "Openings",
    "theme": "Vienna Gambit Center Fork",
    "difficulty": "Easy",
    "rating": 1080,
    "fen": "r1bqk1nr/pppp1ppp/8/2b1n3/4P3/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 5",
    "sideToMove": "White",
    "prompt": "Black recaptured on e5 leaving the c5 bishop and e5 knight aligned. Win a piece with a central pawn thrust!",
    "moves": [
      "d4"
    ],
    "explanation": "5.d4! forks Black’s bishop on c5 and knight on e5 simultaneously."
  },
  {
    "id": "op-najdorf-poisoned-trap",
    "category": "Openings",
    "theme": "Najdorf Poisoned Pawn Trap",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "rnb1kb1r/1p3ppp/p2ppn2/6B1/3NPP2/P1N5/1qP3PP/R2QKB1R w KQkq - 0 9",
    "sideToMove": "White",
    "prompt": "You prepared 8.a3 against ...Qxb2, yet Black grabbed the poisoned pawn anyway! Trap Black’s queen!",
    "moves": [
      "Na4"
    ],
    "explanation": "9.Na4! cuts off every retreat square for Black’s queen on b2, winning the queen decisively."
  },
  {
    "id": "op-dragon-qxa8-bf5",
    "category": "Openings",
    "theme": "Sicilian Dragon Poisoned Rook",
    "difficulty": "Expert",
    "rating": 1940,
    "fen": "Q1b2rk1/p1q1ppbp/6p1/8/8/4BP2/PPP3PP/2KR1B1R b - - 0 14",
    "sideToMove": "Black",
    "prompt": "White greedily captured your a8 rook in the Dragon! Unleash the devastating counterattack against White’s king!",
    "moves": [
      "Bf5"
    ],
    "explanation": "14...Bf5! defends nothing on a8 and instead threatens 15...Qxc2#, forcing White to surrender the queen on f8."
  },
  {
    "id": "op-alapin-d5-drive",
    "category": "Openings",
    "theme": "Sicilian Alapin Central Drive",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "r3kbnr/pp2pppp/2n5/q7/3P2b1/2N2N2/PP3PPP/R1BQKB1R w KQkq - 5 8",
    "sideToMove": "White",
    "prompt": "Black’s queen retreated to a5 while pinning f3. Seize central space and drive Black’s knight away!",
    "moves": [
      "d5"
    ],
    "explanation": "8.d5! attacks c6 with tempo (8...Ne5?? drops a piece to 9.Nxe5! Bxd1 10.Bb5+), winning huge central control."
  },
  {
    "id": "op-kan-bxf2-sac",
    "category": "Openings",
    "theme": "Sicilian Kan Deflection",
    "difficulty": "Advanced",
    "rating": 1690,
    "fen": "rnbqk1r1/bp1p1p1p/p3pn1Q/8/4P3/1N1B4/PPP2PPP/RNB1K2R b KQq - 2 9",
    "sideToMove": "Black",
    "prompt": "White’s queen hunted g7 and retreated to h6. Punish White’s uncastled king with a deflection sacrifice!",
    "moves": [
      "Bxf2+"
    ],
    "explanation": "9...Bxf2+! wins a crucial pawn and deflects the king: 10.Kxf2?? walks into the royal knight fork 10...Ng4+."
  },
  {
    "id": "op-french-winawer-qc3",
    "category": "Openings",
    "theme": "French Winawer Poisoned Pawn Fork",
    "difficulty": "Easy",
    "rating": 1100,
    "fen": "rnb1k1r1/ppq1np1Q/4p3/3pP3/3P4/P7/2P2PPP/R1B1KBNR b KQq - 0 10",
    "sideToMove": "Black",
    "prompt": "White recaptured on d4 ignoring the a1-f6 diagonal. Fork White’s king and rook immediately!",
    "moves": [
      "Qc3+"
    ],
    "explanation": "10...Qc3+! exploits the open diagonal created after Bxc3+ and cxd4, winning White’s a1 rook."
  },
  {
    "id": "op-caro-panov-bb5",
    "category": "Openings",
    "theme": "Caro-Kann Panov Pin",
    "difficulty": "Medium",
    "rating": 1450,
    "fen": "r2qkb1r/pp2pppp/8/3n4/3n4/1QN2P2/PP3P1P/R1B1KB1R w KQkq - 0 10",
    "sideToMove": "White",
    "prompt": "Black snatched the d4 pawn leaving the king uncastled. Deliver a lethal check that wins a piece!",
    "moves": [
      "Bb5+"
    ],
    "explanation": "10.Bb5+! forces 10...Nxb5 11.Qxb5+ Qd7 12.Nxd5 Qxb5 13.Nc7+, winning material with a crushing attack."
  },
  {
    "id": "op-alekhine-four-pawns-qxd1",
    "category": "Openings",
    "theme": "Alekhine Four Pawns Blunder",
    "difficulty": "Easy",
    "rating": 1050,
    "fen": "rnbqkb1r/ppp1pppp/1n6/4P3/2P2P2/8/PP4PP/RNBQKBNR b KQkq - 0 6",
    "sideToMove": "Black",
    "prompt": "White recaptured on e5 with the d-pawn instead of the f-pawn, leaving the d-file open. Punish White’s king safety!",
    "moves": [
      "Qxd1+"
    ],
    "explanation": "6...Qxd1+! forces 7.Kxd1, stripping White of castling rights and leaving the e5 and c4 pawns overextended."
  },
  {
    "id": "op-pirc-e6-break",
    "category": "Openings",
    "theme": "Pirc Defence e6 Breakthrough",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "rn1q1rk1/pppnppbp/3p2p1/4P3/2BP2b1/2N2N2/PPP1QPPP/R1B1K2R w KQ - 1 8",
    "sideToMove": "White",
    "prompt": "Black’s knight retreated to d7 after e5. Shatter Black’s f7 square immediately before Black consolidates!",
    "moves": [
      "e6"
    ],
    "explanation": "8.e6! rips open the kingside light squares around f7 and prevents Black from stabilizing with ...Nb6 or ...c5."
  },
  {
    "id": "op-english-qxd4-trap",
    "category": "Openings",
    "theme": "English Opening Fork Trap",
    "difficulty": "Medium",
    "rating": 1220,
    "fen": "rnbqkb1r/pp2pppp/8/8/1n1NP3/2N5/PP3PPP/R1BQKB1R b KQkq - 0 7",
    "sideToMove": "Black",
    "prompt": "White recaptured on d4 overlooking your b4 knight’s jump. Snatch the d4 knight boldly!",
    "moves": [
      "Qxd4"
    ],
    "explanation": "7...Qxd4! wins a full piece cleanly because 8.Qxd4 walks into the royal fork 8...Nc2+."
  },
  {
    "id": "op-reti-bb5-trap",
    "category": "Openings",
    "theme": "Réti Opening Check Skewer",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "rn1qkbnr/pp2pppp/8/3pN3/4b3/1P6/P2P1PPP/RNBQKB1R w KQkq - 0 7",
    "sideToMove": "White",
    "prompt": "Black captured your e4 pawn with the bishop. Exploit the weakened a4-e8 diagonal immediately!",
    "moves": [
      "Bb5+"
    ],
    "explanation": "7.Bb5+! forces 7...Nc6 8.Nxc6, winning heavy material on the queenside."
  },
  {
    "id": "op-qgd-rubinstein-trap",
    "category": "Openings",
    "theme": "Rubinstein Trap (QGD)",
    "difficulty": "Advanced",
    "rating": 1660,
    "fen": "r1bqr1k1/1p1nb1pp/p1p5/3p1p2/3PnB2/2NBPN2/PPQ2PPP/2R2RK1 w - f6 0 13",
    "sideToMove": "White",
    "prompt": "Black defended e4 with 12...f5?, creating a famous tactical blind spot on d5 and c7. Strike immediately!",
    "moves": [
      "Nxd5"
    ],
    "explanation": "13.Nxd5! wins a clean pawn because 13...cxd5?? walks into 14.Bc7, trapping Black’s queen!"
  },
  {
    "id": "op-semi-slav-botvinnik",
    "category": "Openings",
    "theme": "Botvinnik Semi-Slav Mainline",
    "difficulty": "Advanced",
    "rating": 1610,
    "fen": "rnbqkb1r/p4p2/2p1pP1p/1p4p1/2pP3B/2N2N2/PP3PPP/R2QKB1R b KQkq - 0 9",
    "sideToMove": "Black",
    "prompt": "In the razor-sharp Botvinnik System, White just captured on f6. Recapture accurately to keep the tactical tension alive!",
    "moves": [
      "gxh4"
    ],
    "explanation": "9...gxh4! eliminates the pinned h4 bishop before White can consolidate, preparing ...Rg8 and ...Nd7xf6."
  },
  {
    "id": "op-slav-nxe4-trap",
    "category": "Openings",
    "theme": "Slav Geller Gambit Trap",
    "difficulty": "Expert",
    "rating": 1850,
    "fen": "rn2k2r/pp3ppp/2p1p3/4N3/Pbpqn3/2N5/1P1B2PP/R2QKB1R w KQkq - 0 11",
    "sideToMove": "White",
    "prompt": "Black grabbed d4 with the queen, threatening ...Qf2# and ...Qxd2+. Find the only defensive tactic that refutes Black’s attack!",
    "moves": [
      "Nxe4"
    ],
    "explanation": "11.Nxe4! eliminates the strong e4 knight because 11...Qxe4+ 12.Qe2 neutralizes all threats and leaves White up a piece for pawns."
  },
  {
    "id": "op-catalan-e3-trap",
    "category": "Openings",
    "theme": "Catalan Opening Knight Trap",
    "difficulty": "Advanced",
    "rating": 1630,
    "fen": "r1bqkb1r/pp3ppp/4pn2/2p1N3/2pn4/6P1/PP2PPBP/RNBQ1RK1 w kq - 0 8",
    "sideToMove": "White",
    "prompt": "Black greedily captured on d4 after 7.Ne5, ignoring the pin along the long diagonal and d-file. Punish Black immediately!",
    "moves": [
      "e3"
    ],
    "explanation": "8.e3! attacks the d4 knight; retreating allows 9.Qxd8+ Kxd8 10.Nxf7+ winning the h8 rook, while 8...Be7 drops it to 9.exd4."
  },
  {
    "id": "op-nimzo-saemisch-e4",
    "category": "Openings",
    "theme": "Nimzo-Indian Sämisch Break",
    "difficulty": "Medium",
    "rating": 1480,
    "fen": "r1bqk2r/pp1p1ppp/2n2n2/2pPp3/2P5/P1PBP3/5PPP/R1BQK1NR b KQkq - 0 8",
    "sideToMove": "Black",
    "prompt": "White closed the center with 8.d5?, attacking your c6 knight. Counterstrike before retreating!",
    "moves": [
      "e4"
    ],
    "explanation": "8...e4! attacks White’s d3 bishop as an in-between thrust, gaining open dark squares after 9.dxc6 exd3."
  },
  {
    "id": "op-grunfeld-bxc3-trap",
    "category": "Openings",
    "theme": "Grünfeld Long-Diagonal Trap",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "rnb1k2r/pp2ppbp/6p1/q1PQ4/5B2/2N1P3/PP3PPP/R3KBNR b KQkq - 0 8",
    "sideToMove": "Black",
    "prompt": "White greedily captured your d5 knight with the queen! Punish the unprotected a1 rook via the long diagonal!",
    "moves": [
      "Bxc3+",
      "bxc3",
      "Qxc3+"
    ],
    "explanation": "8...Bxc3+! forces 9.bxc3 Qxc3+, forking White’s king and winning the corner rook on a1."
  },
  {
    "id": "op-fajarowicz-trap",
    "category": "Openings",
    "theme": "Budapest Fajarowicz Trap",
    "difficulty": "Advanced",
    "rating": 1520,
    "fen": "rnbqk2r/ppp2ppp/3b4/8/2P1n3/P5P1/1P2PP1P/RNBQKBNR b KQkq - 0 6",
    "sideToMove": "Black",
    "prompt": "White fianchettoed with 6.g3?? overlooking the classic Fajarowicz tactical shot on f2 and g3. Strike!",
    "moves": [
      "Nxf2"
    ],
    "explanation": "6...Nxf2! wins cleanly: if 7.Kxf2??, 7...Bxg3+ 8.hxg3 Qxd1 wins White’s queen via discovered attack!"
  },
  {
    "id": "op-benko-smothered-mate",
    "category": "Openings",
    "theme": "Benko Gambit Smothered Mate",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "rnbqkb1r/3ppppp/5n2/1NpP4/1p6/8/PP2QPPP/R1B1KBNR w KQkq - 2 9",
    "sideToMove": "White",
    "prompt": "Black carelessly retreated the knight to f6 after 8.Qe2. Deliver a famous 9-move smothered checkmate!",
    "moves": [
      "Nd6#"
    ],
    "explanation": "9.Nd6# is checkmate! Black’s e7 pawn is pinned to the e8 king by White’s e2 queen."
  },
  {
    "id": "op-ruy-lopez-bird-3ply",
    "category": "Openings",
    "theme": "Ruy Lopez Noah’s Ark 3-Ply",
    "difficulty": "Easy",
    "rating": 1090,
    "fen": "r1bqkbnr/2p2ppp/p2p4/1p6/3QP3/1B6/PPP2PPP/RNB1K2R b KQkq - 0 8",
    "sideToMove": "Black",
    "prompt": "White greedily recaptured on d4 with the queen! Execute the classic Noah’s Ark Trap sequence to win the b3 bishop!",
    "moves": [
      "c5",
      "Qc3",
      "c4"
    ],
    "explanation": "8...c5! attacks the queen, forcing 9.Qd5 Be6 (or Qc6+), followed by 10...c4 trapping the white bishop!"
  },
  {
    "id": "op-budapest-3ply-mate",
    "category": "Openings",
    "theme": "Budapest Opening Fork & Win",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "rnbqk2r/ppp2ppp/3b4/8/2P1n3/P4N2/1P2PPPP/RNBQKB1R b KQkq - 1 6",
    "sideToMove": "Black",
    "prompt": "In the Fajarowicz Budapest, White developed 6.Nf3?? overlooking a classic tactical strike on f2. Execute the 3-ply combination to win the corner rook!",
    "moves": [
      "Nxf2",
      "Qd4",
      "Nxh1"
    ],
    "explanation": "6...Nxf2! attacks the queen and rook; 7.Qd4 avoids 7.Kxf2?? Bg3+!, allowing 7...Nxh1 winning a full rook."
  },
  {
    "id": "op-3ply-scholars-punish",
    "category": "Openings",
    "theme": "Punishing Early Qb3/Qh5",
    "difficulty": "Easy",
    "rating": 940,
    "fen": "r1bqkb1r/pppp1p1p/5np1/4p3/2BnP3/3Q4/PPPP1PPP/RNB1K1NR b KQkq - 5 6",
    "sideToMove": "Black",
    "prompt": "White wandered around with the queen and stepped to d3! Seize the center with tempo!",
    "moves": [
      "d5",
      "Bb3",
      "dxe4"
    ],
    "explanation": "6...d5! attacks c4 and forces 7.Bb3, followed by 7...dxe4 tearing open White’s center with a huge lead in development."
  },
  {
    "id": "op-sicilian-dragon-qa5-trap",
    "category": "Openings",
    "theme": "Sicilian Dragon Poisoned b2",
    "difficulty": "Medium",
    "rating": 1450,
    "fen": "r1bq1rk1/p3ppbp/6p1/3Q4/8/4BP2/PPP3PP/2KR1B1R b - - 0 13",
    "sideToMove": "Black",
    "prompt": "White greedily grabbed the d5 pawn with 13.Qxd5?? ignoring Black’s dragon bishop! Launch the winning queen counterattack!",
    "moves": [
      "Qc7",
      "Qc5",
      "Qb7"
    ],
    "explanation": "13...Qc7! (or ...Rb8!) attacks c2 and traps White’s queen/king along the open c- and b-files!"
  },
  {
    "id": "op-petroff-3ply-queen-win",
    "category": "Openings",
    "theme": "Petroff Symmetry Trap 3-Ply",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "rnb1kb1r/ppp1q1pp/3p1p2/4N3/3PQ3/8/PPP2PPP/RNB1KB1R w KQkq - 0 7",
    "sideToMove": "White",
    "prompt": "Black attacked your pinned knight with 6...f6. Win a clean pawn or stay ahead with a sharp counterattack!",
    "moves": [
      "Nc3",
      "fxe5",
      "Nd5"
    ],
    "explanation": "7.Nc3! defends and attacks c7; after 7...fxe5 8.Nd5! White dominates the center with decisive threats."
  },
  {
    "id": "op-3ply-philidor-legals-trap",
    "category": "Openings",
    "theme": "Philidor Légal-Style Fork 3-Ply",
    "difficulty": "Medium",
    "rating": 1260,
    "fen": "r2qkbnr/ppp2ppp/2np4/4p2b/2B1P3/2N2N1P/PPPP1PP1/R1BQK2R w KQkq - 1 6",
    "sideToMove": "White",
    "prompt": "Black kept the pin with 5...Bh5? instead of trading on f3. Unleash the classic Légal Sacrifice!",
    "moves": [
      "Nxe5",
      "Nxe5",
      "Qxh5"
    ],
    "explanation": "6.Nxe5! wins a clean pawn because 6...Bxd1?? allows 7.Bxf7+ Ke7 8.Nd5#; after 6...Nxe5 7.Qxh5 White stays a clear pawn ahead."
  },
  {
    "id": "op-vienna-falkbeer-punish",
    "category": "Openings",
    "theme": "Vienna Copycat Trap",
    "difficulty": "Medium",
    "rating": 1210,
    "fen": "r1b1k2r/ppp2ppp/3p4/2b1p3/2P1P1nq/2N3NP/PPP2PP1/R1BQ1RK1 w kq - 1 10",
    "sideToMove": "White",
    "prompt": "Black ignored the threat to g4 and launched 10...Qh4?? eyeing g3. Defend f2/g3 accurately while keeping your extra piece!",
    "moves": [
      "Qd3",
      "Nxf2",
      "Rxf2"
    ],
    "explanation": "11.Qd3! (or 11.Qf3!) covers g3 cleanly; after 11...Nxf2 12.Rxf2 White emerges ahead in material.",
    "acceptAlso": [
      "Qf3"
    ]
  },
  {
    "id": "op-italian-deutz-gambit-3ply",
    "category": "Openings",
    "theme": "Italian Center Pin 3-Ply",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r1b1kb1r/ppp2ppp/2n5/q7/3pn3/2N2N2/PPP2PPP/R1BQR1K1 w kq - 2 9",
    "sideToMove": "White",
    "prompt": "In the sharp Canal/Italian gambit, Black stepped back with 8...Qa5. Win back your piece with decisive central tactics!",
    "moves": [
      "Nxe4",
      "Be6",
      "Neg5"
    ],
    "explanation": "9.Nxe4! threatens deadly discovered checks like Nf6+ or Bg5!"
  },
  {
    "id": "op-3ply-italian-mate-f7",
    "category": "Openings",
    "theme": "Italian Opening Fork 3-Ply",
    "difficulty": "Easy",
    "rating": 960,
    "fen": "r1bqk2r/pppp1ppp/2n5/8/2BP4/2b2N2/P4PPP/R1BQ1RK1 w kq - 0 10",
    "sideToMove": "White",
    "prompt": "Black greedily grabbed c3 with 9...Bxc3?? in the Greco Attack! Deflect the Black king and seize a crushing attack!",
    "moves": [
      "Bxf7+",
      "Kxf7",
      "Bg5"
    ],
    "acceptAlso": [
      "Ba3",
      "Ng5",
      "Qb3"
    ],
    "explanation": "10.Bxf7+! Kxf7 11.Bg5 (or 10.Ba3 / 10.Ng5) strips Black’s king of shelter and traps it in the center."
  },
  {
    "id": "op-italian-3ply-greek-fork",
    "category": "Openings",
    "theme": "Italian Opening Fork 3-Ply",
    "difficulty": "Easy",
    "rating": 1040,
    "fen": "r1bqk2r/ppp2p2/2np1n2/2b1p1pp/2B1P3/3P1NB1/PPP2PPP/RN1Q1RK1 w kq - 0 9",
    "sideToMove": "White",
    "prompt": "Black launched a reckless pawn storm with ...g5 and ...h5 before castling! Strike immediately at the overextended kingside!",
    "moves": [
      "h4"
    ],
    "explanation": "9.h4! attacks g5 right away, ripping open lines against Black’s uncastled king."
  },
  {
    "id": "op-englund-mate-3ply",
    "category": "Openings",
    "theme": "Englund Gambit Refutation 3-Ply",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "r1b1k1nr/pppp1ppp/2n5/4P3/8/2Q2N2/PqP1PPPP/RN2KB1R b KQkq - 0 8",
    "sideToMove": "Black",
    "prompt": "White recaptured on c3 with the queen, leaving the first rank fatally undefended! Deliver checkmate in one move!",
    "moves": [
      "Qc1#"
    ],
    "explanation": "8...Qc1# is checkmate! White’s rook on a1 and knight on b1 block the king while Qc1 seals e1."
  },
  {
    "id": "op-caro-two-knights-punish",
    "category": "Openings",
    "theme": "Caro-Kann Two Knights Trap",
    "difficulty": "Easy",
    "rating": 1140,
    "fen": "r1bqkb1r/pp1npppp/2p2n2/8/4N3/5N2/PPPPQPPP/R1B1KB1R w KQkq - 3 6",
    "sideToMove": "White",
    "prompt": "Black blocked the e7 pawn’s defense with 5...Nbd7??! Deliver a famous 6-move smothered checkmate!",
    "moves": [
      "Nd6#"
    ],
    "explanation": "6.Nd6# is checkmate! The e7 pawn is pinned to the Black king by White’s queen on e2."
  },
  {
    "id": "op-rousseau-gambit-punish",
    "category": "Openings",
    "theme": "Rousseau Gambit Refutation",
    "difficulty": "Easy",
    "rating": 1060,
    "fen": "r2qkbnr/pppb2pp/2n5/1B1pN3/3Pp3/8/PPP2PPP/RNBQK2R w KQkq - 2 7",
    "sideToMove": "White",
    "prompt": "Black played the risky Rousseau Gambit (3...f5) and blocked with 6...Bd7. Eliminate the c6 defender before striking at the exposed king!",
    "moves": [
      "Bxc6"
    ],
    "explanation": "7.Bxc6! removes the c6 knight first so Black cannot meet Qh5+ or dxe5 without heavy material loss."
  },
  {
    "id": "op-3ply-evans-5ba5-6o-o",
    "category": "Openings",
    "theme": "Evans Gambit 6.O-O Setup",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "r1b1k1nr/pppq1ppp/1bn5/4p3/2B1P3/1QP2N2/P4PPP/RNBR2K1 b kq - 3 10",
    "sideToMove": "Black",
    "prompt": "White placed Rd1 eyeing d8 and the queen on d7. Step out of the dangerous d-file pin cleanly!",
    "moves": [
      "Qe7"
    ],
    "explanation": "10...Qe7! avoids Ba3/d-file discovery tricks and prepares ...Nf6."
  },
  {
    "id": "op-ruy-berlin-lasker-trap",
    "category": "Openings",
    "theme": "Ruy Lopez Marshall Counter",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r2q1rk1/4bppp/p2p1n2/1p1Pp3/4P3/2N1BP1P/PPQ2P2/R3R1K1 b - - 0 17",
    "sideToMove": "Black",
    "prompt": "White just recaptured on c2 with doubled f-pawns. Activate your queen to target both c2 and the weakened kingside light squares!",
    "moves": [
      "Qc8"
    ],
    "explanation": "17...Qc8! hits c2 and prepares ...Bxh3 or ...Nh5, exploiting White’s exposed kingside."
  },
  {
    "id": "op-scandi-icelandic-gambit",
    "category": "Openings",
    "theme": "Scandinavian Portuguese Gambit",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r2q1b1r/ppp2kpp/2n2n2/5b2/2PP4/4BP2/PP4PP/RN1QKBNR b KQ - 1 8",
    "sideToMove": "Black",
    "prompt": "In the wild Portuguese Gambit, you sacrificed two pawns to strand White’s king and exploit the e-file. Pin c3 with check!",
    "moves": [
      "Bb4+"
    ],
    "explanation": "8...Bb4+! develops with tempo, preparing ...Re8+ with devastating pressure on White’s uncastled king."
  },
  {
    "id": "op-grunfeld-exchange-be3",
    "category": "Openings",
    "theme": "Grünfeld Exchange 7.Bc4",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "r2q1rk1/pp2pBbp/6p1/n1p5/3PP1b1/2P1BP2/P3N1PP/R2Q1RK1 b - - 0 12",
    "sideToMove": "Black",
    "prompt": "White just played the famous 12.Bxf7+! tactical shot in the Exchange Grünfeld. Recapture correctly!",
    "moves": [
      "Rxf7"
    ],
    "explanation": "12...Rxf7! 13.fxg4 Rxf1+ 14.Kxf1 cxd4 15.cxd4 Nc4 leaves Black with tremendous dark-square counterplay."
  },
  {
    "id": "op-najdorf-6bg5-b5-trap",
    "category": "Openings",
    "theme": "Najdorf Polugaevsky Tactics",
    "difficulty": "Expert",
    "rating": 1840,
    "fen": "r1b1kb1r/6pp/p1pppn2/4P1B1/8/q1N5/P1PQ2PP/1R2KB1R b Kkq - 0 13",
    "sideToMove": "Black",
    "prompt": "In the ultra-sharp Poisoned Pawn Najdorf, White pushed 13.e5! attacking f6. Keep your cool and recapture accurately!",
    "moves": [
      "dxe5"
    ],
    "explanation": "13...dxe5! accepts the challenge cleanly; after 14.Bxf6 gxf6 15.Ne4 Be7 Black holds the extra pawn dynamically."
  },
  {
    "id": "op-italian-bxf7-mate",
    "category": "Openings",
    "theme": "Italian Fried-Liver Fork",
    "difficulty": "Easy",
    "rating": 960,
    "fen": "r1b1k2r/ppppqNpp/2n2n2/2b1p3/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 1 6",
    "sideToMove": "White",
    "prompt": "Black declined 8...Bxf2+ and stepped aside with 9...Qe7??. Claim the trapped corner rook immediately!",
    "moves": [
      "Nxh8"
    ],
    "explanation": "10.Nxh8! wins a full rook cleanly, as White already captured f7 and keeps a crushing material edge."
  },
  {
    "id": "op-danish-gambit-qb3",
    "category": "Openings",
    "theme": "Danish Gambit Diagonal Storm",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "rnbqkb1r/ppp2ppp/5n2/3B4/4P3/8/PB3PPP/RN1QK1NR w KQkq - 1 7",
    "sideToMove": "White",
    "prompt": "Black tried the Schlechter Defence (5...d5) in the Danish Gambit, overlooking a classic deflection on f7! Win material cleanly!",
    "moves": [
      "Bxf7+"
    ],
    "explanation": "7.Bxf7+! Kxf7 8.Qxd8 Bb4+ 9.Qd2 Bxd2+ 10.Nxd2 leaves White with a clear extra piece/winning initiative? Even simpler: 7.Bxf7+! forces Black’s king out into a crushing attack."
  },
  {
    "id": "op-grunfeld-russian-qb3",
    "category": "Openings",
    "theme": "Grünfeld Russian System",
    "difficulty": "Medium",
    "rating": 1460,
    "fen": "r2q1rk1/ppp1ppbp/1nn3p1/8/3PP1b1/1QN1BN2/PP3PPP/3RKB1R w K - 7 11",
    "sideToMove": "White",
    "prompt": "In the Russian Grünfeld, Black attacked d4 with ...Nc6. Push forward to gain central space and drive the knight!",
    "moves": [
      "d5"
    ],
    "explanation": "11.d5! grabs central space, forces ...Ne5, and opens White’s bishop coordination."
  },
  {
    "id": "op-qgd-ragozin-3ply",
    "category": "Openings",
    "theme": "QGD Catalan-Ragozin 3-Ply",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "r2q1rk1/1pp1bppp/p1n1pn2/3b2B1/P2P4/5NP1/1PQ1PPBP/RN1R2K1 b - - 6 13",
    "sideToMove": "Black",
    "prompt": "In the Catalan vs ...Bb4+, White placed Rd1. Eliminate White’s active f3 knight to disrupt White’s center and win control!",
    "moves": [
      "Bxf3"
    ],
    "explanation": "13...Bxf3! forces White to recapture awkwardly and leaves Black with active central play."
  },
  {
    "id": "op-bishops-opening-urussov",
    "category": "Openings",
    "theme": "Urusov Gambit Initiative",
    "difficulty": "Medium",
    "rating": 1260,
    "fen": "r3k2r/pppqbppp/2npbn2/6B1/2B4Q/2N2N2/PPP2PPP/2KRR3 w kq - 4 11",
    "sideToMove": "White",
    "prompt": "In the Urusov Gambit, Black’s king is still in the center and c6 is pinned? Pin the c6 knight and prepare Ne5/Nd4!",
    "moves": [
      "Bb5"
    ],
    "explanation": "11.Bb5! pins the c6 knight to the queen and increases pressure on the center and e7."
  },
  {
    "id": "op-nimzo-kasparov-4nf3",
    "category": "Openings",
    "theme": "Nimzo-Indian Kasparov 4.Nf3",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "rnbq1rk1/pp3ppp/4p3/8/3N4/2b3P1/P3PPBP/R1BQ1RK1 w - - 0 11",
    "sideToMove": "White",
    "prompt": "Black grabbed the c3 pawn with 10...Bxc3?! overlooking the a3-f8 diagonal. Punish Black’s uncastled king immediately!",
    "moves": [
      "Ba3"
    ],
    "explanation": "11.Ba3! cuts off Black’s kingside castling and traps Black’s king in the center."
  },
  {
    "id": "op-dragon-rxc3-sac",
    "category": "Openings",
    "theme": "Sicilian Dragon ...Rxc3! Sac",
    "difficulty": "Advanced",
    "rating": 1710,
    "fen": "r2q1rk1/p4pbp/2p1b1p1/2Bnp3/8/2N2P2/PPPQ2PP/2KR1B1R w - - 2 14",
    "sideToMove": "White",
    "prompt": "Black played the thematic ...d5 break and defended with 13...Be6. Before taking on f8, consolidate or jump centrally?",
    "moves": [
      "Ne4"
    ],
    "explanation": "14.Ne4! centralizes powerfully, eyes c5/d6/g5, and keeps Black’s queenside pawns under pressure."
  },
  {
    "id": "op-italian-traxler-3ply",
    "category": "Openings",
    "theme": "Italian Fried-Liver 3-Ply Mate Threat",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1bq1b1r/pp4pp/2p1k3/3np3/1nB1Q3/2N5/PPPP1PPP/R1B1K2R w KQ - 0 10",
    "sideToMove": "White",
    "prompt": "In the Fried Liver Attack, Black defended d5 with ...c6 and threatens ...Nxc2+. Kick the b4 knight while maintaining your attack!",
    "moves": [
      "a3"
    ],
    "explanation": "10.a3! chases the b4 knight away before Black can consolidate, keeping Black’s king stranded on e6."
  },
  {
    "id": "op-sicilian-chelyabinsk-3ply",
    "category": "Openings",
    "theme": "Sicilian Knight Fork 3-Ply",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "2r1kb1r/1p3ppp/p1npbq2/4p3/2N1P3/2N5/PPP2PPP/R2QKB1R w KQk - 0 11",
    "sideToMove": "White",
    "prompt": "Black recaptured on f6 with the queen instead of ...gxf6, leaving d5 and b6 unprotected. Fork the c8 rook and d5!",
    "moves": [
      "Nb6"
    ],
    "explanation": "11.Nb6! attacks the c8 rook and seizes total control of the d5 outpost."
  },
  {
    "id": "op-vienna-max-lange-trap",
    "category": "Openings",
    "theme": "Vienna Gambit Refutation",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "r1b1kb1r/ppp2ppp/2n5/1B1pP3/7q/2P2QP1/P1PP3P/R1B1K1NR b KQkq - 0 8",
    "sideToMove": "Black",
    "prompt": "White blocked the check with 8.g3. Seize the initiative with a central queen check that trades into a superior endgame or wins a pawn!",
    "moves": [
      "Qe4+"
    ],
    "explanation": "8...Qe4+! forces the queen exchange or wins the e5 pawn, shattering White’s overextended center."
  },
  {
    "id": "op-scotch-4bc5-be3",
    "category": "Openings",
    "theme": "Scotch 4...Bc5 5.Be3",
    "difficulty": "Easy",
    "rating": 1110,
    "fen": "r1b1k2r/ppppnppp/6q1/2b1n3/3NP3/2P1B3/PP2BPPP/RN1QK2R w KQkq - 5 9",
    "sideToMove": "White",
    "prompt": "Black attacked both e4 and g2 with 8...Qg6! Safeguard the kingside and sacrifice or defend? Find the strongest move!",
    "moves": [
      "O-O"
    ],
    "explanation": "9.O-O! calmly defends g2 while keeping e4 immune to ...Qxe4? due to Nd2/Bf3 tricks."
  },
  {
    "id": "op-caro-advance-short-c5",
    "category": "Openings",
    "theme": "Caro-Kann Short System Break",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "rn2kbnr/pp3ppp/1q2p3/2ppPb2/3P4/2N1BN2/PPP1BPPP/R2QK2R b KQkq - 3 7",
    "sideToMove": "Black",
    "prompt": "White left the b2 pawn undefended after 7.Nc3 in the Short Variation. Check the tactics on b4 and snatch the free pawn!",
    "moves": [
      "Qxb2"
    ],
    "explanation": "7...Qxb2! wins a clean pawn because 8.Nb5?! is met by 8...Bb4+! and 8.Na4 allows 8...Qa3."
  },
  {
    "id": "op-english-sicilian-reversed-3ply",
    "category": "Openings",
    "theme": "English Four Knights e4",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "r1b1k2r/ppp1qppp/2n5/3np3/8/P3PN2/1PQP1PPP/R1B1KB1R b KQkq - 1 9",
    "sideToMove": "Black",
    "prompt": "In the English Four Knights, White retreated Qc2. Seize space in the center and drive White’s knight back with tempo!",
    "moves": [
      "e4"
    ],
    "explanation": "9...e4! attacks f3, gains central space, and stops White from consolidating easily."
  },
  {
    "id": "op-catalan-b5-trap",
    "category": "Openings",
    "theme": "Catalan Long Diagonal Tactics",
    "difficulty": "Advanced",
    "rating": 1640,
    "fen": "rn1qkb1r/1bp2ppp/p3p3/1p2N3/PnpPP3/6P1/1P3PBP/RNBQ1RK1 w kq - 1 10",
    "sideToMove": "White",
    "prompt": "In the sharp Catalan 5...b5 line, Black hopped to b4. Open the a-file and win material on the queenside immediately!",
    "moves": [
      "axb5"
    ],
    "explanation": "10.axb5! opens the a-file against Black’s unprotected a8 rook and wins the b5 pawn cleanly."
  },
  {
    "id": "op-ruy-open-bxe5-trap",
    "category": "Openings",
    "theme": "Ruy Lopez Steinitz Trap",
    "difficulty": "Medium",
    "rating": 1290,
    "fen": "3r1rk1/ppp1bppp/5n2/4N3/4b3/2N5/PPP2PPP/R1B1R1K1 w - - 0 12",
    "sideToMove": "White",
    "prompt": "Black snatched on e4 trusting the back-rank pin on Re1. Check the tactics carefully and refute Black’s trick!",
    "moves": [
      "Nxe4"
    ],
    "explanation": "12.Nxe4! works because 12...Nxe4 13.Nd3! attacks the pinned knight and keeps White up a clean pawn."
  },
  {
    "id": "op-ruy-marshall-re8-punish",
    "category": "Openings",
    "theme": "Ruy Lopez Marshall Attack",
    "difficulty": "Advanced",
    "rating": 1690,
    "fen": "r1b2rk1/5ppp/p1pb4/1p1n4/3P4/1BP3Pq/PP3P1P/RNBQR1K1 w - - 1 15",
    "sideToMove": "White",
    "prompt": "In the Marshall Attack mainline, Black’s queen infiltrated to h3 after 14.g3. Defend laterally along the fourth rank with tempo!",
    "moves": [
      "Re4"
    ],
    "explanation": "15.Re4! activates the rook along the 4th rank, preparing Rh4 to drive Black’s queen away."
  },
  {
    "id": "op-italian-giuoco-d4-strike",
    "category": "Openings",
    "theme": "Italian Center Strike 3-Ply",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "r1bqk2r/pppp1ppp/1bn2n2/8/2BPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7",
    "sideToMove": "White",
    "prompt": "Black retreated 6...Bb6? instead of 6...Bb4+. Drive the f6 knight away with a sharp central thrust!",
    "moves": [
      "e5"
    ],
    "explanation": "7.e5! kicks the f6 knight immediately (7...Ne4 allows 8.Bd5!), seizing a commanding initiative."
  },
  {
    "id": "op-kings-gambit-modern-3d5",
    "category": "Openings",
    "theme": "King’s Gambit Modern Defence",
    "difficulty": "Easy",
    "rating": 1090,
    "fen": "rn1qk2r/ppp1bppp/4b3/3n4/5p2/1B3N2/PPPP2PP/RNBQ1RK1 w kq - 4 8",
    "sideToMove": "White",
    "prompt": "Against the Modern Defence to the King’s Gambit, Black’s knight sits exposed on d5. Strike at the center immediately!",
    "moves": [
      "c4"
    ],
    "explanation": "8.c4! kicks the d5 knight and builds a broad central pawn front."
  },
  {
    "id": "op-sicilian-alapin-3ply-bb5",
    "category": "Openings",
    "theme": "Sicilian Alapin Fork 3-Ply",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r3kbnr/pp3ppp/2n1p3/q7/6b1/1QP1BN2/PP1N1PPP/R3KB1R b KQkq - 1 9",
    "sideToMove": "Black",
    "prompt": "White hit b7 with 9.Qb3 in the Alapin Sicilian. Defend b7 cleanly while keeping Black’s queen active!",
    "moves": [
      "Qc7"
    ],
    "explanation": "9...Qc7! protects b7 without creating pawn weaknesses, preparing ...Nf6 and ...Be7."
  },
  {
    "id": "op-reti-king-indian-attack",
    "category": "Openings",
    "theme": "Réti Gambit Acceptance",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "rnbqkbnr/ppp3pp/5p2/2P1p3/1P1p4/4PN2/P2P1PPP/RNBQKB1R b KQkq - 0 5",
    "sideToMove": "Black",
    "prompt": "In the sharp Réti 2...d4 3.b4 line, White overextended the queenside with 5.c5. Undermine White’s flank pawn chain immediately!",
    "moves": [
      "a5"
    ],
    "explanation": "5...a5! attacks b4 right away, forcing concessions on White’s queenside pawn structure."
  },
  {
    "id": "op-benoni-taimanov-f4",
    "category": "Openings",
    "theme": "Modern Benoni Flick-Knife",
    "difficulty": "Advanced",
    "rating": 1680,
    "fen": "rnbqk2r/pp3pbp/3p1np1/2pP4/4PP2/2N5/PP4PP/R1BQKBNR w KQkq - 1 8",
    "sideToMove": "White",
    "prompt": "In the sharp Flick-Knife Attack against the Modern Benoni, disrupt Black’s coordination with a thematic check!",
    "moves": [
      "Bb5+"
    ],
    "explanation": "8.Bb5+! forces ...Nfd7 or ...Bd7, creating immediate central threats with e5!"
  },
  {
    "id": "op-albin-counter-c5",
    "category": "Openings",
    "theme": "Albin Countergambit Counter",
    "difficulty": "Medium",
    "rating": 1290,
    "fen": "2kr1bnr/pppq1ppp/2n1b3/4P3/2Pp4/5NP1/PP1NPPBP/R1BQ1RK1 b - - 6 8",
    "sideToMove": "Black",
    "prompt": "Against the Albin Countergambit, White castled kingside into your bishop battery. Trade off White’s key fianchetto defender!",
    "moves": [
      "Bh3"
    ],
    "explanation": "8...Bh3! challenges the g2 bishop, preparing ...h5-h4 against White’s castled king."
  },
  {
    "id": "op-london-counter-c5-dxc5",
    "category": "Openings",
    "theme": "Punishing Passive London",
    "difficulty": "Easy",
    "rating": 1010,
    "fen": "r3kb1r/pp2pppp/1qn2n2/2pp1b2/3P1B2/1QP1PN2/PP1N1PPP/R3KB1R b KQkq - 6 7",
    "sideToMove": "Black",
    "prompt": "White offered the queen trade with 7.Qb3 in the London System. Gain queenside space with tempo instead of trading on b3!",
    "moves": [
      "c4"
    ],
    "explanation": "7...c4! forces White’s queen back to c2 or d1, seizing a powerful queenside space clamp."
  },
  {
    "id": "op-pirc-classical-be2",
    "category": "Openings",
    "theme": "Pirc Classical Counterstrike",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r2q1rk1/ppp2pbp/2np1np1/4p3/3PP1b1/2N1BN2/PPPQBPPP/R4RK1 w - e6 0 9",
    "sideToMove": "White",
    "prompt": "Black struck in the center with 8...e5 in the Classical Pirc. Gain space with tempo against the c6 knight!",
    "moves": [
      "d5"
    ],
    "explanation": "9.d5! drives the c6 knight away and claims lasting central and queenside space."
  },
  {
    "id": "op-catalan-open-qa4",
    "category": "Openings",
    "theme": "Catalan Queen Check",
    "difficulty": "Easy",
    "rating": 1130,
    "fen": "r1bqkb1r/ppp2ppp/2n1pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R w KQkq - 2 6",
    "sideToMove": "White",
    "prompt": "Black blocked the c-pawn with 5...Nc6 in the Open Catalan. Pin the knight and recover c4 cleanly!",
    "moves": [
      "Qa4"
    ],
    "explanation": "6.Qa4! pins c6 to the king, threatening Ne5 and Qxc4 with huge pressure."
  },
  {
    "id": "op-french-tarrasch-3nf6-e5",
    "category": "Openings",
    "theme": "French Tarrasch Universal",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "r1bqkb1r/pp1n2pp/2n1pp2/3pP3/3P4/3B4/PP1NNPPP/R1BQK2R w KQkq - 0 9",
    "sideToMove": "White",
    "prompt": "Black challenged your e5 wedge with 8...f6 in the Tarrasch French. Capture to leave Black with an awkward e6 pawn or open lines!",
    "moves": [
      "exf6"
    ],
    "explanation": "9.exf6! Qxf6 10.Nf3 keeps White’s d4 square solid and targets the weak e6 pawn."
  },
  {
    "id": "op-bird-opening-e4-trap",
    "category": "Openings",
    "theme": "From’s Gambit Trap",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "r1b1k1nr/ppp2p1p/2n5/4P3/6p1/8/PPP1P1PP/RNBK1B1R w kq - 1 9",
    "sideToMove": "White",
    "prompt": "In From’s Gambit, queens are off and Black targets e5. Develop your queenside knight with tempo against e4!",
    "moves": [
      "Nc3"
    ],
    "explanation": "9.Nc3! attacks e4 immediately and accelerates White’s lead in development."
  },
  {
    "id": "op-english-botvinnik-3ply-break",
    "category": "Openings",
    "theme": "English 1.c4 e5 2.Nc3 Bb4",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "rn2k2r/pp2qppp/2pp1n2/4p3/2PPP1b1/3B1N2/PP3PPP/R1BQK2R w KQkq - 3 9",
    "sideToMove": "White",
    "prompt": "In the Nimzo-English, Black pinned f3 with 8...Bg4. Close the center or castle? Find White’s sharpest move!",
    "moves": [
      "d5"
    ],
    "explanation": "9.d5! (or Be3) grabs central space and limits Black’s pieces."
  },
  {
    "id": "op-italian-evans-3ply",
    "category": "Openings",
    "theme": "Evans Gambit 3-Ply Breakthrough",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "r1b1k2r/ppppnppp/2n3q1/b3P3/2B5/1QN2N2/P4PPP/R1B2RK1 w kq - 1 11",
    "sideToMove": "White",
    "prompt": "In the Compromised Evans Gambit, Black’s king is stuck in the center. Reroute your knight or shut down castling to keep the attack rolling!",
    "moves": [
      "Ne2"
    ],
    "acceptAlso": [
      "Ba3"
    ],
    "explanation": "11.Ne2! (or 11.Ba3!) transfers the knight toward f4/g3 while preparing to blast open the e-file."
  },
  {
    "id": "op-kings-indian-4pa-e5",
    "category": "Openings",
    "theme": "King’s Indian Four Pawns Attack",
    "difficulty": "Advanced",
    "rating": 1640,
    "fen": "rn1q1rk1/pp3pbp/3p1np1/2pP4/4PPb1/2N2N2/PP2B1PP/R1BQK2R w KQ - 1 10",
    "sideToMove": "White",
    "prompt": "In the Four Pawns Attack, Black pinned f3 with 9...Bg4. Question the g4 bishop immediately (or complete castling)!",
    "moves": [
      "h3"
    ],
    "acceptAlso": [
      "O-O"
    ],
    "explanation": "10.h3! (or 10.O-O) resolves the pin on f3 right away before pushing e5."
  },
  {
    "id": "op-scotch-mieses-bb4",
    "category": "Openings",
    "theme": "Scotch Mieses Variation",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "r3k2r/p1ppqpbp/b1p3p1/3nP3/2P5/1P6/PB2QPPP/RN2KB1R w KQkq - 2 11",
    "sideToMove": "White",
    "prompt": "Black fianchettoed against e5 and eyes ...Qb4+. Develop your queenside knight or shore up the kingside diagonal!",
    "moves": [
      "Nd2"
    ],
    "acceptAlso": [
      "g3",
      "Nc3"
    ],
    "explanation": "11.Nd2! (or 11.g3 / 11.Nc3) keeps White’s extra central space secure and prepares Ne4 or Bg2."
  },
  {
    "id": "op-taimanov-nb5-fork",
    "category": "Openings",
    "theme": "Sicilian Taimanov d6 Weakness",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "r1b1k2r/2qpbppp/p1p1pn2/8/N3P3/4B3/PPP1BPPP/R2Q1RK1 w kq - 0 11",
    "sideToMove": "White",
    "prompt": "Black played 10...bxc6 to reinforce the center, neglecting the dark squares on the queenside. Fork the rook and bishop!",
    "moves": [
      "Nb6"
    ],
    "acceptAlso": [
      "Bb6"
    ],
    "explanation": "11.Nb6! lands on the weakened b6 square, attacking a8 and c8 and seizing immediate queenside control."
  },
  {
    "id": "op-sicilian-rossolimo-3ply",
    "category": "Openings",
    "theme": "Rossolimo 4.Bxc6 Strategy",
    "difficulty": "Easy",
    "rating": 1100,
    "fen": "r1bqkb1r/p2p1ppp/2p1p1n1/2p5/4P3/3P1N2/PPP2PPP/RNBQ1RK1 w kq - 1 7",
    "sideToMove": "White",
    "prompt": "In the 3...e6 Rossolimo, Black placed the knight on g6. Drive a wedge into the center and cramp Black’s f8 bishop!",
    "moves": [
      "e5"
    ],
    "acceptAlso": [
      "Re1"
    ],
    "explanation": "7.e5! freezes Black’s d7-d5 advance and gives White lasting space."
  },
  {
    "id": "op-sicilian-3ply-sacrifice",
    "category": "Openings",
    "theme": "Sicilian Najdorf 6.Bg5 Pin",
    "difficulty": "Advanced",
    "rating": 1680,
    "fen": "r1b1k2r/2qnbppp/p2pp3/1p3PP1/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 13",
    "sideToMove": "Black",
    "prompt": "White pushed 13.f5! in the sharp 6.Bg5 Najdorf, attacking e6. Safeguard your king (or insert ...Bxg5+) before counterattacking!",
    "moves": [
      "O-O"
    ],
    "acceptAlso": [
      "Bxg5+"
    ],
    "explanation": "13...O-O! (or 13...Bxg5+) gets the king out of danger while leaving White’s kingside overextended."
  },
  {
    "id": "op-scandi-3qd6-trap",
    "category": "Openings",
    "theme": "Scandinavian 3...Qd6 Trap",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "2kr1b1r/1pp1pppp/p1nq1n2/8/3P2b1/2N2NP1/PPP2PBP/R1BQ1RK1 w - - 5 9",
    "sideToMove": "White",
    "prompt": "Black castled queenside in the 3...Qd6 Scandinavian. Secure g4 against Black’s bishop before expanding centrally!",
    "moves": [
      "h3"
    ],
    "acceptAlso": [
      "d5"
    ],
    "explanation": "9.h3! (or 9.d5) challenges the g4 bishop cleanly and prepares queenside or central expansion."
  },
  {
    "id": "op-sicilian-moscow-check-3ply",
    "category": "Openings",
    "theme": "Sicilian Poisoned Pawn Trap 3-Ply",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "rnb1k2r/pp2bppp/3ppn2/6B1/3NPP2/q1N5/P1PQ2PP/1R2KB1R w Kkq - 2 10",
    "sideToMove": "White",
    "prompt": "Black grabbed b2 in the Classical Sicilian! Attack Black’s queen and c7 square immediately (or break with e5)!",
    "moves": [
      "Ndb5"
    ],
    "acceptAlso": [
      "e5"
    ],
    "explanation": "10.Ndb5! (or 10.e5) threatens Nc7+ and traps Black’s queen on a3 without time to breathe."
  },
  {
    "id": "op-petroff-cochrane-gambit",
    "category": "Openings",
    "theme": "Petroff Cochrane Strike",
    "difficulty": "Advanced",
    "rating": 1560,
    "fen": "r3k2r/ppp1bppp/8/3q1b2/3Pn3/3Q1N2/PP3PPP/RNB1R1K1 w kq - 2 12",
    "sideToMove": "White",
    "prompt": "Black developed 11...Bf5 in the Petroff. Pile onto the pinned e4 knight and increase pressure along the e-file!",
    "moves": [
      "Qe2"
    ],
    "acceptAlso": [
      "Nc3",
      "g4",
      "Qe3"
    ],
    "explanation": "12.Qe2! (or 12.Nc3 / 12.g4) targets the pinned e4 knight and prepares Nc3/Bf4 with strong central pressure."
  },
  {
    "id": "op-french-winawer-3ply-qxa8",
    "category": "Openings",
    "theme": "French Poisoned Pawn Trap",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P2PPP/R1BK1BNR b q - 1 10",
    "sideToMove": "Black",
    "prompt": "White played the ultra-modern 10.Kd1! in the Winawer Poisoned Pawn. Keep your passed c3 pawn alive or develop a piece!",
    "moves": [
      "dxc3"
    ],
    "acceptAlso": [
      "Nbc6"
    ],
    "explanation": "10...dxc3! (or 10...Nbc6) creates a dangerous protected pawn on c3 and opens lines against White’s uncastled king."
  },
  {
    "id": "op-kings-gambit-muzio",
    "category": "Openings",
    "theme": "King’s Gambit Kieseritzky",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "rnbqk2r/p4p1p/2Nb4/1B5n/3P1ppP/8/PPP3P1/RNBQK2R b KQkq - 0 11",
    "sideToMove": "Black",
    "prompt": "White just grabbed c6 with the knight, attacking your queen and rook. Strike back with a counterattacking capture!",
    "moves": [
      "Nxc6"
    ],
    "acceptAlso": [
      "Qb6"
    ],
    "explanation": "11...Nxc6! 12.Bxc6+ Kf8! traps the white king in a deadly counterattack along the e-file and dark squares."
  },
  {
    "id": "op-caro-fantasy-e5",
    "category": "Openings",
    "theme": "Caro-Kann Fantasy Strike",
    "difficulty": "Medium",
    "rating": 1330,
    "fen": "rnbqkbnr/pp3ppp/2p5/8/2BpP3/5N2/PPP3PP/RNBQK2R b KQkq - 1 6",
    "sideToMove": "Black",
    "prompt": "White sacrificed a central pawn in the Fantasy Variation and eyes f7. Reinforce e5 and develop your queenside knight!",
    "moves": [
      "Nd7"
    ],
    "acceptAlso": [
      "Nf6"
    ],
    "explanation": "6...Nd7! (or 6...Nf6) defends e5 solidly while keeping the extra pawn."
  },
  {
    "id": "op-stafford-be2-refute",
    "category": "Openings",
    "theme": "Refuting Stafford Gambit",
    "difficulty": "Easy",
    "rating": 1060,
    "fen": "r1bqk2r/ppp2ppp/2p2n2/2b5/4P3/3P4/PPP2PPP/RNBQKB1R w KQkq - 1 6",
    "sideToMove": "White",
    "prompt": "Against the tricky Stafford Gambit, Black aims at f2 and g4. Play the calm, accurate developing move that shuts down Ng4 tricks!",
    "moves": [
      "Be2"
    ],
    "acceptAlso": [
      "h3"
    ],
    "explanation": "6.Be2! develops safely, blocks ...Ng4 ideas, and prepares c3/O-O keeping White a clean pawn ahead."
  },
  {
    "id": "op-english-flohr-mikenas",
    "category": "Openings",
    "theme": "English Flohr-Mikenas e5",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "rnb1kb1r/pp3ppp/4pq2/2p5/2PP4/2P5/P4PPP/R1BQKBNR w KQkq c6 0 8",
    "sideToMove": "White",
    "prompt": "In the wild Flohr-Mikenas English, Black challenges d4 with 7...c5. Reinforce d4 and accelerate kingside castling!",
    "moves": [
      "Nf3"
    ],
    "acceptAlso": [
      "Rb1"
    ],
    "explanation": "8.Nf3! defends d4 cleanly and prepares Bd3/O-O with strong dark-square compensation."
  },
  {
    "id": "op-scandi-qa5-nf6-trap",
    "category": "Openings",
    "theme": "Scandinavian 3...Qa5 Pin",
    "difficulty": "Easy",
    "rating": 1080,
    "fen": "rn2kb1r/ppp1pppp/5nb1/q3N3/3P2P1/2N4P/PPP2P2/R1BQKB1R b KQkq - 2 8",
    "sideToMove": "Black",
    "prompt": "White chased the bishop to g6 and jumped 8.Ne5 threatening Nxg6. Develop your queenside knight to contest e5 and guard c7!",
    "moves": [
      "Nbd7"
    ],
    "acceptAlso": [
      "e6"
    ],
    "explanation": "8...Nbd7! (or 8...e6) challenges the e5 knight immediately and covers c7."
  },
  {
    "id": "op-kings-indian-samisch-c5",
    "category": "Openings",
    "theme": "Sämisch KID Panno Counter",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "1rbq1rk1/1pp2pbp/p2p1np1/3Pp3/2PnP3/2N1BP2/PP1Q2PP/R1N1KB1R w KQ - 1 11",
    "sideToMove": "White",
    "prompt": "In the Panno Sämisch KID, Black planted a knight on d4. Challenge the intrusive knight immediately!",
    "moves": [
      "Nb3"
    ],
    "acceptAlso": [
      "N1e2"
    ],
    "explanation": "11.Nb3! attacks d4 directly, forcing Black to concede the central outpost or trade knights."
  },
  {
    "id": "op-french-winawer-6ba4",
    "category": "Openings",
    "theme": "French Winawer 7.Qg4 Kf8",
    "difficulty": "Expert",
    "rating": 1810,
    "fen": "r3k1r1/1pqbnp2/p1n1p3/3pP3/5P2/P1NQ4/2P3PP/R1B1KB1R w KQq - 0 14",
    "sideToMove": "White",
    "prompt": "In the Poisoned Pawn Winawer, Black stopped Nb5 with 13...a6. Develop your kingside knight or activate the rook to keep pressure!",
    "moves": [
      "Ne2"
    ],
    "acceptAlso": [
      "Rb1",
      "h4",
      "Bd2"
    ],
    "explanation": "14.Ne2! (or 14.Rb1!) clears the back rank and prepares Nf4/Rb1 to challenge Black’s queenside."
  },
  {
    "id": "op-four-knights-rubinstein",
    "category": "Openings",
    "theme": "Four Knights Rubinstein",
    "difficulty": "Medium",
    "rating": 1310,
    "fen": "r1b1kb1r/pppp1ppp/8/1B6/8/2P5/PPP1qPPP/R1B1K2R w KQkq - 0 10",
    "sideToMove": "White",
    "prompt": "Black offered the queen trade on e2 in the Rubinstein Countergambit. Recapture with the piece that accelerates your bishop development!",
    "moves": [
      "Bxe2"
    ],
    "acceptAlso": [
      "Kxe2"
    ],
    "explanation": "10.Bxe2! develops the bishop back to an active diagonal while avoiding blocking the king."
  },
  {
    "id": "op-nimzo-classical-qc2-c5",
    "category": "Openings",
    "theme": "Nimzo-Indian Classical 4.Qc2",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "rn1q1rk1/pbp2pp1/1p2pn1p/3p4/2PP3B/P1Q2P2/1P2P1PP/R3KBNR w KQ d6 0 10",
    "sideToMove": "White",
    "prompt": "Black struck in the center with 9...d5 against 4.Qc2. Solidify d4 and open the f1-a6 diagonal for your bishop!",
    "moves": [
      "e3"
    ],
    "acceptAlso": [
      "cxd5"
    ],
    "explanation": "10.e3! reinforces d4 and prepares Bd3/Ne2, keeping the bishop pair poised for the middlegame."
  },
  {
    "id": "op-ruy-keres-ne2",
    "category": "Openings",
    "theme": "Ruy Lopez Steinitz Tactics",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "r1bqkb1r/2p3pp/p7/2ppPp2/3Nn3/8/PPP2PPP/RNBQR1K1 w kq - 0 11",
    "sideToMove": "White",
    "prompt": "In the Ruy Lopez (Keres–Reshevsky), Black overextended on the kingside leaving the d4 knight attacked by ...c5. Find White’s crisp tactical retreat!",
    "moves": [
      "Ne2"
    ],
    "explanation": "11.Ne2! sidesteps the attack, eyes f4/g3, and keeps Black’s overextended c5/f5 pawns under pressure."
  },
  {
    "id": "op-ruy-berlin-qxe5-3ply",
    "category": "Openings",
    "theme": "Berlin Defence 3-Ply Queen Strike",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r1b1k2r/ppppqp2/7p/1Bb1N1pn/4P3/3P4/PPP2PPP/RN1Q1RK1 b kq - 0 10",
    "sideToMove": "Black",
    "prompt": "In the Open Berlin Ruy Lopez, White left the e5 knight underdefended while f2/b2 sit exposed. Win material in 3 plies!",
    "moves": [
      "Qxe5",
      "Qxh5",
      "Qxb2"
    ],
    "explanation": "10...Qxe5! 11.Qxh5 Qxh2+ or 11...Qxb2! scoops up pawns while attacking the corner rook."
  },
  {
    "id": "op-winawer-bxb7-3ply",
    "category": "Openings",
    "theme": "French Winawer Long-Diagonal Fork",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "rnb1k2r/pB3ppp/4pn2/q7/3N4/2P2Q2/P1P2PPP/R1B1K2R b KQkq - 0 10",
    "sideToMove": "Black",
    "prompt": "In the Winawer French (Winawer–De Vere), White sent the bishop to b7 overlooking a deadly 3-ply fork! Punish White immediately!",
    "moves": [
      "Bxb7",
      "Qxb7",
      "Qxc3+"
    ],
    "explanation": "10...Bxb7! 11.Qxb7 Qxc3+! forks White’s king and unprotected a1 rook."
  },
  {
    "id": "op-dutch-classical-nxe4",
    "category": "Openings",
    "theme": "Dutch Defence Central Strike",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "rnb1qrk1/pp2b1pp/2p1p3/5p2/2PPp1n1/1P4PN/PB1N1PBP/R2Q1RK1 w - - 0 11",
    "sideToMove": "White",
    "prompt": "Against the Classical Dutch (Beliavsky–Byrne), Black’s e4 pawn stands loosely supported. Capture in the center to break open Black’s position!",
    "moves": [
      "Nxe4"
    ],
    "explanation": "11.Nxe4! wins a crucial central pawn cleanly because 11...fxe4?? drops material along the long diagonal."
  },
  {
    "id": "op-taimanov-fischer-tal-3ply",
    "category": "Openings",
    "theme": "Sicilian Taimanov Fischer Strike",
    "difficulty": "Advanced",
    "rating": 1680,
    "fen": "rqb1k2r/pp1p1ppp/4pn2/1Nb1n3/4PB2/2N3P1/PPP1BP1P/R2QK2R w KQkq - 7 10",
    "sideToMove": "White",
    "prompt": "In Fischer–Tal (Bled), Black left the e5 knight pinned/exposed in the Taimanov Sicilian. Execute White’s winning 3-ply sequence!",
    "moves": [
      "Bxe5",
      "Qxe5",
      "f4"
    ],
    "explanation": "10.Bxe5! Qxe5 11.f4! drives the queen off the center and unleashes White’s huge development lead."
  },
  {
    "id": "op-qga-ivkov-nxe5",
    "category": "Openings",
    "theme": "QGA Central Knight Fork Trap",
    "difficulty": "Easy",
    "rating": 1160,
    "fen": "r2q1rk1/ppp2ppp/3b1n2/4n2b/4P3/2N2N1P/PP2BPP1/R1BQ1RK1 w - - 0 12",
    "sideToMove": "White",
    "prompt": "In the Queen’s Gambit Accepted (Ivkov–Miles), Black attacked your e2 bishop via ...Bh5 and ...Ne5. Step away cleanly while eyeing h5!",
    "moves": [
      "Ne1"
    ],
    "explanation": "12.Ne1! (or 12.Nxe5) avoids simplifying into ...Bxe2 and keeps pressure on Black’s h5 bishop.",
    "acceptAlso": [
      "Nxe5",
      "Nd4",
      "Nh2"
    ]
  },
  {
    "id": "op-two-knights-cohn-nxc6",
    "category": "Openings",
    "theme": "Two Knights Central Discovery",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1bq1rk1/ppp1b1pp/2n5/5p2/3NRB2/2N5/PPP2PPP/R2Q2K1 w - f6 0 12",
    "sideToMove": "White",
    "prompt": "In the Two Knights Defence, Black pushed ...f5 opening the center. Remove the c6 defender while exploiting the e-file!",
    "moves": [
      "Nxc6"
    ],
    "explanation": "12.Nxc6! bxc6 allows Rxe7+, winning material cleanly along the open e-file."
  },
  {
    "id": "op-schliemann-c3-3ply",
    "category": "Openings",
    "theme": "Ruy Lopez Schliemann Counter",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r2q1rk1/ppp3pp/5n2/2bpNb2/B2n4/8/PPPPNPPP/R1BQ1RK1 w - - 0 10",
    "sideToMove": "White",
    "prompt": "In the Schliemann (Jaenisch) Ruy Lopez, Black planted a knight on d4. Kick the intrusive knight and simplify cleanly!",
    "moves": [
      "c3",
      "Nxe2+",
      "Qxe2"
    ],
    "explanation": "10.c3! forces 10...Nxe2+ 11.Qxe2, stabilizing White’s center while keeping Black’s king exposed."
  },
  {
    "id": "op-modern-qxb7-punish",
    "category": "Openings",
    "theme": "Modern Defence Greed Punished",
    "difficulty": "Easy",
    "rating": 1090,
    "fen": "rn1qk2r/ppp2pbp/4bnp1/4N3/4P3/1QP5/PP1N1PPP/R1B1KB1R w KQkq - 1 9",
    "sideToMove": "White",
    "prompt": "Black neglected b7 and developed 8...Be6? in the Modern/Pirc. Snatch the poisoned-looking pawn that actually traps Black’s rook!",
    "moves": [
      "Qxb7"
    ],
    "explanation": "9.Qxb7! attacks a8 and c6 at once, winning material immediately."
  },
  {
    "id": "op-nimzo-euwe-cxd5",
    "category": "Openings",
    "theme": "Nimzo-Indian Central Tactical Strike",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r4rk1/ppp1qppp/2np4/3npb2/2PP4/P3PP2/1P2B1PP/R1BQ1RK1 w - - 0 12",
    "sideToMove": "White",
    "prompt": "In the Nimzo-Indian (Euwe–Yanofsky), Black left two minor pieces poorly coordinated on d5 and f5. Strike in the center!",
    "moves": [
      "cxd5"
    ],
    "explanation": "12.cxd5! exploits the pin/alignment along the d-file and wins material after 12...exd5 13.e4!."
  },
  {
    "id": "op-italian-nxc4-punish",
    "category": "Openings",
    "theme": "Italian Opening Fork Punish",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "r1bq1rk1/ppp2ppp/2n5/4p3/2B1P3/2PPnN2/PP2Q1PP/RN2K2R b KQ - 2 10",
    "sideToMove": "Black",
    "prompt": "White misplayed the center and allowed a knight onto e3 in the Italian Game. Eliminate White’s active light-squared bishop!",
    "moves": [
      "Nxc4"
    ],
    "explanation": "10...Nxc4! wins the bishop cleanly while keeping White’s pawn structure shattered."
  },
  {
    "id": "op-ruy-tarrasch-ng4-3ply",
    "category": "Openings",
    "theme": "Ruy Lopez Tarrasch Storm",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "r3kb1r/2p2pp1/p1np1n2/1P2p2p/4P3/1B3P1q/1PPPNP1P/R1BQR1K1 b kq - 1 12",
    "sideToMove": "Black",
    "prompt": "In Von Bardeleben–Tarrasch (Ruy Lopez), Black’s queen sits on h3 eyeing White’s king. Tear open the g-file in 3 plies!",
    "moves": [
      "Ng4",
      "fxg4",
      "hxg4"
    ],
    "explanation": "12...Ng4! forces 13.fxg4 hxg4, blasting open the h-file and g-file against White’s king."
  },
  {
    "id": "op-kid-doda-nxe4",
    "category": "Openings",
    "theme": "King’s Indian Tactical Capture",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "rnbq1rk1/pp2ppbp/3p1np1/2pP4/2P1P3/4BN2/PP2BPPP/RN1QK2R b KQ - 4 7",
    "sideToMove": "Black",
    "prompt": "In the Classical King’s Indian, White overlooked a tactical pin/fork on the center. Grab the e4 pawn!",
    "moves": [
      "Nxe4"
    ],
    "explanation": "7...Nxe4! works because 8.Nxe4?? walks into 8...Bxb2 winning the corner rook."
  },
  {
    "id": "op-sicilian-okelly-bc2",
    "category": "Openings",
    "theme": "Sicilian O’Kelly Bishop Retreat",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "r1bqkb1r/3n1ppp/p2ppn2/1p6/P1pPP3/2PB1N2/1P2QPPP/RNB2RK1 w kq - 0 9",
    "sideToMove": "White",
    "prompt": "In the O’Kelly Sicilian, Black advanced ...b5 and ...c4 threatening to trap your d3 bishop. Save the bishop cleanly!",
    "moves": [
      "Bc2"
    ],
    "explanation": "9.Bc2! retreats out of reach of ...c4/...b4 tricks while keeping pressure on the b1-h7 diagonal."
  },
  {
    "id": "op-veresov-spassky-3ply",
    "category": "Openings",
    "theme": "Veresov Opening Spassky Tactic",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "r2qkb1r/pp3pp1/2p2n1p/3pn3/7B/2N1QP1P/PPP1P2P/R3KB1R b KQkq - 1 10",
    "sideToMove": "Black",
    "prompt": "In Bellon–Spassky (Linares), White’s kingside stands weakened by f3 and h3. Launch Black’s winning 3-ply sacrifice!",
    "moves": [
      "Ng4",
      "hxg4",
      "Qxh4+"
    ],
    "explanation": "10...Ng4! forces 11.hxg4 Qxh4+, exposing White’s king and winning material with a fierce attack."
  },
  {
    "id": "op-najdorf-poisoned-3ply",
    "category": "Openings",
    "theme": "Najdorf Poisoned Pawn Counter",
    "difficulty": "Expert",
    "rating": 1840,
    "fen": "r1b1k2r/1p1nbppp/p2ppn2/4P1B1/3N1P2/q1N5/P1PQB1PP/1R3RK1 b kq - 0 12",
    "sideToMove": "Black",
    "prompt": "In Timman–Ljubojevic (Najdorf Poisoned Pawn), White pushed e5 prematurely. Execute Black’s winning 3-ply recapture sequence!",
    "moves": [
      "dxe5",
      "fxe5",
      "Nxe5"
    ],
    "explanation": "12...dxe5! 13.fxe5 Nxe5 consolidates Black’s extra pawn and centralizes the knight with tempo."
  },
  {
    "id": "op-caro-nunn-trap-3ply",
    "category": "Openings",
    "theme": "Caro-Kann 4...Nd7 Nunn Trap",
    "difficulty": "Expert",
    "rating": 1880,
    "fen": "r1b1kbnr/pp1np1p1/1qp1p2p/8/3P4/3B4/PPPB1PPP/R2QK1NR w KQkq - 0 9",
    "sideToMove": "White",
    "prompt": "In Nunn–Georgiev (Linares), Black played a careless ...Qb6. Launch John Nunn’s crushing 3-ply kingside check!",
    "moves": [
      "Qh5+",
      "g6",
      "Bxg6+"
    ],
    "explanation": "9.Qh5+! forces 9...g6 (since 9...Kd8 loses the queen to 10.Ba5!), followed by 10.Bxg6+! shattering Black’s kingside."
  },
  {
    "id": "op-italian-anand-rg1-3ply",
    "category": "Openings",
    "theme": "Two Knights Anand Queen Trap",
    "difficulty": "Expert",
    "rating": 1920,
    "fen": "r1b4r/p1p1k1pp/2pp1n2/4p3/4P3/3PPN2/PPP3qP/RN1QK2R w KQ - 0 12",
    "sideToMove": "White",
    "prompt": "In Anand–Beliavsky (Linares), Black’s queen snatched g2 in the Two Knights Defence. Find Anand’s crushing 3-ply rook maneuver!",
    "moves": [
      "Rg1",
      "Qh3",
      "Rxg7+"
    ],
    "explanation": "12.Rg1! forces 12...Qh3, and 13.Rxg7+! rips open Black’s exposed king on e7."
  },
  {
    "id": "op-rauzer-ivanchuk-3ply",
    "category": "Openings",
    "theme": "Sicilian Richter-Rauzer 3-Ply Strike",
    "difficulty": "Advanced",
    "rating": 1690,
    "fen": "rq2k2r/1p1b1ppp/p2bpn2/6B1/3QP3/8/PPP2PPP/2KR1B1R w kq - 0 12",
    "sideToMove": "White",
    "prompt": "In Ivanchuk–Salov (Linares), Black’s d6 bishop stands undefended behind f6. Execute the classic 3-ply tactical blow!",
    "moves": [
      "Bxf6",
      "gxf6",
      "Qxd6"
    ],
    "explanation": "12.Bxf6! forces 12...gxf6 (wrecking Black’s kingside), followed by 13.Qxd6 winning a full piece!"
  },
  {
    "id": "op-taimanov-short-exf6",
    "category": "Openings",
    "theme": "Sicilian Taimanov Kingside Destruction",
    "difficulty": "Medium",
    "rating": 1450,
    "fen": "r1b1kb1r/2q2ppp/p1p1pn2/4P3/5P2/2p5/PPP1B1PP/R1BQ1R1K w kq - 0 12",
    "sideToMove": "White",
    "prompt": "In Short–Ljubojevic (Linares), Black grabbed on c3 ignoring the e5-f6 attack. Smash Black’s kingside open!",
    "moves": [
      "exf6"
    ],
    "explanation": "12.exf6! wins a full piece cleanly while threatening fxg7 and overwhelming Black’s uncastled king."
  }
];
