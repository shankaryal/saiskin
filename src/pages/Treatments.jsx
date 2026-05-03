import { useState } from 'react';
import { X, Clock, Tag,} from 'lucide-react';
import TreatmentCard from '../components/Treatmentcard.jsx';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import useScrollLock from '../hooks/usesScrollLock.js';
import { CLINIC } from '../constants';

export const allTreatments = [
  {
    title: "Laser Hair Removal",
    shortDesc: "Soprano Titanium Special Edition — virtually painless hair removal on all skin types, year-round.",
    fullDesc: "Soprano Titanium Special Edition combines ultimate functionality with ICE cold comfort for smarter, faster and virtually painless hair removal on all skin types. Suitable for all skin tones and most hair colours, it is the gold standard in permanent hair reduction.",
    slug: "laser-hair-removal",
    image: "/images/laser.jpg",
    duration: "30–60 min",
    price: "From £60",
  },
  {
    title: "DYE SVL & DYE VL IPL",
    shortDesc: "Harmony XL Pro Special Edition IPL for vascular and pigmented lesion treatment.",
    fullDesc: "Harmony XL Pro Special Edition IPL uses narrow-spectrum wavelengths to treat broad areas of vascular and pigmented lesions. Highly effective for rosacea, thread veins, age spots and sun damage.",
    slug: "dye-svl-dye-vl-ipl",
    image: "/images/dye.jpg",
    duration: "30–45 min",
    price: "From £150",
  },
  {
    title: "Chemical Peels",
    shortDesc: "Pure, non-irritating medical-grade peels safe enough to be repeated for any skin concern.",
    fullDesc: "We use only the purest, non-irritating medical-grade CosMedix peels that are safe enough to be repeated as needed to address any skin concern — from fine lines and hyperpigmentation to acne and uneven texture.",
    slug: "chemical-peels",
    image: "/images/chemical.jpg",
    duration: "45 min",
    price: "From £85",
  },
  {
    title: "DermaLux Tri-Wave MD",
    shortDesc: "Award-winning LED phototherapy to replenish, rejuvenate and repair your skin.",
    fullDesc: "Replenish, rejuvenate and repair your skin with this relaxing, clinically proven light treatment. DermaLux Tri-Wave MD delivers an instant radiance boost, reduces inflammation and accelerates healing for all skin types.",
    slug: "dermalux-tri-wave-md",
    image: "/images/dermalux.png",
    duration: "30 min",
    price: "From £55",
  },
  {
    title: "Bespoke Facials",
    shortDesc: "Thorough deep cleanse, gentle exfoliation and personalised treatment for your skin type.",
    fullDesc: "Our bespoke facial includes a thorough deep cleanse, gentle exfoliation, and the use of a facial steamer to open pores. Every facial is tailored to your individual skin concerns and goals using professional CosMedix products.",
    slug: "bespoke-facials",
    image: "/images/facial.jpg",
    duration: "60 min",
    price: "From £95",
  },
  {
    title: "Skin Analyser (Zemits)",
    shortDesc: "Advanced multi-spectrum skin analysis for accurate diagnosis and personalised treatment plans.",
    fullDesc: "Aesthetic consultations with Zemits Skin Analysis Technology use multi-spectrum imaging to provide accurate diagnosis and personalised treatment plans. Included free with any new client consultation.",
    slug: "skin-analyser-zemits",
    image: "/images/analysis.png",
    duration: "15 min",
    price: "FREE",
  },
  {
    title: "ClearLift",
    shortDesc: "Award-winning non-ablative laser facelift — the 'lunchtime' rejuvenation treatment.",
    fullDesc: "ClearLift is the most popular Harmony XL Pro treatment — award-winning and repeatedly viral on social media. Known as the lunchtime facelift, it delivers controlled dermal remodelling with zero downtime, tightening skin and reducing fine lines.",
    slug: "clear-lift",
    image: "/images/clearlift.png",
    duration: "60 min",
    price: "From £180",
  },
  {
    title: "ClearSkin",
    shortDesc: "Award-winning laser treatment targeting acne, oiliness and skin rejuvenation.",
    fullDesc: "ClearSkin is an award-winning laser treatment designed to treat oily skin and all forms of acne — including active breakouts, post-acne scarring and enlarged pores — whilst also delivering a gentle skin rejuvenating effect.",
    slug: "clear-skin",
    image: "/images/clear_skin.png",
    duration: "45 min",
    price: "POA",
  },
  {
    title: "Tattoo Removal",
    shortDesc: "Safe, precise laser tattoo removal for all ink colours on all skin types.",
    fullDesc: "Our laser tattoo removal treatments offer a safe and precise solution for erasing unwanted tattoos. Using advanced Q-switched laser technology, we target ink particles of all colours with minimal risk to the surrounding skin.",
    slug: "tattoo-removal",
    image: "/images/Tattoo-removal.jpg",
    duration: "15–30 min",
    price: "POA",
  },
  {
    title: "iPixel",
    shortDesc: "Fractional Erbium YAG laser resurfacing for scars, wrinkles and skin texture.",
    fullDesc: "The iPixel is a highly effective fractional ablative skin resurfacing treatment using an Erbium YAG laser at 2940nm wavelength. It dramatically improves acne scars, surgical scars, fine lines, wrinkles and overall skin texture.",
    slug: "ipixel",
    image: "/images/ipixel.jpg",
    duration: "60 min",
    price: "POA",
  },
];

export const featuredTreatments = allTreatments.slice(0, 3);

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  useScrollLock(!!selectedTreatment);

  const closeModal = () => setSelectedTreatment(null);

  return (
    <>
      <PageSEO
        title="Treatments | Sai Care Skin & Hair Clinic"
        description="Explore our full range of advanced aesthetic treatments at Sai Care Rosyth: Laser Hair Removal, ClearLift, ClearSkin, iPixel, Chemical Peels, DermaLux and more."
      />

      <PageWrapper>
        <div className="bg-white">
          
          {/* Hero Section - Light Background (#faf6f0) */}
          <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-[#faf6f0]" aria-labelledby="treatments-heading">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Our Services</p>
              <h1 id="treatments-heading" className="font-serif text-4xl md:text-6xl font-semibold mb-8 text-[#0d0d0d]">
                Advanced Treatments
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light italic font-serif">
                "Harnessing FDA-approved technology to deliver clinical excellence and personalised results."
              </p>
            </div>
          </section>

          {/* Treatment Grid Section - White Background */}
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allTreatments.map((treatment, i) => (
                  <TreatmentCard
                    key={i}
                    treatment={treatment}
                    onMoreInfo={() => setSelectedTreatment(treatment)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Consultation CTA Section - Light Background (#faf6f0) */}
          <section className="py-24 md:py-32 text-center bg-[#faf6f0]" aria-labelledby="cta-heading">
            <div className="max-w-2xl mx-auto px-6">
              <h2 id="cta-heading" className="font-serif text-3xl md:text-5xl font-semibold text-[#0d0d0d] mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-gray-500 mb-12 leading-relaxed text-lg">
                Book a free consultation today. Our specialists will provide a thorough skin analysis and recommend the most effective treatment plan for your goals.
              </p>
              <a
                href={CLINIC.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-10 py-5 rounded-2xl text-base font-semibold transition-all shadow-lg hover:shadow-gold/20"
              >
                Book Your Free Consultation 
              </a>
            </div>
          </section>
        </div>
      </PageWrapper>

      {/* Modal */}
      {selectedTreatment && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tx-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-[2.5rem] max-w-xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="relative h-72 shrink-0">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#0d0d0d] rounded-full p-2 shadow-lg transition-all hover:rotate-90 duration-300"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-8 md:p-10">
              <h2 id="tx-modal-title" className="font-serif text-3xl md:text-4xl font-semibold text-[#0d0d0d] mb-6 leading-tight">
                {selectedTreatment.title}
              </h2>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedTreatment.duration && (
                  <span className="flex items-center gap-2 bg-[#faf6f0] px-5 py-2.5 rounded-xl text-sm font-semibold text-[#0d0d0d]">
                    <Clock size={15} className="text-gold" /> {selectedTreatment.duration}
                  </span>
                )}
                {selectedTreatment.price && (
                  <span className="flex items-center gap-2 bg-[#faf6f0] px-5 py-2.5 rounded-xl text-sm font-semibold text-[#0d0d0d]">
                    <Tag size={15} className="text-gold" /> {selectedTreatment.price}
                  </span>
                )}
              </div>

              <div className="border-l-2 border-gold pl-6 mb-8">
                <p className="text-gray-600 leading-relaxed text-[15px] md:text-base">
                  {selectedTreatment.fullDesc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CLINIC.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gold hover:bg-gold-dark text-white font-semibold py-5 rounded-2xl transition-all shadow-md hover:shadow-gold/20"
                >
                  Book Treatment
                </a>
                <button
                  onClick={closeModal}
                  className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-500 py-5 rounded-2xl font-semibold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}