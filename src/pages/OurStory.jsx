import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PHOTOS } from '@/lib/photos';

const IMAGES = { hero: PHOTOS.grounds };

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

export default function OurStory() {
  return (
    <div className="font-inter">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="Trosky Sports Club" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-inter text-white/50 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Our Story</p>
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-4">The Visionary</h1>
            <p className="font-inter text-white/70 text-lg max-w-xl leading-relaxed">
              The story of Troy "Trosky" Fulks and the vision that became Trosky Sports Club.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] gap-14 items-start min-w-0">

            {/* YouTube Video Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-28 min-w-0"
            >
              <a
                href="https://www.youtube.com/watch?v=AWecRQkdnWg"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl mb-4 group cursor-pointer"
              >
                <img
                  src="https://media.base44.com/images/public/69f3a4d87763e987202433ad/9ad9713ca_image.png"
                  alt="Watch Our Story"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="font-inter text-white font-semibold text-sm tracking-widest uppercase drop-shadow">Watch Our Story</span>
                </div>
              </a>
              <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                <p className="font-inter text-white/60 text-xs tracking-widest uppercase mb-1">Founder & Visionary</p>
                <p className="font-display text-3xl text-white tracking-wider">Troy "Trosky" Fulks</p>
                <p className="font-inter text-white/70 text-sm mt-2">Austin, TX</p>
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-8 min-w-0"
            >
              <div>
                <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">The Beginning</p>
                <p className="font-inter text-foreground text-lg leading-relaxed">
                  Troy "Trosky" Fulks' journey in sports began at a young age, where he developed a lifelong passion for competition. As he grew, that drive evolved into entrepreneurship with the launch of his first landscape business, Aloha Landscape, which ignited a deep appreciation for horticulture.
                </p>
              </div>

              <div>
                <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">Family & Foundation</p>
                <p className="font-inter text-muted-foreground text-lg leading-relaxed">
                  Through many years of devotion to family and entrepreneurship, alongside his wife Elisa, they built a foundation that has grown into something greater than they ever imagined.
                </p>
              </div>

              <div>
                <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">A New Chapter</p>
                <p className="font-inter text-muted-foreground text-lg leading-relaxed">
                  In his so-called "retirement" years, Troy discovered pickleball — and with it, a sport he fell completely in love with. With the support of Elisa, what started as a personal pursuit of wellness, community, and competition quickly grew into something much bigger.
                </p>
              </div>

              <div>
                <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">The Vision</p>
                <p className="font-inter text-muted-foreground text-lg leading-relaxed">
                  Trosky Sports Club was born from that passion: a place designed to bring people together — athletes, families, and individuals all striving to be stronger than they were yesterday. Trosky Sports Club is a place where Troy's passions of landscaping, family, community, and competition are woven together into something beautiful and lasting.
                </p>
              </div>

              {/* Pull Quote */}
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="font-display text-2xl md:text-3xl text-foreground tracking-wide leading-snug">
                  "More than a facility, it is a community. More than a vision, it is a legacy."
                </p>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="Trosky Sports Club" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-white/50 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Austin, TX</p>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mb-4">Come Experience<br />the Vision</h2>
            <p className="font-inter text-white/70 text-lg max-w-lg mx-auto leading-relaxed mb-10">
              The best way to understand Trosky Sports Club is to experience it in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                onClick={() => setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all"
              >
                Schedule a Tour <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
