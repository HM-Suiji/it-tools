'use client'

import { Layout, Menu, MenuProps } from 'antd'
import {
	headerStyle,
	contentStyle,
	footerStyle,
	siderStyle,
	rootHeaderStyle,
} from '@/assets/style/layoutStyle'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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
	const router = useRouter()

	const onClickMenu: MenuProps['onClick'] = (e) => {
		console.log('click ', e)
		setCurrent(e.key)
		router.push(e.key)
	}

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
			<Header style={headerStyle}>Header</Header>
			<Layout hasSider>
				<Content style={contentStyle}>
					<div className="pr-4 pl-4">{children}</div>
				</Content>
				<Sider style={siderStyle}>Sider</Sider>
			</Layout>
			<Footer style={footerStyle}>Footer</Footer>
		</Layout>
	)
}

export default ToolsLayout
