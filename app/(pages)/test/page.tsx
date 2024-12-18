"use client";
import { ContentPage } from "@/app/components";
import Content from "./content.mdx";
import { usePathname } from "next/navigation";

export default function Page() {
    const url = usePathname();
    return <ContentPage pageName={"test"}><Content /></ContentPage>;
}