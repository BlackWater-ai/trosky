import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PartnerWithTrosky() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' });
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
          'business/company': form.business,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _cc: 'Troy@troskysportsclub.com',
          _subject: 'New Trosky Partner Inquiry',
          _template: 'table',
        }),
      });
      const data = await res.json();
      if (res.ok && (data.success === true || data.success === 'true')) {
        setSubmitted(true);
        setForm({ name: '', business: '', email: '', phone: '', message: '' });
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-inter bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-40 pb-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">Partnerships</p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-5">Want to Partner With Trosky?</h1>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              We partner with food trucks, wellness providers, trainers, sponsors, vendors, and community organizations. Tell us about your business and we'll be in touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-secondary border border-border rounded-xl p-14 text-center">
              <div className="text-5xl mb-5">🤝</div>
              <p className="font-display text-3xl text-foreground tracking-wider mb-3">Inquiry Sent!</p>
              <p className="font-inter text-muted-foreground">Thanks for reaching out. Our team will follow up with you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-secondary border border-border rounded-xl p-8 space-y-5"
            >
              <div>
                <label className="font-inter text-xs text-muted-foreground uppercase tracking-widest mb-2 block">Name *</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border rounded-sm px-4 py-3 font-inter text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your name" />
              </div>
              <div>
                <label className="font-inter text-xs text-muted-foreground uppercase tracking-widest mb-2 block">Business / Company</label>
                <input value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full border border-border rounded-sm px-4 py-3 font-inter text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your business or company" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-inter text-xs text-muted-foreground uppercase tracking-widest mb-2 block">Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border rounded-sm px-4 py-3 font-inter text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="font-inter text-xs text-muted-foreground uppercase tracking-widest mb-2 block">Phone</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-border rounded-sm px-4 py-3 font-inter text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="(512) 000-0000" />
                </div>
              </div>
              <div>
                <label className="font-inter text-xs text-muted-foreground uppercase tracking-widest mb-2 block">Message</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5}
                  className="w-full border border-border rounded-sm px-4 py-3 font-inter text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Tell us about your business and how you'd like to partner..." />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-primary text-primary-foreground py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2">
                {loading ? 'Sending...' : <><ArrowRight className="w-4 h-4" /> Submit Inquiry</>}
              </button>
              {error && (
                <p className="font-inter text-sm text-red-600 text-center">{error}</p>
              )}
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}