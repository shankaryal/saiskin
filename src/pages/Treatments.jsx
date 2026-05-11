import { useState } from 'react';
import { X, Clock, Tag } from 'lucide-react';
import TreatmentCard from '../components/TreatmentCard.jsx';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import useScrollLock from '../hooks/useScrollLock.js';
import { CLINIC } from '../constants';
import { allTreatments } from '../treatments.js';

export const featuredTreatments = allTreatments.slice(0, 6);

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  useScrollLock(!!selectedTreatment);

  return (
    <>
      <PageSEO
        title="Treatments | Sai Skin Care — Laser, Facials & Advanced Skin Clinic Rosyth"
        description="Explore Sai Skin Care's full range of treatments in Rosyth, Dunfermline — Laser Hair Removal, ClearLift, Chemical Peels, LED Light Therapy, iPixel, Skin Analyser and more. Book free consultation."
        canonical="https://saiskin.vercel.app/treatments"
      />

      <PageWrapper>
        <div className="bg-white">

          {/* ── Hero ── */}
          <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-cream" aria-labelledby="treatments-heading">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Our Services</p>
              <h1 id="treatments-heading" className="font-serif text-4xl md:text-6xl font-semibold mb-7 text-dark">
                Advanced Treatments
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed font-light italic font-serif">
                "Every treatment at Sai Skin Care is delivered with precision, care and a commitment to natural, lasting results."
              </p>
            </div>
          </section>

          {/* ── Treatment grid ── */}
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
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

          {/* ── CTA ── */}
          <section className="py-24 md:py-32 text-center bg-cream" aria-labelledby="cta-heading">
            <div className="max-w-2xl mx-auto px-6">
              <h2 id="cta-heading" className="font-serif text-3xl md:text-5xl font-semibold text-dark mb-5">
                Not Sure Which Treatment Is Right for You?
              </h2>
              <p className="text-muted mb-12 leading-relaxed text-base">
                Book a free consultation with Sumi. She'll assess your skin, answer every question, and recommend the most effective treatment for your goals — with no pressure.
              </p>
              <a
                href={CLINIC.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-12 py-5 rounded-2xl text-base font-semibold transition-all shadow-lg hover:shadow-gold/20"
              >
                Book Your Free Consultation
              </a>
            </div>
          </section>
        </div>
      </PageWrapper>

      {/* ── Modal ── */}
      {selectedTreatment && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tx-modal-title"
        >
          <div
            className="absolute inset-0 bg-dark/70 backdrop-blur-sm"
            onClick={() => setSelectedTreatment(null)}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-5xl max-w-xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="relative h-72 shrink-0">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-dark rounded-full p-2 shadow-lg transition-all hover:rotate-90 duration-300"
                aria-label="Close"
              >
                <X size={19} aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-8 md:p-10">
              <h2 id="tx-modal-title" className="font-serif text-3xl font-semibold text-dark mb-5 leading-tight">
                {selectedTreatment.title}
              </h2>

              <div className="flex flex-wrap gap-3 mb-7">
                {selectedTreatment.duration && (
                  <span className="flex items-center gap-2 bg-cream px-5 py-2.5 rounded-xl text-sm font-semibold text-dark">
                    <Clock size={14} className="text-gold" aria-hidden="true" /> {selectedTreatment.duration}
                  </span>
                )}
                {selectedTreatment.price && (
                  <span className="flex items-center gap-2 bg-cream px-5 py-2.5 rounded-xl text-sm font-semibold text-dark">
                    <Tag size={14} className="text-gold" aria-hidden="true" /> {selectedTreatment.price}
                  </span>
                )}
              </div>

              <div className="border-l-2 border-gold pl-5 mb-8">
                <p className="text-muted leading-relaxed">{selectedTreatment.fullDesc}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CLINIC.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gold hover:bg-gold-dark text-white font-semibold py-4 rounded-2xl transition-all shadow-md hover:shadow-gold/20"
                >
                  Book Treatment
                </a>
                <button
                  onClick={() => setSelectedTreatment(null)}
                  className="flex-1 border border-cream-dark hover:bg-cream text-muted py-4 rounded-2xl font-semibold transition-all"
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