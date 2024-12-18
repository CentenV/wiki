"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { formatTitle, getPageTitles, getWikiMap } from "./util";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function IntermediatePage({ backgroundImage }: { backgroundImage: { url: string, video: boolean, offset?: string } }) {
    // Resolve all child pages
    const [childPages, updateChildPages] = useState<{ childPage: string, title: string }[]>([]);
    const [mapError, updateMapError] = useState<{ message: string } | undefined>(undefined);
    const pageUrl = usePathname();
    const pageTitle = useMemo(() => {
        const splitUrl = pageUrl.split("/");
        return splitUrl[splitUrl.length - 1].toUpperCase();
    }, [pageUrl]);
    useEffect(() => {
        async function main() {
            // Find the current level on the path tree
            const splitUrl = pageUrl.split("/");
            splitUrl.splice(0, 1);
            let currentTreeLevel = await getWikiMap();
            splitUrl.forEach((level: string) => {
                // Level is in the children
                if (level in currentTreeLevel) {
                    currentTreeLevel = currentTreeLevel[level];
                }
                else {
                    updateMapError({ message: `${pageUrl} not found in wikimap.json. Rerun initsite.py and make sure that ${pageUrl} is present` });
                }
            });

            // Resolve child page data within pagedata.json
            const pageTitlesJson = await getPageTitles();
            const childPageUrls = Object.keys(currentTreeLevel).map((childPageName: string) => {
                const splitUrl = pageUrl.split("/");
                splitUrl.push(childPageName);
                return splitUrl.join("/");
            });
            const titleResolvedPages: { childPage: string, title: string }[] = childPageUrls.map((pageRelativeUrl: string) => { return { childPage: pageRelativeUrl, title: pageTitlesJson[pageRelativeUrl] } });
            console.log(titleResolvedPages);
            updateChildPages(titleResolvedPages);
        } 
        main();
    }, [pageUrl]);

    return (
        <div className="flex flex-col h-full w-full">
            {/* Background Image/Video */}
            <div className="intermediate-page-bg rounded-wiki">
                {backgroundImage.video ? <video autoPlay={true} muted loop src={`/assets/${backgroundImage.url}`} className={`w-full rounded-wiki ${backgroundImage.offset}`} /> : <Image width={5000} height={5000} alt="Background Banner" src={`/assets/${backgroundImage.url}`} className={`w-full rounded-wiki ${backgroundImage.offset}`} draggable={false} />}
            </div>
            <div className="p-8">
                {/* Misc */}
                <header>{pageTitle}</header>
                {/* Links */}
                {mapError && <div className="error-msg"><b>Wiki Mapping Error:</b> Rerun initsite.py and inspect <i>wikimap.json</i> to ensure that all pages are properly mapped out</div>}
                <div className="flex flex-col gap-3">
                    {childPages.map((entry, index) => <Link href={entry.childPage} key={index}>{entry.title}</Link>)}
                </div>
            </div>
        </div>
    );
}

export function ContentPage({ children, pageName }: { children: ReactNode, pageName: string }) {
    useEffect(() => { document.title = formatTitle(pageName) }, [pageName]);
    return <div className="w-full h-full px-12 pt-8 pb-12 overflow-scroll">{children}</div>;
}