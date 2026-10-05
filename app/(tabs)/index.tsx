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
import { SECCIONES } from "@/constants/data";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.heroCard}>
        <ThemedText type="title" style={styles.header}>
          Repuestos <ThemedText style={styles.brand}>Daitona</ThemedText>
        </ThemedText>
        <ThemedText style={styles.heroSub}>
          Tu canal directo para consultar catálogo, precios y repuestos de todas las marcas.
        </ThemedText>
      </ThemedView>

      <ThemedText type="subtitle" style={styles.sectionHeading}>
        Secciones Destacadas
      </ThemedText>

      <View style={styles.grid}>
        {SECCIONES.map((seccion) => (
          <Link
            key={seccion.id}
            href={{ pathname: "/parts/[id]", params: { id: seccion.id } }}
            asChild
          >
            <Pressable style={({ pressed }) => [styles.gridItem, pressed && styles.pressed]}>
              <Image source={{ uri: seccion.imagen }} style={styles.gridImage} />
              <View style={styles.gridOverlay}>
                <ThemedText style={styles.gridTitle}>{seccion.titulo}</ThemedText>
              </View>
            </Pressable>
          </Link>
        ))}
      </View>

      <ThemedView style={styles.infoCard}>
        <ThemedText type="subtitle" style={styles.infoTitle}>
          ¿Necesitas asesoramiento?
        </ThemedText>
        <ThemedText style={styles.infoText}>
          Consulta precios y disponibilidad en tiempo real explorando nuestro catálogo o comunicándote con nuestro equipo.
        </ThemedText>
        <Link href="/(tabs)/contacto" asChild>
          <Pressable style={styles.contactBtn}>
            <ThemedText style={styles.contactBtnText}>Contactar Tienda</ThemedText>
          </Pressable>
        </Link>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  heroCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    color: "#ffffff",
    marginBottom: 8,
  },
  brand: {
    color: "#c00",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 32,
  },
  heroSub: {
    color: "#cccccc",
    fontSize: 15,
    lineHeight: 22,
  },
  sectionHeading: {
    fontSize: 20,
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  gridItem: {
    width: "48%",
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 12,
    position: "relative",
    backgroundColor: "#000",
  },
  pressed: {
    opacity: 0.8,
  },
  gridImage: {
    width: "100%",
    height: "100%",
    opacity: 0.75,
  },
  gridOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  gridTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  infoCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    color: "#1a1a1a",
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    color: "#555555",
    lineHeight: 20,
    marginBottom: 12,
  },
  contactBtn: {
    backgroundColor: "#c00",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  contactBtnText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
