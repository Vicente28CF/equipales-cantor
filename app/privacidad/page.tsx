import { type Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Lock, Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad | Equipales Cantor",
  description:
    "Política de privacidad de Equipales Cantor. Cómo protegemos y usamos tu información personal.",
  openGraph: {
    title: "Política de Privacidad | Equipales Cantor",
    description:
      "Política de privacidad de Equipales Cantor. Cómo protegemos y usamos tu información personal.",
  },
  alternates: {
    canonical: "/privacidad",
  },
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black mb-4">Política de Privacidad</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Tu privacidad es importante para nosotros. Esta política explica cómo recopilamos, 
            usamos y protegemos tu información.
          </p>

          <div className="space-y-8 text-muted-foreground">
            <section className="bg-muted/30 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Información que Recopilamos</h2>
              </div>
              <p className="mb-4">
                Recopilamos información que nos proporcionas directamente:
              </p>
              <ul className="space-y-2">
                <li>• <strong>Información de contacto:</strong> nombre, teléfono, email, dirección</li>
                <li>• <strong>Información de pago:</strong> datos necesarios para procesar pedidos</li>
                <li>• <strong>Historial de compras:</strong> productos que has adquirido</li>
                <li>• <strong>Comunicación:</strong> mensajes que nos envías por cualquier canal</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Cómo Usamos Tu Información</h2>
              <ul className="space-y-2">
                <li>• Procesar y completar tus pedidos</li>
                <li>• Comunicarnos contigo sobre tu pedido</li>
                <li>• Enviarte información sobre productos y promociones</li>
                <li>• Mejorar nuestros servicios y experiencia del cliente</li>
                <li>• Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Protección de Datos</h2>
              <p className="mb-4">
                Implementamos medidas de seguridad para proteger tu información personal:
              </p>
              <ul className="space-y-2">
                <li>✓ Conexiones seguras con cifrado SSL</li>
                <li>✓ Acceso limitado a información sensible</li>
                <li>✓ Monitoreo regular de nuestros sistemas</li>
                <li>• Almacenamiento seguro de datos de pago</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Compartir Información</h2>
              <p className="mb-4">
                No vendemos tu información personal. Compartimos información solo con:
              </p>
              <ul className="space-y-2">
                <li>• <strong>Proveedores de envío:</strong> necesarios para entregar tu pedido</li>
                <li>• <strong>Procesadores de pago:</strong> para completar transacciones</li>
                <li>• <strong>Autoridades legales:</strong> cuando sea requerido por ley</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Tus Derechos</h2>
              <p className="mb-4">
                Tienes derecho a:
              </p>
              <ul className="space-y-2">
                <li>• Acceder a tu información personal</li>
                <li>• Solicitar corrección de datos incorrectos</li>
                <li>• Solicitar eliminación de tus datos</li>
                <li>• Optar por no recibir comunicaciones promocionales</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Cookies y Tecnologías Similares</h2>
              <p>
                Nuestro sitio usa cookies para mejorar tu experiencia. Puedes desactivar 
                cookies en tu navegador, aunque algunas funciones del sitio pueden no funcionar 
                correctamente sin ellas.
              </p>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Contacto</h2>
              <p className="mb-4">
                Si tienes preguntas sobre esta política o deseas ejercer tus derechos, contáctanos:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+52 33 1722 5092</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>recaso_1@live.com.mx</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Rayón 165, San Juan, Zacoalco de Torres, Jalisco</span>
                </li>
              </ul>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Cambios a Esta Política</h2>
              <p>
                Podemos actualizar esta política periódicamente. Cualquier cambio significativo 
                será notificado en nuestro sitio web. La fecha de última actualización aparece 
                al inicio de este documento.
              </p>
            </section>

            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}