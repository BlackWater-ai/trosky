# Trosky Sports Club

Main sports club / facility marketing site (Base44 rebuild). This is **not** the Events Venue site.

- **This site:** facility, memberships, reservations, camps, coaches, community sports
- **Events Venue (canonical):** [https://trosky-4222.vercel.app/](https://trosky-4222.vercel.app/) — weddings, corporate, celebrations, private events, venue rentals

`/events` and `/events-venue` redirect to the Events Venue site. There is no internal competing events calendar.

## Stack

React + Vite + Tailwind CSS + react-router-dom + Framer Motion + lucide-react.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm ci
npm run build
npm run validate
```

Preview the production build with `npm run preview`.

## Notes

- Contact form posts via [FormSubmit](https://formsubmit.co) AJAX to `Gabe@troskysportsclub.com` with `_cc` to `Troy@troskysportsclub.com`. Treat delivery as **unverified** until FormSubmit is activated and a controlled test submission succeeds.
- Court / membership / day-pass booking links out to Fluid (`https://trosky.fluidpb.com`).
- Contact page emails and phones are shown as separate lines (Gabe · 210-632-8160, Troy Fulks · 512-986-2757) with working `mailto:` and `tel:` links.
- Inquiry dropdown options: General Questions, Reservations, Event / Venue Rental, Coaches, Vendor / Partnership Inquiry, Other.
- Nav wordmark is the TROSKY / Sports Club treatment from the Base44 UI. No separate logo file was available in this repo.

## Production-readiness checklist

- [ ] Deploy to Vercel from this repo (SPA rewrites + `/events` redirects are in `vercel.json`)
- [ ] Attach the custom domain and confirm the canonical URL is `https://troskysportsclub.com/`
- [ ] Confirm Open Graph title/description/image and JSON-LD in the live HTML
- [ ] Activate FormSubmit for `Gabe@troskysportsclub.com` (first-use email confirmation)
- [ ] Send a **controlled test submission** from `/contact-us` and confirm Gabe receives it with Troy CC’d
- [ ] Do not market the form as “guaranteed delivery” until that test passes
- [ ] Mobile QA at 320 / 375 / 390 / 430 widths, plus tablet and desktop: nav, More menu, contact cards, footer contacts, Fluid/venue external links
- [ ] Confirm **Events & Venue** nav item opens `https://trosky-4222.vercel.app/` in a new tab
- [ ] Confirm no club CTA still goes to an internal `/events` page
