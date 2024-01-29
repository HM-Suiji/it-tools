import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { uuid } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
	title: uuid[0],
	keywords: uuid[1],
	description: uuid[2],
})

const UUIDContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <>{children}</>
}

export default UUIDContainer
