'use client'

import { useEffect, useState } from 'react'
import './index.scss'

export const Clock: React.FC = () => {
	const [deg, setDeg] = useState([0, 0, 0])

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date()
			const h = now.getHours() * 30
			const m = now.getMinutes() * 6
			const s = now.getSeconds() * 6
			setDeg([h, m, s])
		}, 1000)
		return () => {
			// 卸载计时器
			if (timer) {
				clearInterval(timer)
			}
		}
	}, [])

	return (
		<div id="oClock" className="flex justify-center text-center">
			<div className="clock">
				<div className="numbers">
					<span className="i0">
						<b>12</b>
					</span>
					<span className="i1">
						<b>3</b>
					</span>
					<span className="i2">
						<b>6</b>
					</span>
					<span className="i3">
						<b>9</b>
					</span>
					<div
						className="circle"
						id="hr"
						style={{ transform: `rotateZ(${deg[0] + deg[1] / 12}deg)` }}>
						<i></i>
					</div>
					<div
						className="circle"
						id="mn"
						style={{ transform: `rotateZ(${deg[1]}deg)` }}>
						<i></i>
					</div>
					<div
						className="circle"
						id="sc"
						style={{ transform: `rotateZ(${deg[2]}deg)` }}>
						<i></i>
					</div>
				</div>
			</div>
		</div>
	)
}
