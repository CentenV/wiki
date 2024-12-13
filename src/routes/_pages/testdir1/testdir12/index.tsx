import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pages/testdir1/testdir12/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pages/testdir1/testdir12/"!</div>
}
