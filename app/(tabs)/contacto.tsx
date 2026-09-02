import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ContactoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Contacto</ThemedText>
      <ThemedText style={styles.text}>Comunícate con nosotros.</ThemedText>
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
