import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, MapPin, Calendar } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string; chips?: { label: string; q: string }[]; cta?: { label: string; href: string }[] };

const greeting: Msg = {
  role: "bot",
  text: "Hey 👋 I'm the Firangi Barbeque assistant. Ask me anything — or pick a question below.",
  chips: [
   // { label: "📖 Menu & pricing", q: "menu" },
    { label: "🕒 Hours today", q: "hours" },
    { label: "📍 Location", q: "location" },
    { label: "📞 Book a table", q: "book" },
    { label: "🎉 Birthdays", q: "birthday" },
    { label: "🅿️ Parking", q: "parking" },
  ],
};

function reply(q: string): Msg {
  const t = q.toLowerCase();
  
  if (/hour|open|clos|time|tonight|today/.test(t))
    return {
      role: "bot",
      text: "We're open **6:00 PM – 2:30 AM**, Wednesday through Monday. Closed Tuesdays. Holiday hours may shift — calling ahead is the safest bet.",
      cta: [{ label: "Call now", href: "tel:+918588000738" }],
    };
  if (/where|address|loc|direction|map|reach/.test(t))
    return {
      role: "bot",
      text: "Shop No. 8, Plot No. 88, Furniture Block, WHS, **Kirti Nagar**, New Delhi 110015. We're easy to find and parking is right outside.",
      cta: [{ label: "Get directions", href: "https://www.google.com/maps/search/?api=1&query=Firangi+Barbeque+2.0+Kirti+Nagar" }],
    };
  if (/area|deliver|serve|nearby|locality/.test(t))
    return {
      role: "bot",
      text: "We're a dine-in restaurant based in Kirti Nagar, West Delhi — easily reachable from Rajouri Garden, Moti Nagar, Patel Nagar and Karol Bagh. For delivery, check Swiggy / Zomato listings.",
    };
  if (/book|reserv|table|seat/.test(t))
    return {
      role: "bot",
      text: "Two easy ways to book: WhatsApp/call the team, or fill the quick form on this page. We confirm in minutes.",
      cta: [
        { label: "📞 Call +91 85880 00738", href: "tel:+918588000738" },
        { label: "Open booking form", href: "#book" },
      ],
    };
  if (/birthday|anniversary|surprise|cake|private/.test(t))
    return {
      role: "bot",
      text: "We love celebrations! Custom platters, cake cutting, decor and private corners — let's plan it. Call us at +91 85880 00738 with the date.",
      cta: [{ label: "Call to plan", href: "tel:+918588000738" }],
    };
  if (/park|valet/.test(t))
    return { role: "bot", text: "Yes — open street parking is available right outside the restaurant in the Furniture Block." };
  if (/insta|social/.test(t))
    return { role: "bot", text: "Follow @firangiBarbeque2.0 on Instagram for nightly specials and behind-the-scenes from the tandoor.", cta: [{ label: "Open Instagram", href: "https://www.instagram.com/firangiBarbeque2.0/" }] };
  if (/contact|phone|number|call/.test(t))
    return { role: "bot", text: "Call or WhatsApp us anytime at **+91 85880 00738** — we usually pick up between 11 AM and 2 AM." };
  if (/hi|hello|hey|good/.test(t))
    return greeting;
  return {
    role: "bot",
text: "I can help with hours, location, parking, bookings, birthdays and contact information. Or you can reach our team directly:",    
    cta: [
      { label: "📞 Call", href: "tel:+918588000738" },
      { label: "Open booking form", href: "#book" },
    ],
  };
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([greeting]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, reply(text)]);
    }, 700 + Math.random() * 500);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full gradient-ember text-primary-foreground shadow-ember transition-all touch-target ${open ? "scale-0 opacity-0 pointer-events-none" : "scale-100"}`}
        aria-label="Open chat"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent ring-2 ring-background animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-[600px] max-h-[85vh] w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card shadow-ember"
          >
            <div className="flex items-center justify-between gap-2 sm:gap-3 border-b border-border bg-gradient-to-r from-primary/15 to-accent/10 p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full gradient-ember flex-shrink-0">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-card" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-sm sm:text-base leading-tight truncate">Firangi Host</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground">Online </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="touch-target rounded-full p-1.5 hover:bg-secondary flex-shrink-0"><X className="h-4 w-4 sm:h-5 sm:w-5" /></button>
            </div>

            <div className="flex-1 space-y-3 sm:space-y-4 overflow-y-auto p-3 sm:p-4">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div className={`max-w-[85%] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2.5 text-xs sm:text-sm ${m.role === "user" ? "gradient-ember text-primary-foreground rounded-br-sm" : "bg-secondary text-foreground rounded-bl-sm"}`}
                       dangerouslySetInnerHTML={{ __html: m.text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
                  />
                  {m.chips && (
                    <div className="mt-1.5 sm:mt-2 flex flex-wrap gap-1">
                      {m.chips.map((c) => (
                        <button key={c.label} onClick={() => send(c.q)} className="rounded-full border border-border bg-background px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs transition hover:border-primary hover:text-primary">
                          {c.label}
                        </button>
                      ))}
                    </div>
                  )}
                  {m.cta && (
                    <div className="mt-1.5 sm:mt-2 flex flex-wrap gap-1.5">
                      {m.cta.map((c) => (
                        <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener"
                           className="inline-flex items-center gap-1 rounded-full gradient-ember px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-primary-foreground">
                          {c.label}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              {typing && (
                <div className="flex items-start">
                  <div className="dot-typing rounded-xl sm:rounded-2xl rounded-bl-sm bg-secondary px-3 sm:px-4 py-2 sm:py-3 text-muted-foreground">
                    <span /><span /><span />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="border-t border-border bg-background/50 p-2.5 sm:p-3">
              <div className="mb-2 flex gap-1.5 text-[10px] sm:text-xs">
                <a href="tel:+918588000738" className="touch-target inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-border py-1.5 hover:bg-secondary"><Phone className="h-3 w-3 flex-shrink-0" /> <span className="hidden sm:inline">Call</span></a>
                <a href="#book" onClick={() => setOpen(false)} className="touch-target inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-border py-1.5 hover:bg-secondary"><Calendar className="h-3 w-3 flex-shrink-0" /> <span className="hidden sm:inline">Book</span></a>
                <a href="https://www.google.com/maps/search/?api=1&query=Firangi+Barbeque+2.0+Kirti+Nagar" target="_blank" rel="noopener" className="touch-target inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-border py-1.5 hover:bg-secondary"><MapPin className="h-3 w-3 flex-shrink-0" /> <span className="hidden sm:inline">Map</span></a>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-1.5 sm:gap-2">
                <input
                  value={input} onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about hours, location, bookings…"
                  className="flex-1 rounded-full border border-border bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm outline-none focus:border-primary"
                  maxLength={300}
                />
                <button type="submit" aria-label="Send" className="touch-target flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full gradient-ember text-primary-foreground flex-shrink-0">
                  <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
