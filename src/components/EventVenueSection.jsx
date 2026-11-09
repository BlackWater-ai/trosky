import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { EVENTS_VENUE_URL, EVENTS_INQUIRY_URL } from '@/lib/constants';
import { PHOTOS } from '@/lib/photos';

export default function EventVenueSection() {
  return (
    <section id="venue" aria-labelledby="venue-title" className="bg-[#111315] py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="event-eyebrow text-[#70e0e7]">The setting makes the difference</p><h2 id="venue-title" className="event-heading">Room to Gather.<br />Space to Play.</h2></div>
          <p className="max-w-lg leading-relaxed text-white/70">Indoor and outdoor spaces, private lounges, courts and turf. Picture your guests making the most of a day at Trosky.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="relative min-h-[320px] overflow-hidden md:row-span-2"><img src={PHOTOS.facility} alt="Trosky's deck and outdoor gathering areas" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6 pt-20 font-display text-3xl tracking-wide">A place to bring everyone together</figcaption></figure>
          <figure className="relative h-64 overflow-hidden"><img src={PHOTOS.vipLounge} alt="Seating and large screen inside a Trosky private lounge" loading="lazy" className="h-full w-full object-cover" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 pt-16 font-display text-2xl tracking-wide">Private lounges & gathering spaces</figcaption></figure>
          <figure className="relative h-64 overflow-hidden"><img src={PHOTOS.grounds} alt="Outdoor courts and grounds at Trosky" loading="lazy" className="h-full w-full object-cover" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 pt-16 font-display text-2xl tracking-wide">Courts, turf & open-air experiences</figcaption></figure>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={`${EVENTS_VENUE_URL}#walkthrough`} className="event-button bg-[#00a9b8] text-[#111315] hover:bg-[#47c6d0]"><Play className="h-4 w-4" aria-hidden="true" /> Watch the Venue Walkthrough</a>
          <a href={EVENTS_INQUIRY_URL} className="event-button border border-white/50 text-white hover:bg-white/10">Request a Private Tour <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
