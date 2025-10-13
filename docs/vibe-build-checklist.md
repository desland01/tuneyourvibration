# Christina Vibe Build - AI Implementation Checklist

> Objective: rebuild the public site with conversion-optimized Home, Services, and Virtual Sound Healing pages without linking to any legacy domains. Follow each step sequentially; update the checkbox state once the action is fully complete and merged into the codebase.

## Phase 1 - Discovery & Alignment
- [x] Review repository structure, component hierarchy, and current content collections to confirm Astro 5 + Astrogon template conventions.  
  _Completed by: scanning `src/pages`, `src/components`, `src/content`, and shared utilities._
- [x] Capture stakeholder positioning + service catalog from `Business-info/README.md` and translate into SEO keyword pillars (e.g., "virtual sound healing," "chakra balancing," "intuitive mentorship," "Kathmandu energy healing").  
  _Deliverable: keyword list stored as frontmatter comments or inline documentation for copywriting reference. Logged in `docs/seo-keyword-pillars.md`._
- [x] Define primary conversion event (schedule session) and secondary micro-conversions (join waitlist, WhatsApp outreach) that do **not** depend on the legacy booking portal.  
  _Primary: drive visitors to `/virtual-sound-healing` to book. Secondary: WhatsApp outreach (US + Nepal) and exploration of `/services` for offer education._
- [x] Standardize local dev server port to `4327` and update documentation/scripts so all agents share the same baseline environment.
- [ ] Source approved Christina photography from the `createyrmagic` Instagram archive or brand drive for authentic storytelling.  
  _Instaloader attempt blocked by Instagram (401). Requires authenticated asset delivery or manual upload by team._

## Phase 2 - Content Modeling & Data Sources
- [x] Extend `src/content.config.ts` with a `services` collection. Include fields for `title`, `slug`, `summary`, `description`, `delivery`, `duration`, `price`, `currency`, `benefits` (string array), `idealClients` (string array), and `cta` metadata (label, destination type).  
  _Reminder: update `src/types/index.d.ts` with corresponding `ServicesEntry` type. Implemented in `src/content.config.ts` + `src/types/index.d.ts` along with search inclusion._
- [x] Author structured Markdown entries under `src/content/services/` for:
  - `in-person-magic.md` - Nepal 90-minute flagship session.
  - `in-person-awakening.md` - Nepal deep energy healing.
  - `in-person-rejuvenation.md` - Nepal restorative session.
  - `virtual-sound-healing.md` - dedicated long-form page content (include FAQ data via frontmatter).
  - `virtual-aura-cleansing.md`, `virtual-reiki-reading.md`, `virtual-mentorship.md` - remote offerings.
  - `group-sound-bath.md` - group experiences with customizable rates.
- [x] Refactor `src/content/home/-index.md` to support expanded hero, trust signals, services highlight cards, client journey steps, and SEO-ready intro paragraphs. Store structural data (arrays of objects) rather than hard-coded prose in the component.
- [x] Create optional testimonial data source (either inline within home content or a new `testimonials` collection) for future proof.
  _Deliverable: inline testimonials array stored in `src/content/home/-index.md`; fallback sourcing handled via `@lib/googleReviews`._
- [x] Curate mystical photographic set (Nepal background, Christina portraits, ceremonial close-ups) and register within content schemas for reuse across hero, services, and gallery sections.
- [x] Convert @uploads imagery to `.webp`, stage approved Christina portraits under `src/assets/uploads`, and update content references to use the curated set only.
- [x] Define asset aliases `@christina`, `@trekking`, and `@website-block` in `tsconfig.json` for consistent image sourcing across pages.

## Phase 3 - Component & Layout Work
- [x] Build `src/components/services/Card.astro` to render individual service metadata with CTA handling (internal link vs. WhatsApp `wa.me` vs. mailto).  
  _Style guidance: reuse existing glassmorphism tokens; add utility classes in `src/styles/utilities.scss` only if necessary._
- [x] Build `src/components/services/CollectionLayout.astro` to group services by delivery type (In-Person Kathmandu, Virtual Worldwide, Group Experiences). Accept props for section headings + copy pulled from content.
- [x] Create `src/components/services/EntryLayout.astro` for detail pages, supporting hero banner, overview CTA, benefits list, session flow, FAQs, and integration tips.
- [x] Overhaul `src/components/home/EntryLayout.astro` to compose new sections:
  1. Emotion-driven hero with dual CTAs (primary: `/services`, secondary: WhatsApp direct message).
  2. "What shifts in one session" bullet trio referencing chakra balancing, aura clearing, nervous system reset.
  3. Services spotlight referencing three key offers using `services` content.
  4. Client journey timeline (Prepare -> Receive -> Integrate).
  5. Testimonials or social proof placeholder (link to forthcoming case studies).
  6. Closing CTA banner reinforcing virtual sound healing and WhatsApp outreach.
- [ ] Add a reusable `Callout.astro` component (if needed) for inline reframes or disclaimers across pages.
- [x] Align hero, benefit tiles, gallery, and testimonial blocks to symmetrical grid layouts across viewports.
- [x] Update `src/components/services/EntryLayout.astro` and `Card.astro` with imagery-first compositions and centered typographic rhythm for consistent section geometry.

- [x] Create `src/pages/services/index.astro` that fetches all `services` entries, groups them by `delivery`, and renders via `CollectionLayout`. Ensure meta title/description emphasize "Christina | Energy Healing & Sound Therapy Services."
- [x] Add dynamic route `src/pages/services/[slug].astro` to render individual service entries using `EntryLayout`. Guarantee canonical URLs and structured data (JSON-LD) for service schema within the layout.
- [x] Create top-level `src/pages/virtual-sound-healing.astro` that fetches the `virtual-sound-healing` service entry and augments it with extended educational content (benefits, science, preparation checklist, integration practices, FAQ).  
  _Note: this page must be a standalone conversion hub with inline CTAs that do not link to the legacy booking portal._
- [ ] Wire any page-specific SCSS under `src/styles/` if global tokens are insufficient; import via BaseLayout once validated.
- [ ] Update sitemap/meta via frontmatter to reinforce target keywords (`Virtual Sound Healing Sessions`, `Chakra Balancing Online`, etc.).

## Phase 5 - Navigation, Footer & CTAs
- [x] Update `menu` array in `src/components/base/Header.astro` to surface primary routes in this order: Home, Services, Virtual Sound Healing, About, Search (optional). Remove placeholders like Docs/Recipes unless reinstated later.
- [x] Replace footer attribution in `src/components/base/Footer.astro` with `(c) Christina 2025 - Tune Your Vibration`. Update social handles to Christina's active channels or temporarily remove unused icons.
- [x] Ensure all CTAs reference internal routes or messaging apps (`wa.me`, `mailto`); explicitly avoid links to https://app.10to8.com/ or any legacy domains.
- [ ] Consider adding a floating WhatsApp or booking button component for persistent conversion access (optional, document if skipped).

## Phase 6 - SEO, Accessibility & Analytics
- [x] Inject JSON-LD `Service` schema into service detail pages and `FAQPage` schema for Virtual Sound Healing if frontmatter includes Q&A.
- [ ] Validate headings hierarchy (single `h1` per page, descriptive `h2` sections). Add alt text to all imagery pulled into new components.
- [x] Update `siteTitle`, `siteDescription`, and `siteAuthor` constants in `src/components/base/BaseLayout.astro` with Christina-specific messaging.
- [ ] Refresh `public/robots.txt` and `public/site.webmanifest` if branding or URLs change; confirm `PUBLIC_SITE_URL` usage.
- [ ] Add optional analytics or tracking placeholders (e.g., commented script tags) to support future instrumentation.

## Phase 7 - QA & Deployment Readiness
- [x] Run `npm run lint`/`npm run check` to verify Astro diagnostics pass.  
  _Result: `npm run check` succeeded with existing hints (unused imports from legacy components, inline script notices in BaseLayout/Service schema)._
- [x] Execute `npm run build` and confirm no schema or type errors.
- [ ] Manually verify responsive layouts (mobile, tablet, desktop) for the three key pages; log notes in `SMOKE-TEST-CHECKLIST.md`.
- [ ] Document completions and outstanding follow-ups inside `FOUNDATION-EXECUTION-CHECKLIST.md` per repo guidelines.
- [ ] Prepare summary of changes + SEO target keywords for PR reviewers (store draft in repo or note in AGENTS.md if relevant).

_Keep this checklist evergreen. Each time a task completes, flip the corresponding checkbox to `[x]`, briefly note the commit or PR reference if applicable, and synchronize any dependent instructions._
