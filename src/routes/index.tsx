import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex h-full overflow-hidden justify-center items-center'>
      <div className='flex w-full h-2/3 justify-center'>
        <span className='font-extrabold text-7xl'>CentenV's Wiki</span>
      </div>
    </div>
  );
}
