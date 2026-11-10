import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (relativePath) => readFileSync(join(root, relativePath), 'utf8');
const mustExist = (relativePath) => {
  assert.ok(existsSync(join(root, relativePath)), `${relativePath} must exist after the Base44 merge`);
  return read(relativePath);
};

test('home retains the exported Base44 section composition', () => {
  const home = read('src/pages/Home.jsx');

  for (const component of [
    'HeroSection',
    'MembershipPromo',
    'FacilityGlance',
    'FacilityShowcase',
    'WhatYouCanDo',
    'DayPassSection',
    'VIPSection',
    'UpcomingEventsSlider',
    'ProgramsSection',
    'AboutSection',
    'AmenitiesSection',
    'PartnersSection',
    'ContactSection',
  ]) {
    assert.match(home, new RegExp(`<${component}(?:\\s|\\/)`));
  }
});

test('destination contact requirements survive the Base44 merge', () => {
  const contactSection = mustExist('src/components/ContactSection.jsx');
  const contactPage = read('src/pages/ContactUs.jsx');
  const footer = read('src/components/Footer.jsx');

  for (const file of [contactSection, contactPage]) {
    for (const option of [
      'General Questions',
      'Reservations',
      'Event / Venue Rental',
      'Coaches',
      'Vendor / Partnership Inquiry',
      'Other',
    ]) {
      assert.match(file, new RegExp(option));
    }
    assert.match(file, /What are you reaching out about\?/);
  }

  assert.match(footer, /Gabe@troskysportsclub\.com/);
  assert.match(footer, /210-632-8160/);
  assert.match(footer, /Troy@troskysportsclub\.com/);
  assert.match(footer, /512-986-2757/);
  assert.match(contactSection, /tel:2106328160/);
  assert.match(contactSection, /tel:5129862757/);
  assert.doesNotMatch(contactSection, /General Inquiries/);
});

test('the source-dominant merge retains the original high-definition hero video', () => {
  const hero = mustExist('src/components/HeroSection.jsx');
  assert.match(hero, /<video/);
  assert.match(hero, /\/trosky-hero\.mp4/);
  assert.match(hero, /playsInline/);
  assert.match(hero, /First visit offer: buy one Day Pass and bring up to 3 friends on us/);
});

test('the hero uses the original high-definition video and keeps the first-visit offer readable on phones', () => {
  const hero = mustExist('src/components/HeroSection.jsx');

  assert.match(hero, /\/trosky-hero\.mp4/);
  assert.match(hero, /text-\[\#f7d66b\]/);
  assert.match(hero, /max-w-md/);
  assert.match(hero, /break-words/);
  assert.match(hero, /hidden[^\"]*sm:block/);
});

test('the first-visit offer uses the premium Trosky hero treatment', () => {
  const hero = mustExist('src/components/HeroSection.jsx');

  assert.match(hero, /rounded-2xl/);
  assert.match(hero, /border-l-4 border-\[\#f7d66b\]/);
  assert.match(hero, /bg-black\/70/);
  assert.match(hero, /text-center text-white shadow-2xl/);
  assert.doesNotMatch(hero, /bg-primary\/95/);
});

test('the desktop hero reserves space below the first-visit offer', () => {
  const hero = mustExist('src/components/HeroSection.jsx');

  assert.match(hero, /pt-52[^\"]*sm:pt-40/);
});

test('the decorative hero scroll indicator yields space to CTAs on short screens', () => {
  const hero = mustExist('src/components/HeroSection.jsx');

  assert.match(hero, /hero-scroll-indicator/);
});

test('day-pass entrance animations cannot create a page-wide mobile scrollbar', () => {
  const dayPasses = mustExist('src/components/DayPassSection.jsx');

  assert.match(dayPasses, /id="daypass" className="[^"]*overflow-hidden/);
});

test('the facility-tour inquiry control uses the native mobile picker instead of overlaying the form', () => {
  const contactSection = mustExist('src/components/ContactSection.jsx');

  assert.match(contactSection, /<select/);
  assert.match(contactSection, /className="h-14 w-full/);
  assert.doesNotMatch(contactSection, /SelectContent/);
});

test('Gabe\'s August updates are reflected in the main site', () => {
  const reservations = read('src/pages/Reservations.jsx');
  const facility = read('src/components/FacilityShowcase.jsx');
  const story = read('src/pages/OurStory.jsx');
  const footer = read('src/components/Footer.jsx');
  const navbar = read('src/components/Navbar.jsx');

  assert.match(reservations, /Booking window: 7 days/);
  assert.doesNotMatch(reservations, /Booking window: 5 days/);
  assert.match(reservations, /Turf Field.*\$50–\$120\/hr/s);
  assert.doesNotMatch(reservations, /Volleyball Courts/);
  assert.doesNotMatch(facility, /Volleyball & Badminton/);
  assert.doesNotMatch(story, /Where the Vision Lives/);

  for (const label of ['Host Event', 'Contact', 'Policies', 'Partners']) {
    assert.match(footer, new RegExp(`label: '${label}'|>${label}<`));
  }
  for (const label of ['Facility', 'Play', 'Memberships', 'Programs', 'Coaches']) {
    assert.doesNotMatch(footer, new RegExp(`label: '${label}'`));
  }
  assert.match(navbar, /\{ label: 'Contact', href: '\/contact-us', isPage: true \}/);
});
