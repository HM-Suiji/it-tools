import {
  QrcodeOutlined,
  StarOutlined,
  LikeOutlined,
  ShareAltOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons'
import './index.scss'
import { useEffect, useState } from 'react'

export const ToolContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [intro, setIntro] = useState('')

  useEffect(() => {
    let target = document.querySelector('meta[name="description"]')
    if (target) {
      setIntro((target as any).content)
    }
  }, [])

  return (
    <div className="tool-container">
      <div className="tool-meta py-1 border">
        <ul>
          <li>
            <StarOutlined />
            &nbsp;收藏工具
          </li>
          <li>
            <QrcodeOutlined />
            &nbsp;工具二维码
          </li>
          <li>
            <LikeOutlined />
            &nbsp;打赏支持
          </li>
          <li>
            <ShareAltOutlined />
            &nbsp;分享工具
          </li>
          <li>
            <CustomerServiceOutlined />
            &nbsp;反馈建议
          </li>
        </ul>
      </div>
      <div className="tool-wrapper">
        <div className="tool-box">{children}</div>
        <div className="tool-intro">
          <h2>工具简介</h2>
          <p className="text-left">{intro}</p>
        </div>
      </div>
    </div>
  )
}
