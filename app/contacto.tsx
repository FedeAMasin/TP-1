import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ContactoScreen() {
  // Funciones para abrir aplicaciones nativas
  const openWhatsApp = () => Linking.openURL('https://wa.me/5493515551234');
  const openMaps = () => Linking.openURL('https://maps.google.com/?q=Av.+Fuerza+Aerea+Argentina+2500,+Cordoba');
  const openEmail = () => Linking.openURL('mailto:ventas@daytonarepuestos.com.ar');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contacto Daytona</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Horarios de atención</Text>
        <Text style={styles.text}>Lunes a Viernes: 08:30 a 18:00 hs</Text>
        <Text style={styles.text}>Sábados: 09:00 a 13:00 hs</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
        <Text style={styles.buttonText}>📲 Chatear por WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={openMaps}>
        <Text style={styles.buttonTextSecondary}>📍 Ver en Google Maps</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={openEmail}>
        <Text style={styles.buttonTextSecondary}>✉️ Enviar Correo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#CC0000', // Rojo similar al de la imagen del Home
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  button: {
    backgroundColor: '#25D366', // Color WhatsApp
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#f1f3f5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  buttonTextSecondary: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  }
});