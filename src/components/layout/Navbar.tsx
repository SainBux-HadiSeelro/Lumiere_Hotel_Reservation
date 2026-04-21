import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hotel, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Reservation", href: "#reservation" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
        isScrolled ? "glass-dark border-b border-white/10 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-4 group transition-opacity hover:opacity-80">
          <div className="w-8 h-8 flex items-center justify-center border border-gold rounded-sm transition-colors group-hover:bg-gold/10">
            <span className="font-serif text-gold font-bold">L</span>
          </div>
          <span className="font-serif text-xl tracking-[0.2em] uppercase font-light text-white">
            Lumière
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-gold transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-gold hover:bg-gold-hover text-black font-semibold rounded-full px-6 transition-all active:scale-95"
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-dark border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-gold hover:bg-gold-hover text-black w-full font-semibold"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Your Stay
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
