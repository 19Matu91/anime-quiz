

import type React from "react"
import { Modal, TouchableOpacity, Animated, useWindowDimensions } from "react-native"
import { useEffect, useRef } from "react"
import { colors } from "../../theme/colors"
import { normalize } from "../../utils/responsive"

interface BottomAlertProps {
  visible: boolean
  onClose: () => void
  children: React.ReactNode
}

export const BottomAlert: React.FC<BottomAlertProps> = ({ visible, onClose, children }) => {
  const slideAnim = useRef(new Animated.Value(0)).current
  const { height } = useWindowDimensions()

  useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
      }).start()
    } else {
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 100,
        friction: 8,
      }).start()
    }
  }, [visible, slideAnim])

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 0],
  })

  return (
    <Modal transparent visible={visible} animationType="none" onRequestClose={onClose}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "flex-end",
        }}
        activeOpacity={1}
        onPress={onClose}
      >
        <Animated.View
          style={{
            transform: [{ translateY }],
            backgroundColor: colors.surface.secondary,
            borderTopLeftRadius: normalize(20),
            borderTopRightRadius: normalize(20),
            paddingHorizontal: normalize(20),
            paddingVertical: normalize(24),
            maxHeight: height * 0.7,
          }}
        >
          <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
            {children}
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  )
}
