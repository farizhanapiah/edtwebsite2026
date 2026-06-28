-- EDT — one-time Supabase setup.
-- Run this in the Supabase dashboard → SQL Editor.
-- Then create two Storage buckets in the UI:
--   decks  → Public
--   cvs    → Private
-- And create your team login(s) under Authentication → Users.

-- Pitch decks (uploader) -----------------------------------------------------
-- Named `deck_uploads` to avoid colliding with any pre-existing `decks` table.
create table if not exists deck_uploads (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,            -- used in the public /d/<slug> link
  title text not null,
  client_name text,
  file_path text not null,              -- path inside the 'decks' storage bucket
  created_at timestamptz default now(),
  created_by uuid references auth.users(id)
);

-- Talent applications --------------------------------------------------------
create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  applicant_type text not null check (applicant_type in ('intern','full-time')),
  full_name text not null,
  email text not null,
  phone text,
  role_interest text,                   -- position / discipline of interest
  profile text,                         -- personal profile / bio
  portfolio_url text not null,          -- REQUIRED
  linkedin_url text,
  cv_path text,                         -- path inside the private 'cvs' bucket
  source text,                          -- "how did you find EDT"
  notes text,                           -- "anything else"
  availability text,                    -- earliest start / availability
  created_at timestamptz default now()
);

-- Lock down direct (anon-key) access. All reads/writes go through server
-- routes using the service-role key, which bypasses RLS. With RLS enabled and
-- no policies, the public anon key gets default-deny — the secure default.
alter table deck_uploads enable row level security;
alter table applications enable row level security;
