import { useMetaData } from '@/hooks'
import { Metadata } from 'next'
import { http } from '@/utils'

export async function generateMetadata(): Promise<Metadata> {
	const meta = await http('/meta/date-format')
	return useMetaData({
		title: meta[0],
		keywords: meta[1],
		description: meta[2],
	})
}

const DateFormat: React.FC = () => {
	return <>DateFormat</>
}

export default DateFormat
