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

export const metadata: Metadata = {
  title: "Equipales Artesanales | Muebles Mexicanos Hechos a Mano",
  description:
    "Descubre nuestra colección de equipales artesanales. Muebles tradicionales mexicanos hechos a mano con madera y cuero de la más alta calidad.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
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
