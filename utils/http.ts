const baseUrl = process.env.BASE_API_URL

export const http = async (url: string, opt?: RequestInit) =>
	(await fetch(baseUrl + url, opt)).json()
