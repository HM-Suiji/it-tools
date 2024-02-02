import { MenuProps, Layout, Menu } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const { Header } = Layout

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

export const GlobalHeader: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter()
  const [current, setCurrent] = useState('')
  const onClickMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    router.push(e.key)
  }

  return (
    <Header className="h-auto w-full px-0 leading-10 bg-white">
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
          {children}
        </div>
      </div>
    </Header>
  )
}
