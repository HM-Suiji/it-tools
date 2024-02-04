import { useFavoriteStore } from '@/stores'
import { StarFilled } from '@ant-design/icons'
import { Card, List } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'

let favorites: string | null = localStorage!.getItem('favorite')

const ToolListItem: React.FC<{
  item: Tool
  changeFavorite: (link: string, current: boolean) => void
}> = ({ item, changeFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const unsub = useFavoriteStore.subscribe((state) => {
      if (state.favorites.includes(item.link)) {
        setIsFavorite(true)
      } else {
        setIsFavorite(false)
      }
    })

    if (favorites) {
      setIsFavorite(
        JSON.parse(favorites).state?.favorites.includes(item.link)
          ? true
          : false,
      )
    }
    return unsub
  }, [])

  return (
    <List.Item>
      <Card
        title={<Link href={item.link}>{item.title}</Link>}
        extra={
          <StarFilled
            style={{ color: isFavorite ? '#ffa500' : '#a9a9a9' }}
            onClick={() => {
              changeFavorite(item.link, isFavorite)
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
  const changeFavorite = useFavoriteStore.use.change()

  return (
    <List
      grid={{
        column: 4,
        gutter: 16,
      }}
      dataSource={data}
      split={false}
      renderItem={(item) => (
        <ToolListItem changeFavorite={changeFavorite} item={item} />
      )}
    ></List>
  )
}
