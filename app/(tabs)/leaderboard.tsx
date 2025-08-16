"use client"

import type React from "react"
import { useState } from "react"
import { View, ScrollView } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ProfileHeader } from "@/components/home/ProfileHeader"
import { TabSelector } from "@/components/leaderboard/TabSelector"
import { PodiumPlayer } from "@/components/leaderboard/PodiumPlayer"
import { LeaderboardItem } from "@/components/leaderboard/LeaderboardItem"
import { leaderboardStyles } from "@/styles/leaderboardStyles"
import { colors } from "@/theme/colors"
import { LinearGradient } from "expo-linear-gradient"

const LeaderboardScreen: React.FC = () => {
  const insets = useSafeAreaInsets()
  const [activeTab, setActiveTab] = useState<"all" | "weekly" | "daily">("all")

  // Mock data
  const currentUser = {
    profileImage: "https://i.imgur.com/oW1dGDI.jpeg",
    username: "MatutanoPoderoso",
    rank: 1,
    progress: 100,
    maxProgress: 400,
    score: 0,
  }

  const podiumPlayers = [
    { position: 2 as const, avatar: "https://i.imgur.com/oW1dGDI.jpeg", username: "Jackson", score: 1847, level: 12 },
    {
      position: 1 as const,
      avatar: "https://i.imgur.com/oW1dGDI.jpeg",
      username: "MatutanoPoderoso",
      score: 2480,
      level: 17,
      isCurrentUser: true,
    },
    { position: 3 as const, avatar: "https://i.imgur.com/oW1dGDI.jpeg", username: "EmmaAria", score: 1674, level: 9 },
  ]

  const leaderboardData = [
    { position: 4, avatar: "https://i.imgur.com/oW1dGDI.jpeg", username: "Sebastian", level: 7, score: 1124 },
    { position: 5, avatar: "https://i.imgur.com/oW1dGDI.jpeg", username: "Jason", level: 6, score: 875 },
    {
      position: 6,
      avatar: "https://i.imgur.com/oW1dGDI.jpeg",
      username: "Natalie",
      level: 8,
      score: 774,
      isHighlighted: true,
    },
    { position: 7, avatar: "https://i.imgur.com/oW1dGDI.jpeg", username: "Serenity", level: 5, score: 728 },
    { position: 8, avatar: "https://i.imgur.com/oW1dGDI.jpeg", username: "Hannah", level: 2, score: 559 },
  ]

  return (
    <LinearGradient
      colors={[colors.background.secondary, colors.background.primary]}
      style={leaderboardStyles.container}
    >
      <View style={[leaderboardStyles.content, { paddingTop: insets.top }]}>
        {/* Header Section */}
        <View style={leaderboardStyles.headerSection}>
          <ProfileHeader {...currentUser} />
        </View>

        {/* Tab Section */}
        <View style={leaderboardStyles.tabSection}>
          <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
        </View>

        {/* Podium Section */}
        <View style={leaderboardStyles.podiumSection}>
          <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "flex-end" }}>
            {podiumPlayers.map((player) => (
              <PodiumPlayer key={player.position} {...player} />
            ))}
          </View>
        </View>

        {/* List Section */}
        <View style={leaderboardStyles.listSection}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {leaderboardData.map((player) => (
              <LeaderboardItem key={player.position} {...player} />
            ))}
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  )
}

export default LeaderboardScreen
