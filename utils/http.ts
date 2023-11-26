const baseUrl = process.env.BASE_API_URL

export const http = async (url: string, opt?: RequestInit) =>
	(await fetch(baseUrl + url, { ...opt })).json()
//! 开发完去掉 { next: { revalidate: 1 }
// { next: { revalidate: 1 }
