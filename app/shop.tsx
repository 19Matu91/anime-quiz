import { Button, Text, View } from "react-native";
import { router } from 'expo-router';

export default function ShopModal() {
    // Cerrar modal
    const closeShop = () => {
        router.back(); // o router.dismiss()
    };
    return (
        <View>
            <Text>ShopModal</Text>
            <Button title="Close Shop" onPress={closeShop} />
        </View>
    );
}
