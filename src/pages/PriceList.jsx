import { Clock, Sparkles, ExternalLink } from 'lucide-react';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import { CLINIC } from '../constants';

const CATEGORIES = [
  {
    title: "Laser Hair Removal",
    description: "Soprano Titanium Special Edition — virtually painless, suitable for all skin types.",
    items: [
      { treatment: "Small Area — Lip, Chin or Underarms",           time: "20 min",    price: "£60"  },
      { treatment: "Medium Area — Bikini, Half Arm or Face",       time: "30 min",    price: "£90"  },
      { treatment: "Large Area — Full Legs, Back or Chest",        time: "45 min",    price: "£130" },
    ]
  },
  {
    title: "Advanced Skin Treatments",
    description: "Laser and light-based treatments for rejuvenation, pigmentation and more.",
    items: [
      { treatment: "DYE VL / DYE SVL IPL Session",                 time: "45 min",    price: "£150" },
      { treatment: "ClearLift Laser Facelift",                     time: "60 min",    price: "£180" },
      { treatment: "DermaLux LED Phototherapy",                    time: "30 min",    price: "£55"  },
      { treatment: "Skin Analysis Consultation (Zemits)",          time: "15 min",    price: "FREE" },
    ]
  },
  {
    title: "Facials & Peels",
    description: "CosMedix medical-grade peels and bespoke facials tailored to your skin.",
    items: [
      { treatment: "Bespoke Signature Facial",                     time: "60 min",    price: "£95"  },
      { treatment: "Chemical Peel — Single Session",               time: "45 min",    price: "£85"  },
      { treatment: "Chemical Peel — Course of 6",                  time: "6 sessions",price: "£420", badge: "Save 17%" },
    ]
  }
];

export default function PriceList() {
  return (
    <>
      <PageSEO
        title="Price List | Sai Care Aesthetic Treatments, Rosyth"
        description="Clear, transparent pricing for Sai Care's treatments in Rosyth. Laser Hair Removal from £60, Chemical Peels from £85, ClearLift from £180. Free skin analysis included."
      />

      <PageWrapper>
        <div className="bg-white">
          
          {/* Hero Section - Light Background (#faf6f0) */}
          <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-[#faf6f0]" aria-labelledby="pricing-heading">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Treatment Menu</p>
              <h1 id="pricing-heading" className="font-serif text-4xl md:text-6xl font-semibold mb-8 text-[#0d0d0d]">
                Our Pricing
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light italic font-serif">
                "Premium care and exceptional results with transparent, medical-grade pricing."
              </p>
            </div>
          </section>

          {/* Pricing Categories Section - White Background */}
          <section className="py-16 md:py-24 bg-white" aria-labelledby="categories-heading">
            <div className="max-w-3xl mx-auto px-6">
              <h2 id="categories-heading" className="sr-only">Available Treatments</h2>
              
              <div className="space-y-20">
                {CATEGORIES.map((category, idx) => (
                  <section key={idx} aria-labelledby={`cat-${idx}`}>
                    {/* Category Heading */}
                    <div className="flex items-end gap-5 mb-8 pb-6 border-b border-gray-100">
                      <span className="font-serif text-4xl text-gold/20 font-bold leading-none hidden sm:block" aria-hidden="true">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h2 id={`cat-${idx}`} className="font-serif text-2xl md:text-3xl font-semibold text-[#0d0d0d]">
                          {category.title}
                        </h2>
                        <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="divide-y divide-gray-50">
                      {category.items.map((item, i) => (
                        <div
                          key={i}
                          className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6 hover:bg-[#faf6f0] -mx-4 px-4 rounded-2xl transition-all duration-300"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center flex-wrap gap-3 mb-1.5">
                              <h3 className="text-base md:text-lg font-medium text-[#0d0d0d] group-hover:text-gold transition-colors">
                                {item.treatment}
                              </h3>
                              {item.badge && (
                                <span className="text-[10px] font-bold bg-gold text-white px-3 py-0.5 rounded-full uppercase tracking-widest">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                              <Clock size={14} className="text-gold/60" aria-hidden="true" />
                              <span>{item.time}</span>
                            </div>
                          </div>
                          <div className="sm:text-right shrink-0">
                            <span className={`font-serif text-3xl font-bold ${item.price === 'FREE' ? 'text-gold' : 'text-[#0d0d0d]'}`}>
                              {item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </section>

          {/* Consultation Note Section - Light Background (#faf6f0) */}
          <section className="py-20 md:py-28 bg-[#faf6f0]" aria-labelledby="consultation-heading">
            <div className="max-w-4xl mx-auto px-6">
              <div className="bg-white rounded-[3rem] p-10 md:p-20 text-center shadow-xl shadow-black/5">
                <Sparkles className="text-gold mx-auto mb-6" size={32} aria-hidden="true" />
                <h2 id="consultation-heading" className="font-serif text-3xl md:text-4xl font-semibold text-[#0d0d0d] mb-4">
                  Planning Your Visit?
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-lg mx-auto">
                  All prices are indicative. We recommend a <strong className="text-[#0d0d0d]">Free Skin Analysis</strong> to determine the best treatment course and personalised pricing for your unique skin goals.
                </p>
                <a
                  href={CLINIC.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-12 py-5 rounded-2xl text-base font-semibold transition-all shadow-lg hover:shadow-gold/20"
                >
                  Book Free Consultation <ExternalLink size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

        </div>
      </PageWrapper>
    </>
  );
}