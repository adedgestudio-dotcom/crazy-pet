"use client";
import { motion } from "framer-motion";
import { STORE } from "@/lib/constants";
import Image from "next/image";

const pets = [
  {
    emoji: "🐶",
    breed: "Golden Retriever",
    tag: "Available",
    color: "from-yellow-400 to-amber-400",
  },
  {
    emoji: "🐱",
    breed: "Persian Cat",
    tag: "Available",
    color: "from-pink-400 to-rose-400",
  },
  {
    emoji: "🐩",
    breed: "Poodle",
    tag: "Available",
    color: "from-purple-400 to-violet-400",
  },
  {
    emoji: "🦮",
    breed: "Labrador",
    tag: "Available",
    color: "from-orange-400 to-amber-500",
  },
  {
    emoji: "🐈",
    breed: "Siamese Cat",
    tag: "Available",
    color: "from-blue-400 to-sky-400",
  },
  {
    emoji: "🐕",
    breed: "Shih Tzu",
    tag: "Available",
    color: "from-green-400 to-emerald-400",
  },
];

const galleryMoments = [
  {
    emoji: "✂️",
    title: "Fresh Grooming",
    desc: "After a professional groom session",
    bg: "bg-orange-100",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80",
  },
  {
    emoji: "🛁",
    title: "Bath Time",
    desc: "Clean, happy and smelling great",
    bg: "bg-blue-100",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80",
  },
  {
    emoji: "🏠",
    title: "Boarding Stay",
    desc: "Comfortable stay while you're away",
    bg: "bg-green-100",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80",
  },
  {
    emoji: "🦴",
    title: "Treat Time",
    desc: "Premium food and snacks",
    bg: "bg-amber-100",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-orange-500 font-700 text-sm uppercase tracking-widest">
            Our Babies
          </span>
          <h2 className="font-display text-5xl text-amber-950 mt-2">
            Meet Our Pets 🐾
          </h2>
          <p className="text-amber-700 mt-3 max-w-xl mx-auto">
            Healthy, vaccinated and full of love — find your perfect companion.
          </p>
        </motion.div>

        {/* Pet cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {pets.map((pet, i) => (
            <motion.div
              key={pet.breed}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -10, scale: 1.08, rotate: 2 }}
              className="group cursor-pointer"
            >
              <div
                className={`bg-linear-to-br ${pet.color} rounded-3xl p-5 text-center shadow-lg hover:shadow-xl mb-2 border-2 border-white transition-all duration-300`}
              >
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform inline-block">
                  {pet.emoji}
                </div>
                <div className="bg-white/30 text-white text-xs font-700 rounded-full px-2 py-0.5 inline-block">
                  {pet.tag}
                </div>
              </div>
              <p className="text-center text-xs font-700 text-amber-900">
                {pet.breed}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Moments grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryMoments.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl border-3 border-white shadow-xl hover:shadow-2xl cursor-pointer active:scale-95 transition-all duration-300"
            >
              {/* Image Background */}
              <div className="relative h-56">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-3xl mb-2 transform transition-transform group-hover:scale-110">
                  {m.emoji}
                </div>
                <h3 className="font-800 text-lg mb-1">{m.title}</h3>
                <p className="text-xs text-white/90">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-amber-700 mb-4 font-600">
            Want to see what&apos;s available right now?
          </p>
          <a
            href="https://wa.me/916382469764?text=Hi!%20I%20saw%20your%20website%20and%20wanted%20to%20know%20about%20available%20pets%20🐾"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full font-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl shadow-green-200 active:scale-95 relative overflow-hidden group"
          >
            <svg
              className="w-5 h-5 relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="relative z-10">Ask on WhatsApp</span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
