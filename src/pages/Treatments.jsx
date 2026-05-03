import { useState } from 'react';
import { X, Clock, Tag,} from 'lucide-react';
import TreatmentCard from '../components/Treatmentcard.jsx';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import useScrollLock from '../hooks/usesScrollLock.js';
import { CLINIC } from '../constants';
import {allTreatments} from '../treatments.js';

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