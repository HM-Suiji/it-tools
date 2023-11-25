import { useMetaData } from '@/hooks'
import { Metadata } from 'next'
import { uuid } from '@/assets/json/tools.json'

export const metadata: Metadata = useMetaData({
	title: uuid[0],
	keywords: uuid[1],
	description: uuid[2],
})

const Uuid: React.FC = () => {
	return <>uuid</>
}

export default Uuid
