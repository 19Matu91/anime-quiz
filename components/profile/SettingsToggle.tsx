import type React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { colors } from "../../theme/colors"
import { normalize } from "../../utils/responsive"

interface SettingsToggleProps {
  label: string
  value: boolean
  onToggle: (value: boolean) => void
}

export const SettingsToggle: React.FC<SettingsToggleProps> = ({ label, value, onToggle }) => {
  return (
    <View
      style={{
        backgroundColor: colors.surface.secondary,
        borderRadius: normalize(25),
        paddingHorizontal: normalize(20),
        paddingVertical: normalize(15),
        marginBottom: normalize(12),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: colors.text.primary,
          fontSize: normalize(16),
          fontWeight: "500",
        }}
      >
        {label}
      </Text>
      <TouchableOpacity
        onPress={() => onToggle(!value)}
        style={{
          width: normalize(50),
          height: normalize(28),
          borderRadius: normalize(14),
          backgroundColor: value ? colors.accent.success : colors.surface.tertiary,
          justifyContent: "center",
          paddingHorizontal: normalize(2),
        }}
      >
        <View
          style={{
            width: normalize(24),
            height: normalize(24),
            borderRadius: normalize(12),
            backgroundColor: colors.text.primary,
            alignSelf: value ? "flex-end" : "flex-start",
          }}
        />
      </TouchableOpacity>
    </View>
  )
}
