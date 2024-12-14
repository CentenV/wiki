import { Link } from "@tanstack/react-router";
import { ReactNode, useEffect, useMemo, useState } from "react";

export function IntermediatePage({ pageTitle, pageUrl, backgroundImage, offset }: { pageTitle: string, pageUrl: string, backgroundImage: {url: string, video: boolean}, offset?: string }) {
    // Resolve all child pages
    const [childPages, updateChildPages] = useState<string[]>([]);
    const [mapError, updateMapError] = useState(false);
    useEffect(() => {
        async function main() {
            // Trim URL for only necessary details
            const splitUrl = pageUrl.split("/");
            splitUrl.splice(0, 1);
    
            // Traverse through the wikimap tree and locate the 
            const wikiMapFileContent = await fetch("/wikimap.json").then((res) => res.json());
            let currentTreeLevel = wikiMapFileContent;
            splitUrl.map((level: string) => {
                // Level is in the children
                if (level in currentTreeLevel) {
                    currentTreeLevel = currentTreeLevel[level];
                }
                else {
                    updateMapError(true);
                }
            });

            // List all child pages
            const pages: string[] = Object.keys(currentTreeLevel);
            updateChildPages(pages);
        }
        main();
    }, [pageUrl]);

    return (
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
                    {childPages.map((childPage: string) => <Link href="" to={`${pageUrl}/${childPage}`}>{childPage}</Link>)}
                </div>
            </div>
        </div>
    );
}