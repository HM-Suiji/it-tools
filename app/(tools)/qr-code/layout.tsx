import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { http } from '@/utils'

export async function generateMetadata(): Promise<Metadata> {
	const meta = await http('/meta/qr-code')
	return getMetaData({
		title: meta[0],
		keywords: meta[1],
		description: meta[2],
	})
}

const QRCodeContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <>{children}</>
}

export default QRCodeContainer
