'use client'

import { Input, Layout, Menu, MenuProps } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import {
	headerStyle,
	contentStyle,
	footerStyle,
	rootHeaderStyle,
} from '@/assets/style/layoutStyle'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { isMobile as _isMobile } from '@/utils'
import { Calendar } from '@/components'

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
	const router = useRouter()

	const onClickMenu: MenuProps['onClick'] = (e) => {
		console.log('click ', e)
		setCurrent(e.key)
		router.push(e.key)
	}
	useEffect(() => setIsMobile(_isMobile(window)), [])

	return (
		<Layout>
			<Header className="h-auto" style={rootHeaderStyle}>
				<div className="grid grid-cols-4 gap-4">
					<div className="text-blue-400 pl-4 leading-[40px]  text-xl">
						<Link href="/">幻梦IT工具站</Link>
					</div>
					<div className="col-span-3 flex flex-row-reverse">
						<Menu
							// defaultSelectedKeys={['mail']}
							onClick={onClickMenu}
							selectedKeys={[current]}
							mode="horizontal"
							items={menuItems}
						/>
					</div>
				</div>
			</Header>
			<div className="container self-center h-auto">
				<Header style={headerStyle}>Header</Header>
				<Layout className="md:grid md:grid-cols-4 h-full" hasSider={!isMobile}>
					<Content className="md:col-span-3 !w-full" style={contentStyle}>
						<div className="pr-4 pl-4">{children}</div>
					</Content>
					{!isMobile && (
						<Sider
							theme="light"
							width="auto"
							className="md:col-span-1 text-center mx-[15px]"
							collapsedWidth={0}>
							<Calendar className="flex justify-center mt-8 mb-8" />
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
							<div className="block h-5"></div>
						</Sider>
					)}
				</Layout>
			</div>
			<Footer style={footerStyle}>Footer</Footer>
		</Layout>
	)
}

export default ToolsLayout
