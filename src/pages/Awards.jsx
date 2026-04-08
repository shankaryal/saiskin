export default function Awards() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-12">Awards & Achievements</h1>
        <p className="text-2xl mb-16 text-gray-700">
          We are proud that our commitment to excellence has been recognized within the aesthetic industry.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-zinc-50 p-12 rounded-3xl">
            <h3 className="text-3xl font-semibold mb-4">Best New Clinic of the Year 2025</h3>
            <p className="text-gray-600">International Aesthetics Awards</p>
          </div>
          <div className="bg-zinc-50 p-12 rounded-3xl">
            <h3 className="text-3xl font-semibold mb-4">Excellence in Laser Technology</h3>
            <p className="text-gray-600">Scottish Aesthetics Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}