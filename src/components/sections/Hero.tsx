import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070" 
            alt="Palace Hotel Paris" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Multilayered Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0A0A0B]/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Brand Mark */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="h-[1px] w-12 bg-gold/30" />
            <div className="flex flex-col items-center">
              <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-1">Palais de Luxe</span>
              <span className="text-white/30 text-[8px] uppercase tracking-[0.4em]">Paris • France</span>
            </div>
            <div className="h-[1px] w-12 bg-gold/30" />
          </div>

          <h1 className="font-serif text-6xl md:text-9xl text-white font-light leading-[1] mb-14 tracking-tight">
            The Art of <br />
            <span className="italic relative font-serif text-gold">
              Timeless
              <motion.span 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ delay: 1, duration: 1.5 }}
                 className="absolute -bottom-3 left-0 h-[1px] bg-gold/40"
              />
            </span> Elegance
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-14 leading-loose tracking-wide font-light uppercase">
            A sanctuary of sophistication where historical grandeur <br className="hidden md:block" />
            meets contemporary avant-garde living.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <Button 
                size="lg" 
                className="bg-gold hover:bg-white text-black font-bold h-16 px-14 rounded-full transition-all duration-500 hover:scale-105 shadow-2xl shadow-gold/20 flex items-center gap-4 group border-none"
                onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Discover our Suites
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Button>
            
            <button className="flex items-center gap-4 text-white group hover:text-gold transition-all duration-300">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all">
                    <Play className="w-4 h-4 fill-white group-hover:fill-gold transition-colors ml-1" />
                </div>
                <div className="flex flex-col items-start translate-y-0.5 text-left">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Watch Film</span>
                  <span className="text-[8px] text-white/30 uppercase tracking-widest mt-0.5 font-sans">124 Avenue</span>
                </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute bottom-20 left-12 hidden xl:flex items-center gap-4 text-white/20">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">Since 1924</span>
        <div className="h-16 w-[1px] bg-white/10" />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] text-gold/60 uppercase tracking-[0.4em] font-bold cursor-pointer hover:text-gold transition-colors">Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-gold/60 via-gold/10 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/4 bg-gold shadow-[0_0_10px_gold]"
          />
        </div>
      </motion.div>

      {/* Mobile Booking Entry (Small prompt) */}
      <div className="lg:hidden absolute bottom-8 left-6 right-6 z-20">
        <Button 
          className="w-full bg-white/5 backdrop-blur-xl border border-white/10 text-white h-14 rounded-2xl flex justify-between px-6"
          onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Book Your Stay</span>
          <span className="text-gold text-xs">→</span>
        </Button>
      </div>
    </section>
  );
}
