import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, ArrowRight } from 'lucide-react';
import { PHOTOS } from '@/lib/photos';

const EVENTS_URL = 'https://trosky-4222.vercel.app/';

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

const activities = [
  {
    icon: Zap,
    title: 'Play',
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-500',
    items: ['Open play & day passes', 'Pickleball & padel', 'Soccer & volleyball', 'Kickball & flag football', 'Badminton', 'Casual use anytime'],
  },
  {
    title: 'Event Hosting',
    image: PHOTOS.deck,
    items: ['Celebrations & parties', 'Corporate gatherings', 'Watch parties', 'Tournaments', 'Community events'],
    cta: 'Explore Event Hosting',
    href: EVENTS_URL,
  },
  {
    icon: Heart,
    title: 'Recover & Relax',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    items: ['Cold plunges', 'Outdoor calisthenics gym', 'VIP lounge spaces', 'BBQ & hangout areas', 'Food trucks & vendors', 'Massage & wellness partners'],
    cta: 'See Amenities',
    anchor: '#amenities',
  },
];

export default function WhatYouCanDo() {
  return (
    <section id="play" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">The Experience</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-5">One Facility.<br />Endless Ways to Use It.</h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Grab a day pass, book a court, sign up for a camp, or host your next event.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a, i) =>
            a.href ? (
              <motion.a
                key={a.title}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-2 border-primary/25 bg-white flex flex-col rounded-sm card-hover overflow-hidden group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={a.image}
                    alt="Event hosting at Trosky Sports Club"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-inter text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Premium
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-4xl text-foreground tracking-wider mb-5">{a.title}</h3>
                  <ul className="space-y-2 flex-1 mb-6">
                    {a.items.map((item) => (
                      <li key={item} className="font-inter text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary/50 rounded-full flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 font-inter text-xs font-semibold tracking-widest uppercase rounded-sm">
                    {a.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>
            ) : (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`border-2 ${a.color} bg-white p-8 flex flex-col rounded-sm card-hover`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-sm mb-5 bg-white shadow-sm">
                  <a.icon className={`w-6 h-6 ${a.iconColor}`} />
                </div>
                <h3 className="font-display text-4xl text-foreground tracking-wider mb-5">{a.title}</h3>
                <ul className="space-y-2 flex-1 mb-6">
                  {a.items.map((item) => (
                    <li key={item} className="font-inter text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                {a.cta && (
                  <button
                    onClick={() => scrollTo(a.anchor)}
                    className="bg-primary text-primary-foreground px-5 py-2.5 font-inter text-xs font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                  >
                    {a.cta}
                  </button>
                )}
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}