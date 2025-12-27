const fleet = [
  {
    name: "Hatchback",
    desc: "Best for city travel",
    icon: "🚗",
    capacity: "4 Seater",
  },
  {
    name: "Sedan",
    desc: "Comfortable long rides",
    icon: "🚘",
    capacity: "4 Seater",
  },
  {
    name: "SUV",
    desc: "Spacious & powerful",
    icon: "🚙",
    capacity: "6–7 Seater",
  },
  {
    name: "Tempo Traveller",
    desc: "Perfect for group tours",
    icon: "🚐",
    capacity: "12+ Seater",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-14 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-500 mb-10">
          Cab Fleet
        </h2>

        {/* Fleet Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {fleet.map((car) => (
            <div
              key={car.name}
              className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{car.icon}</div>

              <h3 className="font-semibold text-amber-500 mb-1">{car.name}</h3>

              <p className="text-sm text-gray-500 mb-1">{car.desc}</p>

              <p className="text-xs text-gray-400">{car.capacity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
