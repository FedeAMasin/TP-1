import { Link, Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { REPUESTOS } from "@/constants/data";

const OPCIONES_LADO = [
  { id: "izquierdo", label: "👈 Lado Izquierdo (Conductor)" },
  { id: "derecho", label: "👉 Lado Derecho (Acompañante)" },
  { id: "ambos", label: "🚘 Ambos Lados (Juego Par)" },
];

export default function RepuestoDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const repuesto = REPUESTOS.find((r) => r.id === id);

  const [ladoSeleccionado, setLadoSeleccionado] = useState<string>(
    "👈 Lado Izquierdo (Conductor)"
  );

  if (!repuesto) {
    return (
      <ThemedView style={styles.errorContainer}>
        <ThemedText type="subtitle">Repuesto no encontrado</ThemedText>
        <Link href="/(tabs)/catalogo" asChild style={styles.errorLink}>
          <Pressable style={styles.button}>
            <ThemedText style={styles.buttonText}>Volver al Catálogo</ThemedText>
          </Pressable>
        </Link>
      </ThemedView>
    );
  }

  const handleContactWhatsApp = () => {
    let mensaje = `Hola Daitona Repuestos, quisiera consultar sobre el producto: ${repuesto.nombre}`;

    if (repuesto.requiereLado) {
      mensaje += ` [Selección de Lado: ${ladoSeleccionado}]`;
    }

    mensaje += ` (Cod: #${repuesto.id})`;

    const url = `https://wa.me/5491112345678?text=${encodeURIComponent(mensaje)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert(
            "Consulta de Repuesto",
            `Contacto para ${repuesto.nombre}:\n${
              repuesto.requiereLado ? `Lado: ${ladoSeleccionado}\n` : ""
            }\nTeléfono: 011-4567-8900\nWhatsApp: +54 9 11 1234-5678`
          );
        }
      })
      .catch(() => {
        Alert.alert(
          "Consulta de Repuesto",
          `Contacto para ${repuesto.nombre}:\n${
            repuesto.requiereLado ? `Lado: ${ladoSeleccionado}\n` : ""
          }\nTeléfono: 011-4567-8900\nWhatsApp: +54 9 11 1234-5678`
        );
      });
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: repuesto.nombre,
          headerBackTitle: "Volver",
          headerTintColor: "#c00",
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageCard}>
          <Image
            source={{ uri: repuesto.imagen }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.categoryBadge}>
            <ThemedText style={styles.categoryText}>
              {repuesto.categoriaNombre}
            </ThemedText>
          </View>
        </View>

        <ThemedView style={styles.detailsCard}>
          <ThemedText type="title" style={styles.title}>
            {repuesto.nombre}
          </ThemedText>

          <ThemedText style={styles.codeText}>
            Código de Repuesto: #{repuesto.id}
          </ThemedText>

          <ThemedText style={styles.price}>
            $ {repuesto.precio.toLocaleString("es-AR")}
          </ThemedText>

          {/* Selección de Lado si aplica */}
          {repuesto.requiereLado && (
            <View style={styles.sideSelectionContainer}>
              <ThemedText type="subtitle" style={styles.sideTitle}>
                Seleccionar Lado:
              </ThemedText>
              <View style={styles.sideButtonsRow}>
                {OPCIONES_LADO.map((opcion) => {
                  const isSelected = ladoSeleccionado === opcion.label;
                  return (
                    <Pressable
                      key={opcion.id}
                      style={[
                        styles.sideChip,
                        isSelected && styles.sideChipSelected,
                      ]}
                      onPress={() => setLadoSeleccionado(opcion.label)}
                    >
                      <ThemedText
                        style={[
                          styles.sideChipText,
                          isSelected && styles.sideChipTextSelected,
                        ]}
                      >
                        {opcion.label}
                      </ThemedText>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          )}

          <View style={styles.divider} />

          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Descripción
          </ThemedText>
          <ThemedText style={styles.description}>
            {repuesto.descripcion}
          </ThemedText>

          <View style={styles.divider} />

          <Pressable
            style={({ pressed }) => [
              styles.contactButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleContactWhatsApp}
          >
            <ThemedText style={styles.contactButtonText}>
              Consultar Disponibilidad por WhatsApp
            </ThemedText>
          </Pressable>
        </ThemedView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  errorContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  errorLink: {
    marginTop: 16,
  },
  imageCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    position: "relative",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 250,
  },
  categoryBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#c00",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  categoryText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  detailsCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 18,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  codeText: {
    fontSize: 13,
    color: "#888888",
    marginBottom: 12,
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#c00",
    marginBottom: 12,
  },
  sideSelectionContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  sideTitle: {
    fontSize: 16,
    color: "#1a1a1a",
    marginBottom: 8,
  },
  sideButtonsRow: {
    gap: 8,
  },
  sideChip: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  sideChipSelected: {
    backgroundColor: "#c00",
    borderColor: "#c00",
  },
  sideChipText: {
    fontSize: 14,
    color: "#333333",
    fontWeight: "500",
  },
  sideChipTextSelected: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#eeeeee",
    marginVertical: 14,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#1a1a1a",
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: "#444444",
    lineHeight: 22,
  },
  contactButton: {
    backgroundColor: "#25D366", // WhatsApp Green
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  contactButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#c00",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
