import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { EVENTS_VENUE_URL, EVENTS_INQUIRY_URL } from '@/lib/constants';

const navLinks = [
  { label: 'Private Events', href: EVENTS_VENUE_URL, isExternal: true },
  { label: 'Home', href: '/', isPage: true },
  { label: 'Facility', href: '#facility' },
  { label: 'Passes / Memberships', href: '#daypass' },
  { label: 'Reservations', href: '/reservations', isPage: true },
  { label: 'Coaches', href: '/coaches', isPage: true },
  { label: 'Partner With Trosky', href: '/partner-with-trosky', isPage: true },
];

const aboutLinks = [
  { label: 'Our Story', href: '/our-story', isPage: true },
  { label: 'Partners', href: '/partners', isPage: true },
  { label: 'Policies', href: '/policies', isPage: true },
  { label: 'FAQs', href: '/contact-us', isPage: true },
  { label: 'Contact', href: '/contact-us', isPage: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const aboutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isLightPage = location.pathname !== '/';

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') { setMobileOpen(false); setAboutOpen(false); setMobileAboutOpen(false); }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => { setMobileOpen(false); setAboutOpen(false); setMobileAboutOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAnchorClick = (href) => {
    setMobileOpen(false);
    setAboutOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 300);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkClass = `text-xs font-inter font-semibold tracking-wide transition-colors duration-300 hover:opacity-70 ${(scrolled || isLightPage || mobileOpen) ? 'text-foreground' : 'text-white/90'}`;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        (scrolled || isLightPage || mobileOpen) ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="/trosky-sports-club-logo.png"
                alt="Trosky Sports Club"
                className="h-24 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-3">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {link.label}
                  </a>
                ) : link.isPage ? (
                  <Link key={link.href} to={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                ) : (
                  <button key={link.href} onClick={() => handleAnchorClick(link.href)} className={linkClass}>
                    {link.label}
                  </button>
                )
              ))}

              {/* About Dropdown */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  aria-expanded={aboutOpen}
                  className={`flex items-center gap-1 ${linkClass}`}
                >
                  About <ChevronDown className={`w-3 h-3 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-white border border-border rounded-sm shadow-lg overflow-hidden"
                    >
                      {aboutLinks.map((link) => (
                        link.isPage ? (
                          <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => setAboutOpen(false)}
                            className="block px-4 py-3 font-inter text-sm text-foreground hover:bg-secondary transition-colors"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <button
                            key={link.href}
                            onClick={() => handleAnchorClick(link.href)}
                            className="block w-full text-left px-4 py-3 font-inter text-sm text-foreground hover:bg-secondary transition-colors"
                          >
                            {link.label}
                          </button>
                        )
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href={EVENTS_INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff5a1f] text-[#111315] px-5 py-2.5 text-xs font-inter font-bold tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
              >
                Plan Your Event
              </a>
            </div>

            <a href={EVENTS_INQUIRY_URL} className="hidden sm:inline-flex xl:hidden event-button bg-[#ff5a1f] text-[#111315] ml-auto mr-5">Plan Your Event</a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className={`xl:hidden transition-colors ${(scrolled || isLightPage || mobileOpen) ? 'text-foreground' : 'text-white'}`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="mobile-navigation"
            className="fixed inset-0 z-40 bg-white pt-28 pb-10 px-6 xl:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="text-xl font-inter font-semibold text-foreground text-left border-b border-border py-4 block"
                  >
                    {link.label}
                  </a>
                ) : link.isPage ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xl font-inter font-semibold text-foreground text-left border-b border-border py-4"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleAnchorClick(link.href)}
                    className="text-xl font-inter font-semibold text-foreground text-left border-b border-border py-4"
                  >
                    {link.label}
                  </button>
                )
              ))}

              {/* Mobile About Accordion */}
              <div className="border-b border-border py-4">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  aria-expanded={mobileAboutOpen}
                  className="flex items-center justify-between w-full text-xl font-inter font-semibold text-foreground"
                >
                  About <ChevronDown className={`w-5 h-5 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3 pt-4 pl-4">
                        {aboutLinks.map((link) => (
                          link.isPage ? (
                            <Link
                              key={link.href}
                              to={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-base font-inter font-medium text-muted-foreground"
                            >
                              {link.label}
                            </Link>
                          ) : (
                            <button
                              key={link.href}
                              onClick={() => handleAnchorClick(link.href)}
                              className="text-base font-inter font-medium text-muted-foreground text-left"
                            >
                              {link.label}
                            </button>
                          )
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href={EVENTS_INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="bg-[#ff5a1f] text-[#111315] px-6 py-4 text-sm font-inter font-bold tracking-wider uppercase rounded-sm w-full mt-4 block text-center"
              >
                Plan Your Event
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
