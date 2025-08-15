import { create } from "zustand"

export interface Avatar {
  id: string
  uri: string
}

interface AvatarStore {
  avatars: Avatar[]
  selectedAvatarId: string
  setSelectedAvatar: (id: string) => void
}

const totalAvatars = 60
const avatarPlaceholder = "https://i.imgur.com/oW1dGDI.jpeg"

const generateAvatars = (): Avatar[] =>
  Array.from({ length: totalAvatars }, (_, i) => ({
    id: `avatar_${i + 1}`,
    uri: avatarPlaceholder,
  }))

export const useAvatarStore = create<AvatarStore>((set) => ({
  avatars: generateAvatars(),
  selectedAvatarId: "avatar_2", // Default selection
  setSelectedAvatar: (id: string) => set({ selectedAvatarId: id }),
}))
