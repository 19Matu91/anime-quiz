import { StyleSheet } from "react-native"
import { colors } from "../theme/colors"
import { spacing } from "../theme/spacing"
import { typography } from "../theme/typography"
import { normalize } from "../utils/responsive"

export const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: normalize(40),
  },
  fixedHeader: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    alignItems: "center", // Added alignItems to center the logo
  },
  logoContainer: {
    marginBottom: spacing.lg,
    alignItems: "center", // Added specific logo container for better spacing
  },
  avatarListContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    flexGrow: 1,
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    paddingTop: spacing.sm,
    backgroundColor: colors.primaryDark,
  },
  inputGroup: {
    width: "100%",
    marginBottom: spacing.md,
  },
  signInButton: {
    backgroundColor: colors.primary,
    borderRadius: normalize(12),
    paddingVertical: spacing.lg,
    width: "48%",
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: colors.secondary,
    borderRadius: normalize(12),
    paddingVertical: spacing.lg,
    width: "48%",
    alignItems: "center",
  },
  actionButtonText: {
    color: colors.textPrimary,
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
  },
  // Avatar styles
  avatarWrapper: {
    padding: spacing.sm,
  },
  avatarContainer: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: normalize(1000),
    backgroundColor: colors.secondary,
    borderWidth: normalize(3),
    borderColor: colors.transparent,
    overflow: "hidden",
  },
  avatarSelected: {
    borderColor: colors.textPrimary,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  avatarOverlaySelected: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 255, 0, 0.3)",
    borderRadius: normalize(1000),
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: normalize(1), height: normalize(1) },
    textShadowRadius: normalize(3),
  },
})
