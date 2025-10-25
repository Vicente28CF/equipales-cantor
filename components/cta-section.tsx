"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone, User } from "lucide-react"
import { useState } from "react"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create email body with form data
    const emailBody = `
Nuevo mensaje de contacto desde el sitio web de Equipales

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone || "No proporcionado"}

Mensaje:
${formData.message}
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:recaso_1@live.com.mx?subject=${encodeURIComponent("Contacto desde sitio web - Equipales")}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 500)
  }

  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-br from-amber-700 via-orange-700 to-yellow-800 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance animate-fade-in-up">
              ¿Listo para transformar tu espacio?
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty animate-fade-in-up">
              Contáctanos y te ayudaremos a encontrar el equipal perfecto para tu hogar
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Juan Pérez"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 backdrop-blur-sm h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@ejemplo.com"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 backdrop-blur-sm h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Teléfono (opcional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+52 33 1234 5678"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 backdrop-blur-sm h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntanos qué tipo de equipal estás buscando..."
                  rows={5}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 backdrop-blur-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-amber-800 hover:bg-amber-50 font-bold text-lg h-14"
              >
                Enviar mensaje
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/30">
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="text-sm opacity-75 mb-1">Teléfono</div>
              <div className="text-lg font-semibold">+52 33 1722 5092</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="text-sm opacity-75 mb-1">Email</div>
              <div className="text-lg font-semibold">recaso_1@live.com.mx</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="text-sm opacity-75 mb-1">Ubicación</div>
              <div className="text-lg font-semibold">Zacoalco de Torres, Jalisco</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
