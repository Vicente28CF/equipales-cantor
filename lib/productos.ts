export interface Producto {
  id: number
  name: string
  price: string
  priceValue: number
  image: string
  category: string
  description: string
  descriptionLong: string
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export const PRODUCTOS: Producto[] = [
  {
    id: 1,
    name: "Sala Tulum",
    price: "$10,000",
    priceValue: 10000,
    image: "/images/equipal-set-beige.jpeg",
    category: "Sala",
    description: "Incluye mesa de centro",
    descriptionLong:
      "La Sala Tulum es un juego completo de equipales artesanales que incluye mesa de centro. Hecho a mano en Zacoalco de Torres, Jalisco, con materiales naturales de primera calidad. Ideal para transformar tu sala en un espacio con auténtica esencia mexicana.",
  },
  {
    id: 2,
    name: "Sala tradicional",
    price: "$7,000",
    priceValue: 7000,
    image: "/images/equipal-set-naranja.jpeg",
    category: "Sala",
    description: "Incluye mesa de centro",
    descriptionLong:
      "Sala tradicional con mesa de centro. Pieza artesanal hecha a mano en Zacoalco de Torres, Jalisco. Con madera de sabino y cuero genuino. Perfecta para quienes buscan autenticidad en muebles mexicanos artesanales.",
  },
  {
    id: 3,
    name: "Comedor Acapulco",
    price: "$11,000",
    priceValue: 11000,
    image: "/images/equipal-comedor-negro.jpeg",
    category: "Comedores",
    description: "8 equipales y mesa rectangular",
    descriptionLong:
      "Comedor completo con 8 equipales y mesa rectangular. Set para comedor grande, hecho a mano en Zacoalco de Torres, Jalisco. Diseño clásico mexicano con materiales naturales de primera calidad.",
  },
  {
    id: 4,
    name: "Equipal Tulum",
    price: "$1,800",
    priceValue: 1800,
    image: "/images/equipal-silla-beige.jpeg",
    category: "Equipales",
    description: "Silla individual con tejido artesanal",
    descriptionLong:
      "Equipal individual estilo Tulum. Silla artesanal hecha a mano con materiales naturales. Ideal para terraza, jardín o interiores. Precio por unidad.",
  },
  {
    id: 5,
    name: "Comedor charro",
    price: "$10,500",
    priceValue: 10500,
    image: "/images/equipal-comedor-exterior.jpeg",
    category: "Comedores",
    description: "6 equipales y mesa ovalada",
    descriptionLong:
      "Comedor charro tradicional con 6 equipales y mesa ovalada. Fabricación artesanal en Zacoalco de Torres, Jalisco. Resistente y authentique diseño mexicano.",
  },
  {
    id: 6,
    name: "Equipal cantinero tradicional",
    price: "$1,200",
    priceValue: 1200,
    image: "/images/equipal-silla-cafe-exterior.jpeg",
    category: "Equipales",
    description: "Silla cantinero en cuero con base tejida",
    descriptionLong:
      "Equipal cantinero estilo tradicional con base tejida. Silla alta ideal para barra o contador. Hecho a mano en Zacoalco de Torres, Jalisco. Precio por unidad.",
  },
  {
    id: 7,
    name: "Equipal Cancún",
    price: "$1,100",
    priceValue: 1100,
    image: "/images/equipal-sillas-cafe.jpeg",
    category: "Equipales",
    description: "Equipal estilo Cancún en cuero",
    descriptionLong:
      "Equipal estilo Cancún. Diseño clásico mexicano auténtico. Hecho a mano con materiales naturales. Ideal para terraza, patio o interior. Precio por unidad.",
  },
  {
    id: 8,
    name: "Equipal periquera",
    price: "$1,000",
    priceValue: 1000,
    image: "/images/equipal-escritorio-paul.jpeg",
    category: "Equipales",
    description: "Silla periquera estilo tradicional",
    descriptionLong:
      "Equipal periquera estilo tradicional mexicano. Silla de madera y cuero. Diseño perfecto para escritorio o cocina. Fabricación artesanal. Precio por unidad.",
  },
  {
    id: 9,
    name: "Equipal tradicional personalizado",
    price: "$1,000",
    priceValue: 1000,
    image: "/images/equipal-sillas-blancas.jpeg",
    category: "Equipales",
    description: "Equipal con bordado personalizado",
    descriptionLong:
      "Equipal tradicional con bordado personalizado. Puedes agregar nombres o frases exclusivas. Hecho a mano en Zacoalco de Torres, Jalisco. Perfecto para regalos únicos.",
  },
  {
    id: 10,
    name: "Equipal cantinero Cancún",
    price: "$1,300",
    priceValue: 1300,
    image: "/images/equipal-sillas-naranja-barril.jpeg",
    category: "Equipales",
    description: "Equipal cantinero estilo Cancún, precio por unidad",
    descriptionLong:
      "Equipal cantinero estilo Cancún. Diseño alto con descansabrazos. Ideal para barras altas. Hecho a mano con materiales naturales. Precio por unidad.",
  },
  {
    id: 11,
    name: "Comedor tradicional",
    price: "$4,200",
    priceValue: 4200,
    image: "/images/equipal-comedor-cafe-redondo.jpeg",
    category: "Comedores",
    description: "4 equipales y mesa redonda",
    descriptionLong:
      "Comedor tradicional completo con 4 equipales y mesa redonda. Set ideal para espacios pequeños. Hecho a mano en Zacoalco de Torres, Jalisco. Perfecto para familia de 4-6 personas.",
  },
  {
    id: 12,
    name: "Equipales charros",
    price: "$1,000",
    priceValue: 1000,
    image: "/images/equipal-sillas-terracota-trio.jpeg",
    category: "Equipales",
    description: "Equipales estilo charro, precio por unidad",
    descriptionLong:
      "Equipales estilo charro. Diseño auténticamente mexicano con estructura de madera. Cuero de res. Precio por unidad. Set de 3 piezas.",
  },
  {
    id: 13,
    name: "Comedor tradicional",
    price: "$4,200",
    priceValue: 4200,
    image: "/images/equipal-silla-escritorio-cafe.jpeg",
    category: "Comedores",
    description: "4 equipales y mesa cuadrada",
    descriptionLong:
      "Comedor tradicional completo con 4 equipales y mesa cuadrada moderna. Set perfecto para espacios cuadrados. Hecho a mano en Zacoalco de Torres.",
  },
  {
    id: 14,
    name: "Sala tradicional acojinadas",
    price: "$9,000",
    priceValue: 9000,
    image: "/images/equipal-set-cafe-mesas.jpeg",
    category: "Sala",
    description: "Incluye mesa de centro",
    descriptionLong:
      "Sala tradicional con asientos acojinados para mayor comodidad. Incluye sofá y mesa de centro. Hecho a mano con materiales de primera calidad. Ideal para sala principal.",
  },
  {
    id: 15,
    name: "Equipal envarillado",
    price: "$900",
    priceValue: 900,
    image: "/images/equipal-silla-beige-circular.jpeg",
    category: "Equipales",
    description: "Silla con respaldo envarillado tradicional",
    descriptionLong:
      "Equipal con respaldo envarillado estilo tradicional. Diseño clásico de respaldo alto. Silla individual. Precio por unidad.",
  },
  {
    id: 16,
    name: "Equipal tradicional",
    price: "$850",
    priceValue: 850,
    image: "/images/equipal-tradicional-naranja.jpeg",
    category: "Equipales",
    description: "Equipal tradicional en cuero naranja",
    descriptionLong:
      "Equipal tradicional. El más económico de nuestra línea. Calidad garantizada de 4ta generación. Hecho a mano con materiales naturales. Precio por unidad.",
  },
  {
    id: 17,
    name: "Equipal # 19 personalizado",
    price: "$1,400",
    priceValue: 1400,
    image: "/images/equipal-19-personalizado.jpeg",
    category: "Equipales",
    description: "Equipal personalizado con bordado de nombres",
    descriptionLong:
      "Equipal #19 clásico con personalización de bordado. Nombres, fechas o mensajes exclusivos. Color a elegir. Perfecto para bodas, XV años o regalos empresariales.",
  },
  {
    id: 18,
    name: "Equipales locos",
    price: "$500",
    priceValue: 500,
    image: "/images/equipales-locos.jpeg",
    category: "Equipales",
    description: "Equipales tipo banco personalizados, precio por unidad",
    descriptionLong:
      "Equipales estilo banco compacto. Diseño bajo tradicional. Perfectos para espacios pequeños o como bancos adicionales. Personalizables. Precio por unidad.",
  },
  {
    id: 19,
    name: "Equipal tradicional personalizado",
    price: "$1,000",
    priceValue: 1000,
    image: "/images/equipal-personalizado-negro.jpeg",
    category: "Equipales",
    description: "Equipal con diseño ornamental y personalización, precio por unidad",
    descriptionLong:
      "Equipal tradicional con diseño ornamental. Personalizable con iniciales o logos. Hecho a mano en Zacoalco de Torres. Perfecto para establecimientos comerciales o regalos corporativos.",
  },
].map((p) => ({ ...p, slug: generateSlug(p.name) }))

export function getProductoBySlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug)
}

export function getProductoById(id: number): Producto | undefined {
  return PRODUCTOS.find((p) => p.id === id)
}

export function getProductosByCategory(category: string): Producto[] {
  if (category === "Todos") return PRODUCTOS
  return PRODUCTOS.filter((p) => p.category === category)
}

export const CATEGORIAS = ["Todos", "Equipales", "Sala", "Comedores"]