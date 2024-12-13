import { createFileRoute } from '@tanstack/react-router'
import { glob } from 'glob';
import { useEffect, useState } from 'react';
// import { pages } from '../map';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    // async function getRoutes() {
    //   return await glob("index.tsx", { cwd: "src/routes/_pages" });
    // }

    // getRoutes().then((value: string[]) => {
    //   console.log(value);
    // });
  }, []);

  return (
    <div className='flex h-full overflow-hidden justify-center items-center'>
      <div className='flex w-full h-2/3 justify-center'>
        <span className='font-extrabold text-7xl'>CentenV's Wiki</span>
      </div>
    </div>
  );
}
