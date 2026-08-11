import { Phone, MapPin, Clock } from "lucide-react";
import { STORE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🐾</span>
              <span className="font-display text-2xl text-orange-400">
                {STORE.name}
              </span>
            </div>
            <p className="text-sm text-amber-300 leading-relaxed">
              Everything for pets — grooming, boarding, food, accessories and
              adorable puppies. Your trusted neighborhood pet store.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-800 text-white mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-amber-300">
              <a
                href={`tel:${STORE.phone1}`}
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
              >
                <Phone size={14} /> {STORE.phone1}
              </a>
              {STORE.phone2 && (
                <a
                  href={`tel:${STORE.phone2}`}
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                >
                  <Phone size={14} /> {STORE.phone2}
                </a>
              )}
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>{STORE.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{STORE.hours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-800 text-white mb-4">Our Services</h4>
            <ul className="text-sm text-amber-300 flex flex-col gap-2">
              {[
                "Pet Grooming",
                "Puppies Available",
                "Pet Accessories",
                "Pet Food",
                "Pet Boarding",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="text-orange-400">✦</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-5 text-center text-xs text-amber-500">
          <div className="mb-4">
            © {new Date().getFullYear()} {STORE.name} · Est. {STORE.established}
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-amber-600">Crafted with</span>
            <span className="text-orange-400 text-base">❤️</span>
            <span className="text-amber-600">by</span>
            <a
              href="https://zorivo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-1.5 rounded-full font-800 text-sm transition-all hover:scale-105 shadow-md hover:shadow-lg shadow-orange-900/30"
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Zorivo
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
