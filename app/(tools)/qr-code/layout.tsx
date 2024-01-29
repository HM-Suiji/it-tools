import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { qrCode } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
	title: qrCode[0],
	keywords: qrCode[1],
	description: qrCode[2],
})

const QRCodeContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <>{children}</>
}

export default QRCodeContainer
