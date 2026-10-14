import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


const programs = [
  {
    sport: 'Soccer',
    emoji: '⚽',
    types: ['Private lessons', 'Group clinics', 'Youth camps', 'Team training', 'Summer camps'],
    desc: 'From beginner fundamentals to advanced technique, our soccer programming covers all ages and skill levels.',
  },
  {
    sport: 'Pickleball',
    emoji: '🏓',
    types: ['Private lessons', 'Group clinics', 'Open play drills', 'Beginner intro sessions'],
    desc: 'One of the fastest-growing sports in America. Learn, improve, and compete on our dedicated pickleball courts.',
  },
  {
    sport: 'Padel',
    emoji: '🎾',
    types: ['Private lessons', 'Group clinics', 'Beginner workshops'],
    desc: 'Discover padel — the exciting racket sport taking the world by storm. Introductory and advanced sessions available.',
  },
  {
    sport: 'Multi-Sport Camps',
    emoji: '🏕️',
    types: ['Summer camps', 'Youth development camps', 'School break camps', 'Sport-specific camps'],
    desc: 'Fun, structured camp programs for kids across multiple sports. Build skills, make friends, and stay active.',
  },
  {
    sport: 'Performance Training',
    emoji: '💪',
    types: ['Speed & agility', 'Strength & conditioning', 'Athletic development', 'Custom programs'],
    desc: 'Sport-science-based training programs for athletes looking to reach the next level across any sport.',
  },
  {
    sport: 'Team Training',
    emoji: '🤝',
    types: ['Full team sessions', 'Tactical training', 'Pre-season prep', 'Coach-led sessions'],
    desc: 'Bring your team to Trosky for dedicated training time with expert coaches and premium facility access.',
  },
];

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">Learn & Develop</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-5">Training, Lessons<br />& Camps</h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Trosky Sports Club offers programming for athletes, kids, teams, and families across multiple sports — run by experienced, passionate coaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((p, i) => (
            <motion.div
              key={p.sport}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-border p-7 rounded-sm hover:shadow-md transition-shadow group"
            >
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="font-display text-3xl text-foreground tracking-wider mb-2">{p.sport}</h3>
              <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.types.map((t) => (
                  <span key={t} className="font-inter text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <button
                onClick={() => scrollTo('#contact')}
                className="font-inter text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => scrollTo('#contact')}
            className="border border-border text-foreground px-10 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-secondary transition-colors"
          >
            View All Programs & Book a Session
          </button>
        </div>
      </div>
    </section>
  );
}