"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { REVIEWS, STORE } from "@/lib/constants";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-orange-500 font-700 text-sm uppercase tracking-widest">
            What People Say
          </span>
          <h2 className="font-display text-5xl text-amber-950 mt-2">
            Loved by Families 💛
          </h2>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 mt-6">
            <div className="font-display text-5xl text-orange-500">
              {STORE.rating}
            </div>
            <div className="text-left">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="text-sm text-amber-700 mt-0.5">
                {STORE.reviews} Google Reviews
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-orange-50/30 border-2 border-orange-100 hover:border-orange-200 rounded-3xl p-7 transition-all duration-300 hover:shadow-orange-soft"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-amber-800 leading-relaxed mb-5 text-sm">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white font-800 text-sm shadow-md">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-700 text-amber-950 text-sm">
                    {review.name}
                  </div>
                  <div className="text-xs text-amber-500">{review.pet}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-orange-500 font-700 hover:underline"
          >
            See all reviews on Google Maps →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
