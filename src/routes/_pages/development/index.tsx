import { createFileRoute } from '@tanstack/react-router'
import { IntermediatePage } from '../../../components'

export const Route = createFileRoute('/_pages/development/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <IntermediatePage pageTitle={"Development"} pageUrl='/development' backgroundImage={{ url: 'development.jpg', video: false }} offset='-translate-y-32' />;
}
