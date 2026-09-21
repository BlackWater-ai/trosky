import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell, GraduationCap, Tent, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PHOTOS } from '@/lib/photos';

const developmentAreas = [
  {
    icon: Dumbbell,
    title: 'Training',
    desc: 'Performance training, speed and agility, strength and conditioning, and athletic development for athletes of all levels.',
  },
  {
    icon: GraduationCap,
    title: 'Lessons',
    desc: 'Private and group lessons across pickleball, padel, soccer, volleyball, and more — from beginner fundamentals to advanced technique.',
  },
  {
    icon: Tent,
    title: 'Camps',
    desc: 'Multi-sport and sport-specific youth camps built around movement, teamwork, confidence, and fun.',
  },
  {
    icon: Trophy,
    title: 'Multi-Sport Development',
    desc: 'Rotate across courts, turf, and training areas to build well-rounded athletes and a lifelong love of sport.',
  },
];

const team = [
  {
    name: 'Marcus Trosky',
    role: 'Head of Training',
    sport: 'Training',
    bio: 'Marcus helps lead athlete development and training at Trosky Sports Club. His background as a former collegiate athlete and years of experience give athletes a strong foundation for skill development, competition, and growth.',
    confirmed: true,
  },
  { name: 'Soccer Coach', role: 'Soccer Coach', sport: 'Soccer', bio: 'Bio coming soon.', confirmed: false },
  { name: 'Pickleball Coach', role: 'Pickleball Coach', sport: 'Pickleball', bio: 'Bio coming soon.', confirmed: false },
  { name: 'Padel Coach', role: 'Padel Coach', sport: 'Padel', bio: 'Bio coming soon.', confirmed: false },
  { name: 'Camp Coordinator', role: 'Youth Camps', sport: 'Youth Programs', bio: 'Bio coming soon.', confirmed: false },
];

export default function Coaches() {
  return (
    <div className="font-inter bg-background">
      <Navbar />

      <section className="relative pt-40 pb-24 overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <img
            src={PHOTOS.turf}
            alt="Training and camps at Trosky Sports Club"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="base44-eyebrow mb-4">
              Learn and Develop
            </p>
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider leading-none mb-6">
              Training, Lessons
              <br />& Camps
            </h1>
            <p className="font-inter text-white/70 text-xl leading-relaxed mb-10 max-w-2xl">
              Development for athletes, kids, teams, and families across multiple sports — run by experienced,
              passionate coaches on courts, turf, and training areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact-us"
                className="bg-white text-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
              >
                Inquire About Training <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="base44-eyebrow mb-3">
              Learn and Develop
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider">Ways to Grow at Trosky</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {developmentAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-secondary border border-border rounded-xl p-7"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-5">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display text-xl text-foreground tracking-wider mb-3">{area.title}</p>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">The Team</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider mb-4">
              Coaching & Training Team
            </h2>
            <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Meet the people leading training and development at Trosky. Coach profiles are added as our programming
              grows.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`rounded-xl border p-7 flex flex-col ${
                  member.confirmed ? 'bg-white border-primary/30' : 'bg-white border-border'
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <span className="font-display text-xl text-primary tracking-wider">
                    {member.name
                      .split(' ')
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                </div>
                <span className="font-inter text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 self-start px-3 py-1 rounded-full mb-3">
                  {member.sport}
                </span>
                <h3 className="font-inter font-bold text-foreground">{member.name}</h3>
                <p className="font-inter text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed flex-1">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">Ready to Train With Us?</h2>
            <p className="font-inter text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Reach out about lessons, clinics, camps, or team training — or book court time to practice on your own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="bg-white text-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
              >
                Inquire About Lessons & Training <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/reservations"
                className="border border-white/50 text-white px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                Book a Court <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
