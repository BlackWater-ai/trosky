import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PHOTOS } from '@/lib/photos';

const EVENTS_URL = 'https://trosky-4222.vercel.app/';

export default function Events() {
  return (
    <div className="font-inter bg-background">
      <Navbar />

      {/* Host Event Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={PHOTOS.gathering}
            alt="Host your next event at Trosky Sports Club"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-white/60 text-sm tracking-[0.3em] uppercase mb-5 font-medium">Austin, TX</p>
            <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider leading-tight mb-6">
              Host Your Next Event at Trosky
            </h1>
            <p className="font-inter text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
              Celebrations, corporate gatherings, watch parties, tournaments, and community events — 2.5 acres of courts, turf, food, and hangout spaces ready for your next gathering.
            </p>
            <a
              href={EVENTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-foreground px-10 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all"
            >
              Start Your Event Inquiry <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}