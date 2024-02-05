'use client'

import tools from '@/assets/json/tools.json'
import { toLine } from '@/utils/stringConduct'
import { Layout, Input, Typography } from 'antd'
// import '@/client/getAllRoutesData'
import { ToolList } from './../components/tool-list/index'
import { GlobalHeader } from '@/components'
import { useEffect, useState } from 'react'

const { Content, Footer } = Layout

const { Title } = Typography

const _data = [
  {
    title: '在线随机UUID生成器',
    link: 'uuid',
    description:
      '随机UUID生成器,支持批量生成大量UUID(通用唯一识别码),使用JS随机数生成器生成(基于uuid-v4),每次生成的UUID几乎都是没有重复独一无二的',
  },
  {
    title: '进制转换器',
    link: 'base-conversion',
    description:
      '可以让在数字在十进制、二进制、八进制、十六进制互相转换，甚至可以反复横跳',
  },
  {
    title: '时间格式化',
    link: 'date-format',
    description:
      '用来处理时间的格式,包括时间戳格式化、时间格式化、时间戳转时间格式化、时间格式化转时间戳以及不同时区格 式的处理',
  },
  {
    title: '身份证校验',
    link: 'id-cards',
    description:
      '通过身份证号码来校验身份证号码是否正确,或获取生源地、出生年月日的信息',
  },
  {
    title: '图片与base64转换',
    link: 'image-processor',
    description:
      'base64是一种图片解析的编码格式,可以用于图片的传输与存储,本工具可以将图片转换为base64编码,也可以将base64编码转换为图片',
  },
  {
    title: '听力范围测试',
    link: 'hearing-test',
    description:
      '通过播放一段不同频率的音频,测试听力范围(人的听力范围一般在20Hz到20kHz之间),判断听力是否正常',
  },
  {
    title: '二维码生成',
    link: 'qr-code',
    description:
      '将文字、图片、链接等数据转换为二维码,扫码就能获取,支持生成图片和base64编码',
  },
  {
    title: '数学问题求解',
    link: 'math-solver',
    description:
      '在线数学求解器,为你免费解答代数,微积分等数学问题。浏览在线网页或下载数学求解器app获取帮助',
  },
]

export default function Home() {
  const [data, setData] = useState<Tool[]>([])

  useEffect(() => {
    setData(_data)
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
