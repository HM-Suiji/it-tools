import { Card, List } from 'antd'
import Link from 'next/link'

export const ToolList: React.FC<{
  data: { title: string; description: string; link: string }[]
}> = ({ data }) => {
  return (
    <List
      grid={{
        column: 4,
        gutter: 16,
      }}
      dataSource={data}
      split={false}
      renderItem={(item, index) => (
        <List.Item>
          <Card
            title={<Link href={item.link}>{item.title}</Link>}
            extra={<>收藏</>}
          >
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
              {item.description}
            </div>
          </Card>
        </List.Item>
      )}
    ></List>
  )
}
