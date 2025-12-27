export default function Hero() {
  const whatsappUrl =
    "https://wa.me/919660096013?text=Hi%2C%20I%20want%20to%20book%20a%20taxi";

  return (
    <section className="pt-24 bg-yellow-400 text-black">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20 text-center">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
          Reliable Taxi Service
          <br className="sm:hidden" />
          <span className="block">in Ramdevra</span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black/80">
          Local • Outstation • Tour & Travel
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            className="bg-black text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:scale-105 transition"
          >
            Book on WhatsApp
          </a>

          <a
            href="tel:9660096013"
            className="border-2 border-black px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-black hover:text-white transition"
          >
            Call Now
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm font-medium">
          <div className="bg-amber-700 hover:bg-amber-800 min-h-20 rounded-2xl flex items-center justify-center text-white font-bold text-lg cursor-pointer">🚕 Clean Cabs</div>
          <div className="bg-amber-700 hover:bg-amber-800 min-h-20 rounded-2xl flex items-center justify-center text-white font-bold text-lg cursor-pointer">👨‍✈️ Experienced Drivers</div>
          <div className="bg-amber-700 hover:bg-amber-800 min-h-20 rounded-2xl flex items-center justify-center text-white font-bold text-lg cursor-pointer">⏱️ On-Time Pickup</div>
          <div className="bg-amber-700 hover:bg-amber-800 min-h-20 rounded-2xl flex items-center justify-center text-white font-bold text-lg cursor-pointer">💰 Affordable Fare</div>
        </div>
      </div>
    </section>
  );
}
