import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { EVENTS_INQUIRY_URL } from '@/lib/constants';

export default function HeroSection({ heroImage }) {
  return (
    <section aria-labelledby="event-hero-title" className="event-hero relative flex min-h-[680px] items-center overflow-hidden bg-[#111315] text-white">
      <img src={heroImage} alt="Trosky's outdoor event venue and gathering spaces" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-8 lg:pb-28 lg:pt-48">
        <p className="mb-6 font-inter text-xs font-bold uppercase tracking-[0.24em] text-[#70e0e7]">Austin, Texas · Events & Private Gatherings</p>
        <h1 id="event-hero-title" className="max-w-4xl font-display text-[3.25rem] leading-[0.98] tracking-wide sm:text-7xl lg:text-8xl xl:text-9xl">
          Your Next Event<br /><span className="text-[#ff5a1f]">Starts at Trosky.</span>
        </h1>
        <p className="mb-8 mt-6 max-w-xl font-inter text-lg leading-relaxed text-white/90 sm:text-xl">
          Private celebrations, corporate gatherings and unforgettable events. Bring your people together at a venue made for more.
        </p>
        <div className="flex max-w-xl flex-col gap-3 sm:flex-row">
          <a href={EVENTS_INQUIRY_URL} className="event-button bg-[#ff5a1f] text-[#111315] hover:bg-[#ff7545]">
            Plan Your Event <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#venue" className="event-button border border-white/70 text-white hover:bg-white/10">
            Explore the Venue <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-8 font-inter text-xs tracking-wide text-white/70">Corporate events · Celebrations · Weddings · Private gatherings</p>
      </div>
    </section>
  );
}
