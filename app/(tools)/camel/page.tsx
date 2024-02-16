'use client'

import { toCamel, toUnderline } from '@/utils'
import { Button, Input, message } from 'antd'
import { useEffect, useState } from 'react'

const Camel: React.FC = () => {
  const [val, setVal] = useState('')
  const [res, setRes] = useState('')

  useEffect(() => console.log(val), [val])

  return (
    <div className="flex flex-col items-start gap-4">
      <Input.TextArea
        className="!min-h-[6rem]"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <div className="flex gap-4">
        <Button onClick={() => setRes(toUnderline(val))}>驼峰转下划线</Button>
        <Button onClick={() => setRes(toCamel(val))}>下划线转驼峰</Button>
        <Button
          onClick={() =>
            navigator.clipboard
              .writeText(res)
              .then(() => message.success('复制成功'))
              .catch(() => message.error('复制失败,请重试或尝试手动复制'))
          }
        >
          复制结果
        </Button>
        <Button
          danger
          type="primary"
          onClick={() => {
            setVal('')
            setRes('')
          }}
        >
          清空
        </Button>
      </div>
      <Input.TextArea className="!min-h-[6rem]" value={res} />
    </div>
  )
}

export default Camel
