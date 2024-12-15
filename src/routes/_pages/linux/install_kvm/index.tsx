import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '../../../../components'

export const Route = createFileRoute('/_pages/linux/install_kvm/')({
  component: RouteComponent,
})

function RouteComponent() { return <ContentPage pageName='install_kvm' /> }
