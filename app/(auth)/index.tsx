import type React from "react"
import { View, StatusBar } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { router } from "expo-router"
import { OtakuChallengeLogo } from "@/components/common/OtakuChallengeLogo"
import { SocialButton } from "@/components/common/SocialButton"
import { Button } from "@/components/common/Button"
import { Divider } from "@/components/common/Divider"
import { colors } from "@/theme/colors"
import { signInStyles } from "@/styles/signInStyles"
import { useAuthStore } from "@/stores/authStore"

const socialProviders: Array<"google" | "facebook" | "apple"> = ["google", "facebook", "apple"]

const SignInScreen: React.FC = () => {
  const { login } = useAuthStore()
  const insets = useSafeAreaInsets()

  const handleSignUpPress = () => {
    router.push("/(auth)/sign-up")
  }

  const handleSocialLogin = (provider: "google" | "facebook" | "apple") => {
    const userData = {
      id: `${provider}_${Date.now()}`,
      username: "MatutanoPoderoso",
      avatar: "https://i.imgur.com/oW1dGDI.jpeg",
      stats: {
        global: 50000,
        local: 34,
        score: 1020000,
      },
      progress: {
        rank: 1,
        progress: 100,
        maxProgress: 400,
      },
      settings: {
        language: "en",
        notifications: true,
        bgmVolume: 60,
        sfxVolume: 70,
        voiceVolume: 50,
        socialConnections: {
          google: provider === "google",
          facebook: provider === "facebook",
          apple: provider === "apple",
        },
      },
    }

    login(userData)
    router.push("/(tabs)")
  }

  const handleGuestLogin = () => {
    const guestData = {
      id: `guest_${Date.now()}`,
      username: "Guest User",
      avatar: "https://i.imgur.com/oW1dGDI.jpeg",
      stats: {
        global: 0,
        local: 0,
        score: 0,
      },
      progress: {
        rank: 0,
        progress: 0,
        maxProgress: 100,
      },
      settings: {
        language: "en",
        notifications: false,
        bgmVolume: 50,
        sfxVolume: 50,
        voiceVolume: 50,
        socialConnections: {
          google: false,
          facebook: false,
          apple: false,
        },
      },
    }

    login(guestData)
    router.push("/(tabs)")
  }

  return (
    <LinearGradient colors={[colors.primary, colors.primaryDark]} style={signInStyles.container}>
      <StatusBar barStyle="light-content" />

      <View style={[signInStyles.logoContainer, { paddingTop: insets.top }]}>
        <OtakuChallengeLogo size="large" />
      </View>

      <View style={signInStyles.authContainer}>
        {socialProviders.map((provider) => (
          <SocialButton key={provider} provider={provider} onPress={() => handleSocialLogin(provider)} />
        ))}
      </View>

      <Divider />

      <View style={signInStyles.bottomButtonsContainer}>
        <Button title="Continue as a guest" onPress={handleGuestLogin} variant="secondary" style={{ width: "48%" }} />
        <Button title="Sign Up" onPress={handleSignUpPress} variant="primary" style={{ width: "48%" }} />
      </View>
    </LinearGradient>
  )
}

export default SignInScreen
