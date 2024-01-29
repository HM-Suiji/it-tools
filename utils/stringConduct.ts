export const toLine = (str: string) =>
	str.replace(/([A-Z])/g, '-$1').toLowerCase()
