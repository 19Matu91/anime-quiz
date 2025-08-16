"use client"

import { DarkTheme, ThemeProvider } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack, usePathname, Redirect } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import "react-native-reanimated"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Platform } from "react-native"
import * as NavigationBar from "expo-navigation-bar"
import { useAuthStore } from "../stores/authStore"

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  const { isAuthenticated } = useAuthStore()
  const pathname = usePathname()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (loaded) {
      setIsReady(true)
    }
  }, [loaded])

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setVisibilityAsync("hidden")
    }
  }, [])

  const isAuthRoute = pathname.startsWith("/(auth)") || pathname === "/auth"
  const isProtectedRoute = !isAuthRoute && pathname !== "/"

  if (!loaded || !isReady) {
    return null
  }

  if (!isAuthenticated && isProtectedRoute) {
    return <Redirect href="/(auth)" />
  }

  if (isAuthenticated && isAuthRoute) {
    return <Redirect href="/(tabs)" />
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={DarkTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen
            name="shop"
            options={{
              presentation: "modal",
              headerShown: false,
              title: "Shop",
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
