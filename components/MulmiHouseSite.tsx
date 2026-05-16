import { nautilusMirrorCss } from "@/lib/nautilus-mirror-css";
import {
  mulmiApartments,
  mulmiFaqs,
  mulmiHouse,
  mulmiHousePageTitle,
  mulmiImages,
  mulmiIncluded,
  mulmiLocalGuidance,
  mulmiSchema,
} from "@/lib/mulmi-house-data";
import { business } from "@/lib/tyv-data";

function SchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(mulmiSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function MulmiHousePage() {
  return (
    <>
      <div id="mulmi-house">
        <a className="mh-skip" href="#mulmi-main">
          Skip to content
        </a>
        <header className="mh-header">
          <a className="mh-brand" href="/" aria-label="Tune Vibration home">
            <span>{business.shortName}</span>
            <strong>Mulmi House</strong>
          </a>
          <nav aria-label="Mulmi House navigation">
            <a href="#apartments">Apartments</a>
            <a href="#included">Included</a>
            <a href="#rates">Rates</a>
            <a href="#location">Location</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="mh-button mh-button-solid" href={`tel:${mulmiHouse.phoneNepal.replace(/[^+\d]/g, "")}`}>
            Call Now
          </a>
        </header>

        <main id="mulmi-main">
          <section className="mh-hero">
            <div className="mh-hero-copy">
              <p className="mh-eyebrow">Mulmi House serviced apartments in Patan</p>
              <h1>{mulmiHousePageTitle}</h1>
              <p>
                If you are looking for an apartment for rent in Kathmandu that feels calm,
                practical, and easy to return to, Mulmi House offers furnished serviced
                apartments in Patan, Lalitpur for guests staying a few weeks, a full month,
                or longer.
              </p>
              <div className="mh-actions">
                <a className="mh-button mh-button-solid" href={mulmiHouse.whatsappNepal}>
                  WhatsApp Christina
                </a>
                <a className="mh-button" href={mulmiHouse.galleryUrls[0]}>
                  View Photos
                </a>
                <a className="mh-button" href={`tel:${mulmiHouse.phoneNepal.replace(/[^+\d]/g, "")}`}>
                  Call Now
                </a>
              </div>
            </div>
            <div className="mh-hero-media" aria-label="Mulmi House visual preview">
              {mulmiImages.map((image) => (
                <img key={image.src} src={image.src} alt={image.alt} />
              ))}
            </div>
          </section>

          <section className="mh-facts" aria-label="Mulmi House quick facts">
            <div>
              <span>Location</span>
              <strong>{mulmiHouse.location}</strong>
              <p>{mulmiHouse.area}</p>
            </div>
            <div>
              <span>Stay Style</span>
              <strong>Fully furnished 1 BHK studios</strong>
              <p>Prepared for short, monthly, and longer stays.</p>
            </div>
            <div>
              <span>Guest Support</span>
              <strong>{mulmiHouse.manager}</strong>
              <p>{mulmiHouse.managerRole}</p>
            </div>
          </section>

          <section className="mh-section mh-intro">
            <div>
              <p className="mh-eyebrow">A softer landing</p>
              <h2>A furnished apartment in Kathmandu Valley with the ease already handled.</h2>
            </div>
            <div className="mh-copy">
              <p>
                Mulmi House is for travelers who want a place that feels steady before it
                feels fancy. The offer is simple: arrive, unpack, connect to Wi-Fi, make tea,
                cook when you want to cook, rest when the city has been full, and ask for help
                when you need a local nudge.
              </p>
              <p>
                The actual address is in Patan, Lalitpur, inside the Kathmandu Valley. Many
                visitors search for a Kathmandu rental first because Kathmandu is the broader
                travel anchor. Mulmi House answers that search with a quieter Patan base:
                furnished 1 BHK studios, utilities included, filtered water, laundry,
                housekeeping, kitchen basics, and Christina as the guest relations contact.
              </p>
              <p>
                This is not positioned as a hotel room or a bare apartment lease. It sits in
                the useful middle: a serviced apartment in Kathmandu Valley for guests who
                want the independence of a small home and the relief of practical support.
              </p>
              <p>
                For a traveler comparing an apartment for rent in Kathmandu, the practical
                question is usually not just price. It is whether the stay will feel clear
                after arrival: where to drink water, how to handle laundry, whether the
                kitchen is usable, who to message when transport or a local recommendation is
                needed, and whether the space can stay quiet enough to actually rest. Mulmi
                House answers those smaller questions directly through included utilities,
                filtered water, weekly service, daily trash collection, and concierge support
                during the day.
              </p>
            </div>
          </section>

          <section id="apartments" className="mh-section mh-dark">
            <div className="mh-section-heading">
              <p className="mh-eyebrow">The apartments</p>
              <h2>Two simple, ready-to-live spaces for Patan and Kathmandu stays.</h2>
              <p>
                Each apartment is fully furnished and arranged for rest, flow, and ease. The
                source information names two apartments: Silu Apartment and Nepa Apartment.
              </p>
            </div>
            <div className="mh-apartment-grid">
              {mulmiApartments.map((apartment) => (
                <article key={apartment.name}>
                  <span>Mulmi House</span>
                  <h3>{apartment.name}</h3>
                  <p>{apartment.shortStay}</p>
                  <p>{apartment.monthly}</p>
                  <small>{apartment.note}</small>
                </article>
              ))}
            </div>
          </section>

          <section id="included" className="mh-section">
            <div className="mh-section-heading">
              <p className="mh-eyebrow">Everything included</p>
              <h2>Comfort without the little daily negotiations.</h2>
              <p>
                Guests looking for an apartment for rent in Kathmandu often need more than a
                room. They need clear costs, reliable basics, and a place that works when work,
                travel, health, and daily life are all happening at once.
              </p>
            </div>
            <div className="mh-included-grid">
              {mulmiIncluded.map((item) => (
                <article key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="rates" className="mh-section mh-rates">
            <div>
              <p className="mh-eyebrow">Monthly and flexible rates</p>
              <h2>Short stays, monthly stays, and longer visits can be discussed directly.</h2>
            </div>
            <div className="mh-copy">
              <p>
                The listed rates make Mulmi House especially useful for travelers who are
                staying beyond a quick hotel visit. Silu Apartment is listed at $25 per night
                for short stays and $600 for a full month. Nepa Apartment is listed at $20 per
                night for short, flexible stays and $500 for a full month.
              </p>
              <p>
                Longer than one month, Mulmi House can discuss additional discounts. Because
                availability changes, final dates and the right apartment should be confirmed
                with Christina before making travel plans around a stay.
              </p>
              <div className="mh-actions">
                <a className="mh-button mh-button-solid" href={mulmiHouse.whatsappNepal}>
                  Check Availability
                </a>
                <a className="mh-button" href={mulmiHouse.canvaUrl}>
                  View Source Guide
                </a>
              </div>
            </div>
          </section>

          <section id="location" className="mh-section mh-location">
            <div className="mh-section-heading">
              <p className="mh-eyebrow">Patan, Lalitpur</p>
              <h2>A calmer local base near Kathmandu, with guidance close at hand.</h2>
              <p>
                Mulmi House is listed at Gabahal Road, Lalitpur 44600. The location supports
                travelers who want Kathmandu Valley access while staying in Patan, a place with
                its own rhythm, markets, cafes, clinics, and local essentials.
              </p>
            </div>
            <div className="mh-local-grid">
              <div className="mh-map-card">
                <h3>Local guidance can include</h3>
                <ul>
                  {mulmiLocalGuidance.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mh-map-card">
                <h3>Useful links</h3>
                <a href={mulmiHouse.mapUrls[0]}>Open Map</a>
                <a href={mulmiHouse.galleryUrls[0]}>Photo Gallery One</a>
                <a href={mulmiHouse.galleryUrls[1]}>Photo Gallery Two</a>
                <a href="/kathmandu-valley-tours">Kathmandu Valley tours</a>
                <a href="/group-sound-healing-yoga">Group sound healing</a>
                <a href="/nepal-retreats">Nepal retreats</a>
                <a href="/book">Book with Christina</a>
              </div>
            </div>
          </section>

          <section className="mh-section mh-dark">
            <div className="mh-section-heading">
              <p className="mh-eyebrow">Who it fits</p>
              <h2>Travelers who want independence, quiet, and practical support.</h2>
            </div>
            <div className="mh-copy mh-copy-wide">
              <p>
                Mulmi House is a strong fit for visitors coming to Nepal for healing work,
                yoga, retreat planning, local exploration, family visits, writing time, remote
                work, or a longer reset. The space is designed for people who want to feel at
                home without needing to solve every small local detail alone.
              </p>
              <p>
                If you have been comparing a furnished apartment in Kathmandu, a hotel room,
                and a serviced apartment in Lalitpur, the difference here is the blend. You get
                a small home setup with a kitchen and laundry support, plus local concierge
                help during the day. You are not left guessing about water, utilities, trash,
                or how to get oriented in Gabahal.
              </p>
              <p>
                The tone is intentionally gentle. There is no hard-sell booking path, no
                invented luxury claim, and no promise that the apartment is always available.
                The right next step is simple: review the photos, check the monthly or nightly
                rate, message Christina, and confirm whether Silu or Nepa is open for your
                dates.
              </p>
            </div>
          </section>

          <section id="faq" className="mh-section">
            <div className="mh-section-heading">
              <p className="mh-eyebrow">Questions</p>
              <h2>Details for choosing a serviced apartment in Patan.</h2>
            </div>
            <div className="mh-faq-grid">
              {mulmiFaqs.map((faq) => (
                <article key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mh-final">
            <div>
              <p className="mh-eyebrow">Ready to ask about dates</p>
              <h2>Message Christina before planning your stay.</h2>
              <p>
                Use WhatsApp for the fastest path to availability, rates for your stay length,
                and any questions about local orientation, breakfast, laundry, or arriving in
                Patan.
              </p>
            </div>
            <div className="mh-actions">
              <a className="mh-button mh-button-solid" href={mulmiHouse.whatsappNepal}>
                WhatsApp Nepal
              </a>
              <a className="mh-button" href={mulmiHouse.whatsappUs}>
                WhatsApp USA
              </a>
              <a className="mh-button" href={`tel:${mulmiHouse.phoneNepal.replace(/[^+\d]/g, "")}`}>
                Call Now
              </a>
            </div>
          </section>
        </main>
      </div>
      <SchemaScript />
      <style dangerouslySetInnerHTML={{ __html: nautilusMirrorCss }} />
    </>
  );
}
