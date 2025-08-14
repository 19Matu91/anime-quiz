import type React from "react"
import { TouchableOpacity, Text } from "react-native"
import { StyleSheet } from "react-native"
import { normalize } from "../../utils/responsive"
import { colors } from "../../theme/colors"

interface CloseButtonProps {
    onPress: () => void
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>✕</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: normalize(8),
        right: normalize(15),
        width: normalize(32),
        height: normalize(32),
        borderRadius: normalize(16),
        backgroundColor: colors.surface.tertiary,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },
    text: {
        color: colors.text.primary,
        fontSize: normalize(16),
        fontWeight: "bold",
    },
})
