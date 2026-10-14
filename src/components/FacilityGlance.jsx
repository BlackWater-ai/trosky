import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: '📍',
    value: '2.5 Acre Facility',
    desc: 'A large outdoor sports and event compound in Austin, TX designed for play, training, events, and community experiences.',
  },
  {
    icon: '🎾',
    value: '8 Pickleball / Padel Courts',
    desc: 'Open play, reservations, lessons, clinics, tournaments, and social events across a mix of pickleball and padel courts.',
  },
  {
    icon: '⚽',
    value: 'Multi-Sport Turf Field',
    desc: 'Soccer, lacrosse, volleyball (2 nets), open play, youth camps, leagues, field rentals, and private events.',
  },
  {
    icon: '🎉',
    value: 'Events & Venue Space',
    desc: 'Celebrations, corporate outings, watch parties, movie nights, food truck events, camps, and community gatherings.',
  },
  {
    icon: '🧊',
    value: 'Recovery & VIP Amenities',
    desc: 'VIP areas, private locker rooms, cold plunge, sauna, food and drink areas, hangout zones, and premium spaces.',
  },
  {
    icon: '👨‍👩‍👧',
    value: 'Family & Community Areas',
    desc: 'Kids area, dog area, lawn games, cornhole, mini golf, horseshoes, and spaces for families and groups to relax.',
  },
];

export default function FacilityGlance() {
  return (
    <section className="py-20 bg-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-inter text-white/40 text-xs tracking-[0.3em] uppercase mb-3 font-medium">The Grounds</p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wider">Facility At A Glance</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-sm p-6 flex flex-col gap-3 hover:bg-white/8 transition-colors card-hover"
            >
              <span className="text-3xl">{stat.icon}</span>
              <p className="font-inter font-bold text-white text-base leading-snug">{stat.value}</p>
              <p className="font-inter text-white/50 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}