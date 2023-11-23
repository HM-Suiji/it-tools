export const isMobile = (window: Window) => {
	const userAgent = window.navigator.userAgent
	return /Mobile/.test(userAgent)
}
