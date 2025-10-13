# Research Log

- 2025-10-11 — Perplexity (sonar-reasoning-pro) — Query: “What are the most effective 2025 SEO strategies for ranking holistic wellness websites globally? Focus on Google AI Overviews readiness, E-E-A-T enhancements, short-form video, entity building, and programmatic internal linking.”  
  Artifact: `docs/research/2025-10-11-perplexity-seo-strategies.json`
- 2025-10-11 — Applied roadmap Phase 2 prompts: launched five long-form blog pillars covering nervous system resets, founders, empaths, and distance reiki (anxiety + sleep) to feed entity signals for Christina’s services.
- 2025-10-11 — Firecrawl MCP — Scraped https://www.tuneyourvibration.com/ homepage to refresh business profile and imagery inventory.  
  Artifact: `Business-info/tuneyourvibration-homepage-firecrawl.md`
- 2025-10-12 — Build telemetry: captured post-optimization bundle stats (`dist 35 MB`, `_astro 17 MB`) after font/script trims to inform future Core Web Vitals tuning.
- 2025-10-12 — JS island audit: identified largest hydrated bundles (`Tooltips` ~36 kB, `Swiper` ~81 kB, `ScrollArea` ~43 kB, `marked` ~40 kB). Recommendation backlog: gate tooltips per-page, explore lighter slider, and investigate replacing Radix scroll area with CSS overflow for read-only panes.
- 2025-10-12 — Implemented lazy tooltips (dynamic import tied to `tooltips` prop) and confirmed static Lighthouse scores (Perf 94 / 90). Follow-up: replaced Swiper with an Astro carousel + inline script, swapped Radix ScrollArea for CSS overflow, and removed the associated packages; top hydrating island now `Tooltips` (~36 kB) pending per-page gating.
- 2025-10-12 — Performance speed-max playbook published (`docs/performance-speed-max-playbook.md`). Phase 1 kickoff prompt queued for Claude; progress tracker mirrored here and in `docs/seo/experiments.md`.
- 2025-10-12 — Phase 1 telemetry kickoff prompt staged for Claude (`docs/research/2025-10-12-phase-1-claude-brief.md`). Await Claude spec before executing commands.
- 2025-10-12 — Phase 1 telemetry spec drafted (`docs/research/2025-10-12-phase-1-spec.md`) covering commands, success metrics, artifacts, and risks.
- 2025-10-12 — Phase 1 baseline captured. `npm run check` passed (12 hints around unused props + inline scripts); `npm run build -- --verbose` + Pagefind succeeded with output sizes `dist 38 MB` / `_astro 19 MB`. Top JS chunks: `client.Bz692-Ao.js` 133 kB, `marked.esm` 39 kB, `Tooltips` 36 kB. Lighthouse (static `npx serve`) results — home: mobile Perf 96 (FCP 1.43 s, LCP 2.71 s, CLS 0, TBT 0 ms, TTI 2.71 s); desktop Perf 99 (FCP 0.42 s, LCP 0.93 s, CLS 0, TBT 0 ms, TTI 0.93 s). `/sound-healing-nepal/learn`: mobile Perf 96 (FCP 1.41 s, LCP 2.63 s, CLS 0, TBT 0 ms, TTI 2.64 s); desktop Perf 99 (FCP 0.42 s, LCP 0.86 s, CLS 0, TBT 0 ms, TTI 0.87 s). Artifacts stored under `docs/research/artifacts/2025-10-12-phase-1/`. Note: `nvm` unavailable locally; used system Node 22.18.0.
- 2025-10-12 — Phase 2 bundle diet spec drafted (`docs/research/2025-10-12-phase-2-spec.md`) targeting tooltip/search islands, runtime markdown parsing, and client chunk reductions. Additional external telemetry (WebPageTest) deferred to Phase 7 monitoring to keep focus on local JS refactors.
- 2025-10-12 — Phase 2 bundle diet delivered. Removed `astro-tooltips` + `fuse.js`, rewired tabs shortcode to slot-aware rendering, and replaced search markdown parsing with a lightweight regex normalizer. Hydrated JS total now 169 kB (↓26 % vs 226 kB baseline); `Tooltips` (36 kB) and `marked.esm` (39 kB) chunks eliminated; search bundle slimmed 18 kB → 2.9 kB; `client` runtime unchanged at 136 kB raw / 44 KB gzip due to active view transitions. Lighthouse parity held (home + learn mobile Perf 96 / desktop 99). Artifacts: `docs/research/artifacts/2025-10-12-phase-2/`. TODO: evaluate transitioning off `ClientRouter` or migrating legacy React shortcodes to Astro to push the runtime under 90 kB raw.
- 2025-10-12 — Phase 3 asset optimization spec drafted (`docs/research/2025-10-12-phase-3-spec.md`) outlining responsive image targets, background compression, and font preload audit tasks.
- 2025-10-12 — Phase 3 asset tune executed. Added responsive `sizes` + `decoding="async"` across hero/cards, introduced `fetchpriority="high"` for primary heroes, generated AVIF/JPEG fallbacks for background art (`nepal-*.avif` 103 kB, JPG 88 kB, replacing 192 kB WebP-only + 1.4 MB JPG), and preloaded `cormorant-500`. Build stats unchanged (`dist 38 MB` / `_astro 19 MB`, hydrated JS 169 kB). Lighthouse desktop remains 100 (LCP ≈0.77 s); mobile now reports Perf 87 (FCP 1.41 s, LCP 3.94 s) with the hero H1 flagged as LCP—likely font hydration despite preload. Follow-up: investigate swapping to static gradient background on mobile and reassess `prefetchAll`/font weights to claw back the 150 ms LCP goal.
- 2025-10-12 — Prefetch strategy adjusted (`astro.config.mjs` now uses `defaultStrategy: "hover"`). Post-change Lighthouse: desktop still 100 / LCP ~0.80 s; mobile remains Perf 88 with H1 LCP ≈3.9 s. Suggest next: deeper font strategy (optional display or mobile-specific serif fallback) or Phase 4 CSS trim to reduce style/layout cost (~152 ms main-thread).

- 2025-10-12 — Mobile hero typography experiment: added a `hero-heading` utility so desktop keeps Cormorant while ≤640 px falls back to Inter and reduced the glow blur for small screens. Aim: cut hero H1 paint cost to recover ≤2.5 s mobile LCP. Pending: rerun Lighthouse on static build; capture metrics + notes for `docs/research/artifacts/<next-date>-phase-3-follow-up/`.
- 2025-10-12 — Validation: `npm run check` and `npm run build` both succeed post-typography tweak (warnings unchanged: CommonJS config + unused iterator vars). Ready for next mobile Lighthouse pass once static build is served locally.
- 2025-10-12 — Lighthouse validation (perf preset, emulated mobile via `npx serve dist`): `/` Perf 98 (FCP 1.69 s, LCP 1.69 s, TBT 0 ms, CLS 0); `/sound-healing-nepal/learn` Perf 98 (FCP 1.67 s, LCP 1.67 s, TBT 0 ms, CLS 0). Artifacts: `docs/research/artifacts/2025-10-12-phase-3-follow-up/home-mobile.json` and `docs/research/artifacts/2025-10-12-phase-3-follow-up/learn-mobile.json`.

## Performance Speed-Max Progress

| Phase | Subtask | AI Owner | Status | Artifacts | Notes |
| --- | --- | --- | --- | --- | --- |
| 1 | Baseline telemetry collected | Codex | ☑ | docs/research/artifacts/2025-10-12-phase-1 | Ready for Phase 2 planning |
| 2 | Bundle diet implemented | Codex | ☑ | docs/research/artifacts/2025-10-12-phase-2 | `Tooltips`/`marked` purged; search island slimmed |
| 3 | Assets optimized | Codex | ☑ | docs/research/artifacts/2025-10-12-phase-3 | Responsive imagery + AVIF backgrounds landed; monitor mobile LCP regression |
| 4 | CSS refined | Codex | ☐ |  |  |
| 5 | Scripts deferred | Codex | ☐ |  |  |
| 6 | Caching tuned | Codex | ☐ |  |  |
| 7 | Monitoring live | Codex | ☐ |  |  |
