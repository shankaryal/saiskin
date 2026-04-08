import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);

  const treatmentsList = [
    "Laser Hair Removal", 
    "Chemical Peels", 
    "Bespoke Facials", 
    "Skin Analyser", 
    "Tattoo Removal", 
    "iPixel"
  ];

  const bookingLink = "https://ivmedispa.eu.zenoti.com/webstoreNew";

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md w-full">
      {/* Special Offer Bar */}
      {/* <div className="bg-gold text-black py-2 text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest">
        Indulge in exclusive care – <strong>50% OFF any courses of 6</strong>
      </div> */}

      <nav className="relative max-w-[1440px] mx-auto px-3 sm:px-4 py-3">
        <div className="flex items-center justify-between gap-1">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full overflow-hidden border-2 border-gold shrink-0">
              <img 
                src="/images/logo.png" 
                alt="Sai Care" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-gold leading-tight">
                Sai Care
              </span>
              <span className="text-[6px] sm:text-[8px] md:text-[9px] tracking-wider text-gray-400 uppercase whitespace-nowrap">
                Skin and Hair Care
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-end flex-1 gap-1.5 lg:gap-5 xl:gap-8 text-[10px] lg:text-[13px] xl:text-[15px] font-bold tracking-tight">
            <Link to="/" className="hover:text-gold transition px-1">HOME</Link>

            {/* TREATMENTS DROPDOWN - Fixed Hover Logic */}
            <div 
              className="relative py-3" // This py-3 acts as the bridge so the menu doesn't close
              onMouseEnter={() => setTreatmentsOpen(true)}
              onMouseLeave={() => setTreatmentsOpen(false)}
            >
              <button className="flex items-center gap-0.5 hover:text-gold transition uppercase px-1">
                TREATMENTS 
                <ChevronDown size={10} className={`lg:size-4 transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {treatmentsOpen && (
                <div className="absolute left-0 top-full mt-[-5px] w-52 bg-white text-black shadow-2xl rounded-lg z-50 border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex flex-col py-2">
                    {treatmentsList.map((item, i) => (
                      <Link 
                        key={i}
                        to={`/treatment/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2.5 hover:bg-gray-50 hover:text-gold text-[12px] transition-colors font-semibold"
                        onClick={() => setTreatmentsOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/skincare" className="hover:text-gold transition px-1">SKINCARE</Link>
            <Link to="/price-list" className="hover:text-gold transition px-1 whitespace-nowrap">PRICE LIST</Link>
            <Link to="/about" className="hover:text-gold transition px-1 whitespace-nowrap">ABOUT US</Link>
            <Link to="/contact" className="hover:text-gold transition px-1">CONTACT</Link>

            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <button className="bg-gold hover:bg-white hover:text-black text-black px-2.5 py-2 lg:px-5 lg:py-3 rounded-lg font-extrabold text-[10px] lg:text-[13px] transition-all whitespace-nowrap">
                Book Appointment
              </button>
            </a>
          </div>

          {/* Hamburger Icon */}
          <button 
            className="md:hidden p-1 text-gold shrink-0" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 shadow-2xl z-50 md:hidden">
            <div className="flex flex-col p-6 gap-4 text-center font-bold text-[13px] tracking-widest uppercase">
              
              <Link to="/" onClick={() => setMobileOpen(false)} className="py-2 border-b border-gray-900 hover:text-gold transition-colors">HOME</Link>

              {/* Mobile Treatments Dropdown */}
              <div>
                <button 
                  onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                  className="w-full py-2 border-b border-gray-900 flex items-center justify-center gap-2 hover:text-gold transition-colors"
                >
                  TREATMENTS
                  {mobileTreatmentsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {mobileTreatmentsOpen && (
                  <div className="flex flex-col bg-gray-950/50 mt-1 rounded-lg overflow-hidden">
                    {treatmentsList.map((item, i) => (
                      <Link 
                        key={i}
                        to={`/treatment/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileTreatmentsOpen(false);
                        }}
                        className="block px-6 py-4 text-sm font-medium hover:bg-gray-900 hover:text-gold transition-colors border-b border-gray-800 last:border-none"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/skincare" onClick={() => setMobileOpen(false)} className="py-2 border-b border-gray-900 hover:text-gold transition-colors">SKINCARE</Link>
              <Link to="/price-list" onClick={() => setMobileOpen(false)} className="py-2 border-b border-gray-900 hover:text-gold transition-colors">PRICE LIST</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="py-2 border-b border-gray-900 hover:text-gold transition-colors">ABOUT US</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="py-2 border-b border-gray-900 hover:text-gold transition-colors">CONTACT</Link>

              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gold text-black py-4 rounded-lg font-black mt-4 shadow-lg">
                  BOOK APPOINTMENT
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}