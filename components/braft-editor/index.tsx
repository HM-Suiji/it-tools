import BraftEditor, { EditorState } from 'braft-editor'
import { useRef, useState } from 'react'

const Editor: React.FC = () => {
  const [value, setValue] = useState(BraftEditor.createEditorState(''))

  const onChange = (editorState: EditorState) => {
    setValue(editorState)
  }

  return <BraftEditor value={value} onChange={onChange} />
}

export { Editor as BraftEditor }
