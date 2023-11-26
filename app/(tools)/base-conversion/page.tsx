import { useMetaData } from '@/hooks'
import { Metadata } from 'next'
import { http } from '@/utils'

const meta = await http('/meta/base-conversion')

export const metadata: Metadata = useMetaData({
	title: meta[0],
	keywords: meta[1],
	description: meta[2],
})
const BaseConversion: React.FC = () => {
	return <>BaseConversion</>
}

export default BaseConversion
