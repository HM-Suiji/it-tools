'use client'

import { Button, Card, message as AMessage } from 'antd'
import { useEffect, useState } from 'react'

const LoverPrattle: React.FC = () => {
  const [message, setMessage] = useState('')

  const getMsg = () =>
    fetch('https://api.uutool.cn/juzi/tiangou').then((res) =>
      res.json().then((data) => setMessage(data.data.content)),
    )

  useEffect(() => {
    getMsg()
  }, [])

  return (
    <div className="flex flex-col items-center">
      <Card className="w-2/3 mt-10">
        <p className="text-xl">{message}</p>
      </Card>
      <div>
        <Button
          onClick={() =>
            navigator.clipboard
              .writeText(message)
              .then(() => AMessage.success('复制成功'))
              .catch(() => AMessage.error('复制失败,请重试或尝试手动复制'))
          }
        >
          复制对白
        </Button>
        <Button onClick={getMsg}>查看下一条</Button>
      </div>
    </div>
  )
}

export default LoverPrattle
