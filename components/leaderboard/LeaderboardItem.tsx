import type React from "react"
import { View, Text, Image } from "react-native"
import { leaderboardItemStyles } from "../../styles/leaderboardStyles"

interface LeaderboardItemProps {
  position: number
  avatar: string
  username: string
  level: number
  score: number
  isHighlighted?: boolean
}

export const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  position,
  avatar,
  username,
  level,
  score,
  isHighlighted = false,
}) => {
  return (
    <View style={[leaderboardItemStyles.container, isHighlighted && leaderboardItemStyles.highlighted]}>
      <Text style={leaderboardItemStyles.position}>{position}</Text>
      <Image source={{ uri: avatar }} style={leaderboardItemStyles.avatar} />
      <View style={leaderboardItemStyles.info}>
        <Text style={leaderboardItemStyles.username}>{username}</Text>
        <Text style={leaderboardItemStyles.level}>Level {level}</Text>
      </View>
      <Text style={leaderboardItemStyles.score}>{score.toLocaleString()}</Text>
    </View>
  )
}
