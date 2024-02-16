import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { testSpeed } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
  title: testSpeed[0],
  keywords: testSpeed[1],
  description: testSpeed[2],
})

const TestSpeedContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>
}

export default TestSpeedContainer
