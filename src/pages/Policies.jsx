import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

const policies = [
  {
    id: 'booking',
    title: 'Booking & Cancellation Policy',
    intro: 'To ensure fair court access and smooth scheduling for all guests and members, please review our booking policies below.',
    items: [
      'Cancellations made 24+ hours before a reservation: no charge',
      'Members canceling 24+ hours before a reservation: no charge',
      'Cancellations made within 24 hours of a reservation: full booking charge',
      'No-shows: full booking charge',
      'Weather-related cancellations determined by Trosky Sports Club: no charge',
      'Repeated late cancellations or no-shows may result in temporary booking restrictions',
      'Trosky Sports Club reserves the right to close courts or adjust bookings due to unsafe weather or facility conditions',
    ],
  },
  {
    id: 'card-on-file',
    title: 'Card On File',
    intro: 'Guests may be required to keep a card on file for bookings, rentals, damages, or unreturned equipment.',
  },
  {
    id: 'equipment',
    title: 'Equipment Rental Policy',
    items: [
      'All rental equipment must be returned immediately after use',
      'Damaged, broken, lost, or unreturned paddles may result in a replacement fee of $200',
      'Unreturned turf shoes may result in a replacement fee of $50',
      'Additional replacement fees may apply for lost, damaged, or unreturned rental items',
    ],
  },
  {
    id: 'conduct',
    title: 'Facility Conduct & Etiquette',
    intro: 'To maintain a welcoming and enjoyable environment for everyone, guests are expected to respect the facility, staff, and other visitors.',
    items: [
      'Respect all guests, staff, and players',
      'Unsportsmanlike conduct, harassment, aggressive behavior, or intoxication may result in removal from the facility without refund',
      'Guests must follow all court, turf, sauna, and cold plunge rules',
      'Trosky Sports Club staff may adjust rotations or court assignments as needed',
    ],
  },
  {
    id: 'kids-pets',
    title: 'Kids & Pet Policy',
    items: [
      'Children must remain supervised by an adult at all times',
      'Pets must remain controlled and cleaned up after',
      'Aggressive or disruptive animals are not permitted',
      'Trosky Sports Club may ask guests to remove disruptive pets from the facility',
    ],
  },
  {
    id: 'events',
    title: 'Event & Private Booking Policy',
    intro: 'Private events may require deposits to secure reservations. Event deposits may become non-refundable within a specified timeframe before the event. Additional charges may apply for damages, overtime, excessive cleanup, special requests, or facility misuse.',
  },
  {
    id: 'weather',
    title: 'Weather Policy',
    intro: 'As an outdoor facility, weather conditions may affect court availability and scheduling. Trosky Sports Club will communicate closures or delays as early as possible through email, text, phone, or social media.\n\nSafety decisions regarding lightning, rain, heat, or unsafe playing conditions are made solely by Trosky Sports Club management.',
  },
  {
    id: 'refuse',
    title: 'Right To Refuse Service',
    intro: 'Trosky Sports Club reserves the right to refuse service, remove guests, or suspend access for violations of facility policies, unsafe behavior, harassment, damage to property, or conduct deemed disruptive to the experience of other guests.',
  },
];

export default function Policies() {
  return (
    <div className="font-inter bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">Guidelines</p>
            <h1 className="font-display text-6xl md:text-7xl text-foreground tracking-wider mb-5">
              Trosky Sports Club Policies
            </h1>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Please review our booking, membership, rental, conduct, weather, kids, pet, and event policies before visiting or making a reservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policies Accordion */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <AccordionItem value={policy.id} className="border border-border rounded-lg bg-white overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 font-display text-lg text-foreground tracking-wide">
                    {policy.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 border-t border-border bg-secondary/30">
                    <div className="space-y-3">
                      {policy.intro && (
                        <p className="font-inter text-foreground leading-relaxed text-base whitespace-pre-line">
                          {policy.intro}
                        </p>
                      )}
                      {policy.items && (
                        <ul className="space-y-2.5">
                          {policy.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span className="font-inter text-foreground text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center mb-6">
              <HelpCircle className="w-12 h-12 text-primary" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider mb-4">
              Questions About Our Policies?
            </h2>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-10">
              Contact the Trosky Sports Club team before booking or visiting if you have questions about facility rules, reservations, memberships, or events.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}