"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    location: "Ciudad de México",
    rating: 5,
    text: "Los equipales son hermosos y de excelente calidad. Se nota el trabajo artesanal en cada detalle. ¡Totalmente recomendados!",
    image: "/happy-mexican-woman-customer-portrait.jpg",
  },
  {
    name: "Carlos Ramírez",
    location: "Guadalajara",
    rating: 5,
    text: "Compré un juego completo para mi terraza y quedé encantado. Son cómodos, resistentes y le dan un toque único a mi espacio.",
    image: "/satisfied-male-customer.png",
  },
  {
    name: "Ana Martínez",
    location: "Monterrey",
    rating: 5,
    text: "La atención al cliente es excepcional y el producto superó mis expectativas. Vale cada peso invertido.",
    image: "/happy-female-customer-portrait-smiling.jpg",
  },
  {
    name: "Roberto Silva",
    location: "Puebla",
    rating: 5,
    text: "Excelente inversión para mi hogar. Los equipales tienen un acabado impecable y son muy cómodos. El envío fue rápido y seguro.",
    image: "/happy-mexican-man.jpg",
  },
  {
    name: "Laura Hernández",
    location: "Querétaro",
    rating: 5,
    text: "Me encanta la autenticidad de cada pieza. Son muebles que cuentan una historia y transforman cualquier espacio en algo especial.",
    image: "/satisfied-woman-smiling.jpg",
  },
  {
    name: "Jorge Mendoza",
    location: "Tijuana",
    rating: 5,
    text: "Calidad artesanal incomparable. Compré varios equipales para mi restaurante y todos mis clientes los admiran. ¡Altamente recomendados!",
    image: "/happy-businessman.jpg",
  },
]

export function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">Testimonios</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-6 mb-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="testimonials-scroll-container">
            <div className="testimonials-scroll-track">
              {duplicatedTestimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="testimonial-card flex-shrink-0 w-[350px] md:w-[400px] p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Gradientes en los bordes para efecto de fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none z-10" />
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Pasa el cursor sobre los testimonios para pausar el desplazamiento
        </p>
      </div>
    </section>
  )
}
