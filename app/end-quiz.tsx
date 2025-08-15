"use client"

import type React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { QuizResultsHeader } from "@/components/quiz/QuizResultsHeader"
import { ProgressSection } from "@/components/quiz/ProgressSection"
import { quizStyles } from "@/styles/quizStyles"
import { colors } from "@/theme/colors"
import { router } from "expo-router"

// import { QuizResultsHeader } from "../components/quiz/QuizResultsHeader"
// import { ProgressSection } from "../components/quiz/ProgressSection"
// import { quizStyles } from "../styles/quizStyles"
// import { colors } from "../theme/colors"

interface EndQuizScreenProps {
  quizTitle?: string
  difficulty?: string
  correctAnswers?: number
  totalQuestions?: number
  timeRemaining?: number
  currentXP?: number
  maxXP?: number
}

const EndQuizScreen: React.FC<EndQuizScreenProps> = ({
  quizTitle = "Naruto",
  difficulty = "Easy",
  correctAnswers = 7,
  totalQuestions = 10,
  timeRemaining = 27,
  currentXP = 100,
  maxXP = 400,
}) => {
  const isWin = correctAnswers >= totalQuestions * 0.7 // 70% to win
  const timeBonus = Math.floor(timeRemaining / 5) // 1 bonus per 5 seconds


  const onTryAgain = () => {
    // Add logic to restart the quiz
    router.push("/quiz")
  }
  const onGetLife = () => {
    // Add logic to get a life
    router.push("/shop")
  }
  const onExitQuiz = () => {
    // Add logic to exit the quiz
    router.push("/(tabs)")
  }


  return (
    <LinearGradient colors={[colors.background.secondary, colors.background.primary]} style={quizStyles.container}>
      <View style={quizStyles.endQuizContent}>
        {/* Results Header */}
        <View style={quizStyles.resultsHeaderSection}>
          <QuizResultsHeader
            quizTitle={quizTitle}
            difficulty={difficulty}
            isWin={isWin}
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            timeRemaining={timeRemaining}
          />
        </View>

        {/* Progress Section */}
        <View style={quizStyles.progressSection}>
          <ProgressSection currentXP={currentXP} maxXP={maxXP} timeBonus={timeBonus} />
        </View>

        {/* Action Buttons */}
        <View style={quizStyles.actionsSection}>
          <TouchableOpacity style={quizStyles.actionButton} onPress={onTryAgain}>
            <Text style={quizStyles.actionButtonText}>Try again</Text>
          </TouchableOpacity>

          <TouchableOpacity style={quizStyles.actionButton} onPress={onGetLife}>
            <View style={quizStyles.adButtonContent}>
              <View style={quizStyles.adIcon}>
                <Text style={quizStyles.adIconText}>AD</Text>
              </View>
              <Text style={quizStyles.actionButtonText}>Get 1 ❤️</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Exit Option */}
        <View style={quizStyles.exitSection}>
          <TouchableOpacity onPress={onExitQuiz}>
            <Text style={quizStyles.exitText}>Exit quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

export default EndQuizScreen;