import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { baseConversion } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
	title: baseConversion[0],
	keywords: baseConversion[1],
	description: baseConversion[2],
})

const BaseConversionContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <>{children}</>
}

export default BaseConversionContainer
