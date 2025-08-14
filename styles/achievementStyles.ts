import { StyleSheet } from "react-native"
import { normalize } from "../utils/responsive"
import { colors } from "../theme/colors"

export const achievementStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingVertical: normalize(4),
    paddingHorizontal: normalize(8),
    justifyContent: "space-between",
  },
  headerSection: {
    flex: 0.15,
    justifyContent: "center",
  },
  achievementHeaderSection: {
    flex: 0.18,
    justifyContent: "center",
  },
  gridSection: {
    flex: 0.67,
    justifyContent: "center",
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(12),
    padding: normalize(12),
  },

  // Achievement Header Styles
  headerContainer: {
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(12),
    padding: normalize(12),
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: normalize(12),
  },
  medalIcon: {
    fontSize: normalize(32),
    marginRight: normalize(12),
  },
  titleTextContainer: {
    flex: 1,
  },
  title: {
    fontSize: normalize(24),
    color: colors.text.primary,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: normalize(14),
    color: colors.text.secondary,
    marginTop: normalize(2),
  },
  progressContainer: {
    width: "100%",
  },
  progressBar: {
    height: normalize(8),
    backgroundColor: colors.surface.tertiary,
    borderRadius: normalize(4),
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.accent.success,
    borderRadius: normalize(4),
  },

  // Achievement Grid Styles
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  // Achievement Badge Styles
  badgeContainer: {
    width: "30%",
    alignItems: "center",
    marginBottom: normalize(20),
  },
  badgeImageContainer: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(35),
    borderWidth: normalize(3),
    borderColor: colors.accent.warning,
    padding: normalize(3),
    position: "relative",
    backgroundColor: colors.surface.primary,
  },
  lockedBadge: {
    borderColor: colors.text.muted,
    opacity: 0.6,
  },
  badgeImage: {
    width: "100%",
    height: "100%",
    borderRadius: normalize(32),
  },
  lockOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: normalize(32),
    justifyContent: "center",
    alignItems: "center",
  },
  lockIcon: {
    fontSize: normalize(20),
  },
  badgeName: {
    fontSize: normalize(12),
    color: colors.text.primary,
    fontWeight: "600",
    textAlign: "center",
    marginTop: normalize(8),
    lineHeight: normalize(14),
  },
  lockedBadgeName: {
    color: colors.text.muted,
  },
})
