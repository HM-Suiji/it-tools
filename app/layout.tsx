import type { Metadata } from 'next'
import StyledComponentsRegistry from '../lib/AntdRegistry'
import { ConfigProvider } from 'antd'
import { lightTheme } from '@/theme'
import { Init } from '@/components/init'
import { Sidebar } from '@/components/sidebar'
import './globals.css'

export const metadata: Metadata = {
  title: '幻梦IT 工具站',
  description:
    '幻梦IT 工具站是一个免费便捷的在线工具站，无需下载，即来即用，简洁高效，让数据处理更简单和高效。',
  keywords: '工具,实用,免费,便捷,IT,uuid,二维码生成,数学计算,图片处理',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider theme={lightTheme}>
            {children}
            <Sidebar />
          </ConfigProvider>
        </StyledComponentsRegistry>
        <Init />
      </body>
    </html>
  )
}
