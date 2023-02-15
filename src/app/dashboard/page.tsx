import { Sign } from 'crypto'
import Link from 'next/link'
import { Suspense } from 'react'
import Repo from '../../components/Repo'
const dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/">Home</Link>
      <Suspense fallback="loading">
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>
    </div>
  )
}

export default dashboard
