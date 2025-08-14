import type React from "react"
import { View, TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { normalize } from "@/utils/responsive"
import { searchStyles } from "@/styles/homeStyles"

interface SearchBarProps {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText, placeholder = "Search" }) => {
  return (
    <View style={searchStyles.container}>
      <Ionicons name="search" size={normalize(20)} color="#9A9FBF" />
      <View style={searchStyles.inputWrapper}>
        <TextInput
          style={searchStyles.input}
          placeholder={placeholder}
          placeholderTextColor="#9A9FBF"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  )
}
