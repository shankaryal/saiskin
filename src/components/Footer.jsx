import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Skincare', path: '/skincare' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const treatments = [
    { name: 'Laser Hair Removal', path: '/treatments' },
    { name: 'Chemical Peels', path: '/treatments' },
    { name: 'Bespoke Facials', path: '/treatments' },
    { name: 'Skin Analyser', path: '/treatments' },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-gold/30 p-1">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Sai Care" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tighter text-gold italic">Sai Care</div>
                <div className="text-[10px] tracking-[0.3em] text-gray-500 font-bold uppercase">Skin & Hair Care</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Revolutionising the aesthetic industry with cutting-edge technology and personalised care for your skin and hair journey.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold">Explore</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    {link.name}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold">Treatments</h4>
            <ul className="space-y-4">
              {treatments.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold">Visit Our Clinic</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                <p>195 Queensferry Rd, Rosyth, Dunfermline, KY11 2JH</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <p>+44 131 123 4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <p>info@saicare.com</p>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://ivmedispa.eu.zenoti.com/webstoreNew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-white text-black font-bold py-4 rounded-xl hover:bg-gold transition-colors duration-300"
              >
                BOOK CONSULTATION
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-gray-500 tracking-widest uppercase">
          <p>© {currentYear} Sai Care. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms & Conditions</a>
          </div>
          <p className="italic">Designed for Excellence</p>
        </div>

      </div>
    </footer>
  );
}