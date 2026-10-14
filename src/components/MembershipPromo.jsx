import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Flame } from 'lucide-react';
import { FLUID_ADVANTAGE } from '@/lib/constants';

export default function MembershipPromo() {
  return (
    <section className="relative py-16 md:py-20 bg-foreground overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-foreground to-foreground" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-inter font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              <Crown className="w-3.5 h-3.5 text-amber-400" /> Founding Members Only
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-white tracking-wider leading-none mb-3">
              Founding Offer — <span className="text-amber-400">$79/month</span>
            </h2>
            <p className="font-inter text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join the <span className="font-semibold text-white">Trosky Advantage Membership</span> for just{' '}
              <span className="font-semibold text-white">$79/month</span> — available to the first 99 members only.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-inter font-semibold tracking-widest uppercase">
              <Flame className="w-4 h-4" /> Only 99 Spots
            </div>
            <a
              href={FLUID_ADVANTAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-opacity flex items-center gap-2"
            >
              Claim Your Founding Spot <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
