import { createSelectors } from '@/utils'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type RecentUseStore = {
  recentUse: string[]
  add: (newItem: string) => void
  remove: () => void
  clear: () => void
}

export const useRecentUseStore = createSelectors(
  create<RecentUseStore>()(
    immer(
      devtools((set, get) => ({
        recentUse: [],
        add: (newItem) => {
          if (get().recentUse.length >= 20) {
            get().remove()
          }
          set((state) => {
            state.recentUse.push(newItem)
          })
        },
        remove: () => set((state) => state.recentUse.shift()),
        clear: () => set({ recentUse: [] }),
      })),
    ),
  ),
)
