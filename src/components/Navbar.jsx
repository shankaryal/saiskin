import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronUp, ChevronDown } from 'lucide-react';
import { CLINIC } from '../constants';

const TREATMENT_LINKS = [
  { label: 'Laser Hair Removal',  slug: 'laser-hair-removal'   },
  { label: 'Chemical Peels',      slug: 'chemical-peels'       },
  { label: 'Bespoke Facials',     slug: 'bespoke-facials'      },
  { label: 'Skin Analyser',       slug: 'skin-analyser-zemits' },
  { label: 'Tattoo Removal',      slug: 'tattoo-removal'       },
  { label: 'iPixel',              slug: 'ipixel'               },
];

const NAV_LINKS = [
  { label: 'Home',      to: '/'      },
  { label: 'Skincare',  to: '/skincare'   },
  { label: 'Price List', to: '/price-list' },
  { label: 'About',      to: '/about'      },
  { label: 'Contact',    to: '/contact'    },
];

export default function Navbar() {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [dropOpen,     setDropOpen]     = useState(false);
  const [mobileTxOpen, setMobileTxOpen] = useState(false);
  const [scrolled,     setScrolled]     = useState(false);

  const location = useLocation();
  const dropRef  = useRef(null);
  const isHome   = location.pathname === '/';

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* close everything on route change */
  useEffect(() => {
    setMobileOpen(false);
    setDropOpen(false);
    setMobileTxOpen(false);
  }, [location]);

  const isTreatmentActive =
    location.pathname === '/treatments' ||
    location.pathname.startsWith('/treatment/');

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center h-[68px]" aria-label="Main navigation">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 shrink-0 group"
          aria-label="Sai Care Home"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold shrink-0 transition-transform group-hover:scale-105">
            <img 
              src="/images/logo.png" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <span 
            className="font-serif text-2xl font-semibold transition-colors"
            style={{ color: transparent ? '#ffffff' : '#0d0d0d' }}
          >
            Sai<span className="text-gold">Care</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center" role="list">
          
          <li>
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                transparent
                  ? location.pathname === '/' ? 'text-gold' : 'text-white/90 hover:text-white'
                  : location.pathname === '/' ? 'text-gold' : 'text-[#0d0d0d] hover:text-gold'
              }`}
            >
              Home
            </Link>
          </li>

          <li className="relative" ref={dropRef}>
            <button
              onClick={() => setDropOpen(!dropOpen)}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                transparent
                  ? isTreatmentActive ? 'text-gold' : 'text-white/90 hover:text-white'
                  : isTreatmentActive ? 'text-gold'  : 'text-[#0d0d0d] hover:text-gold'
              }`}
              aria-haspopup="true"
              aria-expanded={dropOpen}
            >
              Treatments
              {dropOpen
                ? <ChevronUp  size={14} strokeWidth={2} />
                : <ChevronDown size={14} strokeWidth={2} />}
            </button>

            {dropOpen && (
              <div className="absolute top-full -left-0 mt-2 w-64 bg-white shadow-2xl rounded-2xl overflow-hidden z-50 border border-gray-100 transform -translate-x-1/4">
                <Link
                  to="/treatments"
                  className="block px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-gold border-b border-gray-100 hover:bg-[#faf6f0] transition-colors"
                >
                  ALL TREATMENTS
                </Link>
                <div className="py-1">
                  {TREATMENT_LINKS.map(({ label, slug }) => (
                    <Link
                      key={slug}
                      to={`/treatment/${slug}`}
                      className="block px-6 py-3 text-sm font-medium text-[#0d0d0d] hover:text-gold hover:bg-[#faf6f0] transition-colors border-b border-gray-50 last:border-b-0"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {NAV_LINKS.filter(link => link.label !== 'Home').map(({ label, to }) => {
            const active = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    transparent
                      ? active ? 'text-gold' : 'text-white/90 hover:text-white'
                      : active ? 'text-gold'  : 'text-[#0d0d0d] hover:text-gold'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Book CTA */}
        <a
          href={CLINIC.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shrink-0 ml-6"
          aria-label="Book your free consultation"
        >
          Book Free Consult
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ml-auto p-1.5 rounded-lg transition-colors ${transparent ? 'text-white' : 'text-[#0d0d0d]'}`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <ul className="px-6 py-4 space-y-0" role="list">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              {label === 'Home' && (
                <Link
                  to="/"
                  className={`block py-3.5 text-sm font-semibold border-b border-gray-50 ${
                    location.pathname === '/' ? 'text-gold' : 'text-[#0d0d0d]'
                  }`}
                >
                  Home
                </Link>
              )}

              {label === 'Home' && (
                <div className="border-b border-gray-50">
                  <button
                    onClick={() => setMobileTxOpen(!mobileTxOpen)}
                    className={`w-full flex items-center justify-between py-3.5 text-sm font-semibold ${
                      isTreatmentActive ? 'text-gold' : 'text-[#0d0d0d]'
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
                            className="block py-2 text-sm text-[#0d0d0d] hover:text-gold transition-colors"
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
                  className={`block py-3.5 text-sm font-semibold border-b border-gray-50 ${
                    location.pathname === to ? 'text-gold' : 'text-[#0d0d0d]'
                  }`}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}

          <li className="pt-4 pb-2">
            <a
              href={CLINIC.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gold hover:bg-gold-dark text-white font-semibold py-3 rounded-xl text-sm transition-all"
            >
              Book Free Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}