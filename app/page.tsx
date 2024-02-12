'use client'

import { Layout, Input, Typography } from 'antd'
// import '@/client/getAllRoutesData'
import { ToolList } from '../components/tool/list/index'
import { GlobalHeader } from '@/components'
import { useEffect, useState } from 'react'
import { http } from '@/utils'

const { Content, Footer } = Layout

const { Title } = Typography

export default function Home() {
  const [data, setData] = useState<Tool[]>([])

  useEffect(() => {
    // fetch 数据
    http('/tool-data').then((res) => setData(res))
  }, [])

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
