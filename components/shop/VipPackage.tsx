import type React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { vipPackageStyles } from "../../styles/shopStyles"

interface VipPackageProps {
  price: string
  onPress: () => void
}

export const VipPackage: React.FC<VipPackageProps> = ({ price, onPress }) => {
  return (
    <TouchableOpacity style={vipPackageStyles.container} onPress={onPress}>
      <Image source={{ uri: "/anime-wealth.png" }} style={vipPackageStyles.image} />
      <View style={vipPackageStyles.overlay}>
        <Text style={vipPackageStyles.vipText}>VIP</Text>
      </View>
      <View style={vipPackageStyles.priceContainer}>
        <Text style={vipPackageStyles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  )
}
