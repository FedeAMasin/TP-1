export interface Seccion {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
}

export interface Repuesto {
  id: string;
  nombre: string;
  categoriaId: string;
  categoriaNombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  requiereLado?: boolean;
  opcionesLado?: string[];
}

export function normalizeCategory(str?: string): string {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export const SECCIONES: Seccion[] = [
  {
    id: "motor",
    titulo: "Motor",
    descripcion: "Pistones, bielas, kit de distribución, válvulas, bujías y componentes internos.",
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "suspension",
    titulo: "Suspensión y Dirección",
    descripcion: "Amortiguadores, espirales, cazoletas, bieletas y extremos de dirección.",
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "frenos",
    titulo: "Frenos",
    descripcion: "Pastillas de freno, discos ventilados, líquido DOT 4 y bomba de freno.",
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "carroceria",
    titulo: "Carrocería e Iluminación",
    descripcion: "Paragolpes, espejos retrovisores, ópticas, faros y paneles exteriores.",
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "mantenimiento",
    titulo: "Mantenimiento y Filtros",
    descripcion: "Aceites sintéticos, filtros de aire, aceite, combustible, refrigerantes y líquidos.",
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "electricidad",
    titulo: "Electricidad y Encendido",
    descripcion: "Baterías, alternadores, burros de arranque, cables de bujías y bobinas.",
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
];

export const REPUESTOS: Repuesto[] = [
  // --- MOTOR ---
  {
    id: "5",
    nombre: "Kit de Distribución Completo + Bomba de Agua",
    categoriaId: "motor",
    categoriaNombre: "Motor",
    descripcion: "Incluye correa de distribución reinforced, tensor automático, rodamiento guía y bomba de agua de alto caudal.",
    precio: 121000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "501",
    nombre: "Juego de Juntas de Tapa de Cilindros",
    categoriaId: "motor",
    categoriaNombre: "Motor",
    descripcion: "Junta multilámina MLS de alta compresión y sellado térmico superior para motores de 16V.",
    precio: 52000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "502",
    nombre: "Juego de Pistones y Aros de Compresión",
    categoriaId: "motor",
    categoriaNombre: "Motor",
    descripcion: "Pistones de aleación de aluminio hiper-eutéctica con aros cromados de baja fricción.",
    precio: 145000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },

  // --- SUSPENSIÓN ---
  {
    id: "3",
    nombre: "Amortiguador Delantero Presurizado (Gas)",
    categoriaId: "suspension",
    categoriaNombre: "Suspensión y Dirección",
    descripcion: "Amortiguador reinforced a gas de doble tubo. Diseñado para absorber impactos en calles y rutas.",
    precio: 92500,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
    requiereLado: true,
  },
  {
    id: "301",
    nombre: "Kit de Crapodinas y Cazoletas Delanteras",
    categoriaId: "suspension",
    categoriaNombre: "Suspensión y Dirección",
    descripcion: "Cazoletas con crapodinas blindadas integradas para dirección suave y absorción de ruidos.",
    precio: 38900,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
    requiereLado: true,
  },
  {
    id: "302",
    nombre: "Juego de Espirales Progresivos (Par)",
    categoriaId: "suspension",
    categoriaNombre: "Suspensión y Dirección",
    descripcion: "Mejora la tenida en curva y reduce la altura manteniendo un andar suave en ciudad.",
    precio: 67000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },

  // --- FRENOS ---
  {
    id: "1",
    nombre: "Juego de Pastillas de Freno Delanteras Cerámicas",
    categoriaId: "frenos",
    categoriaNombre: "Frenos",
    descripcion: "Pastillas cerámicas de alto rendimiento. Excelente frenado en seco y mojado, libres de ruidos y polvo.",
    precio: 45500,
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "101",
    nombre: "Juego de Discos de Freno Ventilados (Par)",
    categoriaId: "frenos",
    categoriaNombre: "Frenos",
    descripcion: "Discos de freno hiper-ventilados, fabricados en aleación de hierro nodular con disipación térmica.",
    precio: 82000,
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "102",
    nombre: "Líquido de Frenos Sintético DOT 4 (500ml)",
    categoriaId: "frenos",
    categoriaNombre: "Frenos",
    descripcion: "Sintético de alto punto de ebullición apto para sistemas ABS, ESP y de disco tradicional.",
    precio: 12500,
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },

  // --- CARROCERÍA ---
  {
    id: "6",
    nombre: "Espejo Retrovisor Eléctrico con Luz Giro LED",
    categoriaId: "carroceria",
    categoriaNombre: "Carrocería e Iluminación",
    descripcion: "Espejo exterior comando eléctrico con guiño LED integrado y espejo cóncavo desempañador. Selecciona el lado antes de consultar.",
    precio: 64000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
    requiereLado: true,
  },
  {
    id: "601",
    nombre: "Faro Principal Delantero con Lupa / LED",
    categoriaId: "carroceria",
    categoriaNombre: "Carrocería e Iluminación",
    descripcion: "Óptica delantera de policarbonato reinforced con lupas proyectoras de gran alcance y regulación. Disponible lado Izquierdo o Derecho.",
    precio: 110000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
    requiereLado: true,
  },
  {
    id: "602",
    nombre: "Paragolpes Delantero con Calce Original",
    categoriaId: "carroceria",
    categoriaNombre: "Carrocería e Iluminación",
    descripcion: "Inyectado en polipropileno flexible con capa de primer listo para pintar del color del vehículo.",
    precio: 89000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "603",
    nombre: "Paragolpes Trasero con Reflectores Integrados",
    categoriaId: "carroceria",
    categoriaNombre: "Carrocería e Iluminación",
    descripcion: "Paragolpes posterior de plástico ABS de alta densidad, con moldura protectora y ojo de gato.",
    precio: 95000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "604",
    nombre: "Faro Trasero Acrílico",
    categoriaId: "carroceria",
    categoriaNombre: "Carrocería e Iluminación",
    descripcion: "Óptica trasera completa con portalámparas, luz de freno, posición, marcha atrás y guiño. Selecciona el lado deseado.",
    precio: 72000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
    requiereLado: true,
  },
  {
    id: "605",
    nombre: "Faro Principal Delantero Estándar (Halógeno Sin Lupa)",
    categoriaId: "carroceria",
    categoriaNombre: "Carrocería e Iluminación",
    descripcion: "Óptica delantera tradicional monofoco para lámpara H4/H7, parábola de aluminio reflectante. Selecciona lado Izquierdo o Derecho.",
    precio: 68000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
    requiereLado: true,
  },

  // --- MANTENIMIENTO ---
  {
    id: "2",
    nombre: "Kit Completo de Filtros y Aceite Sintético 5W-30",
    categoriaId: "mantenimiento",
    categoriaNombre: "Mantenimiento y Filtros",
    descripcion: "Incluye filtro de aire, filtro de aceite, filtro de habitáculo antipolen y bidón de 4L de aceite sintético.",
    precio: 78000,
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "201",
    nombre: "Líquido Refrigerante Orgánico Concentrado (1L)",
    categoriaId: "mantenimiento",
    categoriaNombre: "Mantenimiento y Filtros",
    descripcion: "Protección anticorrosiva extrema para radiadores de aluminio y rango de -35°C a +125°C.",
    precio: 15400,
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "202",
    nombre: "Aditivo Limpiador de Inyectores Multiválvulas",
    categoriaId: "mantenimiento",
    categoriaNombre: "Mantenimiento y Filtros",
    descripcion: "Restaura la potencia del motor, remueve depósitos en válvulas de admisión e inyectores.",
    precio: 18900,
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "203",
    nombre: "Líquido de Frenos Sintético DOT 4 (500ml)",
    categoriaId: "mantenimiento",
    categoriaNombre: "Mantenimiento y Filtros",
    descripcion: "Líquido de frenos sintético de alto punto de ebullición para sistemas de frenos ABS, ESP y disco/tambor.",
    precio: 12500,
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },

  // --- ELECTRICIDAD ---
  {
    id: "4",
    nombre: "Batería 12V 75Ah Libre Mantenimiento (Reforzada)",
    categoriaId: "electricidad",
    categoriaNombre: "Electricidad y Encendido",
    descripcion: "Batería reforzada con aleación de plata-calcio. Garantiza arranque inmediato en temperaturas extremas.",
    precio: 135000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "401",
    nombre: "Juego de Bujías de Iridium High Performance (x4)",
    categoriaId: "electricidad",
    categoriaNombre: "Electricidad y Encendido",
    descripcion: "Bujías de iridio de encendido rápido, reducen consumo y mejoran la respuesta del acelerador.",
    precio: 34000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "402",
    nombre: "Juego de Cables de Bujías de Silicona (x4)",
    categoriaId: "electricidad",
    categoriaNombre: "Electricidad y Encendido",
    descripcion: "Cables antiparasitarios de 8mm de silicona pura. Máxima conducción eléctrica y aislamiento térmico.",
    precio: 28500,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "403",
    nombre: "Bobina de Encendido Individual (Tipo Lápiz)",
    categoriaId: "electricidad",
    categoriaNombre: "Electricidad y Encendido",
    descripcion: "Bobina de encendido de alta tensión para inyección electrónica. Chispas constantes y respuesta inmediata.",
    precio: 49000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "404",
    nombre: "Batería 12V 65Ah Reforzada (Gama Estándar)",
    categoriaId: "electricidad",
    categoriaNombre: "Electricidad y Encendido",
    descripcion: "Batería compacta de 65Ah ideal para vehículos urbanos, autos medianos y equipamiento estándar.",
    precio: 112000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "405",
    nombre: "Alternador 12V 90A con Regulador Incorporado",
    categoriaId: "electricidad",
    categoriaNombre: "Electricidad y Encendido",
    descripcion: "Alternador reinforced de 90 amperios con polea poliv y regulador electrónico integrado para carga constante.",
    precio: 168000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "406",
    nombre: "Motor de Arranque / Burro de Arranque 12V",
    categoriaId: "electricidad",
    categoriaNombre: "Electricidad y Encendido",
    descripcion: "Burro de arranque de imán permanente reduciendo consumo de corriente, bendix de 9 dientes para encendido rápido.",
    precio: 142000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
];
