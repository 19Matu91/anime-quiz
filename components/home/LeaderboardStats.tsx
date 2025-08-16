import type React from "react"
import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { normalize } from "@/utils/responsive"
import { leaderboardStyles } from "@/styles/homeStyles"
import { useAuthStore } from "@/stores/authStore"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
]

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(3).replace(/\.?0+$/, "") + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(3).replace(/\.?0+$/, "") + "K"
  }
  return num.toString()
}

export const LeaderboardStats: React.FC = () => {
  const { user } = useAuthStore()

  const userLanguage = languages.find((lang) => lang.code === user?.settings?.language) || languages[0]

  return (
    <View style={leaderboardStyles.container}>
      <View style={leaderboardStyles.item}>
        <View style={leaderboardStyles.header}>
          <Ionicons name="earth" size={normalize(20)} color="#00E676" />
          <Text style={leaderboardStyles.text}>GLOBAL</Text>
        </View>
        <Text style={leaderboardStyles.value}>{formatNumber(user?.stats?.global || 0)}</Text>
      </View>

      <View style={leaderboardStyles.separator} />

      <View style={leaderboardStyles.item}>
        <View style={leaderboardStyles.header}>
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              width: normalize(30),
              height: normalize(30),
              borderRadius: normalize(12),
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: normalize(20), fontWeight: "bold", marginTop: normalize(-2)}}>{userLanguage.flag}</Text>
          </View>
          <Text style={leaderboardStyles.text}>LOCAL</Text>
        </View>
        <Text style={leaderboardStyles.value}>{formatNumber(user?.stats?.local || 0)}</Text>
      </View>

      <View style={leaderboardStyles.separator} />

      <View style={leaderboardStyles.item}>
        <View style={leaderboardStyles.header}>
          <Ionicons name="star" size={normalize(20)} color="#3498db" />
          <Text style={leaderboardStyles.text}>SCORE</Text>
        </View>
        <Text style={leaderboardStyles.value}>{formatNumber(user?.stats?.score || 0)}</Text>
      </View>
    </View>
  )
}
