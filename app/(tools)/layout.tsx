'use client'

import { Layout, Menu, MenuProps } from 'antd'
import {
	headerStyle,
	contentStyle,
	footerStyle,
	siderStyle,
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
	const [isMobile, setIsMobile] = useState(false)
	const router = useRouter()

	const onClickMenu: MenuProps['onClick'] = (e) => {
		console.log('click ', e)
		setCurrent(e.key)
		router.push(e.key)
	}
	useEffect(() => setIsMobile(_isMobile(window)), [])

	return (
		<Layout style={{ height: '100vh' }}>
			<Header style={rootHeaderStyle}>
				<div className="grid grid-cols-4 gap-4">
					<div className="text-blue-400 pl-4 leading-[40px]  text-xl">
						<Link href="/">幻梦IT工具站</Link>
					</div>
					<div className="col-span-3 flex flex-row-reverse">
						<Menu
							defaultSelectedKeys={['mail']}
							onClick={onClickMenu}
							selectedKeys={[current]}
							mode="horizontal"
							items={menuItems}
						/>
					</div>
				</div>
			</Header>
			<div className="container self-center">
				<Header style={headerStyle}>Header</Header>
				<Layout className="md:grid md:grid-cols-4" hasSider={!isMobile}>
					<Content className="md:col-span-3 !w-full" style={contentStyle}>
						<div className="pr-4 pl-4">{children}</div>
					</Content>
					{!isMobile && (
						<Sider
							theme="light"
							width="auto"
							className="md:col-span-1"
							collapsedWidth={0}
							style={siderStyle}>
							<Calendar />
						</Sider>
					)}
				</Layout>
			</div>
			<Footer className="fixed bottom-0 w-full" style={footerStyle}>
				Footer
			</Footer>
		</Layout>
	)
}

export default ToolsLayout
