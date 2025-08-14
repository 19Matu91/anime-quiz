import type React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { normalize } from "@/utils/responsive"
import { profileHeaderStyles } from "@/styles/homeStyles"

interface ProfileHeaderProps {
  profileImage: string
  username: string
  rank: number
  progress: number
  maxProgress: number
  score: number
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profileImage,
  username,
  rank,
  progress,
  maxProgress,
  score,
}) => {
  const progressPercentage = (progress / maxProgress) * 100

  return (
    <View style={profileHeaderStyles.container}>
      <Image source={{ uri: profileImage }} style={profileHeaderStyles.avatar} />

      <View style={profileHeaderStyles.info}>
        <Text style={profileHeaderStyles.name}>{username}</Text>
        <View style={profileHeaderStyles.progressContainer}>
          <View style={profileHeaderStyles.rankBadge}>
            <Ionicons name="star" size={normalize(36)} color="#3498db" />
            <Text style={profileHeaderStyles.rankNumber}>{rank}</Text>
          </View>
          <View style={profileHeaderStyles.progressBar}>
            <View style={[profileHeaderStyles.progressBarFill, { width: `${progressPercentage}%` }]} />
          </View>
          <Text style={profileHeaderStyles.progressText}>
            {progress}/{maxProgress}
          </Text>
        </View>
      </View>

      <View style={profileHeaderStyles.scoreContainer}>
        <View style={profileHeaderStyles.scoreIcons}>
          <Ionicons name="cash-outline" size={normalize(24)} color="#FFD700" />
          <Text style={profileHeaderStyles.scoreText}>{score.toLocaleString()}</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/shop")}>
          <Ionicons name="add-circle-outline" size={normalize(24)} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
