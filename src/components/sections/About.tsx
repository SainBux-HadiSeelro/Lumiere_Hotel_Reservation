import { motion } from "motion/react";
import { Sparkles, MapPin, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-[0.4em] font-medium text-xs mb-4 block">The Lumière Story</span>
          <h2 className="font-serif text-4xl md:text-6xl text-white font-bold mb-8 leading-tight">
            A Legacy of <br /> Luxury and Care
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
            Founded on the principles of quiet luxury and anticipatory service, Lumière Palace 
            is a sanctuary in the heart of the city. We believe that true hospitality is an art 
            form—one that requires attention to the smallest details and a passion for creating 
            meaningful moments.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gold">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-white font-medium tracking-wide">Award-Winning Interior Design</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-white font-medium tracking-wide">Prime Central Location</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-white font-medium tracking-wide">24/7 Personalized Security & Care</span>
            </div>
          </div>
        </motion.div>

        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] rounded-[3rem] overflow-hidden glass p-3 ring-1 ring-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 glass rounded-full animate-pulse blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full animate-pulse blur-2xl" />
        </div>
      </div>
    </section>
  );
}
