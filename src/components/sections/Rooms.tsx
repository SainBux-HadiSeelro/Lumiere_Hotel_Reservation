import { motion } from "motion/react";
import { ROOMS } from "@/constants/hotelData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

export function Rooms() {
  return (
    <section id="rooms" className="py-24 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
              Our Curated Selection of Rooms
            </h2>
            <p className="text-gray-400 text-lg">
              Each space is designed with a unique narrative, blending modern technology 
              with timeless comfort.
            </p>
          </div>
          <Button variant="link" className="text-gold p-0 h-auto group">
            View All Rooms <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-dark border-white/5 overflow-hidden group h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <Badge className="absolute top-4 right-4 bg-gold text-black border-none">
                    From ${room.price}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">{room.name}</h3>
                  <p className="text-sm text-gold/80 mb-4 font-medium uppercase tracking-wider">{room.type}</p>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap gap-y-2 mb-8">
                    {room.amenities.slice(0, 3).map((amenity) => (
                      <span key={amenity} className="amenity-tag">
                        <span className="stat-dot" />
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-transparent hover:bg-gold border border-gold text-gold hover:text-black transition-all"
                    onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Select Room
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
