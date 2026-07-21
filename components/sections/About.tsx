"use client";
import { motion } from "framer-motion";
import { STORE } from "@/lib/constants";

const stats = [
  { value: "3+", label: "Years Serving Chennai" },
  { value: "500+", label: "Happy Pet Families" },
  { value: "5", label: "Services Under One Roof" },
  { value: "4.8★", label: "Google Rating" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-amber-950 to-orange-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 text-8xl select-none pointer-events-none flex flex-wrap gap-8 p-8">
        {Array.from({ length: 30 }).map((_, i) => <span key={i}>🐾</span>)}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-400 font-700 text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="font-display text-5xl mt-2 mb-6">
              Born from love<br />
              <span className="text-orange-400">for animals.</span>
            </h2>
            <p className="text-amber-200 leading-relaxed mb-4">
              Crazy Pet&apos;z Store was founded in 2021 right here in Anna Nagar, Chennai — because we believed pet owners deserved one trusted place for everything their furry family needs.
            </p>
            <p className="text-amber-200 leading-relaxed mb-8">
              From healthy puppies and premium food to professional grooming and safe boarding — we&apos;ve built a space where animals are treated with the same love and care you&apos;d give them at home.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href={`tel:${STORE.phone1}`}
                className="bg-orange-500 hover:bg-orange-400 text-white px-5 py-3 rounded-full font-700 text-sm transition-all hover:scale-105"
              >
                📞 {STORE.phone1}
              </a>
              <a
                href={`tel:${STORE.phone2}`}
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full font-700 text-sm transition-all"
              >
                📞 {STORE.phone2}
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-3xl p-6 text-center border border-white/10"
              >
                <div className="font-display text-4xl text-orange-400 mb-1">{s.value}</div>
                <div className="text-sm text-amber-300 font-600">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
