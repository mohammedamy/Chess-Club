export const ENDGAMES = [
  {
    "id": "kp-vs-k",
    "name": "King and Pawn vs King",
    "difficulty": "Fundamental",
    "summary": "The most basic winning endgame — yet rich with the principle of opposition. The defender draws if the attacker cannot take the opposition.",
    "fen": "4k3/8/4K3/4P3/8/8/8/8 w - - 0 1",
    "goal": "Promote the e5 pawn with proper king escort.",
    "targetResult": "Win",
    "technique": [
      "The attacker (White) must use the king to escort the pawn forward.",
      "The key concept is OPPOSITION: when the kings face each other on the same file/rank with one square between, whoever does NOT have to move has the opposition.",
      "Generally, the king should be in front of its pawn — never let your own pawn block your king.",
      "If the defending king reaches the queening square first, with proper play, the position is drawn.",
      "Practical test: from this position, can White force the pawn to e8=Q?"
    ]
  },
  {
    "id": "kqk",
    "name": "King + Queen vs King mate",
    "difficulty": "Fundamental",
    "summary": "The most common mate to know. The queen drives the king to the edge, then the friendly king gives the final shoulder.",
    "fen": "8/8/8/3k4/8/8/3K4/3Q4 w - - 0 1",
    "goal": "Drive the Black king to the board edge and checkmate without stalemate.",
    "targetResult": "Win",
    "technique": [
      "The queen drives the enemy king toward an edge — but be careful of stalemate!",
      "Place the queen a knight's move from the enemy king to herd it without ever letting it escape.",
      "Once the king is on the edge, bring your own king close to support.",
      "Deliver mate by walking the queen to a square adjacent to the cornered king with your own king controlling escape squares.",
      "Practice this until you can mate in fewer than 10 moves from any position."
    ]
  },
  {
    "id": "krk",
    "name": "King + Rook vs King mate",
    "difficulty": "Fundamental",
    "summary": "Trickier than the queen mate — the rook lacks the queen's diagonal power, so the kings must coordinate carefully. Use the \"ladder\" or \"staircase\" technique.",
    "fen": "8/8/8/3k4/8/8/3K4/3R4 w - - 0 1",
    "goal": "Shrink the Black king's box with the rook and deliver edge checkmate.",
    "targetResult": "Win",
    "technique": [
      "The rook controls a rank or file; the king must drive the enemy king toward it.",
      "The KEY method is the \"ladder\": cut off the enemy king with the rook, then walk your king toward it, then cut off again on the next rank.",
      "Avoid stalemate — never let the enemy king have no legal moves while not in check.",
      "Final mate: enemy king on the edge, your king two squares away in opposition, rook delivers the killing blow on the edge."
    ]
  },
  {
    "id": "lucena",
    "name": "The Lucena Position",
    "difficulty": "Critical",
    "summary": "Named after Luis Ramírez de Lucena (1497) — though he didn't actually publish it! This is THE winning rook endgame technique. Memorize the \"bridge\" idea.",
    "fen": "1K1k4/1P6/8/8/8/8/8/2R3r1 w - - 1 1",
    "goal": "Build the 4th-rank rook bridge with Rc4! to shelter the king and promote b7.",
    "targetResult": "Win",
    "technique": [
      "White has a passed pawn one move from queening, but the king is in the way.",
      "The \"bridge\" technique: Rc1-c4! Then Kb8-c8 (waiting). When the rook checks come, the rook on c4 forms a SHIELD on the fourth rank.",
      "After the king walks down, the rook will block any check by moving to the fourth rank.",
      "Always set the rook on the rank where it will block checks — this is the bridge.",
      "This is the most important endgame to master in rook-and-pawn-up territory."
    ]
  },
  {
    "id": "philidor",
    "name": "The Philidor Position (defending)",
    "difficulty": "Critical",
    "summary": "François-André Philidor (1749) showed how a SIDE down a rook+pawn can DRAW with correct technique — provided the defender has correct rook activity.",
    "fen": "5k2/8/4K3/4P3/8/r7/8/4R3 b - - 0 1",
    "goal": "Hold the 3rd/6th rank cutoff until ...e6 is played, then switch to back-rank checks.",
    "targetResult": "Draw",
    "technique": [
      "The defending side keeps their rook on the third (or sixth) rank — preventing the enemy king from advancing to support its pawn.",
      "When the pawn is finally pushed, the defending rook drops to the back rank and gives endless side-checks.",
      "Without anywhere to hide from the checks (no shield/bridge), the attacker cannot make progress.",
      "This is the defender's roadmap in any pawn-down rook ending."
    ]
  },
  {
    "id": "opposition",
    "name": "The Opposition",
    "difficulty": "Fundamental",
    "summary": "One of the most subtle yet powerful endgame ideas. Whoever has the opposition controls the game — especially in king-and-pawn endings.",
    "fen": "4k3/8/4K3/8/8/8/8/8 b - - 0 1",
    "goal": "Understand direct, diagonal, and distant king opposition.",
    "targetResult": "Study",
    "technique": [
      "DIRECT opposition: kings on the same file with one square between, the side NOT to move has it.",
      "DIAGONAL opposition: same diagonal, one square between.",
      "DISTANT opposition: kings on the same line with 3 or 5 squares between.",
      "In K+P vs K, the attacker needs the opposition to make progress; the defender needs it to hold.",
      "A simple test: reach a position where your opponent must move first. That's opposition."
    ]
  },
  {
    "id": "rule-of-square",
    "name": "Rule of the Square",
    "difficulty": "Fundamental",
    "summary": "Count instantly without calculating every move: draw a diagonal from the passed pawn to its queening rank to see if the defending king can catch it.",
    "fen": "6k1/8/8/8/1p6/8/8/6K1 w - - 0 1",
    "goal": "Determine whether the White king can enter the b4-b1-e1-e4 square on move 1.",
    "targetResult": "Draw",
    "technique": [
      "Trace a square from the passed pawn (b4) to its promotion square (b1), forming b4-b1-e1-e4.",
      "Because White is to move, Kf1 steps right onto the edge of the square and catches the pawn before it queens.",
      "If the pawn has not moved off its starting rank (b7/b2), remember its double-push option shrinks the square by one rank.",
      "Mastering this rule saves minutes of calculation in practical endgames."
    ]
  },
  {
    "id": "sixth-rank-key-squares",
    "name": "Key Squares on the 6th Rank",
    "difficulty": "Fundamental",
    "summary": "Once the attacker's king reaches the 6th rank in front of its pawn, the game is won regardless of who holds the opposition.",
    "fen": "4k3/8/3K4/4P3/8/8/8/8 w - - 0 1",
    "goal": "Use the 6th-rank key square d6/e6/f6 to force promotion even when Black tries to defend.",
    "targetResult": "Win",
    "technique": [
      "For any non-rook pawn on the 5th rank, its three key squares sit two ranks ahead (d7, e7, f7 — or the 6th rank d6, e6, f6 once reached).",
      "From d6, White simply advances e6+ or plays Kd7/Ke6 depending on Black's reply, guaranteeing control of e8.",
      "Never push the pawn onto the 6th rank before your king is ready to step beside it."
    ]
  },
  {
    "id": "pawn-breakthrough",
    "name": "The 3 vs 3 Pawn Breakthrough",
    "difficulty": "Critical",
    "summary": "In blocked symmetrical pawn endings, a temporary double sacrifice can create an unstoppable passed pawn.",
    "fen": "6k1/ppp5/8/PPP5/8/8/8/6K1 w - - 0 1",
    "goal": "Sacrifice two pawns on b6 and a6/c6 so the third races to promotion.",
    "targetResult": "Win",
    "technique": [
      "Start with b5-b6! threatening bxa7 and bxc7 simultaneously.",
      "After ...axb6 (or ...cxb6), White immediately sacrifices the other wing pawn with c6! (or a6!).",
      "One white pawn slips past all defenders and queens before the distant Black king can enter the square.",
      "Always check breakthrough sacrifices before conceding a drawn king-and-pawn ending."
    ]
  },
  {
    "id": "distant-opposition",
    "name": "Distant Opposition & Flanking",
    "difficulty": "Critical",
    "summary": "When kings are separated by 3 or 5 squares, the player who steps onto an odd-number distance with the enemy to move wins the direct opposition later.",
    "fen": "8/8/8/8/4k3/8/4P3/4K3 w - - 0 1",
    "goal": "Seize distant opposition or outflank Black's king to escort the e2 pawn.",
    "targetResult": "Win",
    "technique": [
      "With an odd number of squares between the kings (1, 3, or 5), the side NOT to move holds the opposition.",
      "When the defending king blocks vertically, step sideways (flanking) to maintain alignment and walk forward.",
      "Keep your king ahead of your pawn rather than pushing e2-e4 prematurely."
    ]
  },
  {
    "id": "triangulation",
    "name": "King Triangulation",
    "difficulty": "Master",
    "summary": "When you want the exact same position with your opponent to move (zugzwang), take a three-square triangle with your king while the opponent lacks one.",
    "fen": "8/2k5/8/2K1P3/8/8/8/8 w - - 0 1",
    "goal": "Lose a tempo via a king triangle (Kb4-Kc4 or Kd4-Kc4) to force Black out of the key square.",
    "targetResult": "Win",
    "technique": [
      "If White simply moves back and forth linearly, Black mirrors and holds the draw.",
      "Check which king has more maneuvering squares nearby — the side with three free squares forms a triangle while the defender has only two.",
      "Returning to the starting square in three moves instead of two hands the move to Black in zugzwang."
    ]
  },
  {
    "id": "vancura-defense",
    "name": "The Vancura Rook Defense",
    "difficulty": "Master",
    "summary": "When a defender's rook cannot get behind a rook pawn or knight pawn, attacking the pawn sideways from the wing holds the draw.",
    "fen": "R7/8/1K6/P7/8/8/5r2/6k1 b - - 0 1",
    "goal": "Place the defending rook on the f-file/6th rank to attack a5 horizontally while keeping the king tucked safely.",
    "targetResult": "Draw",
    "technique": [
      "In rook-pawn endings (a- or h-pawn), checking from the front fails if the attacker hides behind the pawn.",
      "Instead, swing the rook sideways to ...Rf6! (or the 6th rank) pinning the White king to defense of a5.",
      "Whenever White's king abandons the pawn to chase checks, take the pawn or return to endless side checks."
    ]
  },
  {
    "id": "tarrasch-rule",
    "name": "Tarrasch Rule: Rook Behind the Pawn",
    "difficulty": "Critical",
    "summary": "Siegbert Tarrasch famously taught: rooks belong behind passed pawns — both your own and your opponent's.",
    "fen": "8/P7/8/8/8/1k6/6K1/R6r w - - 0 1",
    "goal": "See why an active rook behind the passed pawn outperforms a passive rook blocking from the front.",
    "targetResult": "Win",
    "technique": [
      "A rook behind your own passed pawn gains range with every step the pawn takes forward.",
      "A rook in front of a passed pawn loses squares and gets cramped on the promotion rank.",
      "Use your active king to drive away the checking rook once the pawn reaches the 7th rank."
    ]
  },
  {
    "id": "opposite-bishops-fortress",
    "name": "Opposite-Colored Bishops Fortress",
    "difficulty": "Fundamental",
    "summary": "Even two pawns down, a defender can construct an impenetrable light- or dark-square blockade in opposite-colored bishop endings.",
    "fen": "8/8/4k3/3bP3/3P4/3K4/5B2/8 b - - 0 1",
    "goal": "Hold the blockading square complex (d5/f5) so White's pawns can never cross safely.",
    "targetResult": "Draw",
    "technique": [
      "Place pawns on the color opposite your bishop so the bishop can defend them while contesting the other color complex.",
      "The defending king and bishop share the blockade of the two light or dark squares in front of the pawns.",
      "Never trade the blockading bishop or give up control of the key color complex."
    ]
  },
  {
    "id": "wrong-corner-bishop",
    "name": "Wrong-Corner Bishop + Rook Pawn",
    "difficulty": "Critical",
    "summary": "A bishop plus an a- or h-pawn cannot force a win if the promotion square is the opposite color of the bishop.",
    "fen": "k7/8/1K6/P7/3B4/8/8/8 w - - 0 1",
    "goal": "Recognize why White cannot expel Black's king from a8 when holding a dark-squared bishop.",
    "targetResult": "Draw",
    "technique": [
      "White has a dark-squared bishop (d4) and an a-pawn whose promotion square a8 is LIGHT.",
      "Because the bishop can never control a8, Black simply shuttles between a8 and b8 (or stays cornered for stalemate).",
      "As the defender, race straight to the wrong-color corner!"
    ]
  },
  {
    "id": "queen-vs-7th-pawn",
    "name": "Queen vs 7th-Rank Pawn",
    "difficulty": "Master",
    "summary": "A lone queen wins against a knight or center pawn on the 7th rank by repeatedly forcing the enemy king in front of its own pawn.",
    "fen": "4Q3/8/8/8/8/3k4/4p3/1K6 w - - 0 1",
    "goal": "Check repeatedly until Black's king steps onto e1, freeing one tempo to walk White's king closer.",
    "targetResult": "Win",
    "technique": [
      "Against center (c/d/e/f) or knight (b/g) pawns, the queen uses checks and pins to force the defending king in front of the pawn (onto e1).",
      "Whenever the king blocks its own pawn on the queening square, White steals one move to advance the White king!",
      "Exception: bishop pawns (c/f) and rook pawns (a/h) allow sneaky stalemate tricks unless White's king is close enough."
    ]
  },
  {
    "id": "saavedra-position",
    "name": "The Saavedra Position",
    "difficulty": "Master",
    "summary": "Discovered in 1895 by Fernando Saavedra from a study by Georges Barbier, this miracle endgame proves why automatic queening can throw away a win.",
    "fen": "8/8/1KP5/3r4/8/8/8/k7 w - - 0 1",
    "goal": "Walk the king down the b-file while shielding c7, then find c8=R!! to dodge stalemate and win.",
    "targetResult": "Win",
    "technique": [
      "Start with c6-c7! Black replies 1...Rd6+ and chases White's king step by step down the b-file: 2. Kb5 Rd5+ 3. Kb4 Rd4+ 4. Kb3 Rd3+.",
      "Step onto Kc2! where Black has no check along the d-file; Black sets a last-ditch swindle with 5...Rd4.",
      "Never queen automatically: 6. c8=Q?? Rc4+! 7. Qxc4 is stalemate! Instead, underpromote with 6. c8=R!!.",
      "White now threatens Rc1#, and after 6...Ra4 7. Kb3! attacks both the rook and the mating square c1."
    ]
  },
  {
    "id": "reti-study",
    "name": "Réti's Endgame Study",
    "difficulty": "Master",
    "summary": "Richard Réti's iconic 1921 composition shows the power of king geometry: a diagonal king march threatens two distant goals in the same tempo.",
    "fen": "7K/8/k1P5/7p/8/8/8/8 w - - 0 1",
    "goal": "March the White king diagonally across the board to simultaneously catch h5 and support c6.",
    "targetResult": "Draw",
    "technique": [
      "Chasing h5 straight down the h-file fails, while pushing 1. c7? allows ...Kb7 to capture the pawn effortlessly.",
      "Because a diagonal king step covers one rank and one file simultaneously, play 1. Kg7! h4 2. Kf6!.",
      "From f6, White threatens both Ke5 (entering the square of the h-pawn) and Ke7/Ke6 (supporting the c6 pawn).",
      "After 2...h3 3. Ke6! h2 4. c7 Kb7 5. Kd7, both pawns promote and White secures the draw (or 2...Kb6 3. Ke5! Kxc6 4. Kf4)."
    ]
  },
  {
    "id": "two-bishops-mate",
    "name": "Two Bishops Checkmate",
    "difficulty": "Fundamental",
    "summary": "A pair of opposite-colored bishops works in parallel diagonal corridors to drive the lone king to the edge and corner it.",
    "fen": "8/8/8/3k4/8/8/3K4/2B2B2 w - - 0 1",
    "goal": "Coordinate your king and both bishops to restrict the Black king to a corner and force checkmate.",
    "targetResult": "Win",
    "technique": [
      "Place the two bishops side by side so they control adjacent diagonals and build an impassable barrier.",
      "Advance your king into the center (Kd3, Ke4) while using bishop moves to shrink the enemy king's box toward the edge.",
      "Once the enemy king reaches a side edge, herd it toward a corner using your king for opposition while avoiding stalemate.",
      "In the corner, one bishop guards the escape square along the edge while the other delivers diagonal checkmate supported by your king."
    ]
  },
  {
    "id": "bishop-knight-mate",
    "name": "Bishop & Knight Checkmate",
    "difficulty": "Master",
    "summary": "The hardest elementary checkmate: a lone king can only be mated in a corner matching the bishop's square color, requiring the knight W-maneuver.",
    "fen": "2k5/8/2K5/8/4B3/3N4/8/8 w - - 0 1",
    "goal": "Force the Black king into the light-squared corner (a8) using the W-maneuver and deliver mate.",
    "targetResult": "Win",
    "technique": [
      "Checkmate with bishop and knight is only possible in a corner of the bishop's color — here a8 or h1 for the light-squared bishop on e4.",
      "Coordinate your bishop (Be4-g6-f7-d5) and king (Kd6) to prevent the defender from slipping toward the safe dark corners.",
      "Use the knight W-maneuver (Nd3-c5-a6) to control the dark squares on the 8th rank and herd the Black king toward a8.",
      "Close the mating net in a8: White's king on b6/c7 and knight on a6 cut off escape while the light-squared bishop delivers mate on the a8-h1 diagonal."
    ]
  },
  {
    "id": "queen-vs-rook-philidor",
    "name": "Queen vs Rook (Philidor Position)",
    "difficulty": "Master",
    "summary": "François-André Philidor analyzed the decisive winning method in Queen vs Rook: force the defender's king and rook into mutual zugzwang.",
    "fen": "2k5/2r5/8/1K6/4Q3/8/8/8 w - - 0 1",
    "goal": "Crack Black's third-rank defense and drive the king and rook into Philidor's losing zugzwang.",
    "targetResult": "Win",
    "technique": [
      "Black defends with the third-rank (7th-rank) setup, keeping the rook right next to the king on c7.",
      "Advance your king (1. Kb6!) to push Black's king onto the 8th rank and sever the rook from its protective shield.",
      "Use queen checks, pins, and triangulation to reach Philidor's zugzwang (e.g., Kc6 and Qe5 vs Kc8 and Rd7 with Black to move).",
      "Always watch out for stalemate defenses and desperation rook checks aimed at trading queens."
    ]
  },
  {
    "id": "centurini-rule",
    "name": "Centurini's Rule (Same-Colored Bishops)",
    "difficulty": "Master",
    "summary": "Luigi Centurini (1847) showed when a same-colored bishop plus pawn defeats a defender whose king sits on the opposite color in front of the pawn.",
    "fen": "3k4/1K6/2P5/8/8/3B3b/8/8 w - - 0 1",
    "goal": "Deflect Black's bishop between the c8-h3 and a6-c8 diagonals to win control of the promotion square c8.",
    "targetResult": "Win",
    "technique": [
      "Black's king on d8 sits on a dark square opposite to the light-squared bishops, so White cannot dislodge it with direct bishop checks.",
      "The promotion square c8 lies on two light diagonals: the long c8-h3 line and the short a6-b7-c8 line (currently blocked on b7 by White's king).",
      "Play 1. Kb8! to vacate b7 and prepare c7+ followed by Ba6, forcing Black's bishop off the long c8-h3 diagonal.",
      "Once the defending bishop retreats onto the short a6-c8 diagonal, White intercepts along f1-a6 or challenges it on g2-b7 to promote."
    ]
  },
  {
    "id": "rook-vs-bishop-fortress",
    "name": "Rook vs Bishop (Safe-Corner Fortress)",
    "difficulty": "Critical",
    "summary": "Without pawns, Rook vs Bishop is a theoretical draw — provided the defender steers the king into the corner opposite in color to its bishop.",
    "fen": "k7/3R4/2K5/4b3/8/8/8/8 b - - 0 1",
    "goal": "Hold the draw in the safe light-squared corner (a8) by guarding b8 and a7 with your dark-squared bishop.",
    "targetResult": "Draw",
    "technique": [
      "Black's king stands on the light square a8 while holding a dark-squared bishop (e5), making a8 the safe corner!",
      "Both squares adjacent to a8 (b8 and a7) are dark, so Black's bishop can interpose against 8th-rank checks or escape via ...Ba7+.",
      "Keep your bishop active along a long diagonal (...Bf4, ...Bg5) ready to drop to b8 or deliver a freeing check if White steps to Kb6.",
      "Never get forced into the wrong dark-squared corner (h8 or a1), where a dark-squared bishop cannot defend the light escape squares."
    ]
  },
  {
    "id": "rook-vs-knight-edge",
    "name": "Rook vs Knight on the Edge",
    "difficulty": "Critical",
    "summary": "Rook vs Knight draws easily in the center, yet a king driven to the corner with a pinned or edge-bound knight often falls to tactical zugzwang.",
    "fen": "k7/1n6/2K5/3R4/8/8/8/8 w - - 0 1",
    "goal": "Use Rd7! to immobilize the edge-bound knight on b7 and win it or force checkmate.",
    "targetResult": "Win",
    "technique": [
      "When the defending king and knight stay close together near the center, Rook vs Knight is a standard draw.",
      "Forced onto the corner edge (Ka8 and Nb7), the knight loses central jumps and blocks its own king's breathing room.",
      "Strike immediately with 1. Rd7!, tying the knight down and threatening both Rxb7 and Kb6.",
      "After 1...Na5+ 2. Kb5 Nb7 3. Kb6 Kb8 4. Rxb7+, White captures the stranded knight and mates effortlessly."
    ]
  },
  {
    "id": "outside-passed-decoy",
    "name": "Outside Passed Pawn Decoy",
    "difficulty": "Fundamental",
    "summary": "Even with equal material on the board, an outside passed pawn acts as a magnet that pulls the enemy king away from the decisive wing.",
    "fen": "8/5ppp/4k3/4p3/P3P3/4K3/6PP/8 w - - 0 1",
    "goal": "Use the distant a4 passer as a decoy while preparing kingside pawns and king infiltration.",
    "targetResult": "Win",
    "technique": [
      "Material is equal (4 pawns each), yet White holds an outside passed pawn on a4 far from the kingside pawns.",
      "Avoid pushing 1. a5? too early — Black's king catches it on a6 and returns in time; instead improve with 1. g4! and bring your king toward d3-c4-b4.",
      "Once Black's king is forced all the way to a6-a5 to capture the decoy pawn, White's king breaks straight into c5-d5-e5.",
      "White's king then sweeps e5 and the undefended kingside pawns (f7, g7, h7) long before Black's king can make it back."
    ]
  },
  {
    "id": "protected-passed-pawn",
    "name": "The Protected Passed Pawn",
    "difficulty": "Fundamental",
    "summary": "A protected passed pawn permanently chains the defending king to its blockade, granting the attacker's king complete freedom to invade elsewhere.",
    "fen": "8/6pp/2k5/1pP5/1P6/4K3/6PP/8 w - - 0 1",
    "goal": "Keep Black's king tied to the protected c5 passer while marching your king into d4-e5 or the kingside.",
    "targetResult": "Win",
    "technique": [
      "White's c5 passed pawn is solidly protected by b4 against Black's fixed b5 pawn, so Black can never undermine the base.",
      "Black's king on c6 is handcuffed to stopping c5-c6-c7-c8=Q and cannot safely leave the queenside.",
      "With the defender paralyzed, White's king advances actively (Kd4-e5 or Kf4-g5) to attack the kingside or outflank via d5.",
      "Save the push c6 for the moment Black's king is driven away by zugzwang or distracted on the other wing."
    ]
  },
  {
    "id": "seventh-rank-pigs",
    "name": "Seventh-Rank \"Pigs\" (Doubled Rooks)",
    "difficulty": "Critical",
    "summary": "Aaron Nimzowitsch coined \"pigs on the 7th\" for doubled rooks on the opponent's second rank, devouring pawns and weaving mating nets.",
    "fen": "r2r2k1/pRR2ppp/8/8/8/7P/P4PP1/6K1 w - - 0 1",
    "goal": "Unleash the doubled rooks on the 7th rank with Rxf7! to shatter Black's kingside and weave a mating net.",
    "targetResult": "Win",
    "technique": [
      "Material is completely equal, yet White's doubled rooks on b7 and c7 dominate the 7th rank while Black's rooks sit passively.",
      "Strike at once with 1. Rxf7! — if Black plays 1...Rf8??, 2. Rxg7+ Kh8 3. Rxh7+ Kg8 4. Rbg7# delivers the Blind Swine mate!",
      "After 1...Kh8 2. Rxg7, the doubled rooks sweep the kingside pawns while keeping Black's king trapped on the back rank.",
      "Notice the vital h3 luft preventing any ...Rd1+ back-rank counterplay before the rooks go hunting."
    ]
  },
  {
    "id": "trebuchet-zugzwang",
    "name": "The Trebuchet (Mutual Zugzwang)",
    "difficulty": "Critical",
    "summary": "Named after the medieval siege engine, the Trebuchet is the purest mutual zugzwang in king-and-pawn endings: whoever has to move loses.",
    "fen": "8/8/8/1K1p4/3Pk3/8/8/8 w - - 0 1",
    "goal": "Step to Kc5! to drop Black into the classic Trebuchet zugzwang and win the d5 pawn.",
    "targetResult": "Win",
    "technique": [
      "In the Trebuchet position (Kc5 and Pd4 vs Ke4 and Pd5), both pawns are locked and each king attacks the opponent's pawn.",
      "Whichever side is to move must step away from defending its own pawn, immediately conceding it and losing the game.",
      "With White to move here, play 1. Kc5! to guard d4, attack d5, and hand the move to Black.",
      "After any Black king retreat (1...Kf5 or 1...Kd3), White captures 2. Kxd5 and marches the passed d-pawn home."
    ]
  },
  {
    "id": "bahr-rule",
    "name": "Bahr's Rule (Rook Pawn + Blocked Pair)",
    "difficulty": "Master",
    "summary": "Walter Bahr (1936) formulated a fast geometric rule for endings with a blocked pawn pair plus an outside rook pawn: a diagonal decides win vs draw.",
    "fen": "8/8/k7/P3p3/4P3/4K3/8/8 w - - 0 1",
    "goal": "Apply Bahr's Rule to verify why the blocked e4/e5 pair wins against Black's king on a6.",
    "targetResult": "Win",
    "technique": [
      "Black's king on a6 stops the a5 pawn, forcing White to evaluate abandoning a5 to march toward the blocked e4/e5 pair.",
      "Bahr's Rule draws a diagonal from the defending blocked pawn toward the a-pawn's promotion rank: the boundary runs through d5-c6-b7-a8.",
      "Because Black's pawn on e5 lies beyond that critical diagonal (whereas shifting everything one file left to d4/d5 would be a draw), White wins!",
      "Maneuver with 1. Kd3! — after 1...Kb5 2. a6! wins immediately, while 1...Kxa5 2. Kc4 wins e5 before Black's king can return."
    ]
  },
  {
    "id": "knight-bad-bishop-ending",
    "name": "Good Knight vs Bad Bishop",
    "difficulty": "Critical",
    "summary": "When pawns are fixed on the color of the opponent's bishop, a centralized knight dominates every weak square of the opposite color.",
    "fen": "8/3b2k1/p1p1p3/1p1pNp2/P2P1P2/2P1PKP1/8/8 w - - 0 1",
    "goal": "Exploit Black's light-squared pawn chains and passive bishop with your dominant dark-square knight.",
    "targetResult": "Win",
    "technique": [
      "All six of Black's pawns (a6, b5, c6, d5, e6, f5) stand on light squares, locking Black's light-squared bishop into a passive defensive role.",
      "White's knight on e5 controls dark squares throughout Black's camp and cannot be challenged by the bad bishop.",
      "Open an entry point with 1. axb5 cxb5, then target Black's queenside weaknesses using dark-square jumps like Nd7-c5 or e5-c6-a5.",
      "Once the knight wins material or ties Black down, White's king infiltrates along the dark squares to decide the game."
    ]
  },
  {
    "id": "cochrane-defense",
    "name": "Cochrane Defense (Rook vs. Rook + 6th-Rank Pawn)",
    "difficulty": "Critical",
    "summary": "Even when the attacker’s king and pawn reach the 6th rank, John Cochrane showed how an active defending rook saves the game with back-rank and lateral checks.",
    "fen": "4k3/7R/4PK2/8/8/8/8/r7 b - - 0 1",
    "goal": "Check immediately with 1...Rf1+! to drive White’s king away from e6 and hold the draw.",
    "targetResult": "Draw",
    "technique": [
      "Passive defense (1...Kd8??) loses immediately to 2.Rh8+ Kc7 3.e7.",
      "Strike at once with 1...Rf1+! forcing the White king to commit.",
      "If White walks toward the rook (2.Kg5 Rg1+ 3.Kf4 Rf1+ 4.Ke3 Re1+), Black wins the pawn or forces perpetual check.",
      "If White retreats back (2.Ke5 Re1+), stay on the e-file and harass the king until repetition."
    ]
  },
  {
    "id": "rook-fh-pawns-vs-rook",
    "name": "Rook + f & h Pawns vs. Rook",
    "difficulty": "Critical",
    "summary": "Two separated pawns on the same wing (f + h) normally win against a lone rook when the attacker’s king leads the advance and avoids back-rank stalemate tricks.",
    "fen": "5k2/8/8/5PKP/8/8/r7/4R3 w - - 0 1",
    "goal": "Activate your king via 1.Kf6! and advance f5-f6 while sheltering against lateral checks.",
    "targetResult": "Win",
    "technique": [
      "Walk the king ahead to f6 (1.Kf6!) before pushing pawns prematurely.",
      "Advance the f-pawn first (f6) so the king can later shelter on g7 or use h5-h6 to create mating threats.",
      "Meet Black’s rook checks by zig-zagging toward the checking rook or interposing your own rook when safe.",
      "Avoid trading into a drawn R+h-pawn vs R ending unless the defending king is cut off."
    ]
  },
  {
    "id": "rook-vs-bishop-pawn-6th",
    "name": "Rook vs. Bishop Pawn on the 6th (Lateral Checks)",
    "difficulty": "Master",
    "summary": "When a bishop pawn reaches the 6th rank and the defender’s king occupies the front, a rook attacking laterally from the long side holds the draw.",
    "fen": "5k2/R7/5PK1/8/8/8/4r3/8 b - - 0 1",
    "goal": "Deliver 1...Rg2+! and keep checking from the g- and h-files until White’s king abandons f6.",
    "targetResult": "Draw",
    "technique": [
      "Because White’s king sits on g6 beside the f6 pawn, Black starts with 1...Rg2+!.",
      "If White plays 2.Kf5 Rf2+ 3.Ke6 Re2+, White cannot escape checks without dropping f6 or stepping into mate.",
      "If White plays 2.Kh7, Black switches behind with 2...Rh2+ 3.Kg6 Rg2+ or cuts off the king.",
      "Keep your rook on the g/h files where checking distance prevents White from shielding with the rook."
    ]
  },
  {
    "id": "queen-vs-rook-pawn-7th",
    "name": "Queen vs. Rook Pawn on the 7th (Stalemate Draw)",
    "difficulty": "Critical",
    "summary": "Against an a- or h-pawn on the 7th rank, a lone queen cannot win if the attacker’s king is too far away — the defender hides in the corner with stalemate.",
    "fen": "8/8/5K2/8/3Q4/8/p7/1k6 w - - 0 1",
    "goal": "Recognize the classic corner stalemate defense that forces a draw when White’s king is distant.",
    "targetResult": "Draw",
    "technique": [
      "Even when White forces Black’s king onto a1 (blocking the a2 pawn), White has NO free tempo to bring the distant Kf6 closer.",
      "Because the queen alone would stalemate Black on a1 if it covered b1 and b2 without checking, Black escapes with ...Ka1.",
      "Only if the attacker’s king stands close enough (roughly within the 4th/5th rank zone) can it assist in delivering mate.",
      "Defenders should deliberately step into the stalemate corner (a1/h1) rather than letting the queen pin and win."
    ]
  },
  {
    "id": "queen-vs-bishop-pawn-7th",
    "name": "Queen vs. Bishop Pawn on the 7th (Winning Geometry)",
    "difficulty": "Master",
    "summary": "Normally a bishop pawn on the 7th draws by stalemate when Black steps to a1/h1 — UNLESS the attacker’s king stands close enough to weave an instant mating net.",
    "fen": "8/8/8/8/3K4/4Q3/2p5/k7 w - - 0 1",
    "goal": "Use the close-range step 1.Kc3! to ignore ...c1=Q threats and force immediate checkmate.",
    "targetResult": "Win",
    "technique": [
      "When White’s king is far away, Black plays ...Ka1 and ...c1=Q (or threatens stalemate on Qxc2).",
      "Here White’s king on d4 stands inside the winning zone: 1.Kc3! immediately covers b2 and threatens Qa7# / Qb3#.",
      "Even if Black promotes 1...c1=Q+, 2.Qxc1+ Ka2 3.Qb2# finishes cleanly.",
      "Always check your king’s distance before conceding a bishop-pawn stalemate draw!"
    ]
  },
  {
    "id": "queen-vs-knight-pawn-7th",
    "name": "Queen vs. Knight Pawn on the 7th (Winning Staircase)",
    "difficulty": "Master",
    "summary": "Unlike rook or bishop pawns, a knight pawn on the 7th rank offers NO stalemate refuge — the queen forces the enemy king onto b1 and walks her king closer.",
    "fen": "8/8/8/3K4/8/4Q3/1p6/k7 w - - 0 1",
    "goal": "Use checks like 1.Qa3+! and 2.Qb3 to force Black onto b1 and bring White’s king in for mate.",
    "targetResult": "Win",
    "technique": [
      "Start with 1.Qa3+! Kb1 — now the pawn on b2 is pinned/blocked by its own king.",
      "Whenever Black’s king blocks b1, White steals a tempo to march the king closer (Kc4-c3).",
      "Against a b- or g-pawn, stepping into the corner (a1/h1) fails because the pawn cannot threaten stalemate once b1 is forced.",
      "Repeat the check-pin-approach cycle until your king reaches c2/c3 and delivers checkmate."
    ]
  },
  {
    "id": "troitzky-line",
    "name": "The Troitzky Line (Two Knights vs. Pawn)",
    "difficulty": "Master",
    "summary": "Alexey Troitzky proved that two knights can force checkmate against a lone pawn — provided the pawn is blockaded securely behind the Troitzky Line (a6/b4/c5/d4/e4/f5/g4/h6).",
    "fen": "1k6/p7/8/2K5/2NN4/8/8/8 w - - 0 1",
    "goal": "Blockade Black’s a7 pawn behind the Troitzky Line and drive Black’s king into a corner with the knights.",
    "targetResult": "Win",
    "technique": [
      "Two knights cannot mate a lone king by force, because stalemate ends the game before mate — UNLESS a spare enemy pawn gives Black legal moves!",
      "Blockade the pawn securely with one knight (e.g., on a6) behind the Troitzky Line so Black cannot race past.",
      "Use the king and second knight to drive Black’s king toward a corner.",
      "At the decisive moment, release the blockading knight to join the mating net while Black’s pawn moves safely without creating stalemate."
    ]
  },
  {
    "id": "corresponding-squares",
    "name": "Corresponding Squares in Pawn Endings",
    "difficulty": "Master",
    "summary": "When both kings dance around a blocked pawn structure, each key square for one king pairs with a unique \"corresponding square\" for the defender.",
    "fen": "8/8/1p1k4/pP6/P7/3K4/8/8 w - - 0 1",
    "goal": "Map which squares correspond (d4↔d6, c4↔c6, e3↔e6) so you recognize zugzwang and opposition triangles.",
    "targetResult": "Study",
    "technique": [
      "A square for Black corresponds to a square for White if stepping onto it holds the exact defensive barrier.",
      "Notice the fixed queenside chains: if White’s king steps to d4, Black must respond with ...Kd6 (or ...Kc7 if White aims for c4).",
      "Whenever the attacker possesses a triangle of squares that the defender cannot mirror, triangulation breaks the correspondence.",
      "Always map mined squares first in locked king-and-pawn endgames before calculating long lines."
    ]
  },
  {
    "id": "shouldering-enemy-king",
    "name": "Shouldering the Enemy King",
    "difficulty": "Fundamental",
    "summary": "Don’t rush to push your passed pawn — use your own king’s body to \"shoulder\" the enemy king out of the pawn’s path.",
    "fen": "8/8/3k4/8/2K5/1P6/8/8 w - - 0 1",
    "goal": "Play 1.Kb5! to block Black’s king away from the b-file and escort b3 cleanly.",
    "targetResult": "Win",
    "technique": [
      "Playing 1.b4? allows 1...Kc6, blocking the pawn directly from the front.",
      "Instead, step diagonally forward with 1.Kb5! — your king physically shoulders Black’s king to the c/d files.",
      "After 1...Kc7 2.Ka6 Kb8 3.Kb6, White secures the key squares ahead of the pawn.",
      "Always ask whether your king can block the opponent’s king BEFORE advancing a passed pawn."
    ]
  },
  {
    "id": "capablanca-active-king-rook",
    "name": "Active King in Rook Endgames",
    "difficulty": "Critical",
    "summary": "Capablanca famously demonstrated that an active, centralized king plus an open file compensates even for a pawn in rook endgames.",
    "fen": "6k1/p4p1p/6p1/8/8/5KP1/r4P1P/4R3 w - - 0 1",
    "goal": "Keep the rook active (Re8+ / Rc1) and march the king toward e4-d5 rather than defending passively.",
    "targetResult": "Study",
    "technique": [
      "In rook endgames, activity of both rook and king easily outweighs a passive extra pawn.",
      "Never tie your rook down passively on the back rank to defend a2/f2; activate it against Black’s pawns instead.",
      "Push your king aggressively toward the center (Ke4-d5) as soon as back-rank checks are neutralized.",
      "Remember Tarrasch’s maxim: a passive rook is almost always fatal in rook endings."
    ]
  },
  {
    "id": "bodycheck-pawn-ending",
    "name": "The Bodycheck in Pawn Endgames",
    "difficulty": "Fundamental",
    "summary": "Similar to shouldering, a timely king step cuts across the defending king’s diagonal return route so your pawn races home untouched.",
    "fen": "8/8/5k2/8/2P5/4K3/8/8 w - - 0 1",
    "goal": "Play 1.Kd4! (not 1.Ke4?) to intercept Black’s king from reaching the queenside.",
    "targetResult": "Win",
    "technique": [
      "Look at the race: if White plays 1.c5? Ke6 2.Kd4 Kd7, Black reaches c6/c7 in time to draw.",
      "Instead, 1.Kd4! shoulders Black’s king away — after 1...Ke6 2.Kc5 Kd7 3.Kb6, White clears the path.",
      "Notice why 1.Ke4? fails to 1...Ke6!, giving Black the direct opposition.",
      "A single diagonal king step toward the pawn often decides win vs. draw."
    ]
  },
  {
    "id": "retreating-bishop-prophylaxis",
    "name": "Retreating Bishop Prophylaxis",
    "difficulty": "Critical",
    "summary": "In bishop endings, pulling your bishop backward to a quiet square often dominates the board by controlling both wings simultaneously.",
    "fen": "8/5k2/4p3/4P1p1/3K4/3B4/8/8 w - - 0 1",
    "goal": "Play 1.Be2! (or Bc4/Bf1) to freeze Black’s g5 pawn and prepare king infiltration via e4-f5 or c5.",
    "targetResult": "Win",
    "technique": [
      "Do not leave the bishop passively on d3 where it blocks your own king’s central routes.",
      "Step back with 1.Be2! to control g4 and h5, paralyzing Black’s kingside pawn.",
      "Once Black’s king must watch g5 and e6, White’s king infiltrates via c5-d6 or e4-f5.",
      "Quiet backward bishop moves are among the strongest weapons in minor-piece endgames."
    ]
  },
  {
    "id": "good-knight-vs-locked-bishop-rooks",
    "name": "Good Knight vs. Locked Bishop (With Rooks)",
    "difficulty": "Critical",
    "summary": "Adding a pair of rooks to a Good Knight vs. Bad Bishop ending amplifies the advantage: the active rook invades open files while the knight hops across weak squares.",
    "fen": "3r2k1/5p2/2p1b1p1/1p1pN3/1P1P4/2P3P1/5PK1/3R4 w - - 0 1",
    "goal": "Use the dominant e5 knight and active rook (Ra1-a6 / Nd3-c5) to target Black’s fixed c6 and a-side holes.",
    "targetResult": "Win",
    "technique": [
      "Black’s pawns on b5, c6, d5 sit on light squares, locking Black’s e6 bishop into pure passivity.",
      "Activate the rook immediately with 1.Ra1! to seize the open a-file and threaten Ra6 against c6.",
      "Meanwhile, White’s knight can pivot via Nd3-c5 or take on c6 whenever tactics allow.",
      "Never trade rooks if doing so lets Black’s king blockade; keep both pieces coordinating against two weaknesses."
    ]
  },
  {
    "id": "double-rook-active-defense",
    "name": "Double Rook Active Defense",
    "difficulty": "Critical",
    "summary": "A pawn down in a four-rook ending, passive defense fails slowly — active counterattacking rooks on the 2nd or 7th rank save the draw effortlessly.",
    "fen": "r5k1/p4ppp/8/8/8/P6P/1Pr2PP1/2RR2K1 b - - 0 1",
    "goal": "Play 1...Rxb2! immediately to grab an active 2nd-rank pawn and keep both rooks alive.",
    "targetResult": "Draw",
    "technique": [
      "Trading down with 1...Rxc1 2.Rxc1 leaves Black passive a full pawn down on the queenside.",
      "Instead, seize counterplay at once with 1...Rxb2!, activating the rook onto the 2nd rank.",
      "If White invades the 7th/8th rank, Black counters along the a-file or attacks f2 with both rooks.",
      "In double-rook endings, active counter-threats nearly always hold a one-pawn deficit."
    ]
  },
  {
    "id": "same-wing-4-vs-3-passer",
    "name": "Creating a Passed Pawn (4 vs. 3 on Same Wing)",
    "difficulty": "Fundamental",
    "summary": "Converting a 4-vs-3 pawn majority requires bringing your king forward first, then advancing the candidate pawn that lacks an opposite defender cleanly.",
    "fen": "6k1/5ppp/8/8/8/6P1/4PPKP/8 w - - 0 1",
    "goal": "Centralize the king (Kf3-e4) and prepare e4-f4-e5 without leaving backward pawns behind.",
    "targetResult": "Win",
    "technique": [
      "White’s candidate pawn is the e2 pawn (no Black e-pawn opposes it!).",
      "First march your king into the center (1.Kf3) before pushing pawns prematurely.",
      "Advance the majority in a cohesive phalanx: e4, f4, h3/g4, preparing e5 or f5 to force a passed pawn.",
      "Never push g4 or h4 recklessly in a way that lets Black lock all pawns 3-against-4."
    ]
  },
  {
    "id": "underpromotion-stalemate-avoidance",
    "name": "Underpromotion to Avoid Stalemate (=R)",
    "difficulty": "Master",
    "summary": "Sometimes promoting to a queen delivers instant stalemate by controlling one diagonal square too many — underpromoting to a rook wins cleanly!",
    "fen": "8/6P1/8/8/8/p7/P7/k1K5 w - - 0 1",
    "goal": "Play 1.g8=R! (NOT 1.g8=Q?? stalemate!) so Black must take a2 and walk into checkmate.",
    "targetResult": "Win",
    "technique": [
      "Spot the stalemate trap: 1.g8=Q?? controls a2 along the g8-a2 diagonal while Kc1 guards b1 and b2 — instant stalemate!",
      "Underpromote with 1.g8=R!! — the rook does NOT attack a2, leaving Black the sole legal move 1...Kxa2.",
      "After 1...Kxa2, White closes the net immediately with 2.Kc2 Ka1 3.Rg1# (or Ra8# after Kc2).",
      "Always check stalemate geometry right before pushing a pawn onto the 8th rank."
    ]
  },
  {
    "id": "long-side-vs-short-side-rook",
    "name": "Long-Side vs. Short-Side Rook Checking Distance",
    "difficulty": "Critical",
    "summary": "In rook endings, the defending king belongs on the \"short side\" of the passed pawn (fewer files to the edge) so the defending rook has 3+ files of checking distance on the \"long side\".",
    "fen": "6k1/8/6K1/6P1/8/8/r7/7R b - - 0 1",
    "goal": "Keep Black’s king tucked on the short side (g8/h8) while checking from the long a-file (1...Ra7 / 1...Ra6+).",
    "targetResult": "Draw",
    "technique": [
      "White’s g5 pawn leaves only the h-file as the short side (1 file) and a–f as the long side (6 files).",
      "Black’s king correctly stays on the short side (g8/h8) while the rook operates on the a-file.",
      "Play 1...Ra7 (or 1...Ra6+ once White advances) — White’s king cannot cross toward the a-file to stop checks without dropping g5.",
      "Had Black’s rook stood on h2 (short side), it would lack checking distance and lose!"
    ]
  },
  {
    "id": "rook-knight-vs-rook-draw",
    "name": "Rook + Knight vs. Rook (Drawing Zone)",
    "difficulty": "Master",
    "summary": "Rook + Knight vs. Rook is a theoretical draw as long as the defending king stays near the center and keeps its rook active to separate the attacker’s pieces.",
    "fen": "8/8/3k4/3n4/3K4/8/1R6/4r3 b - - 0 1",
    "goal": "Keep White’s king and knight separated with 1...Rd1+! or active checks and avoid the corner edge.",
    "targetResult": "Draw",
    "technique": [
      "As long as Black’s king avoids being trapped in a corner, White cannot weave a mating net with only R+N.",
      "Use checks along open files (1...Rd1+!) to push White’s king away from the d5 knight.",
      "Maintain central king mobility (d6/c6/e6) rather than retreating passively to the 8th rank.",
      "Only when the defender gets forced to the edge with a pinned piece does R+N vs R become dangerous."
    ]
  },
  {
    "id": "queen-vs-rook-pawn-fortress",
    "name": "Queen vs. Rook + Pawn Fortress",
    "difficulty": "Master",
    "summary": "A rook and protected pawn can build an unbreakable fortress against a queen when the defender’s king hides safely behind the pawn and the rook checks or guards horizontally.",
    "fen": "6k1/5p2/5rp1/6K1/8/8/8/3Q4 b - - 0 1",
    "goal": "Use 1...Rf5+! followed by ...Kg7 to maintain the impenetrable g6/f7/g7 fortress.",
    "targetResult": "Draw",
    "technique": [
      "White’s king on g5 threatens to invade, so Black immediately pushes it back with 1...Rf5+!.",
      "Next, Black keeps the rook on the 5th rank or f6/g5 while the pawn on g6 shields the king on g7.",
      "Because White’s queen cannot sacrifice itself for the rook without reaching a drawn pawn ending, no progress is possible.",
      "Avoid advancing the f7 or g6 pawns carelessly — the fortress holds as long as the pawn chain stays intact."
    ]
  },
  {
    "id": "opposite-bishops-with-rooks",
    "name": "Opposite-Colored Bishops + Rooks (Attacking Edge)",
    "difficulty": "Critical",
    "summary": "Opposite-colored bishops often draw in pure bishop endings, yet WITH rooks on the board, the extra attacking bishop dominates one color complex without an opposite defender!",
    "fen": "2r3k1/5ppp/4b3/8/4B3/4PP2/4R1PP/6K1 w - - 0 1",
    "goal": "Use your rooks and unopposed e4 bishop to attack along the light squares and create a passed kingside pawn.",
    "targetResult": "Study",
    "technique": [
      "With rooks still on the board, opposite-colored bishops favor the side with the initiative or extra pawn.",
      "White’s light-squared bishop on e4 cannot be challenged on light squares by Black’s dark-squared bishop.",
      "Coordinate Kf2, Rd2, and kingside pawn expansion (f4, g4) while seizing the d-file or c-file.",
      "Avoid trading rooks unless the resulting pure opposite-colored bishop ending is clearly won."
    ]
  },
  {
    "id": "distant-protected-passer-decoy",
    "name": "Distant Protected Passed Pawn",
    "difficulty": "Fundamental",
    "summary": "Combining a protected passed pawn on the wing with a distant king race is lethal: the defender’s king cannot take the pawn without abandoning its own base.",
    "fen": "8/5pk1/6p1/P2p3p/1P5P/5PK1/8/8 w - - 0 1",
    "goal": "Advance 1.a6! (or b5) to force Black’s king across the board while White sweeps the kingside.",
    "targetResult": "Win",
    "technique": [
      "A protected outside passer (a5/b4) ties down Black’s king without needing White’s king to babysit it.",
      "Push 1.a6! — Black’s king must race all the way to the a-file, leaving d5 and the kingside undefended.",
      "White’s king steps straight into f4-e5-d5 or wins Black’s kingside pawns cleanly.",
      "Even if Black stops a7, the b4 pawn stays ready to march as soon as the decoy succeeds."
    ]
  },
  {
    "id": "mutual-zugzwang-knight-endgame",
    "name": "Mutual Zugzwang in Knight Endgames",
    "difficulty": "Master",
    "summary": "Though knights can lose a tempo via triangulation far more rarely than kings, knight-and-pawn endings still feature razor-sharp mutual zugzwangs around passed pawns.",
    "fen": "8/3k4/p2P4/P2K4/3N4/2n5/8/8 w - - 0 1",
    "goal": "Keep the knight coordinated with 1.Ke5! to control key outposts and avoid stepping into a tactical fork.",
    "targetResult": "Study",
    "technique": [
      "Because knights alternate square colors on every move, a knight CANNOT lose a single tempo to put the opponent in zugzwang!",
      "Therefore, the king must handle tempo battles while the knight guards critical squares (here b5/f5/e6).",
      "Play 1.Ke5! to keep Black’s c3 knight from jumping actively while maintaining support for d6.",
      "Always watch out for knight forks on empty squares in open knight endgames."
    ]
  },
  {
    "id": "triangulation-queen-endgame",
    "name": "Centralization & Triangulation in Queen Endgames",
    "difficulty": "Master",
    "summary": "In queen endings with a passed pawn on the 6th/7th rank, centralizing your queen to cut off checks while sheltering the king turns an apparent perpetual into a clean win.",
    "fen": "7k/8/4PK2/8/8/8/1q6/4Q3 w - - 0 1",
    "goal": "Play 1.Qe5! to shield against checks, threaten e7-e8=Q, and force a winning queen exchange or mate.",
    "targetResult": "Win",
    "technique": [
      "Avoid greedy king steps (1.Kf5?) that allow Black’s queen endless diagonal and rank checks.",
      "Instead, 1.Qe5! steps onto the center, blocks checks along the 5th rank, and offers a winning queen trade.",
      "If Black refuses to trade queens, 2.e7 wins effortlessly with unstoppable promotion threats.",
      "In queen endings, placing your queen on a central square between enemy checks and your king is decisive."
    ]
  },
  {
    "id": "kling-horwitz-rook-cutoff",
    "name": "Kling & Horwitz Rook Cutoff",
    "difficulty": "Critical",
    "summary": "Cutting off the enemy king by two or more files along the f- or e-file keeps it permanently separated from your passed pawn.",
    "fen": "6k1/8/8/3P4/3K4/8/2R5/4r3 w - - 0 1",
    "goal": "Play 1.Rf2! (or Kc5 after cutting off) to lock Black’s king out on the g/h files and march d5 home.",
    "targetResult": "Win",
    "technique": [
      "Black’s rook on e1 threatens to check laterally or bring Black’s king back toward d6.",
      "With 1.Rf2!, White seizes the f-file cutoff — Black’s king on g8 is now walled off two full files from the d-pawn!",
      "Once the enemy king is cut off by 2+ files, your king escorts the d-pawn calmly up the board.",
      "Keep your rook between the enemy king and your passed pawn until you reach the Lucena position."
    ]
  },
  {
    "id": "vancura-knight-pawn-contrast",
    "name": "Lateral Cutoff vs. Advanced Knight Pawn",
    "difficulty": "Critical",
    "summary": "Even when an advanced b-pawn reaches the 7th rank with the attacker’s king on c6, cutting off the king or pinning the pawn from the 2nd rank secures the draw.",
    "fen": "8/1P6/2K5/8/8/8/5r2/1k6 b - - 0 1",
    "goal": "Play 1...Rb2! immediately to attack b7 from behind while Black’s king shelters safely on b1/a2.",
    "targetResult": "Draw",
    "technique": [
      "Black’s rook attacks the b7 pawn immediately from behind with 1...Rb2!, tying White’s king down.",
      "White cannot step to Kb6 and push b8=Q without losing b7 or letting Black’s rook stay active.",
      "If White tries 2.Kc7, Black replies 2...Rc2+ 3.Kb6 Rb2+ repeating checks or winning b7.",
      "Always put the defending rook behind a 7th-rank pawn when the enemy king stands awkwardly in front."
    ]
  },
  {
    "id": "fox-in-the-henhouse",
    "name": "Fox in the Henhouse (King Infiltration)",
    "difficulty": "Fundamental",
    "summary": "When an opponent’s king gets stranded guarding a distant flank pawn, march your king straight into the heart of their undefended pawn chain.",
    "fen": "8/5ppp/k7/p7/P3K3/6PP/5P2/8 w - - 0 1",
    "goal": "Ignore the queenside and raid Black’s kingside with 1.Kd5! -> Kc6 or 1.g4 -> Kf5-e6.",
    "targetResult": "Win",
    "technique": [
      "Black’s king on a6 is tied down to defending a5 against White’s a4 pawn.",
      "With Black’s king stranded far on the edge, White’s centralized king (e4) dominates the board.",
      "Advance actively into Black’s camp via Kd5-c6 or push g4 and march toward e5-f6.",
      "Once your king enters the opponent’s pawn base like a fox in a henhouse, material collapses rapidly."
    ]
  },
  {
    "id": "knight-vs-rook-pawn-draw",
    "name": "Knight vs. Rook Pawn (Drawing Technique)",
    "difficulty": "Fundamental",
    "summary": "A lone knight cannot win by itself, and against a rook pawn a knight easily stops the pawn in front — or sacrifices itself for a theoretical draw.",
    "fen": "8/7p/5k2/8/8/5N2/8/5K2 w - - 0 1",
    "goal": "Bring White’s king and knight toward h1/g2 to blockade Black’s h-pawn cleanly for a draw.",
    "targetResult": "Draw",
    "technique": [
      "Knight + King vs. King is an automatic draw (insufficient mating material).",
      "As the defending side with a knight against a pawn, either blockade the pawn with your king or sacrifice the knight for the pawn at the right moment.",
      "Watch out for rook pawns on the 7th/6th rank: knights struggle on the edge because they have fewer squares, so bring your king toward the corner early.",
      "Here 1.Kf2 keeps White’s king inside the pawn’s square and secures an effortless draw."
    ]
  },
  {
    "id": "same-colored-bishops-zugzwang",
    "name": "Same-Colored Bishops (Zugzwang Outflanking)",
    "difficulty": "Critical",
    "summary": "With same-colored bishops and an extra pawn, win by placing your bishop on a diagonal that controls both the pawn break and the defender’s bishop.",
    "fen": "8/5k2/4b1p1/4P3/3K1P2/3B4/8/8 w - - 0 1",
    "goal": "Play 1.Bc4! to challenge Black’s e6 bishop, seize the light squares, and enter a won pawn or bishop ending.",
    "targetResult": "Win",
    "technique": [
      "White has an extra pawn (e5+f4 vs g6), and Black’s bishop on e6 is currently blockading White’s king.",
      "Strike at once with 1.Bc4! — exchanging bishops enters an easily winning king-and-pawn ending.",
      "If Black retreats 1...Bf5 (or 1...Ke7), White’s king invades via d5-c6 or c5 while pushing f4-f5.",
      "Always look for bishop-exchange tactics in same-colored bishop endings when up a healthy pawn."
    ]
  },
  {
    "id": "queen-vs-two-connected-pawns",
    "name": "Queen vs. Two Connected Passed Pawns",
    "difficulty": "Master",
    "summary": "Two connected passed pawns on the 6th/7th rank can sometimes fight a lone queen — unless the queen’s king stands close enough to blockade and capture them.",
    "fen": "8/8/8/8/8/1K3Q2/2pp4/1k6 w - - 0 1",
    "goal": "Play 1.Qc3! (and Kc2/Qd2) to blockade both c2 and d2 simultaneously and prevent promotion.",
    "targetResult": "Win",
    "technique": [
      "Careless checks like 1.Qf6? or 1.Qd3+? let Black push ...c1=Q or scramble the king onto c1.",
      "Play 1.Qc3! — pinning the c2 pawn against b1? Even better, 1.Qc3 stops ...c1=Q and watches d2 at once!",
      "Next White’s king steps to Kb2/Kc3 or captures the pawns cleanly.",
      "Against connected pawns on the 7th, combine your queen blockade with your nearby king immediately."
    ]
  },
  {
    "id": "pawn-race-promotion-check",
    "name": "Pawn Race With Promotion Tempo & Check",
    "difficulty": "Fundamental",
    "summary": "In double pawn races, counting moves isn’t enough — check whether one side promotes WITH check, skewers the new queen, or defends the queening square.",
    "fen": "8/p7/8/8/8/8/6PP/k4K2 w - - 0 1",
    "goal": "Calculate the g2/h2 vs a7 race cleanly: push 1.g4! (threatening g8=Q/h8=Q) while Black’s king sits on a1.",
    "targetResult": "Win",
    "technique": [
      "Both sides look ready to race, yet Black’s king on a1 stands directly in front of its own a-pawn and must step aside first (losing a crucial tempo)!",
      "White pushes 1.g4! (or 1.h4) with two connected passed pawns against one.",
      "With two connected passed pawns vs. one, White promotes faster or forces Black’s queen to sacrifice against the second pawn.",
      "Always count tempo losses like a king standing in front of its own pawn in pawn races!"
    ]
  }
];
