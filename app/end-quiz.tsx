import { Button, Text, View } from "react-native";
import { router } from 'expo-router';

export default function EndQuizScreen() {
  const goHome = () => {
    router.push('/'); // Navega fuera de tabs
  };

  return (
    <View>
      <Text>EndQuiz</Text>+
      <Button title="Go Home" onPress={goHome} />
    </View>
  );
}
