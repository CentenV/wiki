import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '../../../../components'

export const Route = createFileRoute('/_pages/development/nestedtest/')({
  component: RouteComponent,
})

function RouteComponent() { return <ContentPage pageName='nestedtest' /> }
