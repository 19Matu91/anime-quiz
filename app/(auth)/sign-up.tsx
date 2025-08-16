

import type React from "react"
import { useState } from "react"
import { View, StatusBar, FlatList, useWindowDimensions, TouchableOpacity, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"
import { OtakuChallengeLogo } from "@/components/common/OtakuChallengeLogo"
import { Input } from "@/components/common/Input"
import { AvatarSelector } from "@/components/avatar/AvatarSelector"
import { colors } from "@/theme/colors"
import { signUpStyles } from "@/styles/signUpStyles"

// Generate avatars
const totalAvatars = 60
const avatarPlaceholder = "https://i.imgur.com/oW1dGDI.jpeg"
const avatars = Array.from({ length: totalAvatars }, (_, i) => ({
  id: `avatar_${i + 1}`,
  uri: avatarPlaceholder,
}))

const SignUpScreen: React.FC = () => {
  const [username, setUsername] = useState("MatutanoPoderoso")
  const [selectedAvatarId, setSelectedAvatarId] = useState(avatars[1].id)

  const { width } = useWindowDimensions()
  const isDesktop = width > 768
  const numColumns = isDesktop ? 10 : 3

  const handleSignInPress = () => {
    router.push("/(auth)")
  }

  const goToHome = () => router.push("/(tabs)")

  const renderAvatar = ({ item }: { item: (typeof avatars)[0] }) => (
    <AvatarSelector
      item={item}
      isSelected={selectedAvatarId === item.id}
      onSelect={setSelectedAvatarId}
      numColumns={numColumns}
    />
  )

  return (
    <LinearGradient colors={[colors.primary, colors.primaryDark]} style={signUpStyles.container}>
      <StatusBar barStyle="light-content" />

      <View style={signUpStyles.fixedHeader}>
        <View style={signUpStyles.logoContainer}>
          <OtakuChallengeLogo size="medium" />
        </View>

        <Input label="Select username:" value={username} onChangeText={setUsername} placeholder="Enter your username" />

        <View style={signUpStyles.inputGroup}>
          <Text style={{ color: colors.textSecondary, fontSize: 16, marginBottom: 10, paddingLeft: 5 }}>
            Select avatar:
          </Text>
        </View>
      </View>

      <FlatList
        data={avatars}
        renderItem={renderAvatar}
        keyExtractor={(item) => item.id}
        key={numColumns}
        numColumns={numColumns}
        contentContainerStyle={signUpStyles.avatarListContainer}
      />

      <View style={signUpStyles.bottomButtonsContainer}>
        <TouchableOpacity style={signUpStyles.signInButton} onPress={handleSignInPress}>
          <Text style={signUpStyles.actionButtonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={signUpStyles.nextButton} onPress={goToHome}>
          <Text style={signUpStyles.actionButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default SignUpScreen;