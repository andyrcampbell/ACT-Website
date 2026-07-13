# Alternative Concept Technologies — Website

Static marketing site built with Astro 4.x. Output: fully static HTML/CSS, no server required.

---

## Adding a Project (5 steps)

Projects render automatically from content collection entries. No code changes needed.

**1. Create a new file** in `src/content/projects/` named with a kebab-case slug:
```
src/content/projects/my-new-tool.md
```

**2. Add the required frontmatter:**
```yaml
---
title: My New Tool
description: One-sentence description of what this tool does.
status: coming-soon
order: 6
icon: grid
---
```

> **Note on slug:** Astro 4.x auto-generates the slug from the filename. The filename IS the slug.
> `my-new-tool.md` → slug `my-new-tool`. Do not add a `slug` field — Astro will reject it.

**3. Frontmatter field reference:**

| Field         | Type                                    | Description                                        |
|---------------|-----------------------------------------|----------------------------------------------------|
| `title`       | string                                  | Display name on the card                           |
| `description` | string                                  | One-line description shown on the card             |
| `status`      | `"active"` / `"beta"` / `"coming-soon"` | Controls the badge label and colour                |
| `order`       | number                                  | Sort order on the Projects page and home preview   |
| `icon`        | string                                  | Icon name — see supported icons below              |

**Supported icons:** `cpu-chip`, `grid`, `wind`, `layers`, `eye`

**4. Run the dev server** to preview:
```bash
npm run dev
```

**5. Build for production:**
```bash
npm run build
```

The new card appears on `/projects` and (if `order` ≤ 3) in the home page preview. Done.

---

## Development

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Production build → dist/
npm run build

# Preview production build locally
npm run preview
```

**Node:** 20+ required. npm or pnpm both work.

---

## Design System

All design tokens are defined as CSS custom properties in `src/styles/global.css`.

| Token              | Value     | Usage                                    |
|--------------------|-----------|------------------------------------------|
| `--bg-base`        | `#0C0C10` | Page background                          |
| `--bg-surface`     | `#141420` | Cards, nav, footer, panels               |
| `--bg-elevated`    | `#1C1C2C` | Hover states, pill tags                  |
| `--border`         | `#252538` | All borders                              |
| `--text-primary`   | `#E8E8F2` | Headings, labels, primary copy           |
| `--text-secondary` | `#8080A0` | Body copy, captions, secondary labels    |
| `--accent`         | `#5865F7` | Backgrounds, borders, SVG strokes        |
| `--accent-text`    | `#7B87F9` | Text links, badges — WCAG AA on dark bg  |

Typography: **Inter** (body/headings) + **JetBrains Mono** (eyebrow labels, badge text).

---

## Content Decisions Outstanding (Andy to resolve before go-live)

- **Hero headline** — current draft: "We build precise tools for engineers." Confirm or replace.
- **Contact email** — currently `andyr@campbell.us.com`. Confirm or use an ACT-domain address.
- **Portrait image** — placeholder div on Home and About pages. Supply `/public/images/andy-campbell.jpg` (recommended: 680×906px minimum for retina).
- **Founder title** — "Founder and Technical Director" is an Atlas addition. Confirm.
- **Client names** — Industries page lists sectors only, no company names. Confirm which clients (if any) can be named.
- **Accent colour** — `#5865F7` is used for decorative/background use. Text links use `#7B87F9` (lighter, passes WCAG AA). Confirm both are acceptable.
- **Deploy target** — Vercel, Netlify, Cloudflare Pages, or other. Run `npm run build` and point the host at `dist/`.

---

## Project Structure

```
src/
  content/
    config.ts          — Zod schema for the projects collection
    projects/          — One .md file per project
  layouts/
    BaseLayout.astro   — HTML shell, nav, footer, fonts, structured data
  components/
    Nav.astro          — Fixed navigation with scroll effect and mobile toggle
    Footer.astro       — Minimal footer
    ProjectCard.astro  — Project card with inline SVG icon, badge, description
  styles/
    global.css         — Complete design system: tokens → reset → components → pages
  pages/
    index.astro        — Home: hero, about teaser, projects preview, contact band
    about.astro        — Full biography, competencies, industries, credentials
    projects.astro     — Full project grid from content collection
    contact.astro      — Email + LinkedIn contact links
public/
  favicon.svg
```

---

## Accessibility

- WCAG 2.2 AA contrast verified for all text uses.
- `#5865F7` (--accent) on `#0C0C10` (--bg-base) = 4.28:1 — below 4.5:1 threshold for normal text. All text links use `#7B87F9` (6.19:1) instead.
- White `#FFFFFF` on `#5865F7` (CTA button) = 4.57:1 — passes AA.
- Skip-to-content link, landmark regions, `aria-current="page"` on active nav link.
- `prefers-reduced-motion`: all CSS animations disabled when the user prefers reduced motion.
- `<main id="main-content" tabindex="-1">` — keyboard focus target for skip link.
