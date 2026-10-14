import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const partnerCategories = [
  {
    category: 'Food & Drinks',
    emoji: '🍕',
    partners: ['Local Food Trucks', 'Grab & Go Vendors', 'Beverage Partners'],
  },
  {
    category: 'Wellness',
    emoji: '💆',
    partners: ['Massage Therapists', 'Mobile IV Partners', 'Recovery Specialists'],
  },
  {
    category: 'Training & Coaching',
    emoji: '🏋️',
    partners: ['Independent Trainers', 'Sport-Specific Coaches', 'Fitness Affiliates'],
  },
  {
    category: 'Events & Vendors',
    emoji: '🎪',
    partners: ['Event Photographers', 'DJ & Entertainment', 'Sponsor Partners'],
  },
];

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">Community</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-5">Sponsors, Partners<br />& Vendors</h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Interested in partnering with Trosky Sports Club? We offer sponsorship, advertising, vendor, and partnership opportunities throughout the facility and at future events. Submit an inquiry and our team will follow up with more information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnerCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-7 rounded-sm"
            >
              <div className="text-3xl mb-4">{cat.emoji}</div>
              <h3 className="font-inter font-bold text-foreground mb-3">{cat.category}</h3>
              <ul className="space-y-2">
                {cat.partners.map((p) => (
                  <li key={p} className="font-inter text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-secondary border border-border rounded-sm p-10 text-center"
        >
          <h3 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-3">Sponsorship & Advertising Inquiries</h3>
          <p className="font-inter text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed mb-6">
            Whether you're a food truck, mobile coffee vendor, local business, or looking for facility-wide sponsorship or advertising opportunities — we'd love to connect and explore how we can grow together in the Austin community.
          </p>
          <Link
            to="/contact-us"
            className="bg-primary text-primary-foreground px-8 py-3 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}