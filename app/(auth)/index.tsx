import type React from "react"
import { View, StatusBar } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"
import { OtakuChallengeLogo } from "@/components/common/OtakuChallengeLogo"
import { SocialButton } from "@/components/common/SocialButton"
import { Button } from "@/components/common/Button"
import { Divider } from "@/components/common/Divider"
import { colors } from "@/theme/colors"
import { signInStyles } from "@/styles/signInStyles"

const socialProviders: Array<"google" | "facebook" | "apple"> = ["google", "facebook", "apple"]

const SignInScreen: React.FC = () => {
  const handleSignUpPress = () => {
    router.push("/(auth)/sign-up")
  }

  const goToHome = () => router.push("/(tabs)")

  return (
    <LinearGradient colors={[colors.primary, colors.primaryDark]} style={signInStyles.container}>
      <StatusBar barStyle="light-content" />

      <View style={signInStyles.logoContainer}>
        <OtakuChallengeLogo size="large" />
      </View>

      <View style={signInStyles.authContainer}>
        {socialProviders.map((provider) => (
          <SocialButton key={provider} provider={provider} onPress={goToHome} />
        ))}
      </View>

      <Divider />

      <View style={signInStyles.bottomButtonsContainer}>
        <Button title="Continue as a guest" onPress={goToHome} variant="secondary" style={{ width: "48%" }} />
        <Button title="Sign Up" onPress={handleSignUpPress} variant="primary" style={{ width: "48%" }} />
      </View>
    </LinearGradient>
  )
}


export default SignInScreen;