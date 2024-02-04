'use client'

import tools from '@/assets/json/tools.json'
import { toLine } from '@/utils/stringConduct'
import { Layout, Input, Typography } from 'antd'
// import '@/client/getAllRoutesData'
import { ToolList } from './../components/tool-list/index'
import { GlobalHeader } from '@/components'

const { Content, Footer } = Layout

const { Title } = Typography

const data = Object.entries(tools).map((item) => ({
  title: item[1][0],
  link: toLine(item[0]),
  description: item[1][2],
  isFavorite: false,
}))

export default function Home() {
  return (
    <Layout className="items-center bg-white">
      <GlobalHeader />
      <Content className="flex flex-col container items-center">
        <div className="w-full">
          <div>
            <Input></Input>
          </div>
          <div>
            <div>
              <Title level={4}>最近使用</Title>
              <ToolList data={data} />
            </div>
            <div>
              <Title level={4}>最新</Title>
              <ToolList data={data} />
            </div>
          </div>
        </div>
      </Content>
      <Footer className="w-full">Footer</Footer>
    </Layout>
  )
}
