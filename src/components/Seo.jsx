import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { OG_IMAGE, SITE_URL } from '@/lib/constants';

const DEFAULT_TITLE = 'Trosky Sports Club | Austin, TX';
const DEFAULT_DESCRIPTION =
  'Trosky Sports Club is Austin’s community sports facility — pickleball, padel, turf, camps, memberships, and more at 2105 Scott Ln, Austin, TX.';

const PAGE_META = {
  '/': { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  '/facility': { title: 'Facility | Trosky Sports Club', description: 'Explore courts, turf, recovery spaces, and family-friendly amenities at Trosky Sports Club in Austin, Texas.' },
  '/day-passes': { title: 'Day Passes & Memberships | Trosky Sports Club', description: 'Explore day passes and membership options for Trosky Sports Club in Austin, Texas.' },
  '/memberships': { title: 'Day Passes & Memberships | Trosky Sports Club', description: 'Explore day passes and membership options for Trosky Sports Club in Austin, Texas.' },
  '/day-passes-memberships': { title: 'Day Passes & Memberships | Trosky Sports Club', description: 'Explore day passes and membership options for Trosky Sports Club in Austin, Texas.' },
  '/reservations': { title: 'Reservations | Trosky Sports Club', description: 'Reserve courts, turf, and club time through Trosky Sports Club’s booking platform.' },
  '/coaches': { title: 'Training, Lessons & Camps | Trosky Sports Club', description: 'Learn and develop with training, lessons, camps, and multi-sport coaching at Trosky Sports Club.' },
  '/partner-with-us': { title: 'Partner With Us | Trosky Sports Club', description: 'Partner with Trosky Sports Club for local community, brand, and vendor opportunities.' },
  '/contact-us': { title: 'Contact | Trosky Sports Club', description: 'Contact Trosky Sports Club for general questions, reservations, coaching, events, or partnership inquiries.' },
  '/camps': { title: 'Youth Camps | Trosky Sports Club', description: 'Discover youth camps and clinics at Trosky Sports Club in Austin, Texas.' },
  '/gallery': { title: 'Gallery | Trosky Sports Club', description: 'See the courts, turf, club spaces, and community experience at Trosky Sports Club.' },
  '/our-story': { title: 'Our Story | Trosky Sports Club', description: 'Learn the story behind Trosky Sports Club and its Austin community mission.' },
  '/partners': { title: 'Partners | Trosky Sports Club', description: 'Meet the partners and sponsors supporting Trosky Sports Club.' },
  '/policies': { title: 'Policies | Trosky Sports Club', description: 'Read Trosky Sports Club policies and club guidelines.' },
  '/vip': { title: 'VIP | Trosky Sports Club', description: 'Explore VIP membership options and premium spaces at Trosky Sports Club.' },
};

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
    const { title, description } = PAGE_META[pathname] ?? { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION };
    document.title = title;

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: OG_IMAGE });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: OG_IMAGE });
  }, [pathname]);

  return null;
}
