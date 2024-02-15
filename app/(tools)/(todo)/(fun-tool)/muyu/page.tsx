'use client'

import { useMuyuStore } from '@/stores'
import Image from 'next/image'
import { useEffect } from 'react'

const Muyu: React.FC = () => {
  const { gongde, add, date, reset } = useMuyuStore()

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
      <Image
        src="/img/muyu.jpg"
        onClick={add}
        alt=""
        width={200}
        height={200}
      />
    </div>
  )
}

export default Muyu
