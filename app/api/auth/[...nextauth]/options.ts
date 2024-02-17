import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { users } from '@/config/users'

const credentialsProvider = CredentialsProvider({
  name: 'Credentials',
  credentials: {
    username: {
      label: '用户名:',
      type: 'text',
      placeholder: '请输入你的用户名',
    },
    password: {
      label: '密码:',
      type: 'password',
      placeholder: '请输入你的密码',
    },
    email: {
      label: 'Email:',
      type: 'text',
      placeholder: '请输入你的邮箱',
    },
  },
  async authorize(credentials) {
    const username = credentials?.username
    const password = credentials?.password
    const email = credentials?.email

    const users = [
      {
        name: 'admin',
        password: '1234',
        email: 'admin@example.com',
      },
    ]

    users.forEach((user) => {
      if (
        username === user.name &&
        password === user.password &&
        email === user.email
      ) {
        return { ...user, role: 'admin' }
      }
    })

    return null
  },
})

const githubProvider = GithubProvider({
  // @ts-ignore
  profile(profile) {
    let userRole = 'Github User'
    if (profile?.email === '1704802092@qq.com') {
      userRole = 'admin'
    }
    return { ...profile, role: userRole }
  },
  clientId: process.env.GITHUB_ID as string,
  clientSecret: process.env.GITHUB_SECRET as string,
  httpOptions: { timeout: 20000 },
})

export const options: NextAuthOptions = {
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png',
  },
  providers: [credentialsProvider, githubProvider],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role
      return token
    },
    async session({ token, session }) {
      if (session?.user) (session.user as any).role = token.role
      return session
    },
  },
}
