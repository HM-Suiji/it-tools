'use client'

import { useState } from 'react'

const MathSolver: React.FC = () => {
	const [input, setInput] = useState('')

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value)
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		// 在这里实现计算逻辑
		console.log('Input:', input)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={input}
				onChange={handleInput}
				placeholder="Enter an equation"
			/>
			<button type="submit">Calculate</button>
		</form>
	)
}

export default MathSolver
