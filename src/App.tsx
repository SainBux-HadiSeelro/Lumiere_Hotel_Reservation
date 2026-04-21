import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BookingBar } from "@/components/layout/BookingBar";
import { About } from "@/components/sections/About";
import { Rooms } from "@/components/sections/Rooms";
import { Amenities } from "@/components/sections/Amenities";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { BookingSection } from "@/components/sections/BookingSection";

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Decorative background glows that stay behind content */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <BookingBar />
          <About />
          <Rooms />
          <Amenities />
          <Gallery />
          <Testimonials />
          <BookingSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
