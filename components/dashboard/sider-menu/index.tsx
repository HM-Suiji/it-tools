'use client'

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import { useRouter } from 'next/router'

type MenuItem = {
  label: string
  icon: React.ReactNode
  key: string
}

const itemsDir: {
  sub: MenuItem
  children: MenuItem[]
}[] = [
  {
    sub: {
      key: '/sub1',
      label: 'subnav 1',
      icon: <LaptopOutlined />,
    },
    children: [
      {
        key: '/option1',
        label: 'option1',
        icon: <LaptopOutlined />,
      },
      {
        key: '/option2',
        label: 'option2',
        icon: <LaptopOutlined />,
      },
      {
        key: '/option3',
        label: 'option3',
        icon: <LaptopOutlined />,
      },
      {
        key: '/option4',
        label: 'option4',
        icon: <LaptopOutlined />,
      },
    ],
  },
]

const items: MenuProps['items'] = itemsDir.map((item) => {
  const { sub, children } = item
  return {
    key: sub.key,
    icon: sub.icon,
    label: sub.label,

    children: children.map((_item) => {
      return {
        key: sub.key + _item.key,
        label: _item.label,
        icon: _item.icon,
      }
    }),
  }
})

export const SiderMenu: React.FC<{ defaultSelectedKey: string }> = () => {
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={['/sub1/option1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={items}
      />
    </>
  )
}
