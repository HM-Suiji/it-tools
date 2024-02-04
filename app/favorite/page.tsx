'use client'

import { useFavoriteStore } from '@/stores'
import { Button } from 'antd'

const Favorite: React.FC = () => {
  const { favorites, add, remove, clear } = useFavoriteStore()
  return (
    <>
      {favorites.map((item) => (
        <>{item}</>
      ))}
      <Button onClick={() => add('吃')}>+吃</Button>
      <Button onClick={() => add('喝')}>+喝</Button>
      <Button onClick={() => add('玩')}>+玩</Button>
      <Button onClick={() => add('乐')}>+乐</Button>
      <Button onClick={() => remove('玩')}>-玩</Button>
      <Button onClick={() => clear()}>clear</Button>
    </>
  )
}

export default Favorite
