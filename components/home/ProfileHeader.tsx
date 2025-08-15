"use client"

import type React from "react"
import { useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { normalize } from "../../utils/responsive"
import { profileHeaderStyles } from "../../styles/homeStyles"
import { EditableUsername } from "../profile/EditableUsername"
import { BottomAlert } from "../common/BottomAlert"
import { AvatarSelection } from "../profile/AvatarSelection"
import { useAvatarStore } from "../../stores/avatarStore"
import { colors } from "../../theme/colors"

interface ProfileHeaderProps {
  profileImage: string
  username: string
  rank: number
  progress: number
  maxProgress: number
  score: number
  showEditables?: boolean
  onUsernameChange?: (newUsername: string) => void
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profileImage,
  username,
  rank,
  progress,
  maxProgress,
  score,
  showEditables = false,
  onUsernameChange,
}) => {
  const [showAvatarSelection, setShowAvatarSelection] = useState(false)
  const [isEditingUsername, setIsEditingUsername] = useState(false)
  const [currentUsername, setCurrentUsername] = useState(username)

  const { avatars, selectedAvatarId } = useAvatarStore()
  const selectedAvatar = avatars.find((avatar) => avatar.id === selectedAvatarId)

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
    setCurrentUsername(newUsername)
    setIsEditingUsername(false)
    onUsernameChange?.(newUsername)
  }

  const handleUsernameCancel = () => {
    setIsEditingUsername(false)
  }

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
              username={currentUsername}
              isEditing={isEditingUsername}
              onEdit={handleUsernameEdit}
              onSave={handleUsernameSave}
              onCancel={handleUsernameCancel}
            />
          ) : (
            <Text style={profileHeaderStyles.name}>{currentUsername}</Text>
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

      {showEditables && (
        <BottomAlert visible={showAvatarSelection} onClose={() => setShowAvatarSelection(false)}>
          <AvatarSelection onSelect={handleAvatarSelect} />
        </BottomAlert>
      )}
    </>
  )
}
