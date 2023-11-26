import { useMetaData } from '@/hooks'
import { Metadata } from 'next'
import { http } from '@/utils'

const meta = await http('/meta/qr-code')

export const metadata: Metadata = useMetaData({
	title: meta[0],
	keywords: meta[1],
	description: meta[2],
})

const QRCode: React.FC = () => {
	return <>QRCode</>
}

export default QRCode
