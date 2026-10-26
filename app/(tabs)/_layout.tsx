import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Inicio" }} />
      <Tabs.Screen name="catalogo" options={{ title: "Catálogo" }} />
      <Tabs.Screen name="favoritos" options={{ title: "Favoritos" }} />
      <Tabs.Screen name="contacto" options={{ title: "Contacto" }} />
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
