-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Site Settings
create table site_settings (
  id bigint primary key check (id = 1), -- Singleton
  title_ar text not null,
  description_ar text,
  logo_url text,
  contact_email text,
  contact_phone text,
  social_links jsonb default '{}'::jsonb,
  updated_at timestamptz default now()
);

alter table site_settings enable row level security;
create policy "Public read settings" on site_settings for select using (true);
create policy "Admins update settings" on site_settings for update using (auth.role() = 'authenticated');

-- 2. Pages
create table pages (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title_ar text not null,
  meta_description_ar text,
  is_published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table pages enable row level security;
create policy "Public read pages" on pages for select using (true);
create policy "Admins all pages" on pages for all using (auth.role() = 'authenticated');

-- 3. Sections
create table sections (
  id uuid primary key default uuid_generate_v4(),
  page_id uuid references pages(id) on delete cascade not null,
  type text not null,
  sort_order int not null,
  is_visible boolean default true,
  content jsonb default '{}'::jsonb,
  updated_at timestamptz default now()
);

alter table sections enable row level security;
create policy "Public read sections" on sections for select using (true);
create policy "Admins all sections" on sections for all using (auth.role() = 'authenticated');

-- 4. News Posts
create table news_posts (
  id uuid primary key default uuid_generate_v4(),
  title_ar text not null,
  slug text unique not null,
  excerpt_ar text,
  content_html_ar text,
  image_url text,
  published_date date default current_date,
  category text,
  is_featured boolean default false,
  created_at timestamptz default now()
);

alter table news_posts enable row level security;
create policy "Public read news" on news_posts for select using (true);
create policy "Admins all news" on news_posts for all using (auth.role() = 'authenticated');

-- 5. Events
create table events (
  id uuid primary key default uuid_generate_v4(),
  title_ar text not null,
  event_date date not null,
  time text,
  location_ar text,
  presenters_ar text,
  description_ar text,
  is_upcoming boolean default true,
  created_at timestamptz default now()
);

alter table events enable row level security;
create policy "Public read events" on events for select using (true);
create policy "Admins all events" on events for all using (auth.role() = 'authenticated');

-- SEED DATA (To match current content.ts)
insert into site_settings (id, title_ar, description_ar, contact_email)
values (1, 'بيت الشعر - نواكشوط', 'مؤسسة ثقافية وطنية', 'mmed1772@gmail.com');

-- Insert Home Page
insert into pages (slug, title_ar) values ('/', 'الرئيسية');

-- (Note: Sections would be inserted dynamically via script or manually for the seed)
