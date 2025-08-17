import type React from "react"
import { View, Text, TextInput, StyleSheet, type TextInputProps } from "react-native"
import { colors } from "@/theme/colors"
import { spacing } from "@/theme/spacing"
import { typography } from "@/theme/typography"
import { normalize } from "@/utils/responsive"

interface InputProps extends TextInputProps {
  label?: string
  error?: string
  editable?: boolean
}

export const Input: React.FC<InputProps> = ({ label, error, style, editable, ...props }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={[styles.input, style]} placeholderTextColor={colors.textPlaceholder} editable={editable} {...props} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: spacing.md,
  },
  label: {
    color: colors.textSecondary,
    fontSize: typography.sizes.md,
    marginBottom: spacing.sm,
    paddingLeft: normalize(5),
  },
  input: {
    backgroundColor: colors.secondary,
    borderRadius: normalize(12),
    padding: spacing.lg,
    color: colors.textPrimary,
    fontSize: typography.sizes.md,
    width: "100%",
  },
  error: {
    color: colors.error,
    fontSize: typography.sizes.sm,
    marginTop: normalize(5),
    paddingLeft: normalize(5),
  },
})
