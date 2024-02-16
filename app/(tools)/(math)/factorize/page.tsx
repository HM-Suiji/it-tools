'use client'

import { ToolTextArea } from '@/components'
import { Button, Input, message } from 'antd'
import { useState } from 'react'

const factorize = (num: number) => {
  const factors: number[] = []

  if (num <= 0 || num % 1 !== 0) {
    message.error('请输入一个正整数')
    return factors
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    while (num % i === 0) {
      factors.push(i)
      num /= i
    }
  }
  if (num > 1) {
    factors.push(num)
  }

  return factors
}

const Factorize: React.FC = () => {
  const [val, setVal] = useState('')
  const [result, setResult] = useState('')

  return (
    <>
      <div>
        <div className="text-2xl font-bold my-4">质因数分解计算器</div>
        <div className="my-4">
          质因数分解计算器，一键计算合数的质因数分解结果
        </div>
        <div className="border flex flex-col justify-center items-center mb-4 gap-4 py-4">
          <div className="text-xl">
            输入合数：{' '}
            <Input
              type="number"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              className="w-[20rem]"
            />
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => setResult(factorize(Number(val)).join(' * '))}
            >
              计算
            </Button>
            <Button
              danger
              type="primary"
              onClick={() => {
                setVal('')
                setResult('')
              }}
            >
              清除
            </Button>
          </div>
          <div className="text-xl">
            &nbsp;&nbsp;&nbsp;&nbsp;质因数：&nbsp;
            <Input value={result} className="w-[20rem]" />
          </div>
        </div>
        <ToolTextArea
          extraStyle
          className="mt-4"
          title="质因数分解计算器【功能介绍】："
        >
          什么是分解质因数？分解质因数是把一个合数用几个质因数相乘的形式表示出来，分解质因数对于解决一些自然数和乘积的问题有很大的帮助。例如，合数36分解质因数结果为：2×2×3×3。
          <br />
          怎样分解质因数？除了人工运算以外，我们可以使用MathTool在线分解质因数计算功能，将合数一键转换为它的质因数相乘形式，有利于提升数字运算的便利性，节约人工运算时间成本。
        </ToolTextArea>
        <ToolTextArea extraStyle title="质因数分解计算器【操作指南】：">
          ①进入质因数分解在线计算功能页面。
          <br />
          ②输入目标合数，例如：36。
          <br />
          ③点击“计算”按钮，立即获取该合数的质因数分解结果 ：2×2×3×3。
          <br />
          ④点击“清除”按钮，立即重置转换器，用户可以再次进行分解质因数计算。
        </ToolTextArea>
      </div>
    </>
  )
}

export default Factorize
