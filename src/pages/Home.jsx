import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Clock, Tag, ArrowRight, ShieldCheck, Star, MapPin, Award, Quote } from 'lucide-react';
import TreatmentCard from '../components/Treatmentcard.jsx';
import { allTreatments } from '../treatments.js';
import PageSEO from '../components/PageSEO.jsx';
import useScrollLock from '../hooks/useScrollLock.js';
import { CLINIC, HOURS, OFFER, ONLINE_CONSULTATION } from '../constants.js';

const TRUST_BADGES = [
  { icon: <ShieldCheck size={17} aria-hidden="true" />, label: 'FDA-Approved Technology' },
  { icon: <Award size={17} aria-hidden="true" />, label: 'CDN Award Winner' },
  { icon: <Star size={17} aria-hidden="true" />, label: 'Free Consultations' },
];

const STATS = [
  { value: '10+', label: 'Years Experience', sub: 'Sumi has over a decade of specialist clinical experience.' },
  { value: 'FDA', label: 'Approved Technology', sub: 'We use only clinically proven, FDA-cleared equipment.' },
  { value: 'FREE', label: 'Skin Analysis', sub: 'Start with a no-obligation skin consultation, on us.' },
];

const OFFERS = [
  { big: 'FREE', title: 'Skin Analysis', sub: 'With the Zemits Skin Analyser — see what your skin needs beneath the surface.', to: '/contact' },
  { big: 'FREE', title: 'Skin & Hair Consultation', sub: 'Expert advice, personalised for you. No pressure, no obligation.', to: '/contact' },
  { big: '25%', title: 'Off Selected Treatments', sub: OFFER.tagline, to: '/skincare?category=Offers' },
];

const REVIEWS = [
  { quote: "I can't recommend visiting this clinic enough. I walked in with really sore and red inflamed skin…", name: 'Erin M.', date: 'August 2026' },
  { quote: 'I had a HydraFacial with LED therapy and my skin feels incredibly clean, hydrated, and glowing…', name: 'Juna B.', date: 'July 2026' },
  { quote: 'Very knowledgeable and professional. I want to book for facial again.', name: 'Nicola S.', date: 'February 2026' },
  { quote: 'Very professional and good service.', name: 'Yas S.', date: 'February 2026' },
  {
    quote: "Sumi is one of a kind. I was so nervous before my first laser session but she had me laughing within five minutes. Six sessions in and I've not had to shave in months. Worth every single penny.",
    name: 'Rachel P.',
    location: 'Dunfermline',
  },
  {
    quote: "I drove 40 minutes from Edinburgh because a friend swore by Sumi. Now I'm the one telling everyone. She just looked at my skin and knew exactly what it needed. The results honestly blew me away.",
    name: 'Amy G.',
    location: 'Edinburgh',
  },
  {
    quote: "Honest advice — she didn't try to sell me anything I didn't need. Just told me what would actually work and got on with it. Refreshing to find a clinic like that. My skin has completely transformed.",
    name: 'Claire W.',
    location: 'Kirkcaldy',
  },
];

export default function Home() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  useScrollLock(!!selectedTreatment);

  return (
    <>
      <PageSEO
        title="Sai Skin and Hair | Advanced Skin & Hair Clinic, Rosyth Dunfermline"
        description="Sai Skin and Hair in Rosyth, Dunfermline offers advanced skin and hair treatments including Laser Hair Removal, HydraFacial, Microneedling, Meso & Cosmelan Peels and Bespoke Facials. Book a free consultation today."
        image="/images/og-image.jpg"
        canonical="https://saiskin.co.uk/"
      />

      <section
        className="relative min-h-[100svh] flex flex-col justify-between text-white overflow-hidden pt-24 md:pt-32 pb-8"
        aria-labelledby="hero-heading"
      >
        <img
          src="/images/hm.jpg"
          alt="Sai Skin and Hair clinic interior — Rosyth, Dunfermline"
          className="absolute inset-0 w-full h-full object-cover object-[72%_30%] md:object-[80%_center] lg:object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/45 to-dark/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto my-auto py-6">
          <h1
            id="hero-heading"
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-semibold leading-tight md:leading-[1.08] mb-4 md:mb-6 drop-shadow-lg"
          >
            You deserve to feel<br />
            <span className="italic font-light text-white/85">at home in your skin.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl mb-6 md:mb-10 max-w-2xl mx-auto text-white/80 font-light leading-relaxed">
            Expert, evidence-based skin and hair treatments in a calm, caring environment in Rosyth. No rush. No pressure. Just real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href={CLINIC.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-xl hover:-translate-y-0.5"
            >
              Book Free Consultation
            </a>
            <Link
              to="/skincare"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/25 text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300"
            >
              Our Treatments <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative z-10 pt-6 px-6">
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-14">
            {TRUST_BADGES.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-white/80 text-[10px] sm:text-[11px] uppercase tracking-widest font-bold"
              >
                <span className="text-gold">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" aria-labelledby="offers-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="offers-heading" className="sr-only">Current offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {OFFERS.map(({ big, title, sub, to }) => (
              <Link
                key={title}
                to={to}
                className="group bg-cream rounded-4xl p-8 border border-gold/20 hover:border-gold hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 text-center"
              >
                <p className="font-serif text-5xl font-bold text-gold leading-none mb-3">{big}</p>
                <h3 className="font-bold text-dark text-sm uppercase tracking-widest mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{sub}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-xs text-muted mt-6">
            Can't visit in person? <Link to="/contact#online-consultation" className="text-gold font-semibold underline underline-offset-4">Online consultation</Link> via {ONLINE_CONSULTATION.platforms} — {ONLINE_CONSULTATION.price}. · {OFFER.terms}
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">The Sai Skin and Hair Difference</p>
            <h2 id="why-heading" className="font-serif text-4xl md:text-5xl font-semibold text-dark mb-5">
              Clinical Excellence
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

      <section className="py-24 md:py-32 bg-cream" aria-labelledby="treatments-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-xl">
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">Popular Choices</p>
              <h2 id="treatments-heading" className="font-serif text-4xl md:text-5xl font-semibold text-dark">
                Our Popular Treatments
              </h2>
            </div>
            <Link
              to="/skincare"
              className="hidden md:inline-flex items-center gap-2 text-gold hover:text-gold-dark font-bold text-xs uppercase tracking-widest transition-all group"
            >
              View Full Menu <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {allTreatments.map((t) => (
              <TreatmentCard
                key={t.slug}
                treatment={t}
                onMoreInfo={() => setSelectedTreatment(t)}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/skincare"
              className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gold text-gold hover:bg-gold hover:text-white px-12 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-gold/20 active:scale-95"
            >
              View All Treatments <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-white" aria-labelledby="sumi-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-cream rounded-5xl overflow-hidden shadow-2xl">
                <img
                  src="/images/sumi.jpg"
                  alt="Sumi Bhandari — founder and lead clinician at Sai Skin and Hair"
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
                I started Sai Skin and Hair because I believe everyone deserves to feel confident in their own skin — and that starts with being in safe, experienced hands. With over 10 years in the industry and a degree in skin specialist care, I bring both the science and the human touch to every single treatment.
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
      </section>

      <section className="py-24 md:py-32 bg-cream" aria-labelledby="reviews-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">Client Stories</p>
            <h2 id="reviews-heading" className="font-serif text-4xl md:text-5xl font-semibold text-dark mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="text-gold fill-gold" aria-hidden="true" />
              ))}
              <span className="ml-2 text-muted text-sm font-medium">5-star rated clinic</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {REVIEWS.map(({ quote, name, location, date }) => (
              <blockquote
                key={name}
                className="bg-white rounded-4xl p-8 border border-cream-dark shadow-sm flex flex-col gap-6 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500"
              >
                <Quote size={24} className="text-gold/30 shrink-0" aria-hidden="true" />
                <p className="text-muted leading-relaxed text-sm flex-1 italic">{quote}</p>
                <footer className="flex items-center gap-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="text-gold fill-gold" aria-hidden="true" />
                    ))}
                  </div>
                  <div>
                    <p className="text-dark font-semibold text-sm leading-none">{name}</p>
                    <p className="text-muted text-xs mt-0.5">{date || location}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

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
                  title="Sai Skin and Hair clinic location map — 195 Queensferry Rd, Rosyth"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="relative shrink-0 bg-cream">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.title}
                className="w-full h-auto max-h-[55vh] object-contain mx-auto block"
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
                  <div className="flex items-center gap-2 bg-gold/10 border border-gold/20 px-5 py-2.5 rounded-xl">
                    <Tag size={15} className="text-gold" aria-hidden="true" />
                    <span className="font-serif text-base font-bold text-gold">{selectedTreatment.price}</span>
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