/**
 * 防抖函数
 * @param func
 * @param delay
 * @returns
 */
const debounce = (func: Function, delay = 1000) => {
	let timer: string | number | NodeJS.Timeout | undefined
	return (...args: any) => {
		clearTimeout(timer)
		timer = setTimeout(() => func(...args), delay)
	}
}

export { debounce }
