import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = (path) => readFileSync(path, 'utf8');

test('approved homepage hierarchy puts private events before sports and offers', () => {
  const home = read('src/pages/Home.jsx');
  const sections = ['HeroSection', 'EventTypesSection', 'EventVenueSection', 'EventInquirySection', 'UpcomingEventsSlider', 'FirstVisitBanner', 'MembershipPromo', 'DayPassSection', 'VIPSection', 'ProgramsSection'];
  let previous = -1;
  for (const section of sections) {
    const current = home.indexOf(`<${section}`);
    assert.ok(current > previous, `${section} must follow the approved event-first order`);
    previous = current;
  }
  assert.match(home, /<EventInquirySection final/);
});

test('event hero and calls to action lead to the existing venue inquiry', () => {
  const hero = read('src/components/HeroSection.jsx');
  assert.match(hero, /Your Next Event/);
  assert.match(hero, /Starts at Trosky/);
  assert.match(hero, /EVENTS_INQUIRY_URL/);
  assert.match(hero, /Plan Your Event/);
  assert.match(hero, /Explore the Venue/);
  assert.doesNotMatch(hero, /Buy a Day Pass|Book a Court|Bring the Crew/);
  assert.match(read('src/lib/constants.js'), /EVENTS_INQUIRY_URL = `\$\{EVENTS_VENUE_URL\}#contact`/);
});

test('private event categories are prominent and do not invent operating claims', () => {
  const events = read('src/components/EventTypesSection.jsx');
  for (const label of ['Corporate Events', 'Birthdays & Celebrations', 'Weddings', 'Private Gatherings']) assert.ok(events.includes(label));
  const newCopy = events + read('src/components/EventVenueSection.jsx') + read('src/components/EventInquirySection.jsx');
  assert.doesNotMatch(newCopy, /250 guests|24 hours|full-service|on-site catering|\$\d/i);
});

test('public events do not fabricate dates or route attendance to private rental inquiries', () => {
  const events = read('src/components/UpcomingEventsSlider.jsx');
  assert.match(events, /Upcoming Public Events/);
  assert.match(events, /Ask About Upcoming Events/);
  assert.doesNotMatch(events, /Every Friday|Every Saturday|6:00 PM|TBD|Private Event Availability|View Events/);
});

test('navigation prioritizes private events and has accessible mobile controls', () => {
  const navbar = read('src/components/Navbar.jsx');
  assert.ok(navbar.indexOf("label: 'Private Events'") < navbar.indexOf("label: 'Home'"));
  assert.match(navbar, /Plan Your Event/);
  assert.match(navbar, /aria-expanded=\{mobileOpen\}/);
  assert.match(navbar, /aria-controls="mobile-navigation"/);
  assert.match(navbar, /aria-label=\{mobileOpen/);
  assert.match(navbar, /EVENTS_INQUIRY_URL/);
});

test('mobile sticky inquiry leaves room for content and respects reduced motion', () => {
  assert.match(read('src/components/MobileEventAction.jsx'), /EVENTS_INQUIRY_URL/);
  assert.match(read('src/pages/Home.jsx'), /pb-24 lg:pb-0/);
  const css = read('src/index.css');
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /scroll-margin-top/);
});
