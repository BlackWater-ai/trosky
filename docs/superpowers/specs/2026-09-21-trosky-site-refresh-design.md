# Trosky Sports Club Site Refresh — Design Specification

## Purpose

Refine the existing Trosky Sports Club React/Vite website into a calm, premium, local sports-club experience. Preserve the existing separate-page routing and integrations while making the visual hierarchy, image treatment, typography, spacing, and mobile behavior feel cohesive and intentional.

The former Base44 reference is currently unavailable, so the implementation will derive its restrained navy, blue, orange, and light-neutral visual direction from the approved existing brand system, current Trosky assets, the supplied content requirements, and the working site.

## Scope

- Preserve all existing public routes: Home, Facility, Day Passes / Memberships, Reservations, Events / Venue redirect, Coaches, Partner With Us, Contact, Camps, Gallery, Our Story, Partners, Policies, and VIP.
- Keep all court/day-pass/membership integrations external to Fluid; do not infer unknown membership plan IDs.
- Route all event/venue calls to action to `https://trosky-4222.vercel.app/` in a new tab using `rel="noreferrer"`; `/events` and `/events-venue` remain redirects to that destination.
- Use only existing authentic Trosky media plus the user-supplied original Sports Club hero video. Do not introduce stock or basketball imagery.
- Do not publish or submit a live contact-form test.

## Visual System

The shared site treatment will use warm off-white surfaces, deep navy/charcoal panels, restrained orange as an action accent, and blue only as a supporting brand tone. Display typography remains condensed and athletic but is used with generous whitespace; body type remains highly legible.

Cards will have modest radii, clear borders, and restrained motion. Images will always use `object-fit: cover` with meaningful, route-specific crop positioning. The logo remains compact in the navigation and footer. Dark areas will be used as framing elements rather than an all-page treatment.

## Home Page

1. Replace the current hero media with the supplied original Sports Club video, optimized for browser playback. The hero video will be muted, looping, and inline, with a Trosky image poster/fallback. The browser will still show a polished image-first hero if video playback is unavailable.
2. Simplify the hero copy and action grouping around court booking, day passes, and facility discovery.
3. Remove the disallowed repeated sales/pricing blocks and avoid duplicate calls to action.
4. Retain a concise facility-at-a-glance section and visual facility discovery links.
5. In “One Facility, Endless Ways to Use It,” maintain Play and Learn & Develop, and use a real Trosky image-led Event Hosting panel in place of Train. Its image, copy, and button must all link externally to the Events website.
6. Remove coach/founder content from the homepage. Troy’s founder profile remains on Our Story only.
7. Keep the page quiet and image-led rather than adding another event/programme feed or broad pricing treatment.

## Shared Navigation, Footer, and Routes

- Main navigation contains Coaches, not Camps. Camps remains in secondary/mobile/footer navigation.
- The Coaches page communicates training, lessons, camps, and “Learn and Develop”; Camps retains a dedicated page with the CTA “Inquire About Camp Start Dates.”
- Navigation and footer retain the official logo at a refined scale, use accessible focus states, and keep contact email and telephone links separated with clear spacing.
- The footer and contact page show Gabe as general inquiries and Troy Fulks with these exact details:
  - Gabe@troskysportsclub.com / 210-632-8160
  - Troy@troskysportsclub.com / 512-986-2757

## Contact Form

- Remove helper copy beneath the General Contact Form heading.
- Use only these select options: General Questions; Reservations; Event / Venue Rental; Coaches; Vendor / Partnership Inquiry; Other.
- Keep Gabe as the primary form recipient and Troy copied.
- Required fields, labels, error messaging, loading state, and success state must remain accessible. Configuration is assessed statically and no live email will be sent during QA.

## Pricing and CTA Rules

- Court and reservation CTAs use `https://trosky.fluidpb.com/reservations`.
- Individual Day Pass remains $25 with its approved direct Fluid plan link.
- Group Day Pass remains $50 with its approved direct Fluid plan link.
- Approved facility pricing remains: Pickleball / Hybrid $20/hour, Premium Padel $60/hour, Volleyball $50/hour.
- Remove peak/non-peak scheduling language and the 50% single-person peak-time discount.

## Implementation Boundaries

The work will update page components, shared components, content constants, media assets, and static validation rules only. It will not add a CMS, backend, analytics, third-party dependencies, new plan IDs, stock assets, or a publishing action.

## Verification

1. Run the existing site validation and production build.
2. Confirm the hero video/fallback asset behavior and all local assets resolve.
3. Audit every route, primary/secondary navigation link, footer link, Fluid CTA, Events CTA, mailto/tel link, and form configuration.
4. Validate responsive layouts at 320px, 375px, 390px, and 430px with no horizontal overflow, clipped text, broken menu behavior, overlaps, distorted media, or undersized controls.
5. Check desktop/mobile typography consistency, titles, meta descriptions, alt text, keyboard focus/navigation, contrast, and loading/fallback behavior.
6. Deliver a local preview and short report noting passed checks, unresolved items, and any media/assets still needed. Do not publish.
