'use client'

import {
  QrcodeOutlined,
  StarOutlined,
  LikeOutlined,
  ShareAltOutlined,
  CustomerServiceOutlined,
  StarFilled,
} from '@ant-design/icons'
import './index.scss'
import { useEffect, useState } from 'react'
import { Modal, Popconfirm, QRCode, message } from 'antd'
import { useFavoriteStore } from '@/stores'

const getToolName = (url: string) => url.split('/').at(-1) || ''

const favorites = useFavoriteStore.getState().favorites

export const ToolContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [intro, setIntro] = useState('')
  const [url, setUrl] = useState('')
  const [open, setOpen] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const changeFavorite = useFavoriteStore.use.change()

  useEffect(() => {
    let target = document.querySelector('meta[name="description"]')
    if (target) {
      setIntro((target as any).content)
    }
    const url = location.href
    setUrl(url)
    setIsFavorite(favorites.includes(getToolName(url)))
  }, [])

  const handleFavorite = () => {
    if (isFavorite) {
      message.success('已取消收藏')
    } else message.success('已加入收藏')
    setIsFavorite(!isFavorite)
    changeFavorite(getToolName(url), isFavorite)
  }

  return (
    <div className="tool-container">
      <div className="tool-meta py-1 border">
        <ul>
          <li>
            {isFavorite ? (
              <a>
                <Popconfirm
                  title="取消收藏"
                  description="你确定取消收藏吗?"
                  onConfirm={handleFavorite}
                  okText="Yes"
                  cancelText="No"
                >
                  <StarFilled style={{ color: '#ffa500' }} />
                  &nbsp;收藏工具
                </Popconfirm>
              </a>
            ) : (
              <a onClick={handleFavorite}>
                <StarOutlined />
                &nbsp;收藏工具
              </a>
            )}
          </li>
          <li>
            <a onClick={() => setOpen(true)}>
              <QrcodeOutlined />
              &nbsp;工具二维码
            </a>
          </li>
          <li>
            <a href="/support" target="_blank">
              <LikeOutlined />
              &nbsp;打赏支持
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigator.clipboard
                  .writeText(url)
                  .then(() =>
                    message.success('工具链接已复制，去分享给朋友吧~'),
                  )
                  .catch(() =>
                    message.error('复制失败,请重试或尝试手动复制链接以分享'),
                  )
              }}
            >
              <ShareAltOutlined />
              &nbsp;分享工具
            </a>
          </li>
          <li>
            <a href="/feedback" target="_blank">
              <CustomerServiceOutlined />
              &nbsp;反馈建议
            </a>
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
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        className="!w-[240px]"
      >
        <QRCode errorLevel="H" value={url} icon="/img/favicon.ico" />
        <div className="text-center mt-2">手机扫码打开</div>
      </Modal>
    </div>
  )
}
