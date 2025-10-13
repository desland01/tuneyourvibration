# AI Agent Setup

Guidelines for AI collaborators working inside this repository. Keep this document version-controlled as standards evolve.

## Writing Standards
- Use clear, direct language that reflects Christina’s approved tone; avoid filler or figurative phrasing unless provided in briefs.
- Focus on actions, responsibilities, and outcomes. Confirm accessibility implications (contrast, headings, alt text) before publishing.
- Cite sources for any claims, metrics, or testimonials. Log each verification in `FOUNDATION-EXECUTION-CHECKLIST.md`.

## Verification Policy
- Never introduce facts without an attributable source. Add `[TODO: verify]` tags when information is pending approval.
- Record new analytics scripts, embeds, or third-party integrations in the checklist with owner + date.
- Retain evidence artifacts (emails, approvals, screenshots) until launch sign-off.

## Collaboration Workflow
- Begin every session by reviewing `docs/llms-full.txt` so Astro guidance is top-of-mind before planning or editing.
- Treat this as an autonomous vibe-code loop—no human collaborators participate; all prompting, authoring, and reviews stay within the AI agent team.
- Before coding, read `AGENTS.md` and `docs/design/system.md` to ground yourself in the latest structural and visual standards. Note any new rules in Session Notes when you adjust them.
- Review `docs/brand-customization.md` and the upstream Astrogon docs before editing navigation, theme tokens, or content collections.
- Respect path aliases (`@components`, `@lib`, `@assets`, `@/`) when authoring Astro/TS modules.
- Update SEO/meta defaults in `src/components/base/BaseLayout.astro` as messaging evolves; keep OG image paths accurate.
- Coordinate significant search, RSS, or pagination changes with humans—these impact multiple collections.

## Release Readiness
- Before merge, run `npm run check`, `npm run build`, and the relevant steps in `SMOKE-TEST-CHECKLIST.md`.
- Confirm `.env` contains `PUBLIC_SITE_URL` and any optional AI tooling secrets without committing private keys.
- Replace placeholder imagery and copy across `src/content/**` prior to go-live, documenting outstanding tasks for the next agent.
