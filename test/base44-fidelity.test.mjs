import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const home = readFileSync(new URL('../src/pages/Home.jsx', import.meta.url), 'utf8')

test('home preserves Base44’s first-visit offer, day-pass policy, and VIP benefits', () => {
  assert.match(home, /First visit offer: buy 1 day pass and bring 3 friends free/i)
  assert.match(home, /The same guest cannot be brought in twice under the same Group Day Pass offer/i)
  assert.match(home, /Podcast room usage/i)
  assert.match(home, /25% off private venue rentals/i)
})

test('home retains the approved original hero video asset', () => {
  assert.match(home, /trosky-sports-club-hero\.mp4/)
})

test('hero video uses an upward crop that keeps speakers in frame', () => {
  assert.match(home, /object-\[center_30%\]/)
})

test('homepage carries Base44 VIP, event, and amenity detail', () => {
  for (const text of [
    '10 guest passes per month', '1 booking per day', '2 hour max booking',
    'Private locker rooms', 'Podcast room usage', '25% off private venue rentals',
    'Open Play Night', 'Movie Night on the Turf', 'Pickleball Social',
    'Massage Chair', 'Outdoor Environment', 'Sponsorship & Advertising Inquiries',
  ]) assert.match(home, new RegExp(text))
})

test('pass and VIP routes retain Base44 pricing and policy language', () => {
  const passes = readFileSync(new URL('../src/pages/DayPasses.jsx', import.meta.url), 'utf8')
  const vip = readFileSync(new URL('../src/pages/VIP.jsx', import.meta.url), 'utf8')
  assert.match(passes, /Includes entry for you plus up to 3 guests/)
  assert.match(passes, /Optional Upgrades & Reservations/)
  assert.match(vip, /\$299\.99\/month/)
  assert.match(vip, /\$499\.99\/month/)
  assert.match(vip, /Podcast room usage/)
})

test('program, story, and partner routes preserve reference content boundaries', () => {
  const coaches = readFileSync(new URL('../src/pages/Coaches.jsx', import.meta.url), 'utf8')
  const story = readFileSync(new URL('../src/pages/OurStory.jsx', import.meta.url), 'utf8')
  const partner = readFileSync(new URL('../src/pages/PartnerWithUs.jsx', import.meta.url), 'utf8')
  assert.match(coaches, /Private lessons/)
  assert.match(coaches, /team training/)
  assert.match(story, /A place where people come together/)
  assert.match(story, /AWecRQkdnWg/)
  assert.match(partner, /STANDARD PARTNER — \$499\/MONTH/)
  assert.doesNotMatch(partner, /Podcast Sessions/)
})

test('shared shell retains verified contacts and Base44 navigation intent', () => {
  const constants = readFileSync(new URL('../src/lib/constants.js', import.meta.url), 'utf8')
  const footer = readFileSync(new URL('../src/components/Footer.jsx', import.meta.url), 'utf8')
  const contact = readFileSync(new URL('../src/pages/ContactUs.jsx', import.meta.url), 'utf8')
  assert.match(constants, /Events & Venue/)
  assert.match(footer, /Book Through Fluid/)
  assert.match(contact, /FormSubmit/)
  assert.match(contact, /Troy@troskysportsclub\.com/)
})
