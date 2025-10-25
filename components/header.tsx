"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X, Heart } from "lucide-react"
import Link from "next/link"
import { useFavorites } from "@/hooks/use-favorites"
import { useCart } from "@/hooks/use-cart"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { favorites } = useFavorites()
  const { getTotalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
      style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-3xl lg:text-4xl font-black text-foreground transition-transform group-hover:scale-105 tracking-tight">
              Equipales Cantor
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/productos"
              className="text-base font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              Productos
            </Link>
            <Link
              href="/#nosotros"
              className="text-base font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/#proceso"
              className="text-base font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              Proceso
            </Link>
            <Link
              href="/#contacto"
              className="text-base font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Favorites Dropdown */}
            <Link href="/favoritos">
              <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 h-12 w-12 rounded-xl">
                <Heart className={`h-6 w-6 ${favorites.length > 0 ? "fill-primary text-primary" : ""}`} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                    {favorites.length}
                  </span>
                )}
              </Button>
            </Link>

            {/* Cart Dropdown */}
            <Link href="/carrito">
              <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 h-12 w-12 rounded-xl">
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-12 w-12 rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 animate-fade-in border-t border-border bg-background">
            <nav className="flex flex-col gap-4">
              <Link
                href="/productos"
                className="text-base font-bold text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="/#nosotros"
                className="text-base font-bold text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/#proceso"
                className="text-base font-bold text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proceso
              </Link>
              <Link
                href="/#contacto"
                className="text-base font-bold text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
