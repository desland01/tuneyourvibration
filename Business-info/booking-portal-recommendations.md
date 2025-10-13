# Booking & Client Portal Recommendations

## Keep 10to8 at the Core
- **Embed the 10to8 booking widget** inside the new site (supports iframe + customizable styling). This keeps existing service definitions, pricing, and availability intact.
- **Sync with calendars** (Google, Outlook, iCal) so Christina’s availability stays current and double bookings are avoided.
- **Automated reminders**: retain 10to8’s SMS/email reminders for session prep and Zoom links.

## Layer a Client Portal Experience
1. **Authentication layer**
   - Use tools like Memberstack or Supabase Auth + custom Astro pages to create secure logins.
   - Gate content such as session prep guides, integration notes, or sound meditation replays.
2. **Session hub**
   - Pull upcoming bookings from 10to8’s API (Bookings endpoint) and show them in the portal with status badges (Scheduled, Completed, Awaiting Intake).
   - Provide quick actions: “Join Zoom,” “Reschedule,” “Add to Calendar.”
3. **Resource library**
   - Host post-session resources (videos, PDFs, audio journeys) in S3/Cloudflare R2 and surface them based on service type.
4. **Tracking & feedback**
   - Embed simple forms (e.g., Tally or Typeform) for post-session reflections.
   - Store submitted reflections in Airtable or Supabase tables to spot client progress trends.

## Video Healing Delivery Options
- **Zoom via 10to8 integration**: Auto-generate meeting links per booking; surfaced in confirmation emails and the portal session hub.
- **Whereby or Sessions**: privacy-first video rooms that can be embedded. Store room URLs in service metadata and expose them only to logged-in clients.
- **Vimeo Live / Pre-recorded Support**: For guided meditations, host unlisted videos and deliver links inside the portal with view analytics.

## If a Separate Portal Is Preferred
- Leverage platforms like **PracticeBetter**, **SimplePractice**, or **Kajabi** for an all-in-one experience (booking + video + content). Link prominently from the new site under “Client Login.”
- For a lighter-weight route, build a branded Notion or Super.so hub and password-protect it for existing clients, while keeping 10to8 as the scheduling backend.

## Integration Checklist for the New Site
- [ ] Obtain 10to8 API credentials and service IDs.
- [ ] Design iframe embed (or API-driven custom interface) that matches the new brand colors (`#E2CFB1`, `#131311`).
- [ ] Decide on authentication provider and storage for session notes/resources.
- [ ] Configure video platform of choice; test meeting creation and link delivery flow.
- [ ] Draft onboarding emails explaining how clients access the portal and join remote sessions.
