import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import useScrollLock from '../hooks/usesScrollLock.js';
import PageWrapper from '../components/PageWrapper.jsx';
import PageSEO from '../components/PageSEO.jsx';
import { CLINIC } from '../constants';

const FILTERS = [
  { id: 'All',           label: 'All Products'         },
  { id: 'Masks',         label: 'Masks'                },
  { id: 'Cleansers',     label: 'Cleansers & Toners'   },
  { id: 'Moisturisers',  label: 'Moisturisers & SPFs'  },
];

const PRODUCTS = [
  {
    id: 1, category: 'Masks',
    name: "Detox Activated Charcoal Mask",
    size: "74g", price: "£57.00", brand: "CosMedix",
    image: "/images/detox.jpg",
    description: "A powerful detoxifying mask that draws out impurities and toxins while gently exfoliating the skin. Ideal for congested and dull skin.",
    ingredients: "Activated Charcoal, Kaolin Clay, Aloe Vera, Diatomaceous Earth",
    howToUse: "Apply a thin layer to clean, dry skin. Leave on for 10–15 minutes. Use 1–3 times weekly."
  },
  {
    id: 2, category: 'Masks',
    name: "Rescue with Cherry Extract Balm & Mask",
    size: "50g", price: "£42.75", brand: "CosMedix",
    image: "/images/Rescue.jpg",
    description: "Intensive hydrating balm and mask that rescues dry, irritated skin with antioxidant-rich cherry extract.",
    ingredients: "Cherry Extract, Shea Butter, Hyaluronic Acid, Willow Herb",
    howToUse: "As a mask: Apply a thick layer for 15 minutes. As a balm: Massage into irritated areas as needed."
  },
  {
    id: 3, category: 'Masks',
    name: "Pure Enzymes Exfoliating Mask",
    size: "60ml", price: "£56.00", brand: "CosMedix",
    image: "/images/Rescue.jpg",
    description: "A refreshing cranberry enzyme mask that gently exfoliates and detoxifies the skin, revealing a brighter complexion.",
    ingredients: "Papaya Enzyme, Pineapple Enzyme, Cranberry, L-Lactic Acid",
    howToUse: "Apply to clean, damp skin. Leave on for 3–10 minutes. Use 1–2 times per week."
  },
  {
    id: 4, category: 'Cleansers',
    name: "Gentle Clean Cleansing Gel",
    size: "150ml", price: "£38.00", brand: "CosMedix",
    image: "/images/Rescue.jpg",
    description: "A gentle yet effective cleanser that removes makeup and impurities without stripping the skin's natural moisture barrier.",
    ingredients: "Aloe Vera, Green Tea, Chamomile, Sodium Hyaluronate",
    howToUse: "Massage onto damp face and neck. Rinse with lukewarm water. Use morning and night."
  },
  {
    id: 5, category: 'Cleansers',
    name: "Benefit Clean Gentle Cleanser",
    size: "150ml", price: "£36.50", brand: "CosMedix",
    image: "/images/Rescue.jpg",
    description: "Daily gentle cleanser suitable for all skin types, including sensitive and post-treatment skin.",
    ingredients: "Herbal Amaranth, Sandalwood, Grapefruit Peel Oil",
    howToUse: "Apply to wet hands, massage into a light lather. Work over face and neck, then rinse well."
  },
  {
    id: 6, category: 'Moisturisers',
    name: "Hydrate+ SPF 30 Moisturising Sunscreen",
    size: "60ml", price: "£48.00", brand: "CosMedix",
    image: "/images/Rescue.jpg",
    description: "A non-greasy, antioxidant-rich daily moisturiser with broad-spectrum SPF 30 protection. Lightweight and fast-absorbing.",
    ingredients: "Zinc Oxide (Physical Sunscreen), Vitamin E, Olive Leaf Extract",
    howToUse: "Apply generously 15 minutes before sun exposure. Reapply every 2 hours when outdoors."
  }
];

export default function Skincare() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useScrollLock(!!selectedProduct);

  const filtered = activeFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <>
      <PageSEO
        title="Professional Skincare Products | Sai Care, Rosyth"
        description="Shop CosMedix professional skincare at Sai Care in Rosyth, Dunfermline. Medical-grade masks, cleansers, moisturisers and SPF products recommended by our skin specialists."
      />

      <PageWrapper>
        <div className="bg-white">
          
          {/* Hero Section - Light Background (#faf6f0) */}
          <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-[#faf6f0]" aria-labelledby="skincare-heading">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">Exclusively at Sai Care</p>
              <h1 id="skincare-heading" className="font-serif text-4xl md:text-6xl font-semibold mb-8 text-[#0d0d0d]">
                Professional Skincare
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light italic font-serif">
                "We exclusively use and recommend premium CosMedix clinical skincare — trusted by skin professionals worldwide."
              </p>
            </div>
          </section>

          {/* Product Grid Section - White Background */}
          <section className="py-16 md:py-24 bg-white" aria-labelledby="products-heading">
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Filter Tabs */}
              <nav aria-label="Product category filter" className="mb-16">
                <ul className="flex flex-wrap justify-center gap-3" role="list">
                  {FILTERS.map((f) => (
                    <li key={f.id}>
                      <button
                        onClick={() => setActiveFilter(f.id)}
                        className={`px-7 py-3 rounded-full text-xs font-semibold tracking-wide transition-all ${
                          activeFilter === f.id
                            ? 'bg-gold text-white shadow-md'
                            : 'bg-[#faf6f0] text-gray-500 hover:text-[#0d0d0d]'
                        }`}
                        aria-pressed={activeFilter === f.id}
                      >
                        {f.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" role="list">
                {filtered.map((product) => (
                  <article
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="group cursor-pointer bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 flex flex-col"
                    role="listitem"
                  >
                    <div className="bg-[#faf6f0] aspect-square flex items-center justify-center p-12 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={`${product.name} by ${product.brand}`}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-end justify-center pb-6">
                        <span className="bg-white text-[#0d0d0d] px-6 py-2 rounded-full font-semibold text-[10px] tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-sm">
                          VIEW DETAILS
                        </span>
                      </div>
                    </div>
                    <div className="p-6 text-center flex flex-col gap-2">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">{product.brand}</p>
                      <h2 className="font-serif text-lg font-semibold text-[#0d0d0d] group-hover:text-gold transition-colors line-clamp-2 leading-tight">
                        {product.name}
                      </h2>
                      <p className="text-xs text-gray-400">{product.size}</p>
                      <p className="font-serif text-xl font-bold text-[#0d0d0d] mt-2">{product.price}</p>
                    </div>
                  </article>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-400 italic">No products found in this category.</p>
                </div>
              )}
            </div>
          </section>

          {/* Consultation CTA Section - Light Background */}
          <section className="py-24 md:py-32 text-center bg-[#faf6f0]" aria-labelledby="cta-heading">
            <div className="max-w-2xl mx-auto px-6">
              <h2 id="cta-heading" className="font-serif text-3xl md:text-5xl font-semibold text-[#0d0d0d] mb-6">
                Unsure which product is right for you?
              </h2>
              <p className="text-gray-500 mb-12 leading-relaxed">
                Book a free skin consultation with our specialists in Rosyth. We will analyse your skin and create a bespoke CosMedix regime tailored to your goals.
              </p>
              <a
                href={CLINIC.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-10 py-5 rounded-2xl text-base font-semibold transition-all shadow-lg hover:shadow-gold/20"
              >
                Book Free Consultation <ExternalLink size={18} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </PageWrapper>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-name"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
            aria-hidden="true"
          />

          <div className="relative bg-white rounded-[2rem] max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            
            <div className="flex justify-end p-5 border-b border-gray-50 shrink-0">
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-[#faf6f0] hover:bg-[#f0e8db] rounded-full p-2.5 transition-all hover:rotate-90 duration-300"
                aria-label="Close product details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-[#faf6f0] p-10 flex items-center justify-center shrink-0">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full max-w-[320px] aspect-square object-contain drop-shadow-xl"
                />
              </div>

              <div className="flex-1 p-8 md:p-12">
                <p className="text-[11px] uppercase tracking-widest font-bold text-gold mb-3">{selectedProduct.brand}</p>
                <h2 id="product-modal-name" className="font-serif text-3xl md:text-4xl font-semibold text-[#0d0d0d] mb-6 leading-tight">
                  {selectedProduct.name}
                </h2>

                <div className="inline-flex items-center gap-4 bg-[#faf6f0] px-6 py-3 rounded-2xl mb-10">
                  <span className="font-serif text-2xl font-bold text-[#0d0d0d]">{selectedProduct.price}</span>
                  <span className="text-gray-200 text-xl">|</span>
                  <span className="text-sm font-medium text-gray-500">{selectedProduct.size}</span>
                </div>

                <div className="space-y-8">
                  {[
                    { heading: 'Description',    content: selectedProduct.description  },
                    { heading: 'Key Ingredients', content: selectedProduct.ingredients },
                    { heading: 'How to Use',      content: selectedProduct.howToUse     },
                  ].map(({ heading, content }) => (
                    <section key={heading}>
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0d0d0d] mb-4 border-l-2 border-gold pl-4">
                        {heading}
                      </h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed">{content}</p>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}