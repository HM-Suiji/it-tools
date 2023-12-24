export const hash = (val: any) => {
	//对任何类型值求hash值
	return JSON.stringify(val)
		.split('')
		.reduce((pre, cur) => {
			return pre + cur.charCodeAt(0)
		}, 0)
}
