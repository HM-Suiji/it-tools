'use client'

import { Breadcrumb, Card, Input, Layout, Menu, MenuProps } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { isMobile as _isMobile } from '@/utils'
import { Calendar, Clock, Search, ToolTags } from '@/components'
import './index.scss'

const {
  Header: AHeader,
  Footer: AFooter,
  Sider: ASider,
  Content: AContent,
} = Layout

type Meta = { title: string; keywords?: string }

const menuItems: MenuProps['items'] = [
  {
    label: '登陆',
    key: '/login',
  },
  {
    label: '关于',
    key: '/about',
  },
]

const Header = () => {
  const router = useRouter()
  const [current, setCurrent] = useState('')
  const onClickMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    router.push(e.key)
  }

  return (
    <AHeader className="h-auto px-0 leading-10 bg-[#fff]">
      <div className="md:grid max-[640px]:flex grid-cols-4 gap-4">
        <div className="text-blue-400 pl-4 md:!leading-10 md:text-xl">
          <Link href="/">幻梦IT工具站</Link>
        </div>
        <div className="col-span-3 md:flex flex-row-reverse max-[640px]:ml-auto">
          <Menu
            // defaultSelectedKeys={['mail']}
            onClick={onClickMenu}
            selectedKeys={[current]}
            mode="horizontal"
            items={menuItems}
          />
          <Search className="!w-auto" />
        </div>
      </div>
    </AHeader>
  )
}

const Sider = ({ meta }: { meta?: Meta }) => {
  return (
    <ASider
      theme="light"
      width="auto"
      className="md:col-span-1 text-center flex justify-center mx-[15px] !bg-[rgba(255,255,255,0)]"
      collapsedWidth={0}
    >
      <Clock />
      <Calendar className="flex justify-center mt-8 mb-8 mx-auto" />
      <Widgets.Statement />
      <Widgets.Link />
      <Widgets.Tags meta={meta} />
    </ASider>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <AContent className="md:col-span-3 !w-full text-center bg-[#108ee9] content-algolia">
      <div className="pr-4 pl-4">{children}</div>
    </AContent>
  )
}

const Widgets = {
  Statement: () => (
    <div className="block p-4 bg-[#f0fff0] text-[#016c01] text-sm normal-shadow">
      本工具数据均在本地浏览器处理，不会上传到网络服务器中， 请放心使用！
    </div>
  ),
  Link: () => (
    <div className="mt-8 mb-8 normal-shadow">
      <Input
        addonAfter={<CopyOutlined />}
        value={window ? window.location.href : ''}
        onClick={(e) => {
          //TODO 后面得改
          e.preventDefault()
          e.currentTarget.select()
          document.execCommand('copy')
          e.currentTarget.blur()
        }}
      />
    </div>
  ),
  Tags: ({ meta }: { meta?: Meta }) => (
    <Card
      id="card-tags"
      title="工具标签"
      className="normal-shadow mb-20 text-left"
      bordered={false}
    >
      <ToolTags tags={meta?.keywords?.split(',')} />
    </Card>
  ),
}

const ToolsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true)
  const [meta, setMeta] = useState<Meta>()

  useEffect(() => setIsMobile(_isMobile(window)), [])

  useEffect(() => {
    document &&
      setMeta({
        title: document.title?.split(' - ')[0] || '',
        keywords:
          document
            .querySelector('meta[name="keywords"]')
            ?.getAttribute('content') || '',
      })
  }, [])

  return (
    <Layout className="tools-layout h-screen">
      <Header />
      <div className="container self-center h-auto">
        <AHeader className="pt-4 text-center h-16 bg-[#7dbcea]">
          <Breadcrumb
            className="text-sm"
            items={[
              {
                title: <Link href="/">首页</Link>,
              },
              {
                title: meta?.title,
              },
            ]}
          />
        </AHeader>
        <Layout className="md:grid md:grid-cols-4 h-full" hasSider={!isMobile}>
          <Container>{children}</Container>
          {!isMobile && <Sider meta={meta} />}
        </Layout>
      </div>
      <AFooter className="text-center bg-[#f0f3fa]">Footer</AFooter>
    </Layout>
  )
}

export default ToolsLayout
