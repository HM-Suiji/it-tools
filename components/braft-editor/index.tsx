'use client'

import BraftEditor, { EditorState } from 'braft-editor'
import { Dispatch, useState } from 'react'
import 'braft-editor/dist/index.css'

const Editor: React.FC<{ setValue: Dispatch<any> }> = ({ setValue }) => {
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(''),
  )

  const onChange = (editorState: EditorState) => {
    setEditorState(editorState) // 保存编辑器内容
    setValue(editorState.toHTML())
  }

  return <BraftEditor value={editorState} onChange={onChange} />
}

export default Editor
