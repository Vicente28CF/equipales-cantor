"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/hooks/use-cart"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function CarritoPage() {
  const { cart, removeFromCart, updateQuantity, getTotal, getTotalItems } = useCart()

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "5213317225092"
    let message = "¡Hola! Me gustaría realizar el siguiente pedido:\n\n"

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   Cantidad: ${item.quantity}\n`
      message += `   Precio unitario: ${item.price}\n`
      message += `   Subtotal: $${(Number.parseFloat(item.price.replace(/[$,]/g, "")) * item.quantity).toLocaleString("es-MX")}\n\n`
    })

    message += `*Total: $${getTotal().toLocaleString("es-MX")} MXN*\n\n`
    message += "¿Podrían confirmar la disponibilidad y el proceso de compra?"

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />

      <div className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-3">
              <ShoppingCart className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">Mi Carrito</h1>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              {cart.length === 0
                ? "Tu carrito está vacío"
                : `Tienes ${getTotalItems()} ${getTotalItems() === 1 ? "producto" : "productos"} en tu carrito`}
            </p>
          </div>

          {/* Empty State */}
          {cart.length === 0 ? (
            <div className="text-center py-16 sm:py-24">
              <ShoppingCart className="h-20 w-20 sm:h-24 sm:w-24 mx-auto mb-6 text-muted-foreground/30" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Tu carrito está vacío</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-md mx-auto">
                Explora nuestra colección de equipales artesanales y agrega los que más te gusten
              </p>
              <Link href="/productos">
                <Button className="gradient-primary text-primary-foreground h-12 sm:h-14 px-6 sm:px-8 rounded-2xl font-bold text-base sm:text-lg">
                  Ver Productos
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Products List */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                {cart.map((item) => (
                  <Card
                    key={item.id}
                    className="p-4 sm:p-6 border-2 border-border hover:border-primary/30 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      {/* Product Image */}
                      <div className="w-full sm:w-32 h-48 sm:h-32 flex-shrink-0 overflow-hidden rounded-xl bg-muted">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg sm:text-xl mb-1 line-clamp-2">{item.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                            <p className="text-xl sm:text-2xl font-black text-primary">{item.price}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-lg hover:bg-destructive/10 hover:text-destructive flex-shrink-0"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-muted-foreground">Cantidad:</span>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-10 w-10 rounded-lg bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="font-bold text-lg w-12 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-10 w-10 rounded-lg bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="text-left sm:text-right">
                            <p className="text-sm text-muted-foreground mb-1">Subtotal</p>
                            <p className="font-black text-xl text-primary">
                              $
                              {(Number.parseFloat(item.price.replace(/[$,]/g, "")) * item.quantity).toLocaleString(
                                "es-MX",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6 sm:p-8 border-2 border-border sticky top-32">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Resumen del Pedido</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-base">
                      <span className="text-muted-foreground">Productos ({getTotalItems()})</span>
                      <span className="font-semibold">${getTotal().toLocaleString("es-MX")}</span>
                    </div>
                    <div className="flex justify-between text-base">
                      <span className="text-muted-foreground">Envío</span>
                      <span className="font-semibold">A calcular</span>
                    </div>
                    <div className="border-t-2 border-border pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-3xl font-black text-primary">${getTotal().toLocaleString("es-MX")}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">MXN</p>
                    </div>
                  </div>

                  <Button
                    className="w-full gradient-primary text-primary-foreground h-14 rounded-2xl font-bold text-lg hover:shadow-xl transition-all mb-4"
                    onClick={handleWhatsAppCheckout}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Proceder al Pago
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Al continuar, serás redirigido a WhatsApp para completar tu pedido
                  </p>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
