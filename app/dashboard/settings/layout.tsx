'use client'

import { Menu, MenuProps } from 'antd'
import { useRouter } from 'next/navigation'

const menuItems: MenuProps['items'] = [
  {
    label: '基本设置',
    key: './base',
  },
  {
    label: '工具设置',
    key: './tools',
  },
  {
    label: 'SEO设置',
    key: './seo',
  },
  {
    label: '用户设置',
    key: './users',
  },
  {
    label: '评论设置',
    key: './comment',
  },
  {
    label: '主题路由设置',
    key: './theme-route',
  },
  {
    label: '代码注入',
    key: './code-injection',
  },
  {
    label: '通知设置',
    key: './message',
  },
]

const SettingsContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const route = useRouter()
  return (
    <div className="w-full">
      <Menu
        className="w-full bg-[#f3f4f6]"
        mode="horizontal"
        items={menuItems}
        onClick={(e) => route.push(e.key)}
      ></Menu>
      <div className="h-[200px] bg-white">{children}</div>
    </div>
  )
}

export default SettingsContainer
