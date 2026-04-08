import { useState } from 'react';
import TreatmentCard from '../components/Treatmentcard.jsx';

export const allTreatments = [
  { 
    title: "Laser Hair Removal", 
    shortDesc: "Soprano Titanium Special Edition – virtually painless hair removal on all skin types.",
    fullDesc: "Soprano Titanium Special Edition combines ultimate functionality with ICE cold comfort for smarter, faster and virtually painless hair removal on all skin types.",
    slug: "laser-hair-removal",
    image: "/images/laser.jpg",
    duration: "30 min", 
    price: "£30"
  },
  { 
    title: "DYE SVL & DYE VL are IPL", 
    shortDesc: "Harmony XL Pro Special Edition IPL for vascular & pigmented lesions.",
    fullDesc: "Harmony XL Pro Special Edition IPL is light based attachment that uses narrow spectrum wavelengths to treat broad areas of vascular & pigmented lesions.",
    slug: "dye-svl-dye-vl-are-ipl",
    image: "/images/dye.jpg",
    duration: "30 min", 
    price: "£30"
  },
  { 
    title: "Chemical Peels", 
    shortDesc: "Pure, non-irritating ingredients safe enough to be repeated as needed.",
    fullDesc: "We use only the purest, non-irritating medical-grade peels that are safe enough to be repeated as needed to address any skin concern.",
    slug: "chemical-peels",
    image: "/images/chemical.jpg",
    duration: "30 min", 
    price: "£30"
  },
  { 
    title: "DermaLux Tri wave MD", 
    shortDesc: "LED Phototherapy to replenish, rejuvenate and repair your skin.",
    fullDesc: "Replenish, rejuvenate and repair your skin with relaxing light treatment for an instant facelift effect.",
    slug: "dermalux-tri-wave-md",
    image: "/images/dermalux.png"
  },
  { 
    title: "Bespoke Facials", 
    shortDesc: "Thorough deep cleanse, gentle exfoliation and personalised care.",
    fullDesc: "This includes a thorough deep cleanse, gentle exfoliation, and the use of a facial steamer to open pores.",
    slug: "bespoke-facials",
    image: "/images/facial.jpg"
  },
  { 
    title: "Skin Analyser Zemits", 
    shortDesc: "Advanced skin analysis technology for personalised treatment plans.",
    fullDesc: "Aesthetic Consultations with Skin Analysis Technology for accurate diagnosis and personalised treatment plans.",
    slug: "skin-analyser-zemits",
    image: "/images/analysis.png"
  },
  { 
    title: "Clear Lift", 
    shortDesc: "Non-ablative laser for skin tightening and rejuvenation.",
    fullDesc: "ClearLift is the most popular Harmony treatment. Award winning & repeatedly viral on TikTok – referred to as the lunchtime face lift.",
    slug: "clear-lift",
    image: "/images/clearlift.png"
  },
  { 
    title: "Clear Skin", 
    shortDesc: "Target acne and blemishes effectively.",
    fullDesc: "ClearSkin is an award winning laser treatment designed to treat oily skin and all forms of acne, whilst also having a gentle skin rejuvenating effect.",
    slug: "clear-skin",
    image: "/images/clear_skin.png"
  },
  { 
    title: "Tattoo Removal", 
    shortDesc: "Safe and effective laser tattoo removal.",
    fullDesc: "Laser tattoo removal treatments offer a safe and precise solution for erasing unwanted tattoos.",
    slug: "tattoo-removal",
    image: "/images/Tattoo-removal.jpg"
  },
  { 
    title: "iPixel", 
    shortDesc: "Fractional laser resurfacing for scars and skin texture improvement.",
    fullDesc: "The iPixel is a highly effective fractional ablative skin resurfacing treatment procedure that uses an Erbium YAG laser with a 2940nm wavelength.",
    slug: "ipixel",
    image: "/images/ipixel.jpg"
  },
];

// This allows the Home page to show just the first 3
export const featuredTreatments = allTreatments.slice(0, 3);

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const openModal = (treatment) => setSelectedTreatment(treatment);
  const closeModal = () => setSelectedTreatment(null);

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-dark">
          Advanced Aesthetic Treatments
        </h1>
        <p className="text-center text-base md:text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Discover our range of premium non-surgical aesthetic treatments designed to deliver outstanding results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTreatments.map((treatment, index) => (
            <TreatmentCard 
              key={index}
              treatment={treatment}
              onMoreInfo={() => openModal(treatment)}
            />
          ))}
        </div>
      </div>

      {selectedTreatment && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
            <div className="relative h-80 md:h-96">
              <img 
                src={selectedTreatment.image} 
                alt={selectedTreatment.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
              >
                ✕
              </button>
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{selectedTreatment.title}</h2>
              <div className="prose text-gray-700 leading-relaxed text-[17px]">
                {selectedTreatment.fullDesc}
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <a href="https://ivmedispa.eu.zenoti.com/webstoreNew" target="_blank" rel="noopener noreferrer">
                  <button className="bg-gold hover:bg-amber-600 text-black px-10 py-4 rounded-2xl font-bold text-lg transition">
                    Book This Treatment
                  </button>
                </a>
                <button onClick={closeModal} className="border-2 border-gray-300 hover:bg-gray-50 px-10 py-4 rounded-2xl font-medium text-lg transition">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}