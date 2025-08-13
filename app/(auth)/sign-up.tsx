import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  StatusBar,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Importamos Ionicons

// --- GENERACIÓN DE AVATARES ---
const totalAvatars = 60;
const avatarPlaceholder = 'https://i.imgur.com/oW1dGDI.jpeg';
const avatars = Array.from({ length: totalAvatars }, (_, i) => ({
  id: `avatar_${i + 1}`,
  uri: avatarPlaceholder,
}));

// --- Componente de Logo (sin cambios) ---
const OtakuChallengeLogo = () => (
  <ImageBackground
    source={{ uri: 'https://i.pinimg.com/736x/a7/67/63/a767630e2069b762e81882d2f1952e4f.jpg' }}
    style={styles.logoContainer}
    imageStyle={styles.logoImage}
    resizeMode="cover"
  >
    <View style={styles.logoOverlay}>
      <Text style={[styles.logoText, styles.logoTextOtaku]}>OTAKU</Text>
      <Text style={[styles.logoText, styles.logoTextChallenge]}>CHALLENGE</Text>
    </View>
  </ImageBackground>
);

// --- Componente Principal ---
const SignUpScreen = () => {
  const [username, setUsername] = useState('MatutanoPoderoso');
  const [selectedAvatarId, setSelectedAvatarId] = useState(avatars[1].id);

  // --- LÓGICA RESPONSIVA ---
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;
  const numColumns = isDesktop ? 10 : 3;

  // Función para manejar la navegación a la pantalla de inicio de sesión
  const handleSignInPress = () => {
    router.push('/(auth)');
  };

  const goToHome = () => router.push('/(tabs)');

  const renderAvatar = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.avatarWrapper,
        { width: `${100 / numColumns}%` },
      ]}
      onPress={() => setSelectedAvatarId(item.id)}
    >
      <View style={[
        styles.avatarContainer,
        selectedAvatarId === item.id && styles.avatarSelected,
      ]}>
        <Image source={{ uri: item.uri }} style={styles.avatarImage} />
        {selectedAvatarId === item.id && (
          <View style={styles.avatarOverlaySelected}>
            <Ionicons name="checkmark-circle-outline" size={40} color="#FFFFFF" style={styles.checkIcon} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#2E3144', '#1A1C29']} style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.fixedHeader}>
        <OtakuChallengeLogo />
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select username:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            placeholderTextColor="#9A9FBF"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select avatar:</Text>
        </View>
      </View>

      <FlatList
        data={avatars}
        renderItem={renderAvatar}
        keyExtractor={(item) => item.id}
        key={numColumns}
        numColumns={numColumns}
        contentContainerStyle={styles.avatarListContainer}
      />

      {/* Contenedor para los dos botones inferiores */}
      <View style={styles.bottomButtonsContainer}>
        {/* Botón de Iniciar Sesión */}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={handleSignInPress}
        >
          <Text style={styles.actionButtonText}>Sign In</Text>
        </TouchableOpacity>
        {/* Botón de Siguiente */}
        <TouchableOpacity style={styles.nextButton} onPress={goToHome}>
          <Text style={styles.actionButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  fixedHeader: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  avatarListContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexGrow: 1,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: '#1A1C29',
  },
  logoContainer: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  logoImage: { borderRadius: 40 },
  logoOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 40,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  logoTextOtaku: { fontSize: 38 },
  logoTextChallenge: { fontSize: 32, letterSpacing: 2, marginTop: -5 },
  inputGroup: { width: '100%', marginBottom: 15 },
  label: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 5,
  },
  input: {
    backgroundColor: '#4A4E69',
    borderRadius: 12,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
    width: '100%',
  },
  // Estilos para los botones inferiores
  signInButton: {
    backgroundColor: '#2E3144', // Un color más oscuro para diferenciarlo
    borderRadius: 12,
    paddingVertical: 16,
    width: '48%', // Cada botón ocupa casi la mitad del espacio
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#4A4E69',
    borderRadius: 12,
    paddingVertical: 16,
    width: '48%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Estilos de la cuadrícula de avatares
  avatarWrapper: {
    padding: 8,
  },
  avatarContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 1000,
    backgroundColor: '#4A4E69',
    borderWidth: 3,
    borderColor: 'transparent',
    overflow: 'hidden',
    transition: 'transform 0.2s, border-color 0.2s', // Transiciones suaves
  },
  avatarSelected: {
    borderColor: '#FFFFFF',
    transform: [{ scale: 1.1 }], // Agrandar el avatar seleccionado
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  avatarOverlaySelected: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 255, 0, 0.3)', // Superposición verde transparente
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default SignUpScreen;
