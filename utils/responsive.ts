import { Dimensions, PixelRatio, Platform } from "react-native"

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const BASE_WIDTH = 414 // iPhone 11 base width
const DESKTOP_THRESHOLD = 768
const MAX_SCALE = 1.5

export const normalize = (size: number): number => {
  let scale = SCREEN_WIDTH / BASE_WIDTH

  if (SCREEN_WIDTH > DESKTOP_THRESHOLD) {
    scale = Math.min(scale, MAX_SCALE)
  }

  const newSize = size * scale

  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
