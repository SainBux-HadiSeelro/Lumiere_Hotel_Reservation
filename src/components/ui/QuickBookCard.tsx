import React, { useState } from "react";
import { motion } from "motion/react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
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
import { Label } from "@/components/ui/label";

export function QuickBookCard() {
  const [date, setDate] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: undefined,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      window.location.hash = "reservation";
      // Success is handled by the main form section's logic if they go there
      // For now, let's just trigger a scroll to the full form
      document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="glass border-white/5 p-8 w-full max-w-sm rounded-[2rem] text-left shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <CalendarIcon className="w-24 h-24 text-white rotate-12" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
          <h3 className="font-serif text-2xl text-white font-medium tracking-tight">Reserve Stay</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Suite</Label>
          <Select required>
            <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-lg h-10 text-xs">
              <SelectValue placeholder="Select room type" />
            </SelectTrigger>
            <SelectContent className="glass-dark border-white/10 text-white">
              <SelectItem value="standard">Classic Elegance</SelectItem>
              <SelectItem value="deluxe">Golden Sanctuary</SelectItem>
              <SelectItem value="suite">Royal Suite</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Interval</Label>
          <Popover>
            <PopoverTrigger
              render={
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white/5 border-white/10 text-white rounded-lg h-10 text-xs hover:bg-white/10",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-3.5 w-3.5 text-gold" />
                  {date?.from ? (
                    date.to ? (
                      <>{format(date.from, "MMM dd")} - {format(date.to, "MMM dd")}</>
                    ) : (
                      format(date.from, "MMM dd")
                    )
                  ) : (
                    <span>Pick dates</span>
                  )}
                </Button>
              }
            />
            <PopoverContent className="w-auto p-0 border-white/10 glass-dark" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={{ from: date?.from, to: date?.to }}
                onSelect={(val: any) => setDate(val || { from: undefined, to: undefined })}
                className="text-white"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Guests</Label>
            <Select defaultValue="2">
              <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-lg h-10 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-dark border-white/10 text-white">
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Promo</Label>
            <input 
              type="text" 
              placeholder="CODE"
              className="w-full bg-white/5 border border-white/10 text-white rounded-lg h-10 text-xs px-3 focus:border-gold outline-none"
            />
          </div>
        </div>

        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gold hover:bg-gold-hover text-black font-bold h-11 uppercase tracking-widest text-[10px] rounded-lg mt-2"
        >
          {isSubmitting ? <Loader2 className="animate-spin h-4 w-4" /> : "Verify Availability"}
        </Button>
      </form>
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Instant confirmation</span>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-gold" />
          <div className="w-1 h-1 rounded-full bg-gold" />
          <div className="w-1 h-1 rounded-full bg-gold" />
        </div>
      </div>
      </div>
    </motion.div>
  );
}
