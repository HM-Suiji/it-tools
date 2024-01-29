import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { dateFormat } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
	title: dateFormat[0],
	keywords: dateFormat[1],
	description: dateFormat[2],
})

const DateFormatContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <>{children}</>
}

export default DateFormatContainer
