"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const phoneNumber = "5213317225092"
  const message = encodeURIComponent("Hola, me interesan sus equipales artesanales. ¿Podrían darme más información?")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contactar por WhatsApp"
    >
      <div className="flex items-center gap-3 px-4 py-4">
        <MessageCircle className="h-6 w-6 animate-pulse" />
        <span
          className={`font-semibold text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
            isHovered ? "max-w-[200px] opacity-100 pr-2" : "max-w-0 opacity-0"
          }`}
        >
          ¿Necesitas ayuda?
        </span>
      </div>

      {/* Efecto de onda */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  )
}
