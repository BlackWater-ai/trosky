# Trosky Sports Club Base44 Fidelity Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the React site to closely match the authenticated Base44 reference while retaining every verified route, integration, and preview-only deployment status.

**Architecture:** Retain React Router, Vite, and Tailwind. The home page becomes the Base44-style long-form composition driven by focused local data arrays; reusable shell and section primitives establish the reference visual system across the retained routes. Destinations remain centralized in `constants.js`.

**Tech Stack:** React 18, React Router 6, Vite 6, Tailwind CSS 3, Framer Motion, Lucide React, Node static validation.

**Spec:** `docs/superpowers/specs/2026-09-21-trosky-base44-fidelity-design.md`

## Global Constraints

- Preserve React Router routes, GitHub/Vercel workflow, Fluid plan destinations, Gabe/Troy contacts, FormSubmit recipients, and six approved inquiry labels.
- Keep `https://trosky-4222.vercel.app/` as an external new-tab Events & Venue destination.
- Use only existing authentic Trosky/Base44 media and the supplied original hero video.
- Do not publish production; validate desktop plus 320px, 375px, 390px, and 430px layouts.

---

## File Structure

- `src/index.css`: Base44 colors, surfaces, eyebrow, card, and mobile rules.
- `src/components/{Navbar,Footer,PageSections}.jsx`: shared reference-style shell and route primitives.
- `src/pages/Home.jsx`: Base44 long-form home sections.
- `src/pages/*.jsx`: retained functional routes restyled into the same system.
- `src/lib/{constants,photos}.js`: destinations and authentic media.
- `scripts/validate-site.mjs`: static regression coverage.
- `docs/qa/2026-09-21-trosky-base44-fidelity-audit.md`: final comparison record.

### Task 1: Establish Base44 visual foundations

**Files:**
- Modify: `src/index.css`
- Modify: `scripts/validate-site.mjs`

**Interfaces:**
- Consumes: the current CSS variables and validator.
- Produces: `--base44-ink`, `--base44-orange`, `.base44-eyebrow`, and `.base44-panel` for all later tasks.

- [ ] **Step 1: Write the failing test**

```js
const styles = readFileSync(join(SRC, 'index.css'), 'utf8');
for (const token of ['--base44-ink', '--base44-orange', '.base44-eyebrow', '.base44-panel']) {
  if (!styles.includes(token)) fail(`Base44 visual token missing: ${token}`);
}
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run validate`

Expected: `FAIL: Base44 visual token missing: --base44-ink`.

- [ ] **Step 3: Implement the minimal token system**

```css
:root { --base44-ink: #080b10; --base44-navy: #0d203c; --base44-orange: #ff5a1f; --base44-paper: #f6f3ee; }
.base44-eyebrow { @apply text-xs font-semibold uppercase tracking-[0.28em] text-primary; }
.base44-panel { @apply rounded-2xl border border-white/15 bg-white/5; }
```

- [ ] **Step 4: Verify green and commit**

Run: `npm run validate`

```bash
git add src/index.css scripts/validate-site.mjs
git commit -m "feat: add Base44 visual foundation"
```

### Task 2: Rebuild the shared Base44 shell

**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: `src/components/PageSections.jsx`
- Modify: `scripts/validate-site.mjs`

**Interfaces:**
- Consumes: `NAV_LINKS`, `MORE_LINKS`, `FOOTER_LINKS`, `CONTACTS`, `FLUID_BOOKING`, and `EVENTS_VENUE_URL`.
- Produces: a responsive dark header, matching footer, and shared dark page heroes with orange eyebrows and white display headings.

- [ ] **Step 1: Write the failing test**

```js
for (const [name, source] of [['Navbar', navbar], ['Footer', footer]]) {
  if (!source.includes('bg-[#080b10]')) fail(`${name} must use the Base44 dark shell`);
}
if (!footer.includes('EVENTS_VENUE_URL') || !footer.includes('rel="noreferrer"')) fail('Footer Events link must remain safely external');
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run validate`

Expected: `FAIL: Navbar must use the Base44 dark shell`.

- [ ] **Step 3: Implement the shared shell**

Use a crest-led dark header, compact desktop links, accessible mobile toggle, and orange booking/tour action. Update footer and page primitives to use reference-style high contrast, rounded panels, thin borders, responsive spacing, and existing targets unchanged.

- [ ] **Step 4: Verify green and commit**

Run: `npm run validate && node node_modules/vite/bin/vite.js build`

```bash
git add src/components/Navbar.jsx src/components/Footer.jsx src/components/PageSections.jsx scripts/validate-site.mjs
git commit -m "feat: align shared shell with Base44"
```

### Task 3: Recompose the Base44 long-form homepage

**Files:**
- Modify: `src/pages/Home.jsx`
- Modify: `src/lib/photos.js`
- Modify: `scripts/validate-site.mjs`

**Interfaces:**
- Consumes: existing `PHOTOS`, Fluid constants, `EVENTS_VENUE_URL`, and `STORY_VIDEO`.
- Produces: a Base44-ordered home page with hero, offer, facility, experience, passes, VIP, events, programs, story, amenities, partners, contact, and footer.

- [ ] **Step 1: Write the failing sequence test**

```js
// Replace the simplified-home assertion: the Base44 founding offer is now required.
if (home.includes('Bring the Crew')) fail('Legacy home copy must not return: Bring the Crew');
const titles = ['First Visit Offer', 'Founding Offer — $79/month', 'Facility At A Glance', 'Explore the Facility', 'One Facility. Endless Ways to Use It.', 'Day Passes / Memberships', 'VIP Memberships', 'Upcoming Events at Trosky', 'Training, Lessons & Camps', "Austin's Community Sports & Event Destination.", 'Amenities Built Around the Experience', 'Sponsors, Partners & Vendors', 'Come See It for Yourself'];
let position = -1;
for (const title of titles) {
  const next = home.indexOf(title);
  if (next <= position) fail(`Home must include Base44 section in order: ${title}`);
  position = next;
}
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run validate`

Expected: `FAIL: Home must include Base44 section in order: First Visit Offer`.

- [ ] **Step 3: Implement data-backed reference sections**

Create focused arrays for facility items, experience panels, pass inclusions, VIP plans, events, programs, values, amenities, and partners. Use `FLUID_ADVANTAGE`, `FLUID_INDIVIDUAL_DAY_PASS`, `FLUID_GROUP_DAY_PASS`, `FLUID_VIP`, `FLUID_VIP_FAMILY`, and `FLUID_BOOKING` for all booking CTAs. Use `EVENTS_VENUE_URL` with `target="_blank" rel="noreferrer"`. Keep the original hero source `/trosky-sports-club-hero.mp4`, poster fallback, Base44 offer chip, and mobile-safe stacked CTAs.

- [ ] **Step 4: Verify green and commit**

Run: `npm run validate && node node_modules/vite/bin/vite.js build`

```bash
git add src/pages/Home.jsx src/lib/photos.js scripts/validate-site.mjs
git commit -m "feat: rebuild Base44-style home experience"
```

### Task 4: Restyle all retained functional routes

**Files:**
- Modify: `src/pages/Facility.jsx`, `src/pages/DayPasses.jsx`, `src/pages/VIP.jsx`, `src/pages/Coaches.jsx`, `src/pages/Camps.jsx`, `src/pages/OurStory.jsx`, `src/pages/PartnerWithUs.jsx`, `src/pages/Partners.jsx`, `src/pages/Gallery.jsx`, `src/pages/ContactUs.jsx`, `src/pages/Reservations.jsx`, `src/pages/Policies.jsx`
- Modify: `scripts/validate-site.mjs`

**Interfaces:**
- Consumes: the shared shell/primitives and existing constants.
- Produces: functional routes with Base44-style eyebrows, dark/light panels, image cards, orange CTAs, and mobile stacking.

- [ ] **Step 1: Write the failing route-style test**

```js
for (const page of ['Facility.jsx', 'DayPasses.jsx', 'VIP.jsx', 'Coaches.jsx', 'Camps.jsx', 'OurStory.jsx', 'PartnerWithUs.jsx', 'Partners.jsx', 'Gallery.jsx', 'ContactUs.jsx', 'Reservations.jsx', 'Policies.jsx']) {
  if (!readFileSync(join(SRC, 'pages', page), 'utf8').includes('base44-eyebrow')) fail(`${page} must use the Base44 route-page system`);
}
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run validate`

Expected: first route page lacking `base44-eyebrow` fails.

- [ ] **Step 3: Implement the visual contract**

Add the shared eyebrow before every display heading; use reference-style dark/light alternating sections, cards, buttons, and responsive gaps. Preserve required copy, contact-form behavior and labels, Fluid URLs, Events destination, and every existing route.

- [ ] **Step 4: Verify green and commit**

Run: `npm run validate && node node_modules/vite/bin/vite.js build`

```bash
git add src/pages scripts/validate-site.mjs
git commit -m "feat: align route pages with Base44"
```

### Task 5: Complete visual, route, and deployment QA

**Files:**
- Create: `docs/qa/2026-09-21-trosky-base44-fidelity-audit.md`

**Interfaces:**
- Consumes: local production build, authenticated Base44 reference, and Vercel preview.
- Produces: a dated audit with checked viewport/integration gates and final preview URL.

- [ ] **Step 1: Create release gates**

```markdown
## Release Gates
- [ ] Desktop reference comparison
- [ ] 320px, 375px, 390px, and 430px reference comparisons
- [ ] All routes, Fluid, Events, contacts, and form configuration
- [ ] Vercel preview verified
```

- [ ] **Step 2: Compare local production preview to Base44**

Run: `node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4177`

Record the hero, offer, facility gallery, experience panels, pass/VIP sections, navigation, and mobile menu at every required viewport. A gate stays unchecked if there is overflow, clipped text, distortion, or a broken target.

- [ ] **Step 3: Audit route and integration behavior**

Check `/`, `/facility`, `/day-passes`, `/reservations`, `/events`, `/events-venue`, `/coaches`, `/partner-with-us`, `/contact-us`, `/camps`, `/gallery`, `/our-story`, `/partners`, `/policies`, and `/vip`. Do not submit the contact form.

- [ ] **Step 4: Commit, push, and verify deployment**

```bash
git add docs/qa/2026-09-21-trosky-base44-fidelity-audit.md
git commit -m "test: audit Base44 fidelity rebuild"
git push
```

Open the Vercel preview for the final commit; check the homepage experience cards, hero, offer, and mobile navigation before recording its URL. State explicitly in the audit that production was not published.

## Self-Review

- Tasks 1-2 implement the shared system, Task 3 implements every specified Base44 home section, Task 4 retains/restyles every routed page, and Task 5 verifies reference fidelity and integrations.
- No plan placeholders or undefined interfaces remain.
