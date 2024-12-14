import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pages/development/nestedtest/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pages/development/nestedtest/"!</div>
}
