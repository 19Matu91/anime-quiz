import { Dimensions, PixelRatio, Platform } from "react-native"

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")
const BASE_WIDTH = 430 // iPhone 16 Pro base width for better modern device support
const MOBILE_THRESHOLD = 480
const TABLET_THRESHOLD = 768
const DESKTOP_THRESHOLD = 1024
const LARGE_DESKTOP_THRESHOLD = 1440
const MAX_SCALE_MOBILE = 1.2
const MAX_SCALE_TABLET = 1.5
const MAX_SCALE_DESKTOP = 2.0

export const getScreenType = () => {
  if (SCREEN_WIDTH >= LARGE_DESKTOP_THRESHOLD) return "large-desktop"
  if (SCREEN_WIDTH >= DESKTOP_THRESHOLD) return "desktop"
  if (SCREEN_WIDTH >= TABLET_THRESHOLD) return "tablet"
  if (SCREEN_WIDTH >= MOBILE_THRESHOLD) return "large-mobile"
  return "mobile"
}

export const getScreenDimensions = () => ({
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  isLandscape: SCREEN_WIDTH > SCREEN_HEIGHT,
  aspectRatio: SCREEN_WIDTH / SCREEN_HEIGHT,
})

export const responsiveSize = (
  mobile: number,
  largeMobile?: number,
  tablet?: number,
  desktop?: number,
  largeDesktop?: number,
) => {
  const screenType = getScreenType()
  switch (screenType) {
    case "large-desktop":
      return normalize(largeDesktop || desktop || tablet || largeMobile || mobile)
    case "desktop":
      return normalize(desktop || tablet || largeMobile || mobile)
    case "tablet":
      return normalize(tablet || largeMobile || mobile)
    case "large-mobile":
      return normalize(largeMobile || mobile)
    default:
      return normalize(mobile)
  }
}

export const responsiveFlex = (mobile: number, tablet?: number, desktop?: number, largeDesktop?: number) => {
  const screenType = getScreenType()
  switch (screenType) {
    case "large-desktop":
      return largeDesktop || desktop || tablet || mobile
    case "desktop":
      return desktop || tablet || mobile
    case "tablet":
      return tablet || mobile
    default:
      return mobile
  }
}

export const normalize = (size: number): number => {
  let scale = SCREEN_WIDTH / BASE_WIDTH
  const screenType = getScreenType()

  // Apply different max scales based on screen type
  switch (screenType) {
    case "large-desktop":
      scale = Math.min(scale, MAX_SCALE_DESKTOP)
      break
    case "desktop":
      scale = Math.min(scale, MAX_SCALE_DESKTOP * 0.8)
      break
    case "tablet":
      scale = Math.min(scale, MAX_SCALE_TABLET)
      break
    case "large-mobile":
      scale = Math.min(scale, MAX_SCALE_MOBILE)
      break
    default:
      scale = Math.min(scale, 1.0)
  }

  const newSize = size * scale

  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export const responsivePadding = {
  xs: responsiveSize(4, 6, 8, 10, 12),
  sm: responsiveSize(8, 10, 12, 16, 20),
  md: responsiveSize(16, 20, 24, 32, 40),
  lg: responsiveSize(24, 28, 32, 40, 48),
  xl: responsiveSize(32, 36, 40, 48, 56),
}

export const responsiveFont = {
  xs: responsiveSize(10, 11, 12, 13, 14),
  sm: responsiveSize(12, 13, 14, 15, 16),
  md: responsiveSize(14, 15, 16, 18, 20),
  lg: responsiveSize(16, 18, 20, 22, 24),
  xl: responsiveSize(18, 20, 22, 24, 28),
  xxl: responsiveSize(20, 22, 24, 28, 32),
  xxxl: responsiveSize(24, 26, 28, 32, 36),
}
