import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

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
            <FontAwesome name={button.icon} size={24} color={button.color} style={styles.socialIcon} />
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
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: 220,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  logoImage: {
    borderRadius: 40,
  },
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
  logoTextOtaku: {
    fontSize: 42,
  },
  logoTextChallenge: {
    fontSize: 36,
    letterSpacing: 2,
    marginTop: -5,
  },
  authContainer: {
    width: '100%',
    alignItems: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: '90%',
    marginBottom: 15,
  },
  socialIcon: {
    width: 25,
    textAlign: 'center',
    marginRight: 15,
  },
  socialButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  dividerText: {
    color: 'rgba(255, 255, 255, 0.6)',
    marginHorizontal: 15,
    fontSize: 14,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  bottomButton: {
    backgroundColor: '#4A4E69',
    borderRadius: 12,
    paddingVertical: 16,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignInScreen;
