import type React from "react"
import { View, Text } from "react-native"
import { quizStyles } from "../../styles/quizStyles"

interface QuizResultsHeaderProps {
  quizTitle: string
  difficulty: string
  isWin: boolean
  correctAnswers: number
  totalQuestions: number
  timeRemaining: number
}

export const QuizResultsHeader: React.FC<QuizResultsHeaderProps> = ({
  quizTitle,
  difficulty,
  isWin,
  correctAnswers,
  totalQuestions,
  timeRemaining,
}) => {
  return (
    <View style={quizStyles.resultsHeaderContainer}>
      <Text style={quizStyles.quizTitleText}>
        {quizTitle} - {difficulty}
      </Text>
      <Text style={quizStyles.quizEndedText}>QUIZ ENDED</Text>
      <Text style={[quizStyles.resultStatusText, isWin ? quizStyles.winText : quizStyles.loseText]}>
        {isWin ? "You Won!" : "You Lost!"}
      </Text>
      <View style={quizStyles.statsContainer}>
        <Text style={quizStyles.statsText}>
          Correct answers: {correctAnswers}/{totalQuestions}
        </Text>
        <Text style={quizStyles.statsText}>Time remaining: {timeRemaining} sec</Text>
      </View>
    </View>
  )
}
