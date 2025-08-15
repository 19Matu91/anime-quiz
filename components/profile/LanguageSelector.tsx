"use client"

import type React from "react"
import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { BottomAlert } from "../common/BottomAlert"
import { colors } from "../../theme/colors"
import { normalize } from "../../utils/responsive"

interface LanguageSelectorProps {
  selectedLanguage: string
  onLanguageChange: (language: string) => void
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
]

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onLanguageChange }) => {
  const [showLanguageAlert, setShowLanguageAlert] = useState(false)

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage) || languages[0]

  const handleLanguageSelect = (languageCode: string) => {
    onLanguageChange(languageCode)
    setShowLanguageAlert(false)
  }

  return (
    <>
      <View
        style={{
          backgroundColor: colors.surface.secondary,
          borderRadius: normalize(25),
          paddingHorizontal: normalize(20),
          paddingVertical: normalize(15),
          marginBottom: normalize(12),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.text.primary,
            fontSize: normalize(16),
            fontWeight: "500",
          }}
        >
          Language
        </Text>
        <TouchableOpacity
          onPress={() => setShowLanguageAlert(true)}
          style={{
            backgroundColor: colors.surface.tertiary,
            borderRadius: normalize(15),
            paddingHorizontal: normalize(15),
            paddingVertical: normalize(8),
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: normalize(16), marginRight: normalize(8) }}>{selectedLang.flag}</Text>
          <Text
            style={{
              color: colors.text.primary,
              fontSize: normalize(14),
              fontWeight: "500",
            }}
          >
            {selectedLang.name}
          </Text>
        </TouchableOpacity>
      </View>

      <BottomAlert visible={showLanguageAlert} onClose={() => setShowLanguageAlert(false)} title="Select Language">
        <View style={{ padding: normalize(20) }}>
          {languages.map((language) => (
            <TouchableOpacity
              key={language.code}
              onPress={() => handleLanguageSelect(language.code)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: normalize(15),
                paddingHorizontal: normalize(10),
                borderRadius: normalize(10),
                backgroundColor: selectedLanguage === language.code ? colors.primary + "20" : "transparent",
                marginBottom: normalize(8),
              }}
            >
              <Text style={{ fontSize: normalize(20), marginRight: normalize(15) }}>{language.flag}</Text>
              <Text
                style={{
                  color: colors.text.primary,
                  fontSize: normalize(16),
                  fontWeight: selectedLanguage === language.code ? "600" : "400",
                }}
              >
                {language.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomAlert>
    </>
  )
}
