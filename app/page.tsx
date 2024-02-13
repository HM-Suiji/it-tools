'use client'

import { Layout, Input } from 'antd'
// import '@/client/getAllRoutesData'
import { GlobalHeader,GlobalFooter,ToolList } from '@/components'
import { useEffect, useState } from 'react'
import { http } from '@/utils'

const { Content, Footer } = Layout

export default function Home() {
  const [data, setData] = useState<Tool[]>([])

  useEffect(() => {
    // fetch 数据
    http('/tool-data').then((res) => setData(res))
  }, [])

  return (
    <Layout className="items-center bg-white global-root-page">
      <GlobalHeader />
      <Content className="flex flex-col container items-center">
        <div className="w-full">
          <div className="w-[600px] m-auto mt-10 mb-4">
            <Input.Search
              placeholder="请搜索工具名或标签"
              enterButton
              allowClear
              className=""
            />
          </div>
          <div>
            <div className="group-box">
              <div className="group-box-title">最近使用</div>
              <div>
                <ToolList data={data} />
              </div>
            </div>
            <div className="group-box">
              <div className="group-box-title">最新</div>
              <div>
                <ToolList data={data} />
              </div>
            </div>
          </div>
        </div>
      </Content>
      <GlobalFooter />
    </Layout>
  )
}
