"use client"

import type React from "react"
import { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { ProfileHeader } from "@/components/home/ProfileHeader"
import { SettingsToggle } from "@/components/profile/SettingsToggle"
import { SettingsSlider } from "@/components/profile/SettingsSlider"
import {  SocialConnectButton } from "@/components/profile/SocialConnectButton"
import { LanguageSelector } from "@/components/profile/LanguageSelector"
import { ConfirmationAlert } from "@/components/profile/ConfirmationAlert"
import { profileStyles } from "@/styles/profileStyles"
import { colors } from "@/theme/colors"

// import { ProfileHeader } from "../components/home/ProfileHeader"
// import { SettingsToggle } from "../components/profile/SettingsToggle"
// import { SettingsSlider } from "../components/profile/SettingsSlider"
// import { SocialConnectButton } from "../components/profile/SocialConnectButton"
// import { LanguageSelector } from "../components/profile/LanguageSelector"
// import { ConfirmationAlert } from "../components/profile/ConfirmationAlert"
// import { profileStyles } from "../styles/profileStyles"
// import { colors } from "../theme/colors"

export const ProfileScreen: React.FC = () => {
  const [username, setUsername] = useState("MatutanoPoderoso")
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [notifications, setNotifications] = useState(true)
  const [bgmVolume, setBgmVolume] = useState(60)
  const [sfxVolume, setSfxVolume] = useState(70)
  const [voiceVolume, setVoiceVolume] = useState(50)
  const [isGoogleConnected, setIsGoogleConnected] = useState(true)
  const [showSignOutAlert, setShowSignOutAlert] = useState(false)
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername)
  }

  const handleSignOut = () => {
    setShowSignOutAlert(false)
    // Add sign out logic here
    console.log("[v0] User signed out")
  }

  const handleDeleteAccount = () => {
    setShowDeleteAlert(false)
    // Add delete account logic here
    console.log("[v0] Account deleted")
  }

  return (
    <LinearGradient colors={[colors.background.secondary, colors.background.primary]} style={profileStyles.container}>
      <ScrollView style={profileStyles.content} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={profileStyles.headerSection}>
          <ProfileHeader
            profileImage="https://i.imgur.com/oW1dGDI.jpeg"
            username={username}
            rank={1}
            progress={100}
            maxProgress={400}
            score={0}
            showEditables={true}
            onUsernameChange={handleUsernameChange}
          />
        </View>

        {/* Stats Row */}
        <View style={profileStyles.statsRowSection}>
          <View style={profileStyles.statsRow}>
            <View style={profileStyles.statItem}>
              <Text style={profileStyles.statValue}>50,000</Text>
              <Text style={profileStyles.statLabel}>GLOBAL</Text>
            </View>
            <View style={profileStyles.statItem}>
              <Text style={profileStyles.statValue}>34</Text>
              <Text style={profileStyles.statLabel}>LOCAL</Text>
            </View>
            <View style={profileStyles.statItem}>
              <Text style={profileStyles.statValue}>1.02M</Text>
              <Text style={profileStyles.statLabel}>SCORE</Text>
            </View>
          </View>
        </View>

        {/* Settings Header */}
        <View style={profileStyles.settingsHeaderSection}>
          <Text style={profileStyles.settingsTitle}>Settings</Text>
        </View>

        {/* Settings Content */}
        <View style={profileStyles.settingsContentSection}>
          <View style={profileStyles.settingsContainer}>
            {/* Language Setting */}
            <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} />

            {/* Notifications Toggle */}
            <SettingsToggle label="Notifications" value={notifications} onToggle={setNotifications} />

            {/* Volume Sliders */}
            <SettingsSlider label="BGM Volume" value={bgmVolume} onValueChange={setBgmVolume} />
            <SettingsSlider label="SFX Volume" value={sfxVolume} onValueChange={setSfxVolume} />
            <SettingsSlider label="Voice Volume" value={voiceVolume} onValueChange={setVoiceVolume} />

            {/* Account Linking */}
            <Text style={profileStyles.linkAccountTitle}>Link your account:</Text>
            <SocialConnectButton platform="google" isConnected={isGoogleConnected} onPress={() => {}} />
            <SocialConnectButton platform="facebook" onPress={() => {}} />
            <SocialConnectButton platform="apple" onPress={() => {}} />

            {/* Sign Out Button */}
            <TouchableOpacity style={profileStyles.signOutButton} onPress={() => setShowSignOutAlert(true)}>
              <Text style={profileStyles.signOutText}>Sign Out</Text>
            </TouchableOpacity>

            {/* Delete Account */}
            <TouchableOpacity style={profileStyles.deleteAccountButton} onPress={() => setShowDeleteAlert(true)}>
              <Text style={profileStyles.deleteAccountText}>Delete Account</Text>
            </TouchableOpacity>
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

      <ConfirmationAlert
        isVisible={showDeleteAlert}
        onClose={() => setShowDeleteAlert(false)}
        title="Delete Account"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod !"
        confirmText="Delete"
        onConfirm={handleDeleteAccount}
        type="delete"
      />
    </LinearGradient>
  )
}

export default ProfileScreen