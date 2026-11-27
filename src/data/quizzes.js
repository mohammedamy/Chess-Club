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
  },
  {
    "id": "qz-open-17",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Damiano Defense Queen Check Punishment",
    "fen": "rnbqkbnr/pppp2pp/8/4p3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 4",
    "sideToMove": "White",
    "question": "Black recaptured the sacrificed knight on e5. How does White immediately win material or wreck Black’s king?",
    "options": [
      "Qh5+ — Deliver a lethal queen check on h5 attacking e5 and g6",
      "Bc4 — Develop quietly without exploiting the open e8-h5 diagonal",
      "d4 — Push the d-pawn slowly while Black consolidates",
      "Nc3 — Develop a knight passively and miss the forcing check"
    ],
    "correctIndex": 0,
    "recommendedSan": "Qh5+",
    "explanation": "Qh5+: After 4.Qh5+ g6 5.Qxe5+, White wins the e5 pawn and forks the h8 rook."
  },
  {
    "id": "qz-open-18",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Ruy Lopez Morphy Retreat",
    "fen": "r1bqk2r/2ppbppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq b6 0 7",
    "sideToMove": "White",
    "question": "Black drove the bishop back with ...b5. Where does White’s Spanish bishop retreat to stay aimed at f7?",
    "options": [
      "d4 — Push in the center immediately and blunder the a4 bishop",
      "Bb3 — Preserve the bishop on the a2-g8 diagonal aiming at d5 and f7",
      "Nxe5 — Sacrifice a knight prematurely while a4 hangs",
      "c3 — Ignore the threat on a4 and lose a full piece"
    ],
    "correctIndex": 1,
    "recommendedSan": "Bb3",
    "explanation": "Bb3: 7.Bb3 keeps the bishop safely targeting f7 and prepares c3 and d4."
  },
  {
    "id": "qz-open-19",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Greco Gambit Double Attack",
    "fen": "r1bqk1nr/pppp1ppp/2n5/b7/2B1P3/2p2N2/P4PPP/RNBQ1RK1 w kq - 0 8",
    "sideToMove": "White",
    "question": "Black grabbed a third pawn on c3. Which aggressive queen sortie targets f7 and b7 simultaneously?",
    "options": [
      "Nxc3 — Recapture passively allowing ...Bxc3 and easy Black development",
      "Re1 — Centralize a rook slowly while Black consolidates extra pawns",
      "Qb3 — Create a crushing battery on f7 while attacking b7 and c3",
      "e5 — Push e5 prematurely without creating concrete threats"
    ],
    "correctIndex": 2,
    "recommendedSan": "Qb3",
    "explanation": "Qb3: 8.Qb3! hits f7 immediately, forcing ...Qf6 or ...Qe7 while White retains a roaring initiative."
  },
  {
    "id": "qz-open-20",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Légal’s Mate Motif in the Philidor",
    "fen": "rn1qkbnr/ppp2p1p/3p2p1/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5",
    "sideToMove": "White",
    "question": "Black neglected f7 and the d5 square with ...g6. Find White’s famous tactical strike!",
    "options": [
      "h3 — Ask the bishop meekly to trade or retreat",
      "d3 — Play a quiet pawn move missing the decisive combination",
      "Be2 — Unpin passively and let Black finish development",
      "Nxe5 — Ignore the pin on d1 — if ...Bxd1, Bxf7+ Ke7 Nd5# is checkmate"
    ],
    "correctIndex": 3,
    "recommendedSan": "Nxe5",
    "explanation": "Nxe5: 5.Nxe5! wins a clean pawn because 5...Bxd1?? walks into 6.Bxf7+ Ke7 7.Nd5#."
  },
  {
    "id": "qz-open-21",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Queen’s Gambit Accepted Diagonal Trap",
    "fen": "rnbqkbnr/p3pppp/8/1p6/2pP4/4P3/1P3PPP/RNBQKBNR w KQkq - 0 6",
    "sideToMove": "White",
    "question": "Black tried to hold the c4 pawn with ...b5 and ...cxb5. Punish the wide-open a8-h1 diagonal!",
    "options": [
      "Qf3 — Attack the trapped a8 rook along the open long diagonal",
      "b3 — Play slowly on the queenside letting Black protect a8",
      "Nc3 — Develop a knight and miss the immediate rook win",
      "Nf3 — Develop normally while Black closes the diagonal with ...Bb7"
    ],
    "correctIndex": 0,
    "recommendedSan": "Qf3",
    "explanation": "Qf3: 6.Qf3! wins at least a minor piece because Black cannot save the a8 rook without dropping b8/c6."
  },
  {
    "id": "qz-open-22",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Noah’s Ark Trap in the Ruy Lopez",
    "fen": "r1bqkbnr/2p2ppp/p2p4/1p6/3QP3/1B6/PPP2PPP/RNB1K2R b KQkq - 0 8",
    "sideToMove": "Black",
    "question": "White snapped back on d4 with the queen instead of playing Bd5. Spring the classic Noah’s Ark Trap!",
    "options": [
      "Nf6 — Develop quietly allowing White’s bishop to escape via Bd5",
      "c5 — Drive the queen away first and prepare ...c4 trapping the b3 bishop",
      "Be7 — Ignore the trapped bishop and let White castle safely",
      "Bb7 — Develop on b7 missing the winning pawn fork on the bishop"
    ],
    "correctIndex": 1,
    "recommendedSan": "c5",
    "explanation": "c5: After 8...c5 9.Qd5 Be6 10.Qc6+ Bd7 11.Qd5 c4, White’s Spanish bishop is trapped completely."
  },
  {
    "id": "qz-open-23",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Punishing Passive ...h6 in the Italian",
    "fen": "r1bqk1nr/pppp1pp1/2n4p/2b5/2BNP3/8/PPP2PPP/RNBQK2R w KQkq - 1 6",
    "sideToMove": "White",
    "question": "Black skipped developing g8 and left f7 exposed. Find White’s tactical opening blow!",
    "options": [
      "Nc3 — Develop calmly allowing Black to defend f7 comfortably",
      "O-O — Castle quietly and miss the concrete sacrifice on f7",
      "Bxf7+ — Drag Black’s king out with check before playing Qh5+ or Bxf7+",
      "Be3 — Trade on c5 slowly without testing Black’s king safety"
    ],
    "correctIndex": 2,
    "recommendedSan": "Bxf7+",
    "explanation": "Bxf7+: 6.Bxf7+! Kxf7 7.Qh5+ g6 8.Qxc5 wins a pawn and strands Black’s king."
  },
  {
    "id": "qz-open-24",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Caro-Kann Panov Poisoned b2 Pawn",
    "fen": "r1b1kb1r/pp2pppp/2n2n2/3P2B1/3P4/2N5/Pq3PPP/R2QKBNR w KQkq - 0 8",
    "sideToMove": "White",
    "question": "Black greedily grabbed the b2 pawn while White’s c3 knight hangs. Find White’s crushing defensive-attacking reply!",
    "options": [
      "Rb1 — Chase the queen immediately while leaving c3 undefended to ...Qxc3+",
      "Na4 — Jump to the rim allowing ...Qb4+ with counterplay",
      "Qd2 — Lose a rook on a1 after ...Qxa1+ if Black exchanges queens",
      "Rc1 — Defend c3 with the rook while threatening Nb5 or Na4 against Black’s queen"
    ],
    "correctIndex": 3,
    "recommendedSan": "Rc1",
    "explanation": "Rc1: 8.Rc1! protects c3, keeps a1 safe, and traps Black’s overextended queen in tactical trouble."
  },
  {
    "id": "qz-open-25",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "French Winawer Poisoned e5 Pawn",
    "fen": "r3kbnr/pp1b1ppp/4p3/3pq3/8/2NB4/PP3PPP/R1BQ1RK1 w kq - 0 11",
    "sideToMove": "White",
    "question": "Black snatched the e5 pawn with the queen. How does White seize an overwhelming lead in development?",
    "options": [
      "Re1 — Attack the exposed queen along the e-file while threatening Nxd5",
      "Qf3 — Develop slowly without tempo on the centralized queen",
      "Be3 — Allow ...Bc5 or ...Nf6 comfortably for Black",
      "Qb3 — Hit b7 while Black easily consolidates with ...Bc6"
    ],
    "correctIndex": 0,
    "recommendedSan": "Re1",
    "explanation": "Re1: 11.Re1! gains a huge tempo against the queen and prepares Nxd5! or Bf4."
  },
  {
    "id": "qz-open-26",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Ruy Lopez: Retreating to b3 vs. Center Push",
    "fen": "r1bqkbnr/2pp2pp/p1n5/1p2Pp2/B2p4/5N2/PPP2PPP/RNBQK2R w KQkq b6 0 7",
    "sideToMove": "White",
    "question": "Black pushed ...b5 to kick the bishop amid an open center. Choose White’s strongest continuation!",
    "options": [
      "Bg5 — Counter-pin the queen too loosely while a4 hangs",
      "Bb3 — Retreat cleanly to b3, keeping eyes on d5 and f7 with a strong initiative",
      "c3 — Ignore the bishop attack and drop a piece",
      "O-O — Castle while leaving the a4 bishop hanging to ...bxa4"
    ],
    "correctIndex": 1,
    "recommendedSan": "Bb3",
    "explanation": "Bb3: Saving the bishop on b3 preserves full compensation and targets Black’s weakened dark squares."
  },
  {
    "id": "qz-open-27",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Budapest Gambit Smothered Mate",
    "fen": "r1b1k2r/ppppqppp/2n5/4n3/1PP2B2/5N2/1P1NPPPP/R2QKB1R b KQkq - 0 8",
    "sideToMove": "Black",
    "question": "White greedily captured the bishop on b4. Deliver checkmate on the spot!",
    "options": [
      "Nxf3+ — Take on f3 blindly and allow White to survive",
      "Nxc4 — Capture a pawn instead of delivering immediate mate",
      "Nd3# — Jump to d3 for a stunning smothered checkmate exploiting the pinned e2 pawn",
      "O-O — Castle calmly and throw away a forced mate in one"
    ],
    "correctIndex": 2,
    "recommendedSan": "Nd3#",
    "explanation": "Nd3#: Because the Qe7 pins e2 to White’s king, 8...Nd3# is an instant smothered mate!"
  },
  {
    "id": "qz-open-28",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Ruy Lopez Tarrasch Trap",
    "fen": "r4rk1/2pqbppp/p1n1b3/1p1pP3/3Nn3/1BP5/PP3PPP/RNBQR1K1 w - - 5 12",
    "sideToMove": "White",
    "question": "Black neglected the classic Tarrasch Trap by playing ...Qd7 instead of ...Nxd4. Win a clean piece or wreck Black’s center!",
    "options": [
      "Bc2 — Retreat quietly missing the tactical win on e6",
      "Be3 — Develop peacefully while Black consolidates e4",
      "Nxc6 — Trade on c6 and let Black recapture cleanly with ...Qxc6",
      "Nxe6 — Eliminate the e6 defender — after ...fxe6 Rxe4 wins because d5 is pinned"
    ],
    "correctIndex": 3,
    "recommendedSan": "Nxe6",
    "explanation": "Nxe6: 12.Nxe6! fxe6 13.Rxe4! wins a piece/pawn cleanly since 13...dxe4?? loses the d7 queen."
  },
  {
    "id": "qz-open-29",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Queen’s Indian / Catalan Central Capture",
    "fen": "rn1qkb1r/p2p1ppp/bp3n2/2pp4/2P5/5NP1/PPQ1PP1P/RNB1KB1R w KQkq - 0 7",
    "sideToMove": "White",
    "question": "Black left the d5 pawn vulnerable after ...Ba6 and ...c5. Clarify the center with gain of tempo!",
    "options": [
      "cxd5 — Open the center right away, forcing an awkward recapture and keeping a6 loose",
      "Nc3 — Allow ...d4 to drive the knight and shield Black’s center",
      "b3 — Play slowly and let Black capture on c4 comfortably",
      "Bg2 — Complete the fianchetto while losing the central c4 pawn"
    ],
    "correctIndex": 0,
    "recommendedSan": "cxd5",
    "explanation": "cxd5: 7.cxd5! leaves Black’s a6 bishop offside while White claims central control and tempo."
  },
  {
    "id": "qz-open-30",
    "category": "Openings",
    "difficulty": "Medium",
    "theme": "Lasker Trap in the Albin Countergambit",
    "fen": "rnbqk1nr/ppp2ppp/8/4P3/1BP5/4p3/PP3PPP/RN1QKBNR b KQkq - 0 6",
    "sideToMove": "Black",
    "question": "White took the b4 bishop overlooking Black’s tactical resource. Unleash the Lasker Trap!",
    "options": [
      "Nc6 — Develop quietly and simply remain a piece down",
      "exf2+ — Check on f2 first — after Ke2 fxg1=N+! wins the queen or decisive material",
      "Qxd1+ — Trade queens and lose all tactical compensation",
      "Qh4 — Threaten f2 slowly while White plays g3 and consolidates"
    ],
    "correctIndex": 1,
    "recommendedSan": "exf2+",
    "explanation": "exf2+: 6...exf2+! forces 7.Ke2 fxg1=N+! 8.Rxg1 Bg4+, winning White’s queen on d1."
  },
  {
    "id": "qz-open-31",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Caro-Kann Two Knights Mate Trap",
    "fen": "rn1qkbnr/pp3ppb/2p1p2p/4N2Q/7P/6N1/PPPP1PP1/R1B1KB1R w KQkq - 0 9",
    "sideToMove": "White",
    "question": "Black blocked the e-file passively with ...e6 instead of ...Qd5 or ...g6. Deliver instant checkmate!",
    "options": [
      "Bc4 — Develop a bishop and miss checkmate in one",
      "d4 — Grab central space while missing Qxf7#",
      "Qxf7# — Capture on f7 with the queen supported by the e5 knight for instant checkmate",
      "Qe2 — Retreat the queen passively for no reason"
    ],
    "correctIndex": 2,
    "recommendedSan": "Qxf7#",
    "explanation": "Qxf7#: Protected by the e5 knight, 9.Qxf7# ends the game immediately!"
  },
  {
    "id": "qz-open-32",
    "category": "Openings",
    "difficulty": "Easy",
    "theme": "Elephant Trap in the Queen’s Gambit Declined",
    "fen": "r1bqkb1r/pppn1ppp/5n2/3N2B1/3P4/8/PP2PPPP/R2QKBNR b KQkq - 0 6",
    "sideToMove": "Black",
    "question": "White fell for the Elephant Trap by taking on d5, thinking f6 is pinned. Punish White right now!",
    "options": [
      "Be7 — Accept being down a pawn without spotting ...Bb4+",
      "c6 — Defend d5 passively a full pawn down",
      "Bd6 — Develop quietly and remain down a central pawn",
      "Nxd5 — Recapture on d5 anyway — after Bxd8, ...Bb4+ wins the queen back plus a full piece"
    ],
    "correctIndex": 3,
    "recommendedSan": "Nxd5",
    "explanation": "Nxd5: 6...Nxd5! 7.Bxd8 Bb4+ 8.Qd2 Bxd2+ 9.Kxd2 Kxd8 leaves Black up a full minor piece."
  },
  {
    "id": "qz-tac-17",
    "category": "Tactics",
    "difficulty": "Easy",
    "theme": "Royal Knight Fork",
    "fen": "4k3/8/8/3q4/8/2N5/8/4K3 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s queen sits in the center without checking White. Find the cleanest winning strike!",
    "options": [
      "Nxd5 — Capture the undefended queen directly with the knight",
      "Ke2 — Walk the king out and leave the queen on the board",
      "Kf1 — Step back passively missing the free queen",
      "Ne4 — Jump to e4 allowing Black’s queen to escape with check"
    ],
    "correctIndex": 0,
    "recommendedSan": "Nxd5",
    "explanation": "Nxd5: 1.Nxd5 captures the undefended queen cleanly and wins on the spot."
  },
  {
    "id": "qz-tac-18",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Boden’s Mate Criss-Cross Bishops",
    "fen": "2kr4/p2n1ppp/1p6/2p5/5B2/2PB4/P1P2PPP/2KR4 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s king is hemmed in on c8 behind its own rook and pawns. Deliver Boden’s Mate!",
    "options": [
      "Bf5 — Pin the d7 knight slowly instead of mating on the spot",
      "Ba6# — Criss-cross the two bishops on a6-f1 and f4-b8 for instant checkmate",
      "Re1 — Activate a rook when mate in one is on the board",
      "h3 — Make quiet luft and throw away the immediate checkmate"
    ],
    "correctIndex": 1,
    "recommendedSan": "Ba6#",
    "explanation": "Ba6#: 1.Ba6# completes Boden’s Mate — the f4 bishop seals b8 while Ba6 delivers mate."
  },
  {
    "id": "qz-tac-19",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Back-Rank Deflection Capture",
    "fen": "3r2k1/5ppp/p7/1p6/3Q4/8/PP3PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s d8 rook is overloaded guarding both the back rank and d4. Strike decisively!",
    "options": [
      "Qd7 — Step onto d7 allowing ...Rxd7 and losing the queen",
      "Kf1 — Move the king quietly missing mate in one",
      "Qxd8# — Capture the d8 rook directly for immediate back-rank checkmate",
      "h3 — Push a flank pawn and miss the back-rank mate"
    ],
    "correctIndex": 2,
    "recommendedSan": "Qxd8#",
    "explanation": "Qxd8#: Supported by Rd1, 1.Qxd8# delivers instant back-rank checkmate."
  },
  {
    "id": "qz-tac-20",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Bishop-Rook Mating Net",
    "fen": "6k1/5p2/6p1/1r6/8/8/1B3PPP/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White’s dark-squared bishop slices across h8 while Black’s back rank is unguarded. Find the winning move!",
    "options": [
      "Bc3 — Retreat the bishop passively missing mate in two",
      "Re2 — Move the rook sideways and allow Black to defend the back rank",
      "h3 — Create luft slowly when forced mate is available",
      "Re8+ — Check on the 8th rank so Black’s king steps into Rh8#"
    ],
    "correctIndex": 3,
    "recommendedSan": "Re8+",
    "explanation": "Re8+: 1.Re8+ Kh7 2.Rh8# delivers a classic rook-and-bishop edge mate."
  },
  {
    "id": "qz-tac-21",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Back-Rank Deflection Mate",
    "fen": "3r2k1/5ppp/8/8/8/8/3Q1PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White has doubled queen and rook on the d-file. Finish the game right now!",
    "options": [
      "Qxd8# — Smash d8 with the queen for immediate back-rank checkmate",
      "Qc2 — Move off the d-file and let Black escape with ...Kf8 or ...h6",
      "Qe2 — Retreat passively and miss mate in one",
      "Re1 — Abandon the d-file and throw away the mate"
    ],
    "correctIndex": 0,
    "recommendedSan": "Qxd8#",
    "explanation": "Qxd8#: 1.Qxd8# mates immediately with Rd1 backing up the queen."
  },
  {
    "id": "qz-tac-22",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Long-Diagonal Pin Capture",
    "fen": "7k/8/8/3q4/8/8/6B1/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s queen wandered onto the long light-squared diagonal with the king behind it. Punish it!",
    "options": [
      "Bf3 — Retreat off the target square and let Black’s queen escape",
      "Bxd5 — Capture the pinned queen cleanly with the g2 bishop",
      "Kh1 — Step to the corner while missing the free queen",
      "Kf1 — Move the king aimlessly and lose the game"
    ],
    "correctIndex": 1,
    "recommendedSan": "Bxd5",
    "explanation": "Bxd5: 1.Bxd5 wins the queen outright along the a8-h1 diagonal."
  },
  {
    "id": "qz-tac-23",
    "category": "Tactics",
    "difficulty": "Advanced",
    "theme": "Absolute Pin on the e-File",
    "fen": "4k3/8/4r3/8/8/4Q3/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s rook sits pinned or exposed on e6 in front of the e8 king. Cash in cleanly!",
    "options": [
      "Qa7 — Wander to the queenside and allow ...Rxe3",
      "Kf1 — Step calmly with the king and lose the queen to ...Rxe3",
      "Qxe6+ — Snap off the e6 rook with check to enter a won pawn ending",
      "h3 — Push a flank pawn and blunder the queen"
    ],
    "correctIndex": 2,
    "recommendedSan": "Qxe6+",
    "explanation": "Qxe6+: 1.Qxe6+ wins the rook with check and leaves White an easy 3-pawn win."
  },
  {
    "id": "qz-tac-24",
    "category": "Tactics",
    "difficulty": "Easy",
    "theme": "Long-Diagonal Queen Snatch",
    "fen": "r4rk1/pp3ppp/2p5/4q3/8/2B5/PP3PPP/R2Q1RK1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s centralized queen is undefended along the c3-h8 diagonal. Strike immediately!",
    "options": [
      "Qd4 — Offer a queen trade instead of winning a whole queen",
      "Re1 — Attack the queen slowly and let it escape",
      "h3 — Make luft while missing a free queen",
      "Bxe5 — Capture the undefended e5 queen cleanly with the c3 bishop"
    ],
    "correctIndex": 3,
    "recommendedSan": "Bxe5",
    "explanation": "Bxe5: 1.Bxe5 wins a full queen because e5 has no defender."
  },
  {
    "id": "qz-tac-25",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Opera Mate Pattern",
    "fen": "3rk3/5p2/8/6B1/8/8/8/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s king is pinned to the back rank with f7 blocking escape. Deliver the Opera Mate!",
    "options": [
      "Rxd8# — Capture the d8 rook for instant Opera checkmate guarded by the g5 bishop",
      "Bxd8 — Capture with the bishop and miss immediate checkmate",
      "Rd2 — Retreat passively and surrender the d-file",
      "Kf2 — Bring the king out and allow ...Rxd1"
    ],
    "correctIndex": 0,
    "recommendedSan": "Rxd8#",
    "explanation": "Rxd8#: 1.Rxd8# is the famous Opera Mate (Paul Morphy, 1858) with Bg5 sealing e7 and f6."
  },
  {
    "id": "qz-tac-26",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Pin Liquidation on the e-File",
    "fen": "4k3/8/4r3/8/8/5P2/4R3/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s rook is pinned to the e8 king. Convert cleanly into a winning pawn endgame!",
    "options": [
      "Kf2 — Move the king slowly and let Black capture on e2",
      "Rxe6+ — Capture on e6 with check to trade into an easily won K+P ending",
      "Kf1 — Step back passively and allow ...Rxe2",
      "f4 — Push the pawn and lose the e2 rook for free"
    ],
    "correctIndex": 1,
    "recommendedSan": "Rxe6+",
    "explanation": "Rxe6+: 1.Rxe6+! eliminates the rook with check, leaving White’s f-pawn unstoppable."
  },
  {
    "id": "qz-tac-27",
    "category": "Tactics",
    "difficulty": "Advanced",
    "theme": "Philidor’s Legacy (Smothered Mate)",
    "fen": "5r1k/6pp/7N/3Q4/8/8/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White’s knight sits on h6 and queen aims at g8. Deliver Philidor’s famous smothered mate in two!",
    "options": [
      "Nf7+ — Check on f7 prematurely allowing ...Rxf7",
      "Qd1 — Retreat the queen and throw away the forced mate",
      "Qg8+ — Sacrifice the queen on g8 forcing ...Rxg8, followed by Nf7#",
      "Kf1 — Play quietly and lose the winning attack"
    ],
    "correctIndex": 2,
    "recommendedSan": "Qg8+",
    "explanation": "Qg8+: 1.Qg8+! Rxg8 2.Nf7# smothers Black’s king in the corner!"
  },
  {
    "id": "qz-tac-28",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Queen Overload on the Back Rank",
    "fen": "4r1k1/1p3ppp/p7/3q4/3R4/1P6/P4PPP/4Q1K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s e8 rook is defended only by the d5 queen — which is also attacked by Rd4! Find the killer move!",
    "options": [
      "Rxd5 — Capture the queen and blunder ...Rxe1# back-rank mate!",
      "Qd2 — Defend the first rank passively missing mate on e8",
      "Kf1 — Make luft slowly while missing Qxf8/Qxe8#",
      "Qxe8# — Capture the e8 rook immediately for back-rank checkmate"
    ],
    "correctIndex": 3,
    "recommendedSan": "Qxe8#",
    "explanation": "Qxe8#: 1.Qxe8# mates immediately! Notice 1.Rxd5?? would blunder 1...Rxe1#."
  },
  {
    "id": "qz-tac-29",
    "category": "Tactics",
    "difficulty": "Easy",
    "theme": "Knight Fork of King and Rook",
    "fen": "r3k3/8/8/3N4/8/8/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s king and rook stand on e8 and a8. Deliver the classic knight fork!",
    "options": [
      "Nc7+ — Fork king on e8 and rook on a8 from c7 with check",
      "Nb6 — Attack the rook without check, allowing Black’s rook to escape",
      "Ne3 — Retreat the knight passively missing the fork",
      "Kf1 — Move the king and let Black castle or move the rook"
    ],
    "correctIndex": 0,
    "recommendedSan": "Nc7+",
    "explanation": "Nc7+: 1.Nc7+ forks e8 and a8 cleanly, winning the rook on the next move."
  },
  {
    "id": "qz-tac-30",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "King Hunt Down the Open e-File",
    "fen": "r3k2r/pp3ppp/8/8/3Q4/8/PP3PPP/R4RK1 w kq - 0 1",
    "sideToMove": "White",
    "question": "Black’s king is stranded in the middle with castling rights still unexercised. Seize the e-file with check!",
    "options": [
      "Qxg7 — Grab the g7 pawn while Black castles or runs with ...Kf8/...Rf8",
      "Rfe1+ — Check along the open e-file to strip castling and launch a decisive king hunt",
      "Qa4+ — Give an aimless queen check allowing ...Kf8 or ...b5",
      "Rad1 — Develop the wrong rook without check"
    ],
    "correctIndex": 1,
    "recommendedSan": "Rfe1+",
    "explanation": "Rfe1+: 1.Rfe1+ Kf8 2.Qd6+ Kg8 3.Re7 overwhelms Black’s uncoordinated rooks."
  },
  {
    "id": "qz-tac-31",
    "category": "Tactics",
    "difficulty": "Advanced",
    "theme": "Decoy Into a Knight Fork",
    "fen": "4k3/4r3/8/4N3/8/8/4Q3/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s rook sits on e7 guarding e8, yet a lateral queen check lures Black’s king into a fatal fork!",
    "options": [
      "Nc6 — Attack the rook directly allowing ...Rxe2 winning the queen!",
      "Ng6 — Move the knight passively and lose the queen to ...Rxe2",
      "Qb5+ — Check on b5 — blocking with ...Kd8 or ...Kf8 runs into Nc6+! forking king and rook",
      "Kf1 — Unpin slowly allowing ...Rxe5 with equality"
    ],
    "correctIndex": 2,
    "recommendedSan": "Qb5+",
    "explanation": "Qb5+: After 1.Qb5+ Kd8 (or Kf8) 2.Nc6+! forks the king and e7 rook."
  },
  {
    "id": "qz-tac-32",
    "category": "Tactics",
    "difficulty": "Medium",
    "theme": "Back-Rank Queen Overload",
    "fen": "3q2k1/5ppp/8/8/3Q4/8/5PPP/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s queen on d8 is tied to defending the back rank against Re8+. Exploit the overload!",
    "options": [
      "Qe3 — Retreat off the d-file and miss mate in one",
      "Re3 — Lift the rook and allow ...Qxd4",
      "h3 — Push a pawn and blunder the d4 queen to ...Qxd4",
      "Qxd8# — Capture the d8 queen directly for checkmate supported by Re1"
    ],
    "correctIndex": 3,
    "recommendedSan": "Qxd8#",
    "explanation": "Qxd8#: 1.Qxd8# is immediate checkmate because Black’s back rank has no flight square."
  },
  {
    "id": "qz-str-17",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Winning a Stranded Bishop on the Edge",
    "fen": "6k1/5p2/6p1/8/7b/5P1P/6P1/4B1K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s dark-squared bishop wandered to h4 without support. Simplify cleanly into a winning endgame!",
    "options": [
      "Bxh4 — Capture the undefended h4 bishop to win a full piece outright",
      "Kf1 — Move the king quietly and let Black escape with ...Bxe1",
      "Bf2 — Offer a trade on f2 that allows ...Bxf2+",
      "g3 — Kick the bishop and miss capturing it for free"
    ],
    "correctIndex": 0,
    "recommendedSan": "Bxh4",
    "explanation": "Bxh4: 1.Bxh4 captures the stranded bishop cleanly."
  },
  {
    "id": "qz-str-18",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Seizing the Open c-File With Check",
    "fen": "2r3k1/1p2qppp/p3p3/3n4/3P4/4P3/PP1NQPPP/2R3K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Both rooks contest the open c-file, yet Black’s back rank lacks luft. Seize the c-file cleanly!",
    "options": [
      "Nb3 — Allow ...Rxc1+ handing the c-file over to Black",
      "Rxc8+ — Trade rooks with check — Black’s queen is deflected or forced onto the back rank",
      "Nc4 — Jump forward allowing ...Rxc1+ and losing control",
      "Kf1 — Step the king while Black takes on c1 with check"
    ],
    "correctIndex": 1,
    "recommendedSan": "Rxc8+",
    "explanation": "Rxc8+: 1.Rxc8+ forces 1...Qf8 2.Rxf8+ Kxf8, winning a full rook because Black’s queen was overloaded!"
  },
  {
    "id": "qz-str-19",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Transforming Knight Domination Into Material",
    "fen": "8/3b2k1/p1p1p3/1p1pNp2/1P1P1P2/P1P1PKP1/8/8 w - - 0 1",
    "sideToMove": "White",
    "question": "White’s octopus knight on e5 dominates Black’s locked d7 bishop. Cash in your positional advantage!",
    "options": [
      "Kf2 — Wait passively and allow Black to rescue the d7 bishop",
      "Ke2 — Walk away and let Black play ...Be8 safely",
      "Nxd7 — Capture the undefended bad bishop on d7 to enter a winning pawn ending",
      "g4 — Push on the kingside while missing the free piece on d7"
    ],
    "correctIndex": 2,
    "recommendedSan": "Nxd7",
    "explanation": "Nxd7: 1.Nxd7 captures the trapped bishop and leaves White up a full knight."
  },
  {
    "id": "qz-str-20",
    "category": "Strategy",
    "difficulty": "Advanced",
    "theme": "Dominating the Sole Open d-File",
    "fen": "3r2k1/pp3ppp/2p5/8/8/2P5/PP3PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Only the d-file is open and Black’s back rank has no luft. Punish the back-rank weakness immediately!",
    "options": [
      "Re1 — Give up the d-file passively and miss mate",
      "Kf1 — Make king luft slowly when mate in one exists",
      "h3 — Push a flank pawn and allow Black to create luft with ...Kf8",
      "Rxd8# — Invade d8 cleanly for checkmate along the sole open file"
    ],
    "correctIndex": 3,
    "recommendedSan": "Rxd8#",
    "explanation": "Rxd8#: 1.Rxd8# proves why ceding an open file without back-rank luft is fatal."
  },
  {
    "id": "qz-str-21",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Simplifying Into a Won Pawn Ending",
    "fen": "6k1/5ppp/8/2b5/8/4B3/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s bishop on c5 is undefended. Liquidate cleanly into a winning king-and-pawn endgame!",
    "options": [
      "Bxc5 — Capture the undefended c5 bishop immediately",
      "Kf1 — Step the king calmly and let Black save the c5 bishop",
      "g3 — Push pawns while Black retreats the bishop to safety",
      "h3 — Waste a tempo and miss winning a full piece"
    ],
    "correctIndex": 0,
    "recommendedSan": "Bxc5",
    "explanation": "Bxc5: 1.Bxc5 wins a clear bishop and decides the endgame effortlessly."
  },
  {
    "id": "qz-str-22",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Exploiting Pin Along the e-File",
    "fen": "2r3k1/5ppp/4b3/8/2B5/8/4RPPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s c8 rook and e6 bishop are uncoordinated while c4 is pinned? Find the cleanest way to keep material!",
    "options": [
      "Bxe6 — Allow ...Rc1+ 2.Re1 Rxe1# back-rank disaster!",
      "Rxe6 — Capture the e6 bishop with the rook — if ...Rxc4 then Re8# is mate!",
      "Rc2 — Defend passively and drop the c4 bishop to ...Bxc4",
      "Kf1 — Ignore the threats and lose the c4 bishop to ...Bxc4"
    ],
    "correctIndex": 1,
    "recommendedSan": "Rxe6",
    "explanation": "Rxe6: 1.Rxe6! wins a clean piece because 1...Rxc4 allows 2.Re8# and 1...fxe6 allows 2.Bxe6+."
  },
  {
    "id": "qz-str-23",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Targetting the Backward d6 Pawn",
    "fen": "2r2rk1/1p3ppp/p2p4/8/8/2P5/PP3PPP/2RR2K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s backward d6 pawn sits on the half-open d-file without support. Harvest the structural weakness!",
    "options": [
      "Rd4 — Lift the rook slowly and allow ...Rc6 defending d6",
      "c4 — Push c4 while Black defends d6 with ...Rfd8",
      "Rxd6 — Capture the weak backward d6 pawn directly with the d1 rook",
      "Kf1 — Bring the king out and let Black protect d6 cleanly"
    ],
    "correctIndex": 2,
    "recommendedSan": "Rxd6",
    "explanation": "Rxd6: 1.Rxd6 wins the backward pawn outright and plants a rook on the 6th rank."
  },
  {
    "id": "qz-str-24",
    "category": "Strategy",
    "difficulty": "Advanced",
    "theme": "Trading Rooks Into a Back-Rank Mate",
    "fen": "2r3k1/1p3ppp/p3p3/8/8/P3P3/1PR2PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s c8 rook contests the open c-file while the 8th rank is unventilated. Strike cleanly!",
    "options": [
      "Rd2 — Abandon the open c-file and let Black invade on c1",
      "Kf1 — Step to f1 and allow ...Rxc2",
      "h3 — Create luft slowly when mate in one is available",
      "Rxc8# — Capture on c8 for immediate back-rank checkmate"
    ],
    "correctIndex": 3,
    "recommendedSan": "Rxc8#",
    "explanation": "Rxc8#: 1.Rxc8# punishes Black’s lack of back-rank luft immediately."
  },
  {
    "id": "qz-str-25",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Liquidating Opposite-Colored Bishops to Win",
    "fen": "8/5pk1/6p1/3b3p/2B5/5PK1/6PP/8 w - - 0 1",
    "sideToMove": "White",
    "question": "Normally opposite-colored bishops draw, EXCEPT when trading enters a won pawn ending! Play it!",
    "options": [
      "Bxd5 — Capture the d5 bishop right away to win easily in the king-and-pawn ending",
      "Bb5 — Avoid the trade and allow Black to hold an opposite-bishop fortress",
      "Kf4 — Advance the king while Black saves the d5 bishop",
      "h4 — Push a flank pawn and miss winning a full piece"
    ],
    "correctIndex": 0,
    "recommendedSan": "Bxd5",
    "explanation": "Bxd5: 1.Bxd5 wins the bishop cleanly and ends all opposite-bishop drawing hopes."
  },
  {
    "id": "qz-str-26",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Knight Outpost Harvesting Weak Pawns",
    "fen": "6k1/1p3p1p/p2b2p1/3P4/4N3/1P5P/P4PP1/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White’s centralized knight eyes Black’s loose bishop on d6. Convert the outpost!",
    "options": [
      "Kf1 — Walk the king out and let Black rescue the d6 bishop",
      "Nxd6 — Capture the undefended dark-squared bishop on d6",
      "Nc3 — Retreat the knight passively missing the free bishop",
      "g3 — Push a kingside pawn while Black moves the bishop away"
    ],
    "correctIndex": 1,
    "recommendedSan": "Nxd6",
    "explanation": "Nxd6: 1.Nxd6 captures the bishop cleanly and creates an overwhelming queenside advantage."
  },
  {
    "id": "qz-str-27",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Queenside Pawn Breakthrough Capture",
    "fen": "8/1p3ppp/p7/1b1k4/P7/1P1K2PP/2B2P2/8 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s bishop on b5 is stranded on the pawn’s diagonal. Cash in cleanly!",
    "options": [
      "Kc3 — Step forward slowly and let Black save the b5 bishop",
      "Kd2 — Step back passively missing the free bishop",
      "axb5 — Capture the undefended b5 bishop to simplify into a won endgame",
      "Ke3 — Move away and allow ...Bc6 safely"
    ],
    "correctIndex": 2,
    "recommendedSan": "axb5",
    "explanation": "axb5: 1.axb5 wins a full piece and creates an unstoppable queenside passed pawn."
  },
  {
    "id": "qz-str-28",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Winning Tempo Against the Isolated Pawn’s Bishop",
    "fen": "r1bq1rk1/pp3ppp/2n1pn2/2bp4/3P4/2NB1N2/PP3PPP/R1BQ1RK1 w - - 0 10",
    "sideToMove": "White",
    "question": "Black developed ...Bd6-c5 without protecting the bishop against d4xc5. Clarify the center with gain of tempo!",
    "options": [
      "Bg5 — Pin f6 while leaving Black’s c5 bishop alive",
      "Be3 — Challenge c5 passively instead of taking it",
      "a3 — Play slowly and let Black retreat ...Be7 comfortably",
      "dxc5 — Capture the c5 bishop or clarify the center cleanly with material gain"
    ],
    "correctIndex": 3,
    "recommendedSan": "dxc5",
    "explanation": "dxc5: 10.dxc5! wins the bishop outright because c5 was undefended."
  },
  {
    "id": "qz-str-29",
    "category": "Strategy",
    "difficulty": "Advanced",
    "theme": "Overloading the Back-Rank Defender",
    "fen": "2r3k1/5ppp/2q5/8/8/2Q5/5PPP/2R3K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s c6 queen is overloaded guarding both the c8 rook and the back rank. Strike decisively!",
    "options": [
      "Qxc6 — Capture the c6 queen — if ...Rxc6 then Rxc6 wins a full rook on the back rank",
      "Qe3 — Step off the c-file and let Black escape with ...Qd7",
      "h3 — Create luft passively and throw away the tactical strike",
      "Kf1 — Move the king while Black consolidates with ...Qxc3"
    ],
    "correctIndex": 0,
    "recommendedSan": "Qxc6",
    "explanation": "Qxc6: 1.Qxc6! wins a whole rook because 1...Rxc6?? allows 2.Rxc6 (threatening Rc8#) or 1...Rd8 allows Qxc8."
  },
  {
    "id": "qz-str-30",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Seizing the Open e-File Into Endgame Conversion",
    "fen": "4r1k1/pp1n1ppp/2p5/3p4/3P4/2PB1N2/PP3PPP/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s e8 rook sits undefended on the open e-file. Convert the file advantage immediately!",
    "options": [
      "Ne5 — Block your own e-file and let Black trade knights safely",
      "Rxe8+ — Capture the e8 rook with check, winning material cleanly on the open file",
      "Kf1 — Surrender the e-file to ...Rxe1+",
      "Bf5 — Ignore the e-file and allow ...Rxe1+"
    ],
    "correctIndex": 1,
    "recommendedSan": "Rxe8+",
    "explanation": "Rxe8+: 1.Rxe8+ Nf8 wins a full rook immediately because e8 was unprotected."
  },
  {
    "id": "qz-str-31",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Undermining the Queenside Pawn Wedge",
    "fen": "2rq1rk1/pb3ppp/1p1n4/2Pp4/PP2n3/2BBPN2/2Q2PPP/2R2RK1 b - - 0 17",
    "sideToMove": "Black",
    "question": "White pushed c5 to clamp Black’s queenside, yet left b4 and d6 tactics open. Undermine White’s wedge cleanly!",
    "options": [
      "a5 — Hit b4 slowly while White reinforces c5 with Bd4",
      "Nxc3 — Trade the strong e4 knight prematurely without breaking c5",
      "bxc5 — Capture on c5 right away to break White’s clamp and unleash a passed c-pawn",
      "Re8 — Play passively on the e-file allowing White to consolidate c5"
    ],
    "correctIndex": 2,
    "recommendedSan": "bxc5",
    "explanation": "bxc5: 17...bxc5! 18.bxc5 Nxc5 shatters White’s queenside bind and leaves Black with active central pieces."
  },
  {
    "id": "qz-str-32",
    "category": "Strategy",
    "difficulty": "Medium",
    "theme": "Prophylactic Restriction of the Pinning Bishop",
    "fen": "r3k2r/pp1n1ppp/2p1pn2/q2p4/1bPP4/2N1PN2/PP1B1PPP/R2QKB1R w KQkq - 0 8",
    "sideToMove": "White",
    "question": "Black’s dark-squared bishop pins c3 and eyes c3/d2. Question it immediately to reclaim queenside harmony!",
    "options": [
      "Be2 — Develop passively without challenging Black’s pin",
      "cxd5 — Open the center while Black keeps the annoying b4 pin",
      "Rc1 — Defend c3 passively and allow ...Ne4",
      "a3 — Force the b4 bishop to declare itself, gaining the bishop pair or tempo"
    ],
    "correctIndex": 3,
    "recommendedSan": "a3",
    "explanation": "a3: 8.a3! compels 8...Bxc3 9.Bxc3 Qc7, winning the bishop pair and freeing White’s queenside."
  },
  {
    "id": "qz-mid-17",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Knight Outpost Infiltration on d3",
    "fen": "r2qr1k1/p1p2ppp/8/1NR2b2/1n3Bn1/P4N2/1P1QpPPP/4R1K1 b - - 1 20",
    "sideToMove": "Black",
    "question": "White pushed a3 to kick the b4 knight while Black’s e2 pawn sits deep inside White’s camp. Jump to the decisive square!",
    "options": [
      "Nd3 — Plant the knight on d3, forking e1, c5, and f4 while shielding e2",
      "Qxd2 — Trade queens and release the attacking pressure around White’s king",
      "Nxh2 — Snatch a side pawn slowly and let White untangle",
      "Bg6 — Retreat passively without exploiting the d3 outpost"
    ],
    "correctIndex": 0,
    "recommendedSan": "Nd3",
    "explanation": "Nd3: 20...Nd3! seizes a devastating outpost hitting Re1, Rc5, and Bf4 simultaneously."
  },
  {
    "id": "qz-mid-18",
    "category": "Middlegame",
    "difficulty": "Advanced",
    "theme": "Sicilian Dragon ...Rxc3 Exchange Sacrifice",
    "fen": "r5k1/pp1bpp1p/3p1npQ/q7/2rNP1P1/2N2P2/PPP5/1K1R3R b - - 0 18",
    "sideToMove": "Black",
    "question": "White’s queen landed on h6 threatening g5 and Qxh7+. Launch Black’s iconic counterattack!",
    "options": [
      "Bc6 — Defend passively while White plays g5 and crashes through on h7",
      "Rxc3 — Sacrifice the exchange on c3 to shatter White’s king shelter and win e4",
      "Qe5 — Retreat the queen and surrender the queenside initiative",
      "Rac8 — Double slowly on the c-file without disrupting White’s attack"
    ],
    "correctIndex": 1,
    "recommendedSan": "Rxc3",
    "explanation": "Rxc3: 18...Rxc3! 19.bxc3 Qxc3 shatters White’s king shelter and generates lethal counterplay."
  },
  {
    "id": "qz-mid-19",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Prophylactic Bishop Retreat Preserves Edge",
    "fen": "1nr1r1k1/1bq1bp2/p2p2pp/Pp1Pp2n/4P3/1N3PB1/1P1N2PP/RB1QR1K1 w - - 1 22",
    "sideToMove": "White",
    "question": "Black’s knight on h5 attacks White’s dark-squared bishop on g3. Where should the bishop retreat cleanly?",
    "options": [
      "Rf1 — Allow ...Nxg3 leaving White with doubled kingside pawns",
      "Nc1 — Move a knight backward while Black captures the g3 bishop",
      "Bf2 — Drop the bishop to f2, staying active on the g1-a7 diagonal and guarding d4/b6",
      "Re2 — Ignore the threat on g3 and concede the bishop pair"
    ],
    "correctIndex": 2,
    "recommendedSan": "Bf2",
    "explanation": "Bf2: 22.Bf2! keeps the bishop pair intact and eyes the weakened b6 square."
  },
  {
    "id": "qz-mid-20",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Shattering White’s Queenside Structure",
    "fen": "rnb1qrk1/p4ppp/5n2/bPP1N3/2p1P3/2N2P2/1P4PP/R1BQKB1R b KQ - 0 11",
    "sideToMove": "Black",
    "question": "White’s pawn storm on b5-c5 looks menacing, yet the c3 knight is pinned/loose. Strike decisively!",
    "options": [
      "Qxe5 — Take e5 first and allow White’s b-pawn/Qd4 to consolidate",
      "Qxb5 — Grab a flank pawn while e5 remains protected and active",
      "Qd8 — Retreat passively and surrender all initiative",
      "Bxc3+ — Capture on c3 with check to ruin White’s pawns and win e5 next"
    ],
    "correctIndex": 3,
    "recommendedSan": "Bxc3+",
    "explanation": "Bxc3+: 11...Bxc3+ 12.bxc3 Qxe5 breaks White’s coordination and wins material."
  },
  {
    "id": "qz-mid-21",
    "category": "Middlegame",
    "difficulty": "Advanced",
    "theme": "Greek Gift With Knight Already on g5",
    "fen": "r1bq1rk1/pppn1ppp/4p3/3pP1N1/3P4/3B4/PPP2PPP/R1BQK2R w KQ - 0 10",
    "sideToMove": "White",
    "question": "White’s knight already stands on g5 and h7 lacks a defender on f6. Unleash the decisive sacrifice!",
    "options": [
      "Bxh7+ — Shatter the king shelter with Bxh7+, followed by Qh5 or Qxg4",
      "Qh5 — Attack h7 slowly allowing ...h6 to kick the g5 knight away",
      "O-O — Castle calmly and give Black time to play ...h6 or ...f5",
      "f4 — Push f4 slowly while missing the immediate forced attack"
    ],
    "correctIndex": 0,
    "recommendedSan": "Bxh7+",
    "explanation": "Bxh7+: 10.Bxh7+! Kh8 11.Qh5 forces Black into immediate defensive collapse."
  },
  {
    "id": "qz-mid-22",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Centralizing the Queen With Double Threats",
    "fen": "rnb2rk1/p4ppp/5n2/1PP1q3/2p1P3/2P2P2/6PP/R1BQKB1R w KQ - 0 13",
    "sideToMove": "White",
    "question": "Black’s queen sits exposed on e5 eyeing c3 and e4. Centralize White’s queen with crushing tempo!",
    "options": [
      "Be2 — Develop quietly and lose the c3 pawn to ...Qxc3+",
      "Qd4 — Centralize on d4 to defend c3/e4, attack the e5 queen, and prepare Ba3",
      "Be3 — Leave c3 undefended against ...Qxc3+",
      "Qd2 — Defend passively without challenging Black’s queen or pushing c6"
    ],
    "correctIndex": 1,
    "recommendedSan": "Qd4",
    "explanation": "Qd4: 13.Qd4! stabilizes the entire board, protects c3, and unleashes White’s passed queenside pawns."
  },
  {
    "id": "qz-mid-23",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Breaking the Queenside Bind",
    "fen": "2rq1rk1/pb3ppp/1p1n4/2Pp4/PP2n3/2BBPN2/2Q2PPP/2R2RK1 b - - 0 17",
    "sideToMove": "Black",
    "question": "White has advanced b4 and c5 to clamp down on Black’s queenside. Break the bind immediately!",
    "options": [
      "a5 — Attack b4 passively allowing White to seal the queenside",
      "Nxc3 — Trade the strong outpost knight without challenging c5",
      "bxc5 — Capture on c5 right away to dissolve White’s space edge and activate ...Nxc3/...c4",
      "Re8 — Wait on the e-file while White cements c5 with Bd4"
    ],
    "correctIndex": 2,
    "recommendedSan": "bxc5",
    "explanation": "bxc5: 17...bxc5! destroys White’s pawn chain and frees Black’s minor pieces."
  },
  {
    "id": "qz-mid-24",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Infiltrating With the Knight on c2",
    "fen": "r1b1r1k1/1p3pp1/2p5/p1qp3p/Q2nP3/P1N3P1/1P3PP1/3RRBK1 b - - 3 20",
    "sideToMove": "Black",
    "question": "Black’s d4 knight is attacked, yet jumping forward hits both White rooks on d1 and e1!",
    "options": [
      "Nb5 — Retreat toward b5 and lose the tactical fork against e1",
      "Ne6 — Drop back passively and hand White central control",
      "Bg4 — Pin d1 slowly while Black’s d4 knight remains hanging",
      "Nc2 — Fork e1 and c1/d4 targets from c2 while staying backed up by the queen"
    ],
    "correctIndex": 3,
    "recommendedSan": "Nc2",
    "explanation": "Nc2: 20...Nc2! attacks the e1 rook and disrupts White’s entire back rank."
  },
  {
    "id": "qz-mid-25",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Counterattacking the Exposed g4 Queen",
    "fen": "r1q1brk1/pp4pn/3p4/2pPp1P1/2P1PpQn/P1PB3P/3B1P2/R3K1NR b KQ - 3 20",
    "sideToMove": "Black",
    "question": "White’s queen on g4 sits exposed to Black’s c8 queen and tactical follow-ups on the kingside. Capture cleanly!",
    "options": [
      "Qxg4 — Trade queens via Qxg4 winning a clean pawn/piece edge on the kingside",
      "Ng6 — Retreat the knight and let White’s queen stay active on g4",
      "b5 — Push on the queenside while ignoring the hanging g4 queen",
      "Bd7 — Develop slowly instead of winning material directly"
    ],
    "correctIndex": 0,
    "recommendedSan": "Qxg4",
    "explanation": "Qxg4: 20...Qxg4 21.hxg4 Nf3+! forks the king and g5/d2 weaknesses!"
  },
  {
    "id": "qz-mid-26",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Shattering the Kingside Dark Squares",
    "fen": "2rqr2k/pp3p2/2p1bpp1/5B1p/2PP1b2/P1N5/1PQ2PPP/1K1R3R w - - 0 19",
    "sideToMove": "White",
    "question": "Black’s kingside pawns are compromised around h8. Rip open Black’s fortress cleanly!",
    "options": [
      "Bd3 — Retreat passively and let Black consolidate the kingside",
      "Bxe6 — Capture on e6 to shatter Black’s f7/g6 pawn structure and expose h8",
      "Bh3 — Trade light-squared bishops slowly while losing initiative",
      "Ka1 — Make a slow king move missing the concrete break on e6"
    ],
    "correctIndex": 1,
    "recommendedSan": "Bxe6",
    "explanation": "Bxe6: 19.Bxe6! Rxe6 20.g3 leaves Black’s dark squares in ruins and f4 kicked."
  },
  {
    "id": "qz-mid-27",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Pinning f6 Before Swinging the Rook",
    "fen": "r1bq1rk1/pp3ppp/2n1pn2/3p4/3P4/2NB1R2/PPP2PPP/R1BQ2K1 w - - 0 11",
    "sideToMove": "White",
    "question": "White lifted the rook to f3. Coordinate the dark-squared bishop to create a lethal pin against f6!",
    "options": [
      "Rh3 — Swing to h3 prematurely allowing ...e5! central counterplay",
      "Bf4 — Develop on the wrong diagonal without threatening f6",
      "Bg5 — Pin the f6 knight immediately, threatening Bxf6 and Rh3/Qh5",
      "Ne2 — Pull the knight back passively and lose attacking tempo"
    ],
    "correctIndex": 2,
    "recommendedSan": "Bg5",
    "explanation": "Bg5: 11.Bg5! pins f6 powerfully — now 12.Bxf6 followed by Rh3/Qh5 threatens mate."
  },
  {
    "id": "qz-mid-28",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Retreating to Defend Against Exposed King Threats",
    "fen": "r2qk2r/pb1pbppp/1pn5/2pn1Q2/8/5NP1/PP2PPBP/RNBR2K1 b kq - 5 11",
    "sideToMove": "Black",
    "question": "White’s queen on f5 and g2 bishop threaten d5 and kingside tactics. Stabilize cleanly!",
    "options": [
      "Ndb4 — Jump to the edge leaving d7 and the kingside exposed to Ne5",
      "Nc7 — Retreat to c7 allowing Bf4 and Ne5 pressure",
      "O-O — Castle right into Qxd5 losing a central piece!",
      "Nf6 — Retreat the d5 knight to f6, defending h7 and d7 while preparing ...O-O"
    ],
    "correctIndex": 3,
    "recommendedSan": "Nf6",
    "explanation": "Nf6: 11...Nf6! shields the kingside and solves all tactical threats along the a8-h1 diagonal."
  },
  {
    "id": "qz-mid-29",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Exploiting a Loose Queen & Back Rank",
    "fen": "r5k1/p3rpp1/1ppb1n1p/3p1q2/3P2N1/P2B4/1PP1RPPP/4R1K1 w - - 0 22",
    "sideToMove": "White",
    "question": "Black’s queen on f5 stands directly in front of the d3 bishop while e7 is under heavy pressure!",
    "options": [
      "Bxf5 — Capture the hanging queen on f5 cleanly because ...Rxe2 is met by Rxe2",
      "Nxh6+ — Check on h6 needlessly while leaving the f5 queen alive",
      "Nxf6+ — Trade knights first allowing Black’s queen to escape",
      "Kf1 — Move the king quietly and blunder the f5 queen capture"
    ],
    "correctIndex": 0,
    "recommendedSan": "Bxf5",
    "explanation": "Bxf5: 22.Bxf5 wins the queen outright."
  },
  {
    "id": "qz-mid-30",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Punishing an Unprotected Knight on d5",
    "fen": "r1bq1rk1/ppp2ppp/2n5/3np3/2B5/5Q2/PPPP1PPP/RNB1K2R w KQ - 0 8",
    "sideToMove": "White",
    "question": "Both c4 bishop and f3 queen target d5. Which recapture wins material cleanly without giving Black counterplay?",
    "options": [
      "Bxd5 — Allow ...Nd4! hitting Qf3 and c2 simultaneously",
      "Qxd5 — Capture with the queen to stay guarding e4/c4 and threaten Qxf7+",
      "Nc3 — Develop a knight and miss winning the free d5 knight",
      "O-O — Castle calmly and let Black save the d5 knight"
    ],
    "correctIndex": 1,
    "recommendedSan": "Qxd5",
    "explanation": "Qxd5: 8.Qxd5! wins the d5 knight without walking into ...Nd4 forks (unlike 8.Bxd5? Nd4!)."
  },
  {
    "id": "qz-mid-31",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Blunting the Long Diagonal Against Check",
    "fen": "r3r1k1/ppb2pp1/2n2n1p/2PqpN2/2Np4/BP1P2P1/P1Q2PKP/R3R3 w - - 1 19",
    "sideToMove": "White",
    "question": "Black’s queen just checked on d5 along the h1-a8 diagonal. Find White’s sole clean defensive block!",
    "options": [
      "Kg1 — Run to g1 allowing Black’s queen and rook to swarm the dark squares",
      "Re4 — Block with the rook and drop the exchange to ...Nxe4",
      "f3 — Block the check cleanly with f3, sealing the diagonal and safeguarding Nf5",
      "Kf1 — Walk to f1 walking straight into ...Qh1+! winning the rook"
    ],
    "correctIndex": 2,
    "recommendedSan": "f3",
    "explanation": "f3: 19.f3! shuts down Black’s diagonal pressure completely while keeping Nf5 dominant."
  },
  {
    "id": "qz-mid-32",
    "category": "Middlegame",
    "difficulty": "Medium",
    "theme": "Centralizing the Queen With Attack on f3",
    "fen": "r2qk2r/4bppp/p1p5/1pnBB3/6b1/2P2N2/PP3PPP/RN1Q1RK1 b kq - 0 14",
    "sideToMove": "Black",
    "question": "White’s d5 bishop stands in the center while f3 is pinned. How should Black recapture on d5?",
    "options": [
      "cxd5 — Create an isolated/weak d5 pawn while losing tactical pressure",
      "O-O — Castle calmly and lose a full bishop on d5",
      "Rc8 — Move the rook passively while d5 escapes",
      "Qxd5 — Capture with the queen to keep Black’s pawn structure intact and hit f3/e5"
    ],
    "correctIndex": 3,
    "recommendedSan": "Qxd5",
    "explanation": "Qxd5: 14...Qxd5! captures the piece while hitting f3 and keeping Black’s pawn structure solid."
  },
  {
    "id": "qz-end-17",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Saavedra Study: First Advancing Step",
    "fen": "8/8/1KP5/3r4/8/8/8/k7 w - - 0 1",
    "sideToMove": "White",
    "question": "White’s pawn stands on c6 against Black’s rook. Begin the famous Saavedra winning sequence!",
    "options": [
      "c7 — Push the pawn to c7 immediately, threatening c8=Q while preparing the king shield",
      "Kc7 — Step onto c7 prematurely, blocking your own pawn and allowing ...Rc5",
      "Ka6 — Step away from the pawn allowing ...Rd6! pinning c6",
      "Kb7 — Step to b7 and let Black check or win the pawn easily"
    ],
    "correctIndex": 0,
    "recommendedSan": "c7",
    "explanation": "c7: 1.c7! forces 1...Rd6+ 2.Kb5 Rd5+ 3.Kb4 Rd4+ 4.Kb3 Rd3+ 5.Kc2!."
  },
  {
    "id": "qz-end-18",
    "category": "Endgame",
    "difficulty": "Advanced",
    "theme": "Saavedra Final Underpromotion (c8=R!)",
    "fen": "8/2P5/8/8/3r4/8/2K5/k7 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s rook sits on d4 setting a sneaky stalemate trap if you promote to a queen (6...Rc4+!). Find the winning move!",
    "options": [
      "c8=Q — Promote to a queen and walk right into 6...Rc4+! 7.Qxc4 stalemate draw",
      "c8=R — Underpromote to a rook! Now ...Rc4+ 7.Rxc4 wins instead of stalemating",
      "Kb3 — Step away lazily allowing ...Rd1 and ...Rc1",
      "Kc3 — Walk into ...Rd1 or ...Rd6 allowing Black to draw"
    ],
    "correctIndex": 1,
    "recommendedSan": "c8=R",
    "explanation": "c8=R: 6.c8=R!! avoids stalemate and threatens Rc1#, winning after 6...Ra4 7.Kb3!."
  },
  {
    "id": "qz-end-19",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Réti’s Diagonal King March",
    "fen": "7K/8/k1P5/7p/8/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s h-pawn looks unstoppable while ...Kb6 threatens to take c6. Find Réti’s miracle drawing move!",
    "options": [
      "c7 — Push c7 immediately allowing ...Kb7 winning easily for Black",
      "Kg8 — Waste a tempo horizontally and lose the race against h5",
      "Kg7 — March diagonally toward g7 — threatening BOTH to catch h5 and to support c6 via f6",
      "Kh7 — Chase h5 straight down the edge and fall short by one tempo"
    ],
    "correctIndex": 2,
    "recommendedSan": "Kg7",
    "explanation": "Kg7: 1.Kg7! h4 2.Kf6! h3 3.Ke6! (or 2...Kb6 3.Ke5!) catches one goal or the other to draw."
  },
  {
    "id": "qz-end-20",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "The Trebuchet (Mutual Zugzwang)",
    "fen": "8/8/8/1K1p4/3Pk3/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "question": "In this classic Trebuchet pawn ending, whoever must step away from their pawn loses. Hand the zugzwang to Black!",
    "options": [
      "Ka5 — Drift away from d4 allowing ...Kxd4 winning for Black",
      "Kb4 — Step back passively allowing ...Kxd4 cleanly",
      "Kb6 — Abandon d4 immediately and lose the game",
      "Kc5 — Step to c5 guarding d4 and attacking d5 so Black must abandon d5"
    ],
    "correctIndex": 3,
    "recommendedSan": "Kc5",
    "explanation": "Kc5: 1.Kc5! puts Black in mutual zugzwang — after any Black king move, 2.Kxd5 wins."
  },
  {
    "id": "qz-end-21",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Rook vs. Knight on the Edge",
    "fen": "k7/1n6/2K5/3R4/8/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s king and knight are trapped near the corner. Pin down the edge-bound knight cleanly!",
    "options": [
      "Rb5 — Move the rook to b5, sealing b7 and preparing Kb6/Kc7 to win the knight",
      "Rd7 — Attack b7 directly allowing 1...Na5+! 2.Kb5 Nb7 defending",
      "Kb6 — Step forward allowing ...Nd8 or ...Kb8 escaping",
      "Rd8+ — Give a careless check on d8 allowing ...Nxd8 winning for Black!"
    ],
    "correctIndex": 0,
    "recommendedSan": "Rb5",
    "explanation": "Rb5: 1.Rb5! takes away a5 and c5, winning the stranded b7 knight by force."
  },
  {
    "id": "qz-end-22",
    "category": "Endgame",
    "difficulty": "Easy",
    "theme": "Blind Swine Mate Setup on the 7th",
    "fen": "r2r2k1/pRR2ppp/8/8/8/7P/P4PP1/6K1 w - - 0 1",
    "sideToMove": "White",
    "question": "White has doubled rooks (\"pigs\") on the 7th rank. Unleash the decisive tactical blow!",
    "options": [
      "Rxa7 — Grab a harmless queenside pawn and allow ...Rxa7",
      "Rxf7 — Capture f7 immediately, threatening Rxg7+ and Blind Swine checkmate",
      "g3 — Push a quiet pawn and let Black defend with ...Rf8",
      "Kf1 — Play slowly and let Black untangle the back rank"
    ],
    "correctIndex": 1,
    "recommendedSan": "Rxf7",
    "explanation": "Rxf7: 1.Rxf7! wins immediately — 1...Rf8?? 2.Rxg7+ Kh8 3.Rxh7+ Kg8 4.Rbg7#."
  },
  {
    "id": "qz-end-23",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Queen vs. Bishop Pawn on the 7th (Winning Zone)",
    "fen": "8/8/8/8/3K4/4Q3/2p5/k7 w - - 0 1",
    "sideToMove": "White",
    "question": "Normally a 7th-rank bishop pawn draws by stalemate, yet White’s king is right nearby! Find the mating move!",
    "options": [
      "Qa3+ — Check unnecessarily allowing ...Kb1 and longer defense",
      "Kd3 — Step to d3 allowing ...c1=Q! and losing the forced mate",
      "Kc3 — Step into c3 covering b2 and ignoring ...c1=Q for forced mate in 3",
      "Qc3+ — Check on c3 allowing ...Kb1 and missing the instant mate"
    ],
    "correctIndex": 2,
    "recommendedSan": "Kc3",
    "explanation": "Kc3: 1.Kc3! ignores ...c1=Q+ because 2.Qxc1+ Ka2 3.Qb2# delivers checkmate."
  },
  {
    "id": "qz-end-24",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Rook + 6th-Rank Pawn Promotion Push",
    "fen": "6k1/7R/5PK1/8/8/8/8/4r3 w - - 0 1",
    "sideToMove": "White",
    "question": "White’s king supports the f6 pawn on the 6th rank while Rh7 prevents checks from behind. Deliver the killing push!",
    "options": [
      "Rg7+ — Check on g7 prematurely and allow ...Kf8! blocking the pawn",
      "Ra7 — Leave the 7th rank and let Black check from behind on e6",
      "Rh8+ — Sacrifice the rook into ...Kxh8? losing all advantage!",
      "f7+ — Advance f7+ with check, forcing Black’s king to f8 before mate or promotion"
    ],
    "correctIndex": 3,
    "recommendedSan": "f7+",
    "explanation": "f7+: 1.f7+ Kf8 2.Rh8+ Ke7 3.f8=Q+ wins immediately."
  },
  {
    "id": "qz-end-25",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Bodycheck Shouldering in Pawn Endings",
    "fen": "8/8/5k2/8/2P5/4K3/8/8 w - - 0 1",
    "sideToMove": "White",
    "question": "White wants to escort the c4 pawn while Black’s king rushes over from f6. Shoulder Black’s king away!",
    "options": [
      "Kd4 — Step diagonally toward the pawn on d4 to block Black’s king out of the c-file",
      "Ke4 — Allow 1...Ke6! giving Black the opposition and drawing",
      "c5 — Push the pawn prematurely before your king leads the way",
      "Kd3 — Step passively to the 3rd rank letting Black reach e5/d6"
    ],
    "correctIndex": 0,
    "recommendedSan": "Kd4",
    "explanation": "Kd4: 1.Kd4! shoulders Black’s king off the queenside so White reaches c5 and b6 cleanly."
  },
  {
    "id": "qz-end-26",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Cochrane Defense Against 6th-Rank Pawn",
    "fen": "4k3/7R/4PK2/8/8/8/8/r7 b - - 0 1",
    "sideToMove": "Black",
    "question": "White threatens Rh8# and e7. Save the game immediately with John Cochrane’s active rook defense!",
    "options": [
      "Kd8 — Step passively to d8 walking straight into 2.Rh8+ Kc7 3.e7",
      "Rf1+ — Check immediately from behind/below to force White’s king off e6 support",
      "Ra6 — Pin the pawn slowly allowing 2.Rh8# checkmate!",
      "Ra8 — Defend passively on the back rank allowing White to win cleanly"
    ],
    "correctIndex": 1,
    "recommendedSan": "Rf1+",
    "explanation": "Rf1+: 1...Rf1+! drives White’s king away and leads to perpetual lateral/back checks for a draw."
  },
  {
    "id": "qz-end-27",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Kling & Horwitz Two-File Rook Cutoff",
    "fen": "6k1/8/8/3P4/3K4/8/2R5/4r3 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s king sits on g8 and wants to return toward the d5 pawn. Lock Black’s king out by two files!",
    "options": [
      "Kc5 — Advance the king while allowing ...Kf7-e7 to blockade d5",
      "d6 — Push the pawn prematurely allowing ...Rd1+ and ...Kf7",
      "Rf2 — Cut off Black’s king along the f-file so it stays walled off two files from d5",
      "Rc7 — Cut off horizontally instead of vertically, letting ...Kf8-e8 stop d5"
    ],
    "correctIndex": 2,
    "recommendedSan": "Rf2",
    "explanation": "Rf2: 1.Rf2! seals the f-file completely, ensuring Black’s king can never cross back to stop d5."
  },
  {
    "id": "qz-end-28",
    "category": "Endgame",
    "difficulty": "Advanced",
    "theme": "King Shoulders Pawn Race on Edge",
    "fen": "8/p7/8/1P6/K7/8/8/k7 w - - 0 1",
    "sideToMove": "White",
    "question": "White has a passed b5 pawn against Black’s a7 pawn with Black’s king far away on a1. Find the cleanest win!",
    "options": [
      "b6 — Trade pawns prematurely with 1...axb6 2.Kb5 Kb2 — throwing away the win!",
      "Kb4 — Step away from a7 allowing 1...Kb2! race counterplay",
      "Ka3 — Retreat backward allowing 1...Kb1 2.b6 axb6 draw",
      "Ka5 — Step to a5 to threaten Ka6 attacking a7 and escort b5 without letting Black’s king escape"
    ],
    "correctIndex": 3,
    "recommendedSan": "Ka5",
    "explanation": "Ka5: 1.Ka5! forces Black to lose a7 or watch White promote cleanly on the b-file."
  },
  {
    "id": "qz-end-29",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Same-Colored Bishop Trade Liquidation",
    "fen": "8/5k2/4b1p1/4P3/3K1P2/3B4/8/8 w - - 0 1",
    "sideToMove": "White",
    "question": "White is up an extra pawn in a same-colored bishop ending, yet Black’s e6 bishop blockades d5. Break through!",
    "options": [
      "Bc4 — Challenge the blockading e6 bishop to force a won K+P ending or king infiltration",
      "Kc5 — Step to c5 allowing ...Bf5! keeping the blockade intact",
      "Bb5 — Avoid trading bishops and make zero progress against e6",
      "Be4 — Blockade passively without challenging Black’s defensive bishop"
    ],
    "correctIndex": 0,
    "recommendedSan": "Bc4",
    "explanation": "Bc4: 1.Bc4! forces either a trivial K+P win after 1...Bxc4 2.Kxc4 or immediate invasion via Kd5."
  },
  {
    "id": "qz-end-30",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Queen Stops Two Connected 7th-Rank Pawns",
    "fen": "8/8/8/8/8/1K3Q2/2pp4/1k6 w - - 0 1",
    "sideToMove": "White",
    "question": "Black has two connected passed pawns on c2 and d2 threatening to promote! Blockade both cleanly!",
    "options": [
      "Qf6 — Stay far away allowing 1...c1=Q! and losing the win",
      "Qc3 — Place the queen on c3, stopping ...c1=Q and pinning/watching d2 simultaneously",
      "Qd3 — Step onto d3 allowing 1...c1=N+! which forks king and queen",
      "Ka3 — Walk away and allow 1...c1=Q! immediately"
    ],
    "correctIndex": 1,
    "recommendedSan": "Qc3",
    "explanation": "Qc3: 1.Qc3! stops both ...c1=Q and ...c1=N+ while preparing Kb2/Qxd2."
  },
  {
    "id": "qz-end-31",
    "category": "Endgame",
    "difficulty": "Easy",
    "theme": "Rook Cutoff Behind Black’s King",
    "fen": "8/1p6/8/1K6/8/8/k7/1R6 w - - 0 1",
    "sideToMove": "White",
    "question": "Black’s king is stranded on a2 while White’s king and rook attack b7. Find White’s cleanest winning technique!",
    "options": [
      "Ka4 — Step onto a4 allowing 1...Kxb1!! capturing White’s rook!",
      "Ra1+ — Sacrifice the rook into 1...Kxa1!! throwing away the win",
      "Rb4 — Protect b5/a4 control and lift the rook cleanly while keeping Black’s king cut off",
      "Kc5 — Abandon the b1 rook to 1...Kxb1!!"
    ],
    "correctIndex": 2,
    "recommendedSan": "Rb4",
    "explanation": "Rb4: 1.Rb4! saves the rook from Ka2 while keeping Black’s king cut off so White wins b7 easily."
  },
  {
    "id": "qz-end-32",
    "category": "Endgame",
    "difficulty": "Medium",
    "theme": "Double-Rook Active Counterattack on the 2nd Rank",
    "fen": "r5k1/p4ppp/8/8/8/P6P/1Pr2PP1/2RR2K1 b - - 0 1",
    "sideToMove": "Black",
    "question": "Black is down a pawn in a four-rook endgame. Seize immediate counterplay to hold the draw!",
    "options": [
      "Re2 — Leave b2 untouched allowing White to consolidate the extra pawn",
      "Rcc8 — Retreat passively onto the back rank down a full pawn",
      "Kf8 — Move the king slowly allowing White to double on the c-file",
      "Rxb2 — Capture the active b2 pawn immediately instead of defending passively"
    ],
    "correctIndex": 3,
    "recommendedSan": "Rxb2",
    "explanation": "Rxb2: 1...Rxb2! restores material balance and keeps Black’s rooks active for an easy draw."
  }
];
