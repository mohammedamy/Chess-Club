export const MIDDLEGAME_LESSONS = [
  {
    "id": "greek-gift",
    "name": "The Greek Gift Sacrifice (Bxh7+)",
    "category": "Attacking the King",
    "level": "Club",
    "color": "White",
    "summary": "When Black castles kingside without a knight on f6 and White controls h7, e5, and g5, Bxh7+ shatters the king shelter for a decisive attack.",
    "keyIdeas": [
      "Ensure ...Nf6 cannot defend h7",
      "Follow Bxh7+ Kxh7 with Ng5+ and Qh5",
      "Bring the bishop/rook into the h-file if needed",
      "Keep the center closed enough so Black cannot counterattack"
    ],
    "line": [
      {
        "move": "Bxh7+",
        "text": "The Greek Gift! White tears open the h-file while Black's knight on d7 cannot defend h7."
      },
      {
        "move": "Kxh7",
        "text": "Accepting the bishop allows Ng5+ with tempo."
      },
      {
        "move": "Ng5+",
        "text": "White leaps forward with check, opening the d1-h5 diagonal."
      },
      {
        "move": "Kg8",
        "text": "Retreating to g8 (after ...Kg6, Qd3+ or h4-h5 hunts the king)."
      },
      {
        "move": "Qh5",
        "text": "Threatening Qh7# immediately."
      },
      {
        "move": "Qxg5",
        "text": "Black is forced to give up the queen just to stop checkmate on h7."
      },
      {
        "move": "Qxg5",
        "text": "White wins a queen for two minor pieces and keeps a crushing initiative."
      }
    ],
    "startFen": "rnb2rk1/pp1nqppp/4p3/3pP3/3p1P2/2NB1N2/PPP3PP/R2QK2R w KQ - 0 10"
  },
  {
    "id": "iqp-d5-break",
    "name": "The Isolated Queen's Pawn: d4–d5 Break",
    "category": "Pawn Structures",
    "level": "Club",
    "color": "White",
    "summary": "Playing with an Isolated Queen's Pawn (IQP) trades long-term endgame structure for central space, active piece play, and the thematic d4-d5 breakthrough.",
    "keyIdeas": [
      "Use e5 outpost and open c/e-files",
      "Avoid premature piece trades",
      "Dissolve the weakness via d4-d5 at the right moment",
      "Generate kingside/central tactics"
    ],
    "line": [
      {
        "move": "Be4",
        "text": "Centralizing the bishop and increasing pressure against d5."
      },
      {
        "move": "Nce7",
        "text": "Black reinforces d5 to blockade the isolated pawn."
      },
      {
        "move": "Qd3",
        "text": "Battery against h7 forces a concession in Black's kingside."
      },
      {
        "move": "g6",
        "text": "Weakening the dark squares around Black's king."
      },
      {
        "move": "Bh6",
        "text": "Seizing the weakened dark squares with tempo on f8."
      },
      {
        "move": "Re8",
        "text": "Stepping off the attack."
      },
      {
        "move": "Ne5",
        "text": "Planting the knight on the classic e5 IQP outpost!"
      },
      {
        "move": "Bg7",
        "text": "Trying to trade off White's dark-squared attacker."
      },
      {
        "move": "Bxg7",
        "text": "Trading defenders before striking."
      },
      {
        "move": "Kxg7",
        "text": "Black recaptures, still tied to d5."
      }
    ],
    "startFen": "r1bq1rk1/pp3ppp/2n1pb2/3n4/3P4/2NB1N2/PP3PPP/R1BQR1K1 w - - 6 11"
  },
  {
    "id": "blockade-iqp",
    "name": "Blockading the Isolated Pawn",
    "category": "Pawn Structures",
    "level": "Club",
    "color": "Black",
    "summary": "Nimzowitsch's classic prescription against an IQP: restrain d5 first, occupy d5 with a knight, trade minor pieces, and target the fixed pawn.",
    "keyIdeas": [
      "Control d5 with pieces and pawns",
      "Trade minor pieces to strip attacking potential",
      "Double heavy pieces against d4",
      "Transition to a favorable endgame"
    ],
    "line": [
      {
        "move": "Bg5",
        "text": "White pins the f6 knight to pressure d5."
      },
      {
        "move": "d4",
        "text": "Black dynamically advances when White has not yet guarded d4 with a piece!"
      },
      {
        "move": "Ne4",
        "text": "Counter-hitting c5 and f6."
      },
      {
        "move": "Be7",
        "text": "Breaking the pin and keeping material balanced."
      },
      {
        "move": "Nxf6+",
        "text": "White removes the defender of d4."
      },
      {
        "move": "Bxf6",
        "text": "Recapturing cleanly while keeping the d4 space wedge."
      },
      {
        "move": "Bxf6",
        "text": "White trades bishops."
      },
      {
        "move": "Qxf6",
        "text": "Black's queen lands on an active central diagonal with comfortable piece play."
      }
    ],
    "startFen": "r1bq1rk1/pp3ppp/2n2n2/2bp4/8/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 10"
  },
  {
    "id": "minority-attack",
    "name": "The Carlsbad Minority Attack",
    "category": "Strategic Plans",
    "level": "Advanced",
    "color": "White",
    "summary": "Advance two queenside pawns (a4 + b4-b5) against Black's three (a6/b7/c6) to saddle Black with a backward c6-pawn or isolated d5-pawn.",
    "keyIdeas": [
      "Place rooks on b1 and c1",
      "Push b2-b4-b5 to create a structural target",
      "Target c6 or c5 after bxc6",
      "Stay alert against Black's kingside ...Ne4 counterplay"
    ],
    "line": [
      {
        "move": "Rab1",
        "text": "Preparing b4 without dropping support for the b-pawn."
      },
      {
        "move": "Ne4",
        "text": "Black seeks counterplay by trading dark-squared bishops."
      },
      {
        "move": "Bxe7",
        "text": "White exchanges off Black's defending bishop."
      },
      {
        "move": "Qxe7",
        "text": "Queen recaptures."
      },
      {
        "move": "b4",
        "text": "Launching the minority attack!"
      },
      {
        "move": "Nxc3",
        "text": "Black trades knights to ease cramp."
      },
      {
        "move": "Qxc3",
        "text": "Queen recaptures while watching c6."
      },
      {
        "move": "Bg4",
        "text": "Developing actively."
      },
      {
        "move": "Ne5",
        "text": "Centralizing and blocking Black's kingside coordination before pushing b5."
      },
      {
        "move": "Bh5",
        "text": "Keeping the bishop active."
      },
      {
        "move": "b5",
        "text": "The thematic break! Black must now endure a weak c6 or isolated d5 pawn."
      }
    ],
    "startFen": "r1bqrnk1/pp2bppp/2p2n2/3p2B1/3P4/2NBPN2/PPQ2PPP/R4RK1 w - - 8 11"
  },
  {
    "id": "opposite-castling",
    "name": "Opposite-Side Castling Pawn Storm",
    "category": "Attacking the King",
    "level": "Club",
    "color": "White",
    "summary": "In Sicilian Dragon positions with opposite-side castling, speed decides everything: launch h4-h5 and trade the fianchetto bishop on g7 with Bh6.",
    "keyIdeas": [
      "Launch g4/h4 pawn storms without exposing your own king",
      "Exchange the key defensive fianchetto bishop (Bh6)",
      "Open the h-file for the queen and rook",
      "Respect Black's ...Rxc3 queenside exchange sac"
    ],
    "line": [
      {
        "move": "g4",
        "text": "Beginning the kingside pawn avalanche."
      },
      {
        "move": "Rc8",
        "text": "Black activates along the c-file."
      },
      {
        "move": "h4",
        "text": "Preparing h5 to pry open the h-file."
      },
      {
        "move": "Ne5",
        "text": "Aiming for c4."
      },
      {
        "move": "h5",
        "text": "Striking at the g6 hook!"
      },
      {
        "move": "Nc4",
        "text": "Attacking the e3 bishop."
      },
      {
        "move": "Bxc4",
        "text": "Removing the annoying knight immediately."
      },
      {
        "move": "Rxc4",
        "text": "Rook recaptures."
      },
      {
        "move": "Bh6",
        "text": "Forcing off Black's crown jewel defender on g7!"
      }
    ],
    "startFen": "r2q1rk1/pp1bppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R w - - 5 10"
  },
  {
    "id": "central-breakthrough-e5",
    "name": "The Central e4–e5 Breakthrough",
    "category": "Central Play",
    "level": "Club",
    "color": "White",
    "summary": "In Closed Spanish middlegames, White uses d4-d5 or dxe5 to claim central space and reroute Nb1-d2-f1-g3 toward the kingside.",
    "keyIdeas": [
      "Maintain central tension until pieces are harmonized",
      "Reroute Nb1-d2-f1-g3/e3",
      "Exploit weak f5/d5 outposts",
      "Strike when Black's queenside pieces are misplaced"
    ],
    "line": [
      {
        "move": "Nbd2",
        "text": "Beginning the classic Ruy López knight tour."
      },
      {
        "move": "Nc6",
        "text": "Black brings the knight back toward the center."
      },
      {
        "move": "d5",
        "text": "Closing the center to gain space and launch kingside play!"
      },
      {
        "move": "Nd8",
        "text": "Preparing ...Ne8 and ...f5."
      },
      {
        "move": "a4",
        "text": "Opening queenside tension before shifting kingside."
      },
      {
        "move": "Rb8",
        "text": "Defending b5 indirectly."
      },
      {
        "move": "Nf1",
        "text": "Continuing the knight maneuver toward g3 or e3."
      },
      {
        "move": "Ne8",
        "text": "Preparing ...g6 and ...Ng7."
      },
      {
        "move": "g4",
        "text": "Claiming kingside space to clamp down on ...f5."
      }
    ],
    "startFen": "r1b2rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12"
  },
  {
    "id": "rook-lift",
    "name": "The Classic Third-Rank Rook Lift",
    "category": "Attacking the King",
    "level": "Advanced",
    "color": "White",
    "summary": "When development lead and open files favor the attacker, lifting a rook across the 3rd rank (Rf3-h3 or Ra3-g3) adds overwhelming firepower.",
    "keyIdeas": [
      "Sacrifice a pawn for rapid development",
      "Swing rooks laterally across the 3rd rank",
      "Target g7 and h7 simultaneously",
      "Prevent the opponent from completing castling"
    ],
    "line": [
      {
        "move": "Re1",
        "text": "Developing with tempo against the exposed Black queen."
      },
      {
        "move": "Qb8",
        "text": "Retreating to avoid discoveries on the e-file."
      },
      {
        "move": "Qg4",
        "text": "Pressuring g7 and keeping Black's f8 bishop trapped."
      },
      {
        "move": "Nf6",
        "text": "Developing and guarding g7."
      },
      {
        "move": "Bf4",
        "text": "Developing another piece with tempo on the queen."
      },
      {
        "move": "Qd8",
        "text": "Forced back to d8."
      },
      {
        "move": "Nb5",
        "text": "Threatening Nc7+! White's lead in development dominates."
      },
      {
        "move": "Bxb5",
        "text": "Black eliminates the knight."
      },
      {
        "move": "Bxb5+",
        "text": "Check — Black's king loses castling forever."
      }
    ],
    "startFen": "r3kbnr/pp1b1ppp/4p3/3pq3/8/2NB4/PP3PPP/R1BQ1RK1 w kq - 0 11"
  },
  {
    "id": "exchange-sacrifice",
    "name": "The Positional Exchange Sacrifice (...Rxc3)",
    "category": "Sacrifice & Initiative",
    "level": "Expert",
    "color": "Black",
    "summary": "Giving up a rook for a knight on c3 shatters White's queenside pawns, wins e4, and grants Black uncontested dark-square control.",
    "keyIdeas": [
      "Trade value for long-term positional compensation",
      "Shatter the opponent's pawn structure",
      "Win dark squares and central pawns",
      "Avoid passive defense"
    ],
    "line": [
      {
        "move": "Bf3",
        "text": "Defending e4 calmly."
      },
      {
        "move": "Qa5",
        "text": "Pinning c3 and preparing ...e5 or ...Rfc8."
      },
      {
        "move": "Rad1",
        "text": "Centralizing White's last rook."
      },
      {
        "move": "Rfd8",
        "text": "Preparing ...e5 central counterplay."
      },
      {
        "move": "Qe3",
        "text": "Supporting the kingside and eyes a7."
      },
      {
        "move": "e5",
        "text": "Striking in the center to open diagonals for Black's bishops!"
      },
      {
        "move": "fxe5",
        "text": "Opening the f-file."
      },
      {
        "move": "dxe5",
        "text": "Recapturing with a strong central grip and active minor pieces."
      }
    ],
    "startFen": "r2q1rk1/pp2bppp/2bppn2/8/3BPP2/2N5/PPPQB1PP/R4RK1 w - - 1 12"
  },
  {
    "id": "dark-square-domination",
    "name": "Dark-Square Strategy in the King's Indian",
    "category": "Strategic Plans",
    "level": "Advanced",
    "color": "Black",
    "summary": "In locked King's Indian chains, Black attacks on the kingside with ...f5-f4 and ...g5-g4 while White races on the queenside with c4-c5.",
    "keyIdeas": [
      "Advance pawns where your pawn chain points",
      "Strike with ...f5-f4 to open the kingside",
      "Defend c5 efficiently while racing on the king wing",
      "Keep dark squares under control"
    ],
    "line": [
      {
        "move": "f3",
        "text": "White locks down e4 and prepares Bf2."
      },
      {
        "move": "f4",
        "text": "Gaining kingside space and driving White's dark bishop away."
      },
      {
        "move": "Bf2",
        "text": "Retreating to cover d4 and g1."
      },
      {
        "move": "g5",
        "text": "Preparing ...Ng6, ...h5, and ...g4 to breach White's castle!"
      },
      {
        "move": "Rc1",
        "text": "White prepares c5 on the queenside race."
      },
      {
        "move": "Ng6",
        "text": "Bringing another attacker toward h4 and f4."
      },
      {
        "move": "c5",
        "text": "White strikes on the queenside."
      },
      {
        "move": "Nf6",
        "text": "Reinforcing h7/d5 while adding to the kingside swarm."
      }
    ],
    "startFen": "r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P3/2N1B3/PP2BPPP/R2QNRK1 w - f6 0 11"
  },
  {
    "id": "counterattack-center",
    "name": "Counterattacking a Flank Attack in the Center",
    "category": "Central Play",
    "level": "Club",
    "color": "Black",
    "summary": "An iron rule of strategy: meet a premature wing attack or pin by striking hard in the center before the flank storm lands.",
    "keyIdeas": [
      "Challenge premature pins when uncastled",
      "Break open central files when the attacker neglects development",
      "Use tactical counter-threats on e4/c2",
      "Keep king safety flexible"
    ],
    "line": [
      {
        "move": "g5",
        "text": "Breaking the pin decisively while White cannot safely sacrifice on g5."
      },
      {
        "move": "Bg3",
        "text": "Retreating onto the b8-h2 diagonal."
      },
      {
        "move": "h5",
        "text": "Threatening ...h4 to trap the bishop or shatter kingside pawns."
      },
      {
        "move": "h4",
        "text": "Stopping ...h4 by locking the flank."
      },
      {
        "move": "g4",
        "text": "Driving the f3 knight away from central control."
      },
      {
        "move": "Ng5",
        "text": "White tries a counter-threat against f7."
      },
      {
        "move": "O-O",
        "text": "Safely defending f7 while bringing the rook into play!"
      }
    ],
    "startFen": "r1bqk2r/ppp2pp1/2np1n1p/2b1p3/2B1P2B/2NP1N2/PPP2PPP/R2QK2R b KQkq - 1 7"
  },
  {
    "id": "queenless-centralization",
    "name": "Queenless Middlegame Centralization",
    "category": "Strategic Plans",
    "level": "Club",
    "color": "White",
    "summary": "Even with queens on or just trading off, rapid piece development and central outposts create overwhelming positional pressure.",
    "keyIdeas": [
      "Use every tempo to activate rooks and bishops",
      "Dominate central squares d5 and e5",
      "Prevent opponent castling with cross-diagonal pressure",
      "Convert development leads into material"
    ],
    "line": [
      {
        "move": "Be2",
        "text": "Preparing short castling while guarding f3."
      },
      {
        "move": "e6",
        "text": "Black fights to complete kingside development."
      },
      {
        "move": "O-O",
        "text": "White connects rooks immediately."
      },
      {
        "move": "Be7",
        "text": "Preparing to castle."
      },
      {
        "move": "Rfd1",
        "text": "Adding x-ray pressure down the d-file."
      },
      {
        "move": "O-O",
        "text": "Black castles, still cramped by White's central coordination."
      },
      {
        "move": "Ne5",
        "text": "Planting the knight on a commanding central outpost."
      }
    ],
    "startFen": "rn1qkb1r/pp2pppp/2p2nb1/8/2NP1B2/2N2Q2/PP3PPP/2R1KB1R w Kkq - 4 11"
  },
  {
    "id": "two-weaknesses",
    "name": "Principle of Two Weaknesses",
    "category": "Strategic Plans",
    "level": "Master",
    "color": "White",
    "summary": "A single weakness can usually be defended. Master attackers fix one weakness, then open a second front on the opposite wing to overload the defense.",
    "keyIdeas": [
      "Fix the primary target before switching wings",
      "Use superior mobility to pivot faster than the defender",
      "Force passive defenders into zugzwang or overload",
      "Combine central control with flank breaks"
    ],
    "line": [
      {
        "move": "O-O",
        "text": "Completing kingside safety."
      },
      {
        "move": "Nxc3",
        "text": "Black simplifies in the center."
      },
      {
        "move": "Rxc3",
        "text": "Rook recaptures actively with tempo options on c/e/h ranks."
      },
      {
        "move": "e5",
        "text": "Black seeks central equality."
      },
      {
        "move": "dxe5",
        "text": "Clarifying central pawns."
      },
      {
        "move": "Nxe5",
        "text": "Knight lands on e5."
      },
      {
        "move": "Nxe5",
        "text": "Trading defenders cleanly."
      },
      {
        "move": "Qxe5",
        "text": "Queen centralizes."
      },
      {
        "move": "f4",
        "text": "Pushing back the queen while seizing kingside space for a second front!"
      }
    ],
    "startFen": "r1b2rk1/pp1nqppp/2p1p3/3n4/2BP4/2N1PN2/PP3PPP/2RQK2R w K - 0 11"
  },
  {
    "id": "english-attack-storm",
    "name": "English Attack: Opposite-Side Pawn Storm",
    "category": "Attacking the King",
    "level": "Club",
    "color": "White",
    "summary": "Against the Sicilian Najdorf, the English Attack (Be3, f3, Qd2, O-O-O) launches g4-h4-g5 while keeping White’s king sheltered on the queenside.",
    "keyIdeas": [
      "Reinforce e4 with f3 to prepare g4 without allowing ...Ng4",
      "Castle queenside so the h1 rook supports the pawn storm",
      "Push g4-g5 to dislodge the key f6 defender",
      "Tuck the king onto b1 before opening queenside files"
    ],
    "startFen": "r2q1rk1/1p1nbppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/2KR1B1R w - - 5 11",
    "line": [
      {
        "move": "g4",
        "text": "Launching the kingside pawn storm immediately toward Black’s castled king."
      },
      {
        "move": "b5",
        "text": "Black starts counterplay on the queenside where White’s king resides."
      },
      {
        "move": "g5",
        "text": "Driving the f6 knight away from the kingside and claiming space."
      },
      {
        "move": "b4",
        "text": "Counter-attacking White’s c3 knight with tempo."
      },
      {
        "move": "Ne2",
        "text": "Rerouting the knight flexibly toward g3 while keeping c3 clear."
      },
      {
        "move": "Ne8",
        "text": "Retreating to safety while preparing ...a5-a4."
      },
      {
        "move": "h4",
        "text": "Reinforcing g5 and preparing h5 to pry open the h-file."
      },
      {
        "move": "a5",
        "text": "Black races with ...a4 against b3."
      },
      {
        "move": "Kb1",
        "text": "A classic prophylactic king tuck off the c-file and a2 diagonal."
      }
    ]
  },
  {
    "id": "sicilian-rxc3-sacrifice",
    "name": "The Dragon Exchange Sacrifice (...Rxc3)",
    "category": "Sacrifice & Initiative",
    "level": "Expert",
    "color": "Black",
    "summary": "In the Sicilian Dragon, Black frequently sacrifices the exchange on c3 to wreck White’s queenside pawn shelter, win e4, and unleash dark-square pressure.",
    "keyIdeas": [
      "Shatter White’s b2/c2 shelter around the queenside king",
      "Win the central e4 pawn as immediate material compensation",
      "Activate the queen and dark squares along the c-file",
      "Target the newly created weak pawns on c3 and a2"
    ],
    "startFen": "r5k1/pp1bpp1p/3p1npQ/q7/2rNP1P1/2N2P2/PPP5/1K1R3R b - - 0 18",
    "line": [
      {
        "move": "Rxc3",
        "text": "The thematic Dragon exchange sacrifice! Black destroys White’s king shelter and grabs e4 next."
      },
      {
        "move": "bxc3",
        "text": "White must recapture, leaving doubled isolated c-pawns and an open b-file."
      },
      {
        "move": "Qxc3",
        "text": "Black’s queen invades right next to White’s king while eyeing a1 and e3."
      },
      {
        "move": "g5",
        "text": "White tries to drive the f6 defender away to threaten Qxh7+."
      },
      {
        "move": "Nh5",
        "text": "Blocking the h-file and shutting down White’s kingside attack completely!"
      },
      {
        "move": "Rd3",
        "text": "Challenging the active queen and defending c3."
      },
      {
        "move": "Qc5",
        "text": "Keeping eye contact with c2, d4, and f2."
      },
      {
        "move": "Nb3",
        "text": "White kicks the queen to regain coordination."
      },
      {
        "move": "Qe5",
        "text": "Centralizing powerfully while keeping full dark-square compensation."
      }
    ]
  },
  {
    "id": "prophylaxis-central-breaks",
    "name": "Prophylaxis Against Central Breaks",
    "category": "Strategic Plans",
    "level": "Advanced",
    "color": "White",
    "summary": "Before launching your own strategic plan, identify the freeing break your opponent seeks (...d5 or ...b5) and restrain it with quiet prophylaxis.",
    "keyIdeas": [
      "Spot the opponent’s freeing central break (...d5 or ...b5)",
      "Overprotect critical squares like d5 and e4",
      "Use quiet moves such as f3, b3, or a4 to freeze counterplay",
      "Expand only after enemy central breaks are neutralized"
    ],
    "startFen": "r2q1rk1/pp1bppbp/2np1np1/8/2PNP3/2N1B3/PP2BPPP/R2Q1RK1 w - - 2 10",
    "line": [
      {
        "move": "Qd2",
        "text": "Connecting rooks and preparing Bh6 while watching d4."
      },
      {
        "move": "Nxd4",
        "text": "Black simplifies to ease the spatial cramp."
      },
      {
        "move": "Bxd4",
        "text": "Recapturing centrally with control over f6 and a7."
      },
      {
        "move": "Bc6",
        "text": "Pressuring e4 to provoke a concession or prepare ...d5."
      },
      {
        "move": "f3",
        "text": "Pure prophylaxis: solidifying e4 permanently so ...Nd7-c5 cannot disrupt the center."
      },
      {
        "move": "a5",
        "text": "Black seeks queenside breathing room with ...a4."
      },
      {
        "move": "b3",
        "text": "Restraining ...a4 and keeping the queenside structure compact."
      },
      {
        "move": "Nd7",
        "text": "Offering the dark-squared bishop exchange."
      },
      {
        "move": "Rfd1",
        "text": "Placing a rook on the d-file to make ...d5 virtually impossible."
      }
    ]
  },
  {
    "id": "transforming-advantage-endgame",
    "name": "Transforming an Advantage into an Endgame",
    "category": "Strategic Plans",
    "level": "Advanced",
    "color": "White",
    "summary": "When an opponent carries structural weaknesses or a passive bishop, trading queens converts temporary middlegame pressure into a lasting endgame win.",
    "keyIdeas": [
      "Trade queens when your pawn structure and minor pieces are superior",
      "Strip the defender of tactical middlegame counterplay",
      "Centralize your king and rooks immediately after the queen swap",
      "Target fixed enemy pawns along open files"
    ],
    "startFen": "rn1qkb1r/pp3ppp/2p2nb1/3p2B1/3P4/2N1PQ2/PP3PPP/R3KBNR w KQkq - 3 8",
    "line": [
      {
        "move": "Bxf6",
        "text": "Damaging Black’s kingside pawn structure before simplifying."
      },
      {
        "move": "Qxf6",
        "text": "Black recaptures to avoid losing a pawn."
      },
      {
        "move": "Qxf6",
        "text": "Trading queens immediately transforms the positional edge into a won endgame!"
      },
      {
        "move": "gxf6",
        "text": "Black is saddled with doubled isolated f-pawns."
      },
      {
        "move": "h4",
        "text": "Expanding on the kingside and eyeing h5 against the g6 bishop."
      },
      {
        "move": "h5",
        "text": "Stopping h5 at the cost of fixing weaknesses on dark squares."
      },
      {
        "move": "Nh3",
        "text": "Routing the knight toward f4 to attack d5 and g6."
      },
      {
        "move": "Bd6",
        "text": "Developing the dark-squared bishop."
      },
      {
        "move": "Nf4",
        "text": "Seizing the dominant f4 outpost in the queenless endgame."
      }
    ]
  },
  {
    "id": "centralizing-rooks-flank-strike",
    "name": "Centralizing Rooks Before a Flank Strike",
    "category": "Central Play",
    "level": "Club",
    "color": "White",
    "summary": "Flank attacks succeed only when the center is secured. Placing rooks on central files first prevents the defender from countering in the middle.",
    "keyIdeas": [
      "Connect rooks and seize central files (d1 and e1)",
      "Ensure the center cannot be blown open while attacking on the wing",
      "Support central pawns before advancing flank pawns",
      "Use central rooks to swing laterally toward either wing"
    ],
    "startFen": "r2qr1k1/1bpnbppp/p2p1n2/1p2p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 w - - 5 13",
    "line": [
      {
        "move": "Nf1",
        "text": "Routing the knight toward g3 while clearing the c1-h6 diagonal."
      },
      {
        "move": "Bf8",
        "text": "Reinforcing g7 and clearing the e-file for the rook."
      },
      {
        "move": "Ng3",
        "text": "Eyeing the key f5 square before committing wing pawns."
      },
      {
        "move": "g6",
        "text": "Preventing Nf5 at the cost of loosening dark squares."
      },
      {
        "move": "a4",
        "text": "Probing on the queenside while White’s center remains rock-solid."
      },
      {
        "move": "c5",
        "text": "Black tries to challenge d4."
      },
      {
        "move": "d5",
        "text": "Locking the center so White’s rooks can safely back flank play."
      },
      {
        "move": "c4",
        "text": "Closing the queenside and seeking ...Nc5."
      },
      {
        "move": "Bg5",
        "text": "Pinning f6 and preparing Qd2-Bh6 or Nh2-g4."
      }
    ]
  },
  {
    "id": "bad-bishop-good-knight-restriction",
    "name": "Bad Bishop vs. Good Knight Restriction",
    "category": "Pawn Structures",
    "level": "Advanced",
    "color": "White",
    "summary": "Fix your opponent’s pawns on the color of their remaining bishop, then anchor your knight on an unassailable outpost of the opposite color.",
    "keyIdeas": [
      "Keep enemy pawns locked on the same color as their bishop",
      "Trade off your own bad bishop or active enemy knights",
      "Occupy outposts the enemy bishop cannot attack",
      "Probe on both flanks once the defender is tied down"
    ],
    "startFen": "2rq1rk1/1b2bppp/pp1ppn2/4n3/2P1P3/N1N1BP2/PP2B1PP/2RQ1RK1 w - - 1 14",
    "line": [
      {
        "move": "Qd2",
        "text": "Connecting rooks and watching b4 and h6."
      },
      {
        "move": "Qc7",
        "text": "Pressuring c4 along the open c-file."
      },
      {
        "move": "Rfd1",
        "text": "Overprotecting d4 and eyeing the backward d6 pawn."
      },
      {
        "move": "Rfd8",
        "text": "Supporting d6 against central pressure."
      },
      {
        "move": "Qe1",
        "text": "Preparing Qf2 to target the weakened b6 square."
      },
      {
        "move": "Nfd7",
        "text": "Routing the knight toward c5."
      },
      {
        "move": "Qf2",
        "text": "Increasing pressure on b6 and pinning down Black’s queenside."
      },
      {
        "move": "Qb8",
        "text": "Defending b6 passively while tying down the queen."
      },
      {
        "move": "Na4",
        "text": "Increasing the bind against b6 — Black’s e7 bishop stays boxed in."
      }
    ]
  },
  {
    "id": "carlsbad-minority-breakthrough",
    "name": "Carlsbad Minority Attack Breakthrough",
    "category": "Pawn Structures",
    "level": "Advanced",
    "color": "White",
    "summary": "Once b4-b5 reaches contact in the Carlsbad structure, bxc6 saddles Black with a backward c6-pawn or an isolated d5-pawn on the half-open c-file.",
    "keyIdeas": [
      "Push b5 to force a structural concession on c6 or b5",
      "Capture bxc6 to expose the backward c6 pawn on the c-file",
      "Double heavy pieces on the c-file against c6",
      "Anchor a knight on c5 to paralyze Black’s queenside"
    ],
    "startFen": "r2qr1k1/1p2bppp/2p1bnn1/3p2B1/1P1P4/2NBPN2/2Q2PPP/1R3RK1 w - - 1 15",
    "line": [
      {
        "move": "b5",
        "text": "The decisive Carlsbad minority breakthrough!"
      },
      {
        "move": "Rc8",
        "text": "Black avoids ...cxb5 to keep pawns connected, bracing on the c-file."
      },
      {
        "move": "bxc6",
        "text": "Creating a permanent backward pawn target on c6 (or isolated d5 after ...Rxc6)."
      },
      {
        "move": "bxc6",
        "text": "Keeping d5 protected while saddling Black with a weak c6 pawn."
      },
      {
        "move": "Ba6",
        "text": "Attacking the c8 rook with tempo and seizing dark squares."
      },
      {
        "move": "Rc7",
        "text": "Forced off the back rank while defending c6."
      },
      {
        "move": "Na4",
        "text": "Heading straight for the eternal c5 outpost in front of c6."
      },
      {
        "move": "Ne4",
        "text": "Seeking counterplay by challenging White’s dark-squared bishop."
      },
      {
        "move": "Bxe7",
        "text": "Trading off defenders so White dominates c5 and the c-file."
      }
    ]
  },
  {
    "id": "f-file-attack-f4-f5",
    "name": "Open f-File Attack After f4–f5",
    "category": "Attacking the King",
    "level": "Club",
    "color": "White",
    "summary": "In King’s Indian or Italian setups, preparing and pushing f4-f5 opens the f-file for the rook and unleashes bishops and queen toward f7 and g7.",
    "keyIdeas": [
      "Castle kingside so the f1 rook stands directly behind the f-pawn",
      "Stabilize the center so ...d5 does not refute your flank advance",
      "Break with f4-f5 to open the f-file or create a cramping wedge",
      "Coordinate Rf3/Qh5/Ng5 down the opened f-file"
    ],
    "startFen": "r3r1k1/bppq1pp1/p1npbn1p/4p3/4P3/1BPP1NNP/PP3PP1/R1BQR1K1 w - - 6 13",
    "line": [
      {
        "move": "Nh4",
        "text": "Preparing the thematic f4-f5 kingside break while eyeing f5."
      },
      {
        "move": "d5",
        "text": "Black strikes in the center to seek counterplay."
      },
      {
        "move": "Qf3",
        "text": "Adding pressure on d5 and f6 while clearing the first rank."
      },
      {
        "move": "Rad8",
        "text": "Supporting the d5 pawn."
      },
      {
        "move": "Nhf5",
        "text": "Planting a powerful knight on f5 targeting g7 and h6."
      },
      {
        "move": "Bxf5",
        "text": "Black eliminates the dangerous intruder."
      },
      {
        "move": "Nxf5",
        "text": "Recapturing with a strong outpost and opening the path for f4 or Qg3."
      },
      {
        "move": "dxe4",
        "text": "Opening central lines."
      },
      {
        "move": "dxe4",
        "text": "Keeping f5 anchored and threatening Bxh6 or Nxh6+."
      }
    ]
  },
  {
    "id": "exploiting-color-complexes",
    "name": "Exploiting Weakened Color Complexes (f6/h6)",
    "category": "Attacking the King",
    "level": "Expert",
    "color": "White",
    "summary": "Trading off the defender’s fianchettoed g7-bishop leaves f6, g7, and h6 defenseless, inviting queen and knight infiltration on dark squares.",
    "keyIdeas": [
      "Trade off the defending fianchetto bishop with Bh6",
      "Plant a queen on h6 or f6 to dominate the weak dark squares",
      "Keep queens on while the enemy king lacks dark-square cover",
      "Bring a knight or h-pawn forward to weave a mating net"
    ],
    "startFen": "2rq1rk1/pp1bppbp/3p1np1/4n3/3NP3/1BN1BP2/PPPQ2PP/2KR3R w - - 5 12",
    "line": [
      {
        "move": "Bh6",
        "text": "Forcing the trade of Black’s crucial dark-squared defender on g7!"
      },
      {
        "move": "Bxh6",
        "text": "Black has no good way to avoid the exchange."
      },
      {
        "move": "Qxh6",
        "text": "White’s queen lands directly on h6, dominating f6 and g7."
      },
      {
        "move": "Rxc3",
        "text": "Black looks for counterplay on the queenside."
      },
      {
        "move": "bxc3",
        "text": "Accepting the exchange while keeping the king shelter intact enough."
      },
      {
        "move": "Qa5",
        "text": "Hitting c3 and a2."
      },
      {
        "move": "Kb1",
        "text": "Protecting a2 calmly before resuming the kingside assault."
      },
      {
        "move": "Rc8",
        "text": "Doubling pressure on c3."
      },
      {
        "move": "h4",
        "text": "Launching h4-h5 to breach Black’s weakened dark-square fortress."
      }
    ]
  },
  {
    "id": "undermining-pawn-chain",
    "name": "Undermining an Overextended Pawn Chain",
    "category": "Pawn Structures",
    "level": "Club",
    "color": "Black",
    "summary": "Nimzowitsch’s classic rule: strike the base of an opponent’s pawn chain (...c5 against d4-e5), then undermine the head with ...f6.",
    "keyIdeas": [
      "Challenge the base d4 with ...c5 before White stabilizes",
      "Use ...Qb6 and ...Nc6 to pile pressure onto d4",
      "Strike the head e5 with ...f6 once d4 is tied down",
      "Activate the c8 bishop or f8-b4 pin after central exchanges"
    ],
    "startFen": "r1b1kb1r/pp3ppp/1qn1p2n/3pP3/1P1P4/P4N2/5PPP/RNBQKB1R b KQkq - 0 8",
    "line": [
      {
        "move": "Nf5",
        "text": "Increasing pressure directly onto the d4 base of White’s pawn chain."
      },
      {
        "move": "Bb2",
        "text": "White reinforces d4 passively with the c1 bishop."
      },
      {
        "move": "Bd7",
        "text": "Preparing ...Rc8 and smooth queenside development."
      },
      {
        "move": "Be2",
        "text": "Getting ready to castle."
      },
      {
        "move": "Be7",
        "text": "Completing kingside development flexibly."
      },
      {
        "move": "O-O",
        "text": "White tucks the king away."
      },
      {
        "move": "O-O",
        "text": "Black castles cleanly before opening the f-file."
      },
      {
        "move": "Qd3",
        "text": "Connecting rooks and watching f5."
      },
      {
        "move": "f6",
        "text": "Undermining the head of White’s pawn chain (e5) after tying down d4!"
      }
    ]
  },
  {
    "id": "b1-h7-battery",
    "name": "Queen-and-Bishop Battery on b1–h7",
    "category": "Attacking the King",
    "level": "Club",
    "color": "White",
    "summary": "Aligning Bc2/Bb1 behind Qd3 creates an immediate threat against h7, forcing kingside concessions (...g6 or ...f5) that create permanent holes.",
    "keyIdeas": [
      "Align Bc2/Bb1 and Qd3 along the b1-h7 diagonal",
      "Eliminate or chase away the f6 knight guarding h7",
      "Provoke ...g6 or ...h6 to weaken dark squares around the king",
      "Pivot to dark squares or the h-file once Black weakens the shelter"
    ],
    "startFen": "r1br2k1/ppq2ppp/2n1pn2/2bp4/4P3/2PB1N2/PP1NQPPP/R1B2RK1 w - - 3 11",
    "line": [
      {
        "move": "Bc2",
        "text": "Dropping the bishop behind the e2/d3 queen to prepare the lethal b1-h7 battery."
      },
      {
        "move": "Ng4",
        "text": "Black tries to jump into e5 and counterattack f2."
      },
      {
        "move": "h3",
        "text": "Driving the knight back or forcing a decision."
      },
      {
        "move": "Nge5",
        "text": "Centralizing the knight to block the diagonal."
      },
      {
        "move": "Nxe5",
        "text": "Clearing the path toward h7."
      },
      {
        "move": "Qxe5",
        "text": "Black’s queen recaptures centrally."
      },
      {
        "move": "Nf3",
        "text": "Developing with tempo against the queen."
      },
      {
        "move": "Qc7",
        "text": "Retreating while keeping an eye on e5."
      },
      {
        "move": "Qd3",
        "text": "Completing the b1-h7 battery! Black is forced to weaken the kingside with ...g6 or ...f5."
      }
    ]
  },
  {
    "id": "neutralizing-initiative-center",
    "name": "Neutralizing a Wing Initiative in the Center",
    "category": "Central Play",
    "level": "Master",
    "color": "Black",
    "summary": "When an opponent invests tempos on a wing storm while their center lacks support, a timely central strike (...d5!) seizes the initiative immediately.",
    "keyIdeas": [
      "Refrain from panicked wing moves that create pawn hooks",
      "Strike in the center with ...d5 as soon as development allows",
      "Open central files toward the opponent’s uncastled king",
      "Convert the attacker’s lost wing tempos into central dominance"
    ],
    "startFen": "r1bqkb1r/pp3pp1/2nppn1p/8/3NP1PP/2N5/PPP2P2/R1BQKBR1 b Qkq - 2 8",
    "line": [
      {
        "move": "d5",
        "text": "The textbook central counterstrike! Black blasts open the middle while White’s king is uncastled."
      },
      {
        "move": "exd5",
        "text": "White opens the e-file rather than allowing ...d4."
      },
      {
        "move": "Nxd5",
        "text": "Recapturing centrally with active threats along the d- and e-files."
      },
      {
        "move": "Nxd5",
        "text": "White trades knights to ease pressure on c3."
      },
      {
        "move": "Qxd5",
        "text": "Black’s queen dominates the center, pinning or eyeing a2 and e5."
      },
      {
        "move": "Be3",
        "text": "Developing and guarding d4/c5."
      },
      {
        "move": "Bb4+",
        "text": "Checking with tempo while White’s king remains stuck in the middle."
      },
      {
        "move": "c3",
        "text": "Blocking the check at the cost of weakening dark squares."
      },
      {
        "move": "Be7",
        "text": "Retreating smoothly while targeting White’s overextended h4 pawn."
      }
    ]
  }
];
