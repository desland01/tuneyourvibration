# Tune Your Vibration — Design System Baseline

This document captures the visual contract for Christina’s site so every update stays aligned with the brand experience.

## Core Tokens

| Token | Value / Notes |
| --- | --- |
| `--color-text-primary` | `#F7F0FF` |
| `--color-text-secondary` | `#D7C9FF` |
| `--color-text-light` | `#A89BE0` |
| `--color-bg-primary` | `rgba(19, 13, 39, 0.85)` |
| `--color-bg-secondary` | `rgba(38, 26, 69, 0.65)` |
| `--color-bg-translucent` | `rgba(255, 255, 255, 0.12)` |
| `--color-border` | `rgba(231, 222, 255, 0.35)` |
| `--color-accent` | `#C084FC` |
| `--color-indigo-glow` | `#6C5CE7` |
| `--shadow-glass` | `0 24px 48px rgba(6, 2, 18, 0.28)` |
| `--shadow-glass-soft` | `0 12px 32px rgba(6, 2, 18, 0.2)` |
| `--radius-sm/md/lg/xl` | `.25rem / .75rem / 1.5rem / 2.25rem` |
| `--font-heading` | `"Cormorant", serif` |
| `--font-body` | `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |

Dark mode swaps the text, background, border, and shadow tokens as defined in `src/styles/tokens.scss`.

## Layout & Motion Rules

- **Glass panels** use `.glass` or `.glass-t` with the shared shadows and border token.
- **Heading scale** follows Tailwind extensions (`text-h1`, `text-h2`, etc.) and maps to the `fontScale` 1.25 rhythm.
- **Intersection animations** rely on `.intersect:animate-*` utilities and the `ObserverScript` to fade sections into view.
- **Typography** is managed via the Tailwind Typography plugin with custom colors and spacing extensions; `.prose` is the canonical class for rich text blocks (blog, docs, terms, poetry).
- **Hero overlays**: whenever text sits directly on a hero/background image, apply the glow utility classes (`glow-heading`, `glow-body`, `glow-caption`) so copy renders white with a lavender aura. This keeps contrast compliant without heavy backplates.
- **Section symmetry**: primary grid blocks (hero highlights, service cards, testimonials, curriculum modules) must retain a balanced column count at each breakpoint. Default services grid class is `grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`; adjust only when content count demands even pairings (e.g., Kathmandu in-person set uses two-up on XL).
- **Session flows / timelines**: replace plain numerals with the luminous icon badges used in `Session Flow` (`flex h-12 w-12 ... bg-gradient-to-br`). Reuse `getIcon` rotation for consistency.

## Tooling & Guardrails

- `npm run style:verify` compiles Tailwind output and confirms that critical selectors (`.prose`, `.glass`, `intersect:animate-fadeUp`) and design tokens exist. The command fails if they disappear.
- `npm run lint:preflight` runs `astro check` followed by `style:verify`. Use it before every PR or handoff.
- Tokens live in `src/styles/tokens.scss` and are consumed in `base.scss`, `glass.scss`, and Tailwind configuration. Do not hard-code color or shadow values elsewhere—reference the variables instead.

Keep this file updated whenever a brand decision changes the palette, fonts, or spacing system.
