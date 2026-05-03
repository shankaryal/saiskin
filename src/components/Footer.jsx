import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC, HOURS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Skincare', path: '/skincare' },
    { name: 'Price', path: '/price-list' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const popularTreatments = [
    { name: 'Laser Hair Removal', path: '/treatment/laser-hair-removal' },
    { name: 'Chemical Peels', path: '/treatment/chemical-peels' },
    { name: 'Bespoke Facials', path: '/treatment/bespoke-facials' },
    { name: 'Skin Analyser', path: '/treatment/skin-analyser-zemits' },
  ];

  return (
    <footer className="bg-[#faf6f0] text-dark pt-20 pb-10 border-t border-gray-100" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Identity */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-gold/30 p-1 bg-white">
                <img 
                  src="images/logo.png" 
                  alt="Sai Care Clinic Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <div className="text-3xl font-serif font-bold tracking-tight text-dark">
                  Sai<span className="text-gold">Care</span>
                </div>
                <p className="text-[10px] tracking-[0.3em] text-gray-500 font-bold uppercase">Skin & Hair Clinic</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed max-w-sm text-sm">
              Premium aesthetic clinic in Rosyth, Dunfermline. We revolutionise your skin and hair journey using advanced FDA-approved technology and personalised care.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' }
              ].map(({ Icon, href, label }) => (
                <a 
                  key={label} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Sai Care on ${label}`}
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 bg-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav className="lg:col-span-2 space-y-6" aria-label="Quick links">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Explore</h4>
            <ul className="space-y-4" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted hover:text-gold transition-colors flex items-center group text-sm">
                    {link.name}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Treatments */}
          <nav className="lg:col-span-3 space-y-6" aria-label="Treatments">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Treatments</h4>
            <ul className="space-y-4" role="list">
              {popularTreatments.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-muted hover:text-gold transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Hours */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Visit Us</h4>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-muted">
                  {CLINIC.address.line1}, {CLINIC.address.city}<br />
                  {CLINIC.address.postcode}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" aria-hidden="true" />
                <a href={`tel:${CLINIC.phone}`} className="text-sm text-muted hover:text-gold transition-colors">
                  {CLINIC.phone}
                </a>
              </div>
            </address>
{/* 
            <div className="pt-4 border-t border-gold/10">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.1em] text-dark mb-3 flex items-center gap-2">
                <Clock size={13} /> Opening Hours
              </h5>
              <ul className="space-y-1.5" role="list">
                {HOURS.map(({ day, time, open }) => (
                  <li key={day} className="flex justify-between text-[12px] gap-4">
                    <span className={open ? 'text-dark font-medium' : 'text-gray-400'}>{day}</span>
                    <span className={open ? 'text-muted' : 'text-gray-300 italic'}>{time}</span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-gray-500 tracking-widest uppercase">
          <p>© {currentYear} Sai Care. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link>
          </div>
          <p className="italic hidden lg:block font-serif lowercase tracking-normal text-gold/60">Redefining Aesthetics</p>
        </div>

      </div>
    </footer>
  );
}