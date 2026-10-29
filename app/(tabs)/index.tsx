import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text // Agregado temporalmente
  ,


  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Componentes desactivados temporalmente porque no están en GitHub:
// import { RepuestoCard } from "@/components/RepuestoCard";
// import { SearchBar } from "@/components/SearchBar";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TopHeader } from "@/components/TopHeader";
import { REPUESTOS } from "@/constants/data";

const BRANDS = [
  {
    id: "vw",
    name: "Volkswagen",
    logo: require("@/assets/images/logos/vw.png"),
  },
  {
    id: "renault",
    name: "Renault",
    logo: require("@/assets/images/logos/renault.png"),
  },
  {
    id: "chevrolet",
    name: "Chevrolet",
    logo: require("@/assets/images/logos/chevrolet.jpg"),
  },
  {
    id: "ford",
    name: "Ford",
    logo: require("@/assets/images/logos/ford.png"),
  },
  {
    id: "toyota",
    name: "Toyota",
    logo: require("@/assets/images/logos/toyota.jpg"),
  },
  {
    id: "fiat",
    name: "Fiat",
    logo: require("@/assets/images/logos/fiat.jpg"),
  },
];

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  // const { toggleFavorito, isFavorito } = useFavoritos();

  const searchResults = searchText.trim()
    ? REPUESTOS.filter((r) => {
        const query = searchText.toLowerCase();
        return (
          r.nombre.toLowerCase().includes(query) ||
          r.categoriaNombre.toLowerCase().includes(query) ||
          r.descripcion.toLowerCase().includes(query) ||
          (r.marcaAuto && r.marcaAuto.toLowerCase().includes(query)) ||
          (r.marcaRepuesto && r.marcaRepuesto.toLowerCase().includes(query)) ||
          (r.aplicacion && r.aplicacion.toLowerCase().includes(query))
        );
      })
    : [];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <TopHeader />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <ThemedText style={styles.subtitle}>
          Encontrá repuestos para estas y más marcas líderes:
        </ThemedText>

        <View style={styles.brandGrid}>
          {BRANDS.map((brand) => (
            <Link
              key={brand.id}
              href="/(tabs)/catalogo"
              asChild
            >
              <TouchableOpacity style={styles.brandCard} activeOpacity={0.7}>
                <Image
                  source={brand.logo}
                  style={styles.brandLogo}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        {/* Buscador oculto temporalmente */}
        {/* <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Buscá repuestos por nombre, marca o modelo..."
          onClear={() => setSearchText("")}
        /> */}

        {searchText.trim().length > 0 ? (
          <View style={styles.searchResultsContainer}>
            <ThemedText type="subtitle" style={styles.searchResultsTitle}>
              Resultados de Búsqueda ({searchResults.length}):
            </ThemedText>
            {searchResults.length > 0 ? (
              searchResults.map((item) => (
                /* RepuestoCard oculto temporalmente */
                // <RepuestoCard
                //   key={item.id}
                //   repuesto={item}
                //   isFavorito={isFavorito(item.id)}
                //   onToggleFavorito={toggleFavorito}
                // />
                <Text key={item.id}>- {item.nombre}</Text>
              ))
            ) : (
              <ThemedView style={styles.emptySearchCard}>
                <ThemedText type="subtitle">
                  {`No se encontraron repuestos para "${searchText}"`}
                </ThemedText>
                <ThemedText style={styles.emptySearchSub}>
                  Intenta buscar por otra palabra clave como "distribucion", "frenos", "filtros" o por marca.
                </ThemedText>
              </ThemedView>
            )}
          </View>
        ) : (
          <ThemedView style={styles.actionCard}>
            <View style={styles.actionHeader}>
              <Ionicons name="book-outline" size={24} color="#d32f2f" style={{ marginRight: 8 }} />
              <ThemedText type="subtitle" style={styles.actionTitle}>
                Catálogo de Repuestos
              </ThemedText>
            </View>
            <ThemedText style={styles.actionText}>
              Explorá nuestras secciones completas de Motor, Suspensión, Frenos y Carrocería con precios y disponibilidad en stock.
            </ThemedText>
            <Link href="/(tabs)/catalogo" asChild>
              <Pressable style={styles.actionButton}>
                <ThemedText style={styles.actionButtonText}>
                  Ver Catálogo Completo →
                </ThemedText>
              </Pressable>
            </Link>
          </ThemedView>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f7f9",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    color: "#222222",
    lineHeight: 24,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  brandGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
    marginBottom: 24,
  },
  brandCard: {
    width: "30%",
    height: 90,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  brandLogo: {
    width: 60,
    height: 50,
  },
  searchResultsContainer: {
    width: "100%",
    marginTop: 10,
  },
  searchResultsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 12,
  },
  emptySearchCard: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginTop: 6,
  },
  emptySearchSub: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginTop: 8,
  },
  actionCard: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 18,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  actionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 18,
    color: "#111111",
  },
  actionText: {
    fontSize: 14,
    color: "#555555",
    lineHeight: 20,
    marginBottom: 14,
  },
  actionButton: {
    backgroundColor: "#d32f2f",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  actionButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15,
  },
});