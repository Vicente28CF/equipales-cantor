import { type Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Truck, Package, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Política de Envíos | Equipales Cantor",
  description:
    "Conoce nuestra política de envíos de equipales artesanales. Envío a toda la República Mexicana.",
  openGraph: {
    title: "Política de Envíos | Equipales Cantor",
    description:
      "Conoce nuestra política de envíos de equipales artesanales. Envío a toda la República Mexicana.",
  },
  alternates: {
    canonical: "/envios",
  },
}

export default function EnviosPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black mb-4">Política de Envíos</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Envío a toda la República Mexicana.
          </p>

          <div className="space-y-8">
            <section className="bg-muted/30 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Cobertura de Envíos</h2>
              </div>
              <p className="text-muted-foreground">
                Realizamos envíos a <strong>toda la República Mexicana</strong>. 
                Desde Jalisco, llegamos a todas las ciudades del país.
              </p>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Embalaje Cuidado</h2>
              </div>
              <p className="text-muted-foreground">
                Cada equipal es empacado con sumo cuidado para protegerlo durante el transporte. 
                Usamos materiales de protección que garantizan que tu pieza llegue en perfecto estado.
              </p>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Cotización de Envío</h2>
              <p className="text-muted-foreground mb-4">
                El costo y tiempo de envío varía según tu ubicación y el tamaño del pedido.
                <strong> El precio del envío corre por cuenta del comprador</strong>.
                Contáctanos por WhatsApp para recibir una cotización personalizada sin compromiso.
              </p>
              <a
                href="https://wa.me/5213317225092?text=¡Hola! Me gustaría solicitar una cotización de envío."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="h-14 px-8 rounded-2xl font-bold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Cotización
                </Button>
              </a>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}