# Christina's Website · Astrogon Template

This project now runs on the [Astrogon](https://github.com/astrogon/astrogon) Astro 5 template, wrapped with Tailwind CSS utilities and a handful of React islands. The goal is to keep the template’s rich collections (docs, blog, recipes, poetry, portfolio, etc.) while tailoring the content and styling to Christina’s brand.

## Requirements
- Node 22.x (use `nvm use 22` if available)
- npm 10+

## Install & Dev Commands
- `npm install` — install dependencies
- `npm run dev` — start the local dev server at `http://localhost:4327`
- `npm run build` — generate the production build in `dist/`
- `npm run preview` — serve the built output locally
- `npm run check` — run Astro’s diagnostics
- `npm run style:verify` — compile Tailwind output and confirm required design tokens/selectors
- `npm run lint:preflight` — run diagnostics plus style guardrails before PRs/handoffs
- `npm run format` — format source files with Prettier + Tailwind plugin
- `npm run postbuild` — optional Pagefind index builder for local search

## Project Layout
- `src/pages/` — Astro entry points (home, docs, blog, recipes, poetry, etc.)
- `src/content/` — Markdown/MDX content collections (managed via `src/content.config.ts`)
- `src/components/` — Astro + React UI (shortcodes, layouts, collection-specific components)
- `src/styles/` — layered SCSS tokens (`main.scss`, `prose.scss`, `glass.scss`, etc.)
- `src/lib/` — search helpers, RSS utilities, and theme logic
- `public/` — static assets (favicons, fonts, images, manifest, robots)
- `docs/` — customization notes from the upstream Astrogon template plus local brand docs
- `wrangler.jsonc` — Cloudflare Workers deployment config (update `name` & `compatibility_date`)

Refer to `docs/project-structure.md` and `docs/customization.md` for in-depth guidance from the Astrogon authors. `docs/brand-customization.md` extends those notes with Christina-specific workflow details.

## Environment
- Copy `.env.example` to `.env` and set `PUBLIC_SITE_URL` for sitemap/meta generation.
- When deploying to Cloudflare Workers, keep `wrangler.jsonc` in sync with your account/app values.

## Next Steps
- Replace demo content across `src/content/**` with approved copy and assets.
- Calibrate typography, colors, and glass morphism tokens in `src/styles/`.
- Remove unused collections/routes once the final sitemap is settled.
- Track QA in `SMOKE-TEST-CHECKLIST.md` and brand approvals in `FOUNDATION-EXECUTION-CHECKLIST.md`.
- Reference the shared design tokens in `docs/design/system.md` before adjusting colors, type, or glass styling.
