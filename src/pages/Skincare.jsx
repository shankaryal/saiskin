import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function Skincare() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filters = [
    { name: 'All', label: 'ALL PRODUCTS' },
    { name: 'Masks', label: 'MASKS' },
    { name: 'Cleansers', label: 'CLEANSERS & TONERS' },
    { name: 'Moisturisers', label: 'MOISTURISERS & SPFS' },
  ];

  const allProducts = [
    {
      id: 1,
      category: 'Masks',
      name: "Detox Activated Charcoal Mask",
      size: "74g",
      price: "£57.00",
      brand: "CosMedix",
      image: "/images/detox.jpg",
      description: "A powerful detoxifying mask that draws out impurities and toxins while gently exfoliating the skin. Ideal for congested and dull skin.",
      ingredients: "Activated Charcoal, Kaolin Clay, Aloe Vera, Diatomaceous Earth",
      howToUse: "Apply a thin layer to clean, dry skin. Leave on for 10-15 minutes. Use 1-3 times weekly."
    },
    {
      id: 2,
      category: 'Masks',
      name: "Rescue with Cherry Extract Balm & Mask",
      size: "50g",
      price: "£42.75",
      brand: "CosMedix",
      image: "/images/Rescue.jpg",
      description: "Intensive hydrating balm and mask that rescues dry, irritated skin with antioxidant-rich cherry extract.",
      ingredients: "Cherry Extract, Shea Butter, Hyaluronic Acid, Willow Herb",
      howToUse: "As a mask: Apply a thick layer for 15 minutes. As a balm: Massage into irritated areas."
    },
    {
      id: 3,
      category: 'Masks',
      name: "Pure Enzymes Exfoliating Mask",
      size: "60 ml",
      price: "£56.00",
      brand: "CosMedix",
      image: "/images/Rescue.jpg",
      description: "A refreshing Cranberry Enzyme Mask that gently exfoliates and detoxifies the skin.",
      ingredients: "Papaya Enzyme, Pineapple Enzyme, Cranberry, L-Lactic Acid",
      howToUse: "Apply to clean, damp skin. Leave on for 3-10 minutes. Use 1-2 times per week."
    },
    {
      id: 4,
      category: 'Cleansers',
      name: "Gentle Clean Cleansing Gel",
      size: "150 ml",
      price: "£38.00",
      brand: "CosMedix",
      // image: "/images/products/gentle-clean.jpg",
      image: "/images/Rescue.jpg",
      description: "A gentle yet effective cleanser that removes makeup and impurities without stripping moisture.",
      ingredients: "Aloe Vera, Green Tea, Chamomile, Sodium Hyaluronate",
      howToUse: "Massage a small amount onto damp face. Rinse with lukewarm water. Use morning and night."
    },
    {
      id: 5,
      category: 'Cleansers',
      name: "Benefit Clean Gentle Cleanser",
      size: "150 ml",
      price: "£36.50",
      brand: "CosMedix",
      image: "/images/Rescue.jpg",
      // image: "/images/products/benefit-clean.jpg",
      description: "Daily gentle cleanser suitable for all skin types, including sensitive and post-operative skin.",
      ingredients: "Herbal Amaranth, Sandalwood, Grapefruit Peel Oil",
      howToUse: "Apply to wet hands and massage into a lather. Massage over face and neck."
    },
    {
      id: 6,
      category: 'Moisturisers',
      name: "Hydrate+ SPF 30 Moisturising Sunscreen",
      size: "60 ml",
      price: "£48.00",
      brand: "CosMedix",
      image: "/images/Rescue.jpg",
      description: "A non-greasy, antioxidant-rich daily moisturiser with broad-spectrum SPF 30 protection.",
      ingredients: "Zinc Oxide (Physical Sunscreen), Vitamin E, Olive Leaf Extract",
      howToUse: "Apply liberally 15 minutes before sun exposure. Reapply at least every 2 hours."
    }
  ];

  const filteredProducts = activeFilter === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeFilter);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark italic">Professional Skincare</h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            We exclusively use and recommend premium CosMedix clinical skincare products.
          </p>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16 border-b border-gray-100 pb-6">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`px-4 py-2 text-sm md:text-base font-bold tracking-widest transition-all relative
                ${activeFilter === filter.name ? 'text-gold' : 'text-gray-400 hover:text-dark'}`}
            >
              {filter.label}
              {activeFilter === filter.name && (
                <div className="absolute bottom-[-26px] left-0 w-full h-1 bg-gold rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Section with View Details Overlay */}
              <div className="bg-zinc-50 aspect-square flex items-center justify-center p-10 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* View Details Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md text-dark px-6 py-2.5 rounded-full font-bold text-xs tracking-[0.2em] shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    VIEW DETAILS
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">{product.brand}</p>
                  <h3 className="font-bold text-lg leading-tight mb-2 text-dark group-hover:text-gold transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">{product.size}</p>
                </div>
                <p className="font-bold text-xl text-dark">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* ====================== PRODUCT DETAIL MODAL ====================== */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
            
            <div className="relative p-4 border-b border-gray-50 flex justify-end bg-white z-10">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="bg-zinc-100 hover:bg-zinc-200 text-black rounded-full p-2 transition-all hover:rotate-90"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto">
              <div className="flex flex-col md:flex-row min-h-full">
                
                {/* LEFT SIDE: Sticky Image */}
                <div className="md:w-5/12 bg-zinc-50 p-8 md:p-12 flex items-start justify-center md:sticky md:top-0 h-fit">
                  <div className="aspect-square w-full max-w-[320px]">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                {/* RIGHT SIDE: Content */}
                <div className="flex-1 p-8 md:p-12 bg-white">
                  <p className="uppercase tracking-widest text-[10px] font-bold text-gold mb-2">
                    {selectedProduct.brand}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight text-dark mb-6">
                    {selectedProduct.name}
                  </h2>
                  
                  <div className="inline-flex items-center gap-3 bg-zinc-50 px-5 py-2.5 rounded-xl mb-10">
                    <span className="text-2xl font-bold text-dark">{selectedProduct.price}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-sm text-gray-500 font-semibold">{selectedProduct.size}</span>
                  </div>

                  <div className="space-y-10">
                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-dark mb-4 border-l-2 border-gold pl-3">
                        Description
                      </h4>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
                        {selectedProduct.description}
                      </p>
                    </section>

                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-dark mb-4 border-l-2 border-gold pl-3">
                        Key Ingredients
                      </h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {selectedProduct.ingredients}
                      </p>
                    </section>

                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-dark mb-4 border-l-2 border-gold pl-3">
                        How to Use
                      </h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {selectedProduct.howToUse}
                      </p>
                    </section>
                  </div>

                  {/* <div className="mt-12">
                    <a 
                      href="https://ivmedispa.eu.zenoti.com/webstoreNew" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-gold hover:bg-amber-600 text-white text-center font-bold py-5 rounded-2xl transition shadow-xl text-lg"
                    >
                      Enquire About This Product
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}