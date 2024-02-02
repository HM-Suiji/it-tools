'use client'

import tools from '@/assets/json/tools.json'
import { toLine } from '@/utils/stringConduct'
import { Layout, Input, Typography } from 'antd'
// import '@/client/getAllRoutesData'
import { ToolList } from './../components/tool-list/index'
import { GlobalHeader } from '@/components'

const data = Object.entries(tools).map((item) => ({
  title: toLine(item[0]),
  description: item[1][0],
}))

const { Content, Footer } = Layout

const { Title } = Typography

export default function Home() {
  return (
    <Layout className="items-center">
      <GlobalHeader />
      <Content className="flex flex-col container items-center w-[80vw]">
        <Input></Input>
        <div>
          <Title level={4}>最近使用</Title>
          <ToolList data={data} />
        </div>
        {/* <ToolList data={data} /> */}
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}
