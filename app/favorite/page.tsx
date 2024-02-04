'use client'

import { useFavoriteStore, useNewToolsStore } from '@/stores'
import { Button } from 'antd'

const Favorite: React.FC = () => {
  const { favorites, add, remove, clear } = useFavoriteStore()
  const newToolsStore = useNewToolsStore((state) => state.newTools)
  const update = useNewToolsStore((state) => state.update)
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
      <hr />
      {newToolsStore.map((item) => (
        <>{item}</>
      ))}
      <Button onClick={update}>update</Button>
    </>
  )
}

export default Favorite
