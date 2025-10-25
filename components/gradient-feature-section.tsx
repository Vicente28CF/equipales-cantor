"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function GradientFeatureSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/30 via-purple-900/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 sm:mb-8"
          >
            <span className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium">
              Artesanía Mexicana Auténtica
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
          >
            Tradición artesanal con el estilo de hoy
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Cada equipal es una obra maestra hecha a mano, combinando técnicas ancestrales con diseños contemporáneos
            para crear piezas únicas que transforman cualquier espacio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 px-4"
          >
            <Link href="/productos">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-900 rounded-full font-bold text-base sm:text-lg hover:bg-purple-50 transition-all hover:scale-105 shadow-xl w-full sm:w-auto">
                Ver Colección
              </button>
            </Link>
            <a href="https://visitjalisco.mx/equipales-de-jalisco/" target="_blank" rel="noopener noreferrer">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all hover:scale-105 w-full sm:w-auto">
                Conocer Más
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/20 rounded-full blur-3xl" />
    </section>
  )
}
