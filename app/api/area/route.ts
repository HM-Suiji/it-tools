import area from '@/assets/json/area.json'

export function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const code = searchParams.get('code') || ''
	const tmp = code?.padEnd(6, '0')
	const provinceChildren = (area as any)[tmp.substring(0, 2)]
	const cityChildren = provinceChildren?.[tmp.substring(2, 4)]
	const result = {
		province: '',
		city: '',
		area: '',
	}
	result.province = provinceChildren?.base[0].name
	if (code.length >= 4) {
		result.city = cityChildren?.find((item: { code: string }) =>
			item.code.startsWith(tmp.substring(0, 4))
		)?.name
	}
	if (code.length === 6) {
		result.area = cityChildren?.find((item: { code: string }) =>
			item.code.startsWith(tmp)
		)?.name
	}

	if (result.province === undefined) result.province = '未知'
	if (result.city === undefined) result.city = '未知'
	if (result.area === undefined) result.area = '未知'

	return new Response(JSON.stringify(result), {
		status: 200,
	})
}
