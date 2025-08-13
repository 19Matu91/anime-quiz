import React from 'react';
import { Tabs } from 'expo-router';
import { StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Utility para el tamaño de fuente responsive
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BASE_WIDTH = 414; // Ancho de pantalla base (ej. iPhone 11)
const DESKTOP_THRESHOLD = 768; // Umbral para considerar pantalla de escritorio/tablet
const MAX_SCALE = 1.5; // Limita el escalado para pantallas grandes

const normalize = (size) => {
  let scale = SCREEN_WIDTH / BASE_WIDTH;
  // Limita el factor de escala para evitar que los elementos sean demasiado grandes en pantallas de escritorio
  if (SCREEN_WIDTH > DESKTOP_THRESHOLD) {
    scale = Math.min(scale, MAX_SCALE);
  }
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Ocultar los títulos de las pestañas
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#FFFFFF', // Un color blanco para el ícono activo como en el wireframe
        tabBarInactiveTintColor: '#8D919C', // Un gris oscuro para los íconos inactivos
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={normalize(45)} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ color }) => (
            <Ionicons name="trophy-outline" size={normalize(45)} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: 'Achievements',
          tabBarIcon: ({ color }) => (
            <Ionicons name="star-outline" size={normalize(45)} color={color} /> // Icono de estrella como en el wireframe
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={normalize(45)} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

// Estilos
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#2E3144', // Un color de fondo sólido
    borderTopWidth: 0,
    elevation: 0,
    height: normalize(80),
    flexDirection: 'row', // Organiza los hijos en una fila
    justifyContent: 'space-around', // Distribuye los íconos uniformemente
    alignItems: 'center', // Centra los íconos verticalmente
  },
});
