export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400">
              Tanwar Tour & Travels
            </h3>
            <p className="mt-3 text-sm">
              Reliable taxi service in Ramdevra and nearby areas.
              Safe, comfortable, and affordable rides.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#fleet" className="hover:text-yellow-400">Fleet</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm">📍 Ramdevra & nearby areas</p>
            <p className="text-sm mt-1">📞 9660096013</p>

            <a
              href="https://wa.me/919660096013"
              target="_blank"
              className="inline-block mt-3 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {year} Tanwar Tour & Travels. All rights reserved.
      </div>
    </footer>
  );
}
