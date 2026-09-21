# Trosky Sports Club Site Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver an unpublished, mobile-first refinement of the Trosky Sports Club website using the supplied original hero video, authentic Trosky media, clean shared navigation/contact patterns, and verified route destinations.

**Architecture:** Keep the React Router/Vite application. Centralize destinations and approved copy in `src/lib/constants.js`, visual rules in `src/index.css`, and protection against regressions in `scripts/validate-site.mjs`. Page components own route-specific layouts; shared components own navigation and footer behavior.

**Tech Stack:** React 18, React Router 6, Vite 6, Tailwind CSS 3, Framer Motion, Lucide React, Node static validation.

**Spec:** `docs/superpowers/specs/2026-09-21-trosky-site-refresh-design.md`

## Global Constraints

- Preserve all existing routes, including `/events` and `/events-venue` redirects.
- Do not publish, submit a form, add dependencies, use stock media, or invent Fluid plan IDs.
- Use only authentic existing Trosky assets plus the supplied original Sports Club hero video.
- Reservation CTAs use `https://trosky.fluidpb.com/reservations`.
- Event/venue media, text, and CTAs use `https://trosky-4222.vercel.app/`, `target="_blank"`, and `rel="noreferrer"`.
- Keep approved contacts and exact inquiry options.
- Validate 320px, 375px, 390px, and 430px widths.

---

## File Structure

- `public/trosky-sports-club-hero.mp4`: user-supplied original video, optimized for web playback.
- `src/lib/constants.js`: all approved destinations, contacts, nav, and dropdown strings.
- `src/lib/photos.js`: authentic Trosky image mapping.
- `src/index.css`: quiet navy/orange/neutral tokens and safe global media behavior.
- `src/components/Navbar.jsx` and `src/components/Footer.jsx`: responsive shared navigation, compact logo, and readable contact links.
- `src/pages/Home.jsx`: original-video hero and uncluttered home sections.
- `src/pages/Camps.jsx`, `src/pages/Coaches.jsx`, and `src/pages/ContactUs.jsx`: required route-level copy and contact configuration.
- `scripts/validate-site.mjs`: static checks.
- `docs/qa/2026-09-21-trosky-site-refresh-audit.md`: actual verification report.

### Task 1: Prepare and validate the original hero media

**Files:**
- Create: `public/trosky-sports-club-hero.mp4`
- Modify: `src/pages/Home.jsx`
- Modify: `scripts/validate-site.mjs`

**Interfaces:**
- Consumes: supplied Dropbox video and `PHOTOS.courts`.
- Produces: a `<video>` with `autoPlay`, `muted`, `loop`, `playsInline`, poster, and source `/trosky-sports-club-hero.mp4`.

- [ ] **Step 1: Write the failing static test**

```js
const heroVideoPath = join(ROOT, 'public', 'trosky-sports-club-hero.mp4');
try { statSync(heroVideoPath); }
catch { fail('Original Sports Club hero video must be present in public/trosky-sports-club-hero.mp4'); }
for (const snippet of ['<video', 'autoPlay', 'muted', 'loop', 'playsInline', '/trosky-sports-club-hero.mp4']) {
  if (!home.includes(snippet)) fail(`Home hero must include original video behavior: ${snippet}`);
}
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run validate`

Expected: missing-original-video error.

- [ ] **Step 3: Download, inspect, and transcode the provided original**

Run: `curl -L '<Dropbox URL with dl=1>' -o /private/tmp/trosky-original-hero.mov && ffprobe -v error -show_entries format=format_name,duration -show_entries stream=codec_name,width,height -of default=noprint_wrappers=1 /private/tmp/trosky-original-hero.mov && ffmpeg -y -i /private/tmp/trosky-original-hero.mov -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an public/trosky-sports-club-hero.mp4`

Expected: a non-empty H.264 MP4 at the required public path. If ffmpeg is unavailable, only retain the supplied original after confirming browser playback, with matching source MIME type.

- [ ] **Step 4: Implement the minimal home media update**

```jsx
<video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={PHOTOS.courts}
  aria-label="Trosky Sports Club in action">
  <source src="/trosky-sports-club-hero.mp4" type="video/mp4" />
</video>
```

- [ ] **Step 5: Run validation and production build**

Run: `npm run validate && npm run build`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add public/trosky-sports-club-hero.mp4 src/pages/Home.jsx scripts/validate-site.mjs
git commit -m "feat: use original Trosky hero video"
```

### Task 2: Simplify the home experience and normalize visual hierarchy

**Files:**
- Modify: `src/pages/Home.jsx`
- Modify: `src/index.css`
- Modify: `src/lib/photos.js`
- Modify: `scripts/validate-site.mjs`

**Interfaces:**
- Consumes: `EVENTS_VENUE_URL`, `FLUID_BOOKING`, and `PHOTOS`.
- Produces: one image-led Event Hosting card and calm, non-duplicated home sections.

- [ ] **Step 1: Write the failing static test**

```js
for (const phrase of ['No Hidden Costs', 'Simple, Transparent Pricing', 'Standard Bookings',
  'Private Events & Large Rentals', 'Ready to Experience Trosky', 'Meet the Coaches']) {
  if (home.includes(phrase)) fail(`Home must not include removed copy: ${phrase}`);
}
if (!home.includes('Event Hosting') || !home.includes('EVENTS_VENUE_URL') || !home.includes('object-cover')) {
  fail('Home must include an image-led Event Hosting card linked to the Events website');
}
```

- [ ] **Step 2: Run it to verify the assertion**

Run: `npm run validate`

Expected: PASS after confirming no removed copy is present; temporarily add one prohibited string to confirm a FAIL, then remove it.

- [ ] **Step 3: Implement the calm home composition**

```jsx
const uses = [
  { title: 'Play', image: PHOTOS.courts, to: '/day-passes', label: 'Explore Day Passes' },
  { title: 'Event Hosting', image: PHOTOS.event, href: EVENTS_VENUE_URL, label: 'Explore Event Hosting' },
  { title: 'Learn & Develop', image: PHOTOS.training, to: '/coaches', label: 'Meet the Coaches' },
];
```

Render the external Event Hosting image, heading, and CTA as one external link with `target="_blank" rel="noreferrer"`. Keep facility overview/discovery sections; remove repeated offer/pricing blocks and homepage coach/founder material.

- [ ] **Step 4: Implement quiet shared media/tokens**

```css
:root {
  --background: 36 29% 97%;
  --foreground: 222 34% 13%;
  --primary: 20 91% 50%;
  --secondary: 36 19% 92%;
  --accent: 210 47% 30%;
}
img, video { display: block; max-width: 100%; }
```

Maintain existing focus treatment and choose crop positioning inside each component, not globally.

- [ ] **Step 5: Run validation and production build**

Run: `npm run validate && npm run build`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/pages/Home.jsx src/index.css src/lib/photos.js scripts/validate-site.mjs
git commit -m "refine: simplify Trosky home experience"
```

### Task 3: Align navigation and program routes

**Files:**
- Modify: `src/lib/constants.js`
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: `src/pages/Camps.jsx`
- Modify: `src/pages/Coaches.jsx`
- Modify: `scripts/validate-site.mjs`

**Interfaces:**
- Consumes: `NAV_LINKS`, `MORE_LINKS`, `FOOTER_LINKS`, `EVENTS_VENUE_URL`.
- Produces: Coaches in main nav, Camps secondary, and correct program messaging.

- [ ] **Step 1: Write the failing static test**

```js
const camps = readFileSync(join(SRC, 'pages/Camps.jsx'), 'utf8');
const coaches = readFileSync(join(SRC, 'pages/Coaches.jsx'), 'utf8');
if (!constants.includes("{ label: 'Coaches', to: '/coaches' }")) fail('Primary navigation must include Coaches');
if (constants.includes("{ label: 'Camps', to: '/camps' }")) fail('Primary navigation must not include Camps');
if (!camps.includes('Inquire About Camp Start Dates')) fail('Camps CTA must use approved inquiry copy');
for (const phrase of ['Training', 'Lessons', 'Camps', 'Learn & Develop']) {
  if (!coaches.includes(phrase)) fail(`Coaches must communicate ${phrase}`);
}
```

- [ ] **Step 2: Run the validator**

Run: `npm run validate`

Expected: PASS after testing one temporary deliberate failure and reverting it.

- [ ] **Step 3: Implement shared menu and route copy**

```js
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Facility', to: '/facility' },
  { label: 'Day Passes / Memberships', to: '/day-passes' },
  { label: 'Reservations', to: '/reservations' },
  { label: 'Events & Venue', href: EVENTS_VENUE_URL },
  { label: 'Coaches', to: '/coaches' },
  { label: 'Partner With Us', to: '/partner-with-us' },
  { label: 'Contact', to: '/contact-us' },
];
```

Retain Camps in `MORE_LINKS`, mobile, and footer. Use “Training,” “Lessons,” “Camps,” and “Learn & Develop” on Coaches. Use exactly “Inquire About Camp Start Dates” on Camps.

- [ ] **Step 4: Run validation and production build**

Run: `npm run validate && npm run build`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/constants.js src/components/Navbar.jsx src/components/Footer.jsx src/pages/Camps.jsx src/pages/Coaches.jsx scripts/validate-site.mjs
git commit -m "refine: align Trosky navigation and programmes"
```

### Task 4: Finalize contact and form safeguards

**Files:**
- Modify: `src/pages/ContactUs.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: `src/lib/constants.js`
- Modify: `scripts/validate-site.mjs`

**Interfaces:**
- Consumes: `CONTACTS` and `REASON_OPTIONS`.
- Produces: clean contact cards/footer entries and a Gabe-primary/Troy-CC form without a live send.

- [ ] **Step 1: Write the failing static test**

```js
if (!contactPage.includes("fetch('https://formsubmit.co/ajax/Gabe@troskysportsclub.com'")) {
  fail('Contact form must send to Gabe as primary recipient');
}
if (!contactPage.includes("_cc: 'Troy@troskysportsclub.com'")) fail('Contact form must copy Troy Fulks');
if (contactPage.includes('For event rentals and camps')) fail('Helper copy below General Contact Form must remain removed');
```

- [ ] **Step 2: Run the static validator**

Run: `npm run validate`

Expected: PASS after confirming temporary removal of recipient or CC makes it fail, then reverting the temporary change.

- [ ] **Step 3: Implement contact spacing and preserve accessibility**

```jsx
<div key={person.email} className="space-y-3 border-t border-border pt-5 first:border-t-0 first:pt-0">
  <p className="font-inter text-xs font-semibold uppercase tracking-widest text-muted-foreground">{person.label}</p>
  <a href={`mailto:${person.email}`} className="flex items-start gap-2 break-all ...">{person.email}</a>
  <a href={`tel:${person.tel}`} className="flex items-center gap-2 ...">{person.phone}</a>
</div>
```

Keep required name/email fields, labels, exact reasons, loading/error/success states, Gabe recipient and Troy CC. Do not invoke `handleSubmit` in QA.

- [ ] **Step 4: Verify exact options**

```js
export const REASON_OPTIONS = [
  'General Questions', 'Reservations', 'Event / Venue Rental',
  'Coaches', 'Vendor / Partnership Inquiry', 'Other',
];
```

- [ ] **Step 5: Run validation and production build**

Run: `npm run validate && npm run build`

Expected: PASS and no contact email sent.

- [ ] **Step 6: Commit**

```bash
git add src/pages/ContactUs.jsx src/components/Footer.jsx src/lib/constants.js scripts/validate-site.mjs
git commit -m "fix: polish Trosky contact experience"
```

### Task 5: Run functional, responsive, accessibility, and link QA

**Files:**
- Modify: `scripts/validate-site.mjs`
- Create: `docs/qa/2026-09-21-trosky-site-refresh-audit.md`

**Interfaces:**
- Consumes: built `dist/`, every React route, and centralized public destinations.
- Produces: a static gate and concise evidence-based audit report.

- [ ] **Step 1: Write failing static checks for route coverage and events links**

```js
const requiredRoutes = ['/facility', '/day-passes', '/reservations', '/events', '/events-venue',
  '/coaches', '/partner-with-us', '/contact-us', '/camps', '/gallery', '/our-story', '/partners', '/policies', '/vip'];
for (const route of requiredRoutes) {
  if (!app.includes(`path="${route}"`)) fail(`App.jsx missing required route: ${route}`);
}
```

Also inspect every use of `EVENTS_VENUE_URL` to ensure it carries `target="_blank"` and `rel="noreferrer"` outside the redirect page.

- [ ] **Step 2: Run static and build checks**

Run: `npm run validate && npm run build`

Expected: PASS.

- [ ] **Step 3: Serve and review at all required viewports**

Run: `npm run preview -- --host 127.0.0.1`

At 320, 375, 390, 430, and 1440px: visit every route, use the mobile menu, tab through header/main/footer controls, inspect scroll width, confirm targets are readable/tappable, and inspect images for cover crop/no distortion.

- [ ] **Step 4: Confirm links without form submission**

Check: Fluid booking, Events, Gabe/Troy mailto links, Gabe/Troy tel links, all menu/footer destinations, titles/meta/alt text, and focus/contrast. Do not click the form submit button.

- [ ] **Step 5: Write an evidence-only report**

```markdown
# Trosky Site Refresh QA Audit

## Passed
- [actual verified result]

## Unresolved
- [actual unresolved item, or “None found during local audit.”]

## Assets Still Needed
- [actual missing asset, or “None.”]

## Publishing
- No production publish was performed.
```

- [ ] **Step 6: Commit**

```bash
git add scripts/validate-site.mjs docs/qa/2026-09-21-trosky-site-refresh-audit.md
git commit -m "test: audit Trosky site refresh"
```

