const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL

export const http = async (url: string, opt?: RequestInit) =>
	(
		await fetch(url.includes('http') ? url : baseUrl + url, {
			next: { revalidate: 1 },
			...opt,
		})
	).json()
