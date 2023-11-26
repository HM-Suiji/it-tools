export const baseConverse = (
	num: string,
	from: number,
	to: number,
	callback: (res: string) => void,
	errorHandle?: (msg: string) => any
) => {
	if (num === '' || from === 0 || to === 0 || from === 1 || to === 1) {
		return errorHandle && errorHandle('参数不合法')
	}
	if (from === 10) {
		callback(Number(num).toString(to))
	} else {
		let decimalValue = 0
		let hasDecimal = false
		let decimalPlaces = 0

		for (let i = num.length - 1; i >= 0; i--) {
			if (num[i] === '.') {
				hasDecimal = true
				continue
			}
			let digit = parseInt(num[i], from)
			if (isNaN(digit)) {
				return errorHandle && errorHandle('无法解析为指定进制的数字')
			}
			if (hasDecimal) {
				decimalPlaces++
				decimalValue += digit * Math.pow(from, -decimalPlaces)
			} else {
				decimalValue = decimalValue * from + digit
			}
		}
		if (to === 10) {
			return callback(decimalValue.toString())
		}
		return callback(decimalValue.toString(to))
	}
}
