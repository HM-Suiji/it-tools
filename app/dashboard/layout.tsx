'use client'

import { Layout } from 'antd'
import { SiderMenu } from '@/components'
import { useSession } from 'next-auth/react'

const { Header, Content, Sider, Footer } = Layout

const ConsoleLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const { data, update } = useSession()
  // console.log(session)
  return (
    <Layout className="h-screen">
      <Sider width="18%" className="!bg-white relative">
        <div className="logo text-center text-4xl leading-[3rem] font-black h-12 m-2 text-purple-400">
          Illusion
        </div>
        <SiderMenu defaultSelectedKey="aa" />
        <div className="absolute w-full bottom-0">user-message</div>
      </Sider>
      <Layout>
        <Header className="bg-white">Header</Header>
        <Content>
          <div className="flex p-4">{children}</div>
        </Content>
        <Footer className="text-center">
          Power by{' '}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default ConsoleLayout
