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
  }
];
