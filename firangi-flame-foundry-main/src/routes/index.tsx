import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { Marquee } from "@/components/site/Marquee";
import { Offerings } from "@/components/site/Offerings";
import { WhyUs } from "@/components/site/WhyUs";
import { Reviews } from "@/components/site/Reviews";
import { About } from "@/components/site/About";
import { Visit } from "@/components/site/Visit";
import { CTAForm } from "@/components/site/CTAForm";
import { Footer } from "@/components/site/Footer";
import { Chatbot } from "@/components/site/Chatbot";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  // Dynamically set SEO metadata for the SPA client-side execution
  useEffect(() => {
    document.title = "Firangi BBQ 2.0 — Premium Tandoor & Barbeque Restaurant in Kirti Nagar, Delhi";
    
    const metaTags = [
      { name: "description", content: "Live tandoor, signature kebabs, slow-cooked curries — open till 2:30 AM in Kirti Nagar. Reserve your table at Delhi's premium barbeque restaurant. Authentic tandoori specialties, family-friendly environment, birthday party bookings." },
      { name: "keywords", content: "barbeque restaurant Kirti Nagar, tandoori restaurant Delhi, late night restaurant Delhi, kebabs in Delhi, BBQ restaurant New Delhi, tandoor restaurant, best kebabs Delhi, family restaurant, birthday party venue Delhi" },
      { property: "og:title", content: "Firangi BBQ 2.0 — Where Smoke Meets Soul" },
      { property: "og:description", content: "Delhi's premium late-night smokehouse. Live tandoor, signature kebabs, and slow-cooked curries. Open till 2:30 AM in Kirti Nagar. Book now!" },
      { property: "og:url", content: "https://firangibbq.com/" },
      { property: "og:image", content: "https://firangibbq.com/og-image.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Firangi BBQ 2.0 — Premium Tandoor & Barbeque" },
      { name: "twitter:description", content: "Delhi's best BBQ restaurant. Live tandoor & signature kebabs. Kirti Nagar, open till 2:30 AM." }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement("meta");
        if (name) element.setAttribute("name", name);
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    });

    // Handle canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://firangibbq.com/");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroCarousel />
      <Marquee />
      <Offerings />
      <WhyUs />
      <Reviews />
      <About />
      <Visit />
      <CTAForm />
      <Footer />
      <Chatbot />
    </main>
  );
}