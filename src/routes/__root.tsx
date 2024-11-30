import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='flex flex-col overflow-hidden bg-wiki-background-color h-screen w-screen p-4 gap-3 flex-shrink-0'>
      <nav className='flex flex-row overflow-hidden w-full h-wiki-top-bar basis-wiki-top-bar flex-shrink-0'>
        <Link to='/' className='w-wiki-logo bg-wiki-foreground-color rounded-wiki border-wiki border-wiki-border-color px-3 py-2' draggable={false}><img src='/wikilogo.svg' className='h-full w-full pointer-events-none' draggable={false}/></Link>
        <a href=''></a>
      </nav>
      <div className='flex flex-row basis-full w-full gap-3 overflow-hidden'>
        <div className='bg-wiki-foreground-color rounded-wiki border-wiki border-wiki-border-color p-4 w-wiki-sidebar-full overflow-scroll'>
          <Link to="/testpath">Test page</Link>
        </div>
        <div className='bg-wiki-foreground-color rounded-wiki border-wiki border-wiki-border-color w-full p-6 overflow-scroll'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
