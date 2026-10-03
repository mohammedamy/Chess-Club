create schema if not exists private;

create table public.clubs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  name text not null check (char_length(name) between 2 and 120),
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now()
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (char_length(trim(display_name)) between 2 and 30),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.club_memberships (
  club_id uuid not null references public.clubs(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null default 'student' check (role in ('student', 'coach', 'admin')),
  rating integer not null default 1200 check (rating between 100 and 4000),
  wins integer not null default 0 check (wins >= 0),
  losses integer not null default 0 check (losses >= 0),
  draws integer not null default 0 check (draws >= 0),
  joined_at timestamptz not null default now(),
  primary key (club_id, user_id)
);

create table public.games (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete restrict,
  white_user_id uuid not null references public.profiles(id) on delete restrict,
  black_user_id uuid not null references public.profiles(id) on delete restrict,
  status text not null default 'active' check (status in ('active', 'completed', 'abandoned')),
  result text check (result in ('1-0', '0-1', '1/2-1/2')),
  termination text check (termination in ('checkmate', 'stalemate', 'threefold', 'fifty_move', 'insufficient_material', 'agreement', 'resign', 'timeout', 'abandoned')),
  pgn text,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  check (white_user_id <> black_user_id),
  check (
    (status = 'active' and result is null and termination is null and completed_at is null)
    or (status = 'completed' and result is not null and termination is not null and completed_at is not null)
    or status = 'abandoned'
  )
);

create table public.rating_events (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete restrict,
  game_id uuid not null references public.games(id) on delete restrict,
  user_id uuid not null references public.profiles(id) on delete restrict,
  rating_before integer not null check (rating_before between 100 and 4000),
  rating_after integer not null check (rating_after between 100 and 4000),
  created_at timestamptz not null default now(),
  unique (game_id, user_id)
);

create table public.lesson_progress (
  club_id uuid not null references public.clubs(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id text not null check (char_length(lesson_id) between 1 and 100),
  completed_steps integer not null default 0 check (completed_steps >= 0),
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (club_id, user_id, lesson_id)
);

create table public.puzzle_attempts (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  puzzle_id text not null check (char_length(puzzle_id) between 1 and 100),
  correct boolean not null,
  used_hint boolean not null default false,
  elapsed_seconds integer check (elapsed_seconds is null or elapsed_seconds between 0 and 14400),
  attempted_at timestamptz not null default now()
);

create index games_club_completed_at_idx on public.games (club_id, completed_at desc);
create index rating_events_club_user_idx on public.rating_events (club_id, user_id, created_at desc);
create index lesson_progress_club_user_idx on public.lesson_progress (club_id, user_id);
create index puzzle_attempts_club_user_idx on public.puzzle_attempts (club_id, user_id, attempted_at desc);

-- Private policy helpers avoid recursive RLS checks on club_memberships.
create function private.is_club_member(target_club_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.club_memberships membership
    where membership.club_id = target_club_id
      and membership.user_id = (select auth.uid())
  );
$$;

create function private.can_manage_club(target_club_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.club_memberships membership
    where membership.club_id = target_club_id
      and membership.user_id = (select auth.uid())
      and membership.role in ('coach', 'admin')
  );
$$;

create function private.shares_club(target_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.club_memberships mine
    join public.club_memberships theirs on theirs.club_id = mine.club_id
    where mine.user_id = (select auth.uid())
      and theirs.user_id = target_user_id
  );
$$;

revoke all on function private.is_club_member(uuid) from public, anon, authenticated;
revoke all on function private.can_manage_club(uuid) from public, anon, authenticated;
revoke all on function private.shares_club(uuid) from public, anon, authenticated;
grant execute on function private.is_club_member(uuid) to authenticated;
grant execute on function private.can_manage_club(uuid) to authenticated;
grant execute on function private.shares_club(uuid) to authenticated;

alter table public.clubs enable row level security;
alter table public.profiles enable row level security;
alter table public.club_memberships enable row level security;
alter table public.games enable row level security;
alter table public.rating_events enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.puzzle_attempts enable row level security;

revoke all on public.clubs, public.profiles, public.club_memberships, public.games,
  public.rating_events, public.lesson_progress, public.puzzle_attempts from anon, authenticated;

grant select on public.clubs, public.profiles, public.club_memberships, public.games,
  public.rating_events, public.lesson_progress, public.puzzle_attempts to authenticated;
grant insert, update on public.profiles, public.lesson_progress, public.puzzle_attempts to authenticated;

create policy "Members can view their clubs"
on public.clubs for select to authenticated
using ((select private.is_club_member(id)));

create policy "Members can view profiles in a shared club"
on public.profiles for select to authenticated
using (id = (select auth.uid()) or (select private.shares_club(id)));

create policy "Users can create their own profile"
on public.profiles for insert to authenticated
with check (id = (select auth.uid()));

create policy "Users can update their own profile"
on public.profiles for update to authenticated
using (id = (select auth.uid()))
with check (id = (select auth.uid()));

create policy "Members can view their club roster"
on public.club_memberships for select to authenticated
using ((select private.is_club_member(club_id)));

create policy "Members can view their club games"
on public.games for select to authenticated
using ((select private.is_club_member(club_id)));

create policy "Members can view their club rating ledger"
on public.rating_events for select to authenticated
using ((select private.is_club_member(club_id)));

create policy "Users can view their lesson progress"
on public.lesson_progress for select to authenticated
using (user_id = (select auth.uid()) and (select private.is_club_member(club_id)));

create policy "Users can create their lesson progress"
on public.lesson_progress for insert to authenticated
with check (user_id = (select auth.uid()) and (select private.is_club_member(club_id)));

create policy "Users can update their lesson progress"
on public.lesson_progress for update to authenticated
using (user_id = (select auth.uid()) and (select private.is_club_member(club_id)))
with check (user_id = (select auth.uid()) and (select private.is_club_member(club_id)));

create policy "Users and coaches can view puzzle attempts"
on public.puzzle_attempts for select to authenticated
using (
  (user_id = (select auth.uid()) and (select private.is_club_member(club_id)))
  or (select private.can_manage_club(club_id))
);

create policy "Users can record their own puzzle attempts"
on public.puzzle_attempts for insert to authenticated
with check (user_id = (select auth.uid()) and (select private.is_club_member(club_id)));

comment on table public.games is 'Only trusted server code may create or change games and ratings.';
comment on table public.rating_events is 'Immutable rating ledger written by trusted server code only.';
