# Design System

## Visual Lane

**Mystic-modernist: Studio Ghibli × wabi-sabi × Himalayan editorial.** Hand-touched textures (paper grain, ink wash, salt-bleached cotton, brass leaf) carried by quiet contemporary typography and confident negative space. Reference resorts and editorial publications that earn their reverence: Ace Hotel Kyoto, Aman Bhutan, Six Senses Bhutan, Cereal magazine's Nepal coverage, Studio Hagen Hall, and the visual restraint of Kinfolk Travel. The site should feel handmade and rooted, not designed-to-look-mystical.

## Color System

All values authored in OKLCH. Neutrals tinted toward warm sandstone (h ≈ 60–70). No `#000`, no `#fff`. Every accent has a stated job and a stated budget.

### Tokens

| Token | OKLCH | Hex approx | Role |
|---|---|---|---|
| `--canvas` | `oklch(0.972 0.012 78)` | `#F6F1E6` | Primary page surface. Warm rice paper. |
| `--canvas-soft` | `oklch(0.945 0.014 78)` | `#EDE5D3` | Secondary surface for inset bands. |
| `--canvas-deep` | `oklch(0.905 0.015 75)` | `#E2D7BF` | Quiet card / divider field. |
| `--ink` | `oklch(0.185 0.014 250)` | `#191D27` | Body text + primary type. Cool-shifted ink, never `#000`. |
| `--ink-soft` | `oklch(0.355 0.012 250)` | `#4A4F5B` | Secondary body text, captions. |
| `--ink-quiet` | `oklch(0.525 0.012 245)` | `#7A7F8B` | Tertiary labels, metadata. |
| `--mist` | `oklch(0.928 0.020 222)` | `#DEE7EE` | Cool dawn breath. Used in 5–10% nudges and section transitions. |
| `--lapis` | `oklch(0.355 0.085 240)` | `#2D4564` | Himalayan dusk. Anchor for one drenched section per page. |
| `--lapis-deep` | `oklch(0.235 0.060 240)` | `#1B2A40` | Deepest navigable surface. Footer + signature dark moment. |
| `--ember` | `oklch(0.755 0.135 70)` | `#D4A24F` | Restrained gold leaf. CTA + accent rules. Budget: ≤ 10%. |
| `--ember-deep` | `oklch(0.595 0.140 55)` | `#B36B2C` | Active state / hover for ember. |
| `--vermilion` | `oklch(0.595 0.155 30)` | `#B95237` | Sacred sindoor. Used once per page maximum, only on the signature moment that earns it. |
| `--jade` | `oklch(0.715 0.075 165)` | `#7DB496` | Living world (treks/tours). Single accent for travel-leaf surfaces. |
| `--rhododendron` | `oklch(0.535 0.110 340)` | `#955072` | Nepal flower accent. Reserved for retreat pages. |

### Strategy

**Restrained canvas** is the default for support and service pages (paper + ink + stone, ember ≤ 10%). **Committed** for the signature moment on each surface (one held color carries 30–60% of that section). **Drenched** is reserved for one section across the whole travel cluster (the Nepal retreats hero invocation).

### Texture overlays

- `noise-paper` (≤ 2.5% opacity SVG turbulence noise, fixed seed for consistency across pages).
- `ink-bleed` ornamental edge for hero photography. SVG mask, not Photoshop trickery.
- `gold-leaf` rule (`0.5px` solid `--ember` over a 1px `currentColor` 12% rule, offset 1px). Used as section rule, never as border-left.

## Typography

| Role | Family | Loading | Weights | Notes |
|---|---|---|---|---|
| Display | **Fraunces** (variable, optical-axis modulated) | `next/font/google`, `display: swap`, preload only weight 300 + 500 italic | 300, 400, 500 italic | Modulated, slightly modeled — Ghibli ink-brush quality without being calligraphic. Set `font-feature-settings: 'ss01', 'ss05'` for the soft `g` and rounded apertures. |
| Subhead / lyric | **Fraunces italic** at 500 | n/a (same family) | 500 italic | Used sparingly for the in-line lyrical phrases ("the breath between"). |
| Body / UI | **Inter Tight** | `next/font/google`, `display: swap` | 400, 500, 600 | Humanist sans, low x-height tension, pairs cleanly with Fraunces. Default tracking `-0.005em` for body, `0` for UI. |
| Caption / meta | **Inter Tight** at 500, uppercase, `letter-spacing: 0.18em` | same | 500 | Used for eyebrows, dates, location metadata. |
| Devanagari accent | **Noto Serif Devanagari** at 400 | `next/font/google`, `display: swap` | 400 | One-word Sanskrit/Nepali accents (e.g. *ॐ*, *नमस्ते*) at decorative scale. Latin fallback never visible. |

**Scale (fixed responsive steps, no viewport-width scaling):**

| Step | Mobile | Tablet | Desktop | Use |
|---|---|---|---|---|
| `display-xl` | 44px | 64px | 88px | Home hero only. |
| `display-l` | 36px | 48px | 64px | Page heroes. |
| `display-m` | 28px | 36px | 44px | Section openers. |
| `display-s` | 22px | 26px | 30px | Card titles, subsection. |
| `body-l` | 17px | 18px | 19px | Lead paragraphs. |
| `body-m` | 16px | 16px | 17px | Default body. |
| `caption` | 12px | 12px | 13px | Eyebrow, meta. |

**Rules.** Line length 60–72ch on body. Display heads break by hand at known viewport ranges; no auto-wrap-by-character.

## Spacing & Rhythm

8-point base. Vertical section rhythm intentionally uneven to feel composed, not gridded:

- Quiet section: `120px` desktop / `72px` mobile vertical padding.
- Pause section: `200px` desktop / `120px` mobile vertical padding. Used after the home hero and before the closing invitation.
- Inset card: `40px` desktop / `28px` mobile padding.

Asymmetric horizontal margins. Display headlines indent off-grid by `-0.5ch` to mimic letterpress. Body paragraphs hang inside a 16-column grid with `2-column` start offset on desktop for the editorial column.

## Components

| Component | Description |
|---|---|
| `<HeroFrame>` | Centered editorial hero. Eyebrow caption, display headline (Fraunces italic word emphasized inline), single subtitle, two-button row (primary = ember outline; secondary = ink ghost). Auto-height, never `100vh`. |
| `<EditorialBlock>` | Two-column asymmetric prose+image. Image takes 7-of-16, prose 6-of-16 with a 3-col gutter. Switches to stack on mobile. |
| `<SignatureMoment>` | Page-bespoke section, full-bleed, swimming in one committed color or photography. The page's "enchantment moment". Each surface defines its own (see catalog below). |
| `<SessionList>` | Service offerings list. Single column, gold-leaf rule between rows. No card grid. |
| `<InviteRail>` | Final invitation. Quiet rail with a single CTA, a Charlotte timezone line, and a Nepal timezone line. |
| `<MarginalNote>` | Pull-quote in Fraunces italic, hung in the left margin of the editorial column on desktop, inline on mobile. |
| `<SealStamp>` | Hand-drawn ink seal (SVG, animated draw-on once). Used on credentials and after-care. Replaces icon-style certifications. |

**Banned in this project.** Card grids of identical service tiles. Icon-and-text 3-up. Hero-metric blocks. Side-stripe borders. Gradient text. Glassmorphism. Stock chakra rainbows. Lotus/mandala stock decoration. Sparkle particles. Script-font logos.

## Motion

GSAP + ScrollTrigger, npm imports. Quiet, breath-paced, never decorative for its own sake.

### Easing

- **Default ease**: `cubic-bezier(0.2, 0.7, 0.1, 1)` (ease-out-expo-ish). Standard for entrances.
- **Drift ease**: `cubic-bezier(0.45, 0, 0.15, 1)` (long-tail). Used for ambient drift loops (smoke, prayer-flag sway).
- **No bounce, no elastic, no overshoot.** Anywhere.

### Durations

| Class | ms | Use |
|---|---|---|
| Quick | 180 | Hover / focus / button. |
| Calm | 480 | Section reveal. |
| Slow | 900 | Hero stage-in. |
| Drift | 6000–12000 | Ambient looped drift (subtle, low-amplitude). |

### Patterns

- **Stage-in.** Hero headline rises 14px and fades over `900ms`. Subtitle follows after `200ms` delay. Buttons last.
- **Ink-bleed reveal.** Each section's lead image enters under an SVG mask that wipes once from one diagonal. Single use per section.
- **Drift.** Background ambient layers (mountain silhouettes, prayer-flag horizontals, candle smoke) loop subtle vertical drift `±6px` over 8–12s.
- **Scroll-aware depth.** Hero photography parallaxes at `0.85` while foreground stays at `1.0`. No camera decoupling beyond `0.15`.
- **Cursor presence.** Custom soft cursor halo (12px ember dot with 22px ember 20% halo) on pointer-fine + non-mobile only. Reduced motion disables.

### Strict reduced-motion

When `prefers-reduced-motion: reduce`:

- All ScrollTrigger timelines `.disable(true)` and their target elements receive their end-state styles immediately.
- Drift loops cancelled.
- Custom cursor halo removed.
- Hero stage-in replaced with no-op (final state on mount).
- Ink-bleed mask replaced with simple opacity fade (≤ 240ms) or static.

This is enforced in code, not by CSS-only media queries.

## Signature Moment Catalog

Every page must implement one and only one signature moment. Token system is shared; soul is unique.

| Page | Signature |
|---|---|
| `/` (home) | **Two-doorway hero.** A single full-bleed Himalayan dawn photograph with two ghost-text entry rails ("a session" / "the journey"). Hovering one dims the other and lifts a hand-drawn ink frame around the chosen rail. |
| `/energy-healing` | **Aura field.** A slow-breathing SVG halo (radial gradient with 4% noise) behind Christina's portrait. Breathes 4s in, 6s out, indefinite. Halts under reduced motion. |
| `/sound-healing` | **Bowl wave.** Concentric SVG circles emanate from the page eyebrow on scroll, scaled by scroll velocity (clamped). Reads like a sound-bowl strike sending rings outward. |
| `/reiki-healing` | **Palm rest.** A single hand-drawn ink palm SVG draws-on once on first entry, then sits still. No motion thereafter. |
| `/chakra-aura-clearing` | **Cord cut.** A vertical ink cord drawn down the editorial column gets severed once per scroll-into-view. The cut frays. Used as the section break, not decoration. |
| `/intuitive-readings` | **Glyph scatter.** Eight hand-drawn intuitive glyphs (eye, moon-arc, mountain, droplet, spiral, seed, gate, breath-line) scatter on hero entry with random-but-fixed positions, then settle. No randomness across refreshes (seeded). |
| `/group-sound-healing-yoga` | **Circle of mats.** Top-down SVG of a half-arc of yoga mats; on scroll, soft bowl-glow halos pulse on each mat in sequence (1.2s offset). |
| `/nepal-retreats` | **Prayer-flag drift.** Real photographed prayer flag string above the hero, drifting `±3°` over 8s. Below, a *drenched* lapis section opens the retreat itinerary chapter. |
| `/nepal-treks` | **Topographic contour reveal.** A hand-drawn elevation contour of a Himalayan ridgeline draws-on across the hero as the trek tier copy resolves. |
| `/kathmandu-valley-tours` | **Courtyard plan.** An overhead SVG of a Newari courtyard (Patan Durbar Square reference) animates a soft pulse on each landmark, syncing with the tour stop list. |
| `/about-christina` | **Portrait dissolve.** Christina-in-Nepal and Christina-in-Charlotte cross-dissolve once on scroll, anchoring the dual-geography origin story. |
| `/credentials` | **Ink seal.** Hand-drawn ink seal/stamp SVG draws-on for each credential. Replaces certification logos with a unified mark. |
| `/testimonials` | **Candle bokeh.** Soft warm bokeh layer (CSS-only, 4 floating warm circles with `mix-blend-mode: screen`) behind each quote. No motion under reduced. |
| `/book` | **Lantern offering.** The booking form sits inside a hand-drawn lantern frame SVG. The flame inside breathes (4s in, 6s out) until any field is focused, then steadies. |
| `/after-care` | **Water-glass ripple.** A still SVG glass of water with a single low-amplitude ripple `±2px` every 9s. Reduced motion: static. |

## Imagery

- **Real Nepal photography only.** Source from `public/brand-assets/tune-vibration/nepal/`. No stock Himalayan imagery. If a photo is missing, leave the slot quiet (a textured paper field with the page eyebrow) rather than fill with stock.
- **Real session photography** for the healing pages.
- **No mandala overlays, no lotus stock, no chakra rainbow art** anywhere.
- **Image treatment.** Slight warm-canvas LUT (warmth +3, saturation -8) for visual continuity. No heavy filters.

## Anti-Slop Self-Test

Before any commit, the page must pass:

1. **Category-reflex check.** Could someone guess "spiritual healing site" from the palette + symbols alone? If yes, dial back chakra/lotus reflex.
2. **Anti-reference scan.** Zero rose-gold gradients. Zero script fonts. Zero countdown/urgency UI. Zero mandala stock. Zero identical service-card grids.
3. **One-of-each rule.** One display family. One body family. One ember accent. One signature moment. If a page has two signatures, kill the weaker one.
4. **Reduced-motion test.** Toggle the OS preference. The page must remain narratively complete with all motion disabled.
5. **Mobile portrait check.** Type, motion, and signature moment all functional at 375px. Mobile is not an afterthought for this audience.

## Layout Rules (binding)

- Hero viewports auto-height. Never `100vh`, `100svh`, `100dvh`.
- Hero is centered, never split-grid.
- Public letter-spacing baseline `0`. Caption uppercase tracks at `0.18em`.
- No decorative gradient orbs.
- Cards used only when the content is genuinely repeated and tile-shaped (service offerings list is NOT a card grid — it's a vertical list with gold-leaf rules).
- All proposal content must remain legible if GSAP fails to load.
- No sticky sales bars. No pinned demo sequences. No floating booking widgets.
- Secondary CTA labels are exactly `Resources` or `Read more`. Never `Click here`.

## File / Token Surface

- Tokens live in `app/globals.css` under `:root` (OKLCH with hex fallback).
- Font loaders in `app/layout.tsx` via `next/font/google`.
- Motion utilities in `lib/motion.ts` (easing curves, durations, reduced-motion guard).
- Per-page signatures live next to their page route (`app/<route>/_signature.tsx`).
- Shared components live in `components/` and re-export from `components/TyvSite.tsx` if helpful.
