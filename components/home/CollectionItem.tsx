import type React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"
import { Button } from "@/components/common/Button"
import { normalize } from "@/utils/responsive"
import { collectionStyles } from "@/styles/homeStyles"

interface CollectionItemData {
  id: string
  title: string
  image: string
  unlocked: boolean
  isImpossibleDisabled: boolean
}

interface CollectionItemProps {
  item: CollectionItemData
  isExpanded: boolean
  onToggle: (itemId: string) => void
  onDifficultySelect?: (itemId: string, difficulty: "easy" | "hard" | "impossible") => void
}

export const CollectionItem: React.FC<CollectionItemProps> = ({ item, isExpanded, onToggle, onDifficultySelect }) => {
  return (
    <View style={[collectionStyles.container, !item.unlocked && collectionStyles.locked]}>
      <TouchableOpacity
        onPress={() => item.unlocked && onToggle(item.id)}
        disabled={!item.unlocked}
        style={collectionStyles.touchable}
      >
        <Image source={{ uri: item.image }} style={collectionStyles.image} />
        <LinearGradient colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.8)"]} style={collectionStyles.overlay}>
          <Text style={collectionStyles.title}>{item.title}</Text>
          {item.unlocked ? (
            <Ionicons
              name={isExpanded ? "chevron-up-outline" : "chevron-down-outline"}
              size={normalize(24)}
              color="#FFFFFF"
              style={{ marginLeft: normalize(10) }}
            />
          ) : (
            <View style={collectionStyles.scoreContainer}>
              <Text style={collectionStyles.scoreText}>100</Text>
              <Ionicons name="cash-outline" size={normalize(24)} color="#FFD700" />
            </View>
          )}
        </LinearGradient>
      </TouchableOpacity>

      {isExpanded && item.unlocked && (
        <View style={collectionStyles.expandedContent}>
          <Button
            title="Easy"
            variant="difficulty"
            size="small"
            style={[collectionStyles.difficultyButton, collectionStyles.easyButton]}
            textStyle={collectionStyles.easyButtonText}
            alignment="left"
            onPress={() => onDifficultySelect?.(item.id, "easy")}
          />

          <Button
            title="Hard"
            variant="difficulty"
            size="small"
            style={[collectionStyles.difficultyButton, collectionStyles.hardButton]}
            textStyle={collectionStyles.hardButtonText}
            alignment="left"
            onPress={() => onDifficultySelect?.(item.id, "hard")}
          />

          <TouchableOpacity
            style={[collectionStyles.impossibleButton]}
            disabled={item.isImpossibleDisabled}
            onPress={() => !item.isImpossibleDisabled && onDifficultySelect?.(item.id, "impossible")}
          >
            <Text
              style={[
                collectionStyles.impossibleButtonText,
                item.isImpossibleDisabled && collectionStyles.disabledText,
              ]}
            >
              Impossible
            </Text>
            {item.isImpossibleDisabled && (
              <View style={collectionStyles.rewardIcons}>
                <Text style={collectionStyles.rewardValueText}>200</Text>
                <Ionicons name="cash-outline" size={normalize(24)} color="#FFD700" />
              </View>
            )}
            {item.isImpossibleDisabled && <View style={collectionStyles.impossibleButtonOverlay} />}
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
