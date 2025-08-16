"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ScrollView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ProfileHeader } from "@/components/home/ProfileHeader"
import { LeaderboardStats } from "@/components/home/LeaderboardStats"
import { RewardItem } from "@/components/home/RewardItem"
import { SearchBar } from "@/components/home/SearchBar"
import { CollectionItem } from "@/components/home/CollectionItem"
import { homeStyles } from "@/styles/homeStyles"
import { colors } from "@/theme/colors"
import { View, Text, ScrollView as HorizontalScrollView } from "react-native"
import { router } from "expo-router"

const dailyRewards = [
  { id: "1", title: "View Ad", gain: 10, image: "https://i.imgur.com/Kz8jD2a.png", completed: false },
  { id: "2", title: "Invite a Friend", gain: 50, image: "https://i.imgur.com/2XyEwMh.png", completed: false },
  { id: "3", title: "Complete 10 Quizzes", gain: 50, image: "https://i.imgur.com/k6wMv3s.png", completed: true },
  { id: "4", title: "Complete 1 Quiz", gain: 20, image: "https://i.imgur.com/oW1dGDI.jpeg", completed: false },
]

const initialCollectionItems = [
  { id: "1", title: "Naruto", image: "https://i.imgur.com/83R90z2.jpeg", unlocked: true, isImpossibleDisabled: false },
  {
    id: "2",
    title: "One Piece",
    image: "https://i.imgur.com/jG5V0zQ.jpeg",
    unlocked: true,
    isImpossibleDisabled: true,
  },
  {
    id: "3",
    title: "Attack on Titan",
    image: "https://i.imgur.com/vH9Yk9I.jpeg",
    unlocked: true,
    isImpossibleDisabled: true,
  },
  {
    id: "4",
    title: "My Hero Academia",
    image: "https://i.imgur.com/yE50n3O.jpeg",
    unlocked: false,
    isImpossibleDisabled: true,
  },
  {
    id: "5",
    title: "Chainsaw Man",
    image: "https://i.imgur.com/pYxW3pX.jpeg",
    unlocked: false,
    isImpossibleDisabled: true,
  },
  {
    id: "6",
    title: "Spy x Family",
    image: "https://i.imgur.com/UfB13d2.jpeg",
    unlocked: false,
    isImpossibleDisabled: true,
  },
  {
    id: "7",
    title: "Frieren: Beyond Journey's End",
    image: "https://i.imgur.com/S78bM5t.jpeg",
    unlocked: false,
    isImpossibleDisabled: true,
  },
  {
    id: "8",
    title: "Solo Leveling",
    image: "https://i.imgur.com/2Yc5R6G.jpeg",
    unlocked: false,
    isImpossibleDisabled: true,
  },
  {
    id: "9",
    title: "Jujutsu Kaisen",
    image: "https://i.imgur.com/sYc7RzQ.jpeg",
    unlocked: false,
    isImpossibleDisabled: true,
  },
  {
    id: "10",
    title: "Vinland Saga",
    image: "https://i.imgur.com/x07x2r5.jpeg",
    unlocked: false,
    isImpossibleDisabled: true,
  },
]

const HomeScreen: React.FC = () => {
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null)
  const [searchText, setSearchText] = useState("")
  const [filteredItems, setFilteredItems] = useState(initialCollectionItems)
  const insets = useSafeAreaInsets()

  useEffect(() => {
    if (searchText === "") {
      setFilteredItems(initialCollectionItems)
    } else {
      const filtered = initialCollectionItems.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
      )
      setFilteredItems(filtered)
    }
  }, [searchText])

  const handleToggle = (itemId: string) => {
    setExpandedItemId(itemId === expandedItemId ? null : itemId)
  }

  const handleDifficultySelect = (itemId: string, difficulty: "easy" | "hard" | "impossible") => {
    router.push("/quiz")
    console.log(`Selected ${difficulty} for item ${itemId}`)
    // Add navigation or quiz logic here
  }

  const handleRewardPress = (rewardId: string) => {
    console.log(`Reward ${rewardId} pressed`)
    // Add reward claiming logic here
  }

  return (
    <LinearGradient colors={[colors.background.secondary, colors.background.primary]} style={homeStyles.container}>
      <ScrollView
        contentContainerStyle={[homeStyles.scrollContent, { paddingBottom: insets.bottom }]}
        style={{ paddingTop: insets.top }}
      >
        <View style={homeStyles.section}>
          <ProfileHeader
            profileImage="https://i.imgur.com/oW1dGDI.jpeg"
            username="MatutanoPoderoso"
            rank={1}
            progress={100}
            maxProgress={400}
            score={0}
          />
        </View>

        <LeaderboardStats globalRank={50000} localRank={34} score="1.02M" flagImage="https://i.imgur.com/6aO6Q6Q.png" />

        <View style={homeStyles.section}>
          <Text style={homeStyles.sectionTitle}>Earn rewards</Text>
          <HorizontalScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical: 10 }}>
            {dailyRewards.map((reward) => (
              <RewardItem key={reward.id} {...reward} onPress={() => handleRewardPress(reward.id)} />
            ))}
          </HorizontalScrollView>
        </View>

        <View style={homeStyles.section}>
          <View style={homeStyles.sectionHeader}>
            <Text style={homeStyles.sectionTitle}>Collection</Text>
            <SearchBar value={searchText} onChangeText={setSearchText} placeholder="Search" />
          </View>
          {filteredItems.map((item) => (
            <CollectionItem
              key={item.id}
              item={item}
              isExpanded={expandedItemId === item.id}
              onToggle={handleToggle}
              onDifficultySelect={handleDifficultySelect}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default HomeScreen
