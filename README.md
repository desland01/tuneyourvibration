# Tune Vibration Energy Healing Website

Actual public website build for Tune Vibration Energy Healing, rebuilt from the live source site at `https://www.tuneyourvibration.com/`.

## Status

- Source intake: complete via gstack `/browse`
- Keyword plan: complete in `research/actual-website-page-plan.md`
- Tune Vibration media assets: downloaded into `public/brand-assets/tune-vibration/`
- Active homepage: `/`
- Active booking route: `/book`
- Active service routes: `/energy-healing`, `/sound-healing`, `/reiki-healing`, `/chakra-aura-clearing`, `/intuitive-readings`
- Active Nepal routes: `/nepal-retreats`, `/kathmandu-valley-tours`, `/nepal-treks`
- Trust/support routes: `/about-christina`, `/credentials`, `/testimonials`, `/after-care`
- Legacy static proposal material: preserved under `site/` as inactive reference

## Preview

Run the Next.js app from the repo root:

```bash
cd /Users/thebeast/TYV
npm install
npm run dev
```

Then open `http://127.0.0.1:3000/`.

## Build Checks

```bash
npm run lint
npm run build
```

`npm run lint` is currently a strict TypeScript check because this migrated app does not have an ESLint ruleset yet.

## Guardrails

- Build the actual public website, not a sales proposal.
- Use only source-backed business facts, services, photos, videos, and business details.
- Keep medical and healing copy careful: do not promise cures or guaranteed outcomes.
- Phone CTA labels must read exactly `Call Now`.
- Keep hero sections on auto-varying height, not rigid `100vh`, `100svh`, or `100dvh`.
- Keep `design-systems/` untouched if it exists.
- Before publishing, confirm the Vercel project root and project link. This checkout was previously linked to a Prince Bay Vercel project.
