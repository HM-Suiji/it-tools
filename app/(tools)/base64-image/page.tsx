import { useMetaData } from '@/hooks'
import { Metadata } from 'next'
import { http } from '@/utils'

const meta = await http('/meta/base64-image')

export const metadata: Metadata = useMetaData({
	title: meta[0],
	keywords: meta[1],
	description: meta[2],
})
const Base64Image: React.FC = () => {
	return <>Base64Image</>
}

export default Base64Image
