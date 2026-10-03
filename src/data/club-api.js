import { getFirebaseServices } from './firebase.js';

async function requireServices() {
  const services = getFirebaseServices();
  if (!services) throw new Error('The shared club service has not been configured yet.');
  return services;
}

export async function currentUser() {
  return (await requireServices()).auth.currentUser;
}

export async function sendEmailSignInLink(email) {
  const { auth, authModule } = await requireServices();
  const actionCodeSettings = {
    url: `${window.location.origin}${window.location.pathname}`,
    handleCodeInApp: true,
  };
  await authModule.sendSignInLinkToEmail(auth, email, actionCodeSettings);
  window.localStorage.setItem('chess-club:email-for-sign-in', email);
}

export async function completeEmailSignInLink(email = window.localStorage.getItem('chess-club:email-for-sign-in')) {
  const { auth, authModule } = await requireServices();
  if (!authModule.isSignInWithEmailLink(auth, window.location.href)) return null;
  if (!email) throw new Error('Enter the email address used to request this sign-in link.');

  const credential = await authModule.signInWithEmailLink(auth, email, window.location.href);
  window.localStorage.removeItem('chess-club:email-for-sign-in');
  return credential.user;
}

export async function isEmailSignInLink() {
  const { auth, authModule } = await requireServices();
  return authModule.isSignInWithEmailLink(auth, window.location.href);
}

export async function signOut() {
  const { auth, authModule } = await requireServices();
  await authModule.signOut(auth);
}

export async function upsertMyProfile(displayName) {
  const user = await currentUser();
  if (!user) throw new Error('Sign in before creating a profile.');

  const { db, firestoreModule } = await requireServices();
  const name = displayName.trim();
  await firestoreModule.setDoc(
    firestoreModule.doc(db, 'users', user.uid),
    { displayName: name, updatedAt: firestoreModule.serverTimestamp() },
    { merge: true },
  );
}

export async function listMyClubs() {
  const user = await currentUser();
  if (!user) return [];

  const { db, firestoreModule } = await requireServices();
  const memberships = await firestoreModule.getDocs(
    firestoreModule.query(
      firestoreModule.collectionGroup(db, 'members'),
      firestoreModule.where('userId', '==', user.uid),
    ),
  );
  const clubs = await Promise.all(memberships.docs.map(async (membership) => {
    const club = await firestoreModule.getDoc(membership.ref.parent.parent);
    return club.exists() ? { id: club.id, ...club.data(), membership: membership.data() } : null;
  }));
  return clubs.filter(Boolean).sort((a, b) => a.name.localeCompare(b.name));
}

export async function createClub({ name, slug }) {
  const { functions, functionsModule } = await requireServices();
  const create = functionsModule.httpsCallable(functions, 'createClub');
  const { data } = await create({ name, slug });
  return data;
}

export async function listClubMembers(clubId) {
  const { db, firestoreModule } = await requireServices();
  const snapshot = await firestoreModule.getDocs(firestoreModule.collection(db, 'clubs', clubId, 'members'));
  return snapshot.docs.map((member) => ({ id: member.id, ...member.data() }));
}

export async function listClubGames(clubId) {
  const { db, firestoreModule } = await requireServices();
  const snapshot = await firestoreModule.getDocs(
    firestoreModule.query(firestoreModule.collection(db, 'clubs', clubId, 'games'), firestoreModule.orderBy('startedAt', 'desc')),
  );
  return snapshot.docs.map((game) => ({ id: game.id, ...game.data() }));
}

export async function saveLessonProgress({ clubId, lessonId, completedSteps, completedAt = null }) {
  const user = await currentUser();
  if (!user) throw new Error('Sign in before saving progress.');

  const { db, firestoreModule } = await requireServices();
  const progressId = `${user.uid}_${lessonId}`;
  await firestoreModule.setDoc(firestoreModule.doc(db, 'clubs', clubId, 'progress', progressId), {
    userId: user.uid,
    lessonId,
    completedSteps,
    completedAt,
    updatedAt: firestoreModule.serverTimestamp(),
  }, { merge: true });
}

export async function recordPuzzleAttempt({ clubId, puzzleId, correct, usedHint, elapsedSeconds }) {
  const user = await currentUser();
  if (!user) throw new Error('Sign in before recording an attempt.');

  const { db, firestoreModule } = await requireServices();
  await firestoreModule.addDoc(firestoreModule.collection(db, 'clubs', clubId, 'puzzleAttempts'), {
    userId: user.uid,
    puzzleId,
    correct,
    usedHint,
    elapsedSeconds,
    attemptedAt: firestoreModule.serverTimestamp(),
  });
}
