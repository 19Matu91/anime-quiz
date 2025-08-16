"use client"

import type React from "react"
import { useState } from "react"
import { View, Text, PanResponder } from "react-native"
import { colors } from "../../theme/colors"
import { normalize } from "../../utils/responsive"

interface SettingsSliderProps {
  label: string
  value: number
  onValueChange: (value: number) => void
}

export const SettingsSlider: React.FC<SettingsSliderProps> = ({ label, value, onValueChange }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [sliderWidth, setSliderWidth] = useState(200)

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setIsDragging(true)
    },
    onPanResponderMove: (event, gestureState) => {
      const { locationX } = event.nativeEvent
      const newValue = Math.max(0, Math.min(100, Math.round((locationX / sliderWidth) * 100)))
      onValueChange(newValue)
    },
    onPanResponderRelease: () => {
      setIsDragging(false)
    },
  })

  return (
    <View
      style={{
        backgroundColor: colors.surface.secondary,
        borderRadius: normalize(25),
        paddingHorizontal: normalize(20),
        paddingVertical: normalize(15),
        marginBottom: normalize(12),
      }}
    >
      <Text
        style={{
          color: colors.text.primary,
          fontSize: normalize(16),
          fontWeight: "500",
          marginBottom: normalize(10),
        }}
      >
        {label}
      </Text>
      <View
        style={{
          height: normalize(6),
          backgroundColor: colors.surface.tertiary,
          borderRadius: normalize(3),
          position: "relative",
          flex: 1,
          borderWidth: 1,
          borderColor: colors.text.secondary,
        }}
        {...panResponder.panHandlers}
        onLayout={(event) => {
          setSliderWidth(event.nativeEvent.layout.width)
        }}
      >
        <View
          style={{
            height: "100%",
            width: `${value}%`,
            backgroundColor: colors.accent.gold,
            borderRadius: normalize(3),
          }}
        />
        <View
          style={{
            position: "absolute",
            left: `${value}%`,
            top: normalize(-6),
            width: normalize(18),
            height: normalize(18),
            borderRadius: normalize(9),
            backgroundColor: colors.accent.gold,
            marginLeft: normalize(-9),
            opacity: isDragging ? 0.8 : 1,
            borderWidth: 2,
            borderColor: colors.text.primary,
          }}
        />
      </View>
    </View>
  )
}
