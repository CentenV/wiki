/**
 * Returns the properly formatted string for use as the page title
 * @param pageTitle Page title
 * @returns Fully formatted string for page title
 */
export function formatTitle(pageTitle: string) {
    return `${pageTitle} | CentenV Wiki`;
}

export async function getWikiMap() {
    const wikiMapFileContents = await fetch("/wikimap.json").then((res) => res.json());
    return wikiMapFileContents;
}

export async function getPageTitles() {
    const pageDataFileContents = await fetch("/pagedata.json").then((res) => res.json());
    return pageDataFileContents;
}