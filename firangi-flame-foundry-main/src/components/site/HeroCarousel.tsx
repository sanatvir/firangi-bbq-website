import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Flame, Phone } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    tagline: "Live Tandoor · Open till 2:30 AM",
    headline_a: "Where Smoke",
    headline_b: "Meets Soul",
    subtitle: "Kirti Nagar's late-night smokehouse — kebabs charred over live coal, served the way Delhi remembers.",
  },
  {
    image: hero2,
    tagline: "An Evening, Reimagined",
    headline_a: "Dimly Lit.",
    headline_b: "Loudly Loved.",
    subtitle: "Velvet booths, brass lanterns, and a soundtrack that lingers. Firangi Barbeque is the Friday you've been postponing.",
  },
  {
    image: hero3,
    tagline: "From Our Grill to Your Table",
    headline_a: "Built for",
    headline_b: "the Hungry.",
    subtitle: "Generous platters, butter-soft curries, fresh naan, and chutneys made the slow way. No shortcuts.",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  const go = (d: number) => setIndex((i) => (i + d + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={`${slide.headline_a} ${slide.headline_b} - Firangi Barbeque 2.0 - ${slide.subtitle}`}
            className="h-full w-full object-cover animate-ken-burns"
            loading="eager"
          />
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-24 lg:px-12 lg:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-background/40 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-accent backdrop-blur sm:gap-2 sm:px-4 sm:py-1.5">
              <Flame className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" /> {slide.tagline}
            </div>
            <h1 className="mt-4 font-display text-3xl leading-[1.1] text-cream sm:mt-6 sm:text-5xl sm:leading-[1.05] lg:text-8xl">
              <span className="block font-bold">{slide.headline_a}</span>
              <span className="block italic text-accent">{slide.headline_b}</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-cream/80 sm:mt-6 sm:text-base lg:text-lg">{slide.subtitle}</p>
            <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-wrap sm:flex-row sm:items-center sm:gap-3">
              <a
                href="#book"
                className="group touch-target inline-flex items-center justify-center gap-2 rounded-full gradient-ember px-6 py-3 text-sm font-semibold text-primary-foreground shadow-ember transition hover:scale-[1.02] sm:px-7 sm:py-4"
              >
                Reserve a Table
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+918588000738"
                className="touch-target inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-background/30 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition hover:bg-background/50 sm:px-7 sm:py-4"
              >
                <Phone className="h-4 w-4" /> <span className="hidden sm:inline">+91 85880 00738</span><span className="sm:hidden">Call</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="touch-target absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-cream/20 bg-background/30 p-2 text-cream backdrop-blur transition hover:bg-background/60 sm:left-6 sm:p-3"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="touch-target absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-cream/20 bg-background/30 p-2 text-cream backdrop-blur transition hover:bg-background/60 sm:right-6 sm:p-3"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-accent" : "w-4 bg-cream/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
