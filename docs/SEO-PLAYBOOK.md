# SEO Playbook — Tune Your Vibration

## Data Source & Baseline
- DataForSEO MCP (Google Ads `keywords_for_keywords`) queried 2025-10-11 with language `en`. Locations: Nepal (`2524`), Kathmandu (`1011034`), United States (`2840`), United Kingdom (`2826`), Australia (`2036`). See `docs/tuneyourvibration.html` artifacts for booking-page capture.
- Current public surface is a 10to8 booking hub with minimal crawlable copy; no custom meta data or internal navigation exists. Our vibe-coded Astro build must supply primary keyword relevance, location signals, and authority elements currently missing.

## Keyword Strategy
### Local In-Person Focus (Kathmandu & Nepal)
| Keyword | Avg Monthly Searches | Competition | CPC (USD) |
| --- | --- | --- | --- |
| nepal singing bowls and healing center | 320 | LOW | — |
| om singing bowls and healing hub singing bowl therapy nepal | 260 | LOW | — |
| sound healing kathmandu | 140 | LOW | 0.38 |
| sound healing training in nepal | 50 | LOW | 0.05 |
| reiki healing in nepal | 40 | LOW | — |
**Actions**: Ship service pages for `sound healing kathmandu`, `reiki kathmandu`, and a course hub optimized for “singing bowl training”. Layer Nepali cultural cues, prep FAQs, and WhatsApp CTAs for rapid conversion.

### Virtual & English-Speaking Markets
| Keyword | Avg Monthly Searches | Competition | CPC (USD) |
| --- | --- | --- | --- |
| distance reiki healer | 480 | LOW | 5.67 |
| remote energy healing | 210 | LOW | 4.30 |
| distance energy healing | 210 | LOW | 6.07 |
| remote healing | 170 | LOW | 10.70 |
| virtual energy healing | 90 | LOW | — |
**Actions**: Build category hubs for `Distance Reiki`, `Remote Chakra Balancing`, and `Online Intuitive Reading`, weaving intent phrases into H1s and CTAs (e.g., “Book a virtual energy healing session”). Add comparison snippets plus social proof to reduce cross-border friction.

## Site Architecture & Content Plan
- Stand up a `/services/` parent and child URLs for each high-intent cluster; target 600–800 words with hero CTA, structured FAQs, and bilingual highlights.
- Launch a `/sound-healing-nepal/learn/` hub for singing-bowl courses, retreat itineraries, and integration tips tied to lead magnets (e.g., guided meditation audio).
- Prompt-driven editorial cadence: biweekly briefs on “What happens in a distance reiki session?”, “How to prepare your space for virtual energy healing”, and “Sound healing venues in Kathmandu”; script 30s reels alongside each outline.

## Technical & On-Page Priorities
- Ship descriptive `<title>` + meta descriptions pairing the primary keyword with the promised transformation.
- Add `schema.org/LocalBusiness` to Nepal pages (WhatsApp, service radius, opening hours) and `schema.org/Service` for global offers with `areaServed` covering US/UK/AU/NZ. Implement via JSON-LD in `src/lib/schema`.
- Mirror the bilingual voice with toggles or dual sections; prep `hreflang` once Nepali translations are validated.
- Introduce internal nav modules linking Local ↔ Virtual services, testimonials, and the booking calendar.

## Authority, Reviews & Citations
- Claim Google Business Profile, Apple Maps, Nepali wellness directories, and yoga retreat listings referencing the Kathmandu contact numbers.
- Automate AI-authored review prompts (WhatsApp/email) that seed phrases like “distance reiki” and “sound healing Kathmandu”.
- Swap guest content with Nepali wellness partners and pitch podcasts/webinars to English-speaking spiritual audiences for backlinks.

## Measurement & Vibe-Coded Workflow
- Track conversions with Plausible or GA4 events on `/services/*` CTAs and the 10to8 handoff; keep reusable UTM templates in `docs/`.
- Bake `npm run check && npm run build` into every prompt session and paste logs into PR notes. Store DataForSEO payloads + timestamps so Claude can audit keyword decisions.
- Refresh keyword lists quarterly via the same MCP job, feeding new offerings or seasonal retreats as seeds and diffing outputs in-repo.
