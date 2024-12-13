import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [wikiMap, updateWikiMap] = useState({});

  // Build sidebar
  useEffect(() => {
    async function readWikiMap() {
      const wikiMapFileContent = await fetch("/wikimap.json").then((res) => res.json());
      console.log(wikiMapFileContent);
      updateWikiMap(wikiMapFileContent);
    }
    readWikiMap();
  }, []);

  // const entries = useMemo(() => (Object.keys(wikiMap).map(key => (<div key={key}>{key}</div>))), [wikiMap]);

  return (
    <div className='flex flex-col overflow-hidden bg-wiki-background-color h-screen w-screen p-4 gap-3 flex-shrink-0'>
      <nav className='flex flex-row overflow-hidden w-full h-wiki-top-bar basis-wiki-top-bar flex-shrink-0'>
        <Link to='/' className='w-wiki-logo rounded-wiki border-wiki border-wiki-border-color px-3 py-2' draggable={false}><img src='/wikilogo.svg' className='h-full w-full pointer-events-none' draggable={false}/></Link>
      </nav>
      <div className='flex flex-row basis-full w-full gap-3 overflow-hidden'>
        <div className='bg-wiki-foreground-color rounded-wiki border-wiki border-wiki-border-color p-4 w-wiki-sidebar-full overflow-scroll flex flex-col gap-2'>
          {Object.keys(wikiMap).map(key => (
            <Link to={`/${key}`} key={key}>{key[0].toUpperCase() + key.substring(1, key.length)}</Link>
          ))}
        </div>
        <div className='bg-wiki-foreground-color rounded-wiki w-full p-6 overflow-scroll'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
