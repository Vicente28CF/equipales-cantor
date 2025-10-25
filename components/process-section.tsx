"use client"

import { useEffect, useRef } from "react"
import { Hammer, Palette, CheckCircle, Package } from "lucide-react"

const steps = [
  {
    icon: Hammer,
    title: "Selección de Materiales",
    description: "Elegimos cuidadosamente madera de sabino y cuero genuino de la más alta calidad.",
  },
  {
    icon: Palette,
    title: "Diseño Artesanal",
    description: "Nuestros maestros artesanos dan forma a cada pieza con técnicas tradicionales.",
  },
  {
    icon: CheckCircle,
    title: "Control de Calidad",
    description: "Cada equipal pasa por rigurosas inspecciones para garantizar la perfección.",
  },
  {
    icon: Package,
    title: "Entrega Segura",
    description: "Empacamos con cuidado y entregamos tu equipal directamente a tu hogar.",
  },
]

export function ProcessSection() {
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

    const cards = sectionRef.current?.querySelectorAll(".process-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="proceso"
      className="py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 opacity-0 animate-fade-in-up">
          <span className="text-sm font-bold text-primary bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
            Nuestro Proceso
          </span>
          <h2 className="font-black text-5xl md:text-7xl text-foreground mt-8 mb-6 tracking-tight">
            De nuestras manos a tu hogar
          </h2>
          <p className="text-xl text-muted-foreground">Cada paso es ejecutado con precisión y amor por el oficio</p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const gradients = ["gradient-primary", "gradient-secondary", "gradient-accent", "gradient-primary"]
            return (
              <div
                key={index}
                className="process-card opacity-0 relative group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connector Line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border -z-10" />
                )}

                <div className="relative bg-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-border group-hover:border-primary/50 h-full">
                  {/* Step Number */}
                  <div
                    className={`absolute -top-6 -right-6 w-14 h-14 ${gradients[index]} text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl`}
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 ${gradients[index]} rounded-3xl flex items-center justify-center mb-8 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-black text-2xl text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
