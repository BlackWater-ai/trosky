import React from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';

// Add public event cards only after the date and attendance destination are confirmed.
// Private venue inquiries remain separate from public-event attendance.
export default function UpcomingEventsSlider() {
  return (
    <section id="upcoming-events" aria-labelledby="upcoming-title" className="border-b border-border bg-white py-14">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 md:flex-row md:items-center lg:px-8">
        <div className="flex items-start gap-4"><CalendarDays className="mt-2 h-8 w-8 shrink-0 text-[#006b74]" aria-hidden="true" /><div><p className="event-eyebrow text-[#006b74]">Come be part of it</p><h2 id="upcoming-title" className="font-display text-3xl tracking-wide md:text-4xl">Upcoming Public Events</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">Looking for a community event to attend? Contact the club for the latest dates and registration details.</p></div></div>
        <a href="mailto:Gabe@troskysportsclub.com?subject=Upcoming%20public%20events%20at%20Trosky" className="event-button shrink-0 border border-border text-foreground hover:bg-secondary">Ask About Upcoming Events <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
      </div>
    </section>
  );
}
