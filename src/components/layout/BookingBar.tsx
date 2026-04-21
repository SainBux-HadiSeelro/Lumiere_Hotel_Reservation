import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, ChevronDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function BookingBar() {
  const [date, setDate] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: undefined,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleBook = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="w-full h-auto lg:h-24 bg-[#0A0A0B] border-y border-white/10 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-0">
        
        {/* CHECK IN/OUT */}
        <div className="h-full border-r border-white/10 relative">
          <Popover>
            <PopoverTrigger render={
              <button className="flex items-center gap-4 w-full h-full px-8 cursor-pointer hover:bg-white/[0.03] transition-colors text-left outline-none focus-visible:bg-white/5">
                <CalendarIcon className="w-5 h-5 text-gold shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold mb-1">Check In - Out</p>
                  <p className="text-sm text-white font-medium">
                    {date?.from ? (
                      date.to ? (
                        <>{format(date.from, "MMM dd")} - {format(date.to, "MMM dd")}</>
                      ) : (
                        format(date.from, "MMM dd, yyyy")
                      )
                    ) : "Select Dates"}
                  </p>
                </div>
              </button>
            } />
            <PopoverContent className="w-auto p-0 border-white/10 glass-dark" align="start">
              <Calendar
                mode="range"
                selected={date}
                onSelect={(val: any) => setDate(val || { from: undefined, to: undefined })}
                className="text-white"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* SUITE SELECTION */}
        <div className="h-full border-r border-white/10 flex flex-col justify-center px-8 cursor-pointer hover:bg-white/[0.03] transition-colors">
          <Select>
            <SelectTrigger className="w-full bg-transparent border-none p-0 h-full flex items-center gap-4 text-white focus:ring-0">
              <div className="flex items-center gap-4 w-full">
                <div className="w-5 h-5 border border-gold rounded-sm flex items-center justify-center shrink-0">
                   <div className="w-2 h-2 bg-gold/50 rounded-full" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold mb-1">Suite Category</p>
                  <SelectValue placeholder="Standard Room" />
                </div>
              </div>
            </SelectTrigger>
            <SelectContent className="glass-dark border-white/10 text-white">
              <SelectItem value="standard">Classic Elegance</SelectItem>
              <SelectItem value="deluxe">Golden Sanctuary</SelectItem>
              <SelectItem value="suite">Royal Suite Luxe</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* GUESTS */}
        <div className="h-full border-r border-white/10 flex flex-col justify-center px-8 cursor-pointer hover:bg-white/[0.03] transition-colors">
          <Select defaultValue="2">
            <SelectTrigger className="w-full bg-transparent border-none p-0 h-full flex items-center gap-4 text-white focus:ring-0">
              <div className="flex items-center gap-4 w-full">
                <Users className="w-5 h-5 text-gold shrink-0" />
                <div className="text-left flex-1">
                  <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold mb-1">Total Guests</p>
                  <SelectValue />
                </div>
              </div>
            </SelectTrigger>
            <SelectContent className="glass-dark border-white/10 text-white">
              <SelectItem value="1">01 Adult</SelectItem>
              <SelectItem value="2">02 Adults</SelectItem>
              <SelectItem value="3">03 Adults</SelectItem>
              <SelectItem value="4">04+ Adults</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="h-full flex items-center justify-center lg:px-8 bg-gold hover:bg-gold-hover transition-all cursor-pointer group relative overflow-hidden"
             onClick={handleBook}>
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 text-black font-bold uppercase tracking-widest text-xs"
              >
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                Validating
              </motion.div>
            ) : isSuccess ? (
              <motion.div
                key="success"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-3 text-black font-bold uppercase tracking-widest text-xs"
              >
                <CheckCircle2 className="w-5 h-5" />
                Confirmed
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full w-full"
              >
                <span className="text-black font-bold uppercase tracking-[0.2em] text-xs">Verify Availability</span>
                <span className="text-black/60 text-[9px] uppercase tracking-widest mt-1">Best price guaranteed</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
