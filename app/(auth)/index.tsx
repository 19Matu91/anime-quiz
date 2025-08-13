import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, StatusBar, Dimensions, Platform, PixelRatio } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

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

// --- Configuración para Botones ---
const socialButtons = [
  { name: 'Google', icon: 'google', color: '#DB4437' },
  { name: 'Facebook', icon: 'facebook-square', color: '#4267B2' },
  { name: 'Apple', icon: 'apple', color: '#FFF' },
];

// --- Componente Principal ---
const SignInScreen = ({ }) => {
  // Función para manejar la navegación a la pantalla de registro
  const handleSignUpPress = () => {
    // Asegúrate de que el nombre de la ruta coincida con el de tu Stack.Screen
    router.push('/(auth)/sign-up')
  };

  const goToHome = () => router.push('/(tabs)')

  return (
    <LinearGradient
      colors={['#2E3144', '#1A1C29']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      {/* --- Logo --- */}
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

      {/* --- Social Login Buttons --- */}
      <View style={styles.authContainer}>
        {socialButtons.map((button) => (
          <TouchableOpacity key={button.name} style={styles.socialButton} onPress={goToHome}>
            <FontAwesome name={button.icon} size={normalize(24)} color={button.color} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Continue with {button.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* --- Divider --- */}
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* --- Contenedor para los dos botones inferiores --- */}
      <View style={styles.bottomButtonsContainer}>
        {/* --- Botón de Invitado --- */}
        <TouchableOpacity style={styles.bottomButton} onPress={goToHome}>
          <Text style={styles.bottomButtonText}>Continue as a guest</Text>
        </TouchableOpacity>

        {/* --- Botón de Sign Up --- */}
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={handleSignUpPress} // <-- Aquí se habilita la navegación
        >
          <Text style={styles.bottomButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },
  logoContainer: {
    width: normalize(220),
    height: normalize(220),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(50),
  },
  logoImage: {
    borderRadius: normalize(40),
  },
  logoOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: normalize(40),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: normalize(2), height: normalize(2) },
    textShadowRadius: normalize(5),
  },
  logoTextOtaku: {
    fontSize: normalize(42),
  },
  logoTextChallenge: {
    fontSize: normalize(36),
    letterSpacing: normalize(2),
    marginTop: normalize(-5),
  },
  authContainer: {
    width: '100%',
    alignItems: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: normalize(1),
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: normalize(12),
    paddingVertical: normalize(14),
    paddingHorizontal: normalize(20),
    width: '90%',
    marginBottom: normalize(15),
  },
  socialIcon: {
    width: normalize(25),
    textAlign: 'center',
    marginRight: normalize(15),
  },
  socialButtonText: {
    color: '#FFFFFF',
    fontSize: normalize(16),
    fontWeight: '500',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: normalize(20),
  },
  dividerLine: {
    flex: 1,
    height: normalize(1),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  dividerText: {
    color: 'rgba(255, 255, 255, 0.6)',
    marginHorizontal: normalize(15),
    fontSize: normalize(14),
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  bottomButton: {
    backgroundColor: '#4A4E69',
    borderRadius: normalize(12),
    paddingVertical: normalize(16),
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: normalize(15),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignInScreen;
