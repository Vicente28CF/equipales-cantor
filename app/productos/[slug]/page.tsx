import { notFound } from "next/navigation"
import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PRODUCTOS, getProductoBySlug, type Producto } from "@/lib/productos"
import { ProductInfo } from "@/components/seo/product-info"

export async function generateStaticParams() {
  return PRODUCTOS.map((producto) => ({
    slug: producto.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const producto = getProductoBySlug(slug)

  if (!producto) {
    return {
      title: "Producto no encontrado",
    }
  }

  return {
    title: `${producto.name} - Equipal Artesanal Hecho a Mano`,
    description: `Compra ${producto.name} artesanal desde Zacoalco de Torres, Jalisco. ${producto.description} Precio: ${producto.price} MXN. Envío a toda la República.`,
    alternates: {
      canonical: `/productos/${slug}`,
    },
    openGraph: {
      title: `${producto.name} - Equipal Artesanal Cantor`,
      description: producto.description,
      images: [
        {
          url: producto.image,
          alt: `${producto.name} - Equipal artesanal Cantor`,
        },
      ],
    },
  }
}

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const producto = getProductoBySlug(slug)

  if (!producto) {
    notFound()
  }

  const relatedProducts = PRODUCTOS.filter(
    (p) => p.category === producto.category && p.id !== producto.id
  ).slice(0, 4)

  return (
    <main className="min-h-screen pt-20">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/productos">Productos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/productos/${slug}`}>{producto.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
            <Image src={producto.image} alt={producto.name} fill className="object-contain p-8" priority />
          </div>

          <ProductInfo producto={producto} />
        </div>

        <Tabs defaultValue="descripcion" className="mt-16">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="descripcion">Descripción</TabsTrigger>
            <TabsTrigger value="especificaciones">Especificaciones</TabsTrigger>
          </TabsList>
          <TabsContent value="descripcion" className="mt-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Sobre este producto</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {producto.descriptionLong}
              </p>
              <div className="mt-8 p-6 bg-muted/30 rounded-2xl border">
                <h3 className="font-bold text-lg mb-3">Características destacadas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Fabricación artesanal 4ª generación desde 1985</li>
                  <li>✓ Madera de sabino tratada y sellada</li>
                  <li>✓ Cuero de res legítimo de alta calidad</li>
                  <li>✓ Envío a toda la República Mexicana</li>
                  <li>✓ Personalización disponible</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="especificaciones" className="mt-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/30">
                <p className="text-sm text-muted-foreground">Material</p>
                <p className="font-semibold">Madera de sabino y cuero de res</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/30">
                <p className="text-sm text-muted-foreground">Origen</p>
                <p className="font-semibold">Zacoalco de Torres, Jalisco</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/30">
                <p className="text-sm text-muted-foreground">Tipo</p>
                <p className="font-semibold">{producto.category}</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/30">
                <p className="text-sm text-muted-foreground">Garantía</p>
                <p className="font-semibold">1 año por defectos de fabricación</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Productos Relacionados</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <Link key={related.id} href={`/productos/${related.slug}`}>
                  <Card className="overflow-hidden hover:border-primary/50 transition-all">
                    <div className="relative aspect-square bg-muted">
                      <Image src={related.image} alt={related.name} fill className="object-contain p-4" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{related.name}</h3>
                      <p className="text-primary font-black">{related.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  )
}