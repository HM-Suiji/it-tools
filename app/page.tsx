'use client'

import tools from '@/assets/json/tools.json'
import { Avatar, List } from 'antd'
import Link from 'next/link'

const data = Object.entries(tools).map((item) => ({
	title: item[0],
	description: item[1][0],
}))

export default function Home() {
	return (
		<div>
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
				)}></List>
		</div>
	)
}
