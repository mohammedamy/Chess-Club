/**
 * Returns the new Elo rating for one player after a game.
 * score must be 1 (win), 0.5 (draw), or 0 (loss).
 */
export function computeElo(rating, opponentRating, score, kFactor = 24) {
  if (![0, 0.5, 1].includes(score)) {
    throw new RangeError('Elo score must be 0, 0.5, or 1.');
  }

  const expected = 1 / (1 + 10 ** ((opponentRating - rating) / 400));
  return Math.round(rating + kFactor * (score - expected));
}
