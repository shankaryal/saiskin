import { Mail, Phone, MapPin, Instagram, Facebook, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC, HOURS } from '../constants';

const QUICK_LINKS = [
  { name: 'Home',       path: '/'          },
  { name: 'Treatments', path: '/treatments'},
  { name: 'Skincare',   path: '/skincare'  },
  { name: 'Price List', path: '/price-list'},
  { name: 'About Us',   path: '/about'     },
  { name: 'Contact',    path: '/contact'   },
];

const POPULAR_TREATMENTS = [
  { name: 'Laser Hair Removal', path: '/treatment/laser-hair-removal' },
  { name: 'Chemical Peels',     path: '/treatment/chemical-peels'     },
  { name: 'Bespoke Facials',    path: '/treatment/bespoke-facials'    },
  { name: 'Skin Analyser',      path: '/treatment/skin-analyser'      },
  { name: 'ClearLift',          path: '/treatment/clear-lift'         },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-cream/70 pt-20 pb-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 space-y-7">
            <Link to="/" className="flex items-center gap-3 group" aria-label="Sai Skin Care — Home">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/40 shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Sai Skin Care logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-cream leading-none">
                  Sai <span className="text-gold">Skin Care</span>
                </p>
                <p className="text-[9px] tracking-[0.25em] text-gold/60 font-medium uppercase mt-1">
                  Skin &amp; Hair
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs">
              Premium aesthetic clinic in Rosyth, Dunfermline — delivering advanced, evidence-based skin and hair treatments using FDA-approved technology.
            </p>

            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: CLINIC.instagram, label: 'Instagram' },
                { Icon: Facebook,  href: CLINIC.facebook,  label: 'Facebook'  },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Sai Skin Care on ${label}`}
                  className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white text-cream/50 transition-all duration-300"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav className="lg:col-span-2 space-y-5" aria-label="Quick links">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Explore</h4>
            <ul className="space-y-3" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-gold transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={13}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-all"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Treatments */}
          <nav className="lg:col-span-3 space-y-5" aria-label="Popular treatments">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Treatments</h4>
            <ul className="space-y-3" role="list">
              {POPULAR_TREATMENTS.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm hover:text-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + Hours */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 space-y-5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Visit Us</h4>

            <address className="not-italic space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {CLINIC.address.line1}<br />
                  {CLINIC.address.city}<br />
                  {CLINIC.address.postcode}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-gold shrink-0" aria-hidden="true" />
                <a href={`tel:${CLINIC.phone}`} className="hover:text-gold transition-colors">
                  {CLINIC.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-gold shrink-0" aria-hidden="true" />
                <a href={`mailto:${CLINIC.email}`} className="hover:text-gold transition-colors break-all">
                  {CLINIC.email}
                </a>
              </div>
            </address>

            {/* Opening Hours */}
            <div className="pt-4 border-t border-cream/10">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-cream/50 mb-3 flex items-center gap-2">
                <Clock size={12} aria-hidden="true" /> Opening Hours
              </h5>
              <ul className="space-y-1.5" role="list">
                {HOURS.map(({ day, time, open }) => (
                  <li key={day} className="flex justify-between gap-4 text-xs">
                    <span className={open ? 'text-cream/80 font-medium' : 'text-cream/30'}>{day}</span>
                    <span className={open ? 'text-cream/60' : 'text-cream/25 italic'}>{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-5 text-[11px] text-cream/30 tracking-wider uppercase">
          <p>© {year} Sai Skin Care. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms"           className="hover:text-gold transition-colors">Terms &amp; Conditions</Link>
          </div>
          <p className="font-serif italic lowercase tracking-normal text-gold/40 normal-case hidden lg:block">
            Redefining Aesthetics
          </p>
        </div>
      </div>
    </footer>
  );
}