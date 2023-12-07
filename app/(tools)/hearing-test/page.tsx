'use client'

import { useEffect, useRef, useState } from 'react'

const minFrequency = 20
const maxFrequency = 20000
const step = 50

interface OscillatorNodeObject {
	oscillator: OscillatorNode | null
}

const HearingTest: React.FC = () => {
	const [isTesting, setIsTesting] = useState<boolean>(false)
	const [currentFrequency, setCurrentFrequency] = useState<number>(0)
	const oscillatorRef = useRef<OscillatorNodeObject>({ oscillator: null })
	const timeoutIdRef = useRef<number | null>(null)
	const audioContextRef = useRef<AudioContext | null>(null)

	useEffect(() => {
		audioContextRef.current = new window.AudioContext()
		return () => {
			stopTest()
		}
	}, [])

	const playNextFrequency = (
		frequency: number,
		maxFrequency: number,
		step: number
	): void => {
		const audioContext: AudioContext | null = audioContextRef.current
		const oscillator: OscillatorNode | null = oscillatorRef.current.oscillator

		if (oscillator && audioContext) {
			if (frequency <= maxFrequency) {
				setCurrentFrequency(frequency)
				oscillator.frequency.setValueAtTime(
					frequency,
					audioContext.currentTime + 0.05
				)
				timeoutIdRef.current = window.setTimeout(() => {
					playNextFrequency(frequency + step, maxFrequency, step)
				}, 100)
			} else {
				stopTest()
			}
		}
	}

	const startTest = (): void => {
		setIsTesting(true)
		const audioContext: AudioContext | null = audioContextRef.current
		const newOscillator: OscillatorNode = audioContext!.createOscillator()
		const gainNode: GainNode = audioContext!.createGain()

		newOscillator.type = 'sine'
		newOscillator.connect(gainNode)
		gainNode.connect(audioContext!.destination)
		newOscillator.start()

		oscillatorRef.current.oscillator = newOscillator
		playNextFrequency(minFrequency, maxFrequency, step)
	}

	const stopTest = (): void => {
		setIsTesting(false)
		clearTimeout(timeoutIdRef.current!)
		const oscillator: OscillatorNode | null = oscillatorRef.current.oscillator
		if (oscillator) {
			oscillator.stop()
			oscillator.disconnect()
			// setCurrentFrequency(0)
			oscillatorRef.current.oscillator = null
		}
	}

	return (
		<div>
			<button onClick={startTest} disabled={isTesting}>
				开始测试听力范围
			</button>
			<button onClick={stopTest} disabled={!isTesting}>
				暂停测试
			</button>
			<p>当前频率: {currentFrequency} Hz</p>
		</div>
	)
}

export default HearingTest
