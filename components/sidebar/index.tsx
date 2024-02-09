'use client'

import { QqOutlined, UpCircleOutlined, WechatOutlined } from '@ant-design/icons'
import { Image } from 'antd'

const sidebarList = [
  {
    icon: <WechatOutlined />,
    url: '/img/mock-qrcode.png',
    text: '扫码添加好友，微信联系我们',
  },
  {
    icon: <QqOutlined />,
    url: '/img/mock-qrcode.png',
    text: '',
  },
]

export const Sidebar: React.FC = () => {
  return (
    <div className="sidebar fixed z-[999] bottom-[15vh] right-0">
      <ul>
        {sidebarList.map((item, index) => (
          <li key={index} className="group relative w-10 h-10 text-center">
            {item.icon}
            <div className="hidden-box hidden group-hover:block -translate-y-1/2 right-10 absolute p-3">
              <Image
                width={170}
                height={170}
                src={item.url as unknown as string}
                alt=""
              />
              <span>{item.text}</span>
            </div>
          </li>
        ))}
        <li className=" w-10 h-10 text-center">
          <UpCircleOutlined
            className="text-2xl"
            onClick={() => scrollTo({ top: 0 })}
          />
        </li>
      </ul>
    </div>
  )
}
