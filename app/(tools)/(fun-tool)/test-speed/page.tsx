'use client'
import { Button, message } from 'antd'
import { useRef, useState } from 'react'
import { ToolTextArea } from '@/components'

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
      const time = ((Math.random() * 3000) % 2500) + 500

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
          'h-[20rem] w-[20rem] border-2 bg-white mb-4 ' +
          ((status === Status.B2 || status === Status.C) && ' !bg-red-600')
        }
        onClick={handleClick}
      ></div>
      {status === Status.A || status === Status.C ? (
        <Button onClick={startTest}>
          {status === Status.A ? '开始测试' : '重新测试'}
        </Button>
      ) : (
        <div>{status === Status.B1 ? '即将开始，别眨眼！' : '赶紧点击！'}</div>
      )}
      {status === Status.C && (
        <div className="my-4 text-green-400 text-xl font-bold">
          您的反应速度是：{resTime.current / 1000}秒
        </div>
      )}
      <ToolTextArea extraStyle className="mt-4" title="如何使用">
        点击开始测试按钮，盯紧屏幕，屏幕中的方块将会在5秒内随机变色，看到变色后请立即点击方块。
        <br />
        从识别到方块变色需要反应时间，大脑发指令通知手指执行点击操作也需要时间，通常经过专业训练的人会比常人有更快的响应速度。
      </ToolTextArea>
      <ToolTextArea extraStyle title="关于反应速度">
        反应速度主要取决于人的感受器（视觉、听觉）和其它分析器的特征以及中枢神经系统与神经肌肉之间的协调关系。反应速度素质受遗传效应影响较大。如，没有从事专门训练的人的反应时间通常在0.2～0.3秒之间，而一个训练有素的运动员也只能达到0.1～0.2秒。因此，在训练过程中，反应速度提高的幅度是很小的。
      </ToolTextArea>
      <ToolTextArea extraStyle title="关于计时准度">
        本工具采用的计时器是基于js的setTimrout与setInterval，可能因为主线程阻塞导致计时不精确，这是无法规避的误差。另外，基于react的响应式设计也有可能导致部分组件异常渲染阻塞计时器进程，使计时不精准。但是在总体来说，误差不会超过两百毫秒。另外，本计时器的最小精度(步长)为10毫秒。
      </ToolTextArea>
    </div>
  )
}

export default TestSpeed
