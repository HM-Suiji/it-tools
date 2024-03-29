'use client'

import { Layout, Input } from 'antd'
// import '@/client/getAllRoutesData'
import { GlobalHeader, GlobalFooter, ToolList } from '@/components'
import { useEffect, useState } from 'react'
import { http } from '@/utils'

const { Content } = Layout

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
          <div className="md:w-[600px] m-auto mt-10 mb-4">
            <Input.Search
              className="search-input"
              placeholder="请搜索工具名或标签"
              enterButton
              allowClear
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
