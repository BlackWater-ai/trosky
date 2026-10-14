import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

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
  'Cold plunge access',
  'Sauna access',
  'Access to the full community atmosphere',
];

const addOns = [
  'Court reservations',
  'VIP lounges',
  'Events',
  'Rentals',
  'Food trucks',
  'Premium experiences',
  'Equipment rentals when applicable',
];

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

export default function DayPassSection() {
  return (
    <section id="daypass" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">Limited Time</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            Day Passes / Memberships
          </h2>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-8">
            Experience the full Trosky Sports Club atmosphere for the day. Come play, compete, relax, and hang out with friends and family.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => scrollTo('#daypass-includes')}
              className="border border-border text-foreground px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-background transition-colors"
            >
              Explore What's Included
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12"
        >
          {[
            {
              label: 'Individual Day Pass',
              price: '$25',
              copy: 'One full-day admission for one guest.',
              cta: 'Reserve Individual Pass',
              url: 'https://trosky.fluidpb.com/become-a-member?planId=0aa7e7db-5f9a-41f7-8bce-1f60e34e9a03',
            },
            {
              label: 'Group Day Pass',
              price: '$50',
              copy: 'Includes entry for you plus up to 3 guests.',
              cta: 'Reserve Group Pass',
              url: 'https://trosky.fluidpb.com/become-a-member?planId=cfba0fad-d2b6-48c2-88df-691fa06ac675',
            },
          ].map((pass) => (
            <div key={pass.label} className="bg-white border border-border rounded-xl p-8 flex flex-col card-hover">
              <p className="font-display text-2xl text-foreground tracking-wider mb-1">{pass.label}</p>
              <div className="flex items-end gap-2 my-4">
                <span className="font-display text-6xl text-foreground tracking-wider">{pass.price}</span>
                <span className="font-inter text-muted-foreground text-sm pb-2">/ pass</span>
              </div>
              <p className="font-inter text-muted-foreground text-sm mb-1">{pass.copy}</p>
              <p className="font-inter text-sm text-primary font-semibold mb-6">⚡ Limited time only</p>
              <a
                href={pass.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full bg-primary text-primary-foreground py-3.5 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity block text-center"
              >
                {pass.cta}
              </a>
            </div>
          ))}
        </motion.div>

        {/* Guest Rule Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-white border-l-4 border-primary rounded-xl px-6 py-5 shadow-sm flex gap-4 items-start">
            <span className="text-xl mt-0.5">📋</span>
            <p className="font-inter text-sm text-foreground leading-relaxed">
              <span className="font-bold text-foreground">Group Day Pass Guest Policy:</span> Each Group Day Pass includes entry for you plus up to 3 different guests. The same guest cannot be brought in twice under the same Group Day Pass offer. The Individual Day Pass includes one full-day admission for one guest only.
            </p>
          </div>
        </motion.div>

        {/* What's Included */}
        <div id="daypass-includes" className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-xs tracking-widest uppercase text-primary font-semibold mb-4">Included With Your Day Pass</p>
            <h3 className="font-display text-3xl text-foreground tracking-wider mb-6">What's Included</h3>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-4 font-inter text-base text-foreground leading-relaxed">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-xs tracking-widest uppercase text-muted-foreground font-semibold mb-4">Upgrades Available</p>
            <h3 className="font-display text-3xl text-foreground tracking-wider mb-6">Optional Upgrades & Reservations</h3>
            <ul className="space-y-3 mb-6">
              {addOns.map((item) => (
                <li key={item} className="flex items-start gap-3 font-inter text-sm text-muted-foreground leading-relaxed">
                  <Circle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-inter text-xs text-muted-foreground leading-relaxed bg-secondary border border-border rounded-lg px-4 py-3">
              Court reservations, VIP lounges, events, rentals, food trucks, and other premium experiences are optional upgrades or separate reservations and are not included with the Day Pass.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}