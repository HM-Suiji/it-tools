'use client'

import { useEffect, useRef, useState } from 'react'
import { ToolTextArea } from '@/components'
import { Button, Input } from 'antd'

interface OscillatorNodeObject {
  oscillator: OscillatorNode | null
}

const HearingTest: React.FC = () => {
  const [minFrequency, setMinFrequency] = useState(20)
  const [maxFrequency, setMaxFrequency] = useState(20000)
  const [step, setStep] = useState(50)
  const [duration, setDuration] = useState(100)

  const [isTesting, setIsTesting] = useState(false)
  const [currentFrequency, setCurrentFrequency] = useState(0)
  const oscillatorRef = useRef<OscillatorNodeObject>({ oscillator: null })
  const timeoutIdRef = useRef<number | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault()
      stopTest()
    }
  }

  useEffect(() => {
    audioContextRef.current = new window.AudioContext()
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      stopTest()
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const playNextFrequency = (
    frequency: number,
    maxFrequency: number,
    step: number,
  ): void => {
    const audioContext: AudioContext | null = audioContextRef.current
    const oscillator: OscillatorNode | null = oscillatorRef.current.oscillator

    if (oscillator && audioContext) {
      if (frequency <= maxFrequency) {
        setCurrentFrequency(frequency)
        oscillator.frequency.setValueAtTime(
          frequency,
          audioContext.currentTime + 0.05,
        )
        timeoutIdRef.current = window.setTimeout(() => {
          playNextFrequency(frequency + step, maxFrequency, step)
        }, duration)
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
      oscillatorRef.current.oscillator = null
    }
  }

  return (
    <div>
      <div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-start">
            开始频率(hz)
            <Input
              type="number"
              value={minFrequency}
              onChange={(e) => setMinFrequency(+e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            结束频率(hz)
            <Input
              type="number"
              value={maxFrequency}
              onChange={(e) => setMaxFrequency(+e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            频率步进(hz/持续时间)
            <Input
              type="number"
              value={step}
              onChange={(e) => setStep(+e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            持续时间(ms)
            <Input
              type="number"
              value={duration}
              onChange={(e) => setDuration(+e.target.value)}
            />
          </div>
        </div>
        <div className="my-4">
          <Button className="mr-4" onClick={startTest} disabled={isTesting}>
            开始测试听力范围
          </Button>
          <Button onClick={stopTest} disabled={!isTesting}>
            暂停测试
          </Button>
          <div className="mt-2">当前频率: {currentFrequency} Hz</div>
        </div>
      </div>
      <ToolTextArea extraStyle title="工具说明">
        在线听力频率范围测试工具，可以用于测试你的耳朵听力频率范围，通常人耳能听到的声音是20-2万赫兹。
        <br />
        <br />
        正常人耳朵能听到的声音频率范围是20-20000Hz，但由于人群、实际情况不同，可听到的声音频率有所差异。多数成年人可听到的声音频率为30-16000Hz。但也存在由于外界刺激，以及精神压力过大等因素造成短暂性听力障碍，一般可自行恢复。而老年人由于年龄增长，身体各器官呈现衰老趋势，听力也是如此，能听到的声音范围为50-10000Hz，通常情况下，因衰老造成的听力问题不可恢复。
      </ToolTextArea>
      <ToolTextArea extraStyle title="如何测试？">
        设置起始频率和结束频率以及频率步进值后，点击开始测试，工具将会发出从开始频率到结束频率的声音，同时会显示当前的声音频率值，可以结合自己的听音情况推测自己的听力频率范围。
        <br />
        <br />
        能否听得到声音不仅和耳朵有关，还和设备有关（设备都发不出这个音怎么听得见？），因此建议选用好一点的设备测试，确保发音设备正常。
        请注意调整设备音量，避免因太大声被惊吓到，请勿将持续时间设置过短，否则可能因为喇叭切换太快而导致哒哒哒哒的噪音，测试过程中听到的哒哒哒的声音属于噪音。
        <br />
        <br />
        随着声音频率的升高，可能无法听到声音，请勿调高音量以避免大音量对耳朵造成损伤。
      </ToolTextArea>
    </div>
  )
}

export default HearingTest
