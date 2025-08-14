import type React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { tabSelectorStyles } from "../../styles/leaderboardStyles"

interface TabSelectorProps {
  activeTab: "all" | "weekly" | "daily"
  onTabChange: (tab: "all" | "weekly" | "daily") => void
}

export const TabSelector: React.FC<TabSelectorProps> = ({ activeTab, onTabChange }) => {
  return (
    <View style={tabSelectorStyles.container}>
      <TouchableOpacity
        style={[tabSelectorStyles.tab, activeTab === "all" && tabSelectorStyles.activeTab]}
        onPress={() => onTabChange("all")}
      >
        <Text style={[tabSelectorStyles.tabText, activeTab === "all" && tabSelectorStyles.activeTabText]}>
          All time
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[tabSelectorStyles.tab, activeTab === "weekly" && tabSelectorStyles.activeTab]}
        onPress={() => onTabChange("weekly")}
      >
        <Text style={[tabSelectorStyles.tabText, activeTab === "weekly" && tabSelectorStyles.activeTabText]}>
          Weekly
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[tabSelectorStyles.tab, activeTab === "daily" && tabSelectorStyles.activeTab]}
        onPress={() => onTabChange("daily")}
      >
        <Text style={[tabSelectorStyles.tabText, activeTab === "daily" && tabSelectorStyles.activeTabText]}>Daily</Text>
      </TouchableOpacity>
    </View>
  )
}
