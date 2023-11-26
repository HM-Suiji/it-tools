'use client'

import { baseConverse } from '@/utils'
import { Input } from 'antd'
import { useEffect, useState } from 'react'

const BaseConversion: React.FC = () => {
	const [number, setNumber] = useState('')
	const [baseMap, setBaseMap] = useState<number[]>([])
	const [resultNum, setResultNum] = useState('')

	useEffect(() => {
		baseConverse(number, baseMap[0], baseMap[1], (res: string) =>
			setResultNum(res)
		)
	}, [number, baseMap])

	return (
		<>
			<Input
				placeholder="请输入一个数字"
				value={number}
				onChange={(e) => setNumber(e.target.value)}></Input>
			<Input
				value={baseMap[0]}
				onChange={(e) => setBaseMap([+e.target.value, baseMap[1]])}></Input>
			<Input
				value={baseMap[1]}
				onChange={(e) => setBaseMap([baseMap[0], +e.target.value])}></Input>
			{resultNum}
		</>
	)
}

export default BaseConversion
