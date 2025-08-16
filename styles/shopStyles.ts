import { StyleSheet } from "react-native"
import { normalize, responsiveSize } from "../utils/responsive"
import { colors } from "../theme/colors"
import { spacing } from "../theme/spacing"

export const shopStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: spacing.lg,
  },
  section: {
    paddingHorizontal: responsiveSize(16, 20, 24, 32),
    marginBottom: spacing.lg,
  },
  sectionFinal: {
    paddingHorizontal: responsiveSize(16, 20, 24, 32),
  },
  sectionTitle: {
    fontSize: responsiveSize(20, 22, 24, 26),
    fontWeight: "bold",
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  coinPackagesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: responsiveSize(12, 14, 16, 18),
  },
})

export const getCoinsButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface.secondary,
    borderRadius: responsiveSize(25, 27, 30, 32),
    paddingVertical: responsiveSize(20, 22, 24, 26),
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
    fontSize: responsiveSize(18, 20, 22, 24),
    fontWeight: "bold",
    color: colors.text.primary,
  },
})

export const coinPackageStyles = StyleSheet.create({
  container: {
    width: "48%",
    height: responsiveSize(220, 250, 280, 320),
    aspectRatio: 1,
    backgroundColor: colors.surface.secondary,
    borderRadius: responsiveSize(15, 17, 20, 22),
    padding: responsiveSize(12, 14, 16, 18),
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
    width: responsiveSize(60, 70, 80, 90),
    height: responsiveSize(60, 70, 80, 90),
    borderRadius: normalize(10),
  },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.primary,
    paddingHorizontal: responsiveSize(12, 14, 16, 18),
    paddingVertical: responsiveSize(6, 7, 8, 9),
    borderRadius: responsiveSize(15, 16, 18, 20),
    gap: normalize(5),
  },
  coinAmount: {
    color: colors.text.primary,
    fontSize: responsiveSize(16, 18, 20, 22),
    fontWeight: "bold",
  },
  priceContainer: {
    backgroundColor: colors.surface.tertiary,
    paddingHorizontal: responsiveSize(12, 14, 16, 18),
    paddingVertical: responsiveSize(6, 7, 8, 9),
    borderRadius: normalize(10),
  },
  price: {
    color: colors.text.primary,
    fontSize: responsiveSize(14, 15, 16, 18),
    fontWeight: "bold",
  },
})

export const vipPackageStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: responsiveSize(120, 140, 160, 180),
    backgroundColor: colors.surface.secondary,
    borderRadius: responsiveSize(15, 17, 20, 22),
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
    fontSize: responsiveSize(32, 36, 40, 44),
    fontWeight: "bold",
    color: colors.text.primary,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: normalize(10),
  },
  priceContainer: {
    position: "absolute",
    bottom: responsiveSize(10, 12, 14, 16),
    left: responsiveSize(15, 17, 20, 22),
    backgroundColor: colors.surface.tertiary,
    paddingHorizontal: responsiveSize(12, 14, 16, 18),
    paddingVertical: responsiveSize(6, 7, 8, 9),
    borderRadius: normalize(10),
  },
  price: {
    color: colors.text.primary,
    fontSize: responsiveSize(16, 17, 18, 20),
    fontWeight: "bold",
  },
})
