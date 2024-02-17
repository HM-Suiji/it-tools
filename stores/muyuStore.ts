import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type MuyuStore = {
  gongde: number
  date: string
  add: () => void
  reset: () => void
}

export const useMuyuStore = create<MuyuStore>()(
  persist(
    (set) => ({
      gongde: 0,
      date: new Date().toDateString(),
      add: () => set((state) => ({ gongde: state.gongde + 1 })),
      reset: () => set({ gongde: 0, date: new Date().toDateString() }),
    }),
    {
      name: 'muyu',
    },
  ),
)
