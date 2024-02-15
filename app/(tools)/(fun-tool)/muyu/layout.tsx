import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { muyu } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
  title: muyu[0],
  keywords: muyu[1],
  description: muyu[2],
})

const MuyuContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>
}

export default MuyuContainer
