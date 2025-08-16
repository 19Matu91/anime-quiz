

import React from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { colors } from "../../theme/colors"
import { normalize } from "../../utils/responsive"

interface EditableUsernameProps {
  username: string
  isEditing: boolean
  onEdit: () => void
  onSave: (newUsername: string) => void
  onCancel: () => void
}

export const EditableUsername: React.FC<EditableUsernameProps> = ({
  username,
  isEditing,
  onEdit,
  onSave,
  onCancel,
}) => {
  const [tempUsername, setTempUsername] = React.useState(username)

  React.useEffect(() => {
    setTempUsername(username)
  }, [username])

  if (isEditing) {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.surface.tertiary,
          borderRadius: normalize(20),
          paddingHorizontal: normalize(12),
          paddingVertical: normalize(6),
          width: "100%",
        }}
      >
        <TextInput
          value={tempUsername}
          onChangeText={setTempUsername}
          style={{
            flex: 1,
            color: colors.text.primary,
            fontSize: normalize(16),
            fontWeight: "bold",
          }}
          autoFocus
        />
        <TouchableOpacity
          onPress={() => onSave(tempUsername)}
          style={{
            backgroundColor: colors.accent.success,
            borderRadius: normalize(12),
            width: normalize(24),
            height: normalize(24),
            justifyContent: "center",
            alignItems: "center",
            marginLeft: normalize(6),
          }}
        >
          <Text style={{ color: colors.text.primary, fontSize: normalize(14) }}>✓</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCancel}
          style={{
            backgroundColor: colors.accent.danger,
            borderRadius: normalize(12),
            width: normalize(24),
            height: normalize(24),
            justifyContent: "center",
            alignItems: "center",
            marginLeft: normalize(4),
          }}
        >
          <Text style={{ color: colors.text.primary, fontSize: normalize(14) }}>✕</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <TouchableOpacity onPress={onEdit} style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          color: colors.text.primary,
          fontSize: normalize(16),
          fontWeight: "bold",
          marginRight: normalize(6),
        }}
      >
        {username}
      </Text>
      <Text style={{ color: colors.text.secondary, fontSize: normalize(12) }}>✏️</Text>
    </TouchableOpacity>
  )
}
