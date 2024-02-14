'use client'

import {
  CustomerServiceOutlined,
  QqOutlined,
  WechatOutlined,
} from '@ant-design/icons'
import { FloatButton, Image } from 'antd'
import { useState } from 'react'

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <FloatButton.Group
        open={open}
        trigger="click"
        onClick={() => setOpen(!open)}
        style={{ right: 24 }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton
          tooltip={
            <div className="bg-white">
              <Image src="/img/mock-qrcode.png" preview={false} />
              <div className="text-black w-full text-center">
                扫码添加好友，微信联系我们
              </div>
            </div>
          }
          icon={<WechatOutlined />}
        />
        <FloatButton
          tooltip={
            <div className="bg-white">
              <Image
                src="/img/mock-qrcode.png"
                preview={false}
                alt="打开QQ聊天"
              />
              <div className="text-black w-full text-center">
                扫码添加好友，QQ联系我们
              </div>
            </div>
          }
          icon={<QqOutlined />}
        />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </>
  )
}
