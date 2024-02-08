'use client'

import { useFavoriteStore } from '@/stores'
import { GlobalHeader } from '@/components'

const Favorite: React.FC = () => {
  const favorites = useFavoriteStore.use.favorites()
  return (
    <>
      <GlobalHeader />
      我的工具收藏 （{favorites.length}）
      <ul>
        {favorites.map((favorite) => (
          <li>{favorite}</li>
        ))}
      </ul>
    </>
  )
}

export default Favorite
