# Brand Customization Guide

This checklist extends the upstream Astrogon docs with Christina-specific tasks. Track completion in `FOUNDATION-EXECUTION-CHECKLIST.md`.

## 1. Environment & Platform
- Duplicate `.env.example` to `.env` and set `PUBLIC_SITE_URL` (https, no trailing slash). This feeds sitemap URLs and social meta tags.
- If publishing to Cloudflare Workers, update `wrangler.jsonc` (`name`, `compatibility_date`) and confirm `npm run build && npx wrangler deploy`.
- Keep local AI tooling secrets (Perplexity, Gemini, etc.) in the optional section of `.env`.

## 2. Visual System
- Update `src/styles/main.scss` for base colors (`$color-*` variables) and `src/styles/glass.scss` for glassmorphism transparency/blur.
- Adjust typography in `src/styles/fonts.scss` and `src/styles/prose.scss`. Upload new font files under `public/fonts/` and register them with `@font-face`.
- Tailwind utility extensions live in `tailwind.config.js` (`extend.colors`, `extend.fontFamily`, etc.). Align tokens as you tweak styles.
- Run `npm run format` after major styling changes to keep class ordering consistent.

## 3. Header, Footer & Navigation
- Edit the `menu` array in `src/components/base/Header.astro` to match the final sitemap.
- Update attribution and social handles inside `src/components/base/Footer.astro` and `src/components/common/Social.astro`.
- Review `src/components/base/BaseLayout.astro` and set `siteTitle`, `siteDescription`, `siteAuthor`, `siteImage`, and `baseUrl` with approved brand content.

## 4. Content Collections
- Replace demo Markdown/MDX in `src/content/**` with valid copy. Remove unused collections if they are out of scope.
- Update frontmatter fields to match Christina’s tone of voice (titles, descriptions, categories, tags).
- If you introduce a new collection, define its schema in `src/content.config.ts`, add components under `src/components/<collection>/`, and wire routes in `src/pages/<collection>/`.
- For MDX shortcodes (accordion, tabs, notices, YouTube embeds), reference the examples in `docs/` and confirm render parity after edits.

## 5. Search, RSS & Pagination
- Review `src/pages/search.astro` to decide which collections remain searchable; adjust `searchableCollections` accordingly.
- Run `npm run postbuild` and verify the Pagefind UI returns expected results.
- Update RSS feeds in `src/pages/blog/rss.xml.ts` and similar files if titles or descriptions change.
- Confirm pagination sizes per collection (`entriesPerPage` inside route files) match content strategy.

## 6. Media & Assets
- Replace placeholder imagery in `public/images/`, `src/assets/**`, and `public/favicon/`. Provide multiple favicon sizes via [favicon.io](https://favicon.io/) or similar.
- Generate social preview art that matches `siteImage` referenced in `BaseLayout`.
- Audit alt text throughout `src/content` for accessibility and SEO impact.

## 7. Analytics & Compliance
- Embed analytics scripts inside `src/components/base/BaseLayout.astro` after the meta block, keeping consent requirements in mind.
- Update `public/robots.txt` and `public/site.webmanifest` with the correct brand name, URL, and theming.
- Ensure terms/privacy pages under `src/pages/terms.astro` (and docs collection) reflect legal language approved by stakeholders.

## 8. QA & Approvals
- Execute the flows in `SMOKE-TEST-CHECKLIST.md` across breakpoints.
- Log approvals, copy sign-off, and tracking configuration in `FOUNDATION-EXECUTION-CHECKLIST.md`.
- After content substitutions, run `npm run build` to catch schema or MDX errors before opening a PR.
