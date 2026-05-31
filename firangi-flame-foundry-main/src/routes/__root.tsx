import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Looks like this dish isn't on the menu.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Back to Firangi BBQ
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing the page.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  meta: () => [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "Firangi BBQ 2.0 — Premium Tandoor & Barbeque in Kirti Nagar, Delhi" },
    { name: "description", content: "Smoky tandoor, signature kebabs, late-night vibes. Book your table at Firangi BBQ 2.0 — Kirti Nagar's premium barbeque destination. Open till 2:30 AM." },
    { name: "keywords", content: "barbeque restaurant Kirti Nagar, tandoori restaurant Delhi, late night restaurant Delhi, kebabs Delhi, family restaurant Kirti Nagar, birthday party restaurant Delhi, best kebabs Delhi, BBQ restaurant New Delhi, smoky tandoor Delhi" },
    { name: "author", content: "Firangi BBQ 2.0" },
    { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { httpEquiv: "x-ua-compatible", content: "IE=edge" },
    { name: "theme-color", content: "#ad5f37" },
    
    // Open Graph / Social Tags (Formatted with clear attribute mapping)
    { property: "og:title", content: "Firangi BBQ 2.0 — Where Smoke Meets Soul" },
    { property: "og:description", content: "Delhi's premium late-night smokehouse. Live tandoor, signature kebabs, and slow-cooked curries. Open till 2:30 AM in Kirti Nagar." },
    { property: "og:type", content: "business.business" },
    { property: "og:url", content: "https://firangibbq.com/" },
    { property: "og:image", content: "https://firangibbq.com/og-image.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:locale", content: "en_IN" },
    
    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Firangi BBQ 2.0 — Premium Tandoor & Barbeque" },
    { name: "twitter:description", content: "Delhi's late-night smokehouse. Signature kebabs & live tandoor. Kirti Nagar, open till 2:30 AM." },
    { name: "twitter:image", content: "https://firangibbq.com/og-image.jpg" },
  ],
  links: () => [
    { rel: "stylesheet", href: appCss },
    { rel: "canonical", href: "https://firangibbq.com/" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght=0,400;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  ],
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
})

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    let schemaScript = document.getElementById("jsonld-restaurant-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "jsonld-restaurant-schema";
      schemaScript.setAttribute("type", "application/ld+json");
      schemaScript.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Firangi BBQ 2.0",
        "description": "Premium tandoor & barbeque restaurant with live coal-fired ovens, signature kebabs, and late-night dining till 2:30 AM",
        "url": "https://firangibbq.com/",
        "image": {
          "@type": "ImageObject",
          "url": "https://firangibbq.com/logo.webp",
          "width": 1200,
          "height": 630
        },
        "telephone": "+91 85880 00738",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop 8, Plot 88, Furniture Block, WHS",
          "addressLocality": "Kirti Nagar",
          "addressRegion": "Delhi",
          "postalCode": "110015",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.6531",
          "longitude": "77.0502"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Monday",
            "opens": "18:00",
            "closes": "02:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Wednesday",
            "opens": "18:00",
            "closes": "02:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Thursday",
            "opens": "18:00",
            "closes": "02:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Friday",
            "opens": "18:00",
            "closes": "02:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "18:00",
            "closes": "02:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "18:00",
            "closes": "02:30"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/firangibbq2.0/",
          "https://www.google.com/maps/search/?api=1&query=Firangi+BBQ+2.0+Kirti+Nagar"
        ],
        "menu": {
          "@type": "Menu",
          "hasMenuSection": [
            {
              "@type": "MenuSection",
              "name": "Live Tandoor",
              "description": "Coal-fired clay ovens with signature kebabs and tandoori specialties"
            },
            {
              "@type": "MenuSection",
              "name": "Signature Kebabs",
              "description": "Seekh, Malai Tikka, Tandoori Prawns, and Firangi Sharing Platter"
            },
            {
              "@type": "MenuSection",
              "name": "Slow-Cooked Curries",
              "description": "Butter Chicken, Dal Firangi, Laal Maas finished over the grill"
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "ratingCount": "600",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Regular Guest"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Food is very delicious. Staff service is quick and polite. All-time favourite!"
          }
        ]
      });
      document.head.appendChild(schemaScript);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}