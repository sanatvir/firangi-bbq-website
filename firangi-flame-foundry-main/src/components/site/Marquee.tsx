import { Flame, Star } from "lucide-react";

const items = [
  "★ 4.6 Star Rating",
  "“Craving our food? Reserve Now!”",
  "Open till 2:30 AM",
  "Live tandoor · slow-cooked curries",
  "“Vibe is unreal, food is better”",
  "10,000+ plates served",
  "“It literally doesn't get better than this.”",
  "Reservations open now",
];

export function Marquee() {
  return (
    <div className="pause-on-hover relative overflow-hidden border-y border-border bg-secondary/40 py-2 sm:py-4">
      <div className="flex animate-marquee gap-8 sm:gap-12 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.18em] text-cream/70">
            {i % 3 === 0 ? <Flame className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-primary flex-shrink-0" /> : <Star className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-accent flex-shrink-0" />}
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
