import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { EVENTS_INQUIRY_URL, EVENTS_VENUE_URL } from '@/lib/constants';

export default function EventInquirySection({ final = false }) {
  return (
    <section id={final ? 'plan-your-event' : 'event-inquiry'} aria-labelledby={final ? 'final-inquiry-title' : 'inquiry-title'} className={final ? 'bg-[#111315] py-20 text-white' : 'bg-[#f7f4ef] py-16 md:py-20'}>
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div><p className={`event-eyebrow ${final ? 'text-[#70e0e7]' : 'text-[#006b74]'}`}>Let’s make a plan</p><h2 id={final ? 'final-inquiry-title' : 'inquiry-title'} className="event-heading">{final ? 'Your People. Your Occasion. Trosky.' : 'Tell Us What You Have in Mind.'}</h2><p className={`mt-5 max-w-xl leading-relaxed ${final ? 'text-white/75' : 'text-muted-foreground'}`}>Share your event type, preferred date and estimated guest count. Ask about the spaces, rental details or a private tour.</p></div>
        <div className="flex flex-col gap-4 md:items-start md:justify-self-end">
          <a href={EVENTS_INQUIRY_URL} className="event-button bg-[#ff5a1f] text-[#111315] hover:bg-[#ff7545]">Plan Your Event <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          <a href={`${EVENTS_VENUE_URL}rental-info`} className="text-sm font-semibold underline underline-offset-4">Explore rental information</a>
          <a href="tel:2106328160" className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4" aria-hidden="true" /> Talk with Gabe · 210-632-8160</a>
        </div>
      </div>
    </section>
  );
}
