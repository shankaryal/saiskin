import React from 'react';
import { ShieldCheck, Target, Heart, Sparkles, ExternalLink } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="text-gold" size={28} />,
      title: "Innovation",
      description: "Utilising the latest medical-grade technology and non-surgical equipment to deliver superior results."
    },
    {
      icon: <ShieldCheck className="text-gold" size={28} />,
      title: "Safety First",
      description: "Our treatments are performed using FDA-approved technology with a focus on clinical excellence and safety."
    },
    {
      icon: <Heart className="text-gold" size={28} />,
      title: "Personalised Care",
      description: "We don't believe in 'one size fits all'. Every treatment plan is tailored to your unique skin journey."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero / Header Section */}
      <section className="py-20 md:py-32 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-dark italic">
            About Sai Care
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
            "Redefining aesthetics through innovation, precision, and personalised care."
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Replace with actual clinic/founder image */}
              <div className="aspect-[4/5] bg-zinc-100 rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/about.jpg" 
                  alt="Sai Care Clinic Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gold text-black p-8 rounded-3xl shadow-xl hidden md:block">
                <Sparkles size={32} className="mb-2" />
                <p className="font-bold text-2xl">Advanced</p>
                <p className="text-sm uppercase tracking-widest font-semibold">Technology</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-dark">Our Vision</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Our vision at Sai Care is to revolutionise the aesthetic industry by establishing 
                  a cutting-edge clinic that harnesses the power of innovative equipment and technology.
                </p>
                <p>
                  As pioneers in the field, we aim to offer unparalleled skin and hair treatments that set new 
                  industry standards. We aspire to be the go-to destination for customers seeking advanced and effective 
                  non-surgical solutions, while also providing a luxurious and personalised experience.
                </p>
              </div>
              
              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div>
                  <p className="text-3xl font-bold text-dark">100%</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Safe Results</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-dark">FDA</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Approved Tech</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-dark">FREE</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Consultations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-dark text-white rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold italic mb-4">The Sai Care Standard</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Our core values guide every treatment we perform and every client we welcome.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-8 italic">
            Start Your Transformation Today
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Experience the next generation of aesthetic treatments in a luxurious, professional environment.
          </p>
          
          <a 
            href="https://ivmedispa.eu.zenoti.com/webstoreNew" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-gold hover:bg-amber-500 text-black px-12 py-6 rounded-2xl text-lg font-bold transition-all shadow-xl hover:shadow-gold/20 flex items-center gap-3">
              Book Your Free Consultation <ExternalLink size={20} />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}