import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const reviews = [
  { name: "Simran K.", role: "Regular", quote: "Food is very delicious. Staff service is quick and staff behaviour is kind and polite as well. All-time favourite and recommended place to visit with friends and family.", rating: 4 },
  { name: "Sahibpreet K.", role: "Food enthusiast", quote: "The food here is absolutely fantastic! Not only is the service top-notch, but you can also customize your order to your liking. I highly recommend trying the tart and firni; they are truly amazing dishes that you must try!", rating: 5 },
  { name: "Sukhpreet K.", role: "Veg lover", quote: "Veg Shammi kebab was amazing! It was seriously the best I've had in a long time — so flavorful, with satisfying cheese pull and just the right amount of crunch and spice. Even the portion was perfect. The vibe is super cozy, and the owner is really friendly. Definitely recommend!", rating: 5 },
  { name: "Ketan P.", role: "Late-night regular", quote: "The food is really good, service is excellent, and Belgian tart is a must-try. You must go and enjoy.", rating: 5 },
  { name: "Bableen K.", role: "Special occasion", quote: "The whole experience was fantastic. Scrumptious food.", rating: 5 },
  { name: "Harshit K.", role: "Diner", quote: "Loved the food. Very good service. Staff and the owner himself are very nice.", rating: 5 },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((p) => (p + d + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="bg-burgundy/40 py-16 sm:py-28" style={{ background: "linear-gradient(180deg, oklch(0.22 0.04 30), oklch(0.18 0.03 30))" }}>
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Word on the street</span>
          <h2 className="mt-3 sm:mt-4 heading-section">
            Delhi's <span className="italic text-accent">verdict</span> is in.
          </h2>
          <div className="mt-4 sm:mt-6 flex items-center gap-1.5 sm:gap-2">
            {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />)}
            <span className="ml-2 text-xs sm:text-sm text-muted-foreground">4.2 / 5 rating</span>
          </div>
          <p className="mt-4 sm:mt-6 max-w-md text-xs sm:text-sm text-muted-foreground">
            We don't write our own reviews. These are the people who walked in, ate well, and came back.
          </p>
          <div className="mt-8 sm:mt-10 flex gap-2 sm:gap-3">
            <button onClick={() => go(-1)} aria-label="Previous" className="touch-target rounded-full border border-border bg-card/50 p-2 sm:p-3 backdrop-blur transition hover:bg-card">
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button onClick={() => go(1)} aria-label="Next" className="touch-target rounded-full border border-border bg-card/50 p-2 sm:p-3 backdrop-blur transition hover:bg-card">
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        <div className="relative h-80 sm:h-96 lg:h-[420px] [perspective:1500px]">
          <AnimatePresence mode="popLayout">
            {reviews.map((r, idx) => {
              const offset = (idx - i + reviews.length) % reviews.length;
              if (offset > 2) return null;
              return (
                <motion.article
                  key={r.name}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 25 }}
                  animate={{
                    opacity: offset === 0 ? 1 : 0.5 - offset * 0.15,
                    scale: 1 - offset * 0.06,
                    y: offset * 20,
                    x: offset * 14,
                    rotateY: offset * -6,
                    zIndex: 10 - offset,
                  }}
                  exit={{ opacity: 0, scale: 0.9, x: -100 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-soft"
                >
                  <Quote className="h-7 w-7 sm:h-10 sm:w-10 text-accent/40" />
                  <p className="mt-4 sm:mt-6 font-display text-base sm:text-xl italic leading-relaxed lg:text-2xl">
                    "{r.quote}"
                  </p>
                  <div className="mt-5 sm:mt-8 flex items-center gap-3 border-t border-border pt-4 sm:pt-6">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full gradient-gold font-display text-sm sm:text-lg font-bold text-charcoal flex-shrink-0">
                      {r.name[0]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm sm:text-base truncate">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                    <div className="ml-auto flex gap-0.5 flex-shrink-0">
                      {[...Array(r.rating)].map((_, k) => <Star key={k} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-accent text-accent" />)}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
