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
  marcaAuto?: string;
  marcaRepuesto?: string;
  aplicacion?: string;
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
    id: "kit-distribucion",
    nombre: "Kit de Distribución Completo (Correa + Tensor)",
    categoriaId: "motor",
    categoriaNombre: "Motor",
    marcaRepuesto: "Gates / SKF",
    marcaAuto: "Volkswagen",
    aplicacion: "Gol Trend / Voyage / Fox / Suran 1.6 8v",
    descripcion: "Kit de distribución de alta durabilidad para motores VW 1.6 8v (EA111). Incluye correa dentada y rodillo tensor.",
    precio: 85000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "pistones",
    nombre: "Juego de Pistones con Aros (Std / 0.50)",
    categoriaId: "motor",
    categoriaNombre: "Motor",
    marcaRepuesto: "Mahle / Metal Leve",
    marcaAuto: "Chevrolet",
    aplicacion: "Corsa / Onix / Prisma / Classic 1.4 8v",
    descripcion: "Juego completo de 4 pistones de aluminio con sus respectivos aros de compresión y pernos de pistón.",
    precio: 120000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "junta-tapa",
    nombre: "Junta de Tapa de Cilindros Multilámina",
    categoriaId: "motor",
    categoriaNombre: "Motor",
    marcaRepuesto: "Taranto",
    marcaAuto: "Ford",
    aplicacion: "Ka / Fiesta / Ecosport / Focus 1.6 Sigma",
    descripcion: "Junta de tapa de cilindros metálica multilámina (MLS) de alta resistencia térmica para motores Ford 1.6.",
    precio: 38000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "bujias",
    nombre: "Juego de Bujías de Encendido (x4)",
    categoriaId: "motor",
    categoriaNombre: "Motor",
    marcaRepuesto: "NGK / Bosch",
    marcaAuto: "Renault",
    aplicacion: "Kangoo / Clio / Logan / Sandero 1.6 16v K4M",
    descripcion: "Set de 4 bujías de encendido de cobre/iridio para encendido óptimo y menor consumo de combustible.",
    precio: 28000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "bomba-aceite",
    nombre: "Bomba de Aceite de Motor",
    categoriaId: "motor",
    categoriaNombre: "Motor",
    marcaRepuesto: "Fallone / Schadek",
    marcaAuto: "Fiat",
    aplicacion: "Palio / Siena / Uno / Strada / Fiorino 1.4 Fire",
    descripcion: "Bomba de aceite de engranajes de alto flujo para lubricación constante en motores Fiat Fire 1.3 / 1.4.",
    precio: 65000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "valvulas",
    nombre: "Juego de Válvulas Admisión y Escape",
    categoriaId: "motor",
    categoriaNombre: "Motor",
    marcaRepuesto: "3B / Basso",
    marcaAuto: "Toyota",
    aplicacion: "Hilux 2.5 / 3.0 D-4D Turbo Diesel",
    descripcion: "Juego completo de válvulas de admisión y escape nitradas para motores turbodiésel Toyota.",
    precio: 145000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },

  // --- SUSPENSIÓN ---
  {
    id: "amortiguadores",
    nombre: "Juego de Amortiguadores Delanteros a Gas",
    categoriaId: "suspension",
    categoriaNombre: "Suspensión y Dirección",
    marcaRepuesto: "Fric-Rot / Monroe",
    marcaAuto: "Volkswagen",
    aplicacion: "Gol Trend / Voyage / Fox / Suran 1.6",
    descripcion: "Par de amortiguadores delanteros hidráulicos presurizados con nitrógeno para máxima estabilidad.",
    precio: 115000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "espirales",
    nombre: "Juego de Espirales de Suspensión Reforzados",
    categoriaId: "suspension",
    categoriaNombre: "Suspensión y Dirección",
    marcaRepuesto: "AG Espirales",
    marcaAuto: "Chevrolet",
    aplicacion: "Corsa / Classic / Onix / Prisma",
    descripcion: "Espirales progresivos de alta resistencia para el tren delantero, mantienen la altura y el confort original.",
    precio: 62000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "cazoletas",
    nombre: "Cazoleta de Amortiguador con Crapodina",
    categoriaId: "suspension",
    categoriaNombre: "Suspensión y Dirección",
    marcaRepuesto: "Viamonte / VTH",
    marcaAuto: "Ford",
    aplicacion: "Fiesta Kinétic / Ecosport Kinétic / Ka 1.5",
    descripcion: "Cazoleta de suspensión superior con rodamiento crapodina de giro suave para dirección.",
    precio: 35000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },

  // --- FRENOS ---
  {
    id: "pastillas-freno",
    nombre: "Juego de Pastillas de Freno Delanteras",
    categoriaId: "frenos",
    categoriaNombre: "Frenos",
    marcaRepuesto: "Fras-le / LPR",
    marcaAuto: "Volkswagen",
    aplicacion: "Amarok 2.0 / Vento / Golf VII",
    descripcion: "Pastillas de freno orgánicas/semimetálicas de frenado silencioso y baja emisión de polvo de carbón.",
    precio: 45000,
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "discos-freno",
    nombre: "Juego de Discos de Freno Ventilados (x2)",
    categoriaId: "frenos",
    categoriaNombre: "Frenos",
    marcaRepuesto: "Fremax / Corven",
    marcaAuto: "Chevrolet",
    aplicacion: "Onix / Prisma / Spin / Cobalt 1.4",
    descripcion: "Par de discos de freno delanteros ventilados con aleación de alto carbono para disipación de calor.",
    precio: 82000,
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },

  // --- CARROCERÍA ---
  {
    id: "opticas-delanteras",
    nombre: "Óptica Delantera Principal Fondo Negro",
    categoriaId: "carroceria",
    categoriaNombre: "Carrocería e Iluminación",
    marcaRepuesto: "FITAM / TYC",
    marcaAuto: "Volkswagen",
    aplicacion: "Gol Trend G5 / G6 / Voyage",
    descripcion: "Faro principal con acrílico de alta transparencia, parábola reflectora y máscara deportiva negra.",
    precio: 92000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "paragolpes-delantero",
    nombre: "Paragolpes Delantero Primereado",
    categoriaId: "carroceria",
    categoriaNombre: "Carrocería e Iluminación",
    marcaRepuesto: "Retov",
    marcaAuto: "Chevrolet",
    aplicacion: "Corsa Classic / Corsa 2 (2000 - 2016)",
    descripcion: "Paragolpes de plástico inyectado primereado listo para pintar del color del vehículo.",
    precio: 75000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "espejo-retrovisor",
    nombre: "Espejo Retrovisor Exterior Eléctrico",
    categoriaId: "carroceria",
    categoriaNombre: "Carrocería e Iluminación",
    marcaRepuesto: "Metagal",
    marcaAuto: "Ford",
    aplicacion: "Fiesta Kinétic / Ka (2015 - 2021)",
    descripcion: "Espejo lateral con comando eléctrico, espejo convexo anti-encandilamiento y luz de giro integrada.",
    precio: 48000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },

  // --- MANTENIMIENTO ---
  {
    id: "kit-mantenimiento",
    nombre: "Kit Completo de Filtros y Aceite Sintético 5W-30",
    categoriaId: "mantenimiento",
    categoriaNombre: "Mantenimiento y Filtros",
    descripcion: "Incluye filtro de aire, filtro de aceite, filtro de habitáculo antipolen y bidón de 4L de aceite sintético.",
    precio: 78000,
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=800&auto=format&fit=crop&q=80",
  },

  // --- ELECTRICIDAD ---
  {
    id: "bateria-reforzada",
    nombre: "Batería 12V 75Ah Libre Mantenimiento",
    categoriaId: "electricidad",
    categoriaNombre: "Electricidad y Encendido",
    descripcion: "Batería reforzada con aleación de plata-calcio. Garantiza arranque inmediato en temperaturas extremas.",
    precio: 135000,
    imagen: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  },
];
