import { motion } from "framer-motion";
import { Award, Clock, Users, Sparkles, ArrowUpRight } from "lucide-react";

const stats = [
  { icon: Award, num: "4.6★", label: "Google Rating", sub: "Across 600+ guests" },
  { icon: Users, num: "10K+", label: "Plates Served", sub: "Since we relit the grill" },
  { icon: Clock, num: "2:30AM", label: "Last Order", sub: "Six nights a week" },
  { icon: Sparkles, num: "100%", label: "Fresh & Local", sub: "Sourced daily, never frozen" },
];

export function WhyUs() {
  return (
    <section id="why" className="border-y border-border bg-secondary/30 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Why Firangi Barbeque 2.0</span>
          <h2 className="mt-3 sm:mt-4 heading-section">
            Built by hosts. <span className="italic text-accent">Loved</span> by Delhi.
          </h2>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-8 touch-target"
            >
              <div className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-br from-primary to-accent transition-transform duration-500 group-hover:translate-y-0" />
              <div className="flex items-start justify-between">
                <s.icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent transition-colors duration-500 group-hover:text-primary-foreground" />
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-foreground" />
              </div>
              <div className="mt-5 sm:mt-8 font-display text-3xl sm:text-5xl font-bold transition-colors duration-500 group-hover:text-primary-foreground">
                {s.num}
              </div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold transition-colors duration-500 group-hover:text-primary-foreground">{s.label}</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/80">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
