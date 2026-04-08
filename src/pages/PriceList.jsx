import React from 'react';
import { Clock, Sparkles, ExternalLink, ChevronRight } from 'lucide-react';

export default function PriceList() {
  // Categorised data with durations for a premium menu feel
  const categories = [
    {
      title: "Laser Hair Removal",
      items: [
        { treatment: "Small Area (Lip, Chin, or Underarms)", time: "20 mins", price: "£60" },
        { treatment: "Medium Area (Bikini, Half Arm, or Face)", time: "30 mins", price: "£90" },
        { treatment: "Large Area (Full Legs, Back, or Chest)", time: "45 mins", price: "£130" },
      ]
    },
    {
      title: "Advanced Skin Treatments",
      items: [
        { treatment: "DYE VL / DYE SVL IPL Session", time: "45 mins", price: "£150" },
        { treatment: "Clear Lift Laser Facelift", time: "60 mins", price: "£180" },
        { treatment: "DermaLux LED Phototherapy", time: "30 mins", price: "£55" },
        { treatment: "Skin Analysis Consultation (Zemits)", time: "15 mins", price: "FREE" },
      ]
    },
    {
      title: "Facials & Peels",
      items: [
        { treatment: "Bespoke Signature Facial", time: "60 mins", price: "£95" },
        { treatment: "Chemical Peel (Single Session)", time: "45 mins", price: "£85" },
        { treatment: "Chemical Peel (Course of 6)", time: "6 sessions", price: "£420", discount: "50% OFF" },
      ]
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white font-sans selection:bg-gold/30">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <Sparkles className="text-gold animate-pulse" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900 italic tracking-tight">
            Treatment Menu
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
              Premium Care • Exceptional Results
            </p>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
        </header>

        {/* Pricing Categories */}
        <div className="space-y-24">
          {categories.map((category, idx) => (
            <section key={idx} className="relative">
              <div className="flex items-center gap-6 mb-10">
                <span className="text-gold font-serif italic text-2xl md:text-3xl opacity-50">
                  {`0${idx + 1}`}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
                  {category.title}
                </h2>
                <div className="flex-1 h-[1px] bg-zinc-100"></div>
              </div>

              <div className="space-y-10">
                {category.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="group flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-50 pb-8 hover:border-gold/40 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex items-center flex-wrap gap-3 mb-2">
                        <h3 className="text-lg md:text-xl font-semibold text-zinc-800 group-hover:text-gold transition-colors">
                          {item.treatment}
                        </h3>
                        {item.discount && (
                          <span className="bg-gold text-black text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">
                            {item.discount}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm gap-2 font-medium">
                        <Clock size={14} className="text-gold/70" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tighter">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Note Section - Fixed Visibility */}
        <div className="mt-28 p-10 md:p-16 bg-zinc-50 rounded-[3rem] text-center border border-zinc-100 relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <h4 className="font-bold text-zinc-900 mb-4 text-2xl italic">Planning your visit?</h4>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto font-light">
            All prices are indicative. We highly recommend a <span className="text-zinc-900 font-bold border-b-2 border-gold/40">Free Skin Analysis</span> to determine the best treatment course and personalised package pricing for you.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://ivmedispa.eu.zenoti.com/webstoreNew" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-zinc-900 text-white hover:bg-black px-12 py-6 rounded-2xl font-bold transition-all duration-300 shadow-2xl shadow-zinc-400/20 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Free Consultation 
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gold translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              <style jsx>{`
                .group:hover span { color: black; }
              `}</style>
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
}