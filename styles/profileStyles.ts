import { StyleSheet } from "react-native"
import { colors } from "../theme/colors"
import { normalize } from "../utils/responsive"

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  headerSection: {
    flex: 0.2,
    paddingHorizontal: normalize(16),
    justifyContent: "center",
  },
  statsRowSection: {
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.surface.secondary,
    marginHorizontal: normalize(16),
    marginVertical: normalize(4),
    borderRadius: normalize(16),
    padding: normalize(12),
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    color: colors.text.primary,
    fontSize: normalize(14),
    fontWeight: "bold",
  },
  statLabel: {
    color: colors.text.secondary,
    fontSize: normalize(10),
    marginTop: normalize(2),
  },
  settingsHeaderSection: {
    flex: 0.08,
    paddingHorizontal: normalize(16),
    justifyContent: "center",
  },
  settingsTitle: {
    color: colors.text.primary,
    fontSize: normalize(24),
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
  settingsContentSection: {
    flex: 0.6,
    paddingHorizontal: normalize(16),
  },
  settingsContainer: {
    flex: 1,
  },
  languageSetting: {
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(25),
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(15),
    marginBottom: normalize(12),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingLabel: {
    color: colors.text.primary,
    fontSize: normalize(16),
    fontWeight: "500",
  },
  languageSelector: {
    backgroundColor: colors.surface.tertiary,
    paddingHorizontal: normalize(12),
    paddingVertical: normalize(6),
    borderRadius: normalize(12),
  },
  languageText: {
    color: colors.text.primary,
    fontSize: normalize(14),
  },
  linkAccountTitle: {
    color: colors.text.primary,
    fontSize: normalize(16),
    fontWeight: "500",
    marginTop: normalize(16),
    marginBottom: normalize(12),
  },
  signOutButton: {
    backgroundColor: "#FF6B6B",
    borderRadius: normalize(12),
    paddingVertical: normalize(15),
    marginTop: normalize(20),
    marginBottom: normalize(12),
    alignItems: "center",
  },
  signOutText: {
    color: colors.text.primary,
    fontSize: normalize(16),
    fontWeight: "600",
  },
  deleteAccountButton: {
    alignItems: "center",
    paddingVertical: normalize(8),
  },
  deleteAccountText: {
    color: colors.text.secondary,
    fontSize: normalize(14),
    textDecorationLine: "underline",
  },
})
