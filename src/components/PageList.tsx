export default function PageList({ pages, url }: { pages: Record<string, any>, url: string }) {
    const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/icons/*.{svg,jpeg,jpg,png,gif}", { eager: true });

    return (
        <div className="flex flex-col gap-2 h-full">
            {
                Object.entries(pages).map(([pagePath, data]) => {
                    const destinationUrl = url + pagePath.substring(1, pagePath.length - 4);
                    const iconPath = `/src/assets/icons/${data.frontmatter["icon"]}`
                    if (!images[iconPath]) { console.error(`Icon "${iconPath}" for ${data.frontmatter["icon"]} not found for the page list`); }
                    return (
                        <a href={destinationUrl} className="flex flex-row p-2 pl-4 border-wiki-default border-wiki-background-color hover:border-wiki-hud-border-color rounded-wiki gap-2">
                            {(images[iconPath]) ? <img src={images[iconPath].default.src} alt={""} className="invert" /> : <span></span>}
                            <div className="col-start-2 col-span-1">{data.frontmatter.title}</div>
                        </a>
                    );
                })
            }
        </div>
    );
}