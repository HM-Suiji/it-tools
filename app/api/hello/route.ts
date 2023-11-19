export async function GET(request: Request) {
	// console.log(window.navigator)
	console.log(request.headers.get('user-agent'))
	return new Response(JSON.stringify(request))
}
