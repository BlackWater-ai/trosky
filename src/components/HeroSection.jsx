import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection({ heroImage }) {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/trosky-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Promo Banner */}
      <motion.a
        href="https://trosky.fluidpb.com/become-a-member?planId=cfba0fad-d2b6-48c2-88df-691fa06ac675"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="First visit offer: buy one Day Pass and bring up to 3 friends on us"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-24 left-0 right-0 z-10 flex justify-center px-4"
      >
        <div className="w-full max-w-md rounded-2xl border border-white/20 border-l-4 border-[#f7d66b] bg-black/70 px-5 py-3.5 text-center text-white shadow-2xl backdrop-blur-md transition-colors hover:bg-black/80 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f7d66b]/50 sm:w-auto sm:max-w-none">
          <span className="mb-1 block font-inter text-[10px] font-bold tracking-[0.18em] uppercase text-[#f7d66b]">First Visit</span>
          <span className="block break-words font-display text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl">Bring the Crew</span>
          <span className="mt-1 block font-inter text-xs font-semibold leading-relaxed text-white/80 sm:text-sm">Buy one Day Pass. Bring up to 3 friends on us.</span>
        </div>
      </motion.a>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-52 text-center sm:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mb-6 hidden font-inter text-sm font-medium tracking-[0.3em] text-white/70 uppercase sm:block"
        >
          Austin's Community Sports & Event Destination
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-white tracking-wider leading-none mb-6"
        >
          More Than a<br />Sports Facility
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.7 }}
          className="font-inter text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A place to play, gather, train, and grow. Built for families, athletes, teams, and the entire Austin community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://trosky.fluidpb.com/become-a-member?planId=cfba0fad-d2b6-48c2-88df-691fa06ac675"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 hover:scale-105 active:scale-100 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Buy a Day Pass <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/reservations"
            className="border border-white/50 text-white px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 hover:border-white/80 hover:scale-105 active:scale-100 transition-all duration-200"
          >
            Book a Court
          </Link>
          <button
            onClick={() => scrollTo('#facility')}
            className="border border-white/50 text-white px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 hover:border-white/80 hover:scale-105 active:scale-100 transition-all duration-200"
          >
            Explore the Facility
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer max-h-[800px]:hidden"
        onClick={() => scrollTo('#facility')}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1.6 }}
          className="font-inter text-white/40 text-[10px] tracking-[0.3em] uppercase"
        >
          Scroll
        </motion.span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
