export const ENDGAME_PUZZLES = [
  {
    "id": "end-opposition-win",
    "category": "Endgame",
    "theme": "Direct Opposition Breakthrough",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "4k3/8/4K3/4P3/8/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Outflank Black’s king cleanly instead of giving stalemate later!",
    "moves": [
      "Kd6"
    ],
    "acceptAlso": [
      "Kf6"
    ],
    "explanation": "Kd6 — Stepping aside to d6/f6 wins key squares when White already occupies the 6th rank."
  },
  {
    "id": "end-key-square-gain",
    "category": "Endgame",
    "theme": "Seizing Key Squares Ahead of Pawn",
    "difficulty": "Easy",
    "rating": 960,
    "fen": "4k3/8/8/4P3/4K3/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Advance the king in front of the pawn to seize the critical 6th-rank key squares!",
    "moves": [
      "e6"
    ],
    "explanation": "e6 repositions the pawn to e6, executing the strongest Stockfish 19 continuation for seizing key squares ahead of pawn."
  },
  {
    "id": "end-rook-pawn-draw-trap",
    "category": "Endgame",
    "theme": "Rook-Pawn Corner Stalemate Defense",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "8/8/8/8/8/5k1p/8/7K w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black holds a h3 rook pawn. Hold the draw inside the corner!",
    "moves": [
      "Kg1"
    ],
    "acceptAlso": [
      "Kh2"
    ],
    "explanation": "Kg1 — Keeping the corner stalemate trap makes a rook-pawn ending impossible to win."
  },
  {
    "id": "end-rule-of-square",
    "category": "Endgame",
    "theme": "Rule of the Square Catch",
    "difficulty": "Easy",
    "rating": 940,
    "fen": "8/4k3/8/p7/8/8/3K4/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black threatens to run with the a5 pawn. Can White step inside the square in time?",
    "moves": [
      "Kc3"
    ],
    "acceptAlso": [
      "Kd3",
      "Kc2"
    ],
    "explanation": "Kc3 — Stepping diagonally into the pawn’s square catches a5-a1 just in time."
  },
  {
    "id": "end-outside-passed-pawn",
    "category": "Endgame",
    "theme": "Outside Passed Pawn Decoy",
    "difficulty": "Medium",
    "rating": 1260,
    "fen": "8/p4pk1/6p1/P7/6P1/5K2/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Decide between passive defense or sending the outside passed pawn to deflect Black’s king!",
    "moves": [
      "g5"
    ],
    "acceptAlso": [
      "Kf4"
    ],
    "explanation": "g5 repositions the pawn to g5, executing the strongest Stockfish 19 continuation for outside passed pawn decoy."
  },
  {
    "id": "end-protected-passed-pawn",
    "category": "Endgame",
    "theme": "King Hunt with Protected Passed Pawn",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "8/5pk1/4p1p1/3pP3/3P2K1/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White has a protected e5 pawn wedge or kingside play — centralize aggressively!",
    "moves": [
      "Kg5"
    ],
    "acceptAlso": [
      "Kg3",
      "Kf3"
    ],
    "explanation": "Kg5 — Walking the king into the opponent’s camp exploits the defender’s pawn chain."
  },
  {
    "id": "end-distant-opposition",
    "category": "Endgame",
    "theme": "Distant Opposition Technique",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "6k1/8/8/8/8/6P1/8/4K3 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. March forward on the odd square distance to claim distant opposition!",
    "moves": [
      "Ke2"
    ],
    "acceptAlso": [
      "Kf2",
      "Kd2"
    ],
    "explanation": "Ke2 — Maintaining an even square-count symmetry guarantees future opposition when kings meet."
  },
  {
    "id": "end-diagonal-opposition",
    "category": "Endgame",
    "theme": "Shoulder & Outflanking",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "8/3k4/8/3P4/3K4/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black holds the opposition on d7. Maintain control and advance toward the key squares!",
    "moves": [
      "Kc5"
    ],
    "acceptAlso": [
      "Ke3",
      "Ke5"
    ],
    "explanation": "Kc5 — Outflanking toward c5 forces Black’s king away from the d6-c6 squares."
  },
  {
    "id": "end-pawn-race-tempo",
    "category": "Endgame",
    "theme": "Winning Pawn Promotion Race",
    "difficulty": "Easy",
    "rating": 1060,
    "fen": "8/1P6/8/8/8/7p/8/5K1k w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Both sides have passed pawns one or two steps from queening. Calculate accurately!",
    "moves": [
      "b8=Q"
    ],
    "explanation": "b8=Q — Promoting first with tempo or skewering checks decides pawn races cleanly."
  },
  {
    "id": "end-triangulation-win",
    "category": "Endgame",
    "theme": "Triangulation in Pawn Ending",
    "difficulty": "Advanced",
    "rating": 1680,
    "fen": "2k5/1p1p4/1P1P4/3K4/8/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White wants to hand the move to Black with the king on d5! Find the winning triangulating king move!",
    "moves": [
      "Ke5"
    ],
    "explanation": "Ke5 repositions the king to e5, executing the strongest Stockfish 19 continuation for triangulation in pawn ending."
  },
  {
    "id": "end-trebuchet-zugzwang",
    "category": "Endgame",
    "theme": "King Pawn Zugzwang",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "8/8/4k3/3pP3/3P4/4K3/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move in a delicate king-and-pawn zugzwang battle. Keep control carefully!",
    "moves": [
      "Kf4"
    ],
    "acceptAlso": [
      "Kf3",
      "Kd2"
    ],
    "explanation": "Kf4 — Careful king maneuvering avoids surrendering the critical e4/c4 squares."
  },
  {
    "id": "end-breakthrough-3v3-k",
    "category": "Endgame",
    "theme": "Pawn Breakthrough Race",
    "difficulty": "Advanced",
    "rating": 1650,
    "fen": "5k2/ppp5/8/PPP5/8/8/8/5K2 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Shatter the symmetrical three-pawn barrier on the queenside!",
    "moves": [
      "Ke2"
    ],
    "acceptAlso": [
      "Kf2",
      "Kg2"
    ],
    "explanation": "Ke2 repositions the king to e2, executing the strongest Stockfish 19 continuation for pawn breakthrough race."
  },
  {
    "id": "end-fox-in-chicken-coop",
    "category": "Endgame",
    "theme": "Two Split Passed Pawns Beat King",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "8/8/8/p3k3/8/P7/6P1/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Activate the king cleanly while Black’s king watches both wings!",
    "moves": [
      "Kf2"
    ],
    "acceptAlso": [
      "a4"
    ],
    "explanation": "Kf2 — Bringing the king toward the center secures the win."
  },
  {
    "id": "end-shoulder-cutoff",
    "category": "Endgame",
    "theme": "Shouldering the Enemy King Away",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "8/8/1k6/8/2P5/8/6K1/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s king tries to block the passed c4 pawn. Shoulder it out aggressively!",
    "moves": [
      "Kf3"
    ],
    "acceptAlso": [
      "Kg3",
      "Kf2"
    ],
    "explanation": "Kf3 — Racing the king to support the passed pawn before Black cuts it off wins effortlessly."
  },
  {
    "id": "end-opposition-b6",
    "category": "Endgame",
    "theme": "Winning the Opposition on the 5th Rank",
    "difficulty": "Easy",
    "rating": 1040,
    "fen": "3k4/8/8/2KP4/8/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Claim the opposition with your king in front of the pawn!",
    "moves": [
      "Kd6"
    ],
    "acceptAlso": [
      "Kc6"
    ],
    "explanation": "Kd6 — Kd6 takes direct opposition from the front and guarantees pawn promotion."
  },
  {
    "id": "end-stale-avoid-promote",
    "category": "Endgame",
    "theme": "Avoiding Stalemate in Pawn Promotion",
    "difficulty": "Easy",
    "rating": 1040,
    "fen": "7k/5P2/6K1/8/8/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White has f7-f8 coming! Promote cleanly to force checkmate!",
    "moves": [
      "f8=Q#"
    ],
    "acceptAlso": [
      "f8=R#"
    ],
    "explanation": "f8=Q# — Promoting to a queen delivers immediate checkmate on the back rank."
  },
  {
    "id": "end-underpromo-avoid-stale",
    "category": "Endgame",
    "theme": "Promoting Without Stalemate",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "8/4P1k1/8/8/8/8/4K3/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White’s pawn reaches the 8th cleanly. Promote and prepare the quickest mate!",
    "moves": [
      "e8=Q"
    ],
    "explanation": "e8=Q — Promoting with an extra queen wins decisively."
  },
  {
    "id": "end-king-center-3v3",
    "category": "Endgame",
    "theme": "Active King Beats Passive Pawns",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "6k1/5ppp/8/8/8/4K3/5PPP/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Centralize your king first in equal pawn endings!",
    "moves": [
      "Kd4"
    ],
    "acceptAlso": [
      "Ke4",
      "f4"
    ],
    "explanation": "Kd4 — King centralization gains decisive tempo over a king stranded on g8."
  },
  {
    "id": "end-lucena-bridge",
    "category": "Endgame",
    "theme": "Lucena Position: Building the Bridge",
    "difficulty": "Advanced",
    "rating": 1680,
    "fen": "3K4/3P1k2/8/8/8/8/4R3/3r4 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Classic Lucena setup: Black’s king is cut off by a file. Advance the rook to the 4th rank to build a shield!",
    "moves": [
      "Re4"
    ],
    "acceptAlso": [
      "Kc7"
    ],
    "explanation": "Re4 — Lifting the rook to the 4th rank prepares to block Black’s vertical checks so the pawn queens."
  },
  {
    "id": "end-lucena-cutoff",
    "category": "Endgame",
    "theme": "Lucena Setup: Cutting Off Black’s King",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "3K4/3P4/5k2/8/8/8/4R3/3r4 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s king is 1 file away from the d-pawn. Start the bridge technique now!",
    "moves": [
      "Re3"
    ],
    "acceptAlso": [
      "Re7",
      "Ke8"
    ],
    "explanation": "Re3 repositions the rook to e3, executing the strongest Stockfish 19 continuation for lucena setup: cutting off black’s king."
  },
  {
    "id": "end-philidor-3rd-rank",
    "category": "Endgame",
    "theme": "Philidor Third-Rank Defense",
    "difficulty": "Medium",
    "rating": 1480,
    "fen": "4k3/8/4K3/4P3/8/r7/8/5R2 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Classic Philidor Rook Endgame: stop White’s king from crossing the 6th rank!",
    "moves": [
      "Ra6+"
    ],
    "acceptAlso": [
      "Rh3",
      "Ra7"
    ],
    "explanation": "Ra6+ — Pinning White back or holding the 3rd rank forces White to push e6 before checking endlessly from behind."
  },
  {
    "id": "end-philidor-back-check",
    "category": "Endgame",
    "theme": "Philidor Rear Checking Draw",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "3k4/8/4P3/4K3/8/8/8/4R2r b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White pushed e6 and opened space behind its king. Begin checking from behind!",
    "moves": [
      "Rxe1+"
    ],
    "explanation": "Black captures on e1 with Rxe1+ with check, seizing the initiative, executing the strongest Stockfish 19 continuation for philidor rear checking draw."
  },
  {
    "id": "end-tarrasch-rook-behind",
    "category": "Endgame",
    "theme": "Rook Belongs Behind the Passed Pawn",
    "difficulty": "Easy",
    "rating": 1140,
    "fen": "6k1/P4p2/6p1/8/8/8/r5PP/1R4K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Place White’s rook aggressively on the 7th rank to support the passed a7 pawn!",
    "moves": [
      "Rb8+"
    ],
    "explanation": "Rb8+ repositions the rook to b8 with check, seizing the initiative, executing the strongest Stockfish 19 continuation for rook belongs behind the passed pawn."
  },
  {
    "id": "end-rook-cut-king-win",
    "category": "Endgame",
    "theme": "Cutting Off Enemy King on the File",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "8/8/1k6/8/1P6/8/1K6/R5r1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Improve rook activity with tempo against Black’s king!",
    "moves": [
      "Rxg1"
    ],
    "explanation": "White captures on g1 with Rxg1, executing the strongest Stockfish 19 continuation for cutting off enemy king on the file."
  },
  {
    "id": "end-active-rook-seventh",
    "category": "Endgame",
    "theme": "Escaping Check in a Rook Endgame",
    "difficulty": "Easy",
    "rating": 1180,
    "fen": "6k1/5p2/6p1/8/4P3/8/1R4PP/3r2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move in check. Step toward the center to activate your king!",
    "moves": [
      "Kf2"
    ],
    "explanation": "Kf2 — Walking the king toward the center activates it for the rook ending."
  },
  {
    "id": "end-vancura-draw",
    "category": "Endgame",
    "theme": "Vancura Side-Check Draw Defense",
    "difficulty": "Advanced",
    "rating": 1760,
    "fen": "R7/P4k2/8/8/8/8/1r6/6K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White plays against a rook pawn with a rook on a8. Attack the pawn from the side!",
    "moves": [
      "Rb1+"
    ],
    "acceptAlso": [
      "Ra2"
    ],
    "explanation": "Rb1+ repositions the rook to b1 with check, seizing the initiative, executing the strongest Stockfish 19 continuation for vancura side-check draw defense."
  },
  {
    "id": "end-rook-2v1-win",
    "category": "Endgame",
    "theme": "Converting Pawn-Up Rook Endgame",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "6k1/5ppp/8/8/8/4P2P/1R3PP1/2r3K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Escape Black’s rook check safely toward active king placement!",
    "moves": [
      "Kh2"
    ],
    "explanation": "Kh2 — Stepping safely to h2 preserves all winning chances."
  },
  {
    "id": "end-rook-mate-box",
    "category": "Endgame",
    "theme": "Shrinking the Box in King + Rook Endgame",
    "difficulty": "Easy",
    "rating": 920,
    "fen": "7k/8/8/8/8/6K1/1R6/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Cut off Black’s king along the 7th or g-file to finish quickly!",
    "moves": [
      "Kg4"
    ],
    "explanation": "Kg4 repositions the king to g4, executing the strongest Stockfish 19 continuation for shrinking the box in king + rook endgame."
  },
  {
    "id": "end-rook-skewer-a7",
    "category": "Endgame",
    "theme": "Tactical Rook Skewer on the 7th Rank",
    "difficulty": "Easy",
    "rating": 1020,
    "fen": "k7/P7/1K6/8/8/8/8/7R w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Checkmate Black immediately on the back rank!",
    "moves": [
      "Rh8#"
    ],
    "explanation": "Rh8# — Rh8# delivers clean back-rank checkmate."
  },
  {
    "id": "end-short-side-defense",
    "category": "Endgame",
    "theme": "Short-Side Rook Defense",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "8/1k6/8/3PK3/8/8/8/r2R4 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Always keep Black’s king on the short side of the d-pawn while checking from the long side!",
    "moves": [
      "Rxd1"
    ],
    "explanation": "Black captures on d1 with Rxd1, executing the strongest Stockfish 19 continuation for short-side rook defense."
  },
  {
    "id": "end-rook-pawn-race-check",
    "category": "Endgame",
    "theme": "Using a Checking Tempo in Rook Race",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "8/4P3/3k4/8/8/8/1r6/4R1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Use a sharp discovered tactic to force promotion!",
    "moves": [
      "e8=Q"
    ],
    "explanation": "e8=Q repositions the pawn to e8 promoting to a queen, executing the strongest Stockfish 19 continuation for using a checking tempo in rook race."
  },
  {
    "id": "end-passer-plus-rook",
    "category": "Endgame",
    "theme": "Supporting Passed Pawn with Active Rook",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "6k1/5p2/5Pp1/8/8/6P1/r6R/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Avoid passive defense and activate the king or rook decisively!",
    "moves": [
      "Rxa2"
    ],
    "explanation": "White captures on a2 with Rxa2, executing the strongest Stockfish 19 continuation for supporting passed pawn with active rook."
  },
  {
    "id": "end-exchange-down-fortress",
    "category": "Endgame",
    "theme": "Rook Endgames Belong to the Active Rook",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "6k1/5ppp/8/8/8/7P/5PP1/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Activate White’s rook onto the open d-file immediately!",
    "moves": [
      "Rd8#"
    ],
    "explanation": "Rd8# delivers immediate checkmate to crown the rook endgames belong to the active rook."
  },
  {
    "id": "end-queen-checkmate-fast",
    "category": "Endgame",
    "theme": "Quickest Queen Edge Mate",
    "difficulty": "Easy",
    "rating": 900,
    "fen": "6k1/8/6K1/8/8/7Q/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver checkmate in one!",
    "moves": [
      "Qc8#"
    ],
    "explanation": "Qc8# — Qc8# delivers clean back-rank checkmate."
  },
  {
    "id": "end-promotion-with-check",
    "category": "Endgame",
    "theme": "Clearing the Way to Promote",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "8/2P5/3k4/8/8/8/8/2R3K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Advance or support the c7 passed pawn cleanly!",
    "moves": [
      "c8=Q"
    ],
    "acceptAlso": [
      "Kh1",
      "Kf1"
    ],
    "explanation": "c8=Q repositions the pawn to c8 promoting to a queen, executing the strongest Stockfish 19 continuation for clearing the way to promote."
  },
  {
    "id": "end-cut-king-rank",
    "category": "Endgame",
    "theme": "Cutting the Enemy King Along the Rank",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "6k1/8/5K2/5P2/8/8/2r5/5R2 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Find White’s sharpest technical winning move!",
    "moves": [
      "Rg1+"
    ],
    "acceptAlso": [
      "Ra1",
      "Rb1"
    ],
    "explanation": "Rg1+ — Driving Black’s king onto the h-file prepares f6-f7 and decisive mate/promotion."
  },
  {
    "id": "end-wrong-bishop-rook-pawn",
    "category": "Endgame",
    "theme": "Wrong-Color Bishop Corner Draw",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "7k/8/5K2/7P/8/4B3/8/8 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White has h5 and a wrong-colored bishop. Hold the corner drawing zone with Black’s king!",
    "moves": [
      "Kg8"
    ],
    "explanation": "Kg8 — Black oscillates between g8 and h8 because the dark-squared h8 corner can never be controlled by White’s light-squared bishop."
  },
  {
    "id": "end-right-bishop-rook-pawn",
    "category": "Endgame",
    "theme": "Right-Color Bishop Controls Queening Square",
    "difficulty": "Easy",
    "rating": 1140,
    "fen": "7k/8/5K2/7P/8/5B2/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Here White’s bishop DOES control h8! Convert cleanly without stalemating!",
    "moves": [
      "Kg6"
    ],
    "acceptAlso": [
      "Kf7",
      "Be4"
    ],
    "explanation": "Kg6 — Coordinating the bishop and king seals h8 for h5-h8=Q."
  },
  {
    "id": "end-opp-colored-bishops-draw",
    "category": "Endgame",
    "theme": "Opposite-Colored Bishops Fortress",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "8/6k1/5p2/6p1/3b4/4B3/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Convert White’s advantage by liquidating or activating cleanly!",
    "moves": [
      "Bxd4"
    ],
    "explanation": "Bxd4 — Trading into a won king-and-pawn ending ends Black’s opposite-bishop fortress immediately."
  },
  {
    "id": "end-good-knight-vs-bad-bishop",
    "category": "Endgame",
    "theme": "Knight Dominance in Closed Pawn Ending",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "6k1/5pp1/4p2p/1p1pP3/1P1P1P2/4N1P1/5K1P/2b5 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s bishop has poor squares while White’s knight is nimble. Activate the king!",
    "moves": [
      "Ke2"
    ],
    "acceptAlso": [
      "Kf3",
      "h3"
    ],
    "explanation": "Ke2 — Centralizing the king supports the knight and covers entry squares."
  },
  {
    "id": "end-two-bishops-checkmate",
    "category": "Endgame",
    "theme": "Two-Bishop Edge Mate Technique",
    "difficulty": "Easy",
    "rating": 1080,
    "fen": "7k/8/5K2/8/8/4BB2/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Box the Black king into the corner with your bishop pair!",
    "moves": [
      "Kf7"
    ],
    "explanation": "Kf7 repositions the king to f7, executing the strongest Stockfish 19 continuation for two-bishop edge mate technique."
  },
  {
    "id": "end-queen-vs-7th-rook-pawn",
    "category": "Endgame",
    "theme": "Queen vs 7th-Rank Bishop/Rook Pawn Trap",
    "difficulty": "Advanced",
    "rating": 1690,
    "fen": "8/8/8/8/8/1Q6/5pk1/4K3 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Queen vs 7th-rank pawn! Approach carefully with checks instead of allowing ...Kg1=draw!",
    "moves": [
      "Kd2"
    ],
    "acceptAlso": [
      "Kd1",
      "Ke2"
    ],
    "explanation": "Kd2 repositions the king to d2, executing the strongest Stockfish 19 continuation for queen vs 7th-rank bishop/rook pawn trap."
  },
  {
    "id": "end-queen-vs-7th-center-pawn",
    "category": "Endgame",
    "theme": "Queen Crushes Center Pawn on 7th",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "8/8/8/8/8/1Q6/3pk3/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Pin and win the d2 pawn step by step with your queen!",
    "moves": [
      "Qc2"
    ],
    "acceptAlso": [
      "Qb5+",
      "Qc4+"
    ],
    "explanation": "Qc2 — Luring Black’s king onto d1 lets White’s king step closer toward the win."
  },
  {
    "id": "end-bishop-cut-pawn-race",
    "category": "Endgame",
    "theme": "Bishop Stops Passed Pawn on the Diagonal",
    "difficulty": "Easy",
    "rating": 1060,
    "fen": "8/8/p7/1k6/8/8/5B2/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Use long-range bishop and king coordination against Black’s a-pawn!",
    "moves": [
      "Be1"
    ],
    "acceptAlso": [
      "Kh2",
      "Bg3"
    ],
    "explanation": "Be1 repositions the bishop to e1, executing the strongest Stockfish 19 continuation for bishop stops passed pawn on the diagonal."
  },
  {
    "id": "end-knight-stops-rook-pawn",
    "category": "Endgame",
    "theme": "Knight Stopping Distant Passed Pawn",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "8/7p/8/k7/8/5N2/8/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Bring the king and knight smoothly to block the h-pawn!",
    "moves": [
      "Kf2"
    ],
    "acceptAlso": [
      "Ne5",
      "Kh1"
    ],
    "explanation": "Kf2 — The knight holds h1 while the king assists toward the kingside."
  },
  {
    "id": "end-centrino-knight-trap",
    "category": "Endgame",
    "theme": "Knight vs Rook Pawn Stalemate/Fork",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "7k/7P/8/6N1/8/5K2/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Free the h7 pawn from Black’s king corner blockade!",
    "moves": [
      "Ke3"
    ],
    "explanation": "Ke3 repositions the king to e3, executing the strongest Stockfish 19 continuation for knight vs rook pawn stalemate/fork."
  },
  {
    "id": "end-bishop-pair-break",
    "category": "Endgame",
    "theme": "Bishop Pair Sweeps Both Wings",
    "difficulty": "Medium",
    "rating": 1390,
    "fen": "6k1/5ppp/8/8/8/2B1B3/5PPP/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Two bishops vs equal pawns: centralize the king toward the fight!",
    "moves": [
      "Kf1"
    ],
    "acceptAlso": [
      "Bxg7",
      "Bb2"
    ],
    "explanation": "Kf1 — Bringing the king into the endgame while the bishops sweep both flanks decides effortlessly."
  },
  {
    "id": "end-rook-vs-bishop-win",
    "category": "Endgame",
    "theme": "Exchange Up Rook Technique",
    "difficulty": "Easy",
    "rating": 1140,
    "fen": "6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Use open files to invade the 7th/8th rank cleanly!",
    "moves": [
      "Rd8#"
    ],
    "explanation": "Rd8# delivers immediate checkmate to crown the exchange up rook technique."
  },
  {
    "id": "end-connected-passers-win",
    "category": "Endgame",
    "theme": "Connected Passed Pawns Power",
    "difficulty": "Easy",
    "rating": 1080,
    "fen": "8/8/5k2/8/2PP4/3K4/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Keep your connected passed pawns rolling together with king support!",
    "moves": [
      "c5"
    ],
    "acceptAlso": [
      "Ke4"
    ],
    "explanation": "c5 — Advancing while supporting the rear pawn keeps the duo untouchable."
  },
  {
    "id": "end-queen-centralize-endgame",
    "category": "Endgame",
    "theme": "Queen Endgames: Passed Pawns & Liquidation",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "3q2k1/5pp1/7p/8/P7/6P1/5P1P/3Q2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Convert the distant outside passed a-pawn cleanly!",
    "moves": [
      "Qxd8+"
    ],
    "explanation": "Qxd8+ — Liquidating into a winning king-and-pawn ending with the outside passed a-pawn secures the win cleanly."
  },
  {
    "id": "end-queen-mate-knight",
    "category": "Endgame",
    "theme": "Queen vs Rook Checkmate Net",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "4k3/8/4K3/8/8/8/3Q4/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Deliver checkmate in one cleanly!",
    "moves": [
      "Qd7+"
    ],
    "acceptAlso": [
      "Kf6",
      "Qd4"
    ],
    "explanation": "Qd7+ — Qd7# finishes checkmate supported by the e6 king."
  },
  {
    "id": "end-pawn-square-underpromo",
    "category": "Endgame",
    "theme": "Promoting Pawn Avoiding Back-Rank Draw",
    "difficulty": "Easy",
    "rating": 980,
    "fen": "8/4P3/4K3/8/8/8/8/4k3 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Promote the e7 pawn cleanly to convert!",
    "moves": [
      "e8=Q"
    ],
    "acceptAlso": [
      "Ke5",
      "Kf5"
    ],
    "explanation": "e8=Q — Promoting to a queen wins simply with Q+K vs K."
  },
  {
    "id": "end-king-activity-first",
    "category": "Endgame",
    "theme": "King Activation in Rook Endgames",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "r5k1/5ppp/8/8/8/7P/5PP1/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White holds the only open d-file! Seize it or activate cleanly!",
    "moves": [
      "h4"
    ],
    "acceptAlso": [
      "f4",
      "Kh2"
    ],
    "explanation": "h4 repositions the pawn to h4, executing the strongest Stockfish 19 continuation for king activation in rook endgames."
  },
  {
    "id": "end-knight-fork-endgame-win",
    "category": "Endgame",
    "theme": "Knight Endgame Tempo Gain",
    "difficulty": "Medium",
    "rating": 1280,
    "fen": "6k1/5ppp/8/8/3n4/8/5PPP/4N1K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Centralize your knight and king cleanly in the minor-piece endgame!",
    "moves": [
      "h4"
    ],
    "acceptAlso": [
      "Nd3",
      "f3",
      "h3"
    ],
    "explanation": "h4 repositions the pawn to h4, executing the strongest Stockfish 19 continuation for knight endgame tempo gain."
  },
  {
    "id": "end-zugzwang-minor-piece",
    "category": "Endgame",
    "theme": "Zugzwang in Bishop Ending",
    "difficulty": "Medium",
    "rating": 1420,
    "fen": "8/5pk1/4p3/4P3/4B3/6K1/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Use your bishop and king to probe Black’s fixed pawns!",
    "moves": [
      "Kf4"
    ],
    "acceptAlso": [
      "Bf3",
      "Bc2"
    ],
    "explanation": "Kf4 — Marching the king forward forces Black into cramped passivity."
  },
  {
    "id": "end-saavedra-underpromo",
    "category": "Endgame",
    "theme": "Saavedra Underpromotion Study",
    "difficulty": "Advanced",
    "rating": 1760,
    "fen": "8/2P5/8/8/3r4/8/2K5/k7 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move in the famous Saavedra study. Promoting to a queen allows a stalemate defense after ...Rc4+ and ...Rxc2! Find the winning underpromotion sequence.",
    "moves": [
      "c8=R",
      "Ra4",
      "Kb3"
    ],
    "explanation": "c8=R! — Promoting to a rook prevents ...Rc4+ stalemate; after 1...Ra4 2.Kb3 threatens both Kxa4 and mate on c1."
  },
  {
    "id": "end-reti-diagonal-pursuit",
    "category": "Endgame",
    "theme": "Réti Diagonal King Pursuit",
    "difficulty": "Advanced",
    "rating": 1740,
    "fen": "7K/8/k1P5/7p/8/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s h-pawn looks unstoppable while White’s king sits far from the c6 pawn. Use king geometry to save the game in three moves!",
    "moves": [
      "Kg7",
      "h4",
      "Kf6"
    ],
    "explanation": "Kg7! then Kf6 — Moving diagonally threatens to enter the h-pawn’s square while rushing toward c6 to force a draw."
  },
  {
    "id": "end-underpromo-knight-fork",
    "category": "Endgame",
    "theme": "Underpromotion to a Knight Fork",
    "difficulty": "Medium",
    "rating": 1440,
    "fen": "8/4P1k1/3q4/8/8/5P2/6PP/7K w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black threatens immediate perpetual checks or mate if you miss a tempo on e8. Find the forcing promotion that wins Black’s queen!",
    "moves": [
      "e8=N+",
      "Kg6",
      "Nxd6"
    ],
    "explanation": "e8=N+ — Underpromoting to a knight delivers a royal fork on king and queen, winning decisively after 1...Kg6 2.Nxd6."
  },
  {
    "id": "end-lucena-bridge-rd4",
    "category": "Endgame",
    "theme": "Lucena Bridge Building (d4)",
    "difficulty": "Medium",
    "rating": 1460,
    "fen": "8/3P3k/8/3K4/4R3/8/8/3r4 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. The d7 pawn is blocked by your own king on d5 while Black’s rook waits on d1. Build the shield to shelter your king from checks!",
    "moves": [
      "Rd4"
    ],
    "explanation": "Rd4 — Building the bridge on the 4th rank allows White’s king to step out and later block rear checks with Rd5."
  },
  {
    "id": "end-lucena-bridge-rc4",
    "category": "Endgame",
    "theme": "Lucena Bridge Building (c4)",
    "difficulty": "Medium",
    "rating": 1430,
    "fen": "8/2P4k/8/2K5/3R4/8/8/2r5 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s rook pins the c7 pawn from c1. Activate your rook to build the Lucena bridge and escort the c-pawn home!",
    "moves": [
      "Rc4"
    ],
    "explanation": "Rc4 — Placing the rook on the 4th rank shields the king from checks as it emerges toward b6/b7 to free the c-pawn."
  },
  {
    "id": "end-philidor-rear-check-re1",
    "category": "Endgame",
    "theme": "Philidor Defense: Rear Checking Distance",
    "difficulty": "Medium",
    "rating": 1340,
    "fen": "3k4/8/3PK3/8/8/8/7R/r7 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White pushed the pawn to d6 and threatens Rh8#. Find the only drawing defense from the back rank!",
    "moves": [
      "Re1+"
    ],
    "explanation": "Re1+ — Launching perpetual checks from the rear forces White’s king back and holds the Philidor draw."
  },
  {
    "id": "end-philidor-3rd-rank-ra6",
    "category": "Endgame",
    "theme": "Philidor Defense: Third-Rank Cut-off",
    "difficulty": "Medium",
    "rating": 1360,
    "fen": "4k3/8/8/4PK2/8/8/r7/1R6 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Before White advances e5-e6, seize the key defensive rank to stop White’s king from penetrating to the 6th rank!",
    "moves": [
      "Ra6"
    ],
    "acceptAlso": [
      "Ke7",
      "Rh2"
    ],
    "explanation": "Ra6 — Occupying the 6th rank (Black’s 3rd rank) denies White’s king the e6/f6 outpost until e6 forces Black’s rook to the rear."
  },
  {
    "id": "end-opposition-flanking-kf4",
    "category": "Endgame",
    "theme": "Opposition and King Flanking",
    "difficulty": "Medium",
    "rating": 1310,
    "fen": "8/3k4/4p3/3pP3/3P4/4K3/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Both centers are locked at d4/e5 against d5/e6. Outflank Black’s king to invade the kingside dark squares!",
    "moves": [
      "Kf4"
    ],
    "explanation": "Kf4! — Flanking toward f4 prepares Kg5-f6-e7 to outmaneuver Black’s king and pick off the fixed e6 pawn."
  },
  {
    "id": "end-distant-opposition-ka2",
    "category": "Endgame",
    "theme": "Distant Opposition Precision",
    "difficulty": "Advanced",
    "rating": 1620,
    "fen": "8/3k4/8/8/8/8/1P6/1K6 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Advancing immediately lets Black take the opposition and draw. Find the quiet waiting step that wins the distant opposition battle!",
    "moves": [
      "Ka2"
    ],
    "explanation": "Ka2! — Stepping diagonally takes the critical square sequence so White seizes direct opposition whenever Black’s king approaches."
  },
  {
    "id": "end-triangulation-ke4",
    "category": "Endgame",
    "theme": "Corresponding Squares and Triangulation",
    "difficulty": "Advanced",
    "rating": 1640,
    "fen": "8/8/1p1k4/1P1P4/3K4/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black defends the b6 pawn with ...Kd6. Step carefully to keep Black in zugzwang and break into the pawns!",
    "moves": [
      "Ke4"
    ],
    "explanation": "Ke4! — Entering the winning corresponding-square circuit forces Black’s king away from d6/c5 so White infiltrates to c6 or f5."
  },
  {
    "id": "end-triangulation-c-pawn",
    "category": "Endgame",
    "theme": "Outflanking Behind a Blocked Pawn",
    "difficulty": "Medium",
    "rating": 1290,
    "fen": "2k5/8/2p5/2P5/3K4/8/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. With the c-pawns locked on c5 and c6, find the right king route to win the c6 pawn without allowing a draw!",
    "moves": [
      "Ke4"
    ],
    "acceptAlso": [
      "Ke5"
    ],
    "explanation": "Ke4 — Advancing along the e-file outflanks Black’s king, reaching d6 or f6 to force Black off the defense of c6."
  },
  {
    "id": "end-breakthrough-b6",
    "category": "Endgame",
    "theme": "Three-Pawn Queenside Breakthrough",
    "difficulty": "Medium",
    "rating": 1400,
    "fen": "8/ppp3k1/8/PPP5/8/8/6K1/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Both kings are on the kingside while three pawns face three on the queenside. Sacrifice pawns to force a decisive promotion!",
    "moves": [
      "b6",
      "cxb6",
      "a6"
    ],
    "explanation": "b6! — After 1...cxb6 2.a6! (and 1...axb6 2.c6!), a White pawn breaks cleanly through to the 8th rank."
  },
  {
    "id": "end-breakthrough-g6",
    "category": "Endgame",
    "theme": "Three-Pawn Kingside Breakthrough",
    "difficulty": "Medium",
    "rating": 1410,
    "fen": "1k6/5ppp/8/5PPP/8/8/8/1K6 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Both kings sit far away on the b-file while 3v3 pawns face off on the kingside. Execute the winning breakthrough!",
    "moves": [
      "g6",
      "hxg6",
      "f6"
    ],
    "explanation": "g6! — After 1...hxg6 2.f6!, White guarantees an unstoppable promotion on g7 or h8."
  },
  {
    "id": "end-wrong-rook-corner-nf4",
    "category": "Endgame",
    "theme": "Wrong-Rook-Pawn Fortress Sacrifice",
    "difficulty": "Medium",
    "rating": 1450,
    "fen": "6k1/8/5BK1/7P/8/8/4n3/8 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White threatens to advance the h-pawn with a dark-squared bishop that matches h8. Sacrifice your knight to reach a theoretical draw!",
    "moves": [
      "Nf4+"
    ],
    "explanation": "Nf4+! — Eliminating or decoupling the dangerous h-pawn allows Black to reach a safe drawn configuration."
  },
  {
    "id": "end-wrong-rook-corner-kh2",
    "category": "Endgame",
    "theme": "Wrong-Color Bishop Corner Shelter",
    "difficulty": "Easy",
    "rating": 1080,
    "fen": "8/8/8/8/7p/5k2/5b2/6K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black holds an h-pawn and a dark-squared bishop while aiming for h1. Step into the safe corner to guarantee a draw!",
    "moves": [
      "Kh2"
    ],
    "acceptAlso": [
      "Kh1"
    ],
    "explanation": "Kh2 / Kh1 — Since Black’s dark-squared bishop cannot cover the light h1 corner, White simply shuttles between h1 and g2 for an effortless draw."
  },
  {
    "id": "end-queen-vs-c-pawn-ka1",
    "category": "Endgame",
    "theme": "Queen vs Seventh-Rank Bishop Pawn Trick",
    "difficulty": "Medium",
    "rating": 1350,
    "fen": "8/8/8/8/8/1Q6/2p5/1k4K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White’s queen pins the c2 pawn against your king. Find the stalemate corner defense instead of stepping behind the pawn!",
    "moves": [
      "Ka1"
    ],
    "explanation": "Ka1! — Stepping into the corner prevents Qxc2 because of stalemate, allowing Black to hold the well-known c2 pawn draw."
  },
  {
    "id": "end-queen-vs-a-pawn-kb1",
    "category": "Endgame",
    "theme": "Queen vs Rook Pawn Stalemate Defense",
    "difficulty": "Easy",
    "rating": 1120,
    "fen": "8/8/8/8/3Q4/8/p7/2k3K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. Your a-pawn stands one step from queening while White’s queen circles nearby. Find the only move that keeps the draw alive!",
    "moves": [
      "Kb1"
    ],
    "explanation": "Kb1! — Threatening ...a1=Q while setting up the classic a2 rook-pawn stalemate trap forces White’s queen to keep checking."
  },
  {
    "id": "end-queen-vs-e-pawn-qf3",
    "category": "Endgame",
    "theme": "Queen vs Center Pawn Pin",
    "difficulty": "Easy",
    "rating": 1140,
    "fen": "7K/8/8/8/8/2Q5/4p3/3k4 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Unlike rook and bishop pawns, a center pawn cannot save Black with stalemate. Pin or check decisively to halt the e2 pawn!",
    "moves": [
      "Qf3"
    ],
    "acceptAlso": [
      "Qa1+",
      "Qd4+"
    ],
    "explanation": "Qf3 (or Qa1+ / Qd4+) — Center pawns lack stalemate tricks; pinning the e2 pawn or forcing Black’s king onto e1 lets White’s king march down and win."
  },
  {
    "id": "end-shoulder-block-kf5",
    "category": "Endgame",
    "theme": "Shouldering the Defender Away (Kf5)",
    "difficulty": "Easy",
    "rating": 1090,
    "fen": "8/8/2k5/8/4K3/7P/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s king races toward the h3 rook pawn. Pushing h4 immediately draws — find the shouldering king move that keeps Black out!",
    "moves": [
      "Kf5"
    ],
    "acceptAlso": [
      "Ke5"
    ],
    "explanation": "Kf5! (or Ke5) — Advancing the king to shoulder Black away from the f6/g7 corner guarantees White’s h-pawn promotes."
  },
  {
    "id": "end-shoulder-block-kc5",
    "category": "Endgame",
    "theme": "Shouldering the Defender Away (Kc5)",
    "difficulty": "Easy",
    "rating": 1110,
    "fen": "8/5k2/8/8/3K4/P7/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black wants to slip across toward the a-pawn and reach the drawing corner. Step in aggressively to cut off Black’s king!",
    "moves": [
      "Kc5"
    ],
    "acceptAlso": [
      "Kd5"
    ],
    "explanation": "Kc5 (or Kd5) — Stepping forward seizes the vital cutting squares and prevents Black’s king from ever reaching b7/a8."
  },
  {
    "id": "end-tarrasch-behind-ra8",
    "category": "Endgame",
    "theme": "Tarrasch Rule: Rook Behind Passed Pawn",
    "difficulty": "Medium",
    "rating": 1320,
    "fen": "2r3k1/5pp1/P6p/8/8/8/5PP1/1R4K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White’s passed a-pawn has reached a6. Apply Tarrasch’s fundamental rook-ending principle to maximize your rook’s scope!",
    "moves": [
      "Ra8"
    ],
    "explanation": "Ra8! — Placing the rook behind the enemy passed pawn ties White’s rook down passively and preserves active counterchances."
  },
  {
    "id": "end-tarrasch-skewer-rd8",
    "category": "Endgame",
    "theme": "Promotion Skewer on the Eighth Rank",
    "difficulty": "Medium",
    "rating": 1380,
    "fen": "6k1/P4pp1/7p/8/8/8/r4PPP/3R2K1 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s rook blockades the a7 pawn from a2. Deliver the decisive tactic that clears the promotion square!",
    "moves": [
      "Rd8+"
    ],
    "explanation": "Rd8+! — Forcing Black’s king to the 7th rank allows promotion with an immediate skewer winning Black’s rook on a2."
  },
  {
    "id": "end-active-rook-rb2",
    "category": "Endgame",
    "theme": "Active Rook Counterplay Against Passed Pawn",
    "difficulty": "Medium",
    "rating": 1400,
    "fen": "6k1/5pp1/7p/8/1P6/8/4rPPP/R5K1 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move. White pushes a passed b-pawn while Black’s rook stands passively on the 2nd rank. Find the active rook move that saves the game!",
    "moves": [
      "Rb2"
    ],
    "explanation": "Rb2! — Attacking the b4 pawn immediately while threatening the back-rank pawns creates dynamic counterplay that holds the draw."
  },
  {
    "id": "end-bad-good-bishop-h5",
    "category": "Endgame",
    "theme": "Good vs Bad Bishop Breakthrough",
    "difficulty": "Advanced",
    "rating": 1660,
    "fen": "8/3b1k2/2p1p1p1/1pPpP1P1/1P1P2KP/3B4/8/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black’s light-squared bishop is entombed behind its own light-square pawns. Find the three-move breakthrough that cracks open the kingside!",
    "moves": [
      "h5",
      "gxh5+",
      "Kxh5"
    ],
    "explanation": "h5! — After 1...gxh5+ 2.Kxh5!, White’s king and active dark-squared bishop invade the dark squares while Black’s bishop stays helpless."
  },
  {
    "id": "end-minor-piece-fortress-h5",
    "category": "Endgame",
    "theme": "Minor-Piece Fortress Against a Rook",
    "difficulty": "Advanced",
    "rating": 1580,
    "fen": "8/5k2/6p1/5p2/5P1P/5BK1/8/1r6 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move, down the exchange against a rook. Liquidate and freeze the remaining kingside pawns to lock in an unbreakable fortress draw!",
    "moves": [
      "h5"
    ],
    "explanation": "h5! — After ...gxh5 Bxh5+, Black has no second breakthrough left and White’s bishop and king effortlessly seal the fortress."
  },
  {
    "id": "end-rook-stalemate-rh1",
    "category": "Endgame",
    "theme": "Stalemate Escape in a Lost Rook Endgame",
    "difficulty": "Medium",
    "rating": 1470,
    "fen": "8/8/6k1/6p1/5pK1/5P2/7R/5r2 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move in a seemingly hopeless rook endgame. Find the shocking defensive resource that forces an immediate draw!",
    "moves": [
      "Rh1"
    ],
    "explanation": "Rh1! — Offering the rook on the back rank leaves Black no winning capture because 1...Rxh1 is stalemate and stepping away lets White save the game."
  },
  {
    "id": "end-bishop-zugzwang-kg5",
    "category": "Endgame",
    "theme": "Opposite-Colored Bishop Counterplay & King Invasion",
    "difficulty": "Advanced",
    "rating": 1600,
    "fen": "8/8/2k1p3/3pP3/2pP1K2/2P5/1B6/4b3 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Black threatens ...Bd2+ and ...Kc6-b5-a4. Step into an active king counterattack to neutralize Black’s bind and force a draw!",
    "moves": [
      "Kg5"
    ],
    "explanation": "Kg5! — Marching straight toward Black’s g/h weaknesses creates concrete counterplay that keeps Black from winning in the bishop endgame."
  },
  {
    "id": "end-pawn-zugzwang-kd6",
    "category": "Endgame",
    "theme": "Pawn Ending Zugzwang Hold",
    "difficulty": "Easy",
    "rating": 1060,
    "fen": "8/8/1p2k3/1P6/3K4/8/8/8 b - - 0 1",
    "sideToMove": "Black",
    "prompt": "Black to move and defend a delicate 1-vs-1 pawn endgame. Find the only move that keeps White out of c5 and e5!",
    "moves": [
      "Kd6"
    ],
    "explanation": "Kd6! — Taking diagonal/key-square control covers both c5 and e5 simultaneously, leaving White unable to force zugzwang."
  },
  {
    "id": "end-king-activity-ke2",
    "category": "Endgame",
    "theme": "King Activity Race in a Symmetrical Endgame",
    "difficulty": "Medium",
    "rating": 1280,
    "fen": "8/5pk1/6p1/p6p/P6P/6P1/5P2/5K2 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move. Pawns are balanced on both wings, but Black’s isolated a5 pawn is exposed. Activate your king immediately to win the race!",
    "moves": [
      "Ke2"
    ],
    "explanation": "Ke2! — Centralizing the king rapidly toward d3-c4-b5 wins the queenside pawn before Black’s king can arrive in time."
  },
  {
    "id": "end-king-activity-ke4",
    "category": "Endgame",
    "theme": "Outracing the Doubled Pawns with King Activity",
    "difficulty": "Medium",
    "rating": 1300,
    "fen": "8/5p2/5pk1/8/5P2/5K2/7P/8 w - - 0 1",
    "sideToMove": "White",
    "prompt": "White to move in a 2-vs-2 endgame where Black suffers from doubled f-pawns. Seize the active central square with your king to convert the advantage!",
    "moves": [
      "Ke4"
    ],
    "explanation": "Ke4! — Centralizing onto e4 fixes Black’s doubled pawns, seizes key space, and prepares Kd5 or f5 to break through."
  }
];
