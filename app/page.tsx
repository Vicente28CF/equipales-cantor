import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PromotionsSection } from "@/components/promotions-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutSection } from "@/components/about-section"
import { ProcessSection } from "@/components/process-section"
import { GradientFeatureSection } from "@/components/gradient-feature-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationSection } from "@/components/location-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <Hero />
      <PromotionsSection />
      <FeaturedProducts />
      <AboutSection />
      <ProcessSection />
      <GradientFeatureSection />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </main>
  )
}
