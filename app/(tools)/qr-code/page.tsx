import cliApi from '@/assets/img/cli-api.png'
import Image from 'next/image'

const QRCode: React.FC = () => {
	return (
		<>
			QrCode
			<Image
				src={cliApi}
				alt="该二维马生成功能基于「草料二维码 - cli.im」"></Image>
		</>
	)
}

export default QRCode
