import { List } from 'antd'
import Link from 'next/link'

export const ToolList: React.FC<{
  data: { title: string; description: string }[]
}> = ({ data }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            // avatar={
            // 	<Avatar
            // 		src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
            // 	/>
            // }
            title={<Link href={item.title}>{item.title}</Link>}
            description={item.description}
          />
        </List.Item>
      )}
    ></List>
  )
}
