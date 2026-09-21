import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Dumbbell, Snowflake, Trophy, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { EVENTS_VENUE_URL, FLUID_BOOKING } from '@/lib/constants';
import { PHOTOS } from '@/lib/photos';

const glance = [
  { icon: Trophy, title: '2.5 Acre Facility', desc: 'An outdoor sports and gathering place designed for play, training, and the Austin community.' },
  { icon: Calendar, title: '8 Pickleball / Padel Courts', desc: 'Courts for open play, reservations, lessons, clinics, and friendly competition.' },
  { icon: Users, title: 'Multi-Sport Turf Field', desc: 'A flexible field for soccer, volleyball, camps, social play, and community time.' },
  { icon: Snowflake, title: 'Recovery & VIP Spaces', desc: 'Cold plunge, lounge, food, and hangout areas built into the club experience.' },
];

const spaces = [
  { title: 'The Facility', image: PHOTOS.turf, to: '/facility' },
  { title: 'Pickleball & Padel', image: PHOTOS.courts, to: '/facility' },
  { title: 'VIP Container Rooms', image: PHOTOS.vipLounge, to: '/vip' },
];

const uses = [
  {
    title: 'Play',
    description: 'Day passes, casual play, court time, turf, and family-friendly space.',
    image: PHOTOS.pickleball,
    to: '/day-passes',
    label: 'Explore Day Passes',
  },
  {
    title: 'Event Hosting',
    description: 'Private celebrations, corporate gatherings, watch parties, and venue rentals.',
    image: PHOTOS.deck,
    href: EVENTS_VENUE_URL,
    label: 'Explore Event Hosting',
  },
  {
    title: 'Learn & Develop',
    description: 'Training, lessons, camps, clinics, and multi-sport development.',
    image: PHOTOS.courtsHill,
    to: '/coaches',
    label: 'Explore Coaches',
  },
];

export default function Home() {
  return (
    <div className="font-inter bg-background">
      <Navbar />

      <section className="relative flex min-h-[min(780px,92vh)] items-end overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-60"
            autoPlay
            muted
            loop
            playsInline
            poster={PHOTOS.courts}
            aria-label="Trosky Sports Club in action"
          >
            <source src="/trosky-sports-club-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#10233e]/95 via-[#10233e]/68 to-[#10233e]/18" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#10233e]/65 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Austin&apos;s community sports club
            </p>
            <h1 className="font-display mb-6 text-6xl leading-[0.9] tracking-wide text-white sm:text-7xl md:text-8xl">
              More Than a
              <br />
              Sports Facility
            </h1>
            <p className="mb-9 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              A place to play, gather, train, and grow—built for families, athletes, teams, and the Austin community.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={FLUID_BOOKING}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-foreground transition hover:bg-white/90"
              >
                Book a Court <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/day-passes"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/60 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                Day Passes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:px-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">The Grounds</p>
            <h2 className="font-display text-5xl leading-none tracking-wide text-foreground sm:text-6xl">A Home Base for Play</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Trosky brings courts, turf, recovery, food, and room to gather together in one welcoming outdoor setting.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl gap-px overflow-hidden border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {glance.map((item) => (
            <div key={item.title} className="bg-white px-6 py-7">
              <item.icon className="mb-5 h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-display text-2xl tracking-wide text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Explore</p>
              <h2 className="font-display text-5xl leading-none tracking-wide text-foreground sm:text-6xl">The Facility</h2>
            </div>
            <Link to="/facility" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary">
              See all amenities <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {spaces.map((space) => (
              <Link key={space.title} to={space.to} className="group relative min-h-72 overflow-hidden rounded-lg bg-foreground">
                <img src={space.image} alt={space.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10233e]/90 via-[#10233e]/10 to-transparent" />
                <p className="absolute bottom-6 left-6 font-display text-3xl tracking-wide text-white">{space.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">The Experience</p>
            <h2 className="font-display text-5xl leading-none tracking-wide text-foreground sm:text-6xl">One Facility, Endless Ways to Use It.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {uses.map((use) => {
              const content = (
                <>
                  <img src={use.image} alt={use.title} className="h-56 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-3xl tracking-wide text-foreground">{use.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{use.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                      {use.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </>
              );

              return use.href ? (
                <a key={use.title} href={use.href} target="_blank" rel="noreferrer" className="flex flex-col overflow-hidden rounded-lg border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg">
                  {content}
                </a>
              ) : (
                <Link key={use.title} to={use.to} className="flex flex-col overflow-hidden rounded-lg border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg">
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#10233e] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#89b4d9]">Come See It</p>
            <h2 className="font-display text-5xl leading-none tracking-wide text-white sm:text-6xl">Made for Your Whole Crew.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Plan a visit, reserve a court, or get in touch to learn what fits your day at Trosky.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact-us" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                Schedule a Tour
              </Link>
              <a href={FLUID_BOOKING} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/45 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white">
                Book Through Fluid
              </a>
            </div>
          </div>
          <img src={PHOTOS.clubhouse} alt="Trosky Sports Club clubhouse and deck" className="h-80 w-full rounded-lg object-cover lg:h-[26rem]" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
