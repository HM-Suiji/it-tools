import Link from 'next/link'
import Image from 'next/image'
import '@/assets/style/not-found.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: '幻梦IT 工具站 - 页面似乎走丢了',
	description:
		'刷新或更正路径后重试',
}

const NotFound: React.FC = () => {
	return (
		<div className="not-found">
			<div className="container-box">
				<div className="main-container">
					<div className="data">
						<span>Error 404</span>
						<h1 className="title">你好 旅人</h1>
						<p>
							这个页面似乎不存在 <br />
							请刷新或更正路径后重试
						</p>
						<Link href="/" className="button">
							返回主页
						</Link>
					</div>

					<div className="ghost-img">
						<Image height={250} width={250} src="/ghost-img.png" alt="" />
						<div className="ghost-shadow"></div>
					</div>
				</div>

				<div className="main-footer">
					<span>19907080517</span>
					<span>|</span>
					<span>1704802092@qq.com</span>
				</div>
			</div>
		</div>
	)
}

export default NotFound
