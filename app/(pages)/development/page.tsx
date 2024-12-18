"use client";
import { IntermediatePage } from "@/app/components";

export default function Page() {
    return <IntermediatePage backgroundImage={{
        url: "development.jpg",
        video: false,
        offset: "-translate-y-32"
    }} />
}