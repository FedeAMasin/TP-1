import { Link } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TopHeader } from "@/components/TopHeader";

const parts = [
  {
    id: "motor",
    title: "Motor",
    image: require("@/assets/images/Catalogo/motor.jpg"),
    description: "Partes del motor: pistones, bielas, árbol de levas y más.",
  },
  {
    id: "suspension",
    title: "Suspensión",
    image: require("@/assets/images/Catalogo/suspensiones.jpg"),
    description: "Amortiguadores y componentes de la suspensión.",
  },
  {
    id: "frenos",
    title: "Frenos",
    image: require("@/assets/images/Catalogo/frenos.jpg"),
    description: "Discos, pastillas y líneas de freno para seguridad.",
  },
  {
    id: "carroceria",
    title: "Carrocería",
    image: require("@/assets/images/Catalogo/carroceria.jpg"),
    description: "Paneles, pintura, paragolpes y partes exteriores.",
  },
];

export default function CatalogoScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      {/* Sticky Header Bar with Hamburger Menu & DAYTONA Logo */}
      <TopHeader />

      {/* Scrollable Catalog List */}
      <ScrollView contentContainerStyle={styles.container}>
        {parts.map((p) => (
          <Link
            key={p.id}
            href={{ pathname: "/parts/[id]", params: { id: p.id } }}
            asChild
          >
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
            >
              <Image source={p.image} style={styles.image} />
              <ThemedView style={styles.cardContent}>
                <ThemedText type="subtitle">{p.title}</ThemedText>
                <ThemedText>{p.description}</ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  cardPressed: {
    opacity: 0.9,
  },
  image: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: 12,
  },
});
