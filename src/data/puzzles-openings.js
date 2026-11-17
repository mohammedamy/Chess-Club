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
  }
];
