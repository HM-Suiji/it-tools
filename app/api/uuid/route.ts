import { createUuid } from '@/utils'

export async function GET(request: Request) {
	// console.log(request.headers.get('user-agent'))
	const { searchParams } = new URL(request.url)
	const time = Number(searchParams.get('time') || 1)
	return new Response(JSON.stringify(createUuid(time)))
}
