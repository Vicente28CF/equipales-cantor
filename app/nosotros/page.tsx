import { type Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, MapPin, HandHeart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Nuestra Historia | Equipales Cantor desde 1985",
  description:
    "Conoce la historia de Equipales Cantor, 4 generaciones de artesanos en Zacoalco de Torres, Jalisco. Fabricamos equipales artesanales con tradición y calidad.",
  openGraph: {
    title: "Nuestra Historia | Equipales Cantor",
    description:
      "Conoce la historia de Equipales Cantor, 4 generaciones de artesanos en Zacoalco de Torres, Jalisco.",
  },
  alternates: {
    canonical: "/nosotros",
  },
}

export default function NosotrosPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black mb-4">Nuestra Historia</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Más de 35 años de tradición en la fabricación de equipales artesanales en Jalisco.
          </p>

          <div className="space-y-8">
            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">4 Generaciones de Artesanos</h2>
              <p className="text-muted-foreground mb-4">
                Somos la <strong>4ª generación</strong> dedicada a este arte. Desde <strong>1985</strong>, 
                transformamos madera y cuero en obras de arte funcionales.
              </p>
              <p className="text-muted-foreground">
                No fabricamos muebles en serie, creamos piezas únicas. Cada equipal lleva el alma de nuestros 
                artesanos y la esencia de México.
              </p>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Zacoalco de Torres: Capital del Equipal</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Nuestro taller está ubicado en <strong>Zacoalco de Torres, Jalisco</strong>, 
                conocido como la capital del equipal.
              </p>
              <p className="text-muted-foreground">
                Aquí creamos cada pieza con materiales naturales de primera calidad, 100% hecho a mano 
                por maestros artesanos.
              </p>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <HandHeart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Materiales Premium</h2>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>✓ <strong>Madera de Sabino:</strong> Selección de primera calidad</li>
                <li>✓ <strong>Cuero Genuino:</strong> Auténtico y duradero</li>
              </ul>
            </section>

            <div className="text-center py-8">
              <p className="text-lg text-muted-foreground mb-6">
                ¿Quieres visitarnos en nuestro taller?
              </p>
              <a
                href="https://wa.me/5213317225092?text=¡Hola! Me gustaría conocer más sobre sus equipales artesanales."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="h-14 px-8 rounded-2xl font-bold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contactar para Visitas
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}