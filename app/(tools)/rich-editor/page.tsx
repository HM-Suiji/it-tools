'use client'

import { CodeShow } from '@/components'
import { Button } from 'antd'
import BraftEditor, { EditorState } from 'braft-editor'
import 'braft-editor/dist/index.css'
import { parse } from 'node-html-parser'
import { useEffect, useState } from 'react'

const parseCode = (code: string) => {
  let result = []
  let indentLevel = 0

  const target = code
    .replaceAll('<', '\n<')
    .replaceAll('>', '>\n')
    .trim()
    .split('\n')
  // console.log(target)
  // for (const line of target) {
  //   result.push('  '.repeat(indentLevel) + line)
  //   console.log(line)
  //   if (!line.includes('/>')) {
  //     indentLevel++
  //   } else if (line.includes('/>') && indentLevel > 0) {
  //     indentLevel--
  //   }
  // }
  // console.log(result)
  result = target

  return result.join('\n')
}

const RichEditor: React.FC = () => {
  const [editorState, setEditorState] = useState<EditorState>()
  const [isFinished, setIsFinished] = useState(false)

  const handleChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }

  useEffect(() => setEditorState(BraftEditor.createEditorState(null)), [])

  return (
    <>
      <div className="bg-white">
        <BraftEditor value={editorState} onChange={handleChange} />
      </div>
      <Button
        onClick={() => {
          setIsFinished(true)
          parseCode(editorState.toHTML())
        }}
      >
        完成编辑
      </Button>
      {isFinished && (
        <CodeShow code={parseCode(editorState.toHTML())} language="html" />
      )}
    </>
  )
}

export default RichEditor
