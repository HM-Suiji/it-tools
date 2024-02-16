const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL

export const http = async (url: string, opt: RequestInit = {}) =>
  fetch(url.startsWith('/') ? baseUrl + url : url, {
    cache: 'no-cache', //禁止缓存
    // next: { revalidate: 1 },  //设置缓存时间
    ...opt,
  }).then((res) => res.json())
