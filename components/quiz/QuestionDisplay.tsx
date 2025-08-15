import type React from "react"
import { View, Text, Image } from "react-native"
import { quizStyles } from "../../styles/quizStyles"

interface QuestionDisplayProps {
  question: string
  image?: string
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, image }) => {
  return (
    <View style={quizStyles.questionContainer}>
      <Text style={quizStyles.questionText}>{question}</Text>
      {image && (
        <View style={quizStyles.imageContainer}>
          <Image source={{ uri: image }} style={quizStyles.questionImage} />
        </View>
      )}
    </View>
  )
}
