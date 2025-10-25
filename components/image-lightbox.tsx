"use client"

import { X, ZoomIn, ZoomOut } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface ImageLightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setIsZoomed(false)

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose()
        }
      }

      document.addEventListener("keydown", handleEscape)

      return () => {
        document.body.style.overflow = "unset"
        document.removeEventListener("keydown", handleEscape)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Button
          size="icon"
          variant="ghost"
          className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
          onClick={(e) => {
            e.stopPropagation()
            setIsZoomed(!isZoomed)
          }}
        >
          {isZoomed ? <ZoomOut className="h-6 w-6" /> : <ZoomIn className="h-6 w-6" />}
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div
        className={`relative w-full h-full flex items-center justify-center p-4 md:p-8 transition-all duration-300 ${
          isZoomed ? "overflow-auto" : "overflow-hidden"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`max-w-full max-h-full object-contain rounded-lg animate-in zoom-in-95 duration-300 ${
            isZoomed ? "max-w-none max-h-none w-auto h-auto cursor-move" : "cursor-zoom-in"
          }`}
          style={isZoomed ? { minWidth: "150%", minHeight: "150%" } : {}}
          onClick={(e) => {
            e.stopPropagation()
            if (!isZoomed) setIsZoomed(true)
          }}
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-2 rounded-full">
        {isZoomed ? "Arrastra para mover • ESC para cerrar" : "Clic en la imagen para zoom • ESC para cerrar"}
      </div>
    </div>
  )
}
