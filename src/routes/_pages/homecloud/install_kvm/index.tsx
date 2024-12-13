import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown'
import { readMarkdownFile } from '../../../../mdutil';

export const Route = createFileRoute('/_pages/homecloud/install_kvm/')({
  component: RouteComponent,
})

function RouteComponent() {
    // Read markdown file
    const [markdown, updateMarkdown] = useState("");
    useEffect(() => {readMarkdownFile("/install_kvm.md", updateMarkdown)}, []);

    return (<Markdown>{markdown}</Markdown>);
}
