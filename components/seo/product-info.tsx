"use client"

import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, MessageCircle } from "lucide-react"
import { useFavorites } from "@/hooks/use-favorites"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"
import type { Producto } from "@/lib/productos"

interface ProductInfoProps {
  producto: Producto & { slug: string }
}

export function ProductInfo({ producto }: ProductInfoProps) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const { addToCart } = useCart()

  const handleCotizar = () => {
    const imageUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${producto.image}`
    const message = `¡Hola! Me interesa cotizar el siguiente producto:

📦 *${producto.name}*
💰 Precio: ${producto.price} MXN
📝 Descripción: ${producto.description}
🏷️ Categoría: ${producto.category}

🖼️ Ver imagen del producto:
${imageUrl}

¿Podrían darme más información sobre disponibilidad y opciones de personalización?`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5213317225092?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div>
      <div className="mb-4">
        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
          {producto.category}
        </span>
      </div>

      <h1 className="text-3xl lg:text-4xl font-black mb-4">{producto.name}</h1>

      <p className="text-lg text-muted-foreground mb-6">{producto.description}</p>

      <div className="flex items-baseline mb-8">
        <span className="text-4xl lg:text-5xl font-black text-primary">{producto.price}</span>
        <span className="text-lg text-muted-foreground ml-2">MXN</span>
      </div>

      <div className="flex gap-4">
        <Button size="lg" className="flex-1 h-14 rounded-2xl font-bold" onClick={handleCotizar}>
          <MessageCircle className="mr-2 h-5 w-5" />
          Cotizar por WhatsApp
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-14 w-14 rounded-2xl"
          onClick={() => toggleFavorite(producto)}
        >
          <Heart className={`h-5 w-5 ${isFavorite(producto.id) ? "fill-primary text-primary" : ""}`} />
        </Button>
        <Button size="lg" variant="outline" className="h-14 w-14 rounded-2xl" onClick={() => addToCart(producto)}>
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-8 p-4 bg-muted/30 rounded-xl">
        <p className="text-sm text-muted-foreground mb-2">Incluye:</p>
        <ul className="text-sm space-y-1">
          <li>✓ Envío a toda la República</li>
          <li>✓ Garantía de calidad</li>
          <li>✓ Asesoramiento personalizado</li>
        </ul>
      </div>
    </div>
  )
}