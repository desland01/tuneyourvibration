# Repository Guidelines

## Project Structure & Module Organization
- All source files live in `src/`.
- `src/pages` holds route-level `.astro` entries (home, docs, blog, recipes, poetry, terms, etc.).
- `src/content` stores Markdown/MDX collections driven by `src/content.config.ts`.
- `src/components` contains shared UI, shortcodes, and collection-specific blocks (Astro + React).
- `src/styles` uses layered SCSS (`main.scss`, `prose.scss`, `glass.scss`, `utilities.scss`) for theming and utility tokens.
- `src/lib` exposes helpers for search, RSS, and data transforms. Shared types live in `src/types`.
- Static assets belong in `public/` (favicons, fonts, manifest, robots, imagery). Collection-specific media may sit under `src/assets`.
- Docs reside in `docs/`; brand references stay in `Brand assets/`.

## Build, Test, and Development Commands
- Use Node 22 (`nvm use 22`) before running commands.
- `npm install` — install dependencies.
- `npm run dev` — launch the dev server at `http://localhost:4328` with hot reload.
- `npm run build` — emit the production bundle to `dist/`.
- `npm run preview` — serve the built output for QA.
- `npm run check` — run Astro diagnostics before opening a PR.
- `npm run postbuild` — optional Pagefind indexing for local search.
- `npm run format` — Prettier + Tailwind formatter for `src/`.

## Coding Style & Naming Conventions
- Author components in Astro or TypeScript modules, matching the template’s two-space indentation and trailing commas.
- Prefer PascalCase component filenames (e.g., `Tabs.astro`), camelCase utilities, and kebab-case routes.
- Keep design tokens and theme adjustments inside `src/styles/*.scss`. Update Tailwind utilities through `tailwind.config.js` if needed.
- React islands live under `src/components/**`; ensure client directives (`client:load`, etc.) are only added when required.
- Respect existing path aliases (`@components`, `@lib`, `@assets`, etc.) defined in `tsconfig.json`.

## Testing & QA
- Automated unit tests are not configured. Always run `npm run check`, step through `SMOKE-TEST-CHECKLIST.md`, and document manual QA in the PR description.
- When editing search or RSS behaviour, confirm `npm run postbuild` succeeds and the generated Pagefind index works locally.

## Agent Workflow & Collaboration
- Maintain the vibe-coding loop: humans craft prompts, Codex implements, Claude Code provides specs. Capture each prompt/response chain in PR notes and cite any Claude-driven architecture changes.
- Activate the SEO domination roadmap in `docs/seo/codex-vibe-seo-plan.json` before starting a session; follow the agent prompts + phase tasks defined there.
- Track progress using the plan's checklist—mirror completions in `docs/research/README.md`, `docs/seo/experiments.md`, and related logs so the loop stays audit-ready.
- Flag TODO hand-offs clearly for the next agent. Attach helpful transcript snippets or AI session exports for added context.
- Before any implementation, skim `docs/design/system.md` and honor the active rules—hero glow utilities, services grid patterns, timeline icon badges, and other symmetry requirements live there and must be reflected in new work.
- Default to symmetrical compositions (balanced columns, even spacing, mirrored padding) when designing UI so every layout feels intentional across breakpoints.

## Environment & Deployment
- Copy `.env.example` to `.env` and set `PUBLIC_SITE_URL` for sitemap/meta generation.
- Cloudflare Workers deployments rely on `wrangler.jsonc`; update the `name` and `compatibility_date` when preparing releases.
- Coordinate brand tokens and analytics updates via `docs/brand-customization.md` and log completion in `FOUNDATION-EXECUTION-CHECKLIST.md`.

## Session Notes
- 2025-10-11 — Codex generated the world-dominating SEO roadmap (`docs/seo/codex-vibe-seo-plan.json`), archived Perplexity research (`docs/research/2025-10-11-perplexity-seo-strategies.json`), and wired progress tracking across AGENTS/README/experiments.
- 2025-10-11 — Began Phase 1 implementation: added in-person Reiki ceremony content (`src/content/services/in-person-reiki-kathmandu.md`) and shipped the `/sound-healing-nepal/learn` hub with schema + CTAs.
- 2025-10-12 — Locked in the homepage as finished by confirming testimonial sourcing and updating `docs/vibe-build-checklist.md` to reflect completion.
- 2025-10-12 — Introduced `astro-icon` integration for richer iconography and reflowed service detail sections into stacked hero/benefit/CTA bands to mirror homepage formatting rhythms.
- 2025-10-12 — Standardized every service markdown entry with structured benefits, aligned arrays, and icon-ready metadata so all detail pages render the refreshed layout consistently.
- 2025-10-12 — Optimized performance baseline: pruned unused font families, added critical preloads, deferred index card swiper hydration, and idled global animation observers; recorded build stats for follow-up CWV testing.
- 2025-10-12 — Captured mobile Lighthouse baselines (dev build): `/` Perf 87 (FCP 3.1 s, LCP 3.1 s, SI 3.8 s, TBT 90 ms, TTI 24.9 s\*), `/sound-healing-nepal/learn` Perf 99 (FCP 1.6 s, LCP 1.6 s, SI 1.9 s, TBT 70 ms, TTI 24.1 s\*). \*TTI inflated by dev-hydration; re-test on preview/prod.
- 2025-10-12 — JS payload audit flagged Tooltips (~36 kB), Swiper (~81 kB), and Radix ScrollArea (~43 kB). Short-term mitigation: gate tooltips per page, scope slider usage, evaluate CSS overflow replacement for doc/blog sidebars.
- 2025-10-12 — Follow-up Lighthouse on static build: `/` Perf 94 (FCP/LCP 2.4 s, TTI 2.4 s), `/sound-healing-nepal/learn` Perf 90 (FCP/LCP 2.9 s, TTI 2.9 s). Implemented Tooltips dynamic import so the 36 kB chunk only loads on pages that opt in.
- 2025-10-12 — Completed hydration diet: replaced Swiper with an Astro/native slider, swapped Radix ScrollArea for CSS overflow, and trimmed unused deps (`swiper`, `@radix-ui/react-scroll-area`, `clsx`, `tailwind-merge`). `npm run build` now transforms 110 modules (prev. 139) with no standalone `Swiper.*.js` chunk; next focus is tooltips-per-route and hero media tuning.
