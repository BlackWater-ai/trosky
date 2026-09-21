import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Dumbbell,
  Snowflake,
  Tent,
  Trophy,
  Users,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { EVENTS_VENUE_URL, FLUID_ADVANTAGE, FLUID_BOOKING, STORY_VIDEO } from '@/lib/constants';
import { PHOTOS } from '@/lib/photos';

const glance = [
  {
    icon: Trophy,
    title: '2.5 Acre Facility',
    desc: 'A large outdoor sports and event compound in Austin, TX designed for play, training, events, and community experiences.',
  },
  {
    icon: Calendar,
    title: '8 Pickleball / Padel Courts',
    desc: 'Open play, reservations, lessons, clinics, tournaments, and social events across a mix of pickleball and padel courts.',
  },
  {
    icon: Users,
    title: 'Multi-Sport Turf Field',
    desc: 'Soccer, volleyball, kickball, flag football, movies, camps, and events — all on one world-class turf field.',
  },
  {
    icon: Tent,
    title: 'Events & Venue Space',
    desc: 'Weddings, corporate outings, celebrations, and private rentals are hosted on the Events Venue site.',
    href: EVENTS_VENUE_URL,
  },
  {
    icon: Snowflake,
    title: 'Recovery & VIP Amenities',
    desc: 'VIP areas, private locker rooms, cold plunge, sauna, food and drink areas, hangout zones, and premium spaces.',
  },
  {
    icon: Dumbbell,
    title: 'Family & Community Areas',
    desc: 'Kids area, dog area, lawn games, cornhole, mini golf, horseshoes, and spaces for families and groups to relax.',
  },
];

const spaces = [
  { title: 'The Facility', img: PHOTOS.turf, to: '/facility' },
  { title: 'Pickleball Courts', img: PHOTOS.courts, to: '/facility' },
  { title: 'Padel Courts', img: PHOTOS.pickleball, to: '/facility' },
  { title: 'VIP Container Rooms', img: PHOTOS.vipLounge, to: '/vip' },
  { title: 'Cold Plunges', img: PHOTOS.coldPlunge, to: '/facility' },
  { title: 'BBQ & Hangout Areas', img: PHOTOS.hangout, to: '/facility' },
];

const clubPrograms = [
  { tag: 'Open Play', title: 'Open Play Night', when: 'Every Friday · 6:00 PM – 10:00 PM', desc: 'Join us for open play, games, and community time at the facility.', to: '/reservations', cta: 'Book a Court' },
  { tag: 'Camps', title: 'Youth Sports Camp', when: 'Seasonal · Morning & Afternoon Sessions', desc: 'Multi-sport camp opportunities for kids and young athletes.', to: '/camps', cta: 'View Camps' },
  { tag: 'Community', title: 'Movie Night on the Turf', when: 'Monthly · 8:00 PM – 11:00 PM', desc: 'A community movie night experience on the turf field with the large outdoor screen.', to: '/contact-us', cta: 'Ask About Dates' },
  { tag: 'Pickleball', title: 'Pickleball Social', when: 'Every Saturday · 10:00 AM – 1:00 PM', desc: 'Casual pickleball play, music, and hangout time.', to: '/reservations', cta: 'Reserve a Court' },
];

export default function Home() {
  return (
    <div className="font-inter bg-background">
      <Navbar />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-55"
            autoPlay
            muted
            loop
            playsInline
            poster={PHOTOS.courts}
            aria-label="Trosky Sports Club in action"
          >
            <source src="/trosky-event-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-36">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="font-inter text-sm tracking-[0.3em] text-white/50 uppercase mb-4 font-medium">
              Austin&apos;s Community Sports & Event Destination
            </p>
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider leading-[0.92] mb-6">
              More Than a<br />Sports Facility
            </h1>
            <p className="font-inter text-white/75 text-xl leading-relaxed mb-10 max-w-2xl">
              A place to play, gather, train, and grow. Built for families, athletes, teams, and the entire Austin
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={FLUID_BOOKING}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 inline-flex items-center justify-center gap-2"
              >
                Book a Court <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/day-passes"
                className="border border-white/50 text-white px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 inline-flex items-center justify-center gap-2"
              >
                Buy a Day Pass
              </Link>
              <Link
                to="/facility"
                className="border border-white/50 text-white px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 inline-flex items-center justify-center gap-2"
              >
                Explore the Facility
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 -mt-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto rounded-xl border border-accent/50 bg-[#101215] px-6 py-6 sm:px-8 sm:py-7 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent ring-4 ring-accent/15" aria-hidden="true" />
              <div>
                <p className="font-inter text-[11px] font-bold tracking-[0.24em] uppercase text-accent mb-1.5">First Visit</p>
                <h2 className="font-display text-3xl sm:text-4xl tracking-wide text-white leading-none">Bring the Crew</h2>
                <p className="mt-2 font-inter text-sm sm:text-base leading-relaxed text-white/70">Buy one Day Pass. Bring up to 3 friends on us.</p>
              </div>
            </div>
            <Link
              to="/day-passes"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-inter text-xs font-bold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-[#ff6d27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#101215]"
            >
              See Day Passes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-primary/20 rounded-xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <p className="font-inter text-xs tracking-[0.3em] text-primary uppercase mb-3 font-medium">Founding Members Only</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider mb-3">Founding Offer — $79/month</h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Join the Trosky Advantage Membership for just $79/month — available to the first 99 members only.
              </p>
            </div>
            <a
              href={FLUID_ADVANTAGE}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Claim Your Founding Spot <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">The Grounds</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider">Facility At A Glance</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {glance.map((item, i) => {
              const inner = (
                <>
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground tracking-wider mb-3">{item.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </>
              );
              const className = 'bg-secondary border border-border rounded-xl p-7 h-full block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className={className}>
                      {inner}
                    </a>
                  ) : (
                    <div className={className}>{inner}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">The Grounds</p>
              <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider">Explore the Facility</h2>
            </div>
            <Link to="/facility" className="font-inter font-bold text-sm tracking-wider uppercase text-primary inline-flex items-center gap-2">
              Schedule a Facility Tour <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {spaces.map((space) => (
              <Link key={space.title} to={space.to} className="group relative overflow-hidden rounded-xl min-h-[260px]">
                <img src={space.img} alt={space.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-foreground/10" />
                <p className="absolute bottom-5 left-5 font-display text-2xl text-white tracking-wider">{space.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">The Experience</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider mb-4">
              One Facility. Endless Ways to Use It.
            </h2>
            <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
              Grab a day pass, book a court, sign up for a camp, or host your next event. No long-term commitment
              required — just show up and use the space.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Play',
                items: ['Open play & day passes', 'Pickleball & padel', 'Soccer & volleyball', 'Kickball & flag football', 'Casual use anytime'],
                to: '/day-passes',
                label: 'Buy a Day Pass',
              },
              {
                title: 'Host Your Event',
                items: ['Celebrations & parties', 'Corporate gatherings', 'Watch parties', 'Tournaments', 'Community events'],
                href: EVENTS_VENUE_URL,
                label: 'Explore Event Hosting',
              },
              {
                title: 'Learn & Develop',
                items: ['Private lessons', 'Group clinics', 'Youth & multi-sport camps', 'Performance training', 'Team training'],
                to: '/coaches',
                label: 'See Programming',
              },
            ].map((col) => (
              <div key={col.title} className="bg-secondary border border-border rounded-xl p-8 flex flex-col">
                <h3 className="font-display text-3xl text-foreground tracking-wider mb-5">{col.title}</h3>
                <ul className="space-y-2 mb-8 flex-1">
                  {col.items.map((item) => (
                    <li key={item} className="font-inter text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
                {col.href ? (
                  <a
                    href={col.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-inter font-bold text-xs tracking-wider uppercase text-primary inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    {col.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                ) : (
                  <Link to={col.to} className="font-inter font-bold text-xs tracking-wider uppercase text-primary inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                    {col.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">What&apos;s On</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider">Play, Camps & Community</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clubPrograms.map((event) => (
              <div key={event.title} className="bg-white border border-border rounded-xl p-6">
                <span className="font-inter text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {event.tag}
                </span>
                <h3 className="font-display text-2xl text-foreground tracking-wider mt-4 mb-2">{event.title}</h3>
                <p className="font-inter text-xs text-muted-foreground uppercase tracking-wide mb-3">{event.when}</p>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">{event.desc}</p>
                <Link to={event.to} className="font-inter font-semibold text-xs tracking-wider uppercase text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                  {event.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={EVENTS_VENUE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-inter font-bold text-sm tracking-wider uppercase text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              Host a wedding, corporate, or private event <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">Who We Are</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider mb-5">
              Austin&apos;s Community Sports & Event Destination.
            </h2>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-6">
              Trosky Sports Club is a 2.5-acre outdoor facility in Austin, TX built for families, athletes, teams, and
              the community. Come to play, train, host an event, or just hang out.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed mb-8">
              Day passes, court bookings, youth camps, and event rentals are available to everyone. No membership
              required to enjoy the facility.
            </p>
            <a
              href={STORY_VIDEO}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-inter font-bold text-sm tracking-wider uppercase text-primary"
            >
              Watch Our Story <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <img src={PHOTOS.clubhouse} alt="Trosky clubhouse" className="w-full h-[420px] object-cover rounded-xl" />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">Come See It for Yourself</h2>
          <p className="font-inter text-white/80 text-lg leading-relaxed mb-10">
            Schedule a facility tour or book through Fluid — courts, day passes, memberships, and coaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-white text-primary px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 inline-flex items-center justify-center gap-2"
            >
              Schedule a Tour <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={FLUID_BOOKING}
              target="_blank"
              rel="noreferrer"
              className="border border-white/50 text-white px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 inline-flex items-center justify-center gap-2"
            >
              Open Fluid Booking
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
