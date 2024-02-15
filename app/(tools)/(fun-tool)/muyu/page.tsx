'use client'

import { useMuyuStore } from '@/stores'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Muyu: React.FC = () => {
  const { gongde, add, date, reset } = useMuyuStore()
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    add()
    setIsActive(true)
    setTimeout(() => setIsActive(false), 200)
  }

  useEffect(() => {
    if (date !== new Date().toDateString()) {
      reset()
    }
  }, [])

  return (
    <div className="bg-black h-[40rem] flex justify-center flex-wrap content-center relative">
      <div className="absolute top-20 text-xl text-white">
        今日功德：{gongde}
      </div>
      <div className="absolute top-[12.5rem] text-white">功德 + 1</div>
      <Image
        className={`cursor-pointer transition-all duration-250 ease-in-out ${isActive && 'scale-[1.2]'}`}
        src="/img/muyu.jpg"
        onClick={handleClick}
        alt=""
        width={200}
        height={200}
      />
    </div>
  )
}

export default Muyu
