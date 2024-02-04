import { create } from 'zustand'

type FavoriteStore = {
  favorites: string[]
  add: (newItem: string) => void
  remove: (item: string) => void
  clear: () => void
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  add: (newItem) =>
    set((state) => ({ favorites: [...state.favorites, newItem] })),
  remove: (item) =>
    set((state) => ({
      favorites: state.favorites.filter((_item) => _item !== item),
    })),
  clear: () => set({ favorites: [] }),
}))
