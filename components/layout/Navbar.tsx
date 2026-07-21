"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { STORE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "About", "Gallery", "Reviews", "Contact"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl animate-wag inline-block">🐾</span>
          <span className="font-display text-2xl text-orange-500">{STORE.name}</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-700 text-amber-900 hover:text-orange-500 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`tel:${STORE.phone1.replace(/\s/g, "")}`}
          className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-700 transition-all hover:scale-105"
        >
          <Phone size={14} />
          {STORE.phone1}
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-orange-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-700 text-amber-900 hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href={`tel:${STORE.phone1.replace(/\s/g, "")}`}
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-700 w-fit"
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
