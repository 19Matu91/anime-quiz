import { Dimensions, PixelRatio, Platform } from "react-native"

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const BASE_WIDTH = 414 // iPhone 11 base width
const DESKTOP_THRESHOLD = 768
const LARGE_DESKTOP_THRESHOLD = 1200
const MAX_SCALE = 2.0

export const getScreenType = () => {
  if (SCREEN_WIDTH >= LARGE_DESKTOP_THRESHOLD) return "large-desktop"
  if (SCREEN_WIDTH >= DESKTOP_THRESHOLD) return "desktop"
  if (SCREEN_WIDTH >= 480) return "tablet"
  return "mobile"
}

export const responsiveSize = (mobile: number, tablet?: number, desktop?: number, largeDesktop?: number) => {
  const screenType = getScreenType()
  switch (screenType) {
    case "large-desktop":
      return normalize(largeDesktop || desktop || tablet || mobile)
    case "desktop":
      return normalize(desktop || tablet || mobile)
    case "tablet":
      return normalize(tablet || mobile)
    default:
      return normalize(mobile)
  }
}

export const responsiveFlex = (mobile: number, tablet?: number, desktop?: number) => {
  const screenType = getScreenType()
  if (screenType === "desktop" || screenType === "large-desktop") {
    return desktop || tablet || mobile
  }
  if (screenType === "tablet") {
    return tablet || mobile
  }
  return mobile
}

export const normalize = (size: number): number => {
  let scale = SCREEN_WIDTH / BASE_WIDTH

  if (SCREEN_WIDTH > LARGE_DESKTOP_THRESHOLD) {
    scale = Math.min(scale, MAX_SCALE)
  } else if (SCREEN_WIDTH > DESKTOP_THRESHOLD) {
    scale = Math.min(scale, 1.8) // Better scaling for regular desktops
  }

  const newSize = size * scale

  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
