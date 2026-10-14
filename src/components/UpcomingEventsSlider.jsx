import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    title: 'Open Play Night',
    date: 'Every Friday',
    time: '6:00 PM – 10:00 PM',
    desc: 'Join us for open play, games, and community time at the facility.',
    tag: 'Open Play',
  },
  {
    title: 'Youth Sports Camp',
    date: 'Seasonal',
    time: 'Morning & Afternoon Sessions',
    desc: 'Multi-sport camp opportunities for kids and young athletes.',
    tag: 'Camps',
  },
  {
    title: 'Movie Night on the Turf',
    date: 'Monthly',
    time: '8:00 PM – 11:00 PM',
    desc: 'A community movie night experience on the turf field with the large outdoor screen.',
    tag: 'Community',
  },
  {
    title: 'Pickleball Social',
    date: 'Every Saturday',
    time: '10:00 AM – 1:00 PM',
    desc: 'Casual pickleball play, music, and hangout time.',
    tag: 'Pickleball',
  },
  {
    title: 'Tournament Coming Soon',
    date: 'TBD',
    time: 'All Day',
    desc: 'Upcoming competitive and community tournament events.',
    tag: 'Tournament',
  },
  {
    title: 'Private Event Availability',
    date: 'Year Round',
    time: 'Flexible Scheduling',
    desc: 'Ask about renting the venue for parties, corporate events, and group gatherings.',
    tag: 'Private Events',
  },
];

export default function UpcomingEventsSlider() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10 gap-4"
        >
          <div>
            <p className="font-inter text-primary text-xs tracking-[0.3em] uppercase mb-2 font-medium">What's On</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider">Upcoming Events at Trosky</h2>
          </div>
          <div className="hidden sm:flex gap-2 shrink-0">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="min-w-[280px] max-w-[280px] snap-start bg-white border border-border rounded-sm p-6 flex flex-col gap-4 shrink-0"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-inter text-[10px] font-semibold tracking-widest uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {event.tag}
                </span>
              </div>
              <div>
                <h3 className="font-inter font-bold text-foreground text-base leading-snug mb-1">{event.title}</h3>
                <p className="font-inter text-muted-foreground text-xs font-medium">{event.date} · {event.time}</p>
              </div>
              <p className="font-inter text-muted-foreground text-sm leading-relaxed flex-1">{event.desc}</p>
              <a
                href="https://trosky-4222.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-inter text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                View Events <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}