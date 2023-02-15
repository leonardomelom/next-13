import { cookies, headers } from 'next/headers'

export default async function Repo() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const res = await fetch('https://jsonplaceholder.typicode.com/photos', {
    cache: 'no-store',
    next: {
      revalidate: 10,
    },
  })
  const repos = await res.json()

  const userCookiers = cookies()
  const userHeaders = headers()

  return (
    <div>
      <h1>Repos</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
      <h1>Cookies</h1>
      <pre>{JSON.stringify(userCookiers.getAll(), null, 2)}</pre>
      <pre>{JSON.stringify(userHeaders.entries(), null, 2)}</pre>
    </div>
  )
}
