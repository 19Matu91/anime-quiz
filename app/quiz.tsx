import { Button, Text, View } from "react-native";
import { router } from 'expo-router';

export default function QuizScreen() {
  const endQuiz = () => {
    router.push('/end-quiz'); // Navega fuera de tabs
  };

  return (
    <View>
      <Text>Quiz</Text>+
      <Button title="End Quiz" onPress={endQuiz} />
    </View>
  );
}
