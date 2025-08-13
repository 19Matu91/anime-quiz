import { Button, Text, View } from "react-native";
import { router } from 'expo-router';

export default function HomeScreen() {
  const openShop = () => {
    router.push('/shop'); // Navega fuera de tabs
  };
  const startQuiz = () => {
    router.push('/quiz'); // Navega fuera de tabs
  };

  return (
    <View>
      <Text>Home</Text>+
      <Button title="Start Quiz" onPress={startQuiz} />
      <Button title="Open Shop" onPress={openShop} />
    </View>
  );
}
