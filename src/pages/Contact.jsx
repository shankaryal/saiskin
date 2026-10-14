import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, CheckCircle2, MessageCircle, Video } from 'lucide-react';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import { CLINIC, HOURS, ONLINE_CONSULTATION, whatsappLink } from '../constants';

const TREATMENT_OPTIONS = [
  { value: 'laser',     label: 'Laser Hair Removal'       },
  { value: 'peels',     label: 'Meso Peel / Cosmelan' },
  { value: 'facials',   label: 'Bespoke Facials'           },
  { value: 'analyser',  label: 'Free Skin Analysis / Consultation' },
  { value: 'online',    label: 'Online Consultation (£20)' },
  { value: 'micro',     label: 'Microneedling'             },
  { value: 'skintag',   label: 'Skin Tag, Milia & Cherry Angioma Removal' },
  { value: 'hair',      label: 'Hair Loss / Alopecia'      },
  { value: 'wellness',  label: 'Weight Management & Wellness' },
  { value: 'led',       label: 'LED Light Therapy'         },
  { value: 'other',     label: 'Other / General Enquiry'   },
];

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data      = new FormData(e.target);
    const name      = data.get('name')      || '';
    const email     = data.get('email')     || '';
    const treatment = data.get('treatment') || '';
    const message   = data.get('message')   || '';

    const text = encodeURIComponent(
      `Hello Sai Skin and Hair,\n\n*New Enquiry*\nName: ${name}\nEmail: ${email}\nTreatment: ${treatment}\nMessage: ${message}`
    );
    window.open(`https://wa.me/${CLINIC.whatsapp}?text=${text}`, '_blank');
    setIsSent(true);
  };

  return (
    <>
      <PageSEO
        title="Contact Sai Skin and Hair | Book a Free Consultation — Rosyth, Dunfermline"
        description={`Contact Sai Skin and Hair at ${CLINIC.address.full}. Book a free consultation or ask about our treatments. Call ${CLINIC.phone} or message us on WhatsApp.`}
        canonical="https://saiskin.co.uk/contact"
      />

      <PageWrapper>
        <div className="bg-white">
          <section className="pt-28 pb-14 md:pt-36 md:pb-20 bg-cream text-center" aria-labelledby="contact-heading">
            <div className="max-w-3xl mx-auto px-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Say Hello</p>
              <h1 id="contact-heading" className="font-serif text-4xl md:text-6xl font-semibold mb-5 text-dark">
                We'd Love to Hear From You
              </h1>
              <p className="text-lg text-muted leading-relaxed">
                Whether you want to ask about a treatment, check availability, or just get a feel for the place — drop us a message. Sumi replies personally, usually the same day.
              </p>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-6 py-14 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-dark mb-8">Come and See Us</h2>

                  <address className="not-italic space-y-6">
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0 bg-cream">
                        <MapPin size={17} className="text-gold" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">Location</p>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC.address.full)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted text-sm leading-relaxed hover:text-gold transition-colors"
                        >
                          {CLINIC.address.line1}<br />
                          {CLINIC.address.line2}<br />
                          {CLINIC.address.city}, {CLINIC.address.postcode}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0 bg-cream">
                        <Phone size={17} className="text-gold" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">Phone</p>
                        <a href={`tel:${CLINIC.phone}`} className="text-muted text-sm hover:text-gold transition-colors font-medium">
                          {CLINIC.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0 bg-cream">
                        <MessageCircle size={17} className="text-gold" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">WhatsApp</p>
                        <a
                          href={`https://wa.me/${CLINIC.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted text-sm hover:text-gold transition-colors font-medium"
                        >
                          Message us on WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0 bg-cream">
                        <Mail size={17} className="text-gold" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">Email</p>
                        <a href={`mailto:${CLINIC.email}`} className="text-muted text-sm hover:text-gold transition-colors break-all">
                          {CLINIC.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 pt-2">
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0 bg-cream">
                        <Clock size={17} className="text-gold" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Opening Hours</p>
                        <ul className="space-y-2 max-w-[240px]" role="list">
                          {HOURS.map(({ day, time, open }) => (
                            <li key={day} className="flex justify-between gap-8 text-sm">
                              <span className={open ? 'text-dark font-medium' : 'text-muted/40'}>{day}</span>
                              <span className={open ? 'text-muted' : 'text-muted/30 italic'}>{time}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </address>
                </div>

                <div className="bg-cream border border-cream-dark rounded-3xl p-8">
                  <h3 className="font-serif text-xl font-semibold text-dark mb-3">Skip the Queue</h3>
                  <p className="text-muted text-sm mb-6 leading-relaxed">
                    Book your free skin consultation online — pick a time that works for you and we'll see you there.
                  </p>
                  <a
                    href={CLINIC.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gold hover:bg-gold-dark text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-gold/20"
                  >
                    Book Online Now
                  </a>
                </div>

                <div id="online-consultation" className="scroll-mt-28 bg-white border border-gold/30 rounded-3xl p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif text-xl font-semibold text-dark flex items-center gap-2">
                      <Video size={19} className="text-gold" aria-hidden="true" /> Online Consultation
                    </h3>
                    <span className="font-serif text-2xl font-bold text-gold leading-none shrink-0">{ONLINE_CONSULTATION.price}</span>
                  </div>
                  <p className="text-muted text-sm mb-5 leading-relaxed">
                    Can't make it to the clinic? Have a {ONLINE_CONSULTATION.duration} video consultation with Sumi via {ONLINE_CONSULTATION.platforms}.
                  </p>
                  <ol className="space-y-3 mb-6">
                    {[
                      'Message us on WhatsApp with your preferred date and time.',
                      'Sumi confirms your slot and payment details on WhatsApp.',
                      'Once confirmed, you receive your private Zoom / Google Meet link — just tap it to join.',
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold flex items-center justify-center">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <a
                    href={whatsappLink(ONLINE_CONSULTATION.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-gold/20"
                  >
                    <MessageCircle size={16} aria-hidden="true" /> Book via WhatsApp
                  </a>
                </div>
              </div>

              <div className="border border-cream-dark rounded-5xl p-8 md:p-12 bg-white shadow-xl shadow-dark/5">
                {!isSent ? (
                  <>
                    <h2 className="font-serif text-3xl font-semibold text-dark mb-2">Drop Us a Message</h2>
                    <p className="text-muted text-sm mb-9">Tell us what you're thinking — we'll come back to you, usually within a few hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.18em] text-dark mb-2.5">
                            Full Name <span className="text-gold">*</span>
                          </label>
                          <input
                            id="name" name="name" required type="text"
                            placeholder="Your name"
                            autoComplete="name"
                            className="w-full bg-cream border border-cream-dark focus:border-gold focus:bg-white rounded-xl p-4 text-sm outline-none transition-all text-dark"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.18em] text-dark mb-2.5">
                            Email Address <span className="text-gold">*</span>
                          </label>
                          <input
                            id="email" name="email" required type="email"
                            placeholder="hello@example.com"
                            autoComplete="email"
                            className="w-full bg-cream border border-cream-dark focus:border-gold focus:bg-white rounded-xl p-4 text-sm outline-none transition-all text-dark"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="treatment" className="block text-[10px] font-bold uppercase tracking-[0.18em] text-dark mb-2.5">
                          Treatment Interest
                        </label>
                        <div className="relative">
                          <select
                            id="treatment" name="treatment"
                            defaultValue=""
                            className="w-full bg-cream border border-cream-dark focus:border-gold focus:bg-white rounded-xl p-4 text-sm outline-none transition-all text-dark appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select a treatment…</option>
                            {TREATMENT_OPTIONS.map(({ value, label }) => (
                              <option key={value} value={label}>{label}</option>
                            ))}
                          </select>
                          <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" aria-hidden="true" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.18em] text-dark mb-2.5">
                          How Can We Help? <span className="text-gold">*</span>
                        </label>
                        <textarea
                          id="message" name="message" required rows={4}
                          placeholder="Tell us about your concerns or questions…"
                          className="w-full bg-cream border border-cream-dark focus:border-gold focus:bg-white rounded-xl p-4 text-sm outline-none transition-all text-dark resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-4 rounded-xl transition-all text-sm tracking-[0.1em] uppercase shadow-md hover:shadow-gold/20"
                      >
                        Send Message via WhatsApp
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="flex justify-center mb-6">
                      <div className="bg-cream p-6 rounded-full">
                        <CheckCircle2 size={52} className="text-gold" aria-hidden="true" />
                      </div>
                    </div>
                    <h2 className="font-serif text-3xl font-semibold text-dark mb-4">On Its Way!</h2>
                    <p className="text-muted text-sm mb-10 max-w-xs mx-auto leading-relaxed">
                      Your message should have opened in WhatsApp. If it didn't, just tap the button below and we'll get it sent.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="text-gold font-bold text-xs uppercase tracking-widest hover:underline underline-offset-8"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pb-24">
            <div className="w-full h-[420px] rounded-5xl overflow-hidden shadow-2xl border border-cream-dark">
              <iframe
                title="Sai Skin and Hair clinic location — 195 Queensferry Rd, Rosyth"
                src={CLINIC.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}