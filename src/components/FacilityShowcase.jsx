import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PHOTOS } from '@/lib/photos';

const EVENTS_URL = 'https://trosky-4222.vercel.app/';

const spaces = [
  { label: 'Multi-Sport Turf Field', desc: 'Soccer, volleyball, kickball, flag football, camps, movie nights, and more — all on one versatile turf field.', cta: 'Book the Field' },
  { label: 'Pickleball Courts', desc: 'Dedicated pickleball courts for open play, lessons, clinics, and tournaments.', cta: 'Reserve a Court' },
  { label: 'Padel Courts', desc: 'One of the most exciting racket sports in the world, available for open play and lessons.', cta: 'Book Padel' },
  { label: 'Volleyball & Badminton', desc: 'Set up and ready for casual play, clinics, and team competitions.', cta: 'Play Today' },
  { label: 'VIP Container Rooms', desc: 'Air-conditioned private rooms with TVs — perfect for team gatherings, watch parties, and VIP access.', cta: 'Learn About VIP' },
  { label: 'Outdoor Calisthenics Gym', desc: 'Dips, pull-ups, monkey bars, and open-air fitness — no membership required.', cta: 'See Amenities' },
  { label: 'Cold Plunges', desc: 'Recovery-focused cold plunge stations for athletes and wellness enthusiasts.', cta: 'Recover Here' },
  { label: 'BBQ & Hangout Areas', desc: 'Outdoor BBQ spaces perfect for team events, celebrations, and family gatherings.', cta: 'Inquire About Events' },
  { label: 'Food Truck Area', desc: 'Dedicated space for food trucks and vendors. A rotating lineup of local favorites.', cta: 'See Partners' },
  { label: 'Pro Shop & Lounge', desc: 'Grab gear, relax, and hang out. The pro shop carries equipment and essentials.', cta: 'Visit the Lounge' },
  { label: 'Event Space', desc: 'Host corporate events, celebrations, tournaments, watch parties, and private gatherings.', cta: 'Inquire About Rentals' },
  { label: 'Movie Nights & Big Screen', desc: 'A large outdoor screen near the field for movie nights, watch parties, and community events.', cta: 'Host Event', href: EVENTS_URL },
];

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

export default function FacilityShowcase({ images }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const bgImages = [
    'https://media.base44.com/images/public/69f3a4d87763e987202433ad/ec7dabdbc_TroskyPhotos-1.jpg',
    PHOTOS.pickleball,
    PHOTOS.padel,
    'https://media.base44.com/images/public/69f3a4d87763e987202433ad/0d655cdab_image.png',
    PHOTOS.vipLounge,
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    PHOTOS.coldPlunge,
    'https://media.base44.com/images/public/69f3a4d87763e987202433ad/70dcd531f_TroskyPhotos-291.jpg',
    'https://media.base44.com/images/public/69f3a4d87763e987202433ad/afe7e4beb_TroskyPhotos-19.jpg',
    PHOTOS.proShop,
    PHOTOS.gathering,
    PHOTOS.grounds,
  ];

  return (
    <section id="facility" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">The Grounds</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-5">Explore the Facility</h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            One venue with endless possibilities. From sports courts to event spaces, every corner is built to be used and enjoyed.
          </p>
        </motion.div>

        {/* Large hero image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-sm mb-4 h-[500px] group cursor-pointer"
          onClick={() => scrollTo('#contact')}
        >
          <img src={PHOTOS.facility} alt="The Facility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="font-inter text-white/70 text-xs tracking-widest uppercase">Featured Space</span>
            <h3 className="font-display text-4xl md:text-5xl text-white tracking-wider mt-1">The Facility</h3>
            <p className="font-inter text-white/80 text-sm mt-2 max-w-lg">Soccer, volleyball, kickball, flag football, movies, camps, and events — all on one world-class turf field.</p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {spaces.slice(1).map((space, i) => (
            <motion.div
              key={space.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-sm cursor-pointer group h-48 md:h-56"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => scrollTo('#contact')}
            >
              <img
                src={bgImages[i + 1]}
                alt={space.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 transition-all duration-300 ${hoveredIndex === i ? 'bg-black/70' : 'bg-black/40'}`} />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h3 className="font-inter font-bold text-white text-sm leading-tight">{space.label}</h3>
                {space.comingSoon && (
                  <span className="font-inter text-xs font-semibold tracking-widest uppercase text-yellow-300 mt-1">Coming Soon</span>
                )}
                {hoveredIndex === i && !space.comingSoon && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="font-inter text-white/80 text-xs mt-1 leading-relaxed">{space.desc}</p>
                    {space.href ? (
                      <a href={space.href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="font-inter text-xs font-semibold text-white flex items-center gap-1 mt-2">
                        {space.cta} <ArrowRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="font-inter text-xs font-semibold text-white flex items-center gap-1 mt-2">
                        {space.cta} <ArrowRight className="w-3 h-3" />
                      </span>
                    )}
                  </motion.div>
                )}
                {hoveredIndex === i && space.comingSoon && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="font-inter text-white/80 text-xs mt-1 leading-relaxed">{space.desc}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="bg-primary text-primary-foreground px-10 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Schedule a Facility Tour
          </button>
        </motion.div>
      </div>
    </section>
  );
}