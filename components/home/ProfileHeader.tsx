

import type React from "react"
import { useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { router, usePathname } from "expo-router"
import { normalize } from "../../utils/responsive"
import { profileHeaderStyles } from "../../styles/homeStyles"
import { EditableUsername } from "../profile/EditableUsername"
import { BottomAlert } from "../common/BottomAlert"
import { AvatarSelection } from "../profile/AvatarSelection"
import { useAvatarStore } from "../../stores/avatarStore"
import { useAuthStore } from "../../stores/authStore"
import { colors } from "../../theme/colors"

interface ProfileHeaderProps {
  showEditables?: boolean
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(3).replace(/\.?0+$/, "") + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(3).replace(/\.?0+$/, "") + "K"
  }
  return num.toString()
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ showEditables = false }) => {
  const [showAvatarSelection, setShowAvatarSelection] = useState(false)
  const [isEditingUsername, setIsEditingUsername] = useState(false)

  const { user, updateUsername, updateAvatar } = useAuthStore()
  const { avatars, selectedAvatarId } = useAvatarStore()
  const selectedAvatar = avatars.find((avatar) => avatar.id === selectedAvatarId)

  const username = user?.username || "Guest"
  const profileImage = user?.avatar || "https://via.placeholder.com/80"
  const rank = user?.progress.rank || 1
  const progress = user?.progress.progress || 0
  const maxProgress = user?.progress.maxProgress || 100
  const score = user?.stats.score || 0

  const progressPercentage = (progress / maxProgress) * 100

  const handleAvatarEdit = () => {
    setShowAvatarSelection(true)
  }

  const handleAvatarSelect = () => {
    setShowAvatarSelection(false)
  }

  const handleUsernameEdit = () => {
    setIsEditingUsername(true)
  }

  const handleUsernameSave = (newUsername: string) => {
    updateUsername(newUsername)
    setIsEditingUsername(false)
  }

  const handleUsernameCancel = () => {
    setIsEditingUsername(false)
  }

  const pathname = usePathname()
  const isOnShopPage = pathname === "/shop"

  return (
    <>
      <View style={profileHeaderStyles.container}>
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: showEditables && selectedAvatar ? selectedAvatar.uri : profileImage }}
            style={profileHeaderStyles.avatar}
          />
          {showEditables && (
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: colors.surface.secondary,
                borderRadius: normalize(12),
                padding: normalize(4),
              }}
              onPress={handleAvatarEdit}
            >
              <Text style={{ fontSize: normalize(10) }}>✏️</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={profileHeaderStyles.info}>
          {showEditables ? (
            <EditableUsername
              username={username}
              isEditing={isEditingUsername}
              onEdit={handleUsernameEdit}
              onSave={handleUsernameSave}
              onCancel={handleUsernameCancel}
            />
          ) : (
            <Text style={profileHeaderStyles.name}>{username}</Text>
          )}

          <View style={profileHeaderStyles.progressContainer}>
            <View style={profileHeaderStyles.rankBadge}>
              <Ionicons name="star" size={normalize(36)} color="#3498db" />
              <Text style={profileHeaderStyles.rankNumber}>{rank}</Text>
            </View>
            <View style={profileHeaderStyles.progressBar}>
              <View style={[profileHeaderStyles.progressBarFill, { width: `${progressPercentage}%` }]} />
            </View>
            <Text style={profileHeaderStyles.progressText}>
              {formatNumber(progress)}/{formatNumber(maxProgress)}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.push("/shop")} disabled={isOnShopPage}s style={profileHeaderStyles.scoreContainer}>
          <View style={profileHeaderStyles.scoreIcons}>
            <Ionicons name="cash-outline" size={normalize(24)} color="#FFD700" />
            <Text style={profileHeaderStyles.scoreText}>{formatNumber(score)}</Text>
          </View>
          {!isOnShopPage && (
            <Ionicons name="add-circle-outline" size={normalize(24)} color="#FFFFFF" />
          )}
        </TouchableOpacity>
      </View>

      {showEditables && (
        <BottomAlert visible={showAvatarSelection} onClose={() => setShowAvatarSelection(false)}>
          <AvatarSelection onSelect={handleAvatarSelect} />
        </BottomAlert>
      )}
    </>
  )
}
