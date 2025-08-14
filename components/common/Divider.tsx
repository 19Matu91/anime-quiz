import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import { colors } from "@/theme/colors"
import { spacing } from "@/theme/spacing"
import { typography } from "@/theme/typography"
import { normalize } from "@/utils/responsive"

interface DividerProps {
  text?: string
}

export const Divider: React.FC<DividerProps> = ({ text = "or" }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginVertical: spacing.lg,
  },
  line: {
    flex: 1,
    height: normalize(1),
    backgroundColor: colors.borderMuted,
  },
  text: {
    color: "rgba(255, 255, 255, 0.6)",
    marginHorizontal: spacing.md,
    fontSize: typography.sizes.sm,
  },
})
