import { Image } from "expo-image";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import { Alert } from "react-native";

const parts = [
  {
    id: "motor",
    title: "Motor",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Car_engine_01.jpg",
    },
    description: "Partes del motor: pistones, bielas, árbol de levas y más.",
  },
  {
    id: "suspension",
    title: "Suspensión",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/3/31/Shock_absorber.png",
    },
    description: "Amortiguadores y componentes de la suspensión.",
  },
  {
    id: "frenos",
    title: "Frenos",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/7/72/Disk_brake_dsc03682.jpg",
    },
    description: "Discos, pastillas y líneas de freno para seguridad.",
  },
  {
    id: "carroceria",
    title: "Carrocería",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/7/72/Toyota_Corolla_Hatchback_Hybrid_%28front%29.jpg",
    },
    description: "Paneles, pintura, paragolpes y partes exteriores.",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Repuestos <ThemedText style={styles.brand}>Daitona</ThemedText>
      </ThemedText>

      {parts.map((p) => (
        <ThemedView key={p.id} style={styles.card}>
          <TouchableOpacity onPress={() => Alert.alert(p.title, p.description)}>
            <Image source={p.image} style={styles.image} />
          </TouchableOpacity>
          <ThemedView style={styles.cardContent}>
            <ThemedText type="subtitle">{p.title}</ThemedText>
            <ThemedText>{p.description}</ThemedText>
            <Link
              href={{ pathname: "/parts/[id]", params: { id: p.id } }}
              style={styles.link}
            >
              <ThemedText type="defaultSemiBold">Ver detalles</ThemedText>
            </Link>
          </ThemedView>
        </ThemedView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 28,
    marginBottom: 12,
  },
  brand: {
    color: "#c00",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 32,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 12,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: 12,
  },
  link: {
    marginTop: 8,
  },
});
