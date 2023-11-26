import toolsMeta from '@/assets/json/tools.json'

export async function GET(_request: Request) {
	const toolMeta = toolsMeta
	return new Response(JSON.stringify(toolMeta))
}
