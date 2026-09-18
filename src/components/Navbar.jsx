import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex-shrink-0 leading-none" onClick={() => setOpen(false)}>
          <p className="font-display text-xl md:text-2xl tracking-[0.18em] text-foreground">TROSKY</p>
          <p className="font-inter text-[10px] tracking-[0.28em] uppercase text-muted-foreground mt-0.5">
            Sports Club
          </p>
        </Link>

        <nav className="hidden xl:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-inter text-[12px] tracking-wide whitespace-nowrap transition-colors ${
                  isActive ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact-us"
            className="hidden sm:inline-flex bg-primary text-primary-foreground px-4 py-2.5 font-inter font-bold text-[11px] tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Schedule a Tour
          </Link>
          <button
            type="button"
            className="xl:hidden p-2 text-foreground"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-white border-t border-border px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2.5 font-inter text-sm ${isActive ? 'text-primary font-semibold' : 'text-foreground'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact-us"
            onClick={() => setOpen(false)}
            className="mt-3 sm:hidden inline-flex bg-primary text-primary-foreground px-4 py-3 font-inter font-bold text-xs tracking-wider uppercase rounded-sm"
          >
            Schedule a Tour
          </Link>
        </div>
      )}
    </header>
  );
}
