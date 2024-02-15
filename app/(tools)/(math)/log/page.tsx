'use client'

import { Button, Input } from 'antd'
import { ToolTextArea } from '@/components'
import { useState } from 'react'

const getLogarithm = (base: number, antilogarithm: number) => {
  let result = Math.log(antilogarithm) / Math.log(base)
  let tmp: number
  if (result === (tmp = +result.toFixed())) return tmp.toString()
  else if (result === (tmp = +result.toFixed(1))) return tmp.toString()
  else if (result === (tmp = +result.toFixed(2))) return tmp.toString()
  else if (result === (tmp = +result.toFixed(3))) return tmp.toString()
  else if (result === (tmp = +result.toFixed(4))) return tmp.toString()
  else return result.toFixed(5)
}

const Log: React.FC = () => {
  const [base, setBase] = useState<number>()
  const [antilogarithm, setAntilogarithm] = useState<number>()
  const [result, setResult] = useState('')

  const reset = () => {
    setBase(undefined)
    setAntilogarithm(undefined)
    setResult('')
  }

  return (
    <div>
      <div className="text-2xl font-bold my-4">对数计算器</div>
      <div className="my-4">对数计算器，输入对数的底数和真数一键计算出对数</div>
      <div className="border flex flex-col h-40 justify-center items-center mb-4">
        <div className="h-10 text-xl">
          Log{' '}
          <Input
            value={base}
            onChange={(e) => setBase(+e.target.value)}
            className="w-[7.5rem]"
          />{' '}
          ^{' '}
          <Input
            value={antilogarithm}
            onChange={(e) => setAntilogarithm(+e.target.value)}
            className="w-[7.5rem]"
          />{' '}
          = <Input value={result} className="w-[7.5rem]" />
        </div>
        <div>
          <Button
            className="mr-2"
            onClick={() =>
              setResult(getLogarithm(base || 0, antilogarithm || 0))
            }
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
        title="对数计算器【功能介绍】："
      >
        对数是数学代数中重要的组成部分，对数是对求幂的逆运算，对数的一般形式为x=logₐN（a&gt;0，且a≠1），其中a叫做对数的底数，N叫做真数。
        <br />
        使用对数计算器，我们只需输入对数的底数和真数，即可快速计算出对数，节约人工运算时间，提升对数的运算效率，为我们的学习和工作带来便利性。
      </ToolTextArea>
      <ToolTextArea extraStyle title="对数计算器【操作指南】：">
        ①进入对数在线计算功能页面。
        <br />
        ②输入对数的底数和真数，例如：底数a=3、真数N=9。
        <br />
        ③点击“计算”按钮，对数的运算结果为：2。
        <br />
        ④点击“清除”按钮，立即重置计算器，用户可以再次进行对数运算操作。
      </ToolTextArea>
    </div>
  )
}

export default Log
