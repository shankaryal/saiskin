import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, CheckCircle2, MessageSquare } from 'lucide-react';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import { CLINIC, HOURS } from '../constants';

const TREATMENT_OPTIONS = [
  { value: 'laser',     label: 'Laser Hair Removal'      },
  { value: 'ipl',       label: 'DYE SVL / DYE VL IPL'  },
  { value: 'peels',     label: 'Chemical Peels'          },
  { value: 'facials',   label: 'Bespoke Facials'         },
  { value: 'analyser',  label: 'Skin Analyser (Zemits)' },
  { value: 'clearlift', label: 'ClearLift'               },
  { value: 'clearskin', label: 'ClearSkin'               },
  { value: 'tattoo',    label: 'Tattoo Removal'          },
  { value: 'ipixel',    label: 'iPixel'                  },
  { value: 'dermalux',  label: 'DermaLux Tri-Wave MD'    },
  { value: 'other',     label: 'Other / General Enquiry'},
];

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name      = data.get('name')      || '';
    const email     = data.get('email')     || '';
    const treatment = data.get('treatment') || '';
    const message   = data.get('message')   || '';

    const text = encodeURIComponent(
      `Hello Sai Care,\n\n*New Enquiry*\n- Name: ${name}\n- Email: ${email}\n- Treatment: ${treatment}\n- Message: ${message}`
    );
    window.open(`https://wa.me/${CLINIC.whatsapp}?text=${text}`, '_blank');
    setIsSent(true);
  };

  return (
    <>
      <PageSEO
        title="Contact | Sai Care Skin Clinic, Rosyth Dunfermline"
        description={`Contact Sai Care at ${CLINIC.address.full}. Book a free consultation or ask about our aesthetic treatments. Call ${CLINIC.phone}.`}
      />

      <PageWrapper>
        <div className="bg-white">
          
          {/* ── HERO SECTION ── */}
          <section className="pt-28 pb-14 md:pt-36 md:pb-20 bg-[#faf6f0] text-center" aria-labelledby="contact-hero-heading">
            <div className="max-w-3xl mx-auto px-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Let's Talk About Your Skin</p>
              <h1 id="contact-hero-heading" className="font-serif text-4xl md:text-6xl font-semibold mb-6 text-[#0d0d0d]">
                Contact Sai Care
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto font-light">
                Whether you have a question about our medical-grade technology or want to start your personalized skin journey, our team in Rosyth is ready to assist you.
              </p>
            </div>
          </section>

          {/* ── Main Content Grid ── */}
          <div className="max-w-7xl mx-auto px-6 py-14 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* LEFT COLUMN — Clinic Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#0d0d0d] mb-8">
                    Visit Our Clinic
                  </h2>
                  <address className="not-italic space-y-7">
                    {/* Location */}
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">Location</p>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC.address.full)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 text-sm leading-relaxed hover:text-gold transition-colors"
                        >
                          {CLINIC.address.line1}<br />
                          {CLINIC.address.line2}<br />
                          {CLINIC.address.city}, {CLINIC.address.postcode}
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">Phone</p>
                        <a href={`tel:${CLINIC.phone}`} className="text-gray-600 text-sm hover:text-gold transition-colors font-medium">
                          {CLINIC.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">Email</p>
                        <a href={`mailto:${CLINIC.email}`} className="text-gray-600 text-sm hover:text-gold transition-colors break-all">
                          {CLINIC.email}
                        </a>
                      </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-start gap-5 pt-2">
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                        <Clock size={18} className="text-gold" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Opening Hours</p>
                        <ul className="space-y-2 max-w-[240px]">
                          {HOURS.map(({ day, time, open }) => (
                            <li key={day} className="flex justify-between gap-8 text-sm">
                              <span className={open ? 'text-[#0d0d0d] font-medium' : 'text-gray-400'}>{day}</span>
                              <span className={open ? 'text-gray-500' : 'text-gray-300 italic'}>{time}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </address>
                </div>

                {/* Direct Booking Strip */}
                <div className="bg-[#faf6f0] border border-gold/10 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="text-gold" size={20} />
                    <h3 className="font-serif text-xl font-semibold text-[#0d0d0d]">Direct Booking</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Ready to transform your skin? Secure your free consultation instantly using our online booking system.
                  </p>
                  <a
                    href={CLINIC.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#0d0d0d] hover:bg-gold text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-lg"
                  >
                    Book Online Now
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN — Contact Form */}
              <div className="border border-gray-100 rounded-[2.5rem] p-8 md:p-12 bg-white shadow-xl shadow-gray-500/5">
                {!isSent ? (
                  <>
                    <h2 className="font-serif text-3xl font-semibold text-[#0d0d0d] mb-2">
                      Send a Message
                    </h2>
                    <p className="text-gray-500 text-sm mb-10">Complete the form below and we'll be in touch.</p>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#0d0d0d] mb-2.5">
                            Full Name <span className="text-gold">*</span>
                          </label>
                          <input
                            id="name" name="name" required type="text"
                            placeholder="John Doe"
                            autoComplete="name"
                            className="w-full bg-gray-50 border border-gray-100 focus:border-gold focus:bg-white rounded-xl p-4 text-sm outline-none transition-all text-[#0d0d0d]"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#0d0d0d] mb-2.5">
                            Email Address <span className="text-gold">*</span>
                          </label>
                          <input
                            id="email" name="email" required type="email"
                            placeholder="hello@example.com"
                            autoComplete="email"
                            className="w-full bg-gray-50 border border-gray-100 focus:border-gold focus:bg-white rounded-xl p-4 text-sm outline-none transition-all text-[#0d0d0d]"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="treatment" className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#0d0d0d] mb-2.5">
                          Treatment Interest
                        </label>
                        <div className="relative">
                          <select
                            id="treatment" name="treatment"
                            defaultValue=""
                            className="w-full bg-gray-50 border border-gray-100 focus:border-gold focus:bg-white rounded-xl p-4 text-sm outline-none transition-all text-[#0d0d0d] appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select a treatment…</option>
                            {TREATMENT_OPTIONS.map(({ value, label }) => (
                              <option key={value} value={label}>{label}</option>
                            ))}
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#0d0d0d] mb-2.5">
                          How can we help? <span className="text-gold">*</span>
                        </label>
                        <textarea
                          id="message" name="message" required rows={4}
                          placeholder="Tell us about your concerns..."
                          className="w-full bg-gray-50 border border-gray-100 focus:border-gold focus:bg-white rounded-xl p-4 text-sm outline-none transition-all text-[#0d0d0d] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-4 rounded-xl transition-all text-sm tracking-[0.1em] uppercase shadow-md hover:shadow-gold/20"
                      >
                        Send via WhatsApp
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="flex justify-center mb-6">
                      <div className="bg-[#faf6f0] p-6 rounded-full">
                        <CheckCircle2 size={56} className="text-gold" />
                      </div>
                    </div>
                    <h2 className="font-serif text-3xl font-semibold text-[#0d0d0d] mb-4">Inquiry Ready</h2>
                    <p className="text-gray-600 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
                      We've prepared your message for WhatsApp. Click below if it didn't open automatically.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="text-gold font-bold text-xs uppercase tracking-widest hover:underline underline-offset-8"
                    >
                      Start Over
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Map Section ── */}
          <div className="max-w-7xl mx-auto px-6 pb-24">
            <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5 border border-gray-100">
              <iframe
                title="Sai Care clinic location"
                src={CLINIC.mapsEmbed}
                width="100%" height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}