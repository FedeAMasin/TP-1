export interface Repuesto {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

export const REPUESTOS: Repuesto[] = [
  {
    id: "1",
    nombre: "Juego de Pastillas de Freno",
    categoria: "Frenos",
    descripcion: "Pastillas delanteras comunes, buena calidad y no chillan al frenar.",
    precio: 45500,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_699431-MLA114020064552_072026-F.webp",
  },
  {
    id: "2",
    nombre: "Kit de Filtros y Aceite 5W-30",
    categoria: "Mantenimiento",
    descripcion: "Viene con filtro de aire, aceite y el bidón de 4 litros. Listo para hacerle el service.",
    precio: 78000,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_774267-MLA78905088030_092024-F.webp",
  },
  {
    id: "3",
    nombre: "Amortiguador Delantero (Gas)",
    categoria: "Suspensión",
    descripcion: "Amortiguador reforzado, ideal para aguantar los baches de la ciudad.",
    precio: 92500,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_684315-MLA95800169558_102025-F.webp",
  },
  {
    id: "4",
    nombre: "Batería 12V 75Ah",
    categoria: "Electricidad",
    descripcion: "Batería reforzada, libre de mantenimiento. Arranca de una en invierno.",
    precio: 135000,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_629442-MLA92490220302_092025-F.webp",
  },
  {
    id: "5",
    nombre: "Kit de Distribución + Bomba",
    categoria: "Motor",
    descripcion: "Trae correa, tensor y la bomba de agua. Kit completo para el cambio.",
    precio: 121000,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_628316-MLA84098798709_042025-F.webp",
  },
];