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
    console.log(wikiMapFileContents);
    return wikiMapFileContents;
}