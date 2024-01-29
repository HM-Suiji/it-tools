import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { hearingTest } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
	title: hearingTest[0],
	keywords: hearingTest[1],
	description: hearingTest[2],
})

const HearingTestContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <>{children}</>
}

export default HearingTestContainer
