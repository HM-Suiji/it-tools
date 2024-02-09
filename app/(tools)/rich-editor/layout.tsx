import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { richEditor } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
  title: richEditor[0],
  keywords: richEditor[1],
  description: richEditor[2],
})

const RichEditorContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>
}

export default RichEditorContainer
