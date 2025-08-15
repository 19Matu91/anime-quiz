import type React from "react"
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native"
import { useAvatarStore } from "../../stores/avatarStore"
import { colors } from "../../theme/colors"
import { normalize } from "../../utils/responsive"

interface AvatarSelectionProps {
  onSelect: (avatarId: string) => void
}

export const AvatarSelection: React.FC<AvatarSelectionProps> = ({ onSelect }) => {
  const { avatars, selectedAvatarId, setSelectedAvatar } = useAvatarStore()

  const handleAvatarSelect = (avatarId: string) => {
    setSelectedAvatar(avatarId)
  }

  const handleConfirmSelection = () => {
    onSelect(selectedAvatarId)
  }

  const renderAvatar = ({ item }: { item: (typeof avatars)[0] }) => {
    const isSelected = selectedAvatarId === item.id

    return (
      <TouchableOpacity
        onPress={() => handleAvatarSelect(item.id)}
        style={{
          width: "14.5%",
          aspectRatio: 1,
          margin: "0.8%",
          borderRadius: normalize(1000),
          borderWidth: normalize(2),
          borderColor: isSelected ? colors.accent.success : colors.border.primary,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image source={{ uri: item.uri }} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
        {isSelected && (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 255, 0, 0.3)",
              borderRadius: normalize(1000),
            }}
          />
        )}
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Text
        style={{
          fontSize: normalize(20),
          fontWeight: "bold",
          color: colors.text.primary,
          textAlign: "center",
          marginBottom: normalize(20),
        }}
      >
        Avatar
      </Text>

      <FlatList
        data={avatars}
        renderItem={renderAvatar}
        numColumns={6}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: normalize(20),
          maxHeight: normalize(200), // Limited height to allow scrolling
        }}
      />

      <TouchableOpacity
        onPress={handleConfirmSelection}
        style={{
          backgroundColor: colors.primary,
          paddingVertical: normalize(12),
          borderRadius: normalize(8),
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.text.primary,
            fontSize: normalize(16),
            fontWeight: "bold",
          }}
        >
          Select
        </Text>
      </TouchableOpacity>
    </View>
  )
}
