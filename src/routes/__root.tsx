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
      updateWikiMap(wikiMapFileContent);
    }
    readWikiMap();
  }, []);

  return (
    <div className='flex flex-row overflow-hidden bg-wiki-background-color h-screen w-screen p-4 gap-3 flex-shrink-0'>
      {/* Navbar */}
      <nav className='flex flex-col overflow-hidden w-wiki-sidebar-full gap-3'>
        <Link to='/' className='w-2/3 rounded-wiki border-wiki px-4 py-3' draggable={false}><img src='/assets/wikilogo.svg' className='w-full h-full pointer-events-none' draggable={false}/></Link>
        <div className='flex flex-col gap-3 p-4 border rounded-wiki border-wiki border-wiki-hud-elements-color'>
          {Object.keys(wikiMap).map(key => (
            <Link to={`/${key}`} key={key}>{key[0].toUpperCase() + key.substring(1, key.length)}</Link>
          ))}
        </div>
      </nav>
      {/* Content */}
      <main className='bg-wiki-foreground-color rounded-wiki border-wiki border-wiki-border-color w-full'>
        <Outlet />
      </main>
    </div>
  )
}
