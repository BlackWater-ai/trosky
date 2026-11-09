import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FLUID_GROUP_DAY_PASS } from '@/lib/constants';

export default function FirstVisitBanner() {
  return (
    <section aria-labelledby="first-visit-title" className="bg-[#111315] px-6 py-14 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl border border-white/20 border-l-4 border-[#f7d66b] bg-black/70 px-6 py-8 text-center text-white shadow-2xl md:flex-row md:text-left">
        <div className="max-w-md"><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f7d66b]">First Visit · Come Play</p><h2 id="first-visit-title" className="break-words font-display text-4xl tracking-wide">Bring the Crew</h2><p className="mt-2 text-sm text-white/80">Buy one Day Pass. Bring up to 3 friends on us.</p></div>
        <a href={FLUID_GROUP_DAY_PASS} target="_blank" rel="noopener noreferrer" aria-label="First visit offer: buy one Day Pass and bring up to 3 friends on us" className="event-button bg-white text-foreground hover:bg-white/90">Buy a Day Pass <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
      </div>
    </section>
  );
}
