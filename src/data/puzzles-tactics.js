export const TACTICS_PUZZLES = [
  {
    "id": "back-rank",
    "category": "Tactics",
    "theme": "Back-Rank Mate",
    "difficulty": "Easy",
    "rating": 920,
    "fen": "6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move and deliver back-rank checkmate in one.",
    "moves": [
      "Rd8#"
    ],
    "explanation": "Rd8# is checkmate. Black’s own pawns on f7, g7, and h7 seal the king on the 8th rank."
  },
  {
    "id": "skewer",
    "category": "Tactics",
    "theme": "Back-Rank Skewer",
    "difficulty": "Easy",
    "rating": 960,
    "fen": "4k1q1/8/8/8/8/8/8/R3K3 w Q - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Win the Black queen with a skewer.",
    "moves": [
      "Ra8+"
    ],
    "explanation": "Ra8+ skewers the e8 king to the g8 queen along the 8th rank."
  },
  {
    "id": "knight-fork",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Easy",
    "rating": 950,
    "fen": "3r1k2/8/8/8/5N2/8/5PP1/4K3 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a knight fork.",
    "moves": [
      "Ne6+"
    ],
    "explanation": "Ne6+ forks the f8 king and the d8 rook."
  },
  {
    "id": "mate-1",
    "category": "Tactics",
    "theme": "Protected Queen Mate",
    "difficulty": "Easy",
    "rating": 900,
    "fen": "7k/Q7/8/5B2/8/8/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move and checkmate in one.",
    "moves": [
      "Qh7#"
    ],
    "explanation": "Qh7# is checkmate because the f5 bishop protects the queen."
  },
  {
    "id": "royal-fork",
    "category": "Tactics",
    "theme": "Royal Fork",
    "difficulty": "Medium",
    "rating": 1140,
    "fen": "8/4k1q1/8/8/3N4/8/8/4K3 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Win the Black queen with a royal fork.",
    "moves": [
      "Nf5+"
    ],
    "explanation": "Nf5+ forks the e7 king and g7 queen."
  },
  {
    "id": "discovered-check",
    "category": "Tactics",
    "theme": "Discovered Check",
    "difficulty": "Medium",
    "rating": 1180,
    "fen": "1q2k3/8/2N5/8/B7/8/8/4K3 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Capture the queen with a discovered check.",
    "moves": [
      "Nxb8+"
    ],
    "explanation": "Nxb8+ wins the queen while uncovering check from the a4 bishop."
  },
  {
    "id": "pin-attack",
    "category": "Tactics",
    "theme": "Attack Pinned Defender",
    "difficulty": "Medium",
    "rating": 1240,
    "fen": "r2q1rk1/ppp2ppp/2n2n2/3p2B1/1b1PP3/2P2N2/PP1N1PPP/R2Q1RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Heap pressure onto the pinned f6 knight and central pieces.",
    "moves": [
      "e5"
    ],
    "explanation": "e5 attacks the pinned knight on f6 along the h4-d8 diagonal, winning material."
  },
  {
    "id": "deflection",
    "category": "Tactics",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1160,
    "fen": "3r2k1/5pp1/7p/3q4/8/7P/5PP1/3QR1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deflect Black’s rook from guarding the d5 queen!",
    "moves": [
      "Re8+",
      "Rxe8",
      "Qxd5"
    ],
    "explanation": "1.Re8+! forces 1...Rxe8 (or ...Kh7 2.Qxd5), deflecting the d8 rook and winning Black’s queen cleanly."
  },
  {
    "id": "queen-check",
    "category": "Tactics",
    "theme": "Forcing Queen Fork",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "4k3/8/8/7r/8/8/3Q2PP/4K3 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver a forcing check that forks Black’s king and h5 rook.",
    "moves": [
      "Qe2+"
    ],
    "explanation": "1.Qe2+ checks the e8 king and simultaneously wins the undefended h5 rook."
  },
  {
    "id": "arabian-mate",
    "category": "Tactics",
    "theme": "Arabian Mate",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "7k/6R1/5N2/8/8/8/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Coordinate rook and knight for the Arabian Mate.",
    "moves": [
      "Rh7#"
    ],
    "explanation": "Rh7# delivers checkmate; the f6 knight guards h7 and takes away g8."
  },
  {
    "id": "anastasia-mate",
    "category": "Tactics",
    "theme": "Anastasia’s Mate",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "7k/4N2p/8/8/8/8/2B5/6KR w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Finish along the h-file using the e7 knight’s net.",
    "moves": [
      "Rxh7#"
    ],
    "explanation": "Rxh7# delivers Anastasia’s Mate while the e7 knight covers g8 and g6."
  },
  {
    "id": "long-range-mate",
    "category": "Tactics",
    "theme": "Long-Range Rook Mate",
    "difficulty": "Medium",
    "rating": 1250,
    "fen": "7k/6pp/8/8/2B5/8/8/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Spot the back-rank checkmate in one.",
    "moves": [
      "Rd8#"
    ],
    "explanation": "Rd8# mates along the open d-file and 8th rank."
  },
  {
    "id": "bishop-queen-battery",
    "category": "Tactics",
    "theme": "Bishop-Queen Battery",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "6k1/5ppp/8/7Q/2B5/8/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Break through on f7 for forced mate.",
    "moves": [
      "Qxf7+",
      "Kh8",
      "Qf8#"
    ],
    "acceptAlso": [
      "Qd5"
    ],
    "explanation": "Qxf7+ Kh8 Qf8# converts the c4-f7 battery into checkmate."
  },
  {
    "id": "absolute-pin-win",
    "category": "Tactics",
    "theme": "Absolute Pin Conversion",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "4k3/4q3/8/8/8/8/4R3/4K3 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Win the pinned queen on e7.",
    "moves": [
      "Rxe7+"
    ],
    "explanation": "Rxe7+ captures the Black queen with check."
  },
  {
    "id": "corner-net",
    "category": "Tactics",
    "theme": "Corner Mating Net",
    "difficulty": "Medium",
    "rating": 1290,
    "fen": "7k/6pp/5N2/8/8/8/8/6KR w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver checkmate with rook and knight.",
    "moves": [
      "Rxh7#"
    ],
    "explanation": "Rxh7# is checkmate because the f6 knight defends h7 and covers g8."
  },
  {
    "id": "diagonal-entry",
    "category": "Tactics",
    "theme": "Diagonal Queen Entry",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "7k/6pp/8/8/2B5/8/8/3Q2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Invade the 8th rank for mate in one.",
    "moves": [
      "Qd8#"
    ],
    "explanation": "Qd8# delivers immediate checkmate on the back rank."
  },
  {
    "id": "rook-seventh",
    "category": "Tactics",
    "theme": "Open-File Back-Rank Mate",
    "difficulty": "Easy",
    "rating": 1040,
    "fen": "6k1/5ppp/8/8/8/8/3R4/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Finish on the 8th rank.",
    "moves": [
      "Rd8#"
    ],
    "explanation": "Rd8# is back-rank checkmate."
  },
  {
    "id": "tac-philidor-legacy",
    "category": "Tactics",
    "theme": "Philidor’s Smothered Mate",
    "difficulty": "Advanced",
    "rating": 1740,
    "fen": "2r3k1/5Npp/8/8/8/1Q6/4qPPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black threatens ...Qe1# — execute Philidor’s smothered mate first!",
    "moves": [
      "Nh6+",
      "Kh8",
      "Qg8+",
      "Rxg8",
      "Nf7#"
    ],
    "explanation": "1.Nh6+! (double check) Kh8 2.Qg8+! Rxg8 3.Nf7# forces Black’s rook to smother its own king."
  },
  {
    "id": "tac-smothered-black",
    "category": "Tactics",
    "theme": "Smothered Mate (Black)",
    "difficulty": "Advanced",
    "rating": 1700,
    "fen": "6k1/4Qppp/1q6/8/8/8/5nPP/2R3K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White threatens Qe8# — finish first with smothered checkmate!",
    "moves": [
      "Nh3+",
      "Kh1",
      "Qg1+",
      "Rxg1",
      "Nf2#"
    ],
    "explanation": "1...Nh3+! (double check) 2.Kh1 Qg1+! 3.Rxg1 Nf2# smothers White’s king in the corner."
  },
  {
    "id": "tac-boden-mate-1",
    "category": "Tactics",
    "theme": "Boden’s Mate",
    "difficulty": "Easy",
    "rating": 1060,
    "fen": "1rkr4/p2n4/2p5/8/5B2/2P5/P7/5BK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Cross both bishops for Boden’s Mate!",
    "moves": [
      "Ba6+"
    ],
    "explanation": "Ba6# seals every square around Black’s queenside king."
  },
  {
    "id": "tac-boden-sac",
    "category": "Tactics",
    "theme": "Boden’s Queen Sacrifice",
    "difficulty": "Advanced",
    "rating": 1680,
    "fen": "2kr4/4b1pp/5qb1/8/8/2N5/PP1NBP1P/1BKR4 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Sacrifice the queen to deliver Boden’s criss-cross bishop mate!",
    "moves": [
      "Qxc3+",
      "bxc3",
      "Ba3#"
    ],
    "explanation": "1...Qxc3+! 2.bxc3 Ba3# completes Boden’s criss-cross two-bishop checkmate."
  },
  {
    "id": "tac-opera-morphy",
    "category": "Tactics",
    "theme": "Morphy’s Opera Mate",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deflect the d7 defender with Paul Morphy’s queen sacrifice!",
    "moves": [
      "Qb8+",
      "Nxb8",
      "Rd8#"
    ],
    "explanation": "1.Qb8+! Nxb8 2.Rd8# recreates Morphy’s famous Opera Game finish."
  },
  {
    "id": "tac-epaulette-mate",
    "category": "Tactics",
    "theme": "Epaulette Mate",
    "difficulty": "Easy",
    "rating": 1010,
    "fen": "3rkr2/8/8/8/8/1Q6/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver Epaulette Mate between Black’s two rooks.",
    "moves": [
      "Qe6#"
    ],
    "explanation": "Qe6# traps the e8 king between its d8 and f8 rooks."
  },
  {
    "id": "tac-hook-mate",
    "category": "Tactics",
    "theme": "Hook Mate",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "6k1/5p1p/4N3/5P2/8/8/8/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Combine pawn, knight, and rook for checkmate in one.",
    "moves": [
      "Rd8#"
    ],
    "explanation": "Rd8# mates on the back rank while the e6 knight covers g7 and f8."
  },
  {
    "id": "tac-swallow-tail",
    "category": "Tactics",
    "theme": "Swallow’s Tail Mate",
    "difficulty": "Easy",
    "rating": 1050,
    "fen": "3r1r2/4k3/1R6/8/8/7Q/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver Swallow’s Tail checkmate straight in front of the king!",
    "moves": [
      "Qe6#"
    ],
    "explanation": "Qe6# is protected by b6 and cuts off every escape square."
  },
  {
    "id": "tac-lolli-mate",
    "category": "Tactics",
    "theme": "Lolli’s Pawn-Wedge Mate",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "5rk1/5p1p/5PpQ/8/8/8/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Exploit the dark-square holes around Black’s king for mate in one.",
    "moves": [
      "Qg7#"
    ],
    "explanation": "Qg7# completes Lolli’s pattern thanks to the f6 pawn wedge protecting g7."
  },
  {
    "id": "tac-damiano-sac",
    "category": "Tactics",
    "theme": "Damiano’s Rook Sacrifice",
    "difficulty": "Medium",
    "rating": 1480,
    "fen": "5rk1/5pp1/6P1/3p4/3P4/8/7R/3Q2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice the rook on h8 to force Damiano’s famous mate!",
    "moves": [
      "Rh8+",
      "Kxh8",
      "Qh5+",
      "Kg8",
      "Qh7#"
    ],
    "explanation": "1.Rh8+! Kxh8 2.Qh5+ Kg8 3.Qh7# succeeds because the f8 rook blocks Black’s flight."
  },
  {
    "id": "tac-anastasia-sac",
    "category": "Tactics",
    "theme": "Anastasia’s Queen Sacrifice",
    "difficulty": "Advanced",
    "rating": 1660,
    "fen": "5r1k/4N1pp/8/8/3R4/7Q/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice the queen on h7 so the rook finishes Anastasia’s Mate!",
    "moves": [
      "Qxh7+",
      "Kxh7",
      "Rh4#"
    ],
    "explanation": "1.Qxh7+! Kxh7 2.Rh4# uses the e7 knight to seal g8 and g6."
  },
  {
    "id": "tac-greco-mate",
    "category": "Tactics",
    "theme": "Greco’s Mate in Two",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "7k/6p1/8/8/4Q3/1B6/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Force checkmate using the b3 bishop’s diagonal pin!",
    "moves": [
      "Qe8+",
      "Kh7",
      "Qh5#"
    ],
    "explanation": "1.Qe8+ Kh7 2.Qh5# finishes quickly using the pinned corner."
  },
  {
    "id": "tac-torre-windmill",
    "category": "Tactics",
    "theme": "Torre’s Windmill",
    "difficulty": "Advanced",
    "rating": 1710,
    "fen": "5rk1/2q2ppp/8/8/8/2B5/6R1/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Start the discovered-check windmill to win Black’s queen!",
    "moves": [
      "Rxg7+",
      "Kh8",
      "Rxf7+",
      "Kg8",
      "Rxc7"
    ],
    "explanation": "1.Rxg7+ Kh8 2.Rxf7+ Kg8 3.Rxc7 sweeps the 7th rank with a relentless windmill!"
  },
  {
    "id": "tac-underpromo-mate",
    "category": "Tactics",
    "theme": "Knight Underpromotion Mate",
    "difficulty": "Advanced",
    "rating": 1780,
    "fen": "7n/5Ppk/6p1/6P1/2B5/8/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Promoting to a queen allows ...Kg8, so underpromote to checkmate!",
    "moves": [
      "f8=N#"
    ],
    "explanation": "f8=N# checks h7 directly while the c4 bishop and g5/h7/g6 blockade seal every flight square."
  },
  {
    "id": "tac-black-back-rank",
    "category": "Tactics",
    "theme": "Black Back-Rank Mate",
    "difficulty": "Easy",
    "rating": 940,
    "fen": "4r1k1/5ppp/8/8/8/8/5PPP/6K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver back-rank checkmate in one.",
    "moves": [
      "Re1#"
    ],
    "explanation": "1...Re1# punishes White’s unventilated back rank."
  },
  {
    "id": "tac-deflect-queen-e7",
    "category": "Tactics",
    "theme": "Deflecting Overloaded Queen",
    "difficulty": "Medium",
    "rating": 1520,
    "fen": "3r2k1/4qppp/8/8/1Q6/8/5P1P/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s queen is tied to defending d8. Snap it off immediately!",
    "moves": [
      "Qxe7",
      "Rxd1+",
      "Kg2"
    ],
    "explanation": "1.Qxe7! wins the queen outright because White’s h2 pawn creates safe luft on g2."
  },
  {
    "id": "tac-dovetail-real",
    "category": "Tactics",
    "theme": "Dovetail Mate",
    "difficulty": "Medium",
    "rating": 1280,
    "fen": "8/8/4r3/4kp2/8/4P3/3Q4/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver Dovetail Mate where e6 and f5 block the king’s escape!",
    "moves": [
      "Qd4#"
    ],
    "explanation": "Qd4# is defended by e3 while the rook on e6 and pawn on f5 clog Black’s flight squares."
  },
  {
    "id": "tac-reti-double-check",
    "category": "Tactics",
    "theme": "Réti’s Double-Check Finish",
    "difficulty": "Advanced",
    "rating": 1760,
    "fen": "rnb1kb1r/pp3ppp/2p5/4q3/4n3/3Q4/PPPB1PPP/2KR1BNR w kq - 0 9",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice the queen on d8 to set up a lethal double check!",
    "moves": [
      "Qd8+",
      "Kxd8",
      "Bg5+",
      "Kc7",
      "Bd8#"
    ],
    "explanation": "9.Qd8+!! Kxd8 10.Bg5+ (double check!) Kc7 11.Bd8# — Réti’s immortal 1910 brilliancy against Tartakower!"
  },
  {
    "id": "tac-family-fork",
    "category": "Tactics",
    "theme": "Double Rook Knight Fork",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "3r1rk1/6pp/8/8/5N2/7P/5PP1/2R3K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Fork both Black rooks with your knight.",
    "moves": [
      "Ne6"
    ],
    "explanation": "Ne6 forks Black’s rooks on d8 and f8 cleanly."
  },
  {
    "id": "tac-black-royal-fork",
    "category": "Tactics",
    "theme": "Royal Fork (Black)",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "6k1/5ppp/8/8/3Q4/2n5/5PPP/6K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Win White’s queen with a royal fork!",
    "moves": [
      "Ne2+"
    ],
    "explanation": "1...Ne2+ checks White’s king on g1 and wins the queen on d4."
  },
  {
    "id": "tac-queen-fork-b5",
    "category": "Tactics",
    "theme": "Queen Fork on the Diagonal",
    "difficulty": "Easy",
    "rating": 960,
    "fen": "4k3/8/8/1r6/8/8/3Q4/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Check the Black king and attack the b5 rook simultaneously!",
    "moves": [
      "Qe2+"
    ],
    "explanation": "Qe2+ checks the e8 king and wins the loose rook on b5."
  },
  {
    "id": "tac-bishop-skewer",
    "category": "Tactics",
    "theme": "Pin & Win on the Diagonal",
    "difficulty": "Easy",
    "rating": 990,
    "fen": "6k1/8/4r3/8/8/8/2B5/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Pin Black’s rook completely to the g8 king!",
    "moves": [
      "Bb3"
    ],
    "explanation": "Bb3! pins the e6 rook along the a2-g8 diagonal to win it."
  },
  {
    "id": "tac-pawn-fork",
    "category": "Tactics",
    "theme": "Little Pawn Fork",
    "difficulty": "Easy",
    "rating": 890,
    "fen": "6k1/8/8/1r1b4/8/2P5/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Attack two Black pieces at once with a pawn!",
    "moves": [
      "c4"
    ],
    "explanation": "c4! forks the b5 rook and d5 bishop."
  },
  {
    "id": "tac-italian-center-fork",
    "category": "Tactics",
    "theme": "Center Fork Trick",
    "difficulty": "Easy",
    "rating": 1080,
    "fen": "r1bqkb1r/pppp1ppp/2n5/4p3/2B1N3/5N2/PPPP1PPP/R1BQK2R b KQkq - 0 5",
    "sideToMove": "Black",
    "prompt": "Black to move. Recover the sacrificed piece with a central pawn fork!",
    "moves": [
      "d5"
    ],
    "explanation": "...d5! forks White’s bishop on c4 and knight on e4."
  },
  {
    "id": "tac-petroff-discovered-win",
    "category": "Tactics",
    "theme": "Petroff Discovered Check",
    "difficulty": "Easy",
    "rating": 1040,
    "fen": "rnbqkb1r/pppp1ppp/5n2/4N3/8/8/PPPPQPPP/RNB1KB1R w KQkq - 2 5",
    "sideToMove": "White",
    "prompt": "White to move. Win Black’s queen with a discovered check!",
    "moves": [
      "Nc6+"
    ],
    "explanation": "6.Nc6+! checks Black’s king via the e2 queen while attacking the d8 queen."
  },
  {
    "id": "tac-englund-fork-b4",
    "category": "Tactics",
    "theme": "Queen Fork on King & b2",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "r1b1kbnr/ppppqppp/2n5/4P3/5B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 4 4",
    "sideToMove": "Black",
    "prompt": "Black to move. Fork White’s king and b2/f4 targets with your queen!",
    "moves": [
      "Qb4+"
    ],
    "explanation": "4...Qb4+! checks the e1 king while double-attacking b2 and f4."
  },
  {
    "id": "tac-double-attack-rooks",
    "category": "Tactics",
    "theme": "Queen Double Attack",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "r4k2/6pp/8/8/8/8/3Q4/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Fork the f8 king and a8 rook cleanly!",
    "moves": [
      "Qd6+"
    ],
    "acceptAlso": [
      "Qb4+",
      "Qa5"
    ],
    "explanation": "Qd6+ (or Qb4+) checks Black’s king while winning the undefended a8 rook."
  },
  {
    "id": "tac-rook-skewer-queen",
    "category": "Tactics",
    "theme": "File Rook Skewer",
    "difficulty": "Easy",
    "rating": 1010,
    "fen": "6q1/8/8/6k1/8/8/2K5/1R6 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Skewer the exposed Black king and queen on the g-file!",
    "moves": [
      "Rg1+"
    ],
    "explanation": "Rg1+ drives Black’s king aside to capture the queen on g8."
  },
  {
    "id": "tac-bishop-skewer-diag",
    "category": "Tactics",
    "theme": "Long-Diagonal Skewer",
    "difficulty": "Medium",
    "rating": 1240,
    "fen": "5B2/8/8/4k3/8/8/1r6/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Skewer Black’s king and rook along the a1-h8 diagonal!",
    "moves": [
      "Bg7+"
    ],
    "explanation": "Bg7+ checks the e5 king and wins the b2 rook behind it."
  },
  {
    "id": "tac-black-pawn-fork",
    "category": "Tactics",
    "theme": "Black Pawn Fork",
    "difficulty": "Easy",
    "rating": 910,
    "fen": "6k1/3p2p1/8/8/2B1N3/8/8/6K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Fork White’s bishop and knight with a pawn thrust!",
    "moves": [
      "d5"
    ],
    "explanation": "...d5! forks White’s bishop on c4 and knight on e4 simultaneously."
  },
  {
    "id": "tac-pin-f6-queen",
    "category": "Tactics",
    "theme": "Exploit Absolute Pin",
    "difficulty": "Medium",
    "rating": 1280,
    "fen": "r1bqk2r/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2Q1RK1 w kq - 0 1",
    "sideToMove": "White",
    "prompt": "Black neglected kingside safety while f6 is pinned. Leap into d5 to pile onto the pin!",
    "moves": [
      "Nd5"
    ],
    "explanation": "Nd5 piles a second attacker onto the pinned f6 knight, threatening Bxf6."
  },
  {
    "id": "tac-diagonal-pin-queen",
    "category": "Tactics",
    "theme": "Diagonal Pin on Queen",
    "difficulty": "Medium",
    "rating": 1260,
    "fen": "8/2k5/3q4/6B1/8/6P1/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Pin Black’s queen directly to its king under pawn protection!",
    "moves": [
      "Bf4"
    ],
    "explanation": "Bf4! pins the d6 queen to the c7 king while safely protected by the g3 pawn."
  },
  {
    "id": "tac-discovered-fork-g8",
    "category": "Tactics",
    "theme": "Discovered Check & Royal Fork",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "4k1q1/8/8/8/4N3/8/8/1K2R3 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Unleash a knight fork AND a discovered check!",
    "moves": [
      "Nf6+"
    ],
    "explanation": "Nf6+ attacks the e8 king and g8 queen while uncovering the e1 rook."
  },
  {
    "id": "tac-knight-fork-c6",
    "category": "Tactics",
    "theme": "Knight Fork on King & Rook",
    "difficulty": "Easy",
    "rating": 970,
    "fen": "1r6/4k3/8/8/3N4/8/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver a decisive knight fork against king and rook.",
    "moves": [
      "Nc6+"
    ],
    "explanation": "Nc6+ checks the e7 king and captures the b8 rook on the next move."
  },
  {
    "id": "tac-queen-skewer-rank",
    "category": "Tactics",
    "theme": "Sixth-Rank Queen Skewer",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "8/8/4k2r/8/8/8/1Q6/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Skewer Black’s king and rook along the 6th rank!",
    "moves": [
      "Qb6+"
    ],
    "explanation": "Qb6+ checks the e6 king and wins the h6 rook behind it."
  },
  {
    "id": "tac-pin-knight-e8",
    "category": "Tactics",
    "theme": "Pin Knight to King",
    "difficulty": "Easy",
    "rating": 1000,
    "fen": "4k3/pp1n1ppp/8/8/8/8/PPB2PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Pin the d7 knight cleanly to the Black king!",
    "moves": [
      "Ba4"
    ],
    "explanation": "Ba4 pins the d7 knight along the a4-e8 diagonal while the d1 rook piles up."
  },
  {
    "id": "tac-black-rook-skewer",
    "category": "Tactics",
    "theme": "File Skewer (Black)",
    "difficulty": "Easy",
    "rating": 1030,
    "fen": "6k1/3Q4/8/8/3K4/8/8/r7 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Win White’s queen with a file skewer!",
    "moves": [
      "Rd1+"
    ],
    "explanation": "...Rd1+ drives the d4 king off the d-file to capture the d7 queen."
  },
  {
    "id": "tac-pin-queen-b6",
    "category": "Tactics",
    "theme": "Diagonal Pin Winning Queen",
    "difficulty": "Medium",
    "rating": 1240,
    "fen": "3b2k1/p4ppp/8/8/8/8/P4QPP/6K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Pin White’s queen completely to its king along the a7-g1 diagonal!",
    "moves": [
      "Bb6"
    ],
    "explanation": "1...Bb6! pins the f2 queen to the g1 king and wins it cleanly."
  },
  {
    "id": "tac-discovered-check-rook",
    "category": "Tactics",
    "theme": "Double Attack via Discovered Check",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "4k3/8/8/1r6/4B3/8/4R3/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver a double check that simultaneously wins Black’s rook!",
    "moves": [
      "Bc6+"
    ],
    "explanation": "Bc6+ delivers double check with the e2 rook and attacks the b5 rook at once."
  },
  {
    "id": "tac-discovered-attack-h2",
    "category": "Tactics",
    "theme": "Discovered Check Winning Queen",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "3r2k1/5ppp/3b4/8/3Q4/8/5PPP/6K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Uncover the d8 rook against White’s queen with check!",
    "moves": [
      "Bxh2+"
    ],
    "explanation": "1...Bxh2+ forces 2.Kxh2, after which 2...Rxd4 wins the White queen cleanly."
  },
  {
    "id": "tac-decoy-mate-h8",
    "category": "Tactics",
    "theme": "Decoy into Corner Mate",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "6k1/8/5pp1/8/8/7Q/8/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Force Black’s king onto g7 for an unstoppable checkmate!",
    "moves": [
      "Re8+",
      "Kg7",
      "Qh8+"
    ],
    "explanation": "1.Re8+ forces 1...Kg7, allowing 2.Qh8# checkmate."
  },
  {
    "id": "tac-decoy-fork-b5",
    "category": "Tactics",
    "theme": "Decoy into Knight Fork",
    "difficulty": "Advanced",
    "rating": 1680,
    "fen": "4rk2/3p1ppp/3P4/1q1N4/8/8/4R1PP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice the rook to drag Black’s king into a royal knight fork!",
    "moves": [
      "Rxe8+",
      "Kxe8",
      "Nc7+"
    ],
    "explanation": "1.Rxe8+! Kxe8 2.Nc7+ forks the e8 king and b5 queen."
  },
  {
    "id": "tac-overload-c8-rook",
    "category": "Tactics",
    "theme": "Back-Rank Deflection",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "2r3k1/4qp1p/7B/8/4Q3/8/5PPP/2R3K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Beware 1.Qxe7?? Rxc1# — find the forcing back-rank finish!",
    "moves": [
      "Rxc8+",
      "Qf8",
      "Rxf8#"
    ],
    "explanation": "1.Rxc8+! forces 1...Qf8 2.Rxf8# (protected by the h6 bishop), whereas taking on e7 immediately blunders back-rank mate."
  },
  {
    "id": "tac-smothered-one-move",
    "category": "Tactics",
    "theme": "Pinned Smothered Mate",
    "difficulty": "Medium",
    "rating": 1260,
    "fen": "r1bqkb1r/pp1npppp/2p2n2/8/3PN3/8/PPP1QPPP/R1B1KBNR w KQkq - 3 6",
    "sideToMove": "White",
    "prompt": "Black neglected the dark squares on d6. Deliver an astonishing smothered checkmate in one!",
    "moves": [
      "Nd6#"
    ],
    "explanation": "6.Nd6# is smothered checkmate because Black’s e7 pawn is pinned to the e8 king by the e2 queen."
  },
  {
    "id": "tac-blackburne-trap",
    "category": "Tactics",
    "theme": "Blackburne Shilling Mate",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1b1kbnr/pppp1Npp/8/8/3nq3/8/PPPPBP1P/RNBQKR2 b Qkq - 1 7",
    "sideToMove": "Black",
    "prompt": "White blocked check on e2. Finish the game on the spot!",
    "moves": [
      "Nf3#"
    ],
    "explanation": "7...Nf3# is checkmate because the e2 bishop is pinned by the queen on e4."
  },
  {
    "id": "tac-lasker-trap-underpromo",
    "category": "Tactics",
    "theme": "Lasker Trap Underpromotion",
    "difficulty": "Advanced",
    "rating": 1720,
    "fen": "rnbqk1nr/ppp2ppp/8/4P3/1BP5/8/PP2KpPP/RN1Q1BNR b kq - 1 7",
    "sideToMove": "Black",
    "prompt": "Promoting to a queen loses to Bxd8. Underpromote with check instead!",
    "moves": [
      "fxg1=N+"
    ],
    "explanation": "7...fxg1=N+! wins cleanly with check while keeping the d8 queen safe."
  },
  {
    "id": "tac-legal-mate",
    "category": "Tactics",
    "theme": "Légal’s Mate",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "rn1qkbnr/ppp2p1p/3p2p1/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5",
    "sideToMove": "White",
    "prompt": "Black left f7 vulnerable. Spring Légal’s Mate by sacrificing your queen!",
    "moves": [
      "Nxe5",
      "Bxd1",
      "Bxf7+",
      "Ke7",
      "Nd5#"
    ],
    "explanation": "5.Nxe5! Bxd1 6.Bxf7+ Ke7 7.Nd5# — the classic three-minor-piece mating pattern."
  },
  {
    "id": "tac-siberian-trap",
    "category": "Tactics",
    "theme": "Siberian Trap Finish",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "r1b1kb1r/ppqp1ppp/2n1p3/8/2B1P1n1/2N2N1P/PP2QPP1/R1B2RK1 b kq - 0 9",
    "sideToMove": "Black",
    "prompt": "White kicked your g4 knight. Deliver the devastating Siberian Trap knight leap!",
    "moves": [
      "Nd4",
      "Nxd4",
      "Qh2#"
    ],
    "explanation": "9...Nd4! wins the White queen or mates with ...Qh2#."
  },
  {
    "id": "tac-budapest-smothered",
    "category": "Tactics",
    "theme": "Budapest Smothered Mate",
    "difficulty": "Easy",
    "rating": 1050,
    "fen": "r1b1k2r/ppppqppp/2n5/4n3/1PP2B2/5N2/1P1NPPPP/R2QKB1R b KQkq - 0 8",
    "sideToMove": "Black",
    "prompt": "White greedily captured the b4 bishop. Punish it immediately with mate in one!",
    "moves": [
      "Nd3#"
    ],
    "explanation": "8...Nd3# is checkmate: White’s e2 pawn is pinned to the e1 king."
  },
  {
    "id": "tac-halosar-mate",
    "category": "Tactics",
    "theme": "Halosar Trap Finish",
    "difficulty": "Advanced",
    "rating": 1640,
    "fen": "rn2kb1r/ppp1pppp/5n2/8/1q4b1/2N1BQ2/PPP3PP/2KR1BNR w kq - 4 8",
    "sideToMove": "White",
    "prompt": "Black skewered your queen and d1 rook with ...Bg4. Counterattack for a knockout!",
    "moves": [
      "Nb5",
      "Bxf3",
      "Nxc7#"
    ],
    "explanation": "8.Nb5! ignores the queen so that 8...Bxf3 walks into 9.Nxc7#."
  },
  {
    "id": "tac-stafford-mate",
    "category": "Tactics",
    "theme": "Stafford Queen Sacrifice",
    "difficulty": "Advanced",
    "rating": 1680,
    "fen": "r1bqk2r/ppp2ppp/2p2n2/2b3B1/4P3/3P4/PPP2PPP/RN1QKB1R b KQkq - 2 6",
    "sideToMove": "Black",
    "prompt": "White pinned the f6 knight. Sacrifice the queen for a crisp mating finish!",
    "moves": [
      "Nxe4",
      "Bxd8",
      "Bxf2+",
      "Ke2",
      "Bg4#"
    ],
    "explanation": "6...Nxe4! lures 7.Bxd8, allowing 7...Bxf2+ 8.Ke2 Bg4#."
  },
  {
    "id": "tac-fools-diagonal",
    "category": "Tactics",
    "theme": "Weakened King Diagonal",
    "difficulty": "Easy",
    "rating": 850,
    "fen": "rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq g3 0 2",
    "sideToMove": "Black",
    "prompt": "White fatally weakened the e1-h4 diagonal. Deliver mate in one.",
    "moves": [
      "Qh4#"
    ],
    "explanation": "2...Qh4# exploits the undefended e1-h4 diagonal."
  },
  {
    "id": "tac-birds-mate",
    "category": "Tactics",
    "theme": "From’s Gambit Trap",
    "difficulty": "Medium",
    "rating": 1190,
    "fen": "rnbqk1nr/ppp2p1p/3b4/6p1/8/5N1P/PPPPP1P1/RNBQKB1R b KQkq - 0 5",
    "sideToMove": "Black",
    "prompt": "White weakened g3 with 5.h3??. Deliver checkmate in one!",
    "moves": [
      "Bg3#"
    ],
    "explanation": "5...Bg3# uses the dark squares weakened by f4 and h3."
  },
  {
    "id": "tac-elephant-trap",
    "category": "Tactics",
    "theme": "Elephant Trap Counter",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r1bBkb1r/pppn1ppp/8/3n4/3P4/8/PP2PPPP/R2QKBNR b KQkq - 0 7",
    "sideToMove": "Black",
    "prompt": "White captured your queen on d8. Recover it with a piece extra!",
    "moves": [
      "Bb4+",
      "Qd2",
      "Bxd2+",
      "Kxd2",
      "Kxd8"
    ],
    "explanation": "7...Bb4+! forces Qd2 Bxd2+ Kxd2 Kxd8, emerging a full knight ahead."
  },
  {
    "id": "tac-cambridge-springs",
    "category": "Tactics",
    "theme": "Discovered Win (Cambridge Springs)",
    "difficulty": "Easy",
    "rating": 1060,
    "fen": "r1b1k2r/pp1n1ppp/2p1pn2/q5B1/1bNP4/2N1P3/PPQ2PPP/R3KB1R b KQkq - 0 9",
    "sideToMove": "Black",
    "prompt": "White recaptured on c4 ignoring the alignment on the 5th rank. Win a bishop!",
    "moves": [
      "Qxg5"
    ],
    "explanation": "9...Qxg5 captures the hanging bishop immediately."
  },
  {
    "id": "tac-qga-diagonal",
    "category": "Tactics",
    "theme": "Long-Diagonal Rook Snatch",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "rnbqkbnr/p3pppp/8/1p6/2pP4/4P3/1P3PPP/RNBQKBNR w KQkq - 0 6",
    "sideToMove": "White",
    "prompt": "Black clung onto the c4 pawn and left the a8 rook exposed. Strike down the diagonal!",
    "moves": [
      "Qf3"
    ],
    "explanation": "6.Qf3! threatens Qxa8 immediately, forcing Black to give up a piece."
  },
  {
    "id": "tac-pawn-breakthrough",
    "category": "Tactics",
    "theme": "Three-Pawn Breakthrough",
    "difficulty": "Advanced",
    "rating": 1680,
    "fen": "6k1/ppp5/8/PPP5/8/8/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Shatter Black’s blockade and force a passed pawn through!",
    "moves": [
      "b6",
      "cxb6",
      "a6"
    ],
    "explanation": "1.b6! cxb6 2.a6! bxa6 3.c6 creates an unstoppable passed pawn outside the Black king’s reach."
  },
  {
    "id": "tac-zwischenzug-c8",
    "category": "Tactics",
    "theme": "Zwischenzug Back-Rank Strike",
    "difficulty": "Medium",
    "rating": 1490,
    "fen": "3r2k1/2q2pp1/7p/8/8/2b4P/2Q1BPP1/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "Black’s queen guards c3. Use a forcing in-between move before capturing!",
    "moves": [
      "Rxd8+",
      "Qxd8",
      "Qxc3"
    ],
    "explanation": "1.Rxd8+! deflects Black’s queen from defending c3, allowing 2.Qxc3 to win a clean piece."
  },
  {
    "id": "tac-clearance-fork-d8",
    "category": "Tactics",
    "theme": "Discovered File Clearance",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "3r2k1/5p1p/6p1/3N4/8/8/3R2PP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Clear the d-file with check and win Black’s rook!",
    "moves": [
      "Nf6+"
    ],
    "explanation": "1.Nf6+! checks the g8 king and clears the d2 rook to capture the d8 rook."
  },
  {
    "id": "tac-x-ray-c8",
    "category": "Tactics",
    "theme": "Back-Rank X-Ray Sacrifice",
    "difficulty": "Medium",
    "rating": 1480,
    "fen": "2rr2k1/5ppp/8/8/8/8/2Q2PPP/2R3K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Exploit the overloaded c8 rook with a decisive queen strike!",
    "moves": [
      "Qxc8"
    ],
    "explanation": "1.Qxc8! wins a full rook cleanly because 1...Rxc8 walks into 2.Rxc8#."
  },
  {
    "id": "tac-trapped-bishop-noah",
    "category": "Tactics",
    "theme": "Noah’s Ark Bishop Trap",
    "difficulty": "Medium",
    "rating": 1220,
    "fen": "r2qkbnr/3b1ppp/p2p4/1ppQ4/4P3/1B6/PPP2PPP/RNB1K2R b KQkq - 5 11",
    "sideToMove": "Black",
    "prompt": "White retreated from check. Shut the door on the b3 bishop!",
    "moves": [
      "c4"
    ],
    "explanation": "11...c4! traps White’s b3 bishop permanently behind Black’s queenside pawns."
  },
  {
    "id": "tac-trapped-bishop-h5",
    "category": "Tactics",
    "theme": "Trapped Bishop",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "6k1/5p2/6p1/7b/8/5P1P/6P1/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Trap Black’s stranded bishop in one move!",
    "moves": [
      "g4"
    ],
    "explanation": "1.g4! leaves the h5 bishop with zero safe squares because g6 blocks its retreat."
  },
  {
    "id": "tac-promotion-skewer",
    "category": "Tactics",
    "theme": "Promotion Skewer",
    "difficulty": "Medium",
    "rating": 1460,
    "fen": "6k1/P7/8/8/8/8/r7/1R4K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Drive the Black king to the 7th rank so your pawn promotes cleanly!",
    "moves": [
      "Rb8+",
      "Kg7",
      "a8=Q",
      "Rxa8",
      "Rxa8"
    ],
    "acceptAlso": [
      "Rb7"
    ],
    "explanation": "1.Rb8+ drives the king onto the 7th rank, allowing 2.a8=Q! Rxa8 3.Rxa8."
  },
  {
    "id": "tac-underpromo-save",
    "category": "Tactics",
    "theme": "Underpromotion Saves Mate & Forks",
    "difficulty": "Expert",
    "rating": 1890,
    "fen": "8/4P1k1/3q4/8/P7/8/6PP/7K w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Underpromote to a knight to check Black’s king AND fork the queen!",
    "moves": [
      "e8=N+"
    ],
    "explanation": "1.e8=N+!! delivers check while simultaneously forking Black’s g7 king and d6 queen."
  },
  {
    "id": "tac-desperado-stalemate",
    "category": "Tactics",
    "theme": "Desperado Stalemate Resource",
    "difficulty": "Advanced",
    "rating": 1720,
    "fen": "4q1k1/8/8/8/3b2p1/6Pp/5R1P/7K w - - 0 1",
    "sideToMove": "White",
    "prompt": "White is down material. Find the rook strike that liquidates cleanly into a drawn endgame!",
    "moves": [
      "Rf8+"
    ],
    "explanation": "1.Rf8+! forces Black into a simplified draw by capturing or trading down immediately."
  },
  {
    "id": "tac-milner-barry-queen-win",
    "category": "Tactics",
    "theme": "Advance French Discovery",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1b1kbnr/pp3ppp/4p3/3pP3/3q4/3B4/PP3PPP/RNBQK2R w KQkq - 0 9",
    "sideToMove": "White",
    "prompt": "Black fell for the Milner-Barry trap by snatching d4! Win the Black queen!",
    "moves": [
      "Bb5+"
    ],
    "explanation": "9.Bb5+! delivers a discovered attack on the d4 queen with check."
  },
  {
    "id": "tac-italian-greco-counter",
    "category": "Tactics",
    "theme": "Greco Pawn Thrust",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "r1bqk2r/pppp1ppp/2n5/8/2BPn3/2b2N2/PP3PPP/R1BQ1RK1 w kq - 0 9",
    "sideToMove": "White",
    "prompt": "Black grabbed e4 and c3. Seize central space and trap Black’s dark squares!",
    "moves": [
      "d5"
    ],
    "acceptAlso": [
      "bxc3"
    ],
    "explanation": "9.d5! (Møller/Greco Counterattack) hits c6 and launches an explosive central initiative."
  },
  {
    "id": "tac-bishop-endgame-skewer",
    "category": "Tactics",
    "theme": "Endgame Bishop Skewer",
    "difficulty": "Medium",
    "rating": 1250,
    "fen": "6k1/8/3b3R/8/8/8/3K4/8 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Win White’s rook cleanly with a diagonal skewer!",
    "moves": [
      "Bf4+"
    ],
    "explanation": "1...Bf4+! skewers White’s d2 king to the h6 rook."
  },
  {
    "id": "tac-knight-endgame-fork",
    "category": "Tactics",
    "theme": "Endgame Knight Fork",
    "difficulty": "Easy",
    "rating": 990,
    "fen": "8/8/8/3k4/4n3/8/4K3/1R6 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Win the b1 rook immediately with a knight fork!",
    "moves": [
      "Nc3+"
    ],
    "explanation": "1...Nc3+! forks White’s e2 king and b1 rook."
  },
  {
    "id": "tac-double-check-queen-win",
    "category": "Tactics",
    "theme": "Double Check Wins Queen",
    "difficulty": "Advanced",
    "rating": 1690,
    "fen": "4k3/8/8/8/q3B3/8/4R3/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver a double check that wins Black’s queen without losing a piece!",
    "moves": [
      "Bc6+"
    ],
    "explanation": "1.Bc6+! delivers double check (Bc6 + Re2), so ...Qxc6 is illegal and White captures the queen next move!"
  },
  {
    "id": "tac-greek-gift-classic",
    "category": "Tactics",
    "theme": "Greek Gift Sacrifice",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "r2q1rk1/pbp2ppp/2n1p3/3pP3/3P4/3B1N2/PPP2PPP/RNBQ1RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "Black castled without ...Nf6 guarding h7. Launch the classic Greek Gift sacrifice!",
    "moves": [
      "Bxh7+",
      "Kxh7",
      "Ng5+"
    ],
    "explanation": "1.Bxh7+! Kxh7 2.Ng5+ rips open the Black king’s shelter for a decisive attack."
  },
  {
    "id": "tac-ruy-tarrasch-win",
    "category": "Tactics",
    "theme": "Open Spanish Discovery",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r4rk1/2pqbppp/p1n1b3/1p1pP3/3Nn3/1BP5/PP3PPP/RNBQR1K1 w - - 5 12",
    "sideToMove": "White",
    "prompt": "Black neglected to guard the e6 bishop. Trade to shatter Black’s dark squares and d5!",
    "moves": [
      "Nxe6"
    ],
    "explanation": "12.Nxe6! undermines d5 and gains the two bishops against a weakened pawn structure."
  },
  {
    "id": "tac-pawn-promotion-pin",
    "category": "Tactics",
    "theme": "Skewering After Promotion",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "5rk1/4P1pp/8/8/8/8/5PPP/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Capture the f8 rook with promotion to win decisively!",
    "moves": [
      "exf8=Q+"
    ],
    "explanation": "1.exf8=Q+! promotes with check and eliminates Black’s back-rank defender."
  },
  {
    "id": "tac-smothered-mate-corner",
    "category": "Tactics",
    "theme": "Corner Smothered Mate",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "6rk/6pp/8/4N3/8/8/1q3PPP/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black threatens ...Qb1#. Deliver smothered checkmate in one!",
    "moves": [
      "Nf7#"
    ],
    "explanation": "1.Nf7# delivers smothered mate because Black’s rook on g8 and pawns on g7 and h7 block every escape square."
  },
  {
    "id": "tac-arabian-mate-black",
    "category": "Tactics",
    "theme": "Arabian Mate (Black)",
    "difficulty": "Easy",
    "rating": 1060,
    "fen": "6k1/5ppp/8/8/8/5n2/6r1/2R4K b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Coordinate knight and rook for the Arabian Mate!",
    "moves": [
      "Rh2#"
    ],
    "explanation": "1...Rh2# delivers Arabian Mate; the f3 knight defends h2 and covers g1."
  },
  {
    "id": "tac-epaulette-black",
    "category": "Tactics",
    "theme": "Epaulette Mate (Black)",
    "difficulty": "Easy",
    "rating": 1010,
    "fen": "6k1/5ppp/8/2q5/8/8/8/3RKR2 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Deliver Epaulette Mate between White’s two rooks.",
    "moves": [
      "Qe3#"
    ],
    "explanation": "1...Qe3# traps the e1 king between its own rooks on d1 and f1."
  },
  {
    "id": "tac-opera-one-move",
    "category": "Tactics",
    "theme": "Opera Mate",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "4kb1r/5ppp/8/6B1/8/8/5PPP/3R2K1 w k - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver Opera Mate using the g5 bishop and open d-file!",
    "moves": [
      "Rd8#"
    ],
    "explanation": "1.Rd8# is checkmate; the g5 bishop guards d8 and covers e7 while f8 and f7 block the Black king."
  },
  {
    "id": "tac-double-check-mate-1",
    "category": "Tactics",
    "theme": "Double Check Mate",
    "difficulty": "Easy",
    "rating": 1000,
    "fen": "3qkr2/3p4/7p/8/4B3/8/5PPP/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver an unstoppable double-check mate in one!",
    "moves": [
      "Bg6#"
    ],
    "explanation": "1.Bg6# unleashes double check from the bishop and e1 rook, sealing every flight square."
  },
  {
    "id": "tac-hook-mate-black",
    "category": "Tactics",
    "theme": "Hook Mate (Black)",
    "difficulty": "Easy",
    "rating": 1040,
    "fen": "6k1/5ppp/8/8/6p1/5n2/5Pr1/R5RK b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Use pawn, knight, and rook to complete the Hook Mate!",
    "moves": [
      "Rh2#"
    ],
    "explanation": "1...Rh2# completes the Hook Mate: the g4 pawn defends f3, the f3 knight protects h2 and covers g1, and White’s g1 rook blocks escape."
  },
  {
    "id": "tac-family-fork-black",
    "category": "Tactics",
    "theme": "Family Fork (Black)",
    "difficulty": "Easy",
    "rating": 960,
    "fen": "1r1q2k1/5pp1/7p/8/1n6/4Q3/6PP/R3K2R b KQ - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Fork White’s king, queen, and rook in one leap!",
    "moves": [
      "Nc2+"
    ],
    "explanation": "1...Nc2+ delivers a triple family fork against the e1 king, e3 queen, and a1 rook."
  },
  {
    "id": "tac-skewer-rook-black",
    "category": "Tactics",
    "theme": "Rank Skewer (Black)",
    "difficulty": "Easy",
    "rating": 970,
    "fen": "6k1/5ppp/8/8/8/8/1r6/4K2Q b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Skewer White’s king and queen along the back rank!",
    "moves": [
      "Rb1+"
    ],
    "explanation": "1...Rb1+ skewers the e1 king to the h1 queen along the 1st rank."
  },
  {
    "id": "tac-skewer-bishop-black",
    "category": "Tactics",
    "theme": "Diagonal Skewer (Black)",
    "difficulty": "Easy",
    "rating": 1030,
    "fen": "6k1/b4ppp/8/4R3/8/8/1K6/8 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Skewer White’s king and rook along the diagonal!",
    "moves": [
      "Bd4+"
    ],
    "explanation": "1...Bd4+ checks the b2 king and wins the e5 rook behind it."
  },
  {
    "id": "tac-discovered-check-win-rook",
    "category": "Tactics",
    "theme": "Discovered Check Capture",
    "difficulty": "Easy",
    "rating": 1070,
    "fen": "1n2k3/6r1/8/4B3/3P1P2/8/4R3/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Capture Black’s rook with a discovered check!",
    "moves": [
      "Bxg7+"
    ],
    "explanation": "1.Bxg7+ captures the g7 rook cleanly while uncovering a check from the e2 rook."
  },
  {
    "id": "tac-knight-fork-queenside",
    "category": "Tactics",
    "theme": "Royal Fork on c7",
    "difficulty": "Easy",
    "rating": 920,
    "fen": "r3k3/8/8/1N1q4/8/7P/2R2PP1/5RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Fork Black’s king, queen, and rook with your knight!",
    "moves": [
      "Nc7+"
    ],
    "explanation": "1.Nc7+ forks the e8 king, d5 queen, and a8 rook in one move."
  },
  {
    "id": "tac-absolute-pin-pileup",
    "category": "Tactics",
    "theme": "Piling Onto a Pin",
    "difficulty": "Easy",
    "rating": 950,
    "fen": "3qk3/3pr2p/6p1/2p2p2/8/8/4Q3/2B1R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Attack the pinned e7 rook to win material!",
    "moves": [
      "Bg5"
    ],
    "explanation": "1.Bg5 piles onto the pinned e7 rook along the e-file while Black’s pawn on c5 blocks any retreat or defense."
  },
  {
    "id": "tac-trapped-bishop-2",
    "category": "Tactics",
    "theme": "Trapped Bishop on the Rim",
    "difficulty": "Easy",
    "rating": 1100,
    "fen": "2r2rk1/1p3ppp/p1p2n2/8/B7/1P6/P1P2PPP/R4RK1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Trap White’s stranded bishop on a4!",
    "moves": [
      "b5"
    ],
    "explanation": "1...b5! traps the a4 bishop with no safe retreat squares."
  },
  {
    "id": "tac-backrank-deflect-black",
    "category": "Tactics",
    "theme": "Back-Rank Deflection (Black)",
    "difficulty": "Medium",
    "rating": 1220,
    "fen": "4r1k1/5ppp/8/8/8/8/4qPPP/2Q1R1K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Deflect White’s queen from defending the back rank!",
    "moves": [
      "Qxe1+",
      "Qxe1",
      "Rxe1#"
    ],
    "explanation": "1...Qxe1+! deflects White’s queen from c1 so 2.Qxe1 walks into 2...Rxe1#."
  },
  {
    "id": "tac-backrank-deflect-queen",
    "category": "Tactics",
    "theme": "Back-Rank Queen Deflection",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "4r1k1/3q1ppp/8/8/8/7P/4QPP1/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deflect Black’s queen from guarding e8 for back-rank mate!",
    "moves": [
      "Qxe8+",
      "Qxe8",
      "Rxe8#"
    ],
    "explanation": "1.Qxe8+! forces 1...Qxe8 2.Rxe8#, exploiting Black’s back-rank weakness."
  },
  {
    "id": "tac-arabian-setup",
    "category": "Tactics",
    "theme": "Forcing the Arabian Mate",
    "difficulty": "Medium",
    "rating": 1450,
    "fen": "5r1k/5p1p/5N2/6n1/8/7Q/1q5R/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Clear the h-file with a queen sacrifice to force Arabian Mate!",
    "moves": [
      "Qxh7+",
      "Nxh7",
      "Rxh7#"
    ],
    "explanation": "1.Qxh7+! forces 1...Nxh7 (since f6 protects h7), clearing the h-file for 2.Rxh7# Arabian Mate."
  },
  {
    "id": "tac-hook-mate-central",
    "category": "Tactics",
    "theme": "Hook Mate Combination",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "3r2k1/5p1p/1Q2N3/3q1P2/8/8/8/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice the queen on d8 to complete the Hook Mate!",
    "moves": [
      "Qxd8+",
      "Qxd8",
      "Rxd8#"
    ],
    "explanation": "1.Qxd8+! forces 1...Qxd8 2.Rxd8#, a Hook Mate supported by the e6 knight and f5 pawn."
  },
  {
    "id": "tac-epaulette-force",
    "category": "Tactics",
    "theme": "Forced Epaulette Mate",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "3r1r2/4k3/1N1p1p2/N7/2Q5/8/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Drive the Black king onto e8 between its rooks for Epaulette Mate!",
    "moves": [
      "Nc6+",
      "Ke8",
      "Qe6#"
    ],
    "explanation": "1.Nc6+! forces 1...Ke8, after which 2.Qe6# delivers Epaulette Mate between the d8 and f8 rooks."
  },
  {
    "id": "tac-boden-bishop-pair",
    "category": "Tactics",
    "theme": "Boden’s Queen Sacrifice",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "2kr4/pp1n2pp/2p5/8/5B2/8/P1Q2PPP/5BK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice the queen on c6 to finish with Boden’s criss-cross bishop mate!",
    "moves": [
      "Qxc6+",
      "bxc6",
      "Ba6#"
    ],
    "explanation": "1.Qxc6+! forces 1...bxc6, opening the a6-c8 diagonal for 2.Ba6# checkmate."
  },
  {
    "id": "tac-absolute-pin-black",
    "category": "Tactics",
    "theme": "Exploiting a Pin (Black)",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "2r3k1/p4ppp/8/8/1b6/2N5/PP2PPPP/R3K3 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Exploit the absolute pin on the c3 knight to win material!",
    "moves": [
      "Rxc3"
    ],
    "explanation": "1...Rxc3! wins a full piece because 2.bxc3 walks into 2...Bxc3+, forking the e1 king and a1 rook."
  },
  {
    "id": "tac-discovered-check-black",
    "category": "Tactics",
    "theme": "Discovered Check Wins Queen (Black)",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "3r2k1/5ppp/8/3n4/Q7/8/3K1PPP/5R2 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Unleash a discovered check that wins White’s queen!",
    "moves": [
      "Nb6+"
    ],
    "explanation": "1...Nb6+ uncovers a check from the d8 rook to the d2 king while attacking the a4 queen."
  },
  {
    "id": "tac-clearance-sac-mate",
    "category": "Tactics",
    "theme": "Clearance Sacrifice",
    "difficulty": "Medium",
    "rating": 1480,
    "fen": "r4bk1/5ppR/8/8/8/2qQ4/2B2PP1/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Clear the h7 square with a forcing rook sacrifice for checkmate!",
    "moves": [
      "Rh8+",
      "Kxh8",
      "Qh7#"
    ],
    "explanation": "1.Rh8+! forces 1...Kxh8, clearing h7 for 2.Qh7# supported by the c2 bishop."
  },
  {
    "id": "tac-clearance-black",
    "category": "Tactics",
    "theme": "File Clearance Sacrifice (Black)",
    "difficulty": "Medium",
    "rating": 1450,
    "fen": "6k1/2b2ppp/2Qq4/8/8/8/R4PPr/5BK1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Clear the h2 square with check so your queen delivers mate!",
    "moves": [
      "Rh1+",
      "Kxh1",
      "Qh2#"
    ],
    "explanation": "1...Rh1+! forces 2.Kxh1, vacating h2 for 2...Qh2# protected by the c7 bishop."
  },
  {
    "id": "tac-interference-pawn",
    "category": "Tactics",
    "theme": "Rank Interference",
    "difficulty": "Medium",
    "rating": 1460,
    "fen": "5rk1/pq5p/3P1p1Q/8/8/5P2/6PK/4R3 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Cut off the Black queen’s defense of g7 to force victory!",
    "moves": [
      "Re7",
      "Qxe7",
      "dxe7"
    ],
    "explanation": "1.Re7! interferes with Black’s queen guarding g7 and threatens Qg7#, forcing 1...Qxe7 2.dxe7 to win the queen."
  },
  {
    "id": "tac-decoy-queen-mate",
    "category": "Tactics",
    "theme": "Decoy into Corner Mate",
    "difficulty": "Medium",
    "rating": 1400,
    "fen": "1Q3rk1/4ppp1/7p/6q1/8/8/5PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice the queen on f8 to drag Black’s king into a back-rank mate!",
    "moves": [
      "Qxf8+",
      "Kxf8",
      "Rd8#"
    ],
    "explanation": "1.Qxf8+! forces 1...Kxf8, walking into 2.Rd8# checkmate."
  },
  {
    "id": "tac-xray-backrank-win",
    "category": "Tactics",
    "theme": "Back-Rank X-Ray",
    "difficulty": "Medium",
    "rating": 1370,
    "fen": "3qr1k1/5ppp/8/8/8/8/3Q1PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Exploit the X-ray along the d-file to win Black’s queen!",
    "moves": [
      "Qxd8"
    ],
    "explanation": "1.Qxd8! wins a full queen via X-ray along the d-file because 1...Rxd8 walks into 2.Rxd8#."
  },
  {
    "id": "tac-xray-black",
    "category": "Tactics",
    "theme": "Diagonal X-Ray (Black)",
    "difficulty": "Medium",
    "rating": 1430,
    "fen": "r1r3k1/pp3pp1/b6p/1q6/8/4B3/PP3PPP/R2Q1RK1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Use the a6 bishop’s X-ray through f1 to win material!",
    "moves": [
      "Qxf1+",
      "Qxf1",
      "Bxf1"
    ],
    "explanation": "1...Qxf1+! exploits the a6 bishop’s X-ray on f1 to win a full exchange."
  },
  {
    "id": "tac-trapped-queen-1",
    "category": "Tactics",
    "theme": "Trapped Queen",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "r1b2rk1/5ppp/1pp1p3/p1p5/3PP3/q1P2N2/P1QBBPPP/R4RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "Black’s queen raided a3 prematurely. Retreat the bishop to trap it!",
    "moves": [
      "Bc1"
    ],
    "explanation": "1.Bc1! attacks the a3 queen and leaves it with no safe square — moving any slower lets Black escape via ...Ba6."
  },
  {
    "id": "tac-desperado-bishop",
    "category": "Tactics",
    "theme": "Desperado Bishop",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "r1rq2k1/5ppp/pnp5/1p2p3/2B1P1b1/1P1P1N2/P3QPPP/R4RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White’s c4 bishop is trapped by ...b5 and ...Nb6. Turn it into a desperado capture with check!",
    "moves": [
      "Bxf7+"
    ],
    "explanation": "1.Bxf7+! wins a pawn with check — if 1...Kxf7, 2.Nxe5+ wins back a piece, and 1...Kh8 still lets White emerge ahead."
  },
  {
    "id": "tac-smothered-queenside",
    "category": "Tactics",
    "theme": "Queenside Smothered Mate",
    "difficulty": "Advanced",
    "rating": 1740,
    "fen": "5rk1/5ppp/8/Q7/4q3/8/PPn2PPP/1KR4R b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Execute a queenside smothered checkmate in three moves!",
    "moves": [
      "Na3+",
      "Ka1",
      "Qb1+",
      "Rxb1",
      "Nc2#"
    ],
    "explanation": "1...Na3+! (double check) 2.Ka1 Qb1+! 3.Rxb1 Nc2# forces White’s rook to smother its own king in the a1 corner."
  },
  {
    "id": "tac-opera-white-sac",
    "category": "Tactics",
    "theme": "Opera Mate Deflection",
    "difficulty": "Advanced",
    "rating": 1670,
    "fen": "2q1kb1r/5ppp/2n5/6B1/8/2Q5/5PPP/3R2K1 w k - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Eliminate the c6 defender with a queen sacrifice for Opera Mate!",
    "moves": [
      "Qxc6+",
      "Qxc6",
      "Rd8#"
    ],
    "explanation": "1.Qxc6+! forces 1...Qxc6, removing the defender of d8 for 2.Rd8# Opera Mate."
  },
  {
    "id": "tac-opera-black",
    "category": "Tactics",
    "theme": "Opera Mate (Black)",
    "difficulty": "Advanced",
    "rating": 1700,
    "fen": "3r2k1/5ppp/2q5/8/6b1/2N5/5PPP/2Q1KB1R b K - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Sacrifice your queen on c3 to deliver Opera Mate!",
    "moves": [
      "Qxc3+",
      "Qxc3",
      "Rd1#"
    ],
    "explanation": "1...Qxc3+! forces 2.Qxc3, clearing the way for 2...Rd1# Opera Mate supported by the g4 bishop."
  },
  {
    "id": "tac-battery-remove-guard",
    "category": "Tactics",
    "theme": "Removing the Guard for Battery Mate",
    "difficulty": "Advanced",
    "rating": 1720,
    "fen": "3q1rk1/5ppp/5n2/8/4B2Q/7P/1B3PP1/2R3K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Eliminate the f6 knight guarding h7 to force victory!",
    "moves": [
      "Bxf6",
      "g6",
      "Bxd8"
    ],
    "explanation": "1.Bxf6! removes the defender of h7; capturing on f6 allows 2.Qxh7#, so Black loses the queen."
  },
  {
    "id": "tac-arabian-sac",
    "category": "Tactics",
    "theme": "Arabian Mate Sacrifice (Black)",
    "difficulty": "Advanced",
    "rating": 1760,
    "fen": "6k1/5pp1/7p/8/6N1/5n2/1r2q3/2R2Q1K b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Clear the 2nd rank with a queen sacrifice for Arabian Mate!",
    "moves": [
      "Qh2+",
      "Nxh2",
      "Rxh2#"
    ],
    "explanation": "1...Qh2+! forces 2.Nxh2 (since the f3 knight guards h2 and g1), clearing the rank for 2...Rxh2# Arabian Mate."
  },
  {
    "id": "tac-clearance-bishop-sac",
    "category": "Tactics",
    "theme": "Bishop Clearance Sacrifice",
    "difficulty": "Advanced",
    "rating": 1790,
    "fen": "5rkr/5ppp/4B3/q7/8/1Q6/5PPP/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Clear the e-file with a forcing bishop sacrifice for checkmate!",
    "moves": [
      "Bxf7+",
      "Rxf7",
      "Re8#"
    ],
    "explanation": "1.Bxf7+! forces 1...Rxf7 (clearing the e-file and pinning the rook), leading to 2.Re8# checkmate."
  },
  {
    "id": "tac-xray-diagonal-battery",
    "category": "Tactics",
    "theme": "Diagonal X-Ray Breakthrough",
    "difficulty": "Advanced",
    "rating": 1690,
    "fen": "6rk/4qp1p/5b2/8/3Q4/7P/1B3PP1/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Exploit the b2 bishop’s X-ray along the long diagonal to win a full piece!",
    "moves": [
      "Qxf6+",
      "Qxf6",
      "Bxf6+"
    ],
    "explanation": "1.Qxf6+! forces 1...Qxf6, after which 2.Bxf6+ wins a clean piece thanks to the pin along the long diagonal."
  },
  {
    "id": "tac-desperado-stalemate-save",
    "category": "Tactics",
    "theme": "Crazy Rook Desperado Draw",
    "difficulty": "Expert",
    "rating": 2080,
    "fen": "6k1/4Rpp1/8/8/1p6/pP6/P1q5/K7 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White faces ...Qc1#. Unleash a desperado rook sacrifice to force a stalemate draw!",
    "moves": [
      "Re8+",
      "Kh7",
      "Rh8+"
    ],
    "explanation": "1.Re8+! Kh7 2.Rh8+! forces perpetual check or stalemate (2...Kxh8 is immediate stalemate!)."
  },
  {
    "id": "tac-bishop-skewer-queen",
    "category": "Tactics",
    "theme": "Diagonal Skewer on King & Queen",
    "difficulty": "Easy",
    "rating": 1050,
    "fen": "6q1/8/4k3/8/8/8/2B2PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver a diagonal check that wins Black’s queen!",
    "moves": [
      "Bb3+",
      "Kf5",
      "Bxg8"
    ],
    "explanation": "1.Bb3+! skewers the e6 king and g8 queen along the a2-g8 diagonal."
  },
  {
    "id": "tac-backrank-overload-deflection",
    "category": "Tactics",
    "theme": "Overloaded Defender Deflection",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "2q2rk1/5ppp/8/8/8/2Q4P/4RPP1/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Both Black heavy pieces cling to the back rank — deflect the f8 rook!",
    "moves": [
      "Qxc8",
      "Rxc8",
      "Re8+",
      "Rxe8",
      "Rxe8#"
    ],
    "explanation": "1.Qxc8! forces 1...Rxc8 (or lose the queen), pulling the rook off f8 so 2.Re8+! Rxe8 3.Rxe8# forces mate."
  },
  {
    "id": "tac-backrank-overload-black",
    "category": "Tactics",
    "theme": "Back-Rank Overload (Black)",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "4r1k1/4rpp1/7p/8/8/2q5/5PPP/2Q2RK1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Sacrifice your queen on c1 to deflect the f1 rook from back-rank defense!",
    "moves": [
      "Qxc1",
      "Rxc1",
      "Re1+",
      "Rxe1",
      "Rxe1#"
    ],
    "explanation": "1...Qxc1! drags the f1 rook away from e1, leading to 2.Rxc1 Re1+! 3.Rxe1 Rxe1#."
  },
  {
    "id": "tac-epaulette-white-mate",
    "category": "Tactics",
    "theme": "Epaulette Checkmate",
    "difficulty": "Easy",
    "rating": 1000,
    "fen": "3rkr2/8/8/8/2Q5/8/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver Epaulette checkmate where Black’s own rooks trap their king!",
    "moves": [
      "Qe6#"
    ],
    "explanation": "1.Qe6# is checkmate! Black’s rooks on d8 and f8 block both horizontal escape squares while the queen covers d7, e7, and f7."
  },
  {
    "id": "tac-knight-fork-black-queen",
    "category": "Tactics",
    "theme": "Royal Knight Fork (Black)",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "6k1/5ppp/8/8/3n4/7P/5PP1/2Q3K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Fork White’s king and queen with a single knight jump!",
    "moves": [
      "Ne2+",
      "Kh2",
      "Nxc1"
    ],
    "explanation": "1...Ne2+! checks the g1 king while attacking the c1 queen."
  },
  {
    "id": "tac-pawn-attack-pinned-knight",
    "category": "Tactics",
    "theme": "Attacking the Pinned Piece",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "4k3/5pp1/4n2p/8/3P4/8/4RPPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s knight is pinned to its king on the e-file — attack it with a pawn!",
    "moves": [
      "d5"
    ],
    "explanation": "1.d5! attacks the pinned e6 knight with a unit of lesser value, winning a full piece cleanly."
  },
  {
    "id": "tac-d-file-battery-sac",
    "category": "Tactics",
    "theme": "d-File Battery Deflection",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "3r2k1/p1q2ppp/8/8/8/3Q4/3R1PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Smash through the overloaded d8 defender on the d-file!",
    "moves": [
      "Qxd8+",
      "Qxd8",
      "Rxd8#"
    ],
    "explanation": "1.Qxd8+! eliminates the rook and drags Black’s queen away from c7, allowing 2.Rxd8#."
  },
  {
    "id": "tac-pin-smash-f6",
    "category": "Tactics",
    "theme": "Crushing the Pinned Knight",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "3r2k1/pp3ppp/2p2n2/6B1/8/2Q5/PPP2PPP/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s f6 knight is pinned to the back rank — shatter the kingside!",
    "moves": [
      "Bxf6",
      "gxf6",
      "Qxf6"
    ],
    "explanation": "1.Bxf6! destroys Black’s kingside pawn cover after 1...gxf6 2.Qxf6."
  },
  {
    "id": "tac-underpromo-smothered-mate",
    "category": "Tactics",
    "theme": "Knight Underpromotion Checkmate",
    "difficulty": "Expert",
    "rating": 2090,
    "fen": "6br/5Ppk/6pp/8/q7/8/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black threatens back-rank mate — underpromote to deliver an instant checkmate!",
    "moves": [
      "f8=N#"
    ],
    "explanation": "1.f8=N# is checkmate! Promoting to a queen or rook fails to mate and loses to Black’s back-rank threat."
  },
  {
    "id": "tac-smothered-classic-3ply",
    "category": "Tactics",
    "theme": "Philidor Smothered Mate Finale",
    "difficulty": "Medium",
    "rating": 1470,
    "fen": "r4r1k/p5pp/1p5N/8/8/1Q6/P4PPP/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice your queen on g8 to force classic smothered checkmate!",
    "moves": [
      "Qg8+",
      "Rxg8",
      "Nf7#"
    ],
    "explanation": "1.Qg8+! forces 1...Rxg8 (since the h6 knight covers g8), smothering Black’s king for 2.Nf7#."
  },
  {
    "id": "tac-skewer-second-rank",
    "category": "Tactics",
    "theme": "2nd-Rank Skewer (Black)",
    "difficulty": "Easy",
    "rating": 990,
    "fen": "7k/8/8/8/8/8/Q4K2/7r b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Deliver a check along the 2nd rank to skewer and win White’s queen!",
    "moves": [
      "Rh2+",
      "Kg3",
      "Rxa2"
    ],
    "explanation": "1...Rh2+! skewers the f2 king and a2 queen along the 2nd rank."
  },
  {
    "id": "tac-legals-mate-3ply",
    "category": "Tactics",
    "theme": "Légal's Double-Knight Checkmate",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "r2qkbnr/ppp2ppp/2np4/4N3/2B1P1b1/2N5/PPPP1PPP/R1BQ1RK1 w kq - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Complete Légal's Trap after ignoring the pin on f3!",
    "moves": [
      "Bxf7+",
      "Ke7",
      "Nd5#"
    ],
    "explanation": "1.Bxf7+! forces 1...Ke7, and 2.Nd5# delivers checkmate while Black’s g4 bishop watches helplessly."
  },
  {
    "id": "tac-greek-gift-3ply-equal",
    "category": "Tactics",
    "theme": "Greek Gift 3-Ply Breakthrough",
    "difficulty": "Medium",
    "rating": 1460,
    "fen": "r1bq1rk1/pp1n1ppp/2n1p3/3pP3/1b1P4/2NB1N2/PPP2PPP/R1BQ1RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Launch the classic Greek Gift sacrifice on h7 to hunt Black’s king!",
    "moves": [
      "Bxh7+",
      "Kxh7",
      "Ng5+"
    ],
    "explanation": "1.Bxh7+! Kxh7 2.Ng5+! strips away Black’s kingside shelter before White’s queen enters at h5."
  },
  {
    "id": "tac-decoy-g7-bishop-fork",
    "category": "Tactics",
    "theme": "Queen Attraction into Royal Fork",
    "difficulty": "Advanced",
    "rating": 1740,
    "fen": "5rk1/pp3pbp/2pq4/8/6Q1/6N1/PPP2PPP/5RK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice the queen on g7 to decoy the king into a winning royal knight fork!",
    "moves": [
      "Qxg7+",
      "Kxg7",
      "Nf5+",
      "Kg6",
      "Nxd6"
    ],
    "explanation": "1.Qxg7+! forces 1...Kxg7 (avoiding any defense of g7), after which 2.Nf5+! regains the queen with an extra piece."
  },
  {
    "id": "tac-backrank-pin-capture-black",
    "category": "Tactics",
    "theme": "Exploiting the Back-Rank Overload (Black)",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "3r2k1/p4ppp/8/8/8/q7/P2Q1PPP/3R2K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White’s d1 rook is tied to the back rank — capture the d2 queen cleanly!",
    "moves": [
      "Rxd2"
    ],
    "explanation": "1...Rxd2! wins a full queen because 2.Rxd2 walks into 2...Qc1+! 3.Rd1 Qxd1# back-rank mate."
  },
  {
    "id": "tac-backrank-pin-capture-white",
    "category": "Tactics",
    "theme": "Exploiting the Back-Rank Overload",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "3r2k1/p2q1ppp/Q7/8/8/8/P4PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s d8 rook is overloaded guarding the back rank — win the d7 queen!",
    "moves": [
      "Rxd7"
    ],
    "explanation": "1.Rxd7! wins Black’s queen cleanly because 1...Rxd7 allows 2.Qc8+! Rd8 3.Qxd8#."
  },
  {
    "id": "tac-skewer-third-rank-black",
    "category": "Tactics",
    "theme": "3rd-Rank Skewer (Black)",
    "difficulty": "Easy",
    "rating": 970,
    "fen": "7k/8/8/8/8/Q3K3/8/7r b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Check White’s king along the 3rd rank to skewer and win the a3 queen!",
    "moves": [
      "Rh3+",
      "Ke4",
      "Rxa3"
    ],
    "explanation": "1...Rh3+! skewers the e3 king and the undefended a3 queen along the 3rd rank."
  },
  {
    "id": "tac-anastasia-mate-3ply",
    "category": "Tactics",
    "theme": "Anastasia's Mate Sacrifice",
    "difficulty": "Medium",
    "rating": 1450,
    "fen": "2r2r1k/p1p1Nppp/2p5/8/4Q3/4R3/PPP2PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice your queen on h7 to execute Anastasia's Mate!",
    "moves": [
      "Qxh7+",
      "Kxh7",
      "Rh3#"
    ],
    "explanation": "1.Qxh7+! forces 1...Kxh7 (the e7 knight covers g8 and g6), clearing the h-file for 2.Rh3#."
  },
  {
    "id": "tac-hook-mate-clean",
    "category": "Tactics",
    "theme": "Hook Mate Finale",
    "difficulty": "Easy",
    "rating": 1030,
    "fen": "7k/4p1p1/5N2/6P1/8/8/4R3/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Swing your rook to deliver Hook Mate in one move!",
    "moves": [
      "Rh2#"
    ],
    "explanation": "1.Rh2# delivers Hook Mate: the f6 knight covers h7 while Black’s g7 pawn blocks the escape."
  },
  {
    "id": "tac-pawn-fork-rook-knight",
    "category": "Tactics",
    "theme": "Central Pawn Fork",
    "difficulty": "Easy",
    "rating": 940,
    "fen": "4k3/pp3ppp/3r1n2/8/4P3/2N5/PPP1BPPP/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Advance your central pawn to fork Black’s rook and knight at once!",
    "moves": [
      "e5",
      "Re6",
      "exf6"
    ],
    "explanation": "1.e5! forks the d6 rook and f6 knight cleanly."
  },
  {
    "id": "tac-smothered-queenside-sac",
    "category": "Tactics",
    "theme": "Queenside Smothered Mate",
    "difficulty": "Advanced",
    "rating": 1710,
    "fen": "k1r5/pp5p/N1p5/4Q3/8/8/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice your queen on b8 to force a queenside smothered checkmate!",
    "moves": [
      "Qb8+",
      "Rxb8",
      "Nc7#"
    ],
    "explanation": "1.Qb8+! forces 1...Rxb8 (since the a6 knight guards b8), clearing c7 for 2.Nc7#."
  },
  {
    "id": "tac-pin-bishop-cross-win",
    "category": "Tactics",
    "theme": "Cross-Pin on the Diagonal",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "5k2/4rppp/8/8/8/4N3/5PPP/2B3K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Pin Black’s e7 rook directly to its king along the a3-f8 diagonal!",
    "moves": [
      "Ba3"
    ],
    "explanation": "1.Ba3! establishes a lethal pin on the e7 rook against the f8 king."
  },
  {
    "id": "tac-queen-fork-e4-rook",
    "category": "Tactics",
    "theme": "Double-Diagonal Queen Fork",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "r7/5ppk/8/8/8/2q5/4QPPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Centralize your queen with check to fork Black’s king and undefended a8 rook!",
    "moves": [
      "Qe4+",
      "g6",
      "Qxa8"
    ],
    "explanation": "1.Qe4+! checks the h7 king along the b1-h7 diagonal while eyeing the undefended a8 rook on the perpendicular diagonal."
  },
  {
    "id": "tac2-black-back-rank-mate",
    "category": "Tactics",
    "theme": "Back-Rank Mate (Black)",
    "difficulty": "Easy",
    "rating": 920,
    "fen": "3r2k1/5ppp/8/8/8/8/5PPP/6K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver back-rank checkmate in one.",
    "moves": [
      "Rd1#"
    ],
    "explanation": "Rd1# delivers back-rank checkmate while White’s pawns on f2, g2, and h2 block the king’s escape."
  },
  {
    "id": "tac2-black-back-rank-deflection",
    "category": "Tactics",
    "theme": "Back-Rank Deflection (Black)",
    "difficulty": "Medium",
    "rating": 1280,
    "fen": "3r2k1/5ppp/8/3q4/8/8/5PPP/3QR1K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Exploit White’s back rank with a forcing queen exchange.",
    "moves": [
      "Qxd1",
      "Rxd1",
      "Rxd1#"
    ],
    "explanation": "1...Qxd1! forces 2.Rxd1, removing the defender of d1 so 2...Rxd1# delivers back-rank checkmate."
  },
  {
    "id": "tac2-white-back-rank-overload",
    "category": "Tactics",
    "theme": "Back-Rank Combination",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "2r3k1/5ppp/8/8/3Q4/8/5PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Use the d-file battery to force checkmate on the back rank.",
    "moves": [
      "Qd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "explanation": "1.Qd8+! forces 1...Rxd8, allowing 2.Rxd8# for a clean back-rank checkmate."
  },
  {
    "id": "tac2-black-arabian-mate",
    "category": "Tactics",
    "theme": "Arabian Mate (Black)",
    "difficulty": "Easy",
    "rating": 1030,
    "fen": "6k1/5ppp/8/8/8/5n2/4r3/7K b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Coordinate the rook and knight to deliver Arabian Mate.",
    "moves": [
      "Rh2#"
    ],
    "explanation": "Rh2# delivers Arabian Mate: the f3 knight defends h2 and covers g1."
  },
  {
    "id": "tac2-white-arabian-mate",
    "category": "Tactics",
    "theme": "Arabian Mate",
    "difficulty": "Easy",
    "rating": 1040,
    "fen": "7k/4R3/5N2/8/8/8/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Coordinate the rook and knight to deliver Arabian Mate.",
    "moves": [
      "Rh7#"
    ],
    "explanation": "Rh7# delivers Arabian Mate: the f6 knight protects h7 and covers g8."
  },
  {
    "id": "tac2-black-hook-mate",
    "category": "Tactics",
    "theme": "Hook Mate (Black)",
    "difficulty": "Easy",
    "rating": 1060,
    "fen": "6k1/8/8/7r/6p1/5n2/6PP/7K b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Capture on h2 to complete Hook Mate in one.",
    "moves": [
      "Rxh2#"
    ],
    "explanation": "Rxh2# delivers Hook Mate: the f3 knight guards h2 and g1, while White’s g2 pawn blocks the king’s escape."
  },
  {
    "id": "tac2-black-anastasia-mate",
    "category": "Tactics",
    "theme": "Anastasia’s Mate (Black)",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "6k1/5pp1/8/5r2/7q/8/4nPPP/3R3K b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Sacrifice the queen on h2 to set up Anastasia’s Mate.",
    "moves": [
      "Qxh2+",
      "Kxh2",
      "Rh5#"
    ],
    "explanation": "1...Qxh2+! forces 2.Kxh2, clearing the h-file for 2...Rh5# while the e2 knight covers g1 and g3."
  },
  {
    "id": "tac2-black-boden-mate",
    "category": "Tactics",
    "theme": "Boden’s Mate (Black)",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "6k1/4bppp/8/5b2/8/2P5/P2P1PPP/2KR4 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Intersect the two bishops to deliver Boden’s Mate in one.",
    "moves": [
      "Ba3#"
    ],
    "explanation": "Ba3# delivers Boden’s Mate: the a3 bishop covers b2 and c1, while the f5 bishop covers c2 and b1."
  },
  {
    "id": "tac2-white-boden-sac",
    "category": "Tactics",
    "theme": "Boden’s Mate",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "2kr3r/pp1np3/2n5/8/Q4B1q/8/PPP2PPP/3R1BK1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice the queen on c6 to finish with Boden’s Mate.",
    "moves": [
      "Qxc6+",
      "bxc6",
      "Ba6#"
    ],
    "explanation": "1.Qxc6+! forces 1...bxc6, opening the a6-c8 diagonal for 2.Ba6# while the f4 bishop covers b8 and c7."
  },
  {
    "id": "tac2-black-boden-sac",
    "category": "Tactics",
    "theme": "Boden’s Mate (Black)",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "3r1bk1/ppp2ppp/8/q4b1Q/8/2N5/PP1NP3/2KR3R b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Sacrifice the queen on c3 to complete Boden’s Mate.",
    "moves": [
      "Qxc3+",
      "bxc3",
      "Ba3#"
    ],
    "explanation": "1...Qxc3+! forces 2.bxc3, clearing the a3-c1 diagonal for 2...Ba3# while the f5 bishop guards b1 and c2."
  },
  {
    "id": "tac2-white-smothered-mate",
    "category": "Tactics",
    "theme": "Smothered Mate",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "r4r1k/pp4pp/2n4N/8/8/1Q6/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice the queen on g8 to force a smothered checkmate.",
    "moves": [
      "Qg8+",
      "Rxg8",
      "Nf7#"
    ],
    "explanation": "1.Qg8+! forces 1...Rxg8 (since the h6 knight protects g8), allowing 2.Nf7#."
  },
  {
    "id": "tac2-black-smothered-mate",
    "category": "Tactics",
    "theme": "Smothered Mate (Black)",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "6k1/5ppp/1q6/8/8/2N4n/PP4PP/R4R1K b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Sacrifice the queen on g1 to deliver smothered mate.",
    "moves": [
      "Qg1+",
      "Rxg1",
      "Nf2#"
    ],
    "explanation": "1...Qg1+! forces 2.Rxg1 (as the h3 knight covers g1), allowing 2...Nf2#."
  },
  {
    "id": "tac2-white-opera-mate",
    "category": "Tactics",
    "theme": "Opera Mate",
    "difficulty": "Easy",
    "rating": 1050,
    "fen": "4kb1r/5ppp/8/6B1/8/8/5PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move and deliver Opera Mate in one.",
    "moves": [
      "Rd8#"
    ],
    "explanation": "Rd8# delivers Opera Mate: the g5 bishop defends the d8 rook and covers e7."
  },
  {
    "id": "tac2-black-opera-mate",
    "category": "Tactics",
    "theme": "Opera Mate (Black)",
    "difficulty": "Easy",
    "rating": 1070,
    "fen": "3r2k1/5ppp/8/8/6b1/8/5PPP/4KB1R b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver Opera Mate in one.",
    "moves": [
      "Rd1#"
    ],
    "explanation": "Rd1# delivers Opera Mate: the g4 bishop protects d1 and covers e2."
  },
  {
    "id": "tac2-white-lolli-mate",
    "category": "Tactics",
    "theme": "Lolli’s Mate",
    "difficulty": "Easy",
    "rating": 1040,
    "fen": "6k1/5p1p/5PpQ/8/8/8/4rPPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black threatens back-rank mate — deliver Lolli’s Mate immediately.",
    "moves": [
      "Qg7#"
    ],
    "explanation": "Qg7# delivers Lolli’s Mate, supported by the advanced f6 pawn."
  },
  {
    "id": "tac2-black-lolli-mate",
    "category": "Tactics",
    "theme": "Lolli’s Mate (Black)",
    "difficulty": "Easy",
    "rating": 1060,
    "fen": "6k1/4Rppp/8/8/8/5pPq/5P1P/6K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White threatens back-rank mate — deliver Lolli’s Mate in one.",
    "moves": [
      "Qg2#"
    ],
    "explanation": "Qg2# delivers Lolli’s Mate with support from Black’s f3 pawn."
  },
  {
    "id": "tac2-white-greco-mate",
    "category": "Tactics",
    "theme": "Greco’s Mate",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "3r3k/1q4pp/8/5P1Q/2B2R2/8/5PP1/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Sacrifice the queen on h7 to complete Greco’s Mate.",
    "moves": [
      "Qxh7+",
      "Kxh7",
      "Rh4#"
    ],
    "explanation": "1.Qxh7+! forces 1...Kxh7 (as the c4 bishop covers g8), clearing the h-file for 2.Rh4# while the f5 pawn covers g6."
  },
  {
    "id": "tac2-black-greco-mate",
    "category": "Tactics",
    "theme": "Greco’s Mate (Black)",
    "difficulty": "Medium",
    "rating": 1370,
    "fen": "6k1/5pp1/8/2b2r2/5p1q/8/1Q4PP/3R3K b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Sacrifice the queen on h2 to complete Greco’s Mate.",
    "moves": [
      "Qxh2+",
      "Kxh2",
      "Rh5#"
    ],
    "explanation": "1...Qxh2+! forces 2.Kxh2 (since the c5 bishop covers g1), opening the h-file for 2...Rh5# while the f4 pawn covers g3."
  },
  {
    "id": "tac2-white-legal-mate",
    "category": "Tactics",
    "theme": "Legal’s Mate",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "rn1qkbnr/ppp2ppp/3p4/4N3/2B1P3/2N4P/PPPP1PP1/R1BbK2R w KQkq - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Complete Legal’s Mate after Black captured the queen on d1.",
    "moves": [
      "Bxf7+",
      "Ke7",
      "Nd5#"
    ],
    "explanation": "1.Bxf7+! forces 1...Ke7, and 2.Nd5# delivers Legal’s Mate."
  },
  {
    "id": "tac2-black-double-check-mate",
    "category": "Tactics",
    "theme": "Double Check Mate (Black)",
    "difficulty": "Easy",
    "rating": 1130,
    "fen": "4r1k1/5ppp/8/4n3/8/5p2/PPPP1PPP/3QKB1R b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Deliver checkmate in one using a double check.",
    "moves": [
      "Nd3#"
    ],
    "explanation": "1...Nd3# is a double checkmate from both the knight and the e8 rook, leaving White unable to capture the knight."
  },
  {
    "id": "tac2-white-underpromo-mate",
    "category": "Tactics",
    "theme": "Knight Underpromotion Mate",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "5bbr/4P1pk/1q5p/5K2/8/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Underpromote to deliver checkmate in one.",
    "moves": [
      "exf8=N#"
    ],
    "explanation": "1.exf8=N# is checkmate: promoting to a queen allows Black to continue, whereas the knight delivers immediate checkmate on h7."
  },
  {
    "id": "tac2-black-underpromo-mate",
    "category": "Tactics",
    "theme": "Knight Underpromotion Mate (Black)",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "8/8/8/8/5k2/1Q5P/4p1PK/5BBR b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Underpromote to a knight to deliver checkmate in one.",
    "moves": [
      "exf1=N#"
    ],
    "explanation": "1...exf1=N# is checkmate in one: promoting to a queen fails to deliver mate, while the knight mates the h2 king immediately."
  },
  {
    "id": "tac2-white-clearance-1",
    "category": "Tactics",
    "theme": "Clearance Sacrifice",
    "difficulty": "Advanced",
    "rating": 1720,
    "fen": "r4r1k/pp1q1pp1/6R1/6Np/4Q3/8/PP3PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Clear the e4-h7 diagonal with a forcing rook sacrifice.",
    "moves": [
      "Rh6+",
      "gxh6",
      "Qh7#"
    ],
    "explanation": "White’s g6 rook blocks the e4-h7 diagonal. 1.Rh6+! forces 1...gxh6, clearing the path for 2.Qh7# supported by the g5 knight."
  },
  {
    "id": "tac2-black-clearance-1",
    "category": "Tactics",
    "theme": "Clearance Sacrifice (Black)",
    "difficulty": "Advanced",
    "rating": 1740,
    "fen": "3r2k1/pp3ppp/8/4q3/6nP/6r1/PP1Q1PP1/R4R1K b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Clear the e5-h2 diagonal with a rook sacrifice.",
    "moves": [
      "Rh3+",
      "gxh3",
      "Qh2#"
    ],
    "explanation": "1...Rh3+! forces 2.gxh3, clearing the diagonal for 2...Qh2# protected by the g4 knight."
  },
  {
    "id": "tac2-white-xray-1",
    "category": "Tactics",
    "theme": "X-Ray Attack",
    "difficulty": "Advanced",
    "rating": 1680,
    "fen": "3q2k1/3r1ppp/1Q4r1/8/8/8/5PPP/R2R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Use an x-ray back-rank sacrifice to force checkmate.",
    "moves": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "explanation": "1.Qxd8+! exploits the d1 rook’s x-ray along the d-file: after 1...Rxd8, 2.Rxd8# delivers back-rank checkmate."
  },
  {
    "id": "tac2-black-xray-1",
    "category": "Tactics",
    "theme": "X-Ray Attack (Black)",
    "difficulty": "Advanced",
    "rating": 1700,
    "fen": "r2r2k1/5ppp/8/8/8/1q4R1/3R1PPP/3Q2K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Use an x-ray back-rank sacrifice to force checkmate.",
    "moves": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "explanation": "1...Qxd1+! uses the d8 rook’s x-ray along the d-file so 2.Rxd1 allows 2...Rxd1#."
  },
  {
    "id": "tac2-black-knight-fork-1",
    "category": "Tactics",
    "theme": "Knight Fork (Black)",
    "difficulty": "Easy",
    "rating": 950,
    "fen": "6k1/5ppp/8/3n4/8/8/4KPPP/1R6 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Fork White’s king and rook with your knight.",
    "moves": [
      "Nc3+"
    ],
    "explanation": "1...Nc3+! checks the e2 king and attacks the b1 rook simultaneously."
  },
  {
    "id": "tac2-black-skewer-1",
    "category": "Tactics",
    "theme": "Back-Rank Skewer (Black)",
    "difficulty": "Easy",
    "rating": 960,
    "fen": "r5k1/5ppp/8/8/8/8/5PPP/4K1Q1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Win White’s queen with a back-rank skewer.",
    "moves": [
      "Ra1+"
    ],
    "explanation": "1...Ra1+! skewers the e1 king to the g1 queen along the first rank."
  },
  {
    "id": "tac2-white-bishop-fork",
    "category": "Tactics",
    "theme": "Bishop Fork",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "3r4/5kpp/8/8/8/8/r3BPPP/2R3K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Fork Black’s king and rook with your bishop.",
    "moves": [
      "Bc4+",
      "Kf6",
      "Bxa2"
    ],
    "explanation": "1.Bc4+! checks the f7 king along the a2-g8 diagonal while attacking the undefended rook on a2."
  },
  {
    "id": "tac2-black-bishop-fork",
    "category": "Tactics",
    "theme": "Bishop Fork (Black)",
    "difficulty": "Easy",
    "rating": 1030,
    "fen": "4r1k1/R3bppp/8/8/8/8/5KPP/3R4 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Fork White’s king and rook with a bishop check.",
    "moves": [
      "Bc5+",
      "Kf1",
      "Bxa7"
    ],
    "explanation": "1...Bc5+! checks the f2 king and attacks the undefended rook on a7 simultaneously."
  },
  {
    "id": "tac2-white-bishop-skewer",
    "category": "Tactics",
    "theme": "Diagonal Bishop Skewer",
    "difficulty": "Medium",
    "rating": 1210,
    "fen": "6r1/ppp5/4k3/8/8/8/PP3PPP/3B2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Skewer Black’s king and rook along the a2-g8 diagonal.",
    "moves": [
      "Bb3+",
      "Kf6",
      "Bxg8"
    ],
    "explanation": "1.Bb3+! checks the e6 king and skewers the g8 rook behind it."
  },
  {
    "id": "tac2-black-bishop-skewer",
    "category": "Tactics",
    "theme": "Diagonal Bishop Skewer (Black)",
    "difficulty": "Medium",
    "rating": 1230,
    "fen": "3b2k1/pp3ppp/8/8/8/4K3/PPP5/6R1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Skewer White’s king and rook along the a7-g1 diagonal.",
    "moves": [
      "Bb6+",
      "Kf3",
      "Bxg1"
    ],
    "explanation": "1...Bb6+! checks the e3 king and skewers the g1 rook along the diagonal."
  },
  {
    "id": "tac2-black-discovered-check",
    "category": "Tactics",
    "theme": "Discovered Check (Black)",
    "difficulty": "Medium",
    "rating": 1200,
    "fen": "4r1k1/5ppp/8/8/4n3/2Q5/5PPP/4K3 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Capture White’s queen with a discovered check.",
    "moves": [
      "Nxc3+"
    ],
    "explanation": "1...Nxc3+! captures the queen while uncovering a discovered check from the e8 rook."
  },
  {
    "id": "tac2-white-discovered-attack",
    "category": "Tactics",
    "theme": "Discovered Attack",
    "difficulty": "Medium",
    "rating": 1270,
    "fen": "3q2k1/5ppp/8/8/8/3B4/5PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Unleash a discovered attack on Black’s queen using a bishop check.",
    "moves": [
      "Bxh7+",
      "Kxh7",
      "Rxd8"
    ],
    "explanation": "1.Bxh7+! forces the king to respond while uncovering the d1 rook’s attack on the d8 queen, winning the queen."
  },
  {
    "id": "tac2-black-discovered-attack",
    "category": "Tactics",
    "theme": "Discovered Attack (Black)",
    "difficulty": "Medium",
    "rating": 1290,
    "fen": "3r2k1/5ppp/8/8/3b4/8/5PPP/3Q2K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Uncover an attack on White’s queen with a forcing bishop check.",
    "moves": [
      "Bxf2+",
      "Kxf2",
      "Rxd1"
    ],
    "explanation": "1...Bxf2+! wins a pawn with check while opening the d-file for 2...Rxd1."
  },
  {
    "id": "tac2-white-trapped-bishop",
    "category": "Tactics",
    "theme": "Trapped Piece (Black)",
    "difficulty": "Medium",
    "rating": 1250,
    "fen": "r2qkbnr/3b1ppp/p2p4/1pp5/4P3/1B1Q4/PPP2PPP/RNB1K2R b KQkq - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Trap White’s light-squared bishop with a pawn advance (Noah’s Ark Trap).",
    "moves": [
      "c4"
    ],
    "explanation": "1...c4! closes the a2-g8 diagonal and traps the b3 bishop completely."
  },
  {
    "id": "tac2-w-3p-anderssen-adolf-1",
    "category": "Tactics",
    "theme": "Double Check",
    "difficulty": "Advanced",
    "rating": 1550,
    "fen": "rnbq1rk1/pppp3p/1b6/3NN1pQ/2BP4/6p1/PPP4P/R4K1R w - - 0 15",
    "sideToMove": "White",
    "prompt": "White to move. Deliver a double check to seize a winning advantage.",
    "moves": [
      "Nf6+",
      "Kg7",
      "Qxh7+"
    ],
    "explanation": "1.Nf6+ Kg7 2.Qxh7+ delivers a forcing double check (Harrwitz vs. Anderssen), forcing the Black king to move and winning decisively."
  },
  {
    "id": "tac2-b-3p-anderssen-adolf-2",
    "category": "Tactics",
    "theme": "Discovered Check (Black)",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "r4k2/ppp2r1p/8/3p1nQ1/2q5/3N4/PPP4P/4RKR1 b - - 5 32",
    "sideToMove": "Black",
    "prompt": "Black to move. Unleash a discovered check to win material.",
    "moves": [
      "Nh4+",
      "Qf5",
      "Rxf5+"
    ],
    "explanation": "1...Nh4+ 2.Qf5 Rxf5+ uncovers a discovered check while the knight strikes on h4 (Harrwitz vs. Anderssen), securing a decisive advantage."
  },
  {
    "id": "tac2-w-1m-morphy-alonzo-3",
    "category": "Tactics",
    "theme": "Back-Rank Mate",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "r5kr/ppp2Rpp/1b6/n2Q4/2q5/B4N2/P4PPP/1R4K1 w - - 1 21",
    "sideToMove": "White",
    "prompt": "White to move and deliver back-rank checkmate in one.",
    "moves": [
      "Rf8#"
    ],
    "explanation": "1.Rf8# delivers checkmate along the back rank (Morphy vs. Morphy), leaving the Black king with no escape squares."
  },
  {
    "id": "tac2-w-1m-rubinstein-akiba-4",
    "category": "Tactics",
    "theme": "Back-Rank Mate",
    "difficulty": "Easy",
    "rating": 1060,
    "fen": "1rr2b1k/4qP1p/p4p2/1pp1p2B/2PpP2P/1P1P4/P3Q3/R1B3RK w - - 1 33",
    "sideToMove": "White",
    "prompt": "White to move and deliver back-rank checkmate in one.",
    "moves": [
      "Rg8#"
    ],
    "explanation": "1.Rg8# delivers checkmate along the back rank (Chigorin vs. Rubinstein), leaving the Black king with no escape squares."
  },
  {
    "id": "tac2-b-3p-dus-chotimirsky-fe-5",
    "category": "Tactics",
    "theme": "Pawn Promotion Tactic (Black)",
    "difficulty": "Advanced",
    "rating": 1700,
    "fen": "8/p5kp/4R3/3p2P1/7P/2N5/P3p1PK/1r6 b - - 1 43",
    "sideToMove": "Black",
    "prompt": "Black to move. Use pawn promotion to gain a decisive advantage.",
    "moves": [
      "e1=Q",
      "Rxe1",
      "Rxe1"
    ],
    "explanation": "1...e1=Q 2.Rxe1 Rxe1 converts the passed pawn via promotion (Cohn vs. Dus Chotimirsky), leaving Black decisively ahead."
  },
  {
    "id": "tac2-w-1m-bareev-evgeny-6",
    "category": "Tactics",
    "theme": "Back-Rank Mate",
    "difficulty": "Easy",
    "rating": 1130,
    "fen": "3r1k2/bp3p1p/8/2nR1N2/pN5P/P4P2/1P6/5K2 w - - 3 36",
    "sideToMove": "White",
    "prompt": "White to move and deliver back-rank checkmate in one.",
    "moves": [
      "Rxd8#"
    ],
    "explanation": "1.Rxd8# delivers checkmate along the back rank (Karpov vs. Bareev), leaving the Black king with no escape squares."
  },
  {
    "id": "tac2-w-3p-wilson-j-7",
    "category": "Tactics",
    "theme": "Discovered Check",
    "difficulty": "Advanced",
    "rating": 1770,
    "fen": "rnb2bkr/ppp4p/7B/3Pp2n/2BP4/3K2p1/PPP3q1/RN1Q4 w - - 0 19",
    "sideToMove": "White",
    "prompt": "White to move. Unleash a discovered check to win material.",
    "moves": [
      "d6+",
      "Qd5",
      "Bxd5+"
    ],
    "explanation": "1.d6+ Qd5 2.Bxd5+ uncovers a discovered check while the pawn strikes on d6 (Steinitz vs. Wilson), securing a decisive advantage."
  },
  {
    "id": "tac2-w-3p-bogoljubow-efim-8",
    "category": "Tactics",
    "theme": "Pawn Promotion Tactic",
    "difficulty": "Advanced",
    "rating": 1550,
    "fen": "r2k4/4rp2/1qp1PQ1p/p2p1B2/3b1P2/P1N3P1/1P5P/4R2K w - - 1 33",
    "sideToMove": "White",
    "prompt": "White to move. Use pawn promotion to gain a decisive advantage.",
    "moves": [
      "exf7",
      "Bxf6",
      "f8=Q+"
    ],
    "explanation": "1.exf7 Bxf6 2.f8=Q+ converts the passed pawn via promotion (Marshall vs. Bogoljubow), leaving White decisively ahead."
  },
  {
    "id": "tac2-w-3p-romi-massimiliano-9",
    "category": "Tactics",
    "theme": "Discovered Check",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "2b1k2r/pp2P3/2p3R1/7Q/5P2/7P/Pq4rK/4R3 w - - 0 42",
    "sideToMove": "White",
    "prompt": "White to move. Unleash a discovered check to win material.",
    "moves": [
      "Rxg2+",
      "Rxh5",
      "Rxb2"
    ],
    "explanation": "1.Rxg2+ Rxh5 2.Rxb2 uncovers a discovered check while the rook strikes on g2 (Maroczy vs. Romi), securing a decisive advantage."
  },
  {
    "id": "tac2-w-3p-alapin-simon-10",
    "category": "Tactics",
    "theme": "Back-Rank Mate",
    "difficulty": "Medium",
    "rating": 1230,
    "fen": "r1b2k1r/1p2bppp/p1B2q2/8/8/8/PPPQ1P1P/2KRR3 w - - 1 17",
    "sideToMove": "White",
    "prompt": "White to move and deliver back-rank checkmate in two.",
    "moves": [
      "Qd8+",
      "Bxd8",
      "Re8#"
    ],
    "explanation": "1.Qd8+ Bxd8 2.Re8# delivers checkmate along the back rank (Nimzowitsch vs. Alapin), leaving the Black king with no escape squares."
  },
  {
    "id": "tac2-w-1m-hammer-j-13",
    "category": "Tactics",
    "theme": "Back-Rank Mate",
    "difficulty": "Easy",
    "rating": 930,
    "fen": "4r2k/1p3Bpp/2p5/4R3/8/P5P1/6K1/1r6 w - - 0 53",
    "sideToMove": "White",
    "prompt": "White to move and deliver back-rank checkmate in one.",
    "moves": [
      "Rxe8#"
    ],
    "explanation": "1.Rxe8# delivers checkmate along the back rank (Nakamura vs. Hammer), leaving the Black king with no escape squares."
  },
  {
    "id": "tac2-b-3p-radjabov-t-14",
    "category": "Tactics",
    "theme": "Pawn Promotion Tactic (Black)",
    "difficulty": "Advanced",
    "rating": 1770,
    "fen": "5rk1/p7/1p6/3rp3/1PB1P2R/8/PB3pKP/8 b - - 0 39",
    "sideToMove": "Black",
    "prompt": "Black to move. Use pawn promotion to gain a decisive advantage.",
    "moves": [
      "f1=Q+",
      "Bxf1",
      "Rd2+"
    ],
    "explanation": "1...f1=Q+ 2.Bxf1 Rd2+ converts the passed pawn via promotion (Shirov vs. Radjabov), leaving Black decisively ahead."
  },
  {
    "id": "tac2-b-3p-kramnik-vladimir-15",
    "category": "Tactics",
    "theme": "Pawn Promotion Tactic (Black)",
    "difficulty": "Advanced",
    "rating": 1550,
    "fen": "4k3/pp5p/2p5/2pP2Pn/8/N1Pr1pp1/PP2q3/R1Q1R2K b - - 2 27",
    "sideToMove": "Black",
    "prompt": "Black to move. Use pawn promotion to gain a decisive advantage.",
    "moves": [
      "g2+",
      "Kh2",
      "g1=Q+"
    ],
    "explanation": "1...g2+ 2.Kh2 g1=Q+ converts the passed pawn via promotion (Aronian vs. Kramnik), leaving Black decisively ahead."
  },
  {
    "id": "tac2-b-3p-smyslov-vassily-16",
    "category": "Tactics",
    "theme": "Discovered Check (Black)",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "b4rk1/p4pbp/3p2p1/6B1/Q5P1/P4nP1/1R3P2/5R1K b - - 0 23",
    "sideToMove": "Black",
    "prompt": "Black to move. Unleash a discovered check to win material.",
    "moves": [
      "Nxg5+",
      "f3",
      "Bxb2"
    ],
    "explanation": "1...Nxg5+ 2.f3 Bxb2 uncovers a discovered check while the knight strikes on g5 (Botvinnik vs. Smyslov), securing a decisive advantage."
  },
  {
    "id": "tac2-w-1m-prandstetter-eduar-17",
    "category": "Tactics",
    "theme": "Back-Rank Mate",
    "difficulty": "Easy",
    "rating": 1080,
    "fen": "8/1P6/p2Q1p1k/7p/P3B2K/5PP1/1q6/6b1 w - - 0 52",
    "sideToMove": "White",
    "prompt": "White to move and deliver back-rank checkmate in one.",
    "moves": [
      "Qf8#"
    ],
    "explanation": "1.Qf8# delivers checkmate along the back rank (Spraggett vs. Prandstetter), leaving the Black king with no escape squares."
  },
  {
    "id": "tac2-b-1m-carlsen-magnus-18",
    "category": "Tactics",
    "theme": "Pawn Promotion Tactic (Black)",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "6k1/5p2/1K4p1/8/P4P2/1R2P3/7p/8 b - - 0 45",
    "sideToMove": "Black",
    "prompt": "Black to move. Use pawn promotion to gain a decisive advantage.",
    "moves": [
      "h1=Q"
    ],
    "explanation": "1...h1=Q converts the passed pawn via promotion (Nepomniachtchi vs. Carlsen), leaving Black decisively ahead."
  },
  {
    "id": "tac2-w-1m-naiditsch-a-19",
    "category": "Tactics",
    "theme": "Pawn Promotion Tactic",
    "difficulty": "Easy",
    "rating": 920,
    "fen": "8/1r2Ppk1/6pp/8/4N3/1b5P/6P1/6K1 w - - 0 42",
    "sideToMove": "White",
    "prompt": "White to move. Use pawn promotion to gain a decisive advantage.",
    "moves": [
      "e8=Q"
    ],
    "explanation": "1.e8=Q converts the passed pawn via promotion (Timman vs. Naiditsch), leaving White decisively ahead."
  },
  {
    "id": "tac2-w-1m-bologan-v-20",
    "category": "Tactics",
    "theme": "Discovered Check",
    "difficulty": "Easy",
    "rating": 960,
    "fen": "r6r/pb1n2Q1/1p1kp3/4qB2/3N4/8/PPP2PP1/3R2K1 w - - 3 27",
    "sideToMove": "White",
    "prompt": "White to move. Unleash a discovered check to win material.",
    "moves": [
      "Nf3+"
    ],
    "explanation": "1.Nf3+ uncovers a discovered check while the knight strikes on f3 (Anand vs. Bologan), securing a decisive advantage."
  },
  {
    "id": "tac2-w-1m-flohr-salo-21",
    "category": "Tactics",
    "theme": "Pawn Promotion Tactic",
    "difficulty": "Easy",
    "rating": 1000,
    "fen": "2R5/P3pk1p/3b2p1/5p2/8/3KPPP1/r6P/8 w - - 6 39",
    "sideToMove": "White",
    "prompt": "White to move. Use pawn promotion to gain a decisive advantage.",
    "moves": [
      "a8=Q"
    ],
    "explanation": "1.a8=Q converts the passed pawn via promotion (Szabo vs. Flohr), leaving White decisively ahead."
  },
  {
    "id": "tac2-b-3p-chigorin-mikhail-22",
    "category": "Tactics",
    "theme": "Skewer (Black)",
    "difficulty": "Advanced",
    "rating": 1540,
    "fen": "5rn1/1Q4bk/2pp3p/2p1p3/2Pq4/1P6/P4P1N/2K3RR b - - 1 31",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material by skewering two White pieces.",
    "moves": [
      "Qa1+",
      "Kd2",
      "Rxf2+"
    ],
    "explanation": "1...Qa1+ 2.Kd2 Rxf2+ skewers the c1 king in front of the g1 rook (Schiffers vs. Chigorin)."
  },
  {
    "id": "tac2-w-3p-morphy-ernest-23",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "8/1bp2r1k/p1q1pQ2/1p6/4N3/2P1R1Pr/P7/4R1K1 w - - 0 35",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Ng5+",
      "Kg8",
      "Qxf7+"
    ],
    "explanation": "1.Ng5+ Kg8 2.Qxf7+ uses a knight fork attacking the f7 rook and h7 king (Morphy vs. Morphy), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-morphy-ernest-24",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "r1bn1q1r/pp2kp2/1b1N1p1p/1p2p3/1P2P3/2PQ4/P4PPP/RN3RK1 w - - 0 16",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Nxc8+",
      "Rxc8",
      "Rd1"
    ],
    "explanation": "1.Nxc8+ Rxc8 2.Rd1 uses a knight fork attacking the e7 king and b6 bishop (Morphy vs. Morphy), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-kasparov-gary-25",
    "category": "Tactics",
    "theme": "Skewer",
    "difficulty": "Advanced",
    "rating": 1660,
    "fen": "2NQbbrq/5pk1/8/pPp2pP1/P4NRp/7P/8/7K w - - 2 37",
    "sideToMove": "White",
    "prompt": "White to move. Win material by skewering two Black pieces.",
    "moves": [
      "Qf6+",
      "Kh7",
      "Rxh4+"
    ],
    "explanation": "1.Qf6+ Kh7 2.Rxh4+ skewers the g7 king in front of the h8 queen (Ivanchuk vs. Kasparov)."
  },
  {
    "id": "tac2-w-3p-spassky-boris-v-26",
    "category": "Tactics",
    "theme": "Pin & Win",
    "difficulty": "Advanced",
    "rating": 1690,
    "fen": "3r4/2qrbbk1/5p1p/pp1P1Pp1/6P1/P1BR3P/1P2R1B1/3Q3K w - - 0 39",
    "sideToMove": "White",
    "prompt": "White to move. Exploit a pin to win material cleanly.",
    "moves": [
      "Rxe7",
      "Rxe7",
      "d6"
    ],
    "explanation": "1.Rxe7 Rxe7 2.d6 pins the f7 bishop to the g7 king (Karpov vs. Spassky), winning decisive material."
  },
  {
    "id": "tac2-b-3p-bogoljubow-efim-27",
    "category": "Tactics",
    "theme": "Pawn Fork (Black)",
    "difficulty": "Advanced",
    "rating": 1730,
    "fen": "r3k3/1bq2p2/p4b2/1p3P1r/4B3/PP3Q1p/1P4PP/4RR1K b q - 0 25",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing pawn fork.",
    "moves": [
      "hxg2+",
      "Qxg2",
      "O-O-O"
    ],
    "explanation": "1...hxg2+ 2.Qxg2 O-O-O uses a pawn fork attacking the f1 rook and h1 king (Yates vs. Bogoljubow), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-torre-repetto-carl-28",
    "category": "Tactics",
    "theme": "Skewer",
    "difficulty": "Advanced",
    "rating": 1770,
    "fen": "2kr4/1p3p2/4pRpp/R3P3/2pr3P/2Q1K3/2P2PP1/1q6 w - - 2 29",
    "sideToMove": "White",
    "prompt": "White to move. Win material by skewering two Black pieces.",
    "moves": [
      "Ra8+",
      "Kc7",
      "Rxf7+"
    ],
    "explanation": "1.Ra8+ Kc7 2.Rxf7+ skewers the c8 king in front of the d8 rook (Yates vs. Torre Repetto)."
  },
  {
    "id": "tac2-w-3p-alatortsev-vladimi-29",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Advanced",
    "rating": 1540,
    "fen": "3nr3/k2r1pp1/4p2p/4P3/1NR5/2P5/5PPP/1R4K1 w - - 2 38",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Nc6+",
      "Nxc6",
      "Ra4+"
    ],
    "explanation": "1.Nc6+ Nxc6 2.Ra4+ uses a knight fork attacking the d8 knight and a7 king (Spielmann vs. Alatortsev), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-reti-richard-30",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "4r1k1/2n5/p2Rr1pp/npp5/4N1P1/2P4P/PP6/R1B3K1 w - - 0 28",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Nf6+",
      "Kf7",
      "Nxe8"
    ],
    "explanation": "1.Nf6+ Kf7 2.Nxe8 uses a knight fork attacking the e8 rook and g8 king (Lasker vs. Reti), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-3p-chigorin-mikhail-31",
    "category": "Tactics",
    "theme": "Skewer (Black)",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "1k5r/pp4K1/1q6/2p1P1Qp/2b2P2/P1P2P2/3r3P/2R4R b - - 3 38",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material by skewering two White pieces.",
    "moves": [
      "Rg8+",
      "Kh7",
      "Rd7+"
    ],
    "explanation": "1...Rg8+ 2.Kh7 Rd7+ skewers the g7 king in front of the g5 queen (Pillsbury vs. Chigorin)."
  },
  {
    "id": "tac2-b-3p-rosenthal-samuel-32",
    "category": "Tactics",
    "theme": "Knight Fork (Black)",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "3r3k/1p3Bp1/p2b3p/4N3/5p2/3Q3q/PP3n1P/2RR2K1 b - - 0 34",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing knight fork.",
    "moves": [
      "Nxd3",
      "Rxd3",
      "Qf5"
    ],
    "explanation": "1...Nxd3 2.Rxd3 Qf5 uses a knight fork attacking the e5 knight and c1 rook (Blackburne vs. Rosenthal), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-schwarz-adolf-33",
    "category": "Tactics",
    "theme": "Pin & Win",
    "difficulty": "Advanced",
    "rating": 1690,
    "fen": "2rrk3/QR3pp1/2n1b2p/1BB1q3/3P4/8/P4PPP/6K1 w - - 0 31",
    "sideToMove": "White",
    "prompt": "White to move. Exploit a pin to win material cleanly.",
    "moves": [
      "Re7+",
      "Kf8",
      "Re8+"
    ],
    "explanation": "1.Re7+ Kf8 2.Re8+ pins the e6 bishop to the e5 queen (Blackburne vs. Schwarz), winning decisive material."
  },
  {
    "id": "tac2-w-3p-rosselli-del-turco-35",
    "category": "Tactics",
    "theme": "Pin & Win",
    "difficulty": "Advanced",
    "rating": 1770,
    "fen": "6k1/6p1/4p2p/6rq/4p1n1/4PrQP/PP3PP1/R2B1R1K w - - 5 27",
    "sideToMove": "White",
    "prompt": "White to move. Exploit a pin to win material cleanly.",
    "moves": [
      "Bxf3",
      "exf3",
      "Qxf3"
    ],
    "explanation": "1.Bxf3 exf3 2.Qxf3 pins the g4 knight to the h5 queen (Bogoljubow vs. Rosselli del Turco), winning decisive material."
  },
  {
    "id": "tac2-w-3p-ivanchuk-v-36",
    "category": "Tactics",
    "theme": "Skewer",
    "difficulty": "Advanced",
    "rating": 1540,
    "fen": "6R1/2r1k1p1/4p3/3pn1NP/1p6/4K3/1PP5/8 w - - 0 36",
    "sideToMove": "White",
    "prompt": "White to move. Win material by skewering two Black pieces.",
    "moves": [
      "Rxg7+",
      "Kd6",
      "Rxc7"
    ],
    "explanation": "1.Rxg7+ Kd6 2.Rxc7 skewers the e7 king in front of the c7 rook (Leko vs. Ivanchuk)."
  },
  {
    "id": "tac2-w-3p-aronian-l-38",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "8/p2k1N2/1p4pp/2pK4/2Pn1PP1/3r4/1P5R/8 w - - 7 52",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Ne5+",
      "Kc7",
      "Nxd3"
    ],
    "explanation": "1.Ne5+ Kc7 2.Nxd3 uses a knight fork attacking the d7 king and d3 rook (Vachier Lagrave vs. Aronian), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-li-chao2-39",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "5r1k/8/p7/2p1N1R1/2pnr2p/7P/PP5N/2K2B2 w - - 0 40",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Ng6+",
      "Kg7",
      "Nxf8+"
    ],
    "explanation": "1.Ng6+ Kg7 2.Nxf8+ uses a knight fork attacking the f8 rook and h8 king (Harikrishna vs. Li Chao2), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-tari-a-40",
    "category": "Tactics",
    "theme": "Skewer",
    "difficulty": "Advanced",
    "rating": 1690,
    "fen": "r7/k4pp1/1R6/1K5p/8/7P/5PP1/8 w - - 0 48",
    "sideToMove": "White",
    "prompt": "White to move. Win material by skewering two Black pieces.",
    "moves": [
      "Ra6+",
      "Kb8",
      "Rxa8+"
    ],
    "explanation": "1.Ra6+ Kb8 2.Rxa8+ skewers the a7 king in front of the a8 rook (Firouzja vs. Tari)."
  },
  {
    "id": "tac2-b-3p-lei-tingjie-41",
    "category": "Tactics",
    "theme": "Knight Fork (Black)",
    "difficulty": "Advanced",
    "rating": 1730,
    "fen": "1q1r3k/5Rpp/1p6/pP1p1B2/3Q4/2P3n1/1P5P/5RK1 b - - 0 30",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing knight fork.",
    "moves": [
      "Ne2+",
      "Kh1",
      "Nxd4"
    ],
    "explanation": "1...Ne2+ 2.Kh1 Nxd4 uses a knight fork attacking the d4 queen and g1 king (Muzychuk vs. Lei), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-3p-adams-mi-42",
    "category": "Tactics",
    "theme": "Bishop Fork (Black)",
    "difficulty": "Advanced",
    "rating": 1760,
    "fen": "4r1k1/1q3pp1/1b1p1n1p/1p3P2/4pnP1/P2P2QP/BB3R1N/4R1K1 b - - 2 32",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing bishop fork.",
    "moves": [
      "Bxf2+",
      "Kxf2",
      "Nxd3+"
    ],
    "explanation": "1...Bxf2+ 2.Kxf2 Nxd3+ uses a bishop fork attacking the g3 queen and e1 rook (Gelfand vs. Adams), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-van-wely-l-43",
    "category": "Tactics",
    "theme": "Skewer",
    "difficulty": "Advanced",
    "rating": 1540,
    "fen": "1r3k2/5BpQ/3p1b2/3P3P/1p6/1P1p1P2/r7/1K4R1 w - - 0 34",
    "sideToMove": "White",
    "prompt": "White to move. Win material by skewering two Black pieces.",
    "moves": [
      "Qg8+",
      "Ke7",
      "Kxa2"
    ],
    "explanation": "1.Qg8+ Ke7 2.Kxa2 skewers the f8 king in front of the b8 rook (Topalov vs. Van Wely)."
  },
  {
    "id": "tac2-w-3p-carlsen-m-44",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "8/4p1k1/3p4/5p2/r1PPnq2/6Np/4B2P/1R2K3 w - - 0 41",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Nh5+",
      "Kf7",
      "Nxf4"
    ],
    "explanation": "1.Nh5+ Kf7 2.Nxf4 uses a knight fork attacking the g7 king and f4 queen (Wojtaszek vs. Carlsen), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-kotov-alexander-45",
    "category": "Tactics",
    "theme": "Bishop Fork",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "r2k1b1r/1p1b1p1p/p2p1p2/6B1/4qP2/8/PPP3PP/R2Q1RK1 w - - 0 16",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing bishop fork.",
    "moves": [
      "Bxf6+",
      "Be7",
      "Bxh8"
    ],
    "explanation": "1.Bxf6+ Be7 2.Bxh8 uses a bishop fork attacking the d8 king and h8 rook (Keres vs. Kotov), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-fischer-robert-jam-46",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Expert",
    "rating": 1840,
    "fen": "5r2/2p3k1/2Pp2pp/8/P1QNPr1q/8/7P/5R1K w - - 0 37",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Ne6+",
      "Kh7",
      "Nxf8+"
    ],
    "explanation": "1.Ne6+ Kh7 2.Nxf8+ uses a knight fork attacking the f8 rook and g7 king (Tal vs. Fischer), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-larsen-bent-47",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Expert",
    "rating": 1880,
    "fen": "2r5/1b4kp/1Rn2pp1/2q1p3/2PN4/4P1P1/5PBP/6K1 w - - 0 26",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Ne6+",
      "Kh6",
      "Nxc5"
    ],
    "explanation": "1.Ne6+ Kh6 2.Nxc5 uses a knight fork attacking the g7 king and c5 queen (Uhlmann vs. Larsen), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-3p-ribli-zoltan-48",
    "category": "Tactics",
    "theme": "Skewer (Black)",
    "difficulty": "Expert",
    "rating": 1920,
    "fen": "5rk1/1p6/4p3/2PpN3/3Pn1p1/5P2/R1Q1K1P1/7q b - - 2 34",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material by skewering two White pieces.",
    "moves": [
      "Qxg2+",
      "Ke1",
      "Qg1+"
    ],
    "explanation": "1...Qxg2+ 2.Ke1 Qg1+ skewers the e2 king in front of the c2 queen (Torre vs. Ribli)."
  },
  {
    "id": "tac2-b-3p-chigorin-mikhail-49",
    "category": "Tactics",
    "theme": "Skewer (Black)",
    "difficulty": "Expert",
    "rating": 1950,
    "fen": "2kr4/p4pp1/2p4p/4p3/P1n4q/1NP1nP1P/1P2Q1BP/R1KR4 b - - 0 23",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material by skewering two White pieces.",
    "moves": [
      "Rxd1+",
      "Qxd1",
      "Nxd1"
    ],
    "explanation": "1...Rxd1+ 2.Qxd1 Nxd1 skewers the c1 king in front of the a1 rook (Steinitz vs. Chigorin)."
  },
  {
    "id": "tac2-b-3p-bronstein-david-i-50",
    "category": "Tactics",
    "theme": "Bishop Fork (Black)",
    "difficulty": "Expert",
    "rating": 1990,
    "fen": "3r3k/5p1p/1p1q4/p2b1p2/3NB2Q/1P2b1P1/P1R4P/4R2K b - - 0 32",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing bishop fork.",
    "moves": [
      "Bxe4+",
      "Qxe4",
      "fxe4"
    ],
    "explanation": "1...Bxe4+ 2.Qxe4 fxe4 uses a bishop fork attacking the c2 rook and h1 king (Botvinnik vs. Bronstein), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-3p-polugaevsky-lev-51",
    "category": "Tactics",
    "theme": "Pin & Win (Black)",
    "difficulty": "Expert",
    "rating": 2030,
    "fen": "6k1/2q2pp1/p3pb1p/8/1nPNP2P/P5P1/4QB2/6K1 b - - 0 32",
    "sideToMove": "Black",
    "prompt": "Black to move. Exploit a pin to win material cleanly.",
    "moves": [
      "Bxd4",
      "axb4",
      "Qxg3+"
    ],
    "explanation": "1...Bxd4 2.axb4 Qxg3+ pins the f2 bishop to the g1 king (Trois vs. Polugaevsky), winning decisive material."
  },
  {
    "id": "tac2-w-1m-misiano-f-53",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Easy",
    "rating": 1030,
    "fen": "8/pp4kp/5np1/8/3rpN1P/P1N3K1/1P4P1/8 w - - 0 34",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Ne6+"
    ],
    "explanation": "1.Ne6+ uses a knight fork attacking the g7 king and d4 rook (Kim vs. Misiano), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-1m-grischuk-a-54",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Easy",
    "rating": 1070,
    "fen": "8/1bqr3k/p5Nb/1p2p2Q/8/P1P4P/1P3PP1/4R1K1 w - - 0 38",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Nf8+"
    ],
    "explanation": "1.Nf8+ uses a knight fork attacking the d7 rook and h7 king (Karjakin vs. Grischuk), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-1m-geller-efim-p-55",
    "category": "Tactics",
    "theme": "Knight Fork (Black)",
    "difficulty": "Easy",
    "rating": 1110,
    "fen": "8/p1p1N2p/1p6/4k1p1/4Pp1n/1P3P2/P1PK3P/6R1 b - - 0 32",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing knight fork.",
    "moves": [
      "Nxf3+"
    ],
    "explanation": "1...Nxf3+ uses a knight fork attacking the d2 king and g1 rook (Filip vs. Geller), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-1m-smyslov-vassily-56",
    "category": "Tactics",
    "theme": "Knight Fork",
    "difficulty": "Easy",
    "rating": 910,
    "fen": "r1bb3k/p4rpp/2p2n1N/8/2p5/2B2N2/1PPK1PPP/q2R3R w - - 0 21",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing knight fork.",
    "moves": [
      "Nxf7+"
    ],
    "explanation": "1.Nxf7+ uses a knight fork attacking the d8 bishop and h8 king (Tal vs. Smyslov), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-3p-anderssen-adolf-57",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Expert",
    "rating": 1920,
    "fen": "r5k1/pb1p2p1/1p2p1p1/2b5/5BPq/P1N2R1P/1PP3K1/R2Q4 b - - 0 20",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qf2+",
      "Kh1",
      "Bxf3+"
    ],
    "explanation": "1...Qf2+ 2.Kh1 Bxf3+ uses a queen fork attacking the f3 rook and g2 king (Von Heydebrand und der L vs. Anderssen), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-mayet-carl-58",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Expert",
    "rating": 1960,
    "fen": "1r1q1k1r/p2B1ppp/3pP3/3Q4/8/8/P4PPP/bN3RK1 w - - 0 18",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qxd6+",
      "Kg8",
      "e7"
    ],
    "explanation": "1.Qxd6+ Kg8 2.e7 uses a queen fork attacking the b8 rook and f8 king (Anderssen vs. Mayet), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-davidov-mikhail-59",
    "category": "Tactics",
    "theme": "Mating Sacrifice",
    "difficulty": "Medium",
    "rating": 1180,
    "fen": "rk2r3/ppp1np1p/4B3/2N5/3Q2bq/3P4/PPP5/5RK1 w - - 8 26",
    "sideToMove": "White",
    "prompt": "White to move. Find the forcing sequence to deliver checkmate in two.",
    "moves": [
      "Na6+",
      "bxa6",
      "Qb4#"
    ],
    "explanation": "1.Na6+ bxa6 2.Qb4# forces checkmate in two moves (Chigorin vs. Davidov), leaving Black with no defense."
  },
  {
    "id": "tac2-w-3p-yakubovich-60",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Expert",
    "rating": 2030,
    "fen": "5qrk/p3b1rp/4P2Q/5P2/1pp5/5PR1/P6P/B6K w - - 0 34",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qxh7+",
      "Kxh7",
      "Rh3+"
    ],
    "explanation": "1.Qxh7+ Kxh7 2.Rh3+ uses a queen fork attacking the g8 rook and h8 king (Chigorin vs. Yakubovich), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-3p-schiffers-emanuel--61",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Expert",
    "rating": 2070,
    "fen": "5r1k/1ppqn3/6pb/p3p3/4P3/P2P1Q2/1P2KP2/7R w - - 0 32",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qxf8+",
      "Ng8",
      "Rxh6+"
    ],
    "explanation": "1.Qxf8+ Ng8 2.Rxh6+ uses a queen fork attacking the h8 king and e7 knight (Chigorin vs. Schiffers), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-3p-morphy-paul-62",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Expert",
    "rating": 2100,
    "fen": "r2qk2r/p1p2ppp/2p5/4P3/2Q1p1b1/4P1P1/PPP4P/RN2K2R b KQkq - 0 15",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qd1+",
      "Kf2",
      "Qf3+"
    ],
    "explanation": "1...Qd1+ 2.Kf2 Qf3+ uses a queen fork attacking the b1 knight and e1 king (Lichtenhein vs. Morphy), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-3p-szabo-laszlo-63",
    "category": "Tactics",
    "theme": "Deflection / Decoy Sacrifice (Black)",
    "difficulty": "Expert",
    "rating": 1810,
    "fen": "3r2k1/6pp/p1R1P3/P2p4/3P4/1B3Pq1/1P3QPr/6K1 b - - 4 31",
    "sideToMove": "Black",
    "prompt": "Black to move. Find the forcing sacrifice to deflect White’s defense and win material.",
    "moves": [
      "Rh1+",
      "Kxh1",
      "Qxf2"
    ],
    "explanation": "1...Rh1+ 2.Kxh1 Qxf2 sacrifices the rook on h1 to deflect White’s pieces (Boleslavsky vs. Szabo), winning the queen on f2."
  },
  {
    "id": "tac2-b-3p-steinitz-william-64",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Expert",
    "rating": 1850,
    "fen": "3B2k1/6pp/p1p1q3/1pb5/5p2/1PPQ3P/P4NP1/6K1 b - - 0 30",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qe1+",
      "Kh2",
      "Bxf2"
    ],
    "explanation": "1...Qe1+ 2.Kh2 Bxf2 uses a queen fork attacking the f2 knight and g1 king (Walbrodt vs. Steinitz), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-3p-beliavsky-alexande-65",
    "category": "Tactics",
    "theme": "Deflection / Decoy Sacrifice (Black)",
    "difficulty": "Expert",
    "rating": 1890,
    "fen": "4b3/pkp5/2pqP2p/2Np4/1P1Pnr1P/2Q2N2/1KP5/4R3 b - - 4 44",
    "sideToMove": "Black",
    "prompt": "Black to move. Find the forcing sacrifice to deflect White’s defense and win material.",
    "moves": [
      "Qxc5",
      "bxc5",
      "Nxc3"
    ],
    "explanation": "1...Qxc5 2.bxc5 Nxc3 sacrifices the queen on c5 to deflect White’s pieces (Anand vs. Beliavsky), winning the queen on c3."
  },
  {
    "id": "tac2-b-3p-shirov-alexei-66",
    "category": "Tactics",
    "theme": "Deflection / Decoy Sacrifice (Black)",
    "difficulty": "Expert",
    "rating": 1920,
    "fen": "1nkr4/2p2p2/p3b2p/P1p1N3/q1PrP1P1/5R1P/1P1NQ3/1K1R4 b - - 4 30",
    "sideToMove": "Black",
    "prompt": "Black to move. Find the forcing sacrifice to deflect White’s defense and win material.",
    "moves": [
      "Rxe4",
      "Qxe4",
      "Qxd1+"
    ],
    "explanation": "1...Rxe4 2.Qxe4 Qxd1+ sacrifices the rook on e4 to deflect White’s pieces (Ivanchuk vs. Shirov), winning the rook on d1."
  },
  {
    "id": "tac2-b-3p-anderssen-adolf-67",
    "category": "Tactics",
    "theme": "Deflection / Decoy Sacrifice (Black)",
    "difficulty": "Expert",
    "rating": 1960,
    "fen": "3rk3/p4p2/2p5/1p2p3/4PP1p/2P1R2b/PP4rB/5R1K b - - 1 29",
    "sideToMove": "Black",
    "prompt": "Black to move. Find the forcing sacrifice to deflect White’s defense and win material.",
    "moves": [
      "Rxh2+",
      "Kxh2",
      "Bxf1"
    ],
    "explanation": "1...Rxh2+ 2.Kxh2 Bxf1 sacrifices the rook on h2 to deflect White’s pieces (Loewenthal vs. Anderssen), winning the rook on f1."
  },
  {
    "id": "tac2-b-3p-lasker-emanuel-68",
    "category": "Tactics",
    "theme": "Deflection / Decoy Sacrifice (Black)",
    "difficulty": "Expert",
    "rating": 2000,
    "fen": "3rr1k1/5pp1/pq1B2p1/1pp5/1n2P3/6P1/1P3QBP/2RR2K1 b - - 0 28",
    "sideToMove": "Black",
    "prompt": "Black to move. Find the forcing sacrifice to deflect White’s defense and win material.",
    "moves": [
      "Rxd6",
      "Rxd6",
      "Qxd6"
    ],
    "explanation": "1...Rxd6 2.Rxd6 Qxd6 sacrifices the rook on d6 to deflect White’s pieces (Verlinsky vs. Lasker), winning the rook on d6."
  },
  {
    "id": "tac2-b-3p-pillsbury-harry-ne-69",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Expert",
    "rating": 2030,
    "fen": "5rk1/ppp3pp/3b4/3pn3/5pq1/2PB4/PP1K1P1P/R1BQ1N2 b - - 5 23",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qxd1+",
      "Kxd1",
      "Nxd3"
    ],
    "explanation": "1...Qxd1+ 2.Kxd1 Nxd3 uses a queen fork attacking the d2 king and c1 bishop (Lasker vs. Pillsbury), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-3p-bird-henry-edward-70",
    "category": "Tactics",
    "theme": "Deflection / Decoy Sacrifice (Black)",
    "difficulty": "Expert",
    "rating": 2070,
    "fen": "3qr1k1/4r1pp/1p1p1pn1/pbbP1N2/4PP2/P7/1B1Q2PP/1NR1R2K b - - 4 30",
    "sideToMove": "Black",
    "prompt": "Black to move. Find the forcing sacrifice to deflect White’s defense and win material.",
    "moves": [
      "Rxe4",
      "Rxe4",
      "Rxe4"
    ],
    "explanation": "1...Rxe4 2.Rxe4 Rxe4 sacrifices the rook on e4 to deflect White’s pieces (Anderssen vs. Bird), winning the rook on e4."
  },
  {
    "id": "tac2-b-3p-winawer-szymon-71",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Expert",
    "rating": 2110,
    "fen": "5rk1/7p/4n1p1/3pPp2/q1pB1P1P/2R1Q3/6K1/1R6 b - - 0 43",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qa2+",
      "Kg3",
      "Qxb1"
    ],
    "explanation": "1...Qa2+ 2.Kg3 Qxb1 uses a queen fork attacking the g2 king and b1 rook (Zukertort vs. Winawer), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-3p-schlechter-carl-72",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Expert",
    "rating": 1810,
    "fen": "8/5ppk/pR5p/2Np1b2/3q1Q2/5PKP/8/8 b - - 0 35",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qg1+",
      "Kh4",
      "g5+"
    ],
    "explanation": "1...Qg1+ 2.Kh4 g5+ uses a queen fork attacking the c5 knight and g3 king (Burn vs. Schlechter), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-3p-caruana-f-73",
    "category": "Tactics",
    "theme": "Deflection / Decoy Sacrifice (Black)",
    "difficulty": "Expert",
    "rating": 1850,
    "fen": "3qr1k1/4rpp1/b2p2np/p1pP4/Pp2N1P1/1Pb1BN1P/2B2P1K/1RRQ4 b - - 0 27",
    "sideToMove": "Black",
    "prompt": "Black to move. Find the forcing sacrifice to deflect White’s defense and win material.",
    "moves": [
      "Rxe4",
      "Bxe4",
      "Rxe4"
    ],
    "explanation": "1...Rxe4 2.Bxe4 Rxe4 sacrifices the rook on e4 to deflect White’s pieces (Karjakin vs. Caruana), winning the bishop on e4."
  },
  {
    "id": "tac2-w-1m-gelfand-b-74",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "r7/ppq3k1/2p1p3/5Q2/1R3b2/2P5/P4PP1/5K2 w - - 0 27",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qg4+"
    ],
    "explanation": "1.Qg4+ uses a queen fork attacking the g7 king and f4 bishop (Radjabov vs. Gelfand), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-1m-bruzon-l-75",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Easy",
    "rating": 930,
    "fen": "8/1r4bk/p2qp2p/3r1p2/5P2/1N4Q1/PPR3RP/1K6 w - - 0 41",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qg6+"
    ],
    "explanation": "1.Qg6+ uses a queen fork attacking the g7 bishop and h7 king (Pelletier vs. Bruzon), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-1m-carlsen-m-76",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Easy",
    "rating": 960,
    "fen": "3r2k1/5p2/p5p1/3p4/3Q2b1/1P4Pq/P3P3/2R1R1K1 b - - 0 39",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qxg3+"
    ],
    "explanation": "1...Qxg3+ uses a queen fork attacking the e1 rook and g1 king (Pelletier vs. Carlsen), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-1m-dominguez-perez-l-77",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Easy",
    "rating": 1000,
    "fen": "6k1/3N1p2/3p2p1/3Pp3/1rq5/8/3Q1PK1/7R b - - 3 43",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qg4+"
    ],
    "explanation": "1...Qg4+ uses a queen fork attacking the d7 knight and g2 king (Alekseev vs. Dominguez Perez), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-1m-hausrath-d-78",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Easy",
    "rating": 1040,
    "fen": "r4rk1/pb1pppbp/1pP3p1/4q3/3N4/1B2BP2/PPP3PP/R2Q1RK1 b - - 0 13",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qxe3+"
    ],
    "explanation": "1...Qxe3+ uses a queen fork attacking the d4 knight and b3 bishop (Thomassen vs. Hausrath), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-1m-skoberne-j-79",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Easy",
    "rating": 1070,
    "fen": "5r2/1p1R4/4k1p1/p3p3/7Q/2P4P/Pq3PP1/4K3 w - - 6 39",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qe7+"
    ],
    "explanation": "1.Qe7+ uses a queen fork attacking the f8 rook and e6 king (Rasch vs. Skoberne), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-1m-morozevich-a-80",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Easy",
    "rating": 1110,
    "fen": "5rk1/2p2pp1/p7/R7/P3q2P/4BN2/5PKP/2R5 b - - 0 38",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qg4+"
    ],
    "explanation": "1...Qg4+ uses a queen fork attacking the f3 knight and g2 king (Gelfand vs. Morozevich), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-1m-morozevich-alexand-81",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Easy",
    "rating": 920,
    "fen": "3r3r/pp2Qppp/b1kB1n1q/6n1/5P2/8/1P1R3P/2K1R3 w - - 2 25",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qc7+"
    ],
    "explanation": "1.Qc7+ uses a queen fork attacking the d8 rook and c6 king (Bacrot vs. Morozevich), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-1m-ivanchuk-v-82",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Easy",
    "rating": 950,
    "fen": "r4rk1/5N1p/4PBp1/pp6/1b1p2P1/3BPR1q/PQ6/R2K4 b - - 0 26",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qxf3+"
    ],
    "explanation": "1...Qxf3+ uses a queen fork attacking the f6 bishop and d1 king (Aronian vs. Ivanchuk), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-1m-vallejo-pons-f-83",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Easy",
    "rating": 990,
    "fen": "6k1/1r3rp1/4Q3/p1Bp2Np/b1pP2n1/2p2P2/1qP1K1R1/6R1 w - - 3 38",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qc8+"
    ],
    "explanation": "1.Qc8+ uses a queen fork attacking the g8 king and b7 rook (Karjakin vs. Vallejo Pons), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-1m-bacrot-e-84",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Easy",
    "rating": 1030,
    "fen": "q2r2k1/6p1/3P4/rPpnpQp1/8/6P1/3R1P1P/4R1K1 w - - 0 33",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qe6+"
    ],
    "explanation": "1.Qe6+ uses a queen fork attacking the g8 king and d5 knight (Nielsen vs. Bacrot), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-1m-naiditsch-a-85",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Medium",
    "rating": 1220,
    "fen": "1n3q1k/r2r3p/p3Q3/1p6/8/2P3R1/P4PPP/4R1K1 w - - 5 27",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qf6+"
    ],
    "explanation": "1.Qf6+ uses a queen fork attacking the f8 queen and h8 king (Topalov vs. Naiditsch), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-1m-bronstein-david-i-86",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Medium",
    "rating": 1250,
    "fen": "3q2k1/pb4r1/5ppQ/4n3/4p2R/2P4P/P5B1/6K1 w - - 0 40",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qh8+"
    ],
    "explanation": "1.Qh8+ uses a queen fork attacking the g8 king and g7 rook (Szabo vs. Bronstein), securing a decisive material advantage."
  },
  {
    "id": "tac2-w-1m-kotov-alexander-87",
    "category": "Tactics",
    "theme": "Queen Fork",
    "difficulty": "Medium",
    "rating": 1290,
    "fen": "2rr1b1k/pR2nQ1p/2P1B1p1/4P3/8/1N6/4qPPP/4R1K1 w - - 5 35",
    "sideToMove": "White",
    "prompt": "White to move. Win material with a forcing queen fork.",
    "moves": [
      "Qxf8+"
    ],
    "explanation": "1.Qxf8+ uses a queen fork attacking the d8 rook and h8 king (Reshevsky vs. Kotov), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-1m-szabo-laszlo-88",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Medium",
    "rating": 1330,
    "fen": "3r2k1/4qp2/p5p1/8/5PPp/1Q1R3P/PP1p2K1/3R4 b - - 0 38",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qe2+"
    ],
    "explanation": "1...Qe2+ uses a queen fork attacking the d3 rook and g2 king (Stahlberg vs. Szabo), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-1m-fischer-robert-jam-89",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "R7/2p3qk/1p5p/1N3p2/1P6/P4P2/4B2K/8 b - - 0 41",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qe5+"
    ],
    "explanation": "1...Qe5+ uses a queen fork attacking the b5 knight and e2 bishop (Taimanov vs. Fischer), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-1m-fischer-robert-jam-90",
    "category": "Tactics",
    "theme": "Queen Fork (Black)",
    "difficulty": "Medium",
    "rating": 1400,
    "fen": "r7/2Q4p/5Rpk/8/2P1q3/7P/6P1/6K1 b - - 0 46",
    "sideToMove": "Black",
    "prompt": "Black to move. Win material with a forcing queen fork.",
    "moves": [
      "Qd4+"
    ],
    "explanation": "1...Qd4+ uses a queen fork attacking the f6 rook and g1 king (Taimanov vs. Fischer), securing a decisive material advantage."
  },
  {
    "id": "tac2-b-1m-ciuksyte-d-91",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "2b3k1/7p/p1Q4R/P2q2p1/1p1N4/4n2P/1PP4K/5r2 b - - 6 42",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Qe5#"
    ],
    "explanation": "1...Qe5# delivers immediate checkmate (Arakhamia vs. Ciuksyte), covering all escape squares around the White king."
  },
  {
    "id": "tac2-b-1m-van-wely-l-92",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Medium",
    "rating": 1470,
    "fen": "6k1/8/3n2pp/1pp5/6P1/1P1B3q/3Q1n2/5RK1 b - - 11 48",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Qg3#"
    ],
    "explanation": "1...Qg3# delivers immediate checkmate (Lputian vs. Van Wely), covering all escape squares around the White king."
  },
  {
    "id": "tac2-b-1m-movsesian-s-93",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Medium",
    "rating": 1200,
    "fen": "3Q1bk1/5p2/4p1p1/3pP3/3P1K2/3qB1P1/4BP2/8 b - - 0 48",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Qf5#"
    ],
    "explanation": "1...Qf5# delivers immediate checkmate (Iordachescu vs. Movsesian), covering all escape squares around the White king."
  },
  {
    "id": "tac2-b-1m-alekhine-alexander-94",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Medium",
    "rating": 1240,
    "fen": "1k6/2q2p2/pp4r1/2bPp3/2p1P3/2P2Qpr/P1B3K1/2B1RR2 b - - 1 30",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Rh2#"
    ],
    "explanation": "1...Rh2# delivers immediate checkmate (Bogoljubow vs. Alekhine), covering all escape squares around the White king."
  },
  {
    "id": "tac2-b-1m-vaganian-r-95",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Medium",
    "rating": 1280,
    "fen": "8/1R3p2/2b1pB2/p1k1P2P/P2p3R/2pK1P2/2P2r2/8 b - - 0 40",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Rd2#"
    ],
    "explanation": "1...Rd2# delivers immediate checkmate (Polgar J vs. Vaganian R), covering all escape squares around the White king."
  },
  {
    "id": "tac2-b-1m-inarkiev-e-96",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Medium",
    "rating": 1310,
    "fen": "8/p4rpk/N6p/R7/2p4n/2B5/PP1Rr2P/6K1 b - - 8 42",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Re1#"
    ],
    "explanation": "1...Re1# delivers immediate checkmate (Gustafsson vs. Inarkiev), covering all escape squares around the White king."
  },
  {
    "id": "tac2-b-1m-akobian-v-97",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "6r1/4b3/3pPnqk/p1p2p2/P1B1pP1p/1PB4P/6P1/3Q1R1K b - - 1 43",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Qxg2#"
    ],
    "explanation": "1...Qxg2# delivers immediate checkmate (Tregubov vs. Akobian), covering all escape squares around the White king."
  },
  {
    "id": "tac2-b-1m-nihal-sarin-98",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "6k1/2p2pp1/2p5/2N2P2/1QPp3p/3P1q1n/r5RP/N5RK b - - 6 42",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Nf2#"
    ],
    "explanation": "1...Nf2# delivers immediate checkmate (Bachmann vs. Nihal), covering all escape squares around the White king."
  },
  {
    "id": "tac2-b-1m-carlsen-m-99",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "8/2N2k2/1p1p4/p3b2p/2P3p1/1P3nB1/P4RKP/2r5 b - - 4 40",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Rg1#"
    ],
    "explanation": "1...Rg1# delivers immediate checkmate (Hammer vs. Carlsen), covering all escape squares around the White king."
  },
  {
    "id": "tac2-w-1m-albin-adolf-100",
    "category": "Tactics",
    "theme": "Mate in One",
    "difficulty": "Medium",
    "rating": 1460,
    "fen": "4q3/r5p1/k1p5/PpQpP3/1P1P3p/2P4P/6P1/7K w - - 0 38",
    "sideToMove": "White",
    "prompt": "White to move and deliver checkmate in one.",
    "moves": [
      "Qb6#"
    ],
    "explanation": "1.Qb6# delivers immediate checkmate (Nimzowitsch vs. Albin), covering all escape squares around the Black king."
  },
  {
    "id": "tac2-b-1m-robey-j-101",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Medium",
    "rating": 1190,
    "fen": "3r3k/5ppp/2p2R2/4p1B1/p3P3/2P1K3/2q3PP/4Q3 b - - 1 28",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Rd3#"
    ],
    "explanation": "1...Rd3# delivers immediate checkmate (Deacon vs. Robey), covering all escape squares around the White king."
  },
  {
    "id": "tac2-w-1m-robey-j-102",
    "category": "Tactics",
    "theme": "Mate in One",
    "difficulty": "Medium",
    "rating": 1220,
    "fen": "8/b1pq2Q1/p2p2B1/4ppk1/1n2P3/2PP2PP/8/7K w - - 2 37",
    "sideToMove": "White",
    "prompt": "White to move and deliver checkmate in one.",
    "moves": [
      "Bf7#"
    ],
    "explanation": "1.Bf7# delivers immediate checkmate (Steinitz vs. Robey), covering all escape squares around the Black king."
  },
  {
    "id": "tac2-w-1m-hanham-james-moore-103",
    "category": "Tactics",
    "theme": "Mate in One",
    "difficulty": "Medium",
    "rating": 1260,
    "fen": "r4rk1/1bb2p1p/2p2B1p/1pq3N1/p2N4/P1PB4/1P4PP/3R1RK1 w - - 0 25",
    "sideToMove": "White",
    "prompt": "White to move and deliver checkmate in one.",
    "moves": [
      "Bxh7#"
    ],
    "explanation": "1.Bxh7# delivers immediate checkmate (Delmar vs. Hanham), covering all escape squares around the Black king."
  },
  {
    "id": "tac2-w-1m-hanham-james-moore-104",
    "category": "Tactics",
    "theme": "Mate in One",
    "difficulty": "Medium",
    "rating": 1300,
    "fen": "r4rk1/1b2qpBp/1bp2p2/p1n1pP2/Pp6/3P2R1/BPP1Q1PP/R6K w - - 5 24",
    "sideToMove": "White",
    "prompt": "White to move and deliver checkmate in one.",
    "moves": [
      "Bxf6#"
    ],
    "explanation": "1.Bxf6# delivers immediate checkmate (Gossip vs. Hanham), covering all escape squares around the Black king."
  },
  {
    "id": "tac2-b-1m-heral-josef-105",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Expert",
    "rating": 2050,
    "fen": "8/4p3/1k5p/1P4p1/1KP1p1P1/1Q5P/5P2/q7 b - - 5 49",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Qa5#"
    ],
    "explanation": "1...Qa5# delivers immediate checkmate (Anderssen vs. Heral), covering all escape squares around the White king."
  },
  {
    "id": "tac2-w-1m-walbrodt-carl-augu-106",
    "category": "Tactics",
    "theme": "Mate in One",
    "difficulty": "Expert",
    "rating": 2080,
    "fen": "4Rqk1/5pnp/p2b1Q2/1p4Pp/8/8/PBr2P2/6K1 w - - 0 43",
    "sideToMove": "White",
    "prompt": "White to move and deliver checkmate in one.",
    "moves": [
      "Qxg7#"
    ],
    "explanation": "1.Qxg7# delivers immediate checkmate (Burn vs. Walbrodt), covering all escape squares around the Black king."
  },
  {
    "id": "tac2-b-1m-fischer-robert-jam-107",
    "category": "Tactics",
    "theme": "Mate in One (Black)",
    "difficulty": "Expert",
    "rating": 2120,
    "fen": "8/8/2P5/3K1k2/2R3p1/2q5/8/8 b - - 1 53",
    "sideToMove": "Black",
    "prompt": "Black to move and deliver checkmate in one.",
    "moves": [
      "Qe5#"
    ],
    "explanation": "1...Qe5# delivers immediate checkmate (Keres vs. Fischer), covering all escape squares around the White king."
  },
  {
    "id": "tac2-w-1m-kortschnoj-viktor-108",
    "category": "Tactics",
    "theme": "Mate in One",
    "difficulty": "Expert",
    "rating": 1830,
    "fen": "2r2r1k/3R1p2/p1P3R1/1p2q1Pp/7P/5Q2/P4PK1/8 w - - 1 37",
    "sideToMove": "White",
    "prompt": "White to move and deliver checkmate in one.",
    "moves": [
      "Qxh5#"
    ],
    "explanation": "1.Qxh5# delivers immediate checkmate (Petrosian vs. Kortschnoj), covering all escape squares around the Black king."
  },
  {
    "id": "tac2-w-1m-stoltz-goesta-109",
    "category": "Tactics",
    "theme": "Mate in One",
    "difficulty": "Expert",
    "rating": 1860,
    "fen": "2r5/1R5p/p2kr1p1/3nN3/3Q1pq1/8/P5PP/6K1 w - - 6 34",
    "sideToMove": "White",
    "prompt": "White to move and deliver checkmate in one.",
    "moves": [
      "Rd7#"
    ],
    "explanation": "1.Rd7# delivers immediate checkmate (Szabo vs. Stoltz), covering all escape squares around the Black king."
  },
  {
    "id": "tac2-w-1m-tal-mihail-110",
    "category": "Tactics",
    "theme": "Mate in One",
    "difficulty": "Expert",
    "rating": 1900,
    "fen": "6rk/8/pp2N1p1/3p3p/P3nQ2/8/1PP3PP/3b3K w - h6 0 37",
    "sideToMove": "White",
    "prompt": "White to move and deliver checkmate in one.",
    "moves": [
      "Qh6#"
    ],
    "explanation": "1.Qh6# delivers immediate checkmate (Estevez vs. Tal), covering all escape squares around the Black king."
  },
  {
    "id": "tac2-w-1m-karjakin-sergey-111",
    "category": "Tactics",
    "theme": "Forcing Check Tactic",
    "difficulty": "Expert",
    "rating": 1940,
    "fen": "2R5/4bppk/1p1p4/5R1P/4PQ2/5P2/r4q1P/7K w - - 5 50",
    "sideToMove": "White",
    "prompt": "White to move. Find the forcing check that wins decisive material.",
    "moves": [
      "Qh6+"
    ],
    "explanation": "1.Qh6+ seizes the initiative with a forcing check by the queen on h6 (Carlsen vs. Karjakin), winning clear material."
  },
  {
    "id": "tac2-b-1m-carlsen-m-112",
    "category": "Tactics",
    "theme": "Forcing Check Tactic (Black)",
    "difficulty": "Expert",
    "rating": 1970,
    "fen": "2k5/p5B1/p1p2pp1/8/1PP3b1/4b2P/2Q3PK/3r4 b - - 1 31",
    "sideToMove": "Black",
    "prompt": "Black to move. Find the forcing check that wins decisive material.",
    "moves": [
      "Bf4+"
    ],
    "explanation": "1...Bf4+ seizes the initiative with a forcing check by the bishop on f4 (Morozevich vs. Carlsen), winning clear material."
  },
  {
    "id": "tac2-w-1m-skoberne-j-113",
    "category": "Tactics",
    "theme": "Forcing Check Tactic",
    "difficulty": "Expert",
    "rating": 2010,
    "fen": "5Q2/p6p/1n2p1kq/1N1nb2p/8/P7/1PP3PP/5R1K w - - 8 34",
    "sideToMove": "White",
    "prompt": "White to move. Find the forcing check that wins decisive material.",
    "moves": [
      "Qg8+"
    ],
    "explanation": "1.Qg8+ seizes the initiative with a forcing check by the queen on g8 (Thomassen vs. Skoberne), winning clear material."
  },
  {
    "id": "tac2-w-1m-weisbuch-u-114",
    "category": "Tactics",
    "theme": "Forcing Check Tactic",
    "difficulty": "Expert",
    "rating": 2050,
    "fen": "r5r1/pp1b2nQ/3N2p1/2pPn1k1/2P5/7P/PP4B1/6K1 w - - 0 34",
    "sideToMove": "White",
    "prompt": "White to move. Find the forcing check that wins decisive material.",
    "moves": [
      "Ne4+"
    ],
    "explanation": "1.Ne4+ seizes the initiative with a forcing check by the knight on e4 (Avrukh vs. Weisbuch), winning clear material."
  },
  {
    "id": "tac2-b-1m-giri-anish-115",
    "category": "Tactics",
    "theme": "Forcing Check Tactic (Black)",
    "difficulty": "Expert",
    "rating": 2090,
    "fen": "8/8/4p2k/5rp1/4R3/2P1K3/3Q2Pq/8 b - - 3 50",
    "sideToMove": "Black",
    "prompt": "Black to move. Find the forcing check that wins decisive material.",
    "moves": [
      "Qg3+"
    ],
    "explanation": "1...Qg3+ seizes the initiative with a forcing check by the queen on g3 (Morozevich vs. Giri), winning clear material."
  },
  {
    "id": "tac2-w-1m-lupulescu-c-116",
    "category": "Tactics",
    "theme": "Forcing Check Tactic",
    "difficulty": "Expert",
    "rating": 1790,
    "fen": "5rk1/p2R1N2/1b2pp1p/6pP/8/2P5/PP4P1/1K6 w - - 4 27",
    "sideToMove": "White",
    "prompt": "White to move. Find the forcing check that wins decisive material.",
    "moves": [
      "Nxh6+"
    ],
    "explanation": "1.Nxh6+ seizes the initiative with a forcing check by the knight on h6 (Caruana vs. Lupulescu), winning clear material."
  },
  {
    "id": "tac2-b-1m-mamedyarov-s-117",
    "category": "Tactics",
    "theme": "Forcing Check Tactic (Black)",
    "difficulty": "Expert",
    "rating": 1830,
    "fen": "8/p1R5/1pb1k1p1/1P2p3/P7/2r5/3R2P1/7K b - - 0 41",
    "sideToMove": "Black",
    "prompt": "Black to move. Find the forcing check that wins decisive material.",
    "moves": [
      "Bxg2+"
    ],
    "explanation": "1...Bxg2+ seizes the initiative with a forcing check by the bishop on g2 (Caruana vs. Mamedyarov), winning clear material."
  },
  {
    "id": "tac2-w-1m-deep-junior-6-118",
    "category": "Tactics",
    "theme": "Forcing Check Tactic",
    "difficulty": "Expert",
    "rating": 1870,
    "fen": "2b2qk1/7R/2n1pbB1/p2p1PN1/2pPP3/2P5/P2B4/2K5 w - - 1 32",
    "sideToMove": "White",
    "prompt": "White to move. Find the forcing check that wins decisive material.",
    "moves": [
      "Bf7+"
    ],
    "explanation": "1.Bf7+ seizes the initiative with a forcing check by the bishop on f7 (Kramnik vs. DEEP JUNIOR 6), winning clear material."
  },
  {
    "id": "tac2-w-1m-adams-mi-119",
    "category": "Tactics",
    "theme": "Forcing Check Tactic",
    "difficulty": "Expert",
    "rating": 1900,
    "fen": "4rrk1/6pp/3b4/1ppb4/7Q/2P1BqP1/1PB2P1P/2R1R1K1 w - - 2 29",
    "sideToMove": "White",
    "prompt": "White to move. Find the forcing check that wins decisive material.",
    "moves": [
      "Qxh7+"
    ],
    "explanation": "1.Qxh7+ seizes the initiative with a forcing check by the queen on h7 (Anand vs. Adams), winning clear material."
  }
];
