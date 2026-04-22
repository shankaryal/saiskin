import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Clock, Tag, ArrowRight, Sparkles, ShieldCheck, Star, MapPin } from 'lucide-react';
import TreatmentCard from '../components/Treatmentcard.jsx';
import { featuredTreatments } from './Treatments.jsx';
import PageSEO from '../components/PageSEO.jsx';
import useScrollLock from '../hooks/usesScrollLock.js';
import { CLINIC, HOURS } from '../constants';

const TRUST_BADGES = [
  { icon: <ShieldCheck size={18} />, label: 'FDA-Approved Technology' },
  { icon: <Star         size={18} />, label: 'Free Consultations'    },
  { icon: <Sparkles      size={18} />, label: 'Non-Surgical Treatments'},
];

export default function Home() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  useScrollLock(!!selectedTreatment);

  const openModal  = (t) => setSelectedTreatment(t);
  const closeModal = ()  => setSelectedTreatment(null);

  return (
    <>
      <PageSEO
        title="Sai Care | Premium Skin & Hair Clinic in Rosyth, Dunfermline"
        description="Advanced non-surgical skin and hair treatments in Rosyth. Laser Hair Removal, Chemical Peels, ClearLift, iPixel & Bespoke Facials using FDA-approved technology. Book free consultation."
      />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
          style={{ backgroundImage: 'url("/images/hm.jpg")' }}
          role="img"
          aria-label="Sai Care clinic — premium aesthetics"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#faf6f0]/10" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="text-gold text-[11px] md:text-sm uppercase tracking-[0.4em] font-bold mb-6">
            Rosyth · Dunfermline · Fife
          </p>
          <h1 id="hero-heading" className="font-serif text-5xl md:text-8xl font-semibold leading-[1.1] mb-8 drop-shadow-2xl">
            Reveal Your<br />
            <span className="italic font-light text-white/90">True Radiance</span>
          </h1>
          <p className="text-lg md:text-2xl mb-12 max-w-2xl mx-auto text-white/90 font-light leading-relaxed">
            Experience clinical excellence with our range of FDA-approved, medical-grade aesthetic treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href={CLINIC.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-white px-10 py-5 rounded-2xl text-base font-semibold transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              Book Free Consultation
            </a>
            <Link
              to="/treatments"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white px-10 py-5 rounded-2xl text-base font-semibold transition-all duration-300"
            >
              Our Treatments <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Hero Bottom Trust Strip */}
        <div className="absolute bottom-0 left-0 right-0 py-8 px-6 bg-gradient-to-t from-black/40 to-transparent">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
            {TRUST_BADGES.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-white/90 text-[11px] uppercase tracking-widest font-bold">
                <span className="text-gold">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sai Care Section - Light Background */}
      <section className="py-24 md:py-32 bg-[#faf6f0]" aria-labelledby="unique-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">The Sai Care Difference</p>
            <h2 id="unique-heading" className="font-serif text-4xl md:text-6xl font-semibold text-[#0d0d0d] mb-6">
              Clinical Excellence
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We combine world-class medical technology with a bespoke, patient-centred approach to help you achieve your aesthetic goals safely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '100%', label: 'Safe Results', sub: 'Non-invasive, medical-grade treatments designed for your safety.' },
              { num: 'FDA', label: 'Certified Tech', sub: 'We exclusively use FDA-approved equipment for clinically proven results.' },
              { num: 'FREE', label: 'Skin Analysis', sub: 'Start your journey with a comprehensive, no-obligation consultation.' },
            ].map(({ num, label, sub }) => (
              <div key={label} className="group bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500">
                <p className="font-serif text-5xl font-bold text-gold mb-4 group-hover:scale-110 transition-transform inline-block">{num}</p>
                <h3 className="font-bold text-[#0d0d0d] text-sm uppercase tracking-widest mb-3">{label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treatments - White Background */}
      <section className="py-24 md:py-32 bg-white" aria-labelledby="treatments-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">Popular Choices</p>
              <h2 id="treatments-heading" className="font-serif text-4xl md:text-5xl font-semibold text-[#0d0d0d]">
                Signature Treatments
              </h2>
            </div>
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-bold text-xs uppercase tracking-widest transition-all group"
            >
              Explore Full Menu <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTreatments.map((t, i) => (
              <TreatmentCard key={i} treatment={t} onMoreInfo={() => openModal(t)} />
            ))}
          </div>
        </div>
      </section>

      {/* Location & Visit - Light Background */}
      <section className="py-24 md:py-32 bg-[#faf6f0]" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-10">
              <div>
                <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">Visit Our Clinic</p>
                <h2 id="location-heading" className="font-serif text-4xl md:text-5xl font-semibold text-[#0d0d0d] mb-4">
                  Find Us in Rosyth
                </h2>
                <div className="flex items-start gap-3 text-gray-500">
                  <MapPin size={20} className="text-gold shrink-0 mt-1" />
                  <address className="not-italic">
                    <p className="font-semibold text-[#0d0d0d]">This Is Fusion · The Business Hub</p>
                    <p>{CLINIC.address.line1}, {CLINIC.address.line2}</p>
                    <p>{CLINIC.address.city}, {CLINIC.address.postcode}</p>
                  </address>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="font-bold uppercase tracking-widest text-[11px] text-[#0d0d0d] mb-6 pb-4 border-b border-gray-50">Opening Hours</h3>
                <ul className="space-y-4">
                  {HOURS.map(({ day, time, open }) => (
                    <li key={day} className="flex justify-between text-sm">
                      <span className={`font-semibold ${open ? 'text-[#0d0d0d]' : 'text-gray-400'}`}>{day}</span>
                      <span className={open ? 'text-gray-600' : 'text-gray-300 italic'}>{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-[16/10] md:aspect-video relative">
                <iframe
                  src={CLINIC.mapsEmbed}
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sai Care clinic location map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Modal */}
      {selectedTreatment && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} aria-hidden="true" />

          <div className="relative bg-white rounded-[2.5rem] max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="relative h-64 shrink-0">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#0d0d0d] rounded-full p-2 shadow-lg transition-transform hover:rotate-90"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-8 md:p-12">
              <h2 id="modal-title" className="font-serif text-3xl md:text-4xl font-semibold text-[#0d0d0d] mb-6">
                {selectedTreatment.title}
              </h2>

              <div className="flex flex-wrap gap-3 mb-8">
                {selectedTreatment.duration && (
                  <div className="flex items-center gap-2 bg-[#faf6f0] px-5 py-2.5 rounded-xl text-sm font-bold text-[#0d0d0d]">
                    <Clock size={16} className="text-gold" /> {selectedTreatment.duration}
                  </div>
                )}
                {selectedTreatment.price && (
                  <div className="flex items-center gap-2 bg-[#faf6f0] px-5 py-2.5 rounded-xl text-sm font-bold text-[#0d0d0d]">
                    <Tag size={16} className="text-gold" /> {selectedTreatment.price}
                  </div>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed text-base mb-10">{selectedTreatment.fullDesc}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={CLINIC.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-white font-bold py-5 rounded-2xl transition-all shadow-lg hover:shadow-gold/20"
                >
                  Book Treatment
                </a>
                <button
                  onClick={closeModal}
                  className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-500 py-5 rounded-2xl font-bold transition-all"
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