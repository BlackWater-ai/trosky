import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const SRC = join(ROOT, 'src');

const REQUIRED_REASONS = [
  'General Questions',
  'Reservations',
  'Event / Venue Rental',
  'Coaches',
  'Vendor / Partnership Inquiry',
  'Other',
];

const VENUE = 'https://trosky-4222.vercel.app/';

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (/\.(jsx?|tsx?|html|md|json)$/.test(name)) out.push(full);
  }
  return out;
}

const files = walk(SRC);
let failed = false;

function fail(msg) {
  failed = true;
  console.error(`FAIL: ${msg}`);
}

const internalEvents = /(to|href)\s*=\s*['"`]\/events(?:-venue)?['"`]|to:\s*['"`]\/events(?:-venue)?['"`]/g;

for (const file of files) {
  const rel = relative(ROOT, file);
  if (rel.endsWith('EventsRedirect.jsx') || rel.endsWith('App.jsx')) continue;
  const text = readFileSync(file, 'utf8');
  const matches = text.match(internalEvents);
  if (matches) {
    fail(`${rel} still points a CTA/link at internal /events (${matches.join(', ')})`);
  }
}

const constants = readFileSync(join(SRC, 'lib/constants.js'), 'utf8');
if (!constants.includes(`EVENTS_VENUE_URL = '${VENUE}'`)) {
  fail('EVENTS_VENUE_URL must be https://trosky-4222.vercel.app/');
}

for (const reason of REQUIRED_REASONS) {
  if (!constants.includes(`'${reason}'`)) fail(`Missing dropdown option: ${reason}`);
}

const extraReasons = [
  'Day pass',
  'Court reservation',
  'VIP Membership',
  'Facility Tour',
  'Camps or Clinics',
];
for (const extra of extraReasons) {
  if (constants.includes(`'${extra}'`)) fail(`Dropdown still includes removed option: ${extra}`);
}

const requiredSnippets = [
  'Gabe@troskysportsclub.com',
  'Troy@troskysportsclub.com',
  '210-632-8160',
  '512-986-2757',
  'mailto:${person.email}',
  'tel:${person.tel}',
];

const contactFiles = [join(SRC, 'pages/ContactUs.jsx'), join(SRC, 'components/Footer.jsx'), join(SRC, 'lib/constants.js')];
const contactBlob = contactFiles.map((f) => readFileSync(f, 'utf8')).join('\n');
for (const snippet of requiredSnippets) {
  if (!contactBlob.includes(snippet)) fail(`Missing contact requirement: ${snippet}`);
}

const contactPage = readFileSync(join(SRC, 'pages/ContactUs.jsx'), 'utf8');
if (contactPage.includes('For event rentals and camps')) {
  fail('Helper copy under General Contact Form must stay removed');
}
if (!contactPage.includes("fetch('https://formsubmit.co/ajax/Gabe@troskysportsclub.com'")) {
  fail('Contact form must send to Gabe as primary recipient');
}
if (!contactPage.includes("_cc: 'Troy@troskysportsclub.com'")) {
  fail('Contact form must copy Troy Fulks');
}
if (!contactPage.includes('space-y-3 border-t border-border pt-5')) {
  fail('Contact cards must keep each person’s email and phone clearly separated');
}

const campsPage = readFileSync(join(SRC, 'pages/Camps.jsx'), 'utf8');
const coachesPage = readFileSync(join(SRC, 'pages/Coaches.jsx'), 'utf8');
const primaryNav = constants.match(/export const NAV_LINKS = \[([\s\S]*?)\];/)?.[1] ?? '';
if (!primaryNav.includes("{ label: 'Coaches', to: '/coaches' }")) fail('Primary navigation must include Coaches');
if (primaryNav.includes("{ label: 'Camps', to: '/camps' }")) fail('Primary navigation must not include Camps');
if (!campsPage.includes('Inquire About Camp Start Dates')) fail('Camps CTA must use approved inquiry copy');
for (const phrase of ['Training', 'Lessons', 'Camps', 'Learn and Develop']) {
  if (!coachesPage.includes(phrase)) fail(`Coaches must communicate ${phrase}`);
}

const app = readFileSync(join(SRC, 'App.jsx'), 'utf8');
if (!app.includes('EventsRedirect') || !app.includes('path="/events"')) {
  fail('App.jsx must redirect /events via EventsRedirect');
}

const seo = readFileSync(join(SRC, 'components/Seo.jsx'), 'utf8');
for (const route of ['/', '/facility', '/day-passes', '/reservations', '/coaches', '/contact-us', '/camps', '/gallery', '/our-story', '/partners', '/policies', '/vip']) {
  if (!seo.includes(`'${route}'`)) fail(`SEO metadata must cover route: ${route}`);
}

const indexHtml = readFileSync(join(ROOT, 'index.html'), 'utf8');
for (const needle of ['rel="canonical"', 'og:title', 'og:description', 'og:image', 'twitter:card', 'SportsActivityLocation', 'LocalBusiness']) {
  if (!indexHtml.includes(needle)) fail(`index.html missing SEO: ${needle}`);
}

if (!indexHtml.includes('Bebas+Neue')) {
  fail('Base44 display font (Bebas Neue) must be loaded');
}

const logoPath = join(ROOT, 'public', 'trosky-sports-club-logo.png');
try {
  statSync(logoPath);
} catch {
  fail('Trosky logo asset must be present in public/trosky-sports-club-logo.png');
}

for (const file of [join(SRC, 'components/Navbar.jsx'), join(SRC, 'components/Footer.jsx')]) {
  if (!readFileSync(file, 'utf8').includes('trosky-sports-club-logo.png')) {
    fail(`${relative(ROOT, file)} must display the approved Trosky crest`);
  }
}

const home = readFileSync(join(SRC, 'pages/Home.jsx'), 'utf8');
const heroVideoPath = join(ROOT, 'public', 'trosky-sports-club-hero.mp4');
try {
  statSync(heroVideoPath);
} catch {
  fail('Original Sports Club hero video must be present in public/trosky-sports-club-hero.mp4');
}
for (const snippet of ['<video', 'autoPlay', 'muted', 'loop', 'playsInline', '/trosky-sports-club-hero.mp4']) {
  if (!home.includes(snippet)) fail(`Home hero must include original video behavior: ${snippet}`);
}
if (home.includes('Bring the Crew') || home.includes('Founding Offer — $79/month')) {
  fail('Home must avoid repeated offer and membership-pricing blocks');
}

for (const phrase of [
  'No Hidden Costs',
  'Simple, Transparent Pricing',
  'Standard Bookings',
  'Private Events & Large Rentals',
  'Ready to Experience Trosky',
  'Meet the Coaches',
]) {
  if (home.includes(phrase)) fail(`Home must not include removed copy: ${phrase}`);
}

if (!home.includes('Event Hosting') || !home.includes('EVENTS_VENUE_URL') || !home.includes('object-cover')) {
  fail('Home must include an image-led Event Hosting card linked to the Events website');
}
if (!home.includes('className="flex flex-col overflow-hidden rounded-lg border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg"')) {
  fail('Home experience cards must stack their image and content vertically without clipping');
}

const vipPage = readFileSync(join(SRC, 'pages/VIP.jsx'), 'utf8');
for (const plan of ['FLUID_VIP', 'FLUID_VIP_FAMILY']) {
  if (!vipPage.includes(plan)) fail(`VIP page must deep-link to ${plan}`);
}

if (!failed) {
  console.log('validate-site: all checks passed');
  process.exit(0);
}

process.exit(1);
