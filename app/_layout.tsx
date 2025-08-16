"use client"

import { DarkTheme, ThemeProvider } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack, usePathname, Redirect } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import "react-native-reanimated"
import { SafeAreaProvider } from "react-native-safe-area-context"
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

  if (!loaded || !isReady) {
    return null
  }

  const isAuthRoute = pathname.startsWith("/(auth)") || pathname === "/auth"
  const isProtectedRoute = !isAuthRoute && pathname !== "/"

  // Redirect unauthenticated users trying to access protected routes
  if (!isAuthenticated && isProtectedRoute) {
    return <Redirect href="/(auth)" />
  }

  // Redirect authenticated users trying to access auth routes
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
