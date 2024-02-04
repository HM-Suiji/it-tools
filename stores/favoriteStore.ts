import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type FavoriteStore = {
  favorites: string[]
  add: (newItem: string) => void
  remove: (item: string) => void
  clear: () => void
}

export const useFavoriteStore = create<FavoriteStore>()(
  immer((set) => ({
    favorites: [],
    add: (newItem) =>
      set((state) => {
        state.favorites.push(newItem)
      }),
    remove: (item) =>
      set((state) => {
        state.favorites = state.favorites.filter((_item) => _item !== item)
      }),
    clear: () => set({ favorites: [] }),
  })),
)
