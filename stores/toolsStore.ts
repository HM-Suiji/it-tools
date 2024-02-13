import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Tools = {
  new: Tool[]
  top: Tool[]
  all: Tool[]
}

type ToolsStore = {
  tools: Tools[]
  update: () => void
}

export const useToolsStore = create<ToolsStore>()(
  persist(
    (set) => ({
      tools: [],
      update: async () => {
        const tools = (await (
          await fetch(process.env.NEXT_PUBLIC_TOOLS_API_URL as string)
        ).json()) as Tools[]
        set({ tools })
      },
    }),
    {
      name: 'tools',
    },
  ),
)
