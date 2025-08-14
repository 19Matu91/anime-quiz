import { normalize } from "../utils/responsive"

export const typography = {
  sizes: {
    xs: normalize(12),
    sm: normalize(14),
    md: normalize(16),
    lg: normalize(18),
    xl: normalize(20),
    xxl: normalize(24),
    xxxl: normalize(32),
    huge: normalize(36),
    massive: normalize(42),
  },
  weights: {
    normal: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },
}
