import { StyleSheet } from "react-native"
import { normalize } from "../utils/responsive"
import { colors } from "../theme/colors"
import { spacing } from "../theme/spacing"

export const shopStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: spacing.lg
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  sectionFinal:{
    paddingHorizontal: spacing.lg,

  },
  sectionTitle: {
    fontSize: normalize(20),
    fontWeight: "bold",
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  coinPackagesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: normalize(12),
  },
})

export const getCoinsButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(25),
    paddingVertical: normalize(20),
    marginBottom: spacing.lg,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: {
    fontSize: normalize(18),
    fontWeight: "bold",
    color: colors.text.primary,
  },
})

export const coinPackageStyles = StyleSheet.create({
  container: {
    width: "48%",
    height: normalize(220),
    aspectRatio: 1,
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(15),
    padding: spacing.sm,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: normalize(2),
    borderColor: colors.accent.gold,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(10),
  },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.primary,
    paddingHorizontal: normalize(12),
    paddingVertical: normalize(6),
    borderRadius: normalize(15),
    gap: normalize(5),
  },
  coinAmount: {
    color: colors.text.primary,
    fontSize: normalize(16),
    fontWeight: "bold",
  },
  priceContainer: {
    backgroundColor: colors.surface.tertiary,
    paddingHorizontal: normalize(12),
    paddingVertical: normalize(6),
    borderRadius: normalize(10),
  },
  price: {
    color: colors.text.primary,
    fontSize: normalize(14),
    fontWeight: "bold",
  },
})

export const vipPackageStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: normalize(120),
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(15),
    overflow: "hidden",
    position: "relative",
    borderWidth: normalize(2),
    borderColor: colors.accent.gold,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  vipText: {
    fontSize: normalize(32),
    fontWeight: "bold",
    color: colors.text.primary,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: normalize(10),
  },
  priceContainer: {
    position: "absolute",
    bottom: normalize(10),
    left: normalize(15),
    backgroundColor: colors.surface.tertiary,
    paddingHorizontal: normalize(12),
    paddingVertical: normalize(6),
    borderRadius: normalize(10),
  },
  price: {
    color: colors.text.primary,
    fontSize: normalize(16),
    fontWeight: "bold",
  },
})
