import { Link, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { normalizeCategory, REPUESTOS, SECCIONES } from "@/constants/data";

export default function SectionPartsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const currentCategoryNorm = normalizeCategory(id);

  // Buscar la sección correspondiente
  const seccion = SECCIONES.find(
    (s) => normalizeCategory(s.id) === currentCategoryNorm || normalizeCategory(s.titulo) === currentCategoryNorm
  );

  // Filtrar los repuestos pertenecientes a esta sección
  const repuestosDeSeccion = REPUESTOS.filter((r) => {
    const rCatId = normalizeCategory(r.categoriaId);
    const rCatName = normalizeCategory(r.categoriaNombre);
    return rCatId === currentCategoryNorm || rCatName.includes(currentCategoryNorm) || currentCategoryNorm.includes(rCatId);
  });

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
      <ScrollView contentContainerStyle={styles.container}>
        {/* Banner de la Sección */}
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
              {repuestosDeSeccion.length === 1 ? "tarjeta de repuesto" : "tarjetas de repuestos"}
            </ThemedText>
          </View>
        </ThemedView>

        {/* Tarjetas de Repuestos */}
        {repuestosDeSeccion.length > 0 ? (
          repuestosDeSeccion.map((repuesto) => (
            <ThemedView key={repuesto.id} style={styles.partCard}>
              <View style={styles.partImageContainer}>
                <Image
                  source={{ uri: repuesto.imagen }}
                  style={styles.partImage}
                  resizeMode="cover"
                />
                <View style={styles.tagBadge}>
                  <ThemedText style={styles.tagText}>
                    {repuesto.categoriaNombre}
                  </ThemedText>
                </View>
              </View>

              <View style={styles.partInfo}>
                <ThemedText type="subtitle" style={styles.partTitle}>
                  {repuesto.nombre}
                </ThemedText>

                <View style={styles.priceRow}>
                  <ThemedText style={styles.partPrice}>
                    $ {repuesto.precio.toLocaleString("es-AR")}
                  </ThemedText>
                </View>

                <ThemedText style={styles.partDesc} numberOfLines={3}>
                  {repuesto.descripcion}
                </ThemedText>

                <Link
                  href={{
                    pathname: "/repuesto/[id]",
                    params: { id: repuesto.id },
                  }}
                  asChild
                >
                  <Pressable
                    style={({ pressed }) => [
                      styles.detailButton,
                      pressed && styles.buttonPressed,
                    ]}
                  >
                    <ThemedText style={styles.detailButtonText}>
                      Ver Detalles y Comprar →
                    </ThemedText>
                  </Pressable>
                </Link>
              </View>
            </ThemedView>
          ))
        ) : (
          <ThemedView style={styles.emptyContainer}>
            <ThemedText type="subtitle">
              No hay tarjetas de repuestos disponibles en esta categoría.
            </ThemedText>
            <ThemedText style={styles.emptySubtext}>
              Próximamente agregaremos más productos.
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  bannerCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
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
  partCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 18,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  partImageContainer: {
    backgroundColor: "#f9f9f9",
    position: "relative",
  },
  partImage: {
    width: "100%",
    height: 190,
  },
  tagBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
  },
  partInfo: {
    padding: 16,
  },
  partTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  partPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#c00",
  },
  partDesc: {
    fontSize: 14,
    color: "#555555",
    lineHeight: 20,
    marginBottom: 14,
  },
  detailButton: {
    backgroundColor: "#c00",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.85,
  },
  detailButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
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
