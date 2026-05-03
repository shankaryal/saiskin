import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { allTreatments } from './Treatments.jsx';
import { CLINIC } from '../constants';
import PageWrapper from '../components/PageWrapper.jsx';
import PageSEO from '../components/PageSEO.jsx';

export default function TreatmentDetail() {
  const { slug } = useParams();
  const treatment = allTreatments.find(t => t.slug === slug);

  if (!treatment) {
    return (
      <PageWrapper>
        <div className="min-h-[70vh] flex items-center justify-center bg-white px-6">
          <div className="text-center max-w-md">
            <h1 className="font-serif text-4xl font-semibold mb-6 text-[#0d0d0d]">Treatment Not Found</h1>
            <p className="text-gray-500 mb-10 leading-relaxed">
              The treatment you're looking for doesn't exist or may have moved.
            </p>
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-gold/20"
            >
              <ArrowLeft size={18} /> Back to All Treatments
            </Link>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <>
      <PageSEO 
        title={`${treatment.title} | Sai Care Skin & Hair Clinic`}
        description={`${treatment.shortDesc} Book a professional consultation at Sai Care in Rosyth, Dunfermline.`}
      />

      <PageWrapper>
        <div className="bg-white">
          
          {/* Header/Hero Section - Light Background (#faf6f0) */}
          <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#faf6f0]">
            <div className="max-w-4xl mx-auto px-6">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-gray-400 text-[11px] uppercase tracking-widest font-bold" role="list">
                  <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
                  <li aria-hidden="true"><ChevronRight size={12} /></li>
                  <li><Link to="/treatments" className="hover:text-gold transition-colors">Treatments</Link></li>
                  <li aria-hidden="true"><ChevronRight size={12} /></li>
                  <li className="text-gold" aria-current="page">{treatment.title}</li>
                </ol>
              </nav>

              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-[#0d0d0d] mb-8 leading-tight">
                {treatment.title}
              </h1>

              {/* Quick Info Bar */}
              {(treatment.duration || treatment.price) && (
                <div className="flex flex-wrap gap-4">
                  {treatment.duration && (
                    <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm">
                      <Clock size={18} className="text-gold" />
                      <span className="text-sm font-semibold text-[#0d0d0d]">{treatment.duration}</span>
                    </div>
                  )}
                  {treatment.price && (
                    <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm">
                      <Tag size={18} className="text-gold" />
                      <span className="text-sm font-semibold text-[#0d0d0d]">{treatment.price}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Main Content - White Background */}
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
                {/* Left Column: Text */}
                <div className="lg:col-span-7">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                      {treatment.fullDesc}
                    </p>
                    <p className="text-gray-500 leading-relaxed italic border-l-2 border-gold pl-6">
                      At Sai Care, every treatment is performed using the latest medical-grade technology 
                      in a calm, professional environment. We tailor each session to your individual skin 
                      type and goals for exceptional, lasting results.
                    </p>
                  </div>

                  {/* Why Choose Section */}
                  <div className="mt-16 bg-[#faf6f0] rounded-[2.5rem] p-8 md:p-12">
                    <h2 className="font-serif text-2xl font-semibold text-[#0d0d0d] mb-6">
                      Why Choose Sai Care?
                    </h2>
                    <ul className="space-y-4">
                      {[
                        'FDA-approved, medical-grade technology',
                        'Personalised plans tailored to your skin',
                        'Free initial consultation included',
                        'Expert clinicians based in Rosyth, Fife',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-4 text-gray-600 text-[15px]">
                          <span className="bg-gold/10 text-gold rounded-full p-1 mt-0.5">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Image & Sidebar */}
                <div className="lg:col-span-5">
                  <div className="sticky top-32 space-y-8">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gold/5 bg-[#faf6f0] aspect-[4/5]">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <a
                        href={CLINIC.booking}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-gold hover:bg-gold-dark text-white font-semibold py-5 rounded-2xl transition-all shadow-lg hover:shadow-gold/20"
                      >
                        Book This Treatment 
                      </a>
                      <Link
                        to="/contact"
                        className="flex items-center justify-center border border-gray-200 hover:border-gold text-[#0d0d0d] font-semibold py-5 rounded-2xl transition-all"
                      >
                        Ask a Question
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Nav */}
              <div className="mt-24 pt-8 border-t border-gray-100">
                <Link
                  to="/treatments"
                  className="inline-flex items-center gap-3 text-gold hover:text-gold-dark font-bold text-[11px] uppercase tracking-widest transition-colors"
                >
                  <ArrowLeft size={16} /> Back to All Treatments
                </Link>
              </div>
            </div>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}