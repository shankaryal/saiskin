import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { CLINIC } from '../constants';

const TREATMENT_LINKS = [
  { label: 'Laser Hair Removal',  slug: 'laser-hair-removal'  },
  { label: 'Chemical Peels',      slug: 'chemical-peels'      },
  { label: 'Bespoke Facials',     slug: 'bespoke-facials'     },
  { label: 'Skin Analyser',       slug: 'skin-analyser'       },
  { label: 'Tattoo Removal',      slug: 'tattoo-removal'      },
  { label: 'iPixel',              slug: 'ipixel'              },
];

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
    location.pathname === '/treatments' ||
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

        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="Sai Skin Care — Home"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/images/logo.png"
              alt="Sai Skin Care logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span
              className="font-serif text-xl lg:text-2xl font-semibold leading-none block transition-colors"
              style={{ color: transparent ? '#ffffff' : '#0d0d0d' }}
            >
              Sai <span className="text-gold">Skin Care</span>
            </span>
            <span
              className="text-[9px] tracking-[0.25em] font-medium uppercase block mt-0.5"
              style={{ color: transparent ? 'rgba(255,255,255,0.6)' : '#a8832a' }}
            >
              Skin &amp; Hair
            </span>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <ul
          className="hidden md:flex items-center gap-0 lg:gap-1 flex-1 justify-center"
          role="list"
        >
          <li>
            <Link
              to="/"
              className={`px-3 lg:px-4 py-2 text-sm font-medium transition-colors rounded-lg ${navText(location.pathname === '/')}`}
            >
              Home
            </Link>
          </li>

          {/* Treatments dropdown */}
          <li className="relative" ref={dropRef}>
            <button
              onClick={() => setDropOpen(!dropOpen)}
              className={`flex items-center gap-1 px-3 lg:px-4 py-2 text-sm font-medium transition-colors rounded-lg ${navText(isTreatmentActive)}`}
              aria-haspopup="true"
              aria-expanded={dropOpen}
            >
              Treatments
              {dropOpen ? <ChevronUp size={13} strokeWidth={2} /> : <ChevronDown size={13} strokeWidth={2} />}
            </button>

            {dropOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-white shadow-2xl rounded-2xl overflow-hidden z-50 border border-cream-dark">
                <Link
                  to="/treatments"
                  className="block px-5 py-4 text-[10px] font-bold tracking-[0.2em] text-gold border-b border-cream hover:bg-cream transition-colors"
                >
                  ALL TREATMENTS
                </Link>
                <div className="py-1">
                  {TREATMENT_LINKS.map(({ label, slug }) => (
                    <Link
                      key={slug}
                      to={`/treatment/${slug}`}
                      className="block px-5 py-3 text-sm font-medium text-dark hover:text-gold hover:bg-cream transition-colors border-b border-cream last:border-b-0"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {NAV_LINKS.filter(l => l.label !== 'Home').map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`px-3 lg:px-4 py-2 text-sm font-medium transition-colors rounded-lg ${navText(location.pathname === to)}`}
                aria-current={location.pathname === to ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Phone (desktop, large only) ── */}
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

        {/* ── Book CTA ── */}
        <a
          href={CLINIC.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center bg-gold hover:bg-gold-dark text-white text-xs lg:text-sm font-semibold px-4 lg:px-6 py-2.5 rounded-full transition-all duration-300 shrink-0 ml-2"
          aria-label="Book your free consultation"
        >
          Book Now
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ml-auto p-1.5 rounded-lg transition-colors ${
            transparent ? 'text-white' : 'text-dark'
          }`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-nav"
        className={`md:hidden bg-white border-t border-cream-dark overflow-hidden transition-all duration-300 ${
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
                      <li>
                        <Link to="/treatments" className="block py-2 text-[11px] font-bold tracking-widest text-gold">
                          ALL TREATMENTS
                        </Link>
                      </li>
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

          {/* Mobile phone */}
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