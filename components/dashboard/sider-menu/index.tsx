'use client'

import {
  CommentOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  SettingOutlined,
  TeamOutlined,
  ToolOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import Link from 'next/link'

const itemsDir: {
  key: string
  label: string | React.ReactNode
  icon?: React.ReactNode
  children?: {
    key: string
    label: string | React.ReactNode
    icon?: React.ReactNode
  }[]
}[] = [
  {
    key: '/home',
    label: '仪表盘',
    icon: <DashboardOutlined />,
  },
  {
    key: 'content',
    label: '内容',
    children: [
      {
        key: '/tools',
        label: '工具',
        icon: <ToolOutlined />,
      },
      {
        key: '/assets',
        label: '附件',
        icon: <DatabaseOutlined />,
      },
      {
        key: '/comments',
        label: '评论',
        icon: <CommentOutlined />,
      },
    ],
  },
  {
    key: 'system',
    label: '系统',
    children: [
      {
        key: '/users',
        label: '用户',
        icon: <UserOutlined />,
      },
      {
        key: '/users/roles',
        label: '角色',
        icon: <TeamOutlined />,
      },
      {
        key: '/settings',
        label: '设置',
        icon: <SettingOutlined />,
      },
    ],
  },
]

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const ROOT_PATH = '/dashboard'

const items: MenuProps['items'] = itemsDir.map((item) => {
  if (item.children)
    return getItem(
      item.label,
      item.key,
      item.icon,
      item.children.map((_item) =>
        getItem(
          <Link href={ROOT_PATH + _item.key}>{_item.label}</Link>,
          _item.key,
          _item.icon,
        ),
      ),
      'group',
    )
  return getItem(
    <Link href={ROOT_PATH + item.key}>{item.label}</Link>,
    item.key,
    item.icon,
  )
})

export const SiderMenu: React.FC<{ defaultSelectedKey: string }> = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['/sub1/option1']}
      defaultOpenKeys={['sub1']}
      style={{ borderRight: 0 }}
      items={items}
    />
  )
}
