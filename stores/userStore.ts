import { User } from '@/types/User.type'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserStore = {
  username: string
  avatar: string
  email: string
  login: (user: User) => void
  layout: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      username: '',
      avatar: '',
      email: '',
      login: ({ username, email, avatar }) =>
        set({
          username,
          avatar: avatar ?? '/img/default-avatar.png',
          email,
        }),
      layout: () => set({ username: '', avatar: '', email: '' }),
    }),
    {
      name: 'user',
    },
  ),
)
