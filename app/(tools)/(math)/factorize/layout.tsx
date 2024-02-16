import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { factorize } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
  title: factorize[0],
  keywords: factorize[1],
  description: factorize[2],
})

const FactorizeContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>
}

export default FactorizeContainer
