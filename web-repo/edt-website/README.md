# EDT Website

The marketing site for [Experiential Design Team](https://weareedt.com) — a Malaysia-based experiential technology studio (AR / VR / MR, AI avatars, projection mapping, virtual production, interactive installations).

Built with [Next.js 16](https://nextjs.org) (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/` — App Router routes. Top-level pages (home, about, work, services, products, industries, partners, contact, blog) and case-study sub-pages under `app/work/`.
- `components/` — Shared components (`Navbar`, `Footer`, `HeroShowreel`, `YouTubeEmbed`).
- `lib/` — Site-wide constants, schema helpers, SEO utilities.
- `public/` — Static assets (images, SVG icons, favicon, small `.webm` service-tile loops).

Case-study videos are embedded from YouTube (see `components/YouTubeEmbed.tsx` and the `youtubeId` field on each project in `app/work/page.tsx`); raw video files are kept out of the repo via `.gitignore` to stay under GitHub's 100MB-per-file limit.

## Deployment

Deployed on Vercel. Project Root Directory must be set to `web-repo/edt-website`.
