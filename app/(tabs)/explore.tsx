import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Explorar</ThemedText>
      <ThemedText style={styles.subtitle}>
        Catálogo y categorías de repuestos.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
  },
  subtitle: {
    marginTop: 8,
    opacity: 0.7,
  },
});
