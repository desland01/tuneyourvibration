# AI Performance Speed-Max Playbook

Codex-only runbook to push Christina’s site to peak performance without human coding. Follow the vibe loop (Claude specs → Codex implementation → QA agent validation) while keeping every action logged for audit.

## Loop Roles
- **Orchestrator AI** anchors the session, pastes prompts, tracks status, and syncs artifacts across docs.
- **Claude Code** drafts specs, risk notes, and measurement requirements before any implementation sprint.
- **Codex CLI** executes code edits, command runs, and documentation updates inside the repo.
- **QA Agent** (Lighthouse/PageSpeed automation) verifies outcomes, captures screenshots, and summarizes deltas.

## Activation Checklist
- [ ] Load Node 22 with `nvm use 22`.
- [ ] Review `docs/design/system.md` and `docs/SEO-PLAYBOOK.md` to align with live design + SEO rules.
- [ ] Activate prompts from `docs/seo/codex-vibe-seo-plan.json` (Phase cues, keyword focus, link targets).
- [ ] Confirm `.env` mirrors `.env.example` with `PUBLIC_SITE_URL` set for sitemap/meta hints.
- [ ] Ensure transcripts + metric diffs get appended to `docs/research/README.md` and `docs/seo/experiments.md`.
- [ ] Snapshot current `npm run check`, `npm run build`, and Lighthouse (mobile + desktop) metrics before edits.

## Master Kickoff Prompt (Orchestrator → Claude)
```text
You are Claude Code writing the performance spec for Christina’s Astro site.
- Parse docs/performance-speed-max-playbook.md, docs/design/system.md, docs/SEO-PLAYBOOK.md, and docs/seo/codex-vibe-seo-plan.json.
- Produce a sprint plan for Phase {{currentPhase}} with success metrics, implementation constraints, and required telemetry.
- List repo touchpoints, commands, and data that Codex CLI must gather.
- Flag open questions or blockers that would need human approval so Orchestrator can escalate early.
Return a Markdown brief with checkboxes synced to this playbook.
```

## Phase Guide

### Phase 1 — Baseline Telemetry
Focus: Capture authoritative metrics and establish data targets for LCP, CLS, TBT, and hydration counts.

**Claude Spec Prompt**
```text
Use repo hooks to define the measurement protocol for Phase 1.
- Commands: npm run check, npm run build -- --verbose, npm run postbuild (optional), Lighthouse CI (mobile/desktop).
- Specify where to log outputs in docs/research/README.md and docs/seo/experiments.md.
- Provide parsing tips for dist/stats output so Codex can extract bundle sizes and hydration islands.
Deliver checklist + risk notes.
```

**Codex Execution Prompt**
```text
Follow the Phase 1 spec.
- Run mandated commands and capture key numbers.
- Summarize bundle weights, island counts, and notable warnings.
- Update docs/research/README.md and docs/seo/experiments.md with data + interpretations.
- Attach raw logs under docs/research/<date>-performance-baseline.md if not already present.
```

**Checklist**
- [ ] `npm run check`
- [ ] `npm run build -- --verbose`
- [ ] Optional `npm run postbuild`
- [ ] Lighthouse mobile + desktop snapshots (record JSON/HTML in docs/assets if available)
- [ ] Log metrics + screenshots into research + SEO experiment docs

**Tracking Hooks**
- Append metrics (FCP, LCP, CLS, TBT, total JS/CSS) into `docs/seo/experiments.md`.
- Store command excerpts and interpretation bullet points inside `docs/research/README.md`.

### Phase 2 — Hydration Diet & Bundle Audit
Focus: Minimize Astro islands, shrink JS payloads, and prioritize SSR.

**Claude Spec Prompt**
```text
Inspect dist output and src/components usage to target hydration reductions.
- Identify largest client directives, heavy libraries (tooltips, Swiper, Radix), and candidate islands to SSR or lazy load.
- Outline code moves: convert components to Astro server modules, gate tooltips per route, split Swiper bundle.
- Enumerate success metrics (total JS < target MB, hydration count Δ).
```

**Codex Execution Prompt**
```text
Implement Phase 2 changes exactly per spec.
- Refactor specified components, replacing client:load with client:idle/visible or SSR alternatives.
- Remove unused imports/dependencies and update package.json if required.
- Re-run npm run build -- --verbose to confirm reductions.
- Document deltas and remaining risks in docs/seo/experiments.md.
```

**Checklist**
- [x] Refactor heavy islands (tooltips, Swiper, Radix ScrollArea)
- [x] Convert eligible components to Astro server-rendered
- [x] Rebuild and capture new bundle stats
- [x] Update documentation with before/after numbers

**Tracking Hooks**
- Maintain a delta table (Component, Before kB, After kB, Notes) in `docs/seo/experiments.md`.
- Capture code tape summaries for changed components in handoff log.

### Phase 3 — Asset Optimization
Focus: Serve responsive images, lean fonts, and scoped media per route.

**Claude Spec Prompt**
```text
Audit hero/service imagery, font usage, and static assets.
- Identify images lacking responsive Astro <Image> usage or AVIF/WebP fallbacks.
- Determine font subsets and preload strategy adjustments.
- Recommend media relocations into src/assets for pipeline processing.
```

**Codex Execution Prompt**
```text
Follow asset directives.
- Replace static <img> with Astro <Image> where possible, defining srcset/sizes.
- Generate WebP/AVIF assets or configure Astro to emit them.
- Verify font subsets and preload tags, pruning unused faces.
- Rebuild and note LCP and transfer size changes.
```

**Checklist**
- [ ] Optimize heroes/service imagery
- [ ] Validate font preload + subset list
- [ ] Confirm asset pipeline outputs (dist/assets)
- [ ] Log asset diffs and lighthouse LCP updates

**Tracking Hooks**
- Add asset optimization summary to `docs/seo/experiments.md` with links to updated files.
- Store before/after image weights in a table within `docs/research/README.md`.

### Phase 4 — Styling Surgery
Focus: Trim unused CSS, enforce SCSS layering, and extract critical styles for LCP surfaces.

**Claude Spec Prompt**
```text
Plan reductions for SCSS/Tailwind output.
- Verify which tokens/utilities are unused.
- Schedule tree-shaking or PurgeCSS adjustments.
- Highlight critical CSS candidates for homepage + key landers.
```

**Codex Execution Prompt**
```text
Apply styling optimizations.
- Update Tailwind config or SCSS to remove unused layers.
- Generate critical CSS snippets and inline or preload them per spec.
- Ensure design tokens remain compliant with docs/design/system.md.
- Rebuild and capture CSS bundle size diffs.
```

**Checklist**
- [ ] Adjust Tailwind purge rules / token usage
- [ ] Extract critical CSS for LCP pages
- [ ] Verify glass/tokens alignment
- [ ] Document CSS size deltas

**Tracking Hooks**
- Record CSS bundle sizes in experiments log.
- Note any utility removals and compensating styles for future agents.

### Phase 5 — Script Offloading
Focus: Defer non-critical scripts, lazy-load third-party integrations, and split analytics.

**Claude Spec Prompt**
```text
Map all scripts and third-party resources.
- Recommend deferral strategies (client:idle, requestIdleCallback, IntersectionObserver gating).
- Identify unused dependencies for removal.
- Define post-load sequencing for analytics pixels.
```

**Codex Execution Prompt**
```text
Implement deferrals and removals.
- Adjust Astro islands or inline scripts to load on interaction/visibility.
- Remove redundant packages from package.json + lockfile.
- Confirm analytics still fire via QA agent trace.
```

**Checklist**
- [ ] Defer internal scripts appropriately
- [ ] Lazy-load analytics/third-party widgets
- [ ] Remove unused dependencies
- [ ] Run build + smoke tests

**Tracking Hooks**
- Log script waterfall snapshots in experiments doc.
- Capture any follow-up TODOs for monitoring.

### Phase 6 — Caching & Delivery
Focus: Configure Cloudflare Worker caching, pre-render popular routes, and ensure sitemap hints align.

**Claude Spec Prompt**
```text
Draft CDN caching strategy.
- Update wrangler.jsonc (name, compatibility_date) if needed.
- Define cache headers, stale-while-revalidate policies, and pre-render targets.
- Align sitemap generation with PUBLIC_SITE_URL for CDN hints.
```

**Codex Execution Prompt**
```text
Apply caching directives.
- Modify wrangler.jsonc and relevant server files.
- Insert header middleware or Astro config updates for caching.
- Run npm run build + npm run preview smoke tests.
- Document cache strategy and verification steps.
```

**Checklist**
- [ ] Update Cloudflare worker config
- [ ] Set cache-control + SWR headers
- [ ] Pre-render hot routes
- [ ] Validate sitemap/meta outputs

**Tracking Hooks**
- Record cache policies and preview test notes in research log.
- Add deployment checklist items to `FOUNDATION-EXECUTION-CHECKLIST.md` if touched.

### Phase 7 — Monitoring & Regression Guard
Focus: Establish continual monitoring and guardrails to prevent regressions.

**Claude Spec Prompt**
```text
Design monitoring loop.
- Define automated Lighthouse schedule, thresholds, and alerting.
- Specify telemetry storage (CI artifacts, docs updates).
- Outline regression tests (npm run check, targeted component smoke tests).
```

**Codex Execution Prompt**
```text
Build monitoring automations.
- Add scripts/workflows for recurring Lighthouse runs or WebPageTest triggers.
- Ensure npm run check and npm run postbuild are wired into CI.
- Update documentation with troubleshooting + escalation paths.
```

**Checklist**
- [ ] Add automated Lighthouse/WebPageTest runs
- [ ] Wire npm run check/postbuild into CI or cron
- [ ] Document alert thresholds + owners
- [ ] Finalize handoff summary

**Tracking Hooks**
- Append monitoring schedule to `docs/seo/experiments.md`.
- Store alert routing + contact info in `docs/research/README.md`.

## Progress Tracker Template
| Phase | Subtask | AI Owner | Status | Artifacts | Notes |
| --- | --- | --- | --- | --- | --- |
| 1 | Baseline telemetry collected | Codex | ☐ | logs + metrics |  |
| 2 | Bundle diet implemented | Codex | ☐ | diff links |  |
| 3 | Assets optimized | Codex | ☐ | image weights |  |
| 4 | CSS refined | Codex | ☐ | CSS stats |  |
| 5 | Scripts deferred | Codex | ☐ | waterfall |  |
| 6 | Caching tuned | Codex | ☐ | config refs |  |
| 7 | Monitoring live | Codex | ☐ | CI links |  |

Update the table at the end of each sprint cycle and mirror status changes in `docs/research/README.md` and `docs/seo/experiments.md`.

## Logging & QA Rituals
- Capture every command output summary (not full logs) inside the research README with timestamps.
- Store raw artifacts (Lighthouse JSON, screenshots, WebPageTest exports) under `docs/research/artifacts/<date>/`.
- Note manual QA gaps or blocked tasks as TODOs and tag the next agent.
- When a phase completes, add a brief retrospective bullet list (Wins, Risks, Next Pulse) in both research and SEO experiment docs.

## Handoff Template
```text
Phase: <number + name>
Date: <ISO timestamp>
Wins:
- ...
Risks:
- ...
Next AI Actions:
1. ...
2. ...
Artifacts:
- docs/research/... 
- docs/seo/experiments.md section <heading>
```

Use this template to close each session so the next AI can pick up without human guidance.
