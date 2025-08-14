import type React from "react"
import { View, Text, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { normalize } from "@/utils/responsive"
import { leaderboardStyles } from "@/styles/homeStyles"

interface LeaderboardStatsProps {
  globalRank: number
  localRank: number
  score: string
  flagImage: string
}

export const LeaderboardStats: React.FC<LeaderboardStatsProps> = ({ globalRank, localRank, score, flagImage }) => {
  return (
    <View style={leaderboardStyles.container}>
      <View style={leaderboardStyles.item}>
        <View style={leaderboardStyles.header}>
          <Ionicons name="earth" size={normalize(20)} color="#00E676" />
          <Text style={leaderboardStyles.text}>GLOBAL</Text>
        </View>
        <Text style={leaderboardStyles.value}>{globalRank.toLocaleString()}</Text>
      </View>

      <View style={leaderboardStyles.separator} />

      <View style={leaderboardStyles.item}>
        <View style={leaderboardStyles.header}>
          <Image source={{ uri: flagImage }} style={leaderboardStyles.flagIcon} />
          <Text style={leaderboardStyles.text}>LOCAL</Text>
        </View>
        <Text style={leaderboardStyles.value}>{localRank}</Text>
      </View>

      <View style={leaderboardStyles.separator} />

      <View style={leaderboardStyles.item}>
        <View style={leaderboardStyles.header}>
          <Ionicons name="star" size={normalize(20)} color="#3498db" />
          <Text style={leaderboardStyles.text}>SCORE</Text>
        </View>
        <Text style={leaderboardStyles.value}>{score}</Text>
      </View>
    </View>
  )
}
