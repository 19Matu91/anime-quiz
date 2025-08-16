"use client"

import type React from "react"
import { View, Text, PanResponder } from "react-native"
import { useRef } from "react"
import { colors } from "../../theme/colors"
import { normalize } from "../../utils/responsive"

interface SettingsSliderProps {
  label: string
  value: number
  onValueChange: (value: number) => void
}

export const SettingsSlider: React.FC<SettingsSliderProps> = ({ label, value, onValueChange }) => {
  const sliderRef = useRef<View>(null)
  const sliderWidth = 280 // approximate slider width

  const calculateValue = (pageX: number, callback: (value: number) => void) => {
    if (sliderRef.current) {
      sliderRef.current.measure((x, y, width, height, pageXOffset) => {
        const relativeX = pageX - pageXOffset
        const newValue = Math.round((relativeX / width) * 100)
        const clampedValue = Math.max(0, Math.min(100, newValue))
        callback(clampedValue)
      })
    }
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (event) => {
      calculateValue(event.nativeEvent.pageX, onValueChange)
    },
    onPanResponderMove: (event) => {
      calculateValue(event.nativeEvent.pageX, onValueChange)
    },
  })

  return (
    <View
      style={{
        backgroundColor: colors.surface.secondary,
        borderRadius: normalize(25),
        paddingHorizontal: normalize(20),
        paddingVertical: normalize(20),
        marginBottom: normalize(12),
      }}
    >
      <Text
        style={{
          color: colors.text.primary,
          fontSize: normalize(16),
          fontWeight: "500",
          marginBottom: normalize(15),
        }}
      >
        {label}
      </Text>

      <View
        ref={sliderRef}
        {...panResponder.panHandlers}
        style={{
          height: normalize(50),
          justifyContent: "center",
          paddingHorizontal: normalize(10),
        }}
      >
        <View
          style={{
            height: normalize(8),
            backgroundColor: colors.surface.tertiary,
            borderRadius: normalize(4),
            position: "relative",
          }}
        >
          {/* Progress bar */}
          <View
            style={{
              height: normalize(8),
              backgroundColor: colors.accent.gold,
              borderRadius: normalize(4),
              width: `${value}%`,
            }}
          />

          {/* Thumb */}
          <View
            style={{
              position: "absolute",
              left: `${value}%`,
              top: normalize(-8),
              width: normalize(24),
              height: normalize(24),
              backgroundColor: colors.accent.gold,
              borderRadius: normalize(12),
              borderWidth: 2,
              borderColor: colors.surface.primary,
              marginLeft: normalize(-12), // Center the thumb
            }}
          />
        </View>
      </View>

      <Text
        style={{
          color: colors.text.secondary,
          fontSize: normalize(12),
          textAlign: "center",
          marginTop: normalize(8),
        }}
      >
        {Math.round(value)}%
      </Text>
    </View>
  )
}
