interface productProps {
  params: {
    id: string
  }
}

export default function page({ params }: productProps) {
  return <h1>product: {params.id}</h1>
}
