import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mis Favoritos | Equipales Cantor",
  description:
    "Guarda tus equipales favoritos. Explora nuestra colección de equipales artesanales hechos a mano en Zacoalco de Torres, Jalisco.",
  alternates: {
    canonical: "/favoritos",
  },
}

export default function FavoritosLayout({ children }: { children: React.ReactNode }) {
  return children
}