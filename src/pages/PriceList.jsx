import { useState } from 'react';
import { Plus, Minus, ExternalLink, Clock } from 'lucide-react';
import PageSEO from '../components/PageSEO.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import { CLINIC } from '../constants';

// ─── All price data ───────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: 'consultations',
    title: "Consultations",
    description: "Every great treatment starts with understanding your skin.",
    items: [
      { name: "In-Clinic Consultation",  price: "£20" },
      { name: "Online Consultation",     price: "£20" },
    ],
  },
  {
    id: 'advanced-skin',
    title: "PriceList | Sai Care Skin & Hair Clinic",
    description: "Medical-grade facials, peels and microneedling tailored to your skin.",
    items: [
      { name: "Signature Facial",                  price: "£95"  },
      { name: "Signature Facial + LED",            price: "£120" },
      { name: "Chemical Peel",                     price: "£99"  },
      { name: "Chemical Peel + LED",               price: "£120" },
      { name: "Microneedling",                     price: "£110" },
      { name: "Microneedling + LED",               price: "£130" },
      { name: "Hydrafacial",                       price: "£110" },
      { name: "Hydrafacial + LED",                 price: "£130" },
    ],
  },
  {
    id: 'dermaplaning',
    title: "Dermaplaning",
    description: "Exfoliation and peach fuzz removal for silky-smooth skin.",
    items: [
      { name: "Dermaplaning",                      price: "£65"  },
      { name: "Dermaplaning + Signature Facial",   price: "£120" },
      { name: "Dermaplaning + Hydrafacial",        price: "£130" },
    ],
  },
  {
    id: 'led',
    title: "LED Light Therapy",
    description: "DermaLux Tri-Wave MD — rejuvenates, repairs and calms all skin types.",
    items: [
      { name: "LED Add-On (15 min)",               price: "£25" },
      { name: "LED Standalone (30 min)",           price: "£40" },
    ],
  },
  {
    id: 'skin-lesion',
    title: "Skin Lesion Removal",
    description: "Safe, precise removal of unwanted skin lesions.",
    items: [
      { name: "Skin Tag Removal",                  price: "from £40" },
      { name: "Milia Removal",                     price: "from £50" },
      { name: "Cherry Angioma Removal",            price: "from £40" },
    ],
  },
  {
    id: 'laser-hair',
    title: "Laser Hair Removal",
    description: "Soprano Titanium Special Edition — virtually painless on all skin types.",
    items: [
      { name: "Upper Lip",    price: "£35"  },
      { name: "Chin",         price: "£35"  },
      { name: "Neck",         price: "£40"  },
      { name: "Sides of Face",price: "£45"  },
      { name: "Full Face",    price: "£80"  },
      { name: "Underarm",     price: "£45"  },
      { name: "Bikini",       price: "£60"  },
      { name: "Half Leg",     price: "£85"  },
      { name: "Full Leg",     price: "£120" },
      { name: "Back",         price: "£120" },
      { name: "Stomach",      price: "£90"  },
      { name: "Full Body",    price: "£250", highlight: true },
    ],
  },
  {
    id: 'laser-packages',
    title: "Laser Hair Removal Packages",
    description: "Course of 6 sessions — best value for permanent reduction.",
    badge: "6 Sessions",
    items: [
      { name: "Full Face",    price: "£420"  },
      { name: "Underarm",     price: "£240"  },
      { name: "Bikini",       price: "£320"  },
      { name: "Half Leg",     price: "£450"  },
      { name: "Full Leg",     price: "£650"  },
      { name: "Back",         price: "£650"  },
      { name: "Stomach",      price: "£480"  },
      { name: "Full Body",    price: "£1,450", highlight: true },
    ],
  },
  {
    id: 'mens-laser',
    title: "Men's Laser Hair Removal",
    description: "Dedicated pricing for men's body and face laser hair removal.",
    items: [
      { name: "Beard Line / Neck",     price: "£50"  },
      { name: "Full Face (Beard Area)",price: "£90"  },
      { name: "Chest",                 price: "£120" },
      { name: "Stomach",               price: "£100" },
      { name: "Chest + Stomach",       price: "£180" },
      { name: "Full Back",             price: "£140" },
      { name: "Back + Shoulders",      price: "£160" },
      { name: "Underarm",              price: "£50"  },
      { name: "Full Arms",             price: "£110" },
      { name: "Full Body",             price: "£300", highlight: true },
    ],
  },
  {
    id: 'mens-laser-packages',
    title: "Men's Laser Packages",
    description: "Course of 6 sessions — maximum results, best value.",
    badge: "6 Sessions",
    items: [
      { name: "Beard Line / Neck",     price: "£250"  },
      { name: "Full Face",             price: "£480"  },
      { name: "Chest",                 price: "£650"  },
      { name: "Stomach",               price: "£550"  },
      { name: "Chest + Stomach",       price: "£950"  },
      { name: "Full Back",             price: "£750"  },
      { name: "Back + Shoulders",      price: "£850"  },
      { name: "Underarm",              price: "£260"  },
      { name: "Full Arms",             price: "£600"  },
      { name: "Full Body",             price: "£1,700", highlight: true },
    ],
  },
  {
    id: 'skin-packages',
    title: "Skin Treatment Packages",
    description: "Course of 3 sessions for accelerated, visible results.",
    badge: "3 Sessions",
    items: [
      { name: "Microneedling x3",      price: "£300" },
      { name: "Chemical Peel x3",      price: "£270" },
      { name: "Hydrafacial x3",        price: "£300" },
      { name: "Signature Facial x3",   price: "£270" },
    ],
  },
  {
    id: 'advanced-courses',
    title: "Advanced Skin Courses",
    description: "Course of 6 sessions — the gold standard for lasting transformation.",
    badge: "6 Sessions",
    items: [
      { name: "Microneedling",         price: "£550" },
      { name: "Chemical Peel",         price: "£500" },
      { name: "Hydrafacial",           price: "£550" },
    ],
  },
  {
    id: 'signature-packages',
    title: "Signature Packages",
    description: "Curated programmes combining multiple treatments for dramatic results.",
    items: [
      {
        name: "Glow & Glass Skin Package",
        detail: "Hydrafacial + Dermaplaning + LED — Course of 3",
        price: "£350",
        highlight: true,
      },
      {
        name: "Clear Skin & Acne Program",
        detail: "Chemical Peel + LED — Course of 3",
        price: "£320",
        highlight: true,
      },
      {
        name: "Lift & Rejuvenation Program",
        detail: "Microneedling + LED — Course of 3",
        price: "£380",
        highlight: true,
      },
    ],
  },
  {
    id: 'hair-scalp',
    title: "Hair & Scalp Treatments",
    description: "Targeted treatments to restore scalp health and stimulate natural hair growth.",
    items: [
      {
        name: "Scalp Detox & Deep Clean",
        detail: "Removes build-up, unclogs follicles and restores scalp balance",
        price: "£75",
        course: { label: "Course of 3", price: "£210" },
      },
      {
        name: "Hair Growth Microneedling",
        detail: "Stimulates collagen, increases blood flow and reactivates dormant follicles",
        price: "£95",
        course: { label: "Course of 6", price: "£520" },
      },
      {
        name: "Hair Growth Microneedling + LED",
        detail: "Microneedling combined with DermaLux LED for enhanced results",
        price: "£120",
        course: { label: "Course of 6", price: "£650" },
      },
    ],
  },
];

// ─── Single price row ─────────────────────────────────────────────────────────
function PriceRow({ item, index, total }) {
  const isLast = index === total - 1;
  return (
    <div
      className={`flex items-start justify-between gap-4 py-4 ${
        !isLast ? 'border-b border-gray-50' : ''
      } group`}
    >
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium leading-snug ${
          item.highlight ? 'text-gold-dark' : 'text-[#0d0d0d]'
        }`}>
          {item.name}
          {item.highlight && (
            <span className="ml-2 text-[9px] font-bold uppercase tracking-widest bg-gold/10 text-gold-dark px-2 py-0.5 rounded-full align-middle">
              Best Value
            </span>
          )}
        </p>
        {item.detail && (
          <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.detail}</p>
        )}
        {item.course && (
          <p className="text-xs text-gray-400 mt-1">
            <span className="text-gold font-semibold">{item.course.price}</span>
            <span className="text-gray-300 mx-1">·</span>
            {item.course.label}
          </p>
        )}
      </div>
      <div className="shrink-0 text-right">
        <span className={`font-serif text-xl font-semibold leading-none ${
          item.price === 'FREE' ? 'text-gold' : 'text-[#0d0d0d]'
        }`}>
          {item.price}
        </span>
        {item.course && (
          <p className="text-[10px] text-gray-300 mt-0.5">per session</p>
        )}
      </div>
    </div>
  );
}

// ─── Accordion category card ──────────────────────────────────────────────────
function CategoryCard({ category, isOpen, onToggle, index }) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
      isOpen ? 'border-gold/30 shadow-md shadow-gold/5' : 'border-gray-100 hover:border-gold/20'
    }`}>
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${
          isOpen ? 'bg-[#faf6f0]' : 'bg-white hover:bg-[#faf6f0]/60'
        }`}
        aria-expanded={isOpen}
        aria-controls={`panel-${category.id}`}
        id={`header-${category.id}`}
      >
        <div className="flex items-center gap-4 min-w-0">
          {/* Number */}
          <span className="font-serif text-2xl text-gold/25 font-bold leading-none shrink-0 hidden sm:block" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="font-serif text-lg md:text-xl font-semibold text-[#0d0d0d] leading-tight">
                {category.title}
              </h2>
              {category.badge && (
                <span className="text-[9px] font-bold uppercase tracking-widest bg-gold text-white px-2.5 py-0.5 rounded-full shrink-0">
                  {category.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-0.5 leading-relaxed hidden sm:block">
              {category.description}
            </p>
          </div>
        </div>

        {/* Price preview + toggle icon */}
        <div className="flex items-center gap-3 shrink-0">
          {!isOpen && (
            <span className="text-xs text-gray-400 hidden md:block">
              {category.items.length} treatment{category.items.length !== 1 ? 's' : ''}
            </span>
          )}
          <div className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? 'bg-gold border-gold text-white'
              : 'border-gray-200 text-gray-400 group-hover:border-gold/40'
          }`}>
            {isOpen
              ? <Minus size={13} strokeWidth={2.5} />
              : <Plus  size={13} strokeWidth={2.5} />
            }
          </div>
        </div>
      </button>

      {/* Expandable panel */}
      <div
        id={`panel-${category.id}`}
        role="region"
        aria-labelledby={`header-${category.id}`}
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pt-1 bg-white">
          {/* Mobile description */}
          <p className="text-xs text-gray-400 mb-4 sm:hidden leading-relaxed">
            {category.description}
          </p>
          {category.items.map((item, i) => (
            <PriceRow
              key={i}
              item={item}
              index={i}
              total={category.items.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PriceList() {
  // Start with first 2 open so the page doesn't look empty
  const [openIds, setOpenIds] = useState(new Set(['consultations', 'advanced-skin']));

  const toggle = (id) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const expandAll  = () => setOpenIds(new Set(CATEGORIES.map(c => c.id)));
  const collapseAll = () => setOpenIds(new Set());

  return (
    <>
      <PageSEO
        title="Price List | Sai Care Skin & Laser Clinic, Dunfermline"
        description="Transparent pricing for all Sai Care treatments in Rosyth, Dunfermline — Laser Hair Removal from £35, Facials from £95, Microneedling from £110, Hair Growth Treatments from £75. Free consultations available."
      />

      <PageWrapper>
        <div className="bg-white">

          {/* ── Hero — matches About.jsx pattern exactly ─── */}
          <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#faf6f0]" aria-labelledby="pricing-heading">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">
                Transparent Pricing
              </p>
              <h1 id="pricing-heading" className="font-serif text-4xl md:text-6xl font-semibold mb-6 text-[#0d0d0d]">
                Treatment Menu
              </h1>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light italic font-serif">
                "Premium care and exceptional results — with honest, transparent pricing."
              </p>
            </div>
          </section>

          {/* ── Accordion list ──────────────────────────── */}
          <section className="py-14 md:py-20 bg-white" aria-label="Treatment pricing">
            <div className="max-w-3xl mx-auto px-6">

              {/* Expand / Collapse controls */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-xs text-gray-400 font-medium">
                  {CATEGORIES.length} categories · click to expand
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <button
                    onClick={expandAll}
                    className="text-gold hover:text-gold-dark transition-colors underline underline-offset-4"
                  >
                    Expand all
                  </button>
                  <span className="text-gray-200">|</span>
                  <button
                    onClick={collapseAll}
                    className="text-gray-400 hover:text-[#0d0d0d] transition-colors underline underline-offset-4"
                  >
                    Collapse all
                  </button>
                </div>
              </div>

              {/* Category accordion cards */}
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

          {/* ── CTA — matches About.jsx CTA section ─────── */}
          <section className="py-20 md:py-28 bg-[#faf6f0]" aria-labelledby="consultation-cta">
            <div className="max-w-4xl mx-auto px-6">
              <div className="bg-white rounded-[3rem] p-10 md:p-20 text-center shadow-xl shadow-black/5">
                <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Free Consultation</p>
                <h2 id="consultation-cta" className="font-serif text-3xl md:text-4xl font-semibold text-[#0d0d0d] mb-4">
                  Not Sure Where to Start?
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg mx-auto">
                  All prices are indicative. We recommend a{' '}
                  <strong className="text-[#0d0d0d]">Free Skin Analysis</strong>{' '}
                  to determine the best treatment course and personalised pricing for your unique skin goals.
                </p>
                <a
                  href={CLINIC.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-12 py-5 rounded-2xl text-base font-semibold transition-all shadow-lg hover:shadow-gold/20"
                >
                  Book Consultation 
                </a>
              </div>
            </div>
          </section>

        </div>
      </PageWrapper>
    </>
  );
}