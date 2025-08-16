"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { BottomAlert } from "@/components/common/BottomAlert"
import { QuizHeader } from "@/components/quiz/QuizHeader"
import { QuestionDisplay } from "@/components/quiz/QuestionDisplay"
import { AnswerButton } from "@/components/quiz/AnswerButton"
import { quizStyles } from "@/styles/quizStyles"
import { colors } from "@/theme/colors"
import { router } from "expo-router"

interface QuizQuestion {
  id: number
  question: string
  image?: string
  answers: string[]
  correctAnswer: number
}

const sampleQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Whose sharingan is this? (pregunta con imagen)",
    image: "https://i.imgur.com/oW1dGDI.jpeg",
    answers: ["Itachi Uchiha", "Orochimaru", "Kakashi Hatake", "Tsunade"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Whose sharingan is this? (pregunta sin imagen)",
    answers: ["Itachi Uchiha", "Orochimaru", "Kakashi Hatake", "Tsunade"],
    correctAnswer: 0,
  },
]

export const QuizScreen: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(12)
  const [lives, setLives] = useState(2)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [showAbandonAlert, setShowAbandonAlert] = useState(false)
  const [answerStates, setAnswerStates] = useState<("default" | "correct" | "incorrect")[]>([
    "default",
    "default",
    "default",
    "default",
  ])
  const insets = useSafeAreaInsets()

  const currentQuestion = sampleQuestions[currentQuestionIndex]

  useEffect(() => {
    if (timeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeRemaining === 0 && !showResults) {
      handleTimeout()
    }
  }, [timeRemaining, showResults])

  const handleTimeout = () => {
    setLives(lives - 1)
    setShowResults(true)
    const newStates = ["default", "default", "default", "default"] as ("default" | "correct" | "incorrect")[]
    newStates[currentQuestion.correctAnswer] = "correct"
    setAnswerStates(newStates)

    setTimeout(() => {
      nextQuestion()
    }, 2000)
  }

  const handleAnswerPress = (answerIndex: number) => {
    if (selectedAnswer !== null || showResults) return

    setSelectedAnswer(answerIndex)
    setShowResults(true)

    const newStates = ["default", "default", "default", "default"] as ("default" | "correct" | "incorrect")[]

    if (answerIndex === currentQuestion.correctAnswer) {
      newStates[answerIndex] = "correct"
    } else {
      newStates[answerIndex] = "incorrect"
      newStates[currentQuestion.correctAnswer] = "correct"
      setLives(lives - 1)
    }

    setAnswerStates(newStates)

    setTimeout(() => {
      nextQuestion()
    }, 2000)
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setTimeRemaining(12)
      setSelectedAnswer(null)
      setShowResults(false)
      setAnswerStates(["default", "default", "default", "default"])
    } else {
      console.log("[v0] Quiz completed!")
      router.push("/end-quiz")
    }
  }

  const handleAbandonQuiz = () => {
    setShowAbandonAlert(true)
  }

  const confirmAbandonQuiz = () => {
    setShowAbandonAlert(false)
    // Add navigation logic here to exit quiz
    router.push("/(tabs)")
  }

  const cancelAbandonQuiz = () => {
    setShowAbandonAlert(false)
  }

  return (
    <LinearGradient colors={[colors.background.secondary, colors.background.primary]} style={quizStyles.container}>
      <View style={[quizStyles.content, { paddingTop: insets.top }]}>
        {/* Quiz Header */}
        <View style={quizStyles.headerSection}>
          <QuizHeader
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={sampleQuestions.length}
            timeRemaining={timeRemaining}
            lives={lives}
          />
        </View>

        {/* Question Display */}
        <View style={quizStyles.questionSection}>
          <QuestionDisplay question={currentQuestion.question} image={currentQuestion.image} />
        </View>

        {/* Answer Buttons */}
        <View style={quizStyles.answersSection}>
          <View style={quizStyles.answersGrid}>
            {currentQuestion.answers.map((answer, index) => (
              <AnswerButton
                key={index}
                answer={answer}
                onPress={() => handleAnswerPress(index)}
                state={answerStates[index]}
                disabled={showResults}
              />
            ))}
          </View>
        </View>

        {/* Bottom Section */}
        <View style={quizStyles.bottomSection}>
          <TouchableOpacity style={quizStyles.abandonButton} onPress={handleAbandonQuiz}>
            <Text style={quizStyles.abandonText}>Abandon quiz</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Abandon quiz confirmation alert */}
      <BottomAlert visible={showAbandonAlert} onClose={cancelAbandonQuiz}>
        <View style={quizStyles.abandonAlertContent}>
          <Image
            source={{ uri: "https://i.imgur.com/oW1dGDI.jpeg" }}
            style={quizStyles.abandonAlertImage}
            resizeMode="cover"
          />
          <Text style={quizStyles.abandonAlertText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod !
          </Text>
          <TouchableOpacity style={quizStyles.abandonConfirmButton} onPress={confirmAbandonQuiz}>
            <Text style={quizStyles.abandonConfirmText}>Abandon quiz</Text>
          </TouchableOpacity>
        </View>
      </BottomAlert>
    </LinearGradient>
  )
}

export default QuizScreen
