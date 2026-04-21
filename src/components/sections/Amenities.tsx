import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { AMENITIES } from "@/constants/hotelData";

export function Amenities() {
  return (
    <section id="amenities" className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.4em] font-medium text-xs mb-4 block">World-Class Services</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">Refined Amenities</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {AMENITIES.map((amenity, index) => {
            const Icon = (Icons as any)[amenity.icon];
            return (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-dark border-white/5 p-8 rounded-3xl flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full mb-4 text-gold transition-all group-hover:bg-gold group-hover:text-black">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-gold transition-colors">
                  {amenity.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
