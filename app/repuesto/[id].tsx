import { Link, Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TopHeader } from "@/components/TopHeader";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { REPUESTOS } from "@/constants/data";

// Componentes desactivados temporalmente porque no están en GitHub:
// import { useFavoritos } from "@/hooks/useFavoritos";
// import { AppImage } from "@/components/AppImage";

const OPCIONES_LADO = [
  { id: "izquierdo", label: "👈 Lado Izquierdo (Conductor)" },
  { id: "derecho", label: "👉 Lado Derecho (Acompañante)" },
  { id: "ambos", label: "🚘 Ambos Lados (Juego Par)" },
];

export default function RepuestoDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  // const { isFavorito, toggleFavorito } = useFavoritos();

  const repuesto = REPUESTOS.find((r) => r.id === id);

  const [ladoSeleccionado, setLadoSeleccionado] = useState<string>(
    "👈 Lado Izquierdo (Conductor)"
  );

  if (!repuesto) {
    return (
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <TopHeader showBackButton={true} />
        <ThemedView style={styles.errorContainer}>
          <ThemedText type="subtitle">Repuesto no encontrado</ThemedText>
          <Link href="/(tabs)/catalogo" asChild style={styles.errorLink}>
            <Pressable style={styles.button}>
              <ThemedText style={styles.buttonText}>Volver al Catálogo</ThemedText>
            </Pressable>
          </Link>
        </ThemedView>
      </SafeAreaView>
    );
  }

  // Desactivado temporalmente
  // const favoritoActivo = isFavorito(repuesto.id);
  const favoritoActivo = false;

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
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <TopHeader showBackButton={true} />

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

            <Pressable style={styles.favBtn}>
              <IconSymbol
                size={24}
                name={favoritoActivo ? "star.fill" : "star"}
                color={favoritoActivo ? "#FFD700" : "#ffffff"}
              />
            </Pressable>
          </View>

          <ThemedView style={styles.detailsCard}>
            <ThemedText type="title" style={styles.title}>
              {repuesto.nombre}
            </ThemedText>

            <ThemedText style={styles.price}>
              $ {repuesto.precio.toLocaleString("es-AR")}
            </ThemedText>

            <ThemedText style={styles.sectionHeader}>Descripción</ThemedText>
            <ThemedText style={styles.description}>
              {repuesto.descripcion}
            </ThemedText>

            {repuesto.requiereLado && (
              <View style={styles.ladoSection}>
                <ThemedText style={styles.sectionHeader}>
                  Selección de Lado Requerida ⚙️
                </ThemedText>
                <ThemedText style={styles.ladoNotice}>
                  Este repuesto depende del lado del vehículo. Por favor indica qué lado necesitas:
                </ThemedText>

                {OPCIONES_LADO.map((opcion) => {
                  const isSelected = ladoSeleccionado === opcion.label;
                  return (
                    <Pressable
                      key={opcion.id}
                      style={[
                        styles.radioOption,
                        isSelected && styles.radioOptionSelected,
                      ]}
                      onPress={() => setLadoSeleccionado(opcion.label)}
                    >
                      <View
                        style={[
                          styles.radioCircle,
                          isSelected && styles.radioCircleSelected,
                        ]}
                      />
                      <ThemedText
                        style={[
                          styles.radioText,
                          isSelected && styles.radioTextSelected,
                        ]}
                      >
                        {opcion.label}
                      </ThemedText>
                    </Pressable>
                  );
                })}
              </View>
            )}

            <Pressable style={styles.buyBtn} onPress={handleContactWhatsApp}>
              <ThemedText style={styles.buyBtnText}>
                📲 Consultar por WhatsApp
              </ThemedText>
            </Pressable>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f7f9",
  },
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorLink: {
    marginTop: 16,
  },
  imageCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 16,
    position: "relative",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 250,
  },
  categoryBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
  },
  categoryText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  favBtn: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 8,
    borderRadius: 20,
  },
  detailsCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 18,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 8,
  },
  price: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#c00",
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#555555",
    lineHeight: 22,
    marginBottom: 20,
  },
  ladoSection: {
    backgroundColor: "#fff8f8",
    borderColor: "#ffcccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
  },
  ladoNotice: {
    fontSize: 13,
    color: "#666666",
    marginBottom: 12,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#ffffff",
    marginBottom: 8,
  },
  radioOptionSelected: {
    borderColor: "#c00",
    backgroundColor: "#fff0f0",
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#888888",
    marginRight: 10,
  },
  radioCircleSelected: {
    borderColor: "#c00",
    backgroundColor: "#c00",
  },
  radioText: {
    fontSize: 14,
    color: "#333333",
  },
  radioTextSelected: {
    fontWeight: "bold",
    color: "#c00",
  },
  buyBtn: {
    backgroundColor: "#25D366",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buyBtnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#c00",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});