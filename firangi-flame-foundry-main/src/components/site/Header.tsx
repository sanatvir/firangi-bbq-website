import { useEffect, useState } from "react";
import { Menu, Phone, MapPin, X } from "lucide-react";
import logo from "@/assets/logo.webp";

const links = [
  { href: "#offerings", label: "Menu Highlights" },
  { href: "#why", label: "Why Firangi" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

const MAPS = "https://www.google.com/maps/search/?api=1&query=Firangi+Barbeque+2.0+Kirti+Nagar";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 sm:py-3 lg:px-12">
        <a href="#" className="flex items-center gap-2 sm:gap-3" aria-label="Firangi Barbeque 2.0 - Home">
          <img src={logo} alt="Firangi Barbeque 2.0 Logo - Premium Tandoor & Barbeque Restaurant" className="h-10 w-10 rounded-full object-cover ring-2 ring-accent/40 sm:h-12 sm:w-12" />
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-cream sm:text-lg">Firangi Barbeque <span className="text-accent">2.0</span></div>
            <div className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.25em]">Kirti Nagar · Delhi</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:gap-8 lg:flex" aria-label="Main Navigation">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-underline text-sm font-medium text-cream/80 transition hover:text-cream">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:gap-3 lg:flex">
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm text-cream transition hover:bg-secondary touch-target" aria-label="Get directions to Firangi Barbeque 2.0 on Google Maps">
            <MapPin className="h-4 w-4" aria-hidden="true" /> Directions
          </a>
          <a href="tel:+918588000738" className="inline-flex items-center gap-2 rounded-full gradient-ember px-4 py-2.5 text-xs sm:px-5 sm:py-2.5 sm:text-sm font-semibold text-primary-foreground shadow-ember touch-target" aria-label="Call Firangi Barbeque 2.0 at +91 85880 00738">
            <Phone className="h-4 w-4" aria-hidden="true" /> Call
          </a>
        </div>

        <button onClick={() => setOpen(true)} className="touch-target lg:hidden text-cream p-2" aria-label="Open mobile navigation menu" aria-expanded={open}>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl lg:hidden overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <span className="font-display text-xl text-accent">Menu</span>
            <button onClick={() => setOpen(false)} className="touch-target p-2" aria-label="Close mobile navigation menu"><X className="h-6 w-6 text-cream" aria-hidden="true" /></button>
          </div>
          <nav className="flex flex-col gap-2 px-4 sm:px-6 pt-6 pb-8" aria-label="Mobile Navigation">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg sm:text-2xl font-display text-cream py-3 px-2 rounded-lg hover:bg-secondary/50 transition">
                {l.label}
              </a>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+918588000738" className="touch-target inline-flex items-center justify-center gap-2 rounded-full gradient-ember px-6 py-3 sm:py-4 font-semibold text-primary-foreground" aria-label="Call Firangi Barbeque 2.0">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call +91 85880 00738
              </a>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="touch-target inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 sm:py-4 font-semibold text-cream" aria-label="Get directions to Firangi Barbeque 2.0">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
