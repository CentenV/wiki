import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function PageList({ pages, url }: { pages: Record<string, any>, url: string }) {
    return (
        <Table>
            <TableBody>
                {
                    Object.entries(pages).map(([pagePath, data]) => {
                        const destinationUrl = url + pagePath.substring(1, pagePath.length - 4);
                        // return <a href={destinationUrl}>{data.frontmatter.title}</a>;
                        return (
                            <TableRow onClick={() => { console.log("clicked"); }}>
                                <TableCell><a href={destinationUrl}>{data.frontmatter.title}</a></TableCell>
                            </TableRow>
                        );
                    })
                }
            </TableBody>
        </Table>
    );
}