export const nautilusMirrorCss = `
/* Design direction: luxury-refined coastal editorial, logo-led navigation, viewport-fit hero. */
:root {
  --nh-canvas: hsl(44 22% 96%);
  --nh-paper: #ffffff;
  --nh-ink: #020617;
  --nh-text: #020617;
  --nh-muted: rgb(16 23 35 / .72);
  --nh-dark: rgb(6 8 15);
  --nh-dark-2: rgb(12 16 24);
  --nh-dark-card: rgb(11 15 25);
  --nh-dark-text: rgb(248 246 240);
  --nh-dark-muted: rgb(232 229 222 / .88);
  --nh-dark-line: rgb(201 189 166 / .12);
  --nh-dark-grid: rgb(211 195 166 / .08);
  --nh-gold: #8f6524;
  --nh-gold-2: #aa7a2a;
  --nh-gold-readable: rgb(226 185 125);
  --nh-panel: hsl(44 22% 96% / .88);
  --nh-rule: rgb(2 6 23 / .1);
  --nh-motion-ease: cubic-bezier(.25, .46, .45, .94);
}

body {
  background: var(--nh-dark);
  color: var(--nh-text);
  font-family: var(--font-work-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body::before {
  content: none !important;
  display: none !important;
}

#prince-bay-proposal,
#prince-bay-onboarding,
#prince-bay-planning-kit {
  background: var(--nh-canvas);
  color: var(--nh-text);
}

#prince-bay-proposal *,
#prince-bay-onboarding *,
#prince-bay-planning-kit * {
  letter-spacing: 0;
}

#prince-bay-proposal p,
#prince-bay-onboarding p,
#prince-bay-planning-kit p,
#prince-bay-proposal li,
#prince-bay-onboarding li,
#prince-bay-planning-kit li {
  color: var(--nh-muted);
  font-family: var(--font-work-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.55;
}

#prince-bay-proposal h1,
#prince-bay-proposal h2,
#prince-bay-proposal h3,
#prince-bay-proposal .serif,
#prince-bay-onboarding h1,
#prince-bay-onboarding h2,
#prince-bay-onboarding h3,
#prince-bay-planning-kit h1,
#prince-bay-planning-kit h2,
#prince-bay-planning-kit h3 {
  color: var(--nh-ink);
  font-family: var(--font-cormorant), Georgia, serif;
  font-weight: 300;
  line-height: 1.02;
}

#prince-bay-proposal h1,
#prince-bay-onboarding h1 {
  font-size: 82px;
}

#prince-bay-proposal h2,
#prince-bay-onboarding h2 {
  font-size: 58px;
}

#prince-bay-proposal h3,
#prince-bay-onboarding h3 {
  font-size: 34px;
}

#prince-bay-planning-kit h1 {
  font-size: 64px;
}

#prince-bay-planning-kit h2 {
  font-size: 42px;
}

#prince-bay-planning-kit h3 {
  font-size: 26px;
}

#prince-bay-proposal h1 em,
#prince-bay-proposal h2 em,
#prince-bay-proposal h3 em,
#prince-bay-onboarding h1 em,
#prince-bay-onboarding h2 em,
#prince-bay-onboarding h3 em,
#prince-bay-planning-kit h1 em,
#prince-bay-planning-kit h2 em,
#prince-bay-planning-kit h3 em {
  color: var(--nh-ink);
  font-family: var(--font-cormorant), Georgia, serif;
  font-style: italic;
  font-weight: 300;
}

#prince-bay-proposal .site-nav,
#prince-bay-onboarding .nav,
#prince-bay-planning-kit .nav {
  min-height: 92px;
  background: rgb(242 243 239 / .94);
  border-bottom: 1px solid var(--nh-rule);
  color: var(--nh-ink);
  box-shadow: none;
  backdrop-filter: blur(10px);
}

#prince-bay-proposal .wordmark,
#prince-bay-onboarding .wordmark,
#prince-bay-planning-kit .wordmark {
  color: var(--nh-ink);
  font-family: var(--font-cormorant), Georgia, serif;
  font-size: 34px;
  font-weight: 400;
  text-transform: uppercase;
}

#prince-bay-proposal .wordmark > span:not(.brand-name),
#prince-bay-onboarding .wordmark > span,
#prince-bay-planning-kit .wordmark > span {
  color: var(--nh-muted);
  font-family: var(--font-work-sans), sans-serif;
  font-size: 12px;
  font-weight: 500;
}

#prince-bay-proposal .site-nav a,
#prince-bay-proposal .site-nav button.nav-link,
#prince-bay-onboarding .nav-links a,
#prince-bay-planning-kit .nav a {
  color: var(--nh-text);
  font-family: var(--font-work-sans), sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
}

#prince-bay-proposal .site-nav a:hover,
#prince-bay-proposal .site-nav button.nav-link:hover,
#prince-bay-onboarding .nav-links a:hover,
#prince-bay-planning-kit .nav a:hover {
  color: var(--nh-gold-2);
}

#prince-bay-proposal .menu-toggle {
  border-color: var(--nh-gold-2);
  color: var(--nh-text);
}

#prince-bay-proposal .btn,
#prince-bay-onboarding .btn,
#prince-bay-planning-kit .btn {
  min-height: 48px;
  border: 1px solid var(--nh-gold-2);
  border-radius: 0;
  background: transparent;
  color: var(--nh-ink);
  box-shadow: none;
  font-family: var(--font-work-sans), sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 30px 10px;
  text-transform: uppercase;
  transition:
    background-color .4s var(--nh-motion-ease),
    box-shadow .4s var(--nh-motion-ease),
    color .4s var(--nh-motion-ease),
    border-color .4s var(--nh-motion-ease);
}

#prince-bay-proposal .btn:hover,
#prince-bay-onboarding .btn:hover,
#prince-bay-planning-kit .btn:hover {
  background: var(--nh-gold-2);
  color: var(--nh-ink);
  border-color: var(--nh-gold-2);
  transform: none;
}

#prince-bay-proposal .btn.ghost,
#prince-bay-onboarding .btn.ghost,
#prince-bay-planning-kit .btn.ghost {
  background: transparent;
  border-color: var(--nh-gold-2);
  color: var(--nh-canvas);
}

#prince-bay-proposal .btn.dark-ghost {
  color: var(--nh-ink);
  border-color: var(--nh-gold-2);
}

#prince-bay-proposal .hero .btn,
#prince-bay-onboarding .hero .btn,
#prince-bay-planning-kit .hero .btn,
#prince-bay-proposal .mobile-cta-bar .btn {
  background: rgb(6 8 15 / .28);
  color: var(--nh-canvas);
  border-color: var(--nh-gold-2);
}

#prince-bay-proposal .hero .btn:hover,
#prince-bay-onboarding .hero .btn:hover,
#prince-bay-planning-kit .hero .btn:hover,
#prince-bay-proposal .mobile-cta-bar .btn:hover {
  background: var(--nh-gold-2);
  color: var(--nh-ink);
}

#prince-bay-proposal .hero,
#prince-bay-onboarding .hero,
#prince-bay-planning-kit .hero {
  min-height: auto;
  padding: clamp(154px, 17vw, 220px) clamp(22px, 5vw, 72px) clamp(86px, 10vw, 124px);
  background: var(--nh-dark);
  text-align: left;
  justify-content: flex-end;
}

#prince-bay-proposal .hero::before,
#prince-bay-onboarding .hero::before,
#prince-bay-planning-kit .hero::before {
  background: linear-gradient(90deg, rgb(6 8 15 / .72), rgb(12 16 24 / .28));
}

#prince-bay-proposal .hero::after {
  display: none;
}

#prince-bay-proposal .hero-content,
#prince-bay-onboarding .hero-inner,
#prince-bay-planning-kit .hero-inner {
  width: min(1160px, 100%);
}

#prince-bay-proposal .hero-content::before {
  content: none;
  display: none;
}

#prince-bay-proposal .hero-content .eyebrow,
#prince-bay-proposal .hero-actions {
  justify-content: flex-start;
}

#prince-bay-proposal .hero-content h1,
#prince-bay-onboarding .hero h1,
#prince-bay-planning-kit .hero h1 {
  max-width: 760px;
  margin-left: 0;
  margin-right: auto;
  background: transparent;
  color: var(--nh-canvas);
}

#prince-bay-proposal .hero-content h1 em,
#prince-bay-onboarding .hero h1 em,
#prince-bay-planning-kit .hero h1 em {
  color: var(--nh-canvas);
}

#prince-bay-proposal .hero-content .sub,
#prince-bay-onboarding .hero p,
#prince-bay-planning-kit .hero p {
  max-width: 620px;
  margin-left: 0;
  background: transparent;
  color: rgb(242 243 239 / .82);
}

#prince-bay-proposal .intro-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: rgb(242 243 239);
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

#prince-bay-proposal .intro-lockup {
  display: grid;
  justify-items: center;
  gap: 18px;
  transform-origin: center;
}

#prince-bay-proposal .intro-brand-mark {
  width: clamp(108px, 13vw, 184px);
  height: auto;
  aspect-ratio: 476 / 370;
  filter: drop-shadow(0 18px 34px rgb(0 0 0 / .42));
  transform-origin: center;
}

#prince-bay-proposal .intro-title {
  color: rgb(242 243 239 / .92);
  font-family: var(--font-cormorant), Georgia, serif;
  font-size: clamp(36px, 4.5rem, 86px);
  font-weight: 300;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
}

#prince-bay-proposal .hero {
  min-height: auto;
  padding: clamp(190px, 22vw, 292px) clamp(22px, 5vw, 72px) clamp(136px, 15vw, 196px);
  overflow: hidden;
  background: #000;
}

#prince-bay-proposal .hero::before {
  background: transparent;
  pointer-events: none;
}

#prince-bay-proposal .hero-media {
  background: url("https://princebay.com/projects/340-san-marco/image-32.webp") center / cover no-repeat;
  overflow: hidden;
  transform-origin: center center;
  will-change: transform;
}

#prince-bay-proposal .hero-video {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.01);
}

#prince-bay-proposal .hero-dim {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgb(6 8 15 / .12);
  opacity: 0;
  pointer-events: none;
}

#prince-bay-proposal .hero-content {
  z-index: 3;
  opacity: 0;
  visibility: hidden;
  transform: translateY(24px);
  pointer-events: none;
}

#prince-bay-proposal .hero-content.is-visible {
  pointer-events: auto;
}

#prince-bay-proposal .scroll-cue {
  position: absolute;
  left: 50%;
  bottom: clamp(30px, 4.2vw, 56px);
  z-index: 4;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgb(242 243 239 / .72);
  font-family: var(--font-work-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  animation: prince-bay-scroll-cue 1.8s ease-in-out infinite;
}

#prince-bay-proposal .scroll-cue svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

@keyframes prince-bay-scroll-cue {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 8px); }
}

@media (prefers-reduced-motion: reduce) {
  #prince-bay-proposal .intro-overlay {
    display: none;
  }

  #prince-bay-proposal .hero-video,
  #prince-bay-proposal .hero-content,
  #prince-bay-proposal .scroll-cue {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  #prince-bay-proposal .hero-content {
    pointer-events: auto;
  }

  #prince-bay-proposal .hero-dim {
    opacity: 1;
    background: rgb(6 8 15 / .56);
  }

  #prince-bay-proposal .scroll-cue {
    transform: translateX(-50%);
    animation: none;
  }
}

#prince-bay-proposal .page,
#prince-bay-onboarding .section,
#prince-bay-planning-kit .section {
  background: var(--nh-canvas);
  color: var(--nh-text);
}

#prince-bay-proposal .page,
#prince-bay-onboarding .section,
#prince-bay-planning-kit .section {
  padding: clamp(96px, 10vw, 150px) clamp(24px, 5vw, 72px);
}

#prince-bay-proposal .page::before,
#prince-bay-onboarding .section::before,
#prince-bay-planning-kit .section::before {
  content: "";
  display: block;
  height: 1px;
  background: var(--nh-rule);
  margin: 0 0 56px;
}

#prince-bay-proposal .lead,
#prince-bay-proposal .small {
  color: var(--nh-muted);
}

#prince-bay-proposal .eyebrow,
#prince-bay-onboarding .eyebrow,
#prince-bay-planning-kit .eyebrow,
#prince-bay-proposal .footer-label {
  color: var(--nh-gold);
  font-family: var(--font-work-sans), sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: none;
}

#prince-bay-proposal .split,
#prince-bay-proposal .local-grid,
#prince-bay-onboarding .checklist,
#prince-bay-planning-kit .checklist {
  gap: clamp(48px, 8vw, 120px);
}

#prince-bay-proposal .mega-card,
#prince-bay-proposal .shift-card,
#prince-bay-proposal .corner-card,
#prince-bay-proposal .faq-card,
#prince-bay-proposal .tech-card,
#prince-bay-proposal .spec-card,
#prince-bay-proposal .offer-card,
#prince-bay-proposal .area-list div,
#prince-bay-onboarding .card,
#prince-bay-onboarding .panel,
#prince-bay-planning-kit .card,
#prince-bay-planning-kit .panel {
  background: var(--nh-paper);
  border: 0;
  border-right: 1px solid var(--nh-rule);
  border-bottom: 1px solid var(--nh-rule);
  box-shadow: none;
  color: var(--nh-text);
}

#prince-bay-onboarding .panel,
#prince-bay-planning-kit .panel {
  background: rgb(255 255 255 / .34);
  border: 1px solid var(--nh-rule);
}

#prince-bay-proposal .corner-card h3,
#prince-bay-proposal .faq-card h4,
#prince-bay-proposal .tech-card h3,
#prince-bay-proposal .spec-card h3,
#prince-bay-proposal .offer-card h3 {
  color: var(--nh-ink);
}

#prince-bay-proposal .modal-form input,
#prince-bay-proposal .modal-form select,
#prince-bay-proposal .modal-form textarea {
  background: transparent;
  border: 1px solid var(--nh-rule);
  border-radius: 0;
  color: var(--nh-text);
}

#prince-bay-proposal .portfolio-card,
#prince-bay-proposal .media-frame,
#prince-bay-proposal .proof-image,
#prince-bay-proposal .nav-snapshot {
  border: 0;
  border-radius: 0;
  margin: 0;
  box-shadow: none;
}

#prince-bay-proposal .portfolio-card figcaption,
#prince-bay-proposal .media-caption {
  background:
    linear-gradient(180deg, rgb(6 8 15 / .26), rgb(6 8 15 / .92) 58%, rgb(6 8 15 / .96));
  color: var(--nh-canvas);
  text-shadow: 0 2px 18px rgb(0 0 0 / .48);
}

#prince-bay-proposal .portfolio-card figcaption h3 {
  color: rgb(255 255 255);
  max-width: 17ch;
}

#prince-bay-proposal .portfolio-card figcaption .eyebrow {
  color: rgb(226 185 125) !important;
}

#prince-bay-proposal .page.dark,
#prince-bay-proposal #corners,
#prince-bay-proposal #offer,
#prince-bay-onboarding .section.dark {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(135deg, rgb(6 8 15 / .92), rgb(12 16 24 / .86) 52%, rgb(6 8 15 / .92)),
    url("/brand-assets/prince-bay/modern-waterfront-masterpiece.webp") center / cover no-repeat;
  background-color: var(--nh-dark);
  color: var(--nh-dark-text);
  border: 0;
}

#prince-bay-proposal .page.dark::before,
#prince-bay-proposal #corners::before,
#prince-bay-proposal #offer::before,
#prince-bay-onboarding .section.dark::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(90deg, var(--nh-dark-grid) 1px, transparent 1px),
    linear-gradient(0deg, rgb(211 195 166 / .055) 1px, transparent 1px);
  background-size: 86px 86px;
  opacity: .42;
}

#prince-bay-proposal .page.dark > .inner,
#prince-bay-proposal #corners > .inner,
#prince-bay-proposal #offer > .inner,
#prince-bay-onboarding .section.dark > .section-inner {
  position: relative;
  z-index: 1;
}

#prince-bay-proposal .page.dark h1,
#prince-bay-proposal .page.dark h2,
#prince-bay-proposal .page.dark h3,
#prince-bay-proposal #offer h2,
#prince-bay-proposal #offer h3,
#prince-bay-onboarding .section.dark h2,
#prince-bay-onboarding .section.dark h3 {
  color: var(--nh-dark-text);
}

#prince-bay-proposal .page.dark p,
#prince-bay-proposal .page.dark li,
#prince-bay-proposal #offer p,
#prince-bay-proposal #offer li,
#prince-bay-onboarding .section.dark p,
#prince-bay-onboarding .section.dark li {
  color: var(--nh-dark-muted);
}

#prince-bay-proposal .hero .eyebrow,
#prince-bay-proposal .page.dark .eyebrow,
#prince-bay-proposal #corners .eyebrow,
#prince-bay-proposal #offer .eyebrow,
#prince-bay-proposal footer .footer-label,
#prince-bay-onboarding .section.dark .eyebrow {
  color: var(--nh-gold-readable) !important;
}

#prince-bay-proposal #corners .corner-card,
#prince-bay-proposal #offer .offer-card,
#prince-bay-onboarding .section.dark .panel {
  background:
    linear-gradient(145deg, rgb(16 22 34 / .96), rgb(8 13 22 / .94)),
    var(--nh-dark-card);
  background-color: var(--nh-dark-card);
  border: 1px solid rgb(201 189 166 / .16);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / .05);
  color: var(--nh-dark-text);
}

#prince-bay-proposal #corners .corner-card h3,
#prince-bay-proposal #offer .offer-card h3,
#prince-bay-onboarding .section.dark .panel h3 {
  color: var(--nh-dark-text);
}

#prince-bay-proposal #corners .corner-card p,
#prince-bay-proposal #corners .corner-card li,
#prince-bay-proposal #offer .offer-card p,
#prince-bay-proposal #offer .offer-card li,
#prince-bay-onboarding .section.dark .panel li {
  color: var(--nh-dark-muted);
}

#prince-bay-proposal #corners .corner-card .num,
#prince-bay-proposal #corners .corner-card em,
#prince-bay-proposal #offer .offer-card em,
#prince-bay-proposal #offer .callout em,
#prince-bay-proposal #offer .offer-card .price {
  color: var(--nh-gold-readable);
}

#prince-bay-proposal .page.dark .callout {
  background:
    linear-gradient(145deg, rgb(16 22 34 / .92), rgb(8 13 22 / .88)),
    var(--nh-dark-card);
  border: 1px solid rgb(201 189 166 / .16);
  color: var(--nh-dark-text);
}

#prince-bay-proposal .page.dark .callout .big,
#prince-bay-proposal .page.dark .callout h1,
#prince-bay-proposal .page.dark .callout h2,
#prince-bay-proposal .page.dark .callout h3 {
  color: var(--nh-dark-text);
}

#prince-bay-proposal .page.dark .callout p {
  color: var(--nh-dark-muted);
}

#prince-bay-proposal #offer .offer-closing {
  padding: clamp(26px, 3vw, 40px);
}

#prince-bay-proposal #offer .offer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

#prince-bay-proposal .page.dark .btn,
#prince-bay-proposal #offer .btn {
  background: var(--nh-gold-readable);
  border-color: var(--nh-gold-readable);
  color: var(--nh-ink);
  text-shadow: none;
}

#prince-bay-proposal .page.dark .btn.ghost,
#prince-bay-proposal #offer .btn.ghost {
  background: transparent;
  border-color: rgb(248 246 240 / .38);
  color: var(--nh-dark-text);
}

#prince-bay-proposal #corners .corner-grid {
  align-self: center;
  display: grid;
  grid-template-columns: minmax(0, .96fr) minmax(0, 1.04fr);
  gap: clamp(22px, 3.2vw, 42px) !important;
  margin-top: 0 !important;
  padding: clamp(10px, 1.3vw, 16px);
  background:
    linear-gradient(135deg, rgb(6 8 15 / .72), rgb(16 22 34 / .38)),
    rgb(6 8 15 / .58) !important;
  border: 1px solid rgb(201 189 166 / .10) !important;
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / .04),
    0 34px 90px rgb(0 0 0 / .24);
  align-items: start;
  transform: translateY(clamp(22px, 4.8vw, 66px));
}

#prince-bay-proposal #corners .corner-card {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: var(--corner-height, clamp(340px, 40vh, 470px));
  padding: clamp(30px, 4vw, 56px);
  color: var(--nh-dark-text);
  background:
    linear-gradient(160deg, rgb(17 24 37 / .94), rgb(7 11 19 / .88)),
    rgb(8 13 22 / .94);
  border: 1px solid rgb(201 189 166 / .18);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / .06),
    inset 0 -1px 0 rgb(0 0 0 / .44),
    0 28px 70px rgb(0 0 0 / .18);
  transition:
    transform .7s var(--nh-motion-ease),
    box-shadow .7s var(--nh-motion-ease),
    border-color .7s var(--nh-motion-ease),
    filter .4s var(--nh-motion-ease);
  transform: translateY(var(--corner-float, 0px)) scale(1) !important;
  transform-origin: center bottom;
}

#prince-bay-proposal #corners .corner-card:nth-child(1) {
  --corner-float: -28px;
  --corner-height: clamp(360px, 42vh, 500px);
}

#prince-bay-proposal #corners .corner-card:nth-child(2) {
  --corner-float: 24px;
  --corner-height: clamp(420px, 50vh, 560px);
}

#prince-bay-proposal #corners .corner-card:nth-child(3) {
  --corner-float: 4px;
  --corner-height: clamp(430px, 48vh, 550px);
}

#prince-bay-proposal #corners .corner-card:nth-child(4) {
  --corner-float: 58px;
  --corner-height: clamp(350px, 40vh, 480px);
}

#prince-bay-proposal #corners .corner-card:nth-child(odd),
#prince-bay-proposal #corners .corner-card:nth-child(even) {
  margin-top: 0;
}

#prince-bay-proposal #corners .corner-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: .31;
  background-size: cover;
  background-position: center;
  filter: saturate(.92) contrast(1.05) brightness(.74);
  transform: scale(1.02);
  transition: transform .7s var(--nh-motion-ease), opacity .7s var(--nh-motion-ease);
}

#prince-bay-proposal #corners .corner-card::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    linear-gradient(180deg, rgb(6 8 15 / .70), rgb(8 13 22 / .91)),
    radial-gradient(circle at 18% 12%, hsl(36 48% 42% / .22), transparent 36%),
    radial-gradient(circle at 90% 84%, rgb(222 150 125 / .12), transparent 32%);
}

#prince-bay-proposal #corners .corner-card > * {
  position: relative;
  z-index: 2;
}

#prince-bay-proposal #corners .corner-card p {
  max-width: 36ch;
}

#prince-bay-proposal #corners .corner-card ul {
  margin-top: auto;
  padding-top: clamp(22px, 3vw, 34px);
}

#prince-bay-proposal #corners .corner-card:hover,
#prince-bay-proposal #corners .corner-card:focus-within {
  transform: translateY(calc(var(--corner-float, 0px) - 3px)) scale(1) !important;
  border-color: rgb(201 189 166 / .20);
  box-shadow:
    0 14px 34px -32px rgb(222 150 125 / .14),
    0 10px 28px rgb(0 0 0 / .08),
    inset 0 1px 0 rgb(255 255 255 / .06);
  filter: saturate(1.005);
}

#prince-bay-proposal #corners .corner-card:hover::before,
#prince-bay-proposal #corners .corner-card:focus-within::before {
  opacity: .32;
  transform: scale(1.025);
}

#prince-bay-proposal .corner-grid,
#prince-bay-proposal .faq-grid,
#prince-bay-proposal .tech-grid,
#prince-bay-proposal .spec-grid,
#prince-bay-proposal .offer-grid,
#prince-bay-proposal .nav-shift,
#prince-bay-onboarding .grid,
#prince-bay-planning-kit .grid {
  gap: 1px;
  background: var(--nh-rule);
  border: 1px solid var(--nh-rule);
}

#prince-bay-proposal #corners .corner-grid,
#prince-bay-proposal #offer .offer-grid,
#prince-bay-proposal .page.dark .spec-grid,
#prince-bay-onboarding .section.dark .grid {
  background: var(--nh-dark-line);
  border-color: var(--nh-dark-line);
}

#prince-bay-proposal .tech-grid {
  gap: clamp(18px, 2.8vw, 30px);
  background: transparent;
  border: 0;
  align-items: stretch;
}

#prince-bay-proposal #resources .resource-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(176px, auto);
  align-items: stretch;
}

#prince-bay-proposal #resources .resource-grid .tech-card {
  min-height: 0;
}

#prince-bay-proposal .tech-card {
  position: relative;
  overflow: hidden;
  min-height: 100%;
  padding: clamp(24px, 2.8vw, 32px);
  background:
    linear-gradient(180deg, rgb(255 255 255 / .98), rgb(246 247 243 / .92)),
    var(--nh-paper);
  border: 1px solid rgb(2 6 23 / .08);
  box-shadow:
    0 18px 40px rgb(2 6 23 / .09),
    0 2px 0 rgb(255 255 255 / .72) inset;
  transition:
    box-shadow .4s var(--nh-motion-ease),
    border-color .4s var(--nh-motion-ease);
  will-change: transform;
}

#prince-bay-proposal .tech-card::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, rgb(255 255 255 / .72), transparent 32%);
  opacity: .5;
}

#prince-bay-proposal .tech-card:hover,
#prince-bay-proposal .tech-card:focus-within {
  border-color: rgb(2 6 23 / .12);
  box-shadow:
    0 28px 56px rgb(2 6 23 / .12),
    0 2px 0 rgb(255 255 255 / .76) inset;
}

#prince-bay-proposal #navigation .nav-shift {
  gap: clamp(18px, 2.8vw, 30px);
  background: transparent;
  border: 0;
  align-items: start;
}

#prince-bay-proposal #navigation .shift-card {
  position: relative;
  z-index: 0;
  isolation: isolate;
  align-self: start;
  min-height: 0;
  padding: clamp(24px, 2.5vw, 30px);
  background:
    linear-gradient(180deg, rgb(255 255 255 / .98), rgb(246 247 243 / .9)),
    var(--nh-paper);
  border: 1px solid rgb(2 6 23 / .08);
  box-shadow:
    0 14px 32px rgb(2 6 23 / .08),
    0 2px 0 rgb(255 255 255 / .72) inset;
  transform: translateY(var(--nav-float, 0px)) scale(1);
  transform-origin: center bottom;
  transition:
    transform .7s var(--nh-motion-ease),
    box-shadow .4s var(--nh-motion-ease),
    border-color .4s var(--nh-motion-ease),
    filter .4s var(--nh-motion-ease);
  will-change: transform;
}

#prince-bay-proposal #navigation .shift-card:nth-child(1) { --nav-float: 0px; }
#prince-bay-proposal #navigation .shift-card:nth-child(2) { --nav-float: 22px; }
#prince-bay-proposal #navigation .shift-card:nth-child(3) { --nav-float: 8px; }
#prince-bay-proposal #navigation .shift-card:nth-child(4) { --nav-float: 30px; }

#prince-bay-proposal #navigation .shift-card::before {
  content: "";
  position: absolute;
  left: 12%;
  right: 12%;
  bottom: -34px;
  height: 92px;
  border-radius: 999px;
  background: radial-gradient(
    ellipse at center,
    rgb(156 58 49 / .24) 0%,
    rgb(156 58 49 / .14) 28%,
    transparent 74%
  );
  filter: blur(22px);
  opacity: .14;
  transition: opacity .4s var(--nh-motion-ease), transform .7s var(--nh-motion-ease);
  pointer-events: none;
  z-index: -1;
}

#prince-bay-proposal #navigation .shift-card:hover,
#prince-bay-proposal #navigation .shift-card:focus-within {
  transform: translateY(calc(var(--nav-float, 0px) - 2px)) scale(1);
  border-color: rgb(201 189 166 / .16);
  box-shadow:
    0 12px 32px -30px rgb(222 150 125 / .12),
    inset 0 1px 0 rgb(255 255 255 / .05);
  filter: saturate(1.005);
}

#prince-bay-proposal #navigation .shift-card:hover::before,
#prince-bay-proposal #navigation .shift-card:focus-within::before {
  opacity: .09;
  transform: translateY(2px) scale(1.01);
}

#prince-bay-proposal #navigation .shift-card:nth-child(even) {
  background:
    linear-gradient(180deg, rgb(247 249 252 / .98), rgb(241 244 249 / .92)),
    var(--nh-paper);
}

#prince-bay-proposal #navigation .shift-card .from,
#prince-bay-proposal #navigation .shift-card .to,
#prince-bay-proposal #navigation .shift-card p {
  position: relative;
  z-index: 1;
}

#prince-bay-proposal #local .local-grid {
  position: relative;
  overflow: hidden;
  padding: clamp(18px, 2vw, 24px);
  background:
    linear-gradient(135deg, rgb(6 8 15 / .96), rgb(12 16 24 / .92) 52%, rgb(6 8 15 / .96)),
    var(--nh-dark);
  border: 1px solid rgb(201 189 166 / .12);
  box-shadow: 0 26px 80px hsl(222 46% 3% / .24);
}

#prince-bay-proposal #local .local-grid::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(90deg, var(--nh-dark-grid) 1px, transparent 1px),
    linear-gradient(0deg, rgb(211 195 166 / .055) 1px, transparent 1px);
  background-size: 86px 86px;
  opacity: .28;
}

#prince-bay-proposal #local .local-grid > * {
  position: relative;
  z-index: 1;
}

#prince-bay-proposal #local .map-panel {
  color: var(--nh-dark-text);
  border: 1px solid rgb(201 189 166 / .12);
  box-shadow: none;
  background:
    linear-gradient(180deg, rgb(6 8 15 / .18), rgb(6 8 15 / .62)),
    url("/brand-assets/prince-bay/modern-waterfront-masterpiece.webp") center / cover no-repeat;
}

#prince-bay-proposal #local .map-panel h3 {
  color: var(--nh-dark-text);
}

#prince-bay-proposal #local .area-list {
  gap: 14px;
  background: transparent;
  border: 0;
  padding: 0;
}

#prince-bay-proposal #local .area-list div {
  padding: 24px 26px;
  background: transparent;
  border: 1px solid rgb(201 189 166 / .16);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / .05), 0 18px 48px rgb(0 0 0 / .12);
  backdrop-filter: blur(12px);
  color: var(--nh-dark-text);
}

#prince-bay-proposal #local .area-list strong {
  color: rgb(245 242 235);
}

#prince-bay-proposal #local .area-list span {
  color: rgb(226 222 213 / .72);
}

#prince-bay-proposal .callout {
  border: 0;
  border-top: 1px solid var(--nh-rule);
  background: transparent;
}

#prince-bay-proposal .callout .big {
  color: var(--nh-ink);
  font-family: var(--font-cormorant), Georgia, serif;
  font-weight: 300;
}

#prince-bay-proposal .modal {
  background: rgb(6 8 15 / .86);
}

#prince-bay-proposal .modal-panel {
  background: var(--nh-canvas);
  color: var(--nh-text);
  box-shadow: none;
}

#prince-bay-proposal .drawer {
  background: var(--nh-canvas);
  border-color: var(--nh-rule);
  box-shadow: none;
}

#prince-bay-proposal .drawer a,
#prince-bay-proposal .drawer button {
  color: var(--nh-text);
  border-bottom-color: var(--nh-rule);
}

#prince-bay-proposal .mega-panel {
  background: var(--nh-canvas);
  box-shadow: none;
  border-color: var(--nh-rule);
}

#prince-bay-proposal .site-nav {
  z-index: 64;
  display: flex;
  justify-content: space-between;
  min-height: 96px;
  padding: 14px clamp(22px, 5vw, 64px);
  background: rgb(6 8 15 / .72);
  border-bottom: 1px solid rgb(201 189 166 / .14);
  color: rgb(245 242 235);
}

#prince-bay-proposal .site-nav ul,
#prince-bay-proposal .site-nav > .btn,
#prince-bay-proposal .site-nav .menu-toggle {
  display: none !important;
}

#prince-bay-proposal .site-nav .wordmark,
#prince-bay-proposal .mega-top .wordmark {
  color: rgb(245 242 235);
}

#prince-bay-proposal .site-nav .logo-lockup,
#prince-bay-proposal .mega-top .logo-lockup {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  min-height: 60px;
  line-height: 1;
  text-transform: none;
}

#prince-bay-proposal .brand-mark {
  width: 92px;
  height: auto;
  aspect-ratio: 476 / 370;
  object-fit: contain;
  flex: 0 0 auto;
  filter: drop-shadow(0 10px 18px rgb(0 0 0 / .22));
}

#prince-bay-proposal .site-nav .wordmark .brand-name,
#prince-bay-proposal .mega-top .wordmark .brand-name {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  color: rgb(245 242 235);
  font-family: var(--font-cormorant), Georgia, serif;
  font-size: 31px;
  font-weight: 400;
  line-height: .82;
  letter-spacing: 0;
  text-transform: uppercase;
  white-space: nowrap;
}

#prince-bay-proposal .site-nav .brand-name span,
#prince-bay-proposal .mega-top .brand-name span {
  color: rgb(190 142 75);
  font-family: var(--font-work-sans), sans-serif;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  text-transform: none;
}

#prince-bay-proposal .site-nav .wordmark > span:not(.brand-name),
#prince-bay-proposal .mega-top .wordmark > span:not(.brand-name) {
  color: rgb(190 142 75);
}

#prince-bay-proposal .menu-select {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-height: 48px;
  padding: 12px 20px;
  border: 1px solid rgb(190 142 75 / .46);
  background: rgb(6 8 15 / .22);
  color: rgb(245 242 235);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    background-color .4s var(--nh-motion-ease),
    border-color .4s var(--nh-motion-ease),
    color .4s var(--nh-motion-ease),
    box-shadow .4s var(--nh-motion-ease);
}

#prince-bay-proposal .menu-select:hover,
#prince-bay-proposal .menu-select[aria-expanded="true"] {
  background: rgb(190 142 75 / .12);
  border-color: rgb(190 142 75 / .7);
  color: #fff;
}

#prince-bay-proposal .menu-lines {
  display: grid;
  gap: 6px;
  width: 24px;
}

#prince-bay-proposal .menu-lines span {
  display: block;
  height: 1px;
  background: currentColor;
  transform-origin: center;
  transition: transform .36s var(--nh-motion-ease), opacity .36s var(--nh-motion-ease);
}

#prince-bay-proposal .menu-select[aria-expanded="true"] .menu-lines span:first-child {
  transform: translateY(3.5px) rotate(42deg);
}

#prince-bay-proposal .menu-select[aria-expanded="true"] .menu-lines span:last-child {
  transform: translateY(-3.5px) rotate(-42deg);
}

#prince-bay-proposal .mega-overlay {
  z-index: 68;
  background: rgb(6 8 15 / .58);
  backdrop-filter: blur(8px);
}

#prince-bay-proposal .mega-panel {
  inset: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 70;
  display: block;
  min-height: auto;
  max-height: none;
  height: auto;
  padding: 0;
  overflow: auto;
  background:
    linear-gradient(135deg, rgb(6 8 15 / .96), rgb(12 16 24 / .94)),
    url("/brand-assets/prince-bay/deep-water-yachting-estate.webp") center / cover no-repeat;
  color: rgb(245 242 235);
  border: 0;
  box-shadow: none;
  opacity: 0;
  pointer-events: none;
  transform: translateY(16px);
  transition: opacity .32s var(--nh-motion-ease), transform .42s var(--nh-motion-ease);
}

#prince-bay-proposal .mega-panel.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

#prince-bay-proposal .mega-panel[hidden],
#prince-bay-proposal .mega-overlay[hidden] {
  display: none !important;
}

#prince-bay-proposal .mega-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  min-height: 84px;
  padding: 18px clamp(22px, 5vw, 64px);
  border-bottom: 1px solid rgb(201 189 166 / .16);
  background: rgb(6 8 15 / .48);
  backdrop-filter: blur(14px);
}

#prince-bay-proposal .mega-close {
  min-height: 48px;
  padding: 12px 18px;
  border: 1px solid rgb(201 189 166 / .28);
  background: transparent;
  color: rgb(245 242 235);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
}

#prince-bay-proposal .mega-close:hover {
  border-color: rgb(190 142 75 / .7);
  color: rgb(190 142 75);
}

#prince-bay-proposal .mega-intro,
#prince-bay-proposal .mega-strategy-grid,
#prince-bay-proposal .mega-quickbar {
  width: min(1320px, calc(100% - 44px));
  margin-left: auto;
  margin-right: auto;
}

#prince-bay-proposal .mega-intro {
  display: grid;
  grid-template-columns: minmax(0, .58fr) minmax(300px, .42fr);
  gap: clamp(24px, 4vw, 56px);
  align-items: end;
  padding: clamp(18px, 2.8vw, 32px) 0 16px;
  border-bottom: 1px solid rgb(201 189 166 / .16);
}

#prince-bay-proposal .mega-intro .eyebrow {
  grid-column: 1;
  color: rgb(190 142 75);
}

#prince-bay-proposal .mega-intro h2 {
  grid-column: 1;
  margin-top: 12px;
  max-width: 620px;
  color: rgb(245 242 235);
  font-size: clamp(36px, 3.4vw, 46px);
}

#prince-bay-proposal .mega-intro p {
  grid-column: 2;
  grid-row: 1 / span 2;
  align-self: end;
  max-width: 400px;
  margin: 0 0 4px;
  color: rgb(226 222 213 / .78);
}

#prince-bay-proposal .mega-strategy-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(300px, .95fr);
  gap: 1px;
  margin-top: 22px;
  background: rgb(201 189 166 / .16);
  border: 1px solid rgb(201 189 166 / .16);
}

#prince-bay-proposal .mega-column,
#prince-bay-proposal .mega-feature {
  min-height: 0;
  padding: clamp(20px, 2.4vw, 30px);
  background: rgb(11 15 25 / .82);
}

#prince-bay-proposal .mega-column-label {
  margin: 0 0 16px;
  color: rgb(190 142 75);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
}

#prince-bay-proposal .mega-item {
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  gap: 12px;
  padding: 13px 0;
  border-top: 1px solid rgb(201 189 166 / .14);
  color: rgb(245 242 235);
}

#prince-bay-proposal .mega-item span {
  grid-row: 1 / span 2;
  color: rgb(190 142 75 / .9);
  font-size: 13px;
  font-weight: 600;
}

#prince-bay-proposal .mega-item strong {
  display: block;
  color: rgb(245 242 235);
  font-family: var(--font-work-sans), sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.05;
}

#prince-bay-proposal .mega-item small {
  grid-column: 2;
  display: block;
  margin-top: 6px;
  color: rgb(226 222 213 / .7);
  font-size: 14px;
  line-height: 1.36;
}

#prince-bay-proposal .mega-item:hover strong {
  color: rgb(190 142 75);
}

#prince-bay-proposal .mega-feature {
  display: flex;
  flex-direction: column;
  background: rgb(245 242 235 / .94);
  color: rgb(6 8 15);
}

#prince-bay-proposal .mega-feature .mega-column-label {
  color: rgb(143 101 36);
}

#prince-bay-proposal .mega-feature h3 {
  color: rgb(6 8 15);
  font-size: 30px;
}

#prince-bay-proposal .mega-feature p {
  margin-top: 12px;
  color: rgb(6 8 15 / .68);
}

#prince-bay-proposal .mega-feature ul {
  margin: 18px 0 20px;
  padding: 0;
  list-style: none;
}

#prince-bay-proposal .mega-feature li {
  padding: 8px 0;
  border-top: 1px solid rgb(6 8 15 / .12);
  color: rgb(6 8 15 / .72);
}

#prince-bay-proposal .mega-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
}

#prince-bay-proposal .mega-actions .ghost {
  color: rgb(6 8 15);
  border-color: rgb(6 8 15 / .2);
}

#prince-bay-proposal .mega-actions .ghost:hover {
  background: rgb(6 8 15);
  color: rgb(245 242 235);
}

#prince-bay-proposal .mega-quickbar {
  display: none;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 0 20px;
}

#prince-bay-proposal .mega-quickbar a {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid rgb(201 189 166 / .16);
  color: rgb(226 222 213 / .76);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
}

#prince-bay-proposal .mega-quickbar a:hover {
  color: rgb(190 142 75);
  border-color: rgb(190 142 75 / .42);
}

#prince-bay-proposal footer,
#prince-bay-onboarding footer,
#prince-bay-planning-kit footer {
  background:
    linear-gradient(135deg, rgb(6 8 15 / .94), rgb(12 16 24 / .92)),
    url("/brand-assets/prince-bay/deep-water-yachting-estate.webp") center / cover no-repeat;
  background-color: var(--nh-dark);
  color: var(--nh-dark-text);
}

#prince-bay-proposal footer .wordmark,
#prince-bay-onboarding footer .wordmark,
#prince-bay-planning-kit footer .wordmark {
  color: var(--nh-dark-text);
}

#prince-bay-proposal footer .wordmark span,
#prince-bay-onboarding footer .wordmark span,
#prince-bay-planning-kit footer .wordmark span {
  color: var(--nh-gold-readable);
}

#prince-bay-proposal footer p,
#prince-bay-proposal footer li,
#prince-bay-proposal .footer-bottom,
#prince-bay-onboarding footer,
#prince-bay-planning-kit footer {
  color: var(--nh-dark-muted);
}

#prince-bay-proposal .mobile-cta-bar {
  background: rgb(6 8 15 / .94);
  border-top-color: var(--nh-dark-line);
}

@media (max-width: 900px) {
  #prince-bay-proposal #corners .corner-grid {
    grid-template-columns: 1fr;
    gap: clamp(16px, 4vw, 22px) !important;
    margin-top: clamp(28px, 8vw, 44px) !important;
    padding: 0;
    background: transparent !important;
    border: 0 !important;
    box-shadow: none;
    transform: none !important;
  }

  #prince-bay-proposal #corners .corner-card {
    --corner-float: 0px !important;
    --corner-height: auto !important;
    transform: none !important;
    min-height: clamp(300px, 70vw, 380px);
  }

  #prince-bay-proposal #navigation .nav-shift {
    grid-template-columns: 1fr;
  }

  #prince-bay-proposal #navigation .shift-card {
    transform: none;
  }
}

@media (max-width: 1120px) {
  #prince-bay-proposal h1,
  #prince-bay-onboarding h1 {
    font-size: 62px;
  }

  #prince-bay-proposal h2,
  #prince-bay-onboarding h2 {
    font-size: 46px;
  }

  #prince-bay-proposal .site-nav {
    min-height: 78px;
  }

  #prince-bay-proposal .mega-panel.is-open,
  #prince-bay-proposal .mega-overlay.is-open {
    display: block !important;
  }

  #prince-bay-proposal .mega-intro h2 {
    font-size: 46px;
  }

  #prince-bay-proposal .mega-strategy-grid {
    grid-template-columns: 1fr 1fr;
  }

  #prince-bay-proposal .mega-column,
  #prince-bay-proposal .mega-feature {
    min-height: auto;
  }

  #prince-bay-proposal .mega-feature {
    grid-column: 1 / -1;
  }

  #prince-bay-proposal #local .local-grid {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  #prince-bay-proposal #local .map-panel {
    min-height: clamp(420px, 56vh, 560px);
  }

  #prince-bay-proposal #local .area-list,
  #prince-bay-proposal .local-grid > .area-list {
    width: 100%;
    margin-left: 0;
  }

  #prince-bay-proposal #local .area-list div {
    width: 100%;
  }
}

@media (max-width: 767px) {
  #prince-bay-proposal h1,
  #prince-bay-onboarding h1,
  #prince-bay-planning-kit h1 {
    font-size: 42px;
  }

  #prince-bay-proposal h2,
  #prince-bay-onboarding h2,
  #prince-bay-planning-kit h2 {
    font-size: 34px;
  }

  #prince-bay-proposal h3,
  #prince-bay-onboarding h3,
  #prince-bay-planning-kit h3 {
    font-size: 26px;
  }

  #prince-bay-proposal .hero,
  #prince-bay-onboarding .hero,
  #prince-bay-planning-kit .hero {
    padding: 124px 20px 76px;
  }

  #prince-bay-proposal .hero::before,
  #prince-bay-onboarding .hero::before,
  #prince-bay-planning-kit .hero::before {
    background: linear-gradient(180deg, rgb(6 8 15 / .78), rgb(12 16 24 / .60));
  }

  #prince-bay-proposal .page,
  #prince-bay-onboarding .section,
  #prince-bay-planning-kit .section {
    padding: 72px 20px;
  }

  #prince-bay-proposal .wordmark,
  #prince-bay-onboarding .wordmark,
  #prince-bay-planning-kit .wordmark {
    font-size: 24px;
  }

  #prince-bay-proposal .site-nav {
    min-height: 72px;
    padding: 12px 18px;
  }

  #prince-bay-proposal .site-nav .wordmark,
  #prince-bay-proposal .mega-top .wordmark {
    font-size: 26px;
  }

  #prince-bay-proposal .site-nav .logo-lockup,
  #prince-bay-proposal .mega-top .logo-lockup {
    gap: 12px;
    min-height: 50px;
  }

  #prince-bay-proposal .brand-mark {
    width: 66px;
    height: auto;
  }

  #prince-bay-proposal .site-nav .wordmark .brand-name,
  #prince-bay-proposal .mega-top .wordmark .brand-name {
    font-size: 24px;
  }

  #prince-bay-proposal .site-nav .brand-name span,
  #prince-bay-proposal .mega-top .brand-name span {
    font-size: 10px;
  }

  #prince-bay-proposal .menu-select,
  #prince-bay-proposal .mega-close {
    min-height: 44px;
    padding: 10px 13px;
  }

  #prince-bay-proposal .menu-select {
    gap: 12px;
  }

  #prince-bay-proposal .mega-top {
    min-height: 72px;
    padding: 14px 20px;
  }

  #prince-bay-proposal .mega-intro,
  #prince-bay-proposal .mega-strategy-grid,
  #prince-bay-proposal .mega-quickbar {
    width: calc(100% - 40px);
  }

  #prince-bay-proposal .mega-intro {
    display: block;
    padding: 36px 0 26px;
  }

  #prince-bay-proposal .mega-intro h2 {
    font-size: 34px;
  }

  #prince-bay-proposal .mega-intro p {
    max-width: none;
    margin-top: 16px;
  }

  #prince-bay-proposal .mega-strategy-grid {
    grid-template-columns: 1fr;
  }

  #prince-bay-proposal .mega-column,
  #prince-bay-proposal .mega-feature {
    padding: 24px 20px;
  }

  #prince-bay-proposal .mega-item strong {
    font-size: 20px;
  }

  #prince-bay-proposal .mega-actions .btn {
    width: 100%;
  }

  #prince-bay-proposal #offer .offer-actions .btn {
    width: 100%;
  }

  #prince-bay-proposal .hero-actions {
    display: none;
  }

  #prince-bay-proposal #portfolio .portfolio-grid {
    grid-template-columns: 1fr;
    width: calc(100% + 40px);
    margin-left: -20px;
    margin-right: -20px;
    gap: 16px;
  }

  #prince-bay-proposal #portfolio .portfolio-card,
  #prince-bay-proposal #portfolio .portfolio-card:nth-child(2),
  #prince-bay-proposal #portfolio .portfolio-card:nth-child(3) {
    height: clamp(420px, 128vw, 560px);
    min-height: 0;
    margin: 0;
  }

  #prince-bay-proposal #portfolio .portfolio-card img {
    height: 100%;
    min-height: 0;
  }

  #prince-bay-proposal #portfolio .portfolio-card figcaption {
    padding: 72px 24px 24px;
  }

  #prince-bay-proposal #portfolio .portfolio-card figcaption h3 {
    font-size: clamp(28px, 8vw, 36px);
    max-width: 12ch;
  }
}

@media (min-width: 768px) and (max-width: 1120px) {
  #prince-bay-proposal #portfolio .portfolio-grid {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    gap: 18px;
  }

  #prince-bay-proposal #portfolio .portfolio-card,
  #prince-bay-proposal #portfolio .portfolio-card:nth-child(2),
  #prince-bay-proposal #portfolio .portfolio-card:nth-child(3) {
    height: clamp(460px, 58vw, 660px);
    min-height: 0;
    margin: 0;
  }

  #prince-bay-proposal #portfolio .portfolio-card:nth-child(3) {
    grid-column: 1 / -1;
    height: clamp(420px, 52vw, 620px);
  }

  #prince-bay-proposal #portfolio .portfolio-card img {
    height: 100%;
    min-height: 0;
  }
}

#mulmi-house,
#mulmi-house * {
  box-sizing: border-box;
  letter-spacing: 0;
}

#mulmi-house {
  --mh-paper: #f2f3ef;
  --mh-ink: #1a1818;
  --mh-charcoal: #20282f;
  --mh-charcoal-soft: #3d4249;
  --mh-muted: #54595f;
  --mh-gold: #baaa8e;
  --mh-gold-border: #b09b7b;
  --mh-white: #ffffff;
  --mh-line: rgb(26 24 24 / .14);
  --mh-dark-line: rgb(255 255 255 / .18);
  --mh-serif: var(--font-cormorant, var(--font-fraunces)), Georgia, serif;
  --mh-sans: var(--font-work-sans, var(--font-inter-tight)), Arial, sans-serif;
  min-width: 320px;
  background: var(--mh-paper);
  color: var(--mh-ink);
  font-family: var(--mh-sans);
  overflow-x: hidden;
}

#mulmi-house a {
  color: inherit;
}

#mulmi-house img {
  display: block;
  max-width: 100%;
}

#mulmi-house .mh-skip {
  position: fixed;
  top: 14px;
  left: 14px;
  z-index: 1000;
  transform: translateY(-140%);
  background: var(--mh-charcoal);
  color: var(--mh-white);
  padding: 10px 14px;
  text-decoration: none;
}

#mulmi-house .mh-skip:focus {
  transform: translateY(0);
}

#mulmi-house .mh-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 24px;
  align-items: center;
  padding: 28px 34px;
  background: var(--mh-paper);
  box-shadow: 0 0 19px rgb(32 40 47 / .2);
}

#mulmi-house .mh-brand {
  display: inline-flex;
  min-height: 48px;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
}

#mulmi-house .mh-brand span {
  color: var(--mh-muted);
  font-size: 14px;
  font-weight: 500;
}

#mulmi-house .mh-brand strong {
  color: var(--mh-charcoal);
  font-family: var(--mh-serif);
  font-size: 30px;
  font-weight: 400;
  line-height: 1;
}

#mulmi-house .mh-header nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 4px;
}

#mulmi-house .mh-header nav a {
  min-height: 44px;
  padding: 12px 14px;
  color: var(--mh-charcoal);
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
}

#mulmi-house .mh-header nav a:hover {
  color: var(--mh-gold-border);
}

#mulmi-house .mh-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--mh-gold-border);
  border-radius: 0;
  background: transparent;
  color: var(--mh-ink);
  padding: 12px 22px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: background .18s ease, color .18s ease, transform .18s ease;
}

#mulmi-house .mh-button:hover {
  background: var(--mh-gold-border);
  color: var(--mh-white);
  transform: translateY(-1px);
}

#mulmi-house .mh-button-solid {
  background: var(--mh-gold-border);
  color: var(--mh-white);
}

#mulmi-house .mh-button-solid:hover {
  background: var(--mh-charcoal);
  border-color: var(--mh-charcoal);
}

#mulmi-house .mh-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 520px);
  gap: 44px;
  align-items: center;
  min-height: auto;
  padding: 72px 34px 64px;
  background: var(--mh-paper);
}

#mulmi-house .mh-hero-copy {
  max-width: 920px;
}

#mulmi-house .mh-eyebrow {
  margin: 0 0 14px;
  color: var(--mh-gold-border);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}

#mulmi-house h1,
#mulmi-house h2,
#mulmi-house h3,
#mulmi-house p {
  overflow-wrap: anywhere;
}

#mulmi-house h1,
#mulmi-house h2,
#mulmi-house h3 {
  margin: 0;
  color: inherit;
  font-family: var(--mh-serif);
  font-weight: 400;
  line-height: 1;
}

#mulmi-house h1 {
  max-width: 980px;
  font-size: 58px;
}

#mulmi-house h2 {
  font-size: 48px;
}

#mulmi-house h3 {
  font-size: 28px;
}

#mulmi-house p {
  margin: 0;
  color: var(--mh-muted);
  font-size: 17px;
  line-height: 1.65;
}

#mulmi-house .mh-hero-copy > p:not(.mh-eyebrow) {
  max-width: 760px;
  margin-top: 24px;
  color: var(--mh-charcoal);
  font-size: 20px;
}

#mulmi-house .mh-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

#mulmi-house .mh-hero-media {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  min-width: 0;
}

#mulmi-house .mh-hero-media img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

#mulmi-house .mh-hero-media img:first-child {
  grid-column: 1 / -1;
  height: 320px;
}

#mulmi-house .mh-facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--mh-line);
  border-bottom: 1px solid var(--mh-line);
  background: var(--mh-white);
}

#mulmi-house .mh-facts div {
  min-width: 0;
  padding: 28px 34px;
  border-right: 1px solid var(--mh-line);
}

#mulmi-house .mh-facts div:last-child {
  border-right: 0;
}

#mulmi-house .mh-facts span,
#mulmi-house .mh-apartment-grid span {
  display: block;
  margin-bottom: 10px;
  color: var(--mh-gold-border);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
}

#mulmi-house .mh-facts strong {
  display: block;
  color: var(--mh-charcoal);
  font-family: var(--mh-serif);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.05;
}

#mulmi-house .mh-facts p {
  margin-top: 10px;
}

#mulmi-house .mh-section {
  padding: 86px 34px;
}

#mulmi-house .mh-intro,
#mulmi-house .mh-rates {
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(0, 1fr);
  gap: 56px;
  align-items: start;
}

#mulmi-house .mh-copy {
  display: grid;
  gap: 18px;
}

#mulmi-house .mh-copy-wide {
  max-width: 980px;
}

#mulmi-house .mh-section-heading {
  max-width: 920px;
  margin-bottom: 42px;
}

#mulmi-house .mh-section-heading p:not(.mh-eyebrow) {
  margin-top: 18px;
}

#mulmi-house .mh-dark {
  background:
    linear-gradient(rgb(32 40 47 / .92), rgb(32 40 47 / .92)),
    url("/brand-assets/tune-vibration/nepal/image-006.jpg") center / cover;
  color: var(--mh-white);
}

#mulmi-house .mh-dark p,
#mulmi-house .mh-dark small {
  color: rgb(255 255 255 / .78);
}

#mulmi-house .mh-dark .mh-eyebrow {
  color: var(--mh-gold);
}

#mulmi-house .mh-apartment-grid,
#mulmi-house .mh-included-grid,
#mulmi-house .mh-local-grid,
#mulmi-house .mh-faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

#mulmi-house .mh-apartment-grid article {
  min-height: 240px;
  padding: 30px;
  border: 1px solid var(--mh-dark-line);
  background: rgb(255 255 255 / .08);
}

#mulmi-house .mh-apartment-grid h3,
#mulmi-house .mh-apartment-grid p,
#mulmi-house .mh-apartment-grid small {
  display: block;
  margin-top: 14px;
}

#mulmi-house .mh-included-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

#mulmi-house .mh-included-grid article,
#mulmi-house .mh-map-card,
#mulmi-house .mh-faq-grid article {
  min-width: 0;
  border: 1px solid var(--mh-line);
  border-radius: 0;
  background: var(--mh-white);
  padding: 24px;
}

#mulmi-house .mh-included-grid p {
  color: var(--mh-charcoal);
}

#mulmi-house .mh-rates {
  background: #e8e5dc;
}

#mulmi-house .mh-location {
  background: var(--mh-white);
}

#mulmi-house .mh-map-card ul {
  display: grid;
  gap: 12px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
}

#mulmi-house .mh-map-card li {
  border-left: 2px solid var(--mh-gold-border);
  padding-left: 14px;
  color: var(--mh-muted);
  font-size: 17px;
  line-height: 1.55;
}

#mulmi-house .mh-map-card a {
  display: block;
  margin-top: 12px;
  color: var(--mh-charcoal);
  font-weight: 700;
  text-decoration-color: var(--mh-gold-border);
  text-underline-offset: 4px;
}

#mulmi-house .mh-faq-grid {
  grid-template-columns: 1fr;
  max-width: 1040px;
}

#mulmi-house .mh-faq-grid article {
  display: grid;
  grid-template-columns: minmax(220px, .58fr) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
}

#mulmi-house .mh-faq-grid h3 {
  font-size: 26px;
}

#mulmi-house .mh-final {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: center;
  padding: 58px 34px;
  background: var(--mh-charcoal);
  color: var(--mh-white);
}

#mulmi-house .mh-final p {
  max-width: 760px;
  margin-top: 14px;
  color: rgb(255 255 255 / .78);
}

#mulmi-house .mh-final .mh-actions {
  justify-content: flex-end;
  margin-top: 0;
}

#mulmi-house .mh-final .mh-button {
  color: var(--mh-white);
}

@media (max-width: 980px) {
  #mulmi-house .mh-header,
  #mulmi-house .mh-hero,
  #mulmi-house .mh-intro,
  #mulmi-house .mh-rates,
  #mulmi-house .mh-final {
    grid-template-columns: 1fr;
  }

  #mulmi-house .mh-header nav {
    justify-content: flex-start;
  }

  #mulmi-house .mh-facts,
  #mulmi-house .mh-included-grid {
    grid-template-columns: 1fr 1fr;
  }

  #mulmi-house .mh-final .mh-actions {
    justify-content: flex-start;
  }
}

@media (max-width: 680px) {
  #mulmi-house .mh-header,
  #mulmi-house .mh-hero,
  #mulmi-house .mh-section,
  #mulmi-house .mh-final {
    padding-left: 20px;
    padding-right: 20px;
  }

  #mulmi-house h1 {
    font-size: 36px;
  }

  #mulmi-house h2 {
    font-size: 34px;
  }

  #mulmi-house h3 {
    font-size: 24px;
  }

  #mulmi-house .mh-hero-copy > p:not(.mh-eyebrow) {
    font-size: 18px;
  }

  #mulmi-house .mh-hero-media,
  #mulmi-house .mh-facts,
  #mulmi-house .mh-apartment-grid,
  #mulmi-house .mh-included-grid,
  #mulmi-house .mh-local-grid,
  #mulmi-house .mh-faq-grid article {
    grid-template-columns: 1fr;
  }

  #mulmi-house .mh-hero-media img,
  #mulmi-house .mh-hero-media img:first-child {
    height: 260px;
  }

  #mulmi-house .mh-facts div {
    border-right: 0;
    border-bottom: 1px solid var(--mh-line);
  }

  #mulmi-house .mh-facts div:last-child {
    border-bottom: 0;
  }
}
`;
