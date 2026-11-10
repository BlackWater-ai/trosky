import React from 'react';
import { Link } from 'react-router-dom';

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

const links = [
  { label: 'Host Event', anchor: '/events', isPage: true },
  { label: 'Partners', anchor: '#partners' },
  { label: 'Contact', anchor: '/contact-us', isPage: true },
  { label: 'Policies', anchor: '/policies', isPage: true },
];

export default function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <img
              src="/trosky-sports-club-logo.png"
              alt="Trosky Sports Club"
              className="h-16 w-auto mb-3"
            />
            <h3 className="font-display text-3xl text-white tracking-wider mb-3">Trosky Sports Club</h3>
            <p className="font-inter text-white/50 text-sm leading-relaxed">
              Austin's community sports facility and event venue. Built for families, athletes, teams, and the entire community.
            </p>
          </div>
          <div>
            <p className="font-inter text-white/40 text-xs tracking-widest uppercase mb-4 font-medium">Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                l.isPage ? (
                  <Link
                    key={l.label}
                    to={l.anchor}
                    className="font-inter text-white/60 text-sm text-left hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <button
                    key={l.label}
                    onClick={() => scrollTo(l.anchor)}
                    className="font-inter text-white/60 text-sm text-left hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                )
              ))}
            </div>
          </div>
          <div>
            <p className="font-inter text-white/40 text-xs tracking-widest uppercase mb-4 font-medium">Contact</p>
            <div className="space-y-2 text-sm font-inter text-white/60">
              <p>Austin, TX</p>
              <p>Contact us for details</p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <a href="mailto:Gabe@troskysportsclub.com" className="hover:text-white transition-colors">Gabe@troskysportsclub.com</a>
                <span aria-hidden="true">—</span>
                <a href="tel:2106328160" className="hover:text-white transition-colors">210-632-8160</a>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <a href="mailto:Troy@troskysportsclub.com" className="hover:text-white transition-colors">Troy@troskysportsclub.com</a>
                <span aria-hidden="true">—</span>
                <a href="tel:5129862757" className="hover:text-white transition-colors">512-986-2757</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-inter text-white/30 text-xs">© {new Date().getFullYear()} Trosky Sports Club · Austin, TX · All rights reserved.</p>
          <p className="font-inter text-white/30 text-xs">Online booking coming soon</p>
        </div>
      </div>
    </footer>
  );
}
