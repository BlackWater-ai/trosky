# Trosky Sports Club Content-Fidelity Design

## Goal

Make the React/Vite Sports Club website match the authenticated Base44 Sports site in visible content and behavior: every page's hierarchy, wording, pricing, photos, calls to action, destinations, navigation, and functional flow. Keep the current refreshed visual system rather than copying Base44's styling pixel-for-pixel.

## Source hierarchy

1. The logged-in Base44 preview at `preview--troskysportsclub.base44.app` is the primary source for Sports-site content, structure, copy, pricing, media selection, buttons, and link intent.
2. Gabe's explicit Sponsorship/Partner Notes are the approved source for the Partner With Us content. They override older Base44 partner material only on that partner surface.
3. Verified operational integrations remain authoritative where Base44's visible target is stale or unavailable: Fluid booking URLs, the separate Events & Venue site, Gabe and Troy contact data, and the live FormSubmit routing.
4. The original Trosky Sports Club hero video remains the homepage video asset with its existing autoplay, mute, loop, and inline-play behavior.

## Fidelity contract

For every public Sports route, the final site must retain:

- The Base44 route's page purpose, section order, headings, body copy, offer language, pricing, lists, image subjects, CTAs, and route/link destinations.
- Base44's interactive intent: internal page navigation, external booking/event links, anchored sections, video controls, menus, and inquiry behavior.
- The refresh's visual layer only: current typography, palette, responsive spacing, component treatment, accessible focus states, and mobile polish.

The result is not a pixel clone. It is a content-and-functionality clone in the newer aesthetic.

## Route inventory

| Surface | Base44 fidelity target | Exception |
| --- | --- | --- |
| Home | Hero video; founding offer; facility; facility gallery; Play/Event Hosting/Recover; day passes; VIP; events; programs; story; amenities; partners; tour/contact | Use the original local hero video. Event-hosting links route to the dedicated Events site. |
| Facility | Facility spaces, descriptions, imagery, tour/booking actions | None. |
| Day Passes / Memberships | Pass prices, group-pass policy, inclusions, upgrades, plan CTAs | Keep verified Fluid IDs when Base44's visible ID differs. |
| VIP | Individual and family pricing, descriptions, benefits, plan actions | Keep verified Fluid IDs. |
| Reservations | Booking context and Fluid reservation action | Keep Fluid as the action destination. |
| Coaches and Camps | Base44 program labels, descriptions, eligibility, and inquiry actions | None. |
| Gallery and Our Story | Base44 gallery/story copy, photo subjects, video intent, values, and tour actions | Keep actual available authentic photos/video. |
| Partners / Partner With Us | Base44 partner context and inquiry flow | Gabe's approved Partner Notes control the sponsorship packages and partner-page narrative. |
| Contact and Policies | Base44 information architecture and contact emphasis | Preserve verified contact details, FormSubmit routing, and approved inquiry options. |
| Shared navigation/footer | Base44 information architecture and labels | Keep refreshed accessible implementation and verified external destinations. |

## Implementation design

### Reference ledger

Create a route-by-route fidelity ledger before editing. Each line records the Base44 source text, price, photo subject/URL, CTA label, CTA target, and current-site state. Mark each item as match, intentional approved exception, or required correction. The ledger is both the implementation checklist and regression reference.

### Content and interaction restoration

Replace only drifted content and behavior. Prefer data arrays in the existing page files or shared `src/lib` modules so repeated offer/pricing/link values have one owner. Reuse existing shared shell and section components; do not introduce a parallel website architecture.

### Visual preservation

Do not regress the newer dark/orange sports visual system, responsive cards, current image handling, accessibility, or public-preview deployment setup. New structure may use current reusable elements provided that the visible content and sequence match the Base44 reference.

## Safety and verification

- Add a failing regression assertion before each behavior/content correction, then make it pass.
- Audit all internal routes at desktop and 320px, 375px, 390px, 430px, and tablet widths for no horizontal overflow, clipped content, broken images, or dead controls.
- Check every external destination without submitting a live form. Validate form configuration rather than generating a real inquiry.
- Run the test suite, static validator, production build, and an anonymous public-preview request.
- Do not publish the Sports site to a custom domain or production domain without separate approval.

## Out of scope

- Altering the independent Events & Venue site except for already approved/implemented factual updates.
- Changing Fluid plan IDs, contacts, or form recipients without a verified source change.
- Applying Sponsorship/Partner Notes to unrelated Sports-site routes.
