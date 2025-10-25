"use client"

import { useEffect, useRef } from "react"
import { Check } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          <div className="relative opacity-0 animate-fade-in">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-background ring-1 sm:ring-2 ring-primary/20">
                  <img src="/sala-foto.png" alt="Equipal Tulum" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-background ring-1 sm:ring-2 ring-secondary/20">
                  <img
                    src="/images/artisan-working-equipales.png"
                    alt="Artesano trabajando equipales personalizados"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 md:space-y-6 pt-8 sm:pt-12 md:pt-16">
                <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-background ring-1 sm:ring-2 ring-accent/20">
                  <img
                    src="/images/zacoalco-equipales-sign.png"
                    alt="Zacoalco de Torres - Capital Mundial del Equipal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-background ring-1 sm:ring-2 ring-primary/20">
                  <img
                    src="/images/equipal-tulum.png"
                    alt="Equipal en patio mexicano tradicional"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-12 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 gradient-accent rounded-full blur-3xl opacity-20 -z-10" />
          </div>

          <div ref={sectionRef} className="opacity-0 space-y-6 sm:space-y-8">
            <span className="text-xs sm:text-sm font-bold text-accent bg-accent/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-block border border-accent/20">
              Nuestra Historia
            </span>

            <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              Tradición que se siente en cada detalle
            </h2>

            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Somos la 4ª generación dedicada a este arte. Desde 1985, transformamos madera y cuero en obras de arte
                funcionales. Cada equipal lleva el alma de nuestros artesanos y la esencia de México.
              </p>

              <p>
                No fabricamos muebles en serie. Creamos piezas únicas que cuentan historias, que se adaptan a tu vida y
                que duran generaciones.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              {[
                "100% hecho a mano por maestros artesanos",
                "Materiales naturales de primera calidad",
                "Diseños únicos y personalizables",
                "Garantía en todas las piezas",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary stroke-[3]" />
                  </div>
                  <span className="text-foreground font-bold text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
