import type React from "react"
import { TouchableOpacity, Text } from "react-native"
import { quizStyles } from "../../styles/quizStyles"
import { colors } from "../../theme/colors"

interface AnswerButtonProps {
  answer: string
  onPress: () => void
  state: "default" | "correct" | "incorrect"
  disabled?: boolean
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({ answer, onPress, state, disabled = false }) => {
  const getButtonStyle = () => {
    switch (state) {
      case "correct":
        return [quizStyles.answerButton, { backgroundColor: colors.accent.success }]
      case "incorrect":
        return [quizStyles.answerButton, { backgroundColor: colors.accent.danger }]
      default:
        return [quizStyles.answerButton, quizStyles.defaultAnswerButton]
    }
  }

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress} disabled={disabled} activeOpacity={0.8}>
      <Text style={quizStyles.answerText}>{answer}</Text>
    </TouchableOpacity>
  )
}
