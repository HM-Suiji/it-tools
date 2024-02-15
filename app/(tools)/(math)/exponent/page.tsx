'use client'

import { ToolTextArea } from '@/components'
import { Button, Input } from 'antd'
import { useState } from 'react'

const Exponent: React.FC = () => {
  const [base, setBase] = useState<number>()
  const [exponent, setExponent] = useState<number>()
  const [result, setResult] = useState<number>()

  const reset = () => {
    setBase(undefined)
    setExponent(undefined)
    setResult(undefined)
  }

  return (
    <>
      <div>
        <div className="text-2xl font-bold my-4">指数计算器</div>
        <div className="my-4">
          指数计算器，输入指数的底数和真数一键计算出指数
        </div>
        <div className="border flex flex-col h-40 justify-center items-center mb-4">
          <div className="h-10 text-xl">
            <Input
              value={base}
              onChange={(e) => setBase(+e.target.value)}
              className="w-[7.5rem]"
            />{' '}
            ^{' '}
            <Input
              value={exponent}
              onChange={(e) => setExponent(+e.target.value)}
              className="w-[7.5rem]"
            />{' '}
            = <Input value={result} className="w-[7.5rem]" />
          </div>
          <div>
            <Button
              className="mr-2"
              onClick={() => setResult((base || 0) ** (exponent || 0))}
            >
              计算
            </Button>
            <Button danger onClick={reset}>
              清除
            </Button>
          </div>
        </div>
        <ToolTextArea
          extraStyle
          className="mt-4"
          title="指数计算器【功能介绍】："
        >
          指数是数学代数中重要的组成部分，指数是求幂的运算，指数的一般形式为x=a
          <sup>n</sup>（a≠1），其中x被叫做幂，a叫做幂的底数，n叫做指数。
          <br />
          使用指数计算器，我们只需输入幂的底数和指数，即可快速计算出幂，节约人工运算时间，提升指数运算效率，为我们的学习和工作带来便利性。
        </ToolTextArea>
        <ToolTextArea extraStyle title="指数计算器【操作指南】：">
          ①进入指数在线计算功能页面。
          <br />
          ②输入指数的底数和指数，例如：底数a=3、指数n=2。
          <br />
          ③点击“计算”按钮，指数的运算结果为：9。
          <br />
          ④点击“清除”按钮，立即重置计算器，用户可以再次进行指数运算操作。
        </ToolTextArea>
      </div>
    </>
  )
}

export default Exponent
