export const ENDGAMES = [
  { id:'kp-vs-k', name:'King and Pawn vs King', difficulty:'Fundamental',
    summary:'The most basic winning endgame — yet rich with the principle of opposition. The defender draws if the attacker cannot take the opposition.',
    fen:'4k3/8/4K3/4P3/8/8/8/8 w - - 0 1',
    goal:'Promote the e5 pawn with proper king escort.',
    targetResult:'Win',
    technique:[
      'The attacker (White) must use the king to escort the pawn forward.',
      'The key concept is OPPOSITION: when the kings face each other on the same file/rank with one square between, whoever does NOT have to move has the opposition.',
      'Generally, the king should be in front of its pawn — never let your own pawn block your king.',
      'If the defending king reaches the queening square first, with proper play, the position is drawn.',
      'Practical test: from this position, can White force the pawn to e8=Q?'
    ]},
  { id:'kqk', name:'King + Queen vs King mate', difficulty:'Fundamental',
    summary:'The most common mate to know. The queen drives the king to the edge, then the friendly king gives the final shoulder.',
    fen:'8/8/8/3k4/8/8/3K4/3Q4 w - - 0 1',
    goal:'Drive the Black king to the board edge and checkmate without stalemate.',
    targetResult:'Win',
    technique:[
      'The queen drives the enemy king toward an edge — but be careful of stalemate!',
      'Place the queen a knight\'s move from the enemy king to herd it without ever letting it escape.',
      'Once the king is on the edge, bring your own king close to support.',
      'Deliver mate by walking the queen to a square adjacent to the cornered king with your own king controlling escape squares.',
      'Practice this until you can mate in fewer than 10 moves from any position.'
    ]},
  { id:'krk', name:'King + Rook vs King mate', difficulty:'Fundamental',
    summary:'Trickier than the queen mate — the rook lacks the queen\'s diagonal power, so the kings must coordinate carefully. Use the "ladder" or "staircase" technique.',
    fen:'8/8/8/3k4/8/8/3K4/3R4 w - - 0 1',
    goal:'Shrink the Black king\'s box with the rook and deliver edge checkmate.',
    targetResult:'Win',
    technique:[
      'The rook controls a rank or file; the king must drive the enemy king toward it.',
      'The KEY method is the "ladder": cut off the enemy king with the rook, then walk your king toward it, then cut off again on the next rank.',
      'Avoid stalemate — never let the enemy king have no legal moves while not in check.',
      'Final mate: enemy king on the edge, your king two squares away in opposition, rook delivers the killing blow on the edge.'
    ]},
  { id:'lucena', name:'The Lucena Position', difficulty:'Critical',
    summary:'Named after Luis Ramírez de Lucena (1497) — though he didn\'t actually publish it! This is THE winning rook endgame technique. Memorize the "bridge" idea.',
    fen:'1K1k4/1P6/8/8/8/8/8/2R3r1 w - - 1 1',
    goal:'Build the 4th-rank rook bridge with Rc4! to shelter the king and promote b7.',
    targetResult:'Win',
    technique:[
      'White has a passed pawn one move from queening, but the king is in the way.',
      'The "bridge" technique: Rc1-c4! Then Kb8-c8 (waiting). When the rook checks come, the rook on c4 forms a SHIELD on the fourth rank.',
      'After the king walks down, the rook will block any check by moving to the fourth rank.',
      'Always set the rook on the rank where it will block checks — this is the bridge.',
      'This is the most important endgame to master in rook-and-pawn-up territory.'
    ]},
  { id:'philidor', name:'The Philidor Position (defending)', difficulty:'Critical',
    summary:'François-André Philidor (1749) showed how a SIDE down a rook+pawn can DRAW with correct technique — provided the defender has correct rook activity.',
    fen:'5k2/8/4K3/4P3/8/r7/8/4R3 b - - 0 1',
    goal:'Hold the 3rd/6th rank cutoff until ...e6 is played, then switch to back-rank checks.',
    targetResult:'Draw',
    technique:[
      'The defending side keeps their rook on the third (or sixth) rank — preventing the enemy king from advancing to support its pawn.',
      'When the pawn is finally pushed, the defending rook drops to the back rank and gives endless side-checks.',
      'Without anywhere to hide from the checks (no shield/bridge), the attacker cannot make progress.',
      'This is the defender\'s roadmap in any pawn-down rook ending.'
    ]},
  { id:'opposition', name:'The Opposition', difficulty:'Fundamental',
    summary:'One of the most subtle yet powerful endgame ideas. Whoever has the opposition controls the game — especially in king-and-pawn endings.',
    fen:'4k3/8/4K3/8/8/8/8/8 b - - 0 1',
    goal:'Understand direct, diagonal, and distant king opposition.',
    targetResult:'Study',
    technique:[
      'DIRECT opposition: kings on the same file with one square between, the side NOT to move has it.',
      'DIAGONAL opposition: same diagonal, one square between.',
      'DISTANT opposition: kings on the same line with 3 or 5 squares between.',
      'In K+P vs K, the attacker needs the opposition to make progress; the defender needs it to hold.',
      'A simple test: reach a position where your opponent must move first. That\'s opposition.'
    ]},
  { id:'rule-of-square', name:'Rule of the Square', difficulty:'Fundamental',
    summary:'Count instantly without calculating every move: draw a diagonal from the passed pawn to its queening rank to see if the defending king can catch it.',
    fen:'6k1/8/8/8/1p6/8/8/6K1 w - - 0 1',
    goal:'Determine whether the White king can enter the b4-b1-e1-e4 square on move 1.',
    targetResult:'Draw',
    technique:[
      'Trace a square from the passed pawn (b4) to its promotion square (b1), forming b4-b1-e1-e4.',
      'Because White is to move, Kf1 steps right onto the edge of the square and catches the pawn before it queens.',
      'If the pawn has not moved off its starting rank (b7/b2), remember its double-push option shrinks the square by one rank.',
      'Mastering this rule saves minutes of calculation in practical endgames.'
    ]},
  { id:'sixth-rank-key-squares', name:'Key Squares on the 6th Rank', difficulty:'Fundamental',
    summary:'Once the attacker\'s king reaches the 6th rank in front of its pawn, the game is won regardless of who holds the opposition.',
    fen:'4k3/8/3K4/4P3/8/8/8/8 w - - 0 1',
    goal:'Use the 6th-rank key square d6/e6/f6 to force promotion even when Black tries to defend.',
    targetResult:'Win',
    technique:[
      'For any non-rook pawn on the 5th rank, its three key squares sit two ranks ahead (d7, e7, f7 — or the 6th rank d6, e6, f6 once reached).',
      'From d6, White simply advances e6+ or plays Kd7/Ke6 depending on Black\'s reply, guaranteeing control of e8.',
      'Never push the pawn onto the 6th rank before your king is ready to step beside it.'
    ]},
  { id:'pawn-breakthrough', name:'The 3 vs 3 Pawn Breakthrough', difficulty:'Critical',
    summary:'In blocked symmetrical pawn endings, a temporary double sacrifice can create an unstoppable passed pawn.',
    fen:'6k1/ppp5/8/PPP5/8/8/8/6K1 w - - 0 1',
    goal:'Sacrifice two pawns on b6 and a6/c6 so the third races to promotion.',
    targetResult:'Win',
    technique:[
      'Start with b5-b6! threatening bxa7 and bxc7 simultaneously.',
      'After ...axb6 (or ...cxb6), White immediately sacrifices the other wing pawn with c6! (or a6!).',
      'One white pawn slips past all defenders and queens before the distant Black king can enter the square.',
      'Always check breakthrough sacrifices before conceding a drawn king-and-pawn ending.'
    ]},
  { id:'distant-opposition', name:'Distant Opposition & Flanking', difficulty:'Critical',
    summary:'When kings are separated by 3 or 5 squares, the player who steps onto an odd-number distance with the enemy to move wins the direct opposition later.',
    fen:'8/8/8/8/4k3/8/4P3/4K3 w - - 0 1',
    goal:'Seize distant opposition or outflank Black\'s king to escort the e2 pawn.',
    targetResult:'Win',
    technique:[
      'With an odd number of squares between the kings (1, 3, or 5), the side NOT to move holds the opposition.',
      'When the defending king blocks vertically, step sideways (flanking) to maintain alignment and walk forward.',
      'Keep your king ahead of your pawn rather than pushing e2-e4 prematurely.'
    ]},
  { id:'triangulation', name:'King Triangulation', difficulty:'Master',
    summary:'When you want the exact same position with your opponent to move (zugzwang), take a three-square triangle with your king while the opponent lacks one.',
    fen:'8/2k5/8/2K1P3/8/8/8/8 w - - 0 1',
    goal:'Lose a tempo via a king triangle (Kb4-Kc4 or Kd4-Kc4) to force Black out of the key square.',
    targetResult:'Win',
    technique:[
      'If White simply moves back and forth linearly, Black mirrors and holds the draw.',
      'Check which king has more maneuvering squares nearby — the side with three free squares forms a triangle while the defender has only two.',
      'Returning to the starting square in three moves instead of two hands the move to Black in zugzwang.'
    ]},
  { id:'vancura-defense', name:'The Vancura Rook Defense', difficulty:'Master',
    summary:'When a defender\'s rook cannot get behind a rook pawn or knight pawn, attacking the pawn sideways from the wing holds the draw.',
    fen:'R7/8/1K6/P7/8/8/5r2/6k1 b - - 0 1',
    goal:'Place the defending rook on the f-file/6th rank to attack a5 horizontally while keeping the king tucked safely.',
    targetResult:'Draw',
    technique:[
      'In rook-pawn endings (a- or h-pawn), checking from the front fails if the attacker hides behind the pawn.',
      'Instead, swing the rook sideways to ...Rf6! (or the 6th rank) pinning the White king to defense of a5.',
      'Whenever White\'s king abandons the pawn to chase checks, take the pawn or return to endless side checks.'
    ]},
  { id:'tarrasch-rule', name:'Tarrasch Rule: Rook Behind the Pawn', difficulty:'Critical',
    summary:'Siegbert Tarrasch famously taught: rooks belong behind passed pawns — both your own and your opponent\'s.',
    fen:'8/P7/8/8/8/1k6/6K1/R6r w - - 0 1',
    goal:'See why an active rook behind the passed pawn outperforms a passive rook blocking from the front.',
    targetResult:'Win',
    technique:[
      'A rook behind your own passed pawn gains range with every step the pawn takes forward.',
      'A rook in front of a passed pawn loses squares and gets cramped on the promotion rank.',
      'Use your active king to drive away the checking rook once the pawn reaches the 7th rank.'
    ]},
  { id:'opposite-bishops-fortress', name:'Opposite-Colored Bishops Fortress', difficulty:'Fundamental',
    summary:'Even two pawns down, a defender can construct an impenetrable light- or dark-square blockade in opposite-colored bishop endings.',
    fen:'8/8/4k3/3bP3/3P4/3K4/5B2/8 b - - 0 1',
    goal:'Hold the blockading square complex (d5/f5) so White\'s pawns can never cross safely.',
    targetResult:'Draw',
    technique:[
      'Place pawns on the color opposite your bishop so the bishop can defend them while contesting the other color complex.',
      'The defending king and bishop share the blockade of the two light or dark squares in front of the pawns.',
      'Never trade the blockading bishop or give up control of the key color complex.'
    ]},
  { id:'wrong-corner-bishop', name:'Wrong-Corner Bishop + Rook Pawn', difficulty:'Critical',
    summary:'A bishop plus an a- or h-pawn cannot force a win if the promotion square is the opposite color of the bishop.',
    fen:'k7/8/1K6/P7/3B4/8/8/8 w - - 0 1',
    goal:'Recognize why White cannot expel Black\'s king from a8 when holding a dark-squared bishop.',
    targetResult:'Draw',
    technique:[
      'White has a dark-squared bishop (d4) and an a-pawn whose promotion square a8 is LIGHT.',
      'Because the bishop can never control a8, Black simply shuttles between a8 and b8 (or stays cornered for stalemate).',
      'As the defender, race straight to the wrong-color corner!'
    ]},
  { id:'queen-vs-7th-pawn', name:'Queen vs 7th-Rank Pawn', difficulty:'Master',
    summary:'A lone queen wins against a knight or center pawn on the 7th rank by repeatedly forcing the enemy king in front of its own pawn.',
    fen:'4Q3/8/8/8/8/3k4/4p3/1K6 w - - 0 1',
    goal:'Check repeatedly until Black\'s king steps onto e1, freeing one tempo to walk White\'s king closer.',
    targetResult:'Win',
    technique:[
      'Against center (c/d/e/f) or knight (b/g) pawns, the queen uses checks and pins to force the defending king in front of the pawn (onto e1).',
      'Whenever the king blocks its own pawn on the queening square, White steals one move to advance the White king!',
      'Exception: bishop pawns (c/f) and rook pawns (a/h) allow sneaky stalemate tricks unless White\'s king is close enough.'
    ]},
];
