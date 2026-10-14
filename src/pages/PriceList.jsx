import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import { CLINIC, ONLINE_CONSULTATION } from '../constants';

const CATEGORIES = [
  {
    id: 'consultations',
    title: "Consultations",
    description: "Every great result starts with understanding your skin and hair.",
    items: [
      { name: "Consultation + Zemits Skin Analyser", price: "FREE", time: "30 mins" },
      { name: "Skin & Hair Consultation",            price: "FREE", time: "30 mins" },
      { name: `Online Consultation (${ONLINE_CONSULTATION.platforms})`, price: ONLINE_CONSULTATION.price + ".00", time: ONLINE_CONSULTATION.duration },
    ],
  },
  {
    id: 'facial',
    title: "Facial Treatments",
    description: "Hydrating, resurfacing and bespoke facials tailored to your skin on the day.",
    items: [
      { name: "Hydra Facial + LED", price: "£145.00", time: "1 hr 30 mins" },
      { name: "Hydra Facial", price: "£120.00", time: "1 hr 15 mins" },
      { name: "Bespoke Facial With LED", price: "£120.00", time: "1 hr" },
      { name: "Express Facial", price: "£60.00", time: "30 mins" },
      { name: "Korean Glass Skin Facial", price: "£99.00", time: "1 hr" },
      { name: "Dermaplaning with Skin Booster", price: "£65.00", time: "30 mins" },
      { name: "Dermaplaning + Bespoke Facial", price: "£145.00", time: "1 hr 30 mins" },
      { name: "Dermaplaning + HydraFacial", price: "£145.00", time: "1 hr 15 mins" },
      { name: "Dermaplaning + LED", price: "£99.00", time: "1 hr" },
    ],
  },
  {
    id: 'skin-advanced',
    title: "Skin & Advanced Treatments",
    description: "Skin analysis, microneedling, peels and LED therapy for targeted, lasting results.",
    items: [
      { name: "Microneedling with Skin Booster + LED", price: "£170.00", time: "1 hr 30 mins" },
      { name: "Microneedling + Skin Booster", price: "£145.00", time: "1 hr" },
      { name: "HydraFacial + Microneedling + LED", price: "£249.00", time: "2 hrs" },
      { name: "Meso Peel + LED", price: "£145.00", time: "1 hr" },
      { name: "Cosmelan Depigmentation Programme (1 Month Treatment)", price: "£1,200.00", time: "1 hr" },
      { name: "Cosmelan Depigmentation Programme (6 Months Treatment)", price: "£1,800.00", time: "45 mins" },
      { name: "LED Therapy Treatment (Dermalux)", price: "£45.00", time: "30 mins" },
      { name: "LED Therapy (Add On) Dermalux", price: "£25.00", time: "15 mins" },
      { name: "Stretch Marks Treatment with Microneedling", price: "£145.00", time: "1 hr" },
    ],
  },
  {
    id: 'skin-tag-milia',
    title: "Skin Concerns & Removal",
    description: "Safe, precise removal of skin tags, milia and cherry angiomas by a fully qualified clinician.",
    items: [
      { name: "Up to 1 Skin Tag Removal", price: "£40.00", time: "15 mins" },
      { name: "Medium Skin Tag Removal", price: "£55.00", time: "30 mins" },
      { name: "Large Skin Tag Removal", price: "£70.00", time: "45 mins" },
      { name: "Up to 4 Skin Tag Removal", price: "£100.00", time: "1 hr" },
      { name: "Up to 7 Skin Tag Removal", price: "£150.00", time: "1 hr 30 mins" },
      { name: "Milia Removal up to 3", price: "£45.00", time: "30 mins" },
      { name: "Milia Removal up to 6", price: "£80.00", time: "45 mins" },
      { name: "Cherry Angioma / Blood Spot Removal", price: "From £45.00" },
    ],
  },
  {
    id: 'hair-wellness',
    title: "Hair & Wellness Treatments",
    description: "Hair restoration and wellness programmes to support you from the inside out.",
    items: [
      { name: "Hair Loss Treatment with Exosome", price: "£145.00", time: "1 hr" },
      { name: "Alopecia Treatment with Dutexome (Hair Restoration)", price: "£145.00", time: "1 hr" },
      { name: "Weight Management & Wellness Programme with Unicity", price: "£148.00", time: "30 mins" },
    ],
  },
  {
    id: 'womens-laser',
    title: "Women's Laser Hair Removal",
    description: "Virtually painless laser hair removal, suitable for all skin types and tones.",
    items: [
      { name: "Women's Upper Lip Laser Hair Removal", price: "£35.00", time: "30 mins" },
      { name: "Women's Chin Laser Hair Removal", price: "£35.00" },
      { name: "Women's Side of Face Hair Removal", price: "£45.00", time: "30 mins" },
      { name: "Women's Full Face Hair Removal", price: "£80.00", time: "1 hr" },
      { name: "Women's Neck Hair Removal", price: "£40.00", time: "30 mins" },
      { name: "Women's Underarm Hair Removal", price: "£45.00", time: "45 mins" },
      { name: "Women's Half Arm Laser Hair Removal", price: "£99.00", time: "45 mins" },
      { name: "Women's Full Arm Laser Hair Removal", price: "£130.00", time: "45 mins" },
      { name: "Women's Stomach Hair Removal", price: "£90.00", time: "1 hr" },
      { name: "Women's Back Hair Removal", price: "£120.00", time: "1 hr 30 mins" },
      { name: "Women's Bikini Hair Removal", price: "£60.00", time: "45 mins" },
      { name: "Brazilian + Peri Anal Laser Hair Removal", price: "£95.00", time: "1 hr" },
      { name: "Buttocks Laser Hair Removal", price: "£65.00", time: "1 hr" },
      { name: "Women's Half Leg Hair Removal", price: "£85.00", time: "1 hr 30 mins" },
      { name: "Women's Full Leg Hair Removal", price: "£199.00", time: "2 hrs" },
      { name: "Women's Full Body Hair Removal", price: "£500.00", time: "3 hrs" },
    ],
  },
  
];

function PriceRow({ item, index, total }) {
  const isLast = index === total - 1;
  return (
    <div className={`flex items-start justify-between gap-4 py-4 ${!isLast ? 'border-b border-cream-dark' : ''}`}>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-snug text-dark">
          {item.name}
        </p>
        {item.time && (
          <p className="text-xs text-muted mt-0.5 leading-relaxed">{item.time}</p>
        )}
        {item.detail && (
          <p className="text-xs text-muted mt-0.5 leading-relaxed">{item.detail}</p>
        )}
        {item.course && (
          <p className="text-xs text-muted mt-1 flex items-center gap-1.5">
            <span className="font-serif font-bold text-gold">{item.course.price}</span>
            <span className="text-muted/30">·</span>
            <span>{item.course.label}</span>
          </p>
        )}
      </div>
      <div className="shrink-0 text-right">
        {item.price === 'FREE' ? (
          <span className="inline-flex items-center bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            FREE
          </span>
        ) : (
          <span className={`font-serif text-xl font-bold leading-none ${item.highlight ? 'text-gold' : 'text-dark'}`}>
            {item.price}
          </span>
        )}
        {item.course && (
          <p className="text-[10px] text-muted/40 mt-1">per session</p>
        )}
      </div>
    </div>
  );
}

function CategoryCard({ category, isOpen, onToggle, index }) {
  return (
    <div className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
      isOpen ? 'border-gold/40 shadow-lg shadow-gold/5' : 'border-cream-dark hover:border-gold/25'
    }`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${
          isOpen ? 'bg-cream' : 'bg-white hover:bg-cream/60'
        }`}
        aria-expanded={isOpen}
        aria-controls={`panel-${category.id}`}
        id={`header-${category.id}`}
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="font-serif text-2xl text-gold/20 font-bold leading-none shrink-0 hidden sm:block" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="font-serif text-lg md:text-xl font-semibold text-dark leading-tight">
                {category.title}
              </h2>
              {category.badge && (
                <span className="text-[9px] font-bold uppercase tracking-widest bg-gold text-white px-2.5 py-0.5 rounded-full shrink-0">
                  {category.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-muted mt-0.5 leading-relaxed hidden sm:block">
              {category.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {!isOpen && (
            <span className="text-xs text-muted hidden md:block">
              {category.items.length} treatment{category.items.length !== 1 ? 's' : ''}
            </span>
          )}
          <div className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? 'bg-gold border-gold text-white'
              : 'border-cream-dark text-muted hover:border-gold/40'
          }`}>
            {isOpen
              ? <Minus size={13} strokeWidth={2.5} aria-hidden="true" />
              : <Plus  size={13} strokeWidth={2.5} aria-hidden="true" />
            }
          </div>
        </div>
      </button>

      <div
        id={`panel-${category.id}`}
        role="region"
        aria-labelledby={`header-${category.id}`}
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pt-1 bg-white">
          <p className="text-xs text-muted mb-4 sm:hidden leading-relaxed">{category.description}</p>
          {category.items.map((item, i) => (
            <PriceRow key={i} item={item} index={i} total={category.items.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PriceList() {
  const [openIds, setOpenIds] = useState(new Set(['consultations', 'facial']));

  const toggle      = (id) => setOpenIds((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const expandAll   = () => setOpenIds(new Set(CATEGORIES.map((c) => c.id)));
  const collapseAll = () => setOpenIds(new Set());

  return (
    <>
      <PageSEO
        title="Price List | Sai Skin and Hair — Rosyth, Dunfermline"
        description="Transparent pricing for all Sai Skin and Hair treatments — Laser Hair Removal from £35, Facials from £60, Microneedling from £145, LED Therapy from £25. Free skin analysis and consultations in Rosyth."
        canonical="https://saiskin.co.uk/price-list"
      />

      <PageWrapper>
        <div className="bg-white">
          <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-cream" aria-labelledby="pricing-heading">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Transparent Pricing</p>
              <h1 id="pricing-heading" className="font-serif text-4xl md:text-6xl font-semibold mb-5 text-dark">
                Treatment Price List
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed font-light italic font-serif">
                "Honest, transparent pricing — because you deserve to know exactly what you're investing in."
              </p>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white" aria-label="Treatment pricing">
            <div className="max-w-3xl mx-auto px-6">
              <div className="flex items-center justify-between mb-8">
                <p className="text-xs text-muted font-medium">
                  {CATEGORIES.length} categories · click to expand
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <button
                    onClick={expandAll}
                    className="text-gold hover:text-gold-dark transition-colors underline underline-offset-4"
                  >
                    Expand all
                  </button>
                  <span className="text-muted/20">|</span>
                  <button
                    onClick={collapseAll}
                    className="text-muted hover:text-dark transition-colors underline underline-offset-4"
                  >
                    Collapse all
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {CATEGORIES.map((cat, idx) => (
                  <CategoryCard
                    key={cat.id}
                    category={cat}
                    index={idx}
                    isOpen={openIds.has(cat.id)}
                    onToggle={() => toggle(cat.id)}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 md:py-28 bg-cream" aria-labelledby="consultation-cta">
            <div className="max-w-4xl mx-auto px-6">
              <div className="bg-white rounded-5xl p-10 md:p-20 text-center shadow-xl shadow-dark/5">
                <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Free Consultation</p>
                <h2 id="consultation-cta" className="font-serif text-3xl md:text-4xl font-semibold text-dark mb-4">
                  Not Sure Where to Start?
                </h2>
                <p className="text-muted text-base leading-relaxed mb-10 max-w-lg mx-auto">
                  Sumi recommends a{' '}
                  <strong className="text-dark font-semibold">free skin analysis with the Zemits Skin Analyser</strong>{' '}
                  to determine the most effective treatment and accurate pricing for your unique skin goals.
                </p>
                <a
                  href={CLINIC.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-12 py-5 rounded-2xl text-base font-semibold transition-all shadow-lg hover:shadow-gold/20"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}