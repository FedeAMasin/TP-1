import { Link } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppImage } from "@/components/AppImage";
import { RepuestoCard } from "@/components/RepuestoCard";
import { SearchBar } from "@/components/SearchBar";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TopHeader } from "@/components/TopHeader";
import { REPUESTOS, SECCIONES } from "@/constants/data";
import { useFavoritos } from "@/hooks/useFavoritos";

export default function CatalogoScreen() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { toggleFavorito, isFavorito } = useFavoritos();

  // Filtrado dinámico por búsqueda
  const repuestosFiltrados = searchQuery.trim()
    ? REPUESTOS.filter(
        (r) =>
          r.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.categoriaNombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      {/* Sticky Header Bar with Hamburger Menu & DAYTONA Logo */}
      <TopHeader />

      <View style={styles.container}>
        {/* Barra de búsqueda en tiempo real */}
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Buscar repuesto por nombre o categoría..."
          onClear={() => setSearchQuery("")}
        />

        {/* Modo Búsqueda Activa */}
        {searchQuery.trim().length > 0 ? (
          <FlatList
            data={repuestosFiltrados}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <RepuestoCard
                repuesto={item}
                isFavorito={isFavorito(item.id)}
                onToggleFavorito={toggleFavorito}
              />
            )}
            ListEmptyComponent={
              <ThemedView style={styles.emptySearch}>
                <ThemedText type="subtitle">
                  {`No se encontraron repuestos para "${searchQuery}"`}
                </ThemedText>
                <ThemedText style={styles.emptySub}>
                  Intenta buscar con otra palabra clave o explora las categorías.
                </ThemedText>
              </ThemedView>
            }
          />
        ) : (
          /* Modo Lista de Secciones */
          <ScrollView contentContainerStyle={styles.sectionsContent}>
            {SECCIONES.map((seccion) => {
              const cantidad = REPUESTOS.filter(
                (r) => r.categoriaId === seccion.id
              ).length;

              return (
                <ThemedView key={seccion.id} style={styles.card}>
                  <Link
                    href={{ pathname: "/parts/[id]", params: { id: seccion.id } }}
                    asChild
                  >
                    <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
                      <View style={styles.imageContainer}>
                        <AppImage
                          uri={seccion.imagen}
                          style={styles.image}
                          resizeMode="cover"
                        />
                        <View style={styles.badgeContainer}>
                          <ThemedText style={styles.badgeText}>
                            {cantidad} {cantidad === 1 ? "repuesto" : "repuestos"}
                          </ThemedText>
                        </View>
                      </View>

                      <View style={styles.cardContent}>
                        <ThemedText type="subtitle" style={styles.cardTitle}>
                          {seccion.titulo}
                        </ThemedText>
                        <ThemedText style={styles.cardDescription}>
                          {seccion.descripcion}
                        </ThemedText>
                        <View style={styles.actionRow}>
                          <ThemedText type="defaultSemiBold" style={styles.linkText}>
                            Ver repuestos →
                          </ThemedText>
                        </View>
                      </View>
                    </Pressable>
                  </Link>
                </ThemedView>
              );
            })}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
  },
  listContent: {
    paddingBottom: 32,
  },
  sectionsContent: {
    paddingBottom: 32,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.85,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 160,
  },
  badgeContainer: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  cardContent: {
    padding: 14,
  },
  cardTitle: {
    fontSize: 20,
    color: "#1a1a1a",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555555",
    lineHeight: 20,
    marginBottom: 10,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  linkText: {
    color: "#c00",
    fontSize: 15,
  },
  emptySearch: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginTop: 12,
  },
  emptySub: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
  },
});
