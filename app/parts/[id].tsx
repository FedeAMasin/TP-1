import { Link, Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//import { SearchBar } from "@/components/SearchBar";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TopHeader } from "@/components/TopHeader";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { normalizeCategory, REPUESTOS, SECCIONES } from "@/constants/data";
//import { useFavoritos } from "@/hooks/useFavoritos";

interface RepuestoItem {
  id: string;
  nombre: string;
  marcaRepuesto?: string;
  marcaAuto?: string;
  aplicacion?: string;
  precio: number;
  descripcion: string;
  imagen: any;
  categoriaNombre?: string;
}

const REPUESTOS_POR_SECCION: Record<string, RepuestoItem[]> = {
  motor: [
    {
      id: "kit-distribucion",
      nombre: "Kit de Distribución Completo (Correa + Tensor)",
      marcaRepuesto: "Gates / SKF",
      marcaAuto: "Volkswagen",
      aplicacion: "Gol Trend / Voyage / Fox / Suran 1.6 8v",
      precio: 85000,
      descripcion:
        "Kit de distribución de alta durabilidad para motores VW 1.6 8v (EA111). Incluye correa dentada y rodillo tensor.",
      imagen: require("@/assets/images/Catalogo/repuestos_motor/kit_distribucion.jpg"),
    },
    {
      id: "pistones",
      nombre: "Juego de Pistones con Aros (Std / 0.50)",
      marcaRepuesto: "Mahle / Metal Leve",
      marcaAuto: "Chevrolet",
      aplicacion: "Corsa / Onix / Prisma / Classic 1.4 8v",
      precio: 120000,
      descripcion:
        "Juego completo de 4 pistones de aluminio con sus respectivos aros de compresión y pernos de pistón.",
      imagen: require("@/assets/images/Catalogo/repuestos_motor/pistones.jpg"),
    },
    {
      id: "junta-tapa",
      nombre: "Junta de Tapa de Cilindros Multilámina",
      marcaRepuesto: "Taranto",
      marcaAuto: "Ford",
      aplicacion: "Ka / Fiesta / Ecosport / Focus 1.6 Sigma / Zetec",
      precio: 38000,
      descripcion:
        "Junta de tapa de cilindros metálica multilámina (MLS) de alta resistencia térmica para motores Ford 1.6.",
      imagen: require("@/assets/images/Catalogo/repuestos_motor/junta_tapa.jpg"),
    },
    {
      id: "bujias",
      nombre: "Juego de Bujías de Encendido (x4)",
      marcaRepuesto: "NGK / Bosch",
      marcaAuto: "Renault",
      aplicacion: "Kangoo / Clio / Logan / Sandero 1.6 16v K4M",
      precio: 28000,
      descripcion:
        "Set de 4 bujías de encendido de cobre/iridio para encendido óptimo y menor consumo de combustible.",
      imagen: require("@/assets/images/Catalogo/repuestos_motor/bujias.jpg"),
    },
    {
      id: "bomba-aceite",
      nombre: "Bomba de Aceite de Motor",
      marcaRepuesto: "Fallone / Schadek",
      marcaAuto: "Fiat",
      aplicacion: "Palio / Siena / Uno / Strada / Fiorino 1.4 Fire",
      precio: 65000,
      descripcion:
        "Bomba de aceite de engranajes de alto flujo para lubricación constante en motores Fiat Fire 1.3 / 1.4.",
      imagen: require("@/assets/images/Catalogo/repuestos_motor/bomba_aceite.jpg"),
    },
    {
      id: "valvulas",
      nombre: "Juego de Válvulas Admisión y Escape",
      marcaRepuesto: "3B / Basso",
      marcaAuto: "Toyota",
      aplicacion: "Hilux 2.5 / 3.0 D-4D Turbo Diesel (1KD / 2KD)",
      precio: 145000,
      descripcion:
        "Juego completo de válvulas de admisión y escape nitradas para motores turbodiésel Toyota.",
      imagen: require("@/assets/images/Catalogo/repuestos_motor/valvulas.jpg"),
    },
    {
      id: "bomba-agua",
      nombre: "Bomba de Agua con Junta",
      marcaRepuesto: "Dolz / VMN",
      marcaAuto: "Peugeot / Citroën",
      aplicacion: "208 / Partner / Berlingo / C3 1.6 16v EC5",
      precio: 52000,
      descripcion:
        "Bomba de agua de refrigerante con polea y junta de sellado para sistema de refrigeración.",
      imagen: require("@/assets/images/Catalogo/repuestos_motor/bomba_agua.jpg"),
    },
    {
      id: "metales-biela",
      nombre: "Cojinetes / Metales de Biela y Bancada",
      marcaRepuesto: "Glyco / Federal Mogul",
      marcaAuto: "Volkswagen",
      aplicacion: "Amarok 2.0 TDI / Vento 2.0 TSI",
      precio: 78000,
      descripcion:
        "Juego de cojinetes de biela y bancada de trimetal anti-fricción para motores diésel y nafta 2.0.",
      imagen: require("@/assets/images/Catalogo/repuestos_motor/metales_biela.jpg"),
    },
  ],
  suspension: [
    {
      id: "amortiguadores",
      nombre: "Juego de Amortiguadores Delanteros a Gas",
      marcaRepuesto: "Fric-Rot / Monroe",
      marcaAuto: "Volkswagen",
      aplicacion: "Gol Trend / Voyage / Fox / Suran 1.6",
      precio: 115000,
      descripcion:
        "Par de amortiguadores delanteros hidráulicos presurizados con nitrógeno para máxima estabilidad.",
      imagen: require("@/assets/images/Catalogo/repuestos_suspension/amortiguadores.jpg"),
    },
    {
      id: "espirales",
      nombre: "Juego de Espirales de Suspensión Reforzados",
      marcaRepuesto: "AG Espirales",
      marcaAuto: "Chevrolet",
      aplicacion: "Corsa / Classic / Onix / Prisma",
      precio: 62000,
      descripcion:
        "Espirales progresivos de alta resistencia para el tren delantero, mantienen la altura y el confort original.",
      imagen: require("@/assets/images/Catalogo/repuestos_suspension/espirales.jpg"),
    },
    {
      id: "cazoletas",
      nombre: "Cazoleta de Amortiguador con Crapodina",
      marcaRepuesto: "Viamonte / VTH",
      marcaAuto: "Ford",
      aplicacion: "Fiesta Kinétic / Ecosport Kinétic / Ka 1.5",
      precio: 35000,
      descripcion:
        "Cazoleta de suspensión superior con rodamiento crapodina de giro suave para dirección.",
      imagen: require("@/assets/images/Catalogo/repuestos_suspension/cazoletas.jpg"),
    },
    {
      id: "bieletas",
      nombre: "Bieletas de Barra Estabilizadora (x2)",
      marcaRepuesto: "Capemi",
      marcaAuto: "Renault",
      aplicacion: "Kangoo / Sandero / Logan / Duster",
      precio: 24000,
      descripcion:
        "Par de bieletas reinforced con bujes de caucho de alta densidad para evitar ruidos e inclinación.",
      imagen: require("@/assets/images/Catalogo/repuestos_suspension/bieletas.jpg"),
    },
    {
      id: "parrilla-suspension",
      nombre: "Parrilla de Suspensión con Bujes y Rótula",
      marcaRepuesto: "Nakata",
      marcaAuto: "Fiat",
      aplicacion: "Palio / Siena / Uno Novo / Strada",
      precio: 58000,
      descripcion:
        "Brazo de suspensión inferior completo listo para colocar, fabricado en chapa estampada reforzada.",
      imagen: require("@/assets/images/Catalogo/repuestos_suspension/parrilla_suspension.jpg"),
    },
    {
      id: "extremos-direccion",
      nombre: "Juego de Extremos de Dirección y Axial",
      marcaRepuesto: "Cofap",
      marcaAuto: "Toyota",
      aplicacion: "Hilux 4x2 / 4x4 (2005 - 2022)",
      precio: 48000,
      descripcion:
        "Extremos de dirección articulados para barra de mando con rosca tratada térmicamente.",
      imagen: require("@/assets/images/Catalogo/repuestos_suspension/extremos_direccion.jpg"),
    },
  ],
  frenos: [
    {
      id: "pastillas-freno",
      nombre: "Juego de Pastillas de Freno Delanteras",
      marcaRepuesto: "Fras-le / LPR",
      marcaAuto: "Volkswagen",
      aplicacion: "Amarok 2.0 / Vento / Golf VII",
      precio: 45000,
      descripcion:
        "Pastillas de freno orgánicas/semimetálicas de frenado silencioso y baja emisión de polvo de carbón.",
      imagen: require("@/assets/images/Catalogo/repuestos_frenos/pastillas_freno.jpg"),
    },
    {
      id: "discos-freno",
      nombre: "Juego de Discos de Freno Ventilados (x2)",
      marcaRepuesto: "Fremax / Corven",
      marcaAuto: "Chevrolet",
      aplicacion: "Onix / Prisma / Spin / Cobalt 1.4",
      precio: 82000,
      descripcion:
        "Par de discos de freno delanteros ventilados con aleación de alto carbono para disipación de calor.",
      imagen: require("@/assets/images/Catalogo/repuestos_frenos/discos_freno.jpg"),
    },
    {
      id: "campanas-freno",
      nombre: "Campanas y Juego de Cintas de Freno Traseras",
      marcaRepuesto: "Bosch",
      marcaAuto: "Ford",
      aplicacion: "Ka 1.0 - 1.5 / Fiesta Max / Ecosport",
      precio: 68000,
      descripcion:
        "Set completo de campanas de freno traseras y patines de freno rectificados para eje trasero.",
      imagen: require("@/assets/images/Catalogo/repuestos_frenos/campanas_freno.jpg"),
    },
    {
      id: "bomba-freno",
      nombre: "Bomba de Freno Doble Circuito",
      marcaRepuesto: "Controil / Varga",
      marcaAuto: "Fiat",
      aplicacion: "Uno Fire / Palio / Siena 1.3 - 1.4",
      precio: 54000,
      descripcion:
        "Cilindro maestro de freno principal de doble circuito con depósito de líquido de freno.",
      imagen: require("@/assets/images/Catalogo/repuestos_frenos/bomba_freno.jpg"),
    },
    {
      id: "flexible-freno",
      nombre: "Flexibles de Freno Delanteros (x2)",
      marcaRepuesto: "Ate",
      marcaAuto: "Renault",
      aplicacion: "Clio 2 / Logan / Sandero / Kangoo",
      precio: 22000,
      descripcion:
        "Mangueras flexibles reinforced con malla textil para presión de fluido hidráulico de freno.",
      imagen: require("@/assets/images/Catalogo/repuestos_frenos/flexible_freno.jpg"),
    },
    {
      id: "cables-freno-mano",
      nombre: "Cable de Freno de Mano Trasero",
      marcaRepuesto: "Efac",
      marcaAuto: "Peugeot",
      aplicacion: "208 / 207 Compact / Partner 1.6",
      precio: 26000,
      descripcion:
        "Cable de acero galvanizado con funda protectora de PVC para accionamiento del freno de estacionamiento.",
      imagen: require("@/assets/images/Catalogo/repuestos_frenos/cables_freno_mano.jpg"),
    },
  ],
  carroceria: [
    {
      id: "opticas-delanteras",
      nombre: "Óptica Delantera Principal Fondo Negro",
      marcaRepuesto: "FITAM / TYC",
      marcaAuto: "Volkswagen",
      aplicacion: "Gol Trend G5 / G6 / Voyage",
      precio: 92000,
      descripcion:
        "Faro principal con acrílico de alta transparencia, parábola reflectora y máscara deportiva negra.",
      imagen: require("@/assets/images/Catalogo/repuestos_carroceria/opticas_delanteras.jpg"),
    },
    {
      id: "paragolpes-delantero",
      nombre: "Paragolpes Delantero Primereado",
      marcaRepuesto: "Retov",
      marcaAuto: "Chevrolet",
      aplicacion: "Corsa Classic / Corsa 2 (2000 - 2016)",
      precio: 75000,
      descripcion:
        "Paragolpes de plástico inyectado primereado listo para pintar del color del vehículo.",
      imagen: require("@/assets/images/Catalogo/repuestos_carroceria/paragolpes_delantero.jpg"),
    },
    {
      id: "espejo-retrovisor",
      nombre: "Espejo Retrovisor Exterior Eléctrico",
      marcaRepuesto: "Metagal",
      marcaAuto: "Ford",
      aplicacion: "Fiesta Kinétic / Ka (2015 - 2021)",
      precio: 48000,
      descripcion:
        "Espejo lateral con comando eléctrico, espejo convexo anti-encandilamiento y luz de giro integrada.",
      imagen: require("@/assets/images/Catalogo/repuestos_carroceria/espejo_retrovisor.jpg"),
    },
    {
      id: "faros-traseros",
      nombre: "Faro Trasero Bicolor / Fumée",
      marcaRepuesto: "Baiml",
      marcaAuto: "Fiat",
      aplicacion: "Palio Fire / Uno Fire / Siena",
      precio: 36000,
      descripcion:
        "Faro de posición, freno y giros trasero con portalámparas e instalación eléctrica integrada.",
      imagen: require("@/assets/images/Catalogo/repuestos_carroceria/faros_traseros.jpg"),
    },
    {
      id: "parrilla-frente",
      nombre: "Parrilla de Frente Cromada con Moldura",
      marcaRepuesto: "Nakata",
      marcaAuto: "Renault",
      aplicacion: "Sandero Stepway / Logan (2014 - 2020)",
      precio: 42000,
      descripcion:
        "Parrilla frontal superior calandra con encastre perfecto y bordes cromados brillantes.",
      imagen: require("@/assets/images/Catalogo/repuestos_carroceria/parrilla_frente.jpg"),
    },
    {
      id: "faros-auxiliares",
      nombre: "Kit de Faros Auxiliares Antiniebla con Tecla",
      marcaRepuesto: "Cibie / Vic",
      marcaAuto: "Toyota",
      aplicacion: "Hilux SR / SRV / SW4 (2016 - 2023)",
      precio: 65000,
      descripcion:
        "Juego de faros antiniebla de profundidad con lámparas H11, cableado, relé y tecla de comando interior.",
      imagen: require("@/assets/images/Catalogo/repuestos_carroceria/faros_auxiliares.jpg"),
    },
  ],
};

const SECTION_NAMES: Record<string, string> = {
  motor: "Motor",
  suspension: "Suspensión y Dirección",
  frenos: "Frenos",
  carroceria: "Carrocería e Iluminación",
  mantenimiento: "Mantenimiento y Filtros",
  electricidad: "Electricidad y Encendido",
};

export default function SectionPartsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [filterText, setFilterText] = useState<string>("");
  //const { toggleFavorito, isFavorito } = //useFavoritos();
  const currentId = id?.toLowerCase() || "";
  const currentNorm = normalizeCategory(currentId);

  // Buscar la sección correspondiente en SECCIONES
  const seccion = SECCIONES.find(
    (s) =>
      normalizeCategory(s.id) === currentNorm ||
      normalizeCategory(s.titulo) === currentNorm
  );

  const sectionName =
    seccion?.titulo ||
    SECTION_NAMES[currentId] ||
    (id ? id.charAt(0).toUpperCase() + id.slice(1) : "Sección");

  // Obtener la lista base de repuestos (preferir REPUESTOS_POR_SECCION si existe, o filtrar REPUESTOS)
  let listaBase: RepuestoItem[] = [];
  if (REPUESTOS_POR_SECCION[currentId]) {
    listaBase = REPUESTOS_POR_SECCION[currentId];
  } else {
    listaBase = REPUESTOS.filter((r) => {
      const rCatId = normalizeCategory(r.categoriaId);
      const rCatName = normalizeCategory(r.categoriaNombre);
      return (
        rCatId === currentNorm ||
        rCatName.includes(currentNorm) ||
        currentNorm.includes(rCatId)
      );
    });
  }

  // Filtrar por texto si hay búsqueda
  const repuestos = filterText.trim()
    ? listaBase.filter(
        (r) =>
          r.nombre.toLowerCase().includes(filterText.toLowerCase()) ||
          r.descripcion.toLowerCase().includes(filterText.toLowerCase()) ||
          (r.marcaAuto && r.marcaAuto.toLowerCase().includes(filterText.toLowerCase())) ||
          (r.marcaRepuesto && r.marcaRepuesto.toLowerCase().includes(filterText.toLowerCase())) ||
          (r.aplicacion && r.aplicacion.toLowerCase().includes(filterText.toLowerCase()))
      )
    : listaBase;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        {/* Sticky Header with Back Button + Hamburger + Daytona Logo */}
        <TopHeader showBackButton={true} />

        <ScrollView contentContainerStyle={styles.container}>
          <ThemedText type="subtitle" style={styles.sectionHeaderTitle}>
            Sección: {sectionName}
          </ThemedText>

          {/* Barra de búsqueda en tiempo real dentro de la sección */}
          <SearchBar
            value={filterText}
            onChangeText={setFilterText}
            placeholder={`Filtrar repuestos en ${sectionName}...`}
            onClear={() => setFilterText("")}
          />

          {repuestos.length > 0 ? (
            <View style={styles.grid}>
              {repuestos.map((item) => {
                const favoritoActivo = isFavorito(item.id);
                const imageSource =
                  typeof item.imagen === "string"
                    ? { uri: item.imagen }
                    : item.imagen;

                return (
                  <ThemedView key={item.id} style={styles.card}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={imageSource}
                        style={styles.cardImage}
                        resizeMode="cover"
                      />
                      <View style={styles.brandBadge}>
                        <ThemedText style={styles.brandBadgeText}>
                          {item.marcaAuto || item.categoriaNombre || sectionName}
                        </ThemedText>
                      </View>

                      <Pressable
                        style={styles.favButton}
                        onPress={() => toggleFavorito(item.id)}
                      >
                        <IconSymbol
                          size={22}
                          name={favoritoActivo ? "star.fill" : "star"}
                          color={favoritoActivo ? "#FFD700" : "#ffffff"}
                        />
                      </Pressable>
                    </View>

                    <View style={styles.cardBody}>
                      <ThemedText style={styles.partTitle}>
                        {item.nombre}
                      </ThemedText>

                      {item.marcaRepuesto ? (
                        <View style={styles.metaRow}>
                          <ThemedText style={styles.makerText}>
                            Marca:{" "}
                            <ThemedText style={styles.bold}>
                              {item.marcaRepuesto}
                            </ThemedText>
                          </ThemedText>
                        </View>
                      ) : null}

                      {item.aplicacion ? (
                        <ThemedText style={styles.appText}>
                          🚗{" "}
                          <ThemedText style={styles.appBold}>
                            {item.aplicacion}
                          </ThemedText>
                        </ThemedText>
                      ) : null}

                      <ThemedText style={styles.descText} numberOfLines={3}>
                        {item.descripcion}
                      </ThemedText>

                      <View style={styles.priceRow}>
                        <ThemedText style={styles.priceText}>
                          $ {item.precio.toLocaleString("es-AR")}
                        </ThemedText>
                      </View>
                    </View>
                  </ThemedView>
                );
              })}
            </View>
          ) : (
            <ThemedView style={styles.emptyContainer}>
              <ThemedText type="subtitle">
                {filterText.trim()
                  ? `No se encontraron repuestos para "${filterText}"`
                  : `Sección: ${sectionName}`}
              </ThemedText>
              <ThemedText style={styles.emptySubtext}>
                {filterText.trim()
                  ? "Intenta buscar con otra palabra clave o limpia el filtro."
                  : "Próximamente agregaremos más repuestos para esta categoría."}
              </ThemedText>
              <Link href="/(tabs)/catalogo" asChild>
                <Pressable style={styles.backButton}>
                  <ThemedText style={styles.backButtonText}>
                    Volver al Catálogo
                  </ThemedText>
                </Pressable>
              </Link>
            </ThemedView>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f7f9",
  },
  sectionHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 32,
  },
  grid: {
    gap: 16,
    marginTop: 8,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  imageContainer: {
    position: "relative",
    backgroundColor: "#f0f0f0",
  },
  cardImage: {
    width: "100%",
    height: 170,
  },
  brandBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#d32f2f",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  brandBadgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  favButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  cardBody: {
    padding: 14,
  },
  partTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 6,
  },
  metaRow: {
    marginBottom: 4,
  },
  makerText: {
    fontSize: 13,
    color: "#666666",
  },
  bold: {
    fontWeight: "bold",
    color: "#222222",
  },
  appText: {
    fontSize: 13,
    color: "#444444",
    marginBottom: 8,
  },
  appBold: {
    fontWeight: "600",
    color: "#111111",
  },
  descText: {
    fontSize: 13,
    color: "#666666",
    lineHeight: 18,
    marginBottom: 12,
  },
  priceRow: {
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
    paddingTop: 10,
    alignItems: "flex-end",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#d32f2f",
  },
  emptyContainer: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginTop: 12,
  },
  emptySubtext: {
    marginTop: 8,
    textAlign: "center",
    color: "#666666",
  },
  backButton: {
    marginTop: 16,
    backgroundColor: "#d32f2f",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
