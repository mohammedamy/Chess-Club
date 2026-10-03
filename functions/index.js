import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import { Chess } from 'chess.js';

initializeApp();

const db = getFirestore();

function requireSignedIn(request) {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Sign in before using the chess club.');
  return request.auth.uid;
}

function validSlug(value) {
  return typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function nextRating(rating, opponentRating, score) {
  const expected = 1 / (1 + 10 ** ((opponentRating - rating) / 400));
  return Math.round(rating + 24 * (score - expected));
}

function validateCompletedPgn(pgn, result, termination) {
  if (typeof pgn !== 'string' || pgn.trim() === '') {
    throw new HttpsError('invalid-argument', 'A completed game must include PGN.');
  }
  const game = new Chess();
  try {
    if (!game.load_pgn(pgn)) {
      throw new Error('Invalid PGN');
    }
  } catch {
    throw new HttpsError('invalid-argument', 'The PGN is invalid.');
  }

  if (termination === 'checkmate') {
    const winner = game.turn() === 'w' ? '0-1' : '1-0';
    if (!game.in_checkmate() || result !== winner) {
      throw new HttpsError('invalid-argument', 'The checkmate result does not match the PGN.');
    }
  }
  if (termination === 'stalemate' && (!game.in_stalemate() || result !== '1/2-1/2')) {
    throw new HttpsError('invalid-argument', 'The stalemate result does not match the PGN.');
  }
  if (termination === 'threefold' && (!game.in_threefold_repetition() || result !== '1/2-1/2')) {
    throw new HttpsError('invalid-argument', 'The threefold result does not match the PGN.');
  }
  if (termination === 'insufficient_material' && (!game.insufficient_material() || result !== '1/2-1/2')) {
    throw new HttpsError('invalid-argument', 'The insufficient-material result does not match the PGN.');
  }
}

export const createClub = onCall(async (request) => {
  const userId = requireSignedIn(request);
  const { name, slug } = request.data ?? {};
  if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 120 || !validSlug(slug)) {
    throw new HttpsError('invalid-argument', 'Provide a 2–120 character club name and a lowercase URL slug.');
  }

  const clubId = slug;
  const clubRef = db.collection('clubs').doc(clubId);
  const membershipRef = clubRef.collection('members').doc(userId);

  await db.runTransaction(async (transaction) => {
    if ((await transaction.get(clubRef)).exists) {
      throw new HttpsError('already-exists', 'That club slug is already in use.');
    }
    transaction.set(clubRef, {
      name: name.trim(),
      slug,
      createdBy: userId,
      createdAt: FieldValue.serverTimestamp(),
    });
    transaction.set(membershipRef, {
      userId,
      role: 'admin',
      rating: 1200,
      wins: 0,
      losses: 0,
      draws: 0,
      joinedAt: FieldValue.serverTimestamp(),
    });
  });

  return { clubId };
});

export const addClubMember = onCall(async (request) => {
  const callerId = requireSignedIn(request);
  const { clubId, userId, role = 'student' } = request.data ?? {};
  if (typeof clubId !== 'string' || typeof userId !== 'string' || !['student', 'coach', 'admin'].includes(role)) {
    throw new HttpsError('invalid-argument', 'Provide a club, user, and valid role.');
  }

  const caller = await db.doc(`clubs/${clubId}/members/${callerId}`).get();
  if (!caller.exists || !['coach', 'admin'].includes(caller.data().role)) {
    throw new HttpsError('permission-denied', 'Only club coaches and administrators can add members.');
  }

  await db.doc(`clubs/${clubId}/members/${userId}`).set({
    userId,
    role,
    rating: 1200,
    wins: 0,
    losses: 0,
    draws: 0,
    joinedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
});

export const recordCoachGameResult = onCall(async (request) => {
  const callerId = requireSignedIn(request);
  const { clubId, whiteUserId, blackUserId, pgn, result, termination } = request.data ?? {};
  const validResults = ['1-0', '0-1', '1/2-1/2'];
  const validTerminations = ['checkmate', 'stalemate', 'threefold', 'fifty_move', 'insufficient_material', 'agreement', 'resign', 'timeout'];
  if (
    typeof clubId !== 'string' || typeof whiteUserId !== 'string' || typeof blackUserId !== 'string'
    || whiteUserId === blackUserId || !validResults.includes(result) || !validTerminations.includes(termination)
  ) {
    throw new HttpsError('invalid-argument', 'Provide a valid completed game result.');
  }
  validateCompletedPgn(pgn, result, termination);

  const clubRef = db.collection('clubs').doc(clubId);
  const callerRef = clubRef.collection('members').doc(callerId);
  const whiteRef = clubRef.collection('members').doc(whiteUserId);
  const blackRef = clubRef.collection('members').doc(blackUserId);
  const gameRef = clubRef.collection('games').doc();

  await db.runTransaction(async (transaction) => {
    const [caller, white, black] = await Promise.all([
      transaction.get(callerRef),
      transaction.get(whiteRef),
      transaction.get(blackRef),
    ]);
    if (!caller.exists || !['coach', 'admin'].includes(caller.data().role)) {
      throw new HttpsError('permission-denied', 'Only club coaches and administrators can record rated results.');
    }
    if (!white.exists || !black.exists) {
      throw new HttpsError('not-found', 'Both players must be club members.');
    }

    const whiteRating = white.data().rating;
    const blackRating = black.data().rating;
    const whiteScore = result === '1-0' ? 1 : result === '0-1' ? 0 : 0.5;
    const blackScore = 1 - whiteScore;
    const nextWhiteRating = nextRating(whiteRating, blackRating, whiteScore);
    const nextBlackRating = nextRating(blackRating, whiteRating, blackScore);

    transaction.set(gameRef, {
      whiteUserId,
      blackUserId,
      result,
      termination,
      pgn,
      recordedBy: callerId,
      startedAt: FieldValue.serverTimestamp(),
      completedAt: FieldValue.serverTimestamp(),
    });
    transaction.update(whiteRef, {
      rating: nextWhiteRating,
      wins: FieldValue.increment(whiteScore === 1 ? 1 : 0),
      losses: FieldValue.increment(whiteScore === 0 ? 1 : 0),
      draws: FieldValue.increment(whiteScore === 0.5 ? 1 : 0),
    });
    transaction.update(blackRef, {
      rating: nextBlackRating,
      wins: FieldValue.increment(blackScore === 1 ? 1 : 0),
      losses: FieldValue.increment(blackScore === 0 ? 1 : 0),
      draws: FieldValue.increment(blackScore === 0.5 ? 1 : 0),
    });
  });

  return { gameId: gameRef.id };
});
