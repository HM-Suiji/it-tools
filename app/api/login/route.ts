export async function POST(request: Request) {
  const { username, password, email } = await request.json()
  const res = await fetch('http://localhost/api/auth/callback/credentials', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      email,
      csrfToken:
        '574ba580e8c9c5f79acc6f0c8cd5a85986d79d6726392c6fa01b9a83ffd796a9',
    }),
  }).then((res) => {
    return res.text()
  })
  return new Response(res)
}
