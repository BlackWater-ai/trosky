import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { OG_IMAGE, SITE_URL } from '@/lib/constants';

const TITLE = 'Trosky Sports Club | Austin, TX';
const DESCRIPTION =
  'Trosky Sports Club is Austin’s community sports facility — pickleball, padel, turf, camps, memberships, and more at 2105 Scott Ln, Austin, TX.';

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
    const title = pathname === '/' ? 'Events & Private Gatherings in Austin | Trosky Sports Club' : TITLE;
    const description = pathname === '/' ? 'Plan corporate events, weddings, celebrations and private gatherings at Trosky Sports Club in Austin. Explore the venue, request a tour and discover the club.' : DESCRIPTION;
    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);

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
