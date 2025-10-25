"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Heart, Filter, MessageCircle, Maximize2 } from "lucide-react"
import { useState } from "react"
import { useFavorites } from "@/hooks/use-favorites"
import { useCart } from "@/hooks/use-cart"
import { ImageLightbox } from "@/components/image-lightbox"

const allProducts = [
  {
    id: 1,
    name: "Sala Tulum",
    price: "$10,000",
    image: "/images/equipal-set-beige.jpeg",
    category: "Sala", // Changed from "Sets" to "Sala"
    description: "Incluye mesa de centro",
  },
  {
    id: 2,
    name: "Sala tradicional",
    price: "$7,000",
    image: "/images/equipal-set-naranja.jpeg",
    category: "Sala", // Changed from "Sets" to "Sala"
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
    category: "Equipales", // Changed from "Sillas" to "Equipales"
    description: "Silla individual con tejido artesanal",
  },
  {
    id: 5,
    name: "Comedor charro",
    price: "$10,500",
    image: "/images/equipal-comedor-exterior.jpeg",
    category: "Comedores",
    description: "6 equipales y mesa ovalada",
  },
  {
    id: 6,
    name: "Equipal cantinero tradicional",
    price: "$1,200",
    image: "/images/equipal-silla-cafe-exterior.jpeg",
    category: "Equipales", // Changed from "Sillas" to "Equipales"
    description: "Silla cantinero en cuero con base tejida",
  },
  {
    id: 7,
    name: "Equipal Cancún",
    price: "$1,100",
    image: "/images/equipal-sillas-cafe.jpeg",
    category: "Equipales", // Changed from "Sillas" to "Equipales"
    description: "Equipal estilo Cancún en cuero",
  },
  {
    id: 8,
    name: "Equipal periquera",
    price: "$1,000",
    image: "/images/equipal-escritorio-paul.jpeg",
    category: "Equipales", // Changed from "Sillas" to "Equipales"
    description: "Silla periquera estilo tradicional",
  },
  {
    id: 9,
    name: "Equipal tradicional personalizado",
    price: "$1,000",
    image: "/images/equipal-sillas-blancas.jpeg",
    category: "Equipales", // Changed from "Sillas" to "Equipales"
    description: "Equipal con bordado personalizado",
  },
  {
    id: 10,
    name: "Equipal cantinero Cancún",
    price: "$1,300",
    image: "/images/equipal-sillas-naranja-barril.jpeg",
    category: "Equipales", // Changed from "Sillas" to "Equipales"
    description: "Equipal cantinero estilo Cancún, precio por unidad",
  },
  {
    id: 11,
    name: "Comedor tradicional",
    price: "$4,200",
    image: "/images/equipal-comedor-cafe-redondo.jpeg",
    category: "Comedores",
    description: "4 equipales y mesa redonda",
  },
  {
    id: 12,
    name: "Equipales charros",
    price: "$1,000",
    image: "/images/equipal-sillas-terracota-trio.jpeg",
    category: "Equipales", // Changed from "Sillas" to "Equipales"
    description: "Equipales estilo charro, precio por unidad",
  },
  {
    id: 13,
    name: "Comedor tradicional",
    price: "$4,200",
    image: "/images/equipal-silla-escritorio-cafe.jpeg",
    category: "Comedores",
    description: "4 equipales y mesa cuadrada",
  },
  {
    id: 14,
    name: "Sala tradicional acojinadas",
    price: "$9,000",
    image: "/images/equipal-set-cafe-mesas.jpeg",
    category: "Sala",
    description: "Incluye mesa de centro",
  },
  {
    id: 15,
    name: "Equipal envarillado",
    price: "$900",
    image: "/images/equipal-silla-beige-circular.jpeg",
    category: "Equipales", // Changed from "Sillas" to "Equipales"
    description: "Silla con respaldo envarillado tradicional",
  },
  {
    id: 16,
    name: "Equipal tradicional",
    price: "$850",
    image: "/images/equipal-tradicional-naranja.jpeg",
    category: "Equipales", // Changed from "Sillas" to "Equipales"
    description: "Equipal tradicional en cuero naranja",
  },
  {
    id: 17,
    name: "Equipal # 19 personalizado",
    price: "$1,400",
    image: "/images/equipal-19-personalizado.jpeg",
    category: "Equipales", // Changed from "Sillas" to "Equipales"
    description: "Equipal personalizado con bordado de nombres",
  },
  {
    id: 18,
    name: "Equipales locos",
    price: "$500",
    image: "/images/equipales-locos.jpeg",
    category: "Equipales",
    description: "Equipales tipo banco personalizados, precio por unidad",
  },
  {
    id: 19,
    name: "Equipal tradicional personalizado",
    price: "$1,000",
    image: "/images/equipal-personalizado-negro.jpeg",
    category: "Equipales", // Changed from "Sillas" to "Equipales"
    description: "Equipal con diseño ornamental y personalización, precio por unidad",
  },
]

export function AllProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const { toggleFavorite, isFavorite } = useFavorites()
  const { addToCart } = useCart()
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  const categories = ["Todos", "Equipales", "Sala", "Comedores"]

  const filteredProducts =
    selectedCategory === "Todos" ? allProducts : allProducts.filter((product) => product.category === selectedCategory)

  const handleCotizar = (product: (typeof allProducts)[0]) => {
    const imageUrl = `${window.location.origin}${product.image}`

    const message = `¡Hola! Me interesa cotizar el siguiente producto:

📦 *${product.name}*
💰 Precio: ${product.price} MXN
📝 Descripción: ${product.description}
🏷️ Categoría: ${product.category}

🖼️ Ver imagen del producto:
${imageUrl}

¿Podrían darme más información sobre disponibilidad y opciones de personalización?`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5213317225092?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSolicitarPersonalizacion = () => {
    const message = `¡Hola! Me gustaría solicitar una personalización de equipal.

🎨 Estoy buscando crear una pieza única según mis necesidades.

¿Podrían ayudarme con el diseño y cotización de un equipal personalizado?`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5213317225092?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-[#FAF8F1] via-background to-background min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-sm font-bold text-secondary bg-secondary/10 px-6 py-3 rounded-full inline-flex items-center gap-2 border border-secondary/20">
            <Filter className="h-4 w-4" />
            Catálogo Completo
          </span>
          <h1 className="font-black text-5xl md:text-7xl text-foreground mt-8 mb-6 tracking-tight">
            Toda Nuestra Colección
          </h1>
          <p className="text-xl text-muted-foreground">
            Explora todos nuestros equipales artesanales. Cada pieza es única y hecha a mano con dedicación.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`h-12 px-8 rounded-2xl font-bold text-base transition-all ${
                selectedCategory === category
                  ? "gradient-primary text-primary-foreground shadow-xl scale-105"
                  : "border-2 hover:border-primary/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-2 border-border bg-card hover:border-primary/50 hover:shadow-2xl transition-all duration-500 rounded-3xl animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
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
                <h3 className="font-black text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-4xl font-black text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground font-bold">MXN</span>
                </div>
                <Button
                  onClick={() => handleCotizar(product)}
                  className="w-full gradient-primary text-primary-foreground h-12 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Cotizar por WhatsApp
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <div className="bg-card border-2 border-border rounded-3xl p-8 shadow-lg">
            <h3 className="font-black text-2xl text-foreground mb-4">¿No encuentras lo que buscas?</h3>
            <p className="text-muted-foreground mb-6">
              Creamos equipales personalizados según tus necesidades. Contáctanos para diseñar tu pieza única.
            </p>
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground h-14 px-8 rounded-2xl font-bold"
              onClick={handleSolicitarPersonalizacion}
            >
              Solicitar Personalización
            </Button>
          </div>
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
