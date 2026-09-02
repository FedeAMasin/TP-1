import { useLocalSearchParams, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function PartDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <>
      <Stack.Screen options={{ title: `Detalle: ${id}` }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">Repuesto: {id}</ThemedText>
        <ThemedText style={styles.description}>
          Detalle del repuesto seleccionado.
        </ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  description: {
    marginTop: 8,
  },
});
