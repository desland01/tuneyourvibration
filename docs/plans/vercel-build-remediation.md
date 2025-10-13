# Vercel Build Warning Remediation Plan

## Goal
Eliminate the asset resolution warnings seen during the 2025-10-13 Vercel build for branch `future-work` and harden the pipeline so future builds stay clean.

## Context
- Vite emitted multiple `__VITE_PUBLIC_ASSET__*` warnings, meaning some image references could not be statically resolved at build time.
- Cloudflare adapter warned about Sharp support (expected, but worth closing by compiling images ahead of time).
- Pagefind defaulted to crawling entire `<body>` because `data-pagefind-body` markers are missing (non-blocking, but easy win).
- Shiki logged “10 instances created” hinting at repeated highlighter instantiation.

## Tasks
1. **Reproduce & trace Vite asset warnings locally**
   - Run `npm run build -- --log-level verbose` to capture importer paths for each unresolved `__VITE_PUBLIC_ASSET`.
   - Inspect `.astro` and bundled JS output (e.g. `.vite/deps`) to identify the source component/content entry.
2. **Audit image references across content & styles**
   - Search for raw strings pointing to `src/assets` or `public/` (`rg '\.(png|jpg|webp)' src content styles`).
   - Convert offenders to use `resolveImage` / `astro:assets` or, when necessary, move files into `public/` and reference via absolute URLs.
3. **Lock image service behaviour for Cloudflare**
   - Update `astro.config.mjs` to set `image.service.entrypoint = "astro/assets/services/sharp"` with `image.service.config = { entrypoint: "astro/assets/services/compile" }` (prebuild optimisation) so runtime Sharp is not required.
   - Verify build output no longer logs the Sharp warning.
4. **Reduce Shiki instance churn**
   - Review MDX/remark configuration; implement a shared highlighter (e.g. via `astro.config.mjs` `markdown.shikiConfig`) or dispose highlighters after use.
5. **Optional: Add Pagefind body markers**
   - Wrap main content containers with `data-pagefind-body` to scope search indexing and silence informational warning.
6. **Re-run `npm run build` and Vercel preview deploy**
   - Confirm warnings are cleared locally.
   - Trigger a preview deployment to validate in Vercel; capture logs for the PR notes.

## Deliverables
- Clean Vercel build log with no `__VITE_PUBLIC_ASSET__` warnings.
- Config changes committed (image service, content updates).
- Short QA note in PR referencing this plan and verification steps.
