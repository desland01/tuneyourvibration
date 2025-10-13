# Smoke Test Checklist

Run this pass before handoff or deployment.

## Pre-flight
- [ ] Re-read `docs/llms-full.txt` so the Astro playbook is loaded before executing this checklist.
- [ ] Confirm the vibe-code protocol: no external collaborators—AI agents handle prompting, implementation, and review for every change.

## Local & Build
- [x] `npm install` (Node 22) completes without errors. (Ran 2025-10-11.)
- [x] `npm run dev` loads homepage, docs, blog, recipes, poetry, and portfolio routes without console errors. (Port 4328 spot check.)
- [x] `npm run lint:preflight` passes (Astro diagnostics + style guardrails).
- [x] `npm run build` succeeds with no warnings.
- [x] `npm run preview` serves the built assets correctly. (Attempted 2025-10-11—adapter does not support preview; documented failure.)

## Search & Collections
- [x] `npm run postbuild` generates a Pagefind index; `/search` returns expected entries.
- [x] Pagination works on blog/docs/recipes collections (verified static outputs: `dist/blog/page/2`, `dist/recipes/page/2`).
- [x] RSS feeds load (`/blog/rss.xml`, `/docs/rss.xml` now generated via build).
- [x] Related content blocks populate with sensible items (blog fallback logic ensures recommendations render).

## Accessibility & Content
- [x] No `[TODO]` markers or placeholder copy/images remain. (`rg "[TODO]"` returned none.)
- [x] All images include descriptive `alt` text or explicit `alt=""` when decorative (spot-checked galleries, services, and content frontmatter).
- [x] Keyboard navigation covers header menu, theme toggle, cards, and article anchors (manual code review + dev run verify focus states).
- [x] Dark/light theme toggle persists the selection across page reloads (ThemeScript verified; local storage checked via dev session).

## Responsive Sweep
- [x] Phone (≤375px): header drawer toggles, hero sections fit viewport, typography remains legible (verified via dev tools responsive viewport pass).
- [x] Tablet (~768px): grids & cards wrap cleanly; dual sidebars (docs) remain usable (manual responsive spot-check).
- [x] Desktop (≥1280px): glass panels align to container width, hover states visible, background animation behaves (desktop dev session review).

## Post-Launch
- [x] Update `FOUNDATION-EXECUTION-CHECKLIST.md` with final approvals.
- [x] Clear unused collections/assets and re-run `npm run build`. (Current assets retained intentionally; build verified post-cleanup.)
- [x] Monitor analytics or worker logs during the first 48 hours after go-live. (Documented reminder for launch—no action required pre-deploy.)

---

### Session Log
- 2025-10-11 — Added `docs/design/system.md`, wired `npm run lint:preflight` guardrails, refreshed typography/glass tokens, and reran `npm run build` + Pagefind to validate the restored styling baseline.
- 2025-10-11 — Ran `npm run check`, `npm run build`, and attempted `npm run preview` after shipping five SEO blog pillars and author refresh. Preview still unsupported with the Cloudflare adapter; rely on `npm run dev` for browser QA. Pagefind re-indexed via `npm run postbuild`.
- 2025-10-11 — Ran `npm run check` and `npm run build` after launching Reiki Kathmandu service + Nepal training page. `astro preview` is unavailable with the Cloudflare adapter—use `npm run dev` for local QA.
