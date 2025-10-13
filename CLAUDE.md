# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

- Mandatory pre-flight: read `docs/llms-full.txt` at the start of each session so the latest Astro developer guidance is in context before modifying plans or code.
- Remember: this is a vibe-code project with no human co-authors—every change is planned, written, and reviewed by AI agents alone.

## Development Commands

### Essential Commands
- `npm run dev` - Start local dev server at http://localhost:4327
- `npm run build` - Production build (includes Pagefind postbuild for search)
- `npm run preview` - Preview the production build locally
- `npm run check` - Run Astro diagnostics (type checking, config validation)
- `npm run format` - Format source with Prettier (includes Astro & Tailwind plugins)

### Quality Checks
- `npm run style:verify` - Verify required design tokens and class patterns exist
- `npm run lint:preflight` - Run both `check` and `style:verify` before PRs/handoffs

### Build Process
The build happens in two stages:
1. `npm run build` - Astro compiles to `dist/`
2. `postbuild` hook automatically runs Pagefind indexing for search functionality

## Architecture Overview

### Core Technology Stack
- **Framework**: Astro 5 with Cloudflare adapter
- **Styling**: Tailwind CSS v4 + custom SCSS layer system (glass morphism design)
- **Interactive Components**: React 18 islands for client-side interactivity
- **Content**: Type-safe Markdown/MDX collections with Zod schemas
- **Search**: Pagefind for static site search
- **Deployment**: Cloudflare Workers via Wrangler

### Path Aliases (configured in both astro.config.mjs and tsconfig.json)
```
@assets/*       -> ./src/assets/*
@components/*   -> ./src/components/*
@helpers/*      -> ./src/components/helpers/*
@lib/*          -> ./src/lib/*
@shortcodes/*   -> ./src/components/common/shortcodes/*
@types/*        -> ./src/types/*
@/*             -> ./src/*
@christina/*    -> ./src/assets/christina/*
@trekking/*     -> ./src/assets/trekking/*
@website-block/* -> ./src/assets/website-block/*
```
Always use these aliases when importing.

### Project Structure Philosophy

**Three-Layer Architecture:**

1. **Pages Layer** (`src/pages/`)
   - Handles routing (file structure = URL structure)
   - Queries content collections via helper functions
   - References exactly one layout component per page
   - Minimal logic - just data fetching and layout mounting

2. **Component Layer** (`src/components/`)
   - `base/` - BaseLayout wraps all pages; includes Header, Footer, Background
   - `common/` - Reusable components (Pagination, Breadcrumbs, Social, etc.)
   - `common/shortcodes/` - Components used directly in MDX (Accordion, Tabs, Notice, Youtube)
   - `[collection]/` - Collection-specific layouts (EntryLayout, CollectionLayout, Card)

3. **Content Layer** (`src/content/`)
   - Type-safe collections defined in `src/content.config.ts`
   - Each collection has its own schema (Zod validation)
   - Collections: about, authors, blog, docs, home, indexCards, poetry, portfolio, recipes, services, terms

### Content Collections System

**Key Architecture Points:**
- All collections defined in `src/content.config.ts` with strict Zod schemas
- Update `src/types/index.d.ts` when modifying schemas
- When updating searchable collections, also update `collectionList` in `src/pages/search.astro`
- Most collections use pattern `**\/[^_]*.{md,mdx}` to exclude files starting with `_`
- Single-entry collections (home, about, terms) use pattern `-index.{md,mdx}`

**Collection Patterns:**
- Blog/Docs/Recipes: Full-featured with authors, dates, categories, tags
- Services: Special schema with pricing, delivery types, CTAs, FAQ structure
- Poetry: Simple schema with optional author reference
- Home: Complex structured data (no markdown body) for landing page sections

### Styling System

**Multi-Layer Approach:**
1. **Tailwind Config** (`tailwind.config.ts`)
   - Custom color palette (txt-p, txt-s, bg-p, bg-s, bg-t, border, accent)
   - Darkmode variants (darkmode-txt-p, etc.)
   - Typography scale (h1 through h6 with responsive variants)
   - Font families: primary (Cormorant serif), secondary (Inter sans-serif)
   - Custom animations (intersect triggers, twinkle, cycleBg)
   - Bootstrap grid integration via plugin

2. **SCSS Tokens** (`src/styles/tokens.scss`)
   - CSS custom properties for colors, shadows, typography
   - Required tokens tracked by `scripts/verify-styles.mjs`
   - Must include: `--color-text-primary`, `--color-text-secondary`, `--color-bg-primary`, `--shadow-glass`, `--font-heading`

3. **Style Modules** (`src/styles/`)
   - `main.scss` - Base colors and variables
   - `glass.scss` - Glass morphism effects (backdrop-blur, transparency)
   - `fonts.scss` - Font-face declarations for local fonts in `public/fonts/`
   - `prose.scss` - Markdown/MDX content styling
   - `utilities.scss` - Custom utility classes
   - `base.scss` - Foundation styles

**Important Styling Notes:**
- Use `.font-primary` for headings, `.font-secondary` for body text
- Glass morphism is a core design pattern - use `bg-bg-t`, `bg-bg-s` for layered transparency
- Intersect variant (`intersect:animate-fadeUp`) triggers animations on scroll
- Always verify style changes with `npm run style:verify` before committing

### Auto-Import Shortcodes
Components in astro-auto-import (astro.config.mjs) are available in MDX without explicit imports:
- Button, Accordion, Notice, Youtube, Tabs, Tab

### Markdown/MDX Pipeline
- **Remark plugins**: remarkToc, remarkCollapse (collapses ToC), remarkMath
- **Rehype plugins**: rehypeKatex (math rendering)
- **Syntax highlighting**: Shiki with light-plus/dark-plus themes

## Key Workflows

### Adding a New Content Collection
1. Define schema in `src/content.config.ts`
2. Export in `collections` object
3. Create content files in `src/content/[collection]/`
4. Build components in `src/components/[collection]/`
   - `EntryLayout.astro` - Single entry page
   - `CollectionLayout.astro` - List/index page
   - `Card.astro` - Preview card component
5. Create routes in `src/pages/[collection]/`
6. Update searchable collections in `src/pages/search.astro` if needed
7. Update `src/types/index.d.ts` if adding new types

### Modifying the Design System
1. Update color tokens in `tailwind.config.ts` AND `src/styles/tokens.scss`
2. If changing core tokens, update `scripts/verify-styles.mjs`
3. Run `npm run style:verify` to confirm changes
4. Run `npm run format` to reorder Tailwind classes
5. Test both light and dark modes

### Environment Setup
1. Copy `.env.example` to `.env`
2. Set `PUBLIC_SITE_URL` (required for sitemap/RSS)
3. Optional: Add API keys for MCP servers (Gemini, Perplexity, Context7, etc.)

### Deployment to Cloudflare Workers
1. Update `wrangler.jsonc` (`name`, `compatibility_date`)
2. Run `npm run build` to generate `dist/`
3. Deploy with `npx wrangler deploy`
4. Cloudflare adapter configured for SSR/edge rendering

## Important Files

### Configuration
- `astro.config.mjs` - Astro config, integrations, path aliases, Cloudflare adapter
- `tailwind.config.ts` - Complete design system definition
- `tsconfig.json` - TypeScript config with path aliases
- `wrangler.jsonc` - Cloudflare Workers deployment settings

### Content & Schema
- `src/content.config.ts` - All collection schemas (source of truth for content structure)
- `src/types/index.d.ts` - TypeScript type definitions

### Base Components
- `src/components/base/BaseLayout.astro` - Root layout, wraps all pages, contains SEO meta
- `src/components/base/Header.astro` - Navigation menu (edit `menu` array for sitemap)
- `src/components/base/Footer.astro` - Site-wide footer with social links
- `src/components/base/Background.astro` - Animated background effects

### Style Verification
- `scripts/verify-styles.mjs` - Enforces required design tokens and class patterns

### Documentation
- `docs/project-structure.md` - Detailed folder structure explanation
- `docs/brand-customization.md` - Brand-specific customization checklist
- `docs/customization.md` - Upstream Astrogon customization guide
- `FOUNDATION-EXECUTION-CHECKLIST.md` - Brand approval tracking
- `SMOKE-TEST-CHECKLIST.md` - QA testing flows

## Common Patterns

### Querying Collections
```typescript
import { getCollection, getEntry } from 'astro:content';

// Get all published entries
const posts = await getCollection('blog', ({ data }) => !data.draft);

// Get single entry
const post = await getEntry('blog', 'my-post');

// Sort by date
const sorted = posts.sort((a, b) =>
  new Date(b.data.date) - new Date(a.data.date)
);
```

### Using Layout Components
```astro
---
import BaseLayout from '@components/base/BaseLayout.astro';
import EntryLayout from '@components/blog/EntryLayout.astro';

const entry = await getEntry('blog', Astro.params.slug);
---

<BaseLayout title={entry.data.title}>
  <EntryLayout entry={entry} />
</BaseLayout>
```

### MDX Shortcodes in Content
```mdx
<Accordion title="Click to expand">
  Content here
</Accordion>

<Notice type="info">
  Important note
</Notice>

<Youtube id="dQw4w9WgXcQ" />
```

## Debugging & Testing

### Common Issues
- **Build failures**: Run `npm run check` first to catch type errors
- **Style conflicts**: Run `npm run style:verify` to ensure required tokens exist
- **Search not working**: Ensure `npm run postbuild` ran after build
- **Path alias errors**: Verify paths match in both `astro.config.mjs` and `tsconfig.json`

### Development Tips
- Use `npm run dev` for hot reload during development
- Check browser console for React hydration errors
- Verify MDX frontmatter matches collection schema
- Test dark mode with ThemeSwitcher component
- Preview production build locally with `npm run preview`

## Brand & Content Guidelines
- Follow tone of voice in existing content (Christina's spiritual wellness brand)
- Main service offerings: sound healing, Reiki, Nepal trekking experiences
- Design aesthetic: Glass morphism, purple/indigo palette, ethereal feel
- Target audience: Wellness seekers, spiritual practitioners, adventure travelers
- Key CTAs: WhatsApp booking, email contact, service package selection
