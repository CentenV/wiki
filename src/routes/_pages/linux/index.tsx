import { createFileRoute } from '@tanstack/react-router'
import { IntermediatePage } from '../../../components'

export const Route = createFileRoute('/_pages/linux/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <IntermediatePage pageTitle='Linux' pageUrl='/linux' backgroundImage={{ url: "linux.jpg", video: false }} offset='-translate-y-64'></IntermediatePage>
}
