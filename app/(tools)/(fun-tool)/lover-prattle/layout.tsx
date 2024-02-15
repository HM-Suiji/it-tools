import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { loverPrattle } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
  title: loverPrattle[0],
  keywords: loverPrattle[1],
  description: loverPrattle[2],
})

const LoverPrattleContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>
}

export default LoverPrattleContainer
