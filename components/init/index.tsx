'use client'

import { useEffect } from 'react'

export const Init: React.FC = () => {
	useEffect(
		() =>
			console.log(
				'%c欢迎使用「%c幻梦IT 工具站%c」',
				'color:red; font-size:18px;',
				'color:blue; font-size:18px;',
				'color:red; font-size:18px;'
			),
		[]
	)
	return <></>
}
