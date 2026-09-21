import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CONTACTS, EVENTS_VENUE_URL, REASON_OPTIONS } from '@/lib/constants';

const faqs = [
  {
    question: 'What is Trosky Sports Club?',
    answer:
      'Trosky Sports Club is a multi-sport community facility in Austin, TX with pickleball, padel, turf field activities, events, camps, hangout areas, and premium amenities.',
  },
  {
    question: 'Where is Trosky Sports Club located?',
    answer: 'Trosky Sports Club is located at 2105 Scott Ln, Austin, TX 78734, United States.',
  },
  {
    question: 'Do I need a membership to visit?',
    answer:
      'No. Guests can use day passes, make reservations, attend events, or ask about VIP memberships depending on what they want to access.',
  },
  {
    question: 'What does a Day Pass include?',
    answer:
      'A Day Pass gives access to the club atmosphere for the day, including open play before peak hours, turf field activities when available, hangout areas, kids and dog areas, games, and food and drink areas. Some experiences like court reservations, VIP spaces, sauna, cold plunge, food trucks, and premium rentals are separate.',
  },
  {
    question: 'How do I book a court?',
    answer:
      'Court and field reservations are handled through the reservations system. Use the Book a Court button or Reservations page to view booking options.',
  },
  {
    question: 'Can I host an event at Trosky?',
    answer:
      'Yes. Trosky offers event and venue rental options for celebrations, corporate events, team gatherings, watch parties, and community events. Visit the Events Venue site to explore options and submit an inquiry.',
  },
  {
    question: 'Do you offer youth camps?',
    answer:
      'Yes. Trosky offers youth camp and programming options. Visit the Camps page or submit a camp inquiry for upcoming dates and details.',
  },
  {
    question: 'Are pets allowed?',
    answer: 'Pets are allowed but must remain controlled and cleaned up after. Aggressive or disruptive animals are not permitted.',
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://formsubmit.co/ajax/Gabe@troskysportsclub.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          reason: form.reason,
          message: form.message,
          _cc: 'Troy@troskysportsclub.com',
          _subject: `New Trosky Contact Form Submission — ${form.name}`,
          _template: 'table',
        }),
      });
      const data = await res.json();
      if (res.ok && (data.success === true || data.success === 'true')) {
        setSubmitted(true);
        setForm({ name: '', phone: '', email: '', reason: '', message: '' });
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="font-inter bg-background">
      <Navbar />

      <section className="pt-32 pb-16 bg-[#080b10] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="base44-eyebrow mb-4">Contact</p>
            <h1 className="font-display text-6xl md:text-7xl text-white tracking-wider mb-5">
              Contact Trosky Sports Club
            </h1>
            <p className="font-inter text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Have a question about the facility, reservations, day passes, events, camps, or memberships? Reach out
              and our team will point you in the right direction.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="form" className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-border rounded-xl p-6 md:p-8 grid sm:grid-cols-2 gap-6 md:gap-8 mb-12">
            {CONTACTS.map((person) => (
              <div key={person.email} className="space-y-3 border-t border-border pt-5 first:border-t-0 first:pt-0">
                <p className="font-inter text-xs tracking-widest uppercase text-muted-foreground font-semibold">
                  {person.label}
                </p>
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-start gap-2 font-inter text-sm text-foreground hover:text-primary transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  <Mail className="mt-0.5 w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" /> {person.email}
                </a>
                <a
                  href={`tel:${person.tel}`}
                  className="flex items-center gap-2 font-inter text-sm text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" /> {person.phone}
                </a>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="base44-eyebrow mb-3">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">
              General Contact Form
            </h2>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-border rounded-xl p-14 text-center"
              role="status"
            >
              <p className="font-display text-3xl text-foreground tracking-wider mb-3">Form submitted</p>
              <p className="font-inter text-muted-foreground">
                If you don&apos;t hear back, email{' '}
                <a className="underline" href="mailto:Gabe@troskysportsclub.com">
                  Gabe@troskysportsclub.com
                </a>{' '}
                or call{' '}
                <a className="underline" href="tel:2106328160">
                  210-632-8160
                </a>
                .
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-white border border-border rounded-xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="font-inter text-xs text-muted-foreground uppercase tracking-widest mb-2 block">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-border rounded-sm px-4 py-3 font-inter text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="font-inter text-xs text-muted-foreground uppercase tracking-widest mb-2 block">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-border rounded-sm px-4 py-3 font-inter text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(512) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="font-inter text-xs text-muted-foreground uppercase tracking-widest mb-2 block">
                  Email *
                </label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border rounded-sm px-4 py-3 font-inter text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-reason" className="font-inter text-xs text-muted-foreground uppercase tracking-widest mb-2 block">
                  What are you reaching out about?
                </label>
                <select
                  id="contact-reason"
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  className="w-full border border-border rounded-sm px-4 py-3 font-inter text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a reason</option>
                  {REASON_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="font-inter text-xs text-muted-foreground uppercase tracking-widest mb-2 block">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full border border-border rounded-sm px-4 py-3 font-inter text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {loading ? 'Sending...' : 'Submit Message'}
              </button>
              {error && (
                <p className="font-inter text-sm text-red-600 text-center" role="alert">
                  {error}
                </p>
              )}
            </motion.form>
          )}
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">Questions?</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="py-4 hover:no-underline font-display text-lg text-foreground tracking-wide">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 font-inter text-sm text-muted-foreground leading-relaxed">
                    {faq.question === 'Can I host an event at Trosky?' ? (
                      <>
                        Yes. Trosky offers event and venue rental options for celebrations, corporate events, team
                        gatherings, watch parties, and community events.{' '}
                        <a
                          href={EVENTS_VENUE_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary underline underline-offset-2"
                        >
                          Visit the Events Venue site
                        </a>{' '}
                        to explore options and submit an inquiry.
                      </>
                    ) : (
                      faq.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">
              Need Help Finding The Right Option?
            </h2>
            <p className="font-inter text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Tell us what you are looking for and we will help route you to the right reservation, program, event, or
              team member.
            </p>
            <button
              type="button"
              onClick={() => scrollTo('#form')}
              className="bg-white text-primary px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-opacity inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Submit A Question <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
