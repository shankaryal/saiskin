import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TreatmentCard({ treatment, onMoreInfo }) {
  return (
    <article className="group relative bg-white rounded-4xl overflow-hidden border border-cream-dark hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 flex flex-col">

      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-cream">
        <img
          src={treatment.image}
          alt={`${treatment.title} at Sai Skin Care, Rosyth`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-semibold text-dark mb-2 leading-tight group-hover:text-gold transition-colors duration-300">
          {treatment.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed flex-grow mb-6">
          {treatment.shortDesc}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto">
          {treatment.slug ? (
            <Link
              to={`/treatment/${treatment.slug}`}
              className="flex-1 text-center bg-gold hover:bg-gold-dark text-white text-sm font-medium py-2.5 rounded-xl transition-all duration-300"
              aria-label={`Learn more about ${treatment.title}`}
            >
              Learn More
            </Link>
          ) : (
            <button
              onClick={onMoreInfo}
              className="flex-1 bg-gold hover:bg-gold-dark text-white text-sm font-medium py-2.5 rounded-xl transition-all duration-300"
              aria-label={`More about ${treatment.title}`}
            >
              Learn More
            </button>
          )}
          <button
            onClick={onMoreInfo}
            className="p-2.5 border border-cream-dark hover:border-gold hover:text-gold rounded-xl transition-all duration-300 text-muted"
            aria-label={`Quick view ${treatment.title}`}
          >
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}