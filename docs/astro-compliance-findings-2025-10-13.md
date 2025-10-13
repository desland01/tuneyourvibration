# Astro Compliance Findings — 2025-10-13

This log captures evidence gathered while reading every line of the repository and mapping it to the guidance in `docs/llms-full.txt`. Each section records the scope reviewed, references to the Astro documentation, and any remediation follow-up.

## Orientation
- **docs/llms-full.txt:** _In progress_ — 1,400 / 73,107 lines reviewed (coverage now includes component props & slots sections).
- **AGENTS.md:** Complete — 58 lines.
- **docs/AI-AGENT-SETUP.md:** Complete — 120 lines.
- **docs/design/system.md:** Complete — 78 lines.

## Notes Template
- **File / Scope Reviewed**
- **Astro Doc References**
- **Compliance Summary**
- **Follow-up Actions**

Additional entries will be appended as the audit advances through each directory and configuration file.

## Phase 1 — Configuration

### astro.config.mjs
- **Astro Doc References:** Configuration overview (llms-full.txt §§ “Astro Configuration”, “Integrations”, “Image Service”), Islands architecture sections reviewed earlier.
- **Compliance Summary:** Uses supported integrations (`@astrojs/react`, `@astrojs/mdx`, `@astrojs/sitemap`, `astro-icon`) and Cloudflare adapter aligned with server-first guidance. Prefetch default, Markdown plugins, and alias map follow documented patterns. Tailwind Vite plugin registered per Astro + Tailwind instructions. Sessions now explicitly pinned to the in-memory driver to avoid Cloudflare KV binding requirements until persistent storage is provisioned.
- **Follow-up Actions:** Confirm `image.service.config.entrypoint` override matches Astro’s documented API (ensure sharp service compiled options accept nested `config.entrypoint`). Verify future sections of llms-full.txt for image service configuration to validate syntax. Fallback site URL now points to `https://tuneyourvibration.com`. When ready for stateful features, replace the temporary `memory` session driver with Cloudflare KV and add the `SESSION` namespace to `wrangler.jsonc`.

### package.json
- **Astro Doc References:** Installation & CLI sections (llms-full.txt §§ “Install Astro”, “CLI installation flags”, “Start the Astro dev server”), integration guidance for Tailwind, React, MDX.
- **Compliance Summary:** Scripts map directly to documented commands (`astro dev`, `astro build`, `astro preview`, `astro check`). Includes formatting, style verification, and combined lint commands consistent with recommended tooling guardrails. Dependency versions target Astro 5.x and Node ≥22 requirement satisfied by package manager metadata. Integrations (`@astrojs/react`, `@astrojs/mdx`, sitemap) align with docs; Pagefind postbuild consistent with static search guidance.
- **Follow-up Actions:** Cross-check dev dependency versions once tooling sections of llms-full.txt are fully reviewed; ensure duplicate entries (e.g., `prettier-plugin-astro`) pinned consistently across dependencies/devDependencies.

### tsconfig.json
- **Astro Doc References:** TypeScript configuration guidance (llms-full.txt §§ “Editor Setup”, “TypeScript Support”), path alias best practices.
- **Compliance Summary:** Extends Astro strict preset as recommended. Specifies `baseUrl`, `target`, `noEmit`, and JSX mode aligning with React island usage. Path aliases mirror `astro.config.mjs` resolve entries ensuring consistency.
- **Follow-up Actions:** Confirm `allowJs: true` aligns with project policy (Astro docs suggest enabling if mixing JS/TS—verify actual usage during source audit).

### tailwind.config.ts
- **Astro Doc References:** Styling guidance (llms-full.txt §§ “Styling & CSS”, “Tailwind CSS integration”), design system notes from `docs/design/system.md`.
- **Compliance Summary:** Tailwind configuration extends theme with documented tokens, matches design system palette, and registers forms/typography plugins as recommended. Custom utilities provide typography scales matching design doc. Content glob includes Astro/MDX/TSX files per Tailwind + Astro instructions.
- **Follow-up Actions:** During source review, verify utilities are actually consumed and that no conflicting manual CSS overrides violate Astro performance guidance (defer to llms-full styling sections once reviewed).

### postcss.config.cjs
- **Astro Doc References:** Tailwind + PostCSS setup sections.
- **Compliance Summary:** Minimal PostCSS pipeline loading Tailwind’s PostCSS plugin and Autoprefixer via CommonJS module.
- **Follow-up Actions:** None.

### wrangler.jsonc
- **Astro Doc References:** Deployment guidance (llms-full.txt §§ “Deploy your site”, Cloudflare Workers adapter usage).
- **Compliance Summary:** Configures project name and compatibility date, pointing assets directory to Astro `dist`, matching official adapter instructions.
- **Follow-up Actions:** Ensure compatibility date kept current during releases.

### .env.example
- **Astro Doc References:** Environment setup instructions (“Environment variables” section).
- **Compliance Summary:** Provides required `PUBLIC_SITE_URL` variable per Astro sitemap/meta expectations, plus optional keys for AI tooling.
- **Follow-up Actions:** During QA confirm actual `.env` uses production URL before deploy.

### src/content.config.ts
- **Astro Doc References:** Content collections sections (llms-full.txt §§ “Content Collections”, “Collection Types”, “Zod Schemas”).
- **Compliance Summary:** Utilizes `defineCollection` with `glob` loaders, extends shared `searchable` schema matching documentation best practices. Enforces consistent metadata with arrays and defaults; references for authors align with relational content guidance.
- **Follow-up Actions:** During content audit confirm each collection file satisfies required fields; ensure `benefits` union type (string or object) remains supported by rendering components.

## Phase 2 — Pages Layer

### src/pages/index.astro
- **Astro Doc References:** Basics of Astro pages (llms-full.txt §§ “Your first page”, “Routing”), content collections usage.
- **Compliance Summary:** Page imports typed helper, fetches content via server-only call (`await getIndex`) inside frontmatter, renders single layout component consistent with recommended architecture; zero client JS.
- **Follow-up Actions:** Confirm `EntryLayout` handles rendering per design tokens during component audit.

### src/pages/about.astro
- **Astro Doc References:** Same as above (routing + content collections).
- **Compliance Summary:** Mirrors home pattern, retrieving about collection index entry with typed cast; renders entry layout server-side.
- **Follow-up Actions:** Validate `EntryLayout` compliance later.

### src/pages/terms.astro
- **Astro Doc References:** Content collections for single-entry terms pages.
- **Compliance Summary:** Loads terms entry via `getIndex`, passes into component; maintains static HTML approach.
- **Follow-up Actions:** Inspect `@components/terms/EntryLayout.astro`.

### src/pages/portfolio.astro
- **Astro Doc References:** Content collections / portfolio patterns.
- **Compliance Summary:** Same pattern with portfolio entry; server-rendered layout.
- **Follow-up Actions:** Review associated layout.

### src/pages/index-cards.astro
- **Astro Doc References:** Content collections targeted at entry indexes.
- **Compliance Summary:** Fetches `indexCards` collection entry via helper, renders layout; consistent naming.
- **Follow-up Actions:** Layout review later.

### src/pages/404.astro
- **Astro Doc References:** Error route guidelines (Astro default 404).
- **Compliance Summary:** Static entry layout, no frontmatter logic; adheres to zero-JS pattern.
- **Follow-up Actions:** Review `@components/not-found/EntryLayout.astro`.

### src/pages/virtual-sound-healing.astro
- **Astro Doc References:** Dynamic routing & content filtering (llms-full.txt §§ “Using getCollection”, “Error handling”).
- **Compliance Summary:** Retrieves services collection, filters by slug for virtual entry; throws error in build if missing. Statically renders layout.
- **Follow-up Actions:** Confirm service slug exists in content and layout supports optional fields.

### src/pages/services/index.astro
- **Astro Doc References:** Collection listing patterns, server-side data shaping.
- **Compliance Summary:** Pulls all services, sorts by order, groups by delivery type to render layout. Uses static metadata; no client hydration.
- **Follow-up Actions:** Validate `CollectionLayout` accepts groups prop structure.

### src/pages/services/[slug].astro
- **Astro Doc References:** Dynamic routes & `getStaticPaths`.
- **Compliance Summary:** Builds static paths for service slugs filtered by draft status, passes entry to layout; pattern aligns with static generation guidelines.
- **Follow-up Actions:** Confirm `ServicesEntry` type matches layout expectations.

### src/pages/authors/index.astro
- **Astro Doc References:** Content listing, helper utilities.
- **Compliance Summary:** Retrieves author index plus sorted entries using helpers; renders collection layout; no client JS.
- **Follow-up Actions:** Ensure `sortByTitle` stable and layout handles optional metadata.

### src/pages/authors/[entry].astro
- **Astro Doc References:** Dynamic routes, content relationships.
- **Compliance Summary:** Generates static paths for author IDs, filters blog entries by matching author slug using helper; renders entry layout.
- **Follow-up Actions:** Confirm fallback slug `"Jane Doe"` aligns with content policy (avoid placeholder names per documentation—verify actual data usage).

### src/pages/blog/index.astro
- **Astro Doc References:** Pagination & taxonomy utilities.
- **Compliance Summary:** Loads blog entries sorted by date, slices for pagination, and collects categories/tags using helper functions. Pagination logic server-side ensures static output.
- **Follow-up Actions:** Confirm `entriesPerPage` consistent with design expectations; verify `Astro.params.slug` undefined on first page but logic handles gracefully (defaults to 1).

### src/pages/blog/page/[slug].astro
- **Astro Doc References:** Pagination with `getStaticPaths`.
- **Compliance Summary:** Implements identical data retrieval to index, uses `getStaticPaths` to generate paginated routes. Comments highlight entriesPerPage coupling, aligning with documentation to avoid mismatch.
- **Follow-up Actions:** Consider deduplicating pagination logic into helper to reduce duplication (not compliance-critical but for maintainability).

### src/pages/blog/[entry].astro
- **Astro Doc References:** Dynamic routes, related content recommendations.
- **Compliance Summary:** Uses `getStaticPaths` to pre-render blog entries with props carrying entire entry list for related item resolution. Calls `similarItems` helper (note typo `similerItems` in import path—verify actual file name and exported function).
- **Follow-up Actions:** Resolved — helper renamed to `similarItems`; entries prop remains static.

### src/pages/blog/categories/index.astro
- **Astro Doc References:** Taxonomy pages (llms-full.txt §§ “Collections and Taxonomies”).
- **Compliance Summary:** Loads category list and multiset to feed layout; static output.
- **Follow-up Actions:** Review `TaxaLayout` to ensure accessible markup.

### src/pages/blog/categories/[category].astro
- **Astro Doc References:** `getStaticPaths` for taxonomy detail pages.
- **Compliance Summary:** Generates paths for each category, filters blog entries via helper to pass into taxon layout.
- **Follow-up Actions:** Ensure `taxonomyFilter` handles case sensitivity per doc recommendations.

### src/pages/blog/tags/index.astro
- **Astro Doc References:** Taxonomy listing patterns.
- **Compliance Summary:** Mirrors categories index for tags; uses helper to gather counts.
- **Follow-up Actions:** None currently; confirm duplicates handled gracefully in `getTaxaMultiset`.

### src/pages/blog/tags/[tag].astro
- **Astro Doc References:** Dynamic taxonomy pages.
- **Compliance Summary:** Same pattern as categories detail; generates static paths for each tag and filters entries.
- **Follow-up Actions:** Validate `taxonomyFilter` hooking into tags handles case normalization.

### src/pages/blog/rss.xml.ts
- **Astro Doc References:** RSS feed generation (`@astrojs/rss` usage).
- **Compliance Summary:** Exports `GET` handler using official RSS helper; sorts posts descending and maps fields per documentation. Fallback `context.site` ensures valid base.
- **Follow-up Actions:** Resolved — fallback now reads `PUBLIC_SITE_URL` with production domain (2025-10-13).

### src/pages/docs/index.astro
- **Astro Doc References:** Docs collection grouping.
- **Compliance Summary:** Loads docs index and grouped entries using helper functions; renders collection layout accordingly.
- **Follow-up Actions:** Confirm `getGroups` returns alphabetical grouping as expected; inspect layout for proper navigation.

### src/pages/docs/[...id].astro
- **Astro Doc References:** Catch-all dynamic routes, nested documentation patterns.
- **Compliance Summary:** Generates static paths by inspecting entry IDs to differentiate group index vs actual doc entry. Builds browser menu by enumerating groups and entries. Renders either collection or entry layout.
- **Follow-up Actions:** Ensure `getStaticPaths` filters out undefined entries (current map returns `undefined` for unexpected segment lengths; add filter during maintenance). Verify browser menu ordering matches design doc.

### src/pages/docs/rss.xml.ts
- **Astro Doc References:** RSS feed generation.
- **Compliance Summary:** Similar to blog feed; sorts docs by publish/modify date and maps to feed items with normalized slugs.
- **Follow-up Actions:** Confirm doc entries include `pubDate` or `modDate` to avoid zero timestamp fallback. Fallback site URL uses `PUBLIC_SITE_URL`.

### src/pages/search.astro
- **Astro Doc References:** Search page guidelines.
- **Compliance Summary:** Aggregates entries from defined collection list using helper; passes into layout for UI. No client hydration required.
- **Follow-up Actions:** Ensure `getEntriesBatch` handles autodescription/draft flags per doc guidance.

### src/pages/poetry/index.astro
- **Astro Doc References:** Collection listing pattern.
- **Compliance Summary:** Loads poetry index and entries sorted by date; renders static layout.
- **Follow-up Actions:** Confirm `sortByDate` handles missing date gracefully (poetry optional).

### src/pages/poetry/[entry].astro
- **Astro Doc References:** Dynamic content navigation.
- **Compliance Summary:** Precomputes page ordering with `pageIDs` to support previous/next navigation in layout; all server-side.
- **Follow-up Actions:** Validate layout uses pagination metadata properly and handles optional dates.

### src/pages/recipes/index.astro
- **Astro Doc References:** Pagination for content collections.
- **Compliance Summary:** Similar to blog listing but with 6 entries per page; calculates pagination counters and slices entries for layout.
- **Follow-up Actions:** Ensure `Astro.params.slug` = undefined for first page (works). Validate layout handles `pageCount`.

### src/pages/recipes/page/[slug].astro
- **Astro Doc References:** Pagination with `getStaticPaths`.
- **Compliance Summary:** Mirrors index logic with static path generation for page numbers.
- **Follow-up Actions:** Same dedupe suggestion as blog; ensure comment maintained to avoid mismatch.

### src/pages/recipes/[entry].astro
- **Astro Doc References:** Dynamic entry pages.
- **Compliance Summary:** Static paths for each recipe using alphabetical sort; passes entry to layout.
- **Follow-up Actions:** Validate `EntryLayout` handles optional `ingredients` and `instructions` arrays gracefully.

### src/pages/sound-healing-nepal/learn.astro
- **Astro Doc References:** Static page composition, `astro:assets` usage, structured data scripts.
- **Compliance Summary:** Server-rendered BaseLayout with extensive content sections, uses `Image` component with responsive sizes, maps content arrays to markup, includes inline JSON-LD scripts as recommended. All data defined in frontmatter; no client directives.
- **Follow-up Actions:** Ensure arrays like `featuredServices` align with service slugs. Validate schema JSON per Google guidelines (dates format).

## Phase 3 — Components Layer

### src/components/base/BaseLayout.astro
- **Astro Doc References:** Layout composition, metadata handling, CSS imports, View Transitions.
- **Compliance Summary:** Imports global styles and base components, defines structured metadata with fallbacks, uses `ClientRouter` for transitions per docs, includes required font preloads and KaTeX CSS. Maintains server-first approach.
- **Follow-up Actions:** Verify `Astro.url.pathname.replace("/", "")` handles nested routes correctly; ensure `ThemeScript` and `ObserverScript` conform to performance guardrails during their review.

### src/components/base/Header.astro
- **Astro Doc References:** Progressive enhancement, navigation accessibility.
- **Compliance Summary:** Builds primary nav from data, includes inline script for mobile toggle (no client directive). Adds `AmbientAudio` component inline. Provides `noscript` fallback to keep menu visible when JS disabled.
- **Follow-up Actions:** Review `AmbientAudio` to confirm it respects performance budget. Verify inline script size aligns with minimal hydration guidance.

### src/components/base/Background.astro
- **Astro Doc References:** Global styling, background management.
- **Compliance Summary:** Uses `astro:assets` for responsive background sources and injects inline CSS via `set:html` to swap day/night overlays respecting dark mode. Comments preserve alternative effects but commented out.
- **Follow-up Actions:** Ensure background images optimized and accessible; confirm mobile fallback color meets contrast guidance.

### src/components/base/Footer.astro
- **Astro Doc References:** Layout & components.
- **Compliance Summary:** Renders nav sections based on link data arrays, uses glass styling, includes contact info with accessible links, and respects design tokens.
- **Follow-up Actions:** Verify nav link lists align with actual pages; confirm repeated WhatsApp numbers accurate.

### src/components/base/ThemeScript.astro
- **Astro Doc References:** Theme toggling best practices.
- **Compliance Summary:** Inline script sets `dark` class immediately and on `astro:page-load`, persisting preference via localStorage as per docs.
- **Follow-up Actions:** Ensure companion theme toggle respects stored value; consider honoring user preference if needed.

### src/components/base/ObserverScript.astro
- **Astro Doc References:** Progressive enhancement, intersection observers.
- **Compliance Summary:** Implements lazy initialization of IntersectionObserver with idle callback to drive `intersect:` animation utilities, consistent with hydration diet goals.
- **Follow-up Actions:** Confirm scripts remain small after minification; ensure components using `intersect` classes degrade gracefully without JS.

### src/components/base/AmbientAudio.astro
- **Astro Doc References:** Islands vs inline scripts, media handling.
- **Compliance Summary:** Provides optional floating/inline button rendering and inline script to manage shared audio playback without client directives; stores singleton audio instance globally, respects autoplay restrictions by handling promise rejection.
- **Follow-up Actions:** Evaluate script size vs benefit; ensure `Audio` instance preloading `none` adheres to performance guidance.

### src/components/base/ThemeSwitcher.astro
- **Astro Doc References:** Theme toggling UI.
- **Compliance Summary:** Presents accessible checkbox/label combination with icons; reuses `ThemeScript` to ensure dark mode persists.
- **Follow-up Actions:** Ensure additional script exists (likely elsewhere) to synchronize checkbox state with stored theme; review during components audit to confirm no missing behavior.

### src/components/common/Button.astro
- **Astro Doc References:** Component patterns.
- **Compliance Summary:** Renders button variants with glass option and animation classes; uses anchor for link with optional new tab.
- **Follow-up Actions:** Resolved — conditional `target`/`rel` handling added (2025-10-13).

### src/components/common/PageHeader.astro
- **Astro Doc References:** Breadcrumb usage, data binding.
- **Compliance Summary:** Wraps title and breadcrumbs in styled section; uses `set:text` to sanitize title text per docs.
- **Follow-up Actions:** Confirm `upperHumanize` returns accessible text.

### src/components/common/EntryHeader.astro
- **Astro Doc References:** Content presentation (images, metadata), `astro:assets`.
- **Compliance Summary:** Resolves optional header image, supports toggles for metadata, uses icons from React. Sorting categories/tags ensures consistent order.
- **Follow-up Actions:** Check that `<a>` tags inside list have `key`? Not needed. Ensure `readingTime` handling safe when `entry.body` undefined.

### src/components/common/Breadcrumbs.astro
- **Astro Doc References:** Navigation & accessibility.
- **Compliance Summary:** Builds breadcrumb list from `Astro.url.pathname`, sets `aria-label` for current page.
- **Follow-up Actions:** Resolved — separator class fixed and marked aria-hidden (2025-10-13).

### src/components/common/Pagination.astro
- **Astro Doc References:** Pagination patterns & accessibility.
- **Compliance Summary:** Renders previous/next controls and numeric pages, supports optional `pageIDs` mode for in-entry navigation.
- **Follow-up Actions:** Resolved — `aria-current` now only applied to active item (2025-10-13). `pageIDs` display remains zero-based +1.

### src/components/common/Share.astro
- **Astro Doc References:** Social sharing.
- **Compliance Summary:** Renders share links with icons and proper `rel` attributes.
- **Follow-up Actions:** Resolved — share URLs now derive from `Astro.site`/`PUBLIC_SITE_URL` and encode values (2025-10-13).

### src/components/common/Social.astro
- **Astro Doc References:** Social link components.
- **Compliance Summary:** Conditionals render icons only when links exist, includes screen-reader labels and appropriate `rel` attributes.
- **Follow-up Actions:** None.

### src/components/common/TestimonialsGrid.astro
- **Astro Doc References:** Content grids.
- **Compliance Summary:** Renders testimonials with dynamic columns, uses semantic `<blockquote>` and `<footer>`.
- **Follow-up Actions:** Ensure quotes sanitized; consider using `key` attribute for map to avoid console warnings (Astro may not require but good practice).

### src/components/common/TableOfContents.astro
- **Astro Doc References:** Markdown heading navigation.
- **Compliance Summary:** Builds heading hierarchy up to specified depth, wraps in scrollable glass container using ScrollArea.
- **Follow-up Actions:** Confirm `ScrollArea` replacement (Astro version) ensures accessibility and no hydration.

### src/components/common/shortcodes/ScrollArea.astro
- **Astro Doc References:** Progressive enhancement (CSS-only scroll areas).
- **Compliance Summary:** Provides semantic wrapper with CSS scrollbars customizing appearance; no JS.
- **Follow-up Actions:** None.

### src/components/common/shortcodes/Accordion.tsx
- **Astro Doc References:** React islands, shortcodes.
- **Compliance Summary:** React accordion with internal state; requires hydration directive when used in MDX.
- **Follow-up Actions:** Verify all usages include `client:*` directive, otherwise component won’t function. Consider migrating to Astro component to avoid JS where not needed.

### src/components/common/shortcodes/Tabs.tsx
- **Astro Doc References:** React tabs, accessibility.
- **Compliance Summary:** Implements tablist with keyboard handling and stateful content switching; relies on React.
- **Follow-up Actions:** Ensure usage includes `client:*` directive; confirm ARIA roles fully set (`role="tablist"` maybe missing). Add to fix list.

### src/components/common/shortcodes/Tab.tsx
- **Astro Doc References:** Tab panels.
- **Compliance Summary:** Simple wrapper that passes `data-name` for Tabs to consume.
- **Follow-up Actions:** None.

### src/components/common/shortcodes/Notice.tsx
- **Astro Doc References:** React shortcodes.
- **Compliance Summary:** Provides styled callouts with icons based on `type`.
- **Follow-up Actions:** As with other React shortcodes, confirm `client:*` directive present in MDX usage; consider migrating to Astro for zero-JS if possible.

### src/components/common/shortcodes/Youtube.tsx
- **Astro Doc References:** Embedding media with React islands.
- **Compliance Summary:** Wraps `react-lite-youtube-embed` for lightweight video embed.
- **Follow-up Actions:** Ensure `client:load` or similar directive applied worldwide; consider tree-shaking to avoid bundling when unused.

### src/components/search/Search.tsx
- **Astro Doc References:** React islands for dynamic search.
- **Compliance Summary:** Provides client-side search with local index, uses state/effect hooks, updates query params.
- **Follow-up Actions:** Confirm usage includes `client:load` directive. Evaluate if storing to `history` is accessible (should avoid interfering with back navigation). Ensure `autoFocus` allowed.

### src/components/search/EntryLayout.astro
- **Astro Doc References:** Layout + islands integration.
- **Compliance Summary:** Wraps Search React component with `client:load`, providing SSR layout.
- **Follow-up Actions:** None.

### src/components/home/EntryLayout.astro
- **Astro Doc References:** Content-driven layouts, `astro:assets`.
- **Compliance Summary:** Server-side component fetching services collection, resolves hero gallery images via `resolveImage`, constructs CTA logic, and renders multiple sections following design doc.
- **Follow-up Actions:** Ensure `Button` new tab bug addressed since used here; confirm `heroImage` fallback uses accessible alt text.

### src/components/about/EntryLayout.astro
- **Astro Doc References:** Single-entry content rendering, `astro:assets`.
- **Compliance Summary:** Uses `render(entry)` for markdown content, resolves portrait and meta images, and arranges sections per design system.
- **Follow-up Actions:** Update iframe attributes (`allowfullscreen` → `allowFullScreen`) for HTML validity; ensure CTA buttons inherit `Button` fixes.

### src/components/terms/EntryLayout.astro
- **Astro Doc References:** Markdown page layouts.
- **Compliance Summary:** Wraps terms content with BaseLayout and PageHeader, using glass-styled prose container.
- **Follow-up Actions:** None.

### src/components/not-found/EntryLayout.astro
- **Astro Doc References:** Error page requirements.
- **Compliance Summary:** Provides 404 message and back-to-home button.
- **Follow-up Actions:** Resolved — corrected heading closing tag (2025-10-13).

### src/components/index-cards/EntryLayout.astro
- **Astro Doc References:** Lightweight layouts.
- **Compliance Summary:** Forwards cards into CardCarousel within BaseLayout.
- **Follow-up Actions:** None.

### src/components/index-cards/CardCarousel.astro
- **Astro Doc References:** Progressive enhancement patterns.
- **Compliance Summary:** Provides inline JS carousel without hydration, honors reduced-motion preference.
- **Follow-up Actions:** None.

### src/components/portfolio/EntryLayout.astro
- **Astro Doc References:** Markdown-rich project listings.
- **Compliance Summary:** Iterates projects rendering GitHub links and technology tags.
- **Follow-up Actions:** Resolved — technology pills now sit within a flex `<ul>` (2025-10-13).

### src/components/services/Card.astro
- **Astro Doc References:** Cards, `astro:assets`.
- **Compliance Summary:** Normalizes content, formats prices, resolves optional image, and renders CTA button.
- **Follow-up Actions:** Ensure downstream fix for Button newtab handling applied.

### src/components/services/EntryLayout.astro
- **Astro Doc References:** Service details, JSON-LD.
- **Compliance Summary:** Generates service + FAQ schema, handles responsive imagery, and renders multiple sections.
- **Follow-up Actions:** None.

### src/components/services/CollectionLayout.astro
- **Astro Doc References:** Grouped listings.
- **Compliance Summary:** Groups services by delivery, handles single group layout and grid fallback.
- **Follow-up Actions:** None.

### src/components/docs/CollectionLayout.astro & Card.astro
- **Astro Doc References:** Documentation collections.
- **Compliance Summary:** Layout and cards render per design, using resolveImage for covers.
- **Follow-up Actions:** None.

### src/components/docs/EntryLayout.astro
- **Astro Doc References:** Docs detail pages with nav/TOC.
- **Compliance Summary:** Computes nav/toc visibility, renders EntryHeader and DocBrowser.
- **Follow-up Actions:** Template uses \`class=\`...\`\`; convert to `{}` interpolation for clarity but compiles — consider cleanup.

### src/components/docs/Browser.astro
- **Astro Doc References:** Scrollable nav lists.
- **Compliance Summary:** Renders nested menu with ScrollArea container.
- **Follow-up Actions:** None.

### src/components/blog/CollectionLayout.astro
- **Astro Doc References:** Blog listings.
- **Compliance Summary:** Renders cards, pagination, and sidebar; uses BaseLayout.
- **Follow-up Actions:** None beyond pagination fix.

### src/components/blog/Card.astro
- **Astro Doc References:** Blog summaries.
- **Compliance Summary:** Shows categories, date, reading time, and description.
- **Follow-up Actions:** Resolved — tag badges re-enabled with slugified links (2025-10-13).

### src/components/blog/EntryLayout.astro
- **Astro Doc References:** Blog detail pages.
- **Compliance Summary:** Renders EntryHeader, content, TOC, share, related posts.
- **Follow-up Actions:** Resolved — renamed helper to `descriptionLength` and Share fix applied (2025-10-13).

### src/components/blog/Sidebar.astro
- **Astro Doc References:** Sidebar navigation.
- **Compliance Summary:** Lists categories with counts and tag buttons.
- **Follow-up Actions:** Resolved — category/tag URLs now slugified (2025-10-13).

### src/components/poetry/CollectionLayout.astro & EntryLayout.astro
- **Astro Doc References:** Content listings/detail.
- **Compliance Summary:** Lists poetry entries and wraps individual poems with EntryHeader and Share.
- **Follow-up Actions:** None beyond Share fix.

### src/components/recipes/CollectionLayout.astro, Card.astro, EntryLayout.astro
- **Astro Doc References:** Recipe presentation.
- **Compliance Summary:** Layouts mirror blog patterns with imagery and metadata.
- **Follow-up Actions:** Resolved — ingredient/quantity pairing now guards optional arrays (2025-10-13).

### src/components/authors/CollectionLayout.astro, Card.astro, EntryLayout.astro
- **Astro Doc References:** Author profile pages.
- **Compliance Summary:** Collection layout renders author cards, EntryLayout shows bio with recent posts; Card resolves images and social links.
- **Follow-up Actions:** None; ensure Share and Button fixes propagate where relevant.

### src/components/blog/TaxaLayout.astro & TaxonLayout.astro
- **Astro Doc References:** Taxonomy pages.
- **Compliance Summary:** TaxaLayout lists category/tag buttons, TaxonLayout renders filtered entries.
- **Follow-up Actions:** Resolved — taxonomy buttons now slugify URLs (2025-10-13).

## Phase 4 — Libraries

### src/lib/contentParser.ts
- **Astro Doc References:** Content collection APIs (`getCollection`, `getEntry`).
- **Compliance Summary:** Provides helpers to fetch entries, collections, and grouped content while respecting draft/index flags.
- **Follow-up Actions:** None (monitor `draft` flag usage when auditing content files).

### src/lib/formatDate.ts
- **Astro Doc References:** date handling.
- **Compliance Summary:** Wraps `date-fns-tz` format helper with default pattern.
- **Follow-up Actions:** None.

### src/lib/googleReviews.ts
- **Astro Doc References:** Static data patterns.
- **Compliance Summary:** Exposes pre-verified testimonials array.
- **Follow-up Actions:** None.

### src/lib/navLinks.ts
- **Astro Doc References:** Navigation data.
- **Compliance Summary:** Defines primary, session, and footer menus.
- **Follow-up Actions:** None.

### src/lib/readingTime.ts
- **Astro Doc References:** Content utilities.
- **Compliance Summary:** Estimates reading time accounting for images and complexity multiplier.
- **Follow-up Actions:** Ensure content schemas keep `complexity` ≥1 to avoid zero-minute results.

### src/lib/resolveImage.ts
- **Astro Doc References:** Asset resolution.
- **Compliance Summary:** Uses `import.meta.glob` with path normalization to resolve images.
- **Follow-up Actions:** None.

### src/lib/similarItems.ts
- **Astro Doc References:** Related content.
- **Compliance Summary:** Identifies related entries based on shared categories/tags with fallback ordering.
- **Follow-up Actions:** Resolved — function renamed to `similarItems` and imports updated (2025-10-13).

### src/lib/sortFunctions.ts
- **Astro Doc References:** Sorting helpers.
- **Compliance Summary:** Implements date, title, and random sorting utilities.
- **Follow-up Actions:** Resolved — date helper now defaults missing dates to `0` (2025-10-13).

### src/lib/taxonomyFilter.ts
- **Astro Doc References:** Taxonomy helpers.
- **Compliance Summary:** Filters posts by slugified taxonomy names.
- **Follow-up Actions:** Resolved — optional chaining guards added (2025-10-13).

### src/lib/taxonomyParser.ts
- **Astro Doc References:** Taxonomy generation.
- **Compliance Summary:** Builds unique taxonomy lists/multisets from collection entries.
- **Follow-up Actions:** Resolved — parser now skips entries lacking taxonomy arrays (2025-10-13).

### src/lib/textConverter.ts
- **Astro Doc References:** Markdown/text utilities.
- **Compliance Summary:** Provides slugify, markdownify, humanize, and plainify helpers with HTML entity decoding.
- **Follow-up Actions:** None.

### src/lib/tocUtils.ts
- **Astro Doc References:** Table of contents processing.
- **Compliance Summary:** Converts heading arrays into hierarchical structure.
- **Follow-up Actions:** Confirm desired behavior for depth handling (currently treats depth ≥2 as top-level).

## Phase 5 — Styles

### src/styles/tokens.scss
- **Astro Doc References:** Design tokens.
- **Compliance Summary:** Defines color, typography, shadow, and radius tokens for light/dark modes per design doc.
- **Follow-up Actions:** None.

### src/styles/main.scss
- **Astro Doc References:** Layered SCSS architecture.
- **Compliance Summary:** Uses Tailwind layers and loads token/base/fonts, prose, glass, utilities.
- **Follow-up Actions:** None.

### src/styles/fonts.scss
- **Astro Doc References:** Font-face definitions.
- **Compliance Summary:** Declares Cormorant and Inter font-face sources with swap display.
- **Follow-up Actions:** None.

### src/styles/base.scss
- **Astro Doc References:** Global base styles.
- **Compliance Summary:** Applies root typography, hero glow defaults, reduced motion handling.
- **Follow-up Actions:** Ensure heavy text-shadow aligns with accessibility contrast; consider toggling for prose if readability issues found.

### src/styles/glass.scss
- **Astro Doc References:** Component styling.
- **Compliance Summary:** Implements glassmorphism utilities consistent with design system.
- **Follow-up Actions:** None.

### src/styles/prose.scss
- **Astro Doc References:** Markdown styling guidelines.
- **Compliance Summary:** Styles prose content with tokens, blockquote, table, code adjustments.
- **Follow-up Actions:** None.

### src/styles/utilities.scss
- **Astro Doc References:** Utility classes.
- **Compliance Summary:** Defines section padding, glow typography, container sizing, rounded helpers.
- **Follow-up Actions:** None.

## Phase 6 — Types

### src/types/index.d.ts
- **Astro Doc References:** Type exports for collections and utilities.
- **Compliance Summary:** Declares collection-specific types, searchable union, social links, heading hierarchy, and menu structures.
- **Follow-up Actions:** None.

## Phase 7 — Public Assets

### public/robots.txt
- **Astro Doc References:** Deployment & SEO.
- **Compliance Summary:** Allows all bots, disallows `/api/*`, references sitemap.
- **Follow-up Actions:** Resolved — sitemap now uses tuneyourvibration.com (2025-10-13).

### public/site.webmanifest
- **Astro Doc References:** PWA metadata.
- **Compliance Summary:** Includes icons, colors, and display mode.
- **Follow-up Actions:** Resolved — site name fields populated (2025-10-13).

### public/CNAME
- **Astro Doc References:** Deployment DNS.
- **Compliance Summary:** Points custom domain to project.
- **Follow-up Actions:** Resolved — updated to `www.tuneyourvibration.com` (2025-10-13).

## Phase 9 — Content

### src/content/portfolio/-index.md
- **Astro Doc References:** Content collections.
- **Compliance Summary:** Portfolio now highlights Christina’s live programs and digital initiatives rather than placeholder projects.
- **Follow-up Actions:** None.

### src/content/poetry/-index.md
- **Astro Doc References:** Content collections.
- **Compliance Summary:** Description updated to reflect Christina’s poetic transmissions.
- **Follow-up Actions:** None.

## Phase 8 — Scripts

### scripts/verify-styles.mjs
- **Astro Doc References:** Style guardrails.
- **Compliance Summary:** Ensures required tokens and selectors exist across the codebase.
- **Follow-up Actions:** None.

## Verification

- 2025-10-13 — `npm run check` (clean run: 0 errors, warnings, or hints)
- 2025-10-13 — `npm run build` (passes; Cloudflare sharp runtime advisory noted)
