const services = [
  {
    title: "Local Taxi Service",
    desc: "Comfortable local rides in Ramdevra",
    icon: "🚕",
  },
  {
    title: "Outstation Trips",
    desc: "Safe long-distance travel",
    icon: "🛣️",
  },
  {
    title: "Airport Pickup & Drop",
    desc: "On-time airport transfers",
    icon: "✈️",
  },
  {
    title: "Tour & Travel Services",
    desc: "Hassle-free tour journeys",
    icon: "🏜️",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-500 mb-10">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{service.icon}</div>

              <h3 className="font-semibold text-amber-500 mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
