import { StyleSheet } from "react-native"
import { normalize } from "../utils/responsive"
import { colors } from "../theme/colors"

export const leaderboardStyles = StyleSheet.create({
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
  tabSection: {
    flex: 0.08,
    justifyContent: "center",
  },
  podiumSection: {
    flex: 0.28,
    justifyContent: "center",
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(12),
    padding: normalize(4),
    marginVertical: normalize(10),
  },
  listSection: {
    flex: 0.49,
    justifyContent: "flex-start",
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(12),
    padding: normalize(8),
  },
})

export const tabSelectorStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(8),
    padding: normalize(2),
  },
  tab: {
    flex: 1,
    paddingVertical: normalize(14),
    alignItems: "center",
    borderRadius: normalize(6),
  },
  activeTab: {
    backgroundColor: colors.surface.tertiary,
  },
  tabText: {
    fontSize: normalize(18),
    color: colors.text.secondary,
    fontWeight: "500",
  },
  activeTabText: {
    color: colors.text.primary,
    fontWeight: "bold",
  },
})

export const podiumPlayerStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(8),
    padding: normalize(14),
    borderWidth: normalize(4),
    minHeight: normalize(130),
    justifyContent: "space-between",
  },
  firstPlace: {
    transform: [{ scale: 1.05 }],
  },
  username: {
    fontSize: normalize(16),
    color: colors.text.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
  avatarContainer: {
    position: "relative",
    borderWidth: normalize(3),
    borderRadius: normalize(35),
    padding: normalize(2),
  },
  avatar: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(30),
  },
  currentUserIndicator: {
    position: "absolute",
    top: -normalize(2),
    right: -normalize(2),
    width: normalize(14),
    height: normalize(14),
    borderRadius: normalize(7),
    backgroundColor: colors.accent.info,
  },
  score: {
    fontSize: normalize(20),
    color: colors.text.primary,
    fontWeight: "bold",
  },
  level: {
    fontSize: normalize(14),
    color: colors.text.secondary,
  },
})

export const leaderboardItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(12),
    borderRadius: normalize(6),
    marginVertical: normalize(4),
  },
  highlighted: {
    backgroundColor: colors.surface.tertiary,
  },
  position: {
    fontSize: normalize(18),
    color: colors.text.primary,
    fontWeight: "bold",
    width: normalize(35),
    textAlign: "center",
  },
  avatar: {
    width: normalize(45),
    height: normalize(45),
    borderRadius: normalize(22.5),
    marginHorizontal: normalize(12),
  },
  info: {
    flex: 1,
  },
  username: {
    fontSize: normalize(17),
    color: colors.text.primary,
    fontWeight: "600",
  },
  level: {
    fontSize: normalize(14),
    color: colors.text.secondary,
  },
  score: {
    fontSize: normalize(17),
    color: colors.text.primary,
    fontWeight: "bold",
  },
})
