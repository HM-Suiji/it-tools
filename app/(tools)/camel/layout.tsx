import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { camel } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
  title: camel[0],
  keywords: camel[1],
  description: camel[2],
})

const CamelContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>
}

export default CamelContainer
