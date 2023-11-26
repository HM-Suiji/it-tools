const baseUrl = process.env.BASE_API_URL

export const http = async (url: string, opt?: RequestInit) =>
	(await fetch(baseUrl + url, { next: { revalidate: 1 }, ...opt })).json()
//! 开发完去掉 { next: { revalidate: 1 }
