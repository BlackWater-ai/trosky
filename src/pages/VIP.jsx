import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FLUID_VIP, FLUID_VIP_FAMILY } from '@/lib/constants';

const vipBenefits = [
  'Access for 1 adult',
  '10 guest passes per month',
  'Daily court bookings',
  'Unlimited facility access',
  '1 booking per day',
  '2 hour max booking',
  'Private locker rooms',
  'Free equipment rentals',
  'Free VIP sections',
  'Podcast room usage',
  '25% off private venue rentals',
  '10 day booking window',
  '24 hour booking cancellation window',
];

const familyBenefits = [
  'Access for 2 adults 18+',
  'Kids 13 years or younger included',
  '10 guest passes per month',
  'Daily court bookings',
  'Unlimited facility access',
  '1 booking per day',
  '2 hour max booking',
  'Private locker rooms',
  'Free equipment rentals',
  'Free VIP sections',
  'Podcast room usage',
  '25% off private venue rentals',
  '10 day booking window',
  '24 hour booking cancellation window',
];

const vipDescription = 'Our premium all-access experience designed for those who want the best of Trosky. The VIP Membership includes access for one adult, with 10 guest passes each month. Enjoy daily court bookings and unlimited access to the facility. Members are allowed one booking per day for a maximum of two hours. Members also receive use of our podcast room, free equipment rentals, access to exclusive VIP sections each time they book a court, and a 25% discount when hosting a private event. VIP is everything you need for a seamless, elevated experience every visit.';

const familyDescription = 'Our premium all-access experience designed for families who want the best of Trosky. The VIP Family Membership includes access for two adults and children age 13 or younger, with 10 guest passes each month. Enjoy daily court bookings and unlimited access to the facility. Members are allowed one booking per day for a maximum of two hours. Members also receive use of our podcast room, free equipment rentals, access to exclusive VIP sections each time they book a court, and a 25% discount when hosting a private event. VIP Family is everything you need for a seamless, elevated experience every visit.';

export default function VIP() {
  return (
    <div className="font-inter bg-background">
      <Navbar />

      {/* ── Header ── */}
      <section className="pt-36 pb-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">Membership</p>
            <h1 className="font-display text-6xl md:text-8xl text-foreground tracking-wider leading-none mb-6">
              VIP Memberships
            </h1>
            <p className="font-inter text-xl text-foreground font-semibold mb-4 leading-relaxed">
              Premium access for guests and families who want the best of Trosky Sports Club.
            </p>
            <p className="font-inter text-muted-foreground text-base leading-relaxed mb-10 max-w-2xl mx-auto">
              VIP memberships are designed for guests who want priority access, premium amenities, and a smoother experience every time they visit.
            </p>
            <a
              href={FLUID_VIP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 mx-auto"
            >
              Become a VIP Member <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">

            {/* VIP Membership */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-foreground rounded-xl p-8 flex flex-col"
            >
              <p className="font-inter text-white/50 text-xs tracking-widest uppercase mb-4 font-medium">Individual</p>
              <p className="font-display text-3xl text-white tracking-wider mb-1">VIP Membership</p>
              <div className="flex items-baseline gap-1 mb-4 mt-3">
                <span className="font-display text-5xl text-white tracking-wide">$299.99</span>
                <span className="font-inter text-white/50 text-sm">/month</span>
              </div>
              <p className="font-inter text-white/60 text-sm leading-relaxed mb-8 pb-6 border-b border-white/10">
                Our premium all-access experience designed for those who want the best of Trosky.
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                {vipBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={FLUID_VIP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-foreground py-4 font-inter font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all text-center block"
              >
                Become a VIP Member
              </a>
            </motion.div>

            {/* VIP Family Membership */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-secondary border border-border rounded-xl p-8 flex flex-col"
            >
              <p className="font-inter text-primary text-xs tracking-widest uppercase mb-4 font-medium">Family</p>
              <p className="font-display text-3xl text-foreground tracking-wider mb-1">VIP Family Membership</p>
              <div className="flex items-baseline gap-1 mb-4 mt-3">
                <span className="font-display text-5xl text-foreground tracking-wide">$499.99</span>
                <span className="font-inter text-muted-foreground text-sm">/month</span>
              </div>
              <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-8 pb-6 border-b border-border">
                Our premium all-access experience designed for families who want the best of Trosky.
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                {familyBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary/50 flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={FLUID_VIP_FAMILY}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-primary-foreground py-4 font-inter font-bold text-xs tracking-wider uppercase rounded-sm hover:opacity-90 transition-all text-center block"
              >
                Become a Family VIP Member
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Membership Descriptions ── */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">What's Included</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">Membership Details</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white border border-border rounded-xl p-8">
              <p className="font-display text-2xl text-foreground tracking-wider mb-4">VIP Membership</p>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {vipDescription}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white border border-border rounded-xl p-8">
              <p className="font-display text-2xl text-foreground tracking-wider mb-4">VIP Family Membership</p>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {familyDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section id="contact-cta" className="py-28 bg-foreground">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="font-inter text-white/40 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Get In Touch</p>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mb-5">Interested in VIP Access?</h2>
            <p className="font-inter text-white/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Reach out to learn more about VIP availability, access, and next steps.
            </p>
            <a
              href={FLUID_VIP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-foreground px-10 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all inline-flex items-center gap-2"
            >
              Become a VIP Member <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
