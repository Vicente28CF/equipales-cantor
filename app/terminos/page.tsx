import { type Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Equipales Cantor",
  description:
    "Términos y condiciones de compra de equipales artesanales. Conoce las políticas de venta.",
  openGraph: {
    title: "Términos y Condiciones | Equipales Cantor",
    description:
      "Términos y condiciones de compra de equipales artesanales. Conoce las políticas de venta.",
  },
  alternates: {
    canonical: "/terminos",
  },
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black mb-4">Términos y Condiciones</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Al realizar cualquier compra en equipalescantor.com aceptas los siguientes términos.
          </p>

          <div className="space-y-8 text-muted-foreground">
            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-xl font-bold mb-4">1. Información del Vendedor</h2>
              <ul className="space-y-2">
                <li><strong>Razón Social:</strong> Equipales Cantor</li>
                <li><strong>Dirección:</strong> Rayón 165, San Juan, Zacoalco de Torres, Jalisco, CP 45753</li>
                <li><strong>Teléfono:</strong> +52 33 1722 5092</li>
                <li><strong>Email:</strong> recaso_1@live.com.mx</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-xl font-bold mb-4">2. Productos</h2>
              <p className="mb-4">
                Todos nuestros productos son equipales artesanales mexicanos fabricados 
                a mano en Zacoalco de Torres, Jalisco. Cada pieza es única y puede variar 
                ligeramente en acabado debido a la naturaleza artesanal.
              </p>
              <p>
                Las imágenes en nuestro sitio son representativas. Los colores reales pueden 
                variar ligeramente debido a la configuración de cada monitor.
              </p>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-xl font-bold mb-4">3. Precios</h2>
              <ul className="space-y-2">
                <li>• Los precios se muestran en pesos mexicanos (MXN).</li>
                <li>• Los precios incluyen IVA.</li>
                <li>• Los precios pueden cambiar sin previo aviso.</li>
                <li>• El envío se calcula por separado.</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-xl font-bold mb-4">4. Proceso de Compra</h2>
              <ol className="space-y-2 list-decimal list-inside">
                <li>El cliente selecciona el producto de nuestro catálogo.</li>
                <li>Se contacta por WhatsApp para confirmar disponibilidad y características.</li>
                <li>Se coordinan los métodos de pago.</li>
                <li>Una vez realizado el pago, se procesa el pedido.</li>
                <li>Se realiza el envío según la política correspondiente.</li>
              </ol>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-xl font-bold mb-4">5. Política de Devoluciones</h2>
              <p className="mb-4">
                Por ser productos personalizados y hechos a mano, no aceptamos devoluciones 
                estándar. Sin embargo, si el producto llega dañado, lo reemplazamos sin costo.
              </p>
              <p>
                Debes reportar cualquier daño visible en el empaque al momento de la entrega 
                y dentro de las primeras 24 horas.
              </p>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-xl font-bold mb-4">6. Propiedad Intelectual</h2>
              <p>
                Todas las imágenes, textos y diseños en este sitio son propiedad de Equipales Cantor. 
                Queda prohibida la reproducción sin nuestro consentimiento por escrito.
              </p>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-xl font-bold mb-4">7. Limitación de Responsabilidad</h2>
              <p>
                Nuestra responsabilidad está limitada al valor del producto adquirido. No somos responsables 
                por daños indirectos, consecuenciales o lucro cesante.
              </p>
            </section>

            <section className="bg-muted/30 p-8 rounded-3xl">
              <h2 className="text-xl font-bold mb-4">8. Ley Aplicable</h2>
              <p>
                Estos términos se rigen por las leyes de México. Cualquier disputa será 
                resuelta en los tribunales de Jalisco.
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