import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>CentenV Wiki</title>
      </Helmet>
      <div className='flex h-full overflow-hidden justify-center items-center'>
        <div className='flex w-full h-2/3 justify-center'>
          <span className='font-extrabold text-7xl'>CentenV's Wiki</span>
        </div>
      </div>
    </HelmetProvider>
  );
}
