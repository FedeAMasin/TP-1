import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TopHeader } from "@/components/TopHeader";

export default function ContactoScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      {/* Sticky Top Header Bar */}
      <TopHeader />

      <ScrollView contentContainerStyle={styles.container}>
        <ThemedView style={styles.card}>
          <ThemedText type="title" style={styles.title}>
            Contacto
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Comunícate con la casa de repuestos Daytona.
          </ThemedText>

          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={22} color="#d32f2f" style={styles.icon} />
            <ThemedText style={styles.infoText}>+54 11 4444-5555</ThemedText>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={22} color="#d32f2f" style={styles.icon} />
            <ThemedText style={styles.infoText}>Av. Rivadavia 12345, Buenos Aires</ThemedText>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={22} color="#d32f2f" style={styles.icon} />
            <ThemedText style={styles.infoText}>ventas@daytonarepuestos.com</ThemedText>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="time-outline" size={22} color="#d32f2f" style={styles.icon} />
            <ThemedText style={styles.infoText}>Lun a Vie: 08:30 - 18:30 hs</ThemedText>
          </View>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
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
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: "#eeeeee",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#666666",
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    marginRight: 14,
  },
  infoText: {
    fontSize: 15,
    color: "#222222",
    fontWeight: "500",
  },
});
