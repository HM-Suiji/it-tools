import { simpleHash } from '@/utils'
import { Tag } from 'antd'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'

type TagProps = string[]

const color = [
	'magenta',
	'red',
	'volcano',
	'orange',
	'gold',
	'lime',
	'green',
	'cyan',
	'blue',
	'geekblue',
	'purple',
]

export const ToolTags: React.FC<{ tags?: TagProps }> = ({ tags }) =>
	tags?.map((item, index) => {
		if (index === 0) {
			return (
				<Tag key={uuid()} color={color[simpleHash(item) % 11]}>
					{item}
				</Tag>
			)
		}
		return (
			<Link key={uuid()} href={`/tag/${item}`}>
				<Tag color={color[simpleHash(item) % 11]}>{item}</Tag>
			</Link>
		)
	})
