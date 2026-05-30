import { motion } from "framer-motion";
import { Flame, Drumstick, UtensilsCrossed, Wine, Music, Cake } from "lucide-react";
import { TiltCard } from "./TiltCard";

const items = [
  { icon: Flame, title: "Live Tandoor", desc: "Coal-fired clay ovens going from open till close. Smoke that you can taste in every bite.", tone: "from-primary/20 to-transparent", span: "" },
  { icon: Drumstick, title: "Signature Kebabs", desc: "Seekh, malai tikka, tandoori prawns and the Firangi Sharing Platter built for the table.", tone: "from-accent/20 to-transparent" },
  { icon: UtensilsCrossed, title: "Slow-Cooked Curries", desc: "Butter chicken, dal Firangi, laal maas — finished over the grill, not the microwave.", tone: "from-primary/15 to-transparent" },
  { icon: Wine, title: "Bar & Mocktails", desc: "Smoke-infused cocktails, draught classics and a zero-proof menu that respects the palate.", tone: "from-accent/15 to-transparent" },
  { icon: Music, title: "Late-Night Vibes", desc: "Curated playlists till 2:30 AM. The room gets louder, the food keeps coming.", tone: "from-primary/15 to-transparent" },
  { icon: Cake, title: "Birthdays & Bookings", desc: "Private corners, surprise cakes, custom menus. We've made a few first dates legendary.", tone: "from-accent/15 to-transparent" },
];

export function Offerings() {
  return (
    <section id="offerings" className="relative py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">What we do best</span>
          <h2 className="mt-3 sm:mt-4 heading-section">
            A menu built around <span className="italic text-accent">fire</span>, not fillers.
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
            Six things we obsess over — every plate that leaves the kitchen has to pass all of them.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className={it.span}
            >
              <TiltCard className={`h-full border border-border bg-gradient-to-br ${it.tone} bg-card p-5 sm:p-7 transition-shadow hover:shadow-ember rounded-2xl sm:rounded-3xl`}>
                <div className="flex h-full flex-col">
                  <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl gradient-ember text-primary-foreground shadow-ember" aria-hidden="true">
                    <it.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="mt-4 sm:mt-5 font-display text-lg sm:text-2xl leading-tight">{it.title}</h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
