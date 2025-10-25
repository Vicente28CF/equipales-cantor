import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AllProductsSection } from "@/components/all-products-section"

export default function ProductosPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <AllProductsSection />
      <Footer />
    </main>
  )
}
