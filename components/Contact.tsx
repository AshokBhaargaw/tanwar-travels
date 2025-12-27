// components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">Ramdevra & Nearby Areas</p>

      <a
        href="tel:9660096013"
        className="block text-lg font-semibold mb-2"
      >
        📞 9660096013
      </a>

      <a
        href="https://wa.me/919660096013"
        target="_blank"
        className="inline-block mt-4 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold"
      >
        WhatsApp Now
      </a>
    </section>
  );
}
