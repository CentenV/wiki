import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pages/testdir1/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pages/testdir1/"!</div>
}
