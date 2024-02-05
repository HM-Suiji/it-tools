import { useFavoriteStore } from '@/stores'
import { StarFilled } from '@ant-design/icons'
import { Card, List, Modal } from 'antd'
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
  const changeFavorite = useFavoriteStore.use.change()
  const handleOk = () => {
    setIsModalOpen(false)
    changeFavorite(target!.link, target!.isFavorite)
    target?.setIsFavorite(false)
  }

  useEffect(() => {
    if (target) {
      if (target.isFavorite) {
        setIsModalOpen(true)
      } else {
        changeFavorite(target.link, target.isFavorite)
        target.setIsFavorite(true)
      }
    }
  }, [target])

  return (
    <>
      <List
        grid={{
          column: 4,
          gutter: 16,
        }}
        dataSource={data}
        split={false}
        renderItem={(item) => (
          <ToolListItem setTarget={setTarget} item={item} />
        )}
      ></List>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}
