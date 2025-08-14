import type React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { coinPackageStyles } from "../../styles/shopStyles"

interface CoinPackageProps {
  coins: number
  price: string
  onPress: () => void
}

export const CoinPackage: React.FC<CoinPackageProps> = ({ coins, price, onPress }) => {
  return (
    <TouchableOpacity style={coinPackageStyles.container} onPress={onPress}>
      <Image source={{ uri: "/golden-coins-bag.png" }} style={coinPackageStyles.image} />
      <View style={coinPackageStyles.coinContainer}>
        <Text style={coinPackageStyles.coinAmount}>{coins}</Text>
        <Ionicons name="cash-outline" size={20} color="#FFD700" />
      </View>
      <View style={coinPackageStyles.priceContainer}>
        <Text style={coinPackageStyles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  )
}
