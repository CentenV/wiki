import { createFileRoute } from '@tanstack/react-router'
import { IntermediatePage } from '../../../components'

export const Route = createFileRoute('/_pages/homecloud/')({
  component: RouteComponent,
})

function RouteComponent() {
    // return (<IntermediatePage url="/homecloud" backgroundImage=''>Hello "/_pages/homecloud/"!</IntermediatePage>);
}
