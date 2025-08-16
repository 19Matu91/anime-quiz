import { StyleSheet, Dimensions } from "react-native"
import { colors } from "../theme/colors"
import { normalize } from "../utils/responsive"

const { width: screenWidth, height: screenHeight } = Dimensions.get("window")
const isDesktop = screenWidth > 768
const isTablet = screenWidth > 480 && screenWidth <= 768

const responsiveSize = (mobile: number, tablet?: number, desktop?: number) => {
  if (isDesktop && desktop) return normalize(desktop)
  if (isTablet && tablet) return normalize(tablet)
  return normalize(mobile)
}

const responsiveFlex = (mobile: number, desktop?: number) => {
  if (isDesktop && desktop) return desktop
  return mobile
}

export const quizStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: normalize(20),
    maxWidth: isDesktop ? 1200 : "100%",
    alignSelf: "center",
  },

  // Header styles
  headerSection: {
    flex: responsiveFlex(0.15, 0.22),
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(15),
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(12),
  },
  progressText: {
    color: colors.text.primary,
    fontSize: normalize(16),
    fontWeight: "600",
  },
  timerContainer: {
    alignItems: "center",
  },
  timerCircle: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(25),
    backgroundColor: colors.primary,
    borderWidth: normalize(3),
    borderColor: colors.accent.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  timerText: {
    color: colors.text.primary,
    fontSize: normalize(14),
    fontWeight: "bold",
  },
  livesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  livesText: {
    color: colors.text.primary,
    fontSize: normalize(16),
    fontWeight: "600",
    marginRight: normalize(4),
  },
  heartIcon: {
    fontSize: normalize(16),
  },

  // Question styles
  questionSection: {
    flex: responsiveFlex(0.45, 0.28),
    justifyContent: "center",
    alignItems: "center",
  },
  questionContainer: {
    alignItems: "center",
    paddingHorizontal: normalize(20),
    width: "100%",
  },
  questionText: {
    color: colors.text.primary,
    fontSize: normalize(24),
    fontWeight: "600",
    textAlign: "center",
    marginBottom: normalize(20),
    lineHeight: normalize(30),
  },
  imageContainer: {
    marginTop: normalize(10),
  },
  questionImage: {
    width: normalize(200),
    height: normalize(120),
    borderRadius: normalize(10),
    resizeMode: "cover",
  },

  // Answer styles
  answersSection: {
    flex: responsiveFlex(0.25, 0.3),
    // justifyContent: "flex-end",
  },
  answersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(30),
  },
  answerButton: {
    width: "48%",
    height: "25%",
    aspectRatio: isDesktop ? 1.8 : 1.1,
    borderRadius: normalize(15),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: normalize(10),
    elevation: 2,
    shadowColor: colors.overlay,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // shadowColor: colors.overlay,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
  },
  defaultAnswerButton: {
    backgroundColor: colors.surface.secondary,
  },
  answerText: {
    color: colors.text.primary,
    fontSize: normalize(16),
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: normalize(8),
  },

  // Bottom section styles
  bottomSection: {
    flex: responsiveFlex(0.1, 0.12),
    justifyContent: "center",
    alignItems: "center",
  },
  abandonButton: {
    paddingVertical: normalize(8),
  },
  abandonText: {
    color: colors.text.secondary,
    fontSize: normalize(16),
    textDecorationLine: "underline",
  },

  // Progress Section styles
  progressSection: {
    flex: 0.25,
    justifyContent: "center",
  },
  progressSectionContainer: {
    alignItems: "center",
    width: "100%",
  },
  nextLevelText: {
    color: colors.text.primary,
    fontSize: normalize(18),
    fontWeight: "600",
    marginBottom: normalize(10),
  },
  progressBarContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: normalize(15),
  },
  progressBarBackground: {
    width: "100%",
    height: normalize(25),
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(12),
    overflow: "hidden",
    marginBottom: normalize(8),
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: normalize(12),
  },
  bonusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bonusIcon: {
    fontSize: normalize(20),
    marginRight: normalize(8),
  },
  bonusText: {
    color: colors.text.primary,
    fontSize: normalize(16),
    fontWeight: "500",
  },

  // Actions Section styles
  actionsSection: {
    flex: 0.2,
    justifyContent: "center",
    paddingHorizontal: normalize(20),
  },
  actionButton: {
    backgroundColor: colors.surface.secondary,
    borderRadius: normalize(15),
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(20),
    marginBottom: normalize(15),
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonText: {
    color: colors.text.primary,
    fontSize: normalize(18),
    fontWeight: "600",
  },
  adButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  adIcon: {
    backgroundColor: colors.overlay,
    borderRadius: normalize(4),
    paddingHorizontal: normalize(6),
    paddingVertical: normalize(2),
    marginRight: normalize(10),
  },
  adIconText: {
    color: colors.text.primary,
    fontSize: normalize(12),
    fontWeight: "bold",
  },

  // Exit Section styles
  exitSection: {
    flex: responsiveFlex(0.15, 0.15),
    justifyContent: "center",
    alignItems: "center",
  },
  exitText: {
    color: colors.text.secondary,
    fontSize: normalize(16),
    textDecorationLine: "underline",
  },

  // End Quiz Screen styles
  endQuizContent: {
    flex: 1,
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(20),
    maxWidth: isDesktop ? 1200 : "100%",
    alignSelf: "center",
  },
  resultsHeaderSection: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  resultsHeaderContainer: {
    alignItems: "center",
    width: "100%",
  },
  quizTitleText: {
    color: colors.text.secondary,
    fontSize: normalize(18),
    fontWeight: "500",
    marginBottom: normalize(20),
  },
  quizEndedText: {
    color: colors.text.primary,
    fontSize: normalize(32),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: normalize(15),
  },
  resultStatusText: {
    fontSize: normalize(28),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: normalize(20),
  },
  winText: {
    color: colors.accent.success,
  },
  loseText: {
    color: colors.accent.danger,
  },
  statsContainer: {
    alignItems: "center",
  },
  statsText: {
    color: colors.text.primary,
    fontSize: normalize(18),
    fontWeight: "500",
    marginBottom: normalize(5),
  },

  // Abandon Quiz Alert styles
  abandonAlertContent: {
    alignItems: "center",
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(20),
  },
  abandonAlertImage: {
    width: normalize(200),
    height: normalize(120),
    borderRadius: normalize(10),
    marginBottom: normalize(20),
  },
  abandonAlertText: {
    color: colors.text.primary,
    fontSize: normalize(16),
    textAlign: "center",
    lineHeight: normalize(22),
    marginBottom: normalize(30),
    paddingHorizontal: normalize(10),
  },
  abandonConfirmButton: {
    backgroundColor: colors.accent.danger,
    borderRadius: normalize(15),
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(40),
    width: "80%",
    alignItems: "center",
  },
  abandonConfirmText: {
    color: colors.text.primary,
    fontSize: normalize(18),
    fontWeight: "600",
  },
})
