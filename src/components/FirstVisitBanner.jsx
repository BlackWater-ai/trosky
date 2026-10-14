import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ArrowRight } from 'lucide-react';

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

export default function FirstVisitBanner() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Gift className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="font-inter text-white/70 text-xs tracking-widest uppercase font-medium mb-1">Limited Time Day Pass Offer</p>
              <h3 className="font-display text-3xl md:text-4xl text-white tracking-wider">$50 Day Pass. Bring Up to 3 Guests.</h3>
              <p className="font-inter text-white/80 text-sm mt-1">Get full-day access to the Trosky Sports Club atmosphere and bring up to 3 guests with you.</p>
            </div>
          </div>
          <a
            href="https://trosky.fluidpb.com/become-a-member?planId=cfba0fad-d2b6-48c2-88df-691fa06ac675"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-primary px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all flex items-center gap-2"
          >
            View Day Passes <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}