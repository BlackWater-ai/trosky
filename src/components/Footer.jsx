import { ArrowRight, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import SmartLink from './SmartLink';
import { ADDRESS, CONTACTS, EVENTS_VENUE_URL, FLUID_BOOKING, FOOTER_LINKS, SOCIAL } from '@/lib/constants';
import { PHOTOS } from '@/lib/photos';

function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.18 8.18 0 0 0 4.75 1.5V6.78a4.84 4.84 0 0 1-1-.09Z" />
    </svg>
  );
}

export default function Footer() {
  const mid = Math.ceil(FOOTER_LINKS.length / 2);
  const col1 = FOOTER_LINKS.slice(0, mid);
  const col2 = FOOTER_LINKS.slice(mid);
  const linkClass = 'font-inter text-sm text-white/85 hover:text-white transition-colors py-0.5';

  return (
    <footer>
      <div className="bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="bg-white border border-border rounded-sm p-6 md:p-8 max-w-3xl">
            <h3 className="font-inter font-semibold text-foreground text-lg mb-2">Book Through Fluid</h3>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4 max-w-xl">
              Once you&apos;re ready to book a court, field, coach, membership, or day pass — everything is
              handled through our booking platform, Fluid.
            </p>
            <a
              href={FLUID_BOOKING}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-inter font-semibold text-sm text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              Open Fluid Booking <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-[#080b10] text-white overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/3 hidden lg:block pointer-events-none">
          <img src={PHOTOS.courts} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#080b10]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <img
              src="/trosky-sports-club-logo.png"
              alt="Trosky Sports Club"
              className="h-28 w-28 object-contain -ml-2 mb-3"
            />
            <p className="font-inter text-sm text-white/70 leading-relaxed max-w-sm">
              Austin&apos;s community sports facility. Built for families, athletes, teams, and the entire community.
            </p>
          </div>

          <div>
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-white/50 mb-5">Quick Links</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {col1.map((left, i) => {
                const right = col2[i];
                return (
                  <div key={left.label} className="contents">
                    <SmartLink to={left.to} href={left.href} className={linkClass}>
                      {left.label}
                    </SmartLink>
                    {right ? (
                      <SmartLink to={right.to} href={right.href} className={linkClass}>
                        {right.label}
                      </SmartLink>
                    ) : (
                      <span />
                    )}
                  </div>
                );
              })}
            </div>
            <a
              href={EVENTS_VENUE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex font-inter text-sm text-primary hover:text-white transition-colors"
            >
              Plan an event →
            </a>
          </div>

          <div>
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-white/50 mb-5">Contact</p>
            <div className="space-y-5">
              <p className="font-inter text-sm text-white/85">Austin, TX</p>
              <p className="font-inter text-sm text-white/60">Contact us for details</p>
              {CONTACTS.map((person) => (
                <div key={person.email} className="space-y-1">
                  <p className="font-inter text-xs tracking-widest uppercase text-white/45">{person.label}</p>
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-2 font-inter text-sm text-white/85 hover:text-white break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm"
                  >
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                    {person.email}
                  </a>
                  <a
                    href={`tel:${person.tel}`}
                    className="flex items-center gap-2 font-inter text-sm text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm"
                  >
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                    {person.phone}
                  </a>
                </div>
              ))}
              <p className="font-inter text-xs text-white/50">{ADDRESS}</p>
              <div className="flex items-center gap-4 pt-1">
                <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm">
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-accent/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <p className="font-inter text-xs text-white/50">
              © 2026 Trosky Sports Club · Austin, TX · All rights reserved.
            </p>
            <a
              href={FLUID_BOOKING}
              target="_blank"
              rel="noreferrer"
              className="font-inter text-xs text-white/50 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm"
            >
              Online booking →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
