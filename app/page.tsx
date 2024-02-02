'use client'

import tools from '@/assets/json/tools.json'
import { toLine } from '@/utils/stringConduct'
import { Avatar, List, Layout } from 'antd'
import Link from 'next/link'
// import '@/client/getAllRoutesData'

const data = Object.entries(tools).map((item) => ({
  title: toLine(item[0]),
  description: item[1][0],
}))

const { Header, Content, Footer } = Layout

export default function Home() {
  return (
    <Layout>
      <Header className="bg-white"></Header>
      <Content>
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
      </Content>
      <Footer></Footer>
    </Layout>
  )
}
