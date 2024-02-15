import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { bmi } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
  title: bmi[0],
  keywords: bmi[1],
  description: bmi[2],
})

const BMIContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>
}

export default BMIContainer
