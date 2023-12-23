const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL

export const http = (() => {
	if (process.env.NEXT_PUBLIC_ENV === 'DEV') {
		return async (url: string, opt?: RequestInit) =>
			(
				await fetch(url.includes('http') ? url : baseUrl + url, {
					next: { revalidate: 1 },
					...opt,
				})
			).json()
	}
	return async (url: string, opt?: RequestInit) =>
		(await fetch(url.startsWith('/') ? '/api' + url : url, opt)).json()
})()

console.log(http)
