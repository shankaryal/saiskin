import { ShieldCheck, Target, Heart, Sparkles, ExternalLink } from 'lucide-react';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import { CLINIC } from '../constants';

const VALUES = [
  {
    icon: <Target className="text-gold" size={28} aria-hidden="true" />,
    title: "Innovation",
    description: "We utilise the latest medical-grade technology and non-surgical equipment to deliver superior, measurable results."
  },
  {
    icon: <ShieldCheck className="text-gold" size={28} aria-hidden="true" />,
    title: "Safety First",
    description: "All treatments are performed using FDA-approved technology with a focus on clinical excellence and your safety."
  },
  {
    icon: <Heart className="text-gold" size={28} aria-hidden="true" />,
    title: "Personalised Care",
    description: "We don't believe in 'one size fits all'. Every treatment plan is tailored to your unique skin type and goals."
  }
];

export default function About() {
  return (
    <>
      <PageSEO
        title="About Us | Sai Care Skin & Hair Clinic, Rosyth"
        description="Learn about Sai Care — a premium aesthetic clinic in Rosyth, Dunfermline. Our vision is to revolutionise aesthetics through innovation, precision and personalised care using FDA-approved technology."
      />

      <PageWrapper>
        <div className="bg-white">
          
          {/* Hero - Light Background (#faf6f0) */}
          <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-[#faf6f0]" aria-labelledby="about-heading">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Our Story</p>
              <h1 id="about-heading" className="font-serif text-4xl md:text-6xl font-semibold mb-8 text-[#0d0d0d]">
                About Sai Care
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light italic font-serif">
                "Redefining aesthetics through innovation, precision, and personalised care."
              </p>
            </div>
          </section>

          {/* Vision Section */}
          <section className="py-16 md:py-24" aria-labelledby="vision-heading">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="aspect-[4/5] bg-gray-100 rounded-5xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/about.jpg"
                      alt="Sai Care clinic interior in Rosyth, Dunfermline"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gold text-white p-7 rounded-4xl shadow-xl hidden md:block">
                    <Sparkles size={28} className="mb-2" aria-hidden="true" />
                    <p className="font-serif font-bold text-xl">Advanced</p>
                    <p className="text-xs uppercase tracking-widest font-semibold mt-0.5">Technology</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <h2 id="vision-heading" className="font-serif text-3xl md:text-4xl font-semibold text-[#0d0d0d]">
                    Our Vision
                  </h2>
                  <div className="space-y-5 text-gray-600 leading-relaxed">
                    <p>
                      Our vision at Sai Care is to revolutionise the aesthetic industry by establishing 
                      a cutting-edge clinic that harnesses the power of innovative equipment and technology.
                    </p>
                    <p>
                      As pioneers in the field, we aim to offer unparalleled skin and hair treatments that set new 
                      industry standards — becoming the go-to destination for clients seeking advanced, effective 
                      non-surgical solutions in a luxurious, personalised environment.
                    </p>
                  </div>

                  <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                    {[
                      { value: '100%', label: 'Safe Results' },
                      { value: 'FDA', label: 'Approved Tech' },
                      { value: 'FREE', label: 'Consultations' },
                    ].map(({ value, label }) => (
                      <div key={label}>
                        <dt className="sr-only">{label}</dt>
                        <dd>
                          <span className="font-serif text-3xl font-bold text-[#0d0d0d] block">{value}</span>
                          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{label}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>

          {/* Values (Standard) Section - Also changed to Light Background */}
          <section className="py-16 md:py-24 bg-[#faf6f0]" aria-labelledby="values-heading">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-14">
                <h2 id="values-heading" className="font-serif text-3xl md:text-4xl font-semibold italic mb-4 text-[#0d0d0d]">
                  The Sai Care Standard
                </h2>
                <p className="text-gray-500 max-w-lg mx-auto text-sm">
                  Our core values guide every treatment we perform and every client we welcome.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {VALUES.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-100 p-8 md:p-10 rounded-4xl hover:shadow-xl hover:shadow-gold/5 transition-all group"
                  >
                    <div className="mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                      {value.icon}
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-[#0d0d0d]">{value.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 md:py-32 text-center bg-white" aria-labelledby="cta-heading">
            <div className="max-w-2xl mx-auto px-6">
              <h2 id="cta-heading" className="font-serif text-3xl md:text-5xl font-semibold text-[#0d0d0d] mb-6">
                Start Your Transformation Today
              </h2>
              <p className="text-gray-500 mb-12 leading-relaxed">
                Experience the next generation of aesthetic treatments in a luxurious, professional environment in Rosyth, Dunfermline.
              </p>
              <a
                href={CLINIC.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-10 py-5 rounded-2xl text-base font-semibold transition-all shadow-lg hover:shadow-gold/20"
              >
                Book Your Free Consultation <ExternalLink size={18} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}