

import type React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { BottomAlert } from "../common/BottomAlert"
import { colors } from "../../theme/colors"
import { normalize } from "../../utils/responsive"

interface ConfirmationAlertProps {
  isVisible: boolean
  onClose: () => void
  title: string
  message: string
  confirmText: string
  onConfirm: () => void
  type: "signout" | "delete"
}

export const ConfirmationAlert: React.FC<ConfirmationAlertProps> = ({
  isVisible,
  onClose,
  title,
  message,
  confirmText,
  onConfirm,
  type,
}) => {
  return (
    <BottomAlert visible={isVisible} onClose={onClose}>
      <View
        style={{
          backgroundColor: colors.surface.secondary,
          borderRadius: normalize(15),
          padding: normalize(20),
          alignItems: "center",
          margin: normalize(20),
        }}
      >
        <Text
          style={{
            fontSize: normalize(24),
            fontWeight: "bold",
            color: colors.text.primary,
            marginBottom: normalize(20),
            textAlign: "center",
          }}
        >
          {title}
        </Text>

        <Image
          source={{ uri: "https://imgur.com/oW1dGDI.jpeg" }}
          style={{
            width: normalize(180),
            height: normalize(120),
            borderRadius: normalize(10),
            marginBottom: normalize(20),
          }}
        />

        <Text
          style={{
            fontSize: normalize(14),
            color: colors.text.secondary,
            textAlign: "center",
            lineHeight: normalize(20),
            marginBottom: normalize(30),
          }}
        >
          {message}
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: normalize(15),
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: colors.accent.danger,
              paddingVertical: normalize(15),
              borderRadius: normalize(10),
              alignItems: "center",
            }}
            onPress={onConfirm}
          >
            <Text
              style={{
                color: colors.text.primary,
                fontSize: normalize(16),
                fontWeight: "600",
              }}
            >
              {confirmText}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: colors.surface.tertiary,
              paddingVertical: normalize(15),
              borderRadius: normalize(10),
              alignItems: "center",
            }}
            onPress={onClose}
          >
            <Text
              style={{
                color: colors.text.primary,
                fontSize: normalize(16),
                fontWeight: "600",
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomAlert>
  )
}
