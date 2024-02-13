import { useFavoriteStore } from '@/stores'
import { isMobile } from '@/utils'
import { StarFilled } from '@ant-design/icons'
import { Card, List, Modal, message } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Target = {
  link: string
  isFavorite: boolean
  setIsFavorite: (bool: boolean) => void
}

const favorites = useFavoriteStore.getState().favorites

const ToolListItem: React.FC<{
  item: Tool
  setTarget: (target: Target) => void
}> = ({ item, setTarget }) => {
  const [isFavorite, setIsFavorite] = useState(favorites.includes(item.link))
  const handleSwitch = () => {
    setTarget({ link: item.link, isFavorite, setIsFavorite })
  }
  return (
    <List.Item>
      <Card
        title={<Link href={item.link}>{item.title}</Link>}
        extra={
          <StarFilled
            style={{ color: isFavorite ? '#ffa500' : '#a9a9a9' }}
            onClick={handleSwitch}
          />
        }
      >
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {item.description}
        </div>
      </Card>
    </List.Item>
  )
}

export const ToolList: React.FC<{
  data: Tool[]
}> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [target, setTarget] = useState<Target>()
  const [column, setColumn] = useState(4)
  const changeFavorite = useFavoriteStore.use.change()
  const handleOk = () => {
    setIsModalOpen(false)
    changeFavorite(target!.link, target!.isFavorite)
    target?.setIsFavorite(false)
    message.success('已移出收藏', 2)
  }

  useEffect(() => {
    if (target) {
      if (target.isFavorite) {
        setIsModalOpen(true)
      } else {
        changeFavorite(target.link, target.isFavorite)
        target.setIsFavorite(true)
        message.success('已加入收藏', 2)
      }
    }
  }, [target])

  useEffect(() => setColumn(isMobile(window) ? 2 : 4), [])

  return (
    <>
      <List
        grid={{
          column,
          gutter: 16,
        }}
        dataSource={data}
        split={false}
        renderItem={(item) => (
          <ToolListItem setTarget={setTarget} item={item} />
        )}
      ></List>
      <Modal
        title="提示"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        cancelText="取消"
        okText="确定"
        okType="danger"
      >
        <p>是否取消收藏？</p>
      </Modal>
    </>
  )
}
