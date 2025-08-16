import { StyleSheet } from "react-native"
import { colors } from "../theme/colors"
import { normalize, responsiveSize, responsiveFlex } from "../utils/responsive"

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  headerSection: {
    flex: responsiveFlex(0.2, 0.18, 0.15),
    paddingHorizontal: responsiveSize(16, 20, 24, 32),
    justifyContent: "center",
  },
  statsRowSection: {
    flex: responsiveFlex(0.12, 0.1, 0.08),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.surface.secondary,
    marginHorizontal: responsiveSize(16, 20, 24, 32),
    marginVertical: responsiveSize(4, 5, 6, 8),
    borderRadius: responsiveSize(16, 18, 20, 22),
    padding: responsiveSize(12, 14, 16, 18),
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
    fontSize: responsiveSize(14, 16, 18, 20),
    fontWeight: "bold",
  },
  statLabel: {
    color: colors.text.secondary,
    fontSize: responsiveSize(10, 11, 12, 13),
    marginTop: normalize(2),
  },
  settingsHeaderSection: {
    flex: responsiveFlex(0.08, 0.07, 0.06),
    paddingHorizontal: responsiveSize(16, 20, 24, 32),
    justifyContent: "center",
  },
  settingsTitle: {
    color: colors.text.primary,
    fontSize: responsiveSize(24, 26, 28, 32),
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
  settingsContentSection: {
    flex: responsiveFlex(0.6, 0.65, 0.71),
    paddingHorizontal: responsiveSize(16, 20, 24, 32),
  },
  settingsContainer: {
    flex: 1,
  },
  languageSetting: {
    backgroundColor: colors.surface.secondary,
    borderRadius: responsiveSize(25, 27, 30, 32),
    paddingHorizontal: responsiveSize(20, 22, 24, 26),
    paddingVertical: responsiveSize(15, 16, 18, 20),
    marginBottom: responsiveSize(12, 13, 14, 16),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingLabel: {
    color: colors.text.primary,
    fontSize: responsiveSize(16, 17, 18, 20),
    fontWeight: "500",
  },
  languageSelector: {
    backgroundColor: colors.surface.tertiary,
    paddingHorizontal: responsiveSize(12, 13, 14, 16),
    paddingVertical: responsiveSize(6, 7, 8, 9),
    borderRadius: responsiveSize(12, 13, 14, 15),
  },
  languageText: {
    color: colors.text.primary,
    fontSize: responsiveSize(14, 15, 16, 17),
  },
  linkAccountTitle: {
    color: colors.text.primary,
    fontSize: responsiveSize(16, 17, 18, 20),
    fontWeight: "500",
    marginTop: responsiveSize(16, 18, 20, 22),
    marginBottom: responsiveSize(12, 13, 14, 16),
  },
  signOutButton: {
    backgroundColor: "#FF6B6B",
    borderRadius: responsiveSize(12, 13, 14, 16),
    paddingVertical: responsiveSize(15, 16, 18, 20),
    marginTop: responsiveSize(20, 22, 24, 26),
    marginBottom: responsiveSize(12, 13, 14, 16),
    alignItems: "center",
  },
  signOutText: {
    color: colors.text.primary,
    fontSize: responsiveSize(16, 17, 18, 20),
    fontWeight: "600",
  },
  deleteAccountButton: {
    alignItems: "center",
    paddingVertical: responsiveSize(8, 9, 10, 12),
  },
  deleteAccountText: {
    color: colors.text.secondary,
    fontSize: responsiveSize(14, 15, 16, 17),
    textDecorationLine: "underline",
  },
})
