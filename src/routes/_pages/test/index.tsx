import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '../../../components';

export const Route = createFileRoute('/_pages/test/')({
  component: RouteComponent,
})

function RouteComponent() { return <ContentPage pageName='test' /> }
