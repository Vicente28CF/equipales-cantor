"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Heart, ArrowRight, Maximize2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useFavorites } from "@/hooks/use-favorites"
import { useCart } from "@/hooks/use-cart"
import { ImageLightbox } from "@/components/image-lightbox"

const products = [
  {
    id: 1,
    name: "Sala Tulum",
    price: "$10,000",
    image: "/images/equipal-set-beige.jpeg",
    category: "Sets",
    description: "Incluye mesa de centro",
  },
  {
    id: 2,
    name: "Sala Tradicional",
    price: "$7,000",
    image: "/images/equipal-set-naranja.jpeg",
    category: "Sets",
    description: "Incluye mesa de centro",
  },
  {
    id: 3,
    name: "Comedor Acapulco",
    price: "$11,000",
    image: "/images/equipal-comedor-negro.jpeg",
    category: "Comedores",
    description: "8 equipales y mesa rectangular",
  },
  {
    id: 4,
    name: "Equipal Tulum",
    price: "$1,800",
    image: "/images/equipal-silla-beige.jpeg",
    category: "Sillas",
    description: "Silla individual artesanal",
  },
]

export function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
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

    const cards = sectionRef.current?.querySelectorAll(".product-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="productos"
      className="py-32 bg-gradient-to-b from-background via-muted/30 to-background"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 opacity-0 animate-fade-in-up">
          <span className="text-sm font-bold text-secondary bg-secondary/10 px-6 py-3 rounded-full inline-flex items-center gap-2 border border-secondary/20">
            Nuestra Colección
          </span>
          <h2 className="font-black text-5xl md:text-7xl text-foreground mt-8 mb-6 tracking-tight">
            Piezas que transforman espacios
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada equipal es único. Elige el tuyo y dale personalidad a tu hogar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="product-card opacity-0 group overflow-hidden border-2 border-border bg-card hover:border-primary/50 hover:shadow-2xl transition-all duration-500 rounded-3xl"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />

                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/90 hover:bg-background text-foreground shadow-lg border border-border md:opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation()
                    setLightboxImage({ src: product.image, alt: product.name })
                  }}
                >
                  <Maximize2 className="h-5 w-5" />
                </Button>

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredId === product.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Button
                    size="icon"
                    className={`rounded-2xl h-14 w-14 shadow-xl transition-colors ${
                      isFavorite(product.id)
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(product)
                    }}
                  >
                    <Heart className={`h-6 w-6 ${isFavorite(product.id) ? "fill-current" : ""}`} />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl h-14 w-14 shadow-xl"
                    onClick={(e) => {
                      e.stopPropagation()
                      addToCart(product)
                    }}
                  >
                    <ShoppingCart className="h-6 w-6" />
                  </Button>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold bg-background/95 text-foreground px-4 py-2 rounded-xl shadow-lg border border-border">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-black text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-baseline justify-between">
                  <span className="text-4xl font-black text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground font-bold">MXN</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/productos">
            <Button
              size="lg"
              className="gradient-secondary text-secondary-foreground hover:opacity-90 h-16 px-12 text-lg font-bold rounded-2xl shadow-xl group"
            >
              Ver Toda la Colección
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
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
