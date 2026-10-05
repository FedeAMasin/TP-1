import React from "react";
import { Alert, Linking, Pressable, ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ContactoScreen() {
  const handleWhatsApp = () => {
    const url = "https://wa.me/5491112345678?text=Hola%20Daitona%20Repuestos,%20quisiera%20hacer%20una%20consulta.";
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert("Contacto", "Teléfono: 011-4567-8900\nWhatsApp: +54 9 11 1234-5678");
        }
      })
      .catch(() => {
        Alert.alert("Contacto", "Teléfono: 011-4567-8900\nWhatsApp: +54 9 11 1234-5678");
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.card}>
        <ThemedText type="title" style={styles.title}>
          Contacto <ThemedText style={styles.brand}>Daitona</ThemedText>
        </ThemedText>

        <ThemedText style={styles.text}>
          Estamos a tu disposición para ayudarte a encontrar el repuesto exacto que necesitas.
        </ThemedText>

        <View style={styles.item}>
          <ThemedText type="defaultSemiBold">📍 Ubicación:</ThemedText>
          <ThemedText style={styles.itemText}>Av. Directorio 1234, CABA, Argentina</ThemedText>
        </View>

        <View style={styles.item}>
          <ThemedText type="defaultSemiBold">📞 Teléfono:</ThemedText>
          <ThemedText style={styles.itemText}>(011) 4567-8900</ThemedText>
        </View>

        <View style={styles.item}>
          <ThemedText type="defaultSemiBold">⏰ Horario de Atención:</ThemedText>
          <ThemedText style={styles.itemText}>Lunes a Viernes: 08:00 - 18:00 hs</ThemedText>
          <ThemedText style={styles.itemText}>Sábados: 08:30 - 13:00 hs</ThemedText>
        </View>

        <Pressable style={styles.waBtn} onPress={handleWhatsApp}>
          <ThemedText style={styles.waBtnText}>Enviar WhatsApp a la Tienda</ThemedText>
        </Pressable>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    elevation: 2,
  },
  title: {
    fontSize: 26,
    marginBottom: 8,
  },
  brand: {
    color: "#c00",
    fontSize: 26,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginBottom: 20,
  },
  item: {
    marginBottom: 14,
  },
  itemText: {
    fontSize: 15,
    color: "#333",
    marginTop: 2,
  },
  waBtn: {
    backgroundColor: "#25D366",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  waBtnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
