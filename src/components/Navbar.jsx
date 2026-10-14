import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { CLINIC } from '../constants';
import { allTreatments } from '../treatments.js';

const TREATMENT_LINKS = allTreatments.map(({ title, slug }) => ({ label: title, slug }));

const NAV_LINKS = [
  { label: 'Home',     to: '/'          },
  { label: 'Skincare', to: '/skincare'  },
  { label: 'Price',    to: '/price-list'},
  { label: 'About',    to: '/about'     },
  { label: 'Contact',  to: '/contact'   },
];

export default function Navbar() {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [dropOpen,     setDropOpen]     = useState(false);
  const [mobileTxOpen, setMobileTxOpen] = useState(false);
  const [scrolled,     setScrolled]     = useState(false);

  const location = useLocation();
  const dropRef  = useRef(null);
  const isHome   = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropOpen(false);
    setMobileTxOpen(false);
  }, [location]);

  const isTreatmentActive =
    location.pathname.startsWith('/treatment/');

  const transparent = isHome && !scrolled && !mobileOpen;

  const navText = (active) =>
    transparent
      ? active ? 'text-gold' : 'text-white/90 hover:text-white'
      : active  ? 'text-gold' : 'text-dark hover:text-gold';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/96 backdrop-blur-md shadow-sm border-b border-cream-dark'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 lg:px-10 flex items-center h-[68px] gap-2"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label=" Sai Skin and Hair — Home"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/images/logo.png"
              alt=" Sai Skin and Hair logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span
              className="font-serif text-xl xl:text-2xl font-semibold leading-none block transition-colors"
              style={{ color: transparent ? '#ffffff' : '#0d0d0d' }}
            >
              Sai <span className="text-gold">Skin and Hair</span>
            </span>
          </div>
        </Link>

        <ul
          className="hidden lg:flex items-center gap-0 xl:gap-1 flex-1 justify-center min-w-0"
          role="list"
        >
          <li>
            <Link
              to="/"
              className={`px-2.5 xl:px-4 py-2 text-sm font-medium transition-colors rounded-lg ${navText(location.pathname === '/')}`}
            >
              Home
            </Link>
          </li>

          <li className="relative" ref={dropRef}>
            <button
              onClick={() => setDropOpen(!dropOpen)}
              className={`flex items-center gap-1 px-2.5 xl:px-4 py-2 text-sm font-medium transition-colors rounded-lg ${navText(isTreatmentActive)}`}
              aria-haspopup="true"
              aria-expanded={dropOpen}
            >
              Treatments
              {dropOpen ? <ChevronUp size={13} strokeWidth={2} /> : <ChevronDown size={13} strokeWidth={2} />}
            </button>

            {dropOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-white shadow-2xl rounded-2xl overflow-hidden z-50 border border-cream-dark">
                <div className="py-1">
                  {TREATMENT_LINKS.map(({ label, slug }) => (
                    <Link
                      key={slug}
                      to={`/treatment/${slug}`}
                      className="block px-5 py-2.5 text-sm font-medium text-dark hover:text-gold hover:bg-cream transition-colors border-b border-cream"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/skincare"
                  className="block px-5 py-4 text-[10px] font-bold tracking-[0.2em] text-gold bg-cream/60 hover:bg-cream transition-colors"
                >
                  VIEW ALL TREATMENTS →
                </Link>
              </div>
            )}
          </li>

          {NAV_LINKS.filter(l => l.label !== 'Home').map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`px-2.5 xl:px-4 py-2 text-sm font-medium transition-colors rounded-lg ${navText(location.pathname === to)}`}
                aria-current={location.pathname === to ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${CLINIC.phone}`}
          className={`hidden xl:flex items-center gap-1.5 text-xs font-medium shrink-0 transition-colors ${
            transparent ? 'text-white/80 hover:text-white' : 'text-muted hover:text-gold'
          }`}
          aria-label={`Call us: ${CLINIC.phone}`}
        >
          <Phone size={13} aria-hidden="true" />
          {CLINIC.phone}
        </a>

        <a
          href={CLINIC.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 xl:px-6 whitespace-nowrap py-2.5 rounded-full transition-all duration-300 shrink-0 ml-2"
          aria-label="Book your free consultation"
        >
          Book Now
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ml-auto p-2 rounded-full transition-colors ${
            mobileOpen
              ? 'bg-gold text-white shadow-md hover:bg-gold-dark'
              : transparent ? 'text-white' : 'text-dark'
          }`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`lg:hidden bg-white border-t border-cream-dark overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <ul className="px-6 py-4 space-y-0" role="list">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              {label === 'Home' && (
                <Link
                  to="/"
                  className={`block py-3.5 text-sm font-semibold border-b border-cream ${
                    location.pathname === '/' ? 'text-gold' : 'text-dark'
                  }`}
                >
                  Home
                </Link>
              )}

              {label === 'Home' && (
                <div className="border-b border-cream">
                  <button
                    onClick={() => setMobileTxOpen(!mobileTxOpen)}
                    className={`w-full flex items-center justify-between py-3.5 text-sm font-semibold ${
                      isTreatmentActive ? 'text-gold' : 'text-dark'
                    }`}
                  >
                    Treatments
                    {mobileTxOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                  {mobileTxOpen && (
                    <ul className="pl-4 pb-3">
                      {TREATMENT_LINKS.map(({ label: tLabel, slug }) => (
                        <li key={slug}>
                          <Link
                            to={`/treatment/${slug}`}
                            className="block py-2 text-sm text-dark hover:text-gold transition-colors"
                          >
                            {tLabel}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link to="/skincare" className="block py-2 text-[11px] font-bold tracking-widest text-gold">
                          VIEW ALL TREATMENTS →
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              )}

              {label !== 'Home' && (
                <Link
                  to={to}
                  className={`block py-3.5 text-sm font-semibold border-b border-cream ${
                    location.pathname === to ? 'text-gold' : 'text-dark'
                  }`}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}

          <li className="pt-3 pb-1">
            <a
              href={`tel:${CLINIC.phone}`}
              className="flex items-center gap-2 text-sm text-muted font-medium"
            >
              <Phone size={15} className="text-gold" aria-hidden="true" />
              {CLINIC.phone}
            </a>
          </li>

          <li className="pt-2 pb-2">
            <a
              href={CLINIC.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gold hover:bg-gold-dark text-white font-semibold py-3 rounded-xl text-sm transition-all"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}