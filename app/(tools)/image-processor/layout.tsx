import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { imageProcessor } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
	title: imageProcessor[0],
	keywords: imageProcessor[1],
	description: imageProcessor[2],
})

const ImageProcessorContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <>{children}</>
}

export default ImageProcessorContainer
