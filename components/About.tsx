export default function About() {
  return (
    <section id="about" className="py-14 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl text-amber-500 sm:text-3xl font-bold mb-4">About Us</h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Tanwar Tour & Travels is a trusted taxi service provider in
          <span className="font-semibold"> Ramdevra and nearby areas</span>. We
          offer safe, reliable, and affordable rides with experienced drivers
          and clean, well-maintained vehicles. Whether you are traveling with
          family, on a tour, or for business, we ensure a comfortable and
          hassle-free journey.
        </p>

        {/* Highlights */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm font-medium">
          <div className="flex flex-col items-center">
            <span className="text-2xl">🚕</span>
            <p className="text-gray-600 mt-2">Clean Vehicles</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl">👨‍✈️</span>
            <p className="text-gray-600 mt-2">Skilled Drivers</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl">⏱️</span>
            <p className="text-gray-600 mt-2">On-Time Service</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl">💰</span>
            <p className="text-gray-600 mt-2">Affordable Rates</p>
          </div>
        </div>
      </div>
    </section>
  );
}
