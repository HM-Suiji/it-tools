'use client'

import tools from '@/assets/json/tools.json'
import { simpleHash } from '@/utils'
import { Tag, Typography } from 'antd'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import { TAG_COLOR as color } from '@/theme'
import { GlobalHeader } from '@/components'

const { Title } = Typography

const map = new Map<string, number>()

for (const key in tools) {
  const tool = tools[key as keyof typeof tools]
  const tags = tool[1].split(',')
  tags.forEach((tag, index) => {
    if (index === 0) {
      return
    }
    map.has(tag) ? map.set(tag, map.get(tag)! + 1) : map.set(tag, 1)
  })
}

const Tags: React.FC = () => {
  return (
    <>
      <GlobalHeader />
      <div className="flex flex-col items-center">
        <Title>Tags:</Title>
        <div className="grid grid-cols-3 md:grid-cols-6 justify-items-center gap-y-2 md:gap-y-4">
          {[...map].map(([tag, time]) => (
            <Link key={uuid()} href={`/tags/${tag}`}>
              <Tag
                className="md:text-xl md:px-3 py-1"
                color={color[simpleHash(tag) % 11]}
              >
                {tag}({time})
              </Tag>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Tags
