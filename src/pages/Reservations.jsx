import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, AlertCircle, XCircle, CloudRain } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

const courts = [
  {
    id: 'pickleball',
    name: 'Pickleball Court',
    emoji: '🏓',
    price: '$20',
    unit: '/hr',
    details: [
      'Min booking: 60 minutes · Max booking: 2 hours',
      'Designed for up to 4 players',
      'Up to 6 players max',
      'Additional players may require an extra fee',
      'Booking window: 5 days',
    ],
    cta: 'Book Pickleball',
  },
  {
    id: 'padel',
    name: 'Premium Padel Court',
    emoji: '🎾',
    price: '$60',
    unit: '/hr',
    details: [
      'Min booking: 60 minutes · Max booking: 2 hours',
      'Designed for up to 4 players',
      'Up to 6 players max',
      'Additional players may require an extra fee',
      'Booking window: 5 days',
    ],
    cta: 'Book Padel',
    featured: true,
  },
  {
    id: 'turf',
    name: 'Turf Field',
    emoji: '⚽',
    customPricing: [
      { label: 'Volleyball Courts', price: '$50/hr' },
    ],
    details: [
      'Min booking: 60 minutes · Max booking: 2 hours',
      'Used for bookings, leagues, training, camps & rentals',
      'Soccer, lacrosse, volleyball, and more',
      'Availability depends on existing reservations and events',
    ],
    cta: 'Reserve the Turf Field',
  },
];

const cancellationPolicies = [
  { icon: CheckCircle2, color: 'text-green-500', text: 'Members canceling 24+ hours before a reservation: no charge' },
  { icon: CheckCircle2, color: 'text-green-500', text: 'Guests canceling 24+ hours before a reservation: no charge' },
  { icon: XCircle, color: 'text-red-500', text: 'Canceling within 24 hours of a reservation: charged for the booking' },
  { icon: XCircle, color: 'text-red-500', text: 'No-show: charged for the booking' },
  { icon: CloudRain, color: 'text-blue-500', text: 'Weather cancellation determined by Trosky Sports Club: no charge' },
  { icon: AlertCircle, color: 'text-amber-500', text: 'Repeated late cancellations or no-shows may result in temporary booking restrictions' },
  { icon: AlertCircle, color: 'text-amber-500', text: 'Trosky Sports Club reserves the right to close courts or adjust bookings due to unsafe weather or facility conditions' },
];

export default function Reservations() {
  return (
    <div className="font-inter">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[520px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69f3a4d87763e987202433ad/f3aba9c70_TroskyPhotos-15.jpg"
            alt="Trosky Sports Club Courts"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="font-inter text-sm tracking-[0.3em] text-white/60 uppercase mb-4 font-medium">Trosky Sports Club</p>
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-6">
              Court & Field<br />Reservations
            </h1>
            <p className="font-inter text-white/80 text-xl leading-relaxed mb-10">
              Reserve pickleball courts, padel courts, or turf field space at Trosky Sports Club.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://trosky.fluidpb.com/reservations"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-opacity flex items-center justify-center gap-2"
              >
                Book a Court <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => scrollTo('#pricing')}
                className="border border-white/50 text-white px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 transition-colors"
              >
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">Pricing</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider">Reservation Pricing</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courts.map((court, i) => (
              <motion.div
                key={court.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-white border rounded-xl p-8 flex flex-col ${court.featured ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-border'}`}
              >
                {court.featured && (
                  <span className="self-start bg-primary text-primary-foreground text-xs font-inter font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">Most Popular</span>
                )}
                <div className="text-3xl mb-2">{court.emoji}</div>
                <p className="font-display text-2xl text-foreground tracking-wider mb-4">{court.name}</p>

                {court.customPricing ? (
                  <div className="space-y-3 my-4">
                    {court.customPricing.map((p) => (
                      <div key={p.label} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                        <span className="font-inter text-sm text-muted-foreground">{p.label}</span>
                        <span className="font-display text-2xl text-foreground tracking-wider">{p.price}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="my-4">
                    <div className="bg-secondary rounded-lg p-4 text-center">
                      <p className="font-inter text-xs text-muted-foreground uppercase tracking-widest mb-1">Hourly Rate</p>
                      <p className="font-display text-4xl text-foreground tracking-wider">{court.price}<span className="text-base text-muted-foreground">{court.unit}</span></p>
                    </div>
                  </div>
                )}

                <ul className="space-y-2.5 mb-8 mt-2">
                  {court.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 font-inter text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://trosky.fluidpb.com/reservations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full bg-primary text-primary-foreground py-3.5 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity text-center block"
                >
                  {court.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">Policy</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider mb-4">Booking Cancellation Policy</h2>
              <p className="font-inter text-muted-foreground leading-relaxed mb-8">
                To ensure fair court access and smooth scheduling for all guests and members, please review the booking cancellation policy below.
              </p>
              <ul className="space-y-4">
                {cancellationPolicies.map((p, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-4 bg-white border border-border rounded-lg px-5 py-4"
                  >
                    <p.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${p.color}`} />
                    <p className="font-inter text-sm text-foreground leading-relaxed">{p.text}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact-cta" className="py-20 bg-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider mb-4">Ready to Play?</h2>
            <p className="font-inter text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Reserve your court or turf field time and enjoy a clean, organized experience at Trosky Sports Club.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://trosky.fluidpb.com/reservations"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2"
              >
                Book a Court <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}