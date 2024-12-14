import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown';

export const Route = createFileRoute('/_pages/test/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [fileContent, updateFileContent] = useState("");
  useEffect(() => {
    async function func() {
      const content = await fetch("/pages/test.md").then((res) => res.text())
      updateFileContent(content);
    }
    func();
  }, []);

  return <Markdown>{fileContent}</Markdown>
}
