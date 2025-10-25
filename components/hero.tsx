"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF8F1] via-[#F5F3EB] to-[#F0EDE3]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 md:top-20 -left-20 md:-left-40 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 md:bottom-20 -right-20 md:-right-40 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-amber-100/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 relative z-10 max-w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div ref={heroRef} className="opacity-0 space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900 leading-[1.05] tracking-tight">
              Tu hogar único empieza aquí
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-xl">
              Desde elegir un equipal hasta transformar tu espacio, con nosotros tienes todo lo que necesitas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 text-white hover:bg-amber-700 group h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                <Link href="/productos">
                  Empezar ya
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] animate-slide-in-right">
            {/* Main mockup card */}
            <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-8">
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-1.5 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400" />
              </div>

              <div className="mt-12 sm:mt-16 space-y-4 sm:space-y-6">
                <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Equipales
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">artesanales</div>

                <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src="/beautiful-equipal-chair-in-modern-living-room2.png"
                    alt="Equipal showcase"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-1 bg-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-xs sm:text-sm text-purple-600 font-bold mb-1">Calidad</div>
                    <div className="text-xl sm:text-2xl font-black text-purple-900">100%</div>
                  </div>
                  <div className="flex-1 bg-indigo-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-xs sm:text-sm text-indigo-600 font-bold mb-1">Artesanal</div>
                    <div className="text-xl sm:text-2xl font-black text-indigo-900">40+ años</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating analytics card */}
            <div
              className="hidden sm:block absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-6 animate-scale-in border border-gray-100"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="text-xs md:text-sm font-bold text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="flex items-end gap-1.5 md:gap-2">
                <div className="text-2xl md:text-4xl font-black text-gray-900">1,234</div>
                <div className="flex items-center gap-1 text-green-600 font-bold mb-1 md:mb-2">
                  <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">+32%</span>
                </div>
              </div>
              <div className="mt-2 md:mt-3 flex gap-0.5 md:gap-1">
                {[40, 60, 45, 70, 55, 80, 65].map((height, i) => (
                  <div key={i} className="flex-1 bg-purple-100 rounded-sm" style={{ height: `${height * 0.6}px` }}>
                    <div
                      className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-sm"
                      style={{ height: `${height * 0.42}px` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating domain badges */}
            <div
              className="hidden md:block absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-white rounded-xl md:rounded-2xl shadow-2xl p-3 md:p-4 animate-scale-in border border-gray-100"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex flex-col gap-1.5 md:gap-2">
                <div className="bg-purple-50 text-purple-700 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-bold text-xs md:text-sm">
                  Tradición mexicana
                </div>
                <div className="bg-indigo-50 text-indigo-700 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-bold text-xs md:text-sm flex items-center gap-2">
                  comodidad garantizada
                  <span className="text-xs">✓</span>
                </div>
              </div>
            </div>

            {/* Floating users card */}
            <div
              className="hidden lg:block absolute top-1/3 -right-6 md:-right-8 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-6 animate-scale-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Users className="h-6 w-6 md:h-8 md:w-8 mb-2" />
              <div className="text-2xl md:text-3xl font-black">500+</div>
              <div className="text-xs font-bold uppercase opacity-90">Clientes</div>
            </div>

            {/* Floating star rating */}
            <div
              className="hidden sm:block absolute bottom-1/4 -left-6 md:-left-8 bg-white rounded-lg md:rounded-xl shadow-xl p-3 md:p-4 animate-scale-in border border-gray-100"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex gap-0.5 md:gap-1 mb-1.5 md:mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs md:text-sm font-bold text-gray-900">4.9/5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
