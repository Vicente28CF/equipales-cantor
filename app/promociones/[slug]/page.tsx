import { notFound } from "next/navigation"
import { type Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { MessageCircle } from "lucide-react"

const promotions = [
  {
    id: "promo-1",
    slug: "comedor-equipal-10-piezas",
    name: "Comedor Equipal 10 Piezas",
    price: "$38,000",
    priceValue: 38000,
    image: "/images/promo-comedor-terracota-10pzas.jpeg",
    category: "Promoción",
    description: "10 comedores completos, color a elegir",
    descriptionLong: "Comedor equipal completo con 10 piezas. El set perfecto para tu comedor. Puedes elegir el color que prefieras: naranja, café, negro o beige. Cada pieza está hecha a mano con madera de sabino y cuero genuino de primera calidad. Ideal para familias grandes o espacios comerciales.",
    badge: "No incluye Envío",
    details: "Precio NO incluye envío. Elige el color que prefieras para tu comedor.",
    whatsappMessage: "Hola! Me interesa: Comedor Equipal 10 Piezas - $38,000. Precio NO incluye envío. Elige el color que prefieras para tu comedor.",
  },
  {
    id: "promo-2",
    slug: "equipales-tradicionales-piel-natural",
    name: "Equipales Tradicionales Piel Natural",
    price: "$600",
    priceValue: 600,
    image: "/images/promo-sillas-natural-pintar.jpeg",
    category: "Promoción",
    description: "Piel natural para pintar a tu gusto",
    descriptionLong: "Equipales tradicionales en piel natural, listos para que los personalices con el color que desees. Perfectos para proyectos de decoración personalizados o para crear tu propio diseño único. Cada equipal está fabricado a mano con materiales de primera calidad.",
    badge: "Personalizable",
    details: "Equipales en piel natural sin pintar. Personalízalos con el color que desees.",
    whatsappMessage: "Hola! Me interesa: Equipales Tradicionales Piel Natural - $600 c/u. Equipales en piel natural sin pintar.",
  },
]

export function generateStaticParams() {
  return promotions.map((promo) => ({
    slug: promo.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const promo = promotions.find((p) => p.slug === slug)

  if (!promo) {
    return { title: "Promoción no encontrada" }
  }

  return {
    title: `${promo.name} - Equipales Cantor`,
    description: promo.description,
  }
}

interface PromoPageProps {
  params: Promise<{ slug: string }>
}

export default async function PromoPage({ params }: PromoPageProps) {
  const { slug } = await params
  const promo = promotions.find((p) => p.slug === slug)

  if (!promo) {
    notFound()
  }

  const whatsappUrl = `https://wa.me/523317225092?text=${encodeURIComponent(promo.whatsappMessage)}`

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
              <BreadcrumbLink href="/#promociones">Promociones</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/promociones/${slug}`}>{promo.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
            <Image src={promo.image} alt={promo.name} fill className="object-contain p-8" priority />
          </div>

          <div>
            <div className="flex gap-2 mb-4">
              <span className="text-xs font-bold bg-primary text-primary-foreground px-4 py-2 rounded-xl">
                {promo.category}
              </span>
              <span className="text-xs font-bold bg-secondary text-secondary-foreground px-4 py-2 rounded-xl">
                {promo.badge}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-black mb-4">{promo.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">{promo.description}</p>

            <div className="flex items-baseline mb-8">
              <span className="text-4xl lg:text-5xl font-black text-primary">{promo.price}</span>
              <span className="text-lg text-muted-foreground ml-2">MXN</span>
            </div>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-14 rounded-2xl font-bold mb-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                Cotizar por WhatsApp
              </Button>
            </a>

            <div className="mt-8 p-4 bg-muted/30 rounded-xl">
              <p className="text-sm text-muted-foreground">{promo.details}</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Descripción</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {promo.descriptionLong}
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}