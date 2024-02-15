import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { exponent } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
  title: exponent[0],
  keywords: exponent[1],
  description: exponent[2],
})

const ExponentContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>
}

export default ExponentContainer
