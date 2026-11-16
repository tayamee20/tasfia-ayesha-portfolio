# Tasfia Ayesha — Portfolio

A React + Vite + TypeScript portfolio with Tailwind CSS, Framer Motion and React Router.

## Creative direction

**Playful contemporary, built like a poster.** The hero sets the name huge, split across two rows, with Bauhaus-style tiles that assemble on load, drift with the pointer and spin on hover. That is the one loud moment; the rest of the site stays calm and editorial so the work leads.

| Token | Hex | Use |
| --- | --- | --- |
| Paper | `#F7F3EC` | Page background (warm off-white) |
| Sand | `#EDE6DA` | Alternate band (About) |
| Ink | `#1F1D24` | Text, dark bands, buttons |
| Smoke | `#5A5662` | Secondary text |
| Lavender | `#CDBEFF` | Accent, contact block |
| Volt | `#2E4CFF` | Electric blue: links, hover, small marks |
| Coral | `#FF6F59` | Accent fills only (not text) |
| Lime | `#D9F46A` | Highlights, "now", focus moments |

- **Type:** Bricolage Grotesque (display: expressive, tight, heavy) + Instrument Sans (body: calm, readable).
- **Shapes:** circle, arch, quarter, pill, flower — one vocabulary reused for markers, placeholders and decoration.
- **Layout:** asymmetric 12-column editorial grid; project cards alternate size and vertical offset.
- **Motion:** one orchestrated load sequence, scroll reveals that play once, hover micro-interactions, route transitions. Everything respects `prefers-reduced-motion`.

## Quick start

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to dist/
npm run preview    # serves the production build locally
npm run build:preview  # optional: one self-contained HTML file in dist-preview/
```

## Project structure

```
src/
  content/           ← EDIT THESE: all words, links and projects
    projects.ts      ← the project list + case study content
    site.ts          ← profile, links, about, experience, skills, more projects
  components/
    layout/          Navbar, Footer, PageTransition, ScrollManager
    ui/              ButtonLink, ImageFrame, Placeholder, Reveal, Shape, SplitText
  sections/          Hero, SelectedWork, ProjectCard, About, Experience, Skills, Contact
  pages/             HomePage, CaseStudyPage (/work/:slug), NotFoundPage
  hooks/             useDocumentMeta (page titles + descriptions for SEO)
  lib/               types and accent colour map
public/
  images/projects/   ← put screenshots here
```

## Editing content

- **Add a project:** copy an object in `src/content/projects.ts`, give it a new `slug`. It appears in the grid and gets a case study at `/work/<slug>` automatically.
- **Remove / reorder:** delete or move the object.
- **Case study text:** any field left out (`problem`, `objectives`, `approach`, `challenges`, `learnings`, `conclusion`) shows a dashed **Placeholder** block telling you what to write. Nothing has been invented.
- **Smaller projects:** edit `moreProjects` in `src/content/site.ts`.

## Adding images

1. Export screenshots as **WebP** (or AVIF), about 2000px wide for covers, under ~300 KB each.
2. Save them in `public/images/projects/<slug>/`.
3. Point to them in `projects.ts`:

```ts
cover: { src: '/images/projects/neduai/cover.webp', alt: 'NeduAI Career Advisor dashboard', width: 2000, height: 1250 },
```

Final designs can carry numbered annotations: `annotations: [{ x: 24, y: 30, note: 'Why this card is first' }]` (x/y are percentages).

Your portrait: replace the placeholder block in `src/sections/About.tsx` with an `<img>`.

## Placeholders still to fill

- [ ] LinkedIn, Dribbble and GitHub URLs in `site.ts` → `links`
- [ ] NeduAI dates, location and exact role title in `site.ts` → `experience`
- [ ] Project years, and your exact role on CatchSwipe, Gamesim and AnimateEarth (set to "UI/UX designer" for now)
- [ ] Problem, objectives, approach, challenges, learnings and conclusion for each case study
- [ ] All screenshots, wireframes and your portrait
- [ ] GitHub links for Inventory-Pro, Weather-Today and Computer Graphics
- [ ] Your live URL + share image in `index.html` (`og:url`, `og:image`)

## Deploy

**Vercel**
1. Push this folder to a GitHub repo.
2. On vercel.com → *Add New → Project* → import the repo. Vercel detects Vite (build `npm run build`, output `dist`).
3. Deploy. `vercel.json` already rewrites all routes to `index.html`, so `/work/neduai` works on refresh.

**Netlify**
1. Push to GitHub, then *Add new site → Import an existing project*.
2. Build command `npm run build`, publish directory `dist`.
3. Deploy. `public/_redirects` handles client-side routes.

Add a custom domain in either dashboard, then update the `og:url` meta tag.
