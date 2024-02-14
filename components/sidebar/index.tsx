'use client'

import {
  CustomerServiceOutlined,
  QqOutlined,
  WechatOutlined,
} from '@ant-design/icons'
import { FloatButton, Image, Tooltip } from 'antd'
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
        <Tooltip
          color="white"
          placement="left"
          title={
            <div className="bg-white">
              <Image src="/img/mock-qrcode.png" preview={false} />
              <div className="text-black w-full text-center">
                扫码添加好友，微信联系我们
              </div>
            </div>
          }
        >
          <FloatButton icon={<WechatOutlined />} />
        </Tooltip>
        <Tooltip
          color="white"
          placement="left"
          title={
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
        >
          <FloatButton
            icon={
              <a
                href="https://wpa.qq.com/msgrd?v=3&uin=1704802092&site=qq&menu=yes&jumpflag=1"
                target="_blank"
              >
                <QqOutlined />
              </a>
            }
          />
        </Tooltip>
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </>
  )
}
