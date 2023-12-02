'use client'

import { http } from '@/utils'
import { Button } from 'antd'
import { useState } from 'react'

const Uuid: React.FC = () => {
	const [uuid, setUuid] = useState([])

	const randomUUID = async () => {
		setUuid(await (await fetch('http://localhost/api/uuid?time=4')).json())
	}

	return (
		<>
			<Button onClick={randomUUID}>点击生成uuid</Button>
			{uuid.map((item: string) => {
				return <p>{item}</p>
			})}
		</>
	)
}

export default Uuid
