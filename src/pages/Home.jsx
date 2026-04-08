import { useState } from 'react';
import { Link } from 'react-router-dom';
import TreatmentCard from '../components/Treatmentcard.jsx';
import { featuredTreatments } from './Treatments.jsx';
import { X } from 'lucide-react';
export default function Home() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const openModal = (treatment) => setSelectedTreatment(treatment);
  const closeModal = () => setSelectedTreatment(null);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] sm:min-h-screen bg-cover flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'url("/src/assets/hm.jpg")',
          backgroundPosition: '50% center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 drop-shadow-2xl">
            Discover Your Natural Beauty
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto drop-shadow-lg font-medium text-gray-100">
            Premium skin and hair care treatments with advanced technology
          </p>
          <a href="https://ivmedispa.eu.zenoti.com/webstoreNew" target="_blank" rel="noopener noreferrer">
            <button className="bg-gold hover:bg-gold-dark text-black px-10 md:px-14 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold transition transform hover:scale-105 shadow-2xl">
              Book Free Consultation
            </button>
          </a>
        </div>
      </section>

      {/* Unique Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-dark italic">What Makes Sai Care Unique</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto font-medium">
            We combine cutting-edge technology with luxurious, personalised care to deliver exceptional 
            results for your skin and hair.
          </p>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-dark uppercase tracking-widest">
            Our Signature Treatments
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTreatments.map((treatment, index) => (
              <TreatmentCard 
                key={index}
                treatment={treatment}
                onMoreInfo={() => openModal(treatment)}
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/treatments" className="text-lg md:text-xl text-gold hover:text-dark transition-all font-bold border-b-2 border-gold pb-1">
              View All Treatments →
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-[#fff0f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <p className="uppercase tracking-widest text-sm font-bold mb-2">LOCATED IN</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">THIS IS FUSION</h2>
                <p className="text-xl text-gray-600 mt-1">The Business Hub</p>
              </div>
              <div className="space-y-6">
                <p className="font-semibold text-lg">195 Queensferry Rd, Rosyth, Dunfermline KY11 2JH<br/><span className="text-gray-600 font-normal">Room 13, 1st Floor</span></p>
                <p className="text-gray-700 leading-relaxed">Upon arrival, please wait in the reception area. I'll come and meet you there.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-6">OPENING TIMES:</h3>
                <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm md:text-base">
                  <span className="font-medium">Monday</span><span className="text-gray-600">Closed</span>
                  <span className="font-medium">Tuesday</span><span className="text-gray-600">12:00 - 20:00</span>
                  <span className="font-medium">Wednesday</span><span className="text-gray-600">12:00 - 20:00</span>
                  <span className="font-medium">Thursday</span><span className="text-gray-600">Closed</span>
                  <span className="font-medium">Friday</span><span className="text-gray-600">11:00 - 19:00</span>
                  <span className="font-medium">Saturday</span><span className="text-gray-600">9:30 - 16:00</span>
                  <span className="font-medium">Sunday</span><span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.318214240327!2d-3.4357563!3d56.0353008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887d1887e1f4491%3A0x6a0c5c646b5a7b8e!2s195%20Queensferry%20Rd%2C%20Rosyth%2C%20Dunfermline%20KY11%202JH!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
                width="100%" height="520" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Sai Care Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
{selectedTreatment && (
  <div className="fixed inset-0 bg-black/70 z-[200] flex items-center justify-center p-4 backdrop-blur-sm">
    {/* Changed max-w-4xl to max-w-2xl for a slimmer look */}
    <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
      
      {/* Reduced height of the image container from h-80 to h-64 */}
      <div className="relative h-64 md:h-72">
        <img 
          src={selectedTreatment.image} 
          alt={selectedTreatment.title} 
          className="w-full h-full object-cover" 
        />
        <button 
          onClick={closeModal} 
          className="absolute top-4 right-4 bg-white/90 text-black rounded-full p-2 shadow-lg hover:bg-white transition-colors"
        >
          <X size={20} /> {/* Using the X icon from lucide-react for a cleaner look */}
        </button>
      </div>

      <div className="p-6 md:p-10 overflow-y-auto max-h-[calc(90vh-16rem)]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark">{selectedTreatment.title}</h2>
        
        {/* Time and Price Bar (Matching your previous request) */}
        <div className="flex gap-6 mb-6 text-sm font-bold bg-zinc-50 p-3 rounded-xl w-fit">
           <span className="flex items-center gap-2">🕒 {selectedTreatment.duration || "30 min"}</span>
           <span className="flex items-center gap-2">💰 {selectedTreatment.price || "£30"}</span>
        </div>

        <div className="prose text-gray-700 leading-relaxed text-sm md:text-base">
          {selectedTreatment.fullDesc}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="https://ivmedispa.eu.zenoti.com/webstoreNew" target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="w-full bg-gold hover:bg-amber-600 text-black py-3 rounded-xl font-bold transition shadow-md">
              Book Now
            </button>
          </a>
          <button 
            onClick={closeModal} 
            className="flex-1 border-2 border-gray-200 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
}