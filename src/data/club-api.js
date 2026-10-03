import { getSupabaseClient } from './supabase.js';

async function requireClient() {
  const client = getSupabaseClient();
  if (!client) {
    throw new Error('The shared club service has not been configured yet.');
  }
  return client;
}

async function unwrap(request) {
  const { data, error } = await request;
  if (error) throw error;
  return data;
}

export async function currentUser() {
  const { data, error } = await (await requireClient()).auth.getUser();
  if (error) throw error;
  return data.user;
}

export async function sendMagicLink(email) {
  const client = await requireClient();
  const redirectTo = `${window.location.origin}${window.location.pathname}`;
  const { error } = await client.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectTo } });
  if (error) throw error;
}

export async function signOut() {
  const { error } = await (await requireClient()).auth.signOut();
  if (error) throw error;
}

export async function upsertMyProfile(displayName) {
  const user = await currentUser();
  if (!user) throw new Error('Sign in before creating a profile.');

  return unwrap(
    (await requireClient())
      .from('profiles')
      .upsert({ id: user.id, display_name: displayName.trim(), updated_at: new Date().toISOString() })
      .select()
      .single(),
  );
}

export async function listMyClubs() {
  return unwrap((await requireClient()).from('clubs').select('id, slug, name').order('name'));
}

export async function listClubMembers(clubId) {
  return unwrap(
    (await requireClient())
      .from('club_memberships')
      .select('user_id, role, rating, wins, losses, draws, joined_at, profiles(display_name)')
      .eq('club_id', clubId)
      .order('rating', { ascending: false }),
  );
}

export async function listClubGames(clubId) {
  return unwrap(
    (await requireClient())
      .from('games')
      .select('id, white_user_id, black_user_id, status, result, termination, pgn, started_at, completed_at')
      .eq('club_id', clubId)
      .order('started_at', { ascending: false }),
  );
}

export async function saveLessonProgress({ clubId, lessonId, completedSteps, completedAt = null }) {
  const user = await currentUser();
  if (!user) throw new Error('Sign in before saving progress.');

  return unwrap(
    (await requireClient())
      .from('lesson_progress')
      .upsert(
        {
          club_id: clubId,
          user_id: user.id,
          lesson_id: lessonId,
          completed_steps: completedSteps,
          completed_at: completedAt,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'club_id,user_id,lesson_id' },
      )
      .select()
      .single(),
  );
}

export async function recordPuzzleAttempt({ clubId, puzzleId, correct, usedHint, elapsedSeconds }) {
  const user = await currentUser();
  if (!user) throw new Error('Sign in before recording an attempt.');

  return unwrap(
    (await requireClient())
      .from('puzzle_attempts')
      .insert({
        club_id: clubId,
        user_id: user.id,
        puzzle_id: puzzleId,
        correct,
        used_hint: usedHint,
        elapsed_seconds: elapsedSeconds,
      })
      .select()
      .single(),
  );
}
