import { simpleHash } from '@/utils'
import { Tag } from 'antd'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import { TAG_COLOR as color } from '@/theme'

export const ToolTags: React.FC<{ tags?: string[] }> = ({ tags }) =>
  tags?.map((item, index) => {
    if (index === 0) {
      return (
        <Tag key={uuid()} color={color[simpleHash(item) % 11]}>
          {item}
        </Tag>
      )
    }
    return (
      <Link key={uuid()} href={`/tags/${item}`}>
        <Tag color={color[simpleHash(item) % 11]}>{item}</Tag>
      </Link>
    )
  })
