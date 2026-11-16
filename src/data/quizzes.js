export const QUIZZES = [
  {
    "id": "qz-open-01",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Center Control in the Italian Game",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    "sideToMove": "White",
    "question": "Which continuation immediately prepares d2-d4 to seize a strong classical center?",
    "options": [
      "c3 — Prepare the d4 pawn center with tempo support",
      "Bb5 — Play symmetrically on the flank without contesting the center",
      "Nxe5 — Overextend the g-pawn weakening the kingside",
      "g4 — Retreat the developed bishop prematurely"
    ],
    "correctIndex": 0,
    "recommendedSan": "c3",
    "explanation": "c3: 3...Bc5 invites 4.c3 followed by d4, contesting central space with tempo on c5."
  },
  {
    "id": "qz-open-02",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Ruy Lopez Arkhangelsk vs Berlin",
    "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    "sideToMove": "Black",
    "question": "What is Black’s classical Morphy Defense move questioning White’s Spanish bishop?",
    "options": [
      "Rb8 — Push h6 passively wasting central development",
      "a6 — Question the b5 bishop before choosing the structure",
      "Bb4 — Block the dark bishop with f6",
      "f5 — Push g5 exposing the king"
    ],
    "correctIndex": 1,
    "recommendedSan": "a6",
    "explanation": "a6: 3...a6 forces the b5 bishop to declare its intentions while preserving queenside flexibility."
  },
  {
    "id": "qz-open-03",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Sicilian Najdorf Essence",
    "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5",
    "sideToMove": "Black",
    "question": "How does Black prevent Bb5+/Nb5 while preparing ...e5 or ...e6 in the Najdorf?",
    "options": [
      "Nbd7 — Play ...Qh5 early losing tempos to minor pieces",
      "Qa5 — Push ...h5 abandoning kingside development",
      "a6 — Control b5 with a subtle queenside pawn move",
      "g5 — Trade recklessly on e4 without compensation"
    ],
    "correctIndex": 2,
    "recommendedSan": "a6",
    "explanation": "a6: 5...a6 covers b5, preparing ...e5 cleanly or queenside ...b5 expansion."
  },
  {
    "id": "qz-open-04",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Queen’s Gambit Rejected Trap Check",
    "fen": "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 4 5",
    "sideToMove": "White",
    "question": "Black’s bishop shielded the pin on f6. Which solid classical move develops and reinforces d4?",
    "options": [
      "Bxf6 — Open the e-file carelessly before developing",
      "Ne4 — Snap on d5 surrendering central tension",
      "h3 — Move the queen into premature queenside traffic",
      "Nf3 — Develop the king’s knight and challenge e5"
    ],
    "correctIndex": 3,
    "recommendedSan": "Nf3",
    "explanation": "Nf3: Nf3 completes minor-piece coordination toward kingside castling without releasing d4/c4 tension prematurely."
  },
  {
    "id": "qz-open-05",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "French Winawer Pin Tension",
    "fen": "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq c6 0 5",
    "sideToMove": "White",
    "question": "Black challenges d4 right away. How does White clarify queenside tension directly?",
    "options": [
      "a3 — Question the pinning dark-squared bishop immediately",
      "dxc5 — Neglect c3 allowing Black to wreck structure for free",
      "Rb1 — Retreat the knight to the edge passively",
      "Qg4 — Grab c5 too slowly allowing ...Ne7 and ...Nbc6"
    ],
    "correctIndex": 0,
    "recommendedSan": "a3",
    "explanation": "a3: 5.a3 compels ...Bxc3+ before White builds dark-square pressure with Qg4."
  },
  {
    "id": "qz-open-06",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Caro-Kann Classical Bishop Placement",
    "fen": "rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    "sideToMove": "Black",
    "question": "What is Black’s Classical variation move getting the c8 bishop outside the pawn chain?",
    "options": [
      "Na6 — Trap the light bishop behind ...e6 unnecessarily",
      "Nf6 — Develop the light-squared bishop cleanly to f5",
      "Qxd4 — Expose the king with ...f5",
      "b5 — Spin the queen out to d5 early"
    ],
    "correctIndex": 1,
    "recommendedSan": "Nf6",
    "explanation": "Nf6: 4...Bf5 contests the b1-h7 diagonal actively before solidifying with ...e6."
  },
  {
    "id": "qz-open-07",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Grünfeld Space Grab",
    "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq d6 0 4",
    "sideToMove": "White",
    "question": "How does White launch the critical Exchange Variation center against the Grünfeld?",
    "options": [
      "c5 — Play e3 shutting in the c1 bishop meekly",
      "e3 — Push g3 delaying central stakes",
      "Nf3 — Open the center and chase the knight away with e4 later",
      "Be3 — Play a3 wasting precious central tempos"
    ],
    "correctIndex": 2,
    "recommendedSan": "Nf3",
    "explanation": "Nf3: 4.cxd5 Nxd5 5.e4 constructs a formidable pawn center while daring Black to attack it dynamically."
  },
  {
    "id": "qz-open-08",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "King’s Indian Classical Setup",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQ - 2 6",
    "sideToMove": "White",
    "question": "How does White complete kingside development solidly before committing d5?",
    "options": [
      "c5 — Overextend with h4 too early",
      "Ng1 — Push c5 surrendering d5 without support",
      "Be3 — Advance g4 weakening dark squares recklessly",
      "Be2 — Shield the kingside safely for castling"
    ],
    "correctIndex": 3,
    "recommendedSan": "Be2",
    "explanation": "Be2: Be2 develops harmoniously and prepares O-O without exposing itself to ...Ng4 or ...e5 tricks."
  },
  {
    "id": "qz-open-09",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Nimzo-Indian Rubinstein Setup",
    "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
    "sideToMove": "White",
    "question": "What is Rubinstein’s flexible solid response supporting d4 and preparing Bd3?",
    "options": [
      "Nf3 — Support c4/d4 while opening the f1 bishop",
      "c5 — Grab a7 greedily on the edge",
      "g3 — Move the king to d2 voluntarily",
      "Bh6 — Push h4 without castling"
    ],
    "correctIndex": 0,
    "recommendedSan": "Nf3",
    "explanation": "Nf3: 4.e3 safeguards c4, opens f1-a6, and keeps White’s pawn structure intact."
  },
  {
    "id": "qz-open-10",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "London System Pyramid",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/4P3/PPP2PPP/RN1QKBNR b KQkq - 0 3",
    "sideToMove": "Black",
    "question": "Which natural move challenges White’s c1-less queenside while attacking d4?",
    "options": [
      "Nbd7 — Block the c-pawn with ...Nc6",
      "c5 — Strike at d4 with the c-pawn before developing b8",
      "Qd6 — Lock the light bishop inside passively",
      "e5 — Move the queen aimlessly to d6 right away"
    ],
    "correctIndex": 1,
    "recommendedSan": "c5",
    "explanation": "c5: 3...c5 pressures d4 immediately and exploits the missing queenside defender on c1."
  },
  {
    "id": "qz-open-11",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Slav Defense Light-Squared Freedom",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R b KQkq a3 0 5",
    "sideToMove": "Black",
    "question": "Now that White prevented ...b5, where does Black’s c8 bishop belong?",
    "options": [
      "Nbd7 — Shut the bishop inside with ...e6 immediately",
      "Qc7 — Grab b5 recklessly dropping control of e4",
      "Bf5 — Develop the light-squared bishop cleanly outside the pawn chain",
      "g6 — Move the knight backward"
    ],
    "correctIndex": 2,
    "recommendedSan": "Bf5",
    "explanation": "Bf5: 5...Bf5 places the bishop actively outside before playing ...e6."
  },
  {
    "id": "qz-open-12",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Scandinavian Queen Tempo",
    "fen": "rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 3",
    "sideToMove": "Black",
    "question": "Where does Black’s exposed queen retreat safely in the main line to preserve pressure on d4/e5?",
    "options": [
      "Nd7 — Plant the queen passively in front of central pawns",
      "b6 — Retreat back to e6 blocking the e-pawn",
      "Qe6+ — Jump recklessly to c4 inviting development with tempo",
      "Qd6 — Tuck the queen on a5 eyeing the e1 king diagonal"
    ],
    "correctIndex": 3,
    "recommendedSan": "Qd6",
    "explanation": "Qd6: 3...Qa5 pins the c3 knight when ...Bb4 lands and stays safe from minor-piece attacks."
  },
  {
    "id": "qz-open-13",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Scotch Opening Follow-Up",
    "fen": "r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
    "sideToMove": "Black",
    "question": "How does Black challenge White’s centralized d4 knight with active piece development?",
    "options": [
      "Nf6 — Pin or pressure the center with active dark-squared development",
      "Rb8 — Trade passively allowing a dominant White queen center",
      "Nh6 — Advance h5 on the wing",
      "f5 — Play ...f6 opening the e8-h5 diagonal"
    ],
    "correctIndex": 0,
    "recommendedSan": "Nf6",
    "explanation": "Nf6: Active development such as 4...Bc5 or 4...Nf6 immediately counterattacks e4/d4."
  },
  {
    "id": "qz-open-14",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "English Four Knights Harmony",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 4 4",
    "sideToMove": "White",
    "question": "Which sharp central or fianchetto continuation scores best here?",
    "options": [
      "c5 — Advance h3 passively with zero central stake",
      "a3 — Seize flexible diagonal/central influence cleanly",
      "Ng5 — Weakly lock in the queen with Qc2",
      "g4 — Move the b1 knight prematurely back"
    ],
    "correctIndex": 1,
    "recommendedSan": "a3",
    "explanation": "a3: Balanced central/fianchetto pressure (such as g3 or e3/d4 prep) fights smoothly for light squares."
  },
  {
    "id": "qz-open-15",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Petroff Symmetry Trap Avoidance",
    "fen": "rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
    "sideToMove": "Black",
    "question": "Beware 3...Nxe4?? 4.Qe2! What must Black play FIRST before recapturing e4?",
    "options": [
      "Nc6 — Mirror White greedily with ...Nxe4 immediately",
      "Ba3 — Push ...f6 blundering Qh5+",
      "d6 — Drive away White’s e5 knight cleanly before taking on e4",
      "d5 — Advance ...Nc6 inviting Nxc6"
    ],
    "correctIndex": 2,
    "recommendedSan": "d6",
    "explanation": "d6: 3...d6 drives the e5 knight away so 4...Nxe4 does not walk into 4.Qe2 pins."
  },
  {
    "id": "qz-open-16",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Catalan Fianchetto Timing",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq - 1 4",
    "sideToMove": "Black",
    "question": "Develop smoothly toward kingside safety while respecting White’s g2 bishop diagonal.",
    "options": [
      "Nbd7 — Drop a pawn weakly on c6 without reason",
      "Bd6 — Move the king unnecessarily",
      "c5 — Overextend kingside pawns prematurely",
      "Nc6 — Develop quietly on e7 or capture and neutralize c4 tension"
    ],
    "correctIndex": 3,
    "recommendedSan": "Nc6",
    "explanation": "Nc6: Solid kingside development (...Be7 or ...dxc4) prepares safe castling before counterattacking c4."
  },
  {
    "id": "qz-tac-01",
    "category": "Tactics",
    "difficulty": "Easy",
    "theme": "Back-Rank Checkmating Motif",
    "fen": "5rk1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White sees an open d-file and unventilated enemy king. What forces immediate mate or ruinous material loss?",
    "options": [
      "h3 — Invade the 8th rank with check",
      "f3 — Make cautious luft first losing initiative",
      "Rd3 — Move the king diagonally without forcing play",
      "Rd8 — Push a flank pawn slowly"
    ],
    "correctIndex": 0,
    "recommendedSan": "h3",
    "explanation": "h3: Invading on d8 hits the back rank immediately while Black’s pawns trap the king."
  },
  {
    "id": "qz-tac-02",
    "category": "Tactics",
    "difficulty": "Easy",
    "theme": "Queen Back-Rank Checkmate",
    "fen": "6k1/5ppp/4q3/8/8/2N5/5PPP/6K1 b - - 0 1",
    "sideToMove": "Black",
    "question": "White’s g1 king is boxed behind f2-g2-h2. Which queen move ends the game immediately?",
    "options": [
      "Kh8 — Drop back quietly missing the back-rank mate",
      "Qe1# — Invade the 1st rank with the queen for back-rank mate",
      "Qe7 — Offer an aimless central check without follow-up",
      "Qe3 — Advance flank pawns"
    ],
    "correctIndex": 1,
    "recommendedSan": "Qe1#",
    "explanation": "Qe1#: Invading e1 punishes White’s unventilated back rank with checkmate."
  },
  {
    "id": "qz-tac-03",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Double Check Geometry",
    "fen": "4k3/8/8/1r6/4B3/8/4R3/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Both rook and bishop align near e8 and b5. Which move delivers unstoppable double check AND wins the rook?",
    "options": [
      "Bd5+ — Pin gently allowing Black’s king to step free",
      "Bh1+ — Trade rooks prematurely",
      "Bc6+ — Discover check from the e2 rook while giving check with the bishop",
      "Rd2 — Retreat the bishop quietly"
    ],
    "correctIndex": 2,
    "recommendedSan": "Bc6+",
    "explanation": "Bc6+: Bc6+ delivers double check, forcing the king away before capturing b5."
  },
  {
    "id": "qz-tac-04",
    "category": "Tactics",
    "difficulty": "Easy",
    "theme": "Pin & Win on the Diagonal",
    "fen": "6k1/8/4r3/8/8/5P2/2B3P1/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s rook sits undefended along the light-square king diagonal. How do you win the exchange cleanly?",
    "options": [
      "f4 — Check needlessly driving the king off the diagonal",
      "Bg6 — Push a pawn passively",
      "g4 — Move the king away",
      "Bb3 — Pin the rook permanently against the king"
    ],
    "correctIndex": 3,
    "recommendedSan": "Bb3",
    "explanation": "Bb3: Bb3 pins the e6 rook absolutely to the g8 king."
  },
  {
    "id": "qz-tac-05",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Deflection of the Overloaded Queen",
    "fen": "2r3k1/4qp1p/7B/8/4Q3/8/5PPP/2R3K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Calculate carefully: taking Qe7 walks into ...Rxc1#. Find the forcing back-rank combination!",
    "options": [
      "Rxc8+ — Force Black’s queen away or capture on c8 with check",
      "Bg7 — Snap the e7 queen blindly allowing mate on c1",
      "Qf4 — Create luft passively forfeiting the win",
      "g4 — Retreat the rook to d1"
    ],
    "correctIndex": 0,
    "recommendedSan": "Rxc8+",
    "explanation": "Rxc8+: 1.Rxc8+ forces ...Qf8 2.Rxf8# checkmate protected by the h6 bishop."
  },
  {
    "id": "qz-tac-06",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Skewer Down the Open File",
    "fen": "6k1/3Q4/8/8/3K4/8/8/r7 b - - 0 1",
    "sideToMove": "Black",
    "question": "White’s king and queen share the d-file. Find Black’s winning move!",
    "options": [
      "Kh8 — Grab a phantom square off the file",
      "Rd1+ — Check from the bottom of the d-file to win the queen",
      "Ra5 — Check diagonally missing the d7 queen",
      "Rc1 — Play a quiet king move"
    ],
    "correctIndex": 1,
    "recommendedSan": "Rd1+",
    "explanation": "Rd1+: 1...Rd1+ skewers king and queen along the d-file."
  },
  {
    "id": "qz-tac-07",
    "category": "Tactics",
    "difficulty": "Easy",
    "theme": "Pawn Fork Center Trick",
    "fen": "r1bqkb1r/pppp1ppp/2n5/4p3/2B1N3/5N2/PPPP1PPP/R1BQK2R b KQkq - 0 5",
    "sideToMove": "Black",
    "question": "White retook on e4. How does Black regain the piece right away with a pawn fork?",
    "options": [
      "Rb8 — Retreat passively a full piece down",
      "Bb4 — Pin the knight late after losing initiative",
      "d5 — Thrust a central pawn attacking bishop and knight together",
      "f5 — Castle allowing White to consolidate extra piece"
    ],
    "correctIndex": 2,
    "recommendedSan": "d5",
    "explanation": "d5: 5...d5! forks c4 and e4 cleanly, recovering the piece with equality."
  },
  {
    "id": "qz-tac-08",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Exposed Queen-Bishop Battery",
    "fen": "5rk1/5ppp/8/7Q/2B5/8/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Notice White’s c4 bishop and h5 queen aiming at f7. Deliver the knockout!",
    "options": [
      "Qg6 — Withdraw passively giving Black time to play ...Qe7",
      "Qf5 — Shuffle the king aimlessly",
      "Bd3 — Push a wing pawn",
      "Qf3 — Smash f7 immediately with check"
    ],
    "correctIndex": 3,
    "recommendedSan": "Qf3",
    "explanation": "Qf3: Qxf7+! wins material cleanly while ripping open Black’s castled fortress."
  },
  {
    "id": "qz-tac-09",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Arabian Mating Pattern",
    "fen": "7k/6R1/5N2/8/8/8/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Coordinate rook and knight on the kingside edge to end the game now!",
    "options": [
      "Rh7# — Checkmate cleanly along the 7th rank under knight cover",
      "Rg6 — Give useless checks letting the knight get kicked",
      "Rb7 — Push a defensive pawn slowly",
      "Ne4 — Pull the rook backward"
    ],
    "correctIndex": 0,
    "recommendedSan": "Rh7#",
    "explanation": "Rh7#: Rh7# delivers classic Arabian Mate with g8 cut off and h7 protected by Nf6."
  },
  {
    "id": "qz-tac-10",
    "category": "Tactics",
    "difficulty": "Advanced",
    "theme": "Underpromotion Saves & Forks",
    "fen": "8/4P1k1/3q4/8/P7/8/6PP/7K w - - 0 1",
    "sideToMove": "White",
    "question": "Promoting to a queen misses an immediate king-and-queen fork! Which promotion wins cleanly?",
    "options": [
      "e8=Q — Promote to a queen overlooking Black’s checks/freedom",
      "e8=N+ — Underpromote to a knight with check against g7 and d6",
      "a5 — Advance the distant a-pawn blindly",
      "h3 — Step the king helplessly"
    ],
    "correctIndex": 1,
    "recommendedSan": "e8=N+",
    "explanation": "e8=N+: 1.e8=N+! forks the g7 king and d6 queen with check."
  },
  {
    "id": "qz-tac-11",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Milner-Barry Queen Snatch",
    "fen": "r1b1kbnr/pp3ppp/4p3/3pP3/3q4/3B4/PP3PPP/RNBQK2R w KQkq - 0 9",
    "sideToMove": "White",
    "question": "Black snapped the poisoned d4 pawn. How does White win the Black queen on the spot?",
    "options": [
      "Bc4 — Retreat the bishop quietly",
      "f3 — Defend e5 slowly while losing a pawn",
      "Bb5+ — Unleash a discovered attack with check on b5",
      "Bh6 — Push flank pawns"
    ],
    "correctIndex": 2,
    "recommendedSan": "Bb5+",
    "explanation": "Bb5+: 9.Bb5+! checks Black’s king while uncovering the d1 queen’s attack on d4."
  },
  {
    "id": "qz-tac-12",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Greek Gift Combination",
    "fen": "r1bq1rk1/pppn1ppp/4p3/3pP3/1b1P4/2NB1N2/PPP2PPP/R1BQ1RK1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black castled without ...Nf6 guarding h7, or check White’s sharpest continuation!",
    "options": [
      "Na4 — Pass the turn passively",
      "Bxh7+ — Trade pieces helpfully for Black",
      "h4 — Retreat developed minor pieces",
      "Nb1 — Check whether the kingside sacrifice or dynamic strike dominates"
    ],
    "correctIndex": 3,
    "recommendedSan": "Nb1",
    "explanation": "Nb1: Verify the strongest forcing Stockfish continuation against Black’s vulnerable setup."
  },
  {
    "id": "qz-tac-13",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Clearance Discovery on the d-File",
    "fen": "3r2k1/5p1p/6p1/3N4/8/8/3R1PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Clear the d-file with tempo so White’s rook picks off d8!",
    "options": [
      "f3 — Check the king with the d5 knight right away",
      "Nb6 — Step the knight quietly away without check",
      "Nb4 — Push a flank pawn",
      "Rb2 — Double on another file awkwardly"
    ],
    "correctIndex": 0,
    "recommendedSan": "f3",
    "explanation": "f3: Nf6+! forces Black’s king to respond while uncovering Rd2 against Rd8."
  },
  {
    "id": "qz-tac-14",
    "category": "Tactics",
    "difficulty": "Easy",
    "theme": "Trapping an Overextended Bishop",
    "fen": "6k1/5p2/6p1/7b/8/5P1P/6P1/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s bishop on h5 lacks escape squares. Snap the trap shut!",
    "options": [
      "f4 — Step the king passively",
      "g4 — Advance the g-pawn immediately to enclose the bishop",
      "h4 — Advance f4 giving the bishop an exit square",
      "g3 — Push the h-pawn unnecessarily"
    ],
    "correctIndex": 1,
    "recommendedSan": "g4",
    "explanation": "g4: 1.g4! attacks the bishop while g6/f7 trap it cleanly."
  },
  {
    "id": "qz-tac-15",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Zwischenzug Deflects Queen From c3",
    "fen": "3r2k1/2q2pp1/7p/8/8/2b4P/2Q1BPP1/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White eyes c3, yet Black’s queen defends it. Find the winning in-between move!",
    "options": [
      "h4 — Take c3 right away and blunder material",
      "Qa2 — Trade bishops passively",
      "Rxd8+ — Capture the d8 rook with check before touching c3",
      "Rd2 — Hide on the back rank"
    ],
    "correctIndex": 2,
    "recommendedSan": "Rxd8+",
    "explanation": "Rxd8+: 1.Rxd8+! drags Black’s queen away from defending c3 so 2.Qxc3 wins a full piece."
  },
  {
    "id": "qz-tac-16",
    "category": "Tactics",
    "difficulty": "Easy",
    "theme": "Smothered Mate Pattern (One Move)",
    "fen": "r1bqkb1r/pp1npppp/2p2n2/8/3PN3/8/PPP1QPPP/R1B1KBNR w KQkq - 3 6",
    "sideToMove": "White",
    "question": "Black’s e7 pawn is pinned along the e-file. Deliver checkmate in one!",
    "options": [
      "d5 — Trade knights releasing all tension",
      "Qd3 — Retreat the knight back passively",
      "g4 — Castle slowly missing mate",
      "Nd6# — Jump the e4 knight into d6"
    ],
    "correctIndex": 3,
    "recommendedSan": "Nd6#",
    "explanation": "Nd6#: 6.Nd6# exploits the e-file pin to smother Black’s king on move 6."
  },
  {
    "id": "qz-str-01",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "d5 Outpost Exploitation",
    "fen": "r1bqkb1r/5p1p/p1np1p2/1p2p3/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq - 0 10",
    "sideToMove": "White",
    "question": "Black ruined kingside pawns and left a gaping hole on d5. Which move dominates the center?",
    "options": [
      "Nd5 — Plant the knight directly on the eternal d5 outpost",
      "Naxb5 — Advance a flank pawn aimlessly",
      "g4 — Retreat the a3 knight passively",
      "Qf3 — Play softly without occupying the hole"
    ],
    "correctIndex": 0,
    "recommendedSan": "Nd5",
    "explanation": "Nd5: Nd5 establishes an unassailable central octopus targeting f6 and c7."
  },
  {
    "id": "qz-str-02",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Carlsbad Minority Attack Plan",
    "fen": "r1bqrnk1/pp2bppp/2p2n2/3p2B1/3P4/2NBPN2/PPQ2PPP/R4RK1 w - - 8 11",
    "sideToMove": "White",
    "question": "What is White’s classic Carlsbad positional plan against c6/d5?",
    "options": [
      "Bxf6 — Push e4 carelessly creating an isolated weak pawn",
      "h3 — Prepare b4-b5 to fracture Black’s queenside pawns",
      "Bf5 — Surrender the d3 bishop cheaply",
      "Qd1 — Play a4 permanently disabling b4"
    ],
    "correctIndex": 1,
    "recommendedSan": "h3",
    "explanation": "h3: Rab1 sets up b4-b5 (the Minority Attack), saddle-bagging Black with a backward c6 pawn."
  },
  {
    "id": "qz-str-03",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Prophylaxis in the Ruy Lopez",
    "fen": "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 1 9",
    "sideToMove": "White",
    "question": "Which quiet prophylactic move prepares d4 cleanly by stopping ...Bg4?",
    "options": [
      "Ba4 — Rush d4 immediately walking into an annoying pin",
      "Nxe5 — Retreat the bishop passively",
      "h3 — Control g4 with a small kingside pawn step",
      "Na3 — Push a4 forgetting kingside pressure"
    ],
    "correctIndex": 2,
    "recommendedSan": "h3",
    "explanation": "h3: h3 stops ...Bg4 permanently before advancing d4."
  },
  {
    "id": "qz-str-04",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Open-File Contention (c-File)",
    "fen": "2r3k1/1p3ppp/p3p3/8/8/4P3/PP3PPP/2R2RK1 w - - 0 1",
    "sideToMove": "White",
    "question": "Only the c-file is open. How does White handle c-file control in this endgame?",
    "options": [
      "e4 — Push kingside pawns passively",
      "g4 — Lock the rook on f1 neglecting the open file",
      "Rc7 — Move the king away from the center",
      "Rxc8# — Challenge or seize the c-file actively right away"
    ],
    "correctIndex": 3,
    "recommendedSan": "Rxc8#",
    "explanation": "Rxc8#: Dominating the single open file prevents enemy 7th-rank invasion."
  },
  {
    "id": "qz-str-05",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Fixing Weak Pawns on Light Squares",
    "fen": "6k1/pp3p2/2p1b1p1/4P3/2P5/4B3/PP4PP/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s pawns rest on dark squares or light squares? Activate the king toward the endgame battleground!",
    "options": [
      "Bxa7 — March the king toward f2/e3 toward the center",
      "c5 — Hide the king back on h1",
      "Bh6 — Push c5 locking up winning dark-square entry",
      "b4 — Sacrifice pawns unnecessarily"
    ],
    "correctIndex": 0,
    "recommendedSan": "Bxa7",
    "explanation": "Bxa7: Bringing the king into the center increases penetration pressure against weakened dark squares."
  },
  {
    "id": "qz-str-06",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Maróczy Bind Clamp",
    "fen": "r1bq1rk1/pp1pppbp/2n2np1/8/2PNP3/2N1B3/PP3PPP/R2QKB1R w KQ - 5 8",
    "sideToMove": "White",
    "question": "Keep Black’s ...d5 break locked down with smooth kingside development!",
    "options": [
      "c5 — Weaken dark squares unnecessarily",
      "Be2 — Complete kingside development calmly on e2",
      "Bf4 — Push e5 closing the wrong diagonal awkwardly",
      "Rb1 — Spend a tempo on h4 prematurely"
    ],
    "correctIndex": 1,
    "recommendedSan": "Be2",
    "explanation": "Be2: Be2 prepares castling while keeping iron control over d5."
  },
  {
    "id": "qz-str-07",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "French Bad Bishop Solution",
    "fen": "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    "sideToMove": "Black",
    "question": "Before closing the e6 pawn chain, solve Black’s c8 bishop cleanly!",
    "options": [
      "Nd7 — Entomb the bishop inside with ...e6 immediately",
      "Qc7 — Play ...c5 early wasting development",
      "Bf5 — Develop the light-squared bishop actively to f5",
      "b5 — Play ...g6 weakening dark squares"
    ],
    "correctIndex": 2,
    "recommendedSan": "Bf5",
    "explanation": "Bf5: 3...Bf5 solves Black’s traditionally cramped bishop problem before ...e6."
  },
  {
    "id": "qz-str-08",
    "category": "Strategy",
    "difficulty": "Advanced",
    "theme": "Attacking Doubled c-Pawns in Nimzo",
    "fen": "r1bq1rk1/p2p1ppp/1pn1pn2/2p5/2PPP3/P1PB4/4NPPP/R1BQK2R b KQ - 0 9",
    "sideToMove": "Black",
    "question": "White built a center while sitting with doubled c3/c4 pawns. Where does Black target c4?",
    "options": [
      "Rb8 — Open up the e5 center favoring White’s bishop pair",
      "a5 — Retreat knights to the rim",
      "Ne5 — Trade on d4 releasing White’s structural weakness",
      "Ne8 — Attack the immobile c4 pawn from a6"
    ],
    "correctIndex": 3,
    "recommendedSan": "Ne8",
    "explanation": "Ne8: ...Ba6 followed by ...Na5 fixes and attacks the helpless c4 pawn."
  },
  {
    "id": "qz-str-09",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Bishop Pair Likes Open Diagonals",
    "fen": "r1bqkbnr/p2p1ppp/2p1p3/2p5/4P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 5",
    "sideToMove": "Black",
    "question": "Black owns two bishops against a central cluster. How do you unlock their scope?",
    "options": [
      "Qc7 — Challenge the center cleanly with ...d5",
      "Rb8 — Lock the center further against yourself",
      "Qa5+ — Push flank pawns blindly",
      "d6 — Move the dark bishop aimlessly"
    ],
    "correctIndex": 0,
    "recommendedSan": "Qc7",
    "explanation": "Qc7: Striking ...d5 dissolves doubled c-pawn rigidity and opens lines for both bishops."
  },
  {
    "id": "qz-str-10",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Queenless Endgames & King Activity",
    "fen": "r1bk1b1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNB2RK1 w - - 0 9",
    "sideToMove": "White",
    "question": "White enjoys a 4-vs-3 kingside majority against Black’s doubled c-pawns. Continue harmoniously!",
    "options": [
      "e6 — Push a4 wasting time on the flank",
      "Nc3 — Develop the b1 knight actively and fight for central control",
      "b3 — Trade away central assets meekly",
      "Nbd2 — Advance f4 weakening e3 prematurely"
    ],
    "correctIndex": 1,
    "recommendedSan": "Nc3",
    "explanation": "Nc3: Nc3 accelerates development and prepares Rd1+/Ne4 control."
  },
  {
    "id": "qz-str-11",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Exploiting the c4 Hole (Stonewall)",
    "fen": "r1bqkb1r/pp2pppp/2n2n2/2pp4/3P1P2/2PBP3/PP4PP/RNBQK1NR b KQkq f3 0 5",
    "sideToMove": "Black",
    "question": "How should Black immediately test White’s Stonewall pawn structure before ...e6?",
    "options": [
      "Rb8 — Play ...c4 releasing tension on d4 for free",
      "Rg8 — Lock in the c8 bishop early",
      "Bg4 — Bring the c8 bishop outside to g4",
      "Ne5 — Push ...g5 exposing the king"
    ],
    "correctIndex": 2,
    "recommendedSan": "Bg4",
    "explanation": "Bg4: ...Bg4 develops cleanly outside the pawn chain while pressuring the pin."
  },
  {
    "id": "qz-str-12",
    "category": "Strategy",
    "difficulty": "Advanced",
    "theme": "Two Weaknesses Principle",
    "fen": "4r1k1/1p3pp1/p6p/8/1P6/P3P3/5PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White wants to tie Black down while creating a second target. Place the rook optimally!",
    "options": [
      "b5 — Play a quiet pawn move forfeiting d-file initiative",
      "h3 — Switch lazily to the e-file passively",
      "Rd6 — Hide the king on f1",
      "g4 — Invade the 7th rank with the d1 rook"
    ],
    "correctIndex": 3,
    "recommendedSan": "g4",
    "explanation": "g4: Rd7 dominates the 7th rank, paralyzing Black’s rook and pawns."
  },
  {
    "id": "qz-str-13",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Good Knight vs Bad Bishop",
    "fen": "6k1/5p2/2p1b1p1/1p1pP3/1P1P1P2/2N3P1/6KP/8 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s bishop is hemmed in by fixed light-square pawns. Find White’s clearest edge-building move!",
    "options": [
      "Kf3 — Improve king/pawn flexibility carefully on the kingside",
      "f5 — Blockade your own knight in the corner",
      "Ne4 — Advance c-pawns exposing holes",
      "g4 — Wait aimlessly losing tempo"
    ],
    "correctIndex": 0,
    "recommendedSan": "Kf3",
    "explanation": "Kf3: Careful kingside expansion or knight maneuvering squeezes the trapped bishop."
  },
  {
    "id": "qz-str-14",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Chigorin Ruy Lopez Knight Maneuver",
    "fen": "r1b2rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12",
    "sideToMove": "White",
    "question": "In the closed Ruy Lopez, start the famous knight transfer from b1 toward the kingside!",
    "options": [
      "dxc5 — Play dxc5 releasing central tension prematurely",
      "d5 — Move the b1 knight to d2 on its way to f1-g3",
      "a4 — Push a4 weakening queenside support",
      "Be3 — Retreat the e1 rook passively"
    ],
    "correctIndex": 1,
    "recommendedSan": "d5",
    "explanation": "d5: Nbd2-f1-g3 transfers idle queenside power straight onto the kingside."
  },
  {
    "id": "qz-str-15",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Prophylaxis Against Kingside Expansion",
    "fen": "2rq1rk1/pp1bppbp/3p1np1/4n3/3NP3/1BN1BP2/PPPQ2PP/2KR3R w - - 9 12",
    "sideToMove": "White",
    "question": "Opposite-side castling in the Sicilian Dragon! How does White break open the h-file?",
    "options": [
      "Ndb5 — Trade passively on e5 releasing all attack",
      "Nd5 — Push a3 slowly losing the race",
      "Kb1 — Launch the h4 pawn march straight at Black’s king shelter",
      "Qe2 — Retreat the d4 knight blindly"
    ],
    "correctIndex": 2,
    "recommendedSan": "Kb1",
    "explanation": "Kb1: h4-h5 rips open the h-file before Black’s queenside attack lands."
  },
  {
    "id": "qz-str-16",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Central Control in the Tarrasch QGD",
    "fen": "r1bq1rk1/pp2bppp/2n2n2/2pp2B1/3P4/2N2NP1/PP2PPBP/R2Q1RK1 b - - 6 9",
    "sideToMove": "Black",
    "question": "Clarify central tension before White’s pieces swarm d5!",
    "options": [
      "Rb8 — Advance ...c4 surrendering the e4 square to White",
      "Qb6 — Play ...h6 too slowly allowing dxc5 tricks",
      "h6 — Pull the knight back passively",
      "c4 — Capture on d4 to free Black’s pieces and bishops"
    ],
    "correctIndex": 3,
    "recommendedSan": "c4",
    "explanation": "c4: ...cxd4 opens central lines and activates Black’s dark-squared counterplay."
  },
  {
    "id": "qz-mid-01",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "English Attack Pawn Storm",
    "fen": "r2q1rk1/1p1nbppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/2KR1B1R w - - 5 11",
    "sideToMove": "White",
    "question": "Both kings are castled on opposite flanks. How does White begin cracking g8?",
    "options": [
      "g4 — Launch g4 to drive away f6 and storm the kingside",
      "Na5 — Play quietly on the queenside where Black is strong",
      "Ba7 — Trade dark bishops without compensating attack",
      "Qe2 — Drop the d4 knight backward passively"
    ],
    "correctIndex": 0,
    "recommendedSan": "g4",
    "explanation": "g4: g4-g5 attacks the castled king directly while Black develops on the opposite flank."
  },
  {
    "id": "qz-mid-02",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Keres Attack Strike",
    "fen": "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    "sideToMove": "White",
    "question": "Punish Black’s flexible Scheveningen setup with Keres’ immediate wing thrust!",
    "options": [
      "Ndb5 — Play f3 meekly losing tempo",
      "Be3 — Gain kingside space and threaten g5 right away with g4",
      "a3 — Trade on c6 helping Black strengthen the center",
      "Bh6 — Retreat to f3 passively"
    ],
    "correctIndex": 1,
    "recommendedSan": "Be3",
    "explanation": "Be3: 6.g4 claims massive space and exploits Black’s uncastled king."
  },
  {
    "id": "qz-mid-03",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Central Break Against a Wing Attack",
    "fen": "r1bq1rk1/pp1nbpp1/2p1p2p/3p4/3P3P/2NBPN2/PPQ2PP1/R1B2RK1 b - - 0 1",
    "sideToMove": "Black",
    "question": "White committed h4 on the flank. Apply Steinitz’s golden rule!",
    "options": [
      "Rb8 — Mirror weakly with ...h5 conceding outposts",
      "b6 — Pull knights backward passively",
      "Bd6 — Strike immediately in the center with ...c5",
      "Bc5 — Move the rook aimlessly"
    ],
    "correctIndex": 2,
    "recommendedSan": "Bd6",
    "explanation": "Bd6: A premature wing advance must be countered with a forceful central break (...c5)."
  },
  {
    "id": "qz-mid-04",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Sicilian Center Strike vs Uncastled King",
    "fen": "r1bqkbnr/5ppp/p1np4/1p2p3/4P3/N1N5/PPP2PPP/R1BQKB1R w KQkq b6 0 8",
    "sideToMove": "White",
    "question": "Black’s queenside thrust left d5 vulnerable. Dominate immediately!",
    "options": [
      "Naxb5 — Move the a3 knight blindly allowing ...b4",
      "g4 — Play Be2 allowing Black comfortable consolidation",
      "Qxd6 — Advance g3 slowly",
      "Nd5 — Drop the c3 knight cleanly onto d5"
    ],
    "correctIndex": 3,
    "recommendedSan": "Nd5",
    "explanation": "Nd5: Nd5 seizes a commanding central square while challenging Black’s uncastled king."
  },
  {
    "id": "qz-mid-05",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Active Center Ahead of Castling",
    "fen": "r1bqkbnr/2p2ppp/p2p4/1p6/3pP3/1B6/PPP2PPP/RNBQK2R w KQkq - 0 8",
    "sideToMove": "White",
    "question": "Black traded on d4 before developing the kingside. Strike down the weak a8-h1 diagonal!",
    "options": [
      "c3 — Jump to d5 hitting a8 and c6 at once",
      "e5 — Recapture d4 slowly missing a8 tactics",
      "h3 — Play a4 neutrally",
      "Qd3 — Castle slowly letting Black consolidate"
    ],
    "correctIndex": 0,
    "recommendedSan": "c3",
    "explanation": "c3: Bd5! threatens Bxa8 while paralyzing Black’s queenside development."
  },
  {
    "id": "qz-mid-06",
    "category": "Middlegame",
    "difficulty": "Advanced",
    "theme": "Winawer Queenside Chaos",
    "fen": "rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P2PPP/R1B1KBNR w KQq - 0 10",
    "sideToMove": "White",
    "question": "White snatched kingside pawns and now Black hits c3 and e5. Protect key squares and keep developing!",
    "options": [
      "Qxg8+ — Snap on d4 immediately walking into ...Qxc3+",
      "Ne2 — Develop the g1 knight to e2 defending c3 and unpinning checks",
      "c4 — Hide the king on d1 awkwardly",
      "Bf4 — Retreat the queen blindly leaving c3 collapsed"
    ],
    "correctIndex": 1,
    "recommendedSan": "Ne2",
    "explanation": "Ne2: Ne2 protects c3 and prepares solid consolidation of the extra material."
  },
  {
    "id": "qz-mid-07",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Marshall Counterattack Defense",
    "fen": "r1b2rk1/5ppp/p1pb4/1p1n4/3P3q/1BP5/PP3PPP/RNBQR1K1 w - - 3 14",
    "sideToMove": "White",
    "question": "Black’s queen arrived on h4 targeting h2. Defend with minimal weaknesses!",
    "options": [
      "Ba4 — Advance h3 inviting lethal ...Bxh3 sacrifices",
      "Na3 — Run the king to f1 losing coordination",
      "g3 — Play g3 pushing the queen off h4 safely",
      "Qf3 — Pull the knight needlessly"
    ],
    "correctIndex": 2,
    "recommendedSan": "g3",
    "explanation": "g3: g3 chases the queen cleanly while Re1 and Nd2 consolidate White’s extra pawn."
  },
  {
    "id": "qz-mid-08",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Meran Central Thrust",
    "fen": "r2qkb1r/pb1n1ppp/2p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 2 9",
    "sideToMove": "White",
    "question": "Black expanded queenside and placed the bishop on b7. Claim full central initiative!",
    "options": [
      "d5 — Retreat softly letting Black achieve ...c5 smoothly",
      "Bf1 — Trade pieces unhelpfully",
      "h3 — Push h3 slowly",
      "O-O — Advance e4 taking the center with dynamic threats"
    ],
    "correctIndex": 3,
    "recommendedSan": "O-O",
    "explanation": "O-O: e4 builds a mighty d4-e4 pawn center and eyes e5 breakthroughs."
  },
  {
    "id": "qz-mid-09",
    "category": "Middlegame",
    "difficulty": "Easy",
    "theme": "Scotch Initiative Over Center",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 6",
    "sideToMove": "White",
    "question": "Black declined the c3 pawn trap. Claim the classical two-pawn center with tempo!",
    "options": [
      "cxd4 — Capture on d4 attacking Black’s c5 bishop",
      "Bb5 — Play e5 prematurely losing control",
      "Nfd2 — Retreat bishop quietly to b3",
      "Bg5 — Push h3 passively"
    ],
    "correctIndex": 0,
    "recommendedSan": "cxd4",
    "explanation": "cxd4: cxd4 builds an awesome pawn center while forcing Black’s bishop back."
  },
  {
    "id": "qz-mid-10",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "King’s Indian Space Race",
    "fen": "r1bq1rk1/pppn2bp/3p2n1/3Pp1p1/2P1Pp2/2N2P2/PP2BBPP/2RQNRK1 w - - 2 14",
    "sideToMove": "White",
    "question": "In the Mar del Plata race, White must crash through on the queenside right now!",
    "options": [
      "Na4 — Defend passively on the kingside letting Black storm freely",
      "Nb5 — Advance c5 smashing into Black’s d6 pawn base",
      "Bb6 — Move the king toward h1 helplessly",
      "Rb1 — Lock the queenside with a4-b5 too slowly"
    ],
    "correctIndex": 1,
    "recommendedSan": "Nb5",
    "explanation": "Nb5: c5! strikes the c-file immediately, attacking Black’s center before ...g4 hits home."
  },
  {
    "id": "qz-mid-11",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Outpost e5 in Queen’s Gambit",
    "fen": "2rq1rk1/pp1nbppp/2p1pn2/3p4/3P1B2/2NBPN2/PPQ2PPP/2RR2K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White completed full minor-piece and rook coordination. How do you crank up central pressure?",
    "options": [
      "Be5 — Exchange carelessly releasing central grip",
      "Be4 — Push a4 weakening b4 passively",
      "Bg3 — Leap into e5 pressuring Black’s cramped kingside",
      "b4 — Retreat the queen back"
    ],
    "correctIndex": 2,
    "recommendedSan": "Bg3",
    "explanation": "Bg3: Seizing key central outposts keeps Black’s pieces tangled defensively."
  },
  {
    "id": "qz-mid-12",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Open-File Pressure on c4/b2",
    "fen": "r1bqkb1r/pp2pppp/2n2n2/2pp4/3P1B2/2P1P3/PP1N1PPP/R2QKBNR b KQkq - 2 5",
    "sideToMove": "Black",
    "question": "Strike immediately against White’s c1-vacated dark squares in the London!",
    "options": [
      "Rb8 — Lock up the center quietly helping White’s Bf4",
      "Rg8 — Advance flank pawns clumsily",
      "Nb8 — Retreat developed pieces",
      "Qb6 — Target b2 with the queen to disrupt White’s queenside harmony"
    ],
    "correctIndex": 3,
    "recommendedSan": "Qb6",
    "explanation": "Qb6: ...Qb6 hits b2 directly while White’s bishop sits on f4."
  },
  {
    "id": "qz-mid-13",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Smith-Morra King Safety & Rooks",
    "fen": "r1bqkbnr/1p1p1ppp/p1n1p3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 7",
    "sideToMove": "White",
    "question": "White sacrificed a pawn for roaring open lines. What comes next before sacrificing pieces?",
    "options": [
      "O-O — Castle safely to free the rook for d1/e1",
      "Bb5 — Sacrifice wildly before bringing rooks into play",
      "Ne5 — Push h4 leaving king stranded",
      "Bg5 — Move the knight back blindly"
    ],
    "correctIndex": 0,
    "recommendedSan": "O-O",
    "explanation": "O-O: O-O brings the king to safety and puts Rd1 right onto the open d-file."
  },
  {
    "id": "qz-mid-14",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Alekhine Four Pawns Counterstrike",
    "fen": "r2qkb1r/ppp2ppp/1nn1p3/4Pb2/2PP4/2N1BN2/PP4PP/R2QKB1R b KQkq - 1 9",
    "sideToMove": "Black",
    "question": "White holds a huge but loose center. Continue harmoniously before shattering e5/d4!",
    "options": [
      "Rb8 — Grab on e4 weakly",
      "Be7 — Develop kingside pieces cleanly toward castling and ...f6",
      "Bd6 — Push ...h5 aimlessly on the edge",
      "Nxc4 — Move the b6 knight backward"
    ],
    "correctIndex": 1,
    "recommendedSan": "Be7",
    "explanation": "Be7: ...Be7 prepares ...O-O and ...f6, undercutting White’s extended center."
  },
  {
    "id": "qz-mid-15",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Closed Ruy Tension Release",
    "fen": "r1bq1rk1/4bppp/p1np1n2/1pp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12",
    "sideToMove": "White",
    "question": "Black piled pressure on d4 with ...Nc6. Claim kingside attacking space!",
    "options": [
      "dxc5 — Capture on c5 opening Black’s pieces smoothly",
      "b3 — Play weakly letting ...d5 happen",
      "d5 — Lock the center cleanly with d5 pushing the knight back",
      "Bf4 — Retreat the e1 rook"
    ],
    "correctIndex": 2,
    "recommendedSan": "d5",
    "explanation": "d5: d5 gains vital central space and clears routes for Nbd2-f1-g3."
  },
  {
    "id": "qz-mid-16",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Hungarian/Queen’s Indian Anchor",
    "fen": "rn1q1rk1/pbppbppp/1p2p3/8/2PP4/2Q2NP1/PP2PPBP/R1B2RK1 b - - 0 9",
    "sideToMove": "Black",
    "question": "Cement your dark-square control over e4 in the Queen’s Indian!",
    "options": [
      "Nc6 — Weaken c6 carelessly",
      "Bxf3 — Advance ...a5 forgetting the center",
      "Bb4 — Trade dark bishops without compensating play",
      "c5 — Play ...f5 locking down White’s e4 aspirations"
    ],
    "correctIndex": 3,
    "recommendedSan": "c5",
    "explanation": "c5: ...f5 reinforces e4 while opening dark-square counterplay for the b7 bishop."
  },
  {
    "id": "qz-end-01",
    "category": "Endgame",
    "difficulty": "Easy",
    "theme": "King Opposition Fundamentals",
    "fen": "4k3/8/4K3/4P3/8/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "question": "White’s king already stands on the 6th rank! Find the winning outflanking step that promotes!",
    "options": [
      "Kf6 — Step aside to d6/f6 instead of letting Black stalemate you lazily",
      "Kf5 — Push e6 immediately handing away winning opposition",
      "Kd5 — Retreat backward toward e5",
      "Kd6 — Step to d5 needlessly"
    ],
    "correctIndex": 0,
    "recommendedSan": "Kf6",
    "explanation": "Kf6: Kd6 (or Kf6) forces Black aside and clears e7-e8 cleanly; 1.e6+?? allows ...Kd8 draw traps later."
  },
  {
    "id": "qz-end-02",
    "category": "Endgame",
    "difficulty": "Easy",
    "theme": "Rule of the Square",
    "fen": "8/4k3/8/p7/8/8/3K4/8 w - - 0 1",
    "sideToMove": "White",
    "question": "Black threatens 1...a4 and race to a1. Does White’s king enter the pawn’s square in time?",
    "options": [
      "Ke3 — Step away backward toward e1 leaving the square",
      "Kc3 — March into the square toward c3 immediately",
      "Ke2 — Advance clumsily away on the kingside",
      "Ke1 — Hesitate with d3 missing b4"
    ],
    "correctIndex": 1,
    "recommendedSan": "Kc3",
    "explanation": "Kc3: 1.Kc3 enters the a5-e5-e1-a1 square effortlessly and stops the passed pawn."
  },
  {
    "id": "qz-end-03",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Outside Passed Pawn Decoy",
    "fen": "8/p4pk1/6p1/P7/6P1/5K2/8/8 w - - 0 1",
    "sideToMove": "White",
    "question": "Use your passed a-pawn to draw Black’s king far away from the kingside pawns!",
    "options": [
      "a6 — Trade passively leaving zero passed threats",
      "Kg3 — Hide the king on the 2nd rank",
      "g5 — Advance a6 or march toward the wing decoy right away",
      "Kf2 — Abandon the a-pawn cheaply"
    ],
    "correctIndex": 2,
    "recommendedSan": "g5",
    "explanation": "g5: Pushing the distant outside passer pulls Black’s king out while White cleans up the kingside."
  },
  {
    "id": "qz-end-04",
    "category": "Endgame",
    "difficulty": "Advanced",
    "theme": "Lucena Bridge Technique",
    "fen": "3K4/3P1k2/8/8/8/8/4R3/3r4 w - - 0 1",
    "sideToMove": "White",
    "question": "White holds the pawn on d7 with Kd8. Begin Lucena’s Bridge maneuver immediately!",
    "options": [
      "Kc8 — Deliver aimless checks helping Black gain tempi",
      "Rf2+ — Move the king awkwardly blocking your own rook",
      "Rd2 — Drop the rook back to the 1st rank",
      "Re4 — Lift the rook to the 4th rank (Re4) to block future checks"
    ],
    "correctIndex": 3,
    "recommendedSan": "Re4",
    "explanation": "Re4: 1.Re4 cuts off Black’s king and prepares Kc7 followed by the rook bridge on d4/e4."
  },
  {
    "id": "qz-end-05",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Philidor 3rd-Rank Rook Defense",
    "fen": "4k3/8/4K3/4P3/8/r7/8/5R2 b - - 0 1",
    "sideToMove": "Black",
    "question": "Black faces White’s king on e6 and pawn on e5. Hold the draw with textbook Philidor technique!",
    "options": [
      "Ra6+ — Check White away first or hold the 3rd/6th rank barrier cleanly",
      "Kd8 — Stay completely passive letting White win key squares",
      "Rb3 — Desert the 3rd rank prematurely allowing checkmate",
      "Rf3 — Rush forward clumsily"
    ],
    "correctIndex": 0,
    "recommendedSan": "Ra6+",
    "explanation": "Ra6+: Keeping White’s king blocked or forcing e6 before checking from maximum distance guarantees the draw."
  },
  {
    "id": "qz-end-06",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Wrong-Color Bishop Draw",
    "fen": "7k/8/5K2/7P/8/4B3/8/8 b - - 0 1",
    "sideToMove": "Black",
    "question": "White has an h-pawn and a light-squared bishop (which misses h8). How does Black hold the corner draw?",
    "options": [
      "Kh7 — Step outward toward f8 walking out of stalemate protection",
      "Kg8 — Shuffle calmly in the h8/g8 safe corner fortress",
      "Pass / Wait (2) — Leave the h-file completely",
      "Pass / Wait (3) — Block h7 clumsily allowing White control"
    ],
    "correctIndex": 1,
    "recommendedSan": "Kg8",
    "explanation": "Kg8: As long as Black stays in the g8-h8 corner, White can never force stalemate escape or promote cleanly."
  },
  {
    "id": "qz-end-07",
    "category": "Endgame",
    "difficulty": "Easy",
    "theme": "Right-Color Bishop Conversion",
    "fen": "7k/8/5K2/7P/8/5B2/8/8 w - - 0 1",
    "sideToMove": "White",
    "question": "White’s bishop DOES match h8! Find White’s winning technical step without stalemating!",
    "options": [
      "Ke7 — Push h6+ lazily creating a trick or losing control",
      "h6 — Retreat king off the 6th rank needlessly",
      "Be4 — Control g8/h8 cleanly with king or bishop before pushing h6",
      "Bg4 — Drop the bishop passively far away"
    ],
    "correctIndex": 2,
    "recommendedSan": "Be4",
    "explanation": "Be4: Claiming g6/h7 with the right-colored bishop seals the corner cleanly."
  },
  {
    "id": "qz-end-08",
    "category": "Endgame",
    "difficulty": "Advanced",
    "theme": "Rook Pawn Breakthrough",
    "fen": "6k1/ppp5/8/PPP5/8/8/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White and Black hold three opposing queenside pawns. Break through for an unstoppable queen!",
    "options": [
      "a6 — Walk the king slowly while Black stops the break easily",
      "Kf2 — Push a6 letting Black blockade cleanly",
      "Kh2 — Push c6 allowing ...bxc6",
      "b6 — Sacrifice the center breakthrough pawn b6 right away"
    ],
    "correctIndex": 3,
    "recommendedSan": "b6",
    "explanation": "b6: 1.b6! fractures Black’s three pawns regardless of how Black recaptures."
  },
  {
    "id": "qz-end-09",
    "category": "Endgame",
    "difficulty": "Easy",
    "theme": "King + Rook Edge Mate",
    "fen": "7k/8/8/8/8/6K1/1R6/8 w - - 0 1",
    "sideToMove": "White",
    "question": "Shrink Black’s box cleanly with rook-and-king coordination!",
    "options": [
      "Rb3 — Cut off the Black king along the 7th rank or g-file",
      "Kh4 — Deliver meaningless checks freeing Black toward the center",
      "Rb4 — Step the king backward lazily",
      "Re2 — Put the rook passively on the 1st rank"
    ],
    "correctIndex": 0,
    "recommendedSan": "Rb3",
    "explanation": "Rb3: 1.Rb7 confines Black to the 8th rank so mate arrives swiftly."
  },
  {
    "id": "qz-end-10",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Opposite-Color Bishop Liquidation",
    "fen": "8/6k1/5p2/6p1/3b4/4B3/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Normally opposite-colored bishops draw, EXCEPT when trading enters a won pawn ending! Play it!",
    "options": [
      "Bf4 — Avoid the trade keeping the opposite-colored fortress alive",
      "Bxd4 — Exchange bishops on d4+ right now to enter a won king-and-pawn race",
      "f3 — Push pawns weakly softening f2",
      "h3 — Hide the king on h1"
    ],
    "correctIndex": 1,
    "recommendedSan": "Bxd4",
    "explanation": "Bxd4: 1.Bxd4! liquidates into an easily won pawn ending."
  },
  {
    "id": "qz-end-11",
    "category": "Endgame",
    "difficulty": "Easy",
    "theme": "Connected Passed Pawns Power",
    "fen": "8/8/5k2/8/2PP4/3K4/8/8 w - - 0 1",
    "sideToMove": "White",
    "question": "Support your passed duo carefully with king and pawns!",
    "options": [
      "d5 — Abandon the rear pawn by pushing rashly",
      "Ke3 — Pull the king backward away from the center",
      "c5 — Advance carefully maintaining mutual support",
      "Ke2 — Play aimlessly allowing Black blockade"
    ],
    "correctIndex": 2,
    "recommendedSan": "c5",
    "explanation": "c5: Supported passed pawns advance harmoniously while pushing Black’s king back."
  },
  {
    "id": "qz-end-12",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Queen vs Pawn on the 7th Rank",
    "fen": "8/8/8/8/8/1Q6/3pk3/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White has Q vs d2 pawn. Step up using forcing checks or pins to advance White’s king!",
    "options": [
      "Qa4 — Let Black push d1=Q freely",
      "Qf7 — Move the king slowly without forcing Black’s king in front",
      "Qc2 — Sacrifice the queen mistakenly",
      "Qc4+ — Give a forcing check/pin forcing Black’s king onto d1 so White’s king steps closer"
    ],
    "correctIndex": 3,
    "recommendedSan": "Qc4+",
    "explanation": "Qc4+: Forcing Black’s king onto d1 gains vital tempos for White’s king to march in."
  },
  {
    "id": "qz-end-13",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Knight Frees Trapped Rook Pawn",
    "fen": "7k/7P/8/6N1/8/5K2/8/8 w - - 0 1",
    "sideToMove": "White",
    "question": "White’s king pawn is blocked in the corner. How do you evict Black’s king cleanly?",
    "options": [
      "Kg3 — Jump to f7 with check forcing Black off the h8 promotion square",
      "Ne6 — Step into stalemate clumsily on g6",
      "Ne4 — Retreat the knight needlessly",
      "Kf2 — Drop the king away back to e2"
    ],
    "correctIndex": 0,
    "recommendedSan": "Kg3",
    "explanation": "Kg3: 1.Nf7+ drives the king out so h8=Q wins immediately."
  },
  {
    "id": "qz-end-14",
    "category": "Endgame",
    "difficulty": "Easy",
    "theme": "Rook on the Seventh Dominance",
    "fen": "r5k1/5ppp/8/8/8/7P/5PP1/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White owns the open d-file. Convert active control into maximum pressure!",
    "options": [
      "f3 — Play a sleepy king move allowing ...Rfd8",
      "Kh1 — Invade onto the 7th rank with Rd7 immediately",
      "Rd4 — Defend passively along the 1st rank",
      "Re1 — Push f3 needlessly"
    ],
    "correctIndex": 1,
    "recommendedSan": "Kh1",
    "explanation": "Kh1: 1.Rd7 dominates the 7th rank and paralyzes Black’s queenside and kingside."
  },
  {
    "id": "qz-end-15",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Active King in Equal Pawn Endings",
    "fen": "6k1/5ppp/8/8/8/4K3/5PPP/8 w - - 0 1",
    "sideToMove": "White",
    "question": "Material is completely equal in a king-and-pawn ending. Where does White’s advantage lie?",
    "options": [
      "Kf4 — Play sluggish flank pawn moves conceding the race",
      "Kd2 — Step back toward e2",
      "Kd4 — Drive your centralized king aggressively toward d4/c5 or e5",
      "g3 — Trade off into a drawn pawn lock"
    ],
    "correctIndex": 2,
    "recommendedSan": "Kd4",
    "explanation": "Kd4: King activity dominates pawn endgames; rushing toward central entry squares creates decisive zugzwang."
  },
  {
    "id": "qz-end-16",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Liquidation into Won K+P Ending",
    "fen": "3q2k1/5pp1/7p/8/P7/6P1/5P1P/3Q2K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White holds a distant outside passed a-pawn. Calculate the cleanest conversion!",
    "options": [
      "a5 — Keep queens on unnecessarily allowing perpetual checks",
      "Qd2 — Retreat passively on the 1st rank",
      "Qg4 — Advance f4 exposing your king shelter",
      "Qxd8+ — Trade queens immediately to win easily with the outside a-pawn"
    ],
    "correctIndex": 3,
    "recommendedSan": "Qxd8+",
    "explanation": "Qxd8+: 1.Qxd8+ liquidates straight into a trivially won outside-passer pawn ending."
  }
];
