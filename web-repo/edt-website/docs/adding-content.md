# Adding content to the EDT website

This doc explains how to add new projects and full case studies to the site. Treat it as your reference — the site has no CMS, so all content is added directly to the codebase.

The blog is currently a "coming soon" placeholder and is intentionally out of scope for this guide. See the note at the bottom.

---

## 1. How content is structured

All work-related content lives under [`app/work/`](../app/work/). Two layers exist:

| Layer | What it is | Where it lives |
|---|---|---|
| **Work index** | The grid of project cards at `/work` | [`app/work/page.tsx`](../app/work/page.tsx), inline `projects` array (lines 10–191) |
| **Case-study page** | The full project page at `/work/<slug>` | `app/work/<slug>/page.tsx` (one folder per project) |

A project can exist on the index *without* a case-study page — most current entries do. Their `href` simply points back to `/work`. When you're ready to write a full case study for one of those, you create the folder and update its `href`.

There is **no shared `CaseStudyLayout` component**. Each case-study page is a hand-composed `page.tsx`, but they all use the same Tailwind tokens so they look cohesive.

### Asset folder conventions

Each project owns a folder under [`public/images/<slug>/`](../public/images/) and (if it has video) one under [`public/videos/<slug>/`](../public/videos/). The slug is kebab-case and **must exactly match** the folder name under `app/work/`.

Required files inside `public/images/<slug>/`:

```
<slug>_thumb.jpg          ← thumbnail on the /work index card
<slug>_hero.jpg           ← full-width hero below the title on the case-study page
<slug>_gallery_01.jpg
<slug>_gallery_02.jpg
<slug>_gallery_03.jpg
<slug>_gallery_04.jpg     ← some pages also use _05
<slug>_poster_01.jpg      ← poster frame for the embedded video
<slug>_og.jpg             ← Open Graph share image (1200×630 recommended)
```

Required file inside `public/videos/<slug>/`:

```
<slug>_video_01.mp4
```

> File-extension note: most thumbnails are `.jpg`, but a few (e.g. `georgetown-projection`, `sarawak-projection`) use `.png`. Match whatever extension your asset actually is, and reference that exact filename in the `image` field.

---

## 2. Adding a project to the work index (lightweight, no case-study page)

Use this when a project should appear on `/work` but doesn't yet have a full case-study page written.

### Step 1 — Add the thumbnail

Save the thumbnail to:

```
public/images/<slug>/<slug>_thumb.jpg
```

The slug is your kebab-case project identifier (e.g. `tokyo-vr-earthquake`).

### Step 2 — Add the entry to the projects array

Open [`app/work/page.tsx`](../app/work/page.tsx) and add a new object to the `projects` array (between lines 10–191). Use this shape:

```ts
{
  client: 'Client Name',                    // shown above the title
  title: 'Project Title',                   // big card label
  category: 'VR Training',                  // shown as the badge
  stat: 'Headline metric or short subline', // one-line achievement
  href: '/work',                            // until you build a case-study page, point here
  image: '/images/<slug>/<slug>_thumb.jpg', // matches the file you added in Step 1
  featured: false,                          // true puts it in the top-3 featured grid
}
```

Place the entry where you want it to appear — order in the array determines order on the page.

### Step 3 (optional) — Add a new category to the filter chips

If your project's `category` value isn't already represented in the filter row at [`app/work/page.tsx` line 193](../app/work/page.tsx), add it to that `categories` array.

### Step 4 — Verify

```bash
cd web-repo/edt-website
npm run dev
```

Visit `http://localhost:3000/work` and confirm:
- the new card appears with the correct thumbnail
- the badge shows the right category
- the stat line reads correctly
- if `featured: true`, it appears in the top grid

---

## 3. Adding a full case-study page

Use this when the project deserves its own page with hero, gallery, video, results, and narrative sections.

### Step 1 — Prepare all assets

Confirm your `public/images/<slug>/` folder contains every file from the asset checklist in Section 1, and `public/videos/<slug>/<slug>_video_01.mp4` exists. Missing files cause silent 404s on the page.

### Step 2 — Pick a template and copy it

The repo has six case-study pages of varying complexity. Pick the one closest to what you're building and copy it:

| Template | Length | Best for |
|---|---|---|
| [`app/work/metahrise/page.tsx`](../app/work/metahrise/page.tsx) | 181 lines | **Default starting point.** Cleanest structure with hero, overview table, gallery, video, results, awards, narrative |
| [`app/work/arfestkl/page.tsx`](../app/work/arfestkl/page.tsx) | 159 lines | Short, light-touch projects |
| [`app/work/ikat/page.tsx`](../app/work/ikat/page.tsx) | 160 lines | Exhibition-style projects |
| [`app/work/airasia-founders-gallery/page.tsx`](../app/work/airasia-founders-gallery/page.tsx) | 276 lines | Multi-section installations |
| [`app/work/cheritar-think-city/page.tsx`](../app/work/cheritar-think-city/page.tsx) | 296 lines | Long-form, product-led storytelling |
| [`app/work/new-balance-grey-day/page.tsx`](../app/work/new-balance-grey-day/page.tsx) | 320 lines | Heavy brand campaigns |

Copy the chosen template to:

```
app/work/<slug>/page.tsx
```

> The folder name must exactly match the `href` slug you'll use on the index card. If your folder is `tokyo-vr-earthquake`, the URL is `/work/tokyo-vr-earthquake`.

### Step 3 — Edit the copied page

Working from `metahrise` as the reference, make these edits **in order** (line numbers refer to the original metahrise file):

1. **Metadata** (lines 4–8) — update the page `<title>` and meta description:

   ```ts
   export const metadata: Metadata = {
     title: 'Your Title Case Study | Short Tagline | EDT',
     description: 'One-sentence summary that will appear in search results and link previews.',
   }
   ```

2. **Results and awards arrays** (lines 10–20) — update with your project's metrics and awards. Add or remove rows as needed:

   ```ts
   const results = [
     { metric: 'Employees Onboarded', result: '145' },
     { metric: 'Satisfaction Rate', result: '93%' },
     // ...
   ]

   const awards = [
     'Award Name — Year',
   ]
   ```

3. **Breadcrumb label, badge, and H1** (lines 33–37):

   ```tsx
   <span className="text-white">Your Project Name</span>     // breadcrumb tail
   <span className="edt-badge mb-4 inline-block">Category</span>
   <h1 className="display-lg ...">Your Headline.</h1>
   ```

4. **Overview table** (lines 41–52) — Client / Category / Technology / Year:

   ```ts
   { label: 'Client', value: 'Client Name' },
   { label: 'Category', value: 'VR Training' },
   { label: 'Technology', value: 'Unity · Multiplayer VR · Meta Quest 3' },
   { label: 'Year', value: '2024' },
   ```

5. **Find-replace `metahrise` → `<slug>`** for every image and video path. There are references in:
   - the hero `<img src="/images/.../...">`
   - the gallery loop (`metahrise_gallery_0${n}.jpg`)
   - the video `<source src="...">` and `poster="..."`

   Make sure you don't accidentally rename function names or arrays — only the asset paths.

6. **Body content** — challenge, solution, related-products, CTA sections vary per project. Rewrite the prose to match your project. Keep the heading hierarchy (`display-md`, `display-lg`) and existing class names so visual style stays consistent across the site.

### Step 4 — Wire it into the work index

Open [`app/work/page.tsx`](../app/work/page.tsx). Find the entry for this project in the `projects` array. Change its `href`:

```ts
href: '/work/<slug>',   // was: '/work'
```

If no entry exists yet, add one following Section 2 above (with `href` already pointing to `/work/<slug>`).

### Step 5 — Verify

```bash
cd web-repo/edt-website
npm run dev
```

Then check:

- [ ] `/work` — your card appears and links to the new page
- [ ] `/work/<slug>` — the case-study page loads
- [ ] Hero image, all gallery images, poster, and video all render (open DevTools → Network tab, filter by Img/Media, confirm zero 404s on `/images/<slug>/...` and `/videos/<slug>/...`)
- [ ] Breadcrumb at the top reads correctly: Home / Work / Your Project
- [ ] Page metadata is correct (DevTools → Elements → `<head>` → `<title>` and `<meta name="description">`)

---

## 4. Reference cheat sheet

### Tailwind tokens used across all case studies

| Token | Use |
|---|---|
| `edt-badge` | The small uppercase pill above section titles |
| `display-lg`, `display-md`, `display-xl` | Display-font headlines (large, medium, extra-large) |
| `font-display` | Forces the display typeface |
| `pixel-grid` | The textured background on hero sections |
| `bg-edt-black`, `bg-edt-blue`, `bg-surface` | Brand background colours |
| `text-edt-grey`, `text-edt-blue` | Brand foreground colours |
| `btn-primary`, `btn-secondary`, `btn-ghost` | Button variants |

### Common gotchas

- **Folder name must equal the `href` slug.** If `href` is `/work/foo-bar` then the folder must be `app/work/foo-bar/`. A mismatch produces a 404 with no obvious error.
- **Image extensions must match the actual file.** Most thumbnails are `.jpg` but a few are `.png`. Whatever you save, reference that exact extension in the `image` field on the index and inside the case-study page.
- **`featured: true`** puts the project in the top 3-up grid on `/work`. Only set it on three projects at a time, or the layout shows extras below.
- **Asset filenames are case-sensitive on Vercel** even though they may not be locally on macOS. Stick to lowercase-with-hyphens for slugs and the underscore-suffix convention for filenames.
- **No dynamic routing.** Adding a new case study always means creating a new folder + `page.tsx`. There is no `[slug]/page.tsx` shortcut for case studies.

---

## 5. Note on the blog

The blog at `/blog` is currently a UI-only shell. Every article URL routes to [`app/blog/[slug]/page.tsx`](../app/blog/%5Bslug%5D/page.tsx), which displays a "coming soon" placeholder regardless of slug. There is no markdown loader or content directory yet.

When you're ready to make the blog real, that file is the entry point — replace its placeholder body with a markdown/MDX content loader (e.g. `next-mdx-remote` + `gray-matter`) and rewrite [`app/blog/page.tsx`](../app/blog/page.tsx) to read post metadata from a `content/blog/` directory instead of its current hardcoded `posts` array. Until then, leaving the placeholder in place is intentional.
