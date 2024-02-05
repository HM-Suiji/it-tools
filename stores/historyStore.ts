import { createSelectors } from '@/utils'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type HistoryStore = {
  history: string[]
  add: (newItem: string) => void
  remove: () => void
  clear: () => void
}

export const useHistoryStore = createSelectors(
  create<HistoryStore>()(
    immer(
      devtools(
        persist(
          (set, get) => ({
            history: [],
            add: (newItem) => {
              if (get().history.length >= 20) {
                get().remove()
              }
              set((state) => {
                state.history.push(newItem)
              })
            },
            remove: () => set((state) => state.history.shift()),
            clear: () => set({ history: [] }),
          }),
          { name: 'recent-use' },
        ),
      ),
    ),
  ),
)
