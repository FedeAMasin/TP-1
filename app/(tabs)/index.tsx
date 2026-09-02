import { ScrollView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Repuestos <ThemedText style={styles.brand}>Daitona</ThemedText>
      </ThemedText>
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
});
