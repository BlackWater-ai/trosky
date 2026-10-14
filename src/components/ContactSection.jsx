import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const reasonOptions = [
  'General Questions',
  'Reservations',
  'Event / Venue Rental',
  'Coaches',
  'Vendor / Partnership Inquiry',
  'Other',
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('https://formsubmit.co/ajax/Gabe@troskysportsclub.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'N/A',
          interest: form.interest || 'N/A',
          message: form.message,
          _cc: 'Troy@troskysportsclub.com',
          _subject: `New Trosky Inquiry: ${form.interest || 'General'} — ${form.name}`,
          _template: 'table',
        }),
      });
      const data = await res.json();
      if (res.ok && (data.success === true || data.success === 'true')) {
        toast.success("Message sent! We'll be in touch shortly.");
        setForm({ name: '', email: '', phone: '', interest: '', message: '' });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">Come See It</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-5">Come See It<br />for Yourself</h2>
          <p className="font-inter text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Want to see the space in person? Schedule a facility tour and experience Trosky Sports Club for yourself.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="h-12 border-border rounded-sm font-inter bg-secondary"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="h-12 border-border rounded-sm font-inter bg-secondary"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="h-12 border-border rounded-sm font-inter bg-secondary"
              />
              <Select value={form.interest} onValueChange={(val) => setForm({ ...form, interest: val })}>
                <SelectTrigger className="h-12 border-border rounded-sm font-inter bg-secondary">
                  <SelectValue placeholder="What are you reaching out about?" />
                </SelectTrigger>
                <SelectContent>
                  {reasonOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Tell us what you're looking for or any questions you have..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="border-border rounded-sm font-inter bg-secondary resize-none"
              />
              <Button
                type="submit"
                disabled={sending}
                className="w-full h-12 bg-primary text-primary-foreground font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:opacity-90"
              >
                {sending ? 'Sending...' : 'Schedule a Tour'}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-inter font-bold text-foreground mb-4 text-lg">Find Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-inter text-muted-foreground text-sm">Austin, TX</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:Gabe@troskysportsclub.com" className="font-inter text-muted-foreground text-sm hover:text-primary transition-colors break-all">Gabe@troskysportsclub.com</a>
                  <span aria-hidden="true">—</span>
                  <a href="tel:2106328160" className="font-inter text-muted-foreground text-sm hover:text-primary transition-colors">210-632-8160</a>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:Troy@troskysportsclub.com" className="font-inter text-muted-foreground text-sm hover:text-primary transition-colors break-all">Troy@troskysportsclub.com</a>
                  <span aria-hidden="true">—</span>
                  <a href="tel:5129862757" className="font-inter text-muted-foreground text-sm hover:text-primary transition-colors">512-986-2757</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-inter font-bold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-secondary border border-border flex items-center justify-center hover:bg-primary/10 transition-colors rounded-sm">
                  <Instagram className="w-4 h-4 text-foreground" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary border border-border flex items-center justify-center hover:bg-primary/10 transition-colors rounded-sm">
                  <Facebook className="w-4 h-4 text-foreground" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary border border-border flex items-center justify-center hover:bg-primary/10 transition-colors rounded-sm">
                  <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.53V6.81a4.83 4.83 0 01-1-.12z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-secondary border border-border rounded-sm p-6">
              <h4 className="font-inter font-bold text-foreground mb-2">Book Through Fluid</h4>
              <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-4">
                Once you're ready to book a court, field, coach, membership, or day pass — everything is handled through our booking platform, Fluid.
              </p>
              <a
                href="https://trosky.fluidpb.com/reservations"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-primary text-sm font-semibold hover:opacity-70 transition-opacity"
              >
                Open Fluid Booking →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
