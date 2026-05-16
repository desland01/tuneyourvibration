import type { ReactNode } from "react";
import {
  afterCareGuidance,
  business,
  credentials,
  getService,
  groupSoundHealing,
  images,
  nepalPages,
  preparationGuidance,
  primaryNav,
  servicePages,
  sessionOfferings,
  testimonials,
  type NepalPageKind,
  type ServicePage,
} from "@/lib/tyv-data";
import { BowlWave } from "@/components/signatures/BowlWave";
import { AuraField } from "@/components/signatures/AuraField";
import { PalmRest } from "@/components/signatures/PalmRest";
import { CordCut } from "@/components/signatures/CordCut";
import { GlyphScatter } from "@/components/signatures/GlyphScatter";
import { CircleOfMats } from "@/components/signatures/CircleOfMats";
import { PrayerFlags } from "@/components/signatures/PrayerFlags";
import { ContourReveal } from "@/components/signatures/ContourReveal";
import { CourtyardPlan } from "@/components/signatures/CourtyardPlan";
import { PortraitDissolve } from "@/components/signatures/PortraitDissolve";
import { InkSeal } from "@/components/signatures/InkSeal";
import { CandleBokeh } from "@/components/signatures/CandleBokeh";
import { Lantern } from "@/components/signatures/Lantern";
import { WaterRipple } from "@/components/signatures/WaterRipple";

/* ---------------------------------------------------------------------------
   Primitives
--------------------------------------------------------------------------- */

type ShellProps = { children: ReactNode };

function telHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

function SiteShell({ children }: ShellProps) {
  return (
    <div className="tyv-site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="tyv-header">
        <a className="tyv-brand" href="/" aria-label="Tune Vibration — home">
          <span className="tyv-brand-mark" aria-hidden="true">
            tv
          </span>
          <span className="tyv-brand-lockup">
            <span className="tyv-brand-name">Tune Vibration</span>
            <span className="tyv-brand-tag">Charlotte · Kathmandu</span>
          </span>
        </a>

        <nav className="tyv-nav" aria-label="Primary">
          {primaryNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="tyv-call" href={telHref(business.phoneUs)}>
          Call Now
        </a>
      </header>

      <main id="main">{children}</main>

      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="tyv-footer">
      <div className="tyv-footer__rail">
        <div>
          <h3>Tune Vibration</h3>
          <p>{business.tagline}</p>
        </div>
        <div>
          <h3>Sessions</h3>
          <ul>
            {servicePages.map((page) => (
              <li key={page.slug}>
                <a href={`/${page.slug}`}>{page.title}</a>
              </li>
            ))}
            <li>
              <a href="/group-sound-healing-yoga">Group sound &amp; yoga</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Nepal</h3>
          <ul>
            <li>
              <a href="/nepal-retreats">Spiritual retreats</a>
            </li>
            <li>
              <a href="/nepal-treks">Guided treks</a>
            </li>
            <li>
              <a href="/kathmandu-valley-tours">Kathmandu Valley tours</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={telHref(business.phoneUs)}>USA · {business.phoneUs}</a>
            </li>
            <li>
              <a href={telHref(business.phoneNepal)}>Nepal · {business.phoneNepal}</a>
            </li>
            <li>
              <a href={business.whatsappUs}>WhatsApp USA</a>
            </li>
            <li>
              <a href={business.whatsappNepal}>WhatsApp Nepal</a>
            </li>
            <li>
              <a href="/book">Book a session</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tyv-footer__bottom">
        <span className="tyv-footer__mark">Tune Vibration · Christina Landry</span>
        <span>Virtual worldwide · Charlotte NC · Lalitpur, Nepal</span>
      </div>
    </footer>
  );
}

type HeroFrameProps = {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  image?: string;
  imageAlt?: string;
  actions?: ReactNode;
};

function HeroFrame({
  eyebrow,
  title,
  lead,
  image = images.hero,
  imageAlt = "",
  actions,
}: HeroFrameProps) {
  return (
    <section className="tyv-page-hero">
      <div className="tyv-page-hero__rail">
        <div className="tyv-page-hero__content">
          <p className="tyv-eyebrow">{eyebrow}</p>
          <h1 className="tyv-page-hero__title">{title}</h1>
          <p className="tyv-page-hero__lead">{lead}</p>
          {actions ? (
            <div className="tyv-page-hero__actions">{actions}</div>
          ) : null}
        </div>
        <div className="tyv-page-hero__media">
          <img src={image} alt={imageAlt} loading="eager" />
        </div>
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
};

function SectionHeading({ eyebrow, title, lead, align = "center" }: SectionHeadingProps) {
  return (
    <div
      className={`tyv-section-heading${align === "left" ? " tyv-section-heading--left" : ""}`}
    >
      {eyebrow ? <p className="tyv-eyebrow">{eyebrow}</p> : null}
      <h2 className="tyv-section-heading__title">{title}</h2>
      {lead ? <p className="tyv-section-heading__lead">{lead}</p> : null}
    </div>
  );
}

function InviteRail({
  variant = "warm",
  eyebrow = "An open door",
  title,
  primary,
  secondary,
}: {
  variant?: "warm" | "lapis";
  eyebrow?: string;
  title: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section
      className={`tyv-invite${variant === "lapis" ? " tyv-invite--lapis" : ""}`}
    >
      <div className="tyv-invite__rail">
        <div>
          <p className="tyv-eyebrow">{eyebrow}</p>
          <h2 className="tyv-invite__title">{title}</h2>
        </div>
        <div className="tyv-invite__locations">
          <div className="tyv-invite__loc">
            <span className="tyv-invite__loc-label">Charlotte · USA</span>
            <a className="tyv-invite__loc-value" href={telHref(business.phoneUs)}>
              {business.phoneUs}
            </a>
          </div>
          <div className="tyv-invite__loc">
            <span className="tyv-invite__loc-label">Lalitpur · Nepal</span>
            <a
              className="tyv-invite__loc-value"
              href={telHref(business.phoneNepal)}
            >
              {business.phoneNepal}
            </a>
          </div>
        </div>
        <div className="tyv-invite__actions">
          <a
            className={`tyv-btn ${
              variant === "lapis" ? "tyv-btn--on-dark" : "tyv-btn--primary"
            }`}
            href={primary?.href ?? "/book"}
          >
            {primary?.label ?? "Book a Session"}
          </a>
          <a
            className={`tyv-btn ${
              variant === "lapis" ? "tyv-btn--on-dark" : "tyv-btn--ghost"
            }`}
            href={secondary?.href ?? business.whatsappUs}
          >
            {secondary?.label ?? "WhatsApp Christina"}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   Home — Two-doorway hero + editorial flow
--------------------------------------------------------------------------- */

function TwoDoorwayHero() {
  return (
    <section className="tyv-hero-doors" aria-labelledby="tyv-hero-title">
      <img
        className="tyv-hero-doors__photo"
        src={images.hero}
        alt=""
        aria-hidden="true"
      />
      <div className="tyv-hero-doors__veil" aria-hidden="true" />
      <div className="tyv-hero-doors__inner">
        <p className="tyv-hero-doors__eyebrow">
          Charlotte · Lalitpur · Virtual worldwide
        </p>
        <h1 id="tyv-hero-title" className="tyv-hero-doors__title">
          A quieter frequency,
          <br />
          <em>an open door.</em>
        </h1>
        <p className="tyv-hero-doors__lead">
          Christina Landry offers vibrational healing, sound therapy, Reiki, and
          chakra clearing for heart-led people. The same practice also opens an
          unhurried door into Nepal &mdash; retreats, treks, and quiet days in
          the Kathmandu Valley.
        </p>

        <div className="tyv-hero-doors__rails">
          <a className="tyv-doorway" href="/energy-healing">
            <span className="tyv-doorway__corner tyv-doorway__corner--tl" />
            <span className="tyv-doorway__corner tyv-doorway__corner--tr" />
            <span className="tyv-doorway__corner tyv-doorway__corner--bl" />
            <span className="tyv-doorway__corner tyv-doorway__corner--br" />
            <span className="tyv-doorway__eyebrow">A session</span>
            <span className="tyv-doorway__title">Return to your own frequency.</span>
            <span className="tyv-doorway__lead">
              Energy healing, sound, Reiki, chakra and aura clearing &mdash; virtual
              worldwide, or in person in Charlotte and Lalitpur.
            </span>
            <span className="tyv-doorway__cta">Step in</span>
          </a>

          <a className="tyv-doorway" href="/nepal-retreats">
            <span className="tyv-doorway__corner tyv-doorway__corner--tl" />
            <span className="tyv-doorway__corner tyv-doorway__corner--tr" />
            <span className="tyv-doorway__corner tyv-doorway__corner--bl" />
            <span className="tyv-doorway__corner tyv-doorway__corner--br" />
            <span className="tyv-doorway__eyebrow">The journey</span>
            <span className="tyv-doorway__title">Walk into Nepal with a guide.</span>
            <span className="tyv-doorway__lead">
              Private retreats, Himalayan treks, and Kathmandu Valley days, hosted
              by someone who lives there.
            </span>
            <span className="tyv-doorway__cta">Begin</span>
          </a>
        </div>

        <div className="tyv-hero-doors__locations" aria-hidden="true">
          <span>Energy Alchemist</span>
          <span>15+ years of practice</span>
          <span>Heart-led, never hurried</span>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <SiteShell>
      <TwoDoorwayHero />

      {/* Editorial pause */}
      <section className="tyv-section tyv-section--pause">
        <div className="tyv-prose-rail">
          <p className="tyv-eyebrow">A word before the work</p>
          <p className="tyv-marginal">
            &ldquo;The body remembers steadiness before the mind agrees to
            it.&rdquo;
          </p>
          <p>
            Tune Vibration is a small practice, not a wellness brand. Christina
            holds space for clients who feel a lot &mdash; the sensitive, the
            burned-out, the quietly curious &mdash; and helps the nervous system
            find its way back to a steadier breath through sound, intuitive
            energy work, and patience.
          </p>
          <p>
            What began in Charlotte, North Carolina now lives in the Kathmandu
            Valley. Sessions still happen virtually worldwide, in Charlotte
            visits, and in Lalitpur. Retreats, treks, and quiet days through
            Nepal grew from the same practice &mdash; a way to invite people
            into the place that has been holding the work.
          </p>
        </div>
      </section>

      {/* Session list */}
      <section className="tyv-section tyv-section--soft" id="sessions">
        <SectionHeading
          eyebrow="Sessions"
          title={<>Five doorways into the <em>same work</em>.</>}
          lead="One practice expressed five ways. Begin where you feel pulled; Christina will meet you there."
        />
        <ul className="tyv-list" aria-label="Healing services">
          {servicePages.map((page) => (
            <li key={page.slug} className="tyv-list__item">
              <div>
                <h3 className="tyv-list__title">{page.title}</h3>
                <p className="tyv-list__meta">{page.eyebrow}</p>
              </div>
              <div>
                <p className="tyv-list__body">{page.intro}</p>
                <a className="tyv-list__link" href={`/${page.slug}`}>
                  Read more
                </a>
              </div>
              <div />
            </li>
          ))}
        </ul>
      </section>

      {/* Christina editorial block */}
      <section className="tyv-section">
        <div className="tyv-editorial">
          <div className="tyv-editorial__media">
            <img
              src={images.christina}
              alt="Christina holding space during an in-person session in Nepal"
            />
          </div>
          <div className="tyv-editorial__prose">
            <p className="tyv-eyebrow">Meet Christina</p>
            <h2 className="tyv-section-heading__title">
              An <em>Energeticist</em> who works with sound, intuition, and
              ordinary kindness.
            </h2>
            <p>
              Christina has been sensitive to frequency and unspoken feeling
              since she was a child. Fifteen years of metaphysical study, sound
              training, Reiki lineage, Jungian psychology, and lived practice
              shaped a way of working that feels closer to a slow conversation
              than a treatment.
            </p>
            <p className="tyv-marginal">
              &ldquo;Gentle is not the opposite of strong. It is the form
              strength takes when it has nothing to prove.&rdquo;
            </p>
            <p>
              Her sessions blend intuitive scanning, sound and vibration work,
              chakra and aura clearing, and Tree of Life grid healing &mdash;
              held with the steadiness of someone who has spent years learning
              how to stay quiet on purpose.
            </p>
            <a className="tyv-list__link" href="/about-christina">
              Read Christina&rsquo;s story
            </a>
          </div>
        </div>
      </section>

      {/* Nepal plate */}
      <section className="tyv-plate" aria-labelledby="nepal-door-title">
        <img
          className="tyv-plate__photo"
          src={images.nepalLandscape}
          alt=""
          aria-hidden="true"
        />
        <div className="tyv-plate__veil" aria-hidden="true" />
        <div className="tyv-plate__inner">
          <p className="tyv-plate__eyebrow">Nepal · The journey</p>
          <h2 id="nepal-door-title" className="tyv-plate__title">
            The Himalaya is not a backdrop.
            <br />
            <em>It is part of the work.</em>
          </h2>
          <p className="tyv-plate__lead">
            Christina hosts private spiritual retreats in the Kathmandu Valley,
            guided trekking across Annapurna, Everest, Langtang, and Mustang,
            and quiet days through Patan, Bhaktapur, and Boudhanath. Small
            groups. Real logistics. A guide who lives there.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a className="tyv-btn tyv-btn--on-dark" href="/nepal-retreats">
              Spiritual Retreats
            </a>
            <a className="tyv-btn tyv-btn--on-dark" href="/nepal-treks">
              Guided Treks
            </a>
            <a className="tyv-btn tyv-btn--on-dark" href="/kathmandu-valley-tours">
              Valley Tours
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial paragraph (no card grid) */}
      <section className="tyv-section tyv-section--deep">
        <SectionHeading
          eyebrow="What clients say"
          title={<>Quieter body. <em>Clearer signal.</em></>}
          lead="Reviews consistently point to emotional release, energetic clarity, and Christina's grounded intuitive presence."
        />
        <div className="tyv-three-up">
          {testimonials.map((t) => (
            <figure key={t.quote} className="tyv-quiet-card" style={{ borderTopColor: "var(--ember)" }}>
              <blockquote
                style={{ margin: 0, fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 22, lineHeight: 1.35, color: "var(--ink)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="tyv-quiet-card__eyebrow">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <InviteRail
        eyebrow="Begin"
        title={
          <>
            Book a session. <em>Or write first.</em>
          </>
        }
      />
    </SiteShell>
  );
}

/* ---------------------------------------------------------------------------
   Service Route — sound-healing gets the BowlWave signature
--------------------------------------------------------------------------- */

const SERVICE_TITLE_OVERRIDES: Partial<Record<ServicePage["slug"], ReactNode>> = {
  "sound-healing": (
    <>
      Sound meets the body
      <br />
      <em>before words arrive.</em>
    </>
  ),
  "energy-healing": (
    <>
      Energy work for the
      <br />
      <em>sensitive and the seeking.</em>
    </>
  ),
  "reiki-healing": (
    <>
      Reiki, held with
      <br />
      <em>unhurried hands.</em>
    </>
  ),
  "chakra-aura-clearing": (
    <>
      A clear field.
      <br />
      <em>A lighter step.</em>
    </>
  ),
  "intuitive-readings": (
    <>
      A reading is
      <br />
      <em>a conversation.</em>
    </>
  ),
};

function ServiceSignature({ slug }: { slug: ServicePage["slug"] }) {
  switch (slug) {
    case "sound-healing":
      return <BowlWave />;
    case "energy-healing":
      return <AuraField />;
    case "reiki-healing":
      return <PalmRest />;
    case "chakra-aura-clearing":
      return <CordCut />;
    case "intuitive-readings":
      return <GlyphScatter />;
    default:
      return null;
  }
}

export function ServiceRoutePage({ page }: { page: ServicePage }) {
  const heroTitle: ReactNode = SERVICE_TITLE_OVERRIDES[page.slug] ?? page.title;

  return (
    <SiteShell>
      <HeroFrame
        eyebrow={page.eyebrow}
        title={heroTitle}
        lead={page.intro}
        image={page.image}
        imageAlt={`${page.title} session with Christina`}
        actions={
          <>
            <a className="tyv-btn tyv-btn--primary" href="/book">
              Book a Session
            </a>
            <a className="tyv-btn tyv-btn--ghost" href={telHref(business.phoneUs)}>
              Call Now
            </a>
          </>
        }
      />

      <section
        className="tyv-section"
        aria-label="Signature moment"
        style={{ paddingTop: 0, paddingBottom: "clamp(56px, 8vw, 88px)" }}
      >
        <ServiceSignature slug={page.slug} />
      </section>

      {/* Who this is for */}
      <section className="tyv-section">
        <div className="tyv-editorial">
          <div className="tyv-editorial__prose">
            <p className="tyv-eyebrow">Who this is for</p>
            <h2 className="tyv-section-heading__title">
              {page.slug === "sound-healing" ? (
                <>
                  For the people who hear
                  <br />
                  <em>more than is said.</em>
                </>
              ) : (
                <>
                  Begin here if you feel
                  <br />
                  <em>called by this work.</em>
                </>
              )}
            </h2>
            <ul className="tyv-checklist">
              {page.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="tyv-editorial__media">
            <img
              src={page.image}
              alt={`${page.title} with Christina`}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* What may happen */}
      <section className="tyv-section tyv-section--soft">
        <div className="tyv-prose-rail">
          <p className="tyv-eyebrow">What may happen</p>
          <h2 className="tyv-section-heading__title" style={{ marginBottom: 8 }}>
            A session is <em>shaped to the day</em>.
          </h2>
          <p>
            No two sessions move the same way. Christina begins with an intuitive
            scan, then chooses from a working set of tools as the field asks for
            them. The list below is a description of the practice, not a fixed
            sequence.
          </p>
          <ul className="tyv-checklist">
            {page.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="tyv-marginal" style={{ marginTop: 32 }}>
            &ldquo;The work is to listen first, and let the body answer.&rdquo;
          </p>
        </div>
      </section>

      {/* What to expect (prose, not card grid) */}
      <section className="tyv-section">
        <SectionHeading
          eyebrow="What to expect"
          title={<>Grounded support, <em>before and after</em>.</>}
        />
        <div className="tyv-prose-rail">
          {page.expect.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* Related work */}
      <section className="tyv-section tyv-section--deep">
        <SectionHeading
          eyebrow="Continue"
          title={<>If this resonated, <em>read on</em>.</>}
        />
        <div className="tyv-three-up">
          {page.related.map((slug) => {
            const r = getService(slug);
            return (
              <a key={r.slug} className="tyv-quiet-card" href={`/${r.slug}`}>
                <span className="tyv-quiet-card__eyebrow">{r.eyebrow}</span>
                <span className="tyv-quiet-card__title">{r.title}</span>
                <span className="tyv-quiet-card__body">{r.intro}</span>
                <span className="tyv-quiet-card__cta">Read more</span>
              </a>
            );
          })}
        </div>
      </section>

      <InviteRail
        eyebrow="Begin"
        title={<>Book this session. <em>Or write first.</em></>}
      />
    </SiteShell>
  );
}

/* ---------------------------------------------------------------------------
   Other pages (Stage 1 — share primitives; bespoke signatures land in Stage 2)
--------------------------------------------------------------------------- */

export function BookPage() {
  return (
    <SiteShell>
      <HeroFrame
        eyebrow="Book a session"
        title={<>Choose the door that <em>feels right today</em>.</>}
        lead="Christina works virtually worldwide and in person in Charlotte and Lalitpur. Pick a session below, or write first and we will find the right fit."
        image={images.brand}
        imageAlt="Tune Vibration brand mark on warm canvas"
        actions={
          <>
            <a className="tyv-btn tyv-btn--primary" href={business.whatsappUs}>
              WhatsApp USA
            </a>
            <a className="tyv-btn tyv-btn--ghost" href={business.whatsappNepal}>
              WhatsApp Nepal
            </a>
          </>
        }
      />

      <section className="tyv-section">
        <SectionHeading
          eyebrow="Session menu"
          title={<>Five ways to <em>begin</em>.</>}
          lead="Pricing is shown where the source practice listed a public amount. Custom 90-minute sessions are confirmed directly with Christina."
        />
        <ul className="tyv-list">
          {sessionOfferings.map((offering) => (
            <li key={`${offering.name}-${offering.duration}`} className="tyv-list__item">
              <div>
                <h3 className="tyv-list__title">{offering.name}</h3>
                <p className="tyv-list__meta">{offering.duration}</p>
              </div>
              <div>
                <p className="tyv-list__body">{offering.summary}</p>
              </div>
              <div className="tyv-list__price">
                {offering.price ?? "Confirm"}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="tyv-section tyv-section--soft">
        <SectionHeading
          eyebrow="Prepare"
          title={<>Before the session</>}
          lead="Small choices the day of a session help the body land into the work."
        />
        <div className="tyv-lantern-wrap">
          <Lantern>
            <p className="tyv-eyebrow" style={{ textAlign: "center", margin: 0 }}>
              Steady the room
            </p>
            <ul className="tyv-checklist" style={{ margin: "0 auto" }}>
              {preparationGuidance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Lantern>
        </div>
      </section>

      <InviteRail
        eyebrow="Contact"
        title={<>Message Christina <em>directly</em>.</>}
        primary={{ label: "WhatsApp USA", href: business.whatsappUs }}
        secondary={{ label: "WhatsApp Nepal", href: business.whatsappNepal }}
      />
    </SiteShell>
  );
}

export function GroupSoundYogaPage() {
  return (
    <SiteShell>
      <HeroFrame
        eyebrow="Group sound &amp; yoga"
        title={<>Sound for the <em>whole room</em>.</>}
        lead="Group sound healing blends crystal bowls, Chumpi stones, alchemy sound, and guided relaxation. Beginner Ashtanga yoga with sound energy healing runs in Lalitpur by registration."
        image={images.group}
        imageAlt="Group sound healing circle"
        actions={
          <>
            <a className="tyv-btn tyv-btn--primary" href="/book">
              Reserve a Spot
            </a>
            <a className="tyv-btn tyv-btn--ghost" href={telHref(business.phoneNepal)}>
              Call Now
            </a>
          </>
        }
      />

      <section
        className="tyv-section"
        style={{ paddingTop: 0, paddingBottom: "clamp(56px, 8vw, 88px)" }}
      >
        <CircleOfMats />
      </section>

      <section className="tyv-section">
        <div className="tyv-editorial">
          <div className="tyv-editorial__prose">
            <p className="tyv-eyebrow">Group sound healing</p>
            <h2 className="tyv-section-heading__title">
              Harmonic Sound Energy <em>Healing Journey</em>.
            </h2>
            <ul className="tyv-checklist">
              {groupSoundHealing.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="tyv-editorial__prose">
            <p className="tyv-eyebrow">Yoga</p>
            <h2 className="tyv-section-heading__title">
              Beginner Ashtanga with <em>sound underneath</em>.
            </h2>
            <ul className="tyv-checklist">
              {groupSoundHealing.yogaDetails.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <InviteRail
        eyebrow="Join"
        title={<>Hold a place in the <em>next circle</em>.</>}
      />
    </SiteShell>
  );
}

function NepalSignature({ kind }: { kind: NepalPageKind }) {
  switch (kind) {
    case "retreats":
      return (
        <section
          className="tyv-section"
          style={{ paddingTop: 0, paddingBottom: "clamp(40px, 6vw, 72px)" }}
        >
          <PrayerFlags />
        </section>
      );
    case "treks":
      return (
        <section
          className="tyv-section"
          style={{ paddingTop: 0, paddingBottom: "clamp(56px, 8vw, 88px)" }}
        >
          <ContourReveal />
        </section>
      );
    case "tours":
      return (
        <section
          className="tyv-section"
          style={{ paddingTop: 0, paddingBottom: "clamp(56px, 8vw, 88px)" }}
        >
          <CourtyardPlan />
        </section>
      );
    default:
      return null;
  }
}

export function NepalPage({ kind }: { kind: NepalPageKind }) {
  const page = nepalPages[kind];
  const variant = kind === "retreats" ? "lapis" : "warm";

  return (
    <SiteShell>
      {kind === "retreats" ? (
        <section className="tyv-plate" aria-labelledby={`nepal-${kind}-title`}>
          <img
            className="tyv-plate__photo"
            src={page.image}
            alt=""
            aria-hidden="true"
          />
          <div className="tyv-plate__veil" aria-hidden="true" />
          <div className="tyv-plate__inner">
            <p className="tyv-plate__eyebrow">{page.keyword}</p>
            <h1 id={`nepal-${kind}-title`} className="tyv-plate__title">
              An 8-day pilgrimage,
              <br />
              <em>not an itinerary.</em>
            </h1>
            <p className="tyv-plate__lead">{page.intro}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <a className="tyv-btn tyv-btn--on-dark" href="/book">
                Ask About a Retreat
              </a>
              <a className="tyv-btn tyv-btn--on-dark" href={telHref(business.phoneNepal)}>
                Call Now
              </a>
            </div>
          </div>
        </section>
      ) : (
        <HeroFrame
          eyebrow={page.keyword}
          title={page.title}
          lead={page.intro}
          image={page.image}
          imageAlt={`${page.title} in Nepal`}
          actions={
            <>
              <a className="tyv-btn tyv-btn--primary" href="/book">
                Ask About Nepal
              </a>
              <a className="tyv-btn tyv-btn--ghost" href={telHref(business.phoneNepal)}>
                Call Now
              </a>
            </>
          }
        />
      )}

      <NepalSignature kind={kind} />

      <section className={`tyv-section${kind === "retreats" ? " tyv-section--lapis" : ""}`}>
        <SectionHeading
          eyebrow="What is offered"
          title={
            kind === "retreats" ? (
              <>Inside the <em>retreat container</em>.</>
            ) : kind === "tours" ? (
              <>A slow day through the <em>Valley</em>.</>
            ) : (
              <>Mountains we walk <em>well</em>.</>
            )
          }
        />
        <div className="tyv-three-up">
          {page.offerings.map((item) => (
            <div key={item} className="tyv-quiet-card">
              <span className="tyv-quiet-card__eyebrow">Included</span>
              <span className="tyv-quiet-card__title">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tyv-section tyv-section--soft">
        <div className="tyv-prose-rail">
          <p className="tyv-eyebrow">Booking</p>
          <h2 className="tyv-section-heading__title">
            Private guide logistics, <em>handled directly</em>.
          </h2>
          <p>
            Nepal retreat, tour, and trek bookings are confirmed in conversation
            with Christina. A deposit holds the dates; full payment is settled
            before travel. Guests bring their passports, visas, insurance,
            airfare, personal expenses, and tips unless noted otherwise.
          </p>
        </div>
      </section>

      <InviteRail
        variant={variant}
        eyebrow="Next step"
        title={<>Open a <em>conversation</em>.</>}
        primary={{ label: "WhatsApp Nepal", href: business.whatsappNepal }}
        secondary={{ label: "Email Christina", href: "/book" }}
      />
    </SiteShell>
  );
}

export function AboutPage() {
  return (
    <SiteShell>
      <HeroFrame
        eyebrow={business.role}
        title={<>Christina Landry, <em>up close</em>.</>}
        lead="A practice shaped by sensitivity, fifteen years of training, and a life that crossed from Charlotte to the Kathmandu Valley."
        image={images.christina}
        imageAlt="Christina Landry in a Nepal session room"
        actions={
          <>
            <a className="tyv-btn tyv-btn--primary" href="/book">
              Book a Session
            </a>
            <a className="tyv-btn tyv-btn--ghost" href="/credentials">
              View Credentials
            </a>
          </>
        }
      />

      <section className="tyv-section">
        <PortraitDissolve
          primary={images.christina}
          secondary={images.nepalChristina}
          primaryAlt="Christina with a Nepali friend, marigold garland in the Kathmandu Valley"
          secondaryAlt="Christina hosting a small retreat circle on a Lalitpur rooftop"
        />
      </section>

      <section className="tyv-section tyv-section--soft">
        <div className="tyv-prose-rail">
          <p>
            Christina has been sensitive to energy, frequency, and unspoken
            feeling since she was a child. Learning how to hold that sensitivity
            without being overwhelmed by it became, slowly, the practice.
          </p>
          <p className="tyv-marginal">
            &ldquo;I am not trying to convince anyone of anything. I am trying
            to make space for what is already true in the body.&rdquo;
          </p>
          <p>
            Her training crossed yoga, metaphysics, mediumship, color and sound
            healing, Reiki lineage, Jungian psychology, and a long stretch of
            silent meditation. The work she offers now blends intuitive
            scanning, frequency, Reiki, chakra balance, aura clearing, and
            grounded conversation.
          </p>
          <p>
            What began in Charlotte, North Carolina now lives in Lalitpur. The
            Nepal retreats, treks, and valley days came from the same instinct
            &mdash; to invite people into the place that has been holding the
            work.
          </p>
        </div>
      </section>

      <InviteRail
        eyebrow="Meet Christina"
        title={<>Book a session, <em>or write first</em>.</>}
      />
    </SiteShell>
  );
}

export function CredentialsPage() {
  return (
    <SiteShell>
      <HeroFrame
        eyebrow="Training &amp; lineage"
        title={<>Fifteen years of <em>quiet study</em>.</>}
        lead="Christina's practice is supported by metaphysical study, sound and color training, mediumship, spiritual counseling, Jungian psychology, and a yoga and meditation foundation."
        image={images.botanical}
        imageAlt="Botanical detail from a session space"
      />

      <section className="tyv-section">
        <ul className="tyv-credentials" aria-label="Christina's credentials and training">
          {credentials.map((credential) => (
            <li key={credential} className="tyv-credentials__item">
              <InkSeal initials="TV" />
              <span className="tyv-credentials__text">{credential}</span>
            </li>
          ))}
        </ul>
      </section>

      <InviteRail
        eyebrow="Background"
        title={<>Curious about the work? <em>Book a session.</em></>}
      />
    </SiteShell>
  );
}

export function TestimonialsPage() {
  return (
    <SiteShell>
      <HeroFrame
        eyebrow="Client reflections"
        title={<>What clients <em>say after</em>.</>}
        lead="Reviews from Christina's source practice consistently point to emotional release, energetic clarity, and a felt sense of being met."
        image={images.brand}
        imageAlt="Tune Vibration mark"
      />

      <section className="tyv-section tyv-section--lapis-deep" style={{ position: "relative", overflow: "hidden" }}>
        <CandleBokeh />
        <div className="tyv-three-up" style={{ position: "relative", zIndex: 1 }}>
          {testimonials.map((t) => (
            <figure
              key={t.quote}
              style={{
                margin: 0,
                padding: "32px 0",
                borderTop: "1px solid color-mix(in oklch, var(--ember) 50%, transparent)",
              }}
            >
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 22,
                  lineHeight: 1.4,
                  color: "var(--canvas)",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption
                style={{
                  marginTop: 18,
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "color-mix(in oklch, var(--ember) 80%, var(--canvas))",
                }}
              >
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <InviteRail
        eyebrow="Begin"
        title={<>Book a session, <em>or write first</em>.</>}
      />
    </SiteShell>
  );
}

export function AfterCarePage() {
  return (
    <SiteShell>
      <HeroFrame
        eyebrow="After a session"
        title={<>How to <em>integrate</em>.</>}
        lead="After-care is simple and practical: hydrate, rest, move gently, spend time outside, and give the session room to settle."
        image={images.botanical}
        imageAlt="A quiet botanical detail"
      />

      <section
        className="tyv-section"
        style={{ paddingTop: 0, paddingBottom: "clamp(40px, 6vw, 72px)" }}
      >
        <WaterRipple />
      </section>

      <section className="tyv-section">
        <div className="tyv-prose-rail">
          <ul className="tyv-checklist">
            {afterCareGuidance.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tyv-section tyv-section--soft">
        <SectionHeading
          eyebrow="A note"
          title={<>Energy work is not <em>emergency medical care</em>.</>}
          lead="If symptoms feel urgent or require immediate attention, contact a doctor or emergency provider."
        />
      </section>

      <InviteRail
        eyebrow="Stay in touch"
        title={<>Questions after a session? <em>Write Christina</em>.</>}
      />
    </SiteShell>
  );
}
