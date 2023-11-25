export const simpleHash = (str: string) => {
	let hash = 0
	for (let i = 0; i < str.length; i++) {
		hash += str.charCodeAt(i)
	}
	return hash % 100
}
