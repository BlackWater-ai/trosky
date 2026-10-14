import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PHOTOS } from '@/lib/photos';

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

const campTypes = [
  {
    emoji: '🏅',
    name: 'Multi-Sport Camps',
    desc: 'A full-facility camp experience where kids rotate through different sports, games, and activities across the compound.',
    color: 'border-primary/20 bg-primary/5',
  },
  {
    emoji: '⚽',
    name: 'Soccer Camps',
    desc: 'Skill-building, small-sided games, movement, and turf field training for young soccer players.',
    color: 'border-border bg-white',
  },
  {
    emoji: '🏓',
    name: 'Pickleball Camps',
    desc: 'Fun, beginner-friendly pickleball instruction focused on learning the game, movement, teamwork, and confidence.',
    color: 'border-border bg-white',
  },
  {
    emoji: '🎾',
    name: 'Padel Camps',
    desc: 'A unique camp option introducing kids to padel through drills, games, and guided play.',
    color: 'border-border bg-white',
  },
  {
    emoji: '🏐',
    name: 'Volleyball Camps',
    desc: 'Turf field volleyball activities, team play, coordination, and fun competition.',
    color: 'border-border bg-white',
  },
  {
    emoji: '☀️',
    name: 'Seasonal Camps',
    desc: 'Summer camps, holiday camps, school break camps, and special event camp days.',
    color: 'border-border bg-white',
  },
];

export default function Camps() {
  return (
    <div className="font-inter">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">Trosky Sports Club</p>
            <h1 className="font-display text-6xl md:text-8xl text-foreground tracking-wider leading-none mb-6">
              Youth Camps at<br />Trosky Sports Club
            </h1>
            <p className="font-inter text-xl text-foreground font-semibold mb-3 leading-relaxed">
              A fun, active, and community-focused camp experience where kids can play, train, compete, and enjoy the full facility.
            </p>
            <p className="font-inter text-muted-foreground text-base leading-relaxed mb-10 max-w-2xl">
              Trosky Sports Club is built for movement, play, and community. Our camp programs give young athletes a place to stay active, try different sports, build confidence, and enjoy the facility in a safe and energetic environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('#ask')}
                className="bg-primary text-primary-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                Inquire About Camp Start Dates <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="h-72 md:h-96 overflow-hidden">
        <img
          src={PHOTOS.turf}
          alt="Trosky Sports Club turf field"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Camp Options */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">Programming</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider">Camp Options</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {campTypes.map((camp, i) => (
              <motion.div
                key={camp.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`border rounded-xl p-7 ${camp.color}`}
              >
                <div className="text-4xl mb-4">{camp.emoji}</div>
                <p className="font-display text-xl text-foreground tracking-wider mb-3">{camp.name}</p>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{camp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquire About Camps */}
      <section id="ask" className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider mb-4">Inquire About Camp Start Dates</h2>
            <p className="font-inter text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
              Reach out to learn about camp availability, dates, pricing, and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Gabe@troskysportsclub.com"
                className="bg-primary text-primary-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> Email Gabe
              </a>
              <a
                href="tel:2106328160"
                className="border border-border text-foreground px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-background transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call 210-632-8160
              </a>
            </div>
            <p className="font-inter text-muted-foreground text-sm mt-6">Gabe@troskysportsclub.com · 210-632-8160</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}