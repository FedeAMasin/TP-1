import { Link, Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import { RepuestoCard } from "@/components/RepuestoCard";
import { SearchBar } from "@/components/SearchBar";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { normalizeCategory, REPUESTOS, SECCIONES } from "@/constants/data";
import { useFavoritos } from "@/hooks/useFavoritos";

export default function SectionPartsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [filterText, setFilterText] = useState<string>("");
  const { toggleFavorito, isFavorito } = useFavoritos();

  const currentCategoryNorm = normalizeCategory(id);

  // Buscar la sección correspondiente
  const seccion = SECCIONES.find(
    (s) => normalizeCategory(s.id) === currentCategoryNorm || normalizeCategory(s.titulo) === currentCategoryNorm
  );

  // Filtrar los repuestos pertenecientes a esta sección
  let repuestosDeSeccion = REPUESTOS.filter((r) => {
    const rCatId = normalizeCategory(r.categoriaId);
    const rCatName = normalizeCategory(r.categoriaNombre);
    return rCatId === currentCategoryNorm || rCatName.includes(currentCategoryNorm) || currentCategoryNorm.includes(rCatId);
  });

  if (filterText.trim()) {
    repuestosDeSeccion = repuestosDeSeccion.filter((r) =>
      r.nombre.toLowerCase().includes(filterText.toLowerCase()) ||
      r.descripcion.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  const tituloSeccion = seccion ? seccion.titulo : (id ? id.charAt(0).toUpperCase() + id.slice(1) : "Sección");

  return (
    <>
      <Stack.Screen
        options={{
          title: `Repuestos: ${tituloSeccion}`,
          headerBackTitle: "Catálogo",
          headerTintColor: "#c00",
        }}
      />
      <View style={styles.container}>
        {/* Banner de la Sección Header Component */}
        <FlatList
          data={repuestosDeSeccion}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View>
              <ThemedView style={styles.bannerCard}>
                <ThemedText type="title" style={styles.title}>
                  {tituloSeccion}
                </ThemedText>
                {seccion?.descripcion && (
                  <ThemedText style={styles.sectionDesc}>
                    {seccion.descripcion}
                  </ThemedText>
                )}
                <View style={styles.countBadge}>
                  <ThemedText style={styles.countText}>
                    {repuestosDeSeccion.length}{" "}
                    {repuestosDeSeccion.length === 1 ? "repuesto disponible" : "repuestos disponibles"}
                  </ThemedText>
                </View>
              </ThemedView>

              <SearchBar
                value={filterText}
                onChangeText={setFilterText}
                placeholder={`Filtrar repuestos en ${tituloSeccion}...`}
                onClear={() => setFilterText("")}
              />
            </View>
          }
          renderItem={({ item }) => (
            <RepuestoCard
              repuesto={item}
              isFavorito={isFavorito(item.id)}
              onToggleFavorito={toggleFavorito}
            />
          )}
          ListEmptyComponent={
            <ThemedView style={styles.emptyContainer}>
              <ThemedText type="subtitle">
                No hay repuestos que coincidan con la búsqueda.
              </ThemedText>
              <ThemedText style={styles.emptySubtext}>
                Intenta limpiar el filtro o explorar otras secciones.
              </ThemedText>
              <Link href="/(tabs)/catalogo" asChild>
                <Pressable style={styles.backButton}>
                  <ThemedText style={styles.backButtonText}>
                    Volver al Catálogo
                  </ThemedText>
                </Pressable>
              </Link>
            </ThemedView>
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
  },
  listContent: {
    paddingBottom: 32,
  },
  bannerCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6,
  },
  sectionDesc: {
    color: "#cccccc",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  countBadge: {
    backgroundColor: "rgba(204, 0, 0, 0.25)",
    borderColor: "#c00",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  countText: {
    color: "#ff8888",
    fontSize: 13,
    fontWeight: "600",
  },
  emptyContainer: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },
  emptySubtext: {
    marginTop: 8,
    marginBottom: 16,
    textAlign: "center",
    color: "#666",
  },
  backButton: {
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
