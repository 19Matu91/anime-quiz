import type React from "react"
import { View, Text, ImageBackground, StyleSheet } from "react-native"
import { colors } from "@/theme/colors"
import { normalize } from "@/utils/responsive"
import { typography } from "@/theme/typography"

interface OtakuChallengeLogoProps {
  size?: "small" | "medium" | "large"
}

export const OtakuChallengeLogo: React.FC<OtakuChallengeLogoProps> = ({ size = "medium" }) => {
  const sizeStyles = {
    small: { width: normalize(160), height: normalize(160) },
    medium: { width: normalize(200), height: normalize(200) },
    large: { width: normalize(220), height: normalize(220) },
  }

  return (
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/736x/a7/67/63/a767630e2069b762e81882d2f1952e4f.jpg" }}
      style={[styles.container, sizeStyles[size]]}
      imageStyle={styles.image}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={[styles.text, styles.otakuText]}>OTAKU</Text>
        <Text style={[styles.text, styles.challengeText]}>CHALLENGE</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: normalize(40),
  },
  overlay: {
    backgroundColor: colors.overlay,
    borderRadius: normalize(40),
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(15),
  },
  text: {
    color: colors.textPrimary,
    fontWeight: typography.weights.bold,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: normalize(2), height: normalize(2) },
    textShadowRadius: normalize(5),
    textAlign: "center",
  },
  otakuText: {
    fontSize: typography.sizes.massive,
  },
  challengeText: {
    fontSize: typography.sizes.huge,
    letterSpacing: normalize(2),
    marginTop: normalize(-5),
  },
})
