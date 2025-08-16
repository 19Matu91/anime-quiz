import type React from "react"
import { View, ScrollView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { ProfileHeader } from "@/components/home/ProfileHeader"
import { AchievementHeader } from "@/components/achievements/AchievementHeader"
import { AchievementBadge } from "@/components/achievements/AchievementBadge"
import { achievementStyles } from "@/styles/achievementStyles"
import { colors } from "@/theme/colors"

const AchievementScreen: React.FC = () => {
  // Mock data
  const currentUser = {
    profileImage: "https://i.imgur.com/oW1dGDI.jpeg",
    username: "MatutanoPoderoso",
    rank: 1,
    progress: 100,
    maxProgress: 400,
    score: 0,
  }

  const achievements = [
    { id: "1", name: "First Quiz!", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: true },
    { id: "2", name: "Otaku", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: true },
    { id: "3", name: "Naruto enjoyer", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: true },
    { id: "4", name: "Weeaboo", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: true },
    { id: "5", name: "State Alchemist", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: false },
    { id: "6", name: "Over 9000!", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: false },
    { id: "7", name: "Ohayo gozaimasu", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: false },
    { id: "8", name: "BAKA!", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: false },
    { id: "9", name: "Space cowboy", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: false },
    { id: "14", name: "Weeaboo", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: false },
    { id: "15", name: "State Alchemist", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: false },
    { id: "16", name: "Over 9000!", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: false },
    { id: "17", name: "Ohayo gozaimasu", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: false },
    { id: "18", name: "BAKA!", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: false },
    { id: "19", name: "Space cowboy", avatar: "https://i.imgur.com/oW1dGDI.jpeg", isUnlocked: false },
  ]

  const completedCount = achievements.filter((a) => a.isUnlocked).length

  const handleAchievementPress = (achievementId: string) => {
    console.log("Achievement pressed:", achievementId)
  }

  return (
    <LinearGradient
      colors={[colors.background.secondary, colors.background.primary]}
      style={achievementStyles.container}
    >
      <View style={achievementStyles.content}>
        {/* Header Section */}
        <View style={achievementStyles.headerSection}>
          <ProfileHeader {...currentUser} />
        </View>

        {/* Achievement Header Section */}
        <View style={achievementStyles.achievementHeaderSection}>
          <AchievementHeader completedCount={completedCount} totalCount={achievements.length} />
        </View>

        {/* Grid Section */}
        <View style={achievementStyles.gridSection}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={achievementStyles.grid}>
              {achievements.map((achievement) => (
                <AchievementBadge
                  key={achievement.id}
                  {...achievement}
                  onPress={() => handleAchievementPress(achievement.id)}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  )
}

export default AchievementScreen
