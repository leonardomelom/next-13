export default async function User() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  const res = await fetch('https://jsonplaceholder.typicode.com/todos/2', {
    cache: 'no-store',
  })
  const user = await res.json()
  return (
    <div>
      <h1>User</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
