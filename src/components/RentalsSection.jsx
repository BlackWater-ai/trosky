import React from 'react';
import { motion } from 'framer-motion';

const rentals = [
  { title: 'Full Field Rental', price: 'Pricing via Fluid', desc: 'Full-size turf field for team practices, scrimmages, and events.' },
  { title: 'Half Field Rental', price: 'Pricing via Fluid', desc: 'Half-field access perfect for small-group training and drills.' },
  { title: 'Court Rental', price: 'Pricing via Fluid', desc: 'Pickleball, padel, or multi-sport court booking by the hour.' },
  { title: 'Sport-Specific Rental', price: 'Pricing via Fluid', desc: 'Field setup configured for soccer, volleyball, kickball, and more.' },
];

export default function RentalsSection() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="rentals" className="py-24 md:py-32 bg-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-inter text-sm tracking-[0.3em] text-white/50 uppercase mb-4 font-medium">Book the Space</p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider">Facility Rentals</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {rentals.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-white/10 p-8 hover:border-white/25 transition-colors"
            >
              <div className="flex items-start justify-between mb-4 gap-4">
                <h3 className="font-display text-2xl text-white tracking-wider">{r.title}</h3>
                <span className="font-inter font-semibold text-white/70 text-sm mt-1 whitespace-nowrap">{r.price}</span>
              </div>
              <p className="font-inter text-white/60 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-inter text-white/50 text-sm mb-6">Standard bookings will be available through our Fluid platform. For custom arrangements, group rates, or large-scale rentals, contact us directly.</p>
          <button
            onClick={() => scrollTo('#contact')}
            className="bg-white text-foreground px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase hover:bg-white/90 transition-colors"
          >
            Inquire About Availability
          </button>
        </motion.div>
      </div>
    </section>
  );
}