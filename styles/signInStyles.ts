import { StyleSheet } from "react-native"
import { colors } from "../theme/colors"
import { spacing } from "../theme/spacing"
import { normalize } from "../utils/responsive"

export const signInStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
  },
  logoContainer: {
    marginTop: spacing.xl,
    marginBottom: spacing.xxl,
    alignItems: "center",
  },
  authContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: spacing.lg,
  },
  bottomButton: {
    backgroundColor: colors.secondary,
    borderRadius: normalize(12),
    paddingVertical: spacing.lg,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomButtonText: {
    color: colors.textPrimary,
    fontSize: normalize(15),
    fontWeight: "bold",
    textAlign: "center",
  },
})
