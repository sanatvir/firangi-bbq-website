import { Phone, MapPin, Instagram, Clock } from "lucide-react";
import logo from "@/assets/logo.webp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 px-4 sm:px-6 py-12 sm:py-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Firangi Barbeque 2.0 Logo - Premium Tandoor & Barbeque Restaurant" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-accent/40" loading="lazy" />
            <div>
              <div className="font-display text-base sm:text-xl">Firangi Barbeque <span className="text-accent">2.0</span></div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground">Kirti Nagar · Delhi</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-xs sm:text-sm text-muted-foreground">
            A late-night smokehouse for people who take their kebabs seriously and their evenings even more so. Premium tandoor & barbeque in Kirti Nagar, Delhi.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base sm:text-lg">Contact</h3>
          <ul className="mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
            <li className="flex items-start gap-2 sm:gap-3"><MapPin className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" aria-hidden="true" /> <span>Shop 8, Plot 88, Furniture Block, WHS, Kirti Nagar, New Delhi 110015</span></li>
            <li><a href="tel:+918588000738" className="flex items-center gap-2 sm:gap-3 hover:text-cream" aria-label="Call Firangi Barbeque 2.0"><Phone className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" aria-hidden="true" /> +91 85880 00738</a></li>
            <li><a href="https://www.instagram.com/firangibbq2.0/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 hover:text-cream" aria-label="Visit Firangi Barbeque 2.0 on Instagram"><Instagram className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" aria-hidden="true" /> @firangiBarbeque2.0</a></li>
            <li className="flex items-center gap-2 sm:gap-3"><Clock className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" aria-hidden="true" /> <span>Open 6 PM – 2:30 AM (Closed Tuesdays)</span></li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="font-display text-base sm:text-lg">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
            <li><a href="#offerings" className="hover:text-cream">Menu Highlights</a></li>
            <li><a href="#why" className="hover:text-cream">Why Firangi</a></li>
            <li><a href="#reviews" className="hover:text-cream">Reviews</a></li>
            <li><a href="#visit" className="hover:text-cream">Visit</a></li>
            <li><a href="#about" className="hover:text-cream">About</a></li>
            <li><a href="#book" className="hover:text-cream">Reserve</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 sm:mt-12 max-w-7xl border-t border-border pt-4 sm:pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Firangi Barbeque 2.0. All rights reserved. Authentic tandoor restaurant & barbeque house in Kirti Nagar, New Delhi.
      </div>
    </footer>
  );
}
