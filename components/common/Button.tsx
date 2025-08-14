import type React from "react"
import { TouchableOpacity, Text, StyleSheet, type ViewStyle, type TextStyle } from "react-native"
import { colors } from "@/theme/colors"
import { normalize } from "@/utils/responsive"
import { spacing } from "@/theme/spacing"
import { typography } from "@/theme/typography"

interface ButtonProps {
  title: string
  onPress: () => void
  variant?: "primary" | "secondary" | "social" | "danger" | "success" | "difficulty"
  size?: "small" | "medium" | "large"
  disabled?: boolean
  style?: ViewStyle
  textStyle?: TextStyle
  children?: React.ReactNode
  alignment?: "left" | "center" | "right"
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  style,
  textStyle,
  children,
  alignment = "center",
}) => {
  const alignmentStyle =
    alignment === "left"
      ? { alignItems: "flex-start" }
      : alignment === "right"
        ? { alignItems: "flex-end" }
        : { alignItems: "center" }

  const textAlignmentStyle =
    alignment === "left"
      ? { textAlign: "left" as const }
      : alignment === "right"
        ? { textAlign: "right" as const }
        : { textAlign: "center" as const }

  const buttonStyles = [
    styles.base,
    styles[variant],
    styles[`${size}Size`],
    disabled && styles.disabled,
    alignmentStyle,
    style,
  ]

  const textStyles = [
    styles.baseText,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textAlignmentStyle, // Added text alignment to text styles
    textStyle,
  ]

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} disabled={disabled} activeOpacity={0.8}>
      {children || <Text style={textStyles}>{title}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    borderRadius: normalize(12),
    justifyContent: "center",
  },

  // Variants
  primary: {
    backgroundColor: colors.secondary,
  },
  secondary: {
    backgroundColor: colors.primary,
  },
  social: {
    backgroundColor: colors.overlayLight,
    borderWidth: normalize(1),
    borderColor: colors.border,
  },
  danger: {
    backgroundColor: colors.error,
  },
  success: {
    backgroundColor: colors.success,
  },
  difficulty: {
    backgroundColor: colors.surface.tertiary,
  },

  // Sizes
  smallSize: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  mediumSize: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  largeSize: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
  },

  // Disabled
  disabled: {
    opacity: 0.6,
  },

  // Text styles
  baseText: {
    fontWeight: typography.weights.bold,
  },
  primaryText: {
    color: colors.textPrimary,
  },
  secondaryText: {
    color: colors.textPrimary,
  },
  socialText: {
    color: colors.textPrimary,
  },
  dangerText: {
    color: colors.textPrimary,
  },
  successText: {
    color: colors.textPrimary,
  },
  difficultyText: {
    color: colors.textPrimary,
  },

  // Text sizes
  smallText: {
    fontSize: typography.sizes.sm,
  },
  mediumText: {
    fontSize: typography.sizes.md,
  },
  largeText: {
    fontSize: typography.sizes.lg,
  },

  disabledText: {
    color: colors.text.muted,
  },
})
