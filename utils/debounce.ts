/**
 * 防抖函数
 * @param func
 * @param delay
 * @returns
 */
function debounce<A extends any[], R>(
	func: (...args: A) => R,
	delay: number = 1000
): (...args: A) => void {
	let timer: string | number | NodeJS.Timeout | undefined
	return (...args) => {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => func(...args), delay)
	}
}

export { debounce }
