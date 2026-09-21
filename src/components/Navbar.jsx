import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { MORE_LINKS, NAV_LINKS } from '@/lib/constants';

const linkClass = ({ isActive }) =>
  `font-inter text-[12px] tracking-wide whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c] rounded-sm ${
    isActive ? 'text-primary font-semibold' : 'text-white/80 hover:text-primary'
  }`;

function NavItem({ link, onClick, className }) {
  if (link.href) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={className}
        aria-label={`${link.label} (opens in a new tab)`}
      >
        {link.label}
      </a>
    );
  }

  return (
    <NavLink to={link.to} end={link.to === '/'} onClick={onClick} className={linkClass}>
      {link.label}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const menuId = useId();
  const moreId = useId();
  const menuButtonRef = useRef(null);
  const moreButtonRef = useRef(null);
  const panelRef = useRef(null);
  const morePanelRef = useRef(null);

  const closeMobile = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };

  const closeMore = (returnFocus = true) => {
    setMoreOpen(false);
    if (returnFocus) moreButtonRef.current?.focus();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (open) {
        e.preventDefault();
        closeMobile();
      } else if (moreOpen) {
        e.preventDefault();
        closeMore(true);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, moreOpen]);

  useEffect(() => {
    if (open) {
      const first = panelRef.current?.querySelector('a, button');
      first?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (moreOpen) {
      const first = morePanelRef.current?.querySelector('a');
      first?.focus();
    }
  }, [moreOpen]);

  useEffect(() => {
    const onClick = (e) => {
      if (!moreOpen) return;
      if (
        morePanelRef.current &&
        !morePanelRef.current.contains(e.target) &&
        !moreButtonRef.current?.contains(e.target)
      ) {
        closeMore(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [moreOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#090a0c]/95 text-white backdrop-blur-sm border-b border-accent/60">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 lg:h-20 flex items-center justify-between gap-3">
        <Link
          to="/"
          className="flex-shrink-0 leading-none rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c]"
          onClick={() => setOpen(false)}
        >
          <img
            src="/trosky-sports-club-logo.png"
            alt="Trosky Sports Club"
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-4" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              className="font-inter text-[12px] tracking-wide whitespace-nowrap text-white/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c] rounded-sm"
            />
          ))}
          <div className="relative">
            <button
              type="button"
              ref={moreButtonRef}
              className="inline-flex items-center gap-1 font-inter text-[12px] tracking-wide text-white/80 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c] rounded-sm"
              aria-expanded={moreOpen}
              aria-controls={moreId}
              aria-haspopup="true"
              onClick={() => setMoreOpen((v) => !v)}
            >
              More <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            {moreOpen && (
              <div
                id={moreId}
                ref={morePanelRef}
                className="absolute right-0 mt-3 min-w-[180px] bg-[#15171a] border border-white/10 rounded-md shadow-lg py-2"
              >
                {MORE_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => closeMore(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 font-inter text-sm focus-visible:outline-none focus-visible:bg-white/10 ${
                        isActive ? 'text-primary font-semibold' : 'text-white/85 hover:bg-white/10'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact-us"
            className="hidden sm:inline-flex bg-primary text-primary-foreground px-4 py-2.5 font-inter font-bold text-[11px] tracking-wider uppercase rounded-sm hover:bg-[#ff6d27] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c]"
          >
            Schedule a Tour
          </Link>
          <button
            type="button"
            ref={menuButtonRef}
            className="lg:hidden p-2 text-white rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c]"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id={menuId}
          ref={panelRef}
          className="lg:hidden bg-[#090a0c] border-t border-white/10 px-6 py-4 space-y-1"
        >
          {[...NAV_LINKS, ...MORE_LINKS].map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobile}
                className="block py-2.5 font-inter text-sm text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                aria-label={`${link.label} (opens in a new tab)`}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `block py-2.5 font-inter text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                    isActive ? 'text-primary font-semibold' : 'text-white/90'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
          <Link
            to="/contact-us"
            onClick={closeMobile}
            className="mt-3 sm:hidden inline-flex bg-primary text-primary-foreground px-4 py-3 font-inter font-bold text-xs tracking-wider uppercase rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c] focus-visible:ring-primary"
          >
            Schedule a Tour
          </Link>
        </div>
      )}
    </header>
  );
}
