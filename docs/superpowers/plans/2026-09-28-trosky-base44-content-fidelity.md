# Trosky Base44 Content Fidelity Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Sports Club website match Base44's content, hierarchy, media, CTA destinations, pricing, and interactions while retaining the current refreshed visual styling and original hero video.

**Architecture:** The implementation starts with a committed Base44 reference ledger, then restores fidelity route-by-route using the existing React pages and shared constants/photos. `scripts/validate-site.mjs` and a dedicated Node test become the regression guardrails; the current navigation, FormSubmit flow, Fluid integration, and separate Events site remain the integration boundary.

**Tech Stack:** React 18, Vite, React Router, Tailwind CSS, Framer Motion, Node test runner, Vercel preview.

**Spec:** `docs/superpowers/specs/2026-09-28-trosky-base44-content-fidelity-design.md`

## Global Constraints

- Base44 is the source for visible Sports-site copy, hierarchy, pricing, photo subjects, CTA labels, and behavior.
- Gabe's approved Sponsorship/Partner Notes override older Base44 content only for the Partner With Us surface.
- Keep the original `public/trosky-sports-club-hero.mp4` as an autoplaying, muted, looping, inline homepage video.
- Keep verified Fluid URLs, separate Events & Venue URL, Gabe/Troy contacts, and FormSubmit routing when Base44 shows a stale or unavailable target.
- Keep the refreshed visual system, accessibility, public-preview workflow, and mobile polish; do not build a pixel clone.
- Do not submit a live inquiry form, change production/custom-domain configuration, or modify the independent Events site.

## Review Focus

- Base44 button targets that differ from verified operational URLs must retain the verified destination rather than copying an obsolete ID.
- Mobile card grids at 320px, 375px, 390px, and 430px must not clip pricing, cards, or long Base44 policy copy.
- The original video must retain `autoPlay`, `muted`, `loop`, `playsInline`, and a poster fallback after the Home rewrite.
- Partner Notes must remain confined to the Partner With Us surface; their pricing/copy must not leak into Day Passes, VIP, Events, or Programs.
- Form QA must inspect the configured recipient and CC without sending a real customer inquiry.

---

## File structure

- Create: `docs/qa/2026-09-28-trosky-base44-reference-ledger.md` — line-by-line Base44 reference inventory and match/exception/correction status.
- Create: `test/base44-fidelity.test.mjs` — static content, action, and video regression coverage for the reference ledger.
- Modify: `scripts/validate-site.mjs` — route-level checks for the final fidelity contract.
- Modify: `src/pages/Home.jsx` — Base44 long-form homepage content and interaction restoration in the current visual system.
- Modify: `src/pages/Facility.jsx`, `DayPasses.jsx`, `VIP.jsx`, `Reservations.jsx` — facility, pass, membership, and booking copy/action fidelity.
- Modify: `src/pages/Coaches.jsx`, `Camps.jsx` — Base44 program copy and inquiry/booking fidelity.
- Modify: `src/pages/OurStory.jsx`, `Gallery.jsx`, `Partners.jsx`, `Policies.jsx`, `ContactUs.jsx` — story, gallery, partner, policy, contact, and tour fidelity.
- Modify: `src/pages/PartnerWithUs.jsx` — only to ensure Gabe-approved Partner Notes remain the isolated exception.
- Modify: `src/components/Navbar.jsx`, `Footer.jsx`, `src/lib/constants.js`, `src/lib/photos.js` — shared labels/destinations/media mappings when the reference ledger proves a mismatch.

### Task 1: Capture and lock the Base44 reference ledger

**Files:**
- Create: `docs/qa/2026-09-28-trosky-base44-reference-ledger.md`
- Create: `test/base44-fidelity.test.mjs`
- Modify: `scripts/validate-site.mjs`

**Interfaces:**
- Consumes: authenticated Base44 preview and existing React route inventory in `src/App.jsx`.
- Produces: a Markdown table with `route`, `Base44 evidence`, `current state`, `status`, `approved exception`, and `required source file`; a Node test file that names the non-negotiable reference snippets.

- [ ] **Step 1: Write the failing reference test**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const read = (file) => readFileSync(resolve(file), 'utf8');

test('homepage retains Base44 offer, day-pass policy, VIP detail, and original video', () => {
  const home = read('src/pages/Home.jsx');
  assert.match(home, /Buy 1 Day Pass — Bring 3 Friends FREE/);
  assert.match(home, /Group Day Pass Guest Policy/);
  assert.match(home, /Podcast room usage/);
  assert.match(home, /25% off private venue rentals/);
  assert.match(home, /trosky-sports-club-hero\.mp4/);
  assert.match(home, /autoPlay/);
  assert.match(home, /muted/);
  assert.match(home, /loop/);
  assert.match(home, /playsInline/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test test/base44-fidelity.test.mjs`

Expected: FAIL because the current Home implementation lacks at least the Base44 policy and full VIP benefit snippets.

- [ ] **Step 3: Create the reference ledger before changing application code**

Record the following minimum Base44 home sequence exactly: hero/first-visit offer; Founding Offer — $79/month; Facility At A Glance; Explore the Facility; One Facility. Endless Ways to Use It.; Day Passes / Memberships; included/upgrades policy; VIP Memberships; Upcoming Events at Trosky; Training, Lessons & Camps; story/values; Amenities Built Around the Experience; Sponsors, Partners & Vendors; Come See It for Yourself; shared footer.

For every route in `src/App.jsx`, record source heading, price or offer, image subject, every CTA label/target, and form/interactive intent. Mark `Partner With Us` as **approved exception: Gabe Partner Notes**. Record both Base44's visible Fluid target and the retained verified Fluid target when they differ.

- [ ] **Step 4: Add minimal validator hooks**

Add a `REFERENCE_ROUTES` array in `scripts/validate-site.mjs`:

```js
const REFERENCE_ROUTES = [
  '/', '/facility', '/day-passes', '/reservations', '/coaches', '/camps',
  '/gallery', '/our-story', '/partners', '/policies', '/vip', '/contact-us',
  '/partner-with-us',
];
```

Assert that every entry exists in `src/App.jsx`; assert the ledger file exists with `statSync`; assert the Partner page contains the approved `$499/MONTH` and `$999/MONTH` package strings.

- [ ] **Step 5: Run the ledger regression checks**

Run: `node --test test/base44-fidelity.test.mjs && npm run validate`

Expected: the test remains red until Task 2; the validator passes once route/ledger checks are added.

- [ ] **Step 6: Commit the reference artifact and test**

```bash
git add docs/qa/2026-09-28-trosky-base44-reference-ledger.md test/base44-fidelity.test.mjs scripts/validate-site.mjs
git commit -m "test: lock Base44 fidelity reference"
```

### Task 2: Restore Base44 homepage content and actions

**Files:**
- Modify: `src/pages/Home.jsx`
- Modify: `test/base44-fidelity.test.mjs`
- Modify: `scripts/validate-site.mjs`

**Interfaces:**
- Consumes: Task 1 ledger, `PHOTOS`, the verified `FLUID_*` values, `EVENTS_VENUE_URL`, and `trosky-sports-club-hero.mp4`.
- Produces: Base44-equivalent homepage content and section order styled with the current components/classes.

- [ ] **Step 1: Extend the failing homepage test with exact Base44 data**

```js
test('homepage carries Base44 VIP, event, and amenity detail', () => {
  const home = read('src/pages/Home.jsx');
  for (const text of [
    '10 guest passes per month', '1 booking per day', '2 hour max booking',
    'Private locker rooms', 'Podcast room usage', '25% off private venue rentals',
    'Open Play Night', 'Movie Night on the Turf', 'Pickleball Social',
    'Massage Chair', 'Outdoor Environment', 'Sponsorship & Advertising Inquiries',
  ]) assert.match(home, new RegExp(text));
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `node --test test/base44-fidelity.test.mjs`

Expected: FAIL because current simplified home arrays omit several Base44 details.

- [ ] **Step 3: Restore the reference content in `Home.jsx`**

Update the existing data arrays and markup rather than changing the visual system:

```js
const vipIndividualBenefits = [
  'Access for 1 adult', '10 guest passes per month', 'Daily court bookings',
  'Unlimited facility access', '1 booking per day', '2 hour max booking',
  'Private locker rooms', 'Free equipment rentals', 'Free VIP sections',
  'Podcast room usage', '25% off private venue rentals', '10 day booking window',
  '24 hour booking cancellation window',
];
```

Use the corresponding Base44 family benefits, full day-pass inclusion/upgrade policy, six event cards with their schedule lines, program descriptions, values, amenities, and sponsorship copy from the Task 1 ledger. Keep the three original hero CTAs and map Base44's visible stale Fluid IDs to the verified constants.

- [ ] **Step 4: Run tests and build**

Run: `node --test test/base44-fidelity.test.mjs && npm run validate && node node_modules/vite/bin/vite.js build`

Expected: PASS; build emits `dist/index.html` and assets without errors.

- [ ] **Step 5: Audit Home at required widths**

At 320, 375, 390, 430, 768, and desktop widths, confirm hero CTAs, VIP price/benefit cards, day-pass policy, events grid, and footer have no horizontal overflow. Confirm the hero video has a loaded source and poster fallback; do not replace its file.

- [ ] **Step 6: Commit the homepage correction**

```bash
git add src/pages/Home.jsx test/base44-fidelity.test.mjs scripts/validate-site.mjs
git commit -m "feat: restore Base44 homepage content"
```

### Task 3: Restore facility, pass, VIP, and reservation routes

**Files:**
- Modify: `src/pages/Facility.jsx`
- Modify: `src/pages/DayPasses.jsx`
- Modify: `src/pages/VIP.jsx`
- Modify: `src/pages/Reservations.jsx`
- Modify: `test/base44-fidelity.test.mjs`

**Interfaces:**
- Consumes: Task 1 ledger and `FLUID_BOOKING`, `FLUID_ADVANTAGE`, `FLUID_INDIVIDUAL_DAY_PASS`, `FLUID_GROUP_DAY_PASS`, `FLUID_VIP`, `FLUID_VIP_FAMILY`.
- Produces: route-local Base44 copy and actions without changing verified booking URLs.

- [ ] **Step 1: Write failing route fidelity tests**

```js
test('pass and VIP routes retain Base44 pricing and policy language', () => {
  const passes = read('src/pages/DayPasses.jsx');
  const vip = read('src/pages/VIP.jsx');
  assert.match(passes, /Includes entry for you plus up to 3 guests/);
  assert.match(passes, /Optional Upgrades & Reservations/);
  assert.match(vip, /\$299\.99\/month/);
  assert.match(vip, /\$499\.99\/month/);
  assert.match(vip, /Podcast room usage/);
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `node --test test/base44-fidelity.test.mjs`

Expected: FAIL because the current VIP route does not include the Base44 podcast/private-rental benefits.

- [ ] **Step 3: Implement source-equivalent route copy and cards**

Restore all ledgered facility spaces and descriptions; make Day Passes include the Base44 group-pass policy and exact `$25 / pass` / `$50 / pass` presentation; make VIP include Base44 descriptions and benefit lists for both plans. Keep `Reservations.jsx` as the clear booking handoff and preserve `FLUID_BOOKING`.

- [ ] **Step 4: Run tests and production build**

Run: `node --test test/base44-fidelity.test.mjs && npm run validate && node node_modules/vite/bin/vite.js build`

Expected: PASS.

- [ ] **Step 5: Verify links without buying or submitting**

Confirm every plan CTA has the exact verified `FLUID_*` href, every external anchor has `target="_blank"` and `rel="noreferrer"`, and the route remains usable at 320px without horizontal overflow.

- [ ] **Step 6: Commit the route fidelity work**

```bash
git add src/pages/Facility.jsx src/pages/DayPasses.jsx src/pages/VIP.jsx src/pages/Reservations.jsx test/base44-fidelity.test.mjs
git commit -m "feat: restore Base44 access and membership routes"
```

### Task 4: Restore program, story, gallery, and partner-route fidelity

**Files:**
- Modify: `src/pages/Coaches.jsx`
- Modify: `src/pages/Camps.jsx`
- Modify: `src/pages/OurStory.jsx`
- Modify: `src/pages/Gallery.jsx`
- Modify: `src/pages/Partners.jsx`
- Modify: `src/pages/PartnerWithUs.jsx`
- Modify: `test/base44-fidelity.test.mjs`

**Interfaces:**
- Consumes: Task 1 ledger, `STORY_VIDEO`, `PHOTOS`, approved Partner Notes.
- Produces: Base44-equivalent programs/story/gallery context and Partner Notes isolation.

- [ ] **Step 1: Write failing program and partner-boundary tests**

```js
test('program, story, and partner routes preserve reference content boundaries', () => {
  const coaches = read('src/pages/Coaches.jsx');
  const story = read('src/pages/OurStory.jsx');
  const partner = read('src/pages/PartnerWithUs.jsx');
  assert.match(coaches, /Private lessons/);
  assert.match(coaches, /Team training/);
  assert.match(story, /A place where people come together/);
  assert.match(story, /AWecRQkdnWg/);
  assert.match(partner, /STANDARD PARTNER — \$499\/MONTH/);
  assert.doesNotMatch(partner, /Podcast Sessions/);
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `node --test test/base44-fidelity.test.mjs`

Expected: FAIL when any program/story Base44 snippet is absent.

- [ ] **Step 3: Restore Base44 program and narrative content**

Use the ledger to restore Soccer, Pickleball, Padel, Multi-Sport Camps, Performance Training, and Team Training labels/descriptions; restore Base44 story/values, gallery subjects, and the “Watch Our Story” destination. Preserve new page styling. Keep Partner With Us limited to the Gabe-approved package, benefits, and visual content; do not apply those partner texts to unrelated routes.

- [ ] **Step 4: Run tests and build**

Run: `node --test test/base44-fidelity.test.mjs && npm run validate && node node_modules/vite/bin/vite.js build`

Expected: PASS.

- [ ] **Step 5: Verify routed and external actions**

Confirm gallery/story/partner CTAs resolve to their ledgered destination, `STORY_VIDEO` opens the approved video, and all pages render without overflow at the required widths.

- [ ] **Step 6: Commit**

```bash
git add src/pages/Coaches.jsx src/pages/Camps.jsx src/pages/OurStory.jsx src/pages/Gallery.jsx src/pages/Partners.jsx src/pages/PartnerWithUs.jsx test/base44-fidelity.test.mjs
git commit -m "feat: restore Base44 program and story content"
```

### Task 5: Restore navigation, contact, policy, and shared-footer fidelity

**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: `src/pages/ContactUs.jsx`
- Modify: `src/pages/Policies.jsx`
- Modify: `src/lib/constants.js`
- Modify: `test/base44-fidelity.test.mjs`
- Modify: `scripts/validate-site.mjs`

**Interfaces:**
- Consumes: Task 1 ledger, `NAV_LINKS`, `MORE_LINKS`, `FOOTER_LINKS`, `CONTACTS`, `SOCIAL`, `REASON_OPTIONS`, and verified integration constants.
- Produces: reference-equivalent navigation labels and contact hierarchy with safe current destinations.

- [ ] **Step 1: Write failing shared-shell tests**

```js
test('shared shell retains verified contacts and Base44 navigation intent', () => {
  const constants = read('src/lib/constants.js');
  const footer = read('src/components/Footer.jsx');
  const contact = read('src/pages/ContactUs.jsx');
  assert.match(constants, /Events & Venue/);
  assert.match(footer, /Book Through Fluid/);
  assert.match(contact, /FormSubmit/);
  assert.match(contact, /Troy@troskysportsclub\.com/);
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `node --test test/base44-fidelity.test.mjs`

Expected: FAIL if the ledger requires a Base44 label/section absent from the current shell or contact page.

- [ ] **Step 3: Implement reference-equivalent labels and hierarchy**

Restore ledgered navigation/footer labels and contact/tour information architecture. Keep verified `EVENTS_VENUE_URL`, external-new-tab behavior, all approved contact reasons, Gabe primary recipient, and Troy `_cc`. Keep the full verified street address when a location appears; do not replace it with Base44's generic “Austin, TX.”

- [ ] **Step 4: Run the complete static suite and build**

Run: `node --test test/fluid-links.test.mjs test/base44-fidelity.test.mjs && npm run validate && node node_modules/vite/bin/vite.js build`

Expected: PASS.

- [ ] **Step 5: Test form configuration without submitting it**

Inspect the compiled Contact page source/configuration and assert that it POSTs to `https://formsubmit.co/ajax/Gabe@troskysportsclub.com` with `_cc: 'Troy@troskysportsclub.com'`; do not fill or submit the public form.

- [ ] **Step 6: Commit**

```bash
git add src/components/Navbar.jsx src/components/Footer.jsx src/pages/ContactUs.jsx src/pages/Policies.jsx src/lib/constants.js test/base44-fidelity.test.mjs scripts/validate-site.mjs
git commit -m "feat: align Base44 navigation and contact flows"
```

### Task 6: Complete visual, link, preview, and regression verification

**Files:**
- Modify: `docs/qa/2026-09-28-trosky-base44-reference-ledger.md`
- Modify: `docs/qa/2026-09-28-trosky-base44-fidelity-audit.md`

**Interfaces:**
- Consumes: completed routes, test suite, production build, Base44 reference, Vercel preview.
- Produces: final ledger statuses and an evidence-backed QA audit.

- [ ] **Step 1: Add a failing deploy-verification checklist item**

Add this unchecked ledger row before running the public check:

```markdown
| Public preview | Anonymous `200`, current build asset, Base44 fidelity smoke test | pending | required before handoff |
```

- [ ] **Step 2: Verify local route rendering at all required widths**

Use the local production preview to inspect `/`, `/facility`, `/day-passes`, `/reservations`, `/coaches`, `/camps`, `/gallery`, `/our-story`, `/partners`, `/policies`, `/vip`, `/contact-us`, and `/partner-with-us` at 320, 375, 390, 430, 768, and desktop. Record title, visible `h1`, overflow state, broken-image count, and blank-link count in the audit document.

- [ ] **Step 3: Run all automated checks**

Run: `node --test test/fluid-links.test.mjs test/base44-fidelity.test.mjs && npm run validate && node node_modules/vite/bin/vite.js build && npm audit --omit=dev --json`

Expected: all tests/build/validator pass and the audit reports zero production vulnerabilities.

- [ ] **Step 4: Push the existing branch and wait for Vercel**

```bash
git push
```

Wait for the branch preview build to complete; do not merge or publish to a custom/production domain.

- [ ] **Step 5: Verify the public preview anonymously**

Run a HEAD request against the current preview root and `/partner-with-us`; expect `HTTP/2 200`, `server: Vercel`, and `content-type: text/html`. Open the public homepage and partner page in a logged-out-equivalent browser context and confirm no Vercel sign-in is requested.

- [ ] **Step 6: Mark the ledger and audit complete, then commit**

Replace the pending public-preview row with the actual preview URL, build asset name, date, and result. Add the route QA matrix to `docs/qa/2026-09-28-trosky-base44-fidelity-audit.md`.

```bash
git add docs/qa/2026-09-28-trosky-base44-reference-ledger.md docs/qa/2026-09-28-trosky-base44-fidelity-audit.md
git commit -m "docs: record Base44 fidelity verification"
git push
```

## Self-review

- **Spec coverage:** Tasks 1–6 cover the reference hierarchy, Partner Notes exception, original hero video, every listed route family, verified integrations, responsive fidelity, and anonymous public preview. No spec item is unowned.
- **Placeholder scan:** No deferred-work markers or vague cross-task references remain. The ledger is an explicit artifact with required columns and minimum reference content, not a deferred requirement.
- **Type consistency:** All tests use Node's built-in `node:test`, `readFileSync`, and route source strings; existing `FLUID_*`, `PHOTOS`, `STORY_VIDEO`, and link arrays retain their current module interfaces.
- **Review Focus coverage:** Task 1/2 test video and reference content; Tasks 2/3 test long mobile content and verified plan URLs; Task 4 tests Partner Notes isolation; Task 5 tests FormSubmit configuration; Task 6 tests actual route dimensions and public preview access.

## Execution handoff

Plan complete and saved to `docs/superpowers/plans/2026-09-28-trosky-base44-content-fidelity.md`. Please review the plan. Which execution approach would you prefer?

- **Subagent-driven** — A fresh subagent implements each task and a fresh reviewer checks it before the next one starts, then a whole-branch review at the end. Most thorough; costs a fresh context per task and per review.
- **Native** — I implement every task myself in this session, then one fresh reviewer checks the whole branch. Fastest and keeps the Base44 comparison context in one place.

For this plan I recommend **Native**, because the route-level copy, pricing, and link corrections share one source-of-truth ledger and must stay mutually consistent. Does the plan capture what you want, and which approach should we use?
