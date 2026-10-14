import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  'Facility Partners',
  'Sponsors',
  'Food Trucks',
  'Wellness Partners',
  'Coaches & Trainers',
  'Event Vendors',
  'Community Affiliates',
];

const partners = [
  {
    name: 'Food Truck Partner',
    category: 'Food Trucks',
    description: 'Food truck partnerships will be featured here as they are finalized.',
  },
  {
    name: 'Wellness Partner',
    category: 'Wellness Partners',
    description: 'Wellness and recovery partners will be featured here as they are finalized.',
  },
  {
    name: 'Event Vendor',
    category: 'Event Vendors',
    description: 'Event vendor partnerships will be featured here as they are finalized.',
  },
  {
    name: 'Facility Partner',
    category: 'Facility Partners',
    description: 'Facility partners will be featured here as they are finalized.',
  },
  {
    name: 'Sponsor',
    category: 'Sponsors',
    description: 'Sponsor opportunities and partners will be featured here as they are finalized.',
  },
  {
    name: 'Community Affiliate',
    category: 'Community Affiliates',
    description: 'Community affiliates will be featured here as they are finalized.',
  },
];

export default function Partners() {
  return (
    <div className="font-inter bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">Community</p>
            <h1 className="font-display text-6xl md:text-7xl text-foreground tracking-wider mb-5">
              Partners & Affiliates
            </h1>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Trosky Sports Club is built around community. This page highlights the partners, vendors, sponsors, and people who help bring the facility experience to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">Categories</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">Partner Categories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-display text-lg text-foreground tracking-wide">{category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">Our Network</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">Featured Partners</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-border flex flex-col"
              >
                {/* Logo Placeholder */}
                <div className="w-full h-48 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-4xl text-muted-foreground tracking-wider">Partner</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="font-inter text-xs tracking-[0.2em] text-primary uppercase mb-2 font-medium">
                      {partner.category}
                    </p>
                    <h3 className="font-display text-xl text-foreground tracking-wide mb-3">{partner.name}</h3>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become A Partner CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">
              Partner With Trosky
            </h2>
            <p className="font-inter text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              We are open to partnerships with food trucks, wellness providers, event vendors, trainers, sponsors, and community organizations.
            </p>
            <Link
              to="/partner-with-trosky"
              className="bg-white text-primary px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Ask About Partnership Opportunities <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}