import type React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { achievementStyles } from "../../styles/achievementStyles"

interface AchievementBadgeProps {
  id: string
  name: string
  avatar: string
  isUnlocked: boolean
  onPress?: () => void
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({ name, avatar, isUnlocked, onPress }) => {
  return (
    <TouchableOpacity style={achievementStyles.badgeContainer} onPress={onPress} activeOpacity={0.8}>
      <View style={[achievementStyles.badgeImageContainer, !isUnlocked && achievementStyles.lockedBadge]}>
        <Image source={{ uri: avatar }} style={achievementStyles.badgeImage} />
        {!isUnlocked && (
          <View style={achievementStyles.lockOverlay}>
            <Text style={achievementStyles.lockIcon}>🔒</Text>
          </View>
        )}
      </View>
      <Text style={[achievementStyles.badgeName, !isUnlocked && achievementStyles.lockedBadgeName]}>{name}</Text>
    </TouchableOpacity>
  )
}
