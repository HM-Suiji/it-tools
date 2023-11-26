import { useMetaData } from '@/hooks'
import { http } from '@/utils'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
	const meta = await http('/meta/base-conversion')
	return useMetaData({
		title: meta[0],
		keywords: meta[1],
		description: meta[2],
	})
}

const BaseConversionContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <>{children}</>
}

export default BaseConversionContainer
