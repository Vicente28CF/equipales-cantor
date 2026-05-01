import type React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FavoritesProvider } from "@/hooks/use-favorites";
import { CartProvider } from "@/hooks/use-cart";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const BASE_URL = "https://www.equipalescantor.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Equipales Cantor | Muebles Artesanales Mexicanos desde 1985",
    template: "%s | Equipales Cantor",
  },
  description:
    "Compra equipales artesanales hechos a mano en Zacoalco de Torres, Jalisco. 4ª generación de artesanos. Envío a toda la República Mexicana. Sala, comedor y sillas desde $850 MXN.",
  keywords: [
    "equipales artesanales",
    "muebles mexicanos",
    "equipales Jalisco",
    "Zacoalco de Torres",
    "muebles artesanales México",
    "comprar equipales",
    "equipales Guadalajara",
    "sillas de madera y cuero",
    "muebles mexicanos hecha a mano",
  ],
  authors: [{ name: "Equipales Cantor" }],
  creator: "Equipales Cantor",
  generator: "Next.js",
  applicationName: "Equipales Cantor",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE_URL,
    siteName: "Equipales Cantor",
    title: "Equipales Cantor | Muebles Artesanales Mexicanos desde 1985",
    description:
      "Compra equipales artesanales hechos a mano en Zacoalco de Torres, Jalisco. 4ª generación de artesanos. Envío a toda la República Mexicana.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Equipales Artesanales Cantor - Zacoalco de Torres Jalisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipales Cantor | Muebles Artesanales Mexicanos",
    description:
      "Compra equipales artesanales hechos a mano en Zacoalco de Torres, Jalisco. Envío a toda la República.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} overflow-x-hidden`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        <CartProvider>
          <FavoritesProvider>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            <Analytics />
            <WhatsAppButton />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
