import { useParams, Link } from 'react-router-dom';
import { allTreatments } from './Treatments.jsx';
import { Clock, Tag } from 'lucide-react'; // Import icons

export default function TreatmentDetail() {
  const { slug } = useParams();
  const treatment = allTreatments.find(t => t.slug === slug);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Treatment not found</h2>
          <Link to="/treatments" className="text-gold underline">Back to all treatments</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/treatments" className="inline-flex items-center text-gold hover:underline mb-10 text-base md:text-lg font-medium">
          ← Back to All Treatments
        </Link>

        {/* Treatment Image */}
        <div className="w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-8 shadow-lg">
          <img 
            src={treatment.image} 
            alt={treatment.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title and Quick Info Bar */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
            {treatment.title}
          </h1>
          
          {/* Info Bar (Matches your screenshot style) */}
          <div className="flex flex-wrap items-center gap-8 bg-[#fff0f5] p-5 rounded-2xl">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-black" />
              <span className="font-bold text-lg">{treatment.duration || '30 min'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={20} className="text-black" />
              <span className="font-bold text-lg">{treatment.price || '£30'}</span>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
          <p className="text-lg mb-6">{treatment.fullDesc}</p>
          <p className="text-base md:text-lg">
            At Sai Care, we use the latest medical-grade technology to deliver exceptional results with maximum comfort.
          </p>
        </div>

        {/* Booking Button */}
        <div>
          <a href="https://ivmedispa.eu.zenoti.com/webstoreNew" target="_blank" rel="noopener noreferrer">
            <button className="bg-gold hover:bg-gold-dark text-black px-10 md:px-12 py-5 rounded-2xl text-base md:text-xl font-bold transition shadow-lg">
              Book Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}