'use client'

import { CodeShow } from '@/components'
import { Button } from 'antd'
import { useEffect, useState } from 'react'

const parseCode = (code: string) => {
  let result = []
  let indentLevel = 0

  const target = code
    .replaceAll('<', '\n<')
    .replaceAll('>', '>\n')
    .trim()
    .split('\n')
    .filter((line) => line.trim() !== '')
  let preTab = true
  for (const line of target) {
    console.log(line)
    if (!line.includes('</')) {
      if (preTab) {
        preTab = false
      } else {
        indentLevel++
        preTab = true
      }
    } else if (line.includes('</') && indentLevel > 0) {
      indentLevel--
    }
    result.push('  '.repeat(indentLevel) + line)
  }

  return result.join('\n')
}

const RichEditor: React.FC = () => {
  const [isFinished, setIsFinished] = useState(false)

  return (
    <>
      <div className="bg-white"></div>
      <Button
        onClick={() => {
          setIsFinished(true)
        }}
      >
        完成编辑
      </Button>
      {/* {isFinished && <CodeShow code={html} language="html" />} */}
    </>
  )
}

export default RichEditor
