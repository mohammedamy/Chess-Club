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
  }
];
