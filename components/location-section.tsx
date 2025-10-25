"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
            Visita Nuestro Taller
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Ven a conocer nuestro proceso artesanal y descubre la calidad de nuestros equipales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Información de contacto */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary/10 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-lg sm:text-xl mb-2">Dirección</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Rayon 165, San Juan
                    <br />
                    45753 Zacoalco de Torres, Jalisco
                    <br />
                    México
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-accent/10 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-lg sm:text-xl mb-2">Horario</h3>
                  <div className="text-sm sm:text-base text-muted-foreground space-y-1">
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábados: 9:00 AM - 2:00 PM</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-secondary/10 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-lg sm:text-xl mb-2">Contacto</h3>
                  <div className="text-sm sm:text-base text-muted-foreground space-y-2">
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <a href="tel:+523317225092" className="hover:text-primary transition-colors break-all">
                        +52 33 1722 5092
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <a href="mailto:recaso_1@live.com.mx" className="hover:text-primary transition-colors break-all">
                        recaso_1@live.com.mx
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa de Google */}
          <div className="relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.71044093074!2d-103.5645829260154!3d20.2293501147573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8425f59e1090a0af%3A0x5c1050cfef3488ee!2sRayon%20165%2C%20San%20Juan%2C%2045753%20Zacoalco%20de%20Torres%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1760314920165!5m2!1ses-419!2smx"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px]"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
