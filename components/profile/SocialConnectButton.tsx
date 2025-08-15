import type React from "react"
import { Text, TouchableOpacity } from "react-native"
import { colors } from "../../theme/colors"
import { normalize } from "../../utils/responsive"

interface SocialConnectButtonProps {
  platform: "google" | "facebook" | "apple"
  isConnected?: boolean
  onPress: () => void
}

export const SocialConnectButton: React.FC<SocialConnectButtonProps> = ({ platform, isConnected, onPress }) => {
  const getPlatformConfig = () => {
    switch (platform) {
      case "google":
        return {
          label: isConnected ? "Connected" : "Connect Google",
          backgroundColor: isConnected ? colors.surface.secondary : colors.surface.tertiary,
          textColor: isConnected ? colors.text.secondary : colors.text.primary,
        }
      case "facebook":
        return {
          label: "Connect Facebook",
          backgroundColor: "#1877F2",
          textColor: colors.text.primary,
        }
      case "apple":
        return {
          label: "Connect Apple",
          backgroundColor: "#000000",
          textColor: colors.text.primary,
        }
    }
  }

  const config = getPlatformConfig()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: config.backgroundColor,
        borderRadius: normalize(12),
        paddingVertical: normalize(15),
        marginBottom: normalize(12),
        alignItems: "center",
        borderWidth: platform === "google" && isConnected ? normalize(1) : 0,
        borderColor: colors.border.primary,
      }}
    >
      <Text
        style={{
          color: config.textColor,
          fontSize: normalize(16),
          fontWeight: "600",
        }}
      >
        {config.label}
      </Text>
    </TouchableOpacity>
  )
}
