import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { X, Clock, CheckCircle2 } from 'lucide-react';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import useScrollLock from '../hooks/useScrollLock.js';
import { CLINIC } from '../constants.js';
import { TREATMENTS } from '../skincare.js';

const CATEGORIES = [
  { id: 'All',          label: 'All Treatments'       },
  { id: 'Facial',       label: 'Facial Treatments'    },
  { id: 'Skin',         label: 'Skin Treatments'      },
  { id: 'Laser',        label: 'Laser Hair Removal'   },
  { id: 'Hair',         label: 'Hair & Scalp'         },
  { id: 'Wellness',     label: 'Wellness Treatments'  },
];

const CATEGORY_ORDER = CATEGORIES.map((c) => c.id);
const SORTED = [...TREATMENTS].sort(
  (a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
);

export default function Skincare() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  useScrollLock(!!selectedTreatment);

  const requested    = searchParams.get('category');
  const activeFilter = CATEGORY_ORDER.includes(requested) ? requested : 'All';

  const displayed =
    activeFilter === 'All'
      ? SORTED
      : SORTED.filter((t) => t.category === activeFilter);

  const handleCategoryChange = (id) => {
    setSearchParams(id === 'All' ? {} : { category: id }, { replace: true });
  };

  return (
    <>
      <PageSEO
        title="Skincare & Laser Treatments | Sai Skin Care — Rosyth, Dunfermline"
        description="Browse Sai Skin Care's full skincare menu — Facials, Meso & Cosmelan Peels, Microneedling, LED Light Therapy, Laser Hair Removal and more. Rosyth, Dunfermline."
        canonical="https://saiskin.co.uk/"
      />

      <PageWrapper>
        <div className="bg-white">
          <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-cream">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-3">
                Exclusively at Sai Skin Care
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-5 text-dark">
                Professional Skincare
              </h1>
              <p className="text-base md:text-lg text-muted leading-relaxed font-light italic font-serif">
                "We exclusively use and recommend premium CosMedix clinical skincare — chosen for results, not reputation."
              </p>
            </div>
          </section>

          <nav className="py-5 bg-white border-b border-cream-dark" aria-label="Treatment categories">
            <ul className="flex flex-wrap justify-center gap-2 px-6" role="list">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${
                      activeFilter === cat.id
                        ? 'bg-gold text-white shadow-md'
                        : 'bg-cream text-muted hover:text-gold'
                    }`}
                    aria-pressed={activeFilter === cat.id}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <section className="py-12 max-w-6xl mx-auto px-6" aria-label="Skincare treatments">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {displayed.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedTreatment(item)}
                  className="group cursor-pointer bg-white border border-cream-dark rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gold/5 transition-all duration-500"
                >
                  <div className="bg-cream aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={`${item.name} at Sai Skin Care`}
                      className="w-full h-full object-contain object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-dark">View Details</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-[8px] uppercase tracking-widest text-gold font-bold mb-1">{item.category}</p>
                    <h2 className="font-serif text-sm md:text-base font-semibold mb-1.5 text-dark line-clamp-1">
                      {item.name}
                    </h2>
                    <p className="font-serif text-sm font-bold text-dark">{item.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </PageWrapper>

      {selectedTreatment && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-dark/70 backdrop-blur-sm"
            onClick={() => setSelectedTreatment(null)}
            aria-hidden="true"
          />

          <div
            className="relative bg-white rounded-4xl max-w-5xl w-full h-[90vh] md:h-[80vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sk-modal-title"
          >
            <button
              onClick={() => setSelectedTreatment(null)}
              className="absolute top-5 right-5 z-20 bg-white/80 backdrop-blur p-2 rounded-full hover:rotate-90 transition-all shadow-md"
              aria-label="Close"
            >
              <X size={19} aria-hidden="true" />
            </button>

            <div className="md:w-[40%] w-full h-[280px] md:h-auto shrink-0 overflow-hidden bg-cream flex items-center justify-center p-2">
              <div className="relative inline-block max-w-full max-h-full">
                <img
                  src={selectedTreatment.modalImage || selectedTreatment.image}
                  alt={selectedTreatment.modalImage ? `${selectedTreatment.name} before and after` : selectedTreatment.name}
                  className="block w-auto h-auto max-w-full max-h-[264px] md:max-h-[calc(80vh-1rem)] object-contain"
                />
                {selectedTreatment.modalImage && (
                  <>
                    <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-dark shadow-sm">
                      Before
                    </span>
                    <span className="absolute bottom-3 right-3 bg-gold text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      After
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-white">
              <div className="max-w-xl">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2">
                  {selectedTreatment.category}
                </p>
                <h2 id="sk-modal-title" className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-dark leading-tight">
                  {selectedTreatment.name}
                </h2>

                <div className="flex gap-10 mb-9 border-y border-cream-dark py-5">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted/50 mb-1">Price</p>
                    <p className="font-serif text-2xl font-bold text-gold">{selectedTreatment.price}</p>
                  </div>
                  {selectedTreatment.time && (
                    <div className="border-l border-cream-dark pl-10">
                      <p className="text-[10px] uppercase font-bold text-muted/50 mb-1">Duration</p>
                      <p className="font-serif text-2xl font-bold text-dark flex items-center gap-2">
                        <Clock size={19} className="text-gold" aria-hidden="true" />
                        {selectedTreatment.time}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark mb-3 border-l-2 border-gold pl-4">
                      About This Treatment
                    </h4>
                    <p className="text-muted leading-relaxed text-[15px]">{selectedTreatment.description}</p>
                  </section>

                  <section className="bg-cream p-6 rounded-2xl border border-cream-dark">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-dark mb-2">Key Benefits</h4>
                    <p className="text-muted text-sm italic">{selectedTreatment.products}</p>
                  </section>

                  <section>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-gold mb-2 flex items-center gap-2">
                      <CheckCircle2 size={15} aria-hidden="true" /> What to Expect
                    </h4>
                    <p className="text-dark font-medium leading-relaxed text-sm">{selectedTreatment.results}</p>
                  </section>

                  <div className="pt-4">
                    <a
                      href={CLINIC.booking}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-gold hover:bg-gold-dark text-white py-5 rounded-2xl font-bold text-base transition-all shadow-lg hover:shadow-gold/20"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}