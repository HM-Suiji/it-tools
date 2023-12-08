'use client'

import { Breadcrumb, Card, Input, Layout, Menu, MenuProps } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { isMobile as _isMobile } from '@/utils'
import { Calendar, Clock, Search, ToolTags } from '@/components'
import './index.scss'

const { Header, Footer, Sider, Content } = Layout

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

const ToolsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [current, setCurrent] = useState('mail')
	const [isMobile, setIsMobile] = useState(true)
	const [meta, setMeta] = useState<{ title: string; keywords?: string }>()
	const router = useRouter()

	const onClickMenu: MenuProps['onClick'] = (e) => {
		setCurrent(e.key)
		router.push(e.key)
	}
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
		<Layout className="tools-layout">
			<Header className="h-auto px-0 leading-[40px] bg-[#fff]">
				<div className="md:grid max-[640px]:flex grid-cols-4 gap-4">
					<div className="text-blue-400 pl-4 md:!leading-[40px] md:text-xl">
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
						<Search />
					</div>
				</div>
			</Header>
			<div className="container self-center h-auto">
				<Header className="pt-4 text-center h-16 bg-[#7dbcea]">
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
				</Header>
				<Layout className="md:grid md:grid-cols-4 h-full" hasSider={!isMobile}>
					<Content className="md:col-span-3 !w-full text-center bg-[#108ee9] content-algolia">
						<div className="pr-4 pl-4">{children}</div>
					</Content>
					{!isMobile && (
						<Sider
							theme="light"
							width="auto"
							className="md:col-span-1 text-center flex justify-center mx-[15px] !bg-[rgba(255,255,255,0)]"
							collapsedWidth={0}>
							<Clock />
							<Calendar className="flex justify-center mt-8 mb-8 mx-auto" />
							<div className="block p-4 bg-[#f0fff0] text-[#016c01] text-sm normal-shadow">
								本工具数据均在本地浏览器处理，不会上传到网络服务器中，
								请放心使用！
							</div>
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
							<Card
								id="card-tags"
								title="工具标签"
								className="normal-shadow mb-20 text-left"
								bordered={false}>
								<ToolTags tags={meta?.keywords?.split(',')} />
							</Card>
						</Sider>
					)}
				</Layout>
			</div>
			<Footer className="text-center bg-[#f0f3fa]">Footer</Footer>
		</Layout>
	)
}

export default ToolsLayout
