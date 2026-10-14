import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Trophy, Leaf } from 'lucide-react';
import { PHOTOS } from '@/lib/photos';

const values = [
  { icon: Heart, label: 'Family First', desc: 'Built by a family, for families. Kids, parents, and athletes all belong here.' },
  { icon: Users, label: 'Community', desc: 'A place where people come together, stay active, and leave richer than they arrived.' },
  { icon: Trophy, label: 'Competition', desc: 'We love sports and competition — and we believe everyone deserves a great place to play.' },
  { icon: Leaf, label: 'Wellness', desc: 'From cold plunges to open air training, wellness is built into everything we do.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">Who We Are</p>
            <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-8">Austin's Community<br />Sports & Event<br />Destination.</h2>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-6">
              Trosky Sports Club is a 2.5-acre outdoor facility in Austin, TX built for families, athletes, teams, and the community. Come to play, train, host an event, or just hang out.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed mb-6">
              Day passes, court bookings, youth camps, and event rentals are available to everyone. No membership required to enjoy the facility.
            </p>
            <p className="font-inter text-foreground font-semibold leading-relaxed border-l-4 border-primary pl-5">
              "A place where people come together, stay active, and leave richer than they were yesterday."
            </p>

            {/* Video Card */}
            <div className="mt-8">
              <a
                href="https://www.youtube.com/watch?v=AWecRQkdnWg"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full aspect-video overflow-hidden rounded-sm shadow-lg group"
              >
                <img
                  src={PHOTOS.facility}
                  alt="Watch Our Story"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="font-inter text-white font-semibold text-sm tracking-widest uppercase">Watch Our Story</span>
                </div>
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary border border-border p-6 rounded-sm"
              >
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-inter font-bold text-foreground mb-2">{v.label}</h3>
                <p className="font-inter text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}