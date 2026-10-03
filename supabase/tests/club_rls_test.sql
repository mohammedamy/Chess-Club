begin;
select plan(14);

select has_table('public', 'clubs', 'clubs table exists');
select has_table('public', 'profiles', 'profiles table exists');
select has_table('public', 'club_memberships', 'membership table exists');
select has_table('public', 'games', 'games table exists');
select has_table('public', 'rating_events', 'rating ledger exists');
select has_table('public', 'lesson_progress', 'lesson progress table exists');
select has_table('public', 'puzzle_attempts', 'puzzle attempts table exists');

select row_security('public.clubs', 'clubs has RLS enabled');
select row_security('public.profiles', 'profiles has RLS enabled');
select row_security('public.club_memberships', 'memberships has RLS enabled');
select row_security('public.games', 'games has RLS enabled');
select row_security('public.rating_events', 'rating ledger has RLS enabled');
select row_security('public.lesson_progress', 'lesson progress has RLS enabled');
select row_security('public.puzzle_attempts', 'puzzle attempts has RLS enabled');

select * from finish();
rollback;
