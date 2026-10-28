import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { ThemedText } from "@/components/themed-text";

interface TopHeaderProps {
  showBackButton?: boolean;
}

export function TopHeader({ showBackButton = false }: TopHeaderProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (path: string) => {
    setMenuOpen(false);
    router.push(path as any);
  };

  return (
    <>
      <View style={styles.stickyHeader}>
        {/* Left Actions: Back Button (optional) + Hamburger Button */}
        <View style={styles.leftActions}>
          {showBackButton && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.back()}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back" size={24} color="#111111" />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setMenuOpen(true)}
            activeOpacity={0.7}
          >
            <Ionicons name="menu-outline" size={26} color="#111111" />
          </TouchableOpacity>
        </View>

        {/* Right: DAYTONA Logo */}
        <View style={styles.headerLogoContainer}>
          <View style={styles.headerFlagRow}>
            <MaterialCommunityIcons name="flag-checkered" size={14} color="#111" />
            <MaterialCommunityIcons name="flag-checkered" size={14} color="#d32f2f" />
          </View>
          <View style={styles.headerBrandRow}>
            <ThemedText style={styles.daytonaTextRed}>DAY</ThemedText>
            <ThemedText style={styles.daytonaTextBlack}>TONA</ThemedText>
          </View>
          <View style={styles.logoCurvedLine} />
        </View>
      </View>

      {/* Hamburger Navigation Modal Menu */}
      <Modal
        visible={menuOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMenuOpen(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setMenuOpen(false)}>
          <View style={styles.menuContainer}>
            <View style={styles.menuHeader}>
              <ThemedText style={styles.menuTitle}>Menú de Navegación</ThemedText>
              <TouchableOpacity onPress={() => setMenuOpen(false)}>
                <Ionicons name="close-outline" size={26} color="#111" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo("/(tabs)")}
            >
              <Ionicons name="home-outline" size={22} color="#d32f2f" style={styles.menuIcon} />
              <ThemedText style={styles.menuItemText}>Home</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo("/(tabs)/catalogo")}
            >
              <Ionicons name="book-outline" size={22} color="#d32f2f" style={styles.menuIcon} />
              <ThemedText style={styles.menuItemText}>Catálogo</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo("/(tabs)/favoritos")}
            >
              <Ionicons name="star-outline" size={22} color="#d32f2f" style={styles.menuIcon} />
              <ThemedText style={styles.menuItemText}>Favoritos</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo("/(tabs)/contacto")}
            >
              <Ionicons name="call-outline" size={22} color="#d32f2f" style={styles.menuIcon} />
              <ThemedText style={styles.menuItemText}>Contacto</ThemedText>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  stickyHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    zIndex: 10,
  },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  actionButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
  },
  headerLogoContainer: {
    alignItems: "center",
  },
  headerFlagRow: {
    flexDirection: "row",
    gap: 2,
    marginBottom: -4,
  },
  headerBrandRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  daytonaTextRed: {
    fontSize: 16,
    fontWeight: "900",
    color: "#d32f2f",
    letterSpacing: 1,
    fontStyle: "italic",
  },
  daytonaTextBlack: {
    fontSize: 16,
    fontWeight: "900",
    color: "#111111",
    letterSpacing: 1,
    fontStyle: "italic",
  },
  logoCurvedLine: {
    width: 75,
    height: 2,
    backgroundColor: "#d32f2f",
    borderRadius: 1,
    marginTop: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  menuContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 18,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  menuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 12,
    marginBottom: 12,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111111",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
  },
});
