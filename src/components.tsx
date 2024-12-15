import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatTitle } from "./util";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function IntermediatePage({ pageTitle, pageUrl, backgroundImage, offset }: { pageTitle: string, pageUrl: string, backgroundImage: {url: string, video: boolean}, offset?: string }) {
    // Resolve all child pages
    const [childPages, updateChildPages] = useState<{ childPage: string, title: string }[]>([]);
    const [mapError, updateMapError] = useState(false);
    useEffect(() => {
        async function main() {
            // Trim URL for only necessary details
            const splitUrl = pageUrl.split("/");
            splitUrl.splice(0, 1);
    
            // Find the current level on the path tree
            const wikiMapJson = await fetch("/wikimap.json").then((res) => res.json());
            let currentTreeLevel = wikiMapJson;
            splitUrl.map((level: string) => {
                // Level is in the children
                if (level in currentTreeLevel) {
                    currentTreeLevel = currentTreeLevel[level];
                }
                else {
                    updateMapError(true);
                }
            });

            // List all child pages and resolve their titles
            const pages: string[] = Object.keys(currentTreeLevel);
            const pageTitlesJson = await fetch("/pages/pagetitles.json").then((res) => res.json());
            const titleResolvedPages: { childPage: string, title: string }[] = pages.map((pageName: string) => { return { childPage: pageName, title: pageTitlesJson[pageName] != undefined ? pageTitlesJson[pageName] : pageName } });
            updateChildPages(titleResolvedPages);
        }
        main();
    }, [pageUrl]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>{formatTitle(pageTitle)}</title>
            </Helmet>
            <div className="flex flex-col h-full w-full">
                {/* Background Image/Video */}
                <div className="intermediate-page-bg rounded-wiki">
                    {backgroundImage.video ? <video autoPlay={true} muted loop src={`/assets/${backgroundImage.url}`} className={`w-full rounded-wiki ${offset}`} /> : <img src={`/assets/${backgroundImage.url}`} className={`w-full rounded-wiki ${offset}`} draggable={false} />}
                </div>
                <div className="p-8">
                    {/* Misc */}
                    <header>{pageTitle.toUpperCase()}</header>
                    {/* Links */}
                    {mapError && <div className="error-msg"><b>Wiki Mapping Error:</b> Rerun build.py and inspect <i>wikimap.json</i> to ensure that all pages are properly mapped out</div>}
                    <div className="flex flex-col gap-3">
                        {childPages.map((entry, index) => <Link to={`${pageUrl}/${entry.childPage}`} key={index}>{entry.title}</Link>)}
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
}

export function ContentPage({ pageName }: { pageName: string }) {
    const [markdown, updateMarkdown] = useState('');
    const [pageTitle, updatePageTitle] = useState<string>('');
    useEffect(() => {
        async function initPage() {
            // Fetch markdown
            const fileContents = await fetch(`/pages/${pageName}.md`).then(res => res.text())
            updateMarkdown(fileContents);
            // Resolve page title
            const pageTitlesJson = await fetch("/pages/pagetitles.json").then((res) => res.json());
            updatePageTitle(pageTitlesJson[pageName]);
        }
        initPage();
    }, [pageName]);
    
    return (
        <HelmetProvider>
            <Helmet>
                <title>{formatTitle(pageTitle)}</title>
            </Helmet>
            <div className="w-full h-full px-12 pt-8 pb-12 overflow-scroll">
                <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </div>
        </HelmetProvider>
    );
}