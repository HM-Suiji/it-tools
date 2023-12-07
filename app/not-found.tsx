import Link from 'next/link'
import '@/assets/style/not-found.scss'

const NotFound: React.FC = () => {
	return (
		<div className="not-found">
			<div className="container-box">
				<div className="main-container">
					<div className="data">
						<span>Error 404</span>
						<h1 className="title">Hey Buddy</h1>
						<p>We can't seem to find the page <br />you are looking for.</p>
						<Link href="/" className="button"> Go Home </Link>
					</div>

					<div className="ghost-img">
						<img src="/ghost-img.png" alt="" />
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
