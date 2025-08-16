import { create } from "zustand"
import { persist, createJSONStorage } from "expo-zustand-persist"

import AsyncStorage from "@react-native-async-storage/async-storage"

export interface UserSettings {
  language: string
  notifications: boolean
  bgmVolume: number
  sfxVolume: number
  voiceVolume: number
  socialConnections: {
    google: boolean
    facebook: boolean
    apple: boolean
  }
}

export interface UserStats {
  global: number
  local: number
  score: number
}

export interface UserProgress {
  rank: number
  progress: number
  maxProgress: number
}

export interface User {
  id: string
  username: string
  avatar: string
  email?: string
  isGuest?: boolean
  stats: UserStats
  progress: UserProgress
  settings: UserSettings
}

interface AuthState {
  // Authentication state
  isAuthenticated: boolean
  user: User | null

  // Actions
  login: (user: User) => void
  loginAsGuest: (username: string, avatar: string) => void
  logout: () => void
  deleteAccount: () => void
  updateUsername: (username: string) => void
  updateAvatar: (avatar: string) => void
  updateSettings: (settings: Partial<UserSettings>) => void
  updateUserSettings: (settings: Partial<UserSettings>) => void
  updateStats: (stats: Partial<UserStats>) => void
  updateProgress: (progress: Partial<UserProgress>) => void

  // Individual setting updates
  setLanguage: (language: string) => void
  setNotifications: (enabled: boolean) => void
  setBgmVolume: (volume: number) => void
  setSfxVolume: (volume: number) => void
  setVoiceVolume: (volume: number) => void
  setSocialConnection: (platform: keyof UserSettings["socialConnections"], connected: boolean) => void
}

const defaultUser: User = {
  id: "1",
  username: "MatutanoPoderoso",
  avatar: "https://i.imgur.com/oW1dGDI.jpeg",
  stats: {
    global: 50000,
    local: 34,
    score: 1020000,
  },
  progress: {
    rank: 1,
    progress: 100,
    maxProgress: 400,
  },
  settings: {
    language: "en",
    notifications: true,
    bgmVolume: 60,
    sfxVolume: 70,
    voiceVolume: 50,
    socialConnections: {
      google: true,
      facebook: false,
      apple: false,
    },
  },
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      isAuthenticated: false, // Default to authenticated for demo
      user: null,

      // Authentication actions
      login: (user: User) => {
        set({ isAuthenticated: true, user })
      },

      loginAsGuest: (username: string, avatar: string) => {
        const guestUser: User = {
          ...defaultUser,
          id: `guest_${Date.now()}`,
          username,
          avatar,
          isGuest: true,
        }
        set({ isAuthenticated: true, user: guestUser })
      },

      logout: () => {
        console.log("")
        set({ isAuthenticated: false, user: null })
      },

      deleteAccount: () => {
        set({ isAuthenticated: false, user: null })
        // Here you would typically make an API call to delete the account from the server
        console.log("Account deleted")
      },

      // User data updates
      updateUsername: (username: string) => {
        const { user } = get()
        if (user) {
          set({ user: { ...user, username } })
        }
      },

      updateAvatar: (avatar: string) => {
        const { user } = get()
        if (user) {
          set({ user: { ...user, avatar } })
        }
      },

      updateSettings: (newSettings: Partial<UserSettings>) => {
        const { user } = get()
        if (user) {
          set({
            user: {
              ...user,
              settings: { ...user.settings, ...newSettings },
            },
          })
        }
      },

      updateUserSettings: (newSettings: Partial<UserSettings>) => {
        const { updateSettings } = get()
        updateSettings(newSettings)
      },

      updateStats: (newStats: Partial<UserStats>) => {
        const { user } = get()
        if (user) {
          set({
            user: {
              ...user,
              stats: { ...user.stats, ...newStats },
            },
          })
        }
      },

      updateProgress: (newProgress: Partial<UserProgress>) => {
        const { user } = get()
        if (user) {
          set({
            user: {
              ...user,
              progress: { ...user.progress, ...newProgress },
            },
          })
        }
      },

      // Individual setting actions
      setLanguage: (language: string) => {
        const { updateSettings } = get()
        updateSettings({ language })
      },

      setNotifications: (notifications: boolean) => {
        const { updateSettings } = get()
        updateSettings({ notifications })
      },

      setBgmVolume: (bgmVolume: number) => {
        const { updateSettings } = get()
        updateSettings({ bgmVolume })
      },

      setSfxVolume: (sfxVolume: number) => {
        const { updateSettings } = get()
        updateSettings({ sfxVolume })
      },

      setVoiceVolume: (voiceVolume: number) => {
        const { updateSettings } = get()
        updateSettings({ voiceVolume })
      },

      setSocialConnection: (platform: keyof UserSettings["socialConnections"], connected: boolean) => {
        const { user } = get()
        if (user) {
          set({
            user: {
              ...user,
              settings: {
                ...user.settings,
                socialConnections: {
                  ...user.settings.socialConnections,
                  [platform]: connected,
                },
              },
            },
          })
        }
      },
    }),
    {
      name: "auth-storage", // Storage key
      storage: createJSONStorage(() => AsyncStorage), // Storage provider
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    },
  ),
)
