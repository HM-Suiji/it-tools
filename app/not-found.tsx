import Link from 'next/link'
import '@/assets/style/not-found.scss'
import { Button } from 'antd'

const NotFound: React.FC = () => {
	return (
		<div className="not-found">
			<div className="number">404</div>

			<div className="text">
				<span>页面找不到了</span>
				<br />
				可能已经被删除
				<br />
				<Button>
					<Link href="/">回到首页</Link>
				</Button>
			</div>
			<img src="/svg/meteor.svg" className="meteor" />
			<img src="/svg/astronaut.svg" className="astronaut" />
			<img src="/svg/spaceship.svg" className="spaceship" />
			<div className="mars"></div>
		</div>
	)
}

export default NotFound
