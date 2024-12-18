import { ContentPage } from "@/app/components";
import Content from "./content.mdx";
import { Metadata } from "next";

// export const metadata = {
//     title: "test"
// }

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "test"
    }
}

export default function Page() {
    return <ContentPage pageName={"test"}><Content /></ContentPage>;
}