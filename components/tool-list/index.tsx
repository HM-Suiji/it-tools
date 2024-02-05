import { useFavoriteStore } from '@/stores'
import { StarFilled } from '@ant-design/icons'
import { Card, List } from 'antd'
import Link from 'next/link'
import { useState } from 'react'

const favorites = useFavoriteStore.getState().favorites

const ToolListItem: React.FC<{
  item: Tool
}> = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(favorites.includes(item.link))
  const changeFavorite = useFavoriteStore.use.change()
  return (
    <List.Item>
      <Card
        title={<Link href={item.link}>{item.title}</Link>}
        extra={
          <StarFilled
            style={{ color: isFavorite ? '#ffa500' : '#a9a9a9' }}
            onClick={() => {
              changeFavorite(item.link, isFavorite)
              setIsFavorite(!isFavorite)
            }}
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
  return (
    <List
      grid={{
        column: 4,
        gutter: 16,
      }}
      dataSource={data}
      split={false}
      renderItem={(item) => <ToolListItem item={item} />}
    ></List>
  )
}
