import tools from '@/assets/json/tools.json'
import { toLine } from '@/utils/stringConduct'

export async function GET(_request: Request) {
  const data = Object.entries(tools).map((item) => ({
    title: item[1][0],
    link: toLine(item[0]),
    description: item[1][2],
    isFavorite: false,
  }))
  return new Response(JSON.stringify(data))
}
