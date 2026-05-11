import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Clock, Tag, ArrowRight, ShieldCheck, Star, MapPin, Award } from 'lucide-react';
import TreatmentCard from '../components/TreatmentCard.jsx';
import { featuredTreatments } from './Treatments.jsx';
import PageSEO from '../components/PageSEO.jsx';
import useScrollLock from '../hooks/useScrollLock.js';
import { CLINIC, HOURS } from '../constants.js';

const TRUST_BADGES = [
  { icon: <ShieldCheck size={17} aria-hidden="true" />, label: 'FDA-Approved Technology' },
  { icon: <Award        size={17} aria-hidden="true" />, label: 'CDN Award Winner'        },
  { icon: <Star         size={17} aria-hidden="true" />, label: 'Free Consultations'      },
];

const STATS = [
  { value: '10+',  label: 'Years Experience',   sub: 'Sumi has over a decade of specialist clinical experience.' },
  { value: 'FDA',  label: 'Approved Technology', sub: 'We use only clinically proven, FDA-cleared equipment.'     },
  { value: 'FREE', label: 'Skin Analysis',        sub: 'Start with a no-obligation skin consultation, on us.'      },
];

export default function Home() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  useScrollLock(!!selectedTreatment);

  return (
    <>
      <PageSEO
        title="Sai Skin Care | Advanced Skin & Hair Clinic, Rosyth Dunfermline"
        description="Sai Skin Care in Rosyth, Dunfermline offers advanced skin and hair treatments including Laser Hair Removal, Chemical Peels, ClearLift, iPixel and Bespoke Facials. Book a free consultation today."
        image="/images/og-image.jpg"
        canonical="https://saiskin.vercel.app/"
      />

      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[12s] hover:scale-105"
          style={{ backgroundImage: 'url("/images/hm.jpg")' }}
          role="img"
          aria-label="Sai Skin Care clinic interior — Rosyth, Dunfermline"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/65 via-dark/35 to-dark/20" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-gold text-[11px] uppercase tracking-[0.4em] font-bold mb-6">
            Rosyth · Dunfermline · Fife
          </p>

          {/* Star rating */}
          <div className="flex items-center justify-center gap-2 mb-7">
            <div className="flex" aria-label="Five star rating">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="text-gold fill-gold" aria-hidden="true" />
              ))}
            </div>
            <span className="text-white/70 text-sm font-medium">Rated 5 stars by our clients</span>
          </div>

          <h1
            id="hero-heading"
            className="font-serif text-5xl md:text-8xl font-semibold leading-[1.08] mb-7 drop-shadow-lg"
          >
            You deserve to feel<br />
            <span className="italic font-light text-white/85">at home in your skin.</span>
          </h1>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/80 font-light leading-relaxed">
            Expert, evidence-based skin and hair treatments in a calm, caring environment in Rosyth. No rush. No pressure. Just real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={CLINIC.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-white px-10 py-5 rounded-2xl text-base font-semibold transition-all duration-300 shadow-xl hover:-translate-y-0.5"
            >
              Book Free Consultation
            </a>
            <Link
              to="/treatments"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/25 text-white px-10 py-5 rounded-2xl text-base font-semibold transition-all duration-300"
            >
              Our Treatments <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Trust strip */}
        <div className="absolute bottom-0 left-0 right-0 py-7 px-6 bg-gradient-to-t from-dark/50 to-transparent">
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8 md:gap-14">
            {TRUST_BADGES.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 text-white/80 text-[11px] uppercase tracking-widest font-bold"
              >
                <span className="text-gold">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Sai Skin Care ── */}
      <section className="py-24 md:py-32 bg-cream" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">The Sai Skin Care Difference</p>
            <h2 id="why-heading" className="font-serif text-4xl md:text-5xl font-semibold text-dark mb-5">
              Clinical Excellence,<br />Compassionate Care
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              We combine world-class technology with a genuinely personal approach — because you deserve both.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map(({ value, label, sub }) => (
              <div
                key={label}
                className="bg-white rounded-4xl p-10 border border-cream-dark hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 group"
              >
                <p className="font-serif text-5xl font-bold text-gold mb-4 group-hover:scale-110 transition-transform inline-block">
                  {value}
                </p>
                <h3 className="font-bold text-dark text-sm uppercase tracking-widest mb-3">{label}</h3>
                <p className="text-muted text-sm leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet Sumi teaser ── */}
      {/* <section className="py-24 md:py-28 bg-white" aria-labelledby="sumi-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-cream rounded-5xl overflow-hidden shadow-2xl">
                <img
                  src="/images/sumi.jpg"
                  alt="Sumi Bhandari — founder and lead clinician at Sai Skin Care"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-white p-7 rounded-4xl shadow-xl hidden md:block">
                <Award size={26} className="mb-2" aria-hidden="true" />
                <p className="font-serif font-bold text-lg leading-tight">CDN Award</p>
                <p className="text-xs uppercase tracking-widest font-semibold mt-0.5">Best Student</p>
              </div>
            </div>

            <div className="space-y-7">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold">Meet Your Clinician</p>
              <h2 id="sumi-heading" className="font-serif text-4xl md:text-5xl font-semibold text-dark leading-tight">
                Hi, I'm Sumi
              </h2>
              <p className="text-muted leading-relaxed text-base">
                I started Sai Skin Care because I believe everyone deserves to feel confident in their own skin — and that starts with being in safe, experienced hands. With over 10 years in the industry and a degree in skin specialist care, I bring both the science and the human touch to every single treatment.
              </p>
              <p className="text-muted leading-relaxed text-base">
                I'm proud to have been named Best Student of the Year in Scotland at the CDN Awards, but what matters most to me is that you leave feeling genuinely cared for.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold text-sm transition-colors group"
              >
                Read my full story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── Featured Treatments ── */}
      <section className="py-24 md:py-32 bg-cream" aria-labelledby="treatments-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-xl">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">Popular Choices</p>
              <h2 id="treatments-heading" className="font-serif text-4xl md:text-5xl font-semibold text-dark">
                Signature Treatments
              </h2>
            </div>
            <Link
              to="/treatments"
              className="hidden md:inline-flex items-center gap-2 text-gold hover:text-gold-dark font-bold text-xs uppercase tracking-widest transition-all group"
            >
              View Full Menu <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredTreatments.map((t, i) => (
              <TreatmentCard
                key={i}
                treatment={t}
                onMoreInfo={() => setSelectedTreatment(t)}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/treatments"
              className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gold text-gold hover:bg-gold hover:text-white px-12 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-gold/20 active:scale-95"
            >
              View All Treatments <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="py-24 md:py-32 bg-white" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-10">
              <div>
                <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">Visit Us</p>
                <h2 id="location-heading" className="font-serif text-4xl md:text-5xl font-semibold text-dark mb-5">
                  Find Us in Rosyth
                </h2>
                <div className="flex items-start gap-3 text-muted">
                  <MapPin size={19} className="text-gold shrink-0 mt-1" aria-hidden="true" />
                  <address className="not-italic text-sm leading-relaxed">
                    <p className="font-semibold text-dark">{CLINIC.address.building}</p>
                    <p>{CLINIC.address.line1}, {CLINIC.address.line2}</p>
                    <p>{CLINIC.address.city}, {CLINIC.address.postcode}</p>
                  </address>
                </div>
              </div>

              <div className="bg-cream rounded-3xl p-8 border border-cream-dark">
                <h3 className="font-bold uppercase tracking-widest text-[11px] text-dark mb-5 pb-4 border-b border-cream-dark">
                  Opening Hours
                </h3>
                <ul className="space-y-3" role="list">
                  {HOURS.map(({ day, time, open }) => (
                    <li key={day} className="flex justify-between text-sm">
                      <span className={`font-semibold ${open ? 'text-dark' : 'text-muted/40'}`}>{day}</span>
                      <span className={open ? 'text-muted' : 'text-muted/30 italic'}>{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-5xl overflow-hidden shadow-2xl border-8 border-white aspect-[16/10] md:aspect-video">
                <iframe
                  src={CLINIC.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sai Skin Care clinic location map — 195 Queensferry Rd, Rosyth"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Treatment Modal ── */}
      {selectedTreatment && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="absolute inset-0 bg-dark/70 backdrop-blur-sm"
            onClick={() => setSelectedTreatment(null)}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-5xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="relative h-64 shrink-0">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-dark rounded-full p-2 shadow-lg transition-transform hover:rotate-90 duration-300"
                aria-label="Close modal"
              >
                <X size={19} aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-8 md:p-10">
              <h2 id="modal-title" className="font-serif text-3xl font-semibold text-dark mb-5">
                {selectedTreatment.title}
              </h2>

              <div className="flex flex-wrap gap-3 mb-7">
                {selectedTreatment.duration && (
                  <div className="flex items-center gap-2 bg-cream px-5 py-2.5 rounded-xl text-sm font-semibold text-dark">
                    <Clock size={15} className="text-gold" aria-hidden="true" /> {selectedTreatment.duration}
                  </div>
                )}
                {selectedTreatment.price && (
                  <div className="flex items-center gap-2 bg-cream px-5 py-2.5 rounded-xl text-sm font-semibold text-dark">
                    <Tag size={15} className="text-gold" aria-hidden="true" /> {selectedTreatment.price}
                  </div>
                )}
              </div>

              <p className="text-muted leading-relaxed mb-9">{selectedTreatment.fullDesc}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CLINIC.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gold hover:bg-gold-dark text-white font-semibold py-4 rounded-2xl transition-all shadow-md hover:shadow-gold/20"
                >
                  Book This Treatment
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