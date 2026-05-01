import { type Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AllProductsSection } from "@/components/all-products-section"

export const metadata: Metadata = {
  title: "Catálogo de Equipales Artesanales",
  description:
    "Explora nuestro catálogo completo de equipales artesanales. Sala, comedor y sillas hechos a mano en Zacoalco de Torres, Jalisco. Envío a toda la República Mexicana.",
  openGraph: {
    title: "Catálogo de Equipales Artesanales | Equipales Cantor",
    description:
      "Explora nuestro catálogo completo de equipales artesanales hechos a mano en Zacoalco de Torres, Jalisco.",
  },
}

export default function ProductosPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <AllProductsSection />
      <Footer />
    </main>
  )
}