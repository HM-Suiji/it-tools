'use client'

import BraftEditor, { EditorState } from 'braft-editor'
import { Dispatch, useEffect, useState } from 'react'
import 'braft-editor/dist/index.css'

const Editor: React.FC<{
  setValue: Dispatch<string>
  isFinished: boolean
  setIsFinished: Dispatch<boolean>
}> = ({ setValue, isFinished, setIsFinished }) => {
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(''),
  )

  const onChange = (editorState: EditorState) => {
    setEditorState(editorState) // 保存编辑器内容
    if (isFinished) {
      setIsFinished(false)
    }
  }

  useEffect(() => {
    if (isFinished) {
      setValue(editorState.toHTML()) // 将编辑器内容同步到外部变量中
    }
  }, [isFinished])

  return <BraftEditor value={editorState} onChange={onChange} />
}

export default Editor
