import type { Metadata } from 'next'
import './globals.css'
import './loading.scss'

import StyledComponentsRegistry from '../lib/AntdRegistry'
import { ConfigProvider } from 'antd'
import { lightTheme } from '@/theme'
import { Init } from '@/components/init'

export const metadata: Metadata = {
	title: '幻梦IT 工具站',
	description:
		'幻梦IT 工具站是一个免费便捷的在线工具站，无需下载，即来即用，简洁高效，让数据处理更简单和高效。',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="zh-CN">
			<body>
				<StyledComponentsRegistry>
					<ConfigProvider theme={lightTheme}>{children}</ConfigProvider>
				</StyledComponentsRegistry>
				<Init />
			</body>
		</html>
	)
}
