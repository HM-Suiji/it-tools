import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { idCards } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
	title: idCards[0],
	keywords: idCards[1],
	description: idCards[2],
})

const IdCardsContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <>{children}</>
}

export default IdCardsContainer
