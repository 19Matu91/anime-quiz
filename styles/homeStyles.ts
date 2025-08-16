import { StyleSheet } from "react-native"
import { normalize, responsiveSize, responsivePadding, responsiveFont } from "../utils/responsive"
import { colors } from "../theme/colors"
import { spacing } from "../theme/spacing"

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: responsivePadding.lg,
    paddingBottom: normalize(100),
  },
  section: {
    paddingHorizontal: responsiveSize(16, 20, 24, 32, 48),
    marginBottom: responsivePadding.lg,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: responsivePadding.sm,
  },
  sectionTitle: {
    fontSize: responsiveFont.xl,
    fontWeight: "bold",
    color: colors.text.primary,
  },
})

export const profileHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface.secondary,
    borderRadius: responsiveSize(20, 22, 24, 26, 28),
    padding: responsiveSize(12, 14, 16, 18, 20),
    marginBottom: responsivePadding.sm,
    justifyContent: "space-between",
  },
  avatar: {
    width: responsiveSize(60, 65, 70, 80, 90),
    height: responsiveSize(60, 65, 70, 80, 90),
    borderRadius: responsiveSize(30, 32.5, 35, 40, 45),
    borderWidth: normalize(2),
    borderColor: colors.accent.gold,
    marginRight: responsivePadding.sm,
  },
  info: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    fontSize: responsiveFont.lg,
    fontFamily: "sans-serif-light",
    color: colors.text.primary,
    marginBottom: normalize(5),
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rankBadge: {
    marginRight: responsivePadding.sm,
    position: "relative",
    width: responsiveSize(40, 42, 45, 50, 55),
    height: responsiveSize(40, 42, 45, 50, 55),
    justifyContent: "center",
    alignItems: "center",
  },
  rankNumber: {
    position: "absolute",
    color: colors.text.primary,
    fontSize: responsiveFont.lg,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: normalize(10),
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: responsivePadding.xs,
    paddingVertical: normalize(2),
    borderRadius: normalize(10),
  },
  progressBar: {
    height: responsiveSize(10, 11, 12, 14, 16),
    backgroundColor: colors.background.primary,
    borderRadius: responsiveSize(5, 5.5, 6, 7, 8),
    flex: 1,
    marginRight: responsivePadding.sm,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: colors.accent.success,
    borderRadius: responsiveSize(5, 5.5, 6, 7, 8),
  },
  progressText: {
    color: colors.text.primary,
    fontSize: responsiveFont.sm,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: responsivePadding.sm,
    backgroundColor: colors.background.primary,
    borderRadius: responsiveSize(20, 22, 24, 26, 28),
    paddingVertical: responsiveSize(5, 6, 7, 8, 9),
    paddingHorizontal: responsiveSize(12, 14, 16, 18, 20),
  },
  scoreIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreText: {
    fontSize: responsiveFont.lg,
    color: colors.text.primary,
    marginLeft: normalize(5),
    marginRight: normalize(5),
  },
})

export const leaderboardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: responsivePadding.lg,
    marginBottom: responsivePadding.lg,
    borderBottomWidth: normalize(1),
    borderBottomColor: colors.border.primary,
    paddingBottom: responsivePadding.sm,
  },
  item: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: normalize(5),
    minHeight: normalize(24),
  },
  text: {
    color: colors.text.secondary,
    fontSize: responsiveFont.sm,
    marginLeft: normalize(5),
  },
  value: {
    color: colors.text.primary,
    fontSize: responsiveFont.md,
    fontWeight: "bold",
  },
  flagContainer: {
    width: responsiveSize(24, 26, 28, 30, 32),
    height: responsiveSize(24, 26, 28, 30, 32),
    borderRadius: responsiveSize(12, 13, 14, 15, 16),
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  flagIcon: {
    fontSize: responsiveSize(14, 15, 16, 18, 20),
  },
  separator: {
    width: normalize(1),
    height: "100%",
    backgroundColor: colors.border.primary,
  },
})

export const rewardStyles = StyleSheet.create({
  container: {
    width: normalize(120),
    height: normalize(150),
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(15),
    marginRight: normalize(15),
    justifyContent: "flex-end",
    alignItems: "center",
    padding: spacing.sm,
  },
  completed: {
    opacity: 0.6,
  },
  image: {
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(10),
    position: "absolute",
    top: spacing.sm,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    color: colors.text.primary,
    fontSize: normalize(14),
    fontWeight: "bold",
    textAlign: "center",
  },
  gainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalize(5),
  },
  gainText: {
    color: colors.accent.success,
    fontSize: normalize(12),
  },
  completedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: normalize(15),
    justifyContent: "center",
    alignItems: "center",
  },
})

export const searchStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(20),
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(8),
    flex: 1,
    maxWidth: normalize(150),
  },
  inputWrapper: {
    flex: 1,
    marginLeft: normalize(5),
    overflow: "hidden",
  },
  input: {
    color: colors.text.primary,
    fontSize: normalize(14),
  },
})

export const collectionStyles = StyleSheet.create({
  container: {
    marginBottom: normalize(15),
    borderRadius: normalize(15),
    overflow: "hidden",
    backgroundColor: colors.surface.secondary,
  },
  locked: {
    opacity: 0.6,
  },
  touchable: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: responsiveSize(150, 180, 200, 220),
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    padding: responsiveSize(15, 18, 20, 22),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  title: {
    color: colors.text.primary,
    fontSize: responsiveSize(24, 26, 28, 30),
    fontWeight: "bold",
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreText: {
    color: colors.text.primary,
    fontSize: responsiveSize(20, 22, 24, 26),
    marginRight: normalize(5),
  },
  expandedContent: {
    padding: responsiveSize(15, 18, 20, 22),
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveSize(8, 10, 12, 14),
  },
  difficultyButton: {
    flex: 1,
    height: responsiveSize(40, 45, 50, 55),
    backgroundColor: colors.surface.tertiary,
    borderRadius: normalize(10),
    paddingHorizontal: normalize(15),
    justifyContent: "center",
    alignItems: "center",
  },
  easyButton: {
    backgroundColor: colors.accent.success,
  },
  easyButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: responsiveSize(14, 15, 16, 17),
    textAlign: "left",
  },
  hardButton: {
    backgroundColor: "#FF6B35",
  },
  hardButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: responsiveSize(14, 15, 16, 17),
    textAlign: "left",
  },
  impossibleButton: {
    flex: 1,
    height: responsiveSize(40, 45, 50, 55),
    backgroundColor: colors.accent.danger,
    borderRadius: normalize(10),
    paddingHorizontal: normalize(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  impossibleButtonOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: normalize(10),
    justifyContent: "center",
    alignItems: "center",
  },
  impossibleButtonText: {
    color: colors.text.primary,
    fontWeight: "bold",
    fontSize: responsiveSize(14, 15, 16, 17),
  },
  rewardIcons: {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 2,
  },
  rewardValueText: {
    color: colors.text.primary,
    fontWeight: "bold",
    fontSize: responsiveSize(12, 13, 14, 15),
    marginRight: normalize(5),
  },
  disabledText: {
    color: colors.text.secondary,
  },
})
