export default function TreatmentCard({ treatment, onMoreInfo }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <div className="h-64 overflow-hidden">
        <img 
          src={treatment.image} 
          alt={treatment.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{treatment.title}</h3>
        <p className="text-gray-600 text-[15px] leading-relaxed mb-7 line-clamp-3 flex-grow">
          {treatment.shortDesc}
        </p>

        <button 
          onClick={onMoreInfo}
          className="w-fit border border-black hover:bg-black hover:text-white px-6 py-2.5 text-sm font-medium rounded-lg transition-all"
        >
          More Info
        </button>
      </div>
    </div>
  );
}