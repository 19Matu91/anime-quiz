import type React from "react"
import { View, Text } from "react-native"
import { quizStyles } from "../../styles/quizStyles"

interface QuizHeaderProps {
  currentQuestion: number
  totalQuestions: number
  timeRemaining: number
  lives: number
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({ currentQuestion, totalQuestions, timeRemaining, lives }) => {
  return (
    <View style={quizStyles.headerContainer}>
      <Text style={quizStyles.progressText}>
        {currentQuestion}/{totalQuestions}
      </Text>

      <View style={quizStyles.timerContainer}>
        <View style={quizStyles.timerCircle}>
          <Text style={quizStyles.timerText}>{timeRemaining}"</Text>
        </View>
      </View>

      <View style={quizStyles.livesContainer}>
        <Text style={quizStyles.livesText}>{lives}</Text>
        <Text style={quizStyles.heartIcon}>❤️</Text>
      </View>
    </View>
  )
}
