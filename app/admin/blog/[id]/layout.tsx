export async function generateStaticParams() {
  return [{ id: "new" }]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
