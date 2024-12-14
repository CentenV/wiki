import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { readMarkdownFile } from '../../../../mdutil'
import { ContentPage } from '../../../../components'

export const Route = createFileRoute('/_pages/development/nestedtest/')({
  component: RouteComponent,
})

function RouteComponent() {
  // Read markdown file
  const [markdown, updateMarkdown] = useState('')
  useEffect(() => {
    readMarkdownFile('/pages/nestedtest.md', updateMarkdown)
  }, [])

  return <ContentPage>{markdown}</ContentPage>
}
