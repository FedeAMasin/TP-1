import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function CatalogoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Catálogo</ThemedText>
      <ThemedText style={styles.text}>Explora nuestro catálogo completo de repuestos.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 8,
  },
});
