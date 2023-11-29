'use client'

import { useEffect, useState } from 'react'

const Loading: React.FC = () => {
	const [dots, setDots] = useState('')
	useEffect(() => {
		const timer = setInterval(() => {
			setDots((dots) => {
				if (dots.length < 3) {
					return dots + '.'
				} else return '.'
			})
		}, 800)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<div className="loading">
			<div className="all">
				{/* 容器部分 */}
				<div className="bowl">
					{/* 容器中的水 */}
					<div className="water">
						<div className="inner"></div>
					</div>

					<div className="top-water"></div>

					<div className="center-box">
						{/* 渔民 */}
						<div className="fisherman">
							<div className="body"></div>
							<div className="right-arm"></div>
							<div className="right-leg"></div>
							{/* 鱼竿 */}
							<div className="rod">
								<div className="handle"></div>
								<div className="rope"></div>
							</div>
							<div className="butt"></div>
							<div className="left-arm"></div>
							<div className="left-leg"></div>

							<div className="head">
								<div className="face"></div>
								<div className="eyebrows"></div>
								<div className="eyes"></div>
								<div className="nose"></div>
								<div className="beard"></div>
								<div className="hat"></div>
							</div>
						</div>

						{/* 船 */}
						<div className="boat">
							<div className="motor">
								<div className="parts"></div>
								<div className="button"></div>
							</div>
							<div className="top"></div>
							<div className="boat-body"></div>

							<div className="waves"></div>
						</div>
					</div>

					{/* 绘制鱼，是之前画好的鱼svg，源代码可直接复制 */}
					<div className="fish">
						<img src="/svg/fish.svg" alt="" />
					</div>
				</div>

				{/* loading 动画 */}
				<h1>Loading{dots}</h1>
			</div>
		</div>
	)
}

export default Loading
