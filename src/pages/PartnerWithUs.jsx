import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Check, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PHOTOS } from '@/lib/photos';
import { STORY_VIDEO } from '@/lib/constants';

const standardBenefits = [
  'Standard Facility Signage',
  'VIP Lounge Access*',
  '5 Guest Passes / Month',
  '15% Off Facility Rentals',
  'Monthly Partner Mixer',
  'Featured Business Interview',
  'Website & Social Media Exposure',
  '50% Off Tournament Booth Space',
];

const premierBenefits = [
  'Premium Facility Signage',
  'VIP Lounge Access*',
  '10 Guest Passes / Month',
  '20% Off Facility Rentals',
  'Monthly Partner Mixer',
  'Featured Business Interview',
  'Website & Social Media Exposure',
  'Complimentary Tournament Booth Space',
  'Golden Ticket — Year-Round Owner Access',
];

function Benefits({ items }) {
  return <ul className="mt-7 space-y-3 text-sm leading-relaxed text-white/70">{items.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul>;
}

export default function PartnerWithUs() {
  return <div className="font-inter bg-[#f6f3ee] text-foreground">
    <Navbar />

    <section className="relative isolate overflow-hidden bg-[#080b10] pb-24 pt-40 text-white sm:pb-32">
      <img src={PHOTOS.clubhouse} alt="Trosky Sports Club at sunset" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080b10] via-[#080b10]/85 to-[#080b10]/35" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="base44-eyebrow mb-5">Partnership opportunities</p>
        <h1 className="font-display max-w-4xl text-6xl leading-[0.87] tracking-wide sm:text-7xl md:text-9xl">THE HOME OF YOUR NEXT GREAT PARTNERSHIP</h1>
        <h2 className="mt-8 font-display text-4xl leading-[0.9] tracking-wide text-primary sm:text-5xl">LET&apos;S BUILD<br />SOMETHING<br />TOGETHER.</h2>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">Partner with Trosky Sports Club and connect your brand with a growing community built around sports, events, and experiences.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={STORY_VIDEO} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/40 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10"><Play className="h-4 w-4 fill-current" />STEP INSIDE TROSKY</a>
          <a href="#opportunities" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-[#ff6d27]">EXPLORE PARTNERSHIP OPPORTUNITIES<ArrowDown className="h-4 w-4" /></a>
        </div>
        <p className="mt-4 text-xs text-white/55">A personal tour with Troy “Trosky” Fulks</p>
      </div>
    </section>

    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <img src={PHOTOS.grounds} alt="Community gathering space at Trosky Sports Club" className="h-96 w-full object-cover object-center" />
        <div><p className="base44-eyebrow mb-4">SPORT / WELLNESS / EVENTS / AUSTIN</p><h2 className="font-display text-5xl leading-[0.9] tracking-wide sm:text-7xl">BE A PART OF<br />SOMETHING SPECIAL</h2><p className="mt-7 text-lg leading-relaxed text-muted-foreground">Trosky brings people together through sports, events, family, and shared experiences.</p><p className="mt-4 text-lg leading-relaxed text-muted-foreground">We invite select brands to become part of that experience through partnerships that create real value for our community and meaningful exposure for your business.</p></div>
      </div>
    </section>

    <section className="bg-[#080b10] py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div><p className="base44-eyebrow mb-4">More than a destination</p><h2 className="font-display text-5xl leading-[0.9] tracking-wide sm:text-7xl">MORE THAN<br />A PLACE TO PLAY.<br /><span className="text-primary">A SPACE TO MAKE YOUR OWN.</span></h2><div className="mt-10 grid grid-cols-2 gap-6 border-y border-white/15 py-7"><div><p className="font-display text-6xl text-primary">2.5</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/70">Acres in Austin</p></div><div><p className="font-display text-6xl text-primary">8</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/70">Courts</p></div></div><p className="mt-7 text-lg leading-relaxed text-white/70">From everyday play to private experiences. A destination built for community and growth.</p><p className="mt-5 text-sm leading-relaxed text-white/60">Pickleball & Padel · Multi-Sport Turf Field · Private Events & Gatherings · VIP Spaces · Family Areas · Food, Entertainment & Social Experiences</p><p className="mt-7 font-display text-3xl tracking-wide">Come to play. Stay to connect. Make it yours.</p></div>
        <img src={PHOTOS.courts} alt="Pickleball courts and gathering spaces at Trosky" className="h-[34rem] w-full object-cover object-center" />
      </div>
    </section>

    <section className="bg-[#f6f3ee] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <img src={PHOTOS.deck} alt="Trosky event and VIP deck" className="order-2 h-96 w-full object-cover object-center lg:order-1 lg:h-[34rem]" />
        <div className="order-1 lg:order-2"><p className="base44-eyebrow mb-4">Real exposure, real connection</p><h2 className="font-display text-5xl leading-[0.9] tracking-wide sm:text-7xl">MORE THAN VISIBILITY.<br /><span className="text-primary">BECOME PART OF THE EXPERIENCE.</span></h2><p className="mt-7 text-lg leading-relaxed text-muted-foreground">Put your brand in front of people who play, gather, compete, and celebrate at Trosky.</p><ul className="mt-7 space-y-4 text-sm leading-relaxed text-muted-foreground">{['Consistent brand exposure throughout the club', 'Digital & social visibility beyond the facility', 'Access to events and community experiences', 'Opportunities to host clients, employees & guests', 'Direct connection with the Trosky community'].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul><p className="mt-8 font-display text-3xl tracking-wide text-foreground">BE SEEN. BE INVOLVED. BE REMEMBERED.</p></div>
      </div>
    </section>

    <section id="opportunities" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="base44-eyebrow mb-4">A partnership that fits your business</p><h2 className="font-display text-5xl leading-none tracking-wide sm:text-7xl">PARTNERSHIP OPTIONS:</h2><div className="mt-12 grid gap-5 lg:grid-cols-2"><article className="bg-[#0d203c] p-8 text-white sm:p-10"><p className="font-display text-4xl tracking-wide">STANDARD PARTNER — $499/MONTH</p><p className="mt-2 text-sm text-white/65">12-Month Partnership</p><Benefits items={standardBenefits} /><Link to="/contact-us" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-sm border border-white/40 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10">INQUIRE ABOUT STANDARD<ArrowRight className="h-4 w-4" /></Link></article><article className="bg-[#080b10] p-8 text-white sm:p-10"><p className="font-display text-4xl tracking-wide">PREMIER PARTNER — $999/MONTH</p><p className="mt-2 text-sm text-white/65">12-Month Partnership</p><Benefits items={premierBenefits} /><Link to="/contact-us" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-[#ff6d27]">INQUIRE ABOUT PREMIER<ArrowRight className="h-4 w-4" /></Link></article></div><p className="mt-5 text-xs leading-relaxed text-muted-foreground">*VIP Lounge access when hosting qualifying company events or gatherings.</p></div>
    </section>

    <section className="bg-[#080b10] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="base44-eyebrow mb-4">The setting behind the opportunity</p><h2 className="font-display text-5xl leading-none tracking-wide sm:text-7xl">A CLOSER LOOK</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">An experience people come back to—made visible through a flexible, welcoming facility.</p><div className="mt-12 grid gap-4 md:grid-cols-3"><img src={PHOTOS.snackBar} alt="Food and social space at Trosky" className="h-80 w-full object-cover object-center" /><img src={PHOTOS.vipLounge} alt="VIP lounge at Trosky" className="h-80 w-full object-cover object-center" /><img src={PHOTOS.coldPlunge} alt="Trosky recovery area" className="h-80 w-full object-cover object-center" /></div></div>
    </section>

    <section className="bg-primary py-20 text-primary-foreground sm:py-24"><div className="mx-auto max-w-4xl px-6 text-center"><p className="text-xs font-bold uppercase tracking-[0.25em]">Start the conversation</p><h2 className="mt-4 font-display text-5xl leading-none tracking-wide sm:text-7xl">LET&apos;S BUILD TOGETHER.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">Tell us about your brand, goals, and the experience you want to create with Trosky.</p><Link to="/contact-us" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-sm bg-[#080b10] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0d203c]">CONTACT US<ArrowRight className="h-4 w-4" /></Link></div></section>
    <Footer />
  </div>;
}
