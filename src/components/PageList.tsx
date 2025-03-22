export default function PageList({ pages, url }: { pages: Record<string, any>, url: string }) {
    const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/icons/*.{svg,jpeg,jpg,png,gif}", { eager: true });

    return (
        <div className="flex flex-col gap-2 h-full">
            {
                Object.entries(pages).map(([pagePath, data]) => {
                    // URL to the page in the list
                    const formattedUrl = "/" + url.split("/").filter((x) => x.trim().length != 0).join("/");
                    const destinationUrl = formattedUrl + pagePath.substring(1, pagePath.length - 4);
                    // TODO: FIX
                    // Resolve icon
                    const iconPath = `/src/assets/icons/${data.frontmatter["icon"]}`
                    return (
                        <a href={destinationUrl} className="flex flex-row p-2 pl-4 border-wiki-default hover:border-wiki-hud-border-color border-wiki-hud-border-color lg:border-wiki-background-color rounded-wiki gap-2" key={pagePath}>
                            {(images[iconPath]) ? <img src={images[iconPath].default.src} alt={""} className="invert" /> : <span></span>}
                            <div className="col-start-2 col-span-1">{data.frontmatter.title}</div>
                        </a>
                    );
                })
            }
        </div>
    );
}