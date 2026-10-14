import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const VIP_URL = 'https://trosky.fluidpb.com/become-a-member?planId=958988d4-7f48-4a14-8198-74311907f2a5';
const VIP_FAMILY_URL = 'https://trosky.fluidpb.com/become-a-member?planId=93057544-3caa-44e0-a831-5ccb4ae861bd';

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

export default function VIPSection() {
  return (
    <section id="memberships" className="py-24 md:py-32 bg-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-white/40 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Membership</p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider mb-5">VIP Memberships</h2>
          <p className="font-inter text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Premium access for guests and families who want priority booking, premium amenities, and the full Trosky Sports Club experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* VIP Individual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col"
          >
            <p className="font-inter text-white/40 text-xs tracking-widest uppercase mb-4 font-medium">Individual</p>
            <p className="font-display text-3xl text-white tracking-wider mb-3">VIP Membership</p>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-display text-5xl text-white tracking-wide">$299.99</span>
              <span className="font-inter text-white/40 text-sm">/month</span>
            </div>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-6 pb-6 border-b border-white/10">
              {vipDescription}
            </p>
            <ul className="space-y-2.5 mb-8 flex-1">
              {vipBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={VIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-foreground py-4 font-inter font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all text-center block"
            >
              Become a VIP Member
            </a>
          </motion.div>

          {/* VIP Family */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col"
          >
            <p className="font-inter text-white/40 text-xs tracking-widest uppercase mb-4 font-medium">Family</p>
            <p className="font-display text-3xl text-white tracking-wider mb-3">VIP Family Membership</p>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-display text-5xl text-white tracking-wide">$499.99</span>
              <span className="font-inter text-white/40 text-sm">/month</span>
            </div>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-6 pb-6 border-b border-white/10">
              {familyDescription}
            </p>
            <ul className="space-y-2.5 mb-8 flex-1">
              {familyBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={VIP_FAMILY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-foreground py-4 font-inter font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all text-center block"
            >
              Become a Family VIP Member
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}