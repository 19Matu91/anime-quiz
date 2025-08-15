import type React from "react"
import { View, Text } from "react-native"
import { quizStyles } from "../../styles/quizStyles"

interface ProgressSectionProps {
  currentXP: number
  maxXP: number
  timeBonus: number
}

export const ProgressSection: React.FC<ProgressSectionProps> = ({ currentXP, maxXP, timeBonus }) => {
  const progressPercentage = (currentXP / maxXP) * 100

  return (
    <View style={quizStyles.progressSectionContainer}>
      <Text style={quizStyles.nextLevelText}>Next level:</Text>
      <View style={quizStyles.progressBarContainer}>
        <View style={quizStyles.progressBarBackground}>
          <View style={[quizStyles.progressBarFill, { width: `${progressPercentage}%` }]} />
        </View>
        <Text style={quizStyles.progressText}>
          {currentXP}/{maxXP}
        </Text>
      </View>
      <View style={quizStyles.bonusContainer}>
        <Text style={quizStyles.bonusIcon}>⚙️</Text>
        <Text style={quizStyles.bonusText}>0 + {timeBonus} Time Bonus</Text>
      </View>
    </View>
  )
}
