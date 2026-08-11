"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const cutePets = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=500&q=80",
    name: "Golden Retriever",
    badge: "Playful",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&q=80",
    name: "Persian Cat",
    badge: "Adorable",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&q=80",
    name: "Beagle",
    badge: "Friendly",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1573865526739-10c1dd7aa1f0?w=500&q=80",
    name: "British Shorthair",
    badge: "Calm",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&q=80",
    name: "Husky",
    badge: "Energetic",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&q=80",
    name: "Ragdoll",
    badge: "Gentle",
  },
];

export default function PetShowcase() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-700 text-sm uppercase tracking-widest">
            Our Furry Friends
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-amber-950 mt-2">
            Meet Our Stars 🌟
          </h2>
          <p className="text-amber-700 mt-3 max-w-2xl mx-auto">
            From playful puppies to calm companions — discover the perfect pet
            for your family
          </p>
        </motion.div>

        {/* Scrolling pet showcase */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cutePets.map((pet, i) => (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -12, scale: 1.05, rotate: 3 }}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:border-orange-200 transition-all duration-300 hover:shadow-2xl">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-linear-to-r from-orange-500 to-amber-500 text-white text-xs font-700 px-3 py-1 rounded-full shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {pet.badge}
                  </div>

                  {/* Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-800 text-sm">{pet.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-full font-700 text-base transition-all duration-300 hover:scale-105 hover:shadow-orange-strong shadow-orange-medium active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">See All Our Pets 🐾</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
