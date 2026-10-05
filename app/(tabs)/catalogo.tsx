import { Link } from "expo-router";
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
import { REPUESTOS, SECCIONES } from "@/constants/data";

export default function CatalogoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.headerContainer}>
        <ThemedText type="title" style={styles.header}>
          Catálogo <ThemedText style={styles.brand}>Daitona</ThemedText>
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Selecciona una sección para explorar los repuestos disponibles:
        </ThemedText>
      </ThemedView>

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
                  <Image
                    source={{ uri: seccion.imagen }}
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
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    marginBottom: 4,
  },
  brand: {
    color: "#c00",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 15,
    opacity: 0.8,
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
});
