'use client'

import { debounce } from '@/utils'
import { Input } from 'antd'
import { useEffect, useState } from 'react'

const DateFormat: React.FC = () => {
	const [inputVal, setInputVal] = useState('')
	const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)
		setInputVal(e.target.value)
	}, 200)
	useEffect(() => {
		console.log(inputVal)
	}, [inputVal])
	return (
		<>
			<Input onChange={handleChange} />
		</>
	)
}

export default DateFormat
