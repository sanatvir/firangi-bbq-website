import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Navigation, ChevronDown, Instagram } from "lucide-react";

const schedule = [
  { day: "Monday", hours: "6:00 PM – 2:30 AM" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "6:00 PM – 2:30 AM" },
  { day: "Thursday", hours: "6:00 PM – 2:30 AM" },
  { day: "Friday", hours: "6:00 PM – 2:30 AM" },
  { day: "Saturday", hours: "6:00 PM – 2:30 AM" },
  { day: "Sunday", hours: "6:00 PM – 2:30 AM" },
];

const MAPS = "https://www.google.com/maps/search/?api=1&query=Firangi+Barbeque+2.0+Kirti+Nagar";

export function Visit() {
  const todayIdx = (new Date().getDay() + 6) % 7; // Mon=0
  const [open, setOpen] = useState<number | null>(todayIdx);

  return (
    <section id="visit" className="py-16 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-12">
        <div className="lg:col-span-2">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Find us</span>
          <h2 className="mt-4 heading-section">
            Pull up to <span className="italic text-accent">Kirti Nagar.</span>
          </h2>
          <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-7">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="rounded-2xl gradient-ember p-2.5 sm:p-3 text-primary-foreground flex-shrink-0" aria-hidden="true"><MapPin className="h-4 w-4 sm:h-5 sm:w-5" /></div>
              <div>
                <div className="font-display text-base sm:text-lg">Firangi Barbeque 2.0</div>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  Shop No. 8, Plot No. 88, Furniture Block, WHS, Kirti Nagar, New Delhi, Delhi 110015
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
              <a href="tel:+918588000738" className="touch-target inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full gradient-ember px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-ember" aria-label="Call Firangi Barbeque 2.0 at +91 85880 00738">
                <Phone className="h-4 w-4" aria-hidden="true" /> <span className="hidden sm:inline">Call</span>
              </a>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="touch-target inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-border px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold" aria-label="Get directions to Firangi Barbeque 2.0 on Google Maps">
                <Navigation className="h-4 w-4" aria-hidden="true" /> <span className="hidden sm:inline">Directions</span>
              </a>
            </div>
            <a
              href="https://www.instagram.com/firangiBarbeque2.0/"
              target="_blank" rel="noopener noreferrer"
              className="touch-target mt-2.5 sm:mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold" aria-label="Follow Firangi Barbeque 2.0 on Instagram"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" /> @firangiBarbeque2.0
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-2 sm:p-3">
            {schedule.map((s, i) => {
              const isToday = i === todayIdx;
              const isOpen = open === i;
              const isClosed = s.hours === "Closed";
              return (
                <motion.button
                  key={s.day}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between rounded-xl sm:rounded-2xl px-3 sm:px-5 py-3 sm:py-4 text-left transition text-sm sm:text-base ${isToday ? "bg-primary/15 ring-1 ring-primary/40" : "hover:bg-secondary/60"}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className={`h-2 w-2 rounded-full flex-shrink-0 ${isClosed ? "bg-destructive" : isToday ? "bg-primary animate-pulse" : "bg-accent/60"}`} />
                    <span className="font-display text-base sm:text-lg">{s.day}</span>
                    {isToday && <span className="rounded-full bg-primary px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-primary-foreground whitespace-nowrap">Today</span>}
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className={`text-xs sm:text-sm ${isClosed ? "text-destructive" : "text-muted-foreground"}`}>{s.hours}</span>
                    <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </motion.button>
              );
            })}
            <p className="mt-3 sm:mt-4 px-3 sm:px-5 pb-2 text-xs italic text-muted-foreground">
              "Hours subject to change on holidays or private events — please call to confirm for the night."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
