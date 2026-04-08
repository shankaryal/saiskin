import React, { useState } from 'react'; // useState thapiyo
import { Mail, Phone, MapPin, Clock,  ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  // 1. Success message ko lagi state
  const [isSent, setIsSent] = useState(false);

  // 2. WhatsApp Message Function
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form fields bata value line
    const name = e.target[0].value;
    const email = e.target[1].value;
    const treatment = e.target[2].value;
    const message = e.target[3].value;

    const phoneNumber = "447000000000"; // Tapaiko number UK format ma
    
    const text = `Hello Sai Care,%0A%0A*New Enquiry Details:*%0A- *Name:* ${name}%0A- *Email:* ${email}%0A- *Treatment:* ${treatment}%0A- *Message:* ${message}`;
    
    // WhatsApp redirect
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');

    // Notification dekhaune
    setIsSent(true);
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="py-16 md:py-24 bg-zinc-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark italic">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Ready to transform your skin? Our experts are here to help you achieve your beauty goals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info & Booking */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-dark mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gold"></span>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-50 p-4 rounded-2xl text-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Our Location</h4>
                    <p className="text-gray-600 leading-relaxed">
                      195 Queensferry Rd, Rosyth, Dunfermline,<br />
                      KY11 2JH Room 13, 1st floor
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-zinc-50 p-4 rounded-2xl text-gold">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Email Us</h4>
                    <p className="text-gray-600">contact@moonlightbeauty.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-zinc-50 p-4 rounded-2xl text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Call Us</h4>
                    <p className="text-gray-600">+44 131 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-zinc-50 p-4 rounded-2xl text-gold">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Opening Hours</h4>
                    <p className="text-gray-600 italic">Mon - Sat: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-400 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Booking Card */}
            <div className="bg-dark text-white p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 italic text-gold">Fast Track Your Glow</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Skip the form and secure your <strong>FREE consultation</strong> immediately via our online booking portal.
                </p>
                <a 
                  href="https://ivmedispa.eu.zenoti.com/webstoreNew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-amber-500 text-black px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                >
                  Book Now 
                </a>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all"></div>
            </div>
          </div>

          {/* Right Side: Contact Form (Updated with isSent logic) */}
          <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm min-h-[600px] flex flex-col justify-center transition-all duration-500">
            {!isSent ? (
              <>
                <h2 className="text-3xl font-bold text-dark mb-2">Send Us A Message</h2>
                <p className="text-gray-500 mb-10">Have a specific question? We usually respond within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-dark mb-2 uppercase tracking-widest">Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Your Name"
                        className="w-full bg-zinc-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all outline-none text-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-dark mb-2 uppercase tracking-widest">Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="email@example.com"
                        className="w-full bg-zinc-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all outline-none text-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark mb-2 uppercase tracking-widest">Treatment of Interest</label>
                    <div className="relative">
                      <select required className="w-full bg-zinc-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all outline-none text-dark appearance-none cursor-pointer">
                        <option value="" disabled selected>Select a treatment...</option>
                        <option value="laser">Laser Hair Removal</option>
                        <option value="peels">Chemical Peels</option>
                        <option value="facials">Bespoke Facials</option>
                        <option value="analyser">Skin Analyser</option>
                        <option value="tattoo">Tattoo Removal</option>
                        <option value="ipixel">iPixel</option>
                        <option value="other">Other / General Enquiry</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark mb-2 uppercase tracking-widest">Message</label>
                    <textarea 
                      required
                      rows="4"
                      placeholder="Tell us about your skin goals..."
                      className="w-full bg-zinc-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all outline-none text-dark"
                    ></textarea>
                  </div>

                  <div className="flex justify-center mt-8">
                    <button 
                      type="submit"
                      className="w-full max-w-md bg-gold hover:bg-amber-500 text-black font-bold py-5 rounded-2xl transition shadow-xl flex items-center justify-center gap-3 text-lg active:scale-[0.98]"
                    >
                      SEND MESSAGE 
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* Success UI - Client feedback */
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-50 p-6 rounded-full">
                    <CheckCircle2 size={64} className="text-green-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4 italic">Message Initiated!</h2>
                <p className="text-gray-600 mb-8 text-lg max-w-sm mx-auto">
                  Thank you! We've opened WhatsApp to complete your enquiry. Our team will be with you shortly.
                </p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="text-gold font-bold hover:underline underline-offset-4"
                >
                  Need to send another message?
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="w-full h-[350px] md:h-[450px] bg-zinc-100 rounded-[2.5rem] overflow-hidden relative shadow-inner grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            title="Sai Care Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.123456789!2d-3.41234567!3d56.01234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTCheckingXzM2JzQ0LjQiTiAzwrAyNScwNC40Ilc!5e0!3m2!1sen!2suk!4v1234567890" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}