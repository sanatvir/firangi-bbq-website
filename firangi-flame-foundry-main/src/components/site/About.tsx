import { motion } from "framer-motion";
import logo from "@/assets/logo.webp";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-3xl sm:rounded-[3rem] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" />
          <div className="rounded-2xl sm:rounded-[2.5rem] border border-border bg-card p-6 sm:p-10 text-center">
            <img src={logo} alt="Firangi BBQ 2.0 Logo - Premium Tandoor Restaurant in Kirti Nagar Delhi" className="mx-auto h-32 w-32 sm:h-44 sm:w-44 object-contain" loading="lazy" />
            <div className="mt-3 sm:mt-4 font-display text-xl sm:text-2xl">Firangi BBQ <span className="text-accent">2.0</span></div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Est. Kirti Nagar</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Our story</span>
          <h2 className="mt-3 sm:mt-4 heading-section">
            Welcome to <span className="italic text-accent">Firangi BBQ 2.0</span>
          </h2>
          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
            <p>
              Your ultimate destination for a delightful culinary experience. Indulge in our mouth-watering BBQ dishes that are sure to tantalize your taste buds. Our late-night car dining services are designed to offer you the convenience of enjoying our delicious food right from the comfort of your vehicle.
            </p>
            <p>
              Savor tasty food with your loved ones while soaking in the good ambience of our vibrant atmosphere. Whether it's a late-night craving or a fun outing, Firangi BBQ 2.0 is here to make your dining experience unforgettable.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4">
            {[
              { k: "2023", v: "Since" },
              { k: "Fresh", v: "Daily" },
              { k: "Late", v: "Till 2:30AM" },
            ].map((b) => (
              <div key={b.v} className="rounded-xl sm:rounded-2xl border border-border bg-card p-3 sm:p-4 text-center">
                <div className="font-display text-base sm:text-xl text-accent">{b.v}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground">{b.k}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
