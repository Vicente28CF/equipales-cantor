import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mi Carrito | Equipales Cantor",
  description:
    "Revisa tu carrito de compras de equipales artesanales. Completa tu pedido de muebles mexicanos hechos a mano.",
  alternates: {
    canonical: "/carrito",
  },
}

export default function CarritoLayout({ children }: { children: React.ReactNode }) {
  return children
}