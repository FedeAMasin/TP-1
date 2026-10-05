import { Link } from "expo-router";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

{
  /*variable que tiene las partes. por ahora se utiliza asi.*/
}
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

{
  /*funcion default que es la que devuelve la pantalla de catalogo. */
}

export default function CatalogoScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
    paddingBottom: 32,
    // justifyContent: "center",
    //alignItems: "center",
  },
  text: {
    marginTop: 8,
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
