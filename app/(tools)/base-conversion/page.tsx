'use client'

import { Input } from 'antd'
import { useState } from 'react'

const BaseConversion: React.FC = () => {
	const [number, setNumber] = useState(0)
	return (
		<>
			<Input
				placeholder="请输入一个数字"
				type="number"
				value={number}
				onChange={(e) => setNumber(Number(e.target.value))}></Input>
		</>
	)
}

export default BaseConversion
