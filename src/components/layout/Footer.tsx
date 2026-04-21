import { Hotel, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-4 group transition-opacity hover:opacity-80">
              <div className="w-8 h-8 flex items-center justify-center border border-gold rounded-sm transition-colors group-hover:bg-gold/10">
                <span className="font-serif text-gold font-bold">L</span>
              </div>
              <span className="font-serif text-xl tracking-[0.2em] uppercase font-light text-white">
                Lumière
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Excellence in every detail. Discover curated interiors, world-class gastronomy, 
              and the art of French living in the heart of Paris.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-gold transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {["About Us", "Rooms & Suites", "Reservations", "Amenities", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().split(' ')[0]}`} className="text-gray-500 hover:text-gold text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Experience</h4>
            <ul className="space-y-4">
              {["Fine Dining", "Wellness Spa", "Gallery", "Events", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Reach Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>123 Avenue des Lumières, Paris</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@lumierepalace.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/40 uppercase tracking-[0.2em]">
          <p>© 2024 Lumière Palace. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
