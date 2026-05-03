import { useState } from 'react';
import { X, Clock, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import useScrollLock from '../hooks/usesScrollLock.js'; 
import { CLINIC } from '../constants';
import { TREATMENTS } from '../treatments.js';

const CATEGORIES = [
  { id: 'All', label: 'All Treatments' },
  { id: 'Skin', label: 'Skin Treatments' },
  { id: 'Laser', label: 'Laser Hair Removal' },
  { id: 'Hair', label: 'Hair & Scalp' },
  { id: 'Packages', label: 'Special Offers' } 
];

export default function TreatmentMenu() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  // 1. Kati wata items dikhaune state (Suru ma 8 wata)
  const [visibleCount, setVisibleCount] = useState(8);

  useScrollLock(!!selectedTreatment);

  // 2. Filter logic + Pagination logic
  const allFiltered = activeFilter === 'All'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeFilter);
  
  // Slice le visibleCount ko aadhar ma items dekhauncha
  const displayedItems = allFiltered.slice(0, visibleCount);
  const hasMore = allFiltered.length > visibleCount;

  // 3. Category change huda items reset garne function
  const handleCategoryChange = (catId) => {
    setActiveFilter(catId);
    setVisibleCount(8); // Reset to 8 when category changes
  };

  return (
    <>
      <PageSEO 
        title="Skincare | Sai Care Skin & Hair Clinic"
        description="Professional skin and laser treatments in Rosyth."
      />

      <PageWrapper>
        <div className="bg-white">
          {/* Hero Section */}
          <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-[#faf6f0]">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-3">Exclusively at Sai Care</p>
              <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-6 text-[#0d0d0d]">
                Professional Skincare
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light italic font-serif">
                "We exclusively use and recommend premium CosMedix clinical skincare."
              </p>
            </div>
          </section>

          {/* Category Menu */}
          <nav className="py-6 bg-white border-b border-gray-50">
            <ul className="flex flex-wrap justify-center gap-2 px-6">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest transition-all ${
                      activeFilter === cat.id 
                        ? 'bg-gold text-white shadow-md' 
                        : 'bg-[#faf6f0] text-gray-500 hover:text-gold'
                    }`}
                  >
                    {cat.label.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Treatment Grid */}
          <section className="py-12 max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {displayedItems.map((item) => (
                <article 
                  key={item.id}
                  onClick={() => setSelectedTreatment(item)}
                  className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
                >
                  <div className="bg-[#faf6f0] aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-[10px] font-bold uppercase tracking-wider">View Details</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-[8px] uppercase tracking-widest text-gold font-bold mb-1">{item.category}</p>
                    <h2 className="font-serif text-sm md:text-base font-semibold mb-1 text-[#0d0d0d] line-clamp-1">
                      {item.name}
                    </h2>
                    <p className="text-xs font-bold text-gray-700">{item.price}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Explore More Button - Fixed Logic */}
            {hasMore && (
              <div className="mt-12 text-center">
                <button 
                  onClick={() => setVisibleCount(prev => prev + 8)}
                  className="inline-flex items-center gap-2 px-10 py-4 bg-white border-2 border-gold text-gold rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300"
                >
                  Explore More <ChevronRight size={14} />
                </button>
              </div>
            )}
          </section>
        </div>
      </PageWrapper>

      {/* Modal Section */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedTreatment(null)} />
          
          <div className="relative bg-white rounded-[2rem] max-w-5xl w-full h-[90vh] md:h-[80vh] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            
            <button onClick={() => setSelectedTreatment(null)} className="absolute top-6 right-6 z-20 bg-white/80 backdrop-blur p-2 rounded-full hover:rotate-90 transition-all shadow-md">
              <X size={20} />
            </button>

            <div className="md:w-[40%] w-full h-[300px] md:h-auto shrink-0 relative overflow-hidden bg-[#faf6f0]">
              <img src={selectedTreatment.image} alt="Treatment" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="bg-white/90 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] text-gold shadow-lg uppercase">Before/After</span>
              </div>
            </div>

            <div className="flex-1 p-8 md:p-14 overflow-y-auto bg-white">
              <div className="max-w-xl">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2">{selectedTreatment.category}</p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-[#0d0d0d] leading-tight">
                  {selectedTreatment.name}
                </h2>
                
                <div className="flex gap-10 mb-10 border-y border-gray-50 py-6">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Price</p>
                    <p className="text-2xl font-bold text-[#0d0d0d]">{selectedTreatment.price}</p>
                  </div>
                  <div className="border-l border-gray-100 pl-10">
                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Duration</p>
                    <p className="text-2xl font-bold text-[#0d0d0d] flex items-center gap-2">
                      <Clock size={20} className="text-gold"/> {selectedTreatment.time}
                    </p>
                  </div>
                </div>

                <div className="space-y-10">
                  <section>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0d0d0d] mb-4 border-l-2 border-gold pl-4">About Treatment</h4>
                    <p className="text-gray-500 leading-relaxed text-[15px]">{selectedTreatment.description}</p>
                  </section>

                  <section className="bg-[#faf6f0] p-6 rounded-2xl border border-gold/5">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#0d0d0d] mb-3">Key Benefits</h4>
                    <p className="text-gray-600 text-sm italic">{selectedTreatment.products}</p>
                  </section>

                  <section>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-gold mb-3 flex items-center gap-2">
                      <CheckCircle2 size={16} /> What to expect
                    </h4>
                    <p className="text-[#0d0d0d] font-medium leading-relaxed">{selectedTreatment.results}</p>
                  </section>

                  <div className="pt-6">
                    <a 
                      href={CLINIC.booking} 
                      target="_blank" 
                      className="block w-full text-center bg-gold text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}