'use client'

import { CodeShow } from '@/components'
import { Button } from 'antd'
import BraftEditor, { EditorState } from 'braft-editor'
import 'braft-editor/dist/index.css'
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
  const [editorState, setEditorState] = useState<EditorState>()
  const [isFinished, setIsFinished] = useState(false)

  const handleChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }

  useEffect(() => setEditorState(BraftEditor.createEditorState(null)), [])

  if (window) {
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
  return <>该页面只内在客户端渲染</>
}

export default RichEditor
