import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { digitalConv } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
  title: digitalConv[0],
  keywords: digitalConv[1],
  description: digitalConv[2],
})

const DigitalConvContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>
}

export default DigitalConvContainer
