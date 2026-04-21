import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-400 mb-12 text-lg">
              Have questions or special requirements? Our concierge team is available 24/7 
              to ensure your stay is perfect.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Location</h4>
                  <p className="text-gray-400">123 Avenue des Lumières, <br /> 75008 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone Number</h4>
                  <p className="text-gray-400">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Address</h4>
                  <p className="text-gray-400">concierge@lumierepalace.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-gold transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="glass-dark border-white/5 rounded-3xl p-8 relative overflow-hidden">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-8">
              Subscribe to receive exclusive offers and updates from Lumière Palace.
            </p>
            <form className="flex flex-col gap-4">
              <Input 
                placeholder="Your email address" 
                className="bg-white/5 border-white/10 text-white h-12"
              />
              <Button className="bg-gold hover:bg-gold-hover text-black h-12 font-bold uppercase tracking-widest text-xs">
                Subscribe Now
              </Button>
            </form>

            <div className="mt-12 h-[200px] w-full rounded-2xl bg-white/5 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800" 
                alt="Map Background" 
                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gold p-3 rounded-full animate-bounce">
                  <MapPin className="text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
