import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants/hotelData";

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-8">
              Voices of our <br /> Distinguished Guests
            </h2>
            <div className="space-y-12">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-12"
                >
                  <Quote className="absolute top-0 left-0 w-8 h-8 text-gold/30" />
                  <p className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full border border-gold/20"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-white font-bold">{t.name}</h4>
                      <p className="text-gold text-xs uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square glass rounded-3xl overflow-hidden p-3 rotate-3">
              <img
                src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800"
                alt="Hotel Experience"
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 glass-dark rounded-3xl overflow-hidden p-3 -rotate-6 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800"
                alt="Hotel Experience"
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
