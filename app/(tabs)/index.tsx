import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import { ThemedText } from "@/components/themed-text";

const BRANDS = [
  {
    id: "vw",
    name: "Volkswagen",
    logo: require("@/assets/images/logos/vw.png"),
  },
  {
    id: "renault",
    name: "Renault",
    logo: require("@/assets/images/logos/renault.png"),
  },
  {
    id: "chevrolet",
    name: "Chevrolet",
    logo: require("@/assets/images/logos/chevrolet.jpg"),
  },
  {
    id: "ford",
    name: "Ford",
    logo: require("@/assets/images/logos/ford.png"),
  },
  {
    id: "toyota",
    name: "Toyota",
    logo: require("@/assets/images/logos/toyota.jpg"),
  },
  {
    id: "fiat",
    name: "Fiat",
    logo: require("@/assets/images/logos/fiat.jpg"),
  },
];

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.flagRow}>
            <MaterialCommunityIcons name="flag-checkered" size={32} color="#111" />
            <MaterialCommunityIcons name="flag-checkered" size={32} color="#c00" />
          </View>
          <View style={styles.brandTitleRow}>
            <ThemedText style={styles.daytonaTextRed}>DAY</ThemedText>
            <ThemedText style={styles.daytonaTextBlack}>TONA</ThemedText>
          </View>
          <View style={styles.logoCurvedLine} />
        </View>

        {/* Subtitle */}
        <ThemedText style={styles.subtitle}>
          Encontrá repuestos para estas y más marcas líderes:
        </ThemedText>

        {/* Brand Grid */}
        <View style={styles.brandGrid}>
          {BRANDS.map((brand) => (
            <TouchableOpacity key={brand.id} style={styles.brandCard} activeOpacity={0.7}>
              <Image
                source={brand.logo}
                style={styles.brandLogo}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={22} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscá por modelo, año o número de pieza..."
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
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
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  flagRow: {
    flexDirection: "row",
    gap: 4,
    marginBottom: -6,
  },
  brandTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  daytonaTextRed: {
    fontSize: 40,
    fontWeight: "900",
    color: "#d32f2f",
    letterSpacing: 2,
    fontStyle: "italic",
  },
  daytonaTextBlack: {
    fontSize: 40,
    fontWeight: "900",
    color: "#111111",
    letterSpacing: 2,
    fontStyle: "italic",
  },
  logoCurvedLine: {
    width: 200,
    height: 4,
    backgroundColor: "#d32f2f",
    borderRadius: 2,
    marginTop: 2,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#222",
    lineHeight: 26,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  brandGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
    marginBottom: 28,
  },
  brandCard: {
    width: "30%",
    height: 95,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  brandLogo: {
    width: "100%",
    height: "100%",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    paddingHorizontal: 14,
    paddingVertical: 12,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#222",
  },
});
