# Base44 Sports-site reference ledger

This is the implementation reference for the approved Sports-site rebuild. Each route preserves Base44 content, structure, imagery intent, calls to action, and working destinations while using the existing refreshed visual system.

| Route | Base44 reference | Fidelity decision |
| --- | --- | --- |
| `/` | Full homepage: first-visit offer, founding offer, facility overview, gallery, use cases, passes, VIP, events, programs, story, amenities, partners, contact | Restore exact content hierarchy and Base44-approved factual copy; retain the original approved hero video and verified Fluid links. |
| `/facility` | Facility spaces, courts, amenities, tours | Keep Base44 space inventory and image-led browsing structure. |
| `/day-passes` | Individual and Group Day Pass pricing, guest policy, inclusions, upgrades | Preserve `$25` and `$50` pricing and the one-time group-guest policy. |
| `/reservations` | Court booking and rental guidance | Preserve booking paths through verified Fluid destinations. |
| `/coaches` | Training, lessons, camps, and coaches | Keep Base44 program categories and inquiry flow. |
| `/partner-with-us` | Sponsorship/partner content | Exception: Gabe’s shared Notes are authoritative for this route, including the $499/$999 partner packages. |
| `/contact-us` | General contact and location | Preserve verified contacts and `2105 Scott Ln, Austin, TX 78734`; Base44’s generic Austin location is superseded. |
| `/camps` | Sports camps and youth programming | Preserve Base44 program intent and contact CTA. |
| `/gallery` | Facility and community visuals | Preserve the Base44 facility-space grouping with available approved photos. |
| `/our-story` | Trosky’s story, values, and video | Preserve Base44 story copy, values, and the approved YouTube story link. |
| `/partners` | Sponsors, partners, and vendors | Preserve the Sports-site partner inventory; do not overwrite the separate Gabe Notes package page. |
| `/policies` | Day-pass and facility policies | Keep the Base44 guest-policy rule and verified operational policy copy. |
| `/vip` | Individual and Family VIP memberships | Preserve `$299.99`/`$499.99` pricing and Base44 benefits, including podcast-room use and the 25% private-rental discount. |

## Source rulings

- Base44’s visual site hierarchy and public copy are the source of truth for the Sports site. The current site’s refreshed typography, dark shell, warm neutral panels, and component system remain in place.
- The existing `trosky-sports-club-hero.mp4` remains the homepage hero. It is a client-supplied asset and supersedes any placeholder media.
- Existing verified Fluid URLs remain the source of truth for purchases and bookings. Base44’s older or incomplete booking references are not copied over.
- The verified address and current contact details supersede Base44’s generic Austin contact location.
- Base44 explicitly includes cold-plunge and sauna access among pass inclusions. This supersedes conflicting earlier local pass copy unless a verified operations source later changes it.
- Gabe’s Notes apply only to the sponsorship/partner-deck experience. They do not replace Sports-site content outside `/partner-with-us`.

| Public preview | Anonymous `200`, Vercel HTML, `index-DjrRwlNN.js`, Base44 homepage smoke test | complete — [branch preview](https://trosky-q7gx-git-cursor-trosky-spor-f13b27-stefan-fulks-projects.vercel.app/) | verified 2026-09-28; no Vercel sign-in prompt |
