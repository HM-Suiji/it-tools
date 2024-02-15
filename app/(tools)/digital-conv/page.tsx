'use client'

import { Button, Input } from 'antd'
import { useState } from 'react'

const toChineseNumber = (num: number) => {
  let result = ''
  const parts = num
    .toString()
    .replace(/(?=(\d{4})+$)/g, ' ')
    .split(' ')
    .filter(Boolean)
  const map = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const units = ['', '十', '百', '千']
  const _handleZero = (str: string) => {
    return str.replace(/零+/g, '零').replace(/零$/, '')
  }
  const _transform = (n: string) => {
    let result = ''
    for (let i = 0; i < n.length; i++) {
      const c = map[+n[i]]
      let u = units[n.length - i - 1]
      if (c === '零') {
        u = ''
      }
      result += c + u
    }
    return _handleZero(result)
  }
  const bigUnits = ['', '万', '亿']
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i]
    const c = _transform(p)
    const u = bigUnits[parts.length - i - 1]
    if (c === '') {
      result += '零'
      continue
    }
    result += c + u
  }
  return _handleZero(result)
}

const toBigChineseNumber = (num: number) => {
  const map = {
    零: '零',
    一: '壹',
    二: '贰',
    三: '叁',
    四: '肆',
    五: '伍',
    六: '陆',
    七: '柒',
    八: '捌',
    九: '玖',
    十: '拾',
    百: '佰',
    千: '仟',
    万: '万',
    亿: '亿',
  }
  const cnum = toChineseNumber(num)
  return cnum
    .split('')
    .map((c) => (map as any)[c])
    .join('')
}

const DigitalConv: React.FC = () => {
  const [value, setValue] = useState<number>()
  const [result, setResult] = useState('')

  return (
    <div className="flex flex-col items-start">
      <div>数字：</div>
      <Input
        type="number"
        onChange={(e) => setValue(+e.target.value)}
        placeholder="要转换的数字"
      />
      <div>
        <Button
          className="bg-blue-600"
          type="primary"
          onClick={() => setResult(toBigChineseNumber(value || 0))}
        >
          转化成文字
        </Button>
        <Button className="bg-blue-600" type="primary">
          查看示例
        </Button>
      </div>
      <Input.TextArea value={result} className="!min-h-[5rem]"></Input.TextArea>
    </div>
  )
}

export default DigitalConv
