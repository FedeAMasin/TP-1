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
<<<<<<< HEAD
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="catalogo"
        options={{
          title: "Catalogo",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="book.closed" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacto"
        options={{
          title: "Contacto",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="phone.fill" color={color} />
          ),
        }}
      />
=======
      <Tabs.Screen name="index" options={{ title: "Inicio" }} />
      <Tabs.Screen name="catalogo" options={{ title: "Catálogo" }} />
      <Tabs.Screen name="favoritos" options={{ title: "Favoritos" }} />
      <Tabs.Screen name="contacto" options={{ title: "Contacto" }} />
      <Tabs.Screen name="explore" options={{ href: null }} />
>>>>>>> 7a3b1ae94d83fc1eb251f198f2bfd4ba0ff24c72
    </Tabs>
  );
}
