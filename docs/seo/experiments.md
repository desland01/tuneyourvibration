# SEO Experiments Log

- 2025-10-11 — CTR experiment placeholder: Titles/meta refinements for `/virtual-sound-healing` post Phase 1. Status: pending; document metrics once test launches.
- 2025-10-11 — Content launch: Replaced legacy philosophy placeholders with five intent-led pillars (`/blog/nervous-system-reset-sound-therapy`, `/blog/sound-healing-for-founders`, `/blog/sound-healing-for-empaths`, `/blog/distance-reiki-anxiety`, `/blog/distance-reiki-sleep`). Objective: capture keywords 21–25 from the SEO roadmap, feed Pagefind, and drive internal linking to virtual + in-person services. Status: published; monitor organic impressions and service-page click-through after indexation.
- 2025-10-12 — Performance tune: swapped legacy font stack for Inter/Cormorant with `font-display: swap`, added critical font preloads, deferred index-card swiper hydration to `client:visible`, and idled the global intersection observer. Result: `npm run build && npm run postbuild` success; bundle footprint now `dist 35 MB` / `dist/_astro 17 MB`. Pending: capture Lighthouse mobile scores next in-person QA window _(completed same day; see below)_.
- 2025-10-12 — Lighthouse (mobile preset, local dev build) baseline: `/` Perf 87 (FCP 3.1 s, LCP 3.1 s, SI 3.8 s, TBT 90 ms, TTI 24.9 s\*), `/sound-healing-nepal/learn` Perf 99 (FCP 1.6 s, LCP 1.6 s, SI 1.9 s, TBT 70 ms, TTI 24.1 s\*). \*High TTI reflects dev server hydration; re-run against preview build or production deploy to validate.
- 2025-10-12 — Lighthouse (mobile preset, static build served via `http-server`) follow-up: `/` Perf 94 (FCP 2.4 s, LCP 2.4 s, SI 2.5 s, TTI 2.4 s, TBT 0 ms), `/sound-healing-nepal/learn` Perf 90 (FCP 2.9 s, LCP 2.9 s, SI 2.9 s, TTI 2.9 s, TBT 0 ms). Confirms TTI issue was dev-only; homepage still candidate for hero media tuning to shave FCP/LCP below 2 s.
- 2025-10-12 — Hydration diet: replaced the React Swiper carousel with a lightweight Astro + vanilla JS slider and swapped Radix ScrollArea for a CSS-only wrapper. Removed `swiper`, `@radix-ui/react-scroll-area`, `clsx`, and `tailwind-merge` dependencies; `npm install && npm run build` now reports 110 transformed modules (down from 139) and eliminates the 80 kB `Swiper.*.js` chunk. Lighthouse (mobile/perf preset via `http-server`): `/` Perf 88 (FCP/LCP 3.0 s, SI 3.0 s, TBT 0 ms), `/sound-healing-nepal/learn` Perf 89 (FCP/LCP 3.0 s, SI 3.0 s, TBT 0 ms). Remaining largest island: `Tooltips` 36 kB (lazy-loaded per page).
- 2025-10-12 — Performance speed-max initiative launched. AI playbook online (`docs/performance-speed-max-playbook.md`); awaiting Claude Phase 1 telemetry spec before recording new metrics.
- 2025-10-12 — Phase 1 baseline logged via static server (`npx serve`). Home mobile Perf 96 (FCP 1.43 s, LCP 2.71 s, CLS 0, TBT 0 ms, TTI 2.71 s); home desktop Perf 99 (FCP 0.42 s, LCP 0.93 s, CLS 0, TBT 0 ms, TTI 0.93 s). `/sound-healing-nepal/learn` mobile Perf 96 (FCP 1.41 s, LCP 2.63 s, CLS 0, TBT 0 ms, TTI 2.64 s); desktop Perf 99 (FCP 0.42 s, LCP 0.86 s, CLS 0, TBT 0 ms, TTI 0.87 s). Build footprint `dist 38 MB` / `_astro 19 MB`; heaviest JS chunks `client.Bz692-Ao.js` 133 kB, `marked.esm` 39 kB, `Tooltips` 36 kB. Artifacts: `docs/research/artifacts/2025-10-12-phase-1/`.
- 2025-10-12 — Phase 2 bundle diet planning initiated (`docs/research/2025-10-12-phase-2-spec.md`). Goal: reduce hydrated JS ≥25 %, push `client` chunk <90 kB, gate Tooltips/Search islands, and eliminate runtime markdown parsing where redundant. External WebPageTest runs deferred until monitoring phase to prioritize refactors.
- 2025-10-12 — Phase 2 bundle diet shipped. Removed `astro-tooltips` and `fuse.js`, rewrote tabs shortcode to slot-aware Astro rendering, and swapped markdown/plaintext conversion in search for a regex-based helper. Hydrated JS total now 169 kB (↓26 %), search bundle 18 kB → 2.9 kB, and `Tooltips`/`marked` chunks eliminated entirely. `client` runtime remains 136 kB raw but 44 KB gzip because view transitions stay enabled; flag for Phase 5/7 follow-up. Lighthouse (static `npx serve`) unchanged: `/` Perf 96/99 (mobile/desktop), `/sound-healing-nepal/learn` Perf 96/99.
- 2025-10-12 — Phase 3 asset optimization planning logged (`docs/research/2025-10-12-phase-3-spec.md`): add responsive `sizes` metadata, compress background art, migrate key imagery into Astro pipelines, and review font preloads before implementation.
- 2025-10-12 — Phase 3 asset tune: responsive `sizes` added to all `<Image>` usages, AVIF/JPEG variants introduced for background imagery (103 kB AVIF + 88 kB JPG replacing 192 kB WebP + 1.4 MB JPG), and Cormorant 500 now preloaded alongside hero fetch priorities. Desktop Lighthouse remains 100 (home LCP 0.77 s / learn LCP 0.73 s). Mobile scores dipped to 87 (home LCP 3.94 s, learn LCP 3.91 s) with the hero H1 as the LCP element—likely font hydration despite preloads. TODO: test disabling `prefetchAll` and evaluate forcing bold weights or additional font subsets to recover the target ≤2.5 s LCP.
- 2025-10-12 — Prefetch dial-down (`defaultStrategy: "hover"`) to limit eager link preloading. Desktop metrics unchanged; mobile Lighthouse still 88 (home LCP 3.92 s, learn LCP 3.91 s) with H1 tagged as LCP, so remaining gains need font/layout tweaks (consider `font-display: optional` for Cormorant or mobile-friendly type fallback) before Phase 4 CSS surgery.
- 2025-10-12 — Mobile LCP experiment: introduced a `hero-heading` utility that keeps Cormorant on desktop but swaps to Inter ≤640 px and tightened the glow blur for small screens. Goal: cut hero H1 paint cost and bring mobile LCP under 2.5 s. Pending: rerun Lighthouse on static build and log results in `docs/research/artifacts/<next-date>/`.
- 2025-10-12 — Mobile LCP validation: Lighthouse (perf preset, emulated mobile, `npx serve dist`) now reports `/` Perf 98 (FCP 1.69 s, LCP 1.69 s, CLS 0, TBT 0 ms) and `/sound-healing-nepal/learn` Perf 98 (FCP 1.67 s, LCP 1.67 s, CLS 0, TBT 0 ms). JSON saved to `docs/research/artifacts/2025-10-12-phase-3-follow-up/`.

**Phase 3 media deltas**

| Asset | Before | After | Notes |
| --- | --- | --- | --- |
| `/images/nepal-night.jpg` | 1.4 MB JPG | 88 kB JPG | AVIF + WebP preferred via `image-set` |
| `/images/nepal-day.webp` | 192 kB WebP only | 103 kB AVIF, 192 kB WebP, 88 kB JPG | Added multi-format fallbacks |
| Hero/service `<Image>` | Fixed 960 px downloads | `sizes` tuned per breakpoint | Reduces mobile payloads by ~40–55 % |

**Phase 2 bundle deltas**

| Chunk | Before (kB) | After (kB) | Notes |
| --- | --- | --- | --- |
| `client.*` | 133 | 136 (44 KB gzip) | View transitions + React runtime still bundled; requires deeper refactor later |
| `Tooltips.*` | 36 | _removed_ | Dropped dynamic import + dependency |
| `marked.esm.*` | 39 | _removed_ | Tabs/search now render without runtime markdown parsing |
| `Search.*` | 18 | 2.9 | Replaced Fuse.js with lightweight term filter |

## Performance Speed-Max Progress

| Phase | Subtask | AI Owner | Status | Artifacts | Notes |
| --- | --- | --- | --- | --- | --- |
| 1 | Baseline telemetry collected | Codex | ☑ | docs/research/artifacts/2025-10-12-phase-1 | Metrics logged; plan Phase 2 |
| 2 | Bundle diet implemented | Codex | ☑ | docs/research/artifacts/2025-10-12-phase-2 | `Tooltips`/`marked` removed; search island trimmed |
| 3 | Assets optimized | Codex | ☑ | docs/research/artifacts/2025-10-12-phase-3 | Responsive imagery + background AVIFs live; mobile LCP regression under review |
| 4 | CSS refined | Codex | ☐ |  |  |
| 5 | Scripts deferred | Codex | ☐ |  |  |
| 6 | Caching tuned | Codex | ☐ |  |  |
| 7 | Monitoring live | Codex | ☐ |  |  |
