import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_testfolder/testpath/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div>Hello "/test/"! in hidden folder</div>
      <img src="/vite.svg" />
    </div>
  );
}
