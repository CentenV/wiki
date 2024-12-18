"use client";
import { IntermediatePage } from "@/app/components";
import { usePathname } from "next/navigation"

export default function Page() {
    const pathname = usePathname();
    return <IntermediatePage pageUrl={pathname} backgroundImage={{
        url: "development.jpg",
        video: false,
        offset: "-translate-y-32"
    }} />
}