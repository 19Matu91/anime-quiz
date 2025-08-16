import type React from "react"
import { ScrollView, View, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ProfileHeader } from "@/components/home/ProfileHeader"
import { GetCoinsButton } from "@/components/common/GetCoinsButton"
import { CoinPackage } from "@/components/shop/CoinPackage"
import { VipPackage } from "@/components/shop/VipPackage"
import { shopStyles } from "@/styles/shopStyles"
import { colors } from "@/theme/colors"
import { CloseButton } from "@/components/common/CloseButton"
import { router } from "expo-router"

const coinPackages = [
  { id: "1", coins: 100, price: "0.99€" },
  { id: "2", coins: 300, price: "1.99€" },
  { id: "3", coins: 500, price: "2.99€" },
  { id: "4", coins: 1000, price: "4.99€" },
]

const ShopScreen: React.FC = () => {
  const insets = useSafeAreaInsets()

  const handleGetCoinsPress = () => {
    console.log("Get coins button pressed")
    // Add logic for free coins (ads, etc.)
  }

  const handleCoinPackagePress = (packageId: string, coins: number, price: string) => {
    console.log(`Coin package pressed: ${coins} coins for ${price}`)
    // Add purchase logic here
  }

  const handleVipPress = () => {
    console.log("VIP package pressed")
    // Add VIP purchase logic here
  }

  const handleClosePress = () => {
    console.log("Close button pressed")
    router.back()
    // Add navigation logic to go back or close shop
  }

  return (
    <LinearGradient colors={[colors.background.secondary, colors.background.primary]} style={shopStyles.container}>
      <ScrollView contentContainerStyle={[shopStyles.scrollContent, { paddingTop: insets.top }]}>
        <View style={shopStyles.section}>
          <ProfileHeader
            profileImage="https://i.imgur.com/oW1dGDI.jpeg"
            username="MatutanoPoderoso"
            rank={1}
            progress={100}
            maxProgress={400}
            score={0}
          />
        </View>

        <CloseButton onPress={handleClosePress} />

        <View style={shopStyles.section}>
          <Text style={shopStyles.sectionTitle}>Coin Packages</Text>
          <View style={shopStyles.coinPackagesGrid}>
            {coinPackages.map((pkg) => (
              <CoinPackage
                key={pkg.id}
                coins={pkg.coins}
                price={pkg.price}
                onPress={() => handleCoinPackagePress(pkg.id, pkg.coins, pkg.price)}
              />
            ))}
          </View>
        </View>

        <View style={shopStyles.section}>
          <Text style={shopStyles.sectionTitle}>Premium</Text>
          <VipPackage price="7.99€" onPress={handleVipPress} />
        </View>

        <View style={shopStyles.section}>
          <GetCoinsButton onPress={handleGetCoinsPress} />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default ShopScreen
