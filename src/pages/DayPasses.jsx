import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PageHeader, FinalCTA } from '../components/PageSections';
import {
  FLUID_ADVANTAGE,
  FLUID_GROUP_DAY_PASS,
  FLUID_INDIVIDUAL_DAY_PASS,
  FLUID_VIP,
  FLUID_VIP_FAMILY,
} from '@/lib/constants';

const included = [
  'Individual Day Pass: admission for one guest · Group Day Pass: admission for you plus up to 3 different guests',
  'Open play padel and pickleball before peak hours',
  'Turf field access for volleyball and soccer (when not reserved)',
  'General hangout areas',
  'Lawn games — cornhole, mini golf, horseshoes, and more',
  'Kids area',
  'Dog area',
  'Food and drink areas',
  'Equipment, sports balls & rentals — complimentary or small rental fee depending on activity',
  'Access to the full community atmosphere',
];

const upgrades = [
  'Court reservations',
  'VIP lounges',
  'Events',
  'Cold plunge',
  'Sauna',
  'Rentals',
  'Food trucks',
  'Premium experiences',
];

const plans = [
  { name: 'Advantage', price: '$79/mo', note: 'Founding offer — first 99 members', to: FLUID_ADVANTAGE },
  { name: 'VIP', price: '$299.99/mo', note: 'Premium all-access for one adult', to: FLUID_VIP },
  { name: 'VIP Family', price: '$499.99/mo', note: 'Two adults + kids 13 and under', to: FLUID_VIP_FAMILY },
];

export default function DayPasses() {
  return (
    <div className="font-inter bg-background">
      <Navbar />
      <PageHeader
        kicker="Limited Time"
        title="Day Passes / Memberships"
        subtitle="Experience the full Trosky Sports Club atmosphere for the day. Come play, compete, relax, and hang out with friends and family."
      />

      <section className="py-24 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-border rounded-xl p-8">
            <p className="font-inter text-xs tracking-widest uppercase text-muted-foreground mb-2">Individual</p>
            <h2 className="font-display text-4xl text-foreground tracking-wider mb-2">Individual Day Pass</h2>
            <p className="font-display text-3xl text-primary mb-4">$25/pass</p>
            <p className="font-inter text-sm text-muted-foreground mb-6">One full-day admission for one guest.</p>
            <a href={FLUID_INDIVIDUAL_DAY_PASS} target="_blank" rel="noreferrer" className="bg-primary text-primary-foreground px-6 py-3 font-inter font-bold text-xs tracking-wider uppercase rounded-sm inline-flex items-center gap-2">
              Reserve Individual Pass <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="bg-white border border-primary/30 rounded-xl p-8">
            <p className="font-inter text-xs tracking-widest uppercase text-primary mb-2">Limited time</p>
            <h2 className="font-display text-4xl text-foreground tracking-wider mb-2">Group Day Pass</h2>
            <p className="font-display text-3xl text-primary mb-4">$50/pass</p>
            <p className="font-inter text-sm text-muted-foreground mb-6">Includes entry for you plus up to 3 guests.</p>
            <a href={FLUID_GROUP_DAY_PASS} target="_blank" rel="noreferrer" className="bg-primary text-primary-foreground px-6 py-3 font-inter font-bold text-xs tracking-wider uppercase rounded-sm inline-flex items-center gap-2">
              Reserve Group Pass <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <p className="max-w-5xl mx-auto px-6 lg:px-8 mt-8 font-inter text-sm text-muted-foreground leading-relaxed">
          Group Day Pass Guest Policy: Each Group Day Pass includes entry for you plus up to 3 different guests. The same guest cannot be brought in twice under the same Group Day Pass offer.
        </p>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl text-foreground tracking-wider mb-5">What&apos;s Included</h2>
            <ul className="space-y-3">{included.map((item) => <li key={item} className="font-inter text-sm text-muted-foreground leading-relaxed">• {item}</li>)}</ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-foreground tracking-wider mb-5">Optional Upgrades</h2>
            <ul className="space-y-3 mb-6">{upgrades.map((item) => <li key={item} className="font-inter text-sm text-muted-foreground">• {item}</li>)}</ul>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">Court reservations, VIP lounges, events, cold plunge and sauna access, rentals, food trucks, and other premium experiences are optional upgrades or separate reservations and are not included with the Day Pass.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">Membership</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider mb-8">Membership Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => <div key={plan.name} className="bg-white border border-border rounded-xl p-7">
              <h3 className="font-display text-2xl tracking-wider mb-2">{plan.name}</h3>
              <p className="font-display text-3xl text-primary mb-2">{plan.price}</p>
              <p className="font-inter text-sm text-muted-foreground mb-6">{plan.note}</p>
              <a href={plan.to} target="_blank" rel="noreferrer" className="font-inter font-bold text-xs tracking-wider uppercase text-primary inline-flex items-center gap-2">Choose plan <ArrowRight className="w-4 h-4" /></a>
            </div>)}
          </div>
        </div>
      </section>

      <FinalCTA title="Ready to Come Play?" body="Reserve a day pass or ask about memberships — our team will help you choose the right option." label="Contact the Club" />
      <Footer />
    </div>
  );
}
