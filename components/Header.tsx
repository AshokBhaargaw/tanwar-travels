"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-yellow-900 shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <h1 className="font-bold text-lg sm:text-xl text-yellow-400">
          Tanwar Tour & Travels
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-white">
          <a href="" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#fleet" className="hover:text-yellow-400">Fleet</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-yellow-800 px-4 pb-4 text-white">
          <a
            href="#about"
            className="block py-2 border-b border-yellow-700"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="block py-2 border-b border-yellow-700"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a
            href="#fleet"
            className="block py-2 border-b border-yellow-700"
            onClick={() => setOpen(false)}
          >
            Fleet
          </a>
          <a
            href="#contact"
            className="block py-2"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
