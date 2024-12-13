import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pages/homecloud/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pages/homecloud/"!</div>
}
