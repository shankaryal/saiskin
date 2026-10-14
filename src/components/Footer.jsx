import { Mail, Phone, MapPin, Instagram, Facebook, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC, HOURS } from '../constants';
import { allTreatments } from '../treatments.js';

const TikTokIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.67 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V8.87a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.85-.3z" />
  </svg>
);

const QUICK_LINKS = [
  { name: 'Home',       path: '/'          },
  { name: 'Skincare',   path: '/skincare'  },
  { name: 'Price List', path: '/price-list'},
  { name: 'About Us',   path: '/about'     },
  { name: 'Contact',    path: '/contact'   },
];

const POPULAR_TREATMENTS = allTreatments.map(({ title, slug }) => ({ name: title, path: `/treatment/${slug}` }));

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-dark/75 border-t-2 border-gold/40 pt-20 pb-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="col-span-2 md:col-span-3 lg:col-span-4 space-y-7">
            <Link to="/" className="flex items-center gap-3 group" aria-label="Sai Skin and Hair — Home">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/40 shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Sai Skin and Hair logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-dark leading-none">
                  Sai <span className="text-gold">Skin and Hair</span>
                </p>
                <p className="text-[9px] tracking-[0.25em] text-gold/60 font-medium uppercase mt-1">
                  Skin &amp; Hair
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs">
              A welcoming clinic in Rosyth run by Sumi — an award-winning skin specialist who genuinely loves what she does. Come for the results, stay because you feel looked after.
            </p>

            <div className="flex gap-3">
              {[
                { Icon: Instagram,   href: CLINIC.instagram, label: 'Instagram' },
                { Icon: Facebook,    href: CLINIC.facebook,  label: 'Facebook'  },
                { Icon: TikTokIcon,  href: CLINIC.tiktok,    label: 'TikTok'    },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Sai Skin and Hair on ${label}`}
                  className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white text-dark/50 transition-all duration-300"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

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

          <div className="col-span-2 md:col-span-1 lg:col-span-3 space-y-5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Visit Us</h4>

            <address className="not-italic space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {CLINIC.address.line1}<br />
                  {CLINIC.address.line2}<br />
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

            <div className="pt-4 border-t border-gold/20">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-dark/50 mb-3 flex items-center gap-2">
                <Clock size={12} aria-hidden="true" /> Opening Hours
              </h5>
              <ul className="space-y-1.5" role="list">
                {HOURS.map(({ day, time, open }) => (
                  <li key={day} className="flex justify-between gap-4 text-xs">
                    <span className={open ? 'text-dark font-semibold' : 'text-dark/30'}>{day}</span>
                    <span className={open ? 'text-gold font-semibold' : 'text-dark/25 italic'}>{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-5 text-[11px] text-dark/40 tracking-wider uppercase">
          <p>© {year} Sai Skin and Hair. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms"           className="hover:text-gold transition-colors">Terms &amp; Conditions</Link>
          </div>
          <p className="font-serif italic lowercase tracking-normal text-gold/60 normal-case hidden lg:block">
            Redefining Aesthetics
          </p>
        </div>
      </div>
    </footer>
  );
}