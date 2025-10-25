"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Heart, MessageCircle, Maximize2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useFavorites } from "@/hooks/use-favorites"
import { useCart } from "@/hooks/use-cart"
import { ImageLightbox } from "@/components/image-lightbox"

const promotions = [
  {
    id: "promo-1",
    name: "Comedor Equipal 10 Piezas",
    price: "$38,000",
    image: "/images/promo-comedor-terracota-10pzas.jpeg",
    category: "Promoción",
    description: "10 comedores completos, color a elegir",
    badge: "No inlcuye Envío",
    details: "Precio NO incluye envío. Elige el color que prefieras para tu comedor.",
  },
  {
    id: "promo-2",
    name: "Equipales Tradicionales Piel Natural",
    price: "$600",
    priceUnit: "c/u",
    image: "/images/promo-sillas-natural-pintar.jpeg",
    category: "Promoción",
    description: "Piel natural para pintar a tu gusto",
    badge: "Personalizable",
    details: "Equipales en piel natural sin pintar. Personalízalos con el color que desees.",
  },
]

export function PromotionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const { toggleFavorite, isFavorite } = useFavorites()
  const { addToCart } = useCart()
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".promo-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppQuote = (product: (typeof promotions)[0]) => {
    const message = `Hola! Me interesa la promoción: ${product.name} - ${product.price}${product.priceUnit ? " " + product.priceUnit : ""}. ${product.details}`
    const whatsappUrl = `https://wa.me/523317225092?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 via-secondary/5 to-background" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
          <span className="text-sm font-bold text-primary bg-primary/10 px-6 py-3 rounded-full inline-flex items-center gap-2 border border-primary/20">
            Ofertas Especiales
          </span>
          <h2 className="font-black text-4xl md:text-6xl text-foreground mt-6 mb-4 tracking-tight">
            Promociones Exclusivas
          </h2>
          <p className="text-lg text-muted-foreground">
            Aprovecha nuestras ofertas especiales en equipales de alta calidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {promotions.map((promo, index) => (
            <Card
              key={promo.id}
              className="promo-card opacity-0 group overflow-hidden border-2 border-primary/20 bg-card hover:border-primary hover:shadow-2xl transition-all duration-500 rounded-3xl"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredId(promo.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                <img
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />

                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/90 hover:bg-background text-foreground shadow-lg border border-border md:opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation()
                    setLightboxImage({ src: promo.image, alt: promo.name })
                  }}
                >
                  <Maximize2 className="h-5 w-5" />
                </Button>

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent flex items-center justify-center gap-3 transition-opacity duration-300 ${
                    hoveredId === promo.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Button
                    size="icon"
                    className={`rounded-2xl h-12 w-12 shadow-xl transition-colors ${
                      isFavorite(promo.id)
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(promo)
                    }}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite(promo.id) ? "fill-current" : ""}`} />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl h-12 w-12 shadow-xl"
                    onClick={(e) => {
                      e.stopPropagation()
                      addToCart(promo)
                    }}
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-green-600 text-white hover:bg-green-700 rounded-2xl h-12 w-12 shadow-xl"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleWhatsAppQuote(promo)
                    }}
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </div>

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-xs font-bold bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg">
                    {promo.category}
                  </span>
                  <span className="text-xs font-bold bg-secondary text-secondary-foreground px-4 py-2 rounded-xl shadow-lg">
                    {promo.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-black text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {promo.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{promo.description}</p>
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-primary">{promo.price}</span>
                    {promo.priceUnit && (
                      <span className="text-lg font-bold text-muted-foreground">{promo.priceUnit}</span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground font-bold">MXN</span>
                </div>
                <p className="text-xs text-muted-foreground border-t border-border pt-3">{promo.details}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ImageLightbox
        src={lightboxImage?.src || ""}
        alt={lightboxImage?.alt || ""}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </section>
  )
}
