"use client";
import { motion } from "framer-motion";
import { Phone, Star, MapPin } from "lucide-react";
import { STORE } from "@/lib/constants";
import { useMemo } from "react";
import Image from "next/image";

export default function Hero() {
  // Generate static paw positions to avoid hydration mismatch
  const pawPositions = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      top: (i * 37 + 13) % 100, // Pseudo-random but consistent
      left: (i * 53 + 19) % 100,
      rotate: (i * 67) % 360,
      size: 20 + ((i * 43) % 40),
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Decorative blobs with enhanced glow */}
      <div className="absolute top-20 right-0 w-96 md:w-125 h-96 md:h-125 bg-orange-200 rounded-full blur-3xl opacity-40 animate-pulse z-0" />
      <div
        className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-amber-200 rounded-full blur-3xl opacity-50 animate-pulse z-0"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-48 md:w-64 h-48 md:h-64 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse z-0"
        style={{ animationDelay: "2s" }}
      />

      {/* Paw prints bg */}
      <div className="absolute inset-0 opacity-5 text-6xl select-none pointer-events-none overflow-hidden">
        {pawPositions.map((paw, i) => (
          <span
            key={i}
            className="absolute"
            style={{
              top: `${paw.top}%`,
              left: `${paw.left}%`,
              transform: `rotate(${paw.rotate}deg)`,
              fontSize: `${paw.size}px`,
            }}
          >
            🐾
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md mb-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-sm font-700 text-amber-900">
              {STORE.rating} · {STORE.reviews} Reviews
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-6xl md:text-7xl leading-tight text-amber-950 mb-4"
          >
            Everything
            <br />
            <span className="text-orange-500">For Pets.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-amber-800 leading-relaxed mb-8 max-w-md"
          >
            Your neighborhood&apos;s most trusted pet store. Grooming, boarding,
            puppies, food and accessories — all under one roof. 🐾
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={`tel:${STORE.phone1.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-700 text-base transition-all duration-300 hover:scale-105 hover:shadow-orange-strong shadow-orange-medium active:scale-95 relative overflow-hidden group"
            >
              <Phone size={18} className="relative z-10" />
              <span className="relative z-10">Call Us Now</span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 bg-white hover:bg-orange-50 text-orange-500 border-2 border-orange-200 hover:border-orange-300 px-6 py-3 rounded-full font-700 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md active:scale-95"
            >
              Our Services ↓
            </a>
          </motion.div>

          {/* Address */}
          <div className="flex items-start gap-2 mt-8 text-sm text-amber-700">
            <MapPin size={15} className="mt-0.5 shrink-0 text-orange-400" />
            <span>{STORE.address}</span>
          </div>

          <div className="mt-2 text-sm text-green-600 font-700">
            ● Open now · Closes 8 PM
          </div>
        </motion.div>

        {/* Hero Image - Pet with Human */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-[3rem] shadow-2xl overflow-hidden animate-float relative">
              {/* Real image from Unsplash */}
              <Image
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80"
                alt="Happy person with their dog"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay with brand */}
              <div className="absolute inset-0 bg-linear-to-t from-orange-500/90 via-orange-400/50 to-transparent flex items-end justify-center pb-8">
                <div className="text-center px-4">
                  <div className="font-display text-white text-2xl md:text-3xl drop-shadow-lg">
                    Crazy Pet&apos;z
                  </div>
                  <div className="text-white/95 text-sm mt-1 font-700">
                    Your Pet&apos;s Best Friend
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges with animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-4 -right-4 md:-right-6 bg-white rounded-2xl shadow-lg px-4 py-3 text-center hover:scale-110 transition-all duration-300 cursor-pointer active:scale-95"
            >
              <div className="text-2xl">✂️</div>
              <div className="text-xs font-700 text-amber-900">Grooming</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -bottom-4 -left-4 md:-left-6 bg-white rounded-2xl shadow-lg px-4 py-3 text-center hover:scale-110 transition-all duration-300 cursor-pointer active:scale-95"
            >
              <div className="text-2xl">🐾</div>
              <div className="text-xs font-700 text-amber-900">Boarding</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute top-1/2 -right-6 md:-right-10 bg-orange-500 text-white rounded-2xl shadow-lg px-3 py-2 text-center hover:scale-110 transition-all duration-300 -translate-y-1/2 cursor-pointer active:scale-95"
            >
              <div className="text-xl">🐱</div>
              <div className="text-xs font-700">Cats too!</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
