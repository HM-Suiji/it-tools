import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { log } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
  title: log[0],
  keywords: log[1],
  description: log[2],
})

const LogContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>
}

export default LogContainer
