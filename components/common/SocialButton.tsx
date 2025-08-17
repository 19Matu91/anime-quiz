import type React from "react"
import { TouchableOpacity, Text, StyleSheet, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { colors } from "@/theme/colors"
import { normalize } from "@/utils/responsive"
import { spacing } from "@/theme/spacing"
import { typography } from "@/theme/typography"

interface SocialButtonProps {
  provider: "google" | "facebook" | "apple"
  onPress: () => void
}

const socialConfig = {
  google: { icon: "google", color: colors.google, name: "Google" },
  facebook: { icon: "facebook-square", color: colors.facebook, name: "Facebook" },
  apple: { icon: "apple", color: colors.apple, name: "Apple" },
  email: { icon: "envelope", color: colors.apple, name: "Email" },
}

export const SocialButton: React.FC<SocialButtonProps> = ({ provider, onPress }) => {
  const config = socialConfig[provider]

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <FontAwesome name={config.icon as any} size={normalize(24)} color={config.color} />
      </View>
      <Text style={styles.text}>Continue with {config.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.overlayLight,
    borderWidth: normalize(1),
    borderColor: colors.border,
    borderRadius: normalize(12),
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    width: "90%",
    marginBottom: spacing.md,
  },
  iconContainer: {
    width: normalize(25),
    alignItems: "center",
    marginRight: spacing.md,
  },
  text: {
    color: colors.textPrimary,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
  },
})
