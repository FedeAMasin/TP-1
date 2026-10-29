import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Importaciones de tus compañeros (sin el AppImage que rompe la app)
import { ThemedText } from "@/components/themed-text";

export default function CatalogoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Usamos el componente Image oficial de React Native en lugar de AppImage */}
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://i.imgur.com/example-motor.jpg' }} // Aquí iría la ruta a la foto real del motor
            style={styles.image} 
            resizeMode="cover" 
          />
          <View style={styles.cardContent}>
            <ThemedText style={styles.title}>Motor</ThemedText>
            <ThemedText style={styles.description}>
              Partes del motor: pistones, bielas, árbol de levas y más.
            </ThemedText>
            <ThemedText style={styles.link}>Ver detalles</ThemedText>
          </View>
        </View>

        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://i.imgur.com/example-suspension.jpg' }} 
            style={styles.image} 
            resizeMode="cover" 
          />
          <View style={styles.cardContent}>
            <ThemedText style={styles.title}>Suspensión</ThemedText>
            <ThemedText style={styles.description}>
              Amortiguadores y componentes de la suspensión.
            </ThemedText>
            <ThemedText style={styles.link}>Ver detalles</ThemedText>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  link: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  }
});