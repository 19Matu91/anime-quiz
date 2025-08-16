"use client"

import type React from "react"
import { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ProfileHeader } from "@/components/home/ProfileHeader"
import { SettingsToggle } from "@/components/profile/SettingsToggle"
import { SettingsSlider } from "@/components/profile/SettingsSlider"
import { SocialConnectButton } from "@/components/profile/SocialConnectButton"
import { LanguageSelector } from "@/components/profile/LanguageSelector"
import { ConfirmationAlert } from "@/components/profile/ConfirmationAlert"
import { LeaderboardStats } from "@/components/home/LeaderboardStats"
import { profileStyles } from "@/styles/profileStyles"
import { colors } from "@/theme/colors"
import { useAuthStore } from "@/stores/authStore"

export const ProfileScreen: React.FC = () => {
  const insets = useSafeAreaInsets()
  const { user, logout, deleteAccount, updateUserSettings } = useAuthStore()

  const [selectedLanguage, setSelectedLanguage] = useState(user?.settings?.language || "en")
  const [notifications, setNotifications] = useState(user?.settings?.notifications ?? true)
  const [bgmVolume, setBgmVolume] = useState(user?.settings?.bgmVolume ?? 60)
  const [sfxVolume, setSfxVolume] = useState(user?.settings?.sfxVolume ?? 70)
  const [voiceVolume, setVoiceVolume] = useState(user?.settings?.voiceVolume ?? 50)
  const [isGoogleConnected, setIsGoogleConnected] = useState(user?.socialConnections?.google ?? false)
  const [showSignOutAlert, setShowSignOutAlert] = useState(false)
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    updateUserSettings({ language })
  }

  const handleNotificationsToggle = (value: boolean) => {
    setNotifications(value)
    updateUserSettings({ notifications: value })
  }

  const handleBgmVolumeChange = (value: number) => {
    setBgmVolume(value)
    updateUserSettings({ bgmVolume: value })
  }

  const handleSfxVolumeChange = (value: number) => {
    setSfxVolume(value)
    updateUserSettings({ sfxVolume: value })
  }

  const handleVoiceVolumeChange = (value: number) => {
    setVoiceVolume(value)
    updateUserSettings({ voiceVolume: value })
  }

  const handleSignOut = () => {
    setShowSignOutAlert(false)
    logout()
  }

  const handleDeleteAccount = () => {
    setShowDeleteAlert(false)
    deleteAccount()
  }

  return (
    <LinearGradient colors={[colors.background.secondary, colors.background.primary]} style={profileStyles.container}>
      <ScrollView style={[profileStyles.content, { paddingTop: insets.top }]} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={profileStyles.headerSection}>
          <ProfileHeader showEditables={true} />
        </View>

        {/* Stats Row */}
        <LeaderboardStats />

        {/* Settings Header */}
        <View style={profileStyles.settingsHeaderSection}>
          <Text style={profileStyles.settingsTitle}>Settings</Text>
        </View>

        {/* Settings Content */}
        <View style={profileStyles.settingsContentSection}>
          <View style={profileStyles.settingsContainer}>
            {/* Language Setting */}
            <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />

            {/* Notifications Toggle */}
            <SettingsToggle label="Notifications" value={notifications} onToggle={handleNotificationsToggle} />

            {/* Volume Sliders */}
            <SettingsSlider label="BGM Volume" value={bgmVolume} onValueChange={handleBgmVolumeChange} />
            <SettingsSlider label="SFX Volume" value={sfxVolume} onValueChange={handleSfxVolumeChange} />
            <SettingsSlider label="Voice Volume" value={voiceVolume} onValueChange={handleVoiceVolumeChange} />

            {user?.isGuest && (
              <>
                <Text style={profileStyles.linkAccountTitle}>Link your account:</Text>
                <SocialConnectButton platform="google" isConnected={isGoogleConnected} onPress={() => {}} />
                <SocialConnectButton platform="facebook" onPress={() => {}} />
                <SocialConnectButton platform="apple" onPress={() => {}} />
              </>
            )}

            {/* Sign Out Button - always show */}
            <TouchableOpacity style={profileStyles.signOutButton} onPress={() => setShowSignOutAlert(true)}>
              <Text style={profileStyles.signOutText}>Sign Out</Text>
            </TouchableOpacity>

            {!user?.isGuest && (
              <TouchableOpacity style={profileStyles.deleteAccountButton} onPress={() => setShowDeleteAlert(true)}>
                <Text style={profileStyles.deleteAccountText}>Delete Account</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Confirmation Alerts */}
      <ConfirmationAlert
        isVisible={showSignOutAlert}
        onClose={() => setShowSignOutAlert(false)}
        title="Sign Out"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod !"
        confirmText="SignOut"
        onConfirm={handleSignOut}
        type="signout"
      />

      {!user?.isGuest && (
        <ConfirmationAlert
          isVisible={showDeleteAlert}
          onClose={() => setShowDeleteAlert(false)}
          title="Delete Account"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod !"
          confirmText="Delete"
          onConfirm={handleDeleteAccount}
          type="delete"
        />
      )}
    </LinearGradient>
  )
}

export default ProfileScreen
