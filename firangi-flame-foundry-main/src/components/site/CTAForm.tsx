import { motion } from "framer-motion";
import { Phone, MapPin, PhoneCall } from "lucide-react";

export function CTAForm() {
  const handleCallClick = () => {
    window.location.href = "tel:+918588000738";
  };

  const handleDirectionsClick = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Firangi+BBQ+2.0+Kirti+Nagar", "_blank");
  };

  return (
    <section id="book" className="px-4 sm:px-6 pb-16 sm:pb-28 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-border p-0.5 sm:p-1 shadow-ember"
           style={{ background: "linear-gradient(135deg, oklch(0.68 0.19 45 / 0.9), oklch(0.35 0.12 20 / 0.95))" }}>
        <div className="grid gap-0 rounded-2xl sm:rounded-[2.3rem] bg-background lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col justify-between p-6 sm:p-10 sm:p-14"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Get in touch</span>
              <h2 className="mt-3 sm:mt-4 heading-section">
                Ready to <span className="italic text-accent">dine</span> with us?
              </h2>
              <p className="mt-3 sm:mt-4 max-w-md text-xs sm:text-sm text-muted-foreground">
                Call us directly or visit us in Kirti Nagar. Walk-ins welcome, but weekends fill up fast.
              </p>
            </div>
            <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
              <button
                onClick={handleCallClick}
                className="flex items-center gap-3 sm:gap-4 w-full rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-border hover:bg-card/50 transition touch-target"
              >
                <div className="rounded-xl sm:rounded-2xl gradient-ember p-2 sm:p-3 text-primary-foreground flex-shrink-0"><Phone className="h-4 w-4 sm:h-5 sm:w-5" /></div>
                <div className="text-left min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Call directly</div>
                  <div className="font-display text-sm sm:text-lg truncate">+91 85880 00738</div>
                </div>
              </button>
              <button
                onClick={handleDirectionsClick}
                className="flex items-center gap-3 sm:gap-4 w-full rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-border hover:bg-card/50 transition touch-target"
              >
                <div className="rounded-xl sm:rounded-2xl bg-accent p-2 sm:p-3 text-accent-foreground flex-shrink-0"><MapPin className="h-4 w-4 sm:h-5 sm:w-5" /></div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Find us</div>
                  <div className="font-display text-sm sm:text-lg">Kirti Nagar, New Delhi</div>
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col justify-center items-center border-t border-border bg-card p-6 sm:p-10 sm:p-14 lg:border-l lg:border-t-0 text-center"
          >
            <PhoneCall className="h-12 w-12 sm:h-16 sm:w-16 text-accent mb-3 sm:mb-4" />
            <h3 className="font-display text-lg sm:text-2xl mb-2">Call to Order</h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xs mb-5 sm:mb-6">
              For reservations or to place an order, please call us directly. Our team will be happy to assist you.
            </p>
            <button
              onClick={handleCallClick}
              className="touch-target inline-flex items-center justify-center gap-2 rounded-full gradient-ember px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-primary-foreground shadow-ember hover:shadow-lg transition"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now: +91 85880 00738</span>
              <span className="sm:hidden">Call Now</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
