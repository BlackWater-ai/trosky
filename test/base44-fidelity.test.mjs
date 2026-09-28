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
