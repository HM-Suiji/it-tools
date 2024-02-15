'use client'
import { Button, message } from 'antd'
import { useRef, useState } from 'react'

enum Status {
  A = '等待开始',
  B1 = '进行1',
  B2 = '进行2',
  C = '已完成',
}

const TestSpeed: React.FC = () => {
  const [status, setStatus] = useState<Status>(Status.A)
  const [timer, setTimer] = useState<NodeJS.Timeout>()
  const resTime = useRef(0)

  const handleClick = () => {
    switch (status) {
      case Status.A:
        message.error('请先点击开始！')
        break
      case Status.B1:
        message.warning('还没开始呐，作弊行为！')
        break
      case Status.B2:
        clearInterval(timer)
        setStatus(Status.C)
        break
      case Status.C:
        message.error('已经结束啦！')
    }
  }

  const startTest = () => {
    if (status === Status.A) {
      setStatus(Status.B1)
      const time = ((Math.random() * 5000) % 4500) + 500

      setTimeout(() => {
        setStatus(Status.B2)
        setTimer(setInterval(() => (resTime.current += 10), 10))
      }, time)
    } else {
      setStatus(Status.A)
      resTime.current = 0
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="m-10">
        点击开始按钮，方块会在3秒内随机变色，看到变色后点击方块完成反应测试。
      </div>
      <div
        className={
          'h-[20rem] w-[20rem] border-2 bg-white' +
          ((status === Status.B2 || status === Status.C) && ' bg-red-600')
        }
        onClick={handleClick}
      ></div>
      <Button onClick={startTest}>
        {status === Status.A ? '开始测试' : '重新测试'}
      </Button>
      {status === Status.C && resTime.current}
    </div>
  )
}

export default TestSpeed
