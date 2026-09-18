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

const app = readFileSync(join(SRC, 'App.jsx'), 'utf8');
if (!app.includes('EventsRedirect') || !app.includes('path="/events"')) {
  fail('App.jsx must redirect /events via EventsRedirect');
}

const indexHtml = readFileSync(join(ROOT, 'index.html'), 'utf8');
for (const needle of ['rel="canonical"', 'og:title', 'og:description', 'og:image', 'twitter:card', 'SportsActivityLocation', 'LocalBusiness']) {
  if (!indexHtml.includes(needle)) fail(`index.html missing SEO: ${needle}`);
}

if (!failed) {
  console.log('validate-site: all checks passed');
  process.exit(0);
}

process.exit(1);
