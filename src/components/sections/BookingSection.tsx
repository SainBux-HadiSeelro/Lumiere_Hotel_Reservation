import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { format, differenceInDays } from "date-fns";
import { 
  Calendar as CalendarIcon, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  CreditCard,
  Building,
  Sparkles,
  MapPin,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ROOMS } from "@/constants/hotelData";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Step = "dates" | "rooms" | "details" | "confirmation";

export function BookingSection() {
  const [currentStep, setCurrentStep] = useState<Step>("dates");
  const [selectedRoom, setSelectedRoom] = useState<typeof ROOMS[0] | null>(null);
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(),
    to: undefined,
  });
  const [guestCount, setGuestCount] = useState("2");
  const [guestInfo, setGuestInfo] = useState({ name: "", email: "", phone: "" });

  const nights = (dateRange?.from && dateRange?.to) ? differenceInDays(dateRange.to, dateRange.from) : 0;
  const totalPrice = selectedRoom ? selectedRoom.price * (nights || 1) : 0;

  const nextStep = () => {
    if (currentStep === "dates") setCurrentStep("rooms");
    else if (currentStep === "rooms") setCurrentStep("details");
    else if (currentStep === "details") setCurrentStep("confirmation");
  };

  const prevStep = () => {
    if (currentStep === "rooms") setCurrentStep("dates");
    else if (currentStep === "details") setCurrentStep("rooms");
  };

  return (
    <section id="reservation" className="py-24 px-6 md:px-12 bg-black relative min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4"
          >
            Reservation System
          </motion.p>
          <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl font-serif text-white font-light tracking-tight"
          >
            Begin Your <span className="italic font-serif">Journey</span>
          </motion.h2>
        </div>

        {/* System Container */}
        <div className="glass border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
          
          {/* Left Sidebar: Status / Progress */}
          <div className="w-full md:w-80 bg-white/[0.02] border-r border-white/5 p-8 flex flex-col">
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Current Status</p>
                <div className="space-y-6">
                  {["Dates", "Rooms", "Details"].map((s, i) => {
                    const stepName = s.toLowerCase() as Step;
                    const isActive = currentStep === stepName;
                    const isCompleted = ["rooms", "details", "confirmation"].includes(currentStep) && i === 0 ||
                                       ["details", "confirmation"].includes(currentStep) && i === 1 ||
                                       ["confirmation"].includes(currentStep) && i === 2;
                    
                    return (
                        <div key={s} className="flex items-center gap-4">
                            <div className={cn(
                                "w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all duration-500",
                                isActive ? "border-gold text-gold bg-gold/10" : 
                                isCompleted ? "border-gold bg-gold text-black" : "border-white/10 text-white/20"
                            )}>
                                {isCompleted ? <CheckCircle2 className="w-3 h-3" /> : (i + 1)}
                            </div>
                            <span className={cn(
                                "text-xs uppercase tracking-widest font-medium transition-colors",
                                isActive ? "text-white" : "text-white/20"
                            )}>{s}</span>
                        </div>
                    );
                  })}
                </div>
              </div>

              {selectedRoom && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4 pt-12 border-t border-white/5"
                >
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Your selection</p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <Building className="w-4 h-4 text-gold" />
                            <span className="text-white text-xs font-medium">{selectedRoom.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-gold" />
                            <span className="text-white text-xs font-medium">{nights} Nights</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <ArrowRight className="w-4 h-4 text-gold" />
                            <span className="text-gold text-lg font-serif">Total: ${totalPrice}</span>
                        </div>
                    </div>
                </motion.div>
              )}
            </div>

            <div className="mt-auto pt-8 flex items-center gap-2 text-white/20 text-[9px] uppercase tracking-widest">
               <Sparkles className="w-3 h-3" /> 
               Secure Reservation Link
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8 md:p-12 bg-black/40 relative">
            <AnimatePresence mode="wait">
              {currentStep === "dates" && (
                <motion.div
                  key="dates"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="h-full flex flex-col"
                >
                  <h3 className="text-2xl text-white font-serif mb-8">Select Your Stay Period</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1">
                    <div className="glass-dark border-white/5 p-4 rounded-xl flex justify-center">
                        <Calendar
                            mode="range"
                            selected={dateRange}
                            onSelect={(val: any) => setDateRange(val || { from: undefined, to: undefined })}
                            className="text-white bg-transparent"
                            numberOfMonths={1}
                        />
                    </div>
                    <div className="space-y-8 flex flex-col justify-center">
                        <div className="space-y-4">
                            <p className="text-white/40 text-xs uppercase tracking-widest font-medium">Guests</p>
                            <div className="flex gap-4">
                                {["1", "2", "3", "4+"].map((num) => (
                                    <button 
                                        key={num}
                                        onClick={() => setGuestCount(num)}
                                        className={cn(
                                            "w-12 h-12 rounded-full border transition-all flex items-center justify-center font-bold text-xs",
                                            guestCount === num ? "border-gold bg-gold text-black" : "border-white/10 text-white/40 hover:border-gold/50"
                                        )}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="pt-8">
                             <Button 
                                onClick={nextStep}
                                disabled={!dateRange?.from || !dateRange?.to}
                                className="w-full h-14 bg-gold hover:bg-gold-hover text-black font-bold uppercase tracking-widest text-xs group"
                             >
                                Browse Available Rooms 
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                             </Button>
                        </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === "rooms" && (
                <motion.div
                  key="rooms"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <button onClick={prevStep} className="text-white/40 hover:text-white transition-colors">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h3 className="text-2xl text-white font-serif">Curated Collections</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                     {ROOMS.map((room) => (
                         <div 
                            key={room.id}
                            onClick={() => setSelectedRoom(room)}
                            className={cn(
                                "group cursor-pointer glass border border-white/5 rounded-2xl overflow-hidden transition-all duration-500",
                                selectedRoom?.id === room.id ? "ring-2 ring-gold border-transparent bg-gold/10" : "hover:bg-white/[0.03]"
                            )}
                         >
                            <div className="h-32 overflow-hidden relative">
                                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-gold uppercase tracking-widest">
                                    ${room.price} <span className="text-[8px] text-white/50">/ Night</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-white font-medium mb-1">{room.name}</h4>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">{room.type}</p>
                                <div className="flex flex-wrap gap-1">
                                    {room.amenities.slice(0, 3).map(a => (
                                        <span key={a} className="text-[8px] px-2 py-0.5 border border-white/5 rounded-full text-white/60">{a}</span>
                                    ))}
                                </div>
                            </div>
                         </div>
                     ))}
                  </div>

                  <div className="mt-8">
                     <Button 
                        onClick={nextStep}
                        disabled={!selectedRoom}
                        className="w-full h-14 bg-gold hover:bg-gold-hover text-black font-bold uppercase tracking-widest text-xs"
                     >
                        Finalize Details
                     </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === "details" && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <button onClick={prevStep} className="text-white/40 hover:text-white transition-colors">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h3 className="text-2xl text-white font-serif">Guest Information</h3>
                  </div>

                  <div className="space-y-6 flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</Label>
                            <Input 
                                placeholder="Elias Vance" 
                                className="bg-white/5 border-white/10 text-white rounded-xl focus:border-gold h-12" 
                                value={guestInfo.name}
                                onChange={e => setGuestInfo(p => ({ ...p, name: e.target.value }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</Label>
                            <Input 
                                placeholder="concierge@avenue.com" 
                                className="bg-white/5 border-white/10 text-white rounded-xl focus:border-gold h-12" 
                                value={guestInfo.email}
                                onChange={e => setGuestInfo(p => ({ ...p, email: e.target.value }))}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-[10px] uppercase tracking-widest text-white/40">Mobile Contact</Label>
                        <Input 
                            placeholder="+XX XXX XXXX XXX" 
                            className="bg-white/5 border-white/10 text-white rounded-xl focus:border-gold h-12" 
                            value={guestInfo.phone}
                            onChange={e => setGuestInfo(p => ({ ...p, phone: e.target.value }))}
                        />
                    </div>
                    
                    <div className="glass-dark border-white/5 p-4 rounded-xl space-y-3">
                        <div className="flex items-center gap-3 text-gold">
                            <CreditCard className="w-4 h-4" />
                            <span className="text-[10px] uppercase tracking-widest font-bold">Secure Checkout</span>
                        </div>
                        <p className="text-xs text-white/40">By proceeding, you agree to our terms of service and luxury stay policy. No immediate charges will be applied.</p>
                    </div>
                  </div>

                  <div className="mt-8">
                     <Button 
                        onClick={nextStep}
                        disabled={!guestInfo.name || !guestInfo.email}
                        className="w-full h-14 bg-gold hover:bg-gold-hover text-black font-bold uppercase tracking-widest text-xs"
                     >
                        Confirm Reservation
                     </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === "confirmation" && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-8 border border-gold/30">
                     <CheckCircle2 className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-4xl text-white font-serif mb-4">Reservation Placed</h3>
                  <p className="text-white/60 mb-12 max-w-sm">
                    Thank you, <span className="text-white">{guestInfo.name}</span>. A detailed digital itinerary has been dispatched to <span className="text-white">{guestInfo.email}</span>.
                  </p>
                  
                  <div className="w-full max-w-sm glass border border-gold/20 p-6 rounded-2xl mb-8">
                      <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                        <span className="text-[10px] uppercase tracking-widest text-white/40">Confirmation #</span>
                        <span className="text-gold font-mono font-bold tracking-tighter">AVE-9921-X</span>
                      </div>
                      <div className="text-left space-y-2">
                        <div className="flex justify-between">
                            <span className="text-xs text-white/60">Suite</span>
                            <span className="text-xs text-white">{selectedRoom?.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-xs text-white/60">Dates</span>
                            <span className="text-xs text-white">
                                {dateRange?.from && format(dateRange.from, "MMM dd")} - {dateRange?.to && format(dateRange.to, "MMM dd")}
                            </span>
                        </div>
                      </div>
                  </div>

                  <Button 
                    variant="link" 
                    className="text-gold uppercase tracking-widest text-[10px]"
                    onClick={() => {
                        setCurrentStep("dates");
                        setGuestInfo({ name: "", email: "", phone: "" });
                        setSelectedRoom(null);
                    }}
                   >
                    Book another suite
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer info bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 px-4">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-gold" />
                    <span className="text-[8px] uppercase tracking-widest">Paris, France</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/10" />
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-gold" />
                    <span className="text-[8px] uppercase tracking-widest">Luxury Assurance</span>
                </div>
            </div>
            <p className="text-[8px] uppercase tracking-[0.2em]">L'Avenue Hotel • Member of Leading Hotels of the World</p>
        </div>
      </div>
    </section>
  );
}
