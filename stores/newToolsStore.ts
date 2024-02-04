import { create } from 'zustand'

type NewToolsStore = {
  newTools: string[]
  update: () => void
}

export const useNewToolsStore = create<NewToolsStore>()((set) => ({
  newTools: [],
  update: async () => {
    const newTools = (await (
      await fetch(process.env.NEXT_PUBLIC_NEWTOOLS_API_URL as string)
    ).json()) as string[]
    set({ newTools })
  },
}))
