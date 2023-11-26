import toolsMeta from '@/assets/json/tools.json'

export async function GET(
	_request: Request,
	{
		params,
	}: {
		params: {
			toolName: string
		}
	}
) {
	const toolMeta = (toolsMeta as any)[params.toolName]
	return new Response(JSON.stringify(toolMeta))
}
