import User from '@/components/User'
import Link from 'next/link'
import { Suspense } from 'react'
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Suspense fallback="carregando user">
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </div>
  )
}

// getServerSideProps = faz com que o servidor execute a chamada, e mande os dados como html
// getStaticProps = gera uma vez na hora do build, e nao puxa mais os dados.
// revalidate = de tempos em tempos ele refaz a chamada, podendo puxar mais de uma api por pagina, ou apenas uma
// ssr agora é utilizando o {  cache: 'no-store' }
