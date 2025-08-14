import type React from "react"
import { View, Text } from "react-native"
import { achievementStyles } from "../../styles/achievementStyles"

interface AchievementHeaderProps {
  completedCount: number
  totalCount: number
}

export const AchievementHeader: React.FC<AchievementHeaderProps> = ({ completedCount, totalCount }) => {
  const progressPercentage = (completedCount / totalCount) * 100

  return (
    <View style={achievementStyles.headerContainer}>
      <View style={achievementStyles.titleContainer}>
        <Text style={achievementStyles.medalIcon}>🏅</Text>
        <View style={achievementStyles.titleTextContainer}>
          <Text style={achievementStyles.title}>Achievements</Text>
          <Text style={achievementStyles.subtitle}>
            {completedCount} out of {totalCount} achievements
          </Text>
        </View>
      </View>

      <View style={achievementStyles.progressContainer}>
        <View style={achievementStyles.progressBar}>
          <View style={[achievementStyles.progressFill, { width: `${progressPercentage}%` }]} />
        </View>
      </View>
    </View>
  )
}
