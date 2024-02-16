export async function POST(request: Request) {
  const { username, password, email } = await request.json()
  const res = await fetch('http://localhost/api/auth/signin/credentials', {
    method: 'POST',
    body: JSON.stringify({ username, password, email }),
  }).then((res) => res.text())
  return new Response(res)
}
