import type React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { normalize } from "@/utils/responsive"
import { rewardStyles } from "@/styles/homeStyles"

interface RewardItemProps {
  id: string
  title: string
  gain: number
  image: string
  completed: boolean
  onPress?: () => void
}

export const RewardItem: React.FC<RewardItemProps> = ({ title, gain, image, completed, onPress }) => {
  return (
    <TouchableOpacity
      style={[rewardStyles.container, completed && rewardStyles.completed]}
      onPress={onPress}
      disabled={completed}
    >
      <Image source={{ uri: image }} style={rewardStyles.image} />

      {completed && (
        <View style={rewardStyles.completedOverlay}>
          <Ionicons name="checkmark-circle" size={normalize(30)} color="#00E676" />
        </View>
      )}

      <View style={rewardStyles.textContainer}>
        <Text style={rewardStyles.title}>{title}</Text>
        <View style={rewardStyles.gainContainer}>
          <Text style={rewardStyles.gainText}>gain {gain}</Text>
          <Ionicons name="cash-outline" size={normalize(18)} color="#FFD700" style={{ marginLeft: normalize(5) }} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
