import type React from "react"
import { View, Text, Image } from "react-native"
import { podiumPlayerStyles } from "../../styles/leaderboardStyles"

interface PodiumPlayerProps {
  position: 1 | 2 | 3
  avatar: string
  username: string
  score: number
  level: number
  isCurrentUser?: boolean
}

export const PodiumPlayer: React.FC<PodiumPlayerProps> = ({
  position,
  avatar,
  username,
  score,
  level,
  isCurrentUser = false,
}) => {
  const getBorderColor = () => {
    switch (position) {
      case 1:
        return "#FFD700" // Gold
      case 2:
        return "#C0C0C0" // Silver
      case 3:
        return "#00E676" // Green
      default:
        return "#FFD700"
    }
  }

  return (
    <View
      style={[
        podiumPlayerStyles.container,
        position === 1 && podiumPlayerStyles.firstPlace,
        { borderColor: getBorderColor() },
      ]}
    >
      <Text style={podiumPlayerStyles.username}>{username}</Text>
      <View style={[podiumPlayerStyles.avatarContainer, { borderColor: getBorderColor() }]}>
        <Image source={{ uri: avatar }} style={podiumPlayerStyles.avatar} />
        {isCurrentUser && <View style={podiumPlayerStyles.currentUserIndicator} />}
      </View>
      <Text style={podiumPlayerStyles.score}>{score.toLocaleString()}</Text>
      <Text style={podiumPlayerStyles.level}>Level {level}</Text>
    </View>
  )
}
