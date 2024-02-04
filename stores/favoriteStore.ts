import { createSelectors } from '@/utils'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type FavoriteStore = {
  favorites: string[]
  change: (item: string, currentStatus: boolean) => void
  clear: () => void
}

export const useFavoriteStore = createSelectors(
  create<FavoriteStore>()(
    immer(
      devtools(
        persist(
          (set) => ({
            favorites: [],
            change: (item, currentStatus) =>
              set((state) => {
                if (currentStatus) {
                  state.favorites = state.favorites.filter(
                    (_item) => _item !== item,
                  )
                } else {
                  if (!state.favorites.includes(item)) {
                    state.favorites.push(item)
                  }
                }
              }),
            clear: () => set({ favorites: [] }),
          }),
          {
            name: 'favorite',
          },
        ),
      ),
    ),
  ),
)
