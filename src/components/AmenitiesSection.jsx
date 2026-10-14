import React from 'react';
import { motion } from 'framer-motion';

const amenities = [
  { emoji: '🧊', name: 'Cold Plunges', desc: 'Recovery-focused cold water immersion stations.' },
  { emoji: '🏠', name: 'VIP Container Rooms', desc: 'Private, air-conditioned spaces with TVs for groups and members.' },
  { emoji: '🔥', name: 'BBQ Areas', desc: 'Outdoor grilling and hangout spaces for events and casual days.' },
  { emoji: '💪', name: 'Outdoor Calisthenics Gym', desc: 'Dips, pull-ups, monkey bars, and open-air fitness equipment.' },
  { emoji: '🎬', name: 'Large Outdoor Screen', desc: 'Movie nights, watch parties, and community events on the big screen.' },
  { emoji: '🐕', name: 'Dog-Friendly', desc: 'Bring the whole family — including your four-legged members.' },
  { emoji: '🛒', name: 'Pro Shop', desc: 'Grab gear, equipment, and essentials on site.' },
  { emoji: '🚚', name: 'Food Truck Area', desc: 'Rotating food trucks and local vendors on-site.' },
  { emoji: '🛋️', name: 'Lounge & Hangout Areas', desc: 'Comfortable spaces to relax, socialize, and watch the action.' },
  { emoji: '💆', name: 'Massage Chair', desc: 'On-site recovery amenity for members and guests.' },
  { emoji: '👨‍👩‍👧‍👦', name: 'Family-Friendly Layout', desc: 'Designed for athletes, parents, kids, and groups of all sizes.' },
  { emoji: '🌿', name: 'Outdoor Environment', desc: 'Open-air, landscaped grounds that feel like a true sports destination.' },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">On-Site</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-5">Amenities Built<br />Around the Experience</h2>
          <p className="font-inter text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to play harder, recover smarter, and enjoy your time here.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-background border border-border p-5 rounded-sm hover:shadow-sm transition-shadow"
            >
              <div className="text-2xl mb-3">{a.emoji}</div>
              <h3 className="font-inter font-bold text-foreground text-sm mb-1">{a.name}</h3>
              <p className="font-inter text-muted-foreground text-xs leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}