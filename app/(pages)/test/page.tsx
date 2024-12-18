"use client";
import { ContentPage } from "@/app/components";
import Content from "./content.mdx";

export default function Page() {
    return <ContentPage pageName={"test"}><Content /></ContentPage>;
}