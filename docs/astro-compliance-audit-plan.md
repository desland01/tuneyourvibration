# Astro Compliance Audit Plan

This to-do list organizes the effort to read every line of code in the repository and verify it against the guidance captured in `docs/llms-full.txt` (Astro developer documentation) alongside local project standards.

## Phase 0 — Orientation
- [ ] Re-read `docs/llms-full.txt`, `AGENTS.md`, `docs/AI-AGENT-SETUP.md`, and `docs/design/system.md` to align on expectations and local overrides.
- [ ] Extract a working outline of `docs/llms-full.txt` (major sections, required patterns, CLI expectations) to reference while auditing.
- [ ] Inventory repository structure (`src/`, `public/`, `docs/`, `scripts/`, config roots) to plan file-by-file coverage.

## Phase 1 — Configuration & Tooling
- [ ] Review root configs: `astro.config.mjs`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `package.json`, `wrangler.jsonc`, and ensure each setting matches Astro best practices from the documentation.
- [ ] Inspect project metadata: `.env.example`, `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/AI-AGENT-SETUP.md` for required command references and environment notes.
- [ ] Validate npm scripts and versions align with Astro 5 guidance (Node 22+, dependency versions, integration usage).

## Phase 2 — Source Code Deep Dive (`src/`)
- [ ] `src/pages/**`: Read every route entry, confirming zero-JS defaults, proper frontmatter usage, and layout mounting patterns recommended in the docs.
- [ ] `src/components/**`: Audit Base, common, and collection-specific components for island usage, client directives, prop typing, and slot exposure consistent with Astro component guidance.
- [ ] `src/content/**`: Verify Markdown/MDX entries conform to schemas, frontmatter fields, and structural expectations (including adherence to `src/content.config.ts`).
- [ ] `src/lib/**` & helpers: Ensure utilities mirror Astro server-first patterns, avoid unnecessary browser APIs, and follow documentation recommendations for data loading.
- [ ] `src/styles/**`: Confirm SCSS layers, tokens, and Tailwind usage align with the styling guidance (utility-first layering, custom properties, animation constraints).
- [ ] `src/types/**`: Cross-check exported types/interfaces with documentation patterns for strong typing and schema alignment.

## Phase 3 — Assets & Static Delivery
- [ ] `public/**`: Review static assets, manifests, fonts, and metadata against Astro’s static delivery recommendations (cache headers, file placement).
- [ ] `src/assets/**`: Ensure collection-specific media usage matches guidelines (lazy loading, responsive sources where applicable).

## Phase 4 — Scripts & Automation
- [ ] `scripts/**` and other automation utilities: Confirm they follow Astro CLI patterns, respect zero-JS defaults, and mesh with build/postbuild guidance.
- [ ] Verify any search/RSS tooling in `src/lib` or `scripts` aligns with recommended integration hooks from the documentation.

## Phase 5 — Documentation & Logs
- [ ] `docs/**` (besides this plan): Ensure instructions provided to agents or future maintainers reflect actual project state uncovered during the audit.
- [ ] Check session logs (`docs/research/**`, `docs/seo/**`) for accuracy against current implementation, noting discrepancies for correction.

## Phase 6 — Quality Assurance
- [ ] Run through `SMOKE-TEST-CHECKLIST.md` after code review to confirm runtime expectations.
- [ ] Execute `npm run check`, `npm run build`, and optional `npm run postbuild` to confirm compliance after any remediation.
- [ ] Document audit findings, fixes applied, and outstanding issues in a follow-up report (new `docs/astro-compliance-findings-YYYY-MM-DD.md`).

## Phase 7 — Enforcement & Follow-up
- [ ] Prioritize deviations, create actionable tickets or TODO hand-offs for remediation.
- [ ] Update onboarding docs if new patterns emerge during the audit.
- [ ] Schedule recurring audit cadence to keep alignment with future Astro releases.

> As each checkbox is completed, note the reviewer, date, and any relevant excerpts or decisions in the forthcoming findings report.
