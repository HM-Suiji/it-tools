import tools from '@/assets/json/tools.json'
import { simpleHash } from '@/utils'
import { Tag } from 'antd'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import { TAG_COLOR as color } from '@/theme'

const res = new Set<string>()

for (const key in tools) {
  const tool = tools[key as keyof typeof tools]
  const tags = tool[1].split(',')
  tags.forEach((tag) => res.add(tag))
}

const Tags: React.FC = () => {
  return (
    <>
      Tags:
      <ul>
        {[...res].map((tag) => (
          <Link key={uuid()} href={`/tags/${tag}`}>
            <Tag color={color[simpleHash(tag) % 11]}>{tag}</Tag>
          </Link>
        ))}
      </ul>
    </>
  )
}

export default Tags
