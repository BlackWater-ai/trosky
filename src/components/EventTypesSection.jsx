import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EVENTS_INQUIRY_URL } from '@/lib/constants';
import { PHOTOS } from '@/lib/photos';

const occasions = [
  { title: 'Corporate Events', image: PHOTOS.vipLounge, alt: 'Trosky lounge with seating and a large screen', description: 'Bring the team together for an outing, a mixer or a gathering with clients.' },
  { title: 'Birthdays & Celebrations', image: PHOTOS.facility, alt: 'Outdoor deck and gathering space at Trosky', description: 'Make room for the people and milestones worth celebrating.' },
  { title: 'Weddings', image: PHOTOS.gathering, alt: 'Event space at Trosky Sports Club', description: 'Explore a different setting for your ceremony, reception and the moments around them.' },
  { title: 'Private Gatherings', image: PHOTOS.grounds, alt: 'Trosky grounds and outdoor spaces', description: 'Plan your reunion, fundraiser or private party around your people.' },
];

export default function EventTypesSection() {
  return (
    <section id="private-events" aria-labelledby="private-events-title" className="bg-[#f7f4ef] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 grid items-end gap-5 md:grid-cols-2">
          <div><p className="event-eyebrow text-[#006b74]">Make it your occasion</p><h2 id="private-events-title" className="event-heading">Good People.<br />Great Gatherings.</h2></div>
          <p className="max-w-lg font-inter leading-relaxed text-muted-foreground md:justify-self-end">From a team day out to a celebration all your own, start with the occasion. We’ll help you explore the possibilities.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((occasion) => (
            <a key={occasion.title} href={EVENTS_INQUIRY_URL} aria-label={`Inquire about ${occasion.title.toLowerCase()}`} className="group flex flex-col overflow-hidden bg-white transition-shadow hover:shadow-lg focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#006b74]">
              <div className="aspect-[4/3] overflow-hidden"><img src={occasion.image} alt={occasion.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
              <div className="flex flex-1 flex-col p-6"><h3 className="mb-3 font-display text-3xl tracking-wide">{occasion.title}</h3><p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{occasion.description}</p><span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">Plan your event <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
