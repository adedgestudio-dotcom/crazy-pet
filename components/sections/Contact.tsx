"use client";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { STORE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-orange-500 font-700 text-sm uppercase tracking-widest">
            Find Us
          </span>
          <h2 className="font-display text-5xl text-amber-950 mt-2">
            Come Visit Us 🗺️
          </h2>
          <p className="text-amber-700 mt-3">
            We&apos;d love to meet you and your furry friend!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Cards */}
            {[
              {
                icon: <Phone size={20} className="text-orange-500" />,
                title: "Call Us",
                content: (
                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${STORE.phone1.replace(/\s/g, "")}`}
                      className="font-700 text-amber-900 hover:text-orange-500 transition-colors"
                    >
                      📱 {STORE.phone1}
                    </a>
                    <a
                      href={`tel:${STORE.phone2.replace(/\s/g, "")}`}
                      className="font-700 text-amber-900 hover:text-orange-500 transition-colors"
                    >
                      📱 {STORE.phone2}
                    </a>
                  </div>
                ),
              },
              {
                icon: <MapPin size={20} className="text-orange-500" />,
                title: "Our Address",
                content: (
                  <p className="text-amber-700 text-sm leading-relaxed">
                    {STORE.address}
                  </p>
                ),
              },
              {
                icon: <Clock size={20} className="text-orange-500" />,
                title: "Store Hours",
                content: (
                  <div>
                    <p className="text-amber-700 text-sm">Monday – Sunday</p>
                    <p className="font-700 text-amber-900">
                      10:00 AM – 10:00 PM
                    </p>
                    <span className="inline-block mt-1 bg-green-100 text-green-700 text-xs font-700 px-2 py-0.5 rounded-full">
                      ● Open Now
                    </span>
                  </div>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 flex gap-4 items-start shadow-sm border border-orange-100"
              >
                <div className="bg-orange-50 rounded-xl p-2.5 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-700 text-amber-500 uppercase tracking-wider mb-1">
                    {item.title}
                  </p>
                  {item.content}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${STORE.whatsapp}?text=Hi!%20I%20found%20your%20website%20and%20wanted%20to%20know%20more%20🐾`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-4 font-700 transition-all hover:scale-105 shadow-lg shadow-green-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat with us on WhatsApp
            </a>
          </motion.div>

          {/* Map embed placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[420px] bg-amber-100 flex flex-col items-center justify-center gap-4"
          >
            <iframe
              title="Crazy Pet'z Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.2!3d13.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzI0LjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
