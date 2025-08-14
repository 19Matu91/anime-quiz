import type React from "react"
import { Button } from "./Button"
import { getCoinsButtonStyles } from "@/styles/shopStyles"

interface GetCoinsButtonProps {
  onPress: () => void
}

export const GetCoinsButton: React.FC<GetCoinsButtonProps> = ({ onPress }) => {
  return (
    <Button
      variant="primary"
      title="GET COINS 🤑"
      size="large"
      onPress={onPress}
      style={getCoinsButtonStyles.container}
      textStyle={getCoinsButtonStyles.text}
    />
  )
}
