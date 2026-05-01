import { MetadataRoute } from "next"
import { PRODUCTOS } from "@/lib/productos"

const BASE_URL = "https://www.equipalescantor.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/productos`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nosotros`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/envios`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/terminos`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacidad`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/favoritos`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/carrito`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]

  const productRoutes = PRODUCTOS.map((producto) => ({
    url: `${BASE_URL}/productos/${producto.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...productRoutes]
}