import type React from "react"
import { TouchableOpacity, Image, View, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "@/theme/colors"
import { normalize } from "@/utils/responsive"
import { spacing } from "@/theme/spacing"

interface Avatar {
    id: string
    uri: string
}

interface AvatarSelectorProps {
    item: Avatar
    isSelected: boolean
    onSelect: (id: string) => void
    numColumns: number
}

export const AvatarSelector: React.FC<AvatarSelectorProps> = ({ item, isSelected, onSelect, numColumns }) => {
    return (
        <TouchableOpacity style={[styles.wrapper, { width: `${100 / numColumns}%` }]} onPress={() => onSelect(item.id)}>
            <View style={[styles.container, isSelected && styles.selected]}>
                <Image source={{ uri: item.uri }} style={styles.image} />
                {isSelected && (
                    <View style={styles.overlaySelected}>
                        <Ionicons
                            name="checkmark-circle-outline"
                            size={normalize(40)}
                            color={colors.textPrimary}
                            style={styles.checkIcon}
                        />
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: spacing.sm,
    },
    container: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: normalize(1000),
        backgroundColor: colors.secondary,
        borderWidth: normalize(3),
        borderColor: colors.transparent,
        overflow: "hidden",
    },
    selected: {
        borderColor: colors.textPrimary,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    overlaySelected: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 255, 0, 0.3)",
        borderRadius: normalize(1000),
        justifyContent: "center",
        alignItems: "center",
    },
    checkIcon: {
        textShadowColor: "rgba(0, 0, 0, 0.4)",
        textShadowOffset: { width: normalize(1), height: normalize(1) },
        textShadowRadius: normalize(3),
    },
})
