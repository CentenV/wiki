import { ContentPage } from "@/app/components";
import Content from "./content.mdx";

// export const metadata = {
//     title: "test"
// }

export default function Page() {
    return <ContentPage pageName={"test"}><Content /></ContentPage>;
}