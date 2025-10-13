# Sizing Tokens Snapshot

- **Breakpoints** — `sm: 540px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px` (see `tailwind.config.ts:135`).
- **Container padding** — centered layout with `padding: 2rem` (see `tailwind.config.ts:141`).
- **Typographic scale** — base `16px` with a 1.25 modular ratio; heading utilities `text-h1` → `text-h6` supplied via Tailwind (see `tailwind.config.ts:153` and `src/styles/base.scss:28`).
- **Spacing utilities** — includes fractional widths plus the `112` token (`28rem`) for tall map/media blocks (see `tailwind.config.ts:184`).
- **Radii** — design tokens track the template values: `sm 4px`, `md 6px`, `lg 12px`, `xl 16px` (see `src/styles/tokens.scss:25`).
- **Grid gutters** — bootstrap grid plugin normalized to `0.25rem, 0.5rem, 1rem, 1.5rem, 3rem` (see `tailwind.config.ts:279`).
