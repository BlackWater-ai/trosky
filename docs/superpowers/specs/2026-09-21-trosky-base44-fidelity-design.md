# Trosky Sports Club Base44 Fidelity Rebuild

## Goal

Rebuild the existing React/Vite Trosky Sports Club site so its page hierarchy, visual language, responsive behavior, and content density closely match the authenticated Base44 reference. The current deploy remains a preview until the rebuilt experience is approved.

## Source of Truth

The logged-in Base44 preview at `preview--troskysportsclub.base44.app` is the visual and content reference. The existing React application remains the runtime and retains its verified integrations.

## Constraints

- Preserve the React Router routes and the existing Vercel/GitHub workflow.
- Preserve Fluid booking URLs, including the approved day-pass and membership plan destinations.
- Preserve the external Events & Venue website at `https://trosky-4222.vercel.app/` and open it in a new tab.
- Preserve Gabe and Troy contact data, the existing FormSubmit recipient/CC behavior, and the six approved form choices.
- Use authentic Trosky assets already in the project/Base44 media and the supplied original hero video.
- Do not publish production without a separate explicit approval.

## Fidelity Strategy

### Shared visual system

Adopt Base44’s dark, high-contrast sports-club presentation: black/dark-navy section surfaces, white display headlines, orange action color, compact all-caps labels, image-forward cards, rounded panels, thin translucent borders, and dense but legible mobile stacking. Retain the current project’s available Bebas Neue/Inter typography and authentic media.

### Navigation and footer

Match Base44’s compact dark header behavior: crest-led branding, desktop navigation, mobile menu control, and prominent booking/tour action. Align footer hierarchy and wording with Base44 while retaining valid React routes and the verified email, phone, social, Fluid, and Events links.

### Homepage composition

Rebuild the home route in this Base44 order:

1. Full-screen media hero with the first-visit offer chip, eyebrow, headline, supporting copy, three CTAs, and scroll cue.
2. Founding-members offer panel.
3. Facility-at-a-glance grid with the full Base44 amenity set.
4. Explore-the-facility gallery with the featured space and all referenced facility categories.
5. Three-path experience section: Play, Premium Event Hosting, Recover & Relax.
6. Day Passes/Memberships promotion with individual/group pass cards and the included/upgrades information.
7. VIP membership comparison cards using the existing verified Fluid destinations.
8. Upcoming events grid, linking event actions to the separate Events site.
9. Training, Lessons & Camps program grid.
10. Story, values, amenities, partner/vendor, and contact/tour sections.
11. The shared footer.

Current separate routes remain supported; primary homepage CTAs either navigate to their matching route or use their verified external destination. No duplicate route should become broken as a result of creating the Base44-style long-form home page.

### Routed pages

Restyle page headers, cards, spacing, buttons, section labels, and mobile layouts so Facility, Day Passes/Memberships, Reservations, Coaches, Camps, Partner With Us, Contact, Gallery, Our Story, VIP, and Policies feel like extensions of the Base44 design. Their existing destinations and functional forms remain intact.

## Component Boundaries

- `src/pages/Home.jsx`: Base44-aligned long-form home sequence using reusable data arrays.
- `src/components/Navbar.jsx` and `src/components/Footer.jsx`: shared Base44-aligned shell.
- `src/components/PageSections.jsx` and page components: shared section/hero/card primitives applied to routed pages.
- `src/lib/constants.js` and `src/lib/photos.js`: authoritative destinations, contact data, approved labels, and authentic media mappings.
- `scripts/validate-site.mjs`: regression assertions for reference-derived content, integrations, and layout classes.

## Error Handling and Safety

- Retain native image alt text and the hero video poster fallback.
- Keep external links `target="_blank"` with `rel="noreferrer"` where appropriate.
- Preserve form loading, failure, and confirmation behavior; do not submit the live form during QA.
- Avoid stale or invented booking IDs, schedules, partners, and assets.

## Verification

- Compare the rebuilt home route with the authenticated Base44 reference at desktop and 320px, 375px, 390px, and 430px widths.
- Confirm no horizontal overflow, clipped card copy, distorted media, inaccessible controls, or broken internal/external links.
- Confirm all hero/offer/facility/experience/pass/membership/event/program/story/amenity/partner/contact sections are present and ordered as above.
- Run static validation and a production build.
- Verify the deployed Vercel preview after each final push before sharing the client URL.

## Out of Scope

- Publishing to the production domain.
- Changing Fluid plan IDs, form recipients, or the separate Events website.
- Copying Base44 platform internals; this is a faithful React implementation of the visible design and content.
