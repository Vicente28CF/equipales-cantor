"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useFavorites } from "@/hooks/use-favorites"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, X } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import Link from "next/link"

export default function FavoritosPage() {
  const { favorites, removeFromFavorites } = useFavorites()
  const { addToCart } = useCart()

  const handleAddToCart = (product: any) => {
    addToCart(product)
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />

      <div className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-primary fill-primary" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">Mis Favoritos</h1>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              {favorites.length === 0
                ? "Aún no tienes productos favoritos"
                : `Tienes ${favorites.length} ${favorites.length === 1 ? "producto" : "productos"} guardados`}
            </p>
          </div>

          {/* Empty State */}
          {favorites.length === 0 ? (
            <div className="text-center py-16 sm:py-24">
              <Heart className="h-20 w-20 sm:h-24 sm:w-24 mx-auto mb-6 text-muted-foreground/30" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">No tienes favoritos aún</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-md mx-auto">
                Explora nuestra colección y guarda los equipales que más te gusten haciendo clic en el corazón
              </p>
              <Link href="/productos">
                <Button className="gradient-primary text-primary-foreground h-12 sm:h-14 px-6 sm:px-8 rounded-2xl font-bold text-base sm:text-lg">
                  Ver Productos
                </Button>
              </Link>
            </div>
          ) : (
            /* Products Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {favorites.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg"
                      onClick={() => removeFromFavorites(product.id)}
                    >
                      <X className="h-5 w-5 text-destructive" />
                    </Button>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3">{product.category}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl sm:text-2xl font-black text-primary">{product.price}</span>
                    </div>

                    <Button
                      className="w-full gradient-primary text-primary-foreground h-11 sm:h-12 rounded-xl font-bold hover:shadow-lg transition-all text-sm sm:text-base"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Agregar al Carrito
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
